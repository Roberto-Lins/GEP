// Anticolisão (manobra evasiva): dado um contato em rota de aproximação, achar o
// novo RUMO (mantendo a velocidade) ou a nova VELOCIDADE (mantendo o rumo) que
// garante uma PMA (CPA) mínima desejada.
//
// Geometria (placa de manobra): o contato ocupa o ponto M (marcação/distância
// atuais). Para a PMA ser ≥ d, a reta do movimento relativo por M precisa ser
// TANGENTE ao círculo de segurança (raio d) centrado no navio (origem). De um
// ponto externo saem duas tangentes ⇒ duas novas DMR possíveis. Para cada DMR,
// o vértice `m` do triângulo de velocidades é fixo (não mudamos o contato); o
// novo `r` (nosso vetor) sai de:
//   • manter velocidade: |tm − s·û| = Vp  (reta ∩ círculo, como solveStation);
//   • manter rumo:        v·ê + s·û = tm   (sistema linear 2×2).
import type { Bearing, Knots, PolarPlot, TrueVector, Vec2, Yards } from './types';
import type { Bordo } from './wind';
import {
  bearingToVec,
  dot,
  footOfPerpendicular,
  magnitude,
  norm360,
  normalize,
  scale,
  sub,
  tangentsFromPoint,
  vecToBearing,
} from './geometry';

const ORIGEM: Vec2 = { x: 0, y: 0 };
const EPS = 1e-6;

export interface AnticolisaoInput {
  own: TrueVector;
  /** Rumo e velocidade VERDADEIROS do contato (ex.: saída da aba Contato). */
  contato: TrueVector;
  /** Marcação e distância ATUAIS do contato (jardas). */
  posicaoContato: PolarPlot;
  /** PMA mínima desejada (jardas). */
  pmaDesejada: Yards;
}

export interface ManobraEvasiva {
  tipo: 'rumo' | 'velocidade';
  novoRumo: Bearing;
  novaVelocidade: Knots;
  /** Variação de rumo com sinal (+ = para boreste); só em manobras de rumo. */
  mudancaRumo?: number;
  bordo?: Bordo;
  /** Nova velocidade do movimento relativo (nós). */
  vmr: Knots;
  /** Lado por onde o contato passa, relativo à proa após a manobra. */
  lado: 'proa' | 'popa';
  /** PMA resultante recalculada (≈ pmaDesejada). */
  pmaResultante: Yards;
}

export interface AnticolisaoResultado {
  /** Há risco real (PMA atual < desejada e o contato ainda não passou). */
  necessaria: boolean;
  pmaAtual: Yards;
  marcacaoPmaAtual: Bearing;
  dmrAtual: Bearing;
  vmrAtual: Knots;
  /** O contato já passou pelo PMA (está se afastando). */
  jaPassou: boolean;
  /** É possível garantir a PMA desejada manobrando agora. */
  possivel: boolean;
  /** Motivo quando `possivel` é falso. */
  motivo?: string;
  manobras: ManobraEvasiva[];
}

/** PMA (perpendicular da origem à reta do movimento relativo por M). */
function pmaDaReta(M: Vec2, rm: Vec2): { ponto: Vec2; dist: Yards; tAlong: number } {
  const u = normalize(rm);
  const ponto = footOfPerpendicular(ORIGEM, M, u);
  return { ponto, dist: magnitude(ponto), tAlong: dot(sub(ponto, M), u) };
}

/** Variação de rumo com sinal em (−180, 180]; + = boreste. */
function deltaRumo(de: Bearing, para: Bearing): number {
  return ((para - de + 540) % 360) - 180;
}

/** Lado (proa/popa) por onde o contato passa, a partir da marcação do PMA e da proa. */
function ladoPassagem(pontoPma: Vec2, proa: Bearing): 'proa' | 'popa' {
  const rel = norm360(vecToBearing(pontoPma).bearing - proa);
  return rel < 90 || rel > 270 ? 'proa' : 'popa';
}

export function solveAnticolisao(input: AnticolisaoInput): AnticolisaoResultado {
  const { own, contato, posicaoContato: pos, pmaDesejada: d } = input;
  for (const n of [own.course, own.speed, contato.course, contato.speed, pos.bearing, pos.range, d]) {
    if (!Number.isFinite(n)) throw new Error('Entradas numéricas inválidas.');
  }
  if (!(d > 0)) throw new Error('A PMA mínima desejada deve ser positiva.');

  const tr = bearingToVec(own.course, own.speed);
  const tm = bearingToVec(contato.course, contato.speed);
  const M = bearingToVec(pos.bearing, pos.range);
  const rm = sub(tm, tr);

  const drm = vecToBearing(rm);
  const atual = pmaDaReta(M, rm);

  const base: Omit<AnticolisaoResultado, 'possivel' | 'motivo' | 'manobras'> = {
    necessaria: atual.dist < d - EPS && atual.tAlong >= 0,
    pmaAtual: atual.dist,
    marcacaoPmaAtual: vecToBearing(atual.ponto).bearing,
    dmrAtual: drm.bearing,
    vmrAtual: drm.magnitude,
    jaPassou: atual.tAlong < 0,
  };

  // Sem movimento relativo: distância constante; manobra-padrão não se aplica.
  if (drm.magnitude < EPS) {
    return { ...base, possivel: pos.range >= d, motivo: 'Movimento relativo nulo (mesmo rumo e velocidade do navio) — a distância permanece constante.', manobras: [] };
  }
  // Já se afastando: o PMA ficou para trás, não há manobra a fazer.
  if (base.jaPassou || !base.necessaria) {
    return { ...base, possivel: true, manobras: [] };
  }
  // Contato já dentro do círculo de segurança: impossível garantir a PMA desejada seguindo em frente.
  if (pos.range <= d + EPS) {
    return { ...base, possivel: false, motivo: 'O contato já está dentro (ou sobre) a distância mínima desejada — não há manobra que a garanta avançando.', manobras: [] };
  }

  const tangentes = tangentsFromPoint(ORIGEM, d, M); // duas DMR possíveis
  const manobras: ManobraEvasiva[] = [];
  const ehat = bearingToVec(own.course, 1); // direção do rumo atual (manter rumo)

  for (const { dir: u } of tangentes) {
    // Recalcula a PMA de fato obtida com cada nova DMR (honestidade + autoverificação).
    const pmaDe = (novoTr: Vec2): { lado: 'proa' | 'popa'; dist: Yards; proa: Bearing } => {
      const proa = vecToBearing(novoTr).bearing;
      const reta = pmaDaReta(M, sub(tm, novoTr));
      return { lado: ladoPassagem(reta.ponto, proa), dist: reta.dist, proa };
    };

    // (1) Manter velocidade, mudar rumo: |tm − s·û| = Vp.
    const Vp = own.speed;
    const tmU = dot(tm, u);
    const disc = tmU * tmU - (dot(tm, tm) - Vp * Vp);
    if (disc >= -EPS) {
      const raiz = disc <= EPS ? 0 : Math.sqrt(disc);
      for (const s of raiz === 0 ? [tmU] : [tmU - raiz, tmU + raiz]) {
        if (s <= EPS) continue; // VMR precisa ser positiva (contato avança ao longo de +û)
        const novoTr = sub(tm, scale(u, s));
        const info = pmaDe(novoTr);
        const novoRumo = info.proa;
        manobras.push({
          tipo: 'rumo',
          novoRumo,
          novaVelocidade: own.speed,
          mudancaRumo: deltaRumo(own.course, novoRumo),
          bordo: deltaRumo(own.course, novoRumo) >= 0 ? 'BE' : 'BB',
          vmr: s,
          lado: info.lado,
          pmaResultante: info.dist,
        });
      }
    }

    // (2) Manter rumo, mudar velocidade: v·ê + s·û = tm.
    const det = ehat.x * u.y - u.x * ehat.y;
    if (Math.abs(det) > EPS) {
      const v = (tm.x * u.y - u.x * tm.y) / det;
      const s = (ehat.x * tm.y - tm.x * ehat.y) / det;
      if (v >= -EPS && s > EPS) {
        const novoTr = scale(ehat, Math.max(v, 0));
        const info = pmaDe(novoTr);
        manobras.push({
          tipo: 'velocidade',
          novoRumo: own.course,
          novaVelocidade: Math.max(v, 0),
          vmr: s,
          lado: info.lado,
          pmaResultante: info.dist,
        });
      }
    }
  }

  // Ordena: manobras de rumo primeiro (menor mudança), depois velocidade.
  manobras.sort((a, b) => {
    if (a.tipo !== b.tipo) return a.tipo === 'rumo' ? -1 : 1;
    if (a.tipo === 'rumo') return Math.abs(a.mudancaRumo ?? 0) - Math.abs(b.mudancaRumo ?? 0);
    return a.novaVelocidade - b.novaVelocidade;
  });

  return {
    ...base,
    possivel: manobras.length > 0,
    motivo: manobras.length === 0 ? 'Nenhuma manobra simples (só rumo ou só velocidade) garante a PMA desejada com esses parâmetros.' : undefined,
    manobras,
  };
}

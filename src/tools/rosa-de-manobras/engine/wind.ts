// Vento: real ⇄ aparente. Convenção validada com a UE5 Aula 3 (060°/10kt; anem. 090°BE/14kt → real 185°/17kt).
// "Direção do vento" = marcação DE ONDE o vento sopra (convenção meteorológica/náutica).
import type { Bearing, Knots, TrueVector, Vec2 } from './types';
import { add, bearingToVec, norm360, reciprocal, sub, toRad, vecToBearing } from './geometry';

export type Bordo = 'BB' | 'BE'; // bombordo (port) / boreste (starboard)

export interface VentoRelativo {
  /** 'relativo' = medido pelo anemômetro (ângulo do bordo); 'verdadeiro' = marcação DE ONDE sopra. */
  tipo: 'relativo' | 'verdadeiro';
  /** Se 'relativo': ângulo 0..180 a partir da proa; se 'verdadeiro': marcação 0..360. */
  direcao: number;
  /** Obrigatório quando tipo === 'relativo'. */
  bordo?: Bordo;
  intensidade: Knots;
}

export interface VentoResultado {
  /** Marcação DE ONDE sopra o vento. */
  from: Bearing;
  speed: Knots;
}

export interface VentoRealResultado extends VentoResultado {
  /** Marcação verdadeira DE ONDE sopra o vento aparente (anemômetro convertido). */
  apparentFrom: Bearing;
  /** Vetores "para onde" do triângulo do vento (para desenhar). */
  vectors: { ship: Vec2; apparentToward: Vec2; realToward: Vec2 };
}

export interface VentoAparenteResultado extends VentoResultado {
  /** Marcação relativa à proa (graus do bordo). */
  relBearing: number;
  bordo: Bordo;
}

/** Converte ângulo de bordo em marcação relativa horária a partir da proa (0..360). */
function relHorario(direcao: number, bordo: Bordo): number {
  return bordo === 'BE' ? norm360(direcao) : norm360(360 - direcao);
}

/** Marcação verdadeira DE ONDE sopra o vento aparente. */
function aparenteFrom(ship: TrueVector, rel: VentoRelativo): Bearing {
  if (rel.tipo === 'verdadeiro') return norm360(rel.direcao);
  if (!rel.bordo) throw new Error('Vento relativo exige o bordo (BB/BE).');
  return norm360(ship.course + relHorario(rel.direcao, rel.bordo));
}

/**
 * Vento REAL a partir do movimento do navio e do vento relativo (anemômetro).
 * Triângulo: vetor(real, "para onde") = vetor(aparente, "para onde") + vetor(navio).
 */
export function solveTrueWind(ship: TrueVector, rel: VentoRelativo): VentoRealResultado {
  const appFrom = aparenteFrom(ship, rel);
  const appToward = bearingToVec(reciprocal(appFrom), rel.intensidade);
  const shipVec = bearingToVec(ship.course, ship.speed);
  const realToward = add(appToward, shipVec);
  const info = vecToBearing(realToward);
  return {
    from: reciprocal(info.bearing),
    speed: info.magnitude,
    apparentFrom: appFrom,
    vectors: { ship: shipVec, apparentToward: appToward, realToward },
  };
}

/** Vento APARENTE (e sua marcação relativa) a partir do navio e do vento real. */
export function solveApparentWind(
  ship: TrueVector,
  trueWind: VentoResultado,
): VentoAparenteResultado {
  const trueToward = bearingToVec(reciprocal(trueWind.from), trueWind.speed);
  const shipVec = bearingToVec(ship.course, ship.speed);
  const appToward = sub(trueToward, shipVec);
  const info = vecToBearing(appToward);
  const from = reciprocal(info.bearing);
  const relClock = norm360(from - ship.course);
  const bordo: Bordo = relClock <= 180 ? 'BE' : 'BB';
  const relBearing = bordo === 'BE' ? relClock : 360 - relClock;
  return { from, speed: info.magnitude, relBearing, bordo };
}

// ── Lançamento de aeronaves / vento no convés (problema inverso) ──────────────

export interface VentoConvesDesejado {
  /** Ângulo 0..180 a partir da proa (marcação relativa). */
  angle: number;
  bordo: Bordo;
  /** Intensidade desejada do vento sobre o convés (nós). */
  speed: Knots;
}

export interface ConvesSolution {
  course: Bearing;
  speed: Knots;
}

export interface ConvesResultado {
  feasible: boolean;
  /** 0 = vento real não alcança a linha de proa (sem solução); pode haver 1 ou 2. */
  solutions: ConvesSolution[];
}

/**
 * Calcula RUMO e VELOCIDADE do navio para produzir o vento desejado sobre o convés.
 * Triângulo: Vr(para onde) = Vnavio(para onde) + Vaparente(para onde), com o aparente em
 * marcação relativa fixa α. Resolve |P| = Vr ⇒ Vn = Wd·cosα ± √(Vr² − Wd²·sin²α);
 * Rn = recíproca(direção do vento real) − marcação(P).
 * Validado: vento real 315°/10, convés 30kt@10°BB → 347°/21kt; e o caso "sem solução".
 */
export function solveDeckLaunch(
  trueWind: VentoResultado,
  desired: VentoConvesDesejado,
): ConvesResultado {
  if (!(desired.angle >= 0 && desired.angle <= 180)) {
    throw new Error('Ângulo do convés deve estar entre 0° e 180° (use o bordo para o lado).');
  }
  if (!Number.isFinite(trueWind.speed) || !Number.isFinite(desired.speed)) {
    throw new Error('Intensidades inválidas.');
  }
  const alpha = relHorario(desired.angle, desired.bordo);
  const ar = toRad(alpha);
  const Vr = trueWind.speed;
  const Wd = desired.speed;
  const disc = Vr * Vr - Wd * Wd * Math.sin(ar) * Math.sin(ar);
  // Epsilon escalado: trata tangência (disc≈0) como solução única, evitando duplicar por ruído.
  const eps = 1e-9 * (1 + Vr * Vr + Wd * Wd);
  if (disc < -eps) return { feasible: false, solutions: [] };

  const s = disc <= eps ? 0 : Math.sqrt(disc);
  const base = Wd * Math.cos(ar);
  const vns = s === 0 ? [base] : [base - s, base + s];
  const recipFrom = reciprocal(trueWind.from);

  const solutions = vns
    .filter((Vn) => Vn > 1e-6)
    .map((Vn) => {
      const P: Vec2 = { x: -Wd * Math.sin(ar), y: Vn - Wd * Math.cos(ar) };
      return { course: norm360(recipFrom - vecToBearing(P).bearing), speed: Vn };
    })
    .sort((a, b) => a.speed - b.speed);

  return { feasible: solutions.length > 0, solutions };
}

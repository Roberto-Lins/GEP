// Parseia arquivos de questões em blocos. O objetivo aqui é CONTAR e capturar o
// enunciado bruto de cada questão (a estruturação fina é feita pelo Claude Code
// ao instalar o curso). Detecta gabarito quando presente.
import type {
  QuestaoBase,
  DificuldadeQuestao,
  TipoQuestao,
} from '@tipos/course-kit';

const NUMERADA = /^\s*(?:qq?uest[aã]o\s*)?\d+\s*[.)\-–]\s+/i;
const GABARITO = /^\s*(?:gabarito|resposta|resp\.?|alternativa\s+correta)\s*[:\-]\s*(.+)$/i;

interface ParseInput {
  texto: string;
  tipo: TipoQuestao;
  dificuldade: DificuldadeQuestao;
  cursoSlug: string;
}

export function parseQuestions({ texto, tipo, dificuldade, cursoSlug }: ParseInput): QuestaoBase[] {
  const trimmed = texto.trim();
  if (!trimmed) return [];

  const linhas = trimmed.split(/\r?\n/);
  const temNumeradas = linhas.some((l) => NUMERADA.test(l));

  // Formato de campos do guia (Enunciado:/Gabarito:/…): separa por bloco e extrai limpo.
  if (linhas.some((l) => ENUNCIADO.test(l))) {
    return parsePorCampos(linhas, { tipo, dificuldade, cursoSlug });
  }

  // V/F sem numeração: cada linha não vazia é uma afirmativa.
  const blocos =
    tipo === 'vf' && !temNumeradas
      ? linhas.map((l) => l.trim()).filter(Boolean)
      : dividirEmBlocos(linhas, temNumeradas);

  return blocos.map((bloco, i) => montarQuestao(bloco, i, { tipo, dificuldade, cursoSlug }));
}

const ENUNCIADO = /^\s*enunciado\s*[:\-]\s*(.*)$/i;
const ID_LINE = /^\s*id\s*[:\-]/i;
const CAMPO_Q = /^\s*[A-Za-zÀ-ÿ][^:]{0,40}:\s/;

/** Lê o modelo de questão do guia: blocos delimitados por `ID:` (ou `Enunciado:`),
 *  capturando só o enunciado real e o gabarito. */
function parsePorCampos(
  linhas: string[],
  ctx: { tipo: TipoQuestao; dificuldade: DificuldadeQuestao; cursoSlug: string },
): QuestaoBase[] {
  const temId = linhas.some((l) => ID_LINE.test(l));
  const limite = temId ? ID_LINE : ENUNCIADO;
  const blocos: string[][] = [];
  let buffer: string[] = [];
  for (const linha of linhas) {
    if (limite.test(linha) && buffer.length) { blocos.push(buffer); buffer = []; }
    buffer.push(linha);
  }
  if (buffer.length) blocos.push(buffer);

  return blocos
    .map((bloco, i) => {
      let enunciado = '';
      let gabarito: string | undefined;
      let capturando = false;
      for (const linha of bloco) {
        const e = linha.match(ENUNCIADO);
        const g = linha.match(GABARITO);
        if (e) { enunciado = e[1].trim(); capturando = true; continue; }
        if (g) { gabarito = g[1].trim(); capturando = false; continue; }
        if (capturando) {
          if (CAMPO_Q.test(linha)) capturando = false; // próximo campo encerra o enunciado
          else if (linha.trim()) enunciado += (enunciado ? ' ' : '') + linha.trim();
        }
      }
      return {
        id: `${ctx.cursoSlug || 'curso'}-${ctx.dificuldade}-${ctx.tipo}-${i + 1}`,
        cursoSlug: ctx.cursoSlug,
        dificuldade: ctx.dificuldade,
        tipo: ctx.tipo,
        enunciado: enunciado || bloco.join('\n').trim(),
        gabarito,
      };
    })
    .filter((q) => q.enunciado);
}

function dividirEmBlocos(linhas: string[], temNumeradas: boolean): string[] {
  if (temNumeradas) {
    const blocos: string[] = [];
    let buffer: string[] = [];
    const flush = () => {
      const txt = buffer.join('\n').trim();
      if (txt) blocos.push(txt);
      buffer = [];
    };
    for (const linha of linhas) {
      if (NUMERADA.test(linha) && buffer.length) flush();
      buffer.push(linha);
    }
    flush();
    return blocos;
  }
  // Sem numeração: separa por linha(s) em branco.
  return linhas
    .join('\n')
    .split(/\n\s*\n/)
    .map((b) => b.trim())
    .filter(Boolean);
}

function montarQuestao(
  bloco: string,
  i: number,
  ctx: { tipo: TipoQuestao; dificuldade: DificuldadeQuestao; cursoSlug: string },
): QuestaoBase {
  let gabarito: string | undefined;
  const linhas = bloco.split(/\r?\n/);
  const corpo: string[] = [];
  for (const linha of linhas) {
    const m = linha.match(GABARITO);
    if (m) gabarito = m[1].trim();
    else corpo.push(linha);
  }
  return {
    id: `${ctx.cursoSlug || 'curso'}-${ctx.dificuldade}-${ctx.tipo}-${i + 1}`,
    cursoSlug: ctx.cursoSlug,
    dificuldade: ctx.dificuldade,
    tipo: ctx.tipo,
    enunciado: corpo.join('\n').replace(NUMERADA, '').trim() || bloco.trim(),
    gabarito,
  };
}

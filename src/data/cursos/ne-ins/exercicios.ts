import banco from './question-bank.json';
import type { GrupoCorrelacione, Questao, QuestaoDiscursiva, QuestaoMultipla, QuestaoVF } from '@tipos/question';

export type { Questao } from '@tipos/question';

// Banco canônico único do curso ne-ins, gerado por scripts/autoria/ne-ins/build.py.
// NE-P25-Qnn = prova de 2025 (fiel, gabarito oficial); NE-Mxx-nnn = inéditas.
interface QuestaoBanco {
  id: string;
  tipo: 'multipla';
  topico: string;
  modulo: string;
  dificuldade: 'facil' | 'medio' | 'dificil';
  enunciado: string;
  alternativas: string[];
  correta: number;
  comentario: string;
  conceptIds: string[];
  origem: string;
  fonte: string;
  armadilha?: string;
  questaoOriginal?: string;
}

interface SimuladoBanco {
  id: string;
  titulo: string;
  descricao: string;
  duracaoMinutos: number;
  questoes: string[];
}

const questoesBanco = banco.questoes as QuestaoBanco[];
const simuladosBanco = banco.simulados as SimuladoBanco[];

function converter(q: QuestaoBanco): QuestaoMultipla {
  return {
    id: q.id,
    tipo: 'multipla',
    topico: q.topico,
    dificuldade: q.dificuldade,
    enunciado: q.enunciado,
    alternativas: q.alternativas,
    correta: q.correta,
    comentario: q.comentario,
    fonte: q.fonte,
    armadilha: q.armadilha,
    conceptIds: q.conceptIds,
    origem: q.id.startsWith('NE-P25') ? 'sopa_oficial' : 'autoral_suporte',
    ...(q.id.startsWith('NE-P25') ? { arquivo: 'N.E. Exam.pdf', ano: 2025, questaoOriginal: q.questaoOriginal } : {}),
  };
}

export const multiplaEscolha: QuestaoMultipla[] = questoesBanco.map(converter);
export const verdadeiroFalso: QuestaoVF[] = [];
export const correlacionar: GrupoCorrelacione[] = [];
export const discursivas: QuestaoDiscursiva[] = [];
export const todasQuestoes: Questao[] = [...multiplaEscolha];

const porId = new Map(multiplaEscolha.map((q) => [q.id, q]));

export const simuladosCompletos = simuladosBanco.map((s) => ({
  id: s.id,
  titulo: s.titulo,
  descricao: s.descricao,
  duracaoMinutos: s.duracaoMinutos,
  pontos: 30,
  itens: s.questoes.length,
  questoes: s.questoes.map((id) => {
    const q = porId.get(id);
    if (!q) throw new Error('Questão de simulado inexistente: ' + id);
    return q;
  }),
}));

/** Revisão final usa a prova de 2025 integral. */
export const simuladoFinal: Questao[] = simuladosCompletos[0].questoes;

export function questoesPorTopico(slug: string): Questao[] {
  if (slug === '00-mapa-da-prova-e-prova-2025') return simuladosCompletos[0].questoes;
  return todasQuestoes.filter((q) => q.topico === slug);
}

export const totalQuestoes = {
  multipla: multiplaEscolha.length,
  vf: 0,
  correlacione: 0,
  discursiva: 0,
};

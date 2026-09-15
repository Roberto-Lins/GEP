import type { QuestaoMultipla, QuestaoVF, GrupoCorrelacione, Questao, QuestaoDiscursiva } from '@tipos/question';
export type { Questao } from '@tipos/question';
import { questoesCanonicas, simuladosCanonicos } from '../_familias/dir-t2/questoes';
import matriz from '../_familias/dir-t2/matriz-cobertura.json';
import { questoesDaModalidade } from '@utils/study-mode-questions';
const modalidade = 'pra-safar' as const;
const conceitosEnsinados = new Set(matriz.conceitos.filter((c) => c.presenca[modalidade]).map((c) => c.concept_id));
export const todasQuestoes: Questao[] = questoesDaModalidade(questoesCanonicas, modalidade, conceitosEnsinados);
export const multiplaEscolha = todasQuestoes.filter((q): q is QuestaoMultipla => q.tipo === 'multipla');
export const verdadeiroFalso = todasQuestoes.filter((q): q is QuestaoVF => q.tipo === 'vf');
export const correlacionar = todasQuestoes.filter((q): q is GrupoCorrelacione => q.tipo === 'correlacione');
export const discursivas = todasQuestoes.filter((q): q is QuestaoDiscursiva => q.tipo === 'discursiva');
export function questoesPorTopico(slug: string): Questao[] { return todasQuestoes.filter((q) => q.topico === slug); }
export const totalQuestoes = { multipla: multiplaEscolha.length, vf: verdadeiroFalso.length, correlacione: correlacionar.length, discursiva: discursivas.length };
/** Simulados próprios: questões inéditas fora do banco de módulos, filtradas pelo que esta modalidade ensina. */
export const simuladosCompletos = simuladosCanonicos.map((simulado) => ({
  ...simulado,
  questoes: questoesDaModalidade(simulado.questoes, modalidade, conceitosEnsinados),
}));

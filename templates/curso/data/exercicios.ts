// Banco de questões do curso. Cada questão tem `topico` (slug da timeline).
import type { QuestaoMultipla, QuestaoVF, GrupoCorrelacione, Questao } from '@tipos/question';
export type { Questao } from '@tipos/question';

export const multiplaEscolha: QuestaoMultipla[] = [];
export const verdadeiroFalso: QuestaoVF[] = [];
export const correlacionar: GrupoCorrelacione[] = [];

export const todasQuestoes: Questao[] = [...multiplaEscolha, ...verdadeiroFalso, ...correlacionar];

export function questoesPorTopico(slug: string): Questao[] {
  return todasQuestoes.filter((q) => q.topico === slug);
}

export const totalQuestoes = {
  multipla: multiplaEscolha.length,
  vf: verdadeiroFalso.length,
  correlacione: correlacionar.length,
};

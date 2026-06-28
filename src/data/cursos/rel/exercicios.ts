// Banco de questões do curso REL (Relações Internacionais — P1).
//
// ⚠️ A SER ADICIONADO POSTERIORMENTE. Nesta etapa, o curso entra com a estrutura
// técnica do banco preparada, mas SEM questões: a disciplina é subjetiva e o banco
// (questões de aplicação geopolítica + discursivas no estilo da prova) será montado
// num segundo momento. Todos os exports abaixo são válidos e tipados — as páginas
// /rel/questoes e a revisão final lidam com bancos vazios sem quebrar (mostram um
// aviso "em breve"). Para popular: siga o padrão de src/data/cursos/dir/exercicios.ts
// (multiplaEscolha, verdadeiroFalso, correlacionar e, se desejado, discursivas),
// mantendo cada questão com o campo `topico` igual ao slug da mini-matéria.
import type {
  Questao,
  QuestaoMultipla,
  QuestaoVF,
  GrupoCorrelacione,
  QuestaoDiscursiva,
} from '@tipos/question';

export const multiplaEscolha: QuestaoMultipla[] = [];
export const verdadeiroFalso: QuestaoVF[] = [];
export const correlacionar: GrupoCorrelacione[] = [];
export const discursivas: QuestaoDiscursiva[] = [];

export const todasQuestoes: Questao[] = [
  ...multiplaEscolha,
  ...verdadeiroFalso,
  ...correlacionar,
  ...discursivas,
];

export const totalQuestoes = {
  multipla: multiplaEscolha.length,
  vf: verdadeiroFalso.length,
  correlacione: correlacionar.length,
  discursiva: discursivas.length,
};

/** Questões de uma mini-matéria (por enquanto, sempre vazio). */
export function questoesPorTopico(slug: string): Questao[] {
  return todasQuestoes.filter((q) => q.topico === slug);
}

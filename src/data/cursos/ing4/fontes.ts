// Fontes/bibliografia do curso ING-4. `arquivo` aponta para /public (download opcional).
// O StudentBook (American English File 4) é pesado (~48 MB) e por isso é referenciado
// como fonte, não versionado no repo.
import type { Fonte } from '@tipos/media';
export type { Fonte } from '@tipos/media';

export const fontes: Fonte[] = [
  {
    titulo: 'OXFORD — American English File 4 (3rd edition) — Student Book',
    tipo: 'livro',
    descricao: 'Livro-base da matéria. Vocabulary de Crime and punishment (p.160), Grammar Bank de have something done (p.146) e reporting verbs (p.147), clauses of contrast e of purpose (p.148) e o modelo de Writing — Expressing your opinion (p.120).',
    topicos: [
      '02-crime-and-punishment', '03-have-something-done', '04-reporting-verbs',
      '05-clauses-of-contrast', '06-clauses-of-purpose', '07-expressing-your-opinion',
    ],
  },
  {
    titulo: 'ING-4 — PP1 Review (material de revisão da professora)',
    tipo: 'resumo',
    descricao: 'Material de revisão integrada da PP1, com os pontos que a professora destacou para a prova.',
    arquivo: '/arquivos/cursos/ing4/ing-4-pp1-review.pdf',
    topicos: ['00-introducao-e-revisao-geral', '99-revisao-final'],
  },
  {
    titulo: 'AEF — Whatever 2025 (aula com gabarito)',
    tipo: 'prova',
    descricao: 'Atividade de aula sobre os compostos com -ever, já com as respostas.',
    arquivo: '/arquivos/cursos/ing4/aef-whatever-2025-with-answers.pdf',
    topicos: ['01-whatever-whenever-etc'],
  },
  {
    titulo: 'Exercícios complementares da PP1',
    tipo: 'prova',
    descricao: 'Lista complementar de exercícios usada como base para o banco de questões do curso.',
    arquivo: '/arquivos/cursos/ing4/exercicios-pp1.pdf',
    topicos: ['99-revisao-final'],
  },
  {
    titulo: 'Linha do tempo / study guide da PP1 (professora)',
    tipo: 'observacao',
    descricao: 'Guia que organiza a matéria em mini-matérias e define a sequência e a ordem de prioridade de estudo. Base da timeline deste curso.',
    topicos: ['00-introducao-e-revisao-geral'],
  },
];

export function fontesPorTopico(slug: string): Fonte[] {
  return fontes.filter((f) => f.topicos.includes(slug));
}

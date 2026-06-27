// Fontes/bibliografia do curso DIR. A apostila e os slides são pesados (~18 MB) e por
// isso são referenciados como fonte, não versionados no repo. Os resumos (NotebookLM e
// Claude) e a linha do tempo são o material de apoio que originou o conteúdo do curso.
import type { Fonte } from '@tipos/media';
export type { Fonte } from '@tipos/media';

const TODOS = [
  '00-introducao-ao-direito',
  '01-sociedade-moral-religiao-e-norma',
  '02-direito-subjetivo-pessoas-relacao-juridica',
  '03-fontes-divisoes-e-sistemas-do-direito',
  '04-estado-nacao-soberania-e-federacao',
  '05-governo-democracia-e-constituicao',
  '06-organizacao-do-estado-e-competencias',
  '07-tres-poderes-e-funcoes-essenciais',
  '08-direitos-fundamentais-e-ordem-economica',
  '99-revisao-final',
];

export const fontes: Fonte[] = [
  {
    titulo: 'Apostila de Direito (Revisão 2024) — Cap. 1 e Cap. 2',
    tipo: 'livro',
    descricao: 'Livro-base da matéria. Para a P1, considerada somente até o fim do Capítulo 2: Cap. 1 — Introdução ao Estudo do Direito (tópicos 00–03) e Cap. 2 — Direito Constitucional (tópicos 04–08). Onde a apostila e os slides divergem, prevalece a apostila.',
    topicos: TODOS,
  },
  {
    titulo: 'DIR — P1 — Slides de aula',
    tipo: 'slide',
    descricao: 'Slides do professor. Acrescentam à apostila a jurisprudência viva (STF e Súmulas Vinculantes), distinções finas (igualdade formal × material, objeto imediato × mediato, Kelsen) e âncoras na vida militar/Marinha — exatamente os pontos que mais tendem a cair.',
    topicos: TODOS,
  },
  {
    titulo: 'Resumos por tópico (Claude) — Direito P1',
    tipo: 'resumo',
    descricao: 'Resumos profundos por tópico (visão geral, conceitos essenciais, raciocínio jurídico, estudos de caso, pegadinhas e síntese). Base direta do conteúdo de cada mini-matéria deste curso.',
    topicos: TODOS,
  },
  {
    titulo: 'Resumos e áudios-debate por tópico (NotebookLM)',
    tipo: 'resumo',
    descricao: 'Materiais gerados no NotebookLM a partir da apostila, dos slides e da linha do tempo: um resumo e um áudio-debate por tópico, usados para aprofundar exemplos e comparações.',
    topicos: TODOS,
  },
  {
    titulo: 'Plano de Cobrança do Professor — Direito P1',
    tipo: 'observacao',
    descricao: 'Mapeia COMO o professor apresenta e cobra a matéria (diferença slide × apostila), a tipologia das cinco formas de questão e as ênfases por tópico. Orientou a montagem das pegadinhas, dos casos e do banco de questões.',
    topicos: TODOS,
  },
  {
    titulo: 'Linha do Tempo — Direito P1',
    tipo: 'observacao',
    descricao: 'Roteiro de estudo que organiza a matéria em tópicos e define a sequência (Bloco I — Introdução ao Direito; Bloco II — Direito Constitucional). Base da timeline deste curso.',
    topicos: ['00-introducao-ao-direito', '99-revisao-final'],
  },
];

export function fontesPorTopico(slug: string): Fonte[] {
  return fontes.filter((f) => f.topicos.includes(slug));
}

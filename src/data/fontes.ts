// Fontes originais usadas na construção do material.
// Os arquivos ficam em /public/arquivos e podem ser baixados pelo aluno.

export interface Fonte {
  titulo: string;
  tipo: 'livro' | 'slide' | 'resumo' | 'prova' | 'observacao';
  descricao: string;
  arquivo?: string; // caminho em /public (se disponível para download)
  topicos: string[]; // slugs relacionados
}

export const fontes: Fonte[] = [
  {
    titulo: 'Conteúdo do Teste Periódico 1',
    tipo: 'prova',
    descricao: 'Documento-base com todo o conteúdo cobrado na GEP P1. É a fonte primária da trilha.',
    arquivo: '/arquivos/provas/teste-periodico-1-conteudo.pdf',
    topicos: [
      '00-ideia-central-da-prova', '01-estado-governo-administracao-governanca',
      '02-weber-e-burocracia', '03-patrimonialismo-e-disfuncoes-burocraticas',
      '04-organizacoes-mecanicistas-e-organicas', '05-modelos-de-administracao-publica',
      '06-reformas-administrativas-no-brasil', '07-pdrae-e-reforma-de-1995',
      '08-ppa-ldo-loa-e-despesa-publica',
    ],
  },
  {
    titulo: 'Resumo geral (exaustivo)',
    tipo: 'resumo',
    descricao: 'Resumo detalhado, tópico a tópico, que serviu de espinha dorsal das aulas do site.',
    arquivo: '/arquivos/resumos/resumo-geral.docx',
    topicos: [],
  },
  {
    titulo: 'EMA — Capítulo 4 (Governança)',
    tipo: 'livro',
    descricao: 'Capítulo do Estado-Maior da Armada sobre o Sistema de Governança da Marinha do Brasil.',
    arquivo: '/arquivos/livros/ema-capitulo-4.pdf',
    topicos: ['10-sistema-de-governanca-da-mb'],
  },
  {
    titulo: 'Livro — Capítulo 10',
    tipo: 'livro',
    descricao: 'Capítulo de referência sobre administração estratégica e orçamento público.',
    arquivo: '/arquivos/livros/livro-capitulo-10.pdf',
    topicos: ['08-ppa-ldo-loa-e-despesa-publica'],
  },
  {
    titulo: 'Orçamento de Defesa',
    tipo: 'livro',
    descricao: 'Texto sobre economia da defesa, indústria de defesa e o desafio orçamentário brasileiro.',
    arquivo: '/arquivos/livros/orcamento-de-defesa.pdf',
    topicos: ['09-orcamento-de-defesa'],
  },
  {
    titulo: 'Naval Governance and Defense Economics (slides)',
    tipo: 'slide',
    descricao: 'Apresentação de apoio sobre governança naval e economia de defesa.',
    arquivo: '/arquivos/slides/naval-governance-defense-economics.pptx',
    topicos: ['09-orcamento-de-defesa', '10-sistema-de-governanca-da-mb'],
  },
];

export const fontesPorTopico = (slug: string) =>
  fontes.filter((f) => f.topicos.length === 0 || f.topicos.includes(slug));

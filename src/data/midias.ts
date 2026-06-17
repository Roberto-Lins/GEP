// Mapeia mídias (vídeos, podcasts, mapas mentais) às mini matérias.
// Os arquivos vivem em /public e são servidos estaticamente.
// Para adicionar uma mídia: copie o arquivo para a pasta correspondente em public/
// e registre aqui o item com o `topico` (slug da timeline).

export type TipoMidia = 'video' | 'podcast' | 'mapa';

export interface Midia {
  tipo: TipoMidia;
  topico: string;
  titulo: string;
  fonte: string; // origem (NotebookLM, YouTube, Senado...)
  src: string; // caminho em /public
  descricao?: string;
  thumb?: string;
}

export const midias: Midia[] = [
  // ---- Vídeos ----
  {
    tipo: 'video', topico: '00-ideia-central-da-prova',
    titulo: 'Visão geral da Administração Pública',
    fonte: 'NotebookLM',
    src: '/videos/notebooklm/00-visao-geral-video.mp4',
    descricao: 'Panorama em vídeo que costura os grandes temas da prova: do Estado aos modelos de gestão.',
  },

  // ---- Podcasts (áudios NotebookLM) ----
  {
    tipo: 'podcast', topico: '01-estado-governo-administracao-governanca',
    titulo: 'Diferenças entre Estado, Governo e Administração Pública',
    fonte: 'NotebookLM',
    src: '/podcasts/notebooklm/01-estado-governo-podcast.m4a',
    descricao: 'Conversa que destrincha os quatro conceitos-base e a estrutura da Administração.',
  },
  {
    tipo: 'podcast', topico: '02-weber-e-burocracia',
    titulo: 'Weber, burocracia e o combate ao patrimonialismo',
    fonte: 'NotebookLM',
    src: '/podcasts/notebooklm/02-weber-podcast.m4a',
    descricao: 'Dominação racional-legal e o tipo ideal de burocracia explicados em diálogo.',
  },
  {
    tipo: 'podcast', topico: '03-patrimonialismo-e-disfuncoes-burocraticas',
    titulo: 'Patrimonialismo e as disfunções da burocracia',
    fonte: 'NotebookLM',
    src: '/podcasts/notebooklm/03-patrimonialismo-podcast.m4a',
    descricao: 'Merton, Perrow e Roth: o que acontece quando a burocracia adoece.',
  },
  {
    tipo: 'podcast', topico: '05-modelos-de-administracao-publica',
    titulo: 'Do patrimonialismo à gestão por resultados',
    fonte: 'NotebookLM',
    src: '/podcasts/notebooklm/05-modelos-podcast.m4a',
    descricao: 'A trajetória dos três modelos de Administração Pública em formato de podcast.',
  },
  {
    tipo: 'podcast', topico: '10-sistema-de-governanca-da-mb',
    titulo: 'Governança e Gestão Estratégica na Marinha',
    fonte: 'NotebookLM',
    src: '/podcasts/notebooklm/10-governanca-mb-podcast.m4a',
    descricao: 'Como o Sistema de Governança da MB aplica os conceitos da prova na prática.',
  },

  // ---- Vídeos extras: série "Orçamento Fácil" (Senado Federal) — tópico 08 ----
  {
    tipo: 'video', topico: '08-ppa-ldo-loa-e-despesa-publica',
    titulo: 'Orçamento Fácil — A série de animação do Senado',
    fonte: 'Senado Federal (YouTube)',
    src: '/videos/youtube/orcamento-01.webm',
    descricao: 'Abertura da série que explica o orçamento público de forma simples.',
  },
  {
    tipo: 'video', topico: '08-ppa-ldo-loa-e-despesa-publica',
    titulo: 'Orçamento Fácil — Importância do orçamento e tributos',
    fonte: 'Senado Federal (YouTube)',
    src: '/videos/youtube/orcamento-02.webm',
    descricao: 'Por que o orçamento importa; impostos, taxas e contribuições.',
  },
  {
    tipo: 'video', topico: '08-ppa-ldo-loa-e-despesa-publica',
    titulo: 'Orçamento Fácil — Sistema orçamentário: PPA, LDO e LOA',
    fonte: 'Senado Federal (YouTube)',
    src: '/videos/youtube/orcamento-03.webm',
    descricao: 'As três leis orçamentárias e como se encaixam.',
  },
  {
    tipo: 'video', topico: '08-ppa-ldo-loa-e-despesa-publica',
    titulo: 'Orçamento Fácil — O que é o PPA (Plano Plurianual)',
    fonte: 'Senado Federal (YouTube)',
    src: '/videos/youtube/orcamento-04.webm',
    descricao: 'O instrumento de planejamento de médio prazo em detalhe.',
  },
  {
    tipo: 'video', topico: '08-ppa-ldo-loa-e-despesa-publica',
    titulo: 'Orçamento Fácil — O que é a LOA (Lei Orçamentária Anual)',
    fonte: 'Senado Federal (YouTube)',
    src: '/videos/youtube/orcamento-05.webm',
    descricao: 'Receitas e despesas orçamentárias do exercício.',
  },
  {
    tipo: 'video', topico: '08-ppa-ldo-loa-e-despesa-publica',
    titulo: 'Orçamento Fácil — O que é a LDO (Lei de Diretrizes Orçamentárias)',
    fonte: 'Senado Federal (YouTube)',
    src: '/videos/youtube/orcamento-06.webm',
    descricao: 'O elo entre planejamento e orçamento anual.',
  },
];

export function midiasPorTopico(slug: string) {
  const lista = midias.filter((m) => m.topico === slug);
  return {
    videos: lista.filter((m) => m.tipo === 'video'),
    podcasts: lista.filter((m) => m.tipo === 'podcast'),
    mapas: lista.filter((m) => m.tipo === 'mapa'),
  };
}

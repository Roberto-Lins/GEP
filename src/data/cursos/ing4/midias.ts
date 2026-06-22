// Mídias do curso ING-4, por `topico` (slug). A página da mini-matéria renderiza
// via midiasPorTopico; o vídeo geral aparece no Tópico 00.
//
// Áudios e vídeo estão versionados localmente em public/ (origem 'local').
// NOTA (docs/MEDIA-PROTOCOL.md): são arquivos pesados (~90 MB de áudio + 102 MB de
// vídeo). O ideal, ao escalar, é externalizá-los (YouTube não-listado / R2 / Bunny)
// e trocar `origem`/`src`. Por ora ficam locais para funcionarem de imediato.
import type { Midia } from '@tipos/media';
export type { Midia } from '@tipos/media';

export const midias: Midia[] = [
  // ── Tópico 00 — vídeo geral de introdução e revisão da matéria ──
  {
    tipo: 'video',
    topico: '00-introducao-e-revisao-geral',
    titulo: 'Revisão geral da PP1 de Inglês',
    fonte: 'Professora ING-4',
    src: '/videos/ing4/revisao-geral.mp4',
    origem: 'local',
    descricao: 'Vídeo-panorama de toda a matéria da PP1: grammar, vocabulary e writing em uma única revisão.',
  },

  // ── Áudios por tópico ──
  {
    tipo: 'podcast',
    topico: '01-whatever-whenever-etc',
    titulo: 'The logic of English “-ever” words',
    fonte: 'NotebookLM',
    src: '/podcasts/ing4/01-whatever-whenever-etc.m4a',
    origem: 'local',
    descricao: 'A lógica por trás de whatever/whoever/whenever/wherever/whichever/however.',
  },
  {
    tipo: 'podcast',
    topico: '02-crime-and-punishment',
    titulo: 'Why you cannot “rob” a car',
    fonte: 'NotebookLM',
    src: '/podcasts/ing4/02-crime-and-punishment.m4a',
    origem: 'local',
    descricao: 'O vocabulário de crimes e a diferença crucial entre steal e rob, theft e robbery.',
  },
  {
    tipo: 'podcast',
    topico: '03-have-something-done',
    titulo: 'The grammar of “have something done”',
    fonte: 'NotebookLM',
    src: '/podcasts/ing4/03-have-something-done.m4a',
    origem: 'local',
    descricao: 'A estrutura causativa e como expressar que outra pessoa faz um serviço para você.',
  },
  {
    tipo: 'podcast',
    topico: '04-reporting-verbs',
    titulo: 'Reporting verbs and the grammar of intent',
    fonte: 'NotebookLM',
    src: '/podcasts/ing4/04-reporting-verbs.m4a',
    origem: 'local',
    descricao: 'Como a intenção da fala define o reporting verb e a estrutura que ele exige.',
  },
  {
    tipo: 'podcast',
    topico: '05-clauses-of-contrast',
    titulo: 'How “although” and “despite” actually work',
    fonte: 'NotebookLM',
    src: '/podcasts/ing4/05-clauses-of-contrast.m4a',
    origem: 'local',
    descricao: 'A diferença estrutural entre although/even though e despite/in spite of.',
  },
  {
    tipo: 'podcast',
    topico: '06-clauses-of-purpose',
    titulo: 'The logic of English purpose clauses',
    fonte: 'NotebookLM',
    src: '/podcasts/ing4/06-clauses-of-purpose.m4a',
    origem: 'local',
    descricao: 'Quando usar to, for e so that para explicar a finalidade de uma ação.',
  },
  {
    tipo: 'podcast',
    topico: '07-expressing-your-opinion',
    titulo: 'Additive logic versus contrast in persuasion',
    fonte: 'NotebookLM',
    src: '/podcasts/ing4/07-expressing-your-opinion.m4a',
    origem: 'local',
    descricao: 'Como encadear argumentos (adição) e contrastes ao defender uma opinião por escrito.',
  },
  {
    tipo: 'podcast',
    topico: '99-revisao-final',
    titulo: 'Why natural fluency fails English exams',
    fonte: 'NotebookLM',
    src: '/podcasts/ing4/99-revisao-final.m4a',
    origem: 'local',
    descricao: 'Áudio de fechamento: por que a prova cobra precisão estrutural, não “feeling”, e como integrar tudo.',
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

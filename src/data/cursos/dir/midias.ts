// Mídias do curso DIR, por `topico` (slug). A página da mini-matéria renderiza via
// midiasPorTopico. O Tópico 00 abre com os TRÊS vídeos-panorama da matéria, na ordem
// 1 → 2 → 3 (a ordem do array é a ordem de exibição). Cada tópico tem um áudio-debate.
//
// Vídeos: YouTube (não listado), origem 'youtube'. Áudios: gerados no NotebookLM e
// versionados localmente em public/podcasts/dir/ (origem 'local', ~326 MB no total).
// NOTA (docs/MEDIA-PROTOCOL.md): ao escalar, externalizar os áudios (YouTube / R2 /
// Bunny) e trocar `origem`/`src`. `npm run audit-media` aponta os arquivos pesados.
import type { Midia } from '@tipos/media';
export type { Midia } from '@tipos/media';

export const midias: Midia[] = [
  // ── Tópico 00 — três vídeos-panorama de TODA a matéria da P1 (assista em ordem) ──
  {
    tipo: 'video',
    topico: '00-introducao-ao-direito',
    titulo: 'Direito P1 — Vídeo-aula · Parte 1 de 3',
    fonte: 'YouTube (não listado)',
    src: 'https://youtu.be/JRvBycN43yA',
    origem: 'youtube',
    descricao: 'Primeira parte do panorama em vídeo de toda a matéria da P1. Assista na ordem: 1 → 2 → 3.',
  },
  {
    tipo: 'video',
    topico: '00-introducao-ao-direito',
    titulo: 'Direito P1 — Vídeo-aula · Parte 2 de 3',
    fonte: 'YouTube (não listado)',
    src: 'https://youtu.be/SMaUTvn38M8',
    origem: 'youtube',
    descricao: 'Segunda parte do panorama em vídeo de toda a matéria da P1. Assista depois da Parte 1.',
  },
  {
    tipo: 'video',
    topico: '00-introducao-ao-direito',
    titulo: 'Direito P1 — Vídeo-aula · Parte 3 de 3',
    fonte: 'YouTube (não listado)',
    src: 'https://youtu.be/5TC7TXJ1f1s',
    origem: 'youtube',
    descricao: 'Terceira e última parte do panorama em vídeo de toda a matéria da P1.',
  },

  // ── Áudios-debate por tópico (NotebookLM) ──
  {
    tipo: 'podcast',
    topico: '00-introducao-ao-direito',
    titulo: 'O Direito é moral ou força bruta?',
    fonte: 'NotebookLM',
    src: '/podcasts/dir/00-introducao-ao-direito.m4a',
    origem: 'local',
    descricao: 'Debate de abertura: por que o Direito existe e o que o separa da pura força.',
  },
  {
    tipo: 'podcast',
    topico: '01-sociedade-moral-religiao-e-norma',
    titulo: 'O Direito deve seguir a Moral?',
    fonte: 'NotebookLM',
    src: '/podcasts/dir/01-sociedade-moral-religiao-e-norma.m4a',
    origem: 'local',
    descricao: 'A relação (e a tensão) entre Direito, Moral e Religião e as características da norma jurídica.',
  },
  {
    tipo: 'podcast',
    topico: '02-direito-subjetivo-pessoas-relacao-juridica',
    titulo: 'O duelo entre norma e vontade humana',
    fonte: 'NotebookLM',
    src: '/podcasts/dir/02-direito-subjetivo-pessoas-relacao-juridica.m4a',
    origem: 'local',
    descricao: 'Direito objetivo × subjetivo, capacidade das pessoas e a anatomia da relação jurídica.',
  },
  {
    tipo: 'podcast',
    topico: '03-fontes-divisoes-e-sistemas-do-direito',
    titulo: 'O Direito além da lei escrita',
    fonte: 'NotebookLM',
    src: '/podcasts/dir/03-fontes-divisoes-e-sistemas-do-direito.m4a',
    origem: 'local',
    descricao: 'Fontes e integração do Direito, divisões Público/Privado/Social e os sistemas jurídicos.',
  },
  {
    tipo: 'podcast',
    topico: '04-estado-nacao-soberania-e-federacao',
    titulo: 'Estado e Nação são a mesma coisa?',
    fonte: 'NotebookLM',
    src: '/podcasts/dir/04-estado-nacao-soberania-e-federacao.m4a',
    origem: 'local',
    descricao: 'Teoria Geral do Estado: Estado × Nação, soberania × autonomia e federação × confederação.',
  },
  {
    tipo: 'podcast',
    topico: '05-governo-democracia-e-constituicao',
    titulo: 'Presidencialismo não é forma de governo',
    fonte: 'NotebookLM',
    src: '/podcasts/dir/05-governo-democracia-e-constituicao.m4a',
    origem: 'local',
    descricao: 'Formas de governo × sistemas de governo, instrumentos da democracia e a Constituição.',
  },
  {
    tipo: 'podcast',
    topico: '06-organizacao-do-estado-e-competencias',
    titulo: 'O federalismo brasileiro é centralizador ou cooperativo?',
    fonte: 'NotebookLM',
    src: '/podcasts/dir/06-organizacao-do-estado-e-competencias.m4a',
    origem: 'local',
    descricao: 'Organização da República Federativa e a repartição de competências entre os entes.',
  },
  {
    tipo: 'podcast',
    topico: '07-tres-poderes-e-funcoes-essenciais',
    titulo: 'A realidade por trás dos poderes brasileiros',
    fonte: 'NotebookLM',
    src: '/podcasts/dir/07-tres-poderes-e-funcoes-essenciais.m4a',
    origem: 'local',
    descricao: 'Separação dos Poderes, funções típicas e atípicas e as funções essenciais à Justiça.',
  },
  {
    tipo: 'podcast',
    topico: '08-direitos-fundamentais-e-ordem-economica',
    titulo: 'Direitos individuais são absolutos na Constituição?',
    fonte: 'NotebookLM',
    src: '/podcasts/dir/08-direitos-fundamentais-e-ordem-economica.m4a',
    origem: 'local',
    descricao: 'Direitos fundamentais e seus limites, remédios constitucionais e a ordem econômica.',
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

// Mídias gerais reaproveitadas na revisão final: os três vídeos-panorama da matéria.
export const midiasGerais: Midia[] = midias.filter(
  (m) => m.tipo === 'video' && m.topico === '00-introducao-ao-direito',
);

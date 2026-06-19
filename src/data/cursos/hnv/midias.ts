// Mídias (vídeos, podcasts, mapas) do curso HNV, por `topico` (slug).
// É esta lista que a página da mini-matéria renderiza (via midiasPorTopico).
//
// Áudios e vídeo estão versionados localmente em public/ (origem 'local').
// NOTA (docs/MEDIA-PROTOCOL.md): são arquivos pesados (~290 MB no total). O ideal,
// antes de commitar/escalar, é externalizá-los (YouTube não-listado / R2 / Bunny)
// e trocar `origem`/`src`. Por ora ficam locais para funcionarem de imediato.
import type { Midia } from '@tipos/media';
export type { Midia } from '@tipos/media';

export const midias: Midia[] = [
  // ── Tópico 00 — vídeo e áudio gerais (sobre toda a matéria) ──
  {
    tipo: 'video',
    topico: '00-visao-geral',
    titulo: 'Evolução do Poder Marítimo',
    fonte: 'NotebookLM',
    src: '/videos/hnv/00-evolucao-do-poder-maritimo.mp4',
    origem: 'local',
    descricao: 'Vídeo-panorama de toda a matéria: do Mediterrâneo antigo ao Brasil Holandês.',
  },
  {
    tipo: 'podcast',
    topico: '00-visao-geral',
    titulo: 'O mar como fronteira dos impérios',
    fonte: 'NotebookLM',
    src: '/podcasts/hnv/00-visao-geral.m4a',
    origem: 'local',
    descricao: 'Áudio-resumo geral: o poder naval como fio condutor de economias, impérios e disputas.',
  },

  // ── Podcasts por tópico ──
  {
    tipo: 'podcast',
    topico: '01-mediterraneo-antigo-e-batalha-de-mylae',
    titulo: 'Roma aniquilou Cartago com o corvus',
    fonte: 'NotebookLM',
    src: '/podcasts/hnv/01-mediterraneo-mylae.m4a',
    origem: 'local',
    descricao: 'A Primeira Guerra Púnica, o exército cidadão e a inovação do corvus em Mylae.',
  },
  {
    tipo: 'podcast',
    topico: '02-da-galera-ao-navio-de-vela',
    titulo: 'A revolução da vela e do canhão',
    fonte: 'NotebookLM',
    src: '/podcasts/hnv/02-galera-ao-navio-de-vela.m4a',
    origem: 'local',
    descricao: 'Da galera de remo à coga e ao galeão: o binômio vela-canhão e a projeção oceânica.',
  },
  {
    tipo: 'podcast',
    topico: '03-franca-antartica-corso-e-religiao',
    titulo: 'Guerra viva e religião na França Antártica',
    fonte: 'NotebookLM',
    src: '/podcasts/hnv/03-franca-antartica.m4a',
    origem: 'local',
    descricao: 'A ameaça bifronte: corso, mare clausum x mare liberum, guerra viva e peçonha luterana.',
  },
  {
    tipo: 'podcast',
    topico: '04-ocupacoes-francesas-e-holandesas',
    titulo: 'A guerra naval no Brasil colonial',
    fonte: 'NotebookLM',
    src: '/podcasts/hnv/04-ocupacoes-holandesas.m4a',
    origem: 'local',
    descricao: 'O litoral como teatro naval: França Equinocial, Bahia, Jornada dos Vassalos e Abrolhos.',
  },
  {
    tipo: 'podcast',
    topico: '05-brasil-holandes-restauracao-e-imperio',
    titulo: 'A retomada de Angola e do Brasil',
    fonte: 'NotebookLM',
    src: '/podcasts/hnv/05-brasil-holandes-restauracao.m4a',
    origem: 'local',
    descricao: 'Restauração, nexo atlântico, Estado polissinodal e a reconquista de Angola (1648).',
  },

  // ── Tópico 06 — Extras (aula do autor, Marcello Loureiro) ──
  {
    tipo: 'podcast',
    topico: '06-extras',
    titulo: 'A periferia que salvou o império português',
    fonte: 'NotebookLM',
    src: '/podcasts/hnv/06-extras-loureiro.m4a',
    origem: 'local',
    descricao: 'Debate-resumo da aula de Marcello Loureiro: Restauração, governo polissinodal, o mito do absolutismo e a economia das mercês.',
  },

  // ── Mapa mental leve (versionado no repo) ──
  {
    tipo: 'mapa',
    topico: '05-brasil-holandes-restauracao-e-imperio',
    titulo: 'Mapa mental — Governo do Império (texto de Marcello Loureiro)',
    fonte: 'Marcello Loureiro',
    src: '/mapas-mentais/cursos/hnv/mapa-loureiro-governo-imperio.png',
    origem: 'local',
    descricao: 'Síntese visual do Estado polissinodal, da monarquia pluricontinental e da crise da Restauração.',
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

// Mídias do curso FAS, por `topico` (slug). A página da mini-matéria renderiza
// via midiasPorTopico; o vídeo e o áudio gerais aparecem no Tópico 00 e são
// reaproveitados na revisão final (via `midiasGerais`, sem duplicar a URL).
//
// O VÍDEO GERAL está no YouTube (origem 'youtube') — a URL fica centralizada aqui,
// numa única constante. O componente PlayerVideo extrai o id e embute sem autoplay.
// O ÁUDIO GERAL (podcast NotebookLM) está versionado em public/podcasts/fas/.
// NOTA (docs/MEDIA-PROTOCOL.md): ao escalar, externalizar o áudio (YouTube/R2/Bunny)
// trocando apenas `origem`/`src` aqui.
//
// Para adicionar mídia por tópico no futuro (vídeos/podcasts específicos), basta
// acrescentar itens com o `topico` correspondente — nenhum card vazio é exibido
// quando não há mídia para um tópico.
import type { Midia } from '@tipos/media';
export type { Midia } from '@tipos/media';

/** ÚNICA fonte da URL do vídeo geral da matéria (reusada no Tópico 00 e na revisão final). */
export const VIDEO_GERAL: Midia = {
  tipo: 'video',
  topico: '00-introducao-midias-estrategia',
  titulo: 'Revisão geral de FAS',
  fonte: 'YouTube',
  src: 'https://youtu.be/EAZy7ZrJuDU',
  origem: 'youtube',
  descricao:
    'Vídeo de revisão geral da matéria de FAS, recomendado após o primeiro contato com os tópicos ou como revisão antes do simulado.',
};

/** Áudio geral (podcast) da matéria. */
export const AUDIO_GERAL: Midia = {
  tipo: 'podcast',
  topico: '00-introducao-midias-estrategia',
  titulo: 'A realidade física da automação industrial',
  fonte: 'NotebookLM',
  src: '/podcasts/fas/revisao-geral.m4a',
  origem: 'local',
  descricao:
    'Podcast-panorama da matéria: instrumentação, sensores e a lógica física por trás da automação. Ótimo para um primeiro contato ou para revisar em deslocamento.',
};

export const midias: Midia[] = [VIDEO_GERAL, AUDIO_GERAL];

/** Mídias gerais (vídeo + áudio) reaproveitadas na revisão final — mesma referência. */
export const midiasGerais: Midia[] = [VIDEO_GERAL, AUDIO_GERAL];

export function midiasPorTopico(slug: string) {
  const lista = midias.filter((m) => m.topico === slug);
  return {
    videos: lista.filter((m) => m.tipo === 'video'),
    podcasts: lista.filter((m) => m.tipo === 'podcast'),
    mapas: lista.filter((m) => m.tipo === 'mapa'),
  };
}

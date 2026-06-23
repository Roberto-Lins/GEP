// Mídias (vídeos, podcasts, mapas) do curso OPN 1, por `topico` (slug).
//
// VAZIO por enquanto: ainda não há mídia real produzida. A pasta ../OPN/Vídeos
// contém apenas PROMPTS de geração (Geral, Grupo 1/2/3), não arquivos de mídia,
// e não há áudios/podcasts. Quando houver vídeo/podcast (idealmente já externos —
// YouTube não-listado / R2 / Bunny, conforme docs/MEDIA-PROTOCOL.md), registrar
// aqui com { tipo, topico, titulo, fonte, src, origem }.
//
// As features `podcasts` e `mapasMentais` estão OFF no _config.json justamente
// porque não há mídia; ligar quando houver conteúdo.
import type { Midia } from '@tipos/media';
export type { Midia } from '@tipos/media';

export const midias: Midia[] = [];

export function midiasPorTopico(slug: string) {
  const lista = midias.filter((m) => m.topico === slug);
  return {
    videos: lista.filter((m) => m.tipo === 'video'),
    podcasts: lista.filter((m) => m.tipo === 'podcast'),
    mapas: lista.filter((m) => m.tipo === 'mapa'),
  };
}

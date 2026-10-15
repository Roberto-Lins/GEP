import type { Midia } from '@tipos/media';
export type { Midia } from '@tipos/media';

// Figuras dos slides ficam em figuras.json e aparecem dentro das aulas.
export const midias: Midia[] = [];

export function midiasPorTopico(slug: string) {
  const lista = midias.filter((midia) => midia.topico === slug);
  return {
    videos: lista.filter((midia) => midia.tipo === 'video'),
    podcasts: lista.filter((midia) => midia.tipo === 'podcast'),
    mapas: lista.filter((midia) => midia.tipo === 'mapa'),
  };
}

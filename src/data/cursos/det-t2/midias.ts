import type { Midia } from '@tipos/media';
export type { Midia } from '@tipos/media';

// Os manifests fornecidos registram figuras ainda não extraídas. Nenhum asset
// acadêmico provisório é publicado antes da extração e validação correspondentes.
export const midias: Midia[] = [];

export function midiasPorTopico(slug: string) {
  const lista = midias.filter((midia) => midia.topico === slug);
  return {
    videos: lista.filter((midia) => midia.tipo === 'video'),
    podcasts: lista.filter((midia) => midia.tipo === 'podcast'),
    mapas: lista.filter((midia) => midia.tipo === 'mapa'),
  };
}

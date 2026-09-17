import type { Midia } from '@tipos/media';

export type { Midia } from '@tipos/media';

// Os três vídeos recebidos são apoio visual e não acrescentam conceito
// examinável além dos slides. O curso publicado usa as figuras leves extraídas.
export const midias: Midia[] = [];

export function midiasPorTopico(slug: string) {
  const lista = midias.filter((midia) => midia.topico === slug);
  return {
    videos: lista.filter((midia) => midia.tipo === 'video'),
    podcasts: lista.filter((midia) => midia.tipo === 'podcast'),
    mapas: lista.filter((midia) => midia.tipo === 'mapa'),
  };
}

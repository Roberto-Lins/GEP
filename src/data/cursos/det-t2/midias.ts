import type { Midia } from '@tipos/media';
export type { Midia } from '@tipos/media';

// Figuras acadêmicas estão em figuras.json e são apresentadas junto à aula.
// Este registro permanece reservado a vídeos, podcasts e mapas de estudo.
export const midias: Midia[] = [];

export function midiasPorTopico(slug: string) {
  const lista = midias.filter((midia) => midia.topico === slug);
  return {
    videos: lista.filter((midia) => midia.tipo === 'video'),
    podcasts: lista.filter((midia) => midia.tipo === 'podcast'),
    mapas: lista.filter((midia) => midia.tipo === 'mapa'),
  };
}

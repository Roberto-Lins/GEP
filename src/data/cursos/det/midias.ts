// Mídias (vídeos, podcasts, mapas) do curso Detecção, por `topico` (slug).
// Sem áudios/vídeos entre as fontes da disciplina — vazio por ora.
// Mapas mentais em SVG podem ser registrados aqui como tipo 'mapa' quando criados.
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

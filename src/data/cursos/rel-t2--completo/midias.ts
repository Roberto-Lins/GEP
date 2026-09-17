// GERADO por scripts/autoria/rel-t2/build.py. Não editar à mão.
import type { Midia } from '@tipos/media';
export type { Midia } from '@tipos/media';
// Nenhuma mídia audiovisual foi autorizada no corpus da T2 de Relações
// Internacionais. Os decks indicam dois vídeos de aprofundamento (EBERI 2021
// e o vídeo do GTI da Política Marítima), que NÃO foram fornecidos nem
// verificados nesta autoria — por isso não são registrados como mídia.
export const midias: Midia[] = [];
export function midiasPorTopico(slug: string) {
  const lista = midias.filter((m) => m.topico === slug);
  return {
    videos: lista.filter((m) => m.tipo === 'video'),
    podcasts: lista.filter((m) => m.tipo === 'podcast'),
    mapas: lista.filter((m) => m.tipo === 'mapa'),
  };
}

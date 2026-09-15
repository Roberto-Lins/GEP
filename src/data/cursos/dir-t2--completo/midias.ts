import type { Midia } from '@tipos/media';
export type { Midia } from '@tipos/media';
// Nenhuma mídia audiovisual autorizada no corpus da T2 de Direito.
export const midias: Midia[] = [];
export function midiasPorTopico(slug: string) { const lista = midias.filter((m) => m.topico === slug); return { videos: lista.filter((m) => m.tipo === 'video'), podcasts: lista.filter((m) => m.tipo === 'podcast'), mapas: lista.filter((m) => m.tipo === 'mapa') }; }

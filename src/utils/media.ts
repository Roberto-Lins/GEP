// Helpers de mídia: resolução de origem (local/CDN/YouTube) para os players.
// Ver docs/MEDIA-PROTOCOL.md.

import type { Midia, OrigemMidia } from '@tipos/media';

export function origemDe(m: Midia): OrigemMidia {
  return m.origem ?? 'local';
}

export function ehExterna(m: Midia): boolean {
  return origemDe(m) !== 'local';
}

/** Extrai o id de um vídeo do YouTube de várias formas de URL. */
export function youtubeId(url: string): string | null {
  const padroes = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})/,
  ];
  for (const p of padroes) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
}

/** URL pronta para <iframe> quando a mídia é do YouTube; senão null. */
export function youtubeEmbed(m: Midia): string | null {
  if (origemDe(m) !== 'youtube') return null;
  const id = youtubeId(m.src);
  return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
}

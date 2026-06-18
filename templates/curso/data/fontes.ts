// Fontes/bibliografia do curso. `arquivo` aponta para /public (download opcional).
import type { Fonte } from '@tipos/media';
export type { Fonte } from '@tipos/media';

export const fontes: Fonte[] = [];

export const fontesPorTopico = (slug: string) =>
  fontes.filter((f) => f.topicos.length === 0 || f.topicos.includes(slug));

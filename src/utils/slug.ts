// Helpers de slug e rótulos.

/** Remove o prefixo numérico ("07-") de um slug para exibição. */
export function semPrefixo(slug: string): string {
  return slug.replace(/^\d+-/, '');
}

/** "07-pdrae-e-reforma-de-1995" -> "07" */
export function numeroTopico(slug: string): string {
  const m = slug.match(/^(\d+)-/);
  return m ? m[1] : '';
}

/** Caminho da home de um curso. */
export function urlCurso(curso: string): string {
  return `/${curso}`;
}

/** Caminho da página de uma mini matéria dentro de um curso. */
export function urlMateria(curso: string, slug: string): string {
  if (slug === '99-revisao-final') return `/${curso}/revisao-final`;
  return `/${curso}/${slug}`;
}

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

/** Caminho da página de uma mini matéria. */
export function urlMateria(slug: string): string {
  return `/materias/${slug}`;
}

// Descoberta de cursos da plataforma. Lê todos os _config.json em
// src/content/cursos/<slug>/_config.json — para adicionar um curso, basta criar
// a pasta + _config.json; ele aparece automaticamente no dashboard.

import type { CursoConfig } from '@tipos/course';

const configs = import.meta.glob<CursoConfig>('/src/content/cursos/*/_config.json', {
  eager: true,
  import: 'default',
});

const lista: CursoConfig[] = Object.values(configs).sort((a, b) => a.ordem - b.ordem);

/** Todos os cursos, ordenados por `ordem`. */
export function listarCursos(): CursoConfig[] {
  return lista;
}

export function cursoPorSlug(slug: string): CursoConfig | undefined {
  return lista.find((c) => c.slug === slug);
}

export function cursoExiste(slug: string): boolean {
  return lista.some((c) => c.slug === slug);
}

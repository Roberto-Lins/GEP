// Descoberta de cursos da plataforma. Lê todos os _config.json em
// src/content/cursos/<slug>/_config.json — para adicionar um curso, basta criar
// a pasta + _config.json; ele aparece automaticamente no dashboard.

import type { CursoConfig } from '@tipos/course';
import { construirFamilias, familiaDeCurso } from './study-modes';

const configs = import.meta.glob<CursoConfig>('/src/content/cursos/*/_config.json', {
  eager: true,
  import: 'default',
});

const lista: CursoConfig[] = Object.values(configs).sort((a, b) => a.ordem - b.ordem);

/** Todos os cursos, ordenados por `ordem`. */
export function listarCursos(): CursoConfig[] {
  return lista;
}

/** Famílias exibidas na descoberta. Variantes multimodais aparecem como uma matéria só. */
export function listarFamilias() {
  return construirFamilias(lista);
}

export function cursoPorSlug(slug: string): CursoConfig | undefined {
  return lista.find((c) => c.slug === slug);
}

export function cursoExiste(slug: string): boolean {
  return lista.some((c) => c.slug === slug);
}

export function familiaPorId(id: string) {
  return listarFamilias().find((f) => f.id === id);
}

export function familiaDoCurso(curso: CursoConfig) {
  return familiaDeCurso(lista, curso);
}

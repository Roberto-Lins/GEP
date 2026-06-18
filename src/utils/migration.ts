// Migração do progresso antigo (curso único) → novo formato multi-curso.
// Antigo: chave `gep:progresso:v1` = { materias, ultimaMateria }.
// Novo:   chave `bussola:v1`      = { cursos: { gep: { materias, ultimaMateria } }, ultimoCurso }.
// Idempotente: roda uma vez, marcada pela flag `bussola:v1:migration:gep:done`.

import type { Progresso, ProgressoLegado } from '@tipos/progress';

const KEY_LEGADO = 'gep:progresso:v1';
export const KEY_NOVA = 'bussola:v1';
const FLAG = 'bussola:v1:migration:gep:done';

function lerJSON<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

/**
 * Move o progresso legado do GEP para o novo formato, uma única vez.
 * Preserva a chave antiga (não apaga) por segurança.
 */
export function migrarProgressoLegado(): void {
  if (typeof localStorage === 'undefined') return;
  if (localStorage.getItem(FLAG)) return; // já migrado

  const legado = lerJSON<ProgressoLegado>(KEY_LEGADO);
  if (legado && legado.materias && Object.keys(legado.materias).length > 0) {
    const novo = lerJSON<Progresso>(KEY_NOVA) ?? { cursos: {} };
    if (!novo.cursos) novo.cursos = {};
    // Não sobrescreve se o curso já tem progresso novo (evita perder dados).
    if (!novo.cursos.gep) {
      novo.cursos.gep = {
        materias: legado.materias,
        ultimaMateria: legado.ultimaMateria,
      };
      if (!novo.ultimoCurso) novo.ultimoCurso = 'gep';
      localStorage.setItem(KEY_NOVA, JSON.stringify(novo));
    }
  }
  localStorage.setItem(FLAG, '1');
}

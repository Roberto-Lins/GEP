// Utilidades de filtragem/embaralhamento de questões.
import type { Questao } from '@data/cursos/gep/exercicios';

export function embaralhar<T>(arr: T[], seed?: number): T[] {
  const a = [...arr];
  let rng = seed ?? Math.floor(Math.random() * 1e9);
  const rand = () => {
    // xorshift simples e determinístico quando há seed
    rng ^= rng << 13; rng ^= rng >> 17; rng ^= rng << 5;
    return Math.abs(rng % 1000) / 1000;
  };
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor((seed === undefined ? Math.random() : rand()) * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function porTipo(questoes: Questao[], tipo: Questao['tipo']) {
  return questoes.filter((q) => q.tipo === tipo);
}

export function porTopicos(questoes: Questao[], slugs: string[]) {
  if (slugs.length === 0) return questoes;
  return questoes.filter((q) => slugs.includes(q.topico));
}

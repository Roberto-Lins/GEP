// Ábaco / nomograma logarítmico: relação Distância = Velocidade × Tempo.
// + regra dos 3 e 6 minutos. D[nm] = V[kt] · T[min] / 60.
import type { Knots, Minutes, NauticalMiles } from './types';

export interface DVT {
  distanceNm: NauticalMiles;
  speedKt: Knots;
  timeMin: Minutes;
}

/** Dados dois dos três elementos, calcula o terceiro. */
export function solveDVT(known: Partial<DVT>): DVT {
  const { distanceNm, speedKt, timeMin } = known;
  const fornecidos = [distanceNm, speedKt, timeMin].filter((x) => x != null);
  if (fornecidos.length !== 2) {
    throw new Error('solveDVT: forneça exatamente dois dos três elementos.');
  }
  if (fornecidos.some((x) => !(typeof x === 'number' && x > 0))) {
    throw new Error('solveDVT: distância, velocidade e tempo devem ser positivos.');
  }
  if (distanceNm != null && speedKt != null) {
    return { distanceNm, speedKt, timeMin: (distanceNm / speedKt) * 60 };
  }
  if (distanceNm != null && timeMin != null) {
    return { distanceNm, timeMin, speedKt: distanceNm / (timeMin / 60) };
  }
  if (speedKt != null && timeMin != null) {
    return { speedKt, timeMin, distanceNm: (speedKt * timeMin) / 60 };
  }
  throw new Error('solveDVT: forneça exatamente dois dos três elementos.');
}

/** Regra dos 3 minutos: distância em nm × 20 = nós (3 min = 1/20 h). */
export const rule3min = (nm: NauticalMiles): Knots => nm * 20;
/** Regra dos 6 minutos: distância em nm × 10 = nós (6 min = 1/10 h). */
export const rule6min = (nm: NauticalMiles): Knots => nm * 10;

/** Posição [0,1] de um valor numa escala logarítmica [min,max] (para desenhar a régua). */
export function logPos(value: number, min: number, max: number): number {
  if (value <= 0 || min <= 0 || max <= 0) return 0;
  return (Math.log(value) - Math.log(min)) / (Math.log(max) - Math.log(min));
}

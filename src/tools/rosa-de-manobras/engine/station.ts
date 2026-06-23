// Entrar em posição / troca de posto: dado o deslocamento relativo a executar,
// o vetor do guia e a velocidade de manobra, achar RUMO e TEMPO.
// Validado com a UE5 Aula 4 (guia 090°/10kt, manobra 15kt, desloc. 135°/2800yd → 107°/~14min).
import type { Bearing, Knots, Minutes, TrueVector, Yards } from './types';
import { bearingToVec, dot, timeFromDistanceSpeed, vecToBearing } from './geometry';

export interface StationInput {
  guide: TrueVector;
  ownSpeed: Knots;
  /** Deslocamento relativo do navio manobrador: para onde e quanto (no referencial do guia). */
  displacement: { bearing: Bearing; distance: Yards };
}

export interface StationSolution {
  ownCourse: Bearing;
  vmr: Knots;
  timeMin: Minutes;
}

export interface StationResult {
  feasible: boolean;
  /** 0 soluções = posto inatingível com essa velocidade; pode haver 1 ou 2. */
  solutions: StationSolution[];
}

/**
 * Resolve |tr + s·û| = ownSpeed, com s = VMR ≥ 0 e û na direção do deslocamento.
 * tm = tr + s·û ⇒ rumo do navio; tempo = distância / VMR.
 */
export function solveStation(input: StationInput): StationResult {
  const { guide, ownSpeed, displacement } = input;
  const u = bearingToVec(displacement.bearing, 1); // unitário
  const tr = bearingToVec(guide.course, guide.speed);

  const b = 2 * dot(tr, u);
  const c = dot(tr, tr) - ownSpeed * ownSpeed;
  const disc = b * b - 4 * c;

  if (disc < -1e-9) return { feasible: false, solutions: [] };

  const roots =
    disc < 1e-9 ? [-b / 2] : [(-b - Math.sqrt(disc)) / 2, (-b + Math.sqrt(disc)) / 2];

  const solutions: StationSolution[] = roots
    .filter((s) => s > 1e-6) // VMR precisa ser positiva (mover-se em direção ao posto)
    .map((s) => {
      const tm = { x: tr.x + s * u.x, y: tr.y + s * u.y };
      return {
        ownCourse: vecToBearing(tm).bearing,
        vmr: s,
        timeMin: timeFromDistanceSpeed(displacement.distance, s),
      };
    })
    // ordena por tempo (solução mais rápida primeiro)
    .sort((a, z) => a.timeMin - z.timeMin);

  return { feasible: solutions.length > 0, solutions };
}

// Movimento relativo: contato (rumo+velocidade) e PMA/CPA.
// Diagrama de posições (centro R; alvo M1,M2) + diagrama de velocidades (t-r-m).
import type { Bearing, Knots, TimedPlot, TrueVector, Vec2, Yards } from './types';
import {
  add,
  bearingToVec,
  dot,
  normalize,
  scale,
  speedFromDistanceTime,
  sub,
  vecToBearing,
} from './geometry';

export interface ContactInput {
  own: TrueVector;
  /** Plotagens com marcação VERDADEIRA, distância em jardas e instante em minutos. */
  m1: TimedPlot;
  m2: TimedPlot;
}

export interface CpaResult {
  bearing: Bearing;
  distance: Yards;
  timeMin: number;
  /** PMA já ficou para trás (o contato está se afastando). */
  passed: boolean;
  /** Rota de colisão (PMA praticamente nulo). */
  collision: boolean;
}

export interface ContactResult {
  /** Direção do movimento relativo. */
  dmr: Bearing;
  /** Distância relativa M1→M2 (jardas). */
  relDistance: Yards;
  /** Velocidade do movimento relativo (nós). */
  vmr: Knots;
  targetCourse: Bearing;
  targetSpeed: Knots;
  cpa: CpaResult;
  /** Vetores auxiliares (diagrama de velocidades) e pontos (diagrama de posições). */
  vectors: { tr: Vec2; rm: Vec2; tm: Vec2; m1: Vec2; m2: Vec2; pma: Vec2 };
}

/** Diagrama de velocidades direto: dados os movimentos verdadeiros, achar DMR/VMR. */
export function relativeFromTrue(
  own: TrueVector,
  target: TrueVector,
): { dmr: Bearing; vmr: Knots } {
  const tr = bearingToVec(own.course, own.speed);
  const tm = bearingToVec(target.course, target.speed);
  const rm = sub(tm, tr);
  const { bearing, magnitude: mag } = vecToBearing(rm);
  return { dmr: bearing, vmr: mag };
}

/** Inverso: dado o próprio vetor e o relativo (DMR/VMR), achar rumo/velocidade do alvo. */
export function targetFromRelative(
  own: TrueVector,
  dmr: Bearing,
  vmr: Knots,
): TrueVector {
  const tr = bearingToVec(own.course, own.speed);
  const rm = bearingToVec(dmr, vmr);
  const { bearing, magnitude: mag } = vecToBearing(add(tr, rm));
  return { course: bearing, speed: mag };
}

/**
 * Resolve o problema completo de contato a partir de duas plotagens cronometradas.
 * Reproduz o exercício da UE5 Aula 2 (260°/12kt; 0342P 020°/14000yd; 0349P 015°/11000yd).
 */
export function solveContact(input: ContactInput): ContactResult {
  const { own, m1, m2 } = input;
  for (const n of [own.course, own.speed, m1.bearing, m1.range, m1.timeMin, m2.bearing, m2.range, m2.timeMin]) {
    if (!Number.isFinite(n)) throw new Error('Entradas numéricas inválidas.');
  }
  if (!(m2.timeMin - m1.timeMin > 0)) {
    throw new Error('M2 deve ser cronometrado depois de M1 (Δt > 0).');
  }
  const pM1 = bearingToVec(m1.bearing, m1.range);
  const pM2 = bearingToVec(m2.bearing, m2.range);

  const rel = sub(pM2, pM1);
  const relBearing = vecToBearing(rel);
  const dmr = relBearing.bearing;
  const relDistance = relBearing.magnitude;

  const dt = m2.timeMin - m1.timeMin;
  const vmr = speedFromDistanceTime(relDistance, dt);

  const target = targetFromRelative(own, dmr, vmr);

  // PMA: pé da perpendicular da origem (R) à reta do movimento relativo por M1.
  const u = normalize(rel);
  const tAlong = dot(scale(pM1, -1), u); // = -dot(pM1, u)
  const pma = add(pM1, scale(u, tAlong));
  const pmaInfo = vecToBearing(pma);
  // tempo do PMA: distância M1→PMA (com sinal) dividida pela VMR em jardas/min.
  const ydPerMin = relDistance / dt;
  const timeMin = m1.timeMin + (ydPerMin > 0 ? tAlong / ydPerMin : NaN);

  return {
    dmr,
    relDistance,
    vmr,
    targetCourse: target.course,
    targetSpeed: target.speed,
    cpa: {
      bearing: pmaInfo.bearing,
      distance: pmaInfo.magnitude,
      timeMin,
      passed: tAlong < 0,
      collision: pmaInfo.magnitude < 1e-6,
    },
    vectors: {
      tr: bearingToVec(own.course, own.speed),
      rm: bearingToVec(dmr, vmr),
      tm: bearingToVec(target.course, target.speed),
      m1: pM1,
      m2: pM2,
      pma,
    },
  };
}

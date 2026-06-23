import { describe, expect, it } from 'vitest';
import { solveContact, relativeFromTrue } from '../relativeMotion';
import { solveStation } from '../station';
import { parseHHMM, formatHHMM } from '../time';
import { solveTrueWind } from '../wind';

const DEG = Math.PI / 180;
const YD_PER_NM = 2000;

interface Vec {
  x: number;
  y: number;
}

function norm360(angle: number): number {
  return ((angle % 360) + 360) % 360;
}

function bearingToVector(bearing: number, magnitude: number): Vec {
  const r = bearing * DEG;
  return {
    x: magnitude * Math.sin(r),
    y: magnitude * Math.cos(r),
  };
}

function vectorToBearing(v: Vec): { bearing: number; magnitude: number } {
  const magnitude = Math.hypot(v.x, v.y);
  if (magnitude < 1e-12) return { bearing: 0, magnitude: 0 };
  return { bearing: norm360(Math.atan2(v.x, v.y) / DEG), magnitude };
}

function add(a: Vec, b: Vec): Vec {
  return { x: a.x + b.x, y: a.y + b.y };
}

function subtract(a: Vec, b: Vec): Vec {
  return { x: a.x - b.x, y: a.y - b.y };
}

function scale(v: Vec, k: number): Vec {
  return { x: v.x * k, y: v.y * k };
}

function dot(a: Vec, b: Vec): number {
  return a.x * b.x + a.y * b.y;
}

function angularDiff(a: number, b: number): number {
  const d = Math.abs(norm360(a) - norm360(b)) % 360;
  return d > 180 ? 360 - d : d;
}

function speedFromYardsAndMinutes(yards: number, minutes: number): number {
  return (yards / YD_PER_NM) / (minutes / 60);
}

function timeFromYardsAndKnots(yards: number, knots: number): number {
  return (yards / YD_PER_NM / knots) * 60;
}

describe('codex review — recomputações independentes dos casos fonte', () => {
  it('CONTATO UE5 Aula 2 usa a distância analítica M1-M2, não a leitura gráfica de 3500 yd', () => {
    const m1 = { bearing: 20, range: 14000, timeMin: parseHHMM('0342') };
    const m2 = { bearing: 15, range: 11000, timeMin: parseHHMM('0349') };
    const own = { course: 260, speed: 12 };

    const p1 = bearingToVector(m1.bearing, m1.range);
    const p2 = bearingToVector(m2.bearing, m2.range);
    const rel = subtract(p2, p1);
    const relInfo = vectorToBearing(rel);
    const minutes = m2.timeMin - m1.timeMin;
    const vmr = speedFromYardsAndMinutes(relInfo.magnitude, minutes);
    const target = vectorToBearing(add(bearingToVector(own.course, own.speed), bearingToVector(relInfo.bearing, vmr)));
    const unitRel = scale(rel, 1 / relInfo.magnitude);
    const signedM1ToPma = dot(scale(p1, -1), unitRel);
    const pma = add(p1, scale(unitRel, signedM1ToPma));
    const pmaInfo = vectorToBearing(pma);
    const cpaTime = m1.timeMin + signedM1ToPma / (relInfo.magnitude / minutes);

    const result = solveContact({ own, m1, m2 });

    expect(relInfo.magnitude).toBeCloseTo(3189.36247355837, 9);
    expect(speedFromYardsAndMinutes(3500, minutes)).toBeCloseTo(15, 9);
    expect(result.relDistance).toBeCloseTo(relInfo.magnitude, 9);
    expect(result.vmr).toBeCloseTo(vmr, 9);
    expect(result.targetCourse).toBeCloseTo(target.bearing, 9);
    expect(result.targetSpeed).toBeCloseTo(target.magnitude, 9);
    expect(result.cpa.bearing).toBeCloseTo(pmaInfo.bearing, 9);
    expect(result.cpa.distance).toBeCloseTo(pmaInfo.magnitude, 9);
    expect(result.cpa.timeMin).toBeCloseTo(cpaTime, 9);

    expect(result.dmr).toBeCloseTo(217.4934709808157, 9);
    expect(result.vmr).toBeCloseTo(13.668696315250171, 9);
    expect(result.targetCourse).toBeCloseTo(237.29832706750264, 9);
    expect(result.targetSpeed).toBeCloseTo(23.93054288597791, 9);
    expect(result.cpa.bearing).toBeCloseTo(307.49347098081574, 9);
    expect(result.cpa.distance).toBeCloseTo(4208.359662601925, 9);
    expect(formatHHMM(result.cpa.timeMin)).toBe('0411');
  });

  it('MIGUENS: próprio 000/15 e alvo 026/22 geram movimento relativo 063.7/10.8', () => {
    const expected = vectorToBearing(subtract(bearingToVector(26, 22), bearingToVector(0, 15)));
    const result = relativeFromTrue({ course: 0, speed: 15 }, { course: 26, speed: 22 });

    expect(result.dmr).toBeCloseTo(expected.bearing, 9);
    expect(result.vmr).toBeCloseTo(expected.magnitude, 9);
    expect(angularDiff(result.dmr, 63)).toBeLessThanOrEqual(1);
    expect(result.vmr).toBeCloseTo(11, 0);
  });

  it('VENTO REAL UE5 Aula 3 soma o vento aparente para-onde ao vetor do navio', () => {
    const ship = { course: 60, speed: 10 };
    const apparentFrom = ship.course + 90;
    const apparentToward = bearingToVector(norm360(apparentFrom + 180), 14);
    const realToward = add(apparentToward, bearingToVector(ship.course, ship.speed));
    const realTowardInfo = vectorToBearing(realToward);
    const expectedFrom = norm360(realTowardInfo.bearing + 180);

    const result = solveTrueWind(ship, { tipo: 'relativo', direcao: 90, bordo: 'BE', intensidade: 14 });

    expect(result.apparentFrom).toBeCloseTo(apparentFrom, 9);
    expect(result.from).toBeCloseTo(expectedFrom, 9);
    expect(result.speed).toBeCloseTo(realTowardInfo.magnitude, 9);
    expect(result.from).toBeCloseTo(185.53767779197437, 9);
    expect(result.speed).toBeCloseTo(17.204650534085253, 9);
  });

  it('ENTRAR EM POSIÇÃO UE5 Aula 4 resolve |tr + s*u| = 15 e escolhe a raiz positiva', () => {
    const guide = { course: 90, speed: 10 };
    const ownSpeed = 15;
    const displacement = { bearing: 135, distance: 2800 };
    const tr = bearingToVector(guide.course, guide.speed);
    const u = bearingToVector(displacement.bearing, 1);
    const b = 2 * dot(tr, u);
    const c = dot(tr, tr) - ownSpeed * ownSpeed;
    const disc = b * b - 4 * c;
    const roots = [(-b - Math.sqrt(disc)) / 2, (-b + Math.sqrt(disc)) / 2];
    const vmr = roots.find((root) => root > 0);
    expect(vmr).toBeDefined();
    const tm = add(tr, scale(u, vmr ?? 0));
    const own = vectorToBearing(tm);
    const expectedTime = timeFromYardsAndKnots(displacement.distance, vmr ?? 0);

    const result = solveStation({ guide, ownSpeed, displacement });

    expect(result.feasible).toBe(true);
    expect(result.solutions).toHaveLength(1);
    expect(result.solutions[0].vmr).toBeCloseTo(vmr ?? 0, 9);
    expect(result.solutions[0].ownCourse).toBeCloseTo(own.bearing, 9);
    expect(result.solutions[0].timeMin).toBeCloseTo(expectedTime, 9);
    expect(result.solutions[0].ownCourse).toBeCloseTo(106.8744942979443, 9);
    expect(result.solutions[0].timeMin).toBeCloseTo(13.641481974750624, 9);
  });
});

describe('codex review — casos-limite de entrada em posição', () => {
  it('diferencia corretamente 0, 1 e 2 raízes positivas', () => {
    const noSolution = solveStation({
      guide: { course: 0, speed: 20 },
      ownSpeed: 5,
      displacement: { bearing: 90, distance: 2000 },
    });
    expect(noSolution.feasible).toBe(false);
    expect(noSolution.solutions).toHaveLength(0);

    const tangent = solveStation({
      guide: { course: 0, speed: 10 },
      ownSpeed: 10 / Math.SQRT2,
      displacement: { bearing: 225, distance: 2000 },
    });
    expect(tangent.feasible).toBe(true);
    expect(tangent.solutions).toHaveLength(1);
    expect(tangent.solutions[0].vmr).toBeCloseTo(10 / Math.SQRT2, 9);

    const twoSolutions = solveStation({
      guide: { course: 315, speed: 30 },
      ownSpeed: 5,
      displacement: { bearing: 135, distance: 2000 },
    });
    expect(twoSolutions.feasible).toBe(true);
    expect(twoSolutions.solutions).toHaveLength(2);
    expect(twoSolutions.solutions.map((s) => s.vmr)).toEqual([
      expect.closeTo(35, 9),
      expect.closeTo(25, 9),
    ]);
  });
});

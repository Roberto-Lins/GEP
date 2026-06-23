import { describe, it, expect } from 'vitest';
import { solveContact } from '../relativeMotion';
import { solveStation } from '../station';
import { solveTrueWind } from '../wind';
import { vecToBearing, bearingToVec, norm360 } from '../geometry';

// Casos-limite e entradas "torpes" para tentar quebrar o motor.
describe('robustez — movimento relativo', () => {
  it('rota de colisão: PMA no centro (distância ≈ 0)', () => {
    const r = solveContact({
      own: { course: 0, speed: 10 },
      m1: { bearing: 0, range: 10000, timeMin: 0 },
      m2: { bearing: 0, range: 6000, timeMin: 10 },
    });
    expect(r.cpa.distance).toBeLessThan(1);
    expect(r.cpa.collision).toBe(true);
  });

  it('PMA já passou: contato se afastando → passed = true', () => {
    const r = solveContact({
      own: { course: 0, speed: 10 },
      m1: { bearing: 90, range: 5000, timeMin: 0 },
      m2: { bearing: 80, range: 8000, timeMin: 6 },
    });
    expect(r.cpa.passed).toBe(true);
  });

  it('sem movimento relativo (mesmo rumo/veloc): VMR ≈ 0', () => {
    const r = solveContact({
      own: { course: 45, speed: 12 },
      m1: { bearing: 90, range: 8000, timeMin: 0 },
      m2: { bearing: 90, range: 8000, timeMin: 6 },
    });
    expect(r.vmr).toBeCloseTo(0, 3);
  });

  it('marcações fora de [0,360) são normalizadas (−5° ≡ 355°, 380° ≡ 020°)', () => {
    const a = solveContact({
      own: { course: 260, speed: 12 },
      m1: { bearing: 380, range: 14000, timeMin: 0 },
      m2: { bearing: -5, range: 11000, timeMin: 7 },
    });
    const b = solveContact({
      own: { course: 260, speed: 12 },
      m1: { bearing: 20, range: 14000, timeMin: 0 },
      m2: { bearing: 355, range: 11000, timeMin: 7 },
    });
    expect(a.dmr).toBeCloseTo(b.dmr, 6);
    expect(a.targetSpeed).toBeCloseTo(b.targetSpeed, 6);
  });
});

describe('robustez — estação e vento', () => {
  it('estação: deslocamento na mesma direção do guia (colinear) é atingível', () => {
    const r = solveStation({ guide: { course: 90, speed: 10 }, ownSpeed: 15, displacement: { bearing: 90, distance: 2000 } });
    expect(r.feasible).toBe(true);
  });

  it('vento dado em marcação verdadeira ≡ relativo equivalente', () => {
    const rel = solveTrueWind({ course: 60, speed: 10 }, { tipo: 'relativo', direcao: 90, bordo: 'BE', intensidade: 14 });
    const verd = solveTrueWind({ course: 60, speed: 10 }, { tipo: 'verdadeiro', direcao: 150, intensidade: 14 });
    expect(rel.from).toBeCloseTo(verd.from, 6);
    expect(rel.speed).toBeCloseTo(verd.speed, 6);
  });

  it('bearingToVec ⇄ vecToBearing fecha para 360 valores', () => {
    for (let b = 0; b < 360; b++) {
      const got = vecToBearing(bearingToVec(b, 7)).bearing;
      expect(norm360(got)).toBeCloseTo(b, 4);
    }
  });
});

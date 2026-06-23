import { describe, it, expect } from 'vitest';
import { solveStation } from '../station';
import { angularDiff } from '../geometry';

// UE5 Aula 4: guia 090°/10kt, manobra 15kt; deslocamento relativo 135°/2800yd
// (derivado da geometria da FORM 3) → rumo ~107°, tempo ~14 min.
describe('solveStation — UE5 Aula 4', () => {
  it('guia 090/10, manobra 15, desloc 135°/2800yd → ~107°/~13,6min', () => {
    const r = solveStation({
      guide: { course: 90, speed: 10 },
      ownSpeed: 15,
      displacement: { bearing: 135, distance: 2800 },
    });
    expect(r.feasible).toBe(true);
    expect(r.solutions.length).toBeGreaterThanOrEqual(1);
    const s = r.solutions[0];
    expect(angularDiff(s.ownCourse, 107)).toBeLessThanOrEqual(1);
    expect(s.vmr).toBeCloseTo(6.16, 1);
    expect(s.timeMin).toBeCloseTo(13.64, 1);
  });

  it('posto inatingível: componente transversal do guia excede a velocidade de manobra', () => {
    // guia 000°/20kt; deslocamento exigido perpendicular (090°). Precisa de >20kt; só temos 5kt.
    const r = solveStation({
      guide: { course: 0, speed: 20 },
      ownSpeed: 5,
      displacement: { bearing: 90, distance: 2000 },
    });
    expect(r.feasible).toBe(false);
    expect(r.solutions).toHaveLength(0);
  });

  it('caso recíproco gera duas soluções (acelerar ou reduzir)', () => {
    // guia 315°/30kt e deslocamento 135° (recíproco) → s = 25 e 35 kt.
    const r = solveStation({
      guide: { course: 315, speed: 30 },
      ownSpeed: 5,
      displacement: { bearing: 135, distance: 2000 },
    });
    expect(r.solutions).toHaveLength(2);
  });
});

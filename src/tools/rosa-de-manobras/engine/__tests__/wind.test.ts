import { describe, it, expect } from 'vitest';
import { solveTrueWind, solveApparentWind } from '../wind';
import { angularDiff } from '../geometry';

// UE5 Aula 3: navio 060°/10kt; anemômetro 090° BE / 14kt → vento real 185°/17kt.
describe('solveTrueWind — UE5 Aula 3', () => {
  it('navio 060/10 + anem. 090 BE/14 → real ~185°/17kt', () => {
    const r = solveTrueWind({ course: 60, speed: 10 }, { tipo: 'relativo', direcao: 90, bordo: 'BE', intensidade: 14 });
    expect(angularDiff(r.from, 185)).toBeLessThanOrEqual(1);
    expect(r.speed).toBeCloseTo(17.2, 1);
  });

  it('é inverso de solveApparentWind', () => {
    const ship = { course: 60, speed: 10 };
    const real = solveTrueWind(ship, { tipo: 'relativo', direcao: 90, bordo: 'BE', intensidade: 14 });
    const ap = solveApparentWind(ship, real);
    // recompõe o anemômetro original: 090° BE / 14kt
    expect(ap.bordo).toBe('BE');
    expect(ap.relBearing).toBeCloseTo(90, 0);
    expect(ap.speed).toBeCloseTo(14, 1);
  });

  it('aceita vento relativo já em marcação verdadeira', () => {
    const r = solveTrueWind(
      { course: 60, speed: 10 },
      { tipo: 'verdadeiro', direcao: 150, intensidade: 14 },
    );
    expect(angularDiff(r.from, 185)).toBeLessThanOrEqual(1);
  });
});

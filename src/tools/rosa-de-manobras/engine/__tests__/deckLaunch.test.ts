import { describe, it, expect } from 'vitest';
import { solveDeckLaunch, solveApparentWind } from '../wind';
import { angularDiff } from '../geometry';

// UE5 Aula 3 — lançamento de aeronaves.
describe('solveDeckLaunch — convés de voo', () => {
  it('caso secante: vento real 315°/10, convés 30kt @ 10° BB → 2 soluções, uma ≈347°/21kt', () => {
    const r = solveDeckLaunch({ from: 315, speed: 10 }, { angle: 10, bordo: 'BB', speed: 30 });
    expect(r.feasible).toBe(true);
    expect(r.solutions).toHaveLength(2);
    const alvo = r.solutions.find((s) => angularDiff(s.course, 347) <= 1.5);
    expect(alvo).toBeTruthy();
    expect(alvo!.speed).toBeCloseTo(21, 0);
  });

  it('SEM SOLUÇÃO: vento real 345°/11, convés 24kt @ 60° BB (vento real não corta a linha de proa)', () => {
    const r = solveDeckLaunch({ from: 345, speed: 11 }, { angle: 60, bordo: 'BB', speed: 24 });
    expect(r.feasible).toBe(false);
    expect(r.solutions).toHaveLength(0);
  });

  it('round-trip: cada solução realmente produz o vento de convés desejado', () => {
    const trueWind = { from: 315, speed: 10 };
    const r = solveDeckLaunch(trueWind, { angle: 10, bordo: 'BB', speed: 30 });
    for (const s of r.solutions) {
      const ap = solveApparentWind({ course: s.course, speed: s.speed }, trueWind);
      expect(ap.speed).toBeCloseTo(30, 0);
      expect(ap.bordo).toBe('BB');
      expect(angularDiff(ap.relBearing, 10)).toBeLessThanOrEqual(1.5);
    }
  });

  it('vento de proa (0°): sempre há solução, navio acelera contra o vento', () => {
    const r = solveDeckLaunch({ from: 0, speed: 10 }, { angle: 0, bordo: 'BE', speed: 25 });
    expect(r.feasible).toBe(true);
    // rumo ~000 (proa contra o vento que vem do Norte)
    expect(angularDiff(r.solutions[0].course, 0)).toBeLessThanOrEqual(1);
  });
});

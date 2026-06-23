import { describe, it, expect } from 'vitest';
import { solveTrueWind, solveContact, solveStation, solveDeckLaunch } from '../index';
import { angularDiff } from '../geometry';
import { parseHHMM } from '../time';

// Regressões "oficiais" — casos validados na auditoria (UE5 e Miguens). Travam o
// comportamento ANALÍTICO do motor; na plotagem gráfica há leituras com ±.

describe('Vento real — Miguens (composição vetorial)', () => {
  it('030/15 + 030° BE/20 → real ~107°/10,3 kt', () => {
    const r = solveTrueWind({ course: 30, speed: 15 }, { tipo: 'relativo', direcao: 30, bordo: 'BE', intensidade: 20 });
    expect(angularDiff(r.from, 107)).toBeLessThanOrEqual(1.5);
    expect(r.speed).toBeCloseTo(10.3, 0);
  });

  it('213/21 + 70° BB/20 → real ~086°/23 kt (aparente verd. 143°)', () => {
    const r = solveTrueWind({ course: 213, speed: 21 }, { tipo: 'relativo', direcao: 70, bordo: 'BB', intensidade: 20 });
    expect(angularDiff(r.apparentFrom, 143)).toBeLessThanOrEqual(1);
    expect(angularDiff(r.from, 86)).toBeLessThanOrEqual(1.5);
    expect(r.speed).toBeCloseTo(23.5, 0);
  });
});

describe('Contato / PMA — UE5 Aula 2 (260/12; M1 0342 020/14000; M2 0349 015/11000)', () => {
  const r = solveContact({
    own: { course: 260, speed: 12 },
    m1: { bearing: 20, range: 14000, timeMin: parseHHMM('0342') },
    m2: { bearing: 15, range: 11000, timeMin: parseHHMM('0349') },
  });
  it('DMR ≈ 217,5° e VMR ≈ 13,7 kt', () => {
    expect(angularDiff(r.dmr, 217.5)).toBeLessThanOrEqual(1);
    expect(r.vmr).toBeCloseTo(13.7, 0);
  });
  it('rumo do contato ≈ 237° e velocidade ≈ 24 kt (não a recíproca 057°)', () => {
    expect(angularDiff(r.targetCourse, 237)).toBeLessThanOrEqual(2);
    expect(r.targetSpeed).toBeCloseTo(24, 0);
    expect(angularDiff(r.targetCourse, 57)).toBeGreaterThan(5);
  });
  it('PMA na marcação ≈ 307,5°, distância ≈ 4.200 yd, ainda não passou', () => {
    expect(angularDiff(r.cpa.bearing, 307.5)).toBeLessThanOrEqual(2);
    expect(r.cpa.distance).toBeGreaterThan(3900);
    expect(r.cpa.distance).toBeLessThan(4500);
    expect(r.cpa.passed).toBe(false);
  });
});

describe('Entrar em posição — UE5 Aula 4 (guia 090/10; manobra 15kt; desloc 135/2800)', () => {
  it('rumo ≈ 107° e tempo ≈ 14 min', () => {
    const r = solveStation({ guide: { course: 90, speed: 10 }, ownSpeed: 15, displacement: { bearing: 135, distance: 2800 } });
    expect(r.feasible).toBe(true);
    const s = r.solutions[0];
    expect(angularDiff(s.ownCourse, 107)).toBeLessThanOrEqual(2);
    expect(s.timeMin).toBeCloseTo(13.6, 0);
  });
});

describe('Convés — UE5 (segundo caso secante)', () => {
  it('vento real 040/18, convés 24kt @ 45° BE → solução de menor velocidade ≈ 330°/11 kt', () => {
    const r = solveDeckLaunch({ from: 40, speed: 18 }, { angle: 45, bordo: 'BE', speed: 24 });
    expect(r.feasible).toBe(true);
    const lenta = r.solutions[0]; // ordenadas por velocidade crescente
    expect(angularDiff(lenta.course, 330)).toBeLessThanOrEqual(2);
    expect(lenta.speed).toBeCloseTo(11, 0);
  });
});

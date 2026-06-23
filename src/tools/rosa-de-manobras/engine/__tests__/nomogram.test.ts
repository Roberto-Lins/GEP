import { describe, it, expect } from 'vitest';
import { solveDVT, rule3min, rule6min } from '../nomogram';
import { parseHHMM, formatHHMM } from '../time';

describe('nomograma D=V·T', () => {
  it('acha o tempo', () => {
    expect(solveDVT({ distanceNm: 1.75, speedKt: 15 }).timeMin).toBeCloseTo(7, 6);
  });
  it('acha a velocidade', () => {
    expect(solveDVT({ distanceNm: 1.75, timeMin: 7 }).speedKt).toBeCloseTo(15, 6);
  });
  it('acha a distância', () => {
    expect(solveDVT({ speedKt: 15, timeMin: 7 }).distanceNm).toBeCloseTo(1.75, 6);
  });
  it('exige exatamente dois elementos', () => {
    expect(() => solveDVT({ distanceNm: 1 })).toThrow();
    expect(() => solveDVT({ distanceNm: 1, speedKt: 2, timeMin: 3 })).toThrow();
  });
  it('regra dos 3 e 6 minutos', () => {
    expect(rule3min(0.75)).toBe(15); // 1500 yd em 3 min = 15 kt
    expect(rule6min(1.5)).toBe(15);
  });
});

describe('horário HHMM', () => {
  it('parse e format', () => {
    expect(parseHHMM('0342P')).toBe(222);
    expect(formatHHMM(251.3)).toBe('0411');
    expect(formatHHMM(222 + 29.3)).toBe('0411');
  });
});

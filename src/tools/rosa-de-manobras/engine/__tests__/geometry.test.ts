import { describe, it, expect } from 'vitest';
import {
  bearingToVec,
  vecToBearing,
  reciprocal,
  norm360,
  angularDiff,
  circleLineIntersect,
  tangentsFromPoint,
  footOfPerpendicular,
  speedFromDistanceTime,
} from '../geometry';

describe('conversão marcação ⇄ vetor', () => {
  it('Norte/Leste/Sul/Oeste', () => {
    expect(bearingToVec(0, 1)).toMatchObject({ x: expect.closeTo(0, 6), y: expect.closeTo(1, 6) });
    expect(bearingToVec(90, 1)).toMatchObject({ x: expect.closeTo(1, 6), y: expect.closeTo(0, 6) });
    expect(bearingToVec(180, 1)).toMatchObject({ x: expect.closeTo(0, 6), y: expect.closeTo(-1, 6) });
    expect(bearingToVec(270, 1)).toMatchObject({ x: expect.closeTo(-1, 6), y: expect.closeTo(0, 6) });
  });

  it('ida e volta preserva marcação e módulo', () => {
    for (const b of [0, 17, 63, 137, 217, 305, 359]) {
      const r = vecToBearing(bearingToVec(b, 12));
      expect(r.bearing).toBeCloseTo(b, 6);
      expect(r.magnitude).toBeCloseTo(12, 6);
    }
  });

  it('recíproca, norm360 e diferença angular', () => {
    expect(reciprocal(30)).toBe(210);
    expect(reciprocal(210)).toBe(30);
    expect(norm360(-10)).toBe(350);
    expect(angularDiff(350, 10)).toBe(20);
    expect(angularDiff(10, 190)).toBe(180);
  });
});

describe('geometria analítica', () => {
  it('interseção reta×circunferência: 2, 1 e 0 pontos', () => {
    const c = { x: 0, y: 0 };
    expect(circleLineIntersect(c, 5, { x: -10, y: 0 }, { x: 1, y: 0 })).toHaveLength(2);
    expect(circleLineIntersect(c, 5, { x: -10, y: 5 }, { x: 1, y: 0 })).toHaveLength(1); // tangente
    expect(circleLineIntersect(c, 5, { x: -10, y: 9 }, { x: 1, y: 0 })).toHaveLength(0);
  });

  it('tangentes de ponto externo tocam a circunferência', () => {
    const c = { x: 0, y: 0 };
    const ts = tangentsFromPoint(c, 3, { x: 10, y: 0 });
    expect(ts).toHaveLength(2);
    for (const t of ts) expect(Math.hypot(t.touch.x, t.touch.y)).toBeCloseTo(3, 6);
    expect(tangentsFromPoint(c, 3, { x: 1, y: 0 })).toHaveLength(0); // ponto interno
  });

  it('pé da perpendicular cai sobre a reta', () => {
    const f = footOfPerpendicular({ x: 0, y: 0 }, { x: -5, y: 4 }, { x: 1, y: 0 });
    expect(f).toMatchObject({ x: expect.closeTo(0, 6), y: expect.closeTo(4, 6) });
  });

  it('velocidade a partir de distância/tempo usa 2000 yd/nm', () => {
    expect(speedFromDistanceTime(3500, 7)).toBeCloseTo(15, 6); // gabarito gráfico da aula
  });
});

import { describe, it, expect } from 'vitest';
import { solveAnticolisao, solveContact } from '../index';
import {
  angularDiff,
  bearingToVec,
  footOfPerpendicular,
  magnitude,
  normalize,
  sub,
} from '../geometry';
import { parseHHMM } from '../time';
import type { Vec2 } from '../types';

const ORIGEM: Vec2 = { x: 0, y: 0 };

// Recalcula a PMA de forma INDEPENDENTE do solver (oráculo de autoverificação):
// distância da origem à reta do movimento relativo por M.
function pmaIndependente(
  ownCourse: number,
  ownSpeed: number,
  ct: number,
  st: number,
  marc: number,
  dist: number,
): number {
  const tr = bearingToVec(ownCourse, ownSpeed);
  const tm = bearingToVec(ct, st);
  const rm = sub(tm, tr);
  const M = bearingToVec(marc, dist);
  return magnitude(footOfPerpendicular(ORIGEM, M, normalize(rm)));
}

describe('Anticolisão — PMA atual coincide com a aba Contato (UE5 Aula 2)', () => {
  const contato = solveContact({
    own: { course: 260, speed: 12 },
    m1: { bearing: 20, range: 14000, timeMin: parseHHMM('0342') },
    m2: { bearing: 15, range: 11000, timeMin: parseHHMM('0349') },
  });
  it('o motor de anticolisão reproduz a PMA do solveContact (~4200 yd, 307,5°)', () => {
    const r = solveAnticolisao({
      own: { course: 260, speed: 12 },
      contato: { course: contato.targetCourse, speed: contato.targetSpeed },
      posicaoContato: { bearing: 15, range: 11000 },
      pmaDesejada: 6000,
    });
    expect(r.pmaAtual).toBeCloseTo(contato.cpa.distance, 0);
    expect(angularDiff(r.marcacaoPmaAtual, contato.cpa.bearing)).toBeLessThanOrEqual(1);
    expect(angularDiff(r.dmrAtual, contato.dmr)).toBeLessThanOrEqual(1);
  });
});

describe('Anticolisão — manobras atingem a PMA desejada (UE5 Aula 2)', () => {
  const own = { course: 260, speed: 12 };
  const contato = { course: 237, speed: 24 };
  const pos = { bearing: 15, range: 11000 };

  it('com PMA desejada 6000 > 4200, exige manobra e devolve soluções de rumo e velocidade', () => {
    const r = solveAnticolisao({ own, contato, posicaoContato: pos, pmaDesejada: 6000 });
    expect(r.necessaria).toBe(true);
    expect(r.possivel).toBe(true);
    expect(r.manobras.length).toBeGreaterThan(0);
    expect(r.manobras.some((m) => m.tipo === 'rumo')).toBe(true);
    expect(r.manobras.some((m) => m.tipo === 'velocidade')).toBe(true);
  });

  it('CADA manobra, recalculada do zero, produz PMA ≈ 6000 yd', () => {
    const r = solveAnticolisao({ own, contato, posicaoContato: pos, pmaDesejada: 6000 });
    for (const m of r.manobras) {
      const novoRumo = m.tipo === 'rumo' ? m.novoRumo : own.course;
      const novaVel = m.tipo === 'rumo' ? own.speed : m.novaVelocidade;
      const pma = pmaIndependente(novoRumo, novaVel, contato.course, contato.speed, pos.bearing, pos.range);
      expect(pma).toBeCloseTo(6000, -1); // ±~5 yd
      // a PMA reportada pelo solver bate com a recalculada
      expect(m.pmaResultante).toBeCloseTo(pma, -1);
    }
  });

  it('manobra de rumo mantém a velocidade; manobra de velocidade mantém o rumo', () => {
    const r = solveAnticolisao({ own, contato, posicaoContato: pos, pmaDesejada: 6000 });
    for (const m of r.manobras) {
      if (m.tipo === 'rumo') expect(m.novaVelocidade).toBeCloseTo(own.speed, 5);
      else expect(angularDiff(m.novoRumo, own.course)).toBeLessThanOrEqual(0.01);
    }
  });
});

describe('Anticolisão — casos de borda', () => {
  const own = { course: 260, speed: 12 };
  const contato = { course: 237, speed: 24 };
  const pos = { bearing: 15, range: 11000 };

  it('PMA desejada menor que a atual ⇒ nenhuma manobra necessária', () => {
    const r = solveAnticolisao({ own, contato, posicaoContato: pos, pmaDesejada: 3000 });
    expect(r.necessaria).toBe(false);
    expect(r.manobras).toHaveLength(0);
  });

  it('PMA desejada maior que a distância atual ⇒ impossível (contato dentro do círculo)', () => {
    const r = solveAnticolisao({ own, contato, posicaoContato: pos, pmaDesejada: 12000 });
    expect(r.possivel).toBe(false);
    expect(r.motivo).toBeTruthy();
    expect(r.manobras).toHaveLength(0);
  });

  it('entradas inválidas lançam erro', () => {
    expect(() => solveAnticolisao({ own, contato, posicaoContato: { bearing: NaN, range: 11000 }, pmaDesejada: 6000 })).toThrow();
    expect(() => solveAnticolisao({ own, contato, posicaoContato: pos, pmaDesejada: -1 })).toThrow();
  });
});

describe('Anticolisão — colisão de proa simétrica (caso sintético claro)', () => {
  // Navio ao norte (000/15); contato 12000 yd à frente, vindo de proa (180/15): rota de colisão (PMA = 0).
  const own = { course: 0, speed: 15 };
  const contato = { course: 180, speed: 15 };
  const pos = { bearing: 0, range: 12000 };

  it('PMA atual ≈ 0 (rota de colisão)', () => {
    const r = solveAnticolisao({ own, contato, posicaoContato: pos, pmaDesejada: 2000 });
    expect(r.pmaAtual).toBeLessThan(1);
    expect(r.necessaria).toBe(true);
  });

  it('as manobras de rumo recalculadas abrem a PMA para ≈ 2000 yd, uma por bordo', () => {
    const r = solveAnticolisao({ own, contato, posicaoContato: pos, pmaDesejada: 2000 });
    const rumos = r.manobras.filter((m) => m.tipo === 'rumo');
    expect(rumos.length).toBeGreaterThanOrEqual(2);
    expect(rumos.some((m) => m.bordo === 'BE')).toBe(true);
    expect(rumos.some((m) => m.bordo === 'BB')).toBe(true);
    for (const m of rumos) {
      const pma = pmaIndependente(m.novoRumo, own.speed, contato.course, contato.speed, pos.bearing, pos.range);
      expect(pma).toBeCloseTo(2000, -1);
    }
  });
});

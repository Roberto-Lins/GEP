import { describe, it, expect } from 'vitest';
import { solveContact, relativeFromTrue } from '../relativeMotion';
import { angularDiff } from '../geometry';
import { parseHHMM, formatHHMM } from '../time';

// ── Caso-ouro: UE5 Aula 2 ───────────────────────────────────────────────────
// Próprio 260°/12kt; 0342P 020°/14000yd (M1); 0349P 015°/11000yd (M2).
// Gabarito GRÁFICO da aula: DMR 217°, Drel 3500yd, VMR 15kt, PMA 307°/4200yd/0410P, alvo 238°/25kt.
// Oráculo ANALÍTICO (lei dos cossenos): Drel 3189yd, VMR 13,67kt, alvo 237°/24kt — o resto bate.
describe('solveContact — UE5 Aula 2', () => {
  const r = solveContact({
    own: { course: 260, speed: 12 },
    m1: { bearing: 20, range: 14000, timeMin: parseHHMM('0342') },
    m2: { bearing: 15, range: 11000, timeMin: parseHHMM('0349') },
  });

  it('valores ANALÍTICOS exatos (oráculo A)', () => {
    expect(r.dmr).toBeCloseTo(217.46, 1);
    expect(r.relDistance).toBeCloseTo(3189.4, 0);
    expect(r.vmr).toBeCloseTo(13.67, 1);
    expect(r.targetCourse).toBeCloseTo(237.27, 1);
    expect(r.targetSpeed).toBeCloseTo(23.93, 1);
    expect(r.cpa.bearing).toBeCloseTo(307.48, 1);
    expect(r.cpa.distance).toBeCloseTo(4208.4, 0); // = |M1 × û|, confere por produto vetorial

    expect(formatHHMM(r.cpa.timeMin)).toBe('0411');
    expect(r.cpa.collision).toBe(false);
    expect(r.cpa.passed).toBe(false);
  });

  it('compatível com o gabarito GRÁFICO da aula dentro da tolerância (oráculo B)', () => {
    expect(angularDiff(r.dmr, 217)).toBeLessThanOrEqual(1);
    expect(angularDiff(r.targetCourse, 238)).toBeLessThanOrEqual(2);
    expect(angularDiff(r.cpa.bearing, 307)).toBeLessThanOrEqual(2);
    expect(Math.abs(r.cpa.distance - 4200) / 4200).toBeLessThanOrEqual(0.05);
    expect(Math.abs(r.cpa.timeMin - parseHHMM('0410'))).toBeLessThanOrEqual(2);
  });

  it('documenta o ERRO GRÁFICO da fonte em Drel/VMR (3500yd/15kt vs 3189yd/13,7kt)', () => {
    // A distância M1–M2 exata é 3189 yd; a aula leu 3500 (≈10% a mais).
    expect(Math.abs(r.relDistance - 3500)).toBeGreaterThan(250);
    expect(Math.abs(r.vmr - 15)).toBeGreaterThan(1);
  });
});

// ── Caso canônico do Miguens (Fig. 14.55–14.62): diagrama de velocidades direto.
describe('relativeFromTrue — Miguens', () => {
  it('R 000°/15kt e M 026°/22kt → DMR 063°, VMR 11kt', () => {
    const { dmr, vmr } = relativeFromTrue({ course: 0, speed: 15 }, { course: 26, speed: 22 });
    expect(angularDiff(dmr, 63)).toBeLessThanOrEqual(1);
    expect(vmr).toBeCloseTo(11, 0);
  });
});

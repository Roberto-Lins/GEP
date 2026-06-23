import { describe, expect, it } from 'vitest';
import { circleLineIntersect, dist, dot, norm360, tangentsFromPoint } from '../geometry';
import { solveDVT } from '../nomogram';
import { solveContact } from '../relativeMotion';
import { solveStation } from '../station';
import { formatHHMM, parseHHMM } from '../time';
import { solveApparentWind, solveDeckLaunch, solveTrueWind, type Bordo } from '../wind';

const EPS = 1e-7;

function angularClose(a: number, b: number, tol = 1e-6) {
  const d = Math.abs(norm360(a) - norm360(b));
  expect(Math.min(d, 360 - d)).toBeLessThanOrEqual(tol);
}

function expectDeckRoundTrip(
  trueWind: { from: number; speed: number },
  desired: { angle: number; bordo: Bordo; speed: number },
) {
  const result = solveDeckLaunch(trueWind, desired);
  expect(result.feasible).toBe(true);
  expect(result.solutions.length).toBeGreaterThan(0);

  for (const solution of result.solutions) {
    const apparent = solveApparentWind(
      { course: solution.course, speed: solution.speed },
      trueWind,
    );

    expect(apparent.speed).toBeCloseTo(desired.speed, 6);
    angularClose(apparent.relBearing, desired.angle, 1e-6);

    if (desired.angle !== 0 && desired.angle !== 180) {
      expect(apparent.bordo).toBe(desired.bordo);
    }
  }
}

describe('codex adversarial — movimento relativo', () => {
  it('resolve marcações antípodas com distâncias iguais como colisão no meio do intervalo', () => {
    const result = solveContact({
      own: { course: 90, speed: 10 },
      m1: { bearing: 0, range: 1000, timeMin: 0 },
      m2: { bearing: 180, range: 1000, timeMin: 6 },
    });

    angularClose(result.dmr, 180);
    expect(result.relDistance).toBeCloseTo(2000, 6);
    expect(result.vmr).toBeCloseTo(10, 6);
    expect(result.cpa.collision).toBe(true);
    expect(result.cpa.distance).toBeLessThan(EPS);
    expect(result.cpa.timeMin).toBeCloseTo(3, 6);
  });

  it('rejeita M2 no mesmo instante ou antes de M1', () => {
    const base = {
      own: { course: 0, speed: 10 },
      m1: { bearing: 0, range: 1000, timeMin: 10 },
    };

    expect(() =>
      solveContact({ ...base, m2: { bearing: 10, range: 900, timeMin: 10 } }),
    ).toThrow();
    expect(() =>
      solveContact({ ...base, m2: { bearing: 10, range: 900, timeMin: 9 } }),
    ).toThrow();
  });

  it('mantem resultado finito com valores muito grandes', () => {
    const result = solveContact({
      own: { course: 270, speed: 15 },
      m1: { bearing: 45, range: 1e12, timeMin: 0 },
      m2: { bearing: 45, range: 1e12 - 2000, timeMin: 1 },
    });

    expect(Number.isFinite(result.dmr)).toBe(true);
    expect(Number.isFinite(result.relDistance)).toBe(true);
    expect(Number.isFinite(result.vmr)).toBe(true);
    expect(Number.isFinite(result.targetSpeed)).toBe(true);
  });

  it('sem movimento relativo preserva o vetor verdadeiro do alvo e deixa o tempo do PMA indefinido', () => {
    const result = solveContact({
      own: { course: 45, speed: 12 },
      m1: { bearing: 90, range: 8000, timeMin: 0 },
      m2: { bearing: 90, range: 8000, timeMin: 6 },
    });

    expect(result.vmr).toBeCloseTo(0, 12);
    angularClose(result.targetCourse, 45);
    expect(result.targetSpeed).toBeCloseTo(12, 12);
    expect(Number.isNaN(result.cpa.timeMin)).toBe(true);
  });
});

describe('codex adversarial — vento real/aparente', () => {
  it('trata proa e popa exatas sem trocar bordo ou recíproca', () => {
    const proa = solveApparentWind({ course: 0, speed: 10 }, { from: 0, speed: 20 });
    expect(proa.speed).toBeCloseTo(30, 12);
    expect(proa.relBearing).toBeCloseTo(0, 12);
    expect(proa.bordo).toBe('BE');

    const popa = solveApparentWind({ course: 0, speed: 10 }, { from: 180, speed: 20 });
    expect(popa.speed).toBeCloseTo(10, 12);
    expect(popa.relBearing).toBeCloseTo(180, 12);
    expect(popa.bordo).toBe('BE');
  });

  it('vento aparente zero nao explode, mas sua direcao fica semanticamente indefinida', () => {
    const apparent = solveApparentWind({ course: 60, speed: 10 }, { from: 240, speed: 10 });

    expect(apparent.speed).toBeCloseTo(0, 12);
    expect(Number.isFinite(apparent.from)).toBe(true);
    expect(Number.isFinite(apparent.relBearing)).toBe(true);
  });

  it('fecha ida-e-volta real -> aparente -> real em uma malha de casos nao degenerados', () => {
    const courses = [0, 73, 181, 359];
    const shipSpeeds = [0, 5, 12];
    const windFroms = [0, 45, 180, 333];
    const windSpeeds = [1, 9, 30];

    for (const course of courses) {
      for (const shipSpeed of shipSpeeds) {
        for (const from of windFroms) {
          for (const windSpeed of windSpeeds) {
            const trueWind = { from, speed: windSpeed };
            const apparent = solveApparentWind({ course, speed: shipSpeed }, trueWind);
            if (apparent.speed < 1e-9) continue;

            const rebuilt = solveTrueWind(
              { course, speed: shipSpeed },
              {
                tipo: 'relativo',
                direcao: apparent.relBearing,
                bordo: apparent.bordo,
                intensidade: apparent.speed,
              },
            );

            angularClose(rebuilt.from, from, 1e-6);
            expect(rebuilt.speed).toBeCloseTo(windSpeed, 8);
          }
        }
      }
    }
  });
});

describe('codex adversarial — conves de voo', () => {
  it('caso didatico 315/10 + 30kt @ 10BB tem duas solucoes e recompõe o vento pedido', () => {
    const result = solveDeckLaunch({ from: 315, speed: 10 }, { angle: 10, bordo: 'BB', speed: 30 });

    expect(result.solutions).toHaveLength(2);
    expect(result.solutions[0].speed).toBeCloseTo(21.0083272867, 8);
    angularClose(result.solutions[0].course, 346.3956302519, 1e-6);
    expectDeckRoundTrip({ from: 315, speed: 10 }, { angle: 10, bordo: 'BB', speed: 30 });
  });

  it('caso didatico 345/11 + 24kt @ 60BB nao tem solucao', () => {
    const result = solveDeckLaunch({ from: 345, speed: 11 }, { angle: 60, bordo: 'BB', speed: 24 });

    expect(result.feasible).toBe(false);
    expect(result.solutions).toHaveLength(0);
  });

  it('tangencia discriminante zero retorna uma unica solucao valida', () => {
    const result = solveDeckLaunch({ from: 0, speed: 10 }, { angle: 30, bordo: 'BE', speed: 20 });

    expect(result.feasible).toBe(true);
    expect(result.solutions).toHaveLength(1);
    expectDeckRoundTrip({ from: 0, speed: 10 }, { angle: 30, bordo: 'BE', speed: 20 });
  });

  it('cobre angulos extremos 0 e 180 com round-trip', () => {
    expectDeckRoundTrip({ from: 0, speed: 10 }, { angle: 0, bordo: 'BE', speed: 25 });
    expectDeckRoundTrip({ from: 0, speed: 30 }, { angle: 180, bordo: 'BE', speed: 10 });
  });

  it('espelha BB e BE sem violar o round-trip', () => {
    expectDeckRoundTrip({ from: 315, speed: 10 }, { angle: 10, bordo: 'BB', speed: 30 });
    expectDeckRoundTrip({ from: 315, speed: 10 }, { angle: 10, bordo: 'BE', speed: 30 });
  });

  it('rejeita angulo desejado fora do contrato 0..180', () => {
    expect(() =>
      solveDeckLaunch({ from: 315, speed: 10 }, { angle: 190, bordo: 'BE', speed: 30 }),
    ).toThrow();
  });
});

describe('codex adversarial — entrada em posicao', () => {
  it('velocidade de manobra zero ainda permite deslocamento relativo se o guia se afasta', () => {
    const result = solveStation({
      guide: { course: 90, speed: 10 },
      ownSpeed: 0,
      displacement: { bearing: 270, distance: 1000 },
    });

    expect(result.feasible).toBe(true);
    expect(result.solutions).toHaveLength(1);
    expect(result.solutions[0].vmr).toBeCloseTo(10, 12);
    expect(result.solutions[0].timeMin).toBeCloseTo(3, 12);
  });

  it('deslocamento zero nao produz tempo negativo nem infinito', () => {
    const result = solveStation({
      guide: { course: 90, speed: 10 },
      ownSpeed: 15,
      displacement: { bearing: 90, distance: 0 },
    });

    expect(result.feasible).toBe(true);
    expect(result.solutions.length).toBeGreaterThan(0);
    for (const solution of result.solutions) {
      expect(solution.timeMin).toBe(0);
    }
  });

  it('cobre guia mais rapido com 0, 1 e 2 solucoes', () => {
    const none = solveStation({
      guide: { course: 0, speed: 20 },
      ownSpeed: 5,
      displacement: { bearing: 90, distance: 2000 },
    });
    expect(none.feasible).toBe(false);

    const tangent = solveStation({
      guide: { course: 45, speed: Math.sqrt(200) },
      ownSpeed: 10,
      displacement: { bearing: 270, distance: 2000 },
    });
    expect(tangent.feasible).toBe(true);
    expect(tangent.solutions).toHaveLength(1);

    const two = solveStation({
      guide: { course: 315, speed: 30 },
      ownSpeed: 5,
      displacement: { bearing: 135, distance: 2000 },
    });
    expect(two.feasible).toBe(true);
    expect(two.solutions).toHaveLength(2);
  });
});

describe('codex adversarial — nomograma e horario', () => {
  it('rejeita zero e valores negativos no DVT', () => {
    expect(() => solveDVT({ distanceNm: 1, speedKt: 0 })).toThrow();
    expect(() => solveDVT({ distanceNm: -1, timeMin: 6 })).toThrow();
    expect(() => solveDVT({ speedKt: 12, timeMin: -3 })).toThrow();
  });

  it('rejeita tres campos preenchidos no DVT', () => {
    expect(() => solveDVT({ distanceNm: 1, speedKt: 10, timeMin: 6 })).toThrow();
  });

  it('rejeita HHMM invalido e lixo depois do fuso', () => {
    expect(parseHHMM('0342P')).toBe(222);
    expect(() => parseHHMM('2460')).toThrow();
    expect(() => parseHHMM('0342PXYZ')).toThrow();
  });

  it('formata horario com wrap de 24h', () => {
    expect(formatHHMM(1440)).toBe('0000');
    expect(formatHHMM(-1)).toBe('2359');
  });
});

describe('codex adversarial — geometria', () => {
  it('circleLineIntersect distingue tangencia e reta externa', () => {
    const tangent = circleLineIntersect({ x: 0, y: 0 }, 5, { x: -10, y: 5 }, { x: 1, y: 0 });
    expect(tangent).toHaveLength(1);
    expect(tangent[0].x).toBeCloseTo(0, 12);
    expect(tangent[0].y).toBeCloseTo(5, 12);

    const outside = circleLineIntersect({ x: 0, y: 0 }, 5, { x: -10, y: 6 }, { x: 1, y: 0 });
    expect(outside).toHaveLength(0);
  });

  it('tangentsFromPoint retorna tangentes geometricamente perpendiculares', () => {
    const onCircle = tangentsFromPoint({ x: 0, y: 0 }, 1, { x: 1, y: 0 });
    expect(onCircle).toHaveLength(1);
    expect(dist(onCircle[0].touch, { x: 1, y: 0 })).toBeLessThan(EPS);

    const outside = tangentsFromPoint({ x: 0, y: 0 }, 1, { x: 2, y: 0 });
    expect(outside).toHaveLength(2);

    for (const tangent of outside) {
      expect(dist(tangent.touch, { x: 0, y: 0 })).toBeCloseTo(1, 12);
      expect(dot(tangent.touch, tangent.dir)).toBeCloseTo(0, 12);
    }
  });
});

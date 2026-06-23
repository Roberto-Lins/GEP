// Primitivas de geometria e conversão náutica — a BASE da precisão.
// Tudo que fala "marcação" passa por `bearingToVec`/`vecToBearing` (ponto único de verdade).
import type { Bearing, Vec2, Yards, NauticalMiles } from './types';

/** Convenção de placa de manobra: 1 milha náutica = 2000 jardas.
 *  (Os gabaritos das aulas usam esta aproximação — ex.: 3500 yd / 7 min = 15 nós.) */
export const YD_PER_NM = 2000;

const DEG = Math.PI / 180;
const RAD = 180 / Math.PI;

export const toRad = (deg: number): number => deg * DEG;
export const toDeg = (rad: number): number => rad * RAD;

/** Normaliza um ângulo para [0, 360). */
export function norm360(a: number): number {
  return ((a % 360) + 360) % 360;
}

/** Recíproca (anti-recíproca) de uma marcação: b ± 180. */
export function reciprocal(b: Bearing): Bearing {
  return norm360(b + 180);
}

/** Diferença angular mínima entre dois rumos, em [0, 180]. */
export function angularDiff(a: Bearing, b: Bearing): number {
  const d = Math.abs(norm360(a) - norm360(b)) % 360;
  return d > 180 ? 360 - d : d;
}

/** Marcação + módulo → vetor (x = Leste, y = Norte). */
export function bearingToVec(bearing: Bearing, magnitude: number): Vec2 {
  const r = toRad(bearing);
  return { x: magnitude * Math.sin(r), y: magnitude * Math.cos(r) };
}

/** Vetor → { marcação, módulo }. atan2(x, y) dá o ângulo horário a partir do Norte. */
export function vecToBearing(v: Vec2): { bearing: Bearing; magnitude: number } {
  const magnitude = Math.hypot(v.x, v.y);
  if (magnitude < 1e-12) return { bearing: 0, magnitude: 0 };
  return { bearing: norm360(toDeg(Math.atan2(v.x, v.y))), magnitude };
}

// --- Álgebra vetorial ---------------------------------------------------------
export const add = (a: Vec2, b: Vec2): Vec2 => ({ x: a.x + b.x, y: a.y + b.y });
export const sub = (a: Vec2, b: Vec2): Vec2 => ({ x: a.x - b.x, y: a.y - b.y });
export const scale = (a: Vec2, k: number): Vec2 => ({ x: a.x * k, y: a.y * k });
export const dot = (a: Vec2, b: Vec2): number => a.x * b.x + a.y * b.y;
export const magnitude = (a: Vec2): number => Math.hypot(a.x, a.y);
export const dist = (a: Vec2, b: Vec2): number => Math.hypot(a.x - b.x, a.y - b.y);

export function normalize(a: Vec2): Vec2 {
  const m = magnitude(a);
  return m < 1e-12 ? { x: 0, y: 0 } : { x: a.x / m, y: a.y / m };
}

// --- Conversões de unidade ----------------------------------------------------
export const yardsToNm = (yd: Yards): NauticalMiles => yd / YD_PER_NM;
export const nmToYards = (nm: NauticalMiles): Yards => nm * YD_PER_NM;

/** Velocidade (nós) a partir de distância (jardas) e tempo (minutos). */
export function speedFromDistanceTime(yards: Yards, minutes: number): number {
  if (minutes <= 0) return NaN;
  return yardsToNm(yards) / (minutes / 60);
}

/** Tempo (minutos) para percorrer uma distância (jardas) a uma velocidade (nós). */
export function timeFromDistanceSpeed(yards: Yards, knots: number): number {
  if (knots <= 0) return Infinity;
  return (yardsToNm(yards) / knots) * 60;
}

// --- Geometria analítica ------------------------------------------------------

/** Pé da perpendicular de `p` à reta que passa por `lineP` com direção `lineDir`. */
export function footOfPerpendicular(p: Vec2, lineP: Vec2, lineDir: Vec2): Vec2 {
  const u = normalize(lineDir);
  const t = dot(sub(p, lineP), u);
  return add(lineP, scale(u, t));
}

/** Interseções de uma reta (p + t·dir) com uma circunferência (centro c, raio r).
 *  Retorna 0, 1 ou 2 pontos — base dos problemas de convés e de entrada em posição. */
export function circleLineIntersect(c: Vec2, r: number, p: Vec2, dir: Vec2): Vec2[] {
  const d = dir;
  const f = sub(p, c);
  const a = dot(d, d);
  if (a < 1e-12) return [];
  const b = 2 * dot(f, d);
  const cc = dot(f, f) - r * r;
  const disc = b * b - 4 * a * cc;
  if (disc < -1e-9) return [];
  if (disc < 1e-9) {
    const t = -b / (2 * a);
    return [add(p, scale(d, t))];
  }
  const s = Math.sqrt(disc);
  const t1 = (-b - s) / (2 * a);
  const t2 = (-b + s) / (2 * a);
  return [add(p, scale(d, t1)), add(p, scale(d, t2))];
}

/** Retas tangentes do ponto externo `p` à circunferência (centro c, raio r).
 *  Retorna as direções tangentes (unitárias) e os pontos de tangência.
 *  Vazio se `p` estiver dentro da circunferência. */
export function tangentsFromPoint(
  c: Vec2,
  r: number,
  p: Vec2,
): { dir: Vec2; touch: Vec2 }[] {
  const toC = sub(c, p);
  const d = magnitude(toC);
  if (d < r - 1e-9) return [];
  if (d < r + 1e-9) {
    // p sobre a circunferência: tangente única perpendicular ao raio.
    const radial = normalize(toC);
    return [{ dir: { x: -radial.y, y: radial.x }, touch: { ...p } }];
  }
  const tangentLen = Math.sqrt(d * d - r * r);
  const base = Math.atan2(toC.x, toC.y); // marcação de p→c (sistema náutico)
  const alpha = Math.asin(r / d);
  return [base - alpha, base + alpha].map((ang) => {
    const dir = { x: Math.sin(ang), y: Math.cos(ang) };
    return { dir, touch: add(p, scale(dir, tangentLen)) };
  });
}

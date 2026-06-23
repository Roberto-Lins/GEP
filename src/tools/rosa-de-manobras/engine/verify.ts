// Verificação da resposta do aluno: tolerâncias + diagnóstico de erros clássicos.
import type { Bearing } from './types';
import { angularDiff, norm360 } from './geometry';

export interface FieldCheck {
  ok: boolean;
  /** Diferença absoluta (graus para marcação, unidade da grandeza para escalares). */
  diff: number;
  /** Resposta é a recíproca da correta (±180°). */
  reciprocal?: boolean;
}

export interface Diagnosis {
  code: 'reciproca' | 'escala' | 'unidade' | 'preciso' | 'fora';
  message: string;
}

/** Confere uma marcação/rumo, detectando a recíproca. */
export function checkBearing(
  student: Bearing,
  correct: Bearing,
  tolDeg = 2,
): FieldCheck {
  const diff = angularDiff(student, correct);
  const reciprocal = angularDiff(student, norm360(correct + 180)) <= tolDeg;
  return { ok: diff <= tolDeg, diff, reciprocal };
}

/** Confere um escalar (distância, velocidade, tempo) por tolerância absoluta. */
export function checkScalar(student: number, correct: number, tolAbs: number): FieldCheck {
  return { ok: Math.abs(student - correct) <= tolAbs, diff: Math.abs(student - correct) };
}

/** Confere um escalar por tolerância relativa (fração, ex.: 0.05 = 5%). */
export function checkScalarRel(
  student: number,
  correct: number,
  tolFrac: number,
): FieldCheck {
  const diff = Math.abs(student - correct);
  const tol = Math.abs(correct) * tolFrac;
  return { ok: diff <= tol, diff };
}

/** Diagnóstico de um campo de marcação: recíproca, perto-mas-impreciso, ou fora. */
export function diagnoseBearing(
  student: Bearing,
  correct: Bearing,
  tolDeg = 2,
): Diagnosis | null {
  const c = checkBearing(student, correct, tolDeg);
  if (c.ok) return null;
  if (c.reciprocal)
    return {
      code: 'reciproca',
      message: 'Você tomou a recíproca (±180°). Confira o sentido do movimento (M1→M2).',
    };
  if (c.diff <= tolDeg * 3)
    return {
      code: 'preciso',
      message: `Perto: erro de ${c.diff.toFixed(1)}°. Revise a leitura da marcação na escala.`,
    };
  return { code: 'fora', message: `Marcação fora: erro de ${c.diff.toFixed(0)}°.` };
}

/** Detecta uso de escala trocada (resposta = correta × fator comum 2..5 ou 1/2..1/5). */
export function diagnoseScale(student: number, correct: number): Diagnosis | null {
  if (correct === 0) return null;
  const ratio = student / correct;
  for (const f of [2, 3, 4, 5]) {
    if (Math.abs(ratio - f) < 0.05 || Math.abs(ratio - 1 / f) < 0.02) {
      return {
        code: 'escala',
        message: `Possível escala trocada (fator ~${f}:1). Confira a escala usada na plotagem.`,
      };
    }
  }
  return null;
}

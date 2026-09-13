import { describe, expect, it } from 'vitest';
// @ts-ignore — utilitário ESM compartilhado com astro.config.mjs.
import { looksLikeMath, normalizeLegacyMath } from './math-notation.mjs';

describe('math notation compatibility', () => {
  it('recognizes formulas but not course/source identifiers', () => {
    expect(looksLikeMath('S₁ = P / (4πR²)')).toBe(true);
    expect(looksLikeMath('R_máx')).toBe(true);
    expect(looksLikeMath('SUE6.11')).toBe(false);
    expect(looksLikeMath('M06')).toBe(false);
    expect(looksLikeMath('P-08')).toBe(false);
  });

  it('turns simple legacy division into a real fraction', () => {
    expect(normalizeLegacyMath('S₁ = P / (4πR²)')).toBe(
      'S_{1} = \\frac{P}{4\\pi R^{2}}',
    );
  });

  it('preserves left-to-right precedence after division', () => {
    expect(normalizeLegacyMath('x^2/r * b * d')).toBe(
      '\\frac{x^{2}}{r} \\cdot b \\cdot d',
    );
  });

  it('formats named subscripts and an S/N ratio', () => {
    expect(normalizeLegacyMath('S_mín = F_n·k·T₀·B_n·(S/N)_mín')).toContain(
      '\\left(\\frac{S}{N}\\right)_{\\mathrm{mín}}',
    );
  });

  it('formats the fourth-power radar range expression without changing values', () => {
    const rendered = normalizeLegacyMath(
      'R_máx = [ P·G·A_a·A / ((4π)²·S_mín) ]^(1/4)',
    );
    expect(rendered).toContain('R_{\\mathrm{máx}}');
    expect(rendered).toContain('\\frac{P\\cdot G\\cdot A_{\\mathrm{a}}\\cdot A}');
    expect(rendered).toContain('^{\\frac{1}{4}}');
  });
});

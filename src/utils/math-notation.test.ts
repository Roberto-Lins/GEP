import { describe, expect, it } from 'vitest';
// @ts-ignore — utilitário ESM compartilhado com astro.config.mjs.
import { looksLikeMath, normalizeLegacyMath } from './math-notation.mjs';

describe('math notation compatibility', () => {
  it('recognizes formulas but not course/source/navigation identifiers', () => {
    expect(looksLikeMath('S₁ = P / (4πR²)')).toBe(true);
    expect(looksLikeMath('R_máx')).toBe(true);
    expect(looksLikeMath('SUE6.11')).toBe(false);
    expect(looksLikeMath('M06')).toBe(false);
    expect(looksLikeMath('P-08')).toBe(false);
    expect(looksLikeMath('M00 → M01 → M02')).toBe(false);
    expect(looksLikeMath('${sourcePath}/arquivo.pdf')).toBe(false);
    expect(looksLikeMath('**M00** → **M01**')).toBe(false);
    expect(looksLikeMath('P2/Aulas P2/arquivo.pdf')).toBe(false);
    expect(looksLikeMath('ESSENCIAL_ATÉ_DOMINGO')).toBe(false);
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
      '\\left(\\frac{S}{N}\\right)_{\\text{mín}}',
    );
  });

  it('formats the fourth-power radar range expression without changing values', () => {
    const rendered = normalizeLegacyMath(
      'R_máx = [ P·G·A_a·A / ((4π)²·S_mín) ]^(1/4)',
    );
    expect(rendered).toContain('R_{\\text{máx}}');
    expect(rendered).toContain('\\frac{P\\cdot G\\cdot A_{\\mathrm{a}}\\cdot A}');
    expect(rendered).toContain('^{\\frac{1}{4}}');
  });

  it('keeps a power attached to the whole denominator of the radar equation', () => {
    expect(normalizeLegacyMath(
      'S₃ = P_a / (4πR²) = P·G_t·A_a / (4πR²)²',
    )).toBe(
      'S_{3} = \\frac{P_{\\mathrm{a}}}{4\\pi R^{2}} = ' +
      '\\frac{P\\cdot G_{\\mathrm{t}}\\cdot A_{\\mathrm{a}}}' +
      '{\\left(4\\pi R^{2}\\right)^{2}}',
    );

    expect(normalizeLegacyMath(
      'P_r = P·G_t·A_a·A / (4πR²)²',
    )).toContain(
      '{\\left(4\\pi R^{2}\\right)^{2}}',
    );
  });

  it('does not duplicate the LaTeX command for pi', () => {
    const rendered = normalizeLegacyMath('π');
    expect(rendered).toBe('\\pi');
    expect([...rendered].filter((char) => char === '\\')).toHaveLength(1);
  });

  it('keeps parenthesized exponents parseable without corrupting exponentials', () => {
    expect(normalizeLegacyMath('G = 10^(G(dB)/10)')).toBe(
      'G = 10^{\\frac{G(dB)}{10}}',
    );
    expect(normalizeLegacyMath('v(t) = V(1 − e^(−t/RC))')).toBe(
      'v(t) = V(1 − e^{\\frac{−t}{RC}})',
    );
  });

  it('groups the FRP product in the denominator', () => {
    expect(normalizeLegacyMath('R_máx = c/2·FRP')).toBe(
      'R_{\\text{máx}} = \\frac{c}{2\\cdot FRP}',
    );
  });
});

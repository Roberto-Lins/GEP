// Formatação de grandezas para as calculadoras do curso Detecção.
export function fmtTempo(s: number): string {
  if (!Number.isFinite(s)) return '—';
  if (s >= 1) return `${s.toFixed(3)} s`;
  if (s >= 1e-3) return `${(s * 1e3).toFixed(3)} ms`;
  return `${(s * 1e6).toFixed(1)} µs`;
}

export function fmtFreq(hz: number): string {
  if (!Number.isFinite(hz)) return '—';
  if (hz >= 1e6) return `${(hz / 1e6).toFixed(2)} MHz`;
  if (hz >= 1e3) return `${(hz / 1e3).toFixed(2)} kHz`;
  return `${hz.toFixed(1)} Hz`;
}

export function fmtNum(v: number, casas = 2): string {
  return Number.isFinite(v) ? v.toFixed(casas) : '—';
}

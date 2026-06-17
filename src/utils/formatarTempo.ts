// Formatação de tempo.

/** Extrai os minutos de uma string como "75 min". */
export function minutos(tempo: string): number {
  const m = tempo.match(/(\d+)/);
  return m ? parseInt(m[1], 10) : 0;
}

/** Soma uma lista de tempos ("45 min", "1h 15min" …) e devolve "Xh Ymin". */
export function somarTempos(tempos: string[]): string {
  const total = tempos.reduce((acc, t) => acc + minutos(t), 0);
  const h = Math.floor(total / 60);
  const min = total % 60;
  if (h === 0) return `${min} min`;
  if (min === 0) return `${h}h`;
  return `${h}h ${min}min`;
}

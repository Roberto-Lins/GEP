// Conversão de horário tático HHMM ⇄ minutos.
import type { Minutes } from './types';

/** "0342" → 222 minutos desde a meia-noite. Aceita sufixo de fuso (ex.: "0342P"). */
export function parseHHMM(s: string): Minutes {
  const m = s.trim().match(/^(\d{2})(\d{2})([A-Za-z])?$/);
  if (!m) throw new Error(`Horário inválido: "${s}" (esperado HHMM, ex.: 0342 ou 0342P).`);
  const h = Number(m[1]);
  const min = Number(m[2]);
  if (h > 23 || min > 59) throw new Error(`Horário fora de faixa: "${s}".`);
  return h * 60 + min;
}

/** 250 → "0410". Faz wrap em 24h. */
export function formatHHMM(minutes: Minutes): string {
  const t = ((Math.round(minutes) % 1440) + 1440) % 1440;
  const h = Math.floor(t / 60);
  const m = t % 60;
  return `${String(h).padStart(2, '0')}${String(m).padStart(2, '0')}`;
}

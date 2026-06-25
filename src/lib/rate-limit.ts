// Rate limiting BEST-EFFORT em memória (janela fixa).
//
// ⚠️ Limitação consciente: o estado é por instância/processo — em serverless com
// várias instâncias NÃO é um limite global. Serve como primeira barreira barata
// contra reenvio/abuso. O GoTrue (Supabase Auth) já aplica rate limit próprio nos
// endpoints de auth. Para um limite durável e global, usar um store compartilhado
// (tabela no Postgres ou Upstash/Redis) — fase futura.

interface Entry {
  count: number;
  resetAt: number;
}

const store = new Map<string, Entry>();
const MAX_KEYS = 5000; // prune simples para não crescer sem limite

export interface RateLimitResult {
  allowed: boolean;
  retryAfterSec: number;
  remaining: number;
}

/** Consome 1 do orçamento de `key`. `max` requisições por janela de `windowMs`. */
export function rateLimit(key: string, max: number, windowMs: number): RateLimitResult {
  const now = Date.now();

  if (store.size > MAX_KEYS) {
    for (const [k, e] of store) if (now >= e.resetAt) store.delete(k);
  }

  const entry = store.get(key);
  if (!entry || now >= entry.resetAt) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, retryAfterSec: 0, remaining: max - 1 };
  }
  if (entry.count >= max) {
    return { allowed: false, retryAfterSec: Math.ceil((entry.resetAt - now) / 1000), remaining: 0 };
  }
  entry.count += 1;
  return { allowed: true, retryAfterSec: 0, remaining: max - entry.count };
}

/** Chave best-effort por IP (X-Forwarded-For setado pela plataforma; spoofável fora dela). */
export function clientKey(request: Request, scope: string): string {
  const xff = request.headers.get('x-forwarded-for') ?? '';
  const ip = xff.split(',')[0]?.trim() || 'unknown';
  return `${scope}:${ip}`;
}

/** Apenas para testes: zera o estado. */
export function __resetRateLimit(): void {
  store.clear();
}

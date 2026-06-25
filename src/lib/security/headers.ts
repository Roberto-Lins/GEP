// Cabeçalhos de segurança (aplicados pelo middleware nas respostas SSR).
//
// A CSP é PRAGMÁTICA para a Fase 1: precisa NÃO quebrar o conteúdo curado existente,
// que usa Google Fonts, scripts `is:inline` (ex.: botão "voltar ao topo"), estilos
// inline e embeds do YouTube. Por isso `script-src`/`style-src` ainda permitem
// 'unsafe-inline' — mas NUNCA 'unsafe-eval'.
//
// TODO(UGC): ao introduzir conteúdo da comunidade, endurecer com nonces/hashes e
// remover 'unsafe-inline' de script-src (ver ADR 0006).
//
// IMPORTANTE: o valor de CONTENT_SECURITY_POLICY DEVE permanecer idêntico ao de
// vercel.json (há um teste de sincronia em src/lib/security/__tests__).

export const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
  "form-action 'self'",
  "img-src 'self' data: https:",
  "media-src 'self' data: https:",
  "font-src 'self' https://fonts.gstatic.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "script-src 'self' 'unsafe-inline'",
  "connect-src 'self' https://*.supabase.co wss://*.supabase.co",
  "frame-src 'self' https://www.youtube-nocookie.com https://www.youtube.com",
  "worker-src 'self' blob:",
  "manifest-src 'self'",
].join('; ');

export const BASE_SECURITY_HEADERS: Record<string, string> = {
  'Content-Security-Policy': CONTENT_SECURITY_POLICY,
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'X-Frame-Options': 'SAMEORIGIN',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
};

export const HSTS_VALUE = 'max-age=63072000; includeSubDomains; preload';

/**
 * Aplica os cabeçalhos de segurança a uma resposta SSR (sem sobrescrever os já presentes).
 * HSTS só quando `hsts` for true (ex.: requisição https em produção) — nunca em http/localhost.
 */
export function applySecurityHeaders(headers: Headers, opts: { hsts?: boolean } = {}): void {
  for (const [key, value] of Object.entries(BASE_SECURITY_HEADERS)) {
    if (!headers.has(key)) headers.set(key, value);
  }
  if (opts.hsts && !headers.has('Strict-Transport-Security')) {
    headers.set('Strict-Transport-Security', HSTS_VALUE);
  }
}

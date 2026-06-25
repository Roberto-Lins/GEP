import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import {
  CONTENT_SECURITY_POLICY,
  applySecurityHeaders,
  HSTS_VALUE,
} from '../headers';

describe('Content-Security-Policy', () => {
  it('NÃO permite unsafe-eval', () => {
    expect(CONTENT_SECURITY_POLICY).not.toContain('unsafe-eval');
  });
  it('tem object-src none, frame-ancestors self e base-uri self', () => {
    expect(CONTENT_SECURITY_POLICY).toContain("object-src 'none'");
    expect(CONTENT_SECURITY_POLICY).toContain("frame-ancestors 'self'");
    expect(CONTENT_SECURITY_POLICY).toContain("base-uri 'self'");
  });
  it('permite o Supabase em connect-src', () => {
    expect(CONTENT_SECURITY_POLICY).toContain('https://*.supabase.co');
  });
  it('está em sincronia com vercel.json', () => {
    const url = new URL('../../../../vercel.json', import.meta.url);
    const vercel = JSON.parse(readFileSync(fileURLToPath(url), 'utf8'));
    const csp = vercel.headers[0].headers.find(
      (h: { key: string; value: string }) => h.key === 'Content-Security-Policy',
    );
    expect(csp?.value).toBe(CONTENT_SECURITY_POLICY);
  });
});

describe('applySecurityHeaders', () => {
  it('aplica os headers base + HSTS quando hsts=true', () => {
    const h = new Headers();
    applySecurityHeaders(h, { hsts: true });
    expect(h.get('X-Content-Type-Options')).toBe('nosniff');
    expect(h.get('X-Frame-Options')).toBe('SAMEORIGIN');
    expect(h.get('Referrer-Policy')).toBe('strict-origin-when-cross-origin');
    expect(h.get('Strict-Transport-Security')).toBe(HSTS_VALUE);
  });
  it('NÃO aplica HSTS quando hsts=false (ex.: http/localhost)', () => {
    const h = new Headers();
    applySecurityHeaders(h, { hsts: false });
    expect(h.get('Strict-Transport-Security')).toBeNull();
  });
  it('não sobrescreve um header já presente', () => {
    const h = new Headers({ 'X-Frame-Options': 'DENY' });
    applySecurityHeaders(h);
    expect(h.get('X-Frame-Options')).toBe('DENY');
  });
});

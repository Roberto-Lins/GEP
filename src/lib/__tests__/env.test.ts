import { describe, it, expect, afterEach, vi } from 'vitest';
import { getPublicSupabaseEnv, getServerEnv, EnvError } from '../env';

afterEach(() => {
  vi.unstubAllEnvs();
});

describe('getPublicSupabaseEnv', () => {
  it('lança EnvError nomeando as PUBLIC_* ausentes', () => {
    vi.stubEnv('PUBLIC_SUPABASE_URL', '');
    vi.stubEnv('PUBLIC_SUPABASE_ANON_KEY', '');
    expect(() => getPublicSupabaseEnv()).toThrow(EnvError);
    try {
      getPublicSupabaseEnv();
    } catch (e) {
      expect((e as Error).message).toContain('PUBLIC_SUPABASE_URL');
      expect((e as Error).message).toContain('PUBLIC_SUPABASE_ANON_KEY');
    }
  });
});

describe('getServerEnv', () => {
  it('nomeia a var ausente SEM vazar o valor de um segredo presente', () => {
    vi.stubEnv('PUBLIC_SUPABASE_URL', 'https://x.supabase.co');
    vi.stubEnv('PUBLIC_SUPABASE_ANON_KEY', 'anon-key');
    vi.stubEnv('SUPABASE_SERVICE_ROLE_KEY', 'super-secret-value-xyz');
    vi.stubEnv('APP_URL', ''); // ausente de propósito
    let msg = '';
    try {
      getServerEnv();
    } catch (e) {
      msg = (e as Error).message;
    }
    expect(msg).toContain('APP_URL');
    expect(msg).not.toContain('super-secret-value-xyz'); // nunca vaza o segredo
  });

  it('retorna tudo e normaliza APP_URL (sem barra final)', () => {
    vi.stubEnv('PUBLIC_SUPABASE_URL', 'https://x.supabase.co');
    vi.stubEnv('PUBLIC_SUPABASE_ANON_KEY', 'anon-key');
    vi.stubEnv('SUPABASE_SERVICE_ROLE_KEY', 'svc');
    vi.stubEnv('APP_URL', 'http://localhost:4321/');
    const env = getServerEnv();
    expect(env.appUrl).toBe('http://localhost:4321');
    expect(env.serviceRoleKey).toBe('svc');
    expect(env.url).toBe('https://x.supabase.co');
  });
});

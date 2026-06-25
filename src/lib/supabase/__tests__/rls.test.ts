import { describe, it, expect, beforeAll } from 'vitest';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

// Testes de autorização (RLS) — rodam SÓ quando há um Supabase de teste configurado.
// Sem essas variáveis, todo o bloco é PULADO (não quebra o CI). Ver supabase/README.md.
const url = process.env.SUPABASE_TEST_URL;
const anonKey = process.env.SUPABASE_TEST_ANON_KEY;
const emailA = process.env.SUPABASE_TEST_USER_A;
const passA = process.env.SUPABASE_TEST_PASS_A;
const emailB = process.env.SUPABASE_TEST_USER_B;
const passB = process.env.SUPABASE_TEST_PASS_B;
const hasCreds = Boolean(url && anonKey && emailA && passA && emailB && passB);

describe.skipIf(!hasCreds)('RLS de profiles (requer Supabase de teste)', () => {
  let a: SupabaseClient;
  let b: SupabaseClient;
  let anon: SupabaseClient;
  let idA = '';
  let idB = '';

  beforeAll(async () => {
    anon = createClient(url!, anonKey!);
    a = createClient(url!, anonKey!);
    b = createClient(url!, anonKey!);
    const ra = await a.auth.signInWithPassword({ email: emailA!, password: passA! });
    const rb = await b.auth.signInWithPassword({ email: emailB!, password: passB! });
    idA = ra.data.user?.id ?? '';
    idB = rb.data.user?.id ?? '';
    expect(idA).not.toBe('');
    expect(idB).not.toBe('');
  });

  it('A lê o próprio perfil', async () => {
    const { data } = await a.from('profiles').select('id').eq('id', idA);
    expect(data ?? []).toHaveLength(1);
  });

  it('A NÃO lê o perfil de B', async () => {
    const { data } = await a.from('profiles').select('id').eq('id', idB);
    expect(data ?? []).toHaveLength(0);
  });

  it('A NÃO edita o perfil de B', async () => {
    const { data } = await a
      .from('profiles')
      .update({ display_name: 'hacked' })
      .eq('id', idB)
      .select();
    expect(data ?? []).toHaveLength(0); // RLS → nenhuma linha afetada
    const { data: bOwn } = await b.from('profiles').select('display_name').eq('id', idB).single();
    expect(bOwn?.display_name).not.toBe('hacked');
  });

  it('visitante anônimo não lê perfis', async () => {
    const { data } = await anon.from('profiles').select('id');
    expect(data ?? []).toHaveLength(0);
  });
});

// Diagnóstico de segurança AO VIVO contra o Supabase configurado no .env.
// Cria 2 usuários DESCARTÁVEIS (sem enviar e-mail), valida trigger + RLS, e os
// REMOVE no fim. Nunca imprime segredos (chaves são mascaradas).
//
// Uso (rode contra o projeto de DEV): npm run verify:supabase
// ⚠️ Cria e apaga usuários no projeto apontado pelo .env.

import { readFileSync, existsSync } from 'node:fs';
import { createClient } from '@supabase/supabase-js';

// --- carrega .env sem dependências ------------------------------------------
if (existsSync('.env')) {
  for (const line of readFileSync('.env', 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (!m) continue;
    let v = m[2];
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
    if (process.env[m[1]] === undefined) process.env[m[1]] = v;
  }
}

const url = process.env.PUBLIC_SUPABASE_URL;
const anon = process.env.PUBLIC_SUPABASE_ANON_KEY;
const service = process.env.SUPABASE_SERVICE_ROLE_KEY;
const appUrl = process.env.APP_URL;

const mask = (s?: string) => (s ? `${s.slice(0, 6)}…${s.slice(-4)} (${s.length} chars)` : 'AUSENTE');
let fails = 0;
const ok = (cond: boolean, label: string, extra = '') => {
  console.log(`${cond ? '✓' : '✗ FALHA:'} ${label}${extra ? ` — ${extra}` : ''}`);
  if (!cond) fails++;
};

console.log('== Variáveis de ambiente (mascaradas) ==');
console.log('PUBLIC_SUPABASE_URL       =', url ?? 'AUSENTE');
console.log('PUBLIC_SUPABASE_ANON_KEY  =', mask(anon));
console.log('SUPABASE_SERVICE_ROLE_KEY =', mask(service));
console.log('APP_URL                   =', appUrl ?? 'AUSENTE');
console.log('');

if (!url || !anon || !service || !appUrl) {
  console.error('Faltam variáveis no .env. Preencha as 4 e tente de novo.');
  process.exit(1);
}
ok(anon !== service, 'anon ≠ service_role (chaves distintas)');

const admin = createClient(url, service, { auth: { persistSession: false, autoRefreshToken: false } });
const anonPublic = createClient(url, anon, { auth: { persistSession: false, autoRefreshToken: false } });
const userClient = createClient(url, anon, { auth: { persistSession: false, autoRefreshToken: false } });

const rand = () => Math.random().toString(36).slice(2, 10);
const mk = () => {
  const r = rand();
  return { email: `vrfy_${r}@example.com`, password: `Vrfy_${r}_2026`, username: `vrfy_${r}`, display_name: `Verify ${r}` };
};

let idA = '';
let idB = '';
const a = mk();
const b = mk();

async function main() {
  // 0. username_available (não precisa de usuário)
  const resvd = await admin.rpc('username_available', { p_username: 'admin' });
  ok(resvd.error == null && resvd.data === false, 'username_available("admin") = false (reservado)', resvd.error?.message);
  const free = await admin.rpc('username_available', { p_username: a.username });
  ok(free.error == null && free.data === true, `username_available("${a.username}") = true (livre)`, free.error?.message);

  const anonRpc = await anonPublic.rpc('username_available', { p_username: 'qualquer_um' });
  ok(anonRpc.error != null, 'anon NÃO executa username_available (execução revogada)', anonRpc.error ? 'bloqueado' : 'PERMITIDO (inesperado!)');

  // 1. cria usuário A (confirmado, sem e-mail) → trigger deve criar o perfil
  const ca = await admin.auth.admin.createUser({
    email: a.email, password: a.password, email_confirm: true,
    user_metadata: { username: a.username, display_name: a.display_name },
  });
  ok(ca.error == null && !!ca.data.user, 'cria usuário A (admin, sem e-mail)', ca.error?.message);
  idA = ca.data.user?.id ?? '';

  const cb = await admin.auth.admin.createUser({
    email: b.email, password: b.password, email_confirm: true,
    user_metadata: { username: b.username, display_name: b.display_name },
  });
  ok(cb.error == null && !!cb.data.user, 'cria usuário B (admin, sem e-mail)', cb.error?.message);
  idB = cb.data.user?.id ?? '';

  // 2. trigger handle_new_user criou o perfil de A
  const profA = await admin.from('profiles').select('id, username').eq('id', idA).maybeSingle();
  ok(profA.error == null && profA.data?.id === idA, 'trigger criou o perfil de A automaticamente', profA.error?.message ?? `username=${profA.data?.username}`);

  // 3. RLS: visitante ANÔNIMO não lê perfis
  const anonRead = await anonPublic.from('profiles').select('id').eq('id', idA);
  ok((anonRead.data?.length ?? 0) === 0, 'RLS: anônimo NÃO lê o perfil de A', anonRead.error ? `erro: ${anonRead.error.message}` : `linhas: ${anonRead.data?.length ?? 0}`);

  // 4. login como B e isolamento
  const signin = await userClient.auth.signInWithPassword({ email: b.email, password: b.password });
  ok(signin.error == null && !!signin.data.user, 'B faz login (signInWithPassword)', signin.error?.message);

  const bOwn = await userClient.from('profiles').select('id').eq('id', idB);
  ok((bOwn.data?.length ?? 0) === 1, 'RLS: B lê o PRÓPRIO perfil (1 linha)', `linhas: ${bOwn.data?.length ?? 0}`);

  const bReadsA = await userClient.from('profiles').select('id').eq('id', idA);
  ok((bReadsA.data?.length ?? 0) === 0, 'RLS: B NÃO lê o perfil de A', `linhas: ${bReadsA.data?.length ?? 0}`);

  const bEditsA = await userClient.from('profiles').update({ display_name: 'HACKED' }).eq('id', idA).select();
  ok((bEditsA.data?.length ?? 0) === 0, 'RLS: B NÃO edita o perfil de A (0 linhas afetadas)', `afetadas: ${bEditsA.data?.length ?? 0}`);

  // confirma que A não foi alterado
  const reA = await admin.from('profiles').select('display_name').eq('id', idA).maybeSingle();
  ok(reA.data?.display_name !== 'HACKED', 'perfil de A permanece intacto após tentativa de B', `display_name=${reA.data?.display_name}`);

  await userClient.auth.signOut();
}

main()
  .catch((e) => {
    console.error('Erro inesperado:', e instanceof Error ? e.message : e);
    fails++;
  })
  .finally(async () => {
    // limpeza: remove os usuários descartáveis (cascade apaga os perfis)
    if (idA) await admin.auth.admin.deleteUser(idA).catch(() => {});
    if (idB) await admin.auth.admin.deleteUser(idB).catch(() => {});
    const clean = await admin.from('profiles').select('id').in('id', [idA, idB].filter(Boolean));
    ok((clean.data?.length ?? 0) === 0, 'limpeza: usuários/perfis de teste removidos', `restantes: ${clean.data?.length ?? 0}`);
    console.log('');
    console.log(fails === 0 ? '✅ Todas as validações de segurança passaram.' : `❌ ${fails} validação(ões) falharam.`);
    process.exit(fails === 0 ? 0 : 1);
  });

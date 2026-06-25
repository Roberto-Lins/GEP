// Acesso centralizado e validado às variáveis de ambiente.
//
// Princípios:
//  • Públicas (PUBLIC_*) são referenciadas ESTATICAMENTE para o Vite inline-ar no
//    bundle do cliente. Não são segredo.
//  • Privadas (service role, APP_URL) são lidas de process.env / import.meta.env e
//    SÓ no servidor — nunca entram no bundle do cliente.
//  • NENHUM client é criado em top-level (só dentro de funções) → o build passa sem
//    credenciais; falhas só ocorrem em runtime, com mensagem clara.
//  • Erros citam apenas o NOME da variável ausente, NUNCA o valor de um segredo.

class EnvError extends Error {
  constructor(missing: string[], scope: string) {
    super(
      `Variáveis de ambiente ausentes (${scope}): ${missing.join(', ')}. ` +
        'Copie .env.example para .env e preencha. Nenhum valor é exibido por segurança.',
    );
    this.name = 'EnvError';
  }
}

function nonEmpty(v: unknown): v is string {
  return typeof v === 'string' && v.trim().length > 0;
}

export interface PublicSupabaseEnv {
  url: string;
  anonKey: string;
}

/** Env público do Supabase (seguro no cliente e no servidor). */
export function getPublicSupabaseEnv(): PublicSupabaseEnv {
  const url = import.meta.env.PUBLIC_SUPABASE_URL;
  const anonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;
  const missing: string[] = [];
  if (!nonEmpty(url)) missing.push('PUBLIC_SUPABASE_URL');
  if (!nonEmpty(anonKey)) missing.push('PUBLIC_SUPABASE_ANON_KEY');
  if (missing.length) throw new EnvError(missing, 'público');
  return { url: url as string, anonKey: anonKey as string };
}

/** Lê uma variável SÓ-servidor (process.env primeiro; import.meta.env como fallback de dev). */
function readServer(key: string): string | undefined {
  if (typeof process !== 'undefined' && process.env && nonEmpty(process.env[key])) {
    return process.env[key];
  }
  const meta = (import.meta.env as Record<string, unknown>)[key];
  return nonEmpty(meta) ? (meta as string) : undefined;
}

export interface ServerEnv extends PublicSupabaseEnv {
  serviceRoleKey: string;
  appUrl: string;
}

/** Env de servidor (inclui segredos). Lança se chamado no navegador. */
export function getServerEnv(): ServerEnv {
  if (typeof window !== 'undefined') {
    throw new Error('getServerEnv() não pode ser chamado no navegador.');
  }
  const pub = getPublicSupabaseEnv();
  const serviceRoleKey = readServer('SUPABASE_SERVICE_ROLE_KEY');
  const appUrl = readServer('APP_URL');
  const missing: string[] = [];
  if (!nonEmpty(serviceRoleKey)) missing.push('SUPABASE_SERVICE_ROLE_KEY');
  if (!nonEmpty(appUrl)) missing.push('APP_URL');
  if (missing.length) throw new EnvError(missing, 'servidor');
  return { ...pub, serviceRoleKey: serviceRoleKey as string, appUrl: (appUrl as string).replace(/\/+$/, '') };
}

/** Origem pública (APP_URL) sem barra final — para montar callbacks de e-mail. */
export function getAppUrl(): string {
  const appUrl = readServer('APP_URL');
  if (!nonEmpty(appUrl)) throw new EnvError(['APP_URL'], 'servidor');
  return appUrl.replace(/\/+$/, '');
}

/**
 * Origem para callbacks de e-mail. Usa APP_URL se definida (preferido, sem depender
 * de headers); senão cai para `fallback` (a origem da própria requisição) — assim a
 * ausência de APP_URL NÃO derruba o endpoint com 500. O Supabase ainda valida o
 * redirect contra a allowlist de Redirect URLs, então a origem precisa estar lá.
 */
export function getAppOrigin(fallback: string): string {
  const appUrl = readServer('APP_URL');
  return (nonEmpty(appUrl) ? appUrl : fallback).replace(/\/+$/, '');
}

export { EnvError };

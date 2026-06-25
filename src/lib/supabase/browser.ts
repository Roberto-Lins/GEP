// Cliente Supabase do NAVEGADOR (chave anônima).
//
// Nota Fase 1: as sessões usam cookies httpOnly (geridas pelo servidor), então este
// cliente NÃO enxerga a sessão — é fornecido para futuros usos client-side de dados
// PÚBLICOS. A navegação de auth (CTA Entrar/Painel) usa o endpoint /api/me, não este
// cliente. Nunca usar a service role aqui (ver src/lib/supabase/admin.ts).

import { createBrowserClient } from '@supabase/ssr';
import type { Database } from './types';
import { getPublicSupabaseEnv } from '../env';

let client: ReturnType<typeof createBrowserClient<Database>> | undefined;

/** Singleton do cliente de navegador (anon). */
export function getBrowserSupabase() {
  if (client) return client;
  const { url, anonKey } = getPublicSupabaseEnv();
  client = createBrowserClient<Database>(url, anonKey);
  return client;
}

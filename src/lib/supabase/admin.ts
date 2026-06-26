// Cliente Supabase ADMINISTRATIVO (service role). ⚠️ SERVIDOR APENAS ⚠️
//
//  • Bypassa a RLS — use só para operações privilegiadas estritamente necessárias
//    (ex.: checagem de disponibilidade de username sem expor dados de perfil).
//  • Guard explícito contra uso no navegador.
//  • A service role NUNCA entra no bundle do cliente (lida via env de servidor).

import './ws-polyfill'; // Node < 22: registra WebSocket global ANTES de criar o client.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';
import { getServerEnv } from '../env';

let admin: ReturnType<typeof createClient<Database>> | undefined;

/** Singleton do cliente service-role. Lança se chamado no navegador. */
export function getSupabaseAdmin() {
  if (typeof window !== 'undefined') {
    throw new Error('getSupabaseAdmin() é estritamente server-only.');
  }
  if (admin) return admin;
  const { url, serviceRoleKey } = getServerEnv();
  admin = createClient<Database>(url, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return admin;
}

/**
 * Verifica disponibilidade de um username SEM vazar dados de perfil.
 * Usa a função SQL `username_available` (SECURITY DEFINER) — ver migração 0001.
 */
export async function isUsernameAvailable(username: string): Promise<boolean> {
  const { data, error } = await getSupabaseAdmin().rpc('username_available', {
    p_username: username,
  });
  if (error) throw error;
  return data === true;
}

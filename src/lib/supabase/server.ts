// Cliente Supabase do SERVIDOR (SSR) — usa a sessão do usuário via cookies.
//
// Segurança das sessões (ver brief §15 e ADR 0005):
//   • Cookies httpOnly  → tokens não acessíveis a JS (mitiga XSS).
//   • Secure em produção → não trafegam em http (em dev/localhost ficam não-secure).
//   • SameSite=Lax       → permite navegação top-level vinda dos links de e-mail.
// Como são httpOnly, a sessão é gerida SÓ no servidor (este cliente + middleware);
// o estado para a UI vem do endpoint /api/me.

import './ws-polyfill'; // Node < 22: registra WebSocket global ANTES de criar o client.
import { createServerClient } from '@supabase/ssr';
import type { AstroCookies } from 'astro';
import type { Database } from './types';
import { getPublicSupabaseEnv } from '../env';

export interface ServerSupabaseCtx {
  cookies: AstroCookies;
  request: Request;
}

const isProd = import.meta.env.PROD;

/** Parser simples do header Cookie → lista {name,value} (suporta os chunks do Supabase). */
function parseCookies(header: string): { name: string; value: string }[] {
  if (!header) return [];
  const out: { name: string; value: string }[] = [];
  for (const part of header.split(';')) {
    const idx = part.indexOf('=');
    if (idx === -1) continue;
    const name = part.slice(0, idx).trim();
    if (!name) continue;
    let value = part.slice(idx + 1).trim();
    try {
      value = decodeURIComponent(value);
    } catch {
      /* valor já é seguro (base64url) — mantém como está */
    }
    out.push({ name, value });
  }
  return out;
}

/** Cria um cliente Supabase ligado aos cookies da requisição/resposta Astro. */
export function createSupabaseServer({ cookies, request }: ServerSupabaseCtx) {
  const { url, anonKey } = getPublicSupabaseEnv();

  return createServerClient<Database>(url, anonKey, {
    cookies: {
      getAll() {
        return parseCookies(request.headers.get('Cookie') ?? '');
      },
      setAll(cookiesToSet) {
        for (const { name, value, options } of cookiesToSet) {
          cookies.set(name, value, {
            ...options,
            httpOnly: true,
            secure: isProd,
            sameSite: 'lax',
            path: '/',
          });
        }
      },
    },
  });
}

// Middleware de autenticação + cabeçalhos de segurança.
//
// Em arquitetura HÍBRIDA, este middleware roda:
//   • em BUILD, para cada página pré-renderizada (estática);
//   • em RUNTIME, apenas para as rotas SSR (auth/app/api).
//
// Por isso o trabalho de sessão é feito SÓ para rotas "auth-relevantes". As páginas
// estáticas (/, /estudar, /ano/*, /<curso>/*) são pré-renderizadas e NÃO precisam de
// sessão — assim o build passa SEM credenciais Supabase (nada de client em rotas
// estáticas). Ver docs/implementation/PHASE-01-AUTHENTICATION.md.

import { defineMiddleware } from 'astro:middleware';
import { createSupabaseServer } from './lib/supabase/server';
import { applySecurityHeaders } from './lib/security/headers';
import { safeRedirectPath } from './lib/security/redirect';

/** Prefixos que EXIGEM autenticação. */
const PROTECTED_PREFIXES = ['/app'];

/** Páginas de auth das quais um usuário JÁ logado é mandado para /app. */
const REDIRECT_IF_AUTHED = ['/login', '/cadastro'];

/** Rotas que precisam de trabalho de sessão (criar client + validar usuário). */
const AUTH_RELEVANT = [
  '/app',
  '/login',
  '/cadastro',
  '/recuperar-senha',
  '/redefinir-senha',
  '/verifique-email',
  '/api',
  '/auth',
];

function matches(pathname: string, prefixes: string[]): boolean {
  return prefixes.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

export const onRequest = defineMiddleware(async (context, next) => {
  const { request, cookies, url, locals } = context;
  const pathname = url.pathname;

  // Rotas estáticas/pré-renderizadas: nada de Supabase (build sem credenciais).
  if (!matches(pathname, AUTH_RELEVANT)) {
    locals.user = null;
    locals.session = null;
    const passThrough = await next();
    applySecurityHeaders(passThrough.headers, { hsts: url.protocol === 'https:' });
    return passThrough;
  }

  // Rota SSR auth-relevante: liga o Supabase aos cookies e valida o usuário no servidor.
  // A criação do client fica dentro do try: sem credenciais (ex.: dev/CI sem .env)
  // tratamos como "sem usuário" — rotas protegidas redirecionam ao login em vez de 500.
  let user = null;
  let session = null;
  try {
    const supabase = createSupabaseServer({ cookies, request });
    locals.supabase = supabase;
    const { data: userData } = await supabase.auth.getUser();
    user = userData.user ?? null;
    if (user) {
      const { data: sessionData } = await supabase.auth.getSession();
      session = sessionData.session ?? null;
    }
  } catch (e) {
    // Log no servidor (Runtime Logs da Vercel) — falha ao criar o client/validar a
    // sessão NÃO deve ficar silenciosa: foi esse catch mudo que escondeu o erro de
    // WebSocket do realtime-js em Node < 22. Rotas protegidas seguem redirecionando.
    console.error('[middleware] sessão/Supabase falhou:', e instanceof Error ? e.message : e);
    user = null;
    session = null;
  }
  locals.user = user;
  locals.session = session;

  // Já logado em /login ou /cadastro → manda para o destino seguro (ou /app).
  if (user && matches(pathname, REDIRECT_IF_AUTHED)) {
    return context.redirect(safeRedirectPath(url.searchParams.get('next'), '/app'));
  }

  // Rota protegida sem usuário → login, preservando o destino com segurança.
  if (!user && matches(pathname, PROTECTED_PREFIXES)) {
    const next = encodeURIComponent(pathname + url.search);
    return context.redirect(`/login?next=${next}`, 302);
  }

  const response = await next();
  applySecurityHeaders(response.headers, { hsts: url.protocol === 'https:' });
  return response;
});

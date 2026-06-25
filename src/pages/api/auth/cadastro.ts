import type { APIRoute } from 'astro';
import { signupSchema, parseForm, isReservedUsername } from '@lib/validation/auth';
import { isUsernameAvailable } from '@lib/supabase/admin';
import { getAppOrigin } from '@lib/env';
import { rateLimit, clientKey } from '@lib/rate-limit';
import { isSameOrigin, forbidden } from '@lib/security/origin';

export const prerender = false;

const enc = encodeURIComponent;

export const POST: APIRoute = async ({ request, url, locals, redirect }) => {
  if (!isSameOrigin(request, url)) return forbidden();

  const rl = rateLimit(clientKey(request, 'signup'), 5, 60_000);
  if (!rl.allowed) return redirect('/cadastro?erro=rate', 303);

  const form = await request.formData();
  const parsed = parseForm(signupSchema, form);
  if (!parsed.ok) {
    const email = String(form.get('email') ?? '');
    return redirect(`/cadastro?erro=validacao&email=${enc(email)}`, 303);
  }
  const { username, display_name, email, password } = parsed.data;

  // Reserva + disponibilidade de username (servidor; sem vazar dados de perfil).
  if (isReservedUsername(username)) {
    return redirect(`/cadastro?erro=username&email=${enc(email)}`, 303);
  }
  try {
    if (!(await isUsernameAvailable(username))) {
      return redirect(`/cadastro?erro=username&email=${enc(email)}`, 303);
    }
  } catch (e) {
    // Log no servidor (aparece nos logs da função na Vercel) — sem expor ao usuário.
    console.error('[cadastro] checagem de username falhou:', e instanceof Error ? e.message : e);
    return redirect('/cadastro?erro=falha', 303);
  }

  const { error } = await locals.supabase.auth.signUp({
    email,
    password,
    options: {
      data: { username, display_name },
      emailRedirectTo: `${getAppOrigin(url.origin)}/auth/callback?next=${enc('/app')}`,
    },
  });

  // Anti-enumeração: e-mail já existente NÃO gera erro (com confirmação de e-mail
  // ligada) → mostramos a mesma página de "verifique seu e-mail".
  if (error) {
    console.error('[cadastro] signUp falhou:', error.message);
    return redirect('/cadastro?erro=falha', 303);
  }
  return redirect('/verifique-email?enviado=1', 303);
};

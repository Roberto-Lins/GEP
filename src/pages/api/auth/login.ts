import type { APIRoute } from 'astro';
import { loginSchema, parseForm } from '@lib/validation/auth';
import { safeRedirectPath } from '@lib/security/redirect';
import { rateLimit, clientKey } from '@lib/rate-limit';
import { isSameOrigin, forbidden } from '@lib/security/origin';

export const prerender = false;

const enc = encodeURIComponent;

export const POST: APIRoute = async ({ request, url, locals, redirect }) => {
  if (!isSameOrigin(request, url)) return forbidden();

  const rl = rateLimit(clientKey(request, 'login'), 10, 60_000);
  if (!rl.allowed) return redirect('/login?erro=rate', 303);

  const form = await request.formData();
  const next = safeRedirectPath(form.get('next'), '/app');
  const parsed = parseForm(loginSchema, form);
  if (!parsed.ok) {
    const email = String(form.get('email') ?? '');
    return redirect(`/login?erro=validacao&email=${enc(email)}&next=${enc(next)}`, 303);
  }
  const { email, password } = parsed.data;

  const { error } = await locals.supabase.auth.signInWithPassword({ email, password });
  if (error) {
    // Mensagem genérica (sem distinguir "e-mail não existe" de "senha errada").
    const code = /confirm/i.test(error.message) ? 'nao_verificado' : 'credenciais';
    return redirect(`/login?erro=${code}&email=${enc(email)}&next=${enc(next)}`, 303);
  }
  return redirect(next, 303);
};

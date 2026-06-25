import type { APIRoute } from 'astro';
import { changePasswordSchema, parseForm } from '@lib/validation/auth';
import { rateLimit, clientKey } from '@lib/rate-limit';
import { isSameOrigin, forbidden } from '@lib/security/origin';

export const prerender = false;

export const POST: APIRoute = async ({ request, url, locals, redirect }) => {
  if (!isSameOrigin(request, url)) return forbidden();
  if (!locals.user) return redirect('/login?next=/app/configuracoes', 303);

  const rl = rateLimit(clientKey(request, 'pwchange'), 5, 300_000);
  if (!rl.allowed) return redirect('/app/configuracoes?erro=rate', 303);

  const form = await request.formData();
  const parsed = parseForm(changePasswordSchema, form);
  if (!parsed.ok) return redirect('/app/configuracoes?erro=validacao', 303);

  const email = locals.user.email;
  if (!email) return redirect('/app/configuracoes?erro=falha', 303);

  // Reautenticação: confere a senha atual antes de trocar.
  const { error: reauthError } = await locals.supabase.auth.signInWithPassword({
    email,
    password: parsed.data.current_password,
  });
  if (reauthError) return redirect('/app/configuracoes?erro=senha_atual', 303);

  const { error } = await locals.supabase.auth.updateUser({ password: parsed.data.password });
  if (error) return redirect('/app/configuracoes?erro=falha', 303);

  return redirect('/app/configuracoes?ok=senha', 303);
};

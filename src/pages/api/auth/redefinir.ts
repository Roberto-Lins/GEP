import type { APIRoute } from 'astro';
import { resetSchema, parseForm } from '@lib/validation/auth';
import { isSameOrigin, forbidden } from '@lib/security/origin';

export const prerender = false;

export const POST: APIRoute = async ({ request, url, locals, redirect }) => {
  if (!isSameOrigin(request, url)) return forbidden();

  const form = await request.formData();
  const parsed = parseForm(resetSchema, form);
  if (!parsed.ok) return redirect('/redefinir-senha?erro=validacao', 303);

  // Exige uma sessão de recuperação válida (estabelecida por /auth/callback).
  const { data: { user } } = await locals.supabase.auth.getUser();
  if (!user) return redirect('/redefinir-senha?erro=expirado', 303);

  const { error } = await locals.supabase.auth.updateUser({ password: parsed.data.password });
  if (error) return redirect('/redefinir-senha?erro=falha', 303);

  // Força novo login com a nova senha.
  await locals.supabase.auth.signOut();
  return redirect('/login?redefinido=1', 303);
};

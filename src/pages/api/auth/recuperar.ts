import type { APIRoute } from 'astro';
import { recoverSchema, parseForm } from '@lib/validation/auth';
import { getAppUrl } from '@lib/env';
import { rateLimit, clientKey } from '@lib/rate-limit';
import { isSameOrigin, forbidden } from '@lib/security/origin';

export const prerender = false;

const enc = encodeURIComponent;

export const POST: APIRoute = async ({ request, url, locals, redirect }) => {
  if (!isSameOrigin(request, url)) return forbidden();

  // Resposta SEMPRE genérica (anti-enumeração): nunca revela se a conta existe,
  // nem se houve throttle.
  const rl = rateLimit(clientKey(request, 'recover'), 5, 300_000);
  if (rl.allowed) {
    const form = await request.formData();
    const parsed = parseForm(recoverSchema, form);
    if (parsed.ok) {
      await locals.supabase.auth.resetPasswordForEmail(parsed.data.email, {
        redirectTo: `${getAppUrl()}/auth/callback?next=${enc('/redefinir-senha')}`,
      });
    }
  }
  return redirect('/recuperar-senha?enviado=1', 303);
};

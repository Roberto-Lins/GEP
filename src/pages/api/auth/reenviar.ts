import type { APIRoute } from 'astro';
import { resendSchema, parseForm } from '@lib/validation/auth';
import { getAppOrigin } from '@lib/env';
import { rateLimit, clientKey } from '@lib/rate-limit';
import { isSameOrigin, forbidden } from '@lib/security/origin';

export const prerender = false;

const enc = encodeURIComponent;

export const POST: APIRoute = async ({ request, url, locals, redirect }) => {
  if (!isSameOrigin(request, url)) return forbidden();

  // Sempre genérico; throttle agressivo para reenvio.
  const rl = rateLimit(clientKey(request, 'resend'), 3, 300_000);
  if (rl.allowed) {
    const form = await request.formData();
    const parsed = parseForm(resendSchema, form);
    if (parsed.ok) {
      await locals.supabase.auth.resend({
        type: 'signup',
        email: parsed.data.email,
        options: { emailRedirectTo: `${getAppOrigin(url.origin)}/auth/callback?next=${enc('/app')}` },
      });
    }
  }
  return redirect('/verifique-email?reenviado=1', 303);
};

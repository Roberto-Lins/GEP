import type { APIRoute } from 'astro';
import { safeRedirectPath } from '@lib/security/redirect';
import type { EmailOtpType } from '@supabase/supabase-js';

export const prerender = false;

// Callback dos e-mails de verificação/recuperação.
// Suporta os dois formatos:
//   • PKCE:       ?code=...        → exchangeCodeForSession
//   • token_hash: ?token_hash=&type=signup|recovery|...  → verifyOtp
// O segundo é mais robusto entre navegadores (não depende do cookie code_verifier);
// recomendamos configurar os templates de e-mail para ele (ver supabase/README.md).

const OTP_TYPES: EmailOtpType[] = ['signup', 'recovery', 'invite', 'email', 'email_change'];

export const GET: APIRoute = async ({ url, locals, redirect }) => {
  const code = url.searchParams.get('code');
  const tokenHash = url.searchParams.get('token_hash');
  const type = url.searchParams.get('type') as EmailOtpType | null;

  // Destino: recovery → redefinir senha; senão usa ?next (saneado) ou /app.
  const next =
    type === 'recovery'
      ? '/redefinir-senha'
      : safeRedirectPath(url.searchParams.get('next'), '/app');

  if (code) {
    const { error } = await locals.supabase.auth.exchangeCodeForSession(code);
    if (error) return redirect('/login?erro=callback', 303);
    return redirect(next, 303);
  }

  if (tokenHash && type && OTP_TYPES.includes(type)) {
    const { error } = await locals.supabase.auth.verifyOtp({ token_hash: tokenHash, type });
    if (error) return redirect('/login?erro=callback', 303);
    return redirect(next, 303);
  }

  return redirect('/login?erro=callback', 303);
};

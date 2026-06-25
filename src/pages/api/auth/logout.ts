import type { APIRoute } from 'astro';
import { isSameOrigin, forbidden } from '@lib/security/origin';

export const prerender = false;

export const POST: APIRoute = async ({ request, url, locals, redirect }) => {
  if (!isSameOrigin(request, url)) return forbidden();
  await locals.supabase.auth.signOut();
  return redirect('/', 303);
};

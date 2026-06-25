import type { APIRoute } from 'astro';
import { profileSchema, parseForm, isReservedUsername } from '@lib/validation/auth';
import { isSameOrigin, forbidden } from '@lib/security/origin';

export const prerender = false;

export const POST: APIRoute = async ({ request, url, locals, redirect }) => {
  if (!isSameOrigin(request, url)) return forbidden();
  if (!locals.user) return redirect('/login?next=/app/perfil', 303);

  const form = await request.formData();
  const parsed = parseForm(profileSchema, form);
  if (!parsed.ok) return redirect('/app/perfil?erro=validacao', 303);

  const { display_name, username } = parsed.data;
  const bio = (parsed.data.bio ?? '').toString().trim();

  if (isReservedUsername(username)) return redirect('/app/perfil?erro=username', 303);

  // Atualiza o próprio perfil (RLS garante que só a própria linha é afetada).
  const { error } = await locals.supabase
    .from('profiles')
    .update({ display_name, username, bio: bio || null })
    .eq('id', locals.user.id);

  if (error) {
    const code = /duplicate|unique|already exists|23505/i.test(error.message)
      ? 'username'
      : 'falha';
    return redirect(`/app/perfil?erro=${code}`, 303);
  }

  // Mantém os metadados de auth em sincronia (usados pela UI).
  await locals.supabase.auth.updateUser({ data: { username, display_name } });

  return redirect('/app/perfil?ok=1', 303);
};

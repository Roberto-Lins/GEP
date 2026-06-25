import type { APIRoute } from 'astro';

export const prerender = false;

// Estado de auth para a UI (usado pela ilha AuthNav nas páginas estáticas).
// Devolve apenas o mínimo necessário; nunca tokens.
export const GET: APIRoute = async ({ locals }) => {
  const user = locals.user;
  const body = {
    user: user
      ? {
          id: user.id,
          email: user.email ?? null,
          display_name: (user.user_metadata?.display_name as string | undefined) ?? null,
          username: (user.user_metadata?.username as string | undefined) ?? null,
        }
      : null,
  };
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });
};

// Checagem de mesma origem (defesa CSRF complementar aos cookies SameSite=Lax).
//
// Para requisições que mudam estado (POST), comparamos o header `Origin` com o host
// da própria requisição. Cross-site → rejeita. Ausência de Origin é tolerada (alguns
// fluxos legítimos não o enviam; os cookies SameSite=Lax já barram POST cross-site).

export function isSameOrigin(request: Request, url: URL): boolean {
  const origin = request.headers.get('origin');
  if (!origin) return true;
  try {
    return new URL(origin).host === url.host;
  } catch {
    return false;
  }
}

/** Resposta 403 padronizada para falha de CSRF/origem. */
export function forbidden(): Response {
  return new Response('Origem não permitida.', { status: 403 });
}

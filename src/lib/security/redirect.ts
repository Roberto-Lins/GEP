// Prevenção de open redirect.
//
// Após login/cadastro queremos voltar à rota original (`?next=`). Um atacante pode
// tentar `?next=https://evil.com` para sequestrar o redirecionamento. Só aceitamos
// caminhos RELATIVOS, same-origin, que começam com uma única '/'.

const BACKSLASH = String.fromCharCode(92); // "\"

/** true se a string contém algum caractere de controle (0x00–0x1F) ou backslash. */
function hasUnsafeChars(value: string): boolean {
  if (value.includes(BACKSLASH)) return true;
  for (let i = 0; i < value.length; i++) {
    if (value.charCodeAt(i) <= 0x1f) return true;
  }
  return false;
}

/**
 * Retorna um caminho de redirecionamento seguro (same-origin, relativo) ou o `fallback`.
 * Rejeita: URLs absolutas, protocolo-relativo (`//host`), `/\host`, backslashes,
 * caracteres de controle e qualquer coisa que não comece com '/'.
 */
export function safeRedirectPath(raw: unknown, fallback = '/app'): string {
  if (typeof raw !== 'string') return fallback;
  const value = raw.trim();

  if (value === '') return fallback;
  if (!value.startsWith('/')) return fallback; // bloqueia http:, javascript:, etc.
  if (value.startsWith('//')) return fallback; // protocolo-relativo → outra origem
  if (hasUnsafeChars(value)) return fallback; // backslash (ex.: /\evil.com) e controle

  try {
    // Resolve contra uma origem dummy e descarta qualquer origem embutida.
    const u = new URL(value, 'http://localhost');
    const path = `${u.pathname}${u.search}${u.hash}`;
    return path.startsWith('/') && !path.startsWith('//') ? path : fallback;
  } catch {
    return fallback;
  }
}

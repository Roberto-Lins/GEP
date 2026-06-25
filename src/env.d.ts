/// <reference path="../.astro/types.d.ts" />

// Augmentações globais. Mantido como "script" (sem import de topo) para que
// `interface ImportMetaEnv` e `namespace App` mesclem globalmente; por isso os
// tipos do Supabase são referenciados por `import('...')` inline.

interface ImportMetaEnv {
  /** URL do projeto Supabase. Público (vai para o cliente). */
  readonly PUBLIC_SUPABASE_URL: string;
  /** Chave anônima (anon/public). Público — NÃO é segredo. */
  readonly PUBLIC_SUPABASE_ANON_KEY: string;
  /** Chave service_role. SEGREDO — só no servidor, nunca no bundle do cliente. */
  readonly SUPABASE_SERVICE_ROLE_KEY: string;
  /** Origem pública da app (ex.: http://localhost:4321) — usada para callbacks de e-mail. */
  readonly APP_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare namespace App {
  interface Locals {
    /** Cliente Supabase com a sessão do usuário (cookies SSR). Preenchido pelo middleware. */
    supabase: import('@supabase/supabase-js').SupabaseClient<import('./lib/supabase/types').Database>;
    /** Usuário autenticado e validado no servidor (`auth.getUser()`), ou null. */
    user: import('@supabase/supabase-js').User | null;
    /** Sessão atual, ou null. */
    session: import('@supabase/supabase-js').Session | null;
  }
}

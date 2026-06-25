import { useEffect, useState } from 'react';

// Ilha leve para o cabeçalho: mostra "Entrar/Criar conta" ou "Meu painel" conforme
// o estado de sessão. Como as páginas são majoritariamente estáticas, o estado vem
// do endpoint SSR /api/me (cookies httpOnly). É só UX — a proteção real é no servidor.

type Me = { user: null | { display_name: string | null; username: string | null; email: string | null } };

export default function AuthNav() {
  const [authed, setAuthed] = useState<boolean | null>(null);

  useEffect(() => {
    let alive = true;
    fetch('/api/me', { headers: { accept: 'application/json' } })
      .then((r) => (r.ok ? (r.json() as Promise<Me>) : { user: null }))
      .then((d) => {
        if (alive) setAuthed(Boolean(d.user));
      })
      .catch(() => {
        if (alive) setAuthed(false);
      });
    return () => {
      alive = false;
    };
  }, []);

  // Enquanto carrega (e para visitantes) mostramos as CTAs anônimas, evitando
  // exibir "Meu painel" por engano a quem não está logado.
  if (authed) {
    return (
      <a
        href="/app"
        className="rounded-lg border border-dourado/40 bg-dourado/10 px-3 py-2 text-sm font-medium text-dourado transition hover:bg-dourado hover:text-naval"
      >
        Meu painel
      </a>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <a
        href="/login"
        className="rounded-lg px-3 py-2 text-sm font-medium text-nevoa transition hover:bg-white/5 hover:text-marfim"
      >
        Entrar
      </a>
      <a
        href="/cadastro"
        className="rounded-lg border border-dourado/40 bg-dourado/10 px-3 py-2 text-sm font-medium text-dourado transition hover:bg-dourado hover:text-naval"
      >
        Criar conta
      </a>
    </div>
  );
}

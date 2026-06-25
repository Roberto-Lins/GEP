// Tela de seleção de curso — usada quando o Caderno é aberto fora de um curso
// (pelo menu numa página geral ou pela rota de tela cheia). Cada curso tem o
// seu próprio caderno; aqui o usuário escolhe qual abrir.
import { listarCursos } from '@utils/courses';

interface Props {
  onPick: (slug: string) => void;
}

export default function CoursePicker({ onPick }: Props) {
  const cursos = listarCursos();
  return (
    <div className="flex h-full flex-col overflow-y-auto p-5">
      <div className="mb-4">
        <h2 className="font-serif text-lg font-semibold text-marfim">Caderno de anotações</h2>
        <p className="mt-1 text-sm text-nevoa/70">
          Escolha o curso cujo caderno você quer abrir. Cada curso tem o seu caderno separado.
        </p>
      </div>
      {cursos.length === 0 ? (
        <p className="text-sm italic text-nevoa/50">Nenhum curso disponível.</p>
      ) : (
        <ul className="grid gap-2 sm:grid-cols-2">
          {cursos.map((c) => (
            <li key={c.slug}>
              <button
                type="button"
                onClick={() => onPick(c.slug)}
                className="flex w-full items-center gap-3 rounded-xl border border-white/10 bg-aco/30 p-3 text-left transition hover:border-dourado/40 hover:bg-aco/50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-dourado/15 text-dourado">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-2zM8 3v18" /></svg>
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-marfim">{c.titulo}</span>
                  {c.categoria && <span className="block truncate text-xs text-nevoa/60">{c.categoria}</span>}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

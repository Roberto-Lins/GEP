// Painel de páginas do caderno: selecionar, criar, renomear (inline), excluir
// (com confirmação) e reordenar (↑/↓). Vira gaveta em telas estreitas.
import { useEffect, useRef, useState } from 'react';
import { FALLBACK_TITULO } from './store';
import type { NotebookPage } from './types';

interface Props {
  paginas: NotebookPage[];
  atualId: string | null;
  onSelecionar: (id: string) => void;
  onCriar: () => void;
  onRenomear: (id: string, titulo: string) => void;
  onExcluir: (id: string) => void;
  onMover: (id: string, dir: -1 | 1) => void;
  onFechar?: () => void; // fecha a gaveta no mobile
}

export default function PageList({
  paginas,
  atualId,
  onSelecionar,
  onCriar,
  onRenomear,
  onExcluir,
  onMover,
  onFechar,
}: Props) {
  const [editandoId, setEditandoId] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editandoId && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editandoId]);

  const confirmarExcluir = (p: NotebookPage) => {
    const nome = p.title.trim() || FALLBACK_TITULO;
    if (window.confirm(`Excluir a página “${nome}” e as suas anotações? Esta ação não pode ser desfeita.`)) {
      onExcluir(p.id);
    }
  };

  return (
    <div className="flex h-full min-h-0 flex-col bg-naval-900/40">
      <div className="flex shrink-0 items-center justify-between gap-2 border-b border-white/10 px-3 py-2">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-dourado/70">
          Páginas ({paginas.length})
        </span>
        {onFechar && (
          <button
            type="button"
            onClick={onFechar}
            aria-label="Fechar lista de páginas"
            className="rounded p-1 text-nevoa/60 hover:bg-white/10 hover:text-marfim sm:hidden"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M18 6 6 18M6 6l12 12" /></svg>
          </button>
        )}
      </div>

      <button
        type="button"
        onClick={onCriar}
        className="mx-2 mt-2 flex shrink-0 items-center justify-center gap-1.5 rounded-lg border border-dashed border-dourado/40 px-3 py-2 text-sm font-medium text-dourado transition hover:bg-dourado/10"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 5v14M5 12h14" /></svg>
        Nova página
      </button>

      <ul className="min-h-0 flex-1 overflow-y-auto p-2">
        {paginas.map((p, i) => {
          const ativo = p.id === atualId;
          const editando = p.id === editandoId;
          return (
            <li key={p.id} className="mb-1">
              <div
                className={[
                  'group flex items-center gap-1 rounded-lg border px-2 py-1.5 transition',
                  ativo
                    ? 'border-dourado/40 bg-dourado/10'
                    : 'border-transparent hover:border-white/10 hover:bg-white/5',
                ].join(' ')}
              >
                {editando ? (
                  <input
                    ref={inputRef}
                    defaultValue={p.title}
                    placeholder={FALLBACK_TITULO}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') (e.target as HTMLInputElement).blur();
                      if (e.key === 'Escape') {
                        (e.target as HTMLInputElement).value = p.title;
                        setEditandoId(null);
                      }
                    }}
                    onBlur={(e) => {
                      onRenomear(p.id, e.target.value);
                      setEditandoId(null);
                    }}
                    className="min-w-0 flex-1 rounded bg-naval-800 px-1.5 py-0.5 text-sm text-marfim outline-none ring-1 ring-dourado/40"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => onSelecionar(p.id)}
                    onDoubleClick={() => setEditandoId(p.id)}
                    title={p.title.trim() || FALLBACK_TITULO}
                    className={[
                      'min-w-0 flex-1 truncate text-left text-sm',
                      ativo ? 'font-medium text-marfim' : 'text-nevoa',
                      p.title.trim() ? '' : 'italic text-nevoa/50',
                    ].join(' ')}
                  >
                    {p.title.trim() || FALLBACK_TITULO}
                  </button>
                )}

                <div className="flex shrink-0 items-center opacity-0 transition group-hover:opacity-100 focus-within:opacity-100" style={ativo ? { opacity: 1 } : undefined}>
                  <button type="button" onClick={() => onMover(p.id, -1)} disabled={i === 0} aria-label="Mover para cima" title="Mover para cima" className="rounded p-0.5 text-nevoa/60 hover:text-marfim disabled:opacity-25">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="m6 15 6-6 6 6" /></svg>
                  </button>
                  <button type="button" onClick={() => onMover(p.id, 1)} disabled={i === paginas.length - 1} aria-label="Mover para baixo" title="Mover para baixo" className="rounded p-0.5 text-nevoa/60 hover:text-marfim disabled:opacity-25">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="m6 9 6 6 6-6" /></svg>
                  </button>
                  <button type="button" onClick={() => setEditandoId(p.id)} aria-label="Renomear página" title="Renomear" className="rounded p-0.5 text-nevoa/60 hover:text-marfim">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" /></svg>
                  </button>
                  <button type="button" onClick={() => confirmarExcluir(p)} aria-label="Excluir página" title="Excluir" className="rounded p-0.5 text-nevoa/60 hover:text-alerta">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" /></svg>
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

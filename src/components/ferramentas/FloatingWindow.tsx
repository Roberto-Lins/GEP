import { useEffect, useRef, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  title: string;
  onClose: () => void;
  children: ReactNode;
  initial?: { width: number; height: number };
  /** Markup interno de um <svg viewBox="0 0 24 24"> (default: bússola). */
  icon?: string;
}

const ICONE_PADRAO = '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.5"/>';

interface Rect { x: number; y: number; w: number; h: number; }
type Interaction = { mode: 'move' | 'resize'; px: number; py: number; start: Rect };

const MIN_W = 340;
const MIN_H = 280;

/** Janela flutuante arrastável e redimensionável, renderizada sobre toda a página. */
export default function FloatingWindow({ title, onClose, children, initial, icon = ICONE_PADRAO }: Props) {
  const [rect, setRect] = useState<Rect>(() => {
    const w = Math.min(initial?.width ?? 900, window.innerWidth - 32);
    const h = Math.min(initial?.height ?? 640, window.innerHeight - 96);
    return {
      w,
      h,
      x: Math.max(16, (window.innerWidth - w) / 2),
      y: Math.max(16, (window.innerHeight - h) / 2.6),
    };
  });
  const [maximized, setMaximized] = useState(false);
  const prev = useRef<Rect | null>(null);
  const drag = useRef<Interaction | null>(null);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const it = drag.current;
      if (!it) return;
      const dx = e.clientX - it.px;
      const dy = e.clientY - it.py;
      if (it.mode === 'move') {
        const x = Math.min(Math.max(0, it.start.x + dx), window.innerWidth - 80);
        const y = Math.min(Math.max(0, it.start.y + dy), window.innerHeight - 48);
        setRect((r) => ({ ...r, x, y }));
      } else {
        const w = Math.min(Math.max(MIN_W, it.start.w + dx), window.innerWidth - it.start.x - 8);
        const h = Math.min(Math.max(MIN_H, it.start.h + dy), window.innerHeight - it.start.y - 8);
        setRect((r) => ({ ...r, w, h }));
      }
    };
    const onUp = () => {
      drag.current = null;
      document.body.style.userSelect = '';
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      document.body.style.userSelect = ''; // não deixa a seleção travada se desmontar no meio do drag
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const begin = (mode: Interaction['mode']) => (e: React.PointerEvent) => {
    if (maximized) return;
    e.preventDefault();
    drag.current = { mode, px: e.clientX, py: e.clientY, start: rect };
    document.body.style.userSelect = 'none';
  };

  const toggleMax = () => {
    if (maximized) {
      if (prev.current) setRect(prev.current);
      setMaximized(false);
    } else {
      prev.current = rect;
      setRect({ x: 8, y: 8, w: window.innerWidth - 16, h: window.innerHeight - 16 });
      setMaximized(true);
    }
  };

  return createPortal(
    <div
      role="dialog"
      aria-label={title}
      className="fixed z-[70] flex flex-col overflow-hidden rounded-xl border border-dourado/30 bg-naval-800 shadow-card ring-1 ring-black/40"
      style={{ left: rect.x, top: rect.y, width: rect.w, height: rect.h }}
    >
      <div
        onPointerDown={begin('move')}
        className="flex cursor-move items-center justify-between gap-2 border-b border-white/10 bg-naval-700/80 px-3 py-2 backdrop-blur"
      >
        <span className="flex items-center gap-2 truncate text-sm font-semibold text-marfim">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="shrink-0 text-dourado"
            dangerouslySetInnerHTML={{ __html: icon }}
          />
          {title}
        </span>
        <span className="flex items-center gap-1">
          <button
            type="button"
            onClick={toggleMax}
            aria-label={maximized ? 'Restaurar' : 'Maximizar'}
            className="rounded p-1 text-nevoa/70 transition hover:bg-white/10 hover:text-marfim"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="4" y="4" width="16" height="16" rx="1.5" />
            </svg>
          </button>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="rounded p-1 text-nevoa/70 transition hover:bg-alerta/20 hover:text-alerta"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </span>
      </div>

      <div className="min-h-0 flex-1 overflow-auto bg-naval">{children}</div>

      {!maximized && (
        <div
          onPointerDown={begin('resize')}
          className="absolute bottom-0 right-0 h-5 w-5 cursor-se-resize text-dourado/50"
          aria-hidden="true"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M15 5 5 15M16 10l-6 6M17 15l-2 2" />
          </svg>
        </div>
      )}
    </div>,
    document.body,
  );
}

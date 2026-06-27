import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

/**
 * Overlay de agradecimento. Fica inerte até receber o evento global
 * `bussola:apoio-obrigado` (disparado pelo botão "Já contribuí"). Mostra o
 * avatar em continência por até 10 s e fecha sozinho — ou a qualquer momento
 * via X, tecla Esc ou clique no fundo.
 */
const DURACAO_MS = 10_000;
const EVENTO = 'bussola:apoio-obrigado';

export default function ApoieThankYou() {
  const [aberto, setAberto] = useState(false);
  const timerRef = useRef<number | null>(null);

  function fechar() {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setAberto(false);
  }

  useEffect(() => {
    function abrir() {
      setAberto(true);
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => {
        timerRef.current = null;
        setAberto(false);
      }, DURACAO_MS);
    }
    window.addEventListener(EVENTO, abrir);
    return () => {
      window.removeEventListener(EVENTO, abrir);
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!aberto) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') fechar();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [aberto]);

  if (!aberto || typeof document === 'undefined') return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-naval/80 p-4 backdrop-blur-sm"
      onClick={fechar}
      role="dialog"
      aria-modal="true"
      aria-label="Agradecimento pelo apoio"
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-3xl border border-dourado/30 bg-aco/40 p-8 text-center shadow-card"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'apoie-pop .35s cubic-bezier(.2,.8,.25,1)' }}
      >
        <button
          type="button"
          onClick={fechar}
          aria-label="Fechar"
          className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full border border-white/10 text-nevoa/70 transition hover:border-dourado/40 hover:text-dourado"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        <img
          src="/imagens/plataforma/apoie-avatar-continencia.webp"
          alt="Roberto prestando continência em agradecimento"
          className="mx-auto h-44 w-44 object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)]"
          loading="eager"
        />
        <h2 className="mt-3 font-serif text-2xl text-marfim">Obrigado pelo seu apoio! 🫡</h2>
        <p className="mx-auto mt-2 max-w-xs text-sm text-nevoa/80">
          Sua contribuição ajuda a manter a Bússola no ar e cada vez melhor. De verdade: muito obrigado.
        </p>

        {/* barra de contagem dos 10 s */}
        <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-white/10" aria-hidden="true">
          <div
            className="h-full rounded-full bg-dourado"
            style={{ animation: `apoie-countdown ${DURACAO_MS}ms linear forwards` }}
          />
        </div>
      </div>

      <style>{`
        @keyframes apoie-countdown { from { width: 100%; } to { width: 0%; } }
        @keyframes apoie-pop { from { opacity: 0; transform: translateY(12px) scale(.96); } to { opacity: 1; transform: none; } }
      `}</style>
    </div>,
    document.body,
  );
}

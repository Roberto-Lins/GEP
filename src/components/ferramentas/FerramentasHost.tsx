import { Suspense, lazy, useEffect, useState, type ComponentType } from 'react';
import FloatingWindow from './FloatingWindow';
import { ferramentaPorId } from '@tools/registry';
import type { ToolDefinition, ToolProps } from '@tipos/tools';

/** Evento global para abrir uma ferramenta em janela: window.dispatchEvent(
 *  new CustomEvent('bussola:abrir-ferramenta', { detail: { id } })). */
export const EVENTO_ABRIR = 'bussola:abrir-ferramenta';

const lazyCache = new Map<string, ComponentType<ToolProps>>();
function getLazy(def: ToolDefinition): ComponentType<ToolProps> {
  if (!lazyCache.has(def.id)) lazyCache.set(def.id, lazy(def.carregar!));
  return lazyCache.get(def.id)!;
}

interface OpenWin {
  id: string;
  nome: string;
  Comp: ComponentType<ToolProps>;
  exercicioId?: string;
}

/**
 * Host global das ferramentas (ilha client:only montada no BaseLayout).
 * Fica inerte até receber o evento de abertura — não afeta o conteúdo das matérias.
 */
export default function FerramentasHost() {
  const [open, setOpen] = useState<OpenWin[]>([]);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail ?? {};
      const def = ferramentaPorId(detail.id);
      if (!def || !def.carregar || !def.suportaJanela) return;
      setOpen((cur) =>
        cur.some((w) => w.id === def.id)
          ? cur
          : [...cur, { id: def.id, nome: def.nome, Comp: getLazy(def), exercicioId: detail.exercicioId }],
      );
    };
    window.addEventListener(EVENTO_ABRIR, handler);
    return () => window.removeEventListener(EVENTO_ABRIR, handler);
  }, []);

  const fechar = (id: string) => setOpen((cur) => cur.filter((w) => w.id !== id));

  return (
    <>
      {open.map((w) => (
        <FloatingWindow key={w.id} title={w.nome} onClose={() => fechar(w.id)}>
          <Suspense
            fallback={<div className="p-8 text-center text-sm text-nevoa">Carregando ferramenta…</div>}
          >
            <w.Comp modo="janela" exercicioId={w.exercicioId} />
          </Suspense>
        </FloatingWindow>
      ))}
    </>
  );
}

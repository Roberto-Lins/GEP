import { Component, Suspense, lazy, useEffect, useState, type ComponentType, type ReactNode } from 'react';
import FloatingWindow from './FloatingWindow';
import { ferramentaPorId } from '@tools/registry';
import type { ToolDefinition, ToolProps } from '@tipos/tools';

/**
 * Isola cada ferramenta: se o carregamento do chunk falhar (ex.: build novo
 * deixou o chunk antigo desatualizado após um deploy/HMR sem recarregar a
 * página), mostra um aviso recuperável em vez de derrubar o host inteiro — o
 * que silenciava a janela e fazia parecer que ela "não abria".
 */
class ToolErrorBoundary extends Component<{ nome: string; children: ReactNode }, { erro: Error | null }> {
  state: { erro: Error | null } = { erro: null };
  static getDerivedStateFromError(erro: Error) {
    return { erro };
  }
  render() {
    if (this.state.erro) {
      return (
        <div className="p-6 text-sm text-nevoa">
          <p className="mb-2 font-semibold text-marfim">Não foi possível carregar “{this.props.nome}”.</p>
          <p className="mb-4 text-nevoa/70">
            Isto costuma acontecer quando o site foi atualizado e esta página ficou desatualizada.
            Recarregue para abrir a ferramenta.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="rounded-lg bg-dourado px-3 py-1.5 text-sm font-semibold text-naval transition hover:bg-dourado-soft"
          >
            Recarregar a página
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

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
  icone: string;
  Comp: ComponentType<ToolProps>;
  exercicioId?: string;
  cursoId?: string;
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
          : [
              ...cur,
              {
                id: def.id,
                nome: def.nome,
                icone: def.icone,
                Comp: getLazy(def),
                exercicioId: detail.exercicioId,
                cursoId: detail.cursoId,
              },
            ],
      );
    };
    window.addEventListener(EVENTO_ABRIR, handler);
    return () => window.removeEventListener(EVENTO_ABRIR, handler);
  }, []);

  const fechar = (id: string) => setOpen((cur) => cur.filter((w) => w.id !== id));

  return (
    <>
      {open.map((w) => (
        <FloatingWindow key={w.id} title={w.nome} icon={w.icone} onClose={() => fechar(w.id)}>
          <ToolErrorBoundary nome={w.nome}>
            <Suspense
              fallback={<div className="p-8 text-center text-sm text-nevoa">Carregando ferramenta…</div>}
            >
              <w.Comp modo="janela" exercicioId={w.exercicioId} cursoId={w.cursoId} />
            </Suspense>
          </ToolErrorBoundary>
        </FloatingWindow>
      ))}
    </>
  );
}

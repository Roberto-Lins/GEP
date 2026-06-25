// Raiz da ferramenta Caderno (default export = componente da ferramenta).
// Resolve o curso (prop cursoId → senão seletor), monta o layout responsivo
// (lista de páginas + editor + título + status de salvamento) e delega toda a
// persistência ao hook useNotebook. Carregada sob demanda (lazy) pelo registry.
import { useEffect, useRef, useState } from 'react';
import type { ToolProps } from '@tipos/tools';
import { cursoPorSlug } from '@utils/courses';
import CadernoEditor from './CadernoEditor';
import CoursePicker from './CoursePicker';
import PageList from './PageList';
import { useNotebook, type StatusSalvar } from './useNotebook';

export default function CadernoWorkspace({ cursoId }: ToolProps) {
  const [cursoAtivo, setCursoAtivo] = useState<string | null>(cursoId ?? null);
  if (!cursoAtivo) return <CoursePicker onPick={setCursoAtivo} />;
  // key={cursoAtivo}: trocar de curso desmonta/remonta → grava o caderno
  // anterior (cleanup do hook) e carrega o do novo curso, sem misturar dados.
  return <CadernoAtivo key={cursoAtivo} courseId={cursoAtivo} onTrocarCurso={() => setCursoAtivo(null)} />;
}

function IndicadorSalvar({ status }: { status: StatusSalvar }) {
  if (status === 'idle') return null;
  const salvando = status === 'salvando';
  return (
    <span className="flex shrink-0 items-center gap-1 text-xs text-nevoa/60" aria-live="polite">
      {salvando ? (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-spin"><path d="M21 12a9 9 0 1 1-6.2-8.6" /></svg>
      ) : (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="text-progresso"><path d="m20 6-11 11-5-5" /></svg>
      )}
      {salvando ? 'Salvando…' : 'Salvo'}
    </span>
  );
}

function Centro({ children }: { children: React.ReactNode }) {
  return <div className="flex h-full items-center justify-center p-8 text-center text-sm text-nevoa">{children}</div>;
}

function CadernoAtivo({ courseId, onTrocarCurso }: { courseId: string; onTrocarCurso: () => void }) {
  const api = useNotebook(courseId);
  const cursoTitulo = cursoPorSlug(courseId)?.titulo ?? courseId;

  // Largura do container (não da viewport): a janela flutuante pode ser estreita
  // mesmo no desktop. < 560px → modo compacto (lista de páginas vira gaveta).
  const rootRef = useRef<HTMLDivElement>(null);
  const [largura, setLargura] = useState(0);
  const [gavetaAberta, setGavetaAberta] = useState(false);
  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver((entries) => setLargura(entries[0].contentRect.width));
    ro.observe(el);
    setLargura(el.getBoundingClientRect().width);
    return () => ro.disconnect();
  }, []);
  const compacto = largura > 0 && largura < 560;

  const { estado, status, paginas, paginaAtual } = api;

  const corpo = () => {
    if (estado === 'loading') {
      return (
        <Centro>
          <span className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-spin"><path d="M21 12a9 9 0 1 1-6.2-8.6" /></svg>
            Carregando o caderno…
          </span>
        </Centro>
      );
    }
    if (estado === 'error') {
      return (
        <Centro>
          <div>
            <p className="mb-3 text-marfim">Não foi possível carregar o seu caderno.</p>
            <p className="mb-4 text-nevoa/70">As suas anotações continuam salvas — apenas a leitura falhou agora.</p>
            <button type="button" onClick={api.tentarNovamente} className="rounded-lg bg-dourado px-3 py-1.5 text-sm font-semibold text-naval transition hover:bg-dourado-soft">
              Tentar de novo
            </button>
          </div>
        </Centro>
      );
    }
    if (!paginaAtual) return null;

    const selecionar = (id: string) => {
      api.selecionar(id);
      if (compacto) setGavetaAberta(false);
    };

    const listaProps = {
      paginas,
      atualId: paginaAtual.id,
      onSelecionar: selecionar,
      onCriar: api.criarPagina,
      onRenomear: api.renomear,
      onExcluir: api.excluir,
      onMover: api.mover,
    };

    return (
      <div className="relative flex min-h-0 flex-1">
        {compacto ? (
          gavetaAberta && (
            <>
              <div className="absolute inset-0 z-10 bg-black/50" onClick={() => setGavetaAberta(false)} aria-hidden="true" />
              <aside className="absolute inset-y-0 left-0 z-20 w-64 max-w-[80%] shadow-2xl">
                <PageList {...listaProps} onFechar={() => setGavetaAberta(false)} />
              </aside>
            </>
          )
        ) : (
          <aside className="w-56 shrink-0 border-r border-white/10">
            <PageList {...listaProps} />
          </aside>
        )}

        <div className="flex min-w-0 flex-1 flex-col">
          <input
            value={paginaAtual.title}
            onChange={(e) => api.renomear(paginaAtual.id, e.target.value)}
            placeholder="Título da página"
            aria-label="Título da página"
            className="shrink-0 border-b border-white/10 bg-transparent px-4 py-2.5 font-serif text-lg font-semibold text-marfim outline-none placeholder:font-sans placeholder:text-base placeholder:font-normal placeholder:text-nevoa/30 sm:px-6"
          />
          <CadernoEditor
            pageId={paginaAtual.id}
            content={paginaAtual.content}
            onChange={(c) => api.setConteudo(paginaAtual.id, c)}
          />
        </div>
      </div>
    );
  };

  return (
    <div ref={rootRef} className="flex h-full min-h-0 flex-col bg-naval text-marfim">
      <div className="flex shrink-0 items-center gap-2 border-b border-white/10 bg-naval-800/60 px-3 py-2">
        {compacto && estado === 'ready' && (
          <button type="button" onClick={() => setGavetaAberta(true)} aria-label="Abrir lista de páginas" title="Páginas" className="rounded-md p-1.5 text-nevoa/80 hover:bg-white/10 hover:text-marfim">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        )}
        <div className="flex min-w-0 flex-1 items-baseline gap-2">
          <span className="truncate text-sm font-semibold text-marfim" title={cursoTitulo}>{cursoTitulo}</span>
          <button type="button" onClick={onTrocarCurso} className="shrink-0 text-xs text-nevoa/50 underline-offset-2 transition hover:text-dourado hover:underline" title="Abrir o caderno de outro curso">
            trocar
          </button>
        </div>
        <IndicadorSalvar status={status} />
      </div>
      {corpo()}
    </div>
  );
}

// Hook que liga o Caderno de UM curso à persistência (IndexedDB).
// Cuida de TODA a robustez contra perda de dados:
//   • estados de carga explícitos (loading | ready | error) — nunca grava nem
//     mostra editor antes de a leitura terminar; nunca sobrescreve dados
//     existentes com um caderno vazio por falha temporária;
//   • autosave com debounce + gravação IMEDIATA nos eventos críticos
//     (trocar de página, criar/excluir/mover, visibilitychange→hidden,
//     pagehide e desmontagem/fechamento);
//   • indicador discreto "Salvando…/Salvo".

import { useCallback, useEffect, useReducer, useRef, useState } from 'react';
import { getNotebook, putNotebook } from './db';
import * as store from './store';
import type { CourseNotebook } from './types';

export type EstadoCarga = 'loading' | 'ready' | 'error';
export type StatusSalvar = 'idle' | 'salvando' | 'salvo';

const DEBOUNCE_MS = 700;

export interface CadernoApi {
  estado: EstadoCarga;
  status: StatusSalvar;
  notebook: CourseNotebook | null;
  paginas: ReturnType<typeof store.paginasOrdenadas>;
  paginaAtual: ReturnType<typeof store.paginaSelecionada>;
  criarPagina: () => void;
  renomear: (id: string, title: string) => void;
  excluir: (id: string) => void;
  mover: (id: string, dir: -1 | 1) => void;
  selecionar: (id: string) => void;
  setConteudo: (id: string, content: unknown) => void;
  limparConteudo: (id: string) => void;
  tentarNovamente: () => void;
}

export function useNotebook(courseId: string): CadernoApi {
  const [estado, setEstado] = useState<EstadoCarga>('loading');
  const [status, setStatus] = useState<StatusSalvar>('idle');
  const [notebook, setNotebook] = useState<CourseNotebook | null>(null);

  // Refs p/ os handlers de flush lerem SEMPRE o valor mais recente sem
  // recriar listeners e sem fechar sobre estado obsoleto.
  const nbRef = useRef<CourseNotebook | null>(null);
  const dirtyRef = useRef(false);
  const debounceRef = useRef<number | null>(null);
  const [reloadKey, recarregar] = useReducer((k: number) => k + 1, 0);

  // ── Persistência ────────────────────────────────────────────────────────
  const persistir = useCallback(async () => {
    const atual = nbRef.current;
    if (!atual || !dirtyRef.current) return;
    dirtyRef.current = false; // edições durante o await re-marcam e reagendam
    setStatus('salvando');
    try {
      await putNotebook(atual);
      setStatus('salvo');
    } catch {
      dirtyRef.current = true; // mantém pendente p/ o próximo evento crítico
    }
  }, []);

  const flush = useCallback(() => {
    if (debounceRef.current !== null) {
      clearTimeout(debounceRef.current);
      debounceRef.current = null;
    }
    void persistir();
  }, [persistir]);

  const agendar = useCallback(() => {
    setStatus('salvando');
    if (debounceRef.current !== null) clearTimeout(debounceRef.current);
    debounceRef.current = window.setTimeout(() => {
      debounceRef.current = null;
      void persistir();
    }, DEBOUNCE_MS);
  }, [persistir]);

  /** Aplica um novo notebook ao estado + agenda (ou força) a gravação. */
  const aplicar = useCallback(
    (proximo: CourseNotebook, imediato = false) => {
      nbRef.current = proximo;
      dirtyRef.current = true;
      setNotebook(proximo);
      if (imediato) flush();
      else agendar();
    },
    [flush, agendar],
  );

  // ── Carregamento (e recarregamento via "tentar de novo") ──────────────────
  useEffect(() => {
    let cancelado = false;
    setEstado('loading');
    setStatus('idle');
    dirtyRef.current = false;
    getNotebook(courseId)
      .then((existente) => {
        if (cancelado) return;
        if (existente) {
          nbRef.current = existente;
          setNotebook(existente);
          setEstado('ready');
        } else {
          // Primeiro acesso: cria o caderno inicial e já persiste.
          const novo = store.notebookVazio(courseId);
          nbRef.current = novo;
          setNotebook(novo);
          setEstado('ready');
          putNotebook(novo).catch(() => {
            /* gravação inicial é melhor-esforço; o autosave cobre depois */
          });
        }
      })
      .catch(() => {
        if (cancelado) return;
        // Falha de leitura: NÃO criar/sobrescrever — apenas sinalizar erro.
        nbRef.current = null;
        setNotebook(null);
        setEstado('error');
      });
    return () => {
      cancelado = true;
    };
  }, [courseId, reloadKey]);

  // ── Flush em eventos críticos + ao desmontar ──────────────────────────────
  useEffect(() => {
    const onPageHide = () => flush();
    const onVisibility = () => {
      if (document.visibilityState === 'hidden') flush();
    };
    const onBeforeUnload = () => flush(); // reforço best-effort (não é a garantia)
    window.addEventListener('pagehide', onPageHide);
    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('beforeunload', onBeforeUnload);
    return () => {
      window.removeEventListener('pagehide', onPageHide);
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('beforeunload', onBeforeUnload);
      flush(); // fechar a janela / trocar de curso grava as pendências
    };
  }, [flush]);

  // ── Ações (sempre operam sobre nbRef.current = valor mais recente) ─────────
  const comAtual = useCallback(
    (fn: (nb: CourseNotebook) => CourseNotebook, imediato: boolean) => {
      const atual = nbRef.current;
      if (!atual) return;
      const proximo = fn(atual);
      if (proximo !== atual) aplicar(proximo, imediato);
    },
    [aplicar],
  );

  // Estruturais → gravação imediata. Conteúdo/título → debounce.
  const criarPagina = useCallback(() => comAtual(store.criarPagina, true), [comAtual]);
  const excluir = useCallback((id: string) => comAtual((nb) => store.excluirPagina(nb, id), true), [comAtual]);
  const mover = useCallback((id: string, dir: -1 | 1) => comAtual((nb) => store.moverPagina(nb, id, dir), true), [comAtual]);
  const selecionar = useCallback((id: string) => comAtual((nb) => store.selecionarPagina(nb, id), true), [comAtual]);
  const renomear = useCallback((id: string, title: string) => comAtual((nb) => store.renomearPagina(nb, id, title), false), [comAtual]);
  const setConteudo = useCallback((id: string, content: unknown) => comAtual((nb) => store.atualizarConteudo(nb, id, content), false), [comAtual]);
  const limparConteudo = useCallback((id: string) => comAtual((nb) => store.limparConteudo(nb, id), true), [comAtual]);

  return {
    estado,
    status,
    notebook,
    paginas: notebook ? store.paginasOrdenadas(notebook) : [],
    paginaAtual: notebook ? store.paginaSelecionada(notebook) : null,
    criarPagina,
    renomear,
    excluir,
    mover,
    selecionar,
    setConteudo,
    limparConteudo,
    tentarNovamente: recarregar,
  };
}

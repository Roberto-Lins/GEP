// Lógica pura do Caderno (sem I/O, sem React) — 100% testável.
// Toda função recebe um CourseNotebook e devolve um NOVO objeto (imutável),
// para casar com o setState do React e nunca mutar o estado salvo.

import { NOTEBOOK_VERSION, type CourseNotebook, type NotebookPage } from './types';

/** Texto mostrado quando o título está vazio (não é gravado — só exibição). */
export const FALLBACK_TITULO = 'Página sem título';

function agora(): string {
  return new Date().toISOString();
}

function novoId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `p-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

/** Documento TipTap vazio (sempre uma instância nova — nunca compartilhar referência). */
export function docVazio(): unknown {
  return { type: 'doc', content: [{ type: 'paragraph' }] };
}

function paginaNova(order: number): NotebookPage {
  const t = agora();
  return { id: novoId(), title: '', content: docVazio(), createdAt: t, updatedAt: t, order };
}

/** Páginas em ordem estável de exibição. */
export function paginasOrdenadas(nb: CourseNotebook): NotebookPage[] {
  return [...nb.pages].sort((a, b) => a.order - b.order);
}

/** Página atualmente selecionada (com fallback p/ a primeira, se a seleção sumir). */
export function paginaSelecionada(nb: CourseNotebook): NotebookPage | null {
  if (nb.pages.length === 0) return null;
  return nb.pages.find((p) => p.id === nb.selectedPageId) ?? paginasOrdenadas(nb)[0];
}

/** Caderno inicial (primeiro acesso): uma página em branco já selecionada. */
export function notebookVazio(courseId: string): CourseNotebook {
  const t = agora();
  const p = paginaNova(0);
  return {
    version: NOTEBOOK_VERSION,
    courseId,
    selectedPageId: p.id,
    pages: [p],
    createdAt: t,
    updatedAt: t,
  };
}

function mutarPagina(
  nb: CourseNotebook,
  id: string,
  fn: (p: NotebookPage) => NotebookPage,
): CourseNotebook {
  let mudou = false;
  const pages = nb.pages.map((p) => {
    if (p.id !== id) return p;
    mudou = true;
    return { ...fn(p), updatedAt: agora() };
  });
  if (!mudou) return nb;
  return { ...nb, pages, updatedAt: agora() };
}

export function criarPagina(nb: CourseNotebook): CourseNotebook {
  const maxOrder = nb.pages.reduce((m, p) => Math.max(m, p.order), -1);
  const nova = paginaNova(maxOrder + 1);
  return { ...nb, pages: [...nb.pages, nova], selectedPageId: nova.id, updatedAt: agora() };
}

export function renomearPagina(nb: CourseNotebook, id: string, title: string): CourseNotebook {
  return mutarPagina(nb, id, (p) => ({ ...p, title }));
}

export function atualizarConteudo(nb: CourseNotebook, id: string, content: unknown): CourseNotebook {
  return mutarPagina(nb, id, (p) => ({ ...p, content }));
}

/** Exclui uma página. Se era a última, recria uma em branco (nunca fica sem páginas). */
export function excluirPagina(nb: CourseNotebook, id: string): CourseNotebook {
  const restantes = nb.pages.filter((p) => p.id !== id);
  if (restantes.length === nb.pages.length) return nb; // id inexistente
  if (restantes.length === 0) {
    const p = paginaNova(0);
    return { ...nb, pages: [p], selectedPageId: p.id, updatedAt: agora() };
  }
  let selected = nb.selectedPageId;
  if (selected === id) {
    const ord = paginasOrdenadas(nb);
    const idx = ord.findIndex((p) => p.id === id);
    const vizinho = ord[idx - 1] ?? ord[idx + 1]; // anterior; senão o próximo
    selected = vizinho ? vizinho.id : restantes[0].id;
  }
  return { ...nb, pages: restantes, selectedPageId: selected, updatedAt: agora() };
}

/** Move uma página uma posição para cima (-1) ou para baixo (+1), trocando ordens. */
export function moverPagina(nb: CourseNotebook, id: string, dir: -1 | 1): CourseNotebook {
  const ord = paginasOrdenadas(nb);
  const idx = ord.findIndex((p) => p.id === id);
  if (idx < 0) return nb;
  const alvo = idx + dir;
  if (alvo < 0 || alvo >= ord.length) return nb;
  const a = ord[idx];
  const b = ord[alvo];
  const pages = nb.pages.map((p) => {
    if (p.id === a.id) return { ...p, order: b.order };
    if (p.id === b.id) return { ...p, order: a.order };
    return p;
  });
  return { ...nb, pages, updatedAt: agora() };
}

export function selecionarPagina(nb: CourseNotebook, id: string): CourseNotebook {
  if (nb.selectedPageId === id || !nb.pages.some((p) => p.id === id)) return nb;
  return { ...nb, selectedPageId: id };
}

/** Limpa o conteúdo de uma página (mantém o título). */
export function limparConteudo(nb: CourseNotebook, id: string): CourseNotebook {
  return mutarPagina(nb, id, (p) => ({ ...p, content: docVazio() }));
}

function ehPagina(x: unknown): x is Partial<NotebookPage> {
  return !!x && typeof x === 'object' && typeof (x as { id?: unknown }).id === 'string';
}

function normalizarPagina(raw: Partial<NotebookPage>, order: number): NotebookPage {
  const t = agora();
  return {
    id: typeof raw.id === 'string' ? raw.id : novoId(),
    title: typeof raw.title === 'string' ? raw.title : '',
    content: raw.content ?? docVazio(),
    createdAt: typeof raw.createdAt === 'string' ? raw.createdAt : t,
    updatedAt: typeof raw.updatedAt === 'string' ? raw.updatedAt : t,
    order,
  };
}

/**
 * Normaliza/migra um valor cru lido do armazenamento para um CourseNotebook válido.
 * Defensivo: NUNCA descarta páginas; só conserta campos faltantes, renumera a ordem
 * (0..n-1 preservando a ordem atual) e garante uma página selecionada válida.
 */
export function migrar(raw: unknown, courseId: string): CourseNotebook {
  if (!raw || typeof raw !== 'object') return notebookVazio(courseId);
  const r = raw as Partial<CourseNotebook>;
  let lidas = Array.isArray(r.pages) ? r.pages.filter(ehPagina) : [];
  let pages: NotebookPage[];
  if (lidas.length === 0) {
    pages = notebookVazio(courseId).pages;
  } else {
    // Ordena pelo `order` existente (NaN ao fim) e renumera 0..n-1.
    pages = [...lidas]
      .sort((a, b) => (a.order ?? Infinity) - (b.order ?? Infinity))
      .map((p, i) => normalizarPagina(p, i));
  }
  const ids = new Set(pages.map((p) => p.id));
  const selectedPageId =
    typeof r.selectedPageId === 'string' && ids.has(r.selectedPageId)
      ? r.selectedPageId
      : pages[0].id;
  return {
    version: NOTEBOOK_VERSION,
    courseId: typeof r.courseId === 'string' ? r.courseId : courseId,
    selectedPageId,
    pages,
    createdAt: typeof r.createdAt === 'string' ? r.createdAt : agora(),
    updatedAt: typeof r.updatedAt === 'string' ? r.updatedAt : agora(),
  };
}

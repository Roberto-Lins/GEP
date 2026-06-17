// Camada de progresso do aluno — 100% localStorage, sem backend.
// Usada pelos componentes React (checklist, questões, barra de progresso) e
// pela home, via evento `gep:progresso` disparado a cada mudança.

const KEY = 'gep:progresso:v1';
export const EVENTO = 'gep:progresso';

export interface ProgressoMateria {
  /** seções/itens de checklist marcados, por id */
  checklist: Record<string, boolean>;
  /** respostas de questões: id -> { acertou } */
  questoes: Record<string, { acertou: boolean }>;
  /** marcada manualmente como concluída */
  concluida: boolean;
  /** timestamp do último acesso */
  ultimoAcesso?: number;
}

export interface Progresso {
  materias: Record<string, ProgressoMateria>;
  ultimaMateria?: string;
}

const vazio = (): Progresso => ({ materias: {} });

function materiaVazia(): ProgressoMateria {
  return { checklist: {}, questoes: {}, concluida: false };
}

export function carregar(): Progresso {
  if (typeof localStorage === 'undefined') return vazio();
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return vazio();
    const dados = JSON.parse(raw) as Progresso;
    if (!dados.materias) dados.materias = {};
    return dados;
  } catch {
    return vazio();
  }
}

export function salvar(p: Progresso): void {
  if (typeof localStorage === 'undefined') return;
  localStorage.setItem(KEY, JSON.stringify(p));
  window.dispatchEvent(new CustomEvent(EVENTO, { detail: p }));
}

export function materia(slug: string): ProgressoMateria {
  const p = carregar();
  return p.materias[slug] ?? materiaVazia();
}

function mutar(slug: string, fn: (m: ProgressoMateria) => void): Progresso {
  const p = carregar();
  const m = p.materias[slug] ?? materiaVazia();
  fn(m);
  m.ultimoAcesso = Date.now();
  p.materias[slug] = m;
  p.ultimaMateria = slug;
  salvar(p);
  return p;
}

export function marcarChecklist(slug: string, itemId: string, valor: boolean) {
  return mutar(slug, (m) => {
    m.checklist[itemId] = valor;
  });
}

export function registrarResposta(slug: string, questaoId: string, acertou: boolean) {
  return mutar(slug, (m) => {
    m.questoes[questaoId] = { acertou };
  });
}

export function marcarConcluida(slug: string, valor: boolean) {
  return mutar(slug, (m) => {
    m.concluida = valor;
  });
}

export function registrarAcesso(slug: string) {
  return mutar(slug, () => {});
}

/** Percentual 0–100 de conclusão de uma matéria, combinando checklist e flag. */
export function percentualMateria(slug: string, totalItensChecklist: number): number {
  const m = materia(slug);
  if (m.concluida) return 100;
  if (totalItensChecklist <= 0) return 0;
  const marcados = Object.values(m.checklist).filter(Boolean).length;
  return Math.min(100, Math.round((marcados / totalItensChecklist) * 100));
}

export interface ResumoQuestoes {
  respondidas: number;
  acertos: number;
  erros: number;
  taxa: number; // 0–100
}

export function resumoQuestoes(p: Progresso = carregar()): ResumoQuestoes {
  let respondidas = 0, acertos = 0;
  for (const m of Object.values(p.materias)) {
    for (const q of Object.values(m.questoes)) {
      respondidas++;
      if (q.acertou) acertos++;
    }
  }
  const erros = respondidas - acertos;
  const taxa = respondidas ? Math.round((acertos / respondidas) * 100) : 0;
  return { respondidas, acertos, erros, taxa };
}

export function limparTudo() {
  if (typeof localStorage === 'undefined') return;
  localStorage.removeItem(KEY);
  window.dispatchEvent(new CustomEvent(EVENTO, { detail: vazio() }));
}

// Camada de progresso do aluno — 100% localStorage, aninhada por curso.
// Chave única: bussola:v1. API recebe sempre (curso, materia, ...).
// Reatividade: evento `bussola:progresso` disparado a cada escrita.

import type { Progresso, ProgressoCurso, ProgressoMateria } from '@tipos/progress';
import { migrarProgressoLegado, KEY_NOVA } from './migration';

const KEY = KEY_NOVA; // 'bussola:v1'
export const EVENTO = 'bussola:progresso';

const vazio = (): Progresso => ({ cursos: {} });
const cursoVazio = (): ProgressoCurso => ({ materias: {} });
const materiaVazia = (): ProgressoMateria => ({ checklist: {}, questoes: {}, concluida: false });

let migrou = false;
function garantirMigracao() {
  if (!migrou) {
    migrarProgressoLegado();
    migrou = true;
  }
}

export function carregar(): Progresso {
  if (typeof localStorage === 'undefined') return vazio();
  garantirMigracao();
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return vazio();
    const dados = JSON.parse(raw) as Progresso;
    if (!dados.cursos) dados.cursos = {};
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

export function cursoProgresso(curso: string): ProgressoCurso {
  return carregar().cursos[curso] ?? cursoVazio();
}

export function materia(curso: string, slug: string): ProgressoMateria {
  return cursoProgresso(curso).materias[slug] ?? materiaVazia();
}

function mutar(curso: string, slug: string, fn: (m: ProgressoMateria) => void): Progresso {
  const p = carregar();
  const c = p.cursos[curso] ?? cursoVazio();
  const m = c.materias[slug] ?? materiaVazia();
  fn(m);
  m.ultimoAcesso = Date.now();
  c.materias[slug] = m;
  c.ultimaMateria = slug;
  p.cursos[curso] = c;
  p.ultimoCurso = curso;
  salvar(p);
  return p;
}

export function marcarChecklist(curso: string, slug: string, itemId: string, valor: boolean) {
  return mutar(curso, slug, (m) => {
    m.checklist[itemId] = valor;
  });
}

export function registrarResposta(curso: string, slug: string, questaoId: string, acertou: boolean) {
  return mutar(curso, slug, (m) => {
    m.questoes[questaoId] = { acertou };
  });
}

export function marcarConcluida(curso: string, slug: string, valor: boolean) {
  return mutar(curso, slug, (m) => {
    m.concluida = valor;
  });
}

export function registrarAcesso(curso: string, slug: string) {
  return mutar(curso, slug, () => {});
}

/** Percentual 0–100 de conclusão de uma matéria, combinando checklist e flag. */
export function percentualMateria(curso: string, slug: string, totalItensChecklist: number): number {
  const m = materia(curso, slug);
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

/** Resumo de questões de um curso (ou de toda a plataforma se `curso` omitido). */
export function resumoQuestoes(curso?: string, p: Progresso = carregar()): ResumoQuestoes {
  let respondidas = 0, acertos = 0;
  const cursos = curso ? [p.cursos[curso]].filter(Boolean) : Object.values(p.cursos);
  for (const c of cursos) {
    for (const m of Object.values(c!.materias)) {
      for (const q of Object.values(m.questoes)) {
        respondidas++;
        if (q.acertou) acertos++;
      }
    }
  }
  const erros = respondidas - acertos;
  const taxa = respondidas ? Math.round((acertos / respondidas) * 100) : 0;
  return { respondidas, acertos, erros, taxa };
}

/** Percentual de matérias concluídas de um curso (0–100), dado o total de matérias. */
export function percentualCurso(curso: string, totalMaterias: number): number {
  if (totalMaterias <= 0) return 0;
  const c = cursoProgresso(curso);
  const concluidas = Object.values(c.materias).filter((m) => m.concluida).length;
  return Math.min(100, Math.round((concluidas / totalMaterias) * 100));
}

/** Limpa o progresso de um curso (ou de tudo, se `curso` omitido). */
export function limparTudo(curso?: string) {
  if (typeof localStorage === 'undefined') return;
  if (!curso) {
    localStorage.removeItem(KEY);
    window.dispatchEvent(new CustomEvent(EVENTO, { detail: vazio() }));
    return;
  }
  const p = carregar();
  delete p.cursos[curso];
  salvar(p);
}

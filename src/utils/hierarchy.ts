// Camada de navegação da hierarquia da Escola Naval:
//   Ano → [Turma p/ 3°/4°] → Semestre → Período de prova (época) → Matéria.
// Constrói tudo a partir de listarCursos() (que lê os _config.json via glob),
// sem mudar onde os cursos vivem: as rotas dos cursos continuam canônicas em /<slug>.

import { listarFamilias } from '@utils/courses';
import type { Ano, Epoca, Semestre, Turma, CursoConfig } from '@tipos/course';
import {
  ANOS,
  SEMESTRES,
  TURMAS_COM_GERAL,
  ANO_LABELS,
  SEMESTRE_LABELS,
  EPOCA_LABELS,
  TURMA_LABELS,
  EPOCAS_POR_SEMESTRE,
  anoUsaTurma,
} from '@utils/hierarchy-constants';

// Re-exporta as constantes puras para manter a API de '@utils/hierarchy'.
export * from '@utils/hierarchy-constants';

// ── Filtro de cursos ──────────────────────────────────────────────────────────
// As matérias de GERAL ficam SÓ em GERAL (turma === 'geral'); turmas
// especializadas mostram apenas as suas próprias (igualdade estrita de turma).
export interface FiltroCurso {
  ano: Ano;
  turma?: Turma;
  semestre?: Semestre;
  epoca?: Epoca;
}

/** Uma matéria pode pertencer a uma turma única ou a várias (lista). 'geral'
 *  só casa com a seção GERAL (igualdade estrita de string). */
export function cursoNaTurma(c: CursoConfig, turma: Turma): boolean {
  return Array.isArray(c.turma) ? c.turma.includes(turma) : c.turma === turma;
}

export function filtrarCursos(f: FiltroCurso): CursoConfig[] {
  return listarFamilias().map((familia) => familia.representante).filter(
    (c) =>
      c.ano === f.ano &&
      (f.turma === undefined || cursoNaTurma(c, f.turma)) &&
      (f.semestre === undefined || c.semestre === f.semestre) &&
      (f.epoca === undefined || c.epoca === f.epoca),
  );
}

export const contarMaterias = (f: FiltroCurso): number => filtrarCursos(f).length;

/** Todos os cursos de um ano (usado no dashboard). */
export const getCoursesByAno = (ano: Ano): CursoConfig[] => filtrarCursos({ ano });

// ── Navegação por segmentos (rota /ano/[...segmentos]) ─────────────────────────
export type NivelNav = 'turmas' | 'semestres' | 'epocas' | 'materias';

export interface SegmentosNav {
  ano: Ano;
  turma?: Turma;
  semestre?: Semestre;
  epoca?: Epoca;
  nivel: NivelNav;
}

/** Interpreta os segmentos da URL (/ano/<...>) no nível correto da hierarquia. */
export function parseSegmentos(segs: string[]): SegmentosNav | null {
  const ano = segs[0] as Ano;
  if (!ANOS.includes(ano)) return null;

  if (anoUsaTurma(ano)) {
    const turma = segs[1] as Turma | undefined;
    const semestre = segs[2] as Semestre | undefined;
    const epoca = segs[3] as Epoca | undefined;
    if (!turma) return { ano, nivel: 'turmas' };
    if (!semestre) return { ano, turma, nivel: 'semestres' };
    if (!epoca) return { ano, turma, semestre, nivel: 'epocas' };
    return { ano, turma, semestre, epoca, nivel: 'materias' };
  }

  const semestre = segs[1] as Semestre | undefined;
  const epoca = segs[2] as Epoca | undefined;
  if (!semestre) return { ano, nivel: 'semestres' };
  if (!epoca) return { ano, semestre, nivel: 'epocas' };
  return { ano, semestre, epoca, nivel: 'materias' };
}

/** Todos os caminhos de navegação — seções padrão SEMPRE existem, mesmo vazias. */
export function enumerarSegmentos(): string[][] {
  const out: string[][] = [];
  for (const ano of ANOS) {
    out.push([ano]);
    const turmas = anoUsaTurma(ano) ? TURMAS_COM_GERAL : [undefined];
    for (const turma of turmas) {
      const base = turma ? [ano, turma] : [ano];
      if (turma) out.push([...base]);
      for (const semestre of SEMESTRES) {
        out.push([...base, semestre]);
        for (const epoca of EPOCAS_POR_SEMESTRE[semestre]) {
          out.push([...base, semestre, epoca]);
        }
      }
    }
  }
  return out;
}

/** Caminho do nível imediatamente acima (para o botão "Voltar"). */
export const parentPath = (segs: string[]): string =>
  segs.length <= 1 ? '/' : `/ano/${segs.slice(0, -1).join('/')}`;

/** Trilha de breadcrumb a partir dos segmentos da URL. */
export function breadcrumbDe(segs: string[]): { label: string; href: string }[] {
  const ano = segs[0] as Ano;
  const itens = [
    { label: 'Início', href: '/' },
    { label: ANO_LABELS[ano], href: `/ano/${ano}` },
  ];
  let acc = `/ano/${ano}`;
  const usaTurma = anoUsaTurma(ano);
  for (let i = 1; i < segs.length; i++) {
    acc += `/${segs[i]}`;
    const seg = segs[i];
    let label = seg;
    if (usaTurma) {
      if (i === 1) label = TURMA_LABELS[seg as Turma];
      else if (i === 2) label = SEMESTRE_LABELS[seg as Semestre];
      else if (i === 3) label = EPOCA_LABELS[seg as Epoca];
    } else {
      if (i === 1) label = SEMESTRE_LABELS[seg as Semestre];
      else if (i === 2) label = EPOCA_LABELS[seg as Epoca];
    }
    itens.push({ label, href: acc });
  }
  return itens;
}

/** Caminho canônico de um curso (camada de navegação → rota atual intacta). */
export function buildNavPath(curso: CursoConfig): string {
  return `/${curso.estudo?.familiaId ?? curso.slug}`;
}

/**
 * Página de listagem onde o curso aparece (seu "pai" na hierarquia) — usada
 * pelo botão "Voltar" do cabeçalho ao entrar numa matéria.
 */
export function listingPathDoCurso(c: CursoConfig): string {
  const turma = Array.isArray(c.turma) ? c.turma[0] : c.turma;
  return anoUsaTurma(c.ano)
    ? `/ano/${c.ano}/${turma ?? 'geral'}/${c.semestre}/${c.epoca}`
    : `/ano/${c.ano}/${c.semestre}/${c.epoca}`;
}

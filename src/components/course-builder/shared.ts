// Tipos e estilos compartilhados pelo wizard de Course Kit.
import type { Ano, Semestre, Epoca, Turma } from '@tipos/course';
import type { DificuldadeQuestao, TipoQuestao, QuestaoBase } from '@tipos/course-kit';

export interface WizardMetadata {
  nome: string;
  slug: string;
  slugManual: boolean;
  ano: Ano;
  semestre: Semestre;
  epoca: Epoca;
  turma?: Turma;
  descricao: string;
  estiloCobranca: string;
}

/** Chave de célula da grade de exercícios (dificuldade × tipo). */
export const cellKey = (d: DificuldadeQuestao, t: TipoQuestao) => `${d}:${t}`;

export type QuestoesPorCelula = Record<string, QuestaoBase[]>;

export const inputCls =
  'w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-marfim placeholder:text-nevoa/40 focus:border-dourado/50 focus:outline-none';
export const labelCls = 'mb-1.5 block text-sm font-medium text-marfim';
export const selectCls = inputCls;

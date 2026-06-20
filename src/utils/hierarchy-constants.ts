// Constantes puras da hierarquia (sem import.meta.glob) — seguras para importar
// em ilhas React do cliente (ex.: o wizard de Course Kit) sem arrastar o
// conteúdo dos cursos para o bundle. hierarchy.ts re-exporta tudo daqui.

import type { Ano, Epoca, Semestre, Turma } from '@tipos/course';

export const ANOS: Ano[] = ['1', '2', '3', '4'];
export const SEMESTRES: Semestre[] = ['1', '2'];
export const TURMAS: Turma[] = ['CA-HE', 'CA-HM', 'CA-HS', 'FN-HE', 'FN-HM', 'FN-HS', 'IM'];
// GERAL primeiro; toda turma especializada aparece (mesmo sem matérias).
export const TURMAS_COM_GERAL: Turma[] = ['geral', ...TURMAS];

export const ANO_LABELS: Record<Ano, string> = {
  '1': '1° Ano',
  '2': '2° Ano',
  '3': '3° Ano',
  '4': '4° Ano',
};

export const SEMESTRE_LABELS: Record<Semestre, string> = {
  '1': '1° Semestre',
  '2': '2° Semestre',
};

export const EPOCA_LABELS: Record<Epoca, string> = {
  T1: 'T1',
  P1: 'P1',
  T2: 'T2',
  P2: 'P2',
};

export const TURMA_LABELS: Record<Turma, string> = {
  'CA-HE': 'CA-HE',
  'CA-HM': 'CA-HM',
  'CA-HS': 'CA-HS',
  'FN-HE': 'FN-HE',
  'FN-HM': 'FN-HM',
  'FN-HS': 'FN-HS',
  IM: 'IM',
  geral: 'GERAL',
};

// Épocas (períodos de prova) de cada semestre: 1° sem → T1·P1, 2° sem → T2·P2.
export const EPOCAS_POR_SEMESTRE: Record<Semestre, Epoca[]> = {
  '1': ['T1', 'P1'],
  '2': ['T2', 'P2'],
};

/** Legenda exibida quando um nível ainda não tem matérias. */
export const SEM_CONTEUDO = 'Nada adicionado ainda';

/** 3°/4° ano são divididos em turmas especializadas; 1°/2° não. */
export const anoUsaTurma = (ano: Ano): boolean => ano === '3' || ano === '4';

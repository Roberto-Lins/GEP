// Tipos do Course Kit Generator (FASE 2). O wizard client-side coleta estes
// dados e gera um .zip que o mantenedor entrega ao Claude Code para instalar
// o curso. Reaproveita a hierarquia de course.ts.

import type { Ano, Semestre, Epoca, Turma } from '@tipos/course';

export type DificuldadeQuestao = 'facil' | 'media' | 'dificil';
export type TipoQuestao = 'objetiva' | 'discursiva' | 'vf' | 'correlacione';
export type OrigemMidia = 'local' | 'youtube' | 'r2' | 'bunny' | 'externo';

export const DIFICULDADES: DificuldadeQuestao[] = ['facil', 'media', 'dificil'];
export const TIPOS_QUESTAO: TipoQuestao[] = ['objetiva', 'discursiva', 'vf', 'correlacione'];

export const DIFICULDADE_LABELS: Record<DificuldadeQuestao, string> = {
  facil: 'Fácil',
  media: 'Médio',
  dificil: 'Difícil',
};

export const TIPO_QUESTAO_LABELS: Record<TipoQuestao, string> = {
  objetiva: 'Objetivas',
  discursiva: 'Discursivas',
  vf: 'V/F',
  correlacione: 'Correlacione',
};

export const ORIGEM_LABELS: Record<OrigemMidia, string> = {
  local: 'Arquivo local',
  youtube: 'YouTube',
  r2: 'Cloudflare R2',
  bunny: 'BunnyCDN',
  externo: 'Externo (URL)',
};

export interface QuestaoBase {
  id: string;
  cursoSlug: string;
  materiaSlug?: string;
  dificuldade: DificuldadeQuestao;
  tipo: TipoQuestao;
  enunciado: string;
  /** gabarito/resposta detectada (quando houver) */
  gabarito?: string;
  fonte?: string;
  comentario?: string;
  tags?: string[];
}

export interface MidiaRef {
  titulo: string;
  descricao?: string;
  origem: OrigemMidia;
  src: string;
  /** categoria do material (fontes, resumos, audios, videos, slides, extras) */
  categoria?: string;
}

export interface TopicoTimeline {
  ordem: number;
  titulo: string;
  descricao?: string;
  dicasProfessor?: string[];
}

/** Arquivo leve (< 20 MB) anexado ao kit, em base64 para empacotar no zip. */
export interface ArquivoLeve {
  caminho: string; // ex.: "fontes/aula-01.pdf"
  nome: string;
  tamanho: number;
  base64: string;
}

export interface CourseKitMetadata {
  slug: string;
  nome: string;
  descricao: string;
  estiloCobranca: string;
  ano: Ano;
  semestre: Semestre;
  epoca: Epoca;
  turma?: Turma;
}

export interface CourseKitData extends CourseKitMetadata {
  topicos: TopicoTimeline[];
  questoes: QuestaoBase[];
  midias: MidiaRef[];
  geradoEm: string;
}

export interface CourseKitManifest {
  versao: string;
  slug: string;
  nome: string;
  geradoEm: string;
  totalQuestoes: number;
  totalTopicos: number;
  totalMidias: number;
  arquivos: string[];
}

/** Alerta de validação acumulado pelo wizard. */
export interface ValidacaoItem {
  nivel: 'erro' | 'aviso';
  mensagem: string;
}

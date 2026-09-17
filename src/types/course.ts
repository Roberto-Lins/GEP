// Contrato de um curso da plataforma. Cada curso tem um _config.json validado
// por Zod em src/content/config.ts; este tipo é o espelho em TypeScript.

// ── Hierarquia da Escola Naval ────────────────────────────────────────────────
// Ano → Semestre/Época → Turma → Matéria. A camada de navegação (páginas /ano/...)
// usa estes campos; as rotas dos cursos continuam canônicas em /<slug>.
import type { ModalidadeCursoConfig } from './study-mode';
export type Ano = '1' | '2' | '3' | '4';
export type Semestre = '1' | '2';
export type Epoca = 'T1' | 'P1' | 'T2' | 'P2';
export type Turma =
  | 'CA-HE' | 'CA-HM' | 'CA-HS'
  | 'FN-HE' | 'FN-HM' | 'FN-HS'
  | 'IM' | 'geral';

export interface CourseHierarchyMeta {
  ano: Ano;
  semestre: Semestre;
  epoca: Epoca;
  /**
   * Turma(s) a que a matéria pertence (só relevante p/ 3°/4° ano).
   * 'geral' = comum a todas as turmas. Aceita uma turma única ou uma lista —
   * ex.: matéria comum às turmas CA: ['CA-HE','CA-HM','CA-HS'].
   */
  turma?: Turma | Turma[];
}

export interface CursoFeatures {
  /** trilha sequencial (timeline) */
  timeline: boolean;
  simulados: boolean;
  mapasMentais: boolean;
  podcasts: boolean;
  /** animação na home do curso */
  animacoesHero: boolean;
  /** transições animadas entre mini-matérias */
  animacoesTransicao: boolean;
  modoRevisaoVespera: boolean;
  graficoProgressoAvancado: boolean;
  /** aba "Writing" + ferramenta de auxílio à escrita (ex.: ING-4). Default off. */
  writing?: boolean;
  /** PDF impresso de revisão; só aparece quando ativado explicitamente no curso. */
  cadernoRevisao?: boolean;
  /** permite revelar o gabarito antes de responder, sem registrar tentativa */
  verRespostaAntes?: boolean;
}

export interface CursoDownload {
  tipo: 'caderno_de_revisao';
  rotulo: string;
  arquivo: string;
  materia: string;
  avaliacao: string;
  paginas: number;
  tamanho_kb: number;
  gerado_em: string;
  versao: number;
  hash_sha256: string;
  fonte_usada: string;
  estilo_derivado_de: string[];
  conteudo: Array<'resumo' | 'exercicios' | 'gabarito' | 'formulario'>;
  regenerar_se_mudar: string[];
  origem_sha256: string;
}

export interface CursoConfig extends CourseHierarchyMeta {
  slug: string;
  titulo: string;
  subtitulo?: string;
  descricao?: string;
  categoria?: string;
  /** posição no dashboard (menor = primeiro) */
  ordem: number;
  /** classe de tema visual em styles/themes.css (ex.: 'naval-command') */
  temaVisual: string;
  corTema?: string;
  icone?: string;
  capa?: string;
  features: CursoFeatures;
  /** componentes/animações exclusivos do curso (src/components/cursos/<slug>/) */
  componentesExtras?: string[];
  /** Downloads derivados e versionados disponíveis apenas neste curso. */
  downloads?: CursoDownload[];
  /**
   * Contrato de modalidade para cursos novos. Ausente nos cursos legados, que
   * são interpretados como famílias com apenas a modalidade Completo.
   */
  estudo?: ModalidadeCursoConfig;
}

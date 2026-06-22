// Contrato de um curso da plataforma. Cada curso tem um _config.json validado
// por Zod em src/content/config.ts; este tipo é o espelho em TypeScript.

// ── Hierarquia da Escola Naval ────────────────────────────────────────────────
// Ano → Semestre/Época → Turma → Matéria. A camada de navegação (páginas /ano/...)
// usa estes campos; as rotas dos cursos continuam canônicas em /<slug>.
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
  /** só relevante p/ 3°/4° ano; 'geral' = comum a todas as turmas */
  turma?: Turma;
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
}

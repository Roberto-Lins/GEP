// Contrato de um curso da plataforma. Cada curso tem um _config.json validado
// por Zod em src/content/config.ts; este tipo é o espelho em TypeScript.

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
}

export interface CursoConfig {
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

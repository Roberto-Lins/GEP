// Schemas Zod compartilhados entre o Astro (content/config.ts) e os scripts
// Node (scripts/validate-content.ts). Importa `zod` direto (sem 'astro:content')
// para funcionar fora do runtime do Astro.
import { z } from 'zod';

export const featuresSchema = z.object({
  timeline: z.boolean(),
  simulados: z.boolean(),
  mapasMentais: z.boolean(),
  podcasts: z.boolean(),
  animacoesHero: z.boolean(),
  animacoesTransicao: z.boolean(),
  modoRevisaoVespera: z.boolean(),
  graficoProgressoAvancado: z.boolean(),
  // Aba "Writing" + ferramenta de auxílio à escrita (ex.: ING-4). Aditivo e
  // retrocompatível: cursos sem o campo recebem `false`.
  writing: z.boolean().default(false),
});

// Enum das turmas da Escola Naval (3°/4° ano). Reusado abaixo para aceitar
// tanto uma turma única quanto uma lista (matéria comum a várias turmas).
export const turmaEnum = z.enum(['CA-HE', 'CA-HM', 'CA-HS', 'FN-HE', 'FN-HM', 'FN-HS', 'IM', 'geral']);

export const cursoConfigSchema = z.object({
  slug: z.string(),
  titulo: z.string(),
  subtitulo: z.string().optional(),
  descricao: z.string().optional(),
  categoria: z.string().optional(),
  // Hierarquia Ano → Semestre/Época → Turma (camada de navegação /ano/...).
  ano: z.enum(['1', '2', '3', '4']),
  semestre: z.enum(['1', '2']),
  epoca: z.enum(['T1', 'P1', 'T2', 'P2']),
  // turma só relevante p/ 3°/4° ano; 'geral' = comum a todas as turmas.
  // Aceita uma turma única ou uma lista (matéria comum a várias turmas, ex.: CA).
  turma: z.union([turmaEnum, z.array(turmaEnum)]).optional(),
  ordem: z.number(),
  temaVisual: z.string(),
  corTema: z.string().optional(),
  icone: z.string().optional(),
  capa: z.string().optional(),
  features: featuresSchema,
  componentesExtras: z.array(z.string()).default([]),
});

export const midiaSchema = z.object({
  tipo: z.enum(['video', 'podcast', 'mapa']),
  titulo: z.string(),
  fonte: z.string().optional(),
  src: z.string(),
  origem: z.enum(['local', 'youtube', 'r2', 'bunny', 'externo']).default('local'),
  descricao: z.string().optional(),
  thumb: z.string().optional(),
});

export const dadosMateriaSchema = z.object({
  ordem: z.number(),
  slug: z.string(),
  titulo: z.string(),
  prioridade: z.enum(['alta', 'muito alta', 'máxima']),
  subtitulo: z.string().optional(),
  tempoEstimado: z.string().optional(),
  objetivo: z.string().optional(),
  palavrasChave: z.array(z.string()).optional(),
  midias: z.array(midiaSchema).optional(),
  fontes: z.array(z.string()).optional(),
  exercicios: z.array(z.string()).optional(),
});

export type CursoConfigSchema = z.infer<typeof cursoConfigSchema>;
export type DadosMateriaSchema = z.infer<typeof dadosMateriaSchema>;

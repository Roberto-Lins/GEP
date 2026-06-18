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
});

export const cursoConfigSchema = z.object({
  slug: z.string(),
  titulo: z.string(),
  subtitulo: z.string().optional(),
  descricao: z.string().optional(),
  categoria: z.string().optional(),
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

import { defineCollection, z } from 'astro:content';

// Coleção das mini matérias. Cada arquivo .mdx dentro de
// src/content/materias/XX-slug/ é uma "seção" da matéria.
// A página /materias/[slug] agrupa as seções pela pasta e as renderiza em ordem.
const materias = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    // capa | aula | resumo | comparacoes | pegadinhas | referencias
    // (a revisão final usa nomes próprios: resumo-geral, mapa-da-prova, etc.)
    secao: z.string(),
    secaoOrdem: z.number().default(99),
  }),
});

export const collections = { materias };

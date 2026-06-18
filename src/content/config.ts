import { defineCollection, z } from 'astro:content';

// Coleção de conteúdo multi-curso. Estrutura:
//   src/content/cursos/<curso>/<materia>/<secao>.mdx
// Cada .mdx é uma "seção" de uma mini-matéria. O `id` da entry é
// `<curso>/<materia>/<secao>.mdx` — as páginas filtram por curso e matéria.
// Arquivos `_config.json` (curso) e `_dados.json` (matéria) NÃO entram nesta
// coleção (JSON é ignorado por coleções do tipo 'content'); são validados pelos
// schemas Zod abaixo, via utils/courses.ts e scripts/validate-content.ts.
const cursos = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    // capa | aula | resumo | comparacoes | pegadinhas | referencias
    // (a revisão final usa nomes próprios: resumo-geral, mapa-da-prova, etc.)
    secao: z.string(),
    secaoOrdem: z.number().default(99),
  }),
});

export const collections = { cursos };

// Schemas de validação (Zod puro em ./schemas.ts, reusados por utils e scripts).
export {
  featuresSchema,
  cursoConfigSchema,
  midiaSchema,
  dadosMateriaSchema,
  type CursoConfigSchema,
  type DadosMateriaSchema,
} from './schemas';

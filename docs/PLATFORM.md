# PLATFORM.md — Arquitetura da Bússola dos Aspirantes

Plataforma estática multi-curso (Astro + MDX + Tailwind, sem backend). Este documento detalha
rotas, carregamento de conteúdo, registro de cursos e progresso. Visão executiva: `CLAUDE.md`.

## Hierarquia

```
Plataforma (dashboard /)  →  Curso (/<slug>)  →  Mini-matéria (/<slug>/<materia>)  →  Seções (.mdx)
```

## Registro de cursos

Cada curso é uma pasta `src/content/cursos/<slug>/` com um `_config.json` na raiz. A plataforma
descobre os cursos via `src/utils/courses.ts`, que lê todos os `_config.json` com
`import.meta.glob('/src/content/cursos/*/_config.json')`. Não há lista central de cursos — basta
criar a pasta + config e o curso aparece.

### `_config.json` (schema)

| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| `slug` | string | sim (== nome da pasta) |
| `titulo` | string | sim |
| `subtitulo` | string | não |
| `descricao` | string | não |
| `categoria` | string | não |
| `ordem` | number | sim (ordem no dashboard) |
| `temaVisual` | string | sim (classe de tema em `themes.css`) |
| `corTema` | string | não |
| `icone` / `capa` | string (path) | não |
| `features` | objeto bool | sim |
| `componentesExtras` | string[] | não |

## Carregamento de conteúdo

- **Coleção `cursos`** (Content Collections): glob `src/content/cursos/**/*.{md,mdx}`. Cada `.mdx` é
  uma **seção** com frontmatter `{ titulo, secao, secaoOrdem }`.
- O `id` de cada entry é `<curso>/<materia>/<secao>.mdx`. As páginas filtram por
  `id.split('/')[0] === curso` e `id.split('/')[1] === materia`.
- Dados estruturados (timeline, questões, checklists, mídias, fontes) ficam em
  `src/data/cursos/<slug>/*.ts` — **não** no frontmatter — para manter os `.mdx` enxutos.

## Rotas (todas estáticas via `getStaticPaths`)

| Arquivo | Gera |
|---------|------|
| `pages/index.astro` | `/` (dashboard) |
| `pages/[curso]/index.astro` | `/<curso>` |
| `pages/[curso]/timeline.astro` | `/<curso>/timeline` |
| `pages/[curso]/[materia].astro` | `/<curso>/<materia>` |
| `pages/[curso]/questoes.astro` | `/<curso>/questoes` |
| `pages/[curso]/simulados.astro` | `/<curso>/simulados` |
| `pages/[curso]/fontes.astro` | `/<curso>/fontes` |
| `pages/[curso]/revisao-final.astro` | `/<curso>/revisao-final` |

`getStaticPaths` itera os cursos (`listarCursos()`) × seus tópicos (`timelineDoCurso(slug)`).

### Redirects legados (GEP)

Em `astro.config.mjs`, `redirects: { '/timeline': '/gep/timeline', '/materias/[slug]': '/gep/[slug]', … }`.

## Progresso

Ver `PROGRESS-BACKUP.md`. Resumo: chave única `bussola:v1`, objeto aninhado por curso → matéria.
API em `src/utils/progress.ts` recebe sempre `(curso, materia, …)`. Evento `bussola:progresso`
dispara a cada escrita para reatividade entre ilhas React.

## Convenção para componentes/animações exclusivos de um curso

`src/components/cursos/<slug>/` guarda componentes só daquele curso; liste-os em
`componentesExtras` do `_config.json`. A renderização condicional é guiada por `features`.

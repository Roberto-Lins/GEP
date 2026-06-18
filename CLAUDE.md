# Bússola dos Aspirantes — Plataforma de Estudos

## Visão geral

Plataforma **multi-curso** 100% estática, estilo "campus de estudos". O aluno entra no
**dashboard** (`/`), escolhe um **curso** e, dentro dele, segue uma **trilha sequencial**
(timeline) de mini-matérias que dá sensação de progressão contínua.

Hoje existe **um único curso real: GEP** (Gestão Pública — P1), com o tema visual
*naval-command* (a antiga identidade "GEP Command Deck"). Qualquer outro curso citado nesta
documentação é **exemplo hipotético** — nunca uma pasta real com conteúdo.

## Stack

```
Framework:      Astro (output estático)
Linguagem:      TypeScript
Conteúdo:       MDX + Content Collections
Estilo:         Tailwind CSS + temas por curso
Interatividade: React apenas em ilhas (client:*)
Progresso:      localStorage (sem backend)
Scripts:        tsx (create-course, validate-content, audit-media)
Deploy:         Vercel / Netlify / GitHub Pages
```

**Evitar:** Next.js, backend, banco de dados, login, autenticação, Supabase, Firebase, painel
administrativo.

## Arquitetura: Plataforma → Curso → Mini-matéria → Conteúdo

| Nível | Onde vive | Define |
|-------|-----------|--------|
| **Plataforma** | dashboard `src/pages/index.astro` | lista cursos lendo todos os `_config.json` |
| **Curso** | `src/content/cursos/<slug>/_config.json` | título, tema, rotas, `features` |
| **Mini-matéria** | `src/content/cursos/<slug>/NN-nome/` | `_dados.json` + `.mdx` de seções |
| **Conteúdo/banco** | `src/data/cursos/<slug>/*.ts` | timeline, questões, checklists, mídias, fontes |

## Estrutura de pastas (resumo — completa em `docs/PLATFORM.md`)

```
src/
├── content/
│   ├── config.ts                      # Content Collections + schemas Zod
│   └── cursos/<slug>/
│       ├── _config.json               # contrato do curso
│       └── NN-nome/                    # mini-matéria
│           ├── _dados.json
│           └── {index,aula,resumo,comparacoes,pegadinhas,
│               exercicios,respostas-comentadas,checklist,referencias}.mdx
├── data/cursos/<slug>/{timeline,exercicios,checklists,midias,fontes}.ts
├── components/{ui,layout,estudo,midia,questoes,cursos,progresso}/
├── layouts/{BaseLayout,DashboardLayout,CourseLayout,LessonLayout,ReviewLayout}.astro
├── pages/
│   ├── index.astro                    # DASHBOARD da Bússola
│   └── [curso]/{index,timeline,questoes,simulados,fontes,revisao-final}.astro
│   └── [curso]/[materia].astro
├── utils/{courses,content,progress,backup,migration,media,slug,formatarTempo,filtrarQuestoes}.ts
├── styles/{global,tokens,themes,prose}.css
└── types/{course,lesson,question,media,progress}.ts

public/{imagens,mapas-mentais,arquivos}/cursos/<slug>/...
templates/curso/                       # esqueleto copiado ao criar um curso
scripts/{create-course,validate-content,audit-media,migrate-gep}.ts
docs/{PLATFORM,MEDIA-PROTOCOL,PROGRESS-BACKUP}.md  +  docs/courses/{GEP,TEMPLATE-CURSO}.md
backups/{gep-original,progresso-exportado,fontes-originais,versoes-antigas}/
```

## Rotas

| Rota | Função |
|------|--------|
| `/` | Dashboard (cards de cursos, progresso geral, exportar/importar) |
| `/<curso>` | Home do curso (ex.: `/gep`) |
| `/<curso>/timeline` | Linha do tempo do curso |
| `/<curso>/<materia>` | Mini-matéria (ex.: `/gep/02-weber-e-burocracia`) |
| `/<curso>/questoes` | Banco de questões |
| `/<curso>/simulados` | Simulados |
| `/<curso>/fontes` | Fontes |
| `/<curso>/revisao-final` | Revisão final |

**Aliases legados (GEP)** via `redirects` em `astro.config.mjs`:
`/timeline→/gep/timeline` · `/materias/<s>→/gep/<s>` · `/questoes→/gep/questoes` ·
`/simulados→/gep/simulados` · `/fontes→/gep/fontes` · `/revisao-final→/gep/revisao-final`.

## Sistema de cursos (`_config.json`)

```jsonc
{
  "slug": "gep",
  "titulo": "Gestão Pública — GEP P1",
  "subtitulo": "Trilha de estudo para a prova de Gestão Pública",
  "descricao": "...",
  "categoria": "Carreira Naval",
  "ordem": 1,                  // posição no dashboard
  "temaVisual": "naval-command",
  "corTema": "dourado",
  "icone": "/imagens/cursos/gep/icone.svg",
  "capa": "/imagens/cursos/gep/capa.svg",
  "features": { /* ver abaixo */ },
  "componentesExtras": []
}
```

O dashboard lista os cursos lendo todos os `_config.json` (ordenados por `ordem`). Cada curso
renderiza **condicionalmente** conforme o seu bloco `features`.

### `features` — liga/desliga por curso

```jsonc
"features": {
  "timeline": true,             // trilha sequencial
  "simulados": true,
  "mapasMentais": true,
  "podcasts": true,
  "animacoesHero": true,        // animação na home do curso
  "animacoesTransicao": false,  // transições entre mini-matérias
  "modoRevisaoVespera": true,
  "graficoProgressoAvancado": false
}
```

**Regra:** o curso lê o seu próprio `features` e renderiza só o que está `true`. Assim um curso de
teoria pode ter animações ricas e um curso denso de decoreba ser minimalista — tudo pelo
`_config.json`, **sem tocar em código global**. Componentes/animações exclusivos de um curso ficam
em `src/components/cursos/<slug>/` e são listados em `componentesExtras`.

## Contrato de "curso válido"

- `_config.json` na raiz da pasta do curso (schema Zod em `src/content/config.ts`).
- Cada mini-matéria precisa de `_dados.json` **e** dos `.mdx` de seção.
- `_dados.json` obrigatórios: `ordem`, `slug`, `titulo`, `prioridade`. Opcionais: `subtitulo`,
  `tempoEstimado`, `objetivo`, `palavrasChave`, `midias`, `fontes`, `exercicios`.
- Bancos pesados (questões, checklists) ficam em `src/data/cursos/<slug>/*.ts`, keyed por slug.
- `npm run validate-content` valida `_config.json` e os `_dados.json` de todos os cursos.

## ⭐ Como criar um novo curso (manual)

```bash
npm run create-course <slug>     # 1. copia templates/curso/ → src/content/cursos/<slug>/
```
2. Edite `_config.json` (título, subtítulo, categoria, ordem, temaVisual, corTema, ícone, capa, `features`).
3. Crie as mini-matérias `00-…`, `01-…`, … `99-revisao-final`.
4. Preencha os `.mdx` de seção **e** o `_dados.json` de cada mini-matéria.
5. Adicione imagens leves em `public/imagens/cursos/<slug>/`.
6. Suba mídia pesada para YouTube não-listado / CDN e registre os links no `_dados.json` (`origem` + `src`).
7. Rode `npm run validate-content`.
8. Pronto: o curso aparece sozinho no dashboard (a plataforma lê os `_config.json`).

**Exemplo hipotético (NÃO criar pasta):** um curso `historia-naval` com
`"temaVisual": "sepia"`, `"corTema": "bronze"`, `features.animacoesHero: false` e
`features.simulados: false` — ilustra como um curso novo difere do GEP **só pelo config**, sem
alterar a plataforma. Outro exemplo: `direito-constitucional` com `graficoProgressoAvancado: true`.
Esses cursos vivem **apenas neste texto**.

## Sistema de mídia (protocolo — detalhe em `docs/MEDIA-PROTOCOL.md`)

- **Fica no repo:** MDX, JSON, SVG, imagens leves, thumbnails, ícones, mapas pequenos, PDFs pequenos.
- **Fica fora:** vídeos/áudios grandes e PDFs pesados (`.mkv/.webm/.mp4/.m4a` grandes) →
  YouTube não-listado, Cloudflare R2 ou BunnyCDN. **Evitar Google Drive como player.**
- Em `_dados.json`, cada mídia tem `origem ∈ local | youtube | r2 | bunny | externo` + `src`.
- `npm run audit-media` lista a mídia pesada ainda versionada.

## Sistema de progresso (localStorage, por curso)

- Chave única versionada: **`bussola:v1`** →
  `{ cursos: { <slug>: { materias: { <slug-materia>: {checklist, questoes, concluida, ultimoAcesso} } } }, ultimoCurso }`.
- Migração automática (`src/utils/migration.ts`): detecta a chave antiga `gep:progresso:v1`,
  converte para `bussola:v1.cursos.gep`, roda **uma única vez** e grava a flag
  `bussola:v1:migration:gep:done`.
- Backup (`docs/PROGRESS-BACKUP.md`): botões Exportar / Importar / Reset →
  arquivo `bussola-dos-aspirantes-backup-AAAA-MM-DD.json`.

## Tema visual por curso

A paleta do GEP vira o tema **`naval-command`** em `src/styles/themes.css`:

```css
--azul-naval: #0B1220;  --azul-aco: #1E3A5F;  --azul-acinz: #334155;
--dourado: #D6A84F;     --marfim: #F7F3EA;    --cinza-texto: #CBD5E1;
--verde: #22C55E;       --vermelho: #EF4444;
```

Tipografia: **Newsreader** (títulos, serifada), **Inter** (corpo), **JetBrains Mono** (tabelas).
Cada curso aponta o seu `temaVisual`/`corTema` no `_config.json`; cursos futuros podem ter paletas
próprias sem alterar o GEP.

## Curso GEP (config específica)

- 11 tópicos (`00`–`10`) + `99-revisao-final`. Timeline/prioridades/tempos:
  `src/data/cursos/gep/timeline.ts`.
- Banco: **60 múltipla + 40 V/F + 5 grupos correlação** (`src/data/cursos/gep/exercicios.ts`).
- Prioridade **máxima**: `07-pdrae-e-reforma-de-1995` e `99-revisao-final`.
- Mídia atual em `public/.../cursos/gep/` (a externalizar no futuro).
- Detalhes: `docs/courses/GEP.md`.

## Lacunas / pendências conhecidas

- **Mídia pesada** ainda versionada (~300 MB em podcasts/vídeos) — externalizar p/ CDN/YouTube
  quando houver links; `npm run audit-media` aponta os arquivos.
- **Revisão final** do GEP montada a partir do banco — revisar se reflete a prova real.
- `_dados.json` por matéria começam mínimos (metadados) — enriquecer conforme necessário.
```

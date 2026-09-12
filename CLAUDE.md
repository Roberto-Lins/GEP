# Bússola dos Aspirantes — Plataforma de Estudos

## Visão geral

Plataforma **multi-curso** 100% estática, estilo "campus de estudos". O aluno entra no
**dashboard** (`/`), navega pela hierarquia da Escola Naval
(**Ano → [Turma, no 3°/4°] → Semestre → Época → Matéria**), escolhe uma **matéria/curso** e,
dentro dele, segue uma **trilha sequencial** (timeline) de mini-matérias que dá sensação de
progressão contínua.

Hoje existem **9 cursos reais**, todos com o tema visual *naval-command*:
- **GEP** (Gestão Pública — P1): `ano 4 · semestre 1 · época P1 · turma geral`.
- **HNV** (História Naval): `ano 4 · semestre 1 · época P1 · turma geral`.
- **DET** (Detecção — PP1): `ano 4 · semestre 1 · época P1 · turma CA-HE`.
- **DET-T2** (Detecção — T2): `ano 4 · semestre 2 · época T2 · turma CA-HE`.
- **ING-4** (Inglês — PP1): `ano 4 · semestre 1 · época P1 · turma geral`.
- **DIR** (Direito — P1): `ano 4 · semestre 1 · época P1 · turma geral`.
- **FAS** (Fundamentos de Automação de Sistemas — P1): `ano 4 · semestre 1 · época P1 · seis turmas CA/FN`.
- **OPN** (Operações Navais 1 — PP1): `ano 4 · semestre 1 · época P1 · turmas CA-HE/CA-HM/CA-HS`.
- **REL** (Relações Internacionais — P1): `ano 4 · semestre 1 · época P1 · turma geral`.

`turma: "geral"` = matéria comum a todas as turmas do ano (mas, na navegação, aparece **só** em
GERAL, não dentro das turmas especializadas). Outros cursos citados nesta documentação (ex.:
`historia-naval`, `direito-constitucional`) são **exemplos hipotéticos** — nunca pastas reais.

## Stack

```
Framework:      Astro (output estático)
Linguagem:      TypeScript
Conteúdo:       MDX + Content Collections
Fórmulas:       remark-math + KaTeX
Estilo:         Tailwind CSS + temas por curso
Interatividade: React apenas em ilhas (client:*)
Progresso:      localStorage (sem backend)
Scripts:        tsx (create-course, validate-content, audit-media, migrate-gep)
Course Kit:     wizard client-side + JSZip (rota /adicionar-curso) → gera .zip
Deploy:         Vercel / Netlify / GitHub Pages
```

**Evitar:** Next.js, backend, banco de dados, login, autenticação, Supabase, Firebase, painel
administrativo.

## Arquitetura: Plataforma → Curso → Mini-matéria → Conteúdo

| Nível | Onde vive | Define |
|-------|-----------|--------|
| **Plataforma** | dashboard `src/pages/index.astro` | lista anos; navegação em `src/pages/ano/[...segmentos].astro` |
| **Hierarquia** | campos do `_config.json` + `src/utils/hierarchy.ts` | ano/semestre/época/turma e os filtros de navegação |
| **Curso** | `src/content/cursos/<slug>/_config.json` | título, tema, posição na hierarquia, `features` |
| **Mini-matéria** | `src/content/cursos/<slug>/NN-nome/` | `_dados.json` + `.mdx` de seções |
| **Conteúdo/banco** | `src/data/cursos/<slug>/*.ts` | timeline, questões, checklists, mídias, fontes |

> **Camada de navegação:** os cursos continuam **canônicos** em `/<slug>` (rotas e redirects
> intactos). A hierarquia Ano→Turma→Semestre→Época é só uma camada de **descoberta** sob `/ano/...`
> que lista as matérias e linka para `/<slug>`. As seções padrão (anos, turmas, semestres, épocas)
> existem **sempre**, mesmo vazias (mostram "Nada adicionado ainda").

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
├── data/cursos/<slug>/{timeline,exercicios,checklists,midias,fontes,index}.ts
├── components/
│   ├── {layout,estudo,midia,questoes,progresso}/
│   ├── cursos/{CourseDashboard.tsx,NavCard.astro,Breadcrumb.astro}
│   └── course-builder/                # wizard do Course Kit (ilha React)
├── layouts/{BaseLayout,LessonLayout,ReviewLayout}.astro
├── pages/
│   ├── index.astro                    # DASHBOARD (cards de ano + "Adicionar matéria")
│   ├── adicionar-curso.astro          # Course Kit Generator
│   ├── ano/[...segmentos].astro       # navegação Ano→[Turma]→Semestre→Época→matérias
│   ├── [curso]/{index,timeline,questoes,simulados,fontes,revisao-final}.astro
│   └── [curso]/[materia].astro
├── utils/
│   ├── {courses,content,progress,backup,migration,media,slug,formatarTempo,filtrarQuestoes}.ts
│   ├── hierarchy.ts + hierarchy-constants.ts   # navegação por ano/turma/sem/época
│   └── course-kit/                    # parse, gerar prompt/manifest, JSZip
├── styles/{global,tokens,themes,prose}.css
└── types/{course,lesson,question,media,progress,course-kit}.ts

public/imagens/cursos/<slug>/...             # capa.webp (hero) + ícone + imagens do conteúdo
public/imagens/plataforma/cursos/<slug>.webp # thumbnail QUADRADA do card na listagem de matérias
public/imagens/plataforma/anos/<ano>.webp    # mascote do card de ano no dashboard
public/{mapas-mentais,arquivos}/cursos/<slug>/...
templates/curso/                       # esqueleto copiado ao criar um curso
scripts/{create-course,validate-content,audit-media,migrate-gep}.ts
docs/{PLATFORM,MEDIA-PROTOCOL,PROGRESS-BACKUP}.md  +  docs/courses/{GEP,TEMPLATE-CURSO}.md
backups/{gep-original,progresso-exportado,fontes-originais,versoes-antigas}/
```

## Rotas

| Rota | Função |
|------|--------|
| `/` | Dashboard (4 cards de ano + card "Adicionar matéria" + backup) |
| `/adicionar-curso` | Course Kit Generator (wizard → baixa `.zip`) |
| `/ano/<ano>` | 1°/2°: semestres · 3°/4°: turmas |
| `/ano/<ano>/<turma>` | (3°/4°) semestres da turma |
| `/ano/<ano>/[<turma>/]<semestre>` | épocas (T1·P1 ou T2·P2) |
| `/ano/<ano>/[<turma>/]<semestre>/<epoca>` | matérias daquele período → cards p/ `/<curso>` |
| `/<curso>` | Home do curso (ex.: `/gep`) |
| `/<curso>/timeline` | Linha do tempo do curso |
| `/<curso>/<materia>` | Mini-matéria (ex.: `/gep/02-weber-e-burocracia`) |
| `/<curso>/questoes` | Banco de questões |
| `/<curso>/simulados` | Simulados |
| `/<curso>/fontes` | Fontes |
| `/<curso>/revisao-final` | Revisão final |

As rotas `/ano/...` são geradas por um único arquivo catch-all `pages/ano/[...segmentos].astro`
(profundidade variável). O cabeçalho dentro de um curso tem **Voltar** (volta à listagem da matéria,
via `listingPathDoCurso`) e **Bússola** (volta ao `/`); há também botão flutuante de voltar ao topo.

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
  "ano": "4",                  // "1"|"2"|"3"|"4"
  "semestre": "1",             // "1"|"2"
  "epoca": "P1",               // "T1"|"P1"|"T2"|"P2"
  "turma": "geral",            // só 3°/4° ano; CA-HE…IM ou "geral" (comum a todas)
  "ordem": 1,                  // posição dentro do período (época)
  "temaVisual": "naval-command",
  "corTema": "dourado",
  "icone": "/imagens/cursos/gep/icone.svg",
  "capa": "/imagens/cursos/gep/capa.webp",   // raster SEM texto — vira o fundo do hero (ver passo 5)
  "features": { /* ver abaixo */ },
  "componentesExtras": []
}
```

A plataforma descobre os cursos lendo todos os `_config.json` (via `listarCursos`); o dashboard os
**agrupa pela hierarquia** (ano → [turma] → semestre → época), e dentro de um período ordena por
`ordem`. Cada curso renderiza **condicionalmente** conforme o seu bloco `features`.

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
  "graficoProgressoAvancado": false,
  "writing": false              // aba Writing + ferramenta de escrita (ING-4). Default false.
}
```

**Regra:** o curso lê o seu próprio `features` e renderiza só o que está `true`. Assim um curso de
teoria pode ter animações ricas e um curso denso de decoreba ser minimalista — tudo pelo
`_config.json`, **sem tocar em código global**. Componentes/animações exclusivos de um curso ficam
em `src/components/cursos/<slug>/` e são listados em `componentesExtras`.

## Contrato de "curso válido"

- `_config.json` na raiz da pasta do curso (schemas Zod em `src/content/schemas.ts`,
  reexportados por `src/content/config.ts`).
- Campos de hierarquia **obrigatórios** no `_config.json`: `ano`, `semestre`, `epoca`
  (e `turma` para 3°/4° ano). Sem eles `validate-content`/`build` falham.
- Cada mini-matéria precisa de `_dados.json` **e** dos `.mdx` de seção.
- `_dados.json` obrigatórios: `ordem`, `slug`, `titulo`, `prioridade`. Opcionais: `subtitulo`,
  `tempoEstimado`, `objetivo`, `palavrasChave`, `midias`, `fontes`, `exercicios`.
- Bancos pesados (questões, checklists) ficam em `src/data/cursos/<slug>/*.ts`, keyed por slug.
- `npm run validate-content` valida `_config.json` e os `_dados.json` de todos os cursos.

## ⭐ Como criar um novo curso

Dois caminhos:

- **Course Kit Generator (`/adicionar-curso`):** colaborador preenche o wizard (metadados +
  hierarquia + linha do tempo + exercícios + mídias) e baixa um `.zip` com `course-kit.json`,
  `manifest.json` e um **`PROMPT_CLAUDE.md`** dinâmico. O mantenedor cola o `PROMPT_CLAUDE.md` no
  Claude Code, que instala o curso. (Ver "Course Kit Generator" abaixo.)
- **Manual:**

```bash
npm run create-course <slug>     # 1. copia templates/curso/ → src/content/cursos/<slug>/
```
2. Edite `_config.json` (título, subtítulo, categoria, **ano/semestre/epoca/turma**, ordem, temaVisual, corTema, ícone, capa, `features`).
3. Crie as mini-matérias `00-…`, `01-…`, … `99-revisao-final`.
4. Preencha os `.mdx` de seção **e** o `_dados.json` de cada mini-matéria.
5. **Imagens do curso — são DOIS caminhos distintos e ambos obrigatórios** (esquecer o 2º já deixou
   card sem imagem mais de uma vez):
   - **Capa / hero:** `public/imagens/cursos/<slug>/capa.webp` (apontada por `capa` no `_config.json`).
     É **raster, SEM texto**, porque vira o **fundo do hero** da home `/<curso>` (`src/pages/[curso]/index.astro`).
   - **Thumbnail do card:** `public/imagens/plataforma/cursos/<slug>.webp` — **quadrada (1024²)**, é a
     imagem do card na **listagem de matérias** `/ano/.../<epoca>` (`CourseDashboard.tsx`, path montado
     em `src/pages/ano/[...segmentos].astro`). Pode ser derivada da capa:
     `sharp(capa).resize(1024,1024,{fit:"cover",position:"centre"})` (se o símbolo for centralizado).
   - Demais imagens leves de conteúdo: `public/imagens/cursos/<slug>/`. Capa e thumbnail raster são
     **geradas pelo Codex**; conversão PNG→webp com `sharp` (não há cwebp/convert/magick no PATH).
6. Suba mídia pesada para YouTube não-listado / CDN e registre os links no `_dados.json` (`origem` + `src`).
7. Rode `npm run validate-content`.
8. Pronto: o curso aparece sozinho no dashboard (a plataforma lê os `_config.json`).

**Exemplo hipotético (NÃO criar pasta):** um curso `historia-naval` com
`"temaVisual": "sepia"`, `"corTema": "bronze"`, `features.animacoesHero: false` e
`features.simulados: false` — ilustra como um curso novo difere do GEP **só pelo config**, sem
alterar a plataforma. Outro exemplo: `direito-constitucional` com `graficoProgressoAvancado: true`.
Esses cursos vivem **apenas neste texto**.

## Course Kit Generator (`/adicionar-curso`)

Wizard React (ilha `client:load`) que **não usa backend**: roda no navegador e gera um `.zip` para
download. Etapas: intro → metadados (com a hierarquia ano/semestre/época/turma) → linha do tempo
(parse de `.md/.txt/.json`) → exercícios (grade dificuldade × tipo) → materiais (URLs + arquivos
**< 20 MB**; acima disso só URL) → revisão/geração.

- **Componentes:** `src/components/course-builder/` (orquestrador `AddCourseWizard.tsx`).
- **Lógica:** `src/utils/course-kit/` — `parseTimeline`, `parseQuestions`, `normalizeSlug`,
  `classifyFile` (regra 20 MB), `generateCourseKit`/`generateManifest`/`generatePrompt`, `buildZip` (JSZip).
- **Saída (`.zip`):** `course-kit.json` (fonte da verdade), `manifest.json`, `PROMPT_CLAUDE.md`
  (instruções dinâmicas de instalação), `INSTRUCOES.md` e pastas `linha-do-tempo/`, `exercicios/`,
  `audios|videos|slides/referencias.json`, `fontes/`, `resumos/`.
- **Tipos:** `src/types/course-kit.ts`. Constantes de hierarquia puras (sem glob) em
  `src/utils/hierarchy-constants.ts`, para o bundle do cliente não arrastar o conteúdo dos cursos.

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

## Cursos reais (config específica)

**GEP** (`ano 4 · sem 1 · P1 · turma geral`):
- 11 tópicos (`00`–`10`) + `99-revisao-final`. Timeline/prioridades/tempos:
  `src/data/cursos/gep/timeline.ts`.
- Banco: **60 múltipla + 40 V/F + 5 grupos correlação** (`src/data/cursos/gep/exercicios.ts`).
- Prioridade **máxima**: `07-pdrae-e-reforma-de-1995` e `99-revisao-final`.
- Detalhes: `docs/courses/GEP.md`.

**HNV — História Naval** (`ano 4 · sem 1 · P1 · turma geral`):
- 7 tópicos (`00`–`06`) + `99-revisao-final`. Dados em `src/data/cursos/hnv/`.
- Usa **questões discursivas** (campo opcional `discursivas` em `src/utils/content.ts`).

**DET — Detecção** (`ano 4 · sem 1 · P1 · turma CA-HE`):
- 14 tópicos (`00`–`13`) + `99-revisao-final`. Calculadoras próprias em
  `src/components/cursos/det/` (listadas em `componentesExtras`).

**DET-T2 — Detecção / Radar de Pulso** (`ano 4 · sem 2 · T2 · turma CA-HE`):
- 8 tópicos (`00`–`07`) + `99-revisao-final`; M01–M04 estão publicados e M05–M07 aparecem como
  lacunas explícitas até a chegada das próximas execuções acadêmicas.
- Banco inicial com 42 grupos identificados por `DET-T2-*`; fórmulas em LaTeX renderizadas por KaTeX.
- Detalhes: `docs/courses/DET-T2.md`.

**ING-4 — Inglês** (`ano 4 · sem 1 · P1 · turma geral`):
- 8 tópicos (`00`–`07`) + `99-revisao-final`. Dados em `src/data/cursos/ing4/`.
- Banco **geral** (Fácil/Médio/Difícil) em `/ing4/questoes` **separado** dos exercícios **por tópico**
  (`questoesPorTopico` filtra um array `perTopico`; `todasQuestoes` = só o geral).
- Liga a flag `features.writing` → aba **Writing** (`/ing4/writing`) com a teoria de redação de opinião
  e a **ferramenta de auxílio à escrita** (`src/components/cursos/ing4/WritingAnalyzer.tsx`,
  heurística local; ver `docs/WRITING-TOOL.md`). Detalhes: `docs/courses/ING-4.md`.

**FAS — Fundamentos de Automação de Sistemas** (`ano 4 · sem 1 · P1 · turmas CA-HM/HE/HS + FN-HM/HE/HS`):
- Base **única** compartilhada pelos 6 públicos via `turma` como **lista** (sem cópias). 10 tópicos
  (`00`–`09`) + `99-revisao-final`. Dados em `src/data/cursos/fas/`.
- Banco de questões com **dois bancos** (`src/data/cursos/fas/questoes.ts`): a **SOPA** (prova antiga)
  em `todasQuestoes` → Central `/fas/questoes` catalogada por assunto (com avisos de *conteúdo
  retirado* e *figura ausente*); e **100 variações** por tópico/dificuldade (não entram em
  `todasQuestoes`) → `questoesPorTopico` + `simuladoFinal`.
- Campos opcionais aditivos em `CursoData` (usados só pelo FAS): `simuladoFinal` (revisão final usa as
  variações em vez do simulado-relâmpago) e `midiasGerais` (áudio + vídeo reaproveitados na revisão
  final). Vídeo geral no YouTube (`EAZy7ZrJuDU`), URL centralizada em `midias.ts`; `PlayerVideo` ganhou
  link "Abrir no YouTube". Figuras técnicas **extraídas dos slides** (sem SVG), em `public/imagens/cursos/fas/`.

Mídia atual ainda em `public/.../cursos/<slug>/` (a externalizar no futuro).

## Lacunas / pendências conhecidas

- **Mídia pesada** ainda versionada (~648 MB de GEP+HNV + ~90 MB de ING-4 — 8 áudios) em `public/` —
  externalizar p/ CDN/YouTube quando houver links; `npm run audit-media` aponta os arquivos.
  (O vídeo geral do ING-4 já está no YouTube não-listado; `PlayerVideo.astro` suporta `origem: youtube`.)
- **Revisão final** do GEP montada a partir do banco — revisar se reflete a prova real.
- `_dados.json` por matéria começam mínimos (metadados) — enriquecer conforme necessário.
- Hierarquia: só há cursos de **4° ano**; 1°/2°/3° aparecem vazios ("Nada adicionado ainda") até
  surgirem matérias.
```

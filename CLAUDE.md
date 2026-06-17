# GEP P1 — Site de Estudos

## Stack

```
Framework:    Astro
Linguagem:    TypeScript
Conteúdo:     MDX
Estilo:       Tailwind CSS
Interatividade: React apenas quando necessário
Banco de dados: nenhum
Progresso:    localStorage
Deploy:       Vercel, Netlify ou GitHub Pages
```

**Evitar:** Next.js, backend, banco de dados, login, Supabase, Firebase, autenticação, painel administrativo.

---

## Conceito central

Site de **trilha de estudo sequencial**. Cada tópico da linha do tempo é uma mini matéria. O fluxo do aluno:

```
Entrar no site → Ver a linha do tempo → Abrir a mini matéria
→ Ler resumo → Assistir vídeos → Ouvir podcast → Ver mapa mental
→ Resolver exercícios → Conferir respostas comentadas
→ Marcar checklist → Avançar para o próximo tópico
```

---

## Estrutura de pastas

```
gep-p1-study-site/
├── public/
│   ├── imagens/{banners,capas-materias,icones}/
│   ├── thumbnails/{videos,podcasts,mapas-mentais}/
│   ├── videos/{youtube,notebooklm}/
│   ├── podcasts/notebooklm/
│   ├── mapas-mentais/notebooklm/
│   └── arquivos/{livros,slides,resumos,provas}/
│
├── src/
│   ├── components/
│   │   ├── layout/          # Header, SidebarTimeline, Footer, PageContainer
│   │   ├── estudo/          # CardMateria, TimelineEstudo, BlocoObjetivo,
│   │   │                    # BlocoConceito, BlocoPegadinha, BlocoComparacao,
│   │   │                    # ChecklistMateria.tsx, ProgressoMateria.tsx,
│   │   │                    # NavegacaoMateria
│   │   ├── midia/           # PlayerVideo, PlayerPodcast, MapaMentalPreview, FonteCard
│   │   └── questoes/        # QuestaoMultiplaEscolha.tsx, QuestaoVF.tsx,
│   │                        # QuestaoCorrelacione.tsx, GabaritoCard, ComentarioResposta
│   │
│   ├── layouts/             # BaseLayout, MateriaLayout, RevisaoLayout
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── timeline.astro
│   │   ├── materias/[slug].astro
│   │   ├── questoes.astro
│   │   ├── simulados.astro
│   │   ├── revisao-final.astro
│   │   └── fontes.astro
│   │
│   ├── content/materias/
│   │   ├── 00-ideia-central-da-prova/
│   │   ├── 01-estado-governo-administracao-governanca/
│   │   ├── 02-weber-e-burocracia/
│   │   ├── 03-patrimonialismo-e-disfuncoes-burocraticas/
│   │   ├── 04-organizacoes-mecanicistas-e-organicas/
│   │   ├── 05-modelos-de-administracao-publica/
│   │   ├── 06-reformas-administrativas-no-brasil/
│   │   ├── 07-pdrae-e-reforma-de-1995/
│   │   ├── 08-ppa-ldo-loa-e-despesa-publica/
│   │   ├── 09-orcamento-de-defesa/
│   │   ├── 10-sistema-de-governanca-da-mb/
│   │   └── 99-revisao-final/
│   │
│   ├── data/                # timeline.ts, materias.ts, fontes.ts, midias.ts, simulados.ts
│   ├── styles/              # global.css, tokens.css
│   └── utils/               # progresso.ts, slug.ts, formatarTempo.ts, filtrarQuestoes.ts
│
├── prompts/                 # gerar-resumo-mini-materia.md, gerar-questoes-vf.md, etc.
└── backups/                 # fontes-originais/, exportacoes-notebooklm/, versoes-antigas/
```

---

## Estrutura padrão de cada mini matéria

Toda pasta em `src/content/materias/XX-nome/` deve conter:

```
index.mdx               # Título, objetivo, prioridade, tempo, links
aula.mdx                # Conteúdo explicado do zero (para estudar)
resumo.mdx              # Revisão rápida antes da prova
comparacoes.mdx         # Quadros comparativos lado a lado
pegadinhas.mdx          # Erros comuns e frases perigosas de prova
exercicios.mdx          # Múltipla escolha, V/F, correlacione, revisão rápida
respostas-comentadas.mdx # Gabarito com explicação de cada alternativa
checklist.mdx           # Lista de domínio com checkboxes
referencias.mdx         # Fontes: livros, slides, vídeos, podcasts, mapas
```

### Exceção — 99-revisao-final

```
resumo-geral.mdx, mapa-da-prova.mdx,
simulado-multipla-escolha.mdx, simulado-vf.mdx, simulado-correlacione.mdx,
gabarito-geral.mdx, erros-frequentes.mdx, revisao-de-vespera.mdx
```

---

## Linha do tempo (`src/data/timeline.ts`)

| ordem | slug | prioridade | tempo |
|-------|------|-----------|-------|
| 0 | 00-ideia-central-da-prova | alta | 15 min |
| 1 | 01-estado-governo-administracao-governanca | alta | 45 min |
| 2 | 02-weber-e-burocracia | muito alta | 60 min |
| 3 | 03-patrimonialismo-e-disfuncoes-burocraticas | muito alta | 50 min |
| 4 | 04-organizacoes-mecanicistas-e-organicas | alta | 40 min |
| 5 | 05-modelos-de-administracao-publica | muito alta | 60 min |
| 6 | 06-reformas-administrativas-no-brasil | alta | 55 min |
| 7 | 07-pdrae-e-reforma-de-1995 | **máxima** | 75 min |
| 8 | 08-ppa-ldo-loa-e-despesa-publica | muito alta | 60 min |
| 9 | 09-orcamento-de-defesa | alta | 45 min |
| 10 | 10-sistema-de-governanca-da-mb | alta | 50 min |
| 99 | 99-revisao-final | **máxima** | 90 min |

O arquivo `src/data/timeline.ts` exporta um array `timeline` com os campos: `ordem`, `slug`, `titulo`, `subtitulo`, `prioridade`, `tempoEstimado`, `statusInicial`, `objetivo`, `palavrasChave`.

---

## Design visual

**Nome do projeto:** GEP Command Deck

Estética: site de estudos + naval + painel de comando + linha do tempo.

### Paleta de cores

```css
--azul-naval:    #0B1220;  /* fundo principal */
--azul-aco:      #1E3A5F;  /* cards */
--azul-acinz:    #334155;  /* fundos secundários */
--dourado:       #D6A84F;  /* destaques e prioridade */
--marfim:        #F7F3EA;  /* títulos importantes */
--cinza-texto:   #CBD5E1;  /* texto comum */
--verde:         #22C55E;  /* concluído / progresso */
--vermelho:      #EF4444;  /* pegadinha / alerta */
```

### Tipografia

```
Títulos:   Merriweather, Newsreader ou Libre Baskerville  (serifada)
Corpo:     Inter, Atkinson Hyperlegible ou Source Sans 3  (sem serifa)
Tabelas:   JetBrains Mono                                 (monoespaçada)
```

---

## Layout das páginas

### index.astro
- Hero: "GEP P1 — Trilha de Estudo"
- Barra de progresso geral
- Botão: "Começar pela próxima matéria"
- Cards das mini matérias
- Seção "Prioridade máxima"
- Seção "Revisão final"

### timeline.astro
- Linha vertical/horizontal com os 10 tópicos
- Status, tempo estimado, prioridade, botão para abrir a mini matéria

### materias/[slug].astro
```
Topo:    título, número na timeline, prioridade, tempo, progresso
Corpo:   objetivo → aula → resumo → comparações → pegadinhas
         → vídeos → podcasts → mapas mentais
         → exercícios → respostas comentadas → checklist
Rodapé: matéria anterior | próxima matéria
```

---

## Componentes principais

| Componente | Tipo | Visual |
|---|---|---|
| `BlocoObjetivo` | `.astro` | Borda dourada, fundo azul escuro, ícone de alvo |
| `BlocoConceito` | `.astro` | Destaque para conceitos essenciais |
| `BlocoPegadinha` | `.astro` | Borda vermelha, alerta de erro comum |
| `BlocoComparacao` | `.astro` | Tabela lado a lado |
| `ChecklistMateria` | `.tsx` | Checkboxes com persistência em localStorage |
| `ProgressoMateria` | `.tsx` | Barra de progresso por mini matéria |
| `QuestaoVF` | `.tsx` | Feedback imediato após resposta |
| `QuestaoMultiplaEscolha` | `.tsx` | Gabarito + comentário por alternativa |
| `QuestaoCorrelacione` | `.tsx` | Arrastar/selecionar para correlacionar |

---

## Frontmatter padrão do `index.mdx`

```mdx
---
titulo: "Título da mini matéria"
ordem: 7
prioridade: "máxima"
tempoEstimado: "75 min"
slug: "07-pdrae-e-reforma-de-1995"
---
```

---

## Conteúdo de cada mini matéria (referência rápida)

### 00 — Ideia central da prova
Lógica geral da prova: comparar modelos e aplicar conceitos de gestão pública.

### 01 — Estado, Governo, Administração Pública e Governança
Estado · Governo · Administração Pública · Governança · Adm. Direta/Indireta · desconcentração · descentralização · autarquias · fundações · empresas públicas · sociedades de economia mista · consórcios.

### 02 — Weber e burocracia
Dominação tradicional/carismática/racional-legal · burocracia ideal · formalidade · impessoalidade · profissionalismo.
> Frase-chave: burocracia em Weber não é papelada inútil; é organização racional, formal e legal.

### 03 — Patrimonialismo e disfunções burocráticas
Patrimonialismo · clientelismo · nepotismo · corrupção · burocracia ideal · burocratismo · disfunções (Merton, Perrow, Roth).
> Comparação: Patrimonialismo ≠ Burocracia ideal ≠ Burocratismo.

### 04 — Organizações mecanicistas e orgânicas
Hierarquia · comunicação vertical/horizontal · especialização · flexibilidade · ambiente estável/dinâmico.
> Frase-chave: nenhuma organização é 100% mecanicista ou 100% orgânica.

### 05 — Modelos de Administração Pública
Patrimonialista (confusão público/privado) → Burocrática (legalidade, mérito) → Gerencial (resultado, cidadão-usuário).

### 06 — Reformas administrativas no Brasil
Antes de 1930 (patrimonialismo) → DASP/Vargas → DL 200/1967 → CF/1988 → Reforma 1995.

### 07 — PDRAE e Reforma de 1995 ⭐ prioridade máxima
Diagnóstico do aparelho do Estado · cidadão-cliente · núcleo estratégico · atividades exclusivas · serviços não exclusivos · produção para o mercado · controle por resultados.

### 08 — PPA, LDO, LOA e despesa pública
Políticas → Diretrizes → Objetivos → Metas → Programas → PPA → LDO → LOA → Execução → Avaliação.
Execução da despesa: Empenho → Liquidação → Pagamento.

### 09 — Orçamento de Defesa
Orçamento de defesa · Base Industrial de Defesa · modernização · pessoal · investimentos · PBC · interoperabilidade.

### 10 — Sistema de Governança da MB
Alta Administração Naval · CEMA · ODS · Programa Netuno · Defesa Naval · Segurança Marítima · Diplomacia Naval.

### 99 — Revisão final ⭐ prioridade máxima
Simulados (múltipla escolha, V/F, correlacione) · erros frequentes · revisão de véspera.

---

## Regras de conteúdo

- `comparacoes.mdx` sempre usa tabelas Markdown.
- `pegadinhas.mdx` usa seções `## Pegadinha N` com a armadilha e a correção.
- `checklist.mdx` usa `- [ ]` para cada item a dominar.
- `respostas-comentadas.mdx` explica por que cada alternativa está certa ou errada.
- Checklist e progresso persistem em `localStorage` — sem backend.

---

## Organização de mídias em `public/`

```
videos/youtube/         *.mp4  (aulas baixadas do YouTube)
videos/notebooklm/      *.mp4  (vídeos gerados pelo NotebookLM)
podcasts/notebooklm/    *.mp3  (podcasts gerados pelo NotebookLM)
mapas-mentais/notebooklm/ *.pdf (mapas exportados do NotebookLM)
arquivos/livros/        PDFs dos livros
arquivos/slides/        Slides do professor
arquivos/resumos/       Resumos complementares
arquivos/provas/        Provas anteriores
```

Nomenclatura: `XX-nome-do-topico-tipo.ext` (ex.: `07-pdrae-podcast.mp3`).

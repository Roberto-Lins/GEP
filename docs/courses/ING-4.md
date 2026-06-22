# Curso ING-4 — Inglês (PP1)

Curso de Inglês para a **PP1**, baseado no *American English File 4 (3rd edition)*.

## Posição na hierarquia

`ano 4 · semestre 1 · época P1 · turma geral` — mesmo período de GEP e HNV (`ordem: 3`).
Observação: a professora chama o período de **“PP1”**; na plataforma isso corresponde à época `P1`
(o schema só admite `T1|P1|T2|P2`). Rota canônica: `/ing4`.

## Tema visual e features

- `temaVisual: naval-command`, `corTema: dourado`.
- `features`: `timeline`, `podcasts`, `animacoesHero`, `modoRevisaoVespera`, **`writing`** ligados;
  `simulados`, `mapasMentais`, `graficoProgressoAvancado` desligados.
- `writing: true` é uma flag **nova** (aditiva) que liga a aba **Writing** (`/ing4/writing`). Cursos
  sem o campo recebem `false`.

## Mini-matérias (9)

| # | Slug | Categoria | Prioridade |
|---|------|-----------|------------|
| 00 | `00-introducao-e-revisao-geral` | Visão geral (recebe o **vídeo** geral) | alta |
| 01 | `01-whatever-whenever-etc` | Grammar | alta |
| 02 | `02-crime-and-punishment` | Vocabulary | alta |
| 03 | `03-have-something-done` | Grammar | muito alta |
| 04 | `04-reporting-verbs` | Grammar | **máxima** |
| 05 | `05-clauses-of-contrast` | Grammar | **máxima** |
| 06 | `06-clauses-of-purpose` | Grammar | muito alta |
| 07 | `07-expressing-your-opinion` | Writing | muito alta |
| 99 | `99-revisao-final` | Revisão integrada (página própria) | **máxima** |

Cada tópico tem seções MDX `index/aula/comparacoes/pegadinhas/resumo` (+ `referencias` no 00).
A revisão final usa `mapa-da-prova/resumo-geral/erros-frequentes/revisao-de-vespera`.

## Exercícios

- **Por tópico:** embutidos no `.docx` de cada tópico → vivem em `perTopico` (em
  `src/data/cursos/ing4/exercicios.ts`) e aparecem **no fim de cada mini-matéria** via
  `questoesPorTopico`.
- **Gerais (banco `/ing4/questoes`):** as listas Fácil/Médio/Difícil (≈45 questões) → `multiplaEscolha`
  + `discursivas` → `todasQuestoes`, filtráveis por **dificuldade**.
- **Separação garantida:** `todasQuestoes` contém só o banco geral; `questoesPorTopico` filtra só
  `perTopico`. Os dois conjuntos **nunca se misturam** (atende ao requisito de não misturar gerais e
  por-tópico). A maioria das questões é `QuestaoDiscursiva` (responder → revelar gabarito → autoavaliar);
  as objetivas A-E são `QuestaoMultipla`.

## Mídia (local — `origem: local`)

- 8 áudios por tópico em `public/podcasts/ing4/NN-<slug>.m4a` (~90 MB no total, `origem: local`).
- **Vídeo geral no YouTube (não listado):** `https://youtu.be/5JXNdweAhRg` (`origem: youtube`),
  embutido no Tópico 00 via `PlayerVideo.astro` (iframe `youtube-nocookie`). O `.mp4` local foi
  removido do git (excedia o limite do GitHub) e está em `.gitignore`.
- Ícone/capa SVG em `public/imagens/cursos/ing4/`.
- Fontes leves (PDF) em `public/arquivos/cursos/ing4/`. O *Student Book* (~48 MB) é referenciado, não
  versionado.
- **Pendência:** os ~90 MB de áudio ainda estão versionados localmente; externalizar para
  YouTube/CDN ao escalar (ver `docs/MEDIA-PROTOCOL.md`; `npm run audit-media`).

## Área de Writing e ferramenta de auxílio à escrita

`/ing4/writing` ensina a redação de opinião (apresentar opinião, argumentos, agree/disagree,
conectores, intro/body/conclusão, evitar repetição/clareza, erros frequentes, modelo comentado) e traz
o **WritingAnalyzer** (`src/components/cursos/ing4/WritingAnalyzer.tsx`). Detalhes técnicos,
alternativas e a estratégia de chaves em **`docs/WRITING-TOOL.md`**.

## Progresso

Namespacing automático por slug: o progresso de ING-4 vive em `bussola:v1.cursos.ing4`. O rascunho da
ferramenta de escrita fica em `bussola:ing4:writing:draft`.

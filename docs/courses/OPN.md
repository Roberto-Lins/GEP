# OPN — Operações Navais 1 (PP1)

Curso real da plataforma. Tema visual `naval-command`. Prova: **24/06/2026**.
Config: `src/content/cursos/opn/_config.json`. Dados: `src/data/cursos/opn/`.

## Hierarquia

`ano 4 · semestre 1 · época P1 · turma ["CA-HE","CA-HM","CA-HS"]` — matéria comum às **três turmas CA**
(não FN/IM, não `geral`). Foi a primeira a usar `turma` como **lista** (ver `src/content/schemas.ts` /
`src/utils/hierarchy.ts` — helper `cursoNaTurma`). `ordem: 1`.

## Estrutura da prova (Orientações do Professor)

`1,0 (diretas) + 1,0 (múltipla) + 3,7 (Rosa) + 1,5 (manobras) + 2,8 (cenários) = 10,0`, em 5 questões /
160 min. UEs cobradas: **1, 2, 3, 4, 5, 6 e 8**. Excluídos: Operações Anfíbias, Operação de Segurança
Marítima, Operações de Informação e Plano Operacional (o **campo** Segurança Marítima continua).

## Timeline (18 mini-matérias)

| ordem | slug | UE | prioridade |
|------|------|----|-----------|
| 0 | 00-introducao-e-mapa-da-prova | — | alta |
| 1 | 01-poder-maritimo-e-poder-naval | 1 | alta |
| 2 | 02-missao-campos-e-tarefas-do-poder-naval | 1 | muito alta |
| 3 | 03-operacoes-acoes-e-atividades-navais | 1 | alta |
| 4 | 04-documentos-operativos-e-diretivas | 2 | muito alta |
| 5 | 05-estrutura-da-ordope-e-ordmov | 2 | muito alta |
| 6 | 06-atp-linguagem-operativa | 3 | muito alta |
| 7 | 07-organizacao-comando-e-prontidao | 4 | muito alta |
| 8 | 08-rosa-de-manobras-movimento-relativo | 5 | **máxima** |
| 9 | 09-rosa-de-manobras-pma-e-contatos | 5 | **máxima** |
| 10 | 10-rosa-de-manobras-vento | 5 | **máxima** |
| 11 | 11-rosa-de-manobras-entrar-em-posicao | 5 | **máxima** |
| 12 | 12-manobras-taticas-formaturas-e-sinais | 6 | muito alta |
| 13 | 13-manobras-taticas-guina-rumocor-e-guia | 6 | **máxima** |
| 14 | 14-quadro-tatico-coc-cic-e-etapas | 8 | muito alta |
| 15 | 15-quadro-tatico-contatos-e-partes | 8 | **máxima** |
| 16 | 16-quadro-tatico-plotagens-pim-e-opgen | 8 | muito alta |
| 99 | 99-revisao-final | todas | **máxima** |

## Seções por mini-matéria

`index` (capa), `aula`, `resumo`, `comparacoes`, `pegadinhas`, `referencias`. A revisão final (99) usa
`mapa-da-prova`, `resumo-geral`, `erros-frequentes`, `revisao-de-vespera`.

## Questões de exemplo (perTopico) × banco geral

- **Banco geral VAZIO** em `src/data/cursos/opn/exercicios.ts` (`multiplaEscolha/verdadeiroFalso/correlacionar/discursivas = []`).
  `/opn/questoes` existe mas mostra "0 questões"; `features.simulados: false` (rota não gerada). Será
  populado **depois**, a partir de `../OPN/EXERCÍCIOS` (Fácil/Médio/Difícil).
- **~67 questões de exemplo** vivem em `perTopico` (privado), surgindo na seção "Exercícios" de cada
  mini-matéria via `questoesPorTopico(slug)` — **não** entram no banco geral. Mesmo padrão do ING-4.

## Rosa de Manobras — validação numérica

Os exemplos resolvidos (08–11) foram **conferidos com o motor** `src/tools/rosa-de-manobras/engine`
(`solveContact`, `solveTrueWind`, `solveDeckLaunch`, `solveStation`): contato 260/12 + M1 020/14000 + M2
015/11000 → ~237°/24 kt; vento 060/10 + 090 BE/14 → 185,5°/17,2 kt; convés 315/10 + 30@10BB → 346/21;
posição guia 090/10 + 135/2800 + 15 kt → 107°/13,6 min. Diagramas SVG estáticos em
`public/imagens/cursos/opn/`. A ferramenta interativa é desenvolvida à parte.

## Hierarquia de fontes

Apostila **Fundamentos de Operações Navais — EN-131** (prioritária) > Orientações do professor > Aulas >
ATP > Linha do tempo > Mnemônicos > CONTEÚDO (NotebookLM, auxiliar) > Vídeos. Conteúdo central rastreável
à Apostila; aula/ATP/Manual marcados nas referências de cada mini-matéria.

## Pendências

- **Banco geral de questões** e **simulados** — popular depois (de `../OPN/EXERCÍCIOS`).
- **Mídia** (vídeos/podcasts) — ainda não há arquivos reais; `../OPN/Vídeos` só tem prompts. `midias.ts`
  vazio; `podcasts`/`mapasMentais` off.
- Refinar o código exato do Manual de Rosa (DHN) nas fontes, se confirmado.

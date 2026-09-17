# REL-T2 — Relações Internacionais / T2 (família multimodal `rel-t2`)

Ano 4 · semestre 2 · época T2 · turma geral. Slugs: `rel-t2--rapido`, `rel-t2--pra-safar`, `rel-t2--completo`. O legado `rel` (P1) permanece inalterado, com rotas, IDs e progresso próprios.

## Recorte

**Aulas internas 13 a 17, com término em China**, mais um módulo final de **aplicação da Política Externa Brasileira**. O nome do arquivo está deslocado em relação ao título interno do deck — o curso segue sempre o **título interno**:

| Arquivo | Aula interna | Módulo |
|---|---|---|
| `AULA 12.pdf` | Aula 13 **e** Aula 14 (duas aulas emendadas) | 01, 02 e 06 |
| `AULA 13.pdf` | Aula 14 (versão autônoma e **atualizada**) | 02 |
| `AULA 14.pdf` | Aula 15 | 03 |
| `AULA 15.pdf` | Aula 16 (EUA) | 04 — e sustenta o 00 |
| `AULA 16.pdf` | Aula 17 (China) | 05 |

**Fora do escopo, por determinação expressa:** a **Rússia** (aula 18, `AULA 17.pdf`), a **Europa**, as aulas anteriores à 13 — exceto pontes de pré-requisito de poucas linhas — e a descrição de cerâmica e porcelana dinástica sem função explicativa.

### Ajuste de escopo em 18/09/2026

O usuário informou que a T2 **não cobrará Rússia** e **cobrará Política Externa Brasileira**. Efeitos:

- O módulo `06-russia` foi **retirado** das três modalidades, com os seus conceitos, questões, itens de simulado e colunas de matriz comparativa.
- O lugar do módulo 06 passou a ser `06-peb-aplicacao-e-integracao`: aplicação da PEB (aula 13) integrada ao PND/END/PESD (14) e à política marítima (15), com a matriz de dez passos rodada sobre o próprio Brasil.
- O módulo `05-china` **permaneceu** — a troca pedida incidiu sobre o slot da Rússia, não sobre a China (confirmado com o usuário).
- **Nenhum ID foi reutilizado.** Os conceitos do novo módulo começam em `REL-T2-M06-C015` (C001–C014 ficaram aposentados com o módulo russo) e as suas questões em `009`. No simulado, a objetiva 7 e a discursiva 14 foram aposentadas e substituídas por `019` e `020`. A matriz comparativa da revisão final passou de quatro para três atores, e as questões M99 que dependiam da Rússia foram aposentadas e substituídas por IDs novos.
- As fontes que só serviam ao módulo russo (`AULA 17.pdf`, resumo de Aspirante na parte russa e a bibliografia russa do deck) foram movidas para a chave `fontes_retiradas_do_escopo` em `fontes-manifesto.json`, com motivo e efeito declarados.

## Módulos

| Ordem | Slug | Aula interna |
|---|---|---|
| 0 | `00-metodo-e-matriz-de-cenarios` | 13 a 17 (transversal) |
| 1 | `01-politica-externa-brasileira` | 13 |
| 2 | `02-pnd-end-e-pesd` | 14 |
| 3 | `03-politica-maritima-naval-e-economia-azul` | 15 |
| 4 | `04-estados-unidos` | 16 |
| 5 | `05-china` | 17 |
| 6 | `06-peb-aplicacao-e-integracao` | 13 (aplicação) + integração com 14 e 15 |
| 99 | `99-revisao-final` | — |

## Como editar

1. **Texto das aulas:** edite o MDX em `src/content/cursos/rel-t2--<modalidade>/<módulo>/`. O `build.py` **nunca** toca em `.mdx`.
2. **Conceitos, questões e simulado:** edite `scripts/autoria/rel-t2/conceitos_m*.py`, `modulos.py`, `fontes.py` e `questoes/*.py`.
3. **Regenere:** `python3 scripts/autoria/rel-t2/build.py --gerar` — valida IDs, dependências, módulos, distribuição por nível e lacunas de cobertura, e escreve `matriz-cobertura.json`, `questoes.ts`, os três `_config.json`, os `_dados.json`, os bundles (`timeline`, `exercicios`, `checklists`, `midias`, `fontes`, `index`) e `ESTADO_DO_CURSO.json`.
4. **Valide:** `npm run validate-content`, `npm test` e `npm run build`.

Nunca reutilize um ID, nem de questão descartada ou de módulo retirado do escopo. **O ID não contém a modalidade:** `REL-T2-<MOD>-<TIPO>-<NÍVEL>-<NNN>`, com MOD ∈ M00…M06, M99, SG01; TIPO ∈ OBJ|VF|COR|DIS; NÍVEL ∈ N1…N4.

## Entrega por modalidade

| Modalidade | Palavras MDX | Duração declarada | Conceitos presentes | Questões de módulo visíveis | Simulado final |
|---|---:|---:|---:|---:|---:|
| `rapido` | 11.888 | 98 min (1 h 38) | 106 de 121 | 55 de 65 | 18 de 18 |
| `pra-safar` | 47.829 | 310 min (5 h 10) | 121 de 121 | 65 de 65 | 18 de 18 |
| `completo` | 80.987 | 488 min (8 h 08) | 121 de 121 | 65 de 65 | 18 de 18 |

As três são **autorias independentes** derivadas da mesma matriz canônica — nenhuma é truncamento de outra. As durações foram medidas do conteúdo real e caem dentro das faixas pedidas (90–120 min · 4–6 h · 7–10 h). O **simulado final é o mesmo instrumento nas três modalidades**: por isso `REL-T2-M04-C011` (estrutura de força naval) e `REL-T2-M04-C015` (clínica do Conselho da Paz) entram também no Rápido, em versão mínima.

Seções por modalidade: `rapido` usa `index` + `resumo` + `pegadinhas`; `pra-safar` usa `index` + `aula` + `comparacoes` + `pegadinhas` + `referencias`; `completo` acrescenta `resumo` e uma seção `Aprofundamento` dentro de `aula`. A revisão final usa `mapa-da-prova`, `resumo-geral`, `erros-frequentes` e `revisao-de-vespera`.

## Banco canônico

- **65 questões de módulo** + **18 de simulado** (SG01 — 12 objetivas e 6 discursivas, 180 min, 10,0 pontos).
- Distribuição por nível (módulos): **N1 8 (9%) · N2 17 (20%) · N3 37 (44%) · N4 21 (25%)**. Mapeamento na plataforma: N1 fácil, N2 médio, N3/N4 difícil — o nível exato fica no ID e na assinatura.
- Por módulo: 00=8 · 01=8 · 02=7 · 03=8 · 04=8 · 05=9 · 06=8 · 99=9.
- **121 `concept_id`** na matriz canônica, 120 examináveis.
- Toda questão declara `conceptIds` apontando para conceitos **efetivamente ensinados** na modalidade (`questoesDaModalidade` filtra por presença) e `modalidades`.
- Toda discursiva traz critérios de correção por elementos, resposta-modelo e o contraste **insuficiente / satisfatória / nível MB**, com a diferença objetiva entre elas.

## Perfil de cobrança (evidência localizada)

`src/data/cursos/_familias/rel-t2/perfil-cobranca.json` — status `confirmado`:

| Eixo | Nível |
|---|---|
| literalidade | média |
| interpretação | **alta** |
| cálculo | baixa (inexistente no escopo) |
| detalhismo | **alta** |
| memorização | média, subordinada à aplicação |
| pegadinhas | **alta** |
| integração | **alta** |
| aplicação inédita | **alta** |

Instrumentos que sustentam o perfil: P1 2024 (18 questões, 5 discursivas somando ~5,3 de 10,0), P2 2024 (14 objetivas de 0,3 + 4 blocos discursivos somando 5,8), SOPA T1 2024 (9 × 0,9 + correlação de 1,4 + 0,5) e o trabalho de T2 de 2025. O padrão de correção observado nas discursivas corrigidas é **por elementos exigidos** ("faltou mencionar X"), com crédito parcial.

## Conflitos entre fontes resolvidos

| ID | Objeto | Resolução |
|---|---|---|
| CF-01 | Versão vigente da PND/END | Prevalece o deck mais recente: **Decreto 12.725, de 18/11/2025** (aprovações pelo Congresso em 2005, 2012 e 2018). Decks antigos dizem 2016. |
| CF-02 | Situação da Política Marítima Nacional | Prevalece o slide: **Decreto 12.481, de 02/06/2025**. O resumo descreve o estado anterior (defasagem e GTI de 2021) — compatíveis **em sequência**. |
| CF-03 | Objetivos Nacionais de Defesa | Prevalece a lista do slide. ZOPACAS é **pressuposto** da PND, não objetivo. |
| CF-04 | Cronologia chinesa no resumo | Prevalece o slide: Shang é a primeira dinastia com registro escrito e arqueológico; Qing é 1644-1911; Doklam é litígio com o **Butão**. |

## Incertezas e lacunas declaradas

- **I-01 — formato da T2.** Não existe prova escrita de T2 no corpus autorizado; o único documento de T2 é o **trabalho em grupo de 2025** (7 itens ponderados, até 30 min). O curso prepara para os dois formatos e diz isso ao aluno no Módulo 00 e na revisão final. Nenhum conceito foi omitido por causa disso.
- **I-02 — eixos da matriz 2×2** de cenários: a extração embaralhou os rótulos no plano cartesiano. A leitura dos quadrantes adotada vem do resumo e é compatível com as quatro descrições, que são explícitas nos slides; está marcada como inferência quanto à coordenada.
- **I-03 — capítulos de Magnoli** sobre EUA e China **não foram fornecidos**. Nada lhes é atribuído. O capítulo 21 ("O Brasil e a América Latina") foi fornecido e sustenta parte do módulo 06.
- **I-04 — slides puramente gráficos** sem texto recuperado, declarados módulo por módulo. Onde a informação foi recuperada do resumo (por exemplo, os oito elementos do Poder Marítimo), a procedência está marcada como nível 3; onde não foi, o curso diz que o slide existe e pede que o aluno o abra.
- **I-05 — numeração de slides** não preservada: todas as citações localizam pelo **título do slide**.
- **I-06 — gabaritos das provas antigas** trazem marcações manuscritas divergentes; as provas são usadas como evidência de formato, nunca como gabarito.
- Também **não foram fornecidos**: os documentos oficiais (PND, END, PESD, Livro Branco, Atlas, PMN, Política Naval, PEM 2040).

Registro completo em `src/data/cursos/_familias/rel-t2/registro-lacunas-conflitos.json` e `fontes-manifesto.json` — este último inclui a chave `fontes_retiradas_do_escopo` com as fontes que saíram no ajuste de 18/09/2026.

## Mídia e imagens

- Capa (hero, raster sem texto): `public/imagens/cursos/rel-t2/capa.webp` — 1920×1080.
- Thumbnail quadrada do card: `public/imagens/plataforma/cursos/rel-t2.webp` — 1024×1024.
- Ícone: `public/imagens/cursos/rel-t2/icone.svg`.

As duas imagens raster são **geradas deterministicamente** por script (geometria naval-command: globo com meridianos, rotas pontilhadas e rosa dos ventos), sem IA generativa e sem texto embutido. O curso **não** versiona mídia pesada.

## Features ativadas

`timeline`, `simulados`, `modoRevisaoVespera` e `verRespostaAntes`. As demais permanecem `false`. `verRespostaAntes` permite estudar pelo gabarito sem lançar tentativa, acerto, erro ou progresso, mantendo o fluxo normal de resposta disponível.

# DIR-T2 — Direito / T2 (família multimodal `dir-t2`)

Ano 4 · semestre 2 · época T2 · turma geral. Slugs: `dir-t2--rapido`, `dir-t2--pra-safar`, `dir-t2--completo`. O legado `dir` (P1) permanece inalterado.

## Recorte

- `8 Aula 3.1.pptx` — Direito Penal Militar, 75 slides físicos.
- `9 Aula 4.1.pptx` — Direito Processual Penal Militar, 42 slides físicos.
- `10 Aula 4.2.pptx` — somente slides físicos 1–7 (órgãos da JMU, composição e competência do STM).

Tudo a partir do slide 8 da Aula 4.2 está excluído, inclusive como exemplo ou distrator.

## Como editar

1. Texto das aulas: edite o MDX em `src/content/cursos/dir-t2--<modalidade>/<módulo>/`.
2. Questões, simulados e matriz: edite `scripts/autoria/dir-t2/questoes/*.py` e `conceitos.py`.
3. Regenere: `python3 scripts/autoria/dir-t2/build.py --gerar` (valida IDs, níveis por módulo, vínculos e escreve `questoes.ts`, `matriz-cobertura.json`, `_dados.json`, `_config.json`, bundles e `docs/courses/DIR-T2-build.json`).
4. Rode `npm run validate-content`, `npx vitest run` e `npm run build`.

Nunca reutilize um ID, nem de questão descartada. O ID não contém a modalidade.

## Entrega por modalidade

| Modalidade | Palavras MDX | Núcleo (leitura + objetivas) | Discursivas adicionais | Questões de módulo | Simulados (A/B/C) |
|---|---:|---:|---:|---:|---|
| rapido | 3752 | 355 min | 179 min | 146 | 12/12/9 |
| pra-safar | 11774 | 435 min | 189 min | 151 | 12/12/10 |
| completo | 14796 | 475 min | 189 min | 154 | 12/12/10 |

Duração do núcleo = palavras ÷ 110 (leitura de texto jurídico) + tempo estimado das questões objetivas, arredondado a 5 min por módulo. Discursivas e simulados (60 + 90 + 120 min) são treino adicional.

## Banco canônico

- 154 questões de módulo; 34 questões de simulados (SG01 12, SG02 12, SG03 10).
- Tipos (módulos): OBJ 86, VF 34, COR 11, DIS 23.
- Níveis (módulos): N1 12, N2 49, N3 61, N4 32. Mapeamento para a plataforma: N1 fácil, N2 médio, N3/N4 difícil (o nível exato fica no ID e na assinatura).
- Aplicação contextualizada: 76.0% (meta ≥ 60%).
- Posição da alternativa correta nas múltiplas (0–3): {'1': 27, '2': 27, '3': 27, '0': 26}.
- Todo módulo substantivo (M01–M11) tem N2, N3 e N4 em cada modalidade e ao menos duas discursivas com rubrica por pontos.

| Módulo | Questões |
|---|---:|
| 00-mapa-e-metodo | 2 |
| 01-principios-e-lei-no-tempo-e-espaco | 15 |
| 02-fato-tipico-dolo-culpa-preterdolo | 14 |
| 03-ilicitude-culpabilidade-e-excludentes | 15 |
| 04-iter-criminis-tentativa-e-desistencia | 14 |
| 05-concurso-de-agentes | 14 |
| 06-crime-militar | 14 |
| 07-crimes-militares-em-especie | 14 |
| 08-pjm-e-instauracao-do-ipm | 14 |
| 09-oitivas-garantias-e-sigilo | 14 |
| 10-prazos-relatorio-arquivamento-e-foro | 14 |
| 11-jmu-e-stm | 10 |

## Mapa de cobertura final

| concept_id | Rápido | Pra Safar | Completo | Examinável | Questões | Figuras |
|---|:-:|:-:|:-:|:-:|---:|---|
| `DIRT2-ESCOPO` | ✓ | ✓ | ✓ | ✓ | 1 | — |
| `DIRT2-METODO` | ✓ | ✓ | ✓ | — | 1 | — |
| `DIRT2-DP-CONCEITO` | ✓ | ✓ | ✓ | ✓ | 1 | — |
| `DIRT2-PRINC-LEGALIDADE` | ✓ | ✓ | ✓ | ✓ | 4 | — |
| `DIRT2-PRINC-IRRETRO` | ✓ | ✓ | ✓ | ✓ | 6 | — |
| `DIRT2-PRINC-GARANTIAS` | ✓ | ✓ | ✓ | ✓ | 4 | — |
| `DIRT2-TEMPO-CRIME` | ✓ | ✓ | ✓ | ✓ | 3 | — |
| `DIRT2-LUGAR-CRIME` | ✓ | ✓ | ✓ | ✓ | 3 | — |
| `DIRT2-TERRITORIALIDADE` | ✓ | ✓ | ✓ | ✓ | 4 | — |
| `DIRT2-ELEMENTOS-CRIME` | ✓ | ✓ | ✓ | ✓ | 3 | DIRT2-FIG-CRIME-001 |
| `DIRT2-FATO-TIPICO` | ✓ | ✓ | ✓ | ✓ | 5 | — |
| `DIRT2-DOLO` | ✓ | ✓ | ✓ | ✓ | 7 | — |
| `DIRT2-CULPA` | ✓ | ✓ | ✓ | ✓ | 10 | — |
| `DIRT2-PRETERDOLO` | ✓ | ✓ | ✓ | ✓ | 5 | — |
| `DIRT2-EXCL-ILICITUDE` | ✓ | ✓ | ✓ | ✓ | 6 | DIRT2-FIG-CRIME-001 |
| `DIRT2-EXCL-COMANDANTE` | ✓ | ✓ | ✓ | ✓ | 2 | — |
| `DIRT2-EXCESSO` | — | — | ✓ | — | 1 | — |
| `DIRT2-IMPUTABILIDADE` | ✓ | ✓ | ✓ | ✓ | 3 | DIRT2-FIG-CRIME-001 |
| `DIRT2-ERRO-DIREITO` | ✓ | ✓ | ✓ | ✓ | 3 | — |
| `DIRT2-INEXIGIBILIDADE` | ✓ | ✓ | ✓ | ✓ | 7 | — |
| `DIRT2-ESTADO-NEC-EXCULPANTE` | — | — | ✓ | — | 1 | — |
| `DIRT2-ITER` | ✓ | ✓ | ✓ | ✓ | 6 | — |
| `DIRT2-TENTATIVA` | ✓ | ✓ | ✓ | ✓ | 8 | — |
| `DIRT2-DESIST-ARREP` | ✓ | ✓ | ✓ | ✓ | 8 | — |
| `DIRT2-CRIME-IMPOSSIVEL` | ✓ | ✓ | ✓ | ✓ | 4 | — |
| `DIRT2-CONCURSO-MONISTA` | ✓ | ✓ | ✓ | ✓ | 6 | — |
| `DIRT2-AUTORIA-PARTICIPACAO` | ✓ | ✓ | ✓ | ✓ | 5 | — |
| `DIRT2-COAUTORIA-LIMITES` | ✓ | ✓ | ✓ | ✓ | 5 | — |
| `DIRT2-AGRAVANTES-CABECAS` | ✓ | ✓ | ✓ | ✓ | 8 | — |
| `DIRT2-COMUNICABILIDADE` | — | — | ✓ | — | 1 | — |
| `DIRT2-CRIME-MILITAR-CONCEITO` | ✓ | ✓ | ✓ | ✓ | 4 | — |
| `DIRT2-PROPRIO-IMPROPRIO` | ✓ | ✓ | ✓ | ✓ | 3 | — |
| `DIRT2-TRANSGRESSAO` | ✓ | ✓ | ✓ | ✓ | 4 | — |
| `DIRT2-ART9-I` | ✓ | ✓ | ✓ | ✓ | 3 | — |
| `DIRT2-ART9-II` | ✓ | ✓ | ✓ | ✓ | 10 | — |
| `DIRT2-ART9-III` | ✓ | ✓ | ✓ | ✓ | 4 | — |
| `DIRT2-ART9-DOLOSO-VIDA` | ✓ | ✓ | ✓ | ✓ | 4 | — |
| `DIRT2-ART10-GUERRA` | — | ✓ | ✓ | ✓ | 2 | — |
| `DIRT2-CRIME-160` | ✓ | ✓ | ✓ | ✓ | 5 | — |
| `DIRT2-CRIME-163` | ✓ | ✓ | ✓ | ✓ | 5 | — |
| `DIRT2-CRIME-172` | ✓ | ✓ | ✓ | ✓ | 3 | — |
| `DIRT2-CRIME-174` | ✓ | ✓ | ✓ | ✓ | 3 | — |
| `DIRT2-CRIME-203` | ✓ | ✓ | ✓ | ✓ | 4 | — |
| `DIRT2-CRIME-209-210` | ✓ | ✓ | ✓ | ✓ | 5 | — |
| `DIRT2-DPPM-CONCEITO` | ✓ | ✓ | ✓ | ✓ | 1 | — |
| `DIRT2-PJM` | ✓ | ✓ | ✓ | ✓ | 6 | — |
| `DIRT2-PJM-DELEGACAO` | — | ✓ | ✓ | — | 3 | — |
| `DIRT2-IPM-CONCEITO` | ✓ | ✓ | ✓ | ✓ | 2 | — |
| `DIRT2-IPM-INSTAURACAO` | ✓ | ✓ | ✓ | ✓ | 8 | DIRT2-FIG-IPM-002 |
| `DIRT2-MEDIDAS-URGENTES` | ✓ | ✓ | ✓ | ✓ | 4 | DIRT2-FIG-IPM-002 |
| `DIRT2-ENCARREGADO-ATRIBUICOES` | ✓ | ✓ | ✓ | ✓ | 4 | — |
| `DIRT2-OITIVAS` | ✓ | ✓ | ✓ | ✓ | 7 | DIRT2-FIG-IPM-002 |
| `DIRT2-TESTEMUNHA-INDICIADO` | ✓ | ✓ | ✓ | ✓ | 7 | — |
| `DIRT2-SIGILO-ACESSO` | ✓ | ✓ | ✓ | ✓ | 5 | — |
| `DIRT2-INCOMUNICABILIDADE` | ✓ | ✓ | ✓ | ✓ | 4 | — |
| `DIRT2-PRAZOS-IPM` | ✓ | ✓ | ✓ | ✓ | 4 | DIRT2-FIG-IPM-002 |
| `DIRT2-RELATORIO-AUTOS` | ✓ | ✓ | ✓ | ✓ | 3 | — |
| `DIRT2-REMESSA-ARQUIVAMENTO` | ✓ | ✓ | ✓ | ✓ | 5 | DIRT2-FIG-IPM-001, DIRT2-FIG-IPM-002 |
| `DIRT2-DISPENSA-IPM` | ✓ | ✓ | ✓ | ✓ | 3 | — |
| `DIRT2-SINDICANCIA` | ✓ | ✓ | ✓ | ✓ | 2 | — |
| `DIRT2-FORO-MILITAR` | ✓ | ✓ | ✓ | ✓ | 5 | — |
| `DIRT2-JMU-ORGAOS` | ✓ | ✓ | ✓ | ✓ | 2 | — |
| `DIRT2-STM-COMPOSICAO` | ✓ | ✓ | ✓ | ✓ | 5 | — |
| `DIRT2-STM-COMPETENCIA` | ✓ | ✓ | ✓ | ✓ | 5 | — |

Conceitos: 64; sem questão: 0.

## Figuras

- `DIRT2-FIG-IPM-001` — V1, Aula 4.1 slide 32 (fluxo IPM → Juiz → MPM).
- `DIRT2-FIG-CRIME-001` — V3, estrutura analítica do crime (texto dos slides e CPM).
- `DIRT2-FIG-IPM-002` — V3, linha do IPM (slides 14–32 e CPPM).

Candidatos rejeitados e inventário visual em `src/data/cursos/_familias/dir-t2/figuras.json`.

## Artefatos

| Arquivo | Conteúdo |
|---|---|
| `_familias/dir-t2/fontes-manifesto.json` | inventário dos 29 arquivos, testemunhos, hashes, status de leitura, jurisprudência |
| `_familias/dir-t2/perfil-cobranca.json` | oito eixos com evidência localizada (schema do GEP) |
| `_familias/dir-t2/perfil-cobranca-refinamento.json` | confronto com o perfil inicial da transferência |
| `_familias/dir-t2/matriz-cobertura.json` | matriz canônica (gerada) |
| `_familias/dir-t2/questoes.ts` | banco canônico e simulados (gerado) |
| `_familias/dir-t2/figuras.json` | manifesto visual |
| `_familias/dir-t2/registro-lacunas-conflitos.json` | possíveis erros de fonte, conflitos, incertezas, lacunas, itens rejeitados |
| `_familias/dir-t2/ESTADO_DO_CURSO.json` | estado para retomada |
| `docs/dir-t2/VALIDACAO.md` | relatório de validação |

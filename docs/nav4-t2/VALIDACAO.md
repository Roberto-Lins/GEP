# NAV-4 T2 — registro de autoria e validação

Data de referência: 15 de setembro de 2026.
Revisão-base: `d0ef3c1ea6563da945a57686efc2fa7fa33f563a`.

## Resultado da reconstrução

O curso foi reconstruído incrementalmente nas modalidades Rápido, Pra Safar e Completo. As três usam a mesma matriz canônica, mas possuem aulas próprias; nenhuma foi produzida pelo simples corte da modalidade mais longa.

| Modalidade | Conteúdo MDX | Duração recalculada | Questões disponíveis |
|---|---:|---:|---:|
| Rápido | 4.690 palavras | 300 min de núcleo + 50 min opcionais de treino | 54 |
| Pra Safar | 6.118 palavras | 540 min | 59 |
| Completo | 8.357 palavras | 765 min | 68 |

O banco canônico contém 68 objetos com IDs estáveis e sem duplicidade. Todos possuem `conceptIds`, modalidade, tipo, dificuldade, competência, fonte/localização, tempo estimado, erro provável, assinatura, resolução em etapas e verificação independente. As questões de múltipla escolha também apresentam explicação alinhada a cada alternativa depois da resposta.

## Relatório por módulo

| Módulo | Fontes principais | Profundidade acrescentada | Figuras | Questões canônicas | Min R/P/C |
|---|---|---|---:|---:|---:|
| 00 — mapa | orientação do professor, sumário e ANB 2026 p. 148–149 | escopo, DNA da cobrança, protocolo de consulta e separação entre dado invariável e anual | 2 | 1 | 20/30/35 |
| 01 — correções | apostila p. 139–152, aulas 7.0–7.1, A2–A4 | cadeia completa de alturas, causas físicas, quatro famílias de astros, tábuas e casos resolvidos | 4 | 12 | 60/90/125 |
| 02 — LDP | apostila p. 153–159 e aula 8.0 | GP, lugar geométrico, tangente, triângulo de posição, intercepto, validade e propagação de erros | 1 | 11 | 45/70/95 |
| 03 — Radler | apostila p. 160–174, aulas 9.0, UE 10.0 até 13:00, instruções e DHN-0607 | fundamento PAZ, duas entradas, formação de C, quadrantes e oficina auditável do trabalho de 2,0 | 5 | 16 | 60/110/190 |
| 04 — hora da PM | apostila p. 175–180, aulas 10.1–10.2, ANB p. 149 e tábuas I/II | HML/HMG/Hleg, método simples e por ET, longitude, fuso, mudança de data e interpolação | 2 | 11 | 40/65/90 |
| 05 — latitude | apostila p. 175–180, aula 10.3 e ANB p. 149 | altura meridiana, declinação no instante, três casos, forma assinada e efeito do movimento | 2 | 11 | 45/85/125 |
| 06 — treino | corpus integrado e anexos de 2026 | miniestações, gabarito estrutural, diagnóstico por primeiro elo e simulado de 90 min | 9 reutilizadas | 6 | 50 opc./60/75 |
| 99 — revisão | síntese da matriz canônica | cartões de sinais, fluxos, erros críticos, recuperação ativa e critério de prontidão | — | banco integrado | 30/30/30 |

## Corpus e imagens

- 1.118 itens e 82 pastas inventariados no Drive.
- Páginas 139–180 da apostila e 237 slides examinados.
- Provas, SOPAs, resumos, gabaritos e orientações confrontados para reconstruir o perfil de cobrança.
- Seis videoaulas vinculadas; a UE 10.0 foi delimitada em 0:00–13:00.
- Dez fotografias recebidas, nove usadas pedagogicamente e convertidas para WebP de 960×1280.
- O DHN-0612 foi identificado como modelo de cálculo de azimutes para desvio da agulha e excluído do curso por estar fora do escopo confirmado.
- O manifesto público registra títulos, caminhos no acervo, tamanhos, hashes dos anexos, função e lacunas. URLs e identificadores privados do Drive foram deliberadamente omitidos da versão publicável.
- O catálogo contém 14 figuras: nove fontes originais V1 e cinco reconstruções técnicas determinísticas V3.

As imagens não são decorativas: cada uma possui legenda, texto alternativo, instrução de leitura, origem/localização, fidelidade, dimensões, hash e associação a módulos. As páginas antigas de 2020/2023 ensinam apenas método; efemérides de 2026 continuam dependentes do ANB 2026.

## Lacunas deliberadamente não preenchidas

- Não foi encontrada fonte suficiente no corpus para reproduzir o Starfinder; nenhuma aproximação visual ou ferramenta foi inventada.
- Os anexos do ANB 2026 cobrem as páginas 148–149. Valores anuais fora delas exigem consulta à edição física do aluno.

## Resultado técnico

- `npm run validate-content`: 0 erros e 0 avisos.
- `npm test -- --run`: 18 arquivos e 121 testes aprovados, incluindo quatro contratos específicos do banco NAV-4.
- `npm run build`: 322 páginas estáticas geradas.
- `npm run validate-sync`: aprovado.
- `npm run audit-modalidades`: aprovado; três modalidades e 8 módulos preservados.
- `audit_gep.py`: inventário concluído sem mídia pesada; o alerta de timeline é um falso positivo conhecido do auditor legado, que procura listas locais e não interpreta as timelines compartilhadas da família multimodal. A existência e a correspondência dos 24 vínculos foram confirmadas pelo auditor específico de modalidades e pelo build.
- `npm run audit-media`: nenhuma mídia nova ≥ 2 MB; o único alerta é `public/imagens/cursos/dir/capa.png`, preexistente e fora do escopo.
- IDs duplicados no banco NAV-4: 0.
- Questões sem metadados pedagógicos obrigatórios: 0.
- 40 páginas NAV-4 inspecionadas no HTML gerado: 62 ocorrências de imagem, 1.158 renderizações KaTeX, 0 caminhos quebrados e 0 erros visuais do KaTeX.
- Imagens-fonte conferidas em raster; o componente garante largura fluida, altura automática, ampliação por link, foco visível, legenda e alternativa textual.

O validador matemático global retorna 40 erros anteriores em `det-t2` e `fas`; nenhum pertence à família NAV-4. A captura em navegador real da prévia local ficou bloqueada pela política do navegador remoto para endereços `localhost`. Por isso, desktop/celular e navegação por teclado permanecem como itens explícitos da auditoria do usuário, e não são declarados como aprovados neste registro.

## Estado de entrega

A reconstrução foi aprovada pelo usuário para integração e publicação em 15 de setembro de 2026. O histórico publicável omite URLs e identificadores privados do Drive.

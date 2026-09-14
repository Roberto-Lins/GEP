# Detecção — T2

Curso do **4º ano, 2º semestre, T2, CA-HE**, disponível na rota canônica `/det-t2`.

## Estado do curso

- Publicados: M00 a M08, mais a revisão final M99.
- Revisão: mapa da prova, folha de fórmulas, erros recorrentes e plano de véspera.
- Simulados completos: A, B e C, com 100, 110 e 120 minutos; `features.simulados` está ativada.
- Banco completo: 84 grupos com IDs `DET-T2-*` — 72 exercícios dos módulos e 12 questões próprias de simulado.
- Exercícios de módulo: 18 correlações, 10 grupos V/F modelados como correlação V/F e 44 discursivas/cálculos/diagramas.
- Caderno de Revisão v2: PDF A4 de 13 páginas, com 6 de resumo, 4 de exercícios, 2 de gabarito e formulário final; download ativado somente neste curso. A cadeia da equação radar explicita `S₁`, `S₂`, `Pₐ`, `S₃`, `Pᵣ` e `Rₘₐₓ` com os denominadores conferidos.

## Fontes e fidelidade

O conteúdo foi consolidado a partir do pacote completo fornecido por Roberto Lins, conferido contra as sete execuções cumulativas. Cada módulo preserva referências por página/slide, marcações de inferência pedagógica e conflitos entre fontes.

A revisão visual recuperou os bytes dos slides e da apostila completa (238 páginas). As antigas lacunas de extração L-05/L-06 foram resolvidas; os sete problemas originais estão em M06. L-07 foi tratada com figuras originais junto às aulas. Fontes SOPA antigas adicionais continuam como reforço opcional; não houve nova revisão do banco nem diagnóstico do aluno nesta atualização.

## Caderno de Revisão

O arquivo `DET-T2-caderno-de-revisao-v2.pdf` usa as SOPAs T2 e T1 de 2024 exclusivamente para derivar convenções de página, tipografia, numeração, resposta e pesos. Nenhum enunciado ou gabarito de SOPA foi copiado ou parafraseado; os quatro conjuntos de exercícios preservam IDs do banco original e atribuição às fontes didáticas.

O PDF foi gerado em Liberation Sans, substituto métrico de Arial, e auditado com zero violações: A4, preto/cinza, 13 páginas, rodapé ético em todas as páginas, gabarito após os exercícios e formulário na última página. A lacuna `DET-CAD-L01` registra a ausência de um asset real de brasão/logo; o cabeçalho institucional é textual.

O `_config.json` guarda versão, páginas, tamanho, SHA-256 do PDF e hash combinado das entradas. `npm run validate-content` reprova o curso quando o arquivo muda ou quando qualquer dependência declarada torna o caderno desatualizado.

## Estrutura

| Ordem | Slug | Situação |
|---:|---|---|
| 00 | `00-mapa-da-t2-e-diagnostico` | publicado |
| 01 | `01-fundamentos-do-radar-de-pulso` | publicado |
| 02 | `02-caracteristicas-e-parametros-de-desempenho` | publicado |
| 03 | `03-transmissao-e-formacao-do-pulso` | publicado |
| 04 | `04-recepcao-e-processamento-do-eco` | publicado |
| 05 | `05-diagrama-de-blocos-controles-e-fluxo-do-sinal` | publicado |
| 06 | `06-equacao-radar-ganho-sensibilidade-e-alcance` | publicado |
| 07 | `07-integracao-adjacencias-e-preparacao-final` | publicado |
| 08 | `08-simulados-e-protocolo-final` | publicado |
| 99 | `99-revisao-final` | publicado |

## Assets

O curso reutiliza a linguagem visual já aprovada para DET, com cópias próprias em `public/imagens/cursos/det-t2/` e `public/imagens/plataforma/cursos/det-t2.webp`. As figuras acadêmicas estão em `public/imagens/cursos/det-t2/figuras/`, registradas em `src/data/cursos/det-t2/figuras.json` e apresentadas por `FiguraFonte.astro`. Capturas preservam conexões e sobreposições dos slides. O gráfico normalizado de alcance é calculado por código, com condições e origem explícitas.

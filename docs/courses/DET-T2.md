# Detecção — T2

Curso do **4º ano, 2º semestre, T2, CA-HE**, disponível na rota canônica `/det-t2`.

## Estado inicial

- Publicados: M00, M01, M02, M03 e M04.
- Em produção: M05, M06 e M07.
- Revisão: mapa da prova, folha de fórmulas, erros recorrentes e simulado progressivo com o banco atual.
- Simulados completos A/B/C: pendentes para o M08; por isso `features.simulados` permanece desativada.
- Banco atual: 42 grupos com IDs `DET-T2-*` — 9 correlações, 6 grupos V/F modelados como correlação V/F e 27 discursivas/cálculos/diagramas.

## Fontes e fidelidade

O conteúdo foi importado das quatro execuções cumulativas fornecidas por Roberto Lins. A execução 4 é a base mais recente e contém M01–M04. Cada módulo preserva as referências por página/slide, as marcações de inferência pedagógica e os conflitos entre fontes. Módulos não entregues aparecem como lacunas explícitas; não receberam conteúdo inventado.

## Estrutura

| Ordem | Slug | Situação |
|---:|---|---|
| 00 | `00-mapa-da-t2-e-diagnostico` | publicado |
| 01 | `01-fundamentos-do-radar-de-pulso` | publicado |
| 02 | `02-caracteristicas-e-parametros-de-desempenho` | publicado |
| 03 | `03-transmissao-e-formacao-do-pulso` | publicado |
| 04 | `04-recepcao-e-processamento-do-eco` | publicado |
| 05 | `05-diagrama-de-blocos-controles-e-fluxo-do-sinal` | em produção |
| 06 | `06-equacao-radar-ganho-sensibilidade-e-alcance` | em produção |
| 07 | `07-integracao-adjacencias-e-preparacao-final` | em produção |
| 99 | `99-revisao-final` | progressivo; conclusão prevista no M08 |

## Assets

Nesta primeira versão, o curso reutiliza a linguagem visual já aprovada para DET, com cópias próprias em `public/imagens/cursos/det-t2/` e `public/imagens/plataforma/cursos/det-t2.webp`. Isso evita acoplamento de caminhos e permite substituir a arte por uma capa específica de radar sem alterar o curso da PP1.

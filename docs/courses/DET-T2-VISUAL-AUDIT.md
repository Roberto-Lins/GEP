# Revisão visual de DET-T2 — 13/09/2026

## Escopo e fontes

Revisão de todas as representações acadêmicas de M01–M07 e das referências a lacunas em M00, M08 e M99. O corpus é exclusivamente o material fornecido pelo usuário: slides PDF/ODP, apostila DET 2022 e curso completo. Nenhuma fonte acadêmica externa foi consultada.

Foram recuperadas 74 figuras originais (V1) e produzido um gráfico normalizado por código (V3), totalizando 75 arquivos e 76 usos nas aulas. O gráfico declara as condições mantidas constantes. Todas as imagens ficam abaixo de 300 kB, com cerca de 9,4 MB no conjunto.

O registro `src/data/cursos/det-t2/figuras.json` associa cada figura a arquivo, página, hash da fonte, recorte quando aplicável, dimensões, legenda, texto alternativo, orientação de leitura e módulo. As capturas dos slides mantêm conexões e sobreposições; o diagrama geral do radar usa a mídia original extraída do ODP, que foi comparada com o slide. O componente `FiguraFonte` oferece ampliação por link nativo, inclusive pelo teclado.

## Correções de ensino

- M03: substituição do circuito redesenhado por originais da apostila; distinção entre trânsito por seção e ida e volta na linha; esclarecimento de carga, descarga, indutores, capacitores e duração do pulso; leitura da expressão de D10 na imagem original.
- M04: figuras originais do receptor e CAF; explicação da divergência entre o texto do slide 19 e a apostila 1-44, sem apagar a divergência; fórmulas do fator de ruído separadas para facilitar a leitura.
- M05: diagrama completo do radar, controles e formas de onda junto às explicações, com percurso de leitura.
- M06: sete problemas originais das páginas impressas 1-81/1-82 recuperados; gráfico calculado para comparar potência e área da antena sob condições explícitas.
- M01, M02 e M07: figuras das fontes nos respectivos conceitos; comparações tabulares onde a relação não exige um circuito. Removidos os esquemas em caracteres.
- Interface de correlação: opções passam a quebrar linha no celular quando há muitas chaves, mantendo a lógica de resposta.

## Continuidade

Banco e checklists permanecem idênticos ao estado de entrada desta revisão. Os testes verificam os IDs de DET-T2. O estado de autoria registra uma migração parcial real, sem inventar histórico anterior. L-05/L-06 foram resolvidas pela recuperação das fontes; L-07 foi tratada pela restauração das figuras. Provas antigas adicionais e diagnóstico do aluno permanecem opcionais e não foram fabricados. Não se declara revisão pelo Claude nesta entrega.

## Verificação

- `python scripts/figuras/verificar_det.py`: 75 figuras, 76 usos, 74 V1 e 1 V3; nenhum erro.
- `node --import tsx scripts/validate-content.ts`: zero erros e zero avisos.
- `npm test -- src/data/cursos/det-t2/exercicios.test.ts`: seis testes aprovados.
- `npm run build`: 282 páginas geradas.
- Auditoria de mídia: os novos arquivos respeitam o limite; os alertas de mídia grande pertencem ao acervo anterior de áudio/vídeo.
- Navegador Chromium: 14 cenários (M01–M07 em 1440 e 390 px), sem imagens quebradas, erros de página ou transbordamento horizontal do documento; ampliação pelo teclado em M03–M06. Inspeção visual de circuitos, CAF, radar completo e gráfico em desktop e celular.

Os scripts em `scripts/figuras/` reproduzem os recortes e o gráfico a partir dos arquivos originais, conferindo os hashes de origem. Os arquivos originais fornecidos pelo usuário não são publicados junto ao repositório.

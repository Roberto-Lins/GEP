# NAV-4/T2 — revisão dirigida por SOPAs

Data de corte: 15/09/2026
Base auditada: `4a1891fe52a4f489e84742b023e14597a6394166`
Branch: `feat/nav4-t2-sopa-audit`
Regra de entrega: **não fazer merge, push ou deploy antes da revisão humana**.

## Resultado executivo

- 27 páginas de SOPAs foram renderizadas e inspecionadas visualmente; OCR foi usado apenas como apoio.
- 85 questões/subitens oficiais receberam IDs estáveis e metadados de proveniência.
- Os 68 IDs canônicos anteriores foram preservados e auditados individualmente.
- O banco normal contém 81 preparatórias: 42 canônicas classificadas como derivadas do perfil, 26 questões autorais de suporte e 13 novas derivadas dirigidas.
- Cada um dos 23 itens dentro do recorte atual possui aula, páginas dirigidas, exemplo resolvido e pelo menos duas questões preparatórias relacionadas.
- Existem três variantes completas para cada família prioritária: correção de altura, Hleg da passagem e latitude meridiana.
- As questões oficiais ficam somente em **SOPAs às cegas**, separadas das aulas, banco e simulados inéditos.
- Três simulados de 90 minutos e 10 pontos foram criados sem repetição de questão entre eles.
- A nova capa do curso foi gerada a partir da linguagem visual dos anexos, convertida para WebP 1280 × 720 e comprimida para 65.772 bytes.

## Fontes e método de leitura

Foram usados somente os anexos fornecidos pelo usuário e o corpus autorizado do Drive. Nenhuma fonte acadêmica externa foi consultada nesta revisão.

### Anexos novos

| Fonte | Inspeção | Resultado |
|---|---:|---|
| áudio WhatsApp de 37 s | audição integral | direciona o estudo às SOPAs, apostila e páginas indicadas; é coerente com as folhas manuscritas |
| orientação “problemas possíveis” | imagem integral | confirma estrela/planeta/Lua; Hleg simples ou precisa; latitude exata |
| orientação T2/26 | imagem integral | fixa páginas, subitens, material permitido e 90 min |
| `T2 NAV4 - 2022.pdf` | 7/7 páginas | prova contínua coerente, 23 itens/subitens |
| `T2 NAV4 - 2024.pdf` | 20/20 páginas | coletânea mista, 62 itens/subitens; não é atribuída integralmente a 2024 |

### Corpus institucional relido

- Sumário, PE e PLADIS 2026;
- aulas 4.5, 7.0, 7.1, 8.0, Radler partes 1–2 e passagem meridiana;
- 343 slides extraídos e confrontados;
- Tábuas para Navegação — DHN e modelo Radler;
- PG-143, 144, 147–154, 156–158, 160–161 e 175–180, conforme o recorte dirigido.

Os 38 links individuais efetivamente usados estão em `fontes-manifesto.json`.

## Inventário oficial

| Classificação | Quantidade |
|---|---:|
| dentro do escopo T2/2026 | 23 |
| pré-requisito necessário | 35 |
| histórico fora do recorte atual | 27 |
| **total** | **85** |

| Tipo | Quantidade |
|---|---:|
| discursiva | 23 |
| cálculo | 26 |
| V/F | 25 |
| múltipla escolha | 11 |

O inventário funcional está em `sopas-inventario.ts`. Cada registro contém arquivo, bloco, ano confirmado/incerto, página física e impressa, questão, subitem, pontuação, tipo, enunciado integral, conceitos, dificuldade, assinatura, escopo, material, anexo, origem/estado do gabarito, destino e modalidades.

### Proveniência da coletânea mista

O arquivo recebido como “T2 NAV4 - 2024” reúne blocos distintos com paginações finais `9/9`, `10/10` e `13/13`, uma página duplicada e exercícios datados de 2020. A decisão conservadora foi:

1. manter um ID por item e sua página física;
2. registrar ano como incerto quando o bloco não o confirma;
3. não transformar anotações de aluno em gabarito;
4. não apresentar a coletânea como uma única prova de 2024.

## Perfil de cobrança reconstruído

O professor alterna quatro formas:

1. definição curta e literal;
2. V/F com troca de uma relação geométrica, instante ou sinal;
3. conta longa subdividida, com valor por etapa;
4. identificação de elementos em figura ou formulário.

Os três problemas prioritários ficaram confirmados por orientação e repetição histórica:

- correção de altura de estrela, planeta ou Lua;
- Hleg da passagem meridiana pelo método simples ou preciso;
- latitude exata na passagem superior com altura corrigida, HMG, declinação e azimute.

A teoria Radler até 13:00 continua examinável. O preenchimento integral do DHN-0607 permanece identificado como apoio ao trabalho de 2,0, não como previsão de uma conta longa dentro da prova escrita.

## Arquitetura anti-vazamento

| Área | Conteúdo | Uso |
|---|---|---|
| aulas | procedimento, teoria, páginas e exemplos resolvidos | aprendizagem |
| questões | derivadas da assinatura e suporte autoral | treino e diagnóstico |
| simulados | três provas inéditas de 90 min | ensaio cronometrado |
| SOPAs | enunciados oficiais integrais e anexos | validação final às cegas |
| suplemento histórico | itens fora do recorte | somente modo Completo |

Os IDs oficiais `NAV4-SOPA-*` não entram em `questoesPreparacao`; logo, não aparecem por acidente na rota normal de questões nem nos simulados.

## Gabaritos e bloqueios

| Estado | Todos os itens | Recorte atual |
|---|---:|---:|
| auditado e publicável | 23 | 13 |
| auditado com conflito documentado | 1 | 0 |
| bloqueado por fonte de gabarito | 60 | 10 |
| bloqueado por anexo | 1 | 0 |

Os dez itens atuais bloqueados dependem de efemérides do ANB 2020 ausentes do corpus. Eles continuam visíveis como inventário, sem resultado numérico presumido. Cada assinatura tem treino equivalente com valores tabulares declarados e solução independente.

### Conflitos documentados

- Coletânea p. 2, Q3.8: a relação física é `1 min de tempo = 15′ de longitude`; a alternativa fotografada aparenta omitir o símbolo de minuto. O item foi marcado `auditado_com_conflito_documentado`.
- Aula de latitude: um slide intermediário escreve `01°34,5′ S`, mas `01°32,1′ + 0,4′`, o slide seguinte e o resultado final exigem `01°32,5′ S`. O curso usa a aritmética consistente.
- LDP dirigida: a leitura ampliada da orientação e da PG-153 confirma os subitens `c, d, e, f`.

## Auditoria dos 68 IDs existentes

`auditoria-questoes-existentes.ts` gera um registro para cada ID `NAV4-Q001–NAV4-Q068`, contendo estado anterior, problema, fonte, decisão, estado final e impacto por modalidade.

Decisões:

- nenhum ID, enunciado ou chave de progresso anterior foi renumerado;
- 42 IDs foram classificados como `derivada_sopa` por relação rastreável com uma assinatura histórica;
- 26 IDs ficaram como `autoral_suporte`;
- 13 novos IDs `NAV4-DER-*` foram adicionados sem reaproveitar identificadores antigos.

## Cobertura do recorte atual

`cobertura-sopas.ts` materializa 23 linhas de cobertura. Cada linha liga:

`item oficial → concept_ids → páginas dirigidas → aula → exemplo → ≥2 preparatórias → anexo/estado do gabarito → modalidades`.

A cobertura pedagógica do recorte atual é 100%. Isso não significa que gabaritos antigos ausentes foram reconstruídos: a matriz distingue `coberta` de `coberta_com_gabarito_oficial_bloqueado`.

## Modalidades e duração recalculada

| Modalidade | Questões preparatórias | Duração | SOPAs |
|---|---:|---:|---|
| Rápido | 64 | 440 min | recorte atual |
| Pra Safar | 72 | 630 min | recorte atual |
| Completo | 81 | 855 min | recorte atual + suplemento histórico |

As três rotas são autorias independentes e compartilham somente os bancos canônicos. Todas apresentam a ordem: treino derivado → simulado inédito → SOPA oficial às cegas.

## Ativos

- PDFs oficiais: 837.765 bytes e 1.177.719 bytes;
- anexo da figura PAZ: WebP, 5.148 bytes, recortado para excluir a resposta manuscrita;
- modelo DHN-0401-3 da p. 18: localizado, mas não publicado como ativo isolado porque contém resposta manuscrita; os itens dependentes permanecem bloqueados;
- capa: WebP 1280 × 720, 65.772 bytes;
- hashes, dimensões e textos alternativos: `anexos-inventario.json` e `figuras.json`.

## Validação

Resultados finais da branch:

- teste dirigido NAV-4: 11/11 aprovado;
- validação de conteúdo: 0 erros e 0 avisos;
- suíte completa: 128/128 testes aprovados em 18 arquivos;
- validação matemática: 0 delimitadores sem par em NAV-4. O comando global termina com código 1 pelos 40 delimitadores sem par preexistentes em DET-T2/FAS e também reporta 4.692 avisos legados;
- auditoria de modalidades: aprovada, com 64/72/81 questões nas rotas Rápido/Pra Safar/Completo;
- build: 325 páginas geradas, incluindo SOPAs e simulados de NAV-4 nas três modalidades;
- auditoria de mídia: nenhum novo ativo NAV-4 acima de 2 MB; a capa mede 65.772 bytes;
- sincronização de skills: decisões recíprocas completas (15 itens);
- HTML estático: links de navegação, estados `aria-current`, menu responsivo, tabelas com rolagem horizontal, anexos com texto alternativo e controles nativos `details/summary` conferidos;
- inspeção visual: capa e anexo limpo da figura PAZ aprovados. O navegador remoto não alcança a prévia `localhost`, portanto não se declara inspeção visual real das páginas em viewport desktop/mobile.

A branch está pronta para revisão humana. Não houve merge, push ou deploy.

## Arquivos centrais

- `sopas-inventario.ts`: banco oficial preservado;
- `cobertura-sopas.ts`: matriz funcional item a item;
- `auditoria-questoes-existentes.ts`: auditoria dos 68 IDs;
- `questoes-derivadas.ts`: 13 novas preparatórias;
- `simulados.ts`: três simulados inéditos;
- `anexos-inventario.json`: ativos, tamanhos e hashes;
- `perfil-cobranca.json`, `matriz-cobertura.json`, `fontes-manifesto.json`, `figuras.json` e `ESTADO_DO_CURSO.json`: estado canônico da família.

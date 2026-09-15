# Modalidades de estudo — contrato 1.0.0

## Decisão arquitetural

Uma matéria nova é uma **família** com três cursos editoriais concretos. O slug da família é usado
na descoberta e na tela de escolha; cada variante recebe um slug estável:

| Modalidade de estudo | ID | Slug concreto |
|---|---|---|
| Rápido | `rapido` | `<familia>--rapido` |
| Pra Safar | `pra-safar` | `<familia>--pra-safar` |
| Completo | `completo` | `<familia>--completo` |

Essa composição reutiliza as rotas, os bundles e o isolamento por curso já existentes. Os três
cursos têm conteúdo, sequência e progresso próprios. A descoberta agrupa os três em um único card e
o seletor expõe finalidade, abrangência e duração antes da escolha.

Cursos sem o bloco `estudo` são legados. Eles são normalizados em memória como famílias com apenas
`completo`; seus arquivos, slugs, rotas e chaves persistidas não são alterados.

## Contrato pedagógico

- **Rápido:** revisão concentrada do núcleo mais relevante, com pré-requisitos indispensáveis,
  relações críticas, fórmulas ou procedimentos essenciais, comparações, erros e testes ativos.
- **Pra Safar:** todo o conteúdo examinável sustentado pelo corpus, aprofundado na proporção do
  perfil de cobrança, sem expansões enciclopédicas.
- **Completo:** todo o Pra Safar, mais mecanismos, condições, exceções, derivações, integrações e
  conexões úteis sustentadas pelas fontes.

Modalidade altera extensão, abrangência, profundidade, adjacências, tempo e finalidade. Ela não
altera artificialmente a dificuldade. Nenhuma interface ou metadado pode prometer nota.

## Matriz, perfil e fontes

Antes da autoria, a família mantém em `src/data/cursos/_familias/<familia>/`:

- `perfil-cobranca.json`: oito dimensões, evidências localizadas e incertezas;
- `matriz-cobertura.json`: `concept_id`, dependências, fontes/localizações, prioridade, presença,
  profundidade, justificativa e vínculos pedagógicos;
- `questoes.ts`: objetos canônicos compartilhados pelas variantes.

PDF, ODP e PPTX do mesmo deck contam como um testemunho. Provas anteriores orientam o DNA da
cobrança, sem virar paráfrases de questões novas. Campo sem evidência permanece pendente.

## Questões

Cada questão nova declara `conceptIds` e `modalidades`. O filtro usa somente esses campos e os
conceitos ensinados na variante. Dificuldade não participa da seleção. Quando uma questão aparece em
mais de uma modalidade, o mesmo objeto canônico preserva ID, enunciado, gabarito e metadados.

## Persistência e migração

O progresso continua em `localStorage` `bussola:v1`, indexado pelo slug concreto. Assim, as três
variantes novas são independentes sem criar outra chave global. Cursos legados mantêm o slug antigo,
que passa a significar a variante `completo` por camada de compatibilidade. Nada é copiado, apagado,
renomeado ou sobrescrito.

O Caderno continua em `bussola-cadernos` e no fallback `bussola:v1:cadernos:<curso>`. Variantes novas
usam seus slugs concretos; cursos antigos permanecem no mesmo identificador.

## Scaffold e estado de publicação

`npm run create-course <familia> "Título"` cria as três variantes e os artefatos compartilhados.
O scaffold nasce em `rascunho`, com duração nula e marcadores `PENDENTE`. Ele prepara estrutura, mas
não inventa conteúdo. `validate-content` impede publicação até que:

1. perfil e matriz estejam confirmados e localizados nas fontes;
2. as três variantes estejam presentes e coerentes;
3. durações tenham sido calculadas do conteúdo real;
4. módulos e questões estejam vinculados por `concept_id`;
5. nenhum marcador pendente permaneça.

## Compatibilidade com skills complementares

O manifesto versionado fica nas skills de autoria, não no runtime do aluno. Toda skill nova ou
alterada precisa de auditoria de domínio, capacidade, precedência e impacto antes da integração. Ela
nunca pode revogar fidelidade às fontes, rastreabilidade, dificuldade, segurança, estado ou parada.

## Validação e inspeção

Além dos validadores usuais, conferir agrupamento na hierarquia, seletor por teclado, paridade
desktop/celular, isolamento de progresso, identidade das questões compartilhadas e ausência de
conteúdo fora do escopo. O inventário anterior à migração fica em
`docs/migrations/modalidades-legado-base.json`.

`npm run validate-sync` valida os pacotes de ida e volta contra o JSON Schema e confirma que o
modelo recíproco decide exatamente todas as regras e artefatos recebidos.

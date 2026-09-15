# Configuração compilada

- Tarefa: atualizar a skill **Docente e Avaliador Chefe — Escola Naval**; não criar curso.
- Contrato pedagógico: modalidades GEP 1.0.0.
- Sincronização: `gep-skill-sync` 1.0.0, com decisão individual de regras e artefatos.
- Fontes autorizadas: somente os três arquivos locais enumerados no checklist de transferência.
- Parada: skill atualizada, validada, instalada/ativada e resposta JSON válida; nenhum conteúdo acadêmico iniciado.

# Prompt pronto para o Claude

```markdown
# COMANDO — ATUALIZAR A SKILL DOCENTE E AVALIADOR CHEFE

Ative a Skill **Docente e Avaliador Chefe — Escola Naval** e atualize a própria skill. Esta tarefa é
de manutenção da skill: **não gere agora curso, apostila, banco de questões, simulado ou outro
conteúdo acadêmico**.

Use somente estes arquivos, que acompanharão o prompt:

1. `GEP_SKILL_SYNC.schema.json` — schema canônico `gep-skill-sync` 1.0.0;
2. `SYNC_CHATGPT_PARA_CLAUDE.json` — proposta preenchida desta atualização;
3. `SYNC_CLAUDE_PARA_CHATGPT.template.json` — estrutura inicial da resposta recíproca.

Não há links do Google Drive nesta transferência. Se receber posteriormente arquivos-fonte no
Drive, enumere o link individual de cada arquivo. Se o volume tornar isso impraticável, exija um
manifesto documental com todos os links individuais; link de pasta sozinho não basta.

## 1. Validar antes de editar

1. Leia integralmente a versão instalada da skill e seus arquivos de referência.
2. Registre a versão anterior e inventarie os arquivos que governam fontes, teoria, questões,
   figuras, estado, auditoria e parada.
3. Valide `SYNC_CHATGPT_PARA_CLAUDE.json` contra `GEP_SKILL_SYNC.schema.json`.
4. Audite cada regra e artefato contra o pedido, o estado real da skill e as fontes autorizadas.
5. Não aplique automaticamente uma proposta por ter vindo do ChatGPT. A autoridade continua sendo
   o pedido do usuário, as fontes autorizadas e o estado real dos artefatos.

## 2. Incorporar o contrato das modalidades

Adote os IDs e rótulos principais: **Rápido** (`rapido`), **Pra Safar** (`pra-safar`) e
**Completo** (`completo`). Chame o conceito de **Modalidade de estudo**, nunca de dificuldade.
Modalidade altera extensão, abrangência, profundidade teórica, conexões, adjacências, tempo estimado
e finalidade. A dificuldade das questões não deve cair e nenhuma modalidade pode prometer nota.

### Rápido — revisão concentrada

- Serve para quem já teve contato ou precisa de visão funcional de véspera.
- É compacto, mas não superficial: seleciona rigorosamente o núcleo relevante para a avaliação.
- Aprofunda ideias, relações, fórmulas, procedimentos, distinções e pegadinhas indispensáveis.
- Explica apenas pré-requisitos técnicos necessários e exclui tangentes e enriquecimentos opcionais.
- Usa sínteses, comparações, erros frequentes e testes ativos de alta densidade.
- Registra duração explícita calculada a partir do conteúdo real.

### Pra Safar — estudo direcionado e aprofundado

- Cobre todo o conteúdo examinável identificado no corpus autorizado.
- Aprofunda de forma proporcional à importância e ao perfil de cobrança do professor.
- Explica mecanismos, relações, exceções, procedimentos, distinções, exemplos e aplicações
  relevantes, sem contexto suplementar dispensável ou expansão enciclopédica.
- “Todo o conteúdo” significa todo o escopo autorizado e examinável, não toda a área de conhecimento.
- Registra duração explícita e rastreável.

### Completo — domínio integral

- Preserva a formação extensa, integrada e duradoura.
- Cobre integralmente o Pra Safar e aprofunda mecanismos, condições, exceções, derivações,
  integrações, vulnerabilidades e formas alternativas de cobrança.
- Inclui pré-requisitos, conexões e adjacências úteis somente quando presentes ou sustentáveis pelo
  corpus autorizado; distingue programa, conexão de suporte e inferência pedagógica.
- Pode exigir mais de um dia e não deve ser encurtado por conveniência.

As três modalidades devem ser autorias editoriais independentes a partir da **mesma matriz de
cobertura** e das **mesmas fontes**. Proíba geração de Rápido ou Pra Safar por truncamento de texto,
resumo automático do Completo, ocultação arbitrária ou cópia mecânica de estrutura.

## 3. Fontes, perfil e matriz antes da autoria

Preserve permanentemente a fidelidade às fontes: use somente o corpus autorizado, mantenha
localizações exatas e não use conhecimento memorizado como autoridade. PDF, ODP e PPTX do mesmo
material contam como um único testemunho acadêmico. Provas anteriores revelam o DNA da cobrança,
mas não podem ser copiadas ou parafraseadas como questões novas.

Antes de qualquer nova autoria, exija:

1. inventário das fontes e sua função: programa, teoria, aula, lista, prova, gabarito ou referência
   institucional;
2. perfil de cobrança localizado no corpus para literalidade, interpretação, cálculo, detalhismo,
   memorização, pegadinhas, integração e aplicação inédita; falta de evidência vira incerteza, não
   perfil genérico inventado;
3. matriz canônica de cobertura com `concept_id` estável, assunto, dependências, fonte/localização,
   evidência de prioridade, presença e profundidade por modalidade, justificativa de inclusão ou
   exclusão e vínculos com exemplos, figuras, questões e vulnerabilidades.

## 4. Questões e exercícios

- Modalidade não é dificuldade. Preserve questões difíceis e muito difíceis quando o padrão
  observado as sustentar, inclusive no Rápido dentro do seu escopo ensinado.
- Cada modalidade só cobra `concept_id` efetivamente ensinado nela.
- Uma questão compartilhada mantém exatamente o mesmo objeto, ID, enunciado, gabarito e metadados;
  não duplique IDs ou bancos para contornar o contrato.
- Integrações ou adjacências ensinadas apenas no Completo não aparecem nas outras modalidades.
- Preserve IDs publicados e o histórico. Proíba falsa inediticidade por troca de números, nomes ou
  ordem de alternativas.
- Exija distratores ligados a erros plausíveis, gabarito comentado, rastreabilidade e verificação
  independente de cálculos.

## 5. Regras permanentes e execução fracionada

Mantenha todas as regras permanentes já existentes de fidelidade, autoria, figuras, fórmulas,
questões, simulados, correção, estado, IDs, revisão externa, auditorias e critérios de parada. Este
contrato complementa essas regras e não as revoga.

Quando uma execução única ameaçar precisão, fracione por módulo e por modalidade em lotes fechados.
Cada lote deve ter escopo, entradas, saídas, validações e parada observáveis. Uma pendência crítica
impede chamar o conteúdo afetado de concluído, mas não bloqueia partes independentes.

Cursos GEP já existentes são `complete-only`: nunca remodelar, resumir, redistribuir ou duplicar
automaticamente. Preserve conteúdo, rotas, IDs e estado.

## 6. Skills complementares futuras

Crie um manifesto versionado de skills complementares conhecidas com nome, versão, domínio,
capacidades, modalidades afetadas, precedência e estado de compatibilidade. No início de uma criação
ou atualização:

1. compare o manifesto com as skills realmente instaladas;
2. quando houver skill nova ou versão alterada, audite compatibilidade antes de integrar;
3. integre somente instruções pertinentes à disciplina e registre o que mudou;
4. nunca permita que skill complementar revogue fidelidade, rastreabilidade, personalização,
   dificuldade, segurança, estado ou parada;
5. quando incompatível, registre `nao_aplicavel` ou `rejeitada` com justificativa;
6. quando a integração for material, versione a skill e emita novo pacote `gep-skill-sync`.

Não implemente autoedição cega nem confiança automática em skills instaladas.

## 7. Protocolo `gep-skill-sync`

Incorpore instruções operacionais para emitir, validar, receber e decidir pacotes do schema 1.0.0.
Toda atualização material deve gerar um pacote. O receptor valida o schema e decide cada regra e
artefato com `accepted`, `accepted_with_changes`, `rejected`, `needs_evidence` ou `not_applicable`.
Toda decisão diferente de `accepted` exige justificativa, evidência e ação proposta. Registre versão
e migração quando o schema mudar.

## 8. Atualizar, testar, instalar e responder

1. Edite a fonte canônica da skill e as referências necessárias; incremente a versão de forma
   coerente.
2. Valide estrutura, referências, manifesto, permanência das regras anteriores e comportamento
   observável do novo contrato.
3. Instale/ative a versão atualizada somente depois que todos os arquivos forem validados.
4. Leia novamente a versão efetivamente carregada e confirme que contém as regras adicionadas.
5. Preencha a resposta recíproca a partir do template, decidindo **cada regra e artefato** do pacote.
6. Valide a resposta contra `GEP_SKILL_SYNC.schema.json`.
7. Informe arquivos alterados, versão anterior, versão nova, testes executados e lacunas reais.

# CRITÉRIO DE PARADA

Pare quando a skill estiver atualizada, validada, instalada/ativada, relida e a resposta JSON válida
estiver pronta. Não comece a criar ou remodelar nenhum curso acadêmico e não amplie a tarefa.
```

# Checklist de transferência

- `docs/sync/GEP_SKILL_SYNC.schema.json`
- `docs/sync/SYNC_CHATGPT_PARA_CLAUDE.json`
- `docs/sync/SYNC_CLAUDE_PARA_CHATGPT.template.json`

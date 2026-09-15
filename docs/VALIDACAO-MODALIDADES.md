# Validação — modalidades de estudo

Data: 2026-09-14
Branch: `feat/modalidades-estudo`

## Resultado automatizado

- `npm test`: 17 arquivos e 117 testes aprovados.
- `npm run validate-content`: 9 cursos validados, sem erros ou avisos.
- `npm run validate-sync`: envelopes de ida e volta válidos; 15 decisões recíprocas presentes.
- `npm exec astro check`: sem erros ou avisos; 4 sugestões informativas preexistentes.
- `npm run build`: compilação concluída; 282 páginas geradas.
- `npm run audit-media`: concluído; 43 arquivos pesados preexistentes, totalizando 1090,6 MB; nenhuma mídia foi adicionada por esta alteração.
- `python3 scripts/audit_gep.py . --include-files`: 1.354 arquivos, 9 cursos e 106 módulos, sem alertas estruturais.
- `git diff --check`: aprovado.

## Compatibilidade e isolamento

- O inventário legado permaneceu em 9 cursos, 106 módulos, 732 questões e 528 itens de checklist.
- Slugs e chaves de progresso dos cursos existentes foram preservados.
- Cursos legados sem o novo contrato são normalizados em memória como modalidade completa, sem migração destrutiva.
- O progresso das três modalidades é isolado pelo slug concreto de cada variante.
- O scaffold isolado gerou três variantes, artefatos compartilhados e identificadores canônicos; os marcadores de rascunho bloquearam a publicação como previsto.
- Uma família temporária foi compilada com sucesso e removida depois do teste; nenhum curso novo integra esta entrega.

## Verificações de interface

- A saída estática confirmou três opções de modalidade, duração, finalidade, abrangência, semântica acessível de navegação, estado atual e comportamento responsivo por classes.
- O curso legado permaneceu sem seletor e com indicação de modalidade completa.
- A inspeção visual interativa em navegador não pôde ser concluída porque o ambiente bloqueou endereços locais (`ERR_BLOCKED_BY_CLIENT`).

## Skills

- As três Skills foram atualizadas localmente para `2.0.0` e validadas com `quick_validate`.
- O contrato compartilhado de modalidades tem bytes idênticos nas Skills Docente e Operate GEP.
- A publicação no repositório remoto de Skills permanece pendente: o endpoint devolveu HTTP 422, portanto a reinstalação/leitura global ainda aponta para a versão anterior.

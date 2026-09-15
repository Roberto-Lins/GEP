# DIR-T2 — registro de autoria e validação

Data: 15 de setembro de 2026 · Branch local: `feat/dir-t2` · Revisão-base: `4a1891fe52a4f489e84742b023e14597a6394166` (mesma do snapshot auditado na transferência). Nada foi publicado, enviado ou mesclado.

## Linha de base (antes da alteração)

- `npm run validate-content`: 0 erros, 0 avisos.
- `npx vitest run`: 18 arquivos, 121 testes aprovados.
- `npm run validate-math`: **46 erros preexistentes** (det-t2, fas, rel) — fora do escopo.
- `npm ci`: falha preexistente por `package-lock.json` fora de sincronia; dependências instaladas com `npm install` e lockfile restaurado sem alteração.

## Resultado após a família DIR-T2

| Verificação | Resultado |
|---|---|
| `npm run validate-content` | 0 erros, 0 avisos; família `dir-t2` validada (perfil e matriz no schema, vínculos questão ↔ conceito ↔ modalidade, seleção por variante) |
| `npx vitest run` | 19 arquivos, 129 testes aprovados (8 novos em `_familias/dir-t2/questoes.test.ts`) |
| `npm exec astro check` | 0 erros, 0 avisos, 4 sugestões preexistentes |
| `npm run build` | 377 páginas (55 da família DIR-T2) |
| `npm run validate-sync` | aprovado |
| `npm run audit-modalidades` | 15 cursos; `dir-t2--rapido` 13 módulos/146 questões, `dir-t2--pra-safar` 13/151, `dir-t2--completo` 13/154; legado `dir` 10/100 inalterado |
| `npm run audit-media` | nenhuma mídia nova pesada; maior arquivo novo: capa.webp (≈ 39 KB) |
| `npm run validate-math` | continua com os mesmos 46 erros preexistentes; **0 erros** na família; avisos heurísticos (“possível fórmula linear”) em texto jurídico com travessões e setas, sem fórmulas |
| Links e assets internos (HTML gerado) | 55 páginas, 2.288 referências, 0 quebradas |
| Busca negativa (conteúdo, questões, simulados, matriz, figuras e HTML gerado) | 0 ocorrências de temas excluídos da Aula 4.2 após o slide 7 |
| IDs duplicados | 0 (188 IDs: 154 de módulo + 34 de simulado) |
| Compilação MDX isolada (`@mdx-js/mdx`) | 0 erros |
| `scripts/audit_gep.py` | **NÃO EXECUTADO** — o script não existe no repositório recebido |

## Inspeção visual

Capturas com Chromium (Playwright) servindo `dist/` localmente: listagem 4º ano/2º semestre/T2, seletor da família (desktop e 390 px), home do Completo, módulo 06 Completo, módulo 09 Pra Safar, módulo 11 Rápido, simulados Pra Safar, banco Rápido, revisão final Completo, módulo 10 Pra Safar (390 px), figura V1 e bloco de exercícios. Status HTTP 200, 0 imagens quebradas, 0 rolagem horizontal. O único erro de console é o bloqueio de fontes externas pelo proxy do ambiente (`ERR_TUNNEL_CONNECTION_FAILED`), sem relação com a família. Navegação por teclado e leitores de tela **não** foram testados.

## Auditoria de independência entre modalidades

Sobreposição máxima de 6-gramas entre modalidades no mesmo módulo: 13,1% (módulos 07 e 11, por transcrição literal de tipos penais e da CF). Estado: **aprovado_com_ressalvas**. Nenhum script prova independência pedagógica; algumas aulas reaproveitam, de propósito, cenários do banco canônico. Revisão humana recomendada.

## Pendências reais

1. `8 Aula 3.1.pptx` não baixado: numeração física reconstruída e validada por contagem; conteúdo visual de sete slides não recuperado.
2. Print do professor não recebido.
3. Jurisprudência oficial (STM e STF) não acessível por robots.txt: marcada `[NÃO CONFIRMADO NA FONTE PRIMÁRIA]`.
4. DGPM-315, NORDINAVRIO 02-1, norma da sindicância e Lei 8.457/1992 citadas nos slides e não fornecidas.
5. Capa e thumbnail provisórias (geradas por código, sem IA); convenção do repositório prevê arte do Codex.
6. Revisão e aprovação do usuário antes de commit, merge ou publicação.

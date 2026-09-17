# TEMPLATE-CURSO.md — Modelo de documentação de um curso

> Copie este arquivo para `docs/courses/<SLUG>.md` ao criar um curso novo e preencha.

# <Título da família de curso>

Família: `<familia>`. Variantes: `<familia>--rapido`, `<familia>--pra-safar` e
`<familia>--completo`. Dados canônicos: `src/data/cursos/_familias/<familia>/`.

## Evidência anterior à autoria

- Perfil de cobrança: `perfil-cobranca.json`, confirmado e localizado nas fontes.
- Matriz canônica: `matriz-cobertura.json`, com `concept_id`, presença, profundidade e justificativa.
- Banco compartilhado: `questoes.ts`, preservando o mesmo objeto e ID entre modalidades.

## Timeline

| ordem | slug | prioridade | tempo |
|-------|------|-----------|-------|
| 0 | 00-... | alta | ?? min |
| 99 | 99-revisao-final | máxima | ?? min |

## Banco de questões

`src/data/cursos/_familias/<familia>/questoes.ts`: N múltipla, N V/F, N correlacione. IDs estáveis.
Cada variante filtra por `concept_id` e escopo ensinado, nunca por redução de dificuldade.

## `features`

```jsonc
{ "timeline": true, "simulados": true, "mapasMentais": false, "podcasts": false,
  "animacoesHero": false, "animacoesTransicao": false,
  "modoRevisaoVespera": false, "graficoProgressoAvancado": false,
  "verRespostaAntes": false }
```

## Mídia

`public/{...}/cursos/<slug>/`. Pesada → CDN/YouTube (registrar `origem`+`src` no `_dados.json`).

## Checklist de criação

- [ ] `npm run create-course <familia> "Título"`
- [ ] perfil de cobrança e inventário de fontes confirmados
- [ ] matriz canônica confirmada antes da autoria
- [ ] três `_config.json` publicados, com duração real e metadados familiares idênticos
- [ ] sequências próprias para Rápido, Pra Safar e Completo
- [ ] `.mdx` + `_dados.json` de cada matéria, ligados por `concept_id`
- [ ] questões compartilhadas preservam identidade e dificuldade
- [ ] imagens leves em `public/imagens/cursos/<familia>/`
- [ ] mídia pesada externalizada
- [ ] `npm run validate-content` passa
- [ ] família e seletor aparecem no dashboard; teclado, leitor de tela e celular conferidos

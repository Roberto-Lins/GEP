# TEMPLATE-CURSO.md — Modelo de documentação de um curso

> Copie este arquivo para `docs/courses/<SLUG>.md` ao criar um curso novo e preencha.

# <Título do curso>

Slug: `<slug>`. Tema visual: `<temaVisual>`. Config: `src/content/cursos/<slug>/_config.json`.
Dados: `src/data/cursos/<slug>/`.

## Timeline

| ordem | slug | prioridade | tempo |
|-------|------|-----------|-------|
| 0 | 00-... | alta | ?? min |
| 99 | 99-revisao-final | máxima | ?? min |

## Banco de questões

`src/data/cursos/<slug>/exercicios.ts`: N múltipla, N V/F, N correlacione. IDs estáveis.

## `features`

```jsonc
{ "timeline": true, "simulados": true, "mapasMentais": false, "podcasts": false,
  "animacoesHero": false, "animacoesTransicao": false,
  "modoRevisaoVespera": false, "graficoProgressoAvancado": false }
```

## Mídia

`public/{...}/cursos/<slug>/`. Pesada → CDN/YouTube (registrar `origem`+`src` no `_dados.json`).

## Checklist de criação

- [ ] `npm run create-course <slug>`
- [ ] `_config.json` preenchido
- [ ] mini-matérias `00-…` … `99-revisao-final`
- [ ] `.mdx` + `_dados.json` de cada matéria
- [ ] imagens leves em `public/imagens/cursos/<slug>/`
- [ ] mídia pesada externalizada
- [ ] `npm run validate-content` passa
- [ ] aparece no dashboard

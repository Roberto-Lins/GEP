# GEP — Gestão Pública (P1)

Curso real da plataforma. Tema visual `naval-command` (antiga identidade "GEP Command Deck").
Config: `src/content/cursos/gep/_config.json`. Dados: `src/data/cursos/gep/`.

## Timeline

| ordem | slug | prioridade | tempo |
|-------|------|-----------|-------|
| 0 | 00-ideia-central-da-prova | alta | 15 min |
| 1 | 01-estado-governo-administracao-governanca | alta | 45 min |
| 2 | 02-weber-e-burocracia | muito alta | 60 min |
| 3 | 03-patrimonialismo-e-disfuncoes-burocraticas | muito alta | 50 min |
| 4 | 04-organizacoes-mecanicistas-e-organicas | alta | 40 min |
| 5 | 05-modelos-de-administracao-publica | muito alta | 60 min |
| 6 | 06-reformas-administrativas-no-brasil | alta | 55 min |
| 7 | 07-pdrae-e-reforma-de-1995 | **máxima** | 75 min |
| 8 | 08-ppa-ldo-loa-e-despesa-publica | muito alta | 60 min |
| 9 | 09-orcamento-de-defesa | alta | 45 min |
| 10 | 10-sistema-de-governanca-da-mb | alta | 50 min |
| 99 | 99-revisao-final | **máxima** | 90 min |

## Banco de questões

`src/data/cursos/gep/exercicios.ts`: 60 múltipla escolha (`me-01`…`me-60`), 40 V/F
(`vf-01`…`vf-40`), 5 grupos correlacione (`cor-01`…`cor-05`). Cada questão tem `topico` (slug).

## Seções por mini-matéria

`index, aula, resumo, comparacoes, pegadinhas, exercicios, respostas-comentadas, checklist,
referencias` (.mdx). A `99-revisao-final` usa: `resumo-geral, mapa-da-prova, erros-frequentes,
revisao-de-vespera, simulado-multipla-escolha, simulado-vf, simulado-correlacione, gabarito-geral`.

## `features` do GEP

```jsonc
{ "timeline": true, "simulados": true, "mapasMentais": true, "podcasts": true,
  "animacoesHero": true, "animacoesTransicao": false,
  "modoRevisaoVespera": true, "graficoProgressoAvancado": false }
```

## Mídia

`public/{podcasts,videos,mapas-mentais,arquivos}/cursos/gep/`. Podcasts e vídeos pesados ainda
locais (pendente externalização — ver `docs/MEDIA-PROTOCOL.md`).

# ADR 0009 — Árvore genérica `courses / structures / nodes / content`

**Status:** Aceito · **Fase:** 0 (decisão) · implementação em fases futuras

## Contexto
Dada a separação curso ≠ estrutura (ADR 0008), o núcleo precisa representar **qualquer** organização
de estudo, recursivamente, sem nomes de domínio embutidos.

## Decisão
O modelo futuro terá quatro camadas genéricas:

```
courses            (espaço com dono)
  └─ structures    (trilha/organização de um autor; N por curso)
       └─ nodes    (árvore recursiva: parent_id self-FK; pasta|subpasta|seção|módulo|tópico|página)
            └─ content_documents / blocks   (resumo/aula; community = blocos sanitizados)
```

`nodes.kind` é um **tipo controlado** (enum) e `nodes.title` é livre (escolhido pelo usuário).
Profundidade limitada por CHECK; ordenação por `order`.

## Motivos
- Suporta árvores arbitrárias (Medicina, concursos, estudo pessoal, engenharia…) sem schema por domínio.
- A hierarquia da Escola Naval vira **apenas dados** dentro de uma estrutura.

## Consequências
- Decisões da Fase 1 **não podem** impedir esse modelo (ex.: nada de tabelas `school_years`).
- Navegação `/ano/...` futura passará a consultar `nodes`, preservando a UX.

## Riscos
- Árvores recursivas exigem cuidado de performance/limites → CHECK de profundidade + índices por
  `parent_id`/`structure_id`.

## Alternativas consideradas
- **Tabelas específicas por nível:** rígidas; descartadas (ADR 0008).

# Architecture Decision Records (ADR)

Registros curtos das decisões arquiteturais da evolução da Bússola (site estático →
plataforma colaborativa multiusuário). Cada ADR segue: **Contexto · Decisão · Motivos ·
Consequências · Riscos · Alternativas**.

A referência arquitetural completa é [`../PLANEJAMENTO-EVOLUCAO-BUSSOLA.md`](../PLANEJAMENTO-EVOLUCAO-BUSSOLA.md).

| # | Decisão | Status |
|---|---------|--------|
| [0001](0001-astro-hibrido.md) | Astro híbrido (não reescrever em Next) | Aceito |
| [0002](0002-supabase-plataforma.md) | Supabase como plataforma (Postgres + Auth + Storage) | Aceito |
| [0003](0003-postgres-rls.md) | PostgreSQL + Row-Level Security (defesa em profundidade) | Aceito |
| [0004](0004-conteudo-curated-vs-community.md) | Dois tiers de conteúdo: `curated` × `community` | Aceito |
| [0005](0005-autorizacao-no-servidor.md) | Autorização obrigatória no servidor (front = só UX) | Aceito |
| [0006](0006-proibir-codigo-arbitrario-ugc.md) | UGC nunca executa MDX/JSX/JS arbitrário | Aceito |
| [0007](0007-preservar-rotas-e-conteudo.md) | Preservar rotas, URLs e conteúdo curado atuais | Aceito |
| [0008](0008-curso-vs-estrutura.md) | Curso ≠ estrutura criada por usuário | Aceito |
| [0009](0009-arvore-generica-de-conteudo.md) | Árvore genérica `courses/structures/nodes/content` | Aceito |
| [0010](0010-escola-naval-estrutura-do-roberto.md) | Escola Naval = estrutura do Roberto (curso privado por link), sem regra por slug | Aceito |

> ADRs descrevem decisões; o **escopo já implementado** está em
> [`../implementation/PHASE-01-AUTHENTICATION.md`](../implementation/PHASE-01-AUTHENTICATION.md).

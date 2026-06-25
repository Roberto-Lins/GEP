# ADR 0007 — Preservar rotas, URLs e conteúdo curado atuais

**Status:** Aceito · **Fase:** 1

## Contexto
Existem URLs canônicas (`/<curso>`, `/<curso>/<materia>`), navegação `/ano/[...segmentos]`, redirects
legados do GEP e conteúdo curado de alta qualidade. Quebrar isso destruiria SEO, links e o ativo
pedagógico.

## Decisão
A introdução de auth é **aditiva**. Todas as rotas profundas e redirects atuais **permanecem
intactas e pré-renderizadas**. Apenas a **página inicial `/`** é remodelada (vira landing pública),
com o campus atual movido para **`/estudar`** (mesma UX, novo caminho) — decisão de produto do
proprietário (ver ADR 0010).

## Motivos
- "Não reescrever / não quebrar o existente" é requisito explícito do brief.
- O conteúdo curado é o diferencial do produto.

## Consequências
- O botão "voltar ao menu de cursos" dentro de um curso passa a apontar para `/estudar`.
- Nenhuma mudança em `src/content/cursos/**`, `src/data/cursos/**`, `/ano`, `/[curso]`, redirects.
- Progresso em `localStorage` permanece a fonte de verdade nesta fase (migração para conta é fase futura).

## Riscos
- Mover o campus de `/` para `/estudar` pode confundir quem tinha `/` como entrada → mitigado por
  links claros a partir da landing e do `/app`, e por todas as rotas internas continuarem válidas.

## Alternativas consideradas
- **Manter o campus em `/`:** conflita com a decisão do proprietário de não exibir a Escola Naval na
  vitrine pública (ADR 0010).

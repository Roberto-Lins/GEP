# ADR 0010 — Escola Naval = estrutura do Roberto (curso privado por link); sem regra por slug

**Status:** Aceito · **Fase:** 1 (presentacional) · privacidade imposta em fase futura

## Contexto
Todo o conteúdo atual (GEP, HNV, DET, ING-4, OPN, FAS sob a navegação ano/turma) deve ser
interpretado como **a estrutura de estudos que o Roberto criou** dentro do espaço **Escola Naval**.
O proprietário decidiu que esse curso deve ser **privado, acessível por link**, e **não** aparecer
na página inicial pública.

## Decisão
1. A "Escola Naval" é tratada como **um curso da conta do Roberto** — não como uma regra especial da
   plataforma. **Nunca** existirá `if (slug === 'escola-naval' | 'gep' | …)` no código.
2. "Verificado/curado" e "privado/link" são **capacidades** (flags/RBAC/grants) atribuíveis a
   **qualquer** curso — administradas pela plataforma, não embutidas num slug.
3. **Fase 1 (presentacional):** a landing `/` **não** exibe a Escola Naval; o campus vive em
   `/estudar`, alcançável **por link**. A **privacidade imposta** (RLS/grants/SSR-gating do conteúdo)
   é **fase futura** — documentado como limitação, sem fingir controle de acesso real agora.

## Motivos
- Satisfaz simultaneamente: "tratar a EN como curso normal da minha conta" **e** "não criar regra
  permanente para a EN".
- Atende à decisão explícita do proprietário (sobrepõe o brief §13, que pedia destaque para a EN).

## Consequências
- Em Fase 2, a EN será uma linha em `courses` (`owner_id` = conta do Roberto, `content_kind=curated`,
  `visibility=private`), com a hierarquia como `structures/nodes`.
- O conteúdo curado continua **público de fato** enquanto é servido como arquivos estáticos — a
  privacidade real exige SSR-gating/grants (fase futura).

## Riscos
- Confundir "fora da vitrine" com "protegido" → **não confundir**: Fase 1 não impõe acesso; isso está
  registrado aqui e em `PHASE-01-AUTHENTICATION.md`.

## Alternativas consideradas
- **Hardcodar a EN como pública/destaque:** contraria a decisão do proprietário e o brief §22.
- **SSR-gating de todo o conteúdo curado já na Fase 1:** quebraria o modelo estático/curado e o escopo
  da fase; adiado.

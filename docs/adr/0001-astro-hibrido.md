# ADR 0001 — Manter Astro em arquitetura híbrida

**Status:** Aceito · **Fase:** 1

## Contexto
O projeto é Astro com `output` estático (SSG): landing, cursos curados (MDX + ilhas React),
temas por curso e URLs canônicas já estabelecidas. O novo objetivo exige identidade, sessões e
rotas autenticadas — que precisam de execução no servidor por requisição.

## Decisão
Evoluir o mesmo Astro para **`output: 'hybrid'`** com um **adapter** (Vercel). Páginas continuam
**pré-renderizadas por padrão**; apenas as rotas novas de auth/app fazem **SSR** via
`export const prerender = false`. **Não** reescrever o projeto em Next.js.

## Motivos
- Preserva todo o investimento: cursos curados, ilhas, temas, redirects, SEO.
- SSG continua para landing/conteúdo (performance/custo); SSR só onde há autenticação.
- Reescrita completa é proibida pelo brief sem justificativa — e não há justificativa.

## Consequências
- Surge um middleware de auth e uma fronteira clara estático × SSR.
- Deploy passa a exigir runtime (ver ADR sobre deploy/Vercel); GitHub Pages deixa de servir o app.
- Convivência de dois modos de render exige disciplina (marcar `prerender=false` explicitamente).

## Riscos
- Ecossistema de "app autenticado" em Astro é menos maduro que Next → mitigado com ilhas React
  para partes muito interativas; se uma área crescer demais, isolá-la como sub-app React sem trocar
  o framework do todo.

## Alternativas consideradas
- **Reescrever em Next.js:** descartado (custo alto, perda de investimento, proibido sem justificativa).
- **Backend separado + front estático:** mais peças para um time solo; adiado.

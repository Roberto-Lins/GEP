# Fase 1 — Protótipo autenticado

Estado: **implementado** (scaffold). Requer provisionar o Supabase para funcionar de ponta a ponta
(ver [`supabase/README.md`](../../supabase/README.md)). Referência: [planejamento](../PLANEJAMENTO-EVOLUCAO-BUSSOLA.md)
e [ADRs](../adr/README.md).

## Escopo implementado

- **Astro híbrido** (`output: 'hybrid'` + adapter Vercel). Todo o conteúdo atual continua
  pré-renderizado; só auth/app/api fazem SSR.
- **Landing pública** em `/` (visão colaborativa, sem destaque à Escola Naval). O **campus** atual
  (anos/turmas) foi para **`/estudar`** (alcançável por link). Todas as rotas profundas e redirects
  seguem intactos.
- **Autenticação por e-mail/senha:** cadastro → verificação de e-mail → login → recuperação →
  redefinição → logout. Formulários HTML nativos (funcionam sem JS).
- **Sessão segura:** cookies `httpOnly + Secure(prod) + SameSite=Lax`, geridos no servidor
  (`@supabase/ssr`); validação via `auth.getUser()`.
- **Middleware** que protege `/app/*`, redireciona logado para fora de `/login`–`/cadastro`, e aplica
  cabeçalhos de segurança nas respostas SSR.
- **Área autenticada:** `/app` (painel), `/app/perfil`, `/app/configuracoes`.
- **Banco:** tabela `profiles` + trigger de criação automática + `username_available()` + **RLS
  default-deny**.
- **Segurança:** CSP + headers (middleware p/ SSR, `vercel.json` p/ estático), anti-open-redirect,
  CSRF (SameSite + checagem de Origin), rate limiting best-effort, validação Zod, anti-enumeração.

## Arquivos e módulos principais

| Área | Arquivos |
|------|----------|
| Infra | `astro.config.mjs` (hybrid+vercel), `vercel.json`, `.github/workflows/ci.yml`, `src/env.d.ts`, `.env.example` |
| Supabase | `src/lib/supabase/{browser,server,admin,types}.ts`, `src/lib/env.ts` |
| Segurança | `src/lib/security/{headers,redirect,origin}.ts`, `src/lib/rate-limit.ts` |
| Validação | `src/lib/validation/auth.ts`, `src/lib/auth/messages.ts` |
| Middleware | `src/middleware.ts` |
| Páginas auth | `src/pages/{login,cadastro,recuperar-senha,redefinir-senha,verifique-email,termos}.astro` |
| Endpoints | `src/pages/api/auth/*.ts`, `src/pages/api/{me,perfil}.ts`, `src/pages/api/conta/senha.ts`, `src/pages/auth/callback.ts` |
| App | `src/pages/app/{index,perfil,configuracoes}.astro` |
| Landing/campus | `src/pages/index.astro` (landing), `src/pages/estudar.astro` (campus), `src/components/auth/AuthNav.tsx`, `src/components/layout/Header.astro` |
| Banco | `supabase/migrations/0001_init_profiles.sql`, `supabase/README.md` |
| Testes/CI | `src/lib/**/__tests__/*.test.ts`, `scripts/check-bundle-secrets.ts` |

## Dependências adicionadas

`@astrojs/vercel@^7` (Astro 4), `@supabase/supabase-js@^2`, `@supabase/ssr@^0.12`, `zod@^3`.
Scripts novos: `check` (astro check), `audit`, `check:secrets`.

## Variáveis de ambiente

| Var | Escopo | Uso |
|-----|--------|-----|
| `PUBLIC_SUPABASE_URL` | público | clients browser/server |
| `PUBLIC_SUPABASE_ANON_KEY` | público | clients browser/server |
| `SUPABASE_SERVICE_ROLE_KEY` | **segredo (servidor)** | client admin (checagem de username) |
| `APP_URL` | servidor | montar callbacks de e-mail |

Validadas em `src/lib/env.ts` (erro claro, sem vazar segredo). Ver `.env.example`.

## Migrações

`supabase/migrations/0001_init_profiles.sql`: `profiles`, triggers (`handle_new_user`,
`profiles_guard_immutable`), `username_available()`, `is_reserved_username()`, RLS default-deny.
Aplicar via SQL Editor ou `supabase db push` (ver `supabase/README.md`).

## Como rodar localmente

```bash
npm install
cp .env.example .env     # preencha com as chaves do seu projeto Supabase
npm run dev              # http://localhost:4321
```

O `npm run dev` faz SSR mesmo com o adapter Vercel. **Sem** `.env`, o build e a navegação pública
funcionam; os fluxos de auth exigem o Supabase provisionado.

## Como testar

```bash
npm run check        # typecheck (astro check) — 0 erros
npm run test         # vitest (RLS é pulado sem credenciais de teste)
npm run build        # gera .vercel/output (estático + função SSR)
npm run check:secrets# garante que a service role não está no bundle do cliente
npm audit --audit-level=critical
```

Verificação manual (smoke) feita nesta entrega: `/`, `/estudar`, `/login`, `/cadastro`,
`/recuperar-senha`, `/termos`, `/gep`, `/ano/4`, `/api/me` → 200; `/app` sem sessão → 302
`/login?next=%2Fapp`; headers de segurança presentes nas rotas SSR; POST cross-origin → 403.

## Segurança / riscos aceitos

- **Advisories HIGH do Astro 4.x** (X-Forwarded-Host, manipulação de URL via headers/CVE-2025-61925,
  XSS via server islands, leitura de arquivo no dev server). São **pré-existentes** ao Astro fixado;
  corrigidos só no Astro 5 (upgrade major, fora do escopo desta fase). Mitigações já no desenho:
  - redirecionamentos derivam de `APP_URL` + caminhos relativos same-origin (`safeRedirectPath`),
    nunca de headers de host;
  - **não** usamos *server islands*;
  - **RLS default-deny** é o backstop: mesmo que o middleware seja contornado, o banco nega acesso a
    linhas de outro usuário.
  - **Recomendação:** planejar upgrade para Astro 5 antes de abrir cadastro amplo. CI marca os HIGH
    como informativos e barra apenas CRITICAL.
- **CSP pragmática:** `script-src`/`style-src` ainda com `'unsafe-inline'` (necessário ao conteúdo
  curado atual), **sem** `'unsafe-eval'`. Endurecer com nonces quando o UGC chegar (ADR 0006).
- **Rate limiting** é best-effort em memória (não global em serverless); GoTrue já limita os
  endpoints de auth. Store durável é fase futura.

## Limitações restantes

- "Privado por link" da Escola Naval é **presentacional** (fora da vitrine); a **privacidade imposta**
  (SSR-gating/grants) é Fase 2+ (ADR 0010).
- Progresso continua em `localStorage` (migração para a conta é Fase 2).
- Sem upload de avatar (campo preparado; upload é fase futura).
- Termos/privacidade são rascunho (`/termos`) — documentos definitivos exigem validação jurídica.

## Próxima fase

Ver a proposta de Fase 2 no relatório / planejamento: `courses` + `course_members` + `progress`,
resolução de rota dinâmica preservando URLs, Escola Naval como curso `curated` privado da conta do
Roberto, migração `localStorage`→conta, e então a privacidade imposta + acesso por link.

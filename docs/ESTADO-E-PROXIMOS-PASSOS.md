# Estado do projeto & próximos passos — Fase 1 (auth)

**Atualizado em:** 25/06/2026 · **Branch:** `main` (`6a1629e`) · **Deploy:** Vercel `https://gep-taupe.vercel.app`

> Documento de retomada. Para a referência completa: [planejamento](PLANEJAMENTO-EVOLUCAO-BUSSOLA.md),
> [ADRs](adr/README.md), [doc da fase](implementation/PHASE-01-AUTHENTICATION.md).

## ✅ O que já está pronto e validado

- **Fase 0:** ADRs, doc conceitual (curso ≠ estrutura ≠ conteúdo), CLAUDE.md atualizado, `.env.example`, CI, `vercel.json`.
- **Fase 1 (código):** Astro híbrido + adapter Vercel; cadastro / verificação / login / recuperação / redefinição / logout; `/app`, `/app/perfil`, `/app/configuracoes`; landing `/` + campus `/estudar`; tabela `profiles` + trigger + **RLS default-deny**.
- **RLS validada AO VIVO** (`npm run verify:supabase`): anônimo negado, um usuário não lê/edita o perfil de outro, trigger cria o perfil no cadastro, `username_available` revogada de `anon`. **A segurança do banco está funcionando.**
- **Conteúdo curado, rotas, redirects e `localStorage` preservados** (236 páginas estáticas intactas).

## 🟡 Deploy na Vercel — resolvido

Três pegadinhas de deploy já corrigidas (commits):
1. `vercel.json` tinha `_comment` → a Vercel valida o schema estritamente. **Removido** (`ee5124b`).
2. Build rodava em Node 24 → adapter `@astrojs/vercel@7` faz fallback p/ `nodejs18.x` (aposentado). **Fixado Node 20.x** via `engines` (`f81d591`).
3. `APP_URL` ausente derrubava com 500 → agora `getAppOrigin()` cai para a origem da requisição (`5b1ca1a`).

## 🔴 PENDÊNCIA ABERTA — cadastro em produção falha

**Sintoma:** ao cadastrar em produção, volta para a página com **mensagem vermelha** (`?erro=falha`).
Isso significa: o endpoint **não conseguiu falar com o Supabase** — quase sempre **env var ausente
no build da Vercel**.

> ⚠️ O `.env` local **não** vai para a Vercel. A Vercel precisa das próprias env vars no painel, e as
> `PUBLIC_*` são "assadas" no **build** → setar **antes** + **Redeploy**.

### Plano de diagnóstico (próxima sessão)

1. **Enviar os commits novos:** `git push origin main` (precisa do `6a1629e`, que tem o log).
2. **Conferir as 4 env vars na Vercel** (Settings → Environment Variables, escopo **Production**):
   `PUBLIC_SUPABASE_URL`, `PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`,
   `APP_URL=https://gep-taupe.vercel.app`.
3. **Redeploy** (Deployments → ⋯ → Redeploy, sem cache).
4. Tentar o cadastro e ler **Deployment → Runtime Logs** a linha `[cadastro] …`:

| Linha no log | Causa | Conserto |
|---|---|---|
| `Variáveis de ambiente ausentes (público): PUBLIC_…` | var faltou no build | setar em **Production** + **Redeploy** |
| `Invalid API key` | chave errada/colada torta | recopiar a anon/service do painel Supabase |
| `signUp falhou: Signups not allowed` | cadastro desativado | Supabase → Auth → Providers → Email: habilitar signups |
| `signUp falhou: Email rate limit exceeded` | limite do e-mail built-in | esperar ou configurar SMTP |

### Outras config necessárias (Supabase → Authentication → URL Configuration)
- **Site URL:** `https://gep-taupe.vercel.app`
- **Redirect URLs:** `https://gep-taupe.vercel.app/**` **e** `http://localhost:4321/**`
- **Confirm email:** habilitado (necessário p/ o fluxo anti-enumeração).
- Templates de e-mail (opcional, mais robusto): usar `token_hash` (ver `supabase/README.md`).

> Se o cadastro for para "verifique seu e-mail" mas o e-mail **não chegar**: é o e-mail built-in do
> Supabase (limitado / vai pra spam). Conferir spam ou configurar SMTP próprio.

## Comandos úteis

```bash
npm run dev               # http://localhost:4321 (SSR local)
npm run check             # typecheck (0 erros)
npm run test              # vitest (RLS pula sem credenciais de teste)
npm run build             # .vercel/output (estático + função SSR)
npm run verify:supabase   # diagnóstico de RLS ao vivo (cria/apaga usuários descartáveis)
npm run check:secrets     # garante service role fora do bundle do cliente
```

## Git (commits desta frente)

```
6a1629e  log de diagnóstico no cadastro          ← HEAD (main)
5b1ca1a  APP_URL opcional (fallback p/ origem)
f81d591  Node 20.x para a Vercel
ee5124b  vercel.json sem _comment
73e586d  hardening RLS + verify:supabase
fc62a4c  Primeira atualização backend (bulk)
77f9f39  (base — antes do backend)
```

## Próximos passos / Fase 2 (quando o cadastro estiver ok)

1. Fechar o cadastro em produção (acima).
2. Testar ponta a ponta: cadastro → e-mail → login → recuperação → logout.
3. **Fase 2:** `courses` + `course_members` + `progress`; Escola Naval como **curso `curated` privado**
   da conta do Roberto (hierarquia vira `structures/nodes`, sem regra por slug); migração
   `localStorage` → conta; só então **privacidade imposta + acesso por link**.

> Infra: Supabase ref `ebbizegnplrjsuppxoyl` · Vercel repo `Roberto-Lins/GEP`.

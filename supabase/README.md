# Supabase — provisionamento (Fase 1)

Esta pasta versiona as **migrações SQL**. O código (Astro) já está pronto; falta você
**provisionar o projeto Supabase** e preencher o `.env`. Passo a passo abaixo.

> Use **projetos separados** para desenvolvimento, homologação e produção. Nunca aponte
> o dev para o banco de produção.

## 1. Criar o projeto e pegar as chaves

1. Crie um projeto em <https://supabase.com/dashboard>.
2. Em **Project Settings → API**, copie:
   - **Project URL** → `PUBLIC_SUPABASE_URL`
   - **anon public** → `PUBLIC_SUPABASE_ANON_KEY`
   - **service_role** → `SUPABASE_SERVICE_ROLE_KEY` (⚠️ segredo; só no servidor)
3. Copie `.env.example` para `.env` e cole os valores. Defina `APP_URL`
   (`http://localhost:4321` em dev; a URL pública em produção).

## 2. Aplicar a migração

**Opção A — SQL Editor (mais simples):** abra **SQL Editor** no dashboard, cole o conteúdo de
`migrations/0001_init_profiles.sql` e execute.

**Opção B — Supabase CLI:**
```bash
supabase link --project-ref <ref-do-projeto>
supabase db push           # aplica as migrações desta pasta
```

A migração cria `public.profiles`, o trigger que cria o perfil no cadastro, a função
`username_available`, e a **RLS default-deny**.

## 3. Configurar a autenticação (Dashboard → Authentication)

- **Providers → Email:** habilite **"Confirm email"** (ESSENCIAL — o fluxo anti-enumeração do
  cadastro depende disso).
- **URL Configuration:**
  - **Site URL** = o valor de `APP_URL`.
  - **Redirect URLs:** adicione `APP_URL + /auth/callback`
    (ex.: `http://localhost:4321/auth/callback` e a URL de produção equivalente).

### Templates de e-mail (recomendado: fluxo `token_hash`)

Nosso callback (`/auth/callback`) aceita **os dois** formatos: PKCE (`?code=`) e
`token_hash` + `type`. O `token_hash` é mais robusto entre navegadores (não depende do cookie
`code_verifier`). Para usá-lo, edite os templates em **Authentication → Email Templates** e use
links no formato:

```
{{ .SiteURL }}/auth/callback?token_hash={{ .TokenHash }}&type=signup
```
(troque `type` por `recovery` no template de recuperação de senha).

Se preferir não mexer nos templates, o link padrão (PKCE) também funciona quando o usuário abre o
e-mail no mesmo navegador em que se cadastrou.

## 4. (Opcional) Regenerar os tipos

```bash
supabase gen types typescript --project-id <ref> --schema public > src/lib/supabase/types.ts
```

## 5. Testar a RLS (recomendado)

Com `PUBLIC_SUPABASE_URL`, `PUBLIC_SUPABASE_ANON_KEY` e duas contas de teste, rode:

```bash
SUPABASE_TEST_URL=... SUPABASE_TEST_ANON_KEY=... \
SUPABASE_TEST_USER_A=a@ex.com SUPABASE_TEST_PASS_A=... \
SUPABASE_TEST_USER_B=b@ex.com SUPABASE_TEST_PASS_B=... \
npm run test -- rls
```

Os testes verificam: A lê/edita só o próprio perfil; A **não** edita o de B; visitante anônimo não
lê perfis. Sem essas variáveis, o teste é **pulado** (não quebra o CI).

## Invariantes garantidos pela migração

- Senha **nunca** fica em `profiles` (fica no `auth.users`, com hash do GoTrue).
- `username` único, minúsculo, no formato `^[a-z0-9_]{3,30}$`, fora da lista de reservados.
- `id` e `created_at` **imutáveis**; `updated_at` automático.
- RLS **default-deny**: sem policy de INSERT/DELETE para usuários; SELECT/UPDATE só da própria linha;
  **sem leitura pública** nesta fase.

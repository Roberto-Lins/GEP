# ADR 0002 — Supabase como plataforma (Postgres + Auth + Storage + RLS)

**Status:** Aceito · **Fase:** 0/1

## Contexto
O `CLAUDE.md` original dizia "Evitar: backend, banco, login, Supabase" — coerente com o objetivo
**estático**. O objetivo mudou (multiusuário, UGC, permissões), o que **exige** backend + banco +
auth. A restrição precisa ser revisada deliberadamente, não violada em silêncio.

## Decisão
Adotar **Supabase** (PostgreSQL + Auth/GoTrue + Storage + RLS) como plataforma de dados/identidade,
contrariando o `CLAUDE.md` antigo **de propósito e com justificativa**. Manter **SQL padrão** e
evitar features proprietárias críticas para preservar portabilidade.

## Motivos
- Entrega numa peça o que o brief mais pede: RLS nativa, Auth completo (verificação, recuperação,
  OAuth, MFA), Storage com URLs assinadas.
- Evita escrever autenticação à mão — área de altíssimo risco para um time solo.
- Fica no ecossistema TypeScript; free tier cobre o protótipo.

## Consequências
- Introduz dependência de fornecedor e a necessidade de provisionar projetos (dev/homolog/prod).
- A **service role key** vira um segredo crítico (só servidor; ver ADR 0005).

## Riscos
- **Lock-in** → mitigado por SQL padrão e por baixo ser apenas Postgres + GoTrue + storage S3-like.
- **Confiar só no SDK do cliente** contra o banco é armadilha → por isso ADR 0005 (lógica no servidor).

## Alternativas consideradas
- **Auto-gerenciado** (Hono/Fastify + Neon + Lucia/Auth.js + R2): zero lock-in, porém muito mais
  superfície de segurança para configurar e manter. Reavaliar se independência virar requisito duro.

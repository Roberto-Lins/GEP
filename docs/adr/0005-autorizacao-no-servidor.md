# ADR 0005 — Autorização obrigatória no servidor; front é só UX

**Status:** Aceito · **Fase:** 1

## Contexto
Em SPAs é comum "esconder o botão" e achar que protegeu. Isso não é autorização. Com cadastro
aberto, toda a superfície OWASP aparece de uma vez.

## Decisão
Toda decisão de **autenticação e autorização** é validada **no servidor** (middleware + rotas SSR +
RBAC) **e** reforçada no banco (RLS — ADR 0003). O cliente apenas reflete o estado (UX). A
**service role key** vive **apenas no servidor**, nunca no bundle do navegador.

## Motivos
- IDOR, escalonamento de privilégio e bypass de UI deixam de ser possíveis só com devtools.
- Defesa em profundidade: app + banco precisam concordar.

## Consequências
- Sessão validada com `supabase.auth.getUser()` no servidor (não confiar em cookie decodificado no cliente).
- Clientes Supabase separados: **browser** (anon), **server** (anon + cookies de sessão), **admin**
  (service role, server-only, com guard contra uso no navegador).

## Riscos
- Esquecer uma checagem no servidor → mitigado por RLS `default-deny` e por centralizar a
  classificação de rotas (público × protegido) no middleware, sem checagens espalhadas.

## Alternativas consideradas
- **Autorização no cliente:** proibida pelo brief; descartada.

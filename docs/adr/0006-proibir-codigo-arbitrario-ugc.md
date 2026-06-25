# ADR 0006 — UGC nunca executa MDX/JSX/JavaScript arbitrário

**Status:** Aceito · **Fase:** 0 (decisão) · aplicação em fases futuras

## Contexto
O conteúdo curado usa MDX + componentes React (confiável, build-time). Conteúdo da **comunidade**
(UGC) será criado por qualquer usuário autenticado e renderizado em runtime.

## Decisão
Conteúdo de usuário **nunca** será MDX/JSX nem qualquer código executável. UGC é um **documento de
blocos** de tipos fixos (parágrafo, título, lista, citação, callout, divisor, imagem por referência,
tabela, código **apenas exibição**, math/KaTeX, embed só de provedores allowlisted, exercício
validado por schema). Cada bloco é validado por **schema Zod** na escrita e **re-sanitizado** na
renderização. Sem `dangerouslySetInnerHTML` de conteúdo de usuário sem sanitização; sem `<script>`
inline, HTML bruto, `<iframe>` livre ou URLs `javascript:`/`data:` não-allowlisted.

## Motivos
- Elimina por design RCE e XSS armazenado — o risco que destrói uma plataforma aberta.

## Consequências
- Os "widgets ricos" (calculadoras etc.) são fornecidos **pela plataforma** (catálogo oficial por ID),
  nunca injetados pelo usuário.
- CSP rígida (sem `unsafe-inline` para scripts) acompanha esta decisão quando o UGC entrar.

## Riscos
- Pressão por "mais liberdade de formatação" → responder com novos **tipos de bloco auditados**, não
  com HTML livre.

## Alternativas consideradas
- **Markdown/HTML sanitizado livre:** superfície de bypass de sanitização grande; descartado em favor
  de blocos fixos.

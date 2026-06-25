# ADR 0004 — Dois tiers de conteúdo: `curated` × `community`

**Status:** Aceito · **Fase:** 0 (decisão) · aplicação plena em fases futuras

## Contexto
Os cursos atuais são **MDX que importa componentes React arbitrários** (calculadoras, osciloscópios,
`WritingAnalyzer`), compilados em build por um mantenedor confiável. **É impossível** deixar usuários
finais escreverem MDX/JSX compilado pela plataforma — isso seria **RCE + XSS armazenado**.

## Decisão
Modelar todo conteúdo por um campo **`content_kind ∈ {curated, community}`**:

| | `curated` | `community` |
|---|---|---|
| Autor | mantenedor verificado | qualquer usuário autenticado |
| Formato | MDX + React (como hoje) | documento de **blocos** sanitizados, sem código |
| Onde vive | repositório (build) | banco (JSON), render por renderizador fixo + allowlist |
| Código | permitido (confiança) | **proibido** |

## Motivos
- É a espinha dorsal de segurança da plataforma aberta.
- Permite manter a riqueza do conteúdo curado sem expor a superfície de UGC.

## Consequências
- O caminho de renderização de UGC é **separado** do de MDX (allowlist de blocos + sanitização dupla).
- "Verificado/curado" é uma **capacidade administrável** (ADR 0010), não um `if (slug==='gep')`.

## Riscos
- Tentação de "só deixar Markdown" → Markdown bruto permite HTML perigoso; por isso **blocos** com
  schema Zod, não Markdown livre.

## Alternativas consideradas
- **MDX para todos:** inaceitável (RCE/XSS).
- **HTML sanitizado livre:** superfície de XSS grande demais; blocos fixos são auditáveis.

# Planejamento Técnico — Evolução da Bússola dos Aspirantes

**De:** plataforma de cursos estática (Astro + MDX, sem backend)
**Para:** plataforma colaborativa multi-usuário + rede social de estudos (autenticada, com banco de dados, conteúdo de usuário e moderação)

**Status deste documento:** diagnóstico e planejamento. Nenhuma alteração de código é proposta para execução imediata. Este é um documento vivo, pensado para ficar em `docs/` ao lado do `CLAUDE.md` e ser referenciado no Claude Code à medida que as fases forem aprovadas.

---

## 0. Sumário executivo (leia isto primeiro)

### 0.1 O que está sendo pedido, em uma frase

Transformar um site **estático, mono-mantenedor, sem autenticação** em um **SaaS multi-tenant com conteúdo gerado por usuários (UGC), permissões, moderação e camada social**. Isso não é uma evolução incremental: é uma **mudança de categoria de produto**. Vou ser direto sobre isso ao longo do documento, porque o pior erro aqui seria fingir que dá para chegar lá "ligando uns toggles".

### 0.2 Conflito explícito com o `CLAUDE.md` atual (precisa ser reconhecido, não ignorado)

O `CLAUDE.md` diz, textualmente: **"Evitar: Next.js, backend, banco de dados, login, autenticação, Supabase, Firebase, painel administrativo."**

Essa restrição **não era arbitrária** — ela era a consequência lógica do objetivo "site 100% estático". O objetivo mudou. Logo, a restrição precisa ser **revisada deliberadamente**, não violada em silêncio. As novas funcionalidades (cadastro, cursos privados, UGC, moderação) **exigem** exatamente backend + banco + autenticação + um painel administrativo. Não há caminho técnico honesto que entregue o pedido sem introduzir essas peças. O que dá para preservar é **como o conteúdo curado é escrito e renderizado**, **as URLs**, **os temas** e **o modelo de ilhas React** — e é isso que o plano protege.

### 0.3 A decisão arquitetural mais importante de todo o projeto

Existe uma tensão que precisa ser resolvida **antes** de qualquer linha de código, senão ela vira uma falha de segurança crítica mais tarde:

- Os cursos atuais (GEP, HNV, DET, ING-4, FAS) são **MDX que importa componentes React arbitrários** (`Explorer555.jsx`, calculadoras da DET, `WritingAnalyzer.tsx`). Isso é compilado **em build time** por um mantenedor confiável.
- **É impossível** deixar usuários escreverem MDX/JSX que seja compilado e executado pela plataforma. Isso seria **execução de código arbitrário (RCE)** e **XSS armazenado** — o tipo de buraco que destrói uma plataforma inteira.

**Conclusão:** a plataforma precisa de **dois tipos de conteúdo (`content_kind`)**, e essa distinção é a espinha dorsal de toda a arquitetura:

| Tipo | `content_kind = curated` | `content_kind = community` |
|------|--------------------------|----------------------------|
| Quem escreve | Mantenedores confiáveis (você / equipe verificada) | Qualquer usuário autenticado |
| Formato | MDX + React (como hoje) | Blocos estruturados / Markdown restrito, **sem código** |
| Onde vive | No repositório, compilado em build | No banco, renderizado por um renderizador fixo e auditado |
| Renderização | Pipeline atual (Astro/MDX) | Allowlist rígida de blocos + sanitização |
| Exemplo | Curso Escola Naval | Resumos e estruturas da comunidade |

O curso da Escola Naval será `curated`. **Isso não é uma "regra especial no código para a Escola Naval"** (que o brief proíbe). É uma **capacidade (flag) atribuível por administradores da plataforma a qualquer curso verificado**. Não existe `if (slug === 'gep')` em lugar nenhum — existe `if (course.content_kind === 'curated' && course.verified_at != null)`. Qualquer curso que os admins promoverem a "verificado/curado" renderiza pelo mesmo caminho. Isso satisfaz simultaneamente o item 5 ("tratar o curso da EN como um curso normal da minha conta") e o item 22 ("não criar regras especiais permanentes para a EN").

### 0.4 Stack recomendada (visão de 10 segundos)

```
Front-end        Astro híbrido (estático p/ landing + cursos curados; SSR p/ app autenticado)
                 + ilhas React (mantém o modelo atual)
Backend          Camada de lógica privilegiada fina (Edge Functions ou pequena API Hono em TS)
Banco            PostgreSQL gerenciado, com Row-Level Security (RLS) como última linha de defesa
Plataforma       Supabase (Postgres + Auth + Storage + RLS) — ver §2.4 p/ a justificativa
Auth             E-mail/senha + verificação + recuperação + sessões + (futuro) OAuth Google + 2FA
Arquivos         Bucket privado por padrão + URLs assinadas de curta duração + pipeline assíncrono
Observabilidade  Logs estruturados + métricas + alertas (Sentry/Logflare/equivalente)
```

A escolha do Supabase **contraria o `CLAUDE.md` de propósito e com justificativa** (§2.4). Apresento também a alternativa auto-gerenciada e quando ela faz sentido.

### 0.5 Como ler o resto

As seções seguem exatamente os entregáveis pedidos no item 21 do brief:

- §1 — Diagnóstico da arquitetura atual (21.1) + classificação manter/adaptar/substituir (item 16)
- §2 — Proposta de arquitetura (21.2)
- §3 — Modelo de dados inicial (21.3)
- §4 — Matriz de permissões (21.4)
- §5 — Matriz de riscos (21.5)
- §6 — Plano de migração (21.6)
- §7 — Roadmap em fases (21.7)
- §8 — Decisões pendentes (21.8)
- §9 — LGPD, jurídico e fiscal (itens 12 e 19)
- §10 — Confirmação das restrições do item 22

---

## 1. Diagnóstico da arquitetura atual (Entregável 21.1)

### 1.1 Stack encontrada

| Camada | Tecnologia | Observação |
|--------|------------|------------|
| Framework | Astro (output estático) | SSG puro; sem servidor em runtime |
| Linguagem | TypeScript | Tipagem forte já estabelecida (assets de tipos em `src/types/`) |
| Conteúdo | MDX + Content Collections + schemas Zod | Validação de contrato em build (`validate-content`) |
| Estilo | Tailwind + temas por curso (`themes.css`) | Tema `naval-command` + tokens; tipografia Newsreader/Inter/JetBrains Mono |
| Interatividade | React em ilhas (`client:*`) | Componentes ricos por curso em `src/components/cursos/<slug>/` |
| Progresso | `localStorage` (`bussola:v1`) | Migração legada já implementada (`migration.ts`) |
| Pipeline de conteúdo | Course Kit (wizard client-side + JSZip) → `.zip` → `PROMPT_CLAUDE.md` → Claude Code | Conteúdo entra por mantenedor, não por usuário final |
| Mídia | Leve no repo; pesada externa (YouTube/R2/Bunny) | ~648 MB GEP+HNV + ~90 MB ING-4 ainda versionados |
| Deploy | Vercel / Netlify / GitHub Pages | Build-and-publish, sem estado |

### 1.2 Pontos positivos (o que é um ativo real e deve ser preservado)

1. **Modelo de conteúdo curado de altíssima qualidade.** A riqueza pedagógica (SVGs IEC, osciloscópios simulados, calculadoras) vem das ilhas React + MDX. Isso é o diferencial do produto e **não deve ser jogado fora**.
2. **TypeScript + schemas Zod em todo lugar.** Já existe disciplina de contrato. Os schemas Zod viram, com pouco esforço, validadores de entrada de API e tipos compartilhados front/back.
3. **Separação clara de responsabilidades por arquivo/pasta.** A topologia `content/ × data/ × components/ × utils/ × types/` é organizada e modular — base boa para extrair domínios.
4. **Hierarquia de navegação já modelada** (`hierarchy.ts` + `_config.json`). O conceito Ano→Turma→Semestre→Época→Matéria já existe e é estável; vira metadado de curso no banco.
5. **Course Kit já é, conceitualmente, um "editor de curso".** O wizard que captura metadados + timeline + exercícios + mídias é praticamente a especificação de um editor de criação de curso. Ele será **reaproveitado** apontando para a API em vez de gerar `.zip`.
6. **URLs canônicas e redirects já desenhados.** `/<slug>`, `/<slug>/<materia>`, aliases legados do GEP. Preservar isso protege SEO e links existentes.
7. **Temas por curso desacoplados** (`temaVisual`/`corTema`). O sistema de tema multi-curso já antecipa "cada curso com identidade própria" — perfeito para UGC.

### 1.3 Limitações estruturais para o novo objetivo

| Limitação | Por que bloqueia o novo objetivo |
|-----------|----------------------------------|
| **Sem runtime/servidor** | UGC, permissões, sessões e moderação **exigem** processamento autenticado por requisição. SSG não tem onde validar nada. |
| **Conteúdo = arquivos no build** | Conteúdo de usuário precisa ser criado/editado **sem rebuild** e sem dar push no repo. Build-time é incompatível com criação dinâmica. |
| **Sem identidade** | Não há usuário, sessão, dono. Tudo no brief (propriedade, colaboração, social) depende de identidade. |
| **`localStorage` como fonte de verdade** | Dado por dispositivo, não migra entre aparelhos, não é confiável, não tem autoridade. Vira preferência local apenas. |
| **MDX/JSX arbitrário** | Seguro para mantenedor, **catastrófico** para UGC (RCE/XSS). Exige um caminho de renderização separado. |
| **Course Kit gera `.zip` instalado por humano** | Não escala para "qualquer um cria curso". Precisa virar escrita transacional no banco. |
| **Sem AuthZ** | Nenhuma noção de "quem pode o quê". Precisa de RBAC + RLS do zero. |
| **Sem moderação/auditoria** | Plataforma aberta sem moderação é um passivo jurídico e reputacional imediato. |

### 1.4 Riscos e dívidas técnicas já presentes

- **Mídia pesada versionada (~738 MB).** Já é dívida hoje; com UGC, uploads no repo são impensáveis. A externalização (item já em `audit-media`) vira **pré-requisito**, não "nice to have".
- **Acoplamento conteúdo↔código.** Bancos de questões em `src/data/cursos/<slug>/*.ts` são ótimos para conteúdo curado, mas mostram que hoje "adicionar conteúdo = mexer no código". Isso precisa ser quebrado para UGC (sem quebrar o conteúdo curado).
- **Progresso sem backup canônico.** Export/import por JSON é frágil; perda de `localStorage` = perda de progresso. A migração para conta resolve, mas exige cuidado com conflito (§6.3).
- **Nenhuma superfície de segurança hoje** — o que é "seguro por ausência". Ao abrir cadastro, toda a superfície OWASP aparece de uma vez. Tratar segurança como camada desde o desenho (§2.8) é inegociável.

### 1.5 Classificação componente a componente (Entregável do item 16)

| Componente atual | Veredito | Justificativa / ação |
|------------------|----------|----------------------|
| Astro (framework) | **Adaptar** | Migrar de `output: static` para **híbrido** (`hybrid`/`server`) com middleware de auth. Mantém investimento. |
| TypeScript | **Manter** | Base de todo o resto; tipos compartilhados front/back. |
| Ilhas React | **Manter** | Modelo de interatividade preservado para conteúdo curado e para o app. |
| MDX + Content Collections | **Manter (escopo reduzido)** | Continua para cursos `curated`. **Não** é usado para UGC. |
| Schemas Zod (`schemas.ts`) | **Adaptar/expandir** | Viram validadores de entrada da API e contratos de blocos UGC. |
| Tailwind + `themes.css` + tokens | **Manter** | Sistema de tema multi-curso é reaproveitado para temas de UGC (com allowlist de paletas). |
| `hierarchy.ts` + `_config.json` | **Adaptar** | Hierarquia vira metadado de curso no banco; `_config.json` curado pode coexistir como "seed". |
| Navegação `/ano/[...segmentos]` | **Adaptar** | Lógica de descoberta passa a consultar o banco; estrutura de rota preservada. |
| Rotas `/<curso>`, `/<curso>/<materia>` + redirects | **Manter (semântica)** | URLs canônicas preservadas; resolução passa a ser dinâmica. |
| Course Kit (wizard React) | **Adaptar (grande reaproveitamento)** | Vira o **editor de criação de curso** que persiste via API em vez de gerar `.zip`. |
| `course-kit/` (parse, JSZip, prompt) | **Substituir gradualmente** | Geração de `.zip`/`PROMPT_CLAUDE.md` perde sentido com escrita transacional; o parsing de timeline/questões é reaproveitável. |
| Progresso `localStorage` (`bussola:v1`) | **Substituir gradualmente** | Vira cache/preferência; fonte de verdade migra para o banco (§6.3). |
| `migration.ts` (migração de chave antiga) | **Manter (padrão) + estender** | O padrão "migrar uma vez, gravar flag" é exatamente o que a migração `localStorage`→conta precisa. |
| Scripts `tsx` (`create-course`, `validate-content`, `audit-media`) | **Manter (curados) / investigar** | Úteis para seed de cursos curados e CI; não cobrem o fluxo de UGC. |
| Mídia em `public/.../cursos/<slug>/` | **Substituir** | Externalizar para object storage + CDN; pré-requisito de UGC. |
| Deploy estático (GH Pages) | **Substituir** | GH Pages não serve SSR; migrar para host com runtime (Vercel/Netlify Functions/Cloudflare). |
| Backup export/import JSON | **Manter (temporário)** | Mantém compatibilidade durante a transição; deixa de ser o mecanismo principal. |

---

## 2. Proposta de arquitetura (Entregável 21.2)

### 2.1 Visão geral (diagrama textual)

```
                         ┌──────────────────────────────────────────────┐
                         │                 NAVEGADOR                     │
                         │  Astro (estático: landing, cursos curados)    │
                         │  Astro SSR (app autenticado) + ilhas React    │
                         │  Editor de conteúdo (blocos UGC sanitizados)  │
                         └───────────────┬──────────────────────────────┘
                                         │ HTTPS (cookies de sessão httpOnly)
                                         ▼
        ┌────────────────────────────────────────────────────────────────────┐
        │            CAMADA DE LÓGICA PRIVILEGIADA (servidor)                 │
        │   Edge Functions / API Hono (TS)  ── valida AuthN + AuthZ + regras  │
        │   • RBAC por curso     • Regra de irreversibilidade público→privado │
        │   • Sanitização de UGC • Emissão de URLs assinadas • Rate limiting  │
        └───────┬───────────────────────┬───────────────────────┬────────────┘
                │                        │                       │
                ▼                        ▼                       ▼
   ┌────────────────────┐    ┌────────────────────┐   ┌────────────────────┐
   │ PostgreSQL (RLS)   │    │  Object Storage    │   │  Fila / Jobs        │
   │ default-deny       │    │  (bucket privado)  │   │  (AV scan, thumbs,  │
   │ últ. linha defesa  │    │  URLs assinadas    │   │   EXIF strip,       │
   │ auditoria/versões  │    │  CDN só p/ público │   │   anti-spam, rank)  │
   └────────────────────┘    └────────────────────┘   └────────────────────┘
                │
                ▼
   ┌────────────────────┐    ┌────────────────────┐   ┌────────────────────┐
   │  Auth (GoTrue)     │    │ Observabilidade    │   │  Busca              │
   │  e-mail/senha,     │    │ logs estruturados, │   │  Postgres FTS no    │
   │  verif., OAuth, MFA│    │ métricas, alertas  │   │  início; depois ext.│
   └────────────────────┘    └────────────────────┘   └────────────────────┘
```

**Princípio central:** o navegador **nunca** é fonte de autoridade. A RLS no Postgres é a **última** linha de defesa; a camada de lógica privilegiada é onde as regras de negócio vivem. A autorização é validada no servidor **e** reforçada no banco (defesa em profundidade).

### 2.2 Os dois tiers de conteúdo (detalhamento da decisão de §0.3)

```
CONTEÚDO CURADO (curated)                  CONTEÚDO DA COMUNIDADE (community)
───────────────────────                    ─────────────────────────────────
Autor: mantenedor verificado               Autor: qualquer usuário autenticado
Fonte: repositório (MDX + React)           Fonte: banco (JSON de blocos)
Build: compilado em build time             Build: nenhum — renderizado em runtime
Render: pipeline Astro/MDX atual           Render: renderizador fixo + allowlist
Código: permitido (confiança)              Código: PROIBIDO (sanitização rígida)
Flag:  content_kind='curated',             Flag: content_kind='community'
       verified_at != null
Risco: baixo (autor confiável)             Risco: alto → mitigado por sanitização
```

**Formato do conteúdo da comunidade.** Em vez de Markdown bruto (que permite HTML perigoso) ou MDX (que permite código), o UGC é um **documento de blocos** — uma lista ordenada de blocos de tipos **fixos e conhecidos**:

```
Tipos de bloco permitidos (allowlist — v1):
  paragraph | heading | list | quote | callout | divider
  image (referência a arquivo do storage, nunca <img> arbitrário)
  table | code (apenas exibição, com syntax-highlight, NUNCA executado)
  math (KaTeX, renderização determinística)
  embed (apenas provedores allowlisted: YouTube, etc. — sem <iframe> livre)
  exercise (estrutura de questão validada por schema)
```

Cada bloco é validado por um **schema Zod** na escrita e re-sanitizado na renderização. Nada de `dangerouslySetInnerHTML` com conteúdo de usuário sem passar por sanitização (rehype-sanitize / DOMPurify com allowlist estrita). **Sem scripts inline, sem HTML bruto, sem `iframe` livre, sem URLs `javascript:`/`data:` não-allowlisted.** CSP rígida no servidor reforça (sem `unsafe-inline`).

Os "widgets interativos" ricos (calculadoras, osciloscópios) **são fornecidos pela plataforma**, não pelo usuário. No futuro, um bloco `widget` pode referenciar um **componente do catálogo oficial** por ID — o usuário escolhe um widget pré-aprovado e o parametriza; nunca injeta código.

### 2.3 O que é público vs. autenticado (item 4)

| Superfície | Sem login | Com login |
|------------|-----------|-----------|
| Landing page (apresentação, animações leves, demos) | ✅ | ✅ |
| Catálogo de cursos públicos (descoberta) | ✅ (leitura) | ✅ |
| Página pública de um curso `público` (conteúdo do dono) | ✅ (decisão de produto — ver §8) | ✅ |
| Demonstração "amostra" de um curso | ✅ (futuro, conteúdo marcado como demo) | ✅ |
| Registrar progresso, favoritar, anotar | ❌ | ✅ |
| Criar curso/estrutura/resumo/exercício | ❌ | ✅ |
| Comentar, avaliar, denunciar | ❌ | ✅ |
| Cursos privados (qualquer modalidade) | ❌ | ✅ (com autorização) |
| Perfil, configurações, exclusão de conta | ❌ | ✅ |
| Painel de moderação/admin | ❌ | ✅ (apenas papéis de plataforma) |

**Recomendação:** manter a leitura de cursos **públicos** acessível sem login melhora SEO e aquisição (o conteúdo curado da EN é um ótimo isca). Toda **ação** (escrever, votar, progredir) exige conta. Isso é coerente com plataformas modernas.

### 2.4 Justificativa da stack de backend (análise de 7 pontos exigida pelo brief)

O brief exige, para cada escolha: (1) por quê, (2) que problema resolve, (3) que riscos traz, (4) como mitigar, (5) custo operacional, (6) dificuldade de manutenção, (7) impacto na stack atual. Aplico isso às decisões grandes.

#### Decisão A — PostgreSQL como banco central

1. **Por quê:** modelo relacional encaixa perfeitamente em cursos/estruturas/usuários/permissões/versões/auditoria; suporta **RLS nativa** (pedida explicitamente no brief), constraints, triggers, FTS, JSONB para blocos UGC.
2. **Problema que resolve:** integridade referencial, autorização no banco (default-deny), enumeração/IDOR mitigados por design.
3. **Riscos:** modelagem ruim trava evolução; RLS mal configurada vaza dados; migrações de schema arriscadas.
4. **Mitigação:** migrations versionadas; testes automatizados de RLS (§2.8); revisão de schema; UUID/ULID em IDs públicos.
5. **Custo:** baixo no início (free tier gerenciado); escala previsível.
6. **Manutenção:** moderada; exige disciplina de migrations.
7. **Impacto na stack atual:** aditivo — o conteúdo curado continua em arquivos; o banco entra para identidade/UGC/social.

#### Decisão B — Supabase como plataforma (Postgres + Auth + Storage + RLS) — *contraria o `CLAUDE.md` de propósito*

1. **Por quê:** entrega, numa peça, o que o brief mais pede — **RLS nativa, Auth completo (verificação, recuperação, OAuth, MFA), Storage com URLs assinadas e políticas de acesso** — sem sair do ecossistema TS, com baixo custo e velocidade de implementação. Para um time solo focado em segurança, reduz drasticamente o número de peças a configurar com segurança.
2. **Problema que resolve:** evita escrever autenticação à mão (área de altíssimo risco), entrega RLS e storage seguro prontos.
3. **Riscos:** **(a)** lock-in de fornecedor; **(b)** RLS é um "pé na armadilha" se a pessoa confiar só no SDK do cliente conversando direto com o banco; **(c)** o `CLAUDE.md` explicitamente o evitava.
4. **Mitigação:** **(a)** por baixo é **apenas Postgres + GoTrue + storage S3-compatível** — dá para auto-hospedar ou migrar; manter SQL padrão e evitar features proprietárias críticas reduz o lock-in. **(b)** **Não** expor o banco direto ao cliente para operações sensíveis: colocar a **camada de lógica privilegiada** (Edge Functions / API Hono) na frente, com RLS como defesa em profundidade, não como única defesa. **(c)** este documento reconhece e justifica a revisão da restrição (§0.2).
5. **Custo:** free tier cobre o protótipo; planos pagos previsíveis conforme uso de storage/banco.
6. **Manutenção:** baixa-moderada; menos código de infraestrutura para manter.
7. **Impacto na stack atual:** baixo no front; o conteúdo curado não muda; a novidade é uma camada de dados ao lado.

**Alternativa (runner-up) — auto-gerenciado:** API **Hono/Fastify (TS)** + **Neon Postgres** + **Lucia/Auth.js** + **Cloudflare R2**. *Mais controle, zero lock-in, porém muito mais superfície para configurar com segurança e mais manutenção.* **Recomendação:** começar com Supabase (segurança-por-padrão e velocidade) e só migrar para o auto-gerenciado se independência de fornecedor virar requisito duro. **Não** recomendo escolher por popularidade — recomendo por reduzir risco de segurança para um time solo nas fases iniciais.

#### Decisão C — Astro híbrido em vez de reescrever em Next.js

1. **Por quê:** preserva o investimento (cursos curados, ilhas, temas, URLs). Astro suporta SSR/híbrido + middleware de auth.
2. **Problema que resolve:** evita reescrita completa (proibida pelo item 22 sem justificativa) e mantém SSG para landing + conteúdo curado (ótimo SEO/performance).
3. **Riscos:** Astro tem ecossistema de "app dinâmico autenticado" menos maduro que Next; partes muito interativas do app podem ficar verbosas.
4. **Mitigação:** usar ilhas React para o app autenticado dentro do Astro; se uma área (ex.: editor) ficar complexa demais, isolá-la como sub-app React sem trocar o framework do todo.
5. **Custo:** baixo; mesmo host.
6. **Manutenção:** moderada; conviver com dois modos de render (estático + SSR) exige clareza de fronteira.
7. **Impacto na stack atual:** mínimo — é a evolução natural do que existe.

#### Decisão D — RLS como defesa em profundidade (não como única defesa)

1. **Por quê:** garante que, mesmo com bug na camada de aplicação, o banco **nega por padrão** acesso a linhas que não pertencem ao usuário.
2. **Problema que resolve:** IDOR, vazamento por query mal escrita, escalonamento de privilégio.
3. **Riscos:** política de RLS incorreta pode (a) vazar dados ou (b) travar acesso legítimo; lógica complexa em RLS é difícil de ler.
4. **Mitigação:** **default-deny** em todas as tabelas; **suíte de testes de autorização** que tenta acessar recursos de outro usuário e espera negação; manter a lógica de negócio complexa na camada de aplicação e usar RLS para o invariante simples "esta linha é sua / você tem grant".
5. **Custo:** desprezível.
6. **Manutenção:** moderada; toda nova tabela precisa de política + teste.
7. **Impacto na stack atual:** nenhum (camada nova).

### 2.5 Autenticação (item 4)

- **Métodos:** e-mail/senha no v1; **OAuth Google** logo em seguida; **MFA/2FA (TOTP)** como opção do usuário.
- **Senhas:** **nunca** em texto puro; hashing forte (Argon2id/bcrypt — gerido pelo GoTrue se Supabase). Política de senha mínima razoável (sem regras absurdas que pioram segurança).
- **Fluxos obrigatórios:** cadastro → **verificação de e-mail**; **recuperação de senha** (token de uso único, expiração curta); **alteração de senha** (reautenticação); **exclusão de conta** (§9); **sessões ativas** (listar/revogar dispositivos).
- **Sessões:** cookies **httpOnly + Secure + SameSite**; tokens de curta duração + refresh; logout invalida refresh.
- **Proteção contra abuso:** rate limiting em login/recuperação/cadastro; backoff/lockout progressivo; CAPTCHA adaptativo em sinais de ataque; logs de segurança de tentativas (sem logar segredos).
- **Separação authn vs authz:** autenticação (quem é) é responsabilidade do Auth; autorização (o que pode) é da camada de aplicação + RBAC + RLS. Nunca misturar.

### 2.6 Autorização — RBAC por curso (item 6 e matriz §4)

Papéis **com escopo de curso** (um usuário pode ser `owner` em um curso e `participant` em outro):

```
PLATAFORMA:  platform_admin  (papel global, raríssimo, auditado)
POR CURSO:   owner > course_admin > editor > moderator > collaborator > participant > visitor
```

- Permissões **não** ficam em campos manipuláveis pelo cliente. Ficam em `course_members(course_id, user_id, role)` + verificação no servidor + RLS.
- Princípio do **menor privilégio**: cada papel só ganha o estritamente necessário.
- Ações sensíveis (publicar, tornar público, remover usuário, moderar) sempre validadas no servidor + registradas em auditoria.

### 2.7 Modelos de publicação, visibilidade e a regra de irreversibilidade (itens 7 e 8)

#### Modelos de publicação (item 7.1)

- **Modelo A — Liberdade de publicação:** usuários autorizados criam **suas próprias estruturas/resumos** dentro do curso público (cada contribuição com autor, datas, avaliações, comentários, versão). As melhores ganham destaque por critérios transparentes e **resistentes a manipulação** (§2.9). *Sugestão de nomenclatura:* **"Curso Comunitário / Open Contributions"**.
- **Modelo B — Liberdade de acesso:** usuários estudam o conteúdo oficial (dono + colaboradores) mas **não** publicam na estrutura oficial; podem salvar, favoritar, progredir, anotar (privado), comentar (se permitido) e — se autorizado — criar uma **cópia/fork separado**. *Sugestão:* **"Curso Publicado / Read & Fork"**.

#### Visibilidade (item 8) — modelada como **state machine**, não booleano

```
   draft ──publicar p/ privado──► private ──tornar público──► public
     │                              │                            │
     │                              ▼                            ▼
     │                       (invisível |                    archived
     │                        visível-restrito)             (read-only,
     │                              │                         fora da
     │                       senha | solicitação             descoberta)
     ▼
  (excluível enquanto draft)

REGRA DE OURO:  public ──X──► private   (PROIBIDO)
                public ──────► archived  (PERMITIDO: equivalente seguro de "sair do ar")
```

**Por que público não volta a privado (item 7.2):** uma vez público, terceiros podem ter **forkado**, **salvo**, **registrado progresso** ou **contribuído** (Modelo A). Voltar a privado quebraria a expectativa deles e "despublicaria" trabalho derivado. A saída segura é **arquivar**: o curso some da descoberta, não aceita novas publicações, mas quem já tinha acesso preserva o que salvou.

**Implementação segura (não um booleano reversível):**
- Coluna `visibility_level` **monotônica** (ex.: `0=draft, 1=private, 2=public`) com **trigger** que rejeita decremento abaixo de um *high-water mark* registrado.
- Tabela **append-only** `course_visibility_history(course_id, from, to, actor, reason, at)`.
- Fluxo de confirmação no servidor: **confirmação explícita**, **aviso das consequências**, **registro da decisão**, **período de carência opcional**, opção de **interromper novas publicações**, e **tratamento de conteúdo de terceiros** (o que acontece com forks/contribuições alheias ao arquivar).

#### Cursos privados (item 8)

- **Invisível:** fora de busca/perfil/recomendações; acesso só por usuários autorizados; **não descobrível por adivinhar URL/ID** (UUID + RLS + sem listagem). 
- **Visível, mas restrito:** aparece, mas conteúdo bloqueado até autorização. Duas modalidades:
  - **Senha:** hash forte (Argon2id), **nunca** em texto puro, **nunca** retornada por API/log; **limite de tentativas** + backoff + log; ao acertar, emite um **grant** (`course_access_grants`) em vez de revalidar a senha sempre.
  - **Solicitação:** `course_access_requests` com estado (pendente/aprovado/recusado/revogado), decisor e data; usuário vê o estado; **throttle** de pedidos repetidos; acesso **revogável**.
- **Futuro:** convite por link (com validade), convite individual, limite de participantes, lista de espera.

### 2.8 Segurança como camada de base (item 11)

Catálogo OWASP endereçado por design (não "depois"):

| Ameaça | Mitigação |
|--------|-----------|
| **Broken Access Control / IDOR** | RBAC no servidor + RLS default-deny + UUID/ULID em IDs públicos + testes de autorização automatizados |
| **Autorização só no front** | Toda ação sensível validada no servidor **e** no banco; front é só UX |
| **XSS (stored, via UGC)** | Documento de blocos + allowlist + sanitização na escrita **e** render + CSP sem `unsafe-inline` |
| **CSRF** | Cookies SameSite + tokens anti-CSRF em mutações + verificação de origem |
| **SQL Injection** | Queries parametrizadas/ORM tipado; nunca concatenar SQL |
| **SSRF** (embeds/uploads por URL) | Allowlist de domínios de embed; sem fetch de URL arbitrária pelo servidor; bloqueio de IPs internos |
| **Upload malicioso** | Validar **magic bytes** (não extensão/claim do cliente); bucket privado; AV scan assíncrono; renomear; strip de metadados |
| **Segredos no código/navegador** | Segredos só no servidor (vars de ambiente); nunca chaves privadas no bundle; rotação de segredos |
| **Enumeração de IDs** | UUID/ULID + default-deny (UUID é obscuridade, não autorização — autorização sempre verificada) |
| **Senhas inseguras** | Hash forte (Argon2id/bcrypt); nunca texto puro; nunca em logs |
| **Vazamento de logs** | Logs estruturados sem PII/segredos; redaction; acesso restrito |
| **Dependências vulneráveis** | Política de dependências; `npm audit`/Dependabot em CI; lockfile |
| **Backups desprotegidos** | Backups criptografados, acesso restrito, testes de restauração |

Outros princípios do item 11 já incorporados: menor privilégio, RLS, separação authn/authz, gestão segura de sessões, rotação de segredos, criptografia em trânsito (TLS) e de dados sensíveis em repouso, rate limiting, auditoria, alertas, logs estruturados, backups, recuperação de desastre, separação dev/homolog/prod, testes automatizados de permissão, revisões periódicas.

### 2.9 Camada social e antimanipulação (itens 10 e 13)

**Princípio:** o sinal de qualidade **não** é uma contagem bruta de likes (proibido pelo brief). Modela-se assim:

- **Votos individuais, não contador:** `reactions(user_id, target_id, value)` com **unique (user_id, target_id)** → contagem é **derivada**. Impede voto duplicado por construção.
- **Elegibilidade para votar:** apenas contas com **e-mail verificado** e idade mínima de conta; reduz contas-fantasma.
- **Ranking ponderado:** combina reputação do autor, idade/verificação da conta votante, **diversidade** de engajamento e decaimento temporal — não só soma de likes.
- **Detecção de brigading:** anomalia de **velocidade** (muitos votos novos no mesmo alvo numa janela), correlação de contas novas, padrões coordenados → sinaliza para revisão e/ou desconta votos.
- **Reputação derivada e recomputável** (nunca campo editável pelo cliente).
- **Moderação:** `reports` → fila de revisão → `moderation_actions` (log) → **recurso/contestação**; remoção preventiva em casos graves; reincidência → advertência → suspensão → banimento; **preservação de evidências**.
- **Riscos sociais endereçados:** contas falsas, compra/troca de votos, ataques coordenados, avaliações repetidas, spam, assédio, exposição indevida, conteúdo ofensivo, comentários automatizados, manipulação de ranking — cada um com **prevenção + detecção + sanção**.

### 2.10 Antiplágio e conteúdo indevido (item 13) — explicitamente **não infalível**

- **Camada jurídica/processual:** termos de responsabilidade, declaração de autoria na publicação, política de direitos autorais, canal de denúncia, fluxo de análise, remoção preventiva em casos graves, direito de contestação, registro de decisões, reincidência, advertência/suspensão/banimento, preservação de evidências, processo de recurso.
- **Camada técnica (auxiliar, falível):** comparação de **similaridade entre conteúdos internos** (ex.: shingling/MinHash/embeddings) para sinalizar cópias muito próximas; sinalização **automática** seguida de **revisão humana**; diferenciação entre **referência, citação, paráfrase e cópia indevida** com registro de fontes/licenças. **Nunca** apresentar como prova definitiva.
- **Conteúdo proibido:** ilegal, discurso de ódio, assédio, dados pessoais de terceiros, material sexual indevido, incentivo à violência, fraude, spam, malware, arquivos perigosos, **informações sigilosas/militares** (atenção especial dado o contexto Escola Naval), violações institucionais — todos com fluxo de denúncia + remoção + sanção.

### 2.11 Uploads e armazenamento (item 14)

```
Cliente ── pede URL assinada ──► Servidor (valida quota, tipo, AuthZ)
Cliente ── PUT direto ─────────► Object Storage (arquivo NÃO passa pelo app server)
Storage ── evento ─────────────► Fila ──► Worker (AV scan, magic bytes, thumb, strip EXIF)
Worker  ── marca pronto/rejeitado ──► Banco
Leitura privada ── URL assinada de curta duração (emitida só após checagem de AuthZ + RLS)
Leitura pública ── via CDN, apenas para assets marcados públicos
```

- Limites de tamanho; tipos por allowlist; verificação por **conteúdo real** (magic bytes); renomeação segura; **bucket privado por padrão**; URLs temporárias; varredura de malware; processamento assíncrono; miniaturas; remoção de metadados sensíveis; **quotas por usuário**; política de retenção; exclusão; limpeza de **conteúdo órfão**; backups; CDN só para público.
- **Invariante crítico:** arquivo privado **jamais** vira público porque alguém descobriu/compartilhou uma URL. Sem URL pública permanente para conteúdo privado — só URLs assinadas de curta duração emitidas após autorização.

---

## 3. Modelo de dados inicial (Entregável 21.3)

> Não é o SQL final — é o modelo conceitual das entidades, relações e regras de integridade. IDs públicos são **UUID/ULID** (anti-enumeração). Tudo com `created_at`/`updated_at`. Exclusões importantes são **soft-delete** + estratégia de anonimização (§9).

### 3.1 Diagrama de entidades (textual)

```
users ──1:N── course_members ──N:1── courses
  │                                      │
  │                                      ├─1:N── structures (estruturas/trilhas do curso)
  │                                      │           └─1:N── nodes (módulo/matéria/tópico/página)
  │                                      │                       └─1:N── content_documents (resumo/aula)
  │                                      │                                   └─1:N── content_versions (append-only)
  │                                      │                                   └─1:N── blocks (JSONB, p/ community)
  │                                      ├─1:N── exercises ──1:N── questions
  │                                      ├─1:N── media_assets (ref. ao storage)
  │                                      ├─1:1── course_visibility_history (append-only)
  │                                      ├─1:N── course_access_grants
  │                                      └─1:N── course_access_requests
  │
  ├─1:N── progress (por usuário/curso/nó)        ── fonte de verdade (substitui localStorage)
  ├─1:N── notes (anotações privadas)
  ├─1:N── favorites
  ├─1:N── reactions (votos individuais, unique(user,target))
  ├─1:N── comments ──self── comments (respostas)
  ├─1:N── reports (denúncias)
  ├─1:N── sessions / mfa_factors
  ├─1:N── consent_records (aceite versionado de termos/privacidade)
  └─1:N── notifications

reputation_scores  (derivado/recomputável, por usuário)        moderation_actions (log)
forks (structure_id → forked_from_structure_id)                audit_log (append-only, global)
```

### 3.2 Entidades principais e regras

| Entidade | Função | Regras de integridade / índices-chave |
|----------|--------|----------------------------------------|
| `users` | identidade | e-mail único; `email_verified_at`; `deleted_at` (soft); status (ativo/suspenso/banido) |
| `courses` | curso (dono claro) | `owner_id` FK; `content_kind ∈ {curated, community}`; `visibility_level` monotônico; `verified_at`; slug único; índice por slug e por owner |
| `course_members` | RBAC por curso | unique(course_id, user_id); `role` enum; **fonte da autorização** (não no cliente) |
| `structures` | estrutura/trilha (Modelo A: várias por curso) | `author_id`; `course_id`; estado (draft/published/archived); `forked_from` nullable |
| `nodes` | módulo/matéria/tópico/página (árvore) | `parent_id` self-FK; `order`; `structure_id`; CHECK de profundidade |
| `content_documents` | resumo/aula (um documento) | `author_id`; `node_id`; ponteiro p/ `current_version_id` |
| `content_versions` | **versionamento append-only** | imutável; `author_id` por versão; restauração = nova versão |
| `blocks` | blocos UGC (JSONB) | validados por schema na escrita; sanitizados; só para `community` |
| `exercises` / `questions` | banco de questões | tipos validados; `author_id` |
| `media_assets` | metadados de arquivo | `storage_key` aleatório; `visibility`; `status` (scanning/ready/rejected); `owner_id`; quota |
| `progress` | progresso por usuário/curso/nó | unique(user_id, node_id); **fonte de verdade** |
| `notes` | anotações privadas | só o autor lê (RLS) |
| `reactions` | votos individuais | unique(user_id, target_type, target_id) → contagem derivada |
| `comments` | comentários + respostas | `parent_id` self-FK; soft-delete; moderável |
| `reports` | denúncias | estado; `reporter_id`; `target`; preservação de evidência |
| `moderation_actions` | log de moderação | append-only; ator; motivo; recurso |
| `course_visibility_history` | trilha da regra de irreversibilidade | append-only |
| `course_access_grants` / `_requests` | acesso a privados | estado; revogável; throttle de pedidos |
| `consent_records` | LGPD: aceite versionado | versão do termo/privacidade; timestamp |
| `audit_log` | auditoria global | append-only; ações sensíveis |
| `reputation_scores` | reputação derivada | recomputável; nunca editável pelo cliente |

### 3.3 Estratégias transversais

- **Permissões:** sempre via `course_members` + servidor + RLS. **Nunca** em campo manipulável pelo cliente.
- **Exclusão:** soft-delete por padrão; diferenciar exclusão de conteúdo × conta × anonimização × arquivamento × retenção legal (§9).
- **Versionamento:** `*_versions` append-only; restaurar = criar nova versão (history nunca é mutado); autor de cada alteração registrado.
- **Auditoria:** `audit_log` + `moderation_actions` + `course_visibility_history`, todos append-only.
- **Público × privado:** RLS default-deny; emissão de URLs assinadas só após checagem; IDs UUID/ULID.
- **Anti-enumeração/IDOR:** UUID/ULID em tudo addressable **+** autorização verificada em todo acesso (defesa em profundidade — UUID sozinho não basta).

---

## 4. Matriz de permissões (Entregável 21.4)

Legenda: ✅ permitido · ⚙️ permitido conforme configuração do curso/dono · ❌ negado · 👤 só o próprio autor

| Recurso / Ação | Visitante | Usuário (logado) | Participante | Colaborador | Moderador (curso) | Admin do curso | Proprietário | Admin plataforma |
|----------------|:--------:|:---------------:|:------------:|:-----------:|:-----------------:|:--------------:|:------------:|:----------------:|
| Ver curso público | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Ver curso privado | ❌ | ⚙️ (c/ grant) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Registrar progresso/favoritar | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Anotação privada | ❌ | 👤 | 👤 | 👤 | 👤 | 👤 | 👤 | 👤 |
| Criar curso | ❌ | ✅ | — | — | — | — | — | ✅ |
| Criar estrutura (Modelo A) | ❌ | ⚙️ | ⚙️ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Editar conteúdo próprio | ❌ | 👤 | 👤 | 👤 | 👤 | 👤 | 👤 | ✅ |
| Editar conteúdo de terceiros | ❌ | ❌ | ❌ | ❌ | ❌ (só moderar) | ⚙️ | ⚙️ | ✅ |
| Publicar conteúdo no curso oficial | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Comentar / avaliar | ❌ | ⚙️ | ⚙️ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Denunciar | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Moderar (ocultar/remover) no curso | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ |
| Gerir membros/papéis do curso | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| Tornar curso público (irreversível) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ⚙️ |
| Arquivar curso | ❌ | ❌ | ❌ | ❌ | ❌ | ⚙️ | ✅ | ✅ |
| Excluir curso | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ (c/ regras) | ✅ |
| Marcar curso como `curated`/verificado | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Banir usuário da plataforma | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Ver painel de moderação global | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |

> **Nota:** a coluna do Proprietário **não** tem poder de marcar o próprio curso como `curated`/verificado — isso é prerrogativa de plataforma. É o que mantém o curso da Escola Naval sujeito às mesmas regras, com a verificação sendo um ato administrativo, não um privilégio embutido.

---

## 5. Matriz de riscos (Entregável 21.5)

Probabilidade/Impacto: B(aixo)/M(édio)/A(lto). Prioridade = combinação.

### 5.1 Riscos técnicos

| Risco | Prob. | Impacto | Prior. | Prevenção | Detecção | Resposta |
|-------|:----:|:------:|:-----:|-----------|----------|----------|
| XSS armazenado via UGC | A | A | **Crítica** | Blocos + allowlist + sanitização dupla + CSP | Testes de sanitização, scanner, report de usuário | Purga do conteúdo, patch, rotação se sessão comprometida |
| Broken Access Control / IDOR | A | A | **Crítica** | RBAC servidor + RLS default-deny + UUID | Testes de AuthZ automatizados, anomalia de acesso | Bloqueio, correção de política, auditoria de exposição |
| RLS mal configurada vaza dados | M | A | **Alta** | Default-deny + suíte de testes de RLS | Testes em CI, revisão de schema | Hotfix de política, notificação se vazou |
| Upload malicioso (malware) | M | A | **Alta** | Magic bytes + AV scan + bucket privado | Pipeline de scan, alertas | Quarentena, remoção, ban do uploader |
| Segredo exposto no bundle | M | A | **Alta** | Segredos só no servidor, revisão de bundle | Scanner de segredos em CI | Rotação imediata de chaves |
| Dependência vulnerável | A | M | **Alta** | Política de deps + lockfile | `npm audit`/Dependabot | Atualização, mitigação temporária |
| Perda de progresso na migração localStorage→conta | M | M | **Média** | Confirmação + dedupe + flag de migração | Logs de migração | Reimportação assistida, suporte |
| Indisponibilidade do fornecedor | B | A | **Média** | Backups + SQL padrão (portabilidade) | Monitoramento/uptime | Plano de migração, status page |
| Custo de storage/tráfego estoura | M | M | **Média** | Quotas + CDN + externalização de mídia | Métricas de uso/custo | Ajuste de quota/plano |

### 5.2 Riscos jurídicos

| Risco | Prob. | Impacto | Prior. | Prevenção | Detecção | Resposta |
|-------|:----:|:------:|:-----:|-----------|----------|----------|
| Violação de direitos autorais por UGC | A | A | **Crítica** | Termos + declaração de autoria + antiplágio auxiliar | Denúncia + similaridade interna | Remoção, contestação, reincidência→ban |
| Vazamento de dados pessoais (LGPD) | M | A | **Crítica** | Criptografia, RLS, menor privilégio | Logs/alertas, auditoria | Plano de resposta a incidente + comunicação |
| Conteúdo sigiloso/militar publicado | M | A | **Alta** | Política clara + revisão + canal de denúncia | Denúncia + moderação | Remoção imediata + preservação de evidência |
| Dados de menores sem base adequada | M | A | **Alta** | **Validação jurídica** (ver §9) + sinalização | Cadastro/idade | Bloqueio até definição legal |
| Falta de termos/política válidos | M | M | **Média** | Termos + privacidade + cookies (aceite versionado) | Auditoria de compliance | Publicação/atualização + re-aceite |

### 5.3 Riscos operacionais

| Risco | Prob. | Impacto | Prior. | Prevenção | Detecção | Resposta |
|-------|:----:|:------:|:-----:|-----------|----------|----------|
| Volume de moderação acima da capacidade (time solo) | A | M | **Alta** | Limitar abertura por fases; fila auditável | Métricas de fila | Priorização, moderação comunitária assistida |
| Disputa de autoria entre usuários | M | M | **Média** | Registro de autor/versão + datas | Denúncia | Processo de disputa documentado |
| Abuso/assédio entre usuários | M | M | **Média** | Denúncia + sanção + bloqueio | Reports | Suspensão/ban + preservação |
| Recuperação de conta / perda de acesso | M | M | **Média** | Recuperação por e-mail + MFA | Suporte | Fluxo de verificação de identidade |
| Spam / contas falsas em massa | A | M | **Alta** | Verificação de e-mail + rate limit + antimanipulação | Anomalia de cadastro/voto | Bloqueio em lote, captcha |

### 5.4 Riscos financeiros (pagamentos **não** nesta fase — item 19)

| Risco | Prob. | Impacto | Prior. | Prevenção | Detecção | Resposta |
|-------|:----:|:------:|:-----:|-----------|----------|----------|
| Custo cresce antes de receita | M | M | **Média** | Quotas + tiers de uso + monitoramento de custo | Dashboards de custo | Ajuste de limites/plano |
| (Futuro) Chargeback/fraude de pagamento | — | A | **Adiada** | (Quando houver pagamento) antifraude + gateway sério | — | Validação de contador/advogado (§9) |

---

## 6. Plano de migração (Entregável 21.6)

**Princípio:** transformar **sem perder conteúdo**, **sem quebrar URLs** e **sem regra especial permanente para a Escola Naval**. A migração é **gradual e reversível por etapa** (cada fase é deployável e validável isoladamente).

### 6.1 Migração do conteúdo curado (cursos atuais)

1. **Manter** os cursos curados como estão no repositório (MDX + React) — eles continuam `content_kind = curated`.
2. **Registrar cada curso curado como uma linha em `courses`**, com `owner_id = <sua conta>`, `content_kind = curated`, `verified_at = <data>`, `visibility_level = public`. O conteúdo continua vindo do build; o **banco passa a ser a autoridade sobre propriedade, visibilidade e papéis**. É assim que o curso da EN "vira um curso da sua conta" sem `if (slug==='gep')`.
3. **Resolução de rota dinâmica:** as URLs `/<slug>` e `/<slug>/<materia>` permanecem; a resolução passa a checar o curso no banco (existe? público? curado→render MDX : community→render blocos). Redirects legados do GEP preservados.
4. **Script de seed** (evolução de `create-course`/`validate-content`): lê os `_config.json` curados e popula as linhas correspondentes em `courses`/`structures`/`nodes` (metadados), sem duplicar o conteúdo MDX.

### 6.2 Migração da hierarquia

- `hierarchy.ts` + campos de `_config.json` (ano/turma/semestre/época/ordem) viram **colunas/metadados** em `courses`. A navegação `/ano/[...segmentos]` passa a consultar o banco. Estrutura de rota e UX preservadas.

### 6.3 Migração do progresso (`localStorage` → conta) — item 17

```
Primeiro login após a migração:
  1. App detecta bussola:v1 no localStorage
  2. Pergunta ao usuário: "Importar seu progresso local para esta conta?"  (CONFIRMAÇÃO explícita)
  3. Se sim → envia ao servidor → MERGE com regra de conflito definida:
       - progresso existente na conta tem precedência? ou o mais recente por nó? (DECISÃO — §8)
  4. Grava flag bussola:v1:migrated:<user_id> → NÃO reimporta (evita duplicação)
  5. Registra a migração (auditoria)
  6. localStorage passa a ser cache/preferência; banco vira fonte de verdade
```

- Reaproveita **exatamente** o padrão já existente em `migration.ts` ("migrar uma vez, gravar flag").
- `localStorage` continua válido para **preferências não sensíveis** e funcionamento offline temporário; **deixa de ser fonte de verdade** de dados importantes (proibição do item 22).
- Compatibilidade temporária para usuários antigos (export/import JSON segue funcionando durante a transição).

### 6.4 Migração da mídia

- Externalizar a mídia pesada de `public/.../cursos/<slug>/` para object storage + CDN (já apontada por `audit-media`). Vira **pré-requisito** das fases que abrem upload.

---

## 7. Roadmap em fases (Entregável 21.7)

Cada fase é **pequena, deployável e validável**. Para cada uma: objetivo, entregas, dependências, riscos, critérios de conclusão e **o que NÃO fazer ainda**.

### Fase 0 — Fundação e decisões (sem código de produto)

- **Objetivo:** travar decisões pendentes (§8), escolher fornecedor, montar ambientes dev/homolog/prod separados.
- **Entregas:** ADRs (registros de decisão), provisionamento de Postgres/Auth/Storage, CI com `npm audit` + scanner de segredos, política de migrations.
- **Dependências:** aprovação deste plano.
- **Riscos:** decisão de stack mal tomada → custo de retrabalho.
- **Conclusão:** ambientes prontos; decisões de §8 documentadas.
- **NÃO fazer ainda:** nenhuma feature de usuário; nenhum pagamento.

### Fase 1 — Protótipo autenticado (landing + login)

- **Objetivo:** introduzir identidade sem mudar o conteúdo.
- **Entregas:** landing pública; cadastro + verificação de e-mail + login + recuperação + sessões; Astro híbrido + middleware de auth; tabela `users` + RLS básica; cursos curados continuam acessíveis (públicos).
- **Dependências:** Fase 0.
- **Riscos:** auth mal feita (mitigado usando provider de auth, não código próprio).
- **Conclusão:** usuário cria conta, faz login, vê os cursos curados; testes de auth passando.
- **NÃO fazer ainda:** criação de curso por usuário; social; uploads.

### Fase 2 — Cursos como entidades + propriedade + progresso na conta

- **Objetivo:** cursos curados viram linhas em `courses` (propriedade da sua conta); progresso migra para o banco.
- **Entregas:** `courses`/`course_members`/`progress`; resolução de rota dinâmica preservando URLs; migração `localStorage`→conta (§6.3); RBAC mínimo (owner/visitor).
- **Dependências:** Fase 1.
- **Riscos:** perda/duplicação de progresso (mitigado por confirmação + flag).
- **Conclusão:** EN é um curso `curated` da sua conta, sem regra especial no código; progresso por conta funciona.
- **NÃO fazer ainda:** UGC; cursos privados; comentários.

### Fase 3 — Cursos privados do próprio usuário (UGC mínimo, sem social)

- **Objetivo:** usuário cria curso **privado** com conteúdo `community` (blocos sanitizados).
- **Entregas:** editor de blocos (reaproveita Course Kit) + schema/sanitização; `structures`/`nodes`/`content_documents`/`blocks` + versionamento; visibilidade `draft`/`private` (sem público ainda); RBAC por curso completo.
- **Dependências:** Fase 2.
- **Riscos:** XSS via UGC (mitigado por blocos + sanitização + CSP).
- **Conclusão:** usuário cria/edita curso privado; sanitização testada; RLS isola por dono.
- **NÃO fazer ainda:** tornar público; uploads pesados; comentários/avaliações.

### Fase 4 — Uploads seguros

- **Objetivo:** arquivos (imagens/áudio/vídeo/PDF) com pipeline seguro.
- **Entregas:** URLs assinadas + bucket privado + magic bytes + AV scan + thumbs + strip EXIF + quotas + CDN para público; externalização da mídia curada.
- **Dependências:** Fase 3.
- **Riscos:** upload malicioso, custo (mitigados por scan + quotas).
- **Conclusão:** upload privado nunca vira público por URL; scan funcionando.
- **NÃO fazer ainda:** social; público.

### Fase 5 — Cursos públicos + regra de irreversibilidade

- **Objetivo:** permitir tornar curso **público** (Modelos A/B), com a transição monotônica.
- **Entregas:** state machine de visibilidade + `course_visibility_history` + trigger monotônico + fluxo de confirmação/carência/arquivamento; descoberta/catálogo público.
- **Dependências:** Fase 4.
- **Riscos:** publicação acidental de dado privado (mitigado por confirmação + aviso).
- **Conclusão:** público→privado bloqueado; público→arquivado funciona; histórico registrado.
- **NÃO fazer ainda:** votos/ranking; moderação avançada.

### Fase 6 — Colaboração

- **Objetivo:** colaboradores e estruturas alternativas dentro de cursos públicos (Modelo A).
- **Entregas:** convites/papéis; `structures` por autor com atribuição; fork (`forked_from`); rascunho/publicação/revisão.
- **Dependências:** Fase 5.
- **Riscos:** disputa de autoria (mitigado por versão/datas/autoria).
- **Conclusão:** múltiplos autores publicam estruturas; fork referencia original.
- **NÃO fazer ainda:** ranking ponderado; reputação.

### Fase 7 — Comentários, avaliações e moderação

- **Objetivo:** camada social com antimanipulação e moderação.
- **Entregas:** `reactions` (votos individuais), `comments`, `reports`, `moderation_actions`, fila de revisão, recurso; rate limiting + detecção de brigading.
- **Dependências:** Fase 6.
- **Riscos:** spam/assédio/manipulação (mitigados por §2.9).
- **Conclusão:** votos não-duplicáveis; moderação auditável; recurso funciona.
- **NÃO fazer ainda:** reputação avançada; monetização.

### Fase 8 — Reputação e recursos avançados

- **Objetivo:** ranking ponderado, reputação derivada, notificações, antiplágio auxiliar.
- **Entregas:** `reputation_scores` recomputável; ranking ponderado; similaridade interna + revisão humana; notificações.
- **Dependências:** Fase 7.
- **Riscos:** gaming do ranking (mitigado por ponderação + detecção).
- **Conclusão:** ranking resistente a manipulação simples; antiplágio sinaliza (não decide sozinho).
- **NÃO fazer ainda:** pagamentos.

### Fase 9 — Monetização (apenas consideração arquitetural — **não implementar agora**, item 19)

- **Objetivo:** registrar pontos para o futuro; nenhum código financeiro nesta fase.
- **Entregas:** documento de pré-requisitos (planos, repasses, NF, tributação, chargeback) **com validação de contador/advogado**.
- **Conclusão:** decisões mapeadas; **nada implementado**.

---

## 8. Decisões pendentes (Entregável 21.8)

Para cada uma, dou minha **recomendação**, sem inventar requisitos não informados.

1. **Fornecedor de backend: Supabase vs. auto-gerenciado.** → *Recomendo Supabase nas fases iniciais* (segurança-por-padrão, RLS/Auth/Storage prontos, menos superfície para um time solo), com SQL padrão para preservar portabilidade. Reavaliar se independência de fornecedor virar requisito duro.
2. **Cursos públicos legíveis sem login?** → *Recomendo sim* para cursos públicos (aquisição/SEO; o conteúdo curado da EN é isca forte). Toda **ação** exige conta.
3. **Regra de conflito na migração de progresso.** → *Recomendo "mais recente por nó vence"*, com confirmação do usuário antes de importar. (Decisão de produto.)
4. **Nomenclatura dos modelos A/B.** → *Sugiro "Curso Comunitário (Open Contributions)" e "Curso Publicado (Read & Fork)"*; significado preservado, rótulos mais claros.
5. **O que acontece com contribuições de terceiros ao arquivar um curso público.** → *Recomendo preservar acesso a quem já salvou/forkou e congelar novas publicações*; precisa de decisão explícita sobre conteúdo derivado.
6. **Aceitar menores de idade?** → **Decisão sensível.** *Recomendo definir junto a advogado/DPO antes de abrir cadastro amplo* (base legal, consentimento, tratamento de dados de menores). Até lá, sinalizar e tratar com cautela. (Ver §9.)
7. **Quem pode marcar um curso como `curated`/verificado.** → *Recomendo: exclusivamente `platform_admin`*, como ato administrativo auditado (mantém a EN sob as mesmas regras).
8. **Catálogo de "widgets oficiais" para UGC.** → *Recomendo adiar para a Fase 8*; no início, UGC usa só blocos básicos. Widgets ricos seguem exclusivos do conteúdo curado.
9. **Moderação: capacidade do time solo.** → *Recomendo abrir o público de forma faseada/limitada* (ex.: convites ou lista de espera) até a moderação estar madura.
10. **Estratégia de busca.** → *Recomendo Postgres FTS no início*; migrar para serviço de busca dedicado só quando o volume justificar (evitar complexidade prematura — item 20).

---

## 9. LGPD, jurídico e fiscal (itens 12 e 19)

> **Não são conclusões jurídicas.** São pontos a endereçar e, onde indicado, **validar com advogado, contador ou DPO**.

### 9.1 Mapeamento de dados (inventário inicial)

| Dado | Por que coletar | Base legal **provável** (validar) | Retenção | Quem acessa |
|------|------------------|-----------------------------------|----------|-------------|
| Cadastrais (e-mail, nome de usuário) | Operar a conta | Execução de contrato | Enquanto conta ativa | Próprio + admin (mínimo) |
| Senha (hash) | Autenticação | Execução de contrato | Enquanto conta ativa | Ninguém (hash) |
| Foto/perfil | Personalização | Consentimento | Até remoção | Público conforme config |
| Conteúdos/comentários/avaliações | Função da plataforma | Execução de contrato/consentimento | Conforme política | Conforme visibilidade |
| Progresso de estudos | Função da plataforma | Execução de contrato | Enquanto conta ativa | Próprio |
| IP / logs de segurança | Segurança/antifraude | Legítimo interesse (balancing test) | Curta, definida | Segurança/admin |
| Solicitações de acesso / denúncias | Moderação/segurança | Legítimo interesse / obrigação | Retenção p/ evidência | Moderação |
| Dados de menores | (se aceitar) | **A definir com jurídico** | **A definir** | **Restrito** |

### 9.2 Direitos do titular e funcionalidades

- **Exclusão de conta**, **exportação de dados** (DSAR), **correção**, **revogação de consentimento**, **desativação**, **anonimização** quando aplicável, **retenção legal** de registros.
- Diferenciar claramente: **exclusão de conteúdo** × **exclusão de conta** × **anonimização** × **arquivamento** × **retenção obrigatória** × **preservação de provas** (denúncia/fraude).
- **Consentimento versionado:** `consent_records` registra aceite de termos/privacidade/cookies por versão.
- **Documentos:** política de privacidade, termos de uso, política de cookies, política de moderação — com registro de aceite.

### 9.3 A validar com especialistas (explicitamente)

- Bases legais definitivas (especialmente legítimo interesse e dados de menores).
- Responsabilidade da plataforma sobre UGC (Marco Civil da Internet) e relação com CDC.
- Tratamento de **conteúdo sigiloso/militar** (contexto Escola Naval) — risco institucional elevado.
- **Futuro fiscal/empresarial (item 19, não implementar agora):** modelo de negócio, planos, assinaturas, comissões, repasses, NF, tributação, chargeback, reembolso — **validar com contador e advogado** antes de qualquer integração financeira.

---

## 10. Confirmação das restrições finais (item 22)

| Restrição do brief | Como o plano cumpre |
|--------------------|---------------------|
| Não iniciar reescrita completa sem justificar | Astro **adaptado** (híbrido), não reescrito; reaproveitamento máximo (§1.5, §2.4-C) |
| Não implementar pagamentos | Fase 9 é só consideração arquitetural; nenhum código financeiro |
| Não armazenar senha em texto puro | Hash forte (Argon2id/bcrypt); nunca em API/log (§2.5, §2.8) |
| Não confiar em autorização só no cliente | Servidor + RBAC + RLS default-deny; front é só UX (§2.1, §2.6) |
| Não expor dados privados por URL previsível | UUID/ULID + RLS + URLs assinadas de curta duração (§2.8, §2.11) |
| Não usar `localStorage` como fonte de verdade | Vira cache/preferência; banco é autoridade (§6.3) |
| Não criar regra especial permanente para a EN | `content_kind`/`verified` é capacidade administrável, sem `if (slug==='gep')` (§0.3, §6.1) |
| Não apresentar antiplágio como infalível | Explicitamente auxiliar + revisão humana (§2.10) |
| Não tratar segurança/LGPD/moderação como tarefa futura solta | Camadas de base desde o desenho (§2.8, §9) |
| Não alterar o projeto antes do planejamento | Nenhuma alteração de código proposta para execução agora |
| Não recomendar tecnologia sem custo/risco/motivo | Análise de 7 pontos nas decisões grandes (§2.4) |
| Não criar complexidade desnecessária na fase inicial | Modular, não microsserviços; FTS antes de busca dedicada (§2.1, §8.10) |
| Não presumir que UGC pode ser usado livremente | Autoria/licença/declaração na publicação (§2.10, §9) |

---

## Próximo passo sugerido

Se este plano fizer sentido, o passo seguinte **não** é codar — é a **Fase 0**: travar as 10 decisões pendentes de §8 (principalmente fornecedor, menores de idade e regra de conflito de progresso) e registrar como ADRs. Só depois disso a Fase 1 (protótipo autenticado) começa, e ainda assim sem tocar no conteúdo curado existente.

Posso, quando você quiser, detalhar qualquer seção isoladamente — por exemplo, o schema SQL completo de uma fase, as políticas de RLS de uma tabela específica, o desenho do editor de blocos UGC, ou um `PROMPT_CLAUDE.md` de implementação para a Fase 1.

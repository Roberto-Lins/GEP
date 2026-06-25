# Bússola dos Aspirantes

Plataforma pessoal de estudos **multi-curso**, 100% estática. O aluno entra no dashboard, escolhe um
curso e segue uma **trilha sequencial** de mini-matérias com aulas, resumos, comparações, pegadinhas,
mídias e **exercícios comentados** — com **progresso salvo no navegador** (localStorage), sem backend.

Hoje há **um curso real: GEP** (Gestão Pública — P1, tema `naval-command`). A especificação completa,
a arquitetura e o manual "como criar um curso" estão em `CLAUDE.md` e `docs/`.

## Stack

Astro **híbrido** · TypeScript · MDX · Tailwind CSS · React (ilhas) · **Supabase** (auth + Postgres +
RLS — Fase 1). O conteúdo curado continua **estático**; só auth/app rodam em SSR. A plataforma está
evoluindo para colaborativa multiusuário — ver `docs/PLANEJAMENTO-EVOLUCAO-BUSSOLA.md`,
`docs/adr/` e `docs/implementation/PHASE-01-AUTHENTICATION.md`.

## Como rodar

```bash
npm install
cp .env.example .env     # (opcional p/ auth) preencha com as chaves do seu Supabase
npm run dev              # http://localhost:4321  (faz SSR das rotas de auth/app)
npm run check            # typecheck (astro check)
npm run test             # vitest (testes de RLS pulam sem credenciais de teste)
npm run build            # gera .vercel/output (estático + função SSR)
npm run check:secrets    # garante que a service role NÃO está no bundle do cliente
npm run validate-content # valida _config.json e _dados.json de todos os cursos
npm run audit-media      # lista mídia pesada ainda versionada
```

O build e a navegação pública funcionam **sem** `.env`; os fluxos de autenticação exigem um projeto
Supabase provisionado (passo a passo em `supabase/README.md`).

Deploy: **Vercel** (adapter `@astrojs/vercel`, `output: 'hybrid'`). O conteúdo estático segue
publicável em qualquer CDN, mas o app autenticado precisa de runtime (GitHub Pages não serve SSR).

## Estrutura (resumo)

```
src/
├── content/cursos/<slug>/   _config.json + mini-matérias (.mdx + _dados.json)
├── data/cursos/<slug>/      timeline · exercicios · checklists · midias · fontes
├── components/              ui · layout · estudo · midia · questoes · cursos · progresso
├── layouts/                 Base · Dashboard · Course · Lesson · Review
├── pages/                   index (dashboard) · [curso]/...
├── utils/                   courses · content · progress · backup · migration · media · ...
├── styles/                  global · tokens · themes · prose
└── types/                   course · lesson · question · media · progress
public/<tipo>/cursos/<slug>/   imagens · videos · podcasts · mapas-mentais · arquivos
templates/curso/   scripts/   docs/   backups/
```

## Como adicionar um novo curso

Resumo (manual completo em `CLAUDE.md` → "Como criar um novo curso"):

```bash
npm run create-course <slug>   # copia templates/curso/ → src/content/cursos/<slug>/
```
Depois: edite `_config.json`, crie as mini-matérias (`.mdx` + `_dados.json`), adicione imagens leves,
externalize mídia pesada, rode `npm run validate-content`. O curso aparece sozinho no dashboard.

## Conteúdo e progresso

- Progresso (checklists, questões, matérias concluídas) em `localStorage` (`bussola:v1`), por curso,
  nunca sai do navegador. Exportar/Importar/Reset no dashboard.
- GEP: 60 múltipla escolha + 40 V/F + 5 grupos de correlação, todos com gabarito comentado.

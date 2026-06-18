# Bússola dos Aspirantes

Plataforma pessoal de estudos **multi-curso**, 100% estática. O aluno entra no dashboard, escolhe um
curso e segue uma **trilha sequencial** de mini-matérias com aulas, resumos, comparações, pegadinhas,
mídias e **exercícios comentados** — com **progresso salvo no navegador** (localStorage), sem backend.

Hoje há **um curso real: GEP** (Gestão Pública — P1, tema `naval-command`). A especificação completa,
a arquitetura e o manual "como criar um curso" estão em `CLAUDE.md` e `docs/`.

## Stack

Astro · TypeScript · MDX · Tailwind CSS · React (apenas em ilhas). Sem banco, sem login, sem backend.

## Como rodar

```bash
npm install
npm run dev              # http://localhost:4321
npm run build            # gera dist/
npm run preview          # serve o build
npm run validate-content # valida _config.json e _dados.json de todos os cursos
npm run audit-media      # lista mídia pesada ainda versionada
```

Deploy: publique `dist/` em Vercel, Netlify ou GitHub Pages (ajuste `site` em `astro.config.mjs`).

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

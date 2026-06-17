# GEP Command Deck

Site pessoal de estudos para a prova de **Gestão Pública — GEP P1**. Uma trilha sequencial de mini
matérias com aulas, resumos, comparações, pegadinhas, mídias (vídeos/podcasts) e **exercícios
comentados** — tudo estático, com **progresso salvo no navegador** (localStorage), sem backend.

> Estética: painel naval + documentação técnica elegante. Veja `CLAUDE.md` para a especificação completa.

## Stack

Astro · TypeScript · MDX · Tailwind CSS · React (apenas onde há interatividade). Sem banco de dados,
sem login, sem backend.

## Como rodar

```bash
npm install          # instala dependências
npm run dev          # ambiente de desenvolvimento em http://localhost:4321
npm run build        # gera o site estático em dist/
npm run preview      # serve o build localmente
npx astro check      # checagem de tipos
```

Deploy: publique a pasta `dist/` em **Vercel**, **Netlify** ou **GitHub Pages** (ajuste `site` em
`astro.config.mjs`).

## Estrutura

```
src/
├── components/   layout · estudo · midia · questoes
├── content/materias/<XX-slug>/   conteúdo MDX de cada mini matéria
├── data/         timeline · exercicios · checklists · midias · fontes
├── layouts/      BaseLayout · MateriaLayout · RevisaoLayout
├── pages/        index · timeline · materias/[slug] · questoes · simulados · revisao-final · fontes
├── styles/       global.css · tokens.css
└── utils/        progresso (localStorage) · slug · formatarTempo · filtrarQuestoes
public/           imagens · videos · podcasts · mapas-mentais · arquivos (fontes p/ download)
```

## Como adicionar uma nova mini matéria

1. Crie a pasta `src/content/materias/XX-nome/` com os arquivos MDX. Cada arquivo tem frontmatter:
   ```yaml
   ---
   titulo: "Título da seção"
   secao: "aula"        # capa | aula | resumo | comparacoes | pegadinhas | referencias
   secaoOrdem: 2
   ---
   ```
   Dentro do MDX você pode usar `<BlocoConceito>`, `<BlocoPegadinha>` e `<BlocoComparacao>` sem importar.
2. Registre o tópico em `src/data/timeline.ts` (ordem, slug, prioridade, tempo, objetivo, palavras-chave).
3. (Opcional) Adicione itens em `src/data/checklists.ts` e questões em `src/data/exercicios.ts` com
   `topico: "XX-nome"`.

A página `/materias/[slug]` monta tudo automaticamente (objetivo, seções, mídias, exercícios,
checklist, navegação anterior/próxima).

## Como adicionar vídeos, podcasts e mapas mentais

1. Copie o arquivo para a pasta certa em `public/`:
   - vídeos NotebookLM → `public/videos/notebooklm/`
   - vídeos do YouTube → `public/videos/youtube/`
   - podcasts → `public/podcasts/notebooklm/`
   - mapas mentais (PDF) → `public/mapas-mentais/notebooklm/`
2. Registre em `src/data/midias.ts` um item com `tipo`, `topico` (slug), `titulo`, `fonte`, `src`.

> Vídeos `.mkv` não tocam em todos os navegadores: o player oferece download automaticamente.

## Como adicionar/baixar fontes

Coloque o arquivo em `public/arquivos/{livros,slides,resumos,provas}/` e registre em
`src/data/fontes.ts`. Eles aparecem na página `/fontes` com botão de download.

## Conteúdo e progresso

- O progresso (checklists, questões respondidas, matérias concluídas) fica em `localStorage`
  (`gep:progresso:v1`) e nunca sai do navegador.
- Exercícios: 60 múltipla escolha + 40 V/F + 20 correlações, todos com gabarito comentado.

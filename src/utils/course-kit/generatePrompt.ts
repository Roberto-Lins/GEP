// Gera o PROMPT_CLAUDE.md — instruções dinâmicas para o Claude Code instalar o
// curso a partir do Course Kit.
import type { CourseKitData, DificuldadeQuestao, TipoQuestao } from '@tipos/course-kit';
import { DIFICULDADES, TIPOS_QUESTAO, DIFICULDADE_LABELS, TIPO_QUESTAO_LABELS } from '@tipos/course-kit';
import { ANO_LABELS, SEMESTRE_LABELS, EPOCA_LABELS, TURMA_LABELS } from '@utils/hierarchy-constants';

function contar(data: CourseKitData, d: DificuldadeQuestao, t: TipoQuestao): number {
  return data.questoes.filter((q) => q.dificuldade === d && q.tipo === t).length;
}

function tabelaQuestoes(data: CourseKitData): string {
  const head = `| Dificuldade | ${TIPOS_QUESTAO.map((t) => TIPO_QUESTAO_LABELS[t]).join(' | ')} | Total |`;
  const sep = `|${'---|'.repeat(TIPOS_QUESTAO.length + 2)}`;
  const linhas = DIFICULDADES.map((d) => {
    const cels = TIPOS_QUESTAO.map((t) => contar(data, d, t));
    const total = cels.reduce((a, b) => a + b, 0);
    return `| ${DIFICULDADE_LABELS[d]} | ${cels.join(' | ')} | ${total} |`;
  });
  return [head, sep, ...linhas].join('\n');
}

function listaTopicos(data: CourseKitData): string {
  if (!data.topicos.length) return '_(nenhum tópico informado)_';
  return data.topicos
    .map((t, i) => {
      const nn = String(i).padStart(2, '0');
      const dicas = t.dicasProfessor?.length ? ` — dicas do professor: ${t.dicasProfessor.join('; ')}` : '';
      const desc = t.descricao ? ` — ${t.descricao}` : '';
      return `${i + 1}. \`${nn}-${slugTopico(t.titulo)}\` — **${t.titulo}**${desc}${dicas}`;
    })
    .join('\n');
}

function slugTopico(titulo: string): string {
  return titulo
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 50);
}

function listaMidias(data: CourseKitData): string {
  if (!data.midias.length) return '_(nenhuma mídia registrada)_';
  return data.midias
    .map((m) => `- **${m.titulo}** (${m.origem}${m.categoria ? `, ${m.categoria}` : ''}): ${m.src}`)
    .join('\n');
}

export function generatePrompt(data: CourseKitData): string {
  const turmaLabel = data.turma ? TURMA_LABELS[data.turma] : 'Não se aplica (1°/2° ano)';
  const totalQ = data.questoes.length;

  return `# Instalar Curso: ${data.nome}

> Gerado pelo Course Kit Generator da Bússola dos Aspirantes em ${data.geradoEm}.
> Cole este arquivo no Claude Code, com a pasta do kit aberta, para instalar a matéria.

## Contexto do projeto
**Bússola dos Aspirantes** é uma plataforma de estudos **estática** (Astro + MDX + Content
Collections, sem backend). Cada curso vive em \`src/content/cursos/<slug>/\` (mini-matérias em
\`NN-nome/\` com \`_dados.json\` + \`.mdx\` de seção) e os bancos pesados (questões, checklists,
timeline, mídias, fontes) em \`src/data/cursos/<slug>/\`. A hierarquia de navegação é
**Ano → (Turma p/ 3°/4°) → Semestre → Época → Matéria**, definida nos campos do \`_config.json\`.
Validação: \`npm run validate-content\`. Geração inicial: \`npm run create-course <slug>\`.

## Princípios inegociáveis
1. **Fidelidade absoluta às fontes.** Use **somente** as fontes do kit (slides, listas, provas,
   orientações do professor). **Não invente** valores, exemplos ou resoluções; não "complete" lacunas
   com conhecimento externo sem marcar claramente como hipótese. As questões e as formas de resolução
   **não podem fugir** das listas e dos slides.
2. **Aulas profundas e claras.** Cada mini-matéria segue: intuição → fórmula/conceito → figura →
   **exemplo resolvido passo a passo** (com os números da fonte) → fechamento que liga ao próximo tópico.
3. **Figuras fiéis, nunca desenhadas à mão coordenada-a-coordenada.** Para circuitos/diagramas:
   **reaproveite a figura da fonte** (recorte/print re-tematizado para a paleta naval) **ou gere com
   símbolos padrão** — ver \`scripts/circuitos/\` (SchemDraw para esquemáticos, matplotlib para
   ondas/gráficos). Sempre confira que a figura **bate com o texto e a legenda**.
4. **Interatividade quando agregar.** Os cálculos cobrados viram **calculadoras React** em
   \`src/components/cursos/${data.slug}/\`, ligadas ao \`mdxComponents\` da página de matéria.
5. **Curso de referência:** o curso **\`det\`** (Detecção) é o padrão-ouro de profundidade, figuras e
   calculadoras — espelhe a qualidade dele. Guia de produção de conteúdo em \`/adicionar-curso/guia\`.

## O que você vai instalar
- **Slug:** \`${data.slug}\`
- **Nome:** ${data.nome}
- **Ano:** ${ANO_LABELS[data.ano]} · **Semestre:** ${SEMESTRE_LABELS[data.semestre]} · **Época:** ${EPOCA_LABELS[data.epoca]}
- **Turma:** ${turmaLabel}
- **Descrição:** ${data.descricao || '—'}
- **Estilo de cobrança do professor:** ${data.estiloCobranca || '—'}

## Estrutura disponível no Course Kit
- \`course-kit.json\` — todos os dados estruturados (fonte da verdade).
- \`manifest.json\` — resumo e lista de arquivos.
- \`linha-do-tempo/topicos.{json,md}\` — ${data.topicos.length} tópico(s).
- \`exercicios/{faceis,medias,dificeis}/{objetivas,discursivas,vf,correlacione}.md\` — ${totalQ} questão(ões).
- \`audios/\`, \`videos/\`, \`slides/\` — \`referencias.json\` com URLs de mídia.
- \`fontes/\`, \`resumos/\` — arquivos leves anexados (se houver).

## Linha do tempo confirmada
${listaTopicos(data)}

## Banco de questões (por dificuldade × tipo)
${tabelaQuestoes(data)}

## Mídias registradas
${listaMidias(data)}

## O que implementar

### 1. Criar a estrutura de pastas
Rode \`npm run create-course ${data.slug}\` e ajuste o esqueleto. Crie uma mini-matéria \`NN-nome/\`
por tópico da linha do tempo acima (na ordem indicada), mais \`99-revisao-final/\`.

### 2. Preencher o \`_config.json\`
\`\`\`jsonc
{
  "slug": "${data.slug}",
  "titulo": "${data.nome}",
  "ano": "${data.ano}",
  "semestre": "${data.semestre}",
  "epoca": "${data.epoca}",${data.turma ? `\n  "turma": "${data.turma}",` : ''}
  "temaVisual": "naval-command",
  "corTema": "dourado",
  "ordem": <próxima ordem livre>,
  "features": { /* ligue só o que esta matéria usa */ }
}
\`\`\`

### 3. Criar as mini-matérias

**Estrutura mínima de \`_dados.json\`:**
\`\`\`jsonc
{
  "ordem": 1,
  "slug": "NN-nome-do-topico",
  "titulo": "Nome do Tópico",
  "prioridade": "alta",
  "objetivo": "O que o aluno conseguirá fazer após estudar este tópico.",
  "palavrasChave": ["termo1", "termo2"],
  "tempoEstimado": 45
}
\`\`\`

**Seções de cada mini-matéria (ordem de criação):**
| Arquivo | secaoOrdem | secao (frontmatter) | Conteúdo esperado |
|---|---|---|---|
| index.mdx | 1 | "capa" | Título, imagem de abertura e objetivo em 1–2 parágrafos |
| aula.mdx | 2 | "aula" | Intuição → fórmula → figura → exemplo passo-a-passo → ponte ao próximo |
| resumo.mdx | 3 | "resumo" | 5–8 bullet-points das ideias-chave (referência rápida) |
| comparacoes.mdx | 4 | "comparacoes" | Tabelas comparando variantes, estados, fórmulas |
| pegadinhas.mdx | 5 | "pegadinhas" | BlocoPegadinha por armadilha clássica da prova |
| exercicios.mdx | 6 | "exercicios" | Boilerplate (texto padrão — copie do template) |
| respostas-comentadas.mdx | 7 | "respostas" | Boilerplate (texto padrão — copie do template) |
| checklist.mdx | 8 | "checklist-doc" | Boilerplate (texto padrão — copie do template) |
| referencias.mdx | 9 | "referencias" | Links/slides, página/seção do livro-base |

Use \`BlocoConceito\`, \`BlocoPegadinha\` e \`BlocoComparacao\` conforme o padrão do curso **det**.

### 4. Montar o banco de exercícios
Converta os arquivos de \`exercicios/\` em \`src/data/cursos/${data.slug}/exercicios.ts\`, mantendo
dificuldade e tipo. Cada questão **deve ter**:
- \`id\` único (padrão: me-NN-01, vf-NN-01, dis-NN-01, cor-NN-01)
- \`topico\`: slug da mini-matéria a que pertence
- \`fonte\`: de onde veio (ex.: "Lista 1 — Q3", "Slides Cap. X", "SOPA 2021")
- \`comentario\`/\`gabaritoComentado\`: resolução passo a passo (números exatos da fonte)
- \`armadilha\` (opcional): o erro clássico que a questão testa

Priorize questões com gabarito oficial (Lista de exercícios, SOPA, slides com resolução). Questões sem
gabarito claro devem ser marcadas com \`// REVER\` e confirmadas com o mantenedor.

### 5. Registrar as mídias
Adicione as referências de \`audios/videos/slides/referencias.json\` (e arquivos leves de
\`fontes/resumos/\`) em \`_dados.json\`/\`src/data/cursos/${data.slug}/midias.ts\`, com \`origem\` + \`src\`.
**Não** versione mídia pesada — use as URLs informadas.

### 6. Validar
Rode \`npm run validate-content\` e \`npm run build\` e confirme que passam.

## Critérios de aceite
- [ ] Curso aparece no dashboard sob ${ANO_LABELS[data.ano]} → ${data.turma ? `${TURMA_LABELS[data.turma]} → ` : ''}${SEMESTRE_LABELS[data.semestre]} → ${EPOCA_LABELS[data.epoca]}.
- [ ] ${data.topicos.length} mini-matéria(s) + revisão final criadas, na ordem da linha do tempo.
- [ ] ${totalQ} questão(ões) importada(s), preservando dificuldade e tipo.
- [ ] ${data.midias.length} mídia(s) registrada(s) com \`origem\`+\`src\` (sem arquivo pesado no repo).
- [ ] \`npm run validate-content\` e \`npm run build\` passam.
`;
}

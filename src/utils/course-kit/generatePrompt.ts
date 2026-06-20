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
Para cada tópico: \`_dados.json\` (ordem, slug, titulo, prioridade, objetivo, palavrasChave) e os
\`.mdx\` de seção (capa, aula, resumo, comparacoes, pegadinhas, referencias). Use o estilo de
cobrança do professor para calibrar ênfase e pegadinhas.

### 4. Montar o banco de exercícios
Converta os arquivos de \`exercicios/\` em \`src/data/cursos/${data.slug}/exercicios.ts\`, mantendo
dificuldade e tipo. Use o gabarito detectado quando houver; escreva comentários de resolução.

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

// Monta o .zip do Course Kit com JSZip e dispara o download.
import JSZip from 'jszip';
import type { CourseKitData, ArquivoLeve, DificuldadeQuestao, TipoQuestao } from '@tipos/course-kit';
import { DIFICULDADES, TIPOS_QUESTAO, DIFICULDADE_LABELS, TIPO_QUESTAO_LABELS } from '@tipos/course-kit';
import { generateCourseKit, type KitInput } from './generateCourseKit';
import { generateManifest } from './generateManifest';
import { generatePrompt } from './generatePrompt';

const PASTA_DIFICULDADE: Record<DificuldadeQuestao, string> = {
  facil: 'faceis',
  media: 'medias',
  dificil: 'dificeis',
};
const ARQUIVO_TIPO: Record<TipoQuestao, string> = {
  objetiva: 'objetivas',
  discursiva: 'discursivas',
  vf: 'vf',
  correlacione: 'correlacione',
};

function topicosMarkdown(data: CourseKitData): string {
  const linhas = data.topicos.map((t, i) => {
    const dicas = t.dicasProfessor?.length ? `\n   - Dicas do professor: ${t.dicasProfessor.join('; ')}` : '';
    const desc = t.descricao ? `\n   - ${t.descricao}` : '';
    return `${i + 1}. ${t.titulo}${desc}${dicas}`;
  });
  return `# Linha do tempo — ${data.nome}\n\n${linhas.join('\n') || '_(vazio)_'}\n`;
}

function exerciciosMarkdown(data: CourseKitData, d: DificuldadeQuestao, t: TipoQuestao): string {
  const qs = data.questoes.filter((q) => q.dificuldade === d && q.tipo === t);
  const cab = `# ${TIPO_QUESTAO_LABELS[t]} — ${DIFICULDADE_LABELS[d]} (${data.nome})\n\n`;
  if (!qs.length) return `${cab}Nenhuma questão adicionada ainda.\n`;
  const corpo = qs
    .map((q, i) => {
      const gab = q.gabarito ? `\n\n**Gabarito:** ${q.gabarito}` : '';
      return `## Questão ${i + 1}\n\n${q.enunciado}${gab}`;
    })
    .join('\n\n---\n\n');
  return cab + corpo + '\n';
}

function instrucoesMarkdown(data: CourseKitData): string {
  return `# Como usar este Course Kit

Este pacote foi gerado pela **Bússola dos Aspirantes** e contém tudo para instalar a matéria
**${data.nome}** na plataforma.

## Passos
1. Extraia este .zip.
2. Revise o conteúdo (especialmente \`course-kit.json\` e a linha do tempo).
3. Abra o projeto da Bússola no Claude Code.
4. Cole o conteúdo de **\`PROMPT_CLAUDE.md\`** no Claude Code.
5. O Claude Code instala a matéria e roda a validação.

## Conteúdo
- \`course-kit.json\` — dados estruturados (fonte da verdade).
- \`manifest.json\` — resumo.
- \`PROMPT_CLAUDE.md\` — instruções de instalação.
- \`linha-do-tempo/\`, \`exercicios/\`, \`audios/\`, \`videos/\`, \`slides/\`, \`fontes/\`, \`resumos/\`.

> Mídia pesada (> 20 MB) não vai no zip — está registrada como URL nas \`referencias.json\`.
`;
}

export function nomeArquivoKit(data: CourseKitData): string {
  const dia = data.geradoEm.slice(0, 10);
  return `course-kit-${data.slug}-${dia}.zip`;
}

export async function buildZip(input: KitInput, arquivos: ArquivoLeve[]): Promise<Blob> {
  const data = generateCourseKit(input);
  const zip = new JSZip();
  const caminhos: string[] = [];
  const add = (caminho: string, conteudo: string) => {
    zip.file(caminho, conteudo);
    caminhos.push(caminho);
  };

  // Linha do tempo
  add('linha-do-tempo/topicos.json', JSON.stringify(data.topicos, null, 2));
  add('linha-do-tempo/topicos.md', topicosMarkdown(data));

  // Exercícios — todas as 12 seções padrão, mesmo vazias.
  for (const d of DIFICULDADES) {
    for (const t of TIPOS_QUESTAO) {
      add(`exercicios/${PASTA_DIFICULDADE[d]}/${ARQUIVO_TIPO[t]}.md`, exerciciosMarkdown(data, d, t));
    }
  }

  // Referências de mídia por categoria
  for (const cat of ['audios', 'videos', 'slides'] as const) {
    const refs = data.midias.filter((m) => m.categoria === cat);
    add(`${cat}/referencias.json`, JSON.stringify(refs, null, 2));
  }

  // Arquivos leves anexados (fontes, resumos, slides locais, etc.)
  for (const arq of arquivos) {
    zip.file(arq.caminho, arq.base64, { base64: true });
    caminhos.push(arq.caminho);
  }

  // Raiz
  const manifest = generateManifest(data, caminhos);
  add('course-kit.json', JSON.stringify(data, null, 2));
  add('manifest.json', JSON.stringify(manifest, null, 2));
  add('PROMPT_CLAUDE.md', generatePrompt(data));
  add('INSTRUCOES.md', instrucoesMarkdown(data));

  return zip.generateAsync({ type: 'blob', compression: 'DEFLATE' });
}

/** Constrói o zip e dispara o download no navegador. */
export async function downloadKit(input: KitInput, arquivos: ArquivoLeve[]): Promise<string> {
  const data = generateCourseKit(input);
  const blob = await buildZip(input, arquivos);
  const nome = nomeArquivoKit(data);
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = nome;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  return nome;
}

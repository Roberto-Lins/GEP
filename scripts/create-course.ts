// Cria um curso novo a partir de templates/curso/. Uso:
//   npm run create-course <slug> ["Título do curso"]
import { cpSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const slug = process.argv[2];
const titulo = process.argv[3] ?? slug;

if (!slug || !/^[a-z0-9][a-z0-9-]*$/.test(slug)) {
  console.error('Uso: npm run create-course <slug-kebab> ["Título"]');
  process.exit(1);
}

const contentDir = join('src/content/cursos', slug);
const dataDir = join('src/data/cursos', slug);
if (existsSync(contentDir) || existsSync(dataDir)) {
  console.error(`Já existe um curso "${slug}" (${contentDir} ou ${dataDir}).`);
  process.exit(1);
}

const SECOES: Array<[string, string, number]> = [
  ['index', 'capa', 1],
  ['aula', 'aula', 2],
  ['resumo', 'resumo', 3],
  ['comparacoes', 'comparacoes', 4],
  ['pegadinhas', 'pegadinhas', 5],
  ['exercicios', 'exercicios', 6],
  ['respostas-comentadas', 'respostas', 7],
  ['checklist', 'checklist-doc', 8],
  ['referencias', 'referencias', 9],
];

function mdx(titulo: string, secao: string, ordem: number, corpo: string) {
  return `---\ntitulo: "${titulo}"\nsecao: "${secao}"\nsecaoOrdem: ${ordem}\n---\n\n${corpo}\n`;
}

function escreverMateria(dir: string, titulo: string, dados: Record<string, unknown>) {
  mkdirSync(dir, { recursive: true });
  for (const [arquivo, secao, ordem] of SECOES) {
    writeFileSync(
      join(dir, `${arquivo}.mdx`),
      mdx(`${titulo} — ${arquivo}`, secao, ordem, `_TODO: conteúdo de ${arquivo}._`),
    );
  }
  writeFileSync(join(dir, '_dados.json'), JSON.stringify(dados, null, 2) + '\n');
}

// 1. _config.json (com slug/titulo preenchidos)
mkdirSync(contentDir, { recursive: true });
const configTpl = readFileSync('templates/curso/_config.json', 'utf8')
  .replaceAll('__SLUG__', slug)
  .replaceAll('__TITULO__', titulo);
writeFileSync(join(contentDir, '_config.json'), configTpl);

// 2. dados (TS) do curso
cpSync('templates/curso/data', dataDir, { recursive: true });

// 3. mini-matéria 00-visao-geral
escreverMateria(join(contentDir, '00-visao-geral'), 'Visão geral', {
  ordem: 0,
  slug: '00-visao-geral',
  titulo: 'Visão geral',
  prioridade: 'alta',
  subtitulo: 'A ideia central do curso',
  tempoEstimado: '15 min',
  objetivo: 'Entender a lógica geral do curso e o que será cobrado.',
  palavrasChave: ['visão geral'],
});

// 4. revisão final
const revDir = join(contentDir, '99-revisao-final');
mkdirSync(revDir, { recursive: true });
const revSecoes: Array<[string, string, number]> = [
  ['resumo-geral', 'resumo-geral', 1],
  ['mapa-da-prova', 'mapa-da-prova', 2],
  ['erros-frequentes', 'erros-frequentes', 3],
  ['revisao-de-vespera', 'revisao-de-vespera', 4],
];
for (const [arquivo, secao, ordem] of revSecoes) {
  writeFileSync(join(revDir, `${arquivo}.mdx`), mdx(`Revisão — ${arquivo}`, secao, ordem, `_TODO: ${arquivo}._`));
}
writeFileSync(join(revDir, '_dados.json'), JSON.stringify({
  ordem: 99, slug: '99-revisao-final', titulo: 'Revisão final', prioridade: 'máxima',
}, null, 2) + '\n');

// 5. pastas de mídia em public/
for (const d of [
  `public/imagens/cursos/${slug}/thumbnails`,
  `public/mapas-mentais/cursos/${slug}`,
  `public/arquivos/cursos/${slug}`,
]) {
  mkdirSync(d, { recursive: true });
  writeFileSync(join(d, '.gitkeep'), '');
}

console.log(`✓ Curso "${slug}" criado.\n`);
console.log('Próximos passos:');
console.log(`  1. Edite ${contentDir}/_config.json (título, categoria, ordem, temaVisual, features).`);
console.log(`  2. Preencha as mini-matérias (.mdx + _dados.json) e adicione novas pastas NN-....`);
console.log(`  3. Preencha os dados em ${dataDir}/ (timeline, exercicios, checklists, midias, fontes).`);
console.log(`  4. Rode: npm run validate-content`);

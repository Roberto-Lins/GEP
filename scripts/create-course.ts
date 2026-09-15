// Cria uma família de curso com três modalidades editoriais independentes.
// Uso: npm run create-course <slug-familia> ["Título do curso"]
import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { MODALIDADES_ESTUDO, MODALIDADE_RESUMOS, type ModalidadeEstudoId } from '../src/types/study-mode';

const familiaSlug = process.argv[2];
const titulo = process.argv[3] ?? familiaSlug;
const raizDestino = process.env.GEP_SCAFFOLD_ROOT ?? '.';
const noDestino = (...partes: string[]) => join(raizDestino, ...partes);

if (!familiaSlug || !/^[a-z0-9][a-z0-9-]*$/.test(familiaSlug)) {
  console.error('Uso: npm run create-course <slug-familia-kebab> ["Título"]');
  process.exit(1);
}

const slugModalidade = (modo: ModalidadeEstudoId) => `${familiaSlug}--${modo}`;
const contentDirs = MODALIDADES_ESTUDO.map((modo) => noDestino('src/content/cursos', slugModalidade(modo)));
const dataDirs = MODALIDADES_ESTUDO.map((modo) => noDestino('src/data/cursos', slugModalidade(modo)));
const sharedDir = noDestino('src/data/cursos/_familias', familiaSlug);
const conflitos = [...contentDirs, ...dataDirs, sharedDir].filter(existsSync);
if (conflitos.length) {
  console.error(`A família "${familiaSlug}" conflita com: ${conflitos.join(', ')}`);
  process.exit(1);
}

const SECOES: Array<[string, string, number]> = [
  ['index', 'capa', 1], ['aula', 'aula', 2], ['resumo', 'resumo', 3],
  ['comparacoes', 'comparacoes', 4], ['pegadinhas', 'pegadinhas', 5],
  ['exercicios', 'exercicios', 6], ['respostas-comentadas', 'respostas', 7],
  ['checklist', 'checklist-doc', 8], ['referencias', 'referencias', 9],
];

function mdx(tituloSecao: string, secao: string, ordem: number) {
  return `---\ntitulo: "${tituloSecao}"\nsecao: "${secao}"\nsecaoOrdem: ${ordem}\n---\n\n[PENDENTE — REQUER FONTES E MATRIZ DE COBERTURA]\n\n{/* Redigir esta modalidade de forma independente. Nunca truncar o modo Completo. */}\n`;
}

function substituirArquivos(dir: string, substituicoes: Record<string, string>) {
  for (const nome of readdirSync(dir)) {
    const caminho = join(dir, nome);
    if (statSync(caminho).isDirectory()) substituirArquivos(caminho, substituicoes);
    else {
      let conteudo = readFileSync(caminho, 'utf8');
      for (const [de, para] of Object.entries(substituicoes)) conteudo = conteudo.replaceAll(de, para);
      writeFileSync(caminho, conteudo);
    }
  }
}

function escreverMateria(dir: string, modo: ModalidadeEstudoId) {
  mkdirSync(dir, { recursive: true });
  for (const [arquivo, secao, ordem] of SECOES) {
    writeFileSync(join(dir, `${arquivo}.mdx`), mdx(`Escopo pendente — ${arquivo}`, secao, ordem));
  }
  writeFileSync(join(dir, '_dados.json'), JSON.stringify({
    ordem: 0,
    slug: '00-escopo-pendente',
    titulo: '[PENDENTE — definir a partir da matriz]',
    prioridade: 'alta',
    subtitulo: 'Estrutura editorial ainda não autorizada pelas fontes',
    tempoEstimado: '[PENDENTE]',
    objetivo: '[PENDENTE — REQUER FONTES E MATRIZ DE COBERTURA]',
    palavrasChave: [],
    conceptIds: ['PENDENTE-CONCEITO-001'],
    modalidade: modo,
  }, null, 2) + '\n');
}

function escreverRevisao(dir: string, modo: ModalidadeEstudoId) {
  mkdirSync(dir, { recursive: true });
  const secoes: Array<[string, string, number]> = [
    ['resumo-geral', 'resumo-geral', 1], ['mapa-da-prova', 'mapa-da-prova', 2],
    ['erros-frequentes', 'erros-frequentes', 3], ['revisao-de-vespera', 'revisao-de-vespera', 4],
  ];
  for (const [arquivo, secao, ordem] of secoes) {
    writeFileSync(join(dir, `${arquivo}.mdx`), mdx(`Revisão pendente — ${arquivo}`, secao, ordem));
  }
  writeFileSync(join(dir, '_dados.json'), JSON.stringify({
    ordem: 99,
    slug: '99-revisao-final',
    titulo: 'Revisão final',
    prioridade: 'máxima',
    conceptIds: [],
    modalidade: modo,
  }, null, 2) + '\n');
}

for (const modo of MODALIDADES_ESTUDO) {
  const slug = slugModalidade(modo);
  const contentDir = noDestino('src/content/cursos', slug);
  const dataDir = noDestino('src/data/cursos', slug);
  const resumo = MODALIDADE_RESUMOS[modo];

  mkdirSync(contentDir, { recursive: true });
  const configTpl = readFileSync('templates/curso/_config.json', 'utf8');
  const config = configTpl
    .replaceAll('__SLUG__', slug)
    .replaceAll('__TITULO__', `${titulo} — ${resumo.rotulo}`)
    .replaceAll('__FAMILIA__', familiaSlug)
    .replaceAll('__FAMILIA_TITULO__', titulo)
    .replaceAll('__MODALIDADE__', modo)
    .replaceAll('__MODALIDADE_ROTULO__', resumo.rotulo)
    .replaceAll('__MODALIDADE_DESCRICAO__', resumo.descricao)
    .replaceAll('__MODALIDADE_FINALIDADE__', resumo.finalidade)
    .replaceAll('__MODALIDADE_COBERTURA__', resumo.cobertura);
  writeFileSync(join(contentDir, '_config.json'), config);

  cpSync('templates/curso/data', dataDir, { recursive: true });
  substituirArquivos(dataDir, { '__FAMILIA__': familiaSlug, '__MODALIDADE__': modo });
  escreverMateria(join(contentDir, '00-escopo-pendente'), modo);
  escreverRevisao(join(contentDir, '99-revisao-final'), modo);
}

mkdirSync(sharedDir, { recursive: true });
writeFileSync(join(sharedDir, 'perfil-cobranca.json'), JSON.stringify({
  schema_version: '1.0.0',
  status: 'pendente',
  classificacao: {
    literalidade: 'incerta', interpretacao: 'incerta', calculo: 'incerta', detalhismo: 'incerta',
    memorizacao: 'incerta', pegadinhas: 'incerta', integracao: 'incerta', aplicacaoInedita: 'incerta',
  },
  evidencias: [], fontes_localizadas: [], incertezas: ['REQUER FONTES AUTORIZADAS'],
}, null, 2) + '\n');
writeFileSync(join(sharedDir, 'matriz-cobertura.json'), JSON.stringify({
  schema_version: '1.0.0', status: 'pendente', familia_id: familiaSlug,
  conceitos: [{
    concept_id: 'PENDENTE-CONCEITO-001', assunto: '[PENDENTE]', dependencias: [],
    fontes_localizadas: [], evidencia_prioridade: [], examinavel: true,
    presenca: { rapido: false, 'pra-safar': false, completo: true },
    profundidade: { rapido: null, 'pra-safar': null, completo: null },
    justificativa: { rapido: '[PENDENTE]', 'pra-safar': '[PENDENTE]', completo: '[PENDENTE]' },
    exemplos: [], figuras: [], questoes: [], vulnerabilidades: [],
  }],
}, null, 2) + '\n');
writeFileSync(join(sharedDir, 'questoes.ts'), `import type { Questao } from '@tipos/question';\n\n// Banco canônico compartilhado. A mesma questão mantém id, objeto e gabarito entre modalidades.\nexport const questoesCanonicas: Questao[] = [];\n`);

for (const d of [
  noDestino(`public/imagens/cursos/${familiaSlug}/thumbnails`),
  noDestino(`public/mapas-mentais/cursos/${familiaSlug}`),
  noDestino(`public/arquivos/cursos/${familiaSlug}`),
]) {
  mkdirSync(d, { recursive: true });
  writeFileSync(join(d, '.gitkeep'), '');
}

console.log(`✓ Família "${familiaSlug}" preparada com Rápido, Pra Safar e Completo.`);
console.log('O scaffold permanece em rascunho e falhará na validação até que fontes, matriz, perfil, durações e conteúdo sejam preenchidos.');
console.log(`Dados compartilhados: ${sharedDir}`);
console.log('Nunca produza Rápido ou Pra Safar por truncamento automático do Completo.');

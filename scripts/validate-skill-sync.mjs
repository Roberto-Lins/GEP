import { readFileSync } from 'node:fs';
import Ajv2020 from 'ajv/dist/2020.js';

const raiz = 'docs/sync';
const ler = (nome) => JSON.parse(readFileSync(`${raiz}/${nome}`, 'utf8'));
const schema = ler('GEP_SKILL_SYNC.schema.json');
const ida = ler('SYNC_CHATGPT_PARA_CLAUDE.json');
const volta = ler('SYNC_CLAUDE_PARA_CHATGPT.template.json');

const ajv = new Ajv2020({
  allErrors: true,
  strict: true,
  formats: {
    'date-time': (valor) => !Number.isNaN(Date.parse(valor)) && /T.+(?:Z|[+-]\d{2}:\d{2})$/.test(valor),
  },
});
const validar = ajv.compile(schema);
let erros = 0;

for (const [nome, documento] of [
  ['SYNC_CHATGPT_PARA_CLAUDE.json', ida],
  ['SYNC_CLAUDE_PARA_CHATGPT.template.json', volta],
]) {
  if (!validar(documento)) {
    erros += 1;
    console.error(`✗ ${nome}`);
    for (const erro of validar.errors ?? []) console.error(`  ${erro.instancePath || '/'}: ${erro.message}`);
  } else {
    console.log(`✓ ${nome}`);
  }
}

const assuntosEsperados = [
  ...ida.rules.map((regra) => `rule:${regra.id}`),
  ...ida.artifacts.map((artefato) => `artifact:${artefato.id}`),
].sort();
const assuntosDecididos = (volta.decisions ?? [])
  .map((decisao) => `${decisao.subject_kind}:${decisao.subject_id}`)
  .sort();

if (JSON.stringify(assuntosDecididos) !== JSON.stringify(assuntosEsperados)) {
  erros += 1;
  console.error('✗ O template recíproco não decide exatamente todas as regras e artefatos da ida.');
} else {
  console.log(`✓ decisões recíprocas completas (${assuntosEsperados.length} itens)`);
}

process.exit(erros ? 1 : 0);

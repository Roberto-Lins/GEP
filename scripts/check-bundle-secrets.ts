// Verifica que NENHUM segredo de servidor vazou para o bundle do CLIENTE.
//
// Procura, nos assets estáticos do build, a referência ao nome da variável
// SUPABASE_SERVICE_ROLE_KEY (que só apareceria se o módulo admin tivesse sido
// arrastado para o cliente) e — se a variável estiver no ambiente — o próprio valor.
// Rode SEMPRE depois de `npm run build`. Usado no CI.

import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const CLIENT_DIRS = ['.vercel/output/static', 'dist'];
const SCAN_EXT = /\.(js|mjs|cjs|json|html|css)$/;

const needles: string[] = ['SUPABASE_SERVICE_ROLE_KEY'];
const secretValue = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (secretValue && secretValue.length > 12) needles.push(secretValue);

function walk(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    const s = statSync(p);
    if (s.isDirectory()) out.push(...walk(p));
    else if (SCAN_EXT.test(entry)) out.push(p);
  }
  return out;
}

const root = CLIENT_DIRS.find((d) => existsSync(d));
if (!root) {
  console.error('check:secrets — build do cliente não encontrado. Rode `npm run build` antes.');
  process.exit(1);
}

const files = walk(root);
const hits: string[] = [];
for (const file of files) {
  const content = readFileSync(file, 'utf8');
  for (const needle of needles) {
    if (content.includes(needle)) hits.push(`${file} contém "${needle.slice(0, 16)}…"`);
  }
}

if (hits.length > 0) {
  console.error(`❌ check:secrets — possível segredo no bundle do cliente (${root}):`);
  for (const h of hits) console.error('  - ' + h);
  process.exit(1);
}

console.log(`✓ check:secrets — ${files.length} arquivos em ${root}; nenhum segredo de servidor encontrado.`);

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { extname, join, relative } from 'node:path';
import { looksLikeMath } from '../src/utils/math-notation.mjs';

const ROOTS = ['src/content/cursos', 'src/data/cursos'];
const TEXT_EXT = new Set(['.md', '.mdx', '.ts', '.tsx', '.js', '.jsx', '.json']);
const STRICT = process.argv.includes('--strict');

const warnings = [];
const errors = [];

function walk(path) {
  const stat = statSync(path);
  if (stat.isDirectory()) {
    for (const name of readdirSync(path)) walk(join(path, name));
    return;
  }
  if (!TEXT_EXT.has(extname(path))) return;
  inspect(path, readFileSync(path, 'utf8'));
}

function inspect(path, text) {
  const rel = relative(process.cwd(), path).replaceAll('\\', '/');
  const lines = text.replace(/\r/g, '').split('\n');
  let fenced = false;
  let displayOpen = false;

  lines.forEach((line, index) => {
    const lineNo = index + 1;
    if (/^\s*```/.test(line)) {
      fenced = !fenced;
      return;
    }
    if (fenced) return;

    // Delimitadores display incompletos são erro real de renderização.
    const displayCount = (line.match(/\$\$/g) ?? []).length;
    if (displayCount % 2 === 1) displayOpen = !displayOpen;

    // Matemática inline: número ímpar de $ simples na linha (descontando $$).
    const withoutDisplay = line.replace(/\$\$/g, '');
    const inlineCount = (withoutDisplay.match(/(?<!\\)\$/g) ?? []).length;
    if (inlineCount % 2 === 1) {
      errors.push(`${rel}:${lineNo} — delimitador $ inline sem par`);
    }

    // Dívida legada: fórmula escrita como inline code.
    for (const match of line.matchAll(/`([^`]+)`/g)) {
      const candidate = match[1];
      if (looksLikeMath(candidate)) {
        warnings.push(`${rel}:${lineNo} — notação legada entre crases: \`${candidate}\``);
      }
    }

    // Padrões ASCII particularmente indesejados fora de blocos de código.
    if (/(?:\b[A-Za-z]\w*\s*\^\s*\d+\s*\/|\b[A-Za-z]\w*\s*\/\s*[A-Za-z0-9(])/.test(withoutDisplay) && !line.includes('$')) {
      warnings.push(`${rel}:${lineNo} — possível fórmula linear fora de delimitadores matemáticos`);
    }
  });

  if (displayOpen) errors.push(`${rel} — bloco $$ aberto e não fechado`);
}

for (const root of ROOTS) {
  try {
    walk(root);
  } catch (error) {
    errors.push(`${root} — falha ao varrer: ${error instanceof Error ? error.message : String(error)}`);
  }
}

const uniqueWarnings = [...new Set(warnings)];
const uniqueErrors = [...new Set(errors)];

if (uniqueWarnings.length) {
  console.log(`\n⚠ ${uniqueWarnings.length} ocorrência(s) de notação matemática legada:`);
  for (const item of uniqueWarnings) console.log(`  - ${item}`);
  console.log('\nA camada de compatibilidade renderiza essas ocorrências em KaTeX, mas conteúdo novo deve usar $...$ / $$...$$.');
}

if (uniqueErrors.length) {
  console.error(`\n✗ ${uniqueErrors.length} erro(s) de delimitador matemático:`);
  for (const item of uniqueErrors) console.error(`  - ${item}`);
  process.exit(1);
}

if (STRICT && uniqueWarnings.length) {
  console.error('\n✗ Modo estrito: elimine a notação legada acima antes de concluir a migração.');
  process.exit(2);
}

console.log(`\n✓ Validação matemática concluída: ${uniqueErrors.length} erro(s), ${uniqueWarnings.length} legado(s).`);

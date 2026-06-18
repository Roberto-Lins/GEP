// Lista mídia pesada ainda versionada em public/ (candidata a externalização).
// Não remove nada. Uso: npm run audit-media   [limite em MB, default 2]
import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const LIMITE_MB = Number(process.argv[2] ?? 2);
const PESADAS = ['.mp4', '.webm', '.mkv', '.mov', '.m4a', '.mp3', '.wav', '.pdf', '.pptx', '.zip'];

interface Item { caminho: string; mb: number; ext: string }
const itens: Item[] = [];

function varrer(dir: string) {
  for (const nome of readdirSync(dir)) {
    const p = join(dir, nome);
    const s = statSync(p);
    if (s.isDirectory()) varrer(p);
    else {
      const ext = nome.slice(nome.lastIndexOf('.')).toLowerCase();
      const mb = s.size / (1024 * 1024);
      if (mb >= LIMITE_MB || PESADAS.includes(ext)) {
        if (mb >= LIMITE_MB) itens.push({ caminho: p, mb, ext });
      }
    }
  }
}

varrer('public');
itens.sort((a, b) => b.mb - a.mb);

console.log(`Mídia em public/ ≥ ${LIMITE_MB} MB (candidata a CDN/YouTube — ver docs/MEDIA-PROTOCOL.md):\n`);
let total = 0;
for (const i of itens) {
  total += i.mb;
  const flag = PESADAS.includes(i.ext) ? '⚠' : ' ';
  console.log(`  ${flag} ${i.mb.toFixed(1).padStart(7)} MB  ${i.caminho}`);
}
console.log(`\n${itens.length} arquivo(s), ${total.toFixed(1)} MB no total.`);
if (itens.length === 0) console.log('Nenhuma mídia pesada versionada. 🎉');

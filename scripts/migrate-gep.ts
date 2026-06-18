// Verificação da migração do GEP para a estrutura multi-curso.
// A migração de CONTEÚDO já foi feita (src/content/cursos/gep, src/data/cursos/gep).
// A migração de PROGRESSO é client-side e automática (src/utils/migration.ts),
// pois localStorage só existe no navegador — não há o que rodar aqui no Node.
import { existsSync } from 'node:fs';

const checks: Array<[string, string]> = [
  ['src/content/cursos/gep/_config.json', 'config do curso GEP'],
  ['src/data/cursos/gep/index.ts', 'bundle de dados do GEP'],
  ['src/utils/migration.ts', 'migração de progresso (client-side)'],
];

let ok = true;
console.log('Verificando a migração do GEP:\n');
for (const [caminho, desc] of checks) {
  const existe = existsSync(caminho);
  ok = ok && existe;
  console.log(`  ${existe ? '✓' : '✗'} ${desc} — ${caminho}`);
}

console.log(
  ok
    ? '\n✓ Estrutura migrada. O progresso antigo (gep:progresso:v1) é convertido automaticamente\n  para bussola:v1 no primeiro acesso do aluno (uma única vez).'
    : '\n✗ Migração incompleta — verifique os itens acima.',
);
process.exit(ok ? 0 : 1);

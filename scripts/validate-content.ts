// Valida os _config.json (cursos) e _dados.json (mini-matérias) de todos os cursos
// contra os schemas Zod. Uso: npm run validate-content
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { cursoConfigSchema, dadosMateriaSchema } from '../src/content/schemas';

const CURSOS_DIR = 'src/content/cursos';
let erros = 0;
let avisos = 0;

function erro(msg: string) { erros++; console.error('  ✗ ' + msg); }
function aviso(msg: string) { avisos++; console.warn('  ! ' + msg); }

function lerJSON(caminho: string): unknown {
  return JSON.parse(readFileSync(caminho, 'utf8'));
}

if (!existsSync(CURSOS_DIR)) {
  console.error(`Pasta de cursos não encontrada: ${CURSOS_DIR}`);
  process.exit(1);
}

const cursos = readdirSync(CURSOS_DIR).filter((d: string) => statSync(join(CURSOS_DIR, d)).isDirectory());
if (cursos.length === 0) console.warn('Nenhum curso encontrado.');

for (const curso of cursos) {
  console.log(`\n▶ Curso: ${curso}`);
  const cursoPath = join(CURSOS_DIR, curso);

  // _config.json
  const configPath = join(cursoPath, '_config.json');
  if (!existsSync(configPath)) {
    erro(`falta _config.json em ${cursoPath}`);
  } else {
    const r = cursoConfigSchema.safeParse(lerJSON(configPath));
    if (!r.success) {
      erro(`_config.json inválido: ${r.error.issues.map((i) => `${i.path.join('.')}: ${i.message}`).join('; ')}`);
    } else if (r.data.slug !== curso) {
      erro(`_config.json: slug "${r.data.slug}" ≠ pasta "${curso}"`);
    } else {
      console.log('  ✓ _config.json');
    }
  }

  // mini-matérias
  const materias = readdirSync(cursoPath).filter((d: string) => statSync(join(cursoPath, d)).isDirectory());
  for (const materia of materias) {
    const matPath = join(cursoPath, materia);
    const dadosPath = join(matPath, '_dados.json');
    if (!existsSync(dadosPath)) {
      aviso(`${materia}: sem _dados.json`);
      continue;
    }
    const r = dadosMateriaSchema.safeParse(lerJSON(dadosPath));
    if (!r.success) {
      erro(`${materia}/_dados.json inválido: ${r.error.issues.map((i) => `${i.path.join('.')}: ${i.message}`).join('; ')}`);
    } else if (r.data.slug !== materia) {
      erro(`${materia}/_dados.json: slug "${r.data.slug}" ≠ pasta "${materia}"`);
    }
  }
}

console.log(`\n${erros === 0 ? '✓' : '✗'} Validação concluída — ${erros} erro(s), ${avisos} aviso(s).`);
process.exit(erros > 0 ? 1 : 0);

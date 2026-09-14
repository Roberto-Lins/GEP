import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const CURSOS_DIR = 'src/content/cursos';
const destinoIndex = process.argv.indexOf('--write');
const destino = destinoIndex >= 0 ? process.argv[destinoIndex + 1] : undefined;
const revisao = execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();

const configs = readdirSync(CURSOS_DIR)
  .filter((slug) => existsSync(join(CURSOS_DIR, slug, '_config.json')))
  .map((slug) => ({ slug, config: JSON.parse(readFileSync(join(CURSOS_DIR, slug, '_config.json'), 'utf8')) }));

const cursos = [] as Array<Record<string, unknown>>;
for (const { slug, config } of configs) {
  const indexPath = resolve('src/data/cursos', slug, 'index.ts');
  const bundle = existsSync(indexPath)
    ? await import(`${pathToFileURL(indexPath).href}?audit=${Date.now()}`)
    : {};
  const timeline = Array.isArray(bundle.timeline) ? bundle.timeline : [];
  const questoes = Array.isArray(bundle.todasQuestoes) ? bundle.todasQuestoes : [];
  const checklists = bundle.checklists && typeof bundle.checklists === 'object' ? bundle.checklists : {};
  const checklistIds = Object.entries(checklists).flatMap(([materia, itens]) =>
    (Array.isArray(itens) ? itens : []).map((item: { id?: string }) => `${materia}:${item.id ?? '[sem-id]'}`),
  );
  cursos.push({
    slug,
    modalidade: config.estudo?.id ?? 'completo',
    legado_somente_completo: !config.estudo,
    rotas_preservadas: [
      `/${slug}`, `/${slug}/timeline`, `/${slug}/questoes`, `/${slug}/simulados`,
      `/${slug}/revisao-final`, `/${slug}/fontes`,
    ],
    modulos: timeline.map((item: { slug?: string }) => item.slug),
    quantidade_modulos: timeline.length,
    questoes: questoes.map((item: { id?: string }) => item.id),
    quantidade_questoes: questoes.length,
    checklists: checklistIds,
    quantidade_checklists: checklistIds.length,
  });
}

const documento = {
  schema_version: '1.0.0',
  finalidade: 'Inventário de preservação anterior ao contrato de modalidades de estudo.',
  revisao_base: revisao,
  progresso: {
    chave: 'bussola:v1',
    estrategia: 'compatibilidade-equivalente',
    mapeamento: 'curso legado mantém o mesmo slug e é interpretado como modalidade completo; nenhuma chave é renomeada ou apagada.',
  },
  totais: {
    cursos: cursos.length,
    modulos: cursos.reduce((n, c) => n + Number(c.quantidade_modulos), 0),
    questoes: cursos.reduce((n, c) => n + Number(c.quantidade_questoes), 0),
    checklists: cursos.reduce((n, c) => n + Number(c.quantidade_checklists), 0),
  },
  cursos,
};

const saida = JSON.stringify(documento, null, 2) + '\n';
if (destino) {
  mkdirSync(dirname(destino), { recursive: true });
  writeFileSync(destino, saida);
  console.log(`Inventário salvo em ${destino}`);
}
console.log(saida);

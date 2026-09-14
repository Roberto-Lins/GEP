// Valida os _config.json (cursos) e _dados.json (mini-matérias) de todos os cursos
// contra os schemas Zod. Uso: npm run validate-content
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import Ajv2020 from 'ajv/dist/2020.js';
import { cursoConfigSchema, dadosMateriaSchema, type CursoConfigSchema } from '../src/content/schemas';
import { MODALIDADES_ESTUDO } from '../src/types/study-mode';

if (process.env.GEP_PROJECT_ROOT) process.chdir(process.env.GEP_PROJECT_ROOT);

const CURSOS_DIR = 'src/content/cursos';
let erros = 0;
let avisos = 0;
const configsValidos: CursoConfigSchema[] = [];

function erro(msg: string) { erros++; console.error('  ✗ ' + msg); }
function aviso(msg: string) { avisos++; console.warn('  ! ' + msg); }

function lerJSON(caminho: string): unknown {
  return JSON.parse(readFileSync(caminho, 'utf8'));
}

function sha256Arquivo(caminho: string): string {
  return createHash('sha256').update(readFileSync(caminho)).digest('hex');
}

function sha256Origens(caminhos: string[]): string {
  const hash = createHash('sha256');
  for (const caminho of [...caminhos].sort()) {
    hash.update(caminho).update('\0').update(readFileSync(caminho)).update('\0');
  }
  return hash.digest('hex');
}

function listarArquivosRecursivos(dir: string): string[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((nome) => {
    const caminho = join(dir, nome);
    return statSync(caminho).isDirectory() ? listarArquivosRecursivos(caminho) : [caminho];
  });
}

const ajv = new Ajv2020({ allErrors: true, strict: true });
const validarPerfilSchema = ajv.compile(lerJSON(fileURLToPath(new URL('../docs/schemas/GEP_CHARGE_PROFILE.schema.json', import.meta.url))) as object);
const validarMatrizSchema = ajv.compile(lerJSON(fileURLToPath(new URL('../docs/schemas/GEP_COVERAGE_MATRIX.schema.json', import.meta.url))) as object);
const resumoErrosSchema = (errosSchema: typeof validarPerfilSchema.errors) =>
  (errosSchema ?? []).map((item) => `${item.instancePath || '/'}: ${item.message}`).join('; ');

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
      configsValidos.push(r.data);
      const cadernos = r.data.downloads.filter((item) => item.tipo === 'caderno_de_revisao');
      if (r.data.features.cadernoRevisao && cadernos.length !== 1) {
        erro('_config.json: cadernoRevisao ativo exige exatamente um download caderno_de_revisao');
      }
      if (!r.data.features.cadernoRevisao && cadernos.length > 0) {
        erro('_config.json: download caderno_de_revisao existe com a feature desligada');
      }
      for (const item of cadernos) {
        const pdfPath = join('public', item.arquivo.replace(/^\//, ''));
        if (!existsSync(pdfPath) || !statSync(pdfPath).isFile()) {
          erro(`caderno ausente: ${pdfPath}`);
          continue;
        }
        if (sha256Arquivo(pdfPath) !== item.hash_sha256) {
          erro(`caderno alterado sem atualizar hash: ${pdfPath}`);
        }
        const proibido = item.regenerar_se_mudar.find((p) => /[*?\[\]]/.test(p));
        if (proibido) {
          erro(`regenerar_se_mudar exige caminho exato, não glob: ${proibido}`);
          continue;
        }
        const ausente = item.regenerar_se_mudar.find((p) => !existsSync(p) || !statSync(p).isFile());
        if (ausente) {
          erro(`origem do caderno ausente: ${ausente}`);
          continue;
        }
        if (sha256Origens(item.regenerar_se_mudar) !== item.origem_sha256) {
          erro(`caderno desatualizado: entradas em regenerar_se_mudar foram alteradas`);
        }
      }
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

// Contrato global das famílias multimodais. Cursos sem `estudo` são legados
// complete-only e permanecem válidos sem reescrita de conteúdo ou progresso.
const familias = new Map<string, CursoConfigSchema[]>();
for (const config of configsValidos.filter((c) => c.estudo)) {
  const id = config.estudo!.familiaId;
  familias.set(id, [...(familias.get(id) ?? []), config]);
}

for (const [familiaId, membros] of familias) {
  console.log(`\n◆ Família multimodal: ${familiaId}`);
  const ids = membros.map((c) => c.estudo!.id).sort();
  const esperados = [...MODALIDADES_ESTUDO].sort();
  if (JSON.stringify(ids) !== JSON.stringify(esperados)) {
    erro(`família ${familiaId}: deve conter exatamente rapido, pra-safar e completo; recebeu ${ids.join(', ')}`);
  }

  const referencia = membros[0].estudo!;
  for (const config of membros) {
    const meta = config.estudo!;
    if (config.slug !== `${familiaId}--${meta.id}`) erro(`${config.slug}: slug deve seguir ${familiaId}--${meta.id}`);
    if (meta.familiaTitulo !== referencia.familiaTitulo || meta.modalidadePadrao !== 'completo') {
      erro(`${config.slug}: metadados familiares divergentes`);
    }
    if (JSON.stringify(meta.modalidadesDisponiveis) !== JSON.stringify(MODALIDADES_ESTUDO)) {
      erro(`${config.slug}: modalidadesDisponiveis deve manter a ordem canônica`);
    }
    if (meta.legadoSomenteCompleto) erro(`${config.slug}: variante nova não pode ser marcada como legado`);
    if (meta.estadoAutoria !== 'publicado') erro(`${config.slug}: rascunho não pode ser publicado`);
    if (!meta.duracaoMinutos) erro(`${config.slug}: duração deve ser calculada a partir do conteúdo real`);

    const pastaData = join('src/data/cursos', config.slug);
    if (!existsSync(join(pastaData, 'index.ts'))) erro(`${config.slug}: bundle de dados ausente`);
    const conteudos = listarArquivosRecursivos(join(CURSOS_DIR, config.slug)).filter((nome) => nome.endsWith('.mdx') || nome.endsWith('.json'));
    if (conteudos.some((nome) => readFileSync(nome, 'utf8').includes('PENDENTE'))) {
      erro(`${config.slug}: contém marcador PENDENTE`);
    }
  }

  const pastaCompartilhada = join('src/data/cursos/_familias', familiaId);
  const perfilPath = join(pastaCompartilhada, 'perfil-cobranca.json');
  const matrizPath = join(pastaCompartilhada, 'matriz-cobertura.json');
  const questoesPath = join(pastaCompartilhada, 'questoes.ts');
  for (const obrigatorio of [perfilPath, matrizPath, questoesPath]) {
    if (!existsSync(obrigatorio)) erro(`família ${familiaId}: artefato obrigatório ausente: ${obrigatorio}`);
  }
  if (!existsSync(perfilPath) || !existsSync(matrizPath)) continue;

  const perfilBruto = lerJSON(perfilPath);
  if (!validarPerfilSchema(perfilBruto)) erro(`família ${familiaId}: perfil fora do schema — ${resumoErrosSchema(validarPerfilSchema.errors)}`);
  const perfil = perfilBruto as { status?: string; fontes_localizadas?: unknown[]; incertezas?: unknown[] };
  if (perfil.status !== 'confirmado') erro(`família ${familiaId}: perfil de cobrança não confirmado`);
  if (!perfil.fontes_localizadas?.length && !perfil.incertezas?.length) {
    erro(`família ${familiaId}: perfil sem fontes localizadas nem incerteza explícita`);
  }

  const matrizBruta = lerJSON(matrizPath);
  if (!validarMatrizSchema(matrizBruta)) erro(`família ${familiaId}: matriz fora do schema — ${resumoErrosSchema(validarMatrizSchema.errors)}`);
  const matriz = matrizBruta as {
    status?: string;
    conceitos?: Array<{
      concept_id?: string; examinavel?: boolean; fontes_localizadas?: unknown[];
      presenca?: Record<string, boolean>; profundidade?: Record<string, string | null>;
      justificativa?: Record<string, string>; questoes?: string[];
    }>;
  };
  if (matriz.status !== 'confirmada') erro(`família ${familiaId}: matriz de cobertura não confirmada`);
  if (!matriz.conceitos?.length) erro(`família ${familiaId}: matriz sem conceitos`);
  const conceptIds = new Set<string>();
  for (const conceito of matriz.conceitos ?? []) {
    if (!conceito.concept_id || conceptIds.has(conceito.concept_id)) erro(`família ${familiaId}: concept_id ausente ou duplicado`);
    else conceptIds.add(conceito.concept_id);
    if (!conceito.fontes_localizadas?.length) erro(`${conceito.concept_id}: fonte/localização obrigatória ausente`);
    if (!conceito.presenca?.completo) erro(`${conceito.concept_id}: todo conceito deve estar em completo`);
    if (conceito.examinavel && !conceito.presenca?.['pra-safar']) erro(`${conceito.concept_id}: conteúdo examinável ausente de pra-safar`);
    for (const modo of MODALIDADES_ESTUDO) {
      if (conceito.presenca?.[modo] && !conceito.justificativa?.[modo]) erro(`${conceito.concept_id}: inclusão em ${modo} sem justificativa`);
      if (conceito.presenca?.[modo] && !conceito.profundidade?.[modo]) erro(`${conceito.concept_id}: inclusão em ${modo} sem profundidade definida`);
    }
  }

  let questoesCanonicas: Array<{ id: string; conceptIds?: string[]; modalidades?: string[] }> = [];
  if (existsSync(questoesPath)) {
    const moduloCanonico = await import(
      `${pathToFileURL(join(process.cwd(), questoesPath)).href}?canonical=${Date.now()}`
    ) as { questoesCanonicas?: typeof questoesCanonicas };
    questoesCanonicas = moduloCanonico.questoesCanonicas ?? [];
  }
  const questoesPorId = new Map<string, (typeof questoesCanonicas)[number]>();
  for (const questao of questoesCanonicas) {
    if (!questao.id || questoesPorId.has(questao.id)) erro(`família ${familiaId}: questão canônica sem ID ou duplicada (${questao.id})`);
    else questoesPorId.set(questao.id, questao);
    if (!questao.conceptIds?.length) erro(`${questao.id}: questão canônica sem conceptIds`);
    if (!questao.modalidades?.length) erro(`${questao.id}: questão canônica sem modalidades`);
    for (const conceptId of questao.conceptIds ?? []) {
      const conceito = matriz.conceitos?.find((item) => item.concept_id === conceptId);
      if (!conceito) erro(`${questao.id}: concept_id ${conceptId} não existe na matriz`);
      else if (!conceito.questoes?.includes(questao.id)) erro(`${questao.id}: vínculo ausente em ${conceptId}.questoes`);
      for (const modo of questao.modalidades ?? []) {
        if (!conceito?.presenca?.[modo]) erro(`${questao.id}: declara ${modo}, mas ${conceptId} não é ensinado nesse modo`);
      }
    }
  }
  for (const conceito of matriz.conceitos ?? []) {
    for (const questaoId of conceito.questoes ?? []) {
      if (!questoesPorId.has(questaoId)) erro(`${conceito.concept_id}: referencia questão canônica inexistente ${questaoId}`);
    }
  }

  const assinaturasQuestoes = new Map<string, string>();
  for (const config of membros) {
    const modo = config.estudo!.id;
    const dadosArquivos = listarArquivosRecursivos(join(CURSOS_DIR, config.slug)).filter((nome) => nome.endsWith('_dados.json'));
    for (const dadosArquivo of dadosArquivos) {
      const dados = dadosMateriaSchema.parse(lerJSON(dadosArquivo));
      if (dados.modalidade !== modo) erro(`${dadosArquivo}: modalidade divergente de ${modo}`);
      if (dados.slug !== '99-revisao-final' && !dados.conceptIds?.length) erro(`${dadosArquivo}: conceptIds obrigatório`);
      for (const conceptId of dados.conceptIds ?? []) {
        if (!conceptIds.has(conceptId)) erro(`${dadosArquivo}: concept_id ${conceptId} não existe na matriz`);
      }
    }

    const indexPath = join(process.cwd(), 'src/data/cursos', config.slug, 'index.ts');
    if (!existsSync(indexPath)) continue;
    const bundle = await import(`${pathToFileURL(indexPath).href}?validate=${Date.now()}`) as {
      todasQuestoes?: Array<{ id: string; conceptIds?: string[]; modalidades?: string[] }>;
    };
    const questoesDaVariante = bundle.todasQuestoes ?? [];
    const esperadas = questoesCanonicas
      .filter((questao) => questao.modalidades?.includes(modo)
        && questao.conceptIds?.every((id) => matriz.conceitos?.find((item) => item.concept_id === id)?.presenca?.[modo]))
      .map((questao) => questao.id)
      .sort();
    const recebidas = questoesDaVariante.map((questao) => questao.id).sort();
    if (JSON.stringify(recebidas) !== JSON.stringify(esperadas)) {
      erro(`${config.slug}: seleção de questões diverge do banco canônico e do escopo ensinado`);
    }
    for (const questao of questoesDaVariante) {
      if (!questao.modalidades?.includes(modo)) erro(`${questao.id}: aparece em ${modo} sem declarar a modalidade`);
      if (!questao.conceptIds?.length) erro(`${questao.id}: sem conceptIds`);
      for (const conceptId of questao.conceptIds ?? []) {
        const conceito = matriz.conceitos?.find((c) => c.concept_id === conceptId);
        if (!conceito?.presenca?.[modo]) erro(`${questao.id}: cobra ${conceptId}, não ensinado em ${modo}`);
      }
      const assinatura = JSON.stringify(questao);
      const anterior = assinaturasQuestoes.get(questao.id);
      if (anterior && anterior !== assinatura) erro(`${questao.id}: conteúdo divergente entre modalidades`);
      assinaturasQuestoes.set(questao.id, assinatura);
    }
  }
}

console.log(`\n${erros === 0 ? '✓' : '✗'} Validação concluída — ${erros} erro(s), ${avisos} aviso(s).`);
process.exit(erros > 0 ? 1 : 0);

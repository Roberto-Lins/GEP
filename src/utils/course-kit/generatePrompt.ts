import type { CourseKitData, DificuldadeQuestao, TipoQuestao } from '@tipos/course-kit';
import { DIFICULDADES, TIPOS_QUESTAO, DIFICULDADE_LABELS, TIPO_QUESTAO_LABELS } from '@tipos/course-kit';
import { MODALIDADE_RESUMOS, MODALIDADES_ESTUDO } from '@tipos/study-mode';
import { ANO_LABELS, SEMESTRE_LABELS, EPOCA_LABELS, TURMA_LABELS } from '@utils/hierarchy-constants';

function contar(data: CourseKitData, d: DificuldadeQuestao, t: TipoQuestao): number {
  return data.questoes.filter((q) => q.dificuldade === d && q.tipo === t).length;
}

function tabelaQuestoes(data: CourseKitData): string {
  const head = `| Dificuldade | ${TIPOS_QUESTAO.map((t) => TIPO_QUESTAO_LABELS[t]).join(' | ')} | Total |`;
  const sep = `|${'---|'.repeat(TIPOS_QUESTAO.length + 2)}`;
  const linhas = DIFICULDADES.map((d) => {
    const cels = TIPOS_QUESTAO.map((t) => contar(data, d, t));
    return `| ${DIFICULDADE_LABELS[d]} | ${cels.join(' | ')} | ${cels.reduce((a, b) => a + b, 0)} |`;
  });
  return [head, sep, ...linhas].join('\n');
}

function listaTopicos(data: CourseKitData): string {
  if (!data.topicos.length) return '_(nenhum tópico informado)_';
  return data.topicos.map((t) => {
    const modos = (t.modalidades ?? []).map((m) => MODALIDADE_RESUMOS[m].rotulo).join(', ') || 'pendente';
    return `- **${t.conceptId || '[concept_id pendente]'} — ${t.titulo}** · modalidades: ${modos}`;
  }).join('\n');
}

export function generatePrompt(data: CourseKitData): string {
  const turmaLabel = data.turma ? TURMA_LABELS[data.turma] : 'Não se aplica (1°/2° ano)';
  const duracoes = MODALIDADES_ESTUDO
    .map((m) => `${MODALIDADE_RESUMOS[m].rotulo}: ${data.duracaoMinutos[m] ?? '[a calcular]'} min`)
    .join(' · ');

  return `# Instalar família de curso: ${data.nome}

> Course Kit multimodal ${data.contratoModalidades}, gerado em ${data.geradoEm}.

# RESPONSABILIDADE

Ative as skills acadêmica e de operação do GEP disponíveis no ambiente. Instale uma família de
curso com três modalidades editoriais concretas e independentes: \`rapido\`, \`pra-safar\` e
\`completo\`. Não produza uma modalidade por truncamento, ocultação ou resumo automático de outra.

# FONTES E PERFIL DE COBRANÇA

Use somente os arquivos e links deste kit. Inventarie cada fonte e sua função, agrupe PDF/ODP/PPTX
do mesmo deck como um testemunho e preserve localizações exatas. O perfil inicial está em
\`perfil-cobranca.json\`; dimensões \`incerta\` devem permanecer incertas até haver evidência.
Provas anteriores revelam o padrão de cobrança, mas não podem ser copiadas ou parafraseadas como
questões novas.

# MATRIZ CANÔNICA

Valide e complete \`matriz-cobertura.json\` antes da autoria. Cada linha exige \`concept_id\`
estável, dependências, fonte/localização, evidência de prioridade, presença e profundidade por
modalidade, justificativa e vínculos com exemplos, figuras, questões e vulnerabilidades.

${listaTopicos(data)}

# CONTRATO DAS MODALIDADES

- **Rápido:** revisão concentrada do núcleo relevante, com pré-requisitos indispensáveis, relações
  críticas, sínteses, erros frequentes e testes ativos. Compacto não significa superficial.
- **Pra Safar:** todo o escopo autorizado e examinável, aprofundado conforme a cobrança, sem
  adjacências dispensáveis.
- **Completo:** todo o Pra Safar, mais mecanismos, condições, exceções, derivações, integrações e
  conexões sustentadas pelo corpus. Pode exigir mais de um dia.

Durações preliminares: ${duracoes}. Recalcule a partir do conteúdo real; não invente duração.
Não use promessa de nota. Modalidade de estudo não é dificuldade das questões.

# ESCOPO DE INSTALAÇÃO

- Família: \`${data.slug}\` — ${data.nome}
- Hierarquia: ${ANO_LABELS[data.ano]} · ${SEMESTRE_LABELS[data.semestre]} · ${EPOCA_LABELS[data.epoca]} · ${turmaLabel}
- Descrição: ${data.descricao || '[pendente]'}
- Evidências informadas sobre a cobrança: ${data.estiloCobranca || '[nenhuma — manter incerteza]'}

Rode \`npm run create-course ${data.slug} "${data.nome}"\`. O scaffold cria os slugs concretos
\`${data.slug}--rapido\`, \`${data.slug}--pra-safar\` e \`${data.slug}--completo\`, além
do banco canônico e dos arquivos compartilhados em \`src/data/cursos/_familias/${data.slug}/\`.
Preencha cada variante sem copiar mecanicamente a estrutura das outras.

# QUESTÕES

${tabelaQuestoes(data)}

Preserve a dificuldade prevista para a prova dentro do conteúdo ensinado em cada modalidade.
Associe toda questão a \`conceptIds\` e \`modalidades\`. Questão compartilhada mantém o mesmo
objeto canônico, ID, enunciado, gabarito e metadados. Uma modalidade só cobra conceitos ensinados
nela. Distratores devem representar erros plausíveis; cálculos exigem verificação independente.

# ESTADO E COMPATIBILIDADE

Não toque nos cursos legados nem em seus slugs. Preserve \`localStorage\` \`bussola:v1\`,
IndexedDB do Caderno, IDs publicados e rotas atuais. As três variantes novas usam seus próprios
slugs, portanto mantêm progresso e Caderno isolados sem sobrescrever estado.

# VALIDAÇÕES

Antes de considerar publicável:

1. elimine todos os marcadores \`PENDENTE\`;
2. confirme que as três configs têm metadados familiares idênticos e duração positiva;
3. confirme que todo conceito examinável está no Pra Safar e todo conceito está no Completo;
4. confirme que questões estão dentro do escopo e IDs compartilhados são idênticos;
5. rode \`npm run validate-content\`, \`npm test\`, \`npm run build\` e \`npm run audit-media\`;
6. inspecione seletor, teclado, leitor de tela, desktop e celular.

# PROIBIÇÕES

Não usar fontes externas, inventar perfil de professor, reduzir dificuldade nos modos menores,
duplicar questão para mudar ID, prometer nota, publicar placeholders ou reescrever cursos legados.

# CRITÉRIO DE PARADA

Pare após instalar e validar integralmente esta família nas três modalidades. Não inicie outra
disciplina e não faça merge ou deploy sem autorização específica.
`;
}

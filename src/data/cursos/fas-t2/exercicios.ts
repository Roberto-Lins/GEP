import banco from './question-bank.json';
import modulos from './module-meta.json';
import type {
  Dificuldade,
  GrupoCorrelacione,
  Questao,
  QuestaoDiscursiva,
  QuestaoMultipla,
  QuestaoVF,
} from '@tipos/question';

export type { Questao } from '@tipos/question';

interface AlternativaOrigem {
  texto: string;
  correta: boolean;
  erro_tipico: string | null;
  letra: string;
}

interface ItemVFOrigem {
  texto: string;
  valor: 'V' | 'F';
  justificativa: string;
  conceitos: string[];
}

interface CorrelacaoOrigem {
  coluna_a: string[];
  coluna_b: string[];
  pares: Record<string, string>;
}

interface ItemDiscursivoOrigem {
  pergunta: string;
  resposta: string;
  pontos: number;
  conceitos: string[];
}

interface EspelhoOrigem {
  item: string;
  resposta_esperada: string;
  pontos: number;
  conceitos: string[];
}

interface QuestaoOrigem {
  id: string;
  tipo: 'OBJ' | 'VF' | 'COR' | 'DIS';
  dificuldade: 'BAS' | 'MED' | 'DIF' | 'MB';
  modulo: string;
  bloco: string;
  competencia: string;
  conceitos: string[];
  vulnerabilidades: string[];
  integracao: string[];
  figura: string | null;
  enunciado: string;
  alternativas?: AlternativaOrigem[];
  itens_vf?: ItemVFOrigem[];
  correlacao?: CorrelacaoOrigem;
  itens?: ItemDiscursivoOrigem[];
  espelho_correcao?: EspelhoOrigem[];
  gabarito: string;
  justificativa: string;
  justificativa_distratores: string | null;
  origem: string;
  adaptada_de: string | null;
  tempo_estimado_s: number;
  pontos: number;
}

const questoesOrigem = banco.questoes as QuestaoOrigem[];
const topicoPorModulo = Object.fromEntries(modulos.map((modulo) => [modulo.id, modulo.slug]));
const topicoSimulados = topicoPorModulo.M15;

const dificuldadePorOrigem: Record<QuestaoOrigem['dificuldade'], Dificuldade> = {
  BAS: 'facil',
  MED: 'medio',
  DIF: 'dificil',
  MB: 'dificil',
};

function imagemDaQuestao(questao: QuestaoOrigem) {
  return questao.figura
    ? `/imagens/cursos/fas-t2/conteudo/${questao.figura}.webp`
    : undefined;
}

function topicoDaQuestao(questao: QuestaoOrigem) {
  return questao.modulo.startsWith('SG') ? topicoSimulados : topicoPorModulo[questao.modulo];
}

function metadados(questao: QuestaoOrigem) {
  const imagem = imagemDaQuestao(questao);
  return {
    dificuldade: dificuldadePorOrigem[questao.dificuldade],
    conceptIds: questao.conceitos,
    origem: 'autoral_suporte' as const,
    fonteId: questao.origem,
    statusGabarito: 'auditado_publicavel' as const,
    competencia: questao.competencia,
    tempoEstimadoMin: Math.max(1, Math.ceil(questao.tempo_estimado_s / 60)),
    materiaisNecessarios: imagem ? ['Figura ou circuito do enunciado'] : undefined,
    anexos: imagem ? [imagem] : undefined,
  };
}

function converterObjetiva(questao: QuestaoOrigem): QuestaoMultipla {
  const alternativas = questao.alternativas ?? [];
  const correta = alternativas.findIndex((alternativa) => alternativa.correta);
  if (correta < 0) throw new Error(`Alternativa correta ausente em ${questao.id}`);
  return {
    id: questao.id,
    tipo: 'multipla',
    topico: topicoDaQuestao(questao),
    enunciado: questao.enunciado,
    imagem: imagemDaQuestao(questao),
    alternativas: alternativas.map((alternativa) => alternativa.texto),
    correta,
    comentario: [questao.justificativa, questao.justificativa_distratores].filter(Boolean).join('\n\n'),
    explicacaoDistratores: alternativas.map((alternativa) =>
      alternativa.correta ? `Alternativa ${alternativa.letra}: correta.` : `Alternativa ${alternativa.letra}: ${alternativa.erro_tipico ?? 'incorreta.'}`,
    ),
    fonte: questao.origem,
    armadilha: questao.justificativa_distratores ?? undefined,
    ...metadados(questao),
  };
}

function separarChave(rotulo: string) {
  const resultado = /^\(([^)]+)\)\s*(.*)$/.exec(rotulo);
  return resultado
    ? { chave: resultado[1].trim(), texto: resultado[2].trim() }
    : { chave: rotulo, texto: rotulo };
}

function limparMarcador(texto: string) {
  return texto.replace(/^\(\s*\)\s*/, '').trim();
}

function converterVF(questao: QuestaoOrigem): GrupoCorrelacione {
  const itens = questao.itens_vf ?? [];
  return {
    id: questao.id,
    tipo: 'correlacione',
    topico: topicoDaQuestao(questao),
    titulo: `${questao.enunciado} — marque V ou F em cada item`,
    imagem: imagemDaQuestao(questao),
    chaves: [
      { chave: 'V', texto: 'Verdadeiro' },
      { chave: 'F', texto: 'Falso' },
    ],
    itens: itens.map((item) => ({ texto: item.texto, chave: item.valor })),
    comentario: itens
      .map((item, indice) => `**${indice + 1}. ${item.valor === 'V' ? 'Verdadeiro' : 'Falso'}.** ${item.justificativa}`)
      .join('\n\n'),
    fonte: questao.origem,
    armadilha: questao.justificativa_distratores ?? undefined,
    ...metadados(questao),
  };
}

function converterCorrelacao(questao: QuestaoOrigem): GrupoCorrelacione {
  const correlacao = questao.correlacao;
  if (!correlacao) throw new Error(`Correlação ausente em ${questao.id}`);
  return {
    id: questao.id,
    tipo: 'correlacione',
    topico: topicoDaQuestao(questao),
    titulo: questao.enunciado,
    imagem: imagemDaQuestao(questao),
    chaves: correlacao.coluna_a.map(separarChave),
    itens: correlacao.coluna_b.map((texto) => ({
      texto: limparMarcador(texto),
      chave: correlacao.pares[texto],
    })),
    comentario: [questao.justificativa, questao.justificativa_distratores].filter(Boolean).join('\n\n'),
    fonte: questao.origem,
    armadilha: questao.justificativa_distratores ?? undefined,
    ...metadados(questao),
  };
}

function converterDiscursiva(questao: QuestaoOrigem): QuestaoDiscursiva {
  const itens = questao.itens ?? [];
  const perguntas = itens.map((item, indice) =>
    `${indice + 1}. ${item.pergunta} (${item.pontos.toLocaleString('pt-BR')} pt)`,
  );
  const respostas = itens.map((item, indice) =>
    `**${indice + 1}.** ${item.resposta}`,
  );
  return {
    id: questao.id,
    tipo: 'discursiva',
    topico: topicoDaQuestao(questao),
    contexto: `${questao.bloco} · ${questao.pontos.toLocaleString('pt-BR')} ponto${questao.pontos === 1 ? '' : 's'} · ${questao.competencia}`,
    enunciado: [questao.enunciado, ...perguntas].join('\n'),
    imagem: imagemDaQuestao(questao),
    gabaritoComentado: [respostas.join('\n\n'), `**Justificativa geral:** ${questao.justificativa}`].join('\n\n'),
    criterios: (questao.espelho_correcao ?? []).map((item) =>
      `${item.item} — ${item.resposta_esperada} (${item.pontos.toLocaleString('pt-BR')} pt)`,
    ),
    criteriosDeCreditoParcial: (questao.espelho_correcao ?? []).map((item) =>
      `${item.item}: ${item.resposta_esperada}`,
    ),
    fonte: questao.origem,
    armadilha: questao.justificativa_distratores ?? undefined,
    ...metadados(questao),
  };
}

function converterQuestao(questao: QuestaoOrigem): Questao {
  if (questao.tipo === 'OBJ') return converterObjetiva(questao);
  if (questao.tipo === 'VF') return converterVF(questao);
  if (questao.tipo === 'COR') return converterCorrelacao(questao);
  return converterDiscursiva(questao);
}

function contarItens(questao: QuestaoOrigem) {
  if (questao.tipo === 'VF') return questao.itens_vf?.length ?? 0;
  if (questao.tipo === 'COR') return questao.correlacao?.coluna_b.length ?? 0;
  if (questao.tipo === 'DIS') return questao.itens?.length ?? 0;
  return 1;
}

const questoesConteudoOrigem = questoesOrigem.filter((questao) => questao.modulo.startsWith('M'));
const questoesSimuladoOrigem = questoesOrigem.filter((questao) => questao.modulo.startsWith('SG'));

export const todasQuestoes: Questao[] = questoesConteudoOrigem.map(converterQuestao);
export const multiplaEscolha: QuestaoMultipla[] = todasQuestoes.filter((questao): questao is QuestaoMultipla => questao.tipo === 'multipla');
export const verdadeiroFalso: QuestaoVF[] = [];
export const correlacionar: GrupoCorrelacione[] = todasQuestoes.filter((questao): questao is GrupoCorrelacione => questao.tipo === 'correlacione');
export const discursivas: QuestaoDiscursiva[] = todasQuestoes.filter((questao): questao is QuestaoDiscursiva => questao.tipo === 'discursiva');

const simuladosMeta = [
  {
    modulo: 'SG01', id: 'simulado-a', titulo: 'Simulado A — Consolidação',
    descricao: '10,0 pontos · 80 itens · sem consulta · consolidação da estrutura prevista para a T2.',
    duracaoMinutos: 105,
  },
  {
    modulo: 'SG02', id: 'simulado-b', titulo: 'Simulado B — Integração',
    descricao: '10,0 pontos · 80 itens · sem consulta · integração entre circuitos, pneumática e hidráulica.',
    duracaoMinutos: 103,
  },
  {
    modulo: 'SG03', id: 'simulado-c', titulo: 'Simulado C — Segurança',
    descricao: '10,0 pontos · 80 itens · sem consulta · margem de segurança e recuperação de vulnerabilidades críticas.',
    duracaoMinutos: 106,
  },
];

const blueprint = [
  { bloco: 'Elétrica 1', pontos: 1.5, objetivo: 'Circuito, componentes, funcionamento e proteções.' },
  { bloco: 'Elétrica 2', pontos: 1.5, objetivo: 'Cinco perguntas diretas gerais.' },
  { bloco: 'Elétrica 3', pontos: 1, objetivo: 'Leitura e explicação de outro circuito.' },
  { bloco: 'Elétrica 4', pontos: 1, objetivo: 'Leitura e explicação de outro circuito.' },
  { bloco: 'Elétrica 5', pontos: 1, objetivo: 'V/F aplicado a circuito.' },
  { bloco: 'Pneumática', pontos: 2, objetivo: 'V/F, objetiva e acionamento pneumático.' },
  { bloco: 'Hidráulica', pontos: 2, objetivo: 'Bombas, válvulas, narrativa de circuito e correlação.' },
];

export const simuladosCompletos = simuladosMeta.map((simulado) => {
  const origem = questoesSimuladoOrigem.filter((questao) => questao.modulo === simulado.modulo);
  return {
    ...simulado,
    pontos: 10,
    itens: origem.reduce((total, questao) => total + contarItens(questao), 0),
    questoes: origem.map(converterQuestao),
    blueprint,
    rubrica: [
      'Resolver em um único bloco, sem consulta.',
      'Corrigir cada subitem pelo espelho; não arredondar a pontuação a favor.',
      'Classificar cada erro como conteúdo, leitura da figura, pegadinha ou tempo.',
      'Retomar o módulo e o conceito indicados antes de avançar ao próximo simulado.',
    ],
  };
});

export const simuladoFinal: Questao[] = simuladosCompletos.flatMap((simulado) => simulado.questoes);

export function questoesPorTopico(slug: string): Questao[] {
  return todasQuestoes.filter((questao) => questao.topico === slug);
}

export const totalQuestoes = {
  multipla: multiplaEscolha.length,
  vf: verdadeiroFalso.length,
  correlacione: correlacionar.length,
  discursiva: discursivas.length,
};

export const metadadosBancoFasT2 = {
  gruposOriginais: questoesOrigem.length,
  gruposDeConteudo: questoesConteudoOrigem.length,
  gruposDeSimulado: questoesSimuladoOrigem.length,
  itensDeConteudo: questoesConteudoOrigem.reduce((total, questao) => total + contarItens(questao), 0),
  itensDeSimulado: questoesSimuladoOrigem.reduce((total, questao) => total + contarItens(questao), 0),
  atualizadoEm: banco.atualizado_em,
  arquitetura: banco.arquitetura,
};

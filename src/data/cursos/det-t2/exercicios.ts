import banco from './question-bank.json';
import type {
  Dificuldade,
  GrupoCorrelacione,
  Questao,
  QuestaoDiscursiva,
  QuestaoMultipla,
  QuestaoVF,
} from '@tipos/question';

export type { Questao } from '@tipos/question';

interface ItemVFOrigem {
  texto: string;
  valor: 'V' | 'F';
  justificativa: string;
}

interface CorrelacaoOrigem {
  coluna_a: string[];
  coluna_b: string[];
  pares: Record<string, string>;
}

interface EtapaCorrecao {
  etapa: string;
  pontos: number;
  criterio: string;
}

interface QuestaoOrigem {
  id_publico: string;
  tipo: 'COR' | 'VF' | 'DIS';
  dificuldade: 'BAS' | 'MED' | 'DIF' | 'MB';
  nivel_usuario: 'N3' | 'N4';
  modulo: 'M01' | 'M02' | 'M03' | 'M04';
  conceitos: string[];
  competencia: string;
  enunciado: string;
  gabarito: string;
  justificativa: string;
  origem: string;
  justificativa_distratores?: string;
  essencial_ate_domingo?: boolean;
  correlacao?: CorrelacaoOrigem;
  itens_vf?: ItemVFOrigem[];
  espelho_correcao?: EtapaCorrecao[];
}

const questoesOrigem = banco.questoes as QuestaoOrigem[];

const topicoPorModulo: Record<QuestaoOrigem['modulo'], string> = {
  M01: '01-fundamentos-do-radar-de-pulso',
  M02: '02-caracteristicas-e-parametros-de-desempenho',
  M03: '03-transmissao-e-formacao-do-pulso',
  M04: '04-recepcao-e-processamento-do-eco',
};

const dificuldadePorOrigem: Record<QuestaoOrigem['dificuldade'], Dificuldade> = {
  BAS: 'facil',
  MED: 'medio',
  DIF: 'dificil',
  MB: 'dificil',
};

function separarChave(rotulo: string) {
  const primeiroEspaco = rotulo.indexOf(' ');
  return primeiroEspaco === -1
    ? { chave: rotulo, texto: rotulo }
    : { chave: rotulo.slice(0, primeiroEspaco), texto: rotulo.slice(primeiroEspaco + 1) };
}

function comentarioVF(questao: QuestaoOrigem) {
  return (questao.itens_vf ?? [])
    .map((item, indice) => `**${String.fromCharCode(97 + indice)}) ${item.valor === 'V' ? 'Verdadeiro' : 'Falso'}.** ${item.justificativa}`)
    .join('\n\n');
}

function comentarioCorrelacao(questao: QuestaoOrigem) {
  const partes = [questao.justificativa];
  if (questao.justificativa_distratores) {
    partes.push(`**Armadilha provável:** ${questao.justificativa_distratores}`);
  }
  return partes.join('\n\n');
}

export const multiplaEscolha: QuestaoMultipla[] = [];
export const verdadeiroFalso: QuestaoVF[] = [];

// Os exercícios V/F da fonte são grupos com vários itens. Eles são modelados como
// correlação V/F para preservar cada grupo e seu ID público sem fragmentá-lo.
export const correlacionar: GrupoCorrelacione[] = questoesOrigem
  .filter((questao) => questao.tipo === 'COR' || questao.tipo === 'VF')
  .map((questao) => {
    if (questao.tipo === 'VF') {
      return {
        id: questao.id_publico,
        tipo: 'correlacione',
        topico: topicoPorModulo[questao.modulo],
        dificuldade: dificuldadePorOrigem[questao.dificuldade],
        titulo: `${questao.enunciado} — marque V ou F em cada item`,
        chaves: [
          { chave: 'V', texto: 'Verdadeiro' },
          { chave: 'F', texto: 'Falso' },
        ],
        itens: (questao.itens_vf ?? []).map((item) => ({ texto: item.texto, chave: item.valor })),
        comentario: comentarioVF(questao),
        fonte: questao.origem,
      };
    }

    const correlacao = questao.correlacao;
    if (!correlacao) throw new Error(`Correlação ausente em ${questao.id_publico}`);

    return {
      id: questao.id_publico,
      tipo: 'correlacione',
      topico: topicoPorModulo[questao.modulo],
      dificuldade: dificuldadePorOrigem[questao.dificuldade],
      titulo: questao.enunciado,
      chaves: correlacao.coluna_a.map(separarChave),
      itens: correlacao.coluna_b.map((texto) => ({ texto, chave: correlacao.pares[texto] })),
      comentario: comentarioCorrelacao(questao),
      fonte: questao.origem,
    };
  });

export const discursivas: QuestaoDiscursiva[] = questoesOrigem
  .filter((questao) => questao.tipo === 'DIS')
  .map((questao) => ({
    id: questao.id_publico,
    tipo: 'discursiva',
    topico: topicoPorModulo[questao.modulo],
    dificuldade: dificuldadePorOrigem[questao.dificuldade],
    contexto: `${questao.nivel_usuario} · ${questao.competencia} · ${questao.conceitos.join(', ')}${questao.essencial_ate_domingo ? ' · essencial no plano original' : ''}`,
    enunciado: questao.enunciado,
    gabaritoComentado: `**Gabarito:** ${questao.gabarito}\n\n**Justificativa:** ${questao.justificativa}`,
    criterios: questao.espelho_correcao?.map(
      (etapa) => `${etapa.etapa} — ${etapa.criterio} (${etapa.pontos.toLocaleString('pt-BR')} ponto${etapa.pontos === 1 ? '' : 's'})`,
    ),
    fonte: questao.origem,
    armadilha: questao.justificativa_distratores,
  }));

export const todasQuestoes: Questao[] = [
  ...multiplaEscolha,
  ...verdadeiroFalso,
  ...correlacionar,
  ...discursivas,
];

export function questoesPorTopico(slug: string): Questao[] {
  return todasQuestoes.filter((questao) => questao.topico === slug);
}

export const totalQuestoes = {
  multipla: multiplaEscolha.length,
  vf: verdadeiroFalso.length,
  correlacione: correlacionar.length,
  discursiva: discursivas.length,
};

export const metadadosBancoDetT2 = {
  gruposOriginais: questoesOrigem.length,
  geradoEm: banco.gerado_em,
  avaliacao: banco.avaliacao,
};

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

type ModuloConteudo = 'M01' | 'M02' | 'M03' | 'M04' | 'M05' | 'M06' | 'M07';
type ModuloSimulado = 'SG01' | 'SG02' | 'SG03';
type ModuloOrigem = ModuloConteudo | ModuloSimulado;

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
  modulo: ModuloOrigem;
  conceitos: string[];
  vulnerabilidades?: string[];
  competencia: string;
  integracao?: string[];
  enunciado: string;
  gabarito: string;
  justificativa: string;
  origem: string;
  justificativa_distratores?: string;
  essencial_ate_domingo?: boolean;
  correlacao?: CorrelacaoOrigem | string[];
  itens_vf?: ItemVFOrigem[];
  espelho_correcao?: Array<EtapaCorrecao | string>;
}

const questoesOrigem = banco.questoes as QuestaoOrigem[];

const topicoPorModulo: Record<ModuloConteudo, string> = {
  M01: '01-fundamentos-do-radar-de-pulso',
  M02: '02-caracteristicas-e-parametros-de-desempenho',
  M03: '03-transmissao-e-formacao-do-pulso',
  M04: '04-recepcao-e-processamento-do-eco',
  M05: '05-diagrama-de-blocos-controles-e-fluxo-do-sinal',
  M06: '06-equacao-radar-ganho-sensibilidade-e-alcance',
  M07: '07-integracao-adjacencias-e-preparacao-final',
};

const dificuldadePorOrigem: Record<QuestaoOrigem['dificuldade'], Dificuldade> = {
  BAS: 'facil',
  MED: 'medio',
  DIF: 'dificil',
  MB: 'dificil',
};

const chavesBlocos = [
  ['A', 'Sincronizador'],
  ['B', 'Modulador'],
  ['C', 'Oscilador'],
  ['D', 'Chave de antena'],
  ['E', 'Oscilador local'],
  ['F', 'Misturador'],
  ['G', 'CAF'],
  ['H', 'Amplificador de FI'],
  ['I', 'Detector de vídeo'],
  ['J', 'CAG'],
  ['K', 'STC'],
  ['L', 'FTC'],
] as const;

const chavesGrandezas = [
  ['A', 'Largura de pulso'],
  ['B', 'FRP'],
  ['C', 'Largura do feixe'],
  ['D', 'Potência de pico'],
  ['E', 'Ganho da antena'],
  ['F', 'Frequência da portadora'],
  ['G', 'Figura de ruído'],
  ['H', 'Banda passante do receptor'],
  ['I', 'Velocidade de rotação da antena'],
  ['J', 'Tempo de recuperação da TR'],
  ['K', 'Seção reta radar'],
  ['L', 'Sensibilidade do receptor'],
] as const;

const chavesPorSimulado: Record<ModuloSimulado, readonly (readonly [string, string])[]> = {
  SG01: chavesBlocos,
  SG02: chavesGrandezas,
  SG03: chavesBlocos,
};

const chavesCompactasPorQuestao: Record<string, readonly (readonly [string, string])[]> = {
  'DET-T2-M06-COR-N3-001': [
    ['A', 'Dobra'],
    ['B', 'Aumenta 19%'],
    ['C', 'Reduz 44%'],
    ['D', 'Não altera'],
    ['E', 'Reduz à metade'],
  ],
  'DET-T2-M06-COR-N3-002': [
    ['A', 'Potência de pico (P)'],
    ['B', 'Ganho da antena (G)'],
    ['C', 'Área efetiva da antena (A)'],
    ['D', 'Seção reta radar do alvo (Aₐ)'],
    ['E', 'Mínimo sinal detectável (Smin)'],
    ['F', 'Comprimento de onda (λ)'],
    ['G', 'Área da esfera (4πR²)'],
    ['H', 'Potência reirradiada pelo alvo (S₃)'],
  ],
  'DET-T2-M06-COR-N4-003': [
    ['A', 'P·Gt/(4πR²)'],
    ['B', 'P·Gt·Arx/(4πR²)'],
    ['C', 'P·G·Aₐ·A/(4πR²)²'],
    ['D', '[P·G·Aₐ·A/((4π)²·Smin)]^(1/4)'],
    ['E', 'c/(2·FRP)'],
    ['F', 'G·λ²/(4π)'],
    ['G', 'c·LP/2'],
  ],
  'DET-T2-M07-COR-N3-001': [
    ['A', 'Radar de pulso'],
    ['B', 'CW-Doppler'],
    ['C', 'CW-FM'],
    ['D', 'MTI'],
    ['E', 'Radar de rastreamento'],
  ],
  'DET-T2-M07-COR-N3-002': [
    ['A', 'MAGE'],
    ['B', 'MAE'],
    ['C', 'MPE'],
    ['D', 'IFF'],
    ['E', 'Radiogoniômetro'],
    ['F', 'Monopulso'],
    ['G', 'Varredura cônica'],
  ],
};

const itensCompletosPorQuestao: Record<string, string[]> = {
  'DET-T2-M06-COR-N3-001': [
    'Multiplicar por 16 a potência de pico de transmissão.',
    'Dobrar a potência de pico de transmissão.',
    'Multiplicar por 10 o mínimo sinal detectável do receptor.',
    'Multiplicar por 16 a seção reta radar do alvo.',
    'Dobrar a frequência de repetição de pulsos, mantido todo o resto.',
    'Reduzir a largura de pulso de 10 µs para 1 µs, com a banda do receptor reajustada a 1/τ.',
    'Multiplicar por 16 o mínimo sinal detectável do receptor.',
    'Aumentar em 12 dB o ganho da antena, mantida a área efetiva.',
  ],
  'DET-T2-M06-COR-N3-002': [
    'Área da superfície da esfera sobre a qual a potência de uma antena isotrópica se distribui.',
    'Área efetiva da antena do radar; obtida a partir do ganho e do comprimento de onda.',
    'Seção reta radar; normalmente vem pronta no enunciado, em m².',
    'Grandeza adimensional que mede a concentração da potência numa direção.',
    'Menor potência de eco que o receptor ainda consegue distinguir do ruído.',
    'Densidade de potência do sinal reirradiado pelo alvo, medida na posição do radar.',
    'Razão c/f; sem ela não se obtém a área efetiva a partir do ganho.',
    'Potência de pico entregue à antena; multiplicá-la por 16 dobra o alcance.',
  ],
  'DET-T2-M06-COR-N4-003': [
    'Potência que um receptor de MAGE capta de um radar distante.',
    'Densidade de potência no eixo do feixe, a uma distância R da antena.',
    'Maior distância em que um alvo ainda é detectado, dada a sensibilidade do receptor.',
    'Área efetiva da antena, quando o enunciado fornece apenas ganho e frequência.',
    'Potência do eco que retorna à antena do radar.',
    'Maior distância indicada sem ambiguidade, dada a frequência de repetição de pulsos.',
    'Poder de separação em distância do radar.',
    'Grandeza que se compara com Smin para decidir se houve detecção.',
  ],
  'DET-T2-M07-COR-N3-001': [
    'Não mede distância, pois seu sinal transmitido não é codificado.',
    'É pulsado e utiliza o efeito Doppler para separar alvos móveis do clutter.',
    'Obtém a distância a partir da frequência de batimento entre o sinal transmitido e o eco.',
    'Seu poder de separação em distância é teoricamente infinito.',
    'Utiliza um range gate dividido em early gate e late gate.',
    'Exige transmissor com coerência de fase, o que inviabiliza o uso da magnetron.',
    'Opera com FRP alta, pulsos de décimos de microssegundo e baixa potência.',
    'É considerado um radar de baixa probabilidade de interceptação (LPI).',
    'Mede a distância pelo tempo de ida e volta de um pulso, segundo d = c·t/2.',
  ],
  'DET-T2-M07-COR-N3-002': [
    'Identifica portadora, modulação, FRP e largura de pulso de um emissor — mas não obtém sua distância.',
    'Interroga em 1.030 MHz e recebe a resposta em 1.090 MHz.',
    'Obtém a direção de um transmissor pelo mínimo de sinal, e seu receptor não possui CAG.',
    'Cria alvos falsos atrasando, amplificando e retransmitindo o pulso recebido.',
    'Emprego de agilidade em frequência, FRP ou LP para dificultar o trabalho do MAGE inimigo.',
    'Compara a intensidade do eco em quatro pontos da antena simultaneamente.',
    'Gira o lóbulo em torno de um eixo de rotação e mede o índice de modulação dos ecos sucessivos.',
    'É um sistema cooperativo: depende de um transponder embarcado no alvo.',
    'Emprega tinta absorvedora e geometria sem ângulos retos para reduzir a seção reta radar.',
  ],
  'DET-T2-SIM-A-Q1': [
    'Sua saída é um pulso retangular de alta tensão cuja duração determina o poder de separação em distância.',
    'Alimenta simultaneamente o transmissor e o indicador, para que a medida de tempo comece junto com o pulso de RF.',
    'Se for uma magnetron, é autoexcitado e produz pulsos de fase aleatória.',
    'Num radar de 1 MW cujo receptor tolera 1 W, sua isolação deve ser de 60 dB.',
    'Sua estabilidade é o que impede que a frequência intermediária varie.',
    'Realiza o batimento entre o eco e um sinal de referência, transladando o eco para uma frequência mais baixa.',
    'Recebe uma amostra do pulso transmitido através de um atenuador.',
    'Define a banda passante do receptor e, com ela, a potência de ruído k·T·B.',
    'Atua por realimentação negativa, com constante de tempo longa, contra ecos de pulso longo.',
    'Seu efeito é máximo nas distâncias curtas e decresce ao longo da varredura.',
    'Atua diferenciando o sinal, no acoplamento entre o detector e o amplificador de vídeo.',
    'Combate o clutter de chuva.',
    'Combate o clutter de mar.',
    'Entrega um pulso de vídeo negativo, com ondulação, correspondente à envoltória.',
    'Determina a frequência de repetição de pulsos e, com ela, o alcance máximo sem ambiguidade.',
    'Num transmissor com amplificador de potência, é ele quem fixa a frequência da portadora a ser amplificada.',
  ],
  'DET-T2-SIM-B-Q1': [
    'Reduzi-la melhora simultaneamente o poder de separação em distância e a distância mínima de detecção.',
    'Aumentá-la eleva o número de pulsos sobre o alvo e reduz o alcance máximo sem ambiguidade.',
    'Reduzi-la melhora o poder de separação em marcação, mas exige antena maior para a mesma frequência.',
    'Multiplicá-la por 16 dobra o alcance — e é a via mais cara em peso, energia e refrigeração.',
    'Somá-la à duração do pulso é obrigatório para obter a distância mínima real.',
    'É a grandeza do alvo que entra no numerador da equação radar.',
    'Reduzi-la é apontado pela fonte como a solução ótima para aumentar o alcance.',
    'Aumentá-la eleva a potência de ruído k·T·B e, por isso, reduz o alcance.',
    'Degrada a relação sinal-ruído em cada estágio; a do primeiro estágio domina a cascata.',
    'Aumentá-la reduz o número de pulsos que incidem sobre um mesmo alvo.',
    'Determina o comprimento de onda e, com ele, o ganho obtido de uma dada área efetiva.',
    'É o parâmetro fixado pelo bloco que liga e desliga o oscilador, e o único do transmissor a afetar duas grandezas de desempenho distintas.',
    'Aumentá-la em 12 dB equivale, em alcance, a multiplicar a potência de pico por 16.',
    'Fixa o tempo de repetição de pulsos e, portanto, o tempo disponível para escutar o eco.',
    'Se for elevada demais, um alvo mais distante que o alcance máximo passa a ser indicado numa distância falsa e menor que a real.',
    'Seu valor se obtém de Fn·k·T₀·Bn·(S/N)mín.',
  ],
  'DET-T2-SIM-C-Q1': [
    'Se ele derivar em frequência, a FI sai da faixa sintonizada e o eco desaparece — e é exatamente isso que o CAF corrige.',
    'Ajustado em excesso, apaga alvos reais próximos junto com o clutter.',
    'Ajustado em excesso, transforma ecos prolongados em traços finos e pode reduzir a detecção de alvos extensos.',
    'Se ele falhar, o indicador perde a referência de t₀ e todas as distâncias saem erradas.',
    'Se seu pulso ficar mais largo, pioram simultaneamente a distância mínima e o poder de separação em distância.',
    'Se ele falhar durante a transmissão, o receptor recebe a potência de pico do transmissor e queima.',
    'É a sua banda passante que liga a largura de pulso à potência de ruído térmico.',
    'É a única realimentação do radar que parte do transmissor e age sobre o receptor.',
    'Sua saída é um pulso de vídeo negativo; quem o amplifica e soma as marcas é o bloco seguinte.',
    'Se sua frequência variar de pulso para pulso, a coerência de fase se perde e o MTI fica impossível.',
    'É nele que a FI nasce, pelo batimento de dois sinais de frequências próximas.',
    'Com constante de tempo longa, ele não responde a ecos pontuais — responde ao que dura.',
    'É ele quem determina quantos pulsos cabem num segundo e, por consequência, o alcance sem ambiguidade.',
    'Seu tempo de recuperação soma-se à largura de pulso no cálculo da distância mínima real.',
    'Alargar sua banda melhora a fidelidade do pulso mas piora a relação sinal-ruído.',
    'Num transmissor com amplificador de potência, ele precisa ser estável em frequência e em fase.',
  ],
};

const enunciadosCompletosSimulado: Record<string, string> = {
  'DET-T2-SIM-A-Q2': `Um radar de pulso tem potência de pico de 400 kW, FRP de 800 ou 1.600 Hz, LP de 2 ou 6 µs, feixe horizontal de 2° e rotação de 15 ou 20 RPM.

a) Dois alvos na mesma marcação, separados por 1.000 m, serão discriminados com todos os parâmetros máximos? Justifique.
b) Determine a potência média máxima.
c) Determine o alcance máximo sem ambiguidade.
d) Determine a menor distância de detecção.
e) Determine a menor quantidade de pulsos sobre um mesmo alvo.
f) Dois alvos em marcações diferentes estão separados por 120 m. Determine a maior distância em que podem ser discriminados.
g) Na FRP de 1.600 Hz, um alvo ambíguo é indicado a 40 km. Onde será indicado ao mudar para 800 Hz?`,
  'DET-T2-SIM-A-Q3': `Um radar opera em 3 GHz com 300 kW de potência de pico, ganho de antena de 35 dB e sensibilidade mínima de −95 dBm.

a) Determine a maior distância de detecção de um alvo com seção reta radar de 50 m².
b) Determine a potência recebida por um MAGE a 250 km, com antena de ganho de 22 dB.`,
  'DET-T2-SIM-A-Q4': `Explique, em uma linha por item, de que forma cada característica afeta o desempenho do radar:

a) frequência da portadora;
b) área efetiva da antena;
c) velocidade de rotação da antena;
d) figura de ruído do receptor.`,
  'DET-T2-SIM-B-Q2': `Um radar de busca tem potência de pico de 800 kW, frequência de 5,6 GHz, ganho de 37 dB, FRP de 500 ou 1.000 Hz, LP de 0,5 ou 5 µs, feixe de 1,5°, rotação de 10 ou 24 RPM, figura de ruído de 5 dB, relação S/N mínima de 13 dB, banda B = 1/LP e alvo de 20 m².

a) Determine o PSD nos dois valores de LP.
b) Determine a maior quantidade de pulsos sobre um alvo.
c) Com LP = 0,5 µs, determine a banda e o mínimo sinal detectável em W e dBm.
d) Com LP = 0,5 µs, determine a área efetiva e o alcance pela equação radar.
e) Determine esse alcance com LP = 5 µs.
f) Determine o alcance sem ambiguidade nas duas FRP.
g) Para busca de longo alcance, escolha LP e FRP; justifique com dois números, identifique o teto limitante e o que se perde.`,
  'DET-T2-SIM-B-Q3': `Um radar de vigilância aérea opera em 1,2 GHz. Sua antena tem área efetiva de 30 m², sensibilidade mínima de −110 dBm e deve detectar um alvo de 5 m² a 400 km.

a) Determine o ganho da antena em dB e a potência de pico necessária.
b) Um MAGE de ganho 15 dB está a 400 km. Determine a potência captada e a razão, em dB, entre ela e o eco recebido pelo radar.`,
  'DET-T2-SIM-B-Q4': `Indique o efeito e o mecanismo em cada item:

a) A LP é reduzida à metade, mantendo a banda casada. O que ocorre com o alcance?
b) Por que um circulador detecta abaixo da distância mínima de um duplexer convencional?
c) Por que alargar a banda do amplificador de FI reduz o ganho por estágio?
d) Por que o CAG usa o nível médio CC, e não o pico, como referência?`,
  'DET-T2-SIM-C-Q2': `Um radar deve detectar um alvo de 10 m² a 200 km. Opera em 9 GHz, com antena de 2,5 m², sensibilidade de −100 dBm, feixe de 1,2°, FRP de 600 ou 1.500 Hz e rotação de 12 ou 20 RPM.

a) Determine o ganho linear e em dB.
b) Determine a potência de pico necessária e verifique o resultado.
c) Determine o menor número de pulsos e o alcance sem ambiguidade em cada FRP; escolha a compatível com 200 km e explique a indicação de um alvo a 220 km na outra.
d) Para um alvo furtivo de 1 m², determine o novo alcance.
e) Determine a potência necessária para recuperar 200 km.
f) Em vez disso, reduza o mínimo sinal detectável em 10 dB e determine o alcance.
g) Compare (e) e (f) e recomende uma solução com base na fonte.`,
  'DET-T2-SIM-C-Q3': `Considere o radar da questão anterior com a potência calculada.

a) Um MAGE de ganho 12 dB está a 350 km. Determine a potência captada e a razão, em dB, para o eco de um alvo de 10 m² naquela distância.
b) Com sensibilidade de −80 dBm, determine até que distância o MAGE captaria o radar e comente o resultado diante dos 200 km de alcance radar.`,
  'DET-T2-SIM-C-Q4': `Para cada decisão, diga o que se ganha e o que se perde, citando as grandezas afetadas:

a) aumentar a FRP;
b) reduzir a largura de pulso;
c) aumentar a frequência da portadora mantendo a área efetiva;
d) estreitar a banda passante do receptor.`,
};

function separarChave(rotulo: string) {
  const primeiroEspaco = rotulo.indexOf(' ');
  return primeiroEspaco === -1
    ? { chave: rotulo, texto: rotulo }
    : { chave: rotulo.slice(0, primeiroEspaco), texto: rotulo.slice(primeiroEspaco + 1) };
}

function separarParSimulado(par: string) {
  const separador = par.lastIndexOf('->');
  if (separador < 0) throw new Error(`Correlação de simulado inválida: ${par}`);
  return {
    texto: par.slice(0, separador).trim(),
    chave: par.slice(separador + 2).trim(),
  };
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

function topicoDaQuestao(questao: QuestaoOrigem) {
  return questao.modulo.startsWith('SG')
    ? '08-simulados-e-protocolo-final'
    : topicoPorModulo[questao.modulo as ModuloConteudo];
}

function converterCorrelacao(questao: QuestaoOrigem): GrupoCorrelacione {
  if (questao.tipo === 'VF') {
    return {
      id: questao.id_publico,
      tipo: 'correlacione',
      topico: topicoDaQuestao(questao),
      dificuldade: dificuldadePorOrigem[questao.dificuldade],
      titulo: `${questao.enunciado} — marque V ou F em cada item`,
      chaves: [
        { chave: 'V', texto: 'Verdadeiro' },
        { chave: 'F', texto: 'Falso' },
      ],
      itens: (questao.itens_vf ?? []).map((item) => ({ texto: item.texto, chave: item.valor })),
      comentario: comentarioVF(questao),
      armadilha: questao.justificativa_distratores,
      fonte: questao.origem,
    };
  }

  const correlacao = questao.correlacao;
  if (!correlacao) throw new Error(`Correlação ausente em ${questao.id_publico}`);

  if (Array.isArray(correlacao)) {
    const chaves = questao.modulo.startsWith('SG')
      ? chavesPorSimulado[questao.modulo as ModuloSimulado]
      : chavesCompactasPorQuestao[questao.id_publico];
    if (!chaves) throw new Error(`Chaves da correlação compacta ausentes em ${questao.id_publico}`);
    const itensCompletos = itensCompletosPorQuestao[questao.id_publico];
    const itens = correlacao.map(separarParSimulado).map((item, indice) => ({
      ...item,
      texto: itensCompletos?.[indice] ?? item.texto,
    }));
    return {
      id: questao.id_publico,
      tipo: 'correlacione',
      topico: topicoDaQuestao(questao),
      dificuldade: dificuldadePorOrigem[questao.dificuldade],
      titulo: questao.enunciado,
      chaves: chaves.map(([chave, texto]) => ({ chave, texto })),
      itens,
      comentario: comentarioCorrelacao(questao),
      armadilha: questao.justificativa_distratores,
      fonte: questao.origem,
    };
  }

  return {
    id: questao.id_publico,
    tipo: 'correlacione',
    topico: topicoDaQuestao(questao),
    dificuldade: dificuldadePorOrigem[questao.dificuldade],
    titulo: questao.enunciado,
    chaves: correlacao.coluna_a.map(separarChave),
    itens: correlacao.coluna_b.map((texto) => ({ texto, chave: correlacao.pares[texto] })),
    comentario: comentarioCorrelacao(questao),
    armadilha: questao.justificativa_distratores,
    fonte: questao.origem,
  };
}

function formatarCriterio(etapa: EtapaCorrecao | string) {
  if (typeof etapa === 'string') return etapa;
  return `${etapa.etapa} — ${etapa.criterio} (${etapa.pontos.toLocaleString('pt-BR')} ponto${etapa.pontos === 1 ? '' : 's'})`;
}

function converterDiscursiva(questao: QuestaoOrigem): QuestaoDiscursiva {
  const integracao = questao.integracao?.length
    ? ` · integração ${questao.integracao.join('→')}`
    : '';
  return {
    id: questao.id_publico,
    tipo: 'discursiva',
    topico: topicoDaQuestao(questao),
    dificuldade: dificuldadePorOrigem[questao.dificuldade],
    contexto: `${questao.nivel_usuario} · ${questao.competencia} · ${questao.conceitos.join(', ')}${integracao}${questao.essencial_ate_domingo ? ' · essencial no plano original' : ''}`,
    enunciado: enunciadosCompletosSimulado[questao.id_publico] ?? questao.enunciado,
    gabaritoComentado: `**Gabarito:** ${questao.gabarito}\n\n**Justificativa:** ${questao.justificativa}`,
    criterios: questao.espelho_correcao?.map(formatarCriterio),
    fonte: questao.origem,
    armadilha: questao.justificativa_distratores,
  };
}

function converterQuestao(questao: QuestaoOrigem): Questao {
  return questao.tipo === 'DIS' ? converterDiscursiva(questao) : converterCorrelacao(questao);
}

const questoesConteudoOrigem = questoesOrigem.filter((questao) => questao.modulo.startsWith('M'));
const questoesSimuladoOrigem = questoesOrigem.filter((questao) => questao.modulo.startsWith('SG'));

export const multiplaEscolha: QuestaoMultipla[] = [];
export const verdadeiroFalso: QuestaoVF[] = [];

// Os grupos V/F da fonte são preservados como correlação V/F para manter cada
// ID público e todos os seus itens sem fragmentação.
export const correlacionar: GrupoCorrelacione[] = questoesConteudoOrigem
  .filter((questao) => questao.tipo === 'COR' || questao.tipo === 'VF')
  .map(converterCorrelacao);

export const discursivas: QuestaoDiscursiva[] = questoesConteudoOrigem
  .filter((questao) => questao.tipo === 'DIS')
  .map(converterDiscursiva);

export const todasQuestoes: Questao[] = [
  ...multiplaEscolha,
  ...verdadeiroFalso,
  ...correlacionar,
  ...discursivas,
];

const simuladosMeta = [
  {
    modulo: 'SG01' as const,
    id: 'simulado-a',
    titulo: 'Simulado A — Consolidação',
    descricao: 'N3 · 100 minutos · mesma estrutura e dificuldade-base da T2 2024.',
    duracaoMinutos: 100,
  },
  {
    modulo: 'SG02' as const,
    id: 'simulado-b',
    titulo: 'Simulado B — Integração',
    descricao: 'N3/N4 · 110 minutos · conecta desempenho, recepção e equação radar.',
    duracaoMinutos: 110,
  },
  {
    modulo: 'SG03' as const,
    id: 'simulado-c',
    titulo: 'Simulado C — Segurança',
    descricao: 'N4 · 120 minutos · deliberadamente mais difícil para criar margem de segurança.',
    duracaoMinutos: 120,
  },
];

export const simuladosCompletos = simuladosMeta.map((simulado) => ({
  id: simulado.id,
  titulo: simulado.titulo,
  descricao: simulado.descricao,
  duracaoMinutos: simulado.duracaoMinutos,
  pontos: 10,
  questoes: questoesSimuladoOrigem
    .filter((questao) => questao.modulo === simulado.modulo)
    .map(converterQuestao),
}));

export const simuladoFinal: Questao[] = simuladosCompletos.flatMap((simulado) => simulado.questoes);

export function questoesPorTopico(slug: string): Questao[] {
  if (slug === '08-simulados-e-protocolo-final') return simuladoFinal;
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
  exerciciosDeModulo: todasQuestoes.length,
  questoesDeSimulado: simuladoFinal.length,
  geradoEm: banco.gerado_em,
  avaliacao: banco.avaliacao,
};

// Linha do tempo oficial da FAS P1.
// Fonte única de verdade para ordem, prioridade e metadados das mini-matérias.
// Reescrita a partir das ORIENTAÇÕES DO PROFESSOR + slides (Aulas) + SOPA.
// Pesos da prova (10,0): Sensores pos/vazão/veloc 3,0 · Sincros 2,0 ·
// Inerciais 1,7 · Erros/incertezas 1,3 · Diagramas 1,0 · Características 1,0.

export type Prioridade = 'alta' | 'muito alta' | 'máxima';
export type Status = 'pendente' | 'em-andamento' | 'concluido';

export interface TopicoTimeline {
  ordem: number;
  slug: string;
  titulo: string;
  subtitulo: string;
  prioridade: Prioridade;
  tempoEstimado: string;
  statusInicial: Status;
  objetivo: string;
  palavrasChave: string[];
}

export const timeline: TopicoTimeline[] = [
  {
    ordem: 0,
    slug: '00-introducao-midias-estrategia',
    titulo: 'Introdução, mídias e estratégia para a prova',
    subtitulo: 'Como a FAS P1 cobra — e por onde começar',
    prioridade: 'alta',
    tempoEstimado: '20 min',
    statusInicial: 'pendente',
    objetivo:
      'Entender a estrutura da prova, a distribuição de pontos, o que é prioridade e o que saiu, e montar a estratégia de estudo. Acessar o áudio e o vídeo gerais.',
    palavrasChave: ['estrutura da prova', 'pesos', 'prioridades', 'SOPA', 'estratégia', 'mídias'],
  },
  {
    ordem: 1,
    slug: '01-diagramas-de-instrumentacao',
    titulo: 'Diagramas de instrumentação',
    subtitulo: 'Ler a malha: tags ISA, ligações e variáveis · 1,0 ponto',
    prioridade: 'alta',
    tempoEstimado: '45 min',
    statusInicial: 'pendente',
    objetivo:
      'Interpretar um diagrama pequeno: nomear os instrumentos pela tag, separar ligação elétrica de pneumática e apontar variável controlada, manipulada e set point.',
    palavrasChave: [
      'set point', 'variável controlada', 'variável manipulada', 'TIC', 'LIC', 'FIC',
      'TT', 'LT', 'FT', 'sensor', 'transmissor', 'controlador', 'atuador', 'realimentação',
      'ligação elétrica', 'ligação pneumática',
    ],
  },
  {
    ordem: 2,
    slug: '02-caracteristicas-estaticas-e-ambientais',
    titulo: 'Características estáticas e ambientais',
    subtitulo: 'Range, span, histerese, IP e o cálculo de histerese · 1,0 ponto',
    prioridade: 'alta',
    tempoEstimado: '1 h',
    statusInicial: 'pendente',
    objetivo:
      'Reconhecer cada característica pela definição e resolver o cálculo de histerese (e linearidade) sem consultar. Dominar IP (1º dígito sólidos, 2º água).',
    palavrasChave: [
      'range', 'span', 'exatidão', 'precisão', 'resolução', 'sensibilidade', 'linearidade',
      'histerese', 'zona morta', 'estabilidade', 'deriva', 'IP', 'características ambientais',
    ],
  },
  {
    ordem: 3,
    slug: '03-erros-medidas-e-incertezas',
    titulo: 'Erros, medidas e incertezas',
    subtitulo: 'Sistemático × aleatório, exatidão × precisão e Kline-McClintock · 1,3 ponto',
    prioridade: 'muito alta',
    tempoEstimado: '1 h 30',
    statusInicial: 'pendente',
    objetivo:
      'Classificar o tipo de erro numa situação dada e fazer uma propagação de Kline completa, terminando em "valor ± incerteza", sem consultar.',
    palavrasChave: [
      'erro absoluto', 'erro relativo', 'incerteza', 'erro sistemático', 'erro aleatório',
      'erro grosseiro', 'medição direta', 'medição indireta', 'exatidão', 'precisão',
      'Kline e McClintock', 'propagação de incertezas',
    ],
  },
  {
    ordem: 4,
    slug: '04-fundamentos-de-sensores-e-transdutores',
    titulo: 'Fundamentos dos sensores e transdutores',
    subtitulo: 'Sensor × transdutor, condicionamento e sinais · base dos 3,0',
    prioridade: 'alta',
    tempoEstimado: '40 min',
    statusInicial: 'pendente',
    objetivo:
      'Diferenciar sensor de transdutor, entender elemento primário, transmissor e condicionamento de sinais (analógico × digital, 4–20 mA e zero vivo).',
    palavrasChave: [
      'sensor', 'transdutor', 'elemento primário', 'transmissor', 'condicionamento de sinais',
      'sinal analógico', 'sinal digital', '4 a 20 mA', 'zero vivo',
    ],
  },
  {
    ordem: 5,
    slug: '05-sensores-de-posicao',
    titulo: 'Sensores de posição e deslocamento',
    subtitulo: 'LVDT, encoders, resolver e potenciômetro · parte dos 3,0',
    prioridade: 'máxima',
    tempoEstimado: '1 h 30',
    statusInicial: 'pendente',
    objetivo:
      'Explicar cada sensor em 1–2 frases, dizer se a saída é analógica ou digital e calcular na hora a resolução de um encoder absoluto (360°/2ⁿ) e o passo de um incremental.',
    palavrasChave: [
      'LVDT', 'núcleo móvel', 'oposição de fase', 'condição de nulo', 'encoder absoluto',
      'encoder incremental', '2ⁿ posições', 'resolução angular', 'resolver', 'potenciômetro',
    ],
  },
  {
    ordem: 6,
    slug: '06-sensores-de-vazao',
    titulo: 'Sensores de vazão',
    subtitulo: 'Placa de orifício, Venturi e eletromagnético · parte dos 3,0',
    prioridade: 'máxima',
    tempoEstimado: '1 h',
    statusInicial: 'pendente',
    objetivo:
      'Dizer, para cada medidor, o princípio, a grandeza medida e como se obtém a vazão; dominar pressão diferencial (Bernoulli) e o eletromagnético (Faraday, fluido condutor).',
    palavrasChave: [
      'vazão volumétrica', 'vazão mássica', 'placa de orifício', 'tubo Venturi', 'Bernoulli',
      'medidor eletromagnético', 'lei de Faraday', 'fluido condutor', 'deslocamento positivo',
    ],
  },
  {
    ordem: 7,
    slug: '07-sensores-de-velocidade-e-conversao',
    titulo: 'Sensores de velocidade e conversão de sinais',
    subtitulo: 'Tacômetros CC/CA e a conversão A/D · parte dos 3,0',
    prioridade: 'máxima',
    tempoEstimado: '1 h',
    statusInicial: 'pendente',
    objetivo:
      'Diferenciar tacômetro CC de CA (sentido pela polaridade só no CC) e obter velocidade da posição; conhecer as 4 fases da conversão A/D e o erro de quantização.',
    palavrasChave: [
      'tacômetro CC', 'tacômetro CA', 'polaridade', 'sentido de rotação', 'escovas', 'comutador',
      'amostragem', 'retenção', 'quantização', 'codificação', 'resolução', 'erro de quantização',
    ],
  },
  {
    ordem: 8,
    slug: '08-giroscopios-acelerometros-e-inerciais',
    titulo: 'Giroscópios, acelerômetros e sistemas inerciais',
    subtitulo: 'Aceleração linear × velocidade angular, o INS, a agulha giroscópica e o efeito Sagnac · 1,7 ponto',
    prioridade: 'muito alta',
    tempoEstimado: '2 h',
    statusInicial: 'pendente',
    objetivo:
      'Não confundir acelerômetro (aceleração linear) com giroscópio (velocidade angular); explicar por que o erro do INS cresce com o tempo; e — reforçados pelo professor — a agulha giroscópica (norte verdadeiro) e o efeito Sagnac (base do RLG/FOG).',
    palavrasChave: [
      'acelerômetro', 'giroscópio', 'aceleração linear', 'velocidade angular', 'roll', 'pitch', 'yaw',
      'INS', 'integração', 'atitude', 'deriva', 'acúmulo de erro', 'APSC',
      'agulha giroscópica', 'gyrocompass', 'norte verdadeiro', 'efeito Sagnac', 'RLG', 'FOG', 'rigidez', 'precessão',
    ],
  },
  {
    ordem: 9,
    slug: '09-sincros',
    titulo: 'Sincros',
    subtitulo: 'TX/TR, CX/CT e TDX/TDR — a tabela-mestre · 2,0 pontos',
    prioridade: 'máxima',
    tempoEstimado: '2 h',
    statusInicial: 'pendente',
    objetivo:
      'Preencher a tabela-mestre de cabeça e explicar em poucas linhas o funcionamento de TX/TR, CX/CT e TDX/TDR, com entradas, saídas e condição de nulo.',
    palavrasChave: [
      'sincro', 'TX', 'TR', 'CX', 'CT', 'TDX', 'TDR', 'rotor', 'estator', 'condição de nulo',
      'sinal de erro', 'torque corretivo', 'transmissão diferencial',
    ],
  },
  {
    ordem: 99,
    slug: '99-revisao-final',
    titulo: 'Revisão final e simulado',
    subtitulo: 'Mapa da prova, erros frequentes, véspera e simulado final',
    prioridade: 'máxima',
    tempoEstimado: '1 h 30',
    statusInicial: 'pendente',
    objetivo:
      'Revisar os pontos de maior peso, fixar os conceitos mais confundidos e fazer o simulado final com a cara da prova.',
    palavrasChave: [
      'simulado', 'revisão', 'mapa da prova', 'erros frequentes', 'tabela de sincros',
      'tabela de sensores', 'fórmulas', 'véspera',
    ],
  },
];

export const PRIORIDADE_META: Record<Prioridade, { label: string; peso: number; classe: string }> = {
  alta: { label: 'Alta', peso: 1, classe: 'text-nevoa border-white/15 bg-white/5' },
  'muito alta': { label: 'Muito alta', peso: 2, classe: 'text-dourado-soft border-dourado/30 bg-dourado/10' },
  máxima: { label: 'Máxima', peso: 3, classe: 'text-naval border-dourado bg-dourado font-semibold' },
};

/** Tópicos de estudo (exclui a revisão final, que tem página própria). */
export const topicosEstudo = timeline.filter((t) => t.ordem < 99);

export const topicoPorSlug = (slug: string) => timeline.find((t) => t.slug === slug);

export function vizinhos(slug: string) {
  const ordenada = [...timeline].sort((a, b) => a.ordem - b.ordem);
  const i = ordenada.findIndex((t) => t.slug === slug);
  return {
    anterior: i > 0 ? ordenada[i - 1] : null,
    proximo: i >= 0 && i < ordenada.length - 1 ? ordenada[i + 1] : null,
  };
}

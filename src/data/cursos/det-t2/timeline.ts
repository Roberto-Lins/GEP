import type { Prioridade, TopicoTimeline } from '@tipos/lesson';

export type { Prioridade } from '@tipos/lesson';

export const timeline: TopicoTimeline[] = [
  {
    ordem: 0,
    slug: '00-mapa-da-t2-e-diagnostico',
    titulo: 'Mapa da T2 e diagnóstico',
    subtitulo: 'Perfil da prova, distribuição de pontos e rota de estudo',
    prioridade: 'máxima',
    tempoEstimado: '25 min',
    statusInicial: 'pendente',
    objetivo: 'Compreender o perfil observado na T2 de 2024 e usar esse diagnóstico para priorizar a trilha sem tratá-lo como garantia sobre a próxima prova.',
    palavrasChave: ['perfil da prova', 'rubrica', 'correlação', 'cálculo encadeado', 'priorização'],
  },
  {
    ordem: 1,
    slug: '01-fundamentos-do-radar-de-pulso',
    titulo: 'Fundamentos do radar de pulso',
    subtitulo: 'Princípio físico, distância, marcação e organização básica',
    prioridade: 'alta',
    tempoEstimado: '40 min',
    statusInicial: 'pendente',
    objetivo: 'Definir RADAR, explicar o princípio físico, aplicar d = c·t/2, converter a milha radar e identificar a organização básica.',
    palavrasChave: ['RADAR', 'd = c·t/2', 'milha radar', 'frequência', 'organização básica'],
  },
  {
    ordem: 2,
    slug: '02-caracteristicas-e-parametros-de-desempenho',
    titulo: 'Características e parâmetros de desempenho',
    subtitulo: 'Potência, resolução, ambiguidade, marcação e pulsos sobre o alvo',
    prioridade: 'máxima',
    tempoEstimado: '75 min',
    statusInicial: 'pendente',
    objetivo: 'Calcular as grandezas de desempenho e escolher corretamente os parâmetros máximos e mínimos pedidos no enunciado.',
    palavrasChave: ['largura de pulso', 'FRP', 'PSD', 'R_mín', 'R_máx', 'PSM', 'N_B'],
  },
  {
    ordem: 3,
    slug: '03-transmissao-e-formacao-do-pulso',
    titulo: 'Transmissão e formação do pulso',
    subtitulo: 'Sincronizador, modulador, magnetron e arquiteturas de transmissor',
    prioridade: 'muito alta',
    tempoEstimado: '80 min',
    statusInicial: 'pendente',
    objetivo: 'Associar os blocos do transmissor às características que determinam e explicar, por meio de formas de onda e do circuito construído por funções, magnetron, RFP e arquiteturas de transmissão.',
    palavrasChave: ['sincronizador', 'modulador', 'magnetron', 'RFP', 'FRP', 'largura de pulso'],
  },
  {
    ordem: 4,
    slug: '04-recepcao-e-processamento-do-eco',
    titulo: 'Recepção e processamento do eco',
    subtitulo: 'Super-heteródino, FI, CAF, CAG, STC, FTC e ruído',
    prioridade: 'máxima',
    tempoEstimado: '75 min',
    statusInicial: 'pendente',
    objetivo: 'Explicar os estágios do receptor e relacionar frequência intermediária, controles automáticos, banda, ruído e sensibilidade.',
    palavrasChave: ['oscilador local', 'misturador', 'FI', 'CAF', 'CAG', 'STC', 'FTC', 'ruído'],
  },
  {
    ordem: 5,
    slug: '05-diagrama-de-blocos-controles-e-fluxo-do-sinal',
    titulo: 'Diagrama de blocos, controles e fluxo do sinal',
    subtitulo: 'Duplexer, indicador, controles externos e fluxo completo do sinal',
    prioridade: 'máxima',
    tempoEstimado: '70 min',
    statusInicial: 'pendente',
    objetivo: 'Integrar transmissão e recepção com a chave de antena, o indicador e os controles externos, percorrendo o diagrama completo nos dois sentidos.',
    palavrasChave: ['duplexer', 'TR e ATR', 'indicador tipo-A', 'PPI', 'controles', 'fluxo do sinal'],
  },
  {
    ordem: 6,
    slug: '06-equacao-radar-ganho-sensibilidade-e-alcance',
    titulo: 'Equação radar, ganho, sensibilidade e alcance',
    subtitulo: 'Densidade de potência, área efetiva, quarta raiz e interceptação por MAGE',
    prioridade: 'muito alta',
    tempoEstimado: '75 min',
    statusInicial: 'pendente',
    objetivo: 'Derivar a equação radar, executar as conversões exigidas e distinguir o caminho de ida e volta do eco do caminho único da interceptação por MAGE.',
    palavrasChave: ['equação radar', 'ganho', 'área efetiva', 'seção reta radar', 'sensibilidade', 'MAGE'],
  },
  {
    ordem: 7,
    slug: '07-integracao-adjacencias-e-preparacao-final',
    titulo: 'Integração, adjacências e preparação final',
    subtitulo: 'Rastreamento, CW-Doppler, CW-FM, MTI, GE, IFF e radiogoniometria',
    prioridade: 'alta',
    tempoEstimado: '60 min',
    statusInicial: 'pendente',
    objetivo: 'Distinguir o radar de pulso dos sistemas adjacentes e integrar rastreamento, Doppler, MTI, Guerra Eletrônica, IFF e radiogoniometria.',
    palavrasChave: ['rastreamento', 'CW-Doppler', 'CW-FM', 'MTI', 'GE', 'IFF', 'radiogoniômetro'],
  },
  {
    ordem: 8,
    slug: '08-simulados-e-protocolo-final',
    titulo: 'Simulados, protocolo de correção e diagnóstico final',
    subtitulo: 'Três provas completas, correção por espelho e plano de reação',
    prioridade: 'máxima',
    tempoEstimado: '45 min',
    statusInicial: 'pendente',
    objetivo: 'Executar os simulados A, B e C em condições válidas, transformar erros em diagnóstico e aplicar o protocolo de prova.',
    palavrasChave: ['simulado A', 'simulado B', 'simulado C', 'espelho', 'diagnóstico', 'protocolo de prova'],
  },
  {
    ordem: 99,
    slug: '99-revisao-final',
    titulo: 'Revisão final e diagnóstico de prontidão',
    subtitulo: 'Mapa da prova, fórmulas, erros recorrentes e simulado completo',
    prioridade: 'máxima',
    tempoEstimado: '60 min',
    statusInicial: 'pendente',
    objetivo: 'Revisar toda a trilha, praticar com o banco completo e identificar as últimas lacunas antes da T2.',
    palavrasChave: ['revisão', 'fórmulas', 'erros recorrentes', 'simulado', 'diagnóstico'],
  },
];

export const PRIORIDADE_META: Record<Prioridade, { label: string; peso: number; classe: string }> = {
  alta: { label: 'Alta', peso: 1, classe: 'text-nevoa border-white/15 bg-white/5' },
  'muito alta': { label: 'Muito alta', peso: 2, classe: 'text-dourado-soft border-dourado/30 bg-dourado/10' },
  máxima: { label: 'Máxima', peso: 3, classe: 'text-naval border-dourado bg-dourado font-semibold' },
};

export const topicosEstudo = timeline.filter((topico) => topico.ordem < 99);
export const topicoPorSlug = (slug: string) => timeline.find((topico) => topico.slug === slug);

export function vizinhos(slug: string) {
  const ordenada = [...timeline].sort((a, b) => a.ordem - b.ordem);
  const indice = ordenada.findIndex((topico) => topico.slug === slug);
  return {
    anterior: indice > 0 ? ordenada[indice - 1] : null,
    proximo: indice >= 0 && indice < ordenada.length - 1 ? ordenada[indice + 1] : null,
  };
}

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
    tempoEstimado: '60 min',
    statusInicial: 'pendente',
    objetivo: 'Associar os blocos do transmissor às características que determinam e explicar magnetron, RFP e arquiteturas de transmissão.',
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
    subtitulo: 'Módulo em produção',
    prioridade: 'máxima',
    tempoEstimado: '70 min',
    statusInicial: 'pendente',
    objetivo: 'Integrar transmissão e recepção com chave de antena, indicador e controles externos quando o conteúdo validado for entregue.',
    palavrasChave: ['diagrama de blocos', 'chave de antena', 'indicador', 'controles', 'fluxo do sinal'],
  },
  {
    ordem: 6,
    slug: '06-equacao-radar-ganho-sensibilidade-e-alcance',
    titulo: 'Equação radar, ganho, sensibilidade e alcance',
    subtitulo: 'Módulo em produção',
    prioridade: 'muito alta',
    tempoEstimado: '80 min',
    statusInicial: 'pendente',
    objetivo: 'Desenvolver o balanço de potência, a equação radar e a interceptação por MAGE quando a execução acadêmica correspondente for entregue.',
    palavrasChave: ['equação radar', 'ganho', 'área efetiva', 'sensibilidade', 'alcance', 'MAGE'],
  },
  {
    ordem: 7,
    slug: '07-integracao-adjacencias-e-preparacao-final',
    titulo: 'Integração, adjacências e preparação final',
    subtitulo: 'Módulo em produção',
    prioridade: 'alta',
    tempoEstimado: '55 min',
    statusInicial: 'pendente',
    objetivo: 'Integrar rastreamento, CW, MTI, GE e IFF ao radar de pulso quando as fontes do módulo forem processadas.',
    palavrasChave: ['rastreamento', 'CW', 'MTI', 'GE', 'IFF', 'integração'],
  },
  {
    ordem: 99,
    slug: '99-revisao-final',
    titulo: 'Revisão final e diagnóstico de prontidão',
    subtitulo: 'Mapa da prova, fórmulas, erros recorrentes e simulado progressivo',
    prioridade: 'máxima',
    tempoEstimado: '60 min',
    statusInicial: 'pendente',
    objetivo: 'Revisar o conteúdo publicado e identificar lacunas enquanto os simulados completos do M08 ainda são produzidos.',
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

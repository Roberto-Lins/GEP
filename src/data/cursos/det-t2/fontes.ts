import type { Fonte } from '@tipos/media';
export type { Fonte } from '@tipos/media';

const PUBLICADOS = [
  '00-mapa-da-t2-e-diagnostico',
  '01-fundamentos-do-radar-de-pulso',
  '02-caracteristicas-e-parametros-de-desempenho',
  '03-transmissao-e-formacao-do-pulso',
  '04-recepcao-e-processamento-do-eco',
  '99-revisao-final',
];

export const fontes: Fonte[] = [
  {
    titulo: 'Apostila de Detecção 2022 — Capítulo I',
    tipo: 'livro',
    descricao: 'Fonte-base lida para fundamentos, características, transmissor e receptor. As páginas utilizadas são indicadas dentro de cada módulo.',
    topicos: PUBLICADOS,
  },
  {
    titulo: 'SUE6.1 — Radar de pulso: introdução e características',
    tipo: 'slide',
    descricao: 'A versão ODP foi tratada como canônica porque o PDF disponível está truncado. Fundamenta M01 e M02.',
    topicos: ['01-fundamentos-do-radar-de-pulso', '02-caracteristicas-e-parametros-de-desempenho'],
  },
  {
    titulo: 'SUE6.2a4 — Radar de pulso: transmissor',
    tipo: 'slide',
    descricao: 'Deck usado em M03 para sincronizador, modulador, magnetron, RFP e arquiteturas de transmissor.',
    topicos: ['03-transmissao-e-formacao-do-pulso'],
  },
  {
    titulo: 'SUE6.5 — Radar de pulso: receptor',
    tipo: 'slide',
    descricao: 'Deck usado em M04 para receptor super-heteródino, frequência intermediária, controles e ruído.',
    topicos: ['04-recepcao-e-processamento-do-eco'],
  },
  {
    titulo: 'SUE6.6 — Indicador',
    tipo: 'slide',
    descricao: 'Fonte lida e reservada para a integração com o indicador; o conteúdo definitivo entra em M05.',
    topicos: ['05-diagrama-de-blocos-controles-e-fluxo-do-sinal'],
  },
  {
    titulo: 'SUE6.7, SUE6.8 e SUE6.9a10',
    tipo: 'slide',
    descricao: 'Fontes previstas para chave de antena, antenas, controles e diagrama de blocos no M05.',
    topicos: ['05-diagrama-de-blocos-controles-e-fluxo-do-sinal'],
  },
  {
    titulo: 'SUE6.11 e SUE8.1a2',
    tipo: 'slide',
    descricao: 'Fontes previstas para equação radar, ganho, sensibilidade, alcance e interceptação por MAGE no M06.',
    topicos: ['06-equacao-radar-ganho-sensibilidade-e-alcance'],
  },
  {
    titulo: 'SUE6.12, SUE7.x, SUE8.x e SUE10.1a2',
    tipo: 'slide',
    descricao: 'Fontes ainda a processar para as adjacências planejadas do M07.',
    topicos: ['07-integracao-adjacencias-e-preparacao-final'],
  },
  {
    titulo: 'SOPA DET T2 2024 — prova com rubrica oficial',
    tipo: 'prova',
    descricao: 'Base principal do diagnóstico de cobrança, da distribuição histórica de pontos e de exercícios reproduzidos ou derivados com rastreabilidade explícita.',
    topicos: PUBLICADOS,
  },
  {
    titulo: 'SOPA DET T1 2024',
    tipo: 'prova',
    descricao: 'Reforço secundário para identificar a assinatura de correção e o estilo da banca.',
    topicos: ['00-mapa-da-t2-e-diagnostico', '99-revisao-final'],
  },
];

export const fontesPorTopico = (slug: string) =>
  fontes.filter((fonte) => fonte.topicos.length === 0 || fonte.topicos.includes(slug));

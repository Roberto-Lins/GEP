import type { Fonte } from '@tipos/media';
export type { Fonte } from '@tipos/media';

const TODO_O_CURSO = [
  '00-mapa-da-t2-e-diagnostico',
  '01-fundamentos-do-radar-de-pulso',
  '02-caracteristicas-e-parametros-de-desempenho',
  '03-transmissao-e-formacao-do-pulso',
  '04-recepcao-e-processamento-do-eco',
  '05-diagrama-de-blocos-controles-e-fluxo-do-sinal',
  '06-equacao-radar-ganho-sensibilidade-e-alcance',
  '07-integracao-adjacencias-e-preparacao-final',
  '08-simulados-e-protocolo-final',
  '99-revisao-final',
];

export const fontes: Fonte[] = [
  {
    titulo: 'Apostila de Detecção 2022 — Capítulo I',
    tipo: 'livro',
    descricao: 'Fonte-base lida para fundamentos, características, transmissor e receptor. As páginas utilizadas são indicadas dentro de cada módulo.',
    topicos: TODO_O_CURSO,
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
    descricao: 'Fonte lida e usada em M05 para indicador tipo-A, PPI, sincronismo e integração visual do eco.',
    topicos: ['05-diagrama-de-blocos-controles-e-fluxo-do-sinal'],
  },
  {
    titulo: 'SUE6.7, SUE6.8 e SUE6.9a10',
    tipo: 'slide',
    descricao: 'Fontes lidas e usadas para chave de antena, antenas, controles e diagrama de blocos no M05.',
    topicos: ['05-diagrama-de-blocos-controles-e-fluxo-do-sinal'],
  },
  {
    titulo: 'SUE6.11 e SUE8.1a2',
    tipo: 'slide',
    descricao: 'Fontes lidas e usadas para equação radar, ganho, sensibilidade, alcance e interceptação por MAGE no M06.',
    topicos: ['06-equacao-radar-ganho-sensibilidade-e-alcance'],
  },
  {
    titulo: 'SUE6.12; SUE7.1a2, SUE7.3 e SUE7.4; SUE8.3; SUE10.1a2',
    tipo: 'slide',
    descricao: 'Fontes lidas e usadas em M07 para rastreamento, CW-Doppler, CW-FM, MTI, Guerra Eletrônica, IFF e radiogoniometria.',
    topicos: ['07-integracao-adjacencias-e-preparacao-final'],
  },
  {
    titulo: 'SOPA DET T2 2024 — prova com rubrica oficial',
    tipo: 'prova',
    descricao: 'Base principal do diagnóstico de cobrança, da distribuição histórica de pontos e de exercícios reproduzidos ou derivados com rastreabilidade explícita.',
    topicos: TODO_O_CURSO,
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

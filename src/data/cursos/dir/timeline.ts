// Timeline do curso DIR (Direito — P1). Fonte de verdade da ordem/prioridade e dos
// slugs de cada mini-matéria. Sequência da "Linha do Tempo — Direito P1": dois grandes
// blocos — Bloco I (Introdução ao Direito, tópicos 00–03) e Bloco II (Direito
// Constitucional, tópicos 04–08) — espelhando o Cap. 1 e o Cap. 2 da apostila.
import type { Prioridade, TopicoTimeline } from '@tipos/lesson';

export type { Prioridade } from '@tipos/lesson';

export const timeline: TopicoTimeline[] = [
  {
    ordem: 0,
    slug: '00-introducao-ao-direito',
    titulo: 'Introdução ao Direito e Visão Geral da Matéria',
    subtitulo: 'O que é o Direito, por que existe e como a P1 cobra',
    prioridade: 'alta',
    tempoEstimado: '20 min',
    statusInicial: 'pendente',
    objetivo:
      'Ter o mapa geral da disciplina: entender o Direito como ciência social normativa, saber explicar de forma curta o que é o Direito e por que ele existe na vida em sociedade, e conhecer os cinco formatos de questão que a P1 cobra. Comece pelos três vídeos-panorama da matéria.',
    palavrasChave: ['Direito', 'ciência social', 'norma de convivência', 'ordem e conflito', 'ubi societas ibi jus', 'visão geral', 'formato da P1'],
  },
  {
    ordem: 1,
    slug: '01-sociedade-moral-religiao-e-norma',
    titulo: 'Sociedade, Direito, Moral, Religião e Norma Jurídica',
    subtitulo: 'O que separa a norma jurídica das outras formas de controle social',
    prioridade: 'máxima',
    tempoEstimado: '45 min',
    statusInicial: 'pendente',
    objetivo:
      'Diferenciar o Direito da Moral e da Religião e dominar as quatro características da norma jurídica (coercitividade, heteronomia, bilateralidade e generalidade), além das teorias dos círculos (Direito × Moral) e da distinção igualdade formal × material — para resolver correlacione e V/F sobre conceitos parecidos.',
    palavrasChave: ['norma jurídica', 'Moral', 'Religião', 'coercitividade', 'heteronomia', 'bilateralidade', 'generalidade', 'teoria dos círculos', 'igualdade formal e material'],
  },
  {
    ordem: 2,
    slug: '02-direito-subjetivo-pessoas-relacao-juridica',
    titulo: 'Direito Objetivo, Direito Subjetivo, Pessoas e Relação Jurídica',
    subtitulo: 'Da norma abstrata às relações concretas entre pessoas',
    prioridade: 'máxima',
    tempoEstimado: '50 min',
    statusInicial: 'pendente',
    objetivo:
      'Distinguir Direito objetivo (norma agendi) de Direito subjetivo (facultas agendi), classificar pessoas naturais e jurídicas, dominar capacidade de direito × de fato, incapacidade/representação/assistência/emancipação e os elementos da relação jurídica (sujeitos, objeto imediato × mediato, vínculo, fato jurídico) — para resolver casos concretos com menores, contratos e militares.',
    palavrasChave: ['Direito objetivo', 'Direito subjetivo', 'norma agendi', 'facultas agendi', 'pessoa natural', 'pessoa jurídica', 'capacidade', 'incapacidade', 'emancipação', 'relação jurídica', 'objeto imediato e mediato'],
  },
  {
    ordem: 3,
    slug: '03-fontes-divisoes-e-sistemas-do-direito',
    titulo: 'Fontes, Divisões, Filosofia e Sistemas do Direito',
    subtitulo: 'A origem, a classificação e a visão filosófica do Direito',
    prioridade: 'muito alta',
    tempoEstimado: '45 min',
    statusInicial: 'pendente',
    objetivo:
      'Reconhecer as fontes do Direito (lei, costume, jurisprudência, doutrina) e os meios de integração da LINDB (analogia, costumes, princípios gerais), diferenciar Direito Público, Privado e Social, comparar Direito Natural × Positivo e situar os grandes sistemas jurídicos (René David) — para questões objetivas e de correlacione.',
    palavrasChave: ['fontes do Direito', 'lei', 'costume', 'jurisprudência', 'doutrina', 'LINDB', 'integração', 'Direito Público e Privado', 'Direito Natural e Positivo', 'sistemas jurídicos', 'René David'],
  },
  {
    ordem: 4,
    slug: '04-estado-nacao-soberania-e-federacao',
    titulo: 'Teoria Geral do Estado, Nação, Soberania e Federação',
    subtitulo: 'O Estado como organização política e jurídica — início do Direito Constitucional',
    prioridade: 'muito alta',
    tempoEstimado: '45 min',
    statusInicial: 'pendente',
    objetivo:
      'Diferenciar Estado de Nação, soberania de autonomia e federação de confederação, identificar os elementos do Estado (povo, território, governo soberano) e as características da soberania (una, indivisível, inalienável, imprescritível) — base para os V/F de inversão e os correlacione do Direito Constitucional.',
    palavrasChave: ['Teoria Geral do Estado', 'Estado', 'Nação', 'povo', 'população', 'território', 'governo', 'soberania', 'autonomia', 'Estado unitário', 'confederação', 'federação'],
  },
  {
    ordem: 5,
    slug: '05-governo-democracia-e-constituicao',
    titulo: 'Formas de Governo, Democracia, Sistemas de Governo e Constituição',
    subtitulo: 'Da organização política do Estado à Constituição',
    prioridade: 'muito alta',
    tempoEstimado: '45 min',
    statusInicial: 'pendente',
    objetivo:
      'Diferenciar formas de governo (monarquia × república), sistemas de governo (presidencialismo × parlamentarismo) e formas de democracia (direta, indireta, semidireta), distinguir plebiscito × referendo × iniciativa popular e dominar o conceito, as classificações e o poder constituinte da Constituição (CF/88 super-rígida, cláusulas pétreas).',
    palavrasChave: ['monarquia', 'república', 'presidencialismo', 'parlamentarismo', 'democracia', 'plebiscito', 'referendo', 'iniciativa popular', 'Constituição', 'classificações', 'poder constituinte', 'cláusulas pétreas'],
  },
  {
    ordem: 6,
    slug: '06-organizacao-do-estado-e-competencias',
    titulo: 'Organização do Estado Brasileiro e Competências dos Entes Federativos',
    subtitulo: 'União, Estados, DF e Municípios — quem pode o quê',
    prioridade: 'muito alta',
    tempoEstimado: '40 min',
    statusInicial: 'pendente',
    objetivo:
      'Compreender a organização político-administrativa da República Federativa do Brasil e a autonomia dos entes (União, Estados, DF, Municípios), e saber distinguir competências exclusivas e privativas da União, comuns e concorrentes — para resolver casos do tipo "um Estado fez X, pode?".',
    palavrasChave: ['República Federativa do Brasil', 'União', 'Estados', 'Distrito Federal', 'Municípios', 'autonomia', 'competência exclusiva', 'competência privativa', 'competência comum', 'competência concorrente'],
  },
  {
    ordem: 7,
    slug: '07-tres-poderes-e-funcoes-essenciais',
    titulo: 'Três Poderes e Funções Essenciais à Justiça',
    subtitulo: 'Separação dos Poderes e as instituições que auxiliam a Justiça',
    prioridade: 'muito alta',
    tempoEstimado: '45 min',
    statusInicial: 'pendente',
    objetivo:
      'Dominar a separação dos Poderes (Legislativo, Executivo, Judiciário), suas funções típicas e atípicas, a estrutura do Congresso Nacional, os órgãos do Judiciário e as funções essenciais à Justiça (Ministério Público, Advocacia Pública, Advocacia, Defensoria) — para correlacionar Poderes, órgãos e funções em situações concretas.',
    palavrasChave: ['separação dos Poderes', 'Legislativo', 'Executivo', 'Judiciário', 'funções típicas e atípicas', 'Congresso Nacional', 'Câmara', 'Senado', 'Ministério Público', 'Defensoria Pública', 'Advocacia Pública'],
  },
  {
    ordem: 8,
    slug: '08-direitos-fundamentais-e-ordem-economica',
    titulo: 'Direitos Fundamentais, Direitos Sociais e Ordem Econômica',
    subtitulo: 'Direitos individuais e sociais, remédios constitucionais e seus limites',
    prioridade: 'máxima',
    tempoEstimado: '50 min',
    statusInicial: 'pendente',
    objetivo:
      'Compreender os direitos e garantias individuais e que eles NÃO têm caráter absoluto (STF), escolher o remédio constitucional adequado (habeas corpus, habeas data, mandado de segurança, direito de petição), conhecer os direitos sociais, os princípios da ordem econômica e as restrições excepcionais (estado de defesa e de sítio) — para resolver casos concretos, inclusive militares.',
    palavrasChave: ['direitos e garantias individuais', 'caráter não absoluto', 'habeas corpus', 'habeas data', 'mandado de segurança', 'direito de petição', 'direitos sociais', 'ordem econômica', 'livre iniciativa', 'estado de defesa', 'estado de sítio'],
  },
  {
    ordem: 99,
    slug: '99-revisao-final',
    titulo: 'Revisão Final da P1',
    subtitulo: 'Mapa da prova, simulado, erros frequentes e revisão de véspera',
    prioridade: 'máxima',
    tempoEstimado: '60 min',
    statusInicial: 'pendente',
    objetivo:
      'Integrar todo o conteúdo da P1 no estilo da prova: revisar as comparações-chave (Direito × Moral, Estado × Nação, soberania × autonomia, federação × confederação, plebiscito × referendo, funções típicas × atípicas), treinar casos concretos e V/F de inversão, e fechar o checklist de prontidão.',
    palavrasChave: ['revisão', 'integração', 'mapa da prova', 'simulado', 'comparações', 'casos concretos', 'erros frequentes', 'véspera', 'P1'],
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

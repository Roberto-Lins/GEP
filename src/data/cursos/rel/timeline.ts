// Timeline do curso REL (Relações Internacionais — P1). Fonte de verdade da ordem,
// da prioridade e dos slugs de cada mini-matéria. A sequência NÃO segue a ordem
// numérica das aulas: é uma linha de raciocínio única — método de prova → lentes de
// análise → estrutura do sistema → disputa de poder atual → espaços de projeção
// (mar/polos) → recursos (ambiente/energia) → segurança ampliada → globalização/
// cadeias → governança → síntese Brasil-Marinha. Cada tópico conversa com o anterior
// e prepara o próximo.
import type { Prioridade, TopicoTimeline } from '@tipos/lesson';

export type { Prioridade } from '@tipos/lesson';

export const timeline: TopicoTimeline[] = [
  {
    ordem: 0,
    slug: '00-como-estudar-rel',
    titulo: 'Como estudar REL para a prova',
    subtitulo: 'O método de raciocínio que destrava qualquer questão subjetiva',
    prioridade: 'alta',
    tempoEstimado: '15 min',
    statusInicial: 'pendente',
    objetivo:
      'Fixar, ANTES do conteúdo, o modelo de resposta da prova: contexto → atores → interesses → instrumentos de poder → vulnerabilidades → consequências → Brasil/Marinha. Entender que REL não é decoreba de conceitos, e sim interpretação geopolítica que conecta macro e microcenários — e como usar os exemplos dos slides sem ficar preso a eles.',
    palavrasChave: ['método de prova', 'questão subjetiva', 'contexto-atores-interesses', 'instrumentos de poder', 'vulnerabilidades', 'frase-matriz', 'Brasil e Marinha'],
  },
  {
    ordem: 1,
    slug: '01-escolas-de-ri-lentes-de-analise',
    titulo: 'Escolas de Relações Internacionais: as lentes de análise',
    subtitulo: 'Realismo, Liberalismo e Construtivismo como óculos para ler o mundo',
    prioridade: 'muito alta',
    tempoEstimado: '40 min',
    statusInicial: 'pendente',
    objetivo:
      'Usar Realismo (anarquia, dilema de segurança, poder), Liberalismo (instituições, interdependência e seu "lado sombrio") e Construtivismo (ideias, identidade, securitização) não como definições isoladas, mas como três lentes que se combinam para interpretar um mesmo caso — da disputa EUA-China à defesa da Amazônia Azul.',
    palavrasChave: ['Realismo', 'Liberalismo', 'Construtivismo', 'anarquia', 'dilema de segurança', 'interdependência', 'Wendt', 'securitização', 'três lentes'],
  },
  {
    ordem: 2,
    slug: '02-sistemas-internacionais-e-poder',
    titulo: 'Sistemas internacionais e distribuição de poder',
    subtitulo: 'O tabuleiro: por que o mundo atual é unimultipolar',
    prioridade: 'muito alta',
    tempoEstimado: '40 min',
    statusInicial: 'pendente',
    objetivo:
      'Entender como a polaridade (uni, bi, multi e unimultipolar) condiciona o comportamento dos Estados, dominar o paradoxo de estabilidade de cada sistema e saber por que a pergunta "unipolar ou multipolar?" é uma armadilha — respondendo sempre "depende da dimensão" (militar × econômica).',
    palavrasChave: ['sistema internacional', 'polaridade', 'unipolar', 'bipolar', 'multipolar', 'unimultipolaridade', 'equilíbrio de poder', 'potências médias', 'autonomia estratégica'],
  },
  {
    ordem: 3,
    slug: '03-ruptura-da-ordem-e-eua-china',
    titulo: 'Ruptura da ordem internacional e disputa EUA-China',
    subtitulo: 'O eixo do curso: a integração econômica virou arma',
    prioridade: 'máxima',
    tempoEstimado: '45 min',
    statusInicial: 'pendente',
    objetivo:
      'Sustentar a tese central da matéria: vivemos uma ruptura (não só transição) da ordem baseada em regras, em que a interdependência foi "armada" (tarifas, sanções, semicondutores). Dominar a ascensão chinesa (Belt and Road, Mar do Sul da China) e por que a globalização mudou de natureza, sem ter acabado.',
    palavrasChave: ['ruptura', 'ordem baseada em regras', 'ascensão chinesa', 'integração como arma', 'interdependência', 'semicondutores', 'Belt and Road', 'tarifas e sanções', 'reglobalização securitizada'],
  },
  {
    ordem: 4,
    slug: '04-oceanopolitica-e-amazonia-azul',
    titulo: 'Oceanopolítica, comando do mar e Amazônia Azul',
    subtitulo: 'Onde, para a Marinha, as Relações Internacionais se materializam',
    prioridade: 'máxima',
    tempoEstimado: '45 min',
    statusInicial: 'pendente',
    objetivo:
      'Contrastar geopolítica terrestre (bidimensional, fronteiras estáticas) com oceanopolítica (tridimensional, fronteiras dinâmicas), dominar a virada do "combate no mar" para o "combate pelo mar" (territorialização) e apresentar a Amazônia Azul como conceito político-estratégico — sustentando que a CNUDM legitima, mas só o Poder Naval crível (SN-BR) dissuade.',
    palavrasChave: ['oceanopolítica', 'comando do mar', 'combate no mar × pelo mar', 'territorialização', 'Amazônia Azul', 'cabos submarinos', 'SN-BR', 'negação do uso do mar', 'entorno estratégico'],
  },
  {
    ordem: 5,
    slug: '05-meio-ambiente-como-tema-geopolitico',
    titulo: 'Meio ambiente como tema geopolítico',
    subtitulo: 'Quando clima, água e floresta viram poder e vulnerabilidade',
    prioridade: 'muito alta',
    tempoEstimado: '40 min',
    statusInicial: 'pendente',
    objetivo:
      'Mostrar que meio ambiente é high politics: dominar os três eixos do debate climático (mitigação, adaptação e financiamento), os mecanismos de poder (financiamento como condicionalidade, selo verde como barreira não tarifária, securitização que abre margem à internacionalização) e a ambivalência do Brasil — vítima ou potência ambiental.',
    palavrasChave: ['meio ambiente', 'mitigação', 'adaptação', 'financiamento climático', 'conferências (Estocolmo, Rio-92, Paris, COPs)', 'barreira não tarifária', 'securitização', 'internacionalização', 'diplomacia verde'],
  },
  {
    ordem: 6,
    slug: '06-antartica-artico-cnudm-e-leito-marinho',
    titulo: 'Antártica, Ártico, CNUDM e leito marinho',
    subtitulo: 'Dois polos, dois regimes: quando a cooperação funciona e quando falha',
    prioridade: 'muito alta',
    tempoEstimado: '45 min',
    statusInicial: 'pendente',
    objetivo:
      'Comparar Antártica (Tratado de 1959, desmilitarização, ciência como poder, PROANTAR) com o Ártico (sem tratado desmilitarizador, degelo, rotas NSR/NWP, recursos, Rússia/EUA/China, lawfare), dominar os conceitos da CNUDM (mar territorial, ZEE, plataforma continental, "A Área", ISA) e explicar por que o Ártico gera mais disputa que a Antártica.',
    palavrasChave: ['Antártica', 'Tratado da Antártica', 'PROANTAR', 'Ártico', 'rotas polares', 'CNUDM', 'ZEE', 'plataforma continental', 'A Área / ISA', 'Patrimônio Comum da Humanidade'],
  },
  {
    ordem: 7,
    slug: '07-seguranca-internacional-ampliada',
    titulo: 'Segurança internacional ampliada',
    subtitulo: 'Como destruir a segurança de um país sem disparar um tiro',
    prioridade: 'muito alta',
    tempoEstimado: '40 min',
    statusInicial: 'pendente',
    objetivo:
      'Traçar a evolução do conceito restrito (militar, realista, Guerra Fria) para o ampliado (Escola de Copenhague, Buzan, cinco setores), dominar securitização, guerra cognitiva, infodemia e soberania algorítmica, a Dissuasão 2.0 e as vulnerabilidades críticas (alimentar, hídrica, infraestrutura, cabos) — fechando em segurança multidomínio.',
    palavrasChave: ['segurança ampliada', 'Escola de Copenhague', 'Barry Buzan', 'securitização', 'guerra cognitiva', 'infodemia', 'soberania algorítmica', 'Dissuasão 2.0', 'infraestrutura crítica', 'multidomínio'],
  },
  {
    ordem: 8,
    slug: '08-energia-como-eixo-geoeconomico',
    titulo: 'Energia como eixo geoeconômico',
    subtitulo: 'O fluido vital do poder: autonomia, coerção e dependência',
    prioridade: 'muito alta',
    tempoEstimado: '40 min',
    statusInicial: 'pendente',
    objetivo:
      'Definir segurança energética pelo tripé (suprimento confiável + preço acessível + sustentabilidade) e ligá-la à autonomia/subordinação, ler a transição energética como estratégia (não só ecologia), dominar o eixo Europa-Rússia-Ásia (gás como coerção, estratégia dual chinesa) e o paradoxo brasileiro (matriz renovável + pré-sal × 98% do petróleo no mar).',
    palavrasChave: ['segurança energética', 'autonomia estratégica', 'transição energética', 'Eletro-estados', 'gás e gasodutos', 'coerção energética', 'carvão asiático', 'pré-sal', 'matriz energética', 'rotas de petróleo'],
  },
  {
    ordem: 9,
    slug: '09-globalizacao-cadeias-e-logistica',
    titulo: 'Globalização, cadeias produtivas e logística',
    subtitulo: 'Quando a eficiência vira dependência — e a dependência, arma',
    prioridade: 'muito alta',
    tempoEstimado: '40 min',
    statusInicial: 'pendente',
    objetivo:
      'Mostrar a genealogia da globalização (não nasceu no século XXI; fases do capitalismo até o informacional), a inversão de motor de paz a vulnerabilidade, dominar chokepoints (com o dado dos 55% dos grãos), a securitização da economia e os três -shorings — e fechar na vulnerabilidade dupla brasileira (Amazônia Azul + infraestrutura terrestre precária).',
    palavrasChave: ['globalização', 'capitalismo informacional', 'cadeias produtivas', 'interdependência', 'chokepoints', 'segurança alimentar', 'securitização da economia', 'nearshoring/friendshoring/reshoring', 'logística brasileira'],
  },
  {
    ordem: 10,
    slug: '10-organizacoes-internacionais-imo-e-migracoes',
    titulo: 'Organizações internacionais, IMO, blocos e migrações',
    subtitulo: 'A governança tensionada: descrédito não é desaparecimento',
    prioridade: 'muito alta',
    tempoEstimado: '40 min',
    statusInicial: 'pendente',
    objetivo:
      'Responder se as OIs estão acabando (não: estão sendo tensionadas/instrumentalizadas), conhecer sua origem funcionalista (Reno, telégrafo, correios → ONU/OMC), dominar a IMO em profundidade (90% do comércio, SOLAS, LRIT, SAR, não-neutralidade), os blocos como cooperação-competição e as migrações como tema securitizado (fronteira algorítmica).',
    palavrasChave: ['organizações internacionais', 'multilateralismo', 'IMO/OMI', 'SOLAS', 'LRIT', 'blocos econômicos', 'Mercosul/UE/ASEAN', 'migrações', 'refugiados', 'fronteira algorítmica'],
  },
  {
    ordem: 11,
    slug: '11-sintese-brasil-marinha',
    titulo: 'Síntese final: Brasil, Marinha e o mundo em transformação',
    subtitulo: 'Amarrando tudo: poder, mar e autonomia estratégica',
    prioridade: 'máxima',
    tempoEstimado: '30 min',
    statusInicial: 'pendente',
    objetivo:
      'Integrar todo o curso na tese-síntese: o oficial da Marinha atuará num mundo de competição multidomínio, interdependência vulnerável, disputa por recursos e crise das instituições — em que o mar ganha centralidade. Saber conectar Poder Naval, Amazônia Azul, segurança energética/alimentar/ambiental/cibernética, CNUDM, IMO e autonomia estratégica brasileira.',
    palavrasChave: ['síntese', 'Poder Naval', 'Amazônia Azul', 'Atlântico Sul', 'autonomia estratégica', 'multidomínio', 'oito formas de poder', 'SN-BR', 'Brasil e Marinha'],
  },
  {
    ordem: 99,
    slug: '99-revisao-final',
    titulo: 'Revisão Final da P1',
    subtitulo: 'Mapa da prova, perguntas-mãe, erros frequentes e revisão de véspera',
    prioridade: 'máxima',
    tempoEstimado: '60 min',
    statusInicial: 'pendente',
    objetivo:
      'Integrar todo o conteúdo no estilo da prova subjetiva: treinar a frase-matriz e as perguntas-mãe de cada tópico, revisar as comparações-chave (três lentes, polaridades, Antártica × Ártico, fontes de energia) e os conceitos transversais (integração como arma, unimultipolaridade, securitização, Amazônia Azul + SN-BR) e fechar o checklist de prontidão.',
    palavrasChave: ['revisão', 'integração', 'mapa da prova', 'perguntas-mãe', 'frase-matriz', 'comparações', 'conceitos transversais', 'véspera', 'P1'],
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

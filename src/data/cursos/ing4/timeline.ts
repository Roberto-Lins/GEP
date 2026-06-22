// Timeline do curso ING-4 (Inglês — PP1). Fonte de verdade da ordem/prioridade.
// Sequência lógica de revisão a partir do study guide da professora (LinhaDoTempo):
// gramática (whatever/have done/reporting/contrast/purpose) + vocabulário (crime)
// + writing (opinião) → revisão integrada. Ordem de prioridade do guia:
// Reporting → Contrast → Purpose → Have sth done → Crime → Whatever → Writing.
import type { Prioridade, TopicoTimeline } from '@tipos/lesson';

export type { Prioridade } from '@tipos/lesson';

export const timeline: TopicoTimeline[] = [
  {
    ordem: 0,
    slug: '00-introducao-e-revisao-geral',
    titulo: 'Introdução e Revisão Geral',
    subtitulo: 'O que a PP1 cobra e como estudar este curso',
    prioridade: 'alta',
    tempoEstimado: '15 min',
    statusInicial: 'pendente',
    objetivo:
      'Ter a visão panorâmica da PP1: o que a professora especificou (grammar, vocabulary e writing), a sequência recomendada de estudo, como usar cada tópico (explicação → áudio → exercícios → checklist) e onde fica a área de Writing.',
    palavrasChave: ['PP1', 'visão geral', 'grammar', 'vocabulary', 'writing', 'sequência de estudo', 'American English File 4'],
  },
  {
    ordem: 1,
    slug: '01-whatever-whenever-etc',
    titulo: 'Whatever, Whenever, Etc.',
    subtitulo: 'Os compostos com -ever: coisa, pessoa, tempo, lugar, escolha e modo',
    prioridade: 'alta',
    tempoEstimado: '30 min',
    statusInicial: 'pendente',
    objetivo:
      'Escolher corretamente entre whatever, whoever, whenever, wherever, whichever e however de acordo com o tipo de informação da frase (coisa, pessoa, tempo, lugar, escolha limitada ou modo/grau).',
    palavrasChave: ['whatever', 'whoever', 'whenever', 'wherever', 'whichever', 'however', '-ever words', 'grammar'],
  },
  {
    ordem: 2,
    slug: '02-crime-and-punishment',
    titulo: 'Crime and Punishment',
    subtitulo: 'Vocabulário de crimes: crime, criminoso e verbo',
    prioridade: 'alta',
    tempoEstimado: '35 min',
    statusInicial: 'pendente',
    objetivo:
      'Reconhecer o nome do crime, do criminoso e o verbo correspondente, organizando cada família lexical e distinguindo palavras semelhantes (steal × rob, theft × robbery, burglary × mugging).',
    palavrasChave: ['crime', 'criminal', 'theft', 'robbery', 'burglary', 'mugging', 'steal', 'rob', 'vocabulary', 'Student Book p.160'],
  },
  {
    ordem: 3,
    slug: '03-have-something-done',
    titulo: 'Have Something Done',
    subtitulo: 'A estrutura causativa: alguém faz um serviço para você',
    prioridade: 'muito alta',
    tempoEstimado: '30 min',
    statusInicial: 'pendente',
    objetivo:
      'Montar a estrutura causativa Subject + have + object + past participle em diferentes tempos verbais, para dizer que outra pessoa realiza um serviço para o sujeito (ou que o sujeito sofre uma ação).',
    palavrasChave: ['have something done', 'causative', 'past participle', 'serviço', 'grammar', 'Grammar Bank p.146'],
  },
  {
    ordem: 4,
    slug: '04-reporting-verbs',
    titulo: 'Reporting Verbs',
    subtitulo: 'Transformar fala direta em indireta segundo a intenção',
    prioridade: 'máxima',
    tempoEstimado: '40 min',
    statusInicial: 'pendente',
    objetivo:
      'Interpretar a intenção da fala, escolher o reporting verb adequado e aplicar a estrutura exigida por ele (verb + to-infinitive; verb + person + to-infinitive; verb + -ing; verb + preposition + -ing).',
    palavrasChave: ['reporting verbs', 'offer', 'promise', 'refuse', 'advise', 'admit', 'deny', 'accuse of', 'apologize for', 'grammar', 'Grammar Bank p.147'],
  },
  {
    ordem: 5,
    slug: '05-clauses-of-contrast',
    titulo: 'Clauses of Contrast',
    subtitulo: 'although / even though × despite / in spite of',
    prioridade: 'máxima',
    tempoEstimado: '35 min',
    statusInicial: 'pendente',
    objetivo:
      'Ligar ideias opostas escolhendo o conector de contraste pela estrutura que vem depois dele: oração completa (although/even though) ou substantivo/-ing (despite/in spite of).',
    palavrasChave: ['although', 'even though', 'though', 'despite', 'in spite of', 'contrast', 'grammar', 'Grammar Bank p.148'],
  },
  {
    ordem: 6,
    slug: '06-clauses-of-purpose',
    titulo: 'Clauses of Purpose',
    subtitulo: 'to / in order to / so as to · for · so that — explicar a finalidade',
    prioridade: 'muito alta',
    tempoEstimado: '30 min',
    statusInicial: 'pendente',
    objetivo:
      'Explicar a finalidade de uma ação (“para quê?”) diferenciando to + verb, for + noun/-ing e so that + subject + modal, incluindo a forma negativa (so as not to / in order not to).',
    palavrasChave: ['to', 'in order to', 'so as to', 'for', 'so that', 'purpose', 'finalidade', 'grammar', 'Grammar Bank p.148'],
  },
  {
    ordem: 7,
    slug: '07-expressing-your-opinion',
    titulo: 'Expressing Your Opinion',
    subtitulo: 'Redação de opinião: introdução, argumentos, exemplos e conclusão',
    prioridade: 'muito alta',
    tempoEstimado: '35 min',
    statusInicial: 'pendente',
    objetivo:
      'Escrever uma redação argumentativa curta e organizada — apresentando opinião, desenvolvendo razões com exemplos e concluindo — usando os conectores adequados a cada função.',
    palavrasChave: ['writing', 'opinion essay', 'connectors', 'In my opinion', 'For example', 'However', 'In conclusion', 'Student Book p.120'],
  },
  {
    ordem: 99,
    slug: '99-revisao-final',
    titulo: 'Revisão integrada da PP1',
    subtitulo: 'Aplicar grammar + vocabulary + writing no estilo da prova',
    prioridade: 'máxima',
    tempoEstimado: '60 min',
    statusInicial: 'pendente',
    objetivo:
      'Integrar todos os conteúdos em exercícios semelhantes aos da prova, revisar as armadilhas recorrentes e fechar o checklist final de prontidão para a PP1.',
    palavrasChave: ['revisão', 'integração', 'workbook', 'checklist final', 'armadilhas', 'PP1'],
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

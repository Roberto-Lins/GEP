// Linha do tempo oficial do GEP Command Deck.
// Fonte única de verdade para ordem, prioridade e metadados das mini matérias.
// Para adicionar um tópico: crie a pasta em src/content/materias/ e adicione um item aqui.

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
    slug: '00-ideia-central-da-prova',
    titulo: 'Ideia central da prova',
    subtitulo: 'A lógica-mãe da GEP P1',
    prioridade: 'alta',
    tempoEstimado: '15 min',
    statusInicial: 'pendente',
    objetivo:
      'Entender que a prova cobra comparação entre modelos de Administração Pública e aplicação de conceitos de gestão pública.',
    palavrasChave: ['Estado', 'valor público', 'modelos administrativos', 'governança', 'orçamento', 'defesa'],
  },
  {
    ordem: 1,
    slug: '01-estado-governo-administracao-governanca',
    titulo: 'Estado, Governo, Administração Pública e Governança',
    subtitulo: 'O cenário onde a gestão pública acontece',
    prioridade: 'alta',
    tempoEstimado: '45 min',
    statusInicial: 'pendente',
    objetivo: 'Diferenciar Estado, Governo, Administração Pública e Governança.',
    palavrasChave: [
      'Estado', 'Governo', 'Administração Pública', 'Governança',
      'Administração Direta', 'Administração Indireta', 'desconcentração', 'descentralização',
    ],
  },
  {
    ordem: 2,
    slug: '02-weber-e-burocracia',
    titulo: 'Max Weber e a burocracia',
    subtitulo: 'Dominação racional-legal e burocracia ideal',
    prioridade: 'muito alta',
    tempoEstimado: '60 min',
    statusInicial: 'pendente',
    objetivo: 'Entender a burocracia como forma racional, formal, impessoal e profissional de organização.',
    palavrasChave: [
      'Weber', 'dominação', 'tradicional', 'carismática', 'racional-legal',
      'formalidade', 'impessoalidade', 'profissionalismo',
    ],
  },
  {
    ordem: 3,
    slug: '03-patrimonialismo-e-disfuncoes-burocraticas',
    titulo: 'Patrimonialismo e disfunções burocráticas',
    subtitulo: 'O que a burocracia combate e o que pode dar errado nela',
    prioridade: 'muito alta',
    tempoEstimado: '50 min',
    statusInicial: 'pendente',
    objetivo: 'Diferenciar patrimonialismo, burocracia ideal e burocratismo.',
    palavrasChave: [
      'patrimonialismo', 'burocracia ideal', 'burocratismo', 'Merton', 'Perrow', 'Roth',
      'formalismo', 'excesso de regras',
    ],
  },
  {
    ordem: 4,
    slug: '04-organizacoes-mecanicistas-e-organicas',
    titulo: 'Organizações mecanicistas e orgânicas',
    subtitulo: 'Estruturas rígidas e flexíveis',
    prioridade: 'alta',
    tempoEstimado: '40 min',
    statusInicial: 'pendente',
    objetivo: 'Comparar organizações mecanicistas e orgânicas e relacioná-las ao ambiente.',
    palavrasChave: [
      'mecanicista', 'orgânica', 'hierarquia', 'flexibilidade',
      'ambiente estável', 'ambiente dinâmico', 'organização-máquina',
    ],
  },
  {
    ordem: 5,
    slug: '05-modelos-de-administracao-publica',
    titulo: 'Modelos de Administração Pública',
    subtitulo: 'Patrimonialista, burocrática e gerencial',
    prioridade: 'muito alta',
    tempoEstimado: '60 min',
    statusInicial: 'pendente',
    objetivo: 'Comparar os três modelos principais da Administração Pública.',
    palavrasChave: [
      'patrimonialista', 'burocrática', 'gerencial', 'apropriação',
      'legalidade', 'resultado', 'cidadão-usuário',
    ],
  },
  {
    ordem: 6,
    slug: '06-reformas-administrativas-no-brasil',
    titulo: 'Reformas administrativas no Brasil',
    subtitulo: 'DASP, Decreto-Lei 200/67, Constituição de 1988 e reforma de 1995',
    prioridade: 'alta',
    tempoEstimado: '55 min',
    statusInicial: 'pendente',
    objetivo: 'Colocar os modelos administrativos em ordem histórica no Brasil.',
    palavrasChave: [
      'DASP', 'Era Vargas', 'Decreto-Lei 200', '1967', 'Constituição de 1988',
      'reforma administrativa', 'descentralização funcional',
    ],
  },
  {
    ordem: 7,
    slug: '07-pdrae-e-reforma-de-1995',
    titulo: 'PDRAE e Reforma Administrativa de 1995',
    subtitulo: 'Prioridade máxima da prova',
    prioridade: 'máxima',
    tempoEstimado: '75 min',
    statusInicial: 'pendente',
    objetivo: 'Entender o diagnóstico, os objetivos e os setores do Estado no PDRAE.',
    palavrasChave: [
      'PDRAE', 'Bresser-Pereira', 'administração gerencial', 'cidadão-cliente',
      'núcleo estratégico', 'atividades exclusivas', 'serviços não exclusivos', 'produção para o mercado',
    ],
  },
  {
    ordem: 8,
    slug: '08-ppa-ldo-loa-e-despesa-publica',
    titulo: 'PPA, LDO, LOA e despesa pública',
    subtitulo: 'Como o planejamento vira orçamento',
    prioridade: 'muito alta',
    tempoEstimado: '60 min',
    statusInicial: 'pendente',
    objetivo: 'Entender os instrumentos orçamentários e a execução da despesa pública.',
    palavrasChave: [
      'PPA', 'LDO', 'LOA', 'diretrizes', 'objetivos', 'metas',
      'empenho', 'liquidação', 'pagamento',
    ],
  },
  {
    ordem: 9,
    slug: '09-orcamento-de-defesa',
    titulo: 'Orçamento de Defesa',
    subtitulo: 'Estratégia, indústria de defesa e capacidade militar',
    prioridade: 'alta',
    tempoEstimado: '45 min',
    statusInicial: 'pendente',
    objetivo:
      'Relacionar orçamento de defesa, planejamento, modernização militar e Base Industrial de Defesa.',
    palavrasChave: [
      'orçamento de defesa', 'Base Industrial de Defesa', 'modernização',
      'pessoal', 'investimento', 'PBC', 'interoperabilidade',
    ],
  },
  {
    ordem: 10,
    slug: '10-sistema-de-governanca-da-mb',
    titulo: 'Sistema de Governança da MB',
    subtitulo: 'Aplicação prática da governança pública na Marinha',
    prioridade: 'alta',
    tempoEstimado: '50 min',
    statusInicial: 'pendente',
    objetivo:
      'Entender como a governança da MB conecta estratégia, gestão, controle e entrega de valor público.',
    palavrasChave: [
      'Governança da MB', 'Alta Administração Naval', 'CEMA', 'ODS',
      'Programa Netuno', 'Defesa Naval', 'Segurança Marítima', 'Diplomacia Naval',
    ],
  },
  {
    ordem: 99,
    slug: '99-revisao-final',
    titulo: 'Revisão final',
    subtitulo: 'Simulado, erros frequentes e revisão de véspera',
    prioridade: 'máxima',
    tempoEstimado: '90 min',
    statusInicial: 'pendente',
    objetivo: 'Revisar os pontos mais prováveis da prova e corrigir os erros recorrentes.',
    palavrasChave: [
      'simulado', 'revisão', 'verdadeiro ou falso', 'correlacione',
      'múltipla escolha', 'erros frequentes',
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

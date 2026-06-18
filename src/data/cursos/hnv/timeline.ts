// Timeline do curso HNV (História Naval) — fonte de verdade da ordem/prioridade.
// Segue o raciocínio histórico sequencial dos textos: do Mediterrâneo antigo
// (Mylae) à evolução tecnológica das embarcações, às disputas coloniais no
// Atlântico Sul (França Antártica) e ao Brasil Holandês / Restauração.
import type { Prioridade, TopicoTimeline } from '@tipos/lesson';

export type { Prioridade } from '@tipos/lesson';

export const timeline: TopicoTimeline[] = [
  {
    ordem: 0,
    slug: '00-visao-geral',
    titulo: 'Introdução e visão geral',
    subtitulo: 'O mar como fronteira dos impérios',
    prioridade: 'alta',
    tempoEstimado: '20 min',
    statusInicial: 'pendente',
    objetivo:
      'Entender o fio condutor da matéria: o poder naval como instrumento estruturante de economias, impérios e disputas — e como a prova cobra leitura, causalidade e contexto, não decoreba de batalhas.',
    palavrasChave: ['poder naval', 'economia', 'tecnologia', 'religião', 'diplomacia', 'governo de impérios'],
  },
  {
    ordem: 1,
    slug: '01-mediterraneo-antigo-e-batalha-de-mylae',
    titulo: 'O Mediterrâneo antigo e a Batalha de Mylae',
    subtitulo: 'Como uma potência terrestre aprende a disputar o mar',
    prioridade: 'muito alta',
    tempoEstimado: '50 min',
    statusInicial: 'pendente',
    objetivo:
      'Explicar como Roma, potência terrestre, venceu Cartago no mar adaptando sua vantagem comparativa (o exército cidadão) via corvus, na Primeira Guerra Púnica.',
    palavrasChave: [
      'Mylae', 'corvus', 'Cartago', 'Roma', 'Primeira Guerra Púnica',
      'Sicília', 'Estreito de Messina', 'exército cidadão', 'mercenários', 'galeras',
    ],
  },
  {
    ordem: 2,
    slug: '02-da-galera-ao-navio-de-vela',
    titulo: 'Da galera ao navio de vela: tecnologia e poder naval',
    subtitulo: 'Como a tecnologia muda a escala da guerra naval',
    prioridade: 'alta',
    tempoEstimado: '45 min',
    statusInicial: 'pendente',
    objetivo:
      'Relacionar a evolução das embarcações — da galera às cogas, das cogas aos navios à vela com artilharia — com a expansão ultramarina e as disputas coloniais.',
    palavrasChave: [
      'galera', 'coga', 'Liga Hanseática', 'vela', 'canhão', 'galeão',
      'binômio vela-canhão', 'Sluys', 'Dover', 'descobrimentos ibéricos',
    ],
  },
  {
    ordem: 3,
    slug: '03-franca-antartica-corso-e-religiao',
    titulo: 'França Antártica: corso, conquista e religião',
    subtitulo: 'O mar como espaço de disputa imperial, comercial e religiosa',
    prioridade: 'muito alta',
    tempoEstimado: '55 min',
    statusInicial: 'pendente',
    objetivo:
      'Compreender a França Antártica como ameaça bifronte (econômico-territorial e religiosa) ao projeto colonizador português, e a lógica de guerra viva e mercês régias.',
    palavrasChave: [
      'França Antártica', 'Villegagnon', 'Forte Coligny', 'corso', 'pirataria',
      'mare clausum', 'mare liberum', 'peçonha luterana', 'guerra viva', 'mercês régias',
      'Fé e Império', 'Jean de Bolés', 'Tamoios',
    ],
  },
  {
    ordem: 4,
    slug: '04-ocupacoes-francesas-e-holandesas',
    titulo: 'Ocupações francesas e holandesas: o litoral como teatro naval',
    subtitulo: 'Por que o litoral brasileiro vira teatro de guerra naval',
    prioridade: 'alta',
    tempoEstimado: '50 min',
    statusInicial: 'pendente',
    objetivo:
      'Acompanhar as ocupações no litoral brasileiro — a presença francesa (França Antártica e França Equinocial) e as operações navais das invasões holandesas (Bahia 1624, Jornada dos Vassalos, Abrolhos 1631, Pernambuco 1630) — e o papel do poder naval no controle do litoral.',
    palavrasChave: [
      'França Equinocial', 'Guaxenduba', 'WIC', 'invasão da Bahia', 'Jornada dos Vassalos',
      'D. Fadrique de Toledo', 'Batalha de Abrolhos', 'Oquendo', 'Pater', 'invasão de Pernambuco',
      'Nassau', 'bloqueio naval',
    ],
  },
  {
    ordem: 5,
    slug: '05-brasil-holandes-restauracao-e-imperio',
    titulo: 'Brasil Holandês, Restauração e governo do Império',
    subtitulo: 'Guerra, diplomacia e administração imperial se misturam',
    prioridade: 'máxima',
    tempoEstimado: '70 min',
    statusInicial: 'pendente',
    objetivo:
      'Entender o nexo atlântico Brasil-Angola, o Estado polissinodal e a monarquia pluricontinental na crise da Restauração (1640-1654), e a reconquista de Angola por Salvador Correia de Sá.',
    palavrasChave: [
      'Restauração', 'D. João IV', 'Estado polissinodal', 'monarquia pluricontinental',
      'Angola', 'nexo atlântico', 'Salvador Correia de Sá', 'diplomacia', 'Pe. Vieira',
      'Capitulação da Campina do Taborda',
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
    objetivo:
      'Revisar os pontos mais prováveis da prova, treinar discursivas no estilo da banca e corrigir as armadilhas recorrentes.',
    palavrasChave: [
      'revisão', 'simulado', 'discursivas', 'armadilhas', 'causalidade histórica',
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

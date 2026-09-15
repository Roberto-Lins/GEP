// Timeline do curso — fonte de verdade da ordem/prioridade das mini-matérias.
// Para adicionar um tópico: crie a pasta em src/content/cursos/<slug>/ e um item aqui.
import type { Prioridade, TopicoTimeline } from '@tipos/lesson';

export type { Prioridade } from '@tipos/lesson';

export const timeline: TopicoTimeline[] = [
  {
    ordem: 0,
    slug: '00-escopo-pendente',
    titulo: '[PENDENTE — definir a partir da matriz]',
    subtitulo: 'Requer fontes autorizadas',
    prioridade: 'alta',
    tempoEstimado: '[PENDENTE]',
    statusInicial: 'pendente',
    objetivo: '[PENDENTE — REQUER FONTES E MATRIZ DE COBERTURA]',
    palavrasChave: [],
  },
  {
    ordem: 99,
    slug: '99-revisao-final',
    titulo: 'Revisão final',
    subtitulo: 'Simulado e revisão de véspera',
    prioridade: 'máxima',
    tempoEstimado: '60 min',
    statusInicial: 'pendente',
    objetivo: 'Revisar os pontos mais prováveis e corrigir erros recorrentes.',
    palavrasChave: ['revisão', 'simulado'],
  },
];

export const PRIORIDADE_META: Record<Prioridade, { label: string; peso: number; classe: string }> = {
  alta: { label: 'Alta', peso: 1, classe: 'text-nevoa border-white/15 bg-white/5' },
  'muito alta': { label: 'Muito alta', peso: 2, classe: 'text-dourado-soft border-dourado/30 bg-dourado/10' },
  máxima: { label: 'Máxima', peso: 3, classe: 'text-naval border-dourado bg-dourado font-semibold' },
};

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

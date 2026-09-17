import modulos from './module-meta.json';
import type { Prioridade, TopicoTimeline } from '@tipos/lesson';

export type { Prioridade } from '@tipos/lesson';

export const timeline: TopicoTimeline[] = modulos.map((modulo) => ({
  ordem: modulo.ordem,
  slug: modulo.slug,
  titulo: modulo.titulo,
  subtitulo: modulo.subtitulo,
  prioridade: modulo.prioridade as Prioridade,
  tempoEstimado: modulo.tempoEstimado,
  statusInicial: 'pendente',
  objetivo: modulo.objetivo,
  palavrasChave: modulo.palavrasChave,
}));

export const PRIORIDADE_META: Record<Prioridade, { label: string; peso: number; classe: string }> = {
  alta: { label: 'Alta', peso: 1, classe: 'text-nevoa border-white/15 bg-white/5' },
  'muito alta': { label: 'Muito alta', peso: 2, classe: 'text-dourado-soft border-dourado/30 bg-dourado/10' },
  máxima: { label: 'Máxima', peso: 3, classe: 'text-naval border-dourado bg-dourado font-semibold' },
};

export const topicosEstudo = timeline;
export const topicoPorSlug = (slug: string) => timeline.find((topico) => topico.slug === slug);

export function vizinhos(slug: string) {
  const ordenada = [...timeline].sort((a, b) => a.ordem - b.ordem);
  const indice = ordenada.findIndex((topico) => topico.slug === slug);
  return {
    anterior: indice > 0 ? ordenada[indice - 1] : null,
    proximo: indice >= 0 && indice < ordenada.length - 1 ? ordenada[indice + 1] : null,
  };
}

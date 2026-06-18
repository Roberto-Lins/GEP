// Tipos da trilha de estudo (mini-matérias / timeline de um curso).

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

export interface ItemChecklist {
  id: string;
  texto: string;
}

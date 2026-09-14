export const MODALIDADES_ESTUDO = ['rapido', 'pra-safar', 'completo'] as const;

export type ModalidadeEstudoId = (typeof MODALIDADES_ESTUDO)[number];

export type EstadoAutoriaModalidade = 'rascunho' | 'publicado';

/**
 * Metadados editoriais de uma variante concreta de curso.
 *
 * Cursos legados não possuem este bloco no JSON. A camada de leitura os
 * interpreta como famílias complete-only sem alterar seus slugs ou estado.
 */
export interface ModalidadeCursoConfig {
  contratoVersao: '1.0.0';
  familiaId: string;
  familiaTitulo: string;
  id: ModalidadeEstudoId;
  modalidadePadrao: ModalidadeEstudoId;
  modalidadesDisponiveis: ModalidadeEstudoId[];
  legadoSomenteCompleto: boolean;
  rotulo: string;
  descricao: string;
  finalidade: string;
  cobertura: string;
  /** Deve ser calculada a partir do conteúdo real antes da publicação. */
  duracaoMinutos: number | null;
  estadoAutoria: EstadoAutoriaModalidade;
}

export interface ModalidadeResumo {
  id: ModalidadeEstudoId;
  rotulo: string;
  descricao: string;
  finalidade: string;
  cobertura: string;
}

export const MODALIDADE_RESUMOS: Record<ModalidadeEstudoId, ModalidadeResumo> = {
  rapido: {
    id: 'rapido',
    rotulo: 'Rápido',
    descricao: 'Revisão concentrada, precisa e aplicável sob forte restrição de tempo.',
    finalidade: 'Revisar o núcleo mais relevante depois de já ter contato com a disciplina.',
    cobertura: 'Núcleo de prova, pré-requisitos indispensáveis, relações críticas e pegadinhas.',
  },
  'pra-safar': {
    id: 'pra-safar',
    rotulo: 'Pra Safar',
    descricao: 'Estudo direcionado e aprofundado de todo o escopo examinável.',
    finalidade: 'Buscar alto desempenho sem expandir o curso além do que o corpus sustenta.',
    cobertura: 'Todo o conteúdo examinável, com profundidade proporcional à cobrança.',
  },
  completo: {
    id: 'completo',
    rotulo: 'Completo',
    descricao: 'Formação ampla, integrada e duradoura, mesmo quando exige mais de um dia.',
    finalidade: 'Construir domínio integral da matéria e de suas conexões sustentadas.',
    cobertura: 'Todo o modo Pra Safar, mais mecanismos, exceções, integrações e suporte útil.',
  },
};

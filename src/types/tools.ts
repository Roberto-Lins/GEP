// Contrato do sistema de Ferramentas da plataforma.
// Uma ferramenta vive em src/tools/<id>/ e é registrada em src/tools/registry.ts.
import type { ComponentType } from 'react';

export type CategoriaId = 'navegacao' | 'calculo' | 'eletronica' | 'programacao' | 'educacional';

export interface ToolCategory {
  id: CategoriaId;
  nome: string;
  descricaoCurta: string;
  /** Markup interno de um <svg viewBox="0 0 24 24"> (paths/círculos), renderizado com currentColor. */
  icone: string;
}

export type ToolStatus = 'disponivel' | 'em-breve';

/** Modo de abertura da ferramenta. */
export type ToolMode = 'fullscreen' | 'janela' | 'contextual';

/** Props recebidas por todo componente de ferramenta. */
export interface ToolProps {
  modo: ToolMode;
  /** Exercício/cenário a pré-carregar (opcional). */
  exercicioId?: string;
  /** Curso atual (slug), p/ ferramentas com dados por curso, como o Caderno. */
  cursoId?: string;
}

export interface ToolDefinition {
  id: string;
  nome: string;
  categoria: CategoriaId;
  status: ToolStatus;
  descricao: string;
  icone: string;
  /** Rota de tela cheia. */
  rota: string;
  /** Pode ser aberta como janela flutuante sobre a página atual. */
  suportaJanela: boolean;
  /** Carregamento sob demanda do componente (só para status 'disponivel'). */
  carregar?: () => Promise<{ default: ComponentType<ToolProps> }>;
}

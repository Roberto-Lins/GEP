// Registro central das Ferramentas — única fonte da verdade.
// Para adicionar uma ferramenta no futuro: crie src/tools/<id>/ e some uma entrada aqui.
// Nada mais no site precisa mudar (menu, landing e janela leem este registro).
import type { CategoriaId, ToolCategory, ToolDefinition } from '@tipos/tools';

export const categorias: ToolCategory[] = [
  {
    id: 'navegacao',
    nome: 'Navegação',
    descricaoCurta: 'Rosa de manobras, movimento relativo e vento.',
    icone: '<circle cx="12" cy="12" r="9"/><polygon points="15.5 8.5 13 13 8.5 15.5 11 11" fill="currentColor" stroke="none"/>',
  },
  {
    id: 'calculo',
    nome: 'Cálculo',
    descricaoCurta: 'Calculadoras científicas e solucionadores.',
    icone: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 7h6M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01"/>',
  },
  {
    id: 'eletronica',
    nome: 'Eletrônica',
    descricaoCurta: 'Montador e analisador de circuitos.',
    icone: '<rect x="6" y="6" width="12" height="12" rx="1"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>',
  },
  {
    id: 'programacao',
    nome: 'Programação',
    descricaoCurta: 'Ferramentas auxiliares de código.',
    icone: '<polyline points="8 6 3 12 8 18"/><polyline points="16 6 21 12 16 18"/>',
  },
];

export const ferramentas: ToolDefinition[] = [
  {
    id: 'rosa-de-manobras',
    nome: 'Rosa de Manobras',
    categoria: 'navegacao',
    status: 'disponivel',
    descricao:
      'Resolve e visualiza contato/PMA, vento real, vento no convés (lançamento), entrada em posição e anticolisão (manobra evasiva) na placa de manobra (DHN-0618-1), com exercícios e correção automática.',
    icone:
      '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.5"/><path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3"/>',
    rota: '/ferramentas/rosa-de-manobras',
    suportaJanela: true,
    carregar: () => import('./rosa-de-manobras/components/RosaWorkspace'),
  },
];

export function ferramentaPorId(id: string): ToolDefinition | undefined {
  return ferramentas.find((f) => f.id === id);
}

export function ferramentasPorCategoria(cat: CategoriaId): ToolDefinition[] {
  return ferramentas.filter((f) => f.categoria === cat);
}

/** Ferramentas com componente carregável (status 'disponivel'). */
export function ferramentasDisponiveis(): ToolDefinition[] {
  return ferramentas.filter((f) => f.status === 'disponivel');
}

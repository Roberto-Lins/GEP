// Timeline do curso OPN 1 (Operações Navais — PP1) — fonte de verdade da
// ordem/prioridade. Segue RIGOROSAMENTE a "Linha do Tempo de estudo" das fontes:
// sair da doutrina e da linguagem comum da Marinha, passar pelos documentos e
// pela organização da força, dominar a ferramenta gráfica da Rosa de Manobras,
// aplicar isso nas manobras táticas e fechar com a compilação do quadro tático.
//
// Prioridades calibradas pelos pesos da prova (Orientações do professor):
//   UE5 Rosa = 3,7 pts (prioridade 1) · UE8 Quadro Tático = 2,8 (prioridade 2)
//   UE6 Manobras Táticas = 1,5 (prioridade 3) · UE1/2/4 alimentam diretas/cenários.
import type { Prioridade, TopicoTimeline } from '@tipos/lesson';

export type { Prioridade } from '@tipos/lesson';

export const timeline: TopicoTimeline[] = [
  {
    ordem: 0,
    slug: '00-introducao-e-mapa-da-prova',
    titulo: 'Introdução e mapa da prova',
    subtitulo: 'A prova como um sistema, não blocos soltos',
    prioridade: 'alta',
    tempoEstimado: '25 min',
    statusInicial: 'pendente',
    objetivo:
      'Enxergar a PP1 como um sistema integrado: o peso de cada questão (diretas, múltipla, Rosa, manobras táticas e cenários táticos), as UEs cobradas e o que o professor priorizou e excluiu — para estudar com foco, não no escuro.',
    palavrasChave: [
      'PP1', 'pesos da prova', 'Rosa de Manobras', 'cenários táticos',
      'UE', 'conteúdo excluído', 'material de desenho', '160 minutos',
    ],
  },
  {
    ordem: 1,
    slug: '01-poder-maritimo-e-poder-naval',
    titulo: 'Poder Marítimo e Poder Naval',
    subtitulo: 'O vocabulário de base da disciplina',
    prioridade: 'alta',
    tempoEstimado: '40 min',
    statusInicial: 'pendente',
    objetivo:
      'Construir o vocabulário-base: Poder Nacional e suas expressões, Poder Marítimo como projeção do Poder Nacional para o uso do mar, Poder Naval como seu componente militar, seus elementos e as quatro características (mobilidade, permanência, flexibilidade e versatilidade).',
    palavrasChave: [
      'Poder Nacional', 'Poder Marítimo', 'Poder Naval', 'mobilidade', 'permanência',
      'flexibilidade', 'versatilidade', 'meios navais', 'aeronavais', 'C2',
    ],
  },
  {
    ordem: 2,
    slug: '02-missao-campos-e-tarefas-do-poder-naval',
    titulo: 'Missão da MB, Campos de Atuação e Tarefas Básicas',
    subtitulo: 'Para que a Marinha prepara e emprega o Poder Naval',
    prioridade: 'muito alta',
    tempoEstimado: '45 min',
    statusInicial: 'pendente',
    objetivo:
      'Entender a missão da MB (preparar e empregar o Poder Naval), os Campos de Atuação do Poder Naval (Defesa Naval, Segurança Marítima, Diplomacia Naval e Apoio às Ações do Estado) e as Tarefas Básicas do Poder Naval — e fazer a correspondência entre campos e tarefas.',
    palavrasChave: [
      'missão da MB', 'CAPN', 'TBPN', 'Defesa Naval', 'Segurança Marítima',
      'Diplomacia Naval', 'negar o uso do mar', 'controle de área marítima', 'projeção de poder',
    ],
  },
  {
    ordem: 3,
    slug: '03-operacoes-acoes-e-atividades-navais',
    titulo: 'Operações, Ações e Atividades Navais',
    subtitulo: 'Classificar o emprego do Poder Naval em níveis',
    prioridade: 'alta',
    tempoEstimado: '40 min',
    statusInicial: 'pendente',
    objetivo:
      'Classificar o emprego do Poder Naval: Operações Navais (ações militares táticas), Ações Navais (tarefas típicas executadas por TTP padronizados), Atividades Navais (técnicas/procedimentos, muitas ligadas a atribuições subsidiárias) e Formas Transversais de emprego — sabendo distinguir uma da outra.',
    palavrasChave: [
      'operações navais', 'ações navais', 'atividades navais', 'formas transversais',
      'TTP', 'patrulha naval', 'IVR', 'antissubmarino', 'ação de superfície',
    ],
  },
  {
    ordem: 4,
    slug: '04-documentos-operativos-e-diretivas',
    titulo: 'Documentos Operativos e Diretivas',
    subtitulo: 'Como a intenção do comandante vira ordem',
    prioridade: 'muito alta',
    tempoEstimado: '45 min',
    statusInicial: 'pendente',
    objetivo:
      'Diferenciar documento operativo e diretiva; conhecer os tipos (Carta de Instrução, Plano de Campanha, Plano de Operações, Ordem de Operações, Ordem de Movimento, Ordem Preparatória…) e dominar a diferença crítica entre Plano de Operações (futuro não imediato, com hipótese básica) e Ordem de Operações (operação específica imediata, sem hipótese básica).',
    palavrasChave: [
      'documento operativo', 'diretiva', 'Carta de Instrução', 'Plano de Operações',
      'Ordem de Operações', 'Ordem de Movimento', 'Ordem Preparatória', 'hipótese básica',
    ],
  },
  {
    ordem: 5,
    slug: '05-estrutura-da-ordope-e-ordmov',
    titulo: 'Estrutura da OrdOpe/OrdMov e dados extraídos',
    subtitulo: 'Ler uma diretiva como fonte de dados operativos',
    prioridade: 'muito alta',
    tempoEstimado: '45 min',
    statusInicial: 'pendente',
    objetivo:
      'Ler a estrutura de uma diretiva (documento básico + partes complementares): cabeçalho, organização por tarefa, situação, missão, execução, administração/logística, comando e controle, e os anexos — extraindo de cada parte os dados que alimentam o COC, a manobra e o quadro tático.',
    palavrasChave: [
      'documento básico', 'partes complementares', 'organização por tarefa', 'situação',
      'missão', 'execução', 'comando e controle', 'anexos', 'OrdOpe', 'OrdMov',
    ],
  },
  {
    ordem: 6,
    slug: '06-atp-linguagem-operativa',
    titulo: 'ATP como linguagem operativa',
    subtitulo: 'A linguagem padronizada de sinais e manobras',
    prioridade: 'muito alta',
    tempoEstimado: '40 min',
    statusInicial: 'pendente',
    objetivo:
      'Tratar o ATP-1 Vol. II como ferramenta de consulta e interpretação para as UE5 e UE6: instruções gerais (codificar, interpretar, completar sinais, TACK, grupos governantes, indicativos) e o vocabulário FORM, RUMOCOR/CORPEN, GUINA/TURN, VELOC, POS, DESIG — sem decorar o livro, sabendo consultá-lo.',
    palavrasChave: [
      'ATP-1', 'FORM', 'RUMOCOR', 'CORPEN', 'GUINA', 'TURN', 'VELOC', 'POS',
      'TACK', 'grupo governante', 'are to / shall / must',
    ],
  },
  {
    ordem: 7,
    slug: '07-organizacao-comando-e-prontidao',
    titulo: 'Organização, Comando e Prontidão',
    subtitulo: 'Quem manda, com quais relações e em que prontidão',
    prioridade: 'muito alta',
    tempoEstimado: '50 min',
    statusInicial: 'pendente',
    objetivo:
      'Conectar doutrina e documentos à força real: organização por tipo, por tarefa (FT/GT/UT/ET) e para o combate (CWC: AAW/ASuW/ASW/EW); as relações de comando e controle (comando/controle operacional e tático); e a prontidão para ação — condições I a V e alarmes.',
    palavrasChave: [
      'organização por tarefa', 'FT', 'GT', 'UT', 'ET', 'CWC',
      'comando operacional', 'controle operacional', 'comando tático', 'controle tático',
      'condições de prontidão', 'OCT',
    ],
  },
  {
    ordem: 8,
    slug: '08-rosa-de-manobras-movimento-relativo',
    titulo: 'Rosa de Manobras I — Movimento relativo',
    subtitulo: 'Os fundamentos gráficos antes de resolver problemas',
    prioridade: 'máxima',
    tempoEstimado: '60 min',
    statusInicial: 'pendente',
    objetivo:
      'Dominar os fundamentos antes de calcular: movimento verdadeiro × relativo (DMR e VMR), diagrama das posições × diagrama das velocidades, a regra de ouro M1-M2 ∥ rm, a equação tr + rm = tm, as regras dos 3 e 6 minutos, e o cuidado com escalas, sentidos e recíprocas.',
    palavrasChave: [
      'movimento relativo', 'DMR', 'VMR', 'diagrama de posições', 'diagrama de velocidades',
      'tr', 'rm', 'tm', 'regra dos 3 minutos', 'regra dos 6 minutos', 'escala', 'recíproca',
    ],
  },
  {
    ordem: 9,
    slug: '09-rosa-de-manobras-pma-e-contatos',
    titulo: 'Rosa de Manobras II — PMA e contatos',
    subtitulo: 'O problema mais cobrado: rumo e velocidade do contato',
    prioridade: 'máxima',
    tempoEstimado: '60 min',
    statusInicial: 'pendente',
    objetivo:
      'Resolver o problema de contato passo a passo: plotar M1/M2, achar a DMR, medir a distância relativa, calcular a VMR, baixar a perpendicular para o PMA/CPA (marcação, menor distância e hora) e construir o diagrama de velocidades para obter rumo e velocidade verdadeiros do contato (tr + rm = tm).',
    palavrasChave: [
      'PMA', 'CPA', 'rumo do contato', 'velocidade do contato', 'DMR', 'VMR',
      'distância relativa', 'diagrama de velocidades', 'recíproca', 'hora do PMA',
    ],
  },
  {
    ordem: 10,
    slug: '10-rosa-de-manobras-vento',
    titulo: 'Rosa de Manobras III — Vento',
    subtitulo: 'Vento real, aparente e no convés de voo',
    prioridade: 'máxima',
    tempoEstimado: '55 min',
    statusInicial: 'pendente',
    objetivo:
      'Aplicar a soma vetorial ao vento: distinguir vento real, vento relativo (do anemômetro) e vento aparente; obter o vento real pelo diagrama vetorial; e resolver problemas de lançamento de aeronaves — achar rumo/velocidade do navio para produzir o vento desejado no convés.',
    palavrasChave: [
      'vento real', 'vento aparente', 'vento relativo', 'tw', 'rw',
      'vento no convés', 'lançamento de aeronaves', 'anemômetro', 'linha de proa fictícia',
    ],
  },
  {
    ordem: 11,
    slug: '11-rosa-de-manobras-entrar-em-posicao',
    titulo: 'Rosa de Manobras IV — Entrar em posição',
    subtitulo: 'Da ferramenta gráfica à manobra em formatura',
    prioridade: 'máxima',
    tempoEstimado: '55 min',
    statusInicial: 'pendente',
    objetivo:
      'Calcular rumo e tempo para entrar em posição ou mudar de posto: identificar a posição inicial do navio e a posição final do guia/unidade de referência, achar a distância relativa a percorrer e a DMR para o novo posto, e — com a velocidade de manobra dada — obter o rumo e o tempo do navio manobrador.',
    palavrasChave: [
      'entrar em posição', 'mudar de posto', 'final do guia', 'rumo de manobra',
      'tempo de manobra', 'velocidade de manobra', 'DMR', 'posto na formatura',
    ],
  },
  {
    ordem: 12,
    slug: '12-manobras-taticas-formaturas-e-sinais',
    titulo: 'Manobras Táticas I — Formaturas e sinais',
    subtitulo: 'O vocabulário de formatura antes de explicar manobras',
    prioridade: 'muito alta',
    tempoEstimado: '50 min',
    statusInicial: 'pendente',
    objetivo:
      'Dominar as definições (navio grande/pequeno, unidade, dispositivo, corpo principal, formatura circular), as formaturas em linha (coluna, linha de frente, linha de marcação e variações), as distâncias padrão, o guia da formatura e os sinais FORM, POS, DESIG, GUINA, RUMOCOR, VELOC.',
    palavrasChave: [
      'formatura', 'coluna', 'linha de frente', 'linha de marcação', 'distância padrão',
      'guia da formatura', 'FORM', 'POS', 'DESIG', 'navio grande', 'navio pequeno',
    ],
  },
  {
    ordem: 13,
    slug: '13-manobras-taticas-guina-rumocor-e-guia',
    titulo: 'Manobras Táticas II — GUINA, RUMOCOR e guia',
    subtitulo: 'A diferença que mais derruba na discursiva',
    prioridade: 'máxima',
    tempoEstimado: '55 min',
    statusInicial: 'pendente',
    objetivo:
      'Preparar as discursivas de manobra: método executivo normal × imediato; GUINA/TURN (todos guinam simultaneamente, a formatura se altera) × RUMOCOR/CORPEN (conversão sucessiva, a formatura se mantém, pode haver mudança automática de guia); mudança automática de guia, navio-pião e troca de postos.',
    palavrasChave: [
      'GUINA', 'TURN', 'RUMOCOR', 'CORPEN', 'executivo normal', 'executivo imediato',
      'mudança automática de guia', 'navio-pião', 'troca de postos', 'FORM D', 'FORM F', 'POS JULIETT',
    ],
  },
  {
    ordem: 14,
    slug: '14-quadro-tatico-coc-cic-e-etapas',
    titulo: 'Quadro Tático I — COC/CIC e etapas',
    subtitulo: 'Como a situação tática se forma dentro do navio',
    prioridade: 'muito alta',
    tempoEstimado: '45 min',
    statusInicial: 'pendente',
    objetivo:
      'Entender o COC/CIC: a tarefa principal (manter comando e estações informados, compilando o quadro tático) e a secundária (controle/assistência em navegação, AFN e manobras); as funções (AAW/ASuW/ASW/EW/manobra/AFN); as cinco etapas — coleta, filtragem, apresentação, avaliação e disseminação — e os postos/equipamentos.',
    palavrasChave: [
      'COC', 'CIC', 'coleta', 'filtragem', 'apresentação', 'avaliação', 'disseminação',
      'avaliador', 'quadro tático', 'postos guarnecidos', 'equipamentos',
    ],
  },
  {
    ordem: 15,
    slug: '15-quadro-tatico-contatos-e-partes',
    titulo: 'Quadro Tático II — Contatos e partes',
    subtitulo: 'O coração dos cenários táticos da Questão 5',
    prioridade: 'máxima',
    tempoEstimado: '55 min',
    statusInicial: 'pendente',
    objetivo:
      'Preparar os cenários táticos: métodos de expressar posição (lat/long, marcação e distância, grade, UTM), número e bloco de acompanhamento, categorias de contato (desconhecido/inimigo/amigo/neutro), partes de contato (instantânea, inicial, ampliadora, mista) e seus elementos essenciais, o Link de dados e o PROFON.',
    palavrasChave: [
      'contato', 'categoria', 'número de acompanhamento', 'bloco', 'parte inicial',
      'parte ampliadora', 'marcação e distância', 'grade', 'Link de dados', 'PROFON',
    ],
  },
  {
    ordem: 16,
    slug: '16-quadro-tatico-plotagens-pim-e-opgen',
    titulo: 'Quadro Tático III — Plotagens, PIM e OPGEN',
    subtitulo: 'Fechar a visão integrada do quadro tático',
    prioridade: 'muito alta',
    tempoEstimado: '45 min',
    statusInicial: 'pendente',
    objetivo:
      'Fechar o quadro tático: as plotagens em movimento relativo (de superfície e sumária) e em movimento verdadeiro (geográfica) e seus elementos; o PIM (posição e intenção de movimento); o RDVZ; a ETA; e o OPGEN como documento operativo de contexto.',
    palavrasChave: [
      'plotagem de superfície', 'plotagem sumária', 'plotagem geográfica', 'PIM',
      'RDVZ', 'ETA', 'OPGEN', 'derrota', 'legenda de acompanhamento',
    ],
  },
  {
    ordem: 99,
    slug: '99-revisao-final',
    titulo: 'Revisão final',
    subtitulo: 'Mapa das UEs, prioridades e simulação da prova',
    prioridade: 'máxima',
    tempoEstimado: '90 min',
    statusInicial: 'pendente',
    objetivo:
      'Consolidar a disciplina priorizando recuperação de ponto: blocos de conceitos, ATP/manobras, Rosa (contato, vento e posição) e quadro tático, com mnemônicos, pegadinhas, exemplos resolvidos e a estratégia de prova dos 160 minutos.',
    palavrasChave: [
      'revisão', 'mapa das UEs', 'Rosa', 'GUINA x RUMOCOR', 'partes de contato',
      'PIM', 'estratégia de prova', 'mnemônicos', 'pegadinhas',
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

// Linha do tempo do curso Detecção (PP1).
// Fonte de verdade da ordem/prioridade/metadados das mini-matérias.
// Ordem didática extraída de LinhaDoTempo.docx (Prof. Marcelo C. Fragoso):
// cálculo → regular tensão → deformar onda → deslocar onda → comparar/temporizar
// → histerese → disparar (tiristores) → gerar rampa (base de tempo).
import type { Prioridade, TopicoTimeline } from '@tipos/lesson';

export type { Prioridade } from '@tipos/lesson';

export const timeline: TopicoTimeline[] = [
  {
    ordem: 0,
    slug: '00-ideia-central-da-prova',
    titulo: 'A lógica-mãe da PP1',
    subtitulo: 'O que a prova de Detecção realmente cobra',
    prioridade: 'alta',
    tempoEstimado: '15 min',
    statusInicial: 'pendente',
    objetivo:
      'Entender que a PP1 é uma prova de raciocínio eletrônico: prever qual componente conduz, que tensão/corrente aparece, qual o tempo e como fica a forma de onda — e reconhecer as famílias de circuito.',
    palavrasChave: ['raciocínio', 'estados do circuito', 'forma de onda', 'famílias de circuito', 'radar fica no T2'],
  },
  {
    ordem: 1,
    slug: '01-ferramentas-de-calculo',
    titulo: 'Ferramentas de cálculo',
    subtitulo: 'O kit que sustenta todas as questões',
    prioridade: 'muito alta',
    tempoEstimado: '40 min',
    statusInicial: 'pendente',
    objetivo:
      'Dominar divisor de tensão, Lei de Ohm, potência, modelo do diodo e carga de capacitor (exponencial × corrente constante) e conversão de unidades — as ferramentas que se repetem em toda a prova.',
    palavrasChave: ['divisor de tensão', 'Lei de Ohm', 'potência', 'capacitor', 'dV/dt = I/C', 'unidades'],
  },
  {
    ordem: 2,
    slug: '02-fontes-cc-reguladas',
    titulo: 'Fontes CC reguladas',
    subtitulo: 'Do retificador ao regulador',
    prioridade: 'alta',
    tempoEstimado: '35 min',
    statusInicial: 'pendente',
    objetivo:
      'Entender a cadeia CA → retificador → filtro → regulador → carga e por que o capacitor de filtro suaviza, mas não estabiliza a tensão de saída.',
    palavrasChave: ['retificador', 'filtro', 'regulador', 'Zener', 'referência', 'IL = VO/RL'],
  },
  {
    ordem: 3,
    slug: '03-reguladores-com-transistor',
    titulo: 'Reguladores com transistor',
    subtitulo: 'Série, paralelo e limitador de corrente',
    prioridade: 'máxima',
    tempoEstimado: '55 min',
    statusInicial: 'pendente',
    objetivo:
      'Distinguir regulador série (corrente da carga passa pelo transistor) de paralelo (transistor desvia corrente) e analisar o limitador de corrente com RSC e Q2 (I_Lmáx ≈ 0,7/RSC).',
    palavrasChave: ['regulador série', 'regulador paralelo', 'limitador de corrente', 'RSC', 'corrente de curto', 'potência no transistor'],
  },
  {
    ordem: 4,
    slug: '04-reguladores-integrados',
    titulo: 'Reguladores integrados',
    subtitulo: '7805, 7812 e LM317',
    prioridade: 'muito alta',
    tempoEstimado: '40 min',
    statusInicial: 'pendente',
    objetivo:
      'Calcular VO em reguladores fixos e ajustáveis (LM317), a menor carga segura (Rmín = VO/Imáx) e a potência dissipada, respeitando tensão mínima de entrada e corrente máxima.',
    palavrasChave: ['7805', '7812', 'LM317', 'VREG', 'Rmín = VO/Imáx', 'corrente de polarização'],
  },
  {
    ordem: 5,
    slug: '05-reguladores-chaveados-pwm',
    titulo: 'Reguladores chaveados e PWM',
    subtitulo: 'Regulação por chaveamento e ciclo de trabalho',
    prioridade: 'alta',
    tempoEstimado: '35 min',
    statusInicial: 'pendente',
    objetivo:
      'Entender o transistor operando como chave (corte/saturação), o ciclo de trabalho (D = ton/T), a saída do buck (VOUT = D·VIN) e a realimentação que mantém VFB ≈ VREF.',
    palavrasChave: ['PWM', 'ciclo de trabalho', 'VOUT = D·VIN', 'buck', 'realimentação', 'VFB ≈ VREF'],
  },
  {
    ordem: 6,
    slug: '06-limitadores',
    titulo: 'Limitadores (ceifadores)',
    subtitulo: 'Cortar parte da forma de onda',
    prioridade: 'muito alta',
    tempoEstimado: '50 min',
    statusInicial: 'pendente',
    objetivo:
      'Desenhar a saída de circuitos limitadores analisando semiciclo a semiciclo, decidindo condução/corte de cada diodo e somando fontes DC e quedas para achar o nível de corte e os valores máximo/mínimo.',
    palavrasChave: ['limitador', 'ceifador', 'nível de corte', 'diodo + fonte DC', 'Zener', 'forma de onda'],
  },
  {
    ordem: 7,
    slug: '07-grampeadores',
    titulo: 'Grampeadores CC',
    subtitulo: 'Deslocar o nível DC sem deformar a onda',
    prioridade: 'muito alta',
    tempoEstimado: '45 min',
    statusInicial: 'pendente',
    objetivo:
      'Entender o grampeador: o capacitor carrega no pico e passa a somar/subtrair esse valor da entrada, deslocando o nível médio (VO = VI ± Vm) sem mudar a forma da onda.',
    palavrasChave: ['grampeador', 'nível DC', 'capacitor carregado', 'VO = VI ± Vm', 'positivo × negativo'],
  },
  {
    ordem: 8,
    slug: '08-comparadores',
    titulo: 'Comparadores com amp-op',
    subtitulo: 'Transformar entrada analógica em saída saturada',
    prioridade: 'alta',
    tempoEstimado: '35 min',
    statusInicial: 'pendente',
    objetivo:
      'Determinar a saída de um comparador em malha aberta (V+ > V- ⇒ +VCC; V+ < V- ⇒ -VEE) e desenhar a onda retangular saturada marcando os cruzamentos com a referência.',
    palavrasChave: ['comparador', 'malha aberta', 'saturação', 'V+ e V-', 'referência', 'saída retangular'],
  },
  {
    ordem: 9,
    slug: '09-multivibradores-555',
    titulo: 'Multivibradores com 555',
    subtitulo: 'Astável, monoestável e biestável',
    prioridade: 'máxima',
    tempoEstimado: '60 min',
    statusInicial: 'pendente',
    objetivo:
      'Classificar o multivibrador e calcular tempos e frequência: astável (T_ALTO = 0,7(RA+RB)C, T_BAIXO = 0,7·RB·C, f = 1/T) e monoestável (LP = 1,1·RA·C), desenhando VO e a tensão no capacitor.',
    palavrasChave: ['555', 'astável', 'monoestável', 'biestável', 'T_ALTO', 'T_BAIXO', 'LP = 1,1·RA·C', 'frequência'],
  },
  {
    ordem: 10,
    slug: '10-schmitt-trigger',
    titulo: 'Comparador Schmitt-trigger',
    subtitulo: 'Histerese: dois limiares e memória de estado',
    prioridade: 'máxima',
    tempoEstimado: '55 min',
    statusInicial: 'pendente',
    objetivo:
      'Calcular UTP e LTP a partir do divisor de realimentação (Vref = β·VO), explicar a histerese e desenhar a saída trocando de estado apenas nos limiares — não em zero.',
    palavrasChave: ['Schmitt-trigger', 'histerese', 'UTP', 'LTP', 'β = Rb/(Ra+Rb)', 'realimentação positiva'],
  },
  {
    ordem: 11,
    slug: '11-tiristores-scr-diac-triac',
    titulo: 'Tiristores: SCR, DIAC e TRIAC',
    subtitulo: 'Chaves eletrônicas que ligam por disparo',
    prioridade: 'muito alta',
    tempoEstimado: '55 min',
    statusInicial: 'pendente',
    objetivo:
      'Saber quando SCR, DIAC e TRIAC conduzem e quando desligam, subtrair a queda de condução informada e desenhar a forma de onda da corrente na carga só nos intervalos de condução.',
    palavrasChave: ['SCR', 'DIAC', 'TRIAC', 'porta', 'corrente de retenção', 'I_pico = (Vp - queda)/R', 'forma de onda de IL'],
  },
  {
    ordem: 12,
    slug: '12-ujt-oscilador-relaxacao',
    titulo: 'UJT e oscilador de relaxação',
    subtitulo: 'Da chave de disparo ao dente-de-serra',
    prioridade: 'alta',
    tempoEstimado: '50 min',
    statusInicial: 'pendente',
    objetivo:
      'Calcular RB1, RB2, VK e VP do UJT (VP = VK + 0,7), os tempos de carga/descarga e a frequência, e desenhar a tensão dente-de-serra no capacitor (sobe devagar de VV a VP, cai rápido).',
    palavrasChave: ['UJT', 'oscilador de relaxação', 'η (eta)', 'RBB', 'VP = VK + 0,7', 'dente-de-serra'],
  },
  {
    ordem: 13,
    slug: '13-geradores-base-de-tempo',
    titulo: 'Geradores de base de tempo',
    subtitulo: 'Rampas lineares como referência temporal',
    prioridade: 'alta',
    tempoEstimado: '45 min',
    statusInicial: 'pendente',
    objetivo:
      'Entender por que a rampa precisa ser linear (carga por fonte de corrente: dV/dt = I/C), calcular a inclinação e o tempo, e analisar a base de tempo com UJT (VV→VP) e com 555 (0→⅔VCC).',
    palavrasChave: ['base de tempo', 'rampa linear', 'dente-de-serra', 'dV/dt = I/C', 'fonte de corrente', 'UJT', '555'],
  },
  {
    ordem: 99,
    slug: '99-revisao-final',
    titulo: 'Revisão final',
    subtitulo: 'Roteiro universal de prova, simulado e véspera',
    prioridade: 'máxima',
    tempoEstimado: '60 min',
    statusInicial: 'pendente',
    objetivo:
      'Integrar fórmulas, o roteiro de 8 passos para qualquer questão, a tabela de "quando conduz/corta/dispara", o mapa de formas de onda e as pegadinhas — pronto para a véspera da prova.',
    palavrasChave: ['revisão', 'roteiro de prova', 'fórmulas', 'simulado', 'véspera'],
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

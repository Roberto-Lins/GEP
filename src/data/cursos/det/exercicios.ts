// Banco de questões do curso Detecção (PP1). Cada questão tem `topico` (slug da timeline)
// e `dificuldade`. Fontes de alta confiança: Lista 1/2 (gabarito oficial) e exemplos
// resolvidos dos slides do Prof. Fragoso. Questões de cálculo trazem a resolução
// passo a passo no `comentario`/`gabaritoComentado`.
//
// Conjunto inicial (Fase 1/3 em andamento) — meta ≥ 60. Lista 3 e a SOPA 2021
// (escaneadas) entrarão depois, como texto fornecido pelo usuário.
import type {
  QuestaoMultipla, QuestaoVF, GrupoCorrelacione, QuestaoDiscursiva, Questao,
} from '@tipos/question';
export type { Questao } from '@tipos/question';

const A = 0, B = 1, C = 2, D = 3;

export const multiplaEscolha: QuestaoMultipla[] = [
  // ── 00 ideia central ───────────────────────────────────────────────
  {
    id: 'me-00-01', tipo: 'multipla', topico: '00-ideia-central-da-prova', dificuldade: 'facil',
    enunciado: 'A PP1 de Detecção é, essencialmente, uma prova que cobra:',
    alternativas: [
      'Decorar a aparência e o nome de cada componente eletrônico.',
      'Prever o comportamento do circuito: quem conduz, que tensão/corrente surge, qual tempo e como fica a forma de onda.',
      'Memorizar as folhas de dados completas dos circuitos integrados.',
      'Projetar placas de circuito impresso do zero.',
    ],
    correta: B, conceito: 'Natureza da prova',
    comentario: 'A matéria é raciocínio eletrônico: a partir do circuito, prever estados (conduz/corta), tensões, correntes, tempos e a forma de onda. Reconhecer nomes ajuda, mas não resolve a questão.',
    fonte: 'LinhaDoTempo (00)',
  },
  {
    id: 'me-00-02', tipo: 'multipla', topico: '00-ideia-central-da-prova', dificuldade: 'facil',
    enunciado: 'Sobre o radar de pulso na PP1 de Detecção, é correto afirmar:',
    alternativas: [
      'É o tema central da PP1 e concentra a maior parte das questões.',
      'Não é conteúdo central da PP1; aparece só como contexto futuro (T2), motivando a base de tempo.',
      'Substitui o estudo de tiristores.',
      'É pré-requisito para entender reguladores.',
    ],
    correta: B, conceito: 'Escopo da PP1',
    comentario: 'Conforme orientação do professor, o radar de pulso fica para o T2. Na PP1 ele só serve de motivação para os geradores de base de tempo.',
    fonte: 'LinhaDoTempo (00)',
  },

  // ── 02 fontes reguladas ────────────────────────────────────────────
  {
    id: 'me-02-01', tipo: 'multipla', topico: '02-fontes-cc-reguladas', dificuldade: 'facil',
    enunciado: 'Numa fonte CC, qual a função do estágio REGULADOR (além do filtro)?',
    alternativas: [
      'Converter a tensão CA da rede em CC pulsante.',
      'Apenas suavizar a ondulação (ripple) da tensão.',
      'Manter a saída praticamente constante apesar de variações de entrada, carga e temperatura.',
      'Aumentar a frequência da tensão de entrada.',
    ],
    correta: C, conceito: 'Função do regulador',
    comentario: 'O retificador converte CA em CC pulsante e o capacitor de filtro suaviza, mas a saída ainda varia com a carga e a entrada. O regulador é que estabiliza VO.',
    fonte: 'Slides Fontes Reguladas 1',
    armadilha: 'Achar que o capacitor de filtro já "regula" a tensão — ele só suaviza.',
  },

  // ── 03 reguladores com transistor ──────────────────────────────────
  {
    id: 'me-03-01', tipo: 'multipla', topico: '03-reguladores-com-transistor', dificuldade: 'facil',
    enunciado: 'A diferença básica entre um regulador SÉRIE e um PARALELO está em que:',
    alternativas: [
      'No série o transistor fica em paralelo com a carga; no paralelo, em série.',
      'No série a corrente da carga passa pelo transistor regulador; no paralelo o transistor desvia corrente em paralelo com a carga.',
      'O série só funciona com Zener e o paralelo só com CI.',
      'O paralelo não estabiliza a tensão de saída.',
    ],
    correta: B, conceito: 'Série × paralelo',
    comentario: 'A posição do transistor define o tipo: no caminho da corrente de carga ⇒ série; desviando corrente em paralelo com a carga ⇒ paralelo. Em ambos, o objetivo é manter VO estável.',
    fonte: 'Slides Fontes Reguladas 1',
  },

  // ── 04 reguladores integrados ──────────────────────────────────────
  {
    id: 'me-04-01', tipo: 'multipla', topico: '04-reguladores-integrados', dificuldade: 'medio',
    enunciado: 'Um regulador 7805 tem corrente máxima de saída de 400 mA. Qual a menor resistência de carga que pode ser ligada sem ultrapassar esse limite?',
    alternativas: ['8 Ω', '12,5 Ω', '20 Ω', '2 kΩ'],
    correta: B, conceito: 'Carga mínima (Rmín = VO/Imáx)',
    comentario: 'O 7805 regula 5 V. A menor carga segura é Rmín = VO/Imáx = 5 V / 0,4 A = 12,5 Ω. Abaixo disso, a corrente passaria de 400 mA.',
    fonte: 'Slides Fontes Reguladas 2 (Exerc. 1)',
    armadilha: 'Tratar "corrente máxima" como corrente fixa obrigatória — é apenas o limite superior.',
  },
  {
    id: 'me-04-02', tipo: 'multipla', topico: '04-reguladores-integrados', dificuldade: 'medio',
    enunciado: 'No LM317 (VREG = 1,25 V), a tensão de saída ajustável é dada aproximadamente por:',
    alternativas: [
      'VO = VREG · R1 · R2',
      'VO = VREG · (1 + R2/R1) + IQ · R2',
      'VO = VREG / (1 + R1/R2)',
      'VO = VREG − IQ · R1',
    ],
    correta: B, conceito: 'Equação do LM317',
    comentario: 'VO = VREG·(1 + R2/R1) + IQ·R2. O termo IQ·R2 só importa quando o enunciado fornece a corrente de polarização (ajuste) IQ.',
    fonte: 'Slides Fontes Reguladas 2',
    armadilha: 'Esquecer o termo IQ·R2 quando o professor fornece IQ.',
  },

  // ── 05 chaveados / PWM ─────────────────────────────────────────────
  {
    id: 'me-05-01', tipo: 'multipla', topico: '05-reguladores-chaveados-pwm', dificuldade: 'medio',
    enunciado: 'Num regulador chaveado buck ideal com VIN = 20 V operando com ciclo de trabalho D = 0,3, a tensão média de saída é:',
    alternativas: ['6 V', '14 V', '20 V', '60 V'],
    correta: A, conceito: 'VOUT = D·VIN',
    comentario: 'No buck ideal, VOUT = D·VIN = 0,3 × 20 V = 6 V. A frequência do PWM é constante; o que varia para regular é o tempo ligado (ton).',
    fonte: 'Slides Fontes Reguladas 3',
    armadilha: 'Confundir o valor instantâneo (retangular) com o valor médio de saída.',
  },
  {
    id: 'me-05-02', tipo: 'multipla', topico: '05-reguladores-chaveados-pwm', dificuldade: 'facil',
    enunciado: 'Por que um regulador CHAVEADO dissipa menos potência que um regulador LINEAR?',
    alternativas: [
      'Porque usa um transistor maior.',
      'Porque o transistor fica quase sempre cortado ou saturado, evitando a região linear (onde V e I são altos ao mesmo tempo).',
      'Porque não precisa de realimentação.',
      'Porque a tensão de entrada é menor.',
    ],
    correta: B, conceito: 'Eficiência do chaveado',
    comentario: 'Como chave, o transistor opera em corte (I≈0) ou saturação (V≈0); nos dois casos o produto V·I é pequeno, logo a dissipação é baixa. No linear ele trabalha como resistor variável, dissipando bastante.',
    fonte: 'Slides Fontes Reguladas 3',
  },

  // ── 06 limitadores ─────────────────────────────────────────────────
  {
    id: 'me-06-01', tipo: 'multipla', topico: '06-limitadores', dificuldade: 'facil',
    enunciado: 'Um circuito LIMITADOR (ceifador) atua sobre o sinal de entrada de modo a:',
    alternativas: [
      'Deslocar o nível médio DC sem mudar a forma da onda.',
      'Cortar/ceifar parte da onda, limitando sua amplitude acima ou abaixo de certo nível.',
      'Amplificar linearmente a onda.',
      'Inverter a fase da onda.',
    ],
    correta: B, conceito: 'Limitador × grampeador',
    comentario: 'O limitador retira parte do sinal (ceifa) — "bate no teto" ou "bate no chão". Deslocar o nível DC sem deformar é função do grampeador.',
    fonte: 'Slides Limitadores e Grampeadores',
    armadilha: 'Desenhar a saída como onda quadrada quando o circuito só ceifa parte da senoide.',
  },

  // ── 07 grampeadores ────────────────────────────────────────────────
  {
    id: 'me-07-01', tipo: 'multipla', topico: '07-grampeadores', dificuldade: 'medio',
    enunciado: 'Uma onda de entrada varia de −12 V a +12 V. Após um grampeador positivo ideal (que soma o pico), a saída passa a variar de:',
    alternativas: ['−24 V a 0 V', '0 V a +24 V', '−12 V a +12 V', '−6 V a +18 V'],
    correta: B, conceito: 'Deslocamento do grampeador',
    comentario: 'O grampeador positivo soma Vm = 12 V a toda a onda: −12+12 = 0 e +12+12 = +24. A forma é idêntica, apenas deslocada para cima (0 a +24 V).',
    fonte: 'Slides Limitadores e Grampeadores',
    armadilha: 'Achar que o grampeador deforma a onda — ele só desloca o nível médio.',
  },

  // ── 08 comparadores ────────────────────────────────────────────────
  {
    id: 'me-08-01', tipo: 'multipla', topico: '08-comparadores', dificuldade: 'facil',
    enunciado: 'Num amp-op usado como comparador (malha aberta), quando V+ > V− a saída tende a:',
    alternativas: ['0 V (terra)', '+VCC (saturação positiva)', '−VEE (saturação negativa)', 'um valor proporcional a V+ − V−'],
    correta: B, conceito: 'Comparador em malha aberta',
    comentario: 'Sem realimentação, o ganho enorme do amp-op satura a saída: V+ > V− ⇒ VO ≈ +VCC; V+ < V− ⇒ VO ≈ −VEE. A saída é retangular, não proporcional.',
    fonte: 'Slides Multivibradores e Comparadores',
    armadilha: 'Tratar o comparador como amplificador linear.',
  },

  // ── 09 multivibradores 555 ─────────────────────────────────────────
  {
    id: 'me-09-01', tipo: 'multipla', topico: '09-multivibradores-555', dificuldade: 'facil',
    enunciado: 'Qual multivibrador gera uma onda retangular contínua, oscilando sozinho (sem disparo externo)?',
    alternativas: ['Monoestável', 'Biestável', 'Astável', 'Comparador'],
    correta: C, conceito: 'Tipos de multivibrador',
    comentario: 'Astável = oscila continuamente (sem estado estável). Monoestável = um pulso por disparo. Biestável = dois estados estáveis (memória).',
    fonte: 'Slides Multivibradores e Comparadores',
  },
  {
    id: 'me-09-02', tipo: 'multipla', topico: '09-multivibradores-555', dificuldade: 'medio',
    enunciado: 'Num 555 monoestável com RA = 7,5 kΩ e C = 0,1 µF, a largura do pulso de saída é aproximadamente:',
    alternativas: ['0,083 ms', '0,83 ms', '8,3 ms', '83 ms'],
    correta: B, conceito: 'Monoestável LP = 1,1·RA·C',
    comentario: 'LP = 1,1 · RA · C = 1,1 × 7 500 Ω × 0,1×10⁻⁶ F = 0,825×10⁻³ s ≈ 0,83 ms. Cuidado com as unidades (kΩ e µF).',
    fonte: 'Slides Multivibradores (Exemplo, LP = 0,83 ms)',
    armadilha: 'Usar a fórmula do astável (0,7…) num circuito monoestável.',
  },

  // ── 10 schmitt-trigger ─────────────────────────────────────────────
  {
    id: 'me-10-01', tipo: 'multipla', topico: '10-schmitt-trigger', dificuldade: 'medio',
    enunciado: 'Num Schmitt-trigger com VO = ±12 V e divisor de realimentação de 12 kΩ (para o terra) e 24 kΩ (da saída), com β = 2/3, os limiares UTP e LTP valem:',
    alternativas: ['+12 V e −12 V', '+8 V e −8 V', '+6 V e −6 V', '+4 V e 0 V'],
    correta: B, conceito: 'UTP/LTP (Vref = β·VO)',
    comentario: 'β = 24k/(12k+24k) = 2/3. Quando VO = +12 V, V+ = (2/3)·12 = +8 V (UTP); quando VO = −12 V, V+ = (2/3)·(−12) = −8 V (LTP). A histerese é UTP − LTP = 16 V.',
    fonte: 'Slides Schmitt-Trigger (Exemplo 1)',
    armadilha: 'Usar uma única referência, como no comparador comum — o Schmitt tem DOIS limiares.',
  },

  // ── 11 tiristores ──────────────────────────────────────────────────
  {
    id: 'me-11-01', tipo: 'multipla', topico: '11-tiristores-scr-diac-triac', dificuldade: 'medio',
    enunciado: 'Para LIGAR um SCR são necessárias quais condições?',
    alternativas: [
      'Apenas um pulso positivo na porta, em qualquer polarização.',
      'Polarização direta entre anodo e catodo E um pulso positivo na porta.',
      'Tensão reversa acima da tensão de ruptura.',
      'Apenas polarização direta, sem pulso de porta.',
    ],
    correta: B, conceito: 'Condução do SCR',
    comentario: 'O SCR liga com DUAS condições simultâneas: anodo-catodo diretamente polarizado E pulso positivo na porta. Reversamente polarizado, o pulso de porta não o liga.',
    fonte: 'Slides Tiristores',
    armadilha: 'Achar que o SCR liga só por receber pulso, mesmo reversamente polarizado.',
  },
  {
    id: 'me-11-02', tipo: 'multipla', topico: '11-tiristores-scr-diac-triac', dificuldade: 'facil',
    enunciado: 'Qual tiristor NÃO possui terminal de porta, disparando por tensão de ruptura (|V| ≥ VBR)?',
    alternativas: ['SCR', 'DIAC', 'TRIAC', 'UJT'],
    correta: B, conceito: 'DIAC',
    comentario: 'O DIAC não tem porta: conduz, em qualquer polaridade, quando o módulo da tensão ultrapassa a tensão de ruptura VBR.',
    fonte: 'Slides Tiristores',
    armadilha: 'Dar "porta" ao DIAC — ele dispara por tensão, não por pulso de gate.',
  },

  // ── 12 UJT ─────────────────────────────────────────────────────────
  {
    id: 'me-12-01', tipo: 'multipla', topico: '12-ujt-oscilador-relaxacao', dificuldade: 'medio',
    enunciado: 'Num UJT com η = 0,61 e RBB = 7 kΩ alimentado por VCC = 12 V, a tensão de pico VP (com VK = η·VCC) vale:',
    alternativas: ['7,3 V', '8,0 V', '12,7 V', '4,3 V'],
    correta: B, conceito: 'VP = VK + 0,7',
    comentario: 'VK = η·VCC = 0,61 × 12 = 7,3 V. VP = VK + 0,7 = 7,3 + 0,7 = 8,0 V. (RB1 = η·RBB = 4,3 kΩ; RB2 = RBB − RB1 = 2,7 kΩ.)',
    fonte: 'Slides Tiristores/UJT (Exemplo η = 0,61)',
  },

  // ── 13 base de tempo ───────────────────────────────────────────────
  {
    id: 'me-13-01', tipo: 'multipla', topico: '13-geradores-base-de-tempo', dificuldade: 'medio',
    enunciado: 'Um capacitor de 1 µF é carregado por uma fonte de corrente constante de 0,5 mA. A inclinação da rampa de tensão (dV/dt) é:',
    alternativas: ['0,5 V/s', '2 V/ms', '0,5 V/ms', '2 V/s'],
    correta: C, conceito: 'dV/dt = I/C',
    comentario: 'Com corrente constante a carga é linear: dV/dt = I/C = 0,5×10⁻³ A / 1×10⁻⁶ F = 500 V/s = 0,5 V/ms. NÃO se usa a equação exponencial de RC aqui.',
    fonte: 'Slides Base de Tempo',
    armadilha: 'Aplicar carga exponencial de RC quando a carga é por fonte de corrente.',
  },
];

export const verdadeiroFalso: QuestaoVF[] = [
  {
    id: 'vf-01-01', tipo: 'vf', topico: '01-ferramentas-de-calculo', dificuldade: 'facil',
    afirmacao: 'Quando um capacitor é carregado por uma fonte de corrente constante, deve-se usar a equação exponencial de carga RC.',
    correta: false,
    comentario: 'Falso. Com corrente constante a carga é LINEAR: usa-se dV/dt = I/C. A exponencial vale quando o capacitor carrega através de um resistor a partir de uma fonte de tensão.',
    fonte: 'LinhaDoTempo (01)',
    armadilha: 'Misturar o modelo exponencial (RC) com o linear (fonte de corrente).',
  },
  {
    id: 'vf-02-01', tipo: 'vf', topico: '02-fontes-cc-reguladas', dificuldade: 'facil',
    afirmacao: 'O capacitor de filtro, sozinho, mantém a tensão de saída estável independentemente da carga e da entrada.',
    correta: false,
    comentario: 'Falso. O capacitor de filtro apenas SUAVIZA a ondulação; a tensão ainda varia com a carga e a entrada. Quem estabiliza é o estágio regulador.',
    fonte: 'Slides Fontes Reguladas 1',
  },
  {
    id: 'vf-03-01', tipo: 'vf', topico: '03-reguladores-com-transistor', dificuldade: 'medio',
    afirmacao: 'No regulador com limitador de corrente, o transistor Q2 começa conduzindo e corta quando a corrente atinge o limite.',
    correta: false,
    comentario: 'Falso. Q2 começa CORTADO. Ele só liga quando a queda no resistor sensor RSC chega a ≈ 0,7 V; ao ligar, desvia corrente da base de Q1 e limita a corrente de carga.',
    fonte: 'Slides Fontes Reguladas 1',
    armadilha: 'Inverter o estado inicial de Q2 (ele parte cortado).',
  },
  {
    id: 'vf-07-01', tipo: 'vf', topico: '07-grampeadores', dificuldade: 'facil',
    afirmacao: 'O grampeador altera a forma da onda de entrada, deformando-a.',
    correta: false,
    comentario: 'Falso. O grampeador desloca o nível médio (DC) da onda, mas preserva a forma. Quem deforma/corta é o limitador.',
    fonte: 'Slides Limitadores e Grampeadores',
  },
  {
    id: 'vf-11-01', tipo: 'vf', topico: '11-tiristores-scr-diac-triac', dificuldade: 'medio',
    afirmacao: 'Um SCR diretamente polarizado conduz mesmo sem pulso de porta, desde que a tensão seja suficiente.',
    correta: false,
    comentario: 'Falso (no uso normal). Para ligar, o SCR precisa de polarização direta E pulso na porta. Para desligar, a corrente direta deve cair abaixo da corrente de retenção (I_holding).',
    fonte: 'Slides Tiristores',
  },
];

export const correlacionar: GrupoCorrelacione[] = [
  {
    id: 'cor-fam-01', tipo: 'correlacione', topico: '00-ideia-central-da-prova', dificuldade: 'facil',
    titulo: 'Associe cada circuito à sua função principal',
    chaves: [
      { chave: 'REG', texto: 'Regulador' },
      { chave: 'LIM', texto: 'Limitador' },
      { chave: 'GRA', texto: 'Grampeador' },
      { chave: 'SCH', texto: 'Schmitt-trigger' },
      { chave: 'BT', texto: 'Base de tempo' },
    ],
    itens: [
      { texto: 'Mantém a tensão CC de saída estável.', chave: 'REG' },
      { texto: 'Corta/ceifa parte da forma de onda.', chave: 'LIM' },
      { texto: 'Desloca o nível médio (DC) sem deformar a onda.', chave: 'GRA' },
      { texto: 'Comparador com histerese (dois limiares).', chave: 'SCH' },
      { texto: 'Gera uma rampa linear como referência temporal.', chave: 'BT' },
    ],
  },
  {
    id: 'cor-tir-01', tipo: 'correlacione', topico: '11-tiristores-scr-diac-triac', dificuldade: 'medio',
    titulo: 'Associe cada tiristor à sua condição de disparo',
    chaves: [
      { chave: 'SCR', texto: 'SCR' },
      { chave: 'DIAC', texto: 'DIAC' },
      { chave: 'TRIAC', texto: 'TRIAC' },
    ],
    itens: [
      { texto: 'Liga com polarização direta + pulso positivo na porta (unidirecional).', chave: 'SCR' },
      { texto: 'Sem porta; dispara quando |V| ≥ VBR, em qualquer polaridade.', chave: 'DIAC' },
      { texto: 'Bidirecional; dispara por pulso de porta e conduz nos dois sentidos.', chave: 'TRIAC' },
    ],
  },
];

export const discursivas: QuestaoDiscursiva[] = [
  {
    id: 'dis-04-01', tipo: 'discursiva', topico: '04-reguladores-integrados', dificuldade: 'medio',
    enunciado: 'Um circuito com LM317 tem tensão de saída mínima de 1,25 V e máxima de 8,75 V, e o CI tem corrente de polarização de 50 µA. Determine (a) a tensão regulada VREG do LM317 e (b) o valor do resistor variável Rx, sabendo que o resistor fixo vale Rx/5 (resistor inferior = Rx, superior = Rx/5 na montagem da lista).',
    gabaritoComentado:
      '(a) A tensão de saída MÍNIMA do LM317 ocorre quando o resistor de ajuste está no mínimo: ela é exatamente a tensão de referência interna. Logo VREG = 1,25 V.\n\n(b) Use VO = VREG·(1 + R2/R1) + IQ·R2 com a montagem da lista (R1 = Rx/5, R2 = Rx) para a saída máxima de 8,75 V. Resolvendo para Rx ⇒ Rx = 5 kΩ.\n\nResposta oficial (Lista 2): a) 1,25 V; b) 5 kΩ.',
    criterios: [
      'Identificou que VO mínimo = VREG = 1,25 V.',
      'Aplicou a equação do LM317 com IQ.',
      'Chegou a Rx = 5 kΩ.',
    ],
    fonte: 'Lista 1/2 — Q2 (gabarito oficial)',
    armadilha: 'Esquecer o termo IQ·R2 (a corrente de ajuste foi fornecida).',
  },
  {
    id: 'dis-03-01', tipo: 'discursiva', topico: '03-reguladores-com-transistor', dificuldade: 'dificil',
    enunciado: 'No regulador série da Lista 1 (referência Zener de 9,3 V, Rx = 13 kΩ), determine VO para VI = 62 V e para VI = 50 V. Em seguida, para VI = 35 V e VO = 20 V, determine a potência dissipada em Q1 e em Q2.',
    gabaritoComentado:
      'VO é fixada pela malha de referência (Zener + divisor), não pela entrada — por isso VO = 40 V tanto para VI = 62 V quanto para VI = 50 V (a entrada só precisa ser suficiente para o regulador operar).\n\nPara VI = 35 V e VO = 20 V:\n• Q1 (transistor série): P ≈ (VI − VO)·IL. Com os valores do circuito, P_Q1 = 642 mW.\n• Q2 (transistor de controle): P_Q2 = 494 mW.\n\nRespostas oficiais (Lista 2): a) 40 V; b) 40 V; c) 642 mW; d) 494 mW.',
    criterios: [
      'Percebeu que VO é definido pela referência, não pela entrada (40 V em a e b).',
      'Usou P ≈ (VI − VO)·IL para Q1.',
      'Chegou a P_Q1 = 642 mW e P_Q2 = 494 mW.',
    ],
    fonte: 'Lista 1/2 — Q5 (gabarito oficial)',
    armadilha: 'Supor que VO acompanha VI — num regulador, a saída fica constante.',
  },
  {
    id: 'dis-10-01', tipo: 'discursiva', topico: '10-schmitt-trigger', dificuldade: 'medio',
    enunciado: 'Explique, com suas palavras, o que é histerese num Schmitt-trigger e por que a saída não troca de estado quando a entrada cruza o zero.',
    gabaritoComentado:
      'Histerese é a existência de DOIS limiares distintos (UTP e LTP) em vez de um só. Por causa da realimentação positiva, a referência do comparador (V+) depende do estado atual da saída: vale β·(+VCC) quando a saída está alta e β·(−VEE) quando está baixa.\n\nAssim, a saída só comuta quando a entrada ULTRAPASSA o limiar válido naquele momento (UTP subindo, LTP descendo), e não no cruzamento por zero. Isso dá "memória" ao circuito e imunidade a ruído.',
    criterios: [
      'Definiu histerese como dois limiares (UTP e LTP).',
      'Relacionou os limiares à realimentação positiva (Vref = β·VO).',
      'Explicou que a comutação ocorre nos limiares, não em zero.',
    ],
    fonte: 'Slides Schmitt-Trigger',
  },
];

export const todasQuestoes: Questao[] = [
  ...multiplaEscolha, ...verdadeiroFalso, ...correlacionar, ...discursivas,
];

export function questoesPorTopico(slug: string): Questao[] {
  return todasQuestoes.filter((q) => q.topico === slug);
}

export const totalQuestoes = {
  multipla: multiplaEscolha.length,
  vf: verdadeiroFalso.length,
  correlacione: correlacionar.length,
  discursiva: discursivas.length,
};

// Banco de questões do curso Detecção (PP1). Cada questão tem `topico` (slug da timeline)
// e `dificuldade`. Fontes de alta confiança: Lista 1/2 (gabarito oficial) e exemplos
// resolvidos dos slides do Prof. Fragoso. Questões de cálculo trazem a resolução
// passo a passo no `comentario`/`gabaritoComentado`.
//
// Banco com ≥ 60 questões, todas com `fonte` rastreável (Lista 1/2 e slides do
// Prof. Fragoso; conceitos da LinhaDoTempo). Lista 3 e SOPA 2021 (escaneadas)
// entrarão como texto fornecido pelo usuário.
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

  // ════════ Fase 3 — ampliação (todas com fonte) ════════
  // 01 ferramentas
  { id: 'me-01-01', tipo: 'multipla', topico: '01-ferramentas-de-calculo', dificuldade: 'medio',
    enunciado: 'Num divisor de tensão com Vfonte = 12 V, Rcima = 4 kΩ e Rbaixo = 8 kΩ, a tensão no nó intermediário é:',
    alternativas: ['4 V', '6 V', '8 V', '12 V'], correta: C, conceito: 'Divisor de tensão',
    comentario: 'Vnó = Vfonte·Rbaixo/(Rcima+Rbaixo) = 12·8/(4+8) = 12·(2/3) = 8 V.',
    fonte: 'LinhaDoTempo (01)' },
  { id: 'me-01-02', tipo: 'multipla', topico: '01-ferramentas-de-calculo', dificuldade: 'facil',
    enunciado: 'Um resistor de 100 Ω é percorrido por 0,2 A. A potência dissipada é:',
    alternativas: ['0,4 W', '2 W', '4 W', '20 W'], correta: C, conceito: 'Potência',
    comentario: 'P = I²·R = (0,2)²·100 = 0,04·100 = 4 W.',
    fonte: 'LinhaDoTempo (01)' },
  { id: 'me-01-03', tipo: 'multipla', topico: '01-ferramentas-de-calculo', dificuldade: 'medio',
    enunciado: 'Uma fonte de corrente de 0,5 mA carrega um capacitor de 2 µF. O tempo para a tensão subir 10 V é:',
    alternativas: ['4 ms', '40 ms', '400 ms', '4 s'], correta: B, conceito: 't = C·ΔV/I',
    comentario: 't = C·ΔV/I = (2×10⁻⁶ · 10)/(0,5×10⁻³) = 2×10⁻⁵/5×10⁻⁴ = 0,04 s = 40 ms. Carga por corrente constante é linear.',
    fonte: 'LinhaDoTempo (01)', armadilha: 'Usar exponencial RC: aqui a carga é por fonte de corrente.' },
  // 02 fontes reguladas
  { id: 'me-02-02', tipo: 'multipla', topico: '02-fontes-cc-reguladas', dificuldade: 'facil',
    enunciado: 'Numa fonte regulada com VO = 12 V alimentando RL = 60 Ω, a corrente na carga é:',
    alternativas: ['0,2 A', '2 A', '5 A', '72 A'], correta: A, conceito: 'IL = VO/RL',
    comentario: 'IL = VO/RL = 12/60 = 0,2 A.',
    fonte: 'LinhaDoTempo (02)' },
  { id: 'me-02-03', tipo: 'multipla', topico: '02-fontes-cc-reguladas', dificuldade: 'facil',
    enunciado: 'Num regulador, o elemento que fixa o "alvo" de tensão (a referência) costuma ser:',
    alternativas: ['O capacitor de filtro', 'Um Zener ou um divisor de tensão', 'O resistor de carga', 'O transformador'],
    correta: B, conceito: 'Referência × controle',
    comentario: 'A referência costuma ser um Zener ou um divisor; o elemento de controle (transistor/CI) ajusta a saída para bater nessa referência.',
    fonte: 'Slides Fontes Reguladas 1' },
  // 03 reguladores com transistor
  { id: 'me-03-02', tipo: 'multipla', topico: '03-reguladores-com-transistor', dificuldade: 'medio',
    enunciado: 'Num regulador com limitador de corrente cujo resistor sensor é RSC = 0,28 Ω, a corrente de curto-circuito é aproximadamente:',
    alternativas: ['0,7 A', '1,4 A', '2,5 A', '5 A'], correta: C, conceito: 'I_Lmáx ≈ 0,7/RSC',
    comentario: 'I_Lmáx ≈ 0,7/RSC = 0,7/0,28 ≈ 2,5 A. Q2 liga quando a queda em RSC chega a ≈ 0,7 V e limita a corrente.',
    fonte: 'Lista 1/2 — Q7 (gabarito: I_curto = 2,5 A)' },
  { id: 'me-03-03', tipo: 'multipla', topico: '03-reguladores-com-transistor', dificuldade: 'facil',
    enunciado: 'No regulador série, a corrente que alimenta a carga:',
    alternativas: ['É desviada pelo transistor para o terra', 'Passa através do transistor regulador', 'Não depende do transistor', 'É sempre nula'],
    correta: B, conceito: 'Regulador série',
    comentario: 'No série, o transistor está no caminho da carga (IE ≈ IL). Desviar corrente em paralelo é característica do regulador paralelo.',
    fonte: 'LinhaDoTempo (03)' },
  // 04 reguladores integrados
  { id: 'me-04-03', tipo: 'multipla', topico: '04-reguladores-integrados', dificuldade: 'facil',
    enunciado: 'O regulador integrado 7812 fornece uma tensão regulada de:',
    alternativas: ['5 V', '7,8 V', '12 V', '78 V'], correta: C, conceito: 'Reguladores fixos 78xx',
    comentario: 'Nos 78xx, os dois últimos dígitos são a tensão: 7812 → 12 V (7805 → 5 V).',
    fonte: 'Slides Fontes Reguladas 2' },
  { id: 'me-04-04', tipo: 'multipla', topico: '04-reguladores-integrados', dificuldade: 'facil',
    enunciado: 'Um regulador 7805 NÃO conseguirá regular quando:',
    alternativas: ['A carga tiver alta resistência', 'A tensão de entrada cair abaixo da tensão mínima de entrada', 'A temperatura for baixa', 'A saída estiver aberta'],
    correta: B, conceito: 'Tensão mínima de entrada',
    comentario: 'O CI só regula se a entrada superar VImín. Abaixo disso, a saída deixa de ser estável.',
    fonte: 'LinhaDoTempo (04)' },
  // 05 chaveados / PWM
  { id: 'me-05-03', tipo: 'multipla', topico: '05-reguladores-chaveados-pwm', dificuldade: 'medio',
    enunciado: 'Num buck ideal que produz VOUT = 3 V a partir de VIN = 12 V, o ciclo de trabalho D é:',
    alternativas: ['0,25', '0,5', '0,75', '4'], correta: A, conceito: 'D = VOUT/VIN',
    comentario: 'VOUT = D·VIN → D = VOUT/VIN = 3/12 = 0,25 (25%).',
    fonte: 'LinhaDoTempo (05) / Slides Fontes Reguladas 3' },
  // 06 limitadores
  { id: 'me-06-02', tipo: 'multipla', topico: '06-limitadores', dificuldade: 'facil',
    enunciado: 'Para desenhar a saída de um limitador, o procedimento correto é:',
    alternativas: ['Multiplicar a entrada por um ganho fixo', 'Analisar cada semiciclo e decidir se o diodo conduz ou corta', 'Somar uma rampa linear à entrada', 'Inverter a fase da onda'],
    correta: B, conceito: 'Análise por semiciclo',
    comentario: 'Analisa-se semiciclo a semiciclo: quando o diodo conduz, a saída fica presa no nível de corte; quando corta, acompanha a entrada.',
    fonte: 'LinhaDoTempo (06)' },
  { id: 'me-06-03', tipo: 'multipla', topico: '06-limitadores', dificuldade: 'medio',
    enunciado: 'Num limitador com diodo Zener, o ceifamento pode ter níveis diferentes nos dois sentidos porque o Zener:',
    alternativas: ['Conduz só em um sentido', 'Conduz direto (~0,7 V) num sentido e por ruptura (VZ) no outro', 'Nunca conduz', 'Funciona como capacitor'],
    correta: B, conceito: 'Limitador com Zener',
    comentario: 'O Zener limita em um lado pela condução direta (~0,7 V) e no outro pela tensão de ruptura VZ — por isso os cortes podem ser diferentes.',
    fonte: 'Slides Limitadores e Grampeadores / LinhaDoTempo (06)' },
  // 07 grampeadores
  { id: 'me-07-02', tipo: 'multipla', topico: '07-grampeadores', dificuldade: 'medio',
    enunciado: 'Uma onda de −12 V a +12 V passa por um grampeador NEGATIVO ideal. A saída passa a variar de:',
    alternativas: ['0 V a +24 V', '−24 V a 0 V', '−12 V a +12 V', '−6 V a +6 V'], correta: B, conceito: 'Grampeador negativo',
    comentario: 'O grampeador negativo subtrai Vm = 12 V: −12−12 = −24 e +12−12 = 0. Mesma forma, deslocada para baixo (−24 a 0 V).',
    fonte: 'Slides Limitadores e Grampeadores / LinhaDoTempo (07)' },
  // 08 comparadores
  { id: 'me-08-02', tipo: 'multipla', topico: '08-comparadores', dificuldade: 'facil',
    enunciado: 'Num comparador em malha aberta, quando V+ < V− a saída tende a:',
    alternativas: ['+VCC', '−VEE', '0 V', 'um valor proporcional a V+ − V−'], correta: B, conceito: 'Saturação do comparador',
    comentario: 'V+ < V− ⇒ VO ≈ −VEE; V+ > V− ⇒ VO ≈ +VCC. A saída satura, não é proporcional.',
    fonte: 'Slides Multivibradores e Comparadores' },
  // 09 multivibradores 555
  { id: 'me-09-03', tipo: 'multipla', topico: '09-multivibradores-555', dificuldade: 'facil',
    enunciado: 'Um 555 astável tem período T = 1,6 ms. A frequência do sinal de saída é:',
    alternativas: ['160 Hz', '625 Hz', '1,6 kHz', '6,25 kHz'], correta: B, conceito: 'f = 1/T',
    comentario: 'f = 1/T = 1/(1,6×10⁻³) = 625 Hz.',
    fonte: 'Slides Multivibradores (Exemplo, f = 625 Hz)' },
  { id: 'me-09-04', tipo: 'multipla', topico: '09-multivibradores-555', dificuldade: 'facil',
    enunciado: 'No 555 astável, o tempo em nível alto (T_ALTO) é dado por:',
    alternativas: ['0,7·RB·C', '0,7·(RA+RB)·C', '1,1·RA·C', 'RA·C'], correta: B, conceito: 'Fórmulas do astável',
    comentario: 'T_ALTO = 0,7·(RA+RB)·C (carga por RA+RB); T_BAIXO = 0,7·RB·C (descarga por RB). 1,1·RA·C é do monoestável.',
    fonte: 'Slides Multivibradores (slide das fórmulas)' },
  { id: 'me-09-05', tipo: 'multipla', topico: '09-multivibradores-555', dificuldade: 'medio',
    enunciado: 'No 555 astável, a tensão no capacitor oscila entre:',
    alternativas: ['0 e VCC', '⅓ VCC e ⅔ VCC', '¼ VCC e ¾ VCC', '0,7 V e VCC'], correta: B, conceito: 'Limiares internos do 555',
    comentario: 'Os comparadores internos do 555 vigiam ⅓ VCC e ⅔ VCC; o capacitor carrega e descarrega entre esses dois limiares.',
    fonte: 'Slides Multivibradores (estrutura interna / limiares ⅓ e ⅔ VCC)' },
  // 10 schmitt
  { id: 'me-10-02', tipo: 'multipla', topico: '10-schmitt-trigger', dificuldade: 'facil',
    enunciado: 'Um Schmitt-trigger tem UTP = +8 V e LTP = −8 V. A histerese vale:',
    alternativas: ['0 V', '8 V', '16 V', '−16 V'], correta: C, conceito: 'Histerese = UTP − LTP',
    comentario: 'Histerese = UTP − LTP = 8 − (−8) = 16 V.',
    fonte: 'Slides Schmitt-Trigger (Exemplo 1)' },
  { id: 'me-10-03', tipo: 'multipla', topico: '10-schmitt-trigger', dificuldade: 'medio',
    enunciado: 'Num Schmitt-trigger construído com o 555 (VCC = 12 V), os limiares UTP e LTP valem, respectivamente:',
    alternativas: ['12 V e 0 V', '8 V e 4 V', '6 V e −6 V', '10 V e 2 V'], correta: B, conceito: 'Schmitt com 555 (⅔ e ⅓ VCC)',
    comentario: 'No 555, os limiares são ⅔ VCC e ⅓ VCC. Com VCC = 12 V: UTP = ⅔·12 = 8 V e LTP = ⅓·12 = 4 V.',
    fonte: 'Slides Schmitt-Trigger (Ex. 3) / Lista 2 — Q6a (UTP=8, LTP=4)' },
  // 11 tiristores
  { id: 'me-11-03', tipo: 'multipla', topico: '11-tiristores-scr-diac-triac', dificuldade: 'facil',
    enunciado: 'A principal diferença do TRIAC em relação ao SCR é que o TRIAC:',
    alternativas: ['Não tem porta', 'Conduz nos dois sentidos (bidirecional)', 'Só conduz com luz', 'Não desliga nunca'], correta: B, conceito: 'TRIAC',
    comentario: 'O TRIAC funciona como o SCR, mas é bidirecional: conduz nos dois sentidos (disparado por pulso de porta). O SCR é unidirecional.',
    fonte: 'Slides Tiristores (slide do TRIAC)' },
  { id: 'me-11-04', tipo: 'multipla', topico: '11-tiristores-scr-diac-triac', dificuldade: 'medio',
    enunciado: 'Um SCR em condução é desligado quando:',
    alternativas: ['Recebe um pulso negativo na porta', 'A corrente direta cai abaixo da corrente de retenção', 'A tensão de porta chega a 0,7 V', 'A temperatura aumenta'],
    correta: B, conceito: 'Desligamento do SCR',
    comentario: 'Para desligar o SCR, a corrente direta deve cair abaixo da corrente de retenção (I_holding). A porta não desliga o SCR.',
    fonte: 'Slides Tiristores (Desligamento)' },
  { id: 'me-11-05', tipo: 'multipla', topico: '11-tiristores-scr-diac-triac', dificuldade: 'facil',
    enunciado: 'A corrente de pico na carga de um tiristor em condução é calculada por:',
    alternativas: ['Vpico · Rcarga', '(Vpico − queda de condução)/Rcarga', 'Vpico/queda', 'Vpico + queda'], correta: B, conceito: 'I_pico na carga',
    comentario: 'Subtrai-se a queda de condução informada antes de dividir pela carga: I_pico = (Vpico − queda)/Rcarga.',
    fonte: 'LinhaDoTempo (11) / Slides Tiristores', armadilha: 'Esquecer de subtrair a queda de condução.' },
  // 12 UJT
  { id: 'me-12-02', tipo: 'multipla', topico: '12-ujt-oscilador-relaxacao', dificuldade: 'medio',
    enunciado: 'Num UJT com η = 0,8 e RBB = 9 kΩ, o valor de RB1 é:',
    alternativas: ['1,8 kΩ', '7,2 kΩ', '9 kΩ', '11,25 kΩ'], correta: B, conceito: 'RB1 = η·RBB',
    comentario: 'RB1 = η·RBB = 0,8·9 = 7,2 kΩ. RB2 = RBB − RB1 = 9 − 7,2 = 1,8 kΩ.',
    fonte: 'Slides Tiristores/UJT (Exemplo η = 0,8)' },
  { id: 'me-12-03', tipo: 'multipla', topico: '12-ujt-oscilador-relaxacao', dificuldade: 'medio',
    enunciado: 'Para o UJT com η = 0,8, RBB = 9 kΩ e VCC = 12 V (VK ≈ 9,6 V), a tensão de pico VP é aproximadamente:',
    alternativas: ['8,0 V', '9,6 V', '10,3 V', '12,0 V'], correta: C, conceito: 'VP = VK + 0,7',
    comentario: 'VP = VK + 0,7 ≈ 9,6 + 0,7 = 10,3 V — é o valor em que o UJT dispara.',
    fonte: 'Slides Tiristores/UJT (Exemplo, VP = 10,3 V)' },
  // 13 base de tempo
  { id: 'me-13-02', tipo: 'multipla', topico: '13-geradores-base-de-tempo', dificuldade: 'facil',
    enunciado: 'A rampa de uma base de tempo é projetada para ser LINEAR porque:',
    alternativas: ['O tempo é uma grandeza linear, e a carga por corrente constante dá dV/dt = I/C (uma reta)', 'O capacitor é grande', 'A frequência é alta', 'O diodo conduz sempre'],
    correta: A, conceito: 'Rampa linear (dV/dt = I/C)',
    comentario: 'Como o tempo é linear, a referência também precisa ser. Carregando o capacitor por corrente constante, dV/dt = I/C é constante → reta. Carga por resistor daria exponencial.',
    fonte: 'LinhaDoTempo (13) / Slides Base de Tempo' },
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
  { id: 'vf-04-01', tipo: 'vf', topico: '04-reguladores-integrados', dificuldade: 'facil',
    afirmacao: 'A corrente máxima (Imáx) de um regulador integrado é a corrente que ele sempre fornece à carga.',
    correta: false,
    comentario: 'Falso. Imáx é um LIMITE superior, não uma corrente obrigatória; a carga puxa o que precisar, desde que não ultrapasse Imáx.',
    fonte: 'LinhaDoTempo (04)' },
  { id: 'vf-05-01', tipo: 'vf', topico: '05-reguladores-chaveados-pwm', dificuldade: 'medio',
    afirmacao: 'Num regulador PWM, a frequência varia e o tempo ligado (ton) permanece constante.',
    correta: false,
    comentario: 'Falso. É o contrário: a frequência do PWM é CONSTANTE e o que varia para regular é o tempo ligado (ton). D = ton/T.',
    fonte: 'Slides Fontes Reguladas 3 / LinhaDoTempo (05)',
    armadilha: 'Inverter o que é fixo (frequência) e o que varia (ton).' },
  { id: 'vf-06-01', tipo: 'vf', topico: '06-limitadores', dificuldade: 'facil',
    afirmacao: 'Um limitador sempre transforma a senoide de entrada em uma onda quadrada perfeita.',
    correta: false,
    comentario: 'Falso. Quando o circuito só ceifa parte da onda, a saída tem um trecho curvo (acompanhando a entrada) e um trecho reto (limitado) — não uma quadrada perfeita.',
    fonte: 'LinhaDoTempo (06)' },
  { id: 'vf-09-01', tipo: 'vf', topico: '09-multivibradores-555', dificuldade: 'medio',
    afirmacao: 'Para calcular o período de um 555 ASTÁVEL, usa-se LP = 1,1·RA·C.',
    correta: false,
    comentario: 'Falso. LP = 1,1·RA·C é do MONOESTÁVEL. No astável usam-se T_ALTO = 0,7(RA+RB)C e T_BAIXO = 0,7·RB·C.',
    fonte: 'Slides Multivibradores',
    armadilha: 'Trocar a fórmula do monoestável pela do astável.' },
  { id: 'vf-10-01', tipo: 'vf', topico: '10-schmitt-trigger', dificuldade: 'facil',
    afirmacao: 'No Schmitt-trigger, a saída comuta exatamente quando a entrada cruza o zero.',
    correta: false,
    comentario: 'Falso. A saída comuta nos limiares UTP (subindo) e LTP (descendo), não no cruzamento por zero — é isso que dá a histerese.',
    fonte: 'Slides Schmitt-Trigger' },
  { id: 'vf-12-01', tipo: 'vf', topico: '12-ujt-oscilador-relaxacao', dificuldade: 'medio',
    afirmacao: 'No oscilador de relaxação com UJT, o tempo de carga t1 costuma ser muito maior que o de descarga t2.',
    correta: true,
    comentario: 'Verdadeiro. A carga (via R) é lenta e a descarga (via RB1(ON)) é rápida — no exemplo dos slides, t1 = 44,8 ms é muito maior que t2.',
    fonte: 'Slides Tiristores/UJT (t1 = 44,8 ms ≫ t2)' },
];

export const correlacionar: GrupoCorrelacione[] = [
  {
    id: 'cor-fam-01', tipo: 'correlacione', topico: '00-ideia-central-da-prova', dificuldade: 'facil',
    titulo: 'Associe cada circuito à sua função principal',
    fonte: 'LinhaDoTempo (00)',
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
    fonte: 'Slides Tiristores',
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
  {
    id: 'cor-mv-01', tipo: 'correlacione', topico: '09-multivibradores-555', dificuldade: 'facil',
    titulo: 'Associe cada multivibrador ao seu comportamento',
    fonte: 'Slides Multivibradores',
    chaves: [
      { chave: 'AST', texto: 'Astável' },
      { chave: 'MON', texto: 'Monoestável' },
      { chave: 'BIE', texto: 'Biestável' },
    ],
    itens: [
      { texto: 'Oscila sozinho, sem disparo (onda retangular contínua).', chave: 'AST' },
      { texto: 'Gera um único pulso após o disparo e volta ao repouso.', chave: 'MON' },
      { texto: 'Possui dois estados estáveis (funciona como memória).', chave: 'BIE' },
    ],
  },
  {
    id: 'cor-form-01', tipo: 'correlacione', topico: '99-revisao-final', dificuldade: 'medio',
    titulo: 'Associe cada circuito à sua fórmula-chave',
    fonte: 'Slides / LinhaDoTempo (fórmulas)',
    chaves: [
      { chave: 'A555', texto: '555 astável' },
      { chave: 'M555', texto: '555 monoestável' },
      { chave: 'SCH', texto: 'Schmitt' },
      { chave: 'BT', texto: 'Base de tempo' },
      { chave: 'REG', texto: 'Regulador fixo' },
    ],
    itens: [
      { texto: 'T_ALTO = 0,7·(RA+RB)·C', chave: 'A555' },
      { texto: 'LP = 1,1·RA·C', chave: 'M555' },
      { texto: 'UTP/LTP = β·VO', chave: 'SCH' },
      { texto: 'dV/dt = I/C', chave: 'BT' },
      { texto: 'Rmín = VO/Imáx', chave: 'REG' },
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
  {
    id: 'dis-12-01', tipo: 'discursiva', topico: '12-ujt-oscilador-relaxacao', dificuldade: 'dificil',
    enunciado: 'UJT: η = 0,8; RBB = 9 kΩ; VCC = 12 V; R1 = 12 kΩ; C = 2 µF; VV = 1 V. Determine RB1, RB2, VK, VP e o tempo de carga t1.',
    gabaritoComentado:
      '1) RB1 = η·RBB = 0,8·9k = 7,2 kΩ.\n2) RB2 = RBB − RB1 = 9k − 7,2k = 1,8 kΩ.\n3) VK = η·VCC ≈ 9,6 V (divisor entre as bases).\n4) VP = VK + 0,7 = 10,3 V (tensão de disparo).\n5) t1 = R1·C·ln[(VCC − VV)/(VCC − VP)] = 12k·2µF·ln[(12 − 1)/(12 − 10,3)] = 12k·2µF·ln(11/1,7) ≈ 44,8 ms.\n\nResultados do slide: RB1 = 7,2 kΩ; RB2 = 1,8 kΩ; VK = 9,6 V; VP = 10,3 V; t1 = 44,8 ms.',
    criterios: [
      'RB1 = 7,2 kΩ e RB2 = 1,8 kΩ.',
      'VP = 10,3 V (= VK + 0,7).',
      't1 ≈ 44,8 ms por t1 = R1·C·ln[(VCC−VV)/(VCC−VP)].',
    ],
    fonte: 'Slides Tiristores/UJT (Exemplo η = 0,8; t1 = 44,8 ms)',
    armadilha: 'Usar RB1(OFF) na descarga, ou aplicar carga linear (aqui a carga via R é exponencial).',
  },
  {
    id: 'dis-09-01', tipo: 'discursiva', topico: '09-multivibradores-555', dificuldade: 'medio',
    enunciado: 'No 555 astável, explique por que o tempo em nível alto usa (RA + RB) e o tempo em nível baixo usa apenas RB.',
    gabaritoComentado:
      'Na fase ALTA, o capacitor CARREGA através de RA e RB em série (a corrente vem da alimentação passando pelos dois resistores) → T_ALTO = 0,7·(RA + RB)·C.\n\nNa fase BAIXA, o pino 7 (descarga) entra em condução e o capacitor DESCARREGA apenas por RB → T_BAIXO = 0,7·RB·C.\n\nO período é T = T_ALTO + T_BAIXO e a frequência f = 1/T.',
    criterios: [
      'Carga por RA+RB → T_ALTO = 0,7(RA+RB)C.',
      'Descarga só por RB → T_BAIXO = 0,7·RB·C.',
      'f = 1/(T_ALTO + T_BAIXO).',
    ],
    fonte: 'Slides Multivibradores',
  },
  {
    id: 'dis-11-01', tipo: 'discursiva', topico: '11-tiristores-scr-diac-triac', dificuldade: 'medio',
    enunciado: 'Descreva a forma de onda da corrente na carga (IL) de um SCR alimentado por uma senoide, disparado por um pulso de porta no semiciclo positivo, sabendo que a queda de condução é 1,5 V.',
    gabaritoComentado:
      'Semiciclo NEGATIVO: o SCR está reversamente polarizado → não conduz, IL = 0 (o pulso de porta seria ignorado).\n\nSemiciclo POSITIVO, antes do pulso: ainda não disparou → IL = 0.\n\nA partir do PULSO: o SCR liga e IL = (V2 − 1,5)/Rcarga, acompanhando o restante da senoide.\n\nNo fim do semiciclo, quando a corrente cai a zero, o SCR DESLIGA sozinho. Logo, IL existe só num pedaço do semiciclo positivo — do disparo até a passagem por zero.',
    criterios: [
      'IL = 0 no semiciclo negativo e antes do pulso.',
      'IL = (V2 − 1,5)/Rcarga após o disparo.',
      'Desliga na passagem da corrente por zero.',
    ],
    fonte: 'Slides Tiristores (EXERCÍCIO 01, queda 1,5 V)',
  },
  {
    id: 'dis-06-01', tipo: 'discursiva', topico: '06-limitadores', dificuldade: 'medio',
    enunciado: 'Um limitador ceifa o pico positivo de uma senoide quando o diodo conduz em VDC + 0,7 V. Descreva a forma de onda da saída.',
    gabaritoComentado:
      'Semiciclo NEGATIVO: o diodo do ramo de ceifamento fica reverso (corta) → a saída acompanha a entrada, até −Vpico.\n\nSemiciclo POSITIVO: enquanto a entrada está abaixo de VDC + 0,7, o diodo corta e a saída acompanha a entrada; ao passar de VDC + 0,7, o diodo conduz e a saída fica PRESA (platô) em VDC + 0,7.\n\nResultado: a onda acompanha a entrada, exceto o topo, que vira um platô em VDC + 0,7 V. Mínimo = −Vpico; máximo = VDC + 0,7 V.',
    criterios: [
      'Diodo corta no semiciclo negativo (saída acompanha a entrada).',
      'Platô em VDC + 0,7 V no semiciclo positivo.',
      'Marca máximo (VDC+0,7) e mínimo (−Vpico).',
    ],
    fonte: 'LinhaDoTempo (06) / Slides Limitadores e Grampeadores',
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

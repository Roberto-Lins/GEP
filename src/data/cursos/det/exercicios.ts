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
    comentario:
      '**Resposta: B.** A PP1 é uma prova de RACIOCÍNIO sobre o circuito, não de memória.\n\n' +
      '**O que cobra:** entender a verdadeira natureza da prova — o que o examinador espera que você saiba FAZER.\n\n' +
      '**Por que B está certa:** a partir do desenho do circuito, a prova pede que você preveja o comportamento — quem conduz e quem corta, que tensão e que corrente aparecem em cada ponto, quanto tempo um processo dura e qual é a forma de onda resultante. Tudo isso é dedução, não decoreba.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A)** decorar a aparência/nome dos componentes ajuda a CLASSIFICAR o circuito, mas sozinho não resolve nada — ainda é preciso prever o comportamento.\n' +
      '- **C)** a prova nunca cobra a folha de dados completa de um CI; ela fornece no enunciado os poucos parâmetros necessários (ex.: VREG, Imáx).\n' +
      '- **D)** projeto de placa (PCB) é outra disciplina; aqui você ANALISA circuitos prontos, não desenha layout.\n\n' +
      '**Pegadinha:** achar que "saber o nome de tudo" basta. Reconhecer o componente é só o ponto de partida.\n\n' +
      '**Regra prática:** em toda questão pergunte-se, nesta ordem — *quem conduz? que tensão/corrente surge? quanto tempo? que forma de onda?*',
    fonte: 'LinhaDoTempo (00)',
  },
  {
    id: 'me-00-02', tipo: 'multipla', topico: '00-ideia-central-da-prova', dificuldade: 'facil',
    enunciado: 'Ao começar qualquer questão da PP1, o primeiro passo recomendado é:',
    alternativas: [
      'Escolher logo uma fórmula e substituir os números.',
      'Classificar a que família o circuito pertence antes de escolher a conta.',
      'Calcular a potência de todos os componentes.',
      'Desenhar a forma de onda antes de ler o enunciado.',
    ],
    correta: B, conceito: 'Roteiro de resolução',
    comentario:
      '**Resposta: B.**\n\n' +
      '**O que cobra:** o roteiro mental correto para INICIAR qualquer questão da PP1.\n\n' +
      '**Por que B está certa:** circuitos diferentes obedecem a contas diferentes. Antes de mexer em fórmula é preciso saber a QUE FAMÍLIA o circuito pertence (regulador? limitador? grampeador? comparador/555/Schmitt? tiristor/UJT? base de tempo?). A família é que diz qual fórmula vale: classifique primeiro, calcule depois.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A)** "escolher logo a fórmula" é o erro nº 1 — você arrisca aplicar a equação de outra família (ex.: usar a do astável num monoestável).\n' +
      '- **C)** calcular a potência de tudo é trabalho perdido se a questão não pede potência.\n' +
      '- **D)** desenhar a onda antes de ler o enunciado é colocar o carro à frente dos bois — você ainda nem sabe o que o circuito faz.\n\n' +
      '**Pegadinha:** a ansiedade de "encaixar um número numa fórmula" antes de entender o circuito.\n\n' +
      '**Regra prática:** **classifique → identifique o que se pede → só então escolha a conta.**',
    fonte: 'LinhaDoTempo (00/14)',
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
    comentario:
      '**Resposta: C.**\n\n' +
      '**O que cobra:** o papel do estágio REGULADOR na cadeia de uma fonte CC (transformador → retificador → filtro → regulador).\n\n' +
      '**Interpretação:** depois do retificador (que faz CC pulsante) e do capacitor de filtro (que suaviza), a tensão ainda balança quando a carga ou a rede mudam. O regulador entra para SEGURAR a saída.\n\n' +
      '**Por que C está certa:** a função do regulador é manter VO praticamente constante apesar de variações de (1) tensão de entrada, (2) corrente de carga e (3) temperatura. É o estágio que estabiliza.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A)** converter CA em CC pulsante é tarefa do RETIFICADOR, não do regulador.\n' +
      '- **B)** suavizar a ondulação (ripple) é tarefa do CAPACITOR DE FILTRO — ele reduz o ripple, mas não estabiliza contra carga/entrada.\n' +
      '- **D)** aumentar a frequência não é função de nenhum estágio da fonte.\n\n' +
      '**Pegadinha:** achar que o capacitor de filtro "já regula". Ele só suaviza; quem estabiliza é o regulador.\n\n' +
      '**Regra prática:** filtro = menos ondulação; regulador = tensão fixa. São papéis diferentes.',
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
    comentario:
      '**Resposta: B.**\n\n' +
      '**O que cobra:** distinguir regulador SÉRIE de PARALELO pela POSIÇÃO do transistor.\n\n' +
      '**Interpretação:** a diferença está em onde o transistor fica em relação à carga — e isso muda como ele controla VO.\n\n' +
      '**Por que B está certa:**\n' +
      '- **Série:** o transistor fica no CAMINHO da corrente de carga (em série com RL). Toda a corrente da carga passa por ele (IE ≈ IL); ele age como um "resistor ajustável" que segura VO.\n' +
      '- **Paralelo:** o transistor fica EM PARALELO com a carga e DESVIA o excesso de corrente para o terra, segurando VO por outro mecanismo.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A)** inverte as posições (diz série onde é paralelo e vice-versa).\n' +
      '- **C)** ambos podem usar Zener e/ou CI; não existe essa exclusividade.\n' +
      '- **D)** o paralelo TAMBÉM estabiliza VO — apenas por um caminho diferente.\n\n' +
      '**Pegadinha:** decorar "série/paralelo" sem olhar onde está o transistor. A posição relativa à carga é o que define o tipo.\n\n' +
      '**Regra prática:** transistor no caminho da carga → SÉRIE; transistor desviando corrente ao lado da carga → PARALELO.',
    fonte: 'Slides Fontes Reguladas 1',
  },

  // ── 04 reguladores integrados ──────────────────────────────────────
  {
    id: 'me-04-01', tipo: 'multipla', topico: '04-reguladores-integrados', dificuldade: 'medio',
    enunciado: 'Um regulador 7805 tem corrente máxima de saída de 400 mA. Qual a menor resistência de carga que pode ser ligada sem ultrapassar esse limite?',
    imagem: '/imagens/cursos/det/q-7805.webp',
    alternativas: ['8 Ω', '12,5 Ω', '20 Ω', '2 kΩ'],
    correta: B, conceito: 'Carga mínima (Rmín = VO/Imáx)',
    comentario:
      '**Resposta: B (12,5 Ω).**\n\n' +
      '**O que cobra:** a carga MÍNIMA que um regulador fixo aguenta sem estourar a corrente máxima.\n\n' +
      '**No circuito:** o 7805 regula Vo = 5 V e alimenta RL; o dado-limite é Imáx = 400 mA. Quanto MENOR a carga RL, MAIOR a corrente IL = Vo/RL — logo existe um RL mínimo.\n\n' +
      '**Passo a passo:**\n' +
      '1. Corrente na carga: IL = Vo / RL.\n' +
      '2. No limite, IL = Imáx = 0,4 A. Isolando RL:\n' +
      '3. Rmín = Vo / Imáx = 5 / 0,4 = **12,5 Ω**. Abaixo disso, IL passaria de 400 mA.\n\n' +
      '**Por que B:** 12,5 Ω é a alternativa B.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A) 8 Ω:** daria IL = 5/8 = 0,625 A > 0,4 A — viola o limite.\n' +
      '- **C) 20 Ω:** é segura, mas NÃO é a mínima (IL = 0,25 A, com folga).\n' +
      '- **D) 2 kΩ:** carga enorme, corrente minúscula — longe do limite.\n\n' +
      '**Pegadinha:** tratar "corrente máxima" como corrente fixa obrigatória. Imáx é só o TETO; a carga puxa o que precisar até esse teto.\n\n' +
      '**Regra prática:** carga mínima de um regulador fixo → Rmín = Vo / Imáx. Carga menor → corrente maior → estoura.',
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
    comentario:
      '**Resposta: B.**\n\n' +
      '**O que cobra:** reconhecer a equação de saída do LM317.\n\n' +
      '**No circuito:** R1 fica entre OUT e ADJ; R2 entre ADJ e o terra. A referência interna é VREG ≈ 1,25 V (tensão fixa que o CI mantém entre OUT e ADJ).\n\n' +
      '**Por que B está certa:** o LM317 mantém 1,25 V sobre R1, o que fixa uma corrente que também atravessa R2. Somando as quedas:\n' +
      'VO = VREG·(1 + R2/R1) + IQ·R2.\n' +
      'O termo IQ·R2 é a contribuição da pequena corrente de ajuste (pino ADJ) e só pesa quando o enunciado fornece IQ.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A) VREG·R1·R2:** produto de resistências — dimensionalmente sem sentido.\n' +
      '- **C) VREG/(1+R1/R2):** daria VO < VREG, impossível para o LM317 (VO ≥ 1,25 V).\n' +
      '- **D) VREG − IQ·R1:** subtrai onde deveria somar e ignora a relação R2/R1.\n\n' +
      '**Pegadinha:** esquecer o termo IQ·R2 quando o professor FORNECE IQ — costuma ser o detalhe que separa o acerto do erro.\n\n' +
      '**Regra prática:** LM317 → VO = 1,25·(1 + R2/R1) + IQ·R2. Sem IQ no enunciado, use só o primeiro termo.',
    fonte: 'Slides Fontes Reguladas 2',
    armadilha: 'Esquecer o termo IQ·R2 quando o professor fornece IQ.',
  },

  // ── 05 chaveados / PWM ─────────────────────────────────────────────
  {
    id: 'me-05-01', tipo: 'multipla', topico: '05-reguladores-chaveados-pwm', dificuldade: 'medio',
    enunciado: 'Num regulador chaveado buck ideal com VIN = 20 V operando com ciclo de trabalho D = 0,3, a tensão média de saída é:',
    imagem: '/imagens/cursos/det/q-buck.webp',
    alternativas: ['6 V', '14 V', '20 V', '60 V'],
    correta: A, conceito: 'VOUT = D·VIN',
    comentario:
      '**Resposta: A (6 V).**\n\n' +
      '**O que cobra:** a tensão média de saída de um conversor buck ideal em função do ciclo de trabalho.\n\n' +
      '**No circuito:** o transistor (chave) liga/desliga VIN = 20 V em PWM; o diodo, o indutor L e o capacitor C filtram esse chaveamento e entregam à carga RL uma tensão MÉDIA contínua (VOUT).\n\n' +
      '**Passo a passo:**\n' +
      '1. No buck ideal, a saída é a média do retângulo chaveado: VOUT = D·VIN.\n' +
      '2. VOUT = 0,3 × 20 = **6 V**.\n\n' +
      '**Por que A:** 6 V é a alternativa A.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **B) 14 V:** usou (1 − D)·VIN = 0,7·20 — fórmula do buck "ao contrário".\n' +
      '- **C) 20 V:** é o VALOR de pico do retângulo (chave ligada), não a média.\n' +
      '- **D) 60 V:** multiplicou por 3 (confundiu D = 0,3 com fator 3) ou usou topologia boost.\n\n' +
      '**Pegadinha:** confundir o valor instantâneo (retângulo de 0 a 20 V) com o valor MÉDIO de saída (6 V), que é o que a carga "sente".\n\n' +
      '**Regra prática:** buck ideal → VOUT = D·VIN, com 0 ≤ D ≤ 1 (a saída é sempre MENOR que a entrada).',
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
    comentario:
      '**Resposta: B.**\n\n' +
      '**O que cobra:** por que o regulador CHAVEADO é mais eficiente que o LINEAR.\n\n' +
      '**Por que B está certa:** no chaveado o transistor trabalha como CHAVE — ou cortado (I ≈ 0) ou saturado (V ≈ 0). Nos dois estados o produto V·I (a potência dissipada) é quase nulo. Ele quase não passa pela região linear, onde V e I seriam altos ao mesmo tempo.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A) transistor maior:** tamanho não define eficiência; o modo de operação (chave) define.\n' +
      '- **C) sem realimentação:** o chaveado TAMBÉM usa realimentação (para ajustar D); isso não tem a ver com dissipação.\n' +
      '- **D) entrada menor:** a eficiência não vem de reduzir VIN.\n\n' +
      '**Pegadinha:** atribuir a economia ao "tamanho" ou à "tensão", quando a razão é o transistor operar como chave (corte/saturação).\n\n' +
      '**Regra prática:** linear = transistor como resistor (dissipa muito); chaveado = transistor como chave (dissipa pouco).',
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
    comentario:
      '**Resposta: B.**\n\n' +
      '**O que cobra:** o que faz um limitador (ceifador) e a fronteira com o grampeador.\n\n' +
      '**Por que B está certa:** o limitador CORTA (ceifa) parte da onda, limitando a amplitude acima ou abaixo de certo nível — "bate no teto" ou "bate no chão". A parte que ultrapassa o nível de corte vira um platô.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A)** deslocar o nível médio DC sem mudar a forma é função do GRAMPEADOR, não do limitador.\n' +
      '- **C)** amplificar linearmente é função de um amplificador — o limitador não tem ganho.\n' +
      '- **D)** inverter a fase é outra operação (inversor); o limitador não inverte.\n\n' +
      '**Pegadinha:** confundir limitador (corta a forma) com grampeador (preserva a forma, só desloca).\n\n' +
      '**Regra prática:** limitador = tesoura (corta o excesso); grampeador = elevador (sobe/desce a onda inteira).',
    fonte: 'Slides Limitadores e Grampeadores',
    armadilha: 'Desenhar a saída como onda quadrada quando o circuito só ceifa parte da senoide.',
  },

  // ── 07 grampeadores ────────────────────────────────────────────────
  {
    id: 'me-07-01', tipo: 'multipla', topico: '07-grampeadores', dificuldade: 'medio',
    enunciado: 'Uma onda de entrada varia de −12 V a +12 V. Após um grampeador positivo ideal (que soma o pico), a saída passa a variar de:',
    imagem: '/imagens/cursos/det/07-grampeador-circuito.webp',
    alternativas: ['−24 V a 0 V', '0 V a +24 V', '−12 V a +12 V', '−6 V a +18 V'],
    correta: B, conceito: 'Deslocamento do grampeador',
    comentario:
      '**Resposta: B (0 V a +24 V).**\n\n' +
      '**O que cobra:** o deslocamento que um grampeador POSITIVO ideal aplica à onda.\n\n' +
      '**No circuito:** o capacitor C em série carrega-se até o pico da entrada (12 V) no semiciclo em que o diodo D conduz; depois C passa a se comportar como uma fonte DC de +12 V em série, SOMANDO 12 V a toda a onda.\n\n' +
      '**Passo a passo:**\n' +
      '1. Vm (pico da entrada) = 12 V.\n' +
      '2. Grampeador positivo: VO = Vi + Vm.\n' +
      '3. Novo mínimo: −12 + 12 = **0 V**. Novo máximo: +12 + 12 = **+24 V**.\n\n' +
      '**Por que B:** a saída varia de 0 V a +24 V — alternativa B.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A) −24 a 0 V:** é o grampeador NEGATIVO (subtrai 12), não o positivo.\n' +
      '- **C) −12 a +12 V:** é a própria entrada, sem deslocamento — ignora o grampeador.\n' +
      '- **D) −6 a +18 V:** deslocou só 6 V (metade) — valor sem origem no circuito.\n\n' +
      '**Pegadinha:** achar que o grampeador DEFORMA a onda. Ele só desloca: a forma e os 24 V pico-a-pico são idênticos; muda apenas o nível médio.\n\n' +
      '**Regra prática:** grampeador positivo → soma Vm (mínimo vai a 0, máximo a +2Vm); negativo → subtrai Vm.',
    fonte: 'Slides Limitadores e Grampeadores',
    armadilha: 'Achar que o grampeador deforma a onda — ele só desloca o nível médio.',
  },

  // ── 08 comparadores ────────────────────────────────────────────────
  {
    id: 'me-08-01', tipo: 'multipla', topico: '08-comparadores', dificuldade: 'facil',
    enunciado: 'Num amp-op usado como comparador (malha aberta), quando V+ > V− a saída tende a:',
    alternativas: ['0 V (terra)', '+VCC (saturação positiva)', '−VEE (saturação negativa)', 'um valor proporcional a V+ − V−'],
    correta: B, conceito: 'Comparador em malha aberta',
    comentario:
      '**Resposta: B (+VCC).**\n\n' +
      '**O que cobra:** o comportamento de um amp-op usado como comparador (malha aberta).\n\n' +
      '**No circuito:** o sinal entra em V+ (aqui "Vi") e a referência em V− (aqui "Vref"). Sem realimentação, o amp-op compara os dois e satura.\n\n' +
      '**Por que B está certa:** o ganho em malha aberta é enorme (100 000× ou mais). Qualquer diferença V+ − V− > 0 é amplificada até bater no trilho de alimentação: V+ > V− ⇒ VO ≈ +VCC. A saída é retangular (extremos), não proporcional.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A) 0 V:** o comparador não fica no meio; vai para um dos extremos.\n' +
      '- **C) −VEE:** é o caso oposto (V+ < V−).\n' +
      '- **D) proporcional a V+ − V−:** seria um amplificador linear (com realimentação negativa), não um comparador.\n\n' +
      '**Pegadinha:** tratar o comparador como amplificador linear. Em malha aberta ele só satura (+VCC ou −VEE).\n\n' +
      '**Regra prática:** comparador → V+ > V−: saída +VCC; V+ < V−: saída −VEE.',
    fonte: 'Slides Multivibradores e Comparadores',
    armadilha: 'Tratar o comparador como amplificador linear.',
  },

  // ── 09 multivibradores 555 ─────────────────────────────────────────
  {
    id: 'me-09-01', tipo: 'multipla', topico: '09-multivibradores-555', dificuldade: 'facil',
    enunciado: 'Qual multivibrador gera uma onda retangular contínua, oscilando sozinho (sem disparo externo)?',
    alternativas: ['Monoestável', 'Biestável', 'Astável', 'Comparador'],
    correta: C, conceito: 'Tipos de multivibrador',
    comentario:
      '**Resposta: C (astável).**\n\n' +
      '**O que cobra:** distinguir os três multivibradores pela presença (ou não) de estado estável.\n\n' +
      '**Por que C está certa:** o ASTÁVEL não tem nenhum estado estável — troca de nível sozinho, continuamente, gerando uma onda retangular sem precisar de disparo externo. É um oscilador livre.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A) Monoestável:** tem UM estado estável; gera um único pulso a cada disparo e volta ao repouso.\n' +
      '- **B) Biestável:** tem DOIS estados estáveis; fica em um deles até receber um comando (memória).\n' +
      '- **D) Comparador:** não é multivibrador; é um bloco que compara duas tensões.\n\n' +
      '**Pegadinha:** confundir astável (oscila sozinho) com monoestável (precisa de disparo).\n\n' +
      '**Regra prática:** a-STÁVEL = sem estado estável = oscila sozinho; mono = 1 pulso por disparo; bi = 2 estados (memória).',
    fonte: 'Slides Multivibradores e Comparadores',
  },
  {
    id: 'me-09-02', tipo: 'multipla', topico: '09-multivibradores-555', dificuldade: 'medio',
    enunciado: 'Num 555 monoestável com RA = 7,5 kΩ e C = 0,1 µF, a largura do pulso de saída é aproximadamente:',
    imagem: '/imagens/cursos/det/q-555-monoestavel.webp',
    alternativas: ['0,083 ms', '0,83 ms', '8,3 ms', '83 ms'],
    correta: B, conceito: 'Monoestável LP = 1,1·RA·C',
    comentario:
      '**Resposta: B (0,83 ms).**\n\n' +
      '**O que cobra:** a largura do pulso de um 555 MONOESTÁVEL.\n\n' +
      '**No circuito:** o 555 está em monoestável, com RA = 7,5 kΩ e C = 0,1 µF; ao receber o disparo, gera UM pulso de duração LP.\n\n' +
      '**Passo a passo:**\n' +
      '1. Fórmula do monoestável: LP = 1,1·RA·C.\n' +
      '2. LP = 1,1 · 7 500 · 0,1×10⁻⁶ = 1,1 · 7,5×10⁻⁴ = 8,25×10⁻⁴ s.\n' +
      '3. LP ≈ **0,83 ms**.\n\n' +
      '**Por que B:** 0,825 ms ≈ 0,83 ms — alternativa B.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A) 0,083 ms:** erro de uma casa decimal (esqueceu o fator das unidades kΩ·µF).\n' +
      '- **C) 8,3 ms e D) 83 ms:** também erros de potência de dez (×10 ou ×100).\n\n' +
      '**Pegadinha:** errar a conversão de unidades — kΩ (10³) × µF (10⁻⁶) dá 10⁻³. E não usar a fórmula do astável aqui.\n\n' +
      '**Regra prática:** monoestável → LP = 1,1·RA·C; acerte primeiro a conversão de kΩ e µF.',
    fonte: 'Slides Multivibradores (Exemplo, LP = 0,83 ms)',
    armadilha: 'Usar a fórmula do astável (0,7…) num circuito monoestável.',
  },

  // ── 10 schmitt-trigger ─────────────────────────────────────────────
  {
    id: 'me-10-01', tipo: 'multipla', topico: '10-schmitt-trigger', dificuldade: 'medio',
    enunciado: 'Num Schmitt-trigger com VO = ±12 V e divisor de realimentação de 24 kΩ (para o terra) e 12 kΩ (da saída), com β = 2/3, os limiares UTP e LTP valem:',
    imagem: '/imagens/cursos/det/q-schmitt-12k-24k.webp',
    alternativas: ['+12 V e −12 V', '+8 V e −8 V', '+6 V e −6 V', '+4 V e 0 V'],
    correta: B, conceito: 'UTP/LTP (Vref = β·VO)',
    comentario:
      '**Resposta: B (+8 V e −8 V).**\n\n' +
      '**O que cobra:** os limiares UTP e LTP de um Schmitt-trigger a partir do divisor de realimentação.\n\n' +
      '**No circuito:** Schmitt inversor (±12 V). A realimentação positiva amostra a saída: R1 = 12 kΩ (da saída ao nó V+) e R2 = 24 kΩ (do nó V+ ao terra). O nó V+ é a referência variável: V+ = β·Vo.\n\n' +
      '**Passo a passo:**\n' +
      '1. β = R2/(R1+R2) = 24/(12+24) = 24/36 = 2/3.\n' +
      '2. Saída ALTA (Vo = +12): UTP = β·Vo = (2/3)·12 = **+8 V**.\n' +
      '3. Saída BAIXA (Vo = −12): LTP = β·Vo = (2/3)·(−12) = **−8 V**.\n\n' +
      '**Por que B:** os dois limiares são +8 V e −8 V.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A) +12/−12:** confundiu os limiares com os trilhos de saída (Vo), sem aplicar β.\n' +
      '- **C) +6/−6:** usou β = 1/2 (divisor 50/50), ignorando que R2 ≠ R1.\n' +
      '- **D) +4/0:** valores sem base (nem β nem a simetria batem).\n\n' +
      '**Pegadinha:** usar um único limiar (como num comparador comum). O Schmitt tem DOIS, dados por V+ = β·Vo com a saída alta e baixa.\n\n' +
      '**Regra prática:** Schmitt → β = Rterra/(Rsaída+Rterra); UTP = β·(+VCC), LTP = β·(−VEE).',
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
    comentario:
      '**Resposta: B.**\n\n' +
      '**O que cobra:** as condições para LIGAR um SCR.\n\n' +
      '**Por que B está certa:** o SCR liga com DUAS condições SIMULTÂNEAS — (1) anodo-catodo diretamente polarizado (anodo mais positivo que o catodo) E (2) um pulso positivo na porta. Faltando qualquer uma, ele não dispara.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A) só pulso, em qualquer polarização:** reversamente polarizado, o pulso de porta NÃO liga o SCR.\n' +
      '- **C) tensão reversa acima da ruptura:** isso é condução por avalanche (anormal/destrutiva), não o disparo normal.\n' +
      '- **D) só polarização direta, sem pulso:** falta o gatilho — sem o pulso de porta, ele permanece bloqueado.\n\n' +
      '**Pegadinha:** achar que o "pulso na porta" sozinho liga o SCR. Sem polarização direta, o pulso é ignorado.\n\n' +
      '**Regra prática:** SCR liga com polarização direta E pulso de porta (as duas juntas).',
    fonte: 'Slides Tiristores',
    armadilha: 'Achar que o SCR liga só por receber pulso, mesmo reversamente polarizado.',
  },
  {
    id: 'me-11-02', tipo: 'multipla', topico: '11-tiristores-scr-diac-triac', dificuldade: 'facil',
    enunciado: 'Qual tiristor NÃO possui terminal de porta, disparando por tensão de ruptura (|V| ≥ VBR)?',
    alternativas: ['SCR', 'DIAC', 'TRIAC', 'UJT'],
    correta: B, conceito: 'DIAC',
    comentario:
      '**Resposta: B (DIAC).**\n\n' +
      '**O que cobra:** identificar o tiristor SEM porta, que dispara por tensão de ruptura.\n\n' +
      '**Por que B está certa:** o DIAC não tem terminal de porta. Ele conduz, em QUALQUER polaridade, quando o MÓDULO da tensão aplicada ultrapassa a tensão de ruptura VBR. É bidirecional e disparado por tensão, não por pulso.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A) SCR:** tem porta e é unidirecional (dispara por pulso de gate).\n' +
      '- **C) TRIAC:** tem porta e é bidirecional (dispara por pulso de gate).\n' +
      '- **D) UJT:** não é tiristor de potência; é um dispositivo de disparo baseado na razão intrínseca η.\n\n' +
      '**Pegadinha:** dar "porta" ao DIAC. Ele dispara por TENSÃO (|V| ≥ VBR), nunca por pulso de gate.\n\n' +
      '**Regra prática:** sem porta + dispara por |V| ≥ VBR + bidirecional = DIAC.',
    fonte: 'Slides Tiristores',
    armadilha: 'Dar "porta" ao DIAC — ele dispara por tensão, não por pulso de gate.',
  },

  // ── 12 UJT ─────────────────────────────────────────────────────────
  {
    id: 'me-12-01', tipo: 'multipla', topico: '12-ujt-oscilador-relaxacao', dificuldade: 'medio',
    enunciado: 'Num UJT com η = 0,61 e RBB = 7 kΩ alimentado por VCC = 12 V, a tensão de pico VP (com VK = η·VCC) vale:',
    imagem: '/imagens/cursos/det/12-ujt-circuito.webp',
    alternativas: ['7,3 V', '8,0 V', '12,7 V', '4,3 V'],
    correta: B, conceito: 'VP = VK + 0,7',
    comentario:
      '**Resposta: B (8,0 V).**\n\n' +
      '**O que cobra:** a tensão de pico VP (disparo) de um UJT.\n\n' +
      '**No circuito:** o UJT tem duas bases (B1, B2) e um emissor (E). A razão intrínseca η divide VCC entre as bases, fixando a tensão no ponto interno: VK = η·VCC. O UJT dispara quando o emissor sobe 0,7 V acima desse ponto.\n\n' +
      '**Passo a passo:**\n' +
      '1. VK = η·VCC = 0,61 × 12 = 7,3 V.\n' +
      '2. VP = VK + 0,7 = 7,3 + 0,7 = **8,0 V**.\n\n' +
      '**Por que B:** VP = 8,0 V. (Contexto: RB1 = η·RBB = 0,61·7 ≈ 4,3 kΩ e RB2 = RBB − RB1 ≈ 2,7 kΩ.)\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A) 7,3 V:** é VK (η·VCC), esquecendo o +0,7 V da junção emissor-base.\n' +
      '- **C) 12,7 V:** somou 0,7 a VCC (12), em vez de a VK.\n' +
      '- **D) 4,3 V:** é RB1 em kΩ (η·RBB), nada a ver com tensão.\n\n' +
      '**Pegadinha:** parar em VK = η·VCC. O disparo é em VP = VK + 0,7 V (a queda da junção do emissor).\n\n' +
      '**Regra prática:** UJT → VK = η·VCC e VP = VK + 0,7 V.',
    fonte: 'Slides Tiristores/UJT (Exemplo η = 0,61)',
  },

  // ── 13 base de tempo ───────────────────────────────────────────────
  {
    id: 'me-13-01', tipo: 'multipla', topico: '13-geradores-base-de-tempo', dificuldade: 'medio',
    enunciado: 'Um capacitor de 1 µF é carregado por uma fonte de corrente constante de 0,5 mA. A inclinação da rampa de tensão (dV/dt) é:',
    imagem: '/imagens/cursos/det/q-fonte-corrente-cap.webp',
    alternativas: ['0,5 V/s', '2 V/ms', '0,5 V/ms', '2 V/s'],
    correta: C, conceito: 'dV/dt = I/C',
    comentario:
      '**Resposta: C (0,5 V/ms).**\n\n' +
      '**O que cobra:** a inclinação da rampa quando um capacitor é carregado por uma fonte de corrente constante.\n\n' +
      '**No circuito:** a fonte injeta I = 0,5 mA num capacitor C = 1 µF. Com corrente constante, a tensão sobe em linha reta (rampa), de inclinação dV/dt = I/C.\n\n' +
      '**Passo a passo:**\n' +
      '1. dV/dt = I/C = 0,5×10⁻³ / 1×10⁻⁶.\n' +
      '2. = 500 V/s.\n' +
      '3. Convertendo: 500 V/s = **0,5 V/ms**.\n\n' +
      '**Por que C:** 0,5 V/ms (= 500 V/s) é a alternativa C.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A) 0,5 V/s:** erro de mil vezes (esqueceu a conversão s↔ms).\n' +
      '- **B) 2 V/ms:** inverteu a divisão (C/I) ou trocou os valores.\n' +
      '- **D) 2 V/s:** mistura de inversão e erro de unidade.\n\n' +
      '**Pegadinha:** aplicar a exponencial de RC. Aqui não há resistor de carga — a corrente é imposta, então a rampa é reta, de inclinação I/C.\n\n' +
      '**Regra prática:** fonte de corrente + capacitor → rampa linear de inclinação dV/dt = I/C.',
    fonte: 'Slides Base de Tempo',
    armadilha: 'Aplicar carga exponencial de RC quando a carga é por fonte de corrente.',
  },

  // ════════ Fase 3 — ampliação (todas com fonte) ════════
  // 01 ferramentas
  { id: 'me-01-01', tipo: 'multipla', topico: '01-ferramentas-de-calculo', dificuldade: 'medio',
    enunciado: 'Num divisor de tensão com Vfonte = 12 V, Rcima = 4 kΩ e Rbaixo = 8 kΩ, a tensão no nó intermediário é:',
    imagem: '/imagens/cursos/det/q-divisor-12-4k-8k.webp',
    alternativas: ['4 V', '6 V', '8 V', '12 V'], correta: C, conceito: 'Divisor de tensão',
    comentario:
      '**Resposta: C (8 V).**\n\n' +
      '**O que cobra:** aplicar o divisor de tensão e, sobretudo, escolher o resistor CERTO no numerador.\n\n' +
      '**Interpretação:** dois resistores em série entre a fonte de 12 V e o terra; o de cima vale 4 kΩ, o de baixo 8 kΩ. Mede-se a tensão no NÓ entre eles (em cima do resistor de baixo).\n\n' +
      '**Passo a passo:**\n' +
      '1. Em série, a corrente é a mesma nos dois: I = 12 / (4k + 8k) = 1 mA.\n' +
      '2. A tensão no nó é a queda sobre o resistor de baixo: Vnó = I·Rbaixo = 1 mA · 8 kΩ = 8 V.\n' +
      '3. Direto pelo divisor: Vnó = 12 · 8/(4+8) = 12 · (2/3) = **8 V**.\n\n' +
      '**Por que C:** o resultado 8 V é exatamente a alternativa C.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A) 4 V:** usou Rcima (4 k) no numerador — o erro clássico de inverter o resistor.\n' +
      '- **B) 6 V:** é o divisor 50/50, válido só se os dois resistores fossem iguais.\n' +
      '- **D) 12 V:** é a tensão total da fonte, não a do nó.\n\n' +
      '**Pegadinha:** pôr o resistor de CIMA no numerador. O numerador é sempre o resistor sobre o qual você mede a tensão (o de baixo, aqui).\n\n' +
      '**Regra prática:** Vnó = Vfonte · (R onde meço) / (soma dos dois).',
    fonte: 'LinhaDoTempo (01)' },
  { id: 'me-01-02', tipo: 'multipla', topico: '01-ferramentas-de-calculo', dificuldade: 'facil',
    enunciado: 'Um resistor de 100 Ω é percorrido por 0,2 A. A potência dissipada é:',
    alternativas: ['0,4 W', '2 W', '4 W', '20 W'], correta: C, conceito: 'Potência',
    comentario:
      '**Resposta: C (4 W).**\n\n' +
      '**O que cobra:** escolher a forma certa da potência quando você tem corrente e resistência.\n\n' +
      '**Interpretação:** dados I = 0,2 A e R = 100 Ω; pede-se a potência dissipada.\n\n' +
      '**Passo a passo:**\n' +
      '1. Com I e R em mãos, a forma direta é P = I²·R.\n' +
      '2. I² = (0,2)² = 0,04.\n' +
      '3. P = 0,04 · 100 = **4 W**.\n\n' +
      '**Por que C:** 4 W é a alternativa C.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A) 0,4 W e B) 2 W:** vêm de não elevar a corrente ao quadrado ou de misturar fórmulas; nenhum sai de P = I²R com os dados dados.\n' +
      '- **D) 20 W:** é a TENSÃO sobre o resistor (V = I·R = 0,2·100 = 20 V), não a potência — confusão clássica entre V e P.\n\n' +
      '**Pegadinha:** esquecer o QUADRADO da corrente (é P = I²R, não I·R).\n\n' +
      '**Regra prática:** três formas equivalentes — P = V·I, P = I²·R, P = V²/R. Use a que já tem dois dos três valores.',
    fonte: 'LinhaDoTempo (01)' },
  { id: 'me-01-03', tipo: 'multipla', topico: '01-ferramentas-de-calculo', dificuldade: 'medio',
    enunciado: 'Uma fonte de corrente de 0,5 mA carrega um capacitor de 2 µF. O tempo para a tensão subir 10 V é:',
    alternativas: ['4 ms', '40 ms', '400 ms', '4 s'], correta: B, conceito: 't = C·ΔV/I',
    comentario:
      '**Resposta: B (40 ms).**\n\n' +
      '**O que cobra:** reconhecer que carga por FONTE DE CORRENTE constante é LINEAR (não exponencial) e usar t = C·ΔV / I.\n\n' +
      '**Interpretação:** a fonte injeta corrente fixa de 0,5 mA num capacitor de 2 µF; quer-se o tempo para a tensão subir ΔV = 10 V.\n\n' +
      '**Passo a passo:**\n' +
      '1. Corrente constante ⇒ dV/dt = I/C (inclinação constante, uma reta).\n' +
      '2. Isolando o tempo: t = C·ΔV / I.\n' +
      '3. t = (2×10⁻⁶ · 10) / (0,5×10⁻³) = 2×10⁻⁵ / 5×10⁻⁴ = 0,04 s = **40 ms**.\n\n' +
      '**Por que B:** 0,04 s = 40 ms, alternativa B.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A) 4 ms:** erro de uma casa decimal (dividiu por 5×10⁻³ em vez de 5×10⁻⁴).\n' +
      '- **C) 400 ms e D) 4 s:** também erros de potência de dez na conversão de µF/mA.\n\n' +
      '**Pegadinha:** tentar usar a exponencial de RC. Aqui não há resistor definindo τ — a corrente é imposta, então a rampa é reta.\n\n' +
      '**Regra prática:** fonte de corrente + capacitor → rampa linear (t = C·ΔV/I); resistor + capacitor → exponencial (τ = RC).',
    fonte: 'LinhaDoTempo (01)', armadilha: 'Usar exponencial RC: aqui a carga é por fonte de corrente.' },
  // 02 fontes reguladas
  { id: 'me-02-02', tipo: 'multipla', topico: '02-fontes-cc-reguladas', dificuldade: 'facil',
    enunciado: 'Numa fonte regulada com VO = 12 V alimentando RL = 60 Ω, a corrente na carga é:',
    alternativas: ['0,2 A', '2 A', '5 A', '72 A'], correta: A, conceito: 'IL = VO/RL',
    comentario:
      '**Resposta: A (0,2 A).**\n\n' +
      '**O que cobra:** Lei de Ohm aplicada à carga de uma fonte regulada.\n\n' +
      '**Interpretação:** a saída regulada vale VO = 12 V e alimenta RL = 60 Ω. A corrente que a carga puxa é IL = VO/RL.\n\n' +
      '**Passo a passo:**\n' +
      '1. IL = VO / RL = 12 / 60 = **0,2 A** (200 mA).\n\n' +
      '**Por que A:** 0,2 A é a alternativa A.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **B) 2 A:** erro de fator 10 (como se fosse 12/6).\n' +
      '- **C) 5 A:** não sai de 12/60 — troca de valores.\n' +
      '- **D) 72 A:** veio de MULTIPLICAR (12 · 60 escala) em vez de dividir — corrente sem sentido físico.\n\n' +
      '**Pegadinha:** multiplicar em vez de dividir. Corrente é tensão DIVIDIDA pela resistência.\n\n' +
      '**Regra prática:** numa fonte regulada VO é fixo; a carga é que decide a corrente, por IL = VO/RL.',
    fonte: 'LinhaDoTempo (02)' },
  { id: 'me-02-03', tipo: 'multipla', topico: '02-fontes-cc-reguladas', dificuldade: 'facil',
    enunciado: 'Num regulador, o elemento que fixa o "alvo" de tensão (a referência) costuma ser:',
    alternativas: ['O capacitor de filtro', 'Um Zener ou um divisor de tensão', 'O resistor de carga', 'O transformador'],
    correta: B, conceito: 'Referência × controle',
    comentario:
      '**Resposta: B.**\n\n' +
      '**O que cobra:** identificar quem dá a REFERÊNCIA (o "alvo" de tensão) num regulador.\n\n' +
      '**Por que B está certa:** o regulador compara a saída com uma referência fixa e ajusta o elemento de controle (transistor/CI) para bater nela. Essa referência costuma ser um diodo Zener (tensão fixa VZ) ou um divisor de tensão.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A) capacitor de filtro:** só suaviza a ondulação; não define alvo de tensão.\n' +
      '- **C) resistor de carga:** é o consumidor — puxa corrente, não fixa referência.\n' +
      '- **D) transformador:** ajusta o nível CA lá no começo da cadeia; não é a referência do regulador.\n\n' +
      '**Pegadinha:** confundir o elemento de REFERÊNCIA (Zener/divisor) com o elemento de CONTROLE (transistor/CI) — papéis distintos que trabalham juntos.\n\n' +
      '**Regra prática:** referência = "quanto eu quero"; controle = "quem ajusta para chegar lá".',
    fonte: 'Slides Fontes Reguladas 1' },
  { id: 'me-02-04', tipo: 'multipla', topico: '02-fontes-cc-reguladas', dificuldade: 'facil',
    enunciado: 'Qual a principal vantagem do retificador de ONDA COMPLETA em relação ao de MEIA ONDA?',
    alternativas: [
      'Frequência de ondulação dobrada (120 Hz), permitindo capacitor menor para a mesma ondulação.',
      'Tensão de pico na saída é maior que a do transformador.',
      'Utiliza apenas um diodo.',
      'Não necessita de transformador.',
    ], correta: A, conceito: 'Onda completa × meia onda',
    comentario:
      '**Resposta: A.**\n\n' +
      '**O que cobra:** a vantagem do retificador de ONDA COMPLETA sobre o de MEIA ONDA.\n\n' +
      '**Interpretação:** na meia onda só um semiciclo vira pulso → ondulação a 60 Hz. Na onda completa os DOIS semiciclos viram pulso → ondulação a 120 Hz.\n\n' +
      '**Por que A está certa:** com a frequência de ondulação dobrada (120 Hz), o capacitor tem METADE do tempo para descarregar entre picos. Logo, para o mesmo nível de ripple, basta um capacitor MENOR (ou, com o mesmo C, o ripple fica menor).\n\n' +
      '**Por que as outras erram:**\n' +
      '- **B)** a tensão de pico na saída não supera a do secundário do transformador (no máximo a iguala, menos as quedas de diodo).\n' +
      '- **C)** "usar um diodo só" descreve a MEIA onda; a onda completa usa 2 (com tap central) ou 4 (ponte).\n' +
      '- **D)** ambos os tipos usam transformador; a onda completa não o dispensa.\n\n' +
      '**Pegadinha:** achar que a vantagem é "mais tensão". A vantagem é a frequência de ripple dobrada → filtragem mais fácil.\n\n' +
      '**Regra prática:** onda completa → ripple a 120 Hz → capacitor menor para o mesmo nível de ondulação.',
    fonte: 'Slides Fontes Reguladas 1' },
  // 03 reguladores com transistor
  { id: 'me-03-02', tipo: 'multipla', topico: '03-reguladores-com-transistor', dificuldade: 'medio',
    enunciado: 'Num regulador com limitador de corrente cujo resistor sensor é RSC = 0,28 Ω, a corrente de curto-circuito é aproximadamente:',
    imagem: '/imagens/cursos/det/q-limitador-corrente.webp',
    alternativas: ['0,7 A', '1,4 A', '2,5 A', '5 A'], correta: C, conceito: 'I_Lmáx ≈ 0,7/RSC',
    comentario:
      '**Resposta: C (≈ 2,5 A).**\n\n' +
      '**O que cobra:** a corrente de curto-circuito de um regulador série com limitador (proteção) de corrente.\n\n' +
      '**No circuito:** Q1 é o transistor SÉRIE (conduz a corrente da carga até RL); RSC = 0,28 Ω é o resistor SENSOR em série com a carga; Q2 é o transistor de PROTEÇÃO, ligado de modo a "ler" a queda sobre RSC.\n\n' +
      '**Passo a passo:**\n' +
      '1. A corrente de carga IL atravessa RSC e cria nele a queda V(RSC) = IL·RSC.\n' +
      '2. Enquanto V(RSC) < 0,7 V, Q2 fica CORTADO e não interfere.\n' +
      '3. Quando IL cresce a ponto de V(RSC) ≈ 0,7 V, Q2 LIGA, rouba corrente da base de Q1 e impede IL de subir mais — é o limite.\n' +
      '4. Limite: I_Lmáx ≈ 0,7 / RSC = 0,7 / 0,28 ≈ **2,5 A**.\n\n' +
      '**Por que C:** 2,5 A é exatamente a alternativa C.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A) 0,7 A:** confundiu a TENSÃO de disparo (0,7 V) com a corrente.\n' +
      '- **B) 1,4 A:** metade do valor (RSC dobrado, ou 0,7/0,5).\n' +
      '- **D) 5 A:** o dobro (usou 0,14 Ω, ou 1,4/0,28).\n\n' +
      '**Pegadinha:** achar que 0,7 é a corrente. 0,7 V é o gatilho de Q2; a corrente sai da divisão 0,7/RSC.\n\n' +
      '**Regra prática:** num limitador por RSC, I_curto ≈ 0,7 V / RSC. RSC pequeno → corrente de proteção alta.',
    fonte: 'Lista 1/2 — Q7 (gabarito: I_curto = 2,5 A)' },
  { id: 'me-03-03', tipo: 'multipla', topico: '03-reguladores-com-transistor', dificuldade: 'facil',
    enunciado: 'No regulador série, a corrente que alimenta a carga:',
    alternativas: ['É desviada pelo transistor para o terra', 'Passa através do transistor regulador', 'Não depende do transistor', 'É sempre nula'],
    correta: B, conceito: 'Regulador série',
    comentario:
      '**Resposta: B.**\n\n' +
      '**O que cobra:** o que caracteriza o regulador SÉRIE quanto ao caminho da corrente de carga.\n\n' +
      '**Por que B está certa:** no regulador série o transistor está em série com a carga, então a corrente que alimenta RL PASSA por ele (IE ≈ IL). Ele ajusta a própria queda para manter VO fixo.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A)** "desviar a corrente para o terra" descreve o regulador PARALELO, não o série.\n' +
      '- **C)** a corrente depende SIM do transistor — é ele que a conduz.\n' +
      '- **D)** a corrente não é nula; é exatamente a corrente da carga.\n\n' +
      '**Pegadinha:** trocar o comportamento do série (conduz a carga) pelo do paralelo (desvia corrente).\n\n' +
      '**Regra prática:** série → o transistor é a "porta" por onde passa a corrente da carga.',
    fonte: 'LinhaDoTempo (03)' },
  // 04 reguladores integrados
  { id: 'me-04-03', tipo: 'multipla', topico: '04-reguladores-integrados', dificuldade: 'facil',
    enunciado: 'O regulador integrado 7812 fornece uma tensão regulada de:',
    alternativas: ['5 V', '7,8 V', '12 V', '78 V'], correta: C, conceito: 'Reguladores fixos 78xx',
    comentario:
      '**Resposta: C (12 V).**\n\n' +
      '**O que cobra:** ler a tensão regulada direto do código do CI da família 78xx.\n\n' +
      '**Por que C está certa:** nos reguladores fixos 78xx, os DOIS últimos dígitos são a tensão de saída. 7812 → 12 V (assim como 7805 → 5 V e 7809 → 9 V).\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A) 5 V:** é o 7805, não o 7812.\n' +
      '- **B) 7,8 V:** leu "78" como tensão — mas "78" é só o prefixo da família.\n' +
      '- **D) 78 V:** mesma confusão, com o prefixo no lugar da tensão.\n\n' +
      '**Pegadinha:** achar que "78" tem a ver com a tensão. O 78 indica a família (saída positiva); a tensão são os dois últimos dígitos.\n\n' +
      '**Regra prática:** 78xx → +xx volts; 79xx → −xx volts (versão negativa).',
    fonte: 'Slides Fontes Reguladas 2' },
  { id: 'me-04-04', tipo: 'multipla', topico: '04-reguladores-integrados', dificuldade: 'facil',
    enunciado: 'Um regulador 7805 NÃO conseguirá regular quando:',
    alternativas: ['A carga tiver alta resistência', 'A tensão de entrada cair abaixo da tensão mínima de entrada', 'A temperatura for baixa', 'A saída estiver aberta'],
    correta: B, conceito: 'Tensão mínima de entrada',
    comentario:
      '**Resposta: B.**\n\n' +
      '**O que cobra:** a condição que faz um regulador fixo PARAR de regular.\n\n' +
      '**Por que B está certa:** todo regulador precisa de uma entrada acima de um mínimo (VImín = VO + dropout). Se VI cai abaixo desse mínimo, o CI fica sem "margem" para segurar a saída e VO despenca junto com a entrada.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A) carga de alta resistência:** puxa pouca corrente — situação confortável, regula numa boa.\n' +
      '- **C) temperatura baixa:** não tira a regulação (o problema costuma ser temperatura ALTA por excesso de dissipação).\n' +
      '- **D) saída aberta:** sem carga não há corrente; o CI continua "segurando" os 5 V em aberto.\n\n' +
      '**Pegadinha:** procurar o defeito na carga, quando o gargalo é a tensão de ENTRADA cair demais.\n\n' +
      '**Regra prática:** regulador só funciona com VI ≥ VImín (= VO + dropout). Entrada baixa → saída solta.',
    fonte: 'LinhaDoTempo (04)' },
  // 05 chaveados / PWM
  { id: 'me-05-03', tipo: 'multipla', topico: '05-reguladores-chaveados-pwm', dificuldade: 'medio',
    enunciado: 'Num buck ideal que produz VOUT = 3 V a partir de VIN = 12 V, o ciclo de trabalho D é:',
    alternativas: ['0,25', '0,5', '0,75', '4'], correta: A, conceito: 'D = VOUT/VIN',
    comentario:
      '**Resposta: A (0,25).**\n\n' +
      '**O que cobra:** isolar o ciclo de trabalho a partir de VOUT e VIN num buck.\n\n' +
      '**Passo a passo:**\n' +
      '1. Buck ideal: VOUT = D·VIN.\n' +
      '2. Isolando D: D = VOUT/VIN = 3/12 = **0,25** (25%).\n\n' +
      '**Por que A:** 0,25 é a alternativa A.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **B) 0,5:** daria VOUT = 6 V (metade de 12), não 3 V.\n' +
      '- **C) 0,75:** é (1 − D) = 0,75 — o complemento, não o D.\n' +
      '- **D) 4:** inverteu a divisão (VIN/VOUT = 12/3 = 4); D nunca passa de 1.\n\n' +
      '**Pegadinha:** lembrar que D é uma FRAÇÃO (0 a 1). Qualquer "D" maior que 1 (como 4) é impossível.\n\n' +
      '**Regra prática:** D = VOUT/VIN num buck; o resultado fica sempre entre 0 e 1.',
    fonte: 'LinhaDoTempo (05) / Slides Fontes Reguladas 3' },
  // 06 limitadores
  { id: 'me-06-02', tipo: 'multipla', topico: '06-limitadores', dificuldade: 'facil',
    enunciado: 'Para desenhar a saída de um limitador, o procedimento correto é:',
    alternativas: ['Multiplicar a entrada por um ganho fixo', 'Analisar cada semiciclo e decidir se o diodo conduz ou corta', 'Somar uma rampa linear à entrada', 'Inverter a fase da onda'],
    correta: B, conceito: 'Análise por semiciclo',
    comentario:
      '**Resposta: B.**\n\n' +
      '**O que cobra:** o MÉTODO para desenhar a saída de um limitador.\n\n' +
      '**Por que B está certa:** num limitador, analisa-se semiciclo a semiciclo, perguntando se o diodo CONDUZ ou CORTA em cada instante. Diodo conduzindo → a saída fica presa no nível de corte (platô); diodo cortado → a saída acompanha a entrada.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A) multiplicar por ganho fixo:** o limitador não amplifica; não há ganho.\n' +
      '- **C) somar uma rampa:** não descreve nenhum limitador.\n' +
      '- **D) inverter a fase:** o limitador não inverte a onda.\n\n' +
      '**Pegadinha:** tentar resolver "de uma vez" com uma fórmula. O jeito certo é por trechos (diodo on/off).\n\n' +
      '**Regra prática:** em todo limitador, pergunte a cada semiciclo "o diodo conduz?" — se sim, saída travada; se não, saída = entrada.',
    fonte: 'LinhaDoTempo (06)' },
  { id: 'me-06-03', tipo: 'multipla', topico: '06-limitadores', dificuldade: 'medio',
    enunciado: 'Num limitador com diodo Zener, o ceifamento pode ter níveis diferentes nos dois sentidos porque o Zener:',
    alternativas: ['Conduz só em um sentido', 'Conduz direto (~0,7 V) num sentido e por ruptura (VZ) no outro', 'Nunca conduz', 'Funciona como capacitor'],
    correta: B, conceito: 'Limitador com Zener',
    comentario:
      '**Resposta: B.**\n\n' +
      '**O que cobra:** por que um limitador com diodo ZENER pode ceifar em níveis diferentes nos dois sentidos.\n\n' +
      '**Por que B está certa:** o Zener tem DOIS modos de condução. Num sentido conduz como diodo comum (queda ≈ 0,7 V); no outro entra em RUPTURA e segura a tensão de Zener VZ. Como 0,7 V ≠ VZ, o corte de cima fica diferente do de baixo.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A) conduz só num sentido:** o Zener conduz nos dois (direto e por ruptura) — é justamente o ponto.\n' +
      '- **C) nunca conduz:** falso; conduz nos dois modos.\n' +
      '- **D) funciona como capacitor:** o Zener é um diodo, não um capacitor.\n\n' +
      '**Pegadinha:** tratar o Zener como diodo comum simétrico. Os limiares são assimétricos: 0,7 V de um lado, VZ do outro.\n\n' +
      '**Regra prática:** limitador com Zener → corte em VZ (ruptura) de um lado e ≈ 0,7 V (condução direta) do outro.',
    fonte: 'Slides Limitadores e Grampeadores / LinhaDoTempo (06)' },
  // 07 grampeadores
  { id: 'me-07-02', tipo: 'multipla', topico: '07-grampeadores', dificuldade: 'medio',
    enunciado: 'Uma onda de −12 V a +12 V passa por um grampeador NEGATIVO ideal. A saída passa a variar de:',
    alternativas: ['0 V a +24 V', '−24 V a 0 V', '−12 V a +12 V', '−6 V a +6 V'], correta: B, conceito: 'Grampeador negativo',
    comentario:
      '**Resposta: B (−24 V a 0 V).**\n\n' +
      '**O que cobra:** o deslocamento de um grampeador NEGATIVO.\n\n' +
      '**Passo a passo:**\n' +
      '1. Vm = 12 V.\n' +
      '2. Grampeador negativo: VO = Vi − Vm.\n' +
      '3. Novo mínimo: −12 − 12 = **−24 V**. Novo máximo: +12 − 12 = **0 V**.\n\n' +
      '**Por que B:** a saída varia de −24 V a 0 V — alternativa B.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A) 0 a +24 V:** é o grampeador POSITIVO (soma), não o negativo.\n' +
      '- **C) −12 a +12 V:** é a entrada sem deslocamento.\n' +
      '- **D) −6 a +6 V:** "encolheu" a onda — grampeador não altera a amplitude.\n\n' +
      '**Pegadinha:** trocar o sentido. O positivo sobe; o negativo empurra a onda toda PARA BAIXO.\n\n' +
      '**Regra prática:** grampeador negativo → subtrai Vm (máximo vai a 0, mínimo a −2Vm).',
    fonte: 'Slides Limitadores e Grampeadores / LinhaDoTempo (07)' },
  { id: 'me-07-03', tipo: 'multipla', topico: '07-grampeadores', dificuldade: 'facil',
    enunciado: 'Qual elemento no circuito DISTINGUE um grampeador de um limitador?',
    alternativas: [
      'Um capacitor em série com o diodo (grampeador) versus ausência de capacitor (limitador).',
      'O grampeador usa dois diodos e o limitador usa apenas um.',
      'O limitador possui capacitor em paralelo com a carga.',
      'Não há diferença de topologia — o grampeador só tem tensão de entrada maior.',
    ], correta: A, conceito: 'Grampeador × limitador — topologia',
    comentario:
      '**Resposta: A.**\n\n' +
      '**O que cobra:** qual elemento do circuito separa um grampeador de um limitador.\n\n' +
      '**Por que A está certa:** o CAPACITOR EM SÉRIE com o diodo é a marca do grampeador — ele armazena a tensão de pico e a usa para deslocar o nível DC da onda. Sem esse capacitor, o diodo apenas corta parte da onda: é limitador.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **B) número de diodos:** não é a quantidade de diodos que define, e sim a presença do capacitor em série.\n' +
      '- **C) capacitor em paralelo com a carga:** isso é filtro; o capacitor do grampeador fica em SÉRIE.\n' +
      '- **D) "não há diferença de topologia":** há, sim — o capacitor em série é a diferença estrutural.\n\n' +
      '**Pegadinha:** olhar só o diodo. Diodo os dois têm; o que decide é o capacitor em série.\n\n' +
      '**Regra prática:** capacitor em série → grampeador; sem ele (diodo derivando a onda) → limitador.',
    fonte: 'Slides Limitadores e Grampeadores' },
  // 08 comparadores
  { id: 'me-08-02', tipo: 'multipla', topico: '08-comparadores', dificuldade: 'facil',
    enunciado: 'Num comparador em malha aberta, quando V+ < V− a saída tende a:',
    alternativas: ['+VCC', '−VEE', '0 V', 'um valor proporcional a V+ − V−'], correta: B, conceito: 'Saturação do comparador',
    comentario:
      '**Resposta: B (−VEE).**\n\n' +
      '**O que cobra:** o outro extremo da saturação do comparador.\n\n' +
      '**Por que B está certa:** com V+ < V−, a diferença V+ − V− é negativa; o ganho enorme a leva ao trilho negativo: VO ≈ −VEE.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A) +VCC:** é o caso oposto (V+ > V−).\n' +
      '- **C) 0 V:** o comparador não repousa no zero; satura.\n' +
      '- **D) proporcional:** seria amplificador linear, não comparador.\n\n' +
      '**Pegadinha:** confundir os dois extremos — V+ menor leva ao trilho NEGATIVO.\n\n' +
      '**Regra prática:** o comparador satura no sinal de (V+ − V−): positivo → +VCC; negativo → −VEE.',
    fonte: 'Slides Multivibradores e Comparadores' },
  { id: 'me-08-03', tipo: 'multipla', topico: '08-comparadores', dificuldade: 'medio',
    enunciado: 'Um comparador tem na entrada V+ uma triangular de ±10 V e na entrada V− uma referência fixa de +5 V. A saída fica em +VCC:',
    alternativas: [
      'Durante todo o semiciclo positivo (0 a +10 V).',
      'Somente enquanto V+ superar +5 V.',
      'Durante metade exata do período.',
      'Apenas no instante em que V+ = +5 V.',
    ], correta: B, conceito: 'Limiar do comparador',
    comentario:
      '**Resposta: B.**\n\n' +
      '**O que cobra:** quando a saída de um comparador com referência NÃO-nula fica em +VCC.\n\n' +
      '**Interpretação:** V+ recebe uma triangular de ±10 V; V− = +5 V (fixo). A saída é +VCC sempre que V+ > V−, ou seja, sempre que a triangular estiver acima de +5 V.\n\n' +
      '**Passo a passo:**\n' +
      '1. Limiar de comutação: V+ = V− = +5 V.\n' +
      '2. A triangular passa de 5 V na subida e volta abaixo de 5 V na descida.\n' +
      '3. A saída fica em +VCC só nesse trecho acima de +5 V — uma FRAÇÃO do semiciclo positivo, não o semiciclo inteiro.\n\n' +
      '**Por que B:** "somente enquanto V+ superar +5 V" descreve exatamente isso.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A) todo o semiciclo positivo (0 a +10):** entre 0 e 5 V a saída ainda está em −VEE (V+ < V−); só vira +VCC após cruzar 5 V.\n' +
      '- **C) metade exata do período:** só seria metade se o limiar fosse 0 V; com 5 V o tempo acima é menor que metade.\n' +
      '- **D) só no instante V+ = 5 V:** nesse instante ocorre a COMUTAÇÃO, mas a saída permanece em +VCC durante todo o trecho acima de 5 V, não num único ponto.\n\n' +
      '**Pegadinha:** confundir "semiciclo positivo" (acima de 0) com "acima da referência" (acima de 5 V). O limiar é a referência, não o zero.\n\n' +
      '**Regra prática:** comparador com Vref → a saída troca quando o sinal cruza Vref (não o zero); some o tempo em que o sinal fica acima de Vref.',
    fonte: 'Slides Multivibradores e Comparadores' },
  // 09 multivibradores 555
  { id: 'me-09-03', tipo: 'multipla', topico: '09-multivibradores-555', dificuldade: 'facil',
    enunciado: 'Um 555 astável tem período T = 1,6 ms. A frequência do sinal de saída é:',
    alternativas: ['160 Hz', '625 Hz', '1,6 kHz', '6,25 kHz'], correta: B, conceito: 'f = 1/T',
    comentario:
      '**Resposta: B (625 Hz).**\n\n' +
      '**O que cobra:** a relação entre período e frequência.\n\n' +
      '**Passo a passo:**\n' +
      '1. f = 1/T.\n' +
      '2. f = 1 / (1,6×10⁻³) = **625 Hz**.\n\n' +
      '**Por que B:** 625 Hz é a alternativa B.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A) 160 Hz:** usou T = 6,25 ms (inverteu os dígitos) ou dividiu errado.\n' +
      '- **C) 1,6 kHz:** repetiu o "1,6" do período (confundiu T com f).\n' +
      '- **D) 6,25 kHz:** erro de uma casa decimal (como 1/0,16 ms).\n\n' +
      '**Pegadinha:** confundir T com f, ou errar a casa decimal de ms (10⁻³).\n\n' +
      '**Regra prática:** f = 1/T; 1,6 ms → 625 Hz.',
    fonte: 'Slides Multivibradores (Exemplo, f = 625 Hz)' },
  { id: 'me-09-04', tipo: 'multipla', topico: '09-multivibradores-555', dificuldade: 'facil',
    enunciado: 'No 555 astável, o tempo em nível alto (T_ALTO) é dado por:',
    alternativas: ['0,7·RB·C', '0,7·(RA+RB)·C', '1,1·RA·C', 'RA·C'], correta: B, conceito: 'Fórmulas do astável',
    comentario:
      '**Resposta: B.**\n\n' +
      '**O que cobra:** a fórmula do tempo em nível ALTO no 555 astável.\n\n' +
      '**Por que B está certa:** na fase alta o capacitor CARREGA através de RA e RB em série (a corrente vem da alimentação pelos dois resistores), então T_ALTO = 0,7·(RA + RB)·C.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A) 0,7·RB·C:** é o tempo BAIXO (descarga só por RB), não o alto.\n' +
      '- **C) 1,1·RA·C:** é a fórmula do MONOESTÁVEL.\n' +
      '- **D) RA·C:** falta o 0,7 e o RB; não é fórmula do 555.\n\n' +
      '**Pegadinha:** trocar a fórmula do alto (carga por RA+RB) pela do baixo (descarga só por RB).\n\n' +
      '**Regra prática:** astável → T_ALTO = 0,7(RA+RB)C (carrega pelos dois); T_BAIXO = 0,7·RB·C (descarrega só por RB).',
    fonte: 'Slides Multivibradores (slide das fórmulas)' },
  { id: 'me-09-05', tipo: 'multipla', topico: '09-multivibradores-555', dificuldade: 'medio',
    enunciado: 'No 555 astável, a tensão no capacitor oscila entre:',
    alternativas: ['0 e VCC', '⅓ VCC e ⅔ VCC', '¼ VCC e ¾ VCC', '0,7 V e VCC'], correta: B, conceito: 'Limiares internos do 555',
    comentario:
      '**Resposta: B (⅓ VCC e ⅔ VCC).**\n\n' +
      '**O que cobra:** entre quais níveis o capacitor do 555 oscila.\n\n' +
      '**Por que B está certa:** o 555 tem dois comparadores internos que vigiam ⅓ VCC (gatilho/TRIGGER) e ⅔ VCC (limiar/THRESHOLD). O capacitor carrega até ⅔ VCC (aí a saída cai e começa a descarga) e descarrega até ⅓ VCC (aí a saída sobe e recomeça a carga). Ele "balança" entre esses dois limiares.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A) 0 e VCC:** o capacitor nunca chega aos extremos; fica preso entre ⅓ e ⅔.\n' +
      '- **C) ¼ e ¾ VCC:** limiares errados — o 555 usa ⅓ e ⅔ (divisor interno de três resistores iguais).\n' +
      '- **D) 0,7 V e VCC:** mistura a queda de um diodo com VCC — não são os limiares do 555.\n\n' +
      '**Pegadinha:** achar que o capacitor vai de 0 a VCC. Os comparadores internos o prendem entre ⅓ e ⅔ VCC.\n\n' +
      '**Regra prática:** 555 → capacitor oscila entre ⅓ VCC e ⅔ VCC (daí vem o fator 0,7 das fórmulas).',
    fonte: 'Slides Multivibradores (estrutura interna / limiares ⅓ e ⅔ VCC)' },
  // 10 schmitt
  { id: 'me-10-02', tipo: 'multipla', topico: '10-schmitt-trigger', dificuldade: 'facil',
    enunciado: 'Um Schmitt-trigger tem UTP = +8 V e LTP = −8 V. A histerese vale:',
    alternativas: ['0 V', '8 V', '16 V', '−16 V'], correta: C, conceito: 'Histerese = UTP − LTP',
    comentario:
      '**Resposta: C (16 V).**\n\n' +
      '**O que cobra:** o cálculo da histerese a partir dos dois limiares.\n\n' +
      '**Passo a passo:**\n' +
      '1. Histerese = UTP − LTP.\n' +
      '2. = 8 − (−8) = 8 + 8 = **16 V**.\n\n' +
      '**Por que C:** 16 V é a alternativa C.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A) 0 V:** somou em vez de subtrair (8 + (−8)); a histerese é a LARGURA entre os limiares.\n' +
      '- **B) 8 V:** usou só um limiar (a "altura" de um lado), esquecendo o outro.\n' +
      '- **D) −16 V:** inverteu a ordem (LTP − UTP); histerese é uma largura, sempre positiva.\n\n' +
      '**Pegadinha:** subtrair um número negativo SOMA: 8 − (−8) = 16.\n\n' +
      '**Regra prática:** histerese = UTP − LTP (a faixa "morta" onde a saída não muda).',
    fonte: 'Slides Schmitt-Trigger (Exemplo 1)' },
  { id: 'me-10-03', tipo: 'multipla', topico: '10-schmitt-trigger', dificuldade: 'medio',
    enunciado: 'Num Schmitt-trigger construído com o 555 (VCC = 12 V), os limiares UTP e LTP valem, respectivamente:',
    imagem: '/imagens/cursos/det/q-schmitt-555.webp',
    alternativas: ['12 V e 0 V', '8 V e 4 V', '6 V e −6 V', '10 V e 2 V'], correta: B, conceito: 'Schmitt com 555 (⅔ e ⅓ VCC)',
    comentario:
      '**Resposta: B (8 V e 4 V).**\n\n' +
      '**O que cobra:** os limiares de um Schmitt-trigger feito com o 555.\n\n' +
      '**No circuito:** o 555 usa seus comparadores internos, fixos em ⅔ VCC e ⅓ VCC, como limiares. Com VCC = 12 V:\n\n' +
      '**Passo a passo:**\n' +
      '1. UTP = ⅔ · VCC = ⅔ · 12 = **8 V**.\n' +
      '2. LTP = ⅓ · VCC = ⅓ · 12 = **4 V**.\n\n' +
      '**Por que B:** UTP = 8 V e LTP = 4 V.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A) 12/0:** usou VCC e 0 (os extremos), não os limiares internos ⅔/⅓.\n' +
      '- **C) 6/−6:** limiares simétricos em torno de zero — isso é o Schmitt com amp-op simétrico, não o do 555 (ambos os limiares são positivos).\n' +
      '- **D) 10/2:** valores sem relação com ⅔ e ⅓ de 12 V.\n\n' +
      '**Pegadinha:** aplicar os limiares simétricos do amp-op (±β·VCC) ao 555. No 555 os limiares são ⅔ VCC e ⅓ VCC (ambos positivos).\n\n' +
      '**Regra prática:** Schmitt com 555 → UTP = ⅔ VCC, LTP = ⅓ VCC; histerese = ⅓ VCC.',
    fonte: 'Slides Schmitt-Trigger (Ex. 3) / Lista 2 — Q6a (UTP=8, LTP=4)' },
  // 11 tiristores
  { id: 'me-11-03', tipo: 'multipla', topico: '11-tiristores-scr-diac-triac', dificuldade: 'facil',
    enunciado: 'A principal diferença do TRIAC em relação ao SCR é que o TRIAC:',
    alternativas: ['Não tem porta', 'Conduz nos dois sentidos (bidirecional)', 'Só conduz com luz', 'Não desliga nunca'], correta: B, conceito: 'TRIAC',
    comentario:
      '**Resposta: B.**\n\n' +
      '**O que cobra:** o que diferencia o TRIAC do SCR.\n\n' +
      '**Por que B está certa:** o TRIAC funciona como o SCR (disparado por pulso de porta), mas é BIDIRECIONAL — conduz nos dois sentidos. Por isso controla potência em CA nos dois semiciclos. O SCR é unidirecional (conduz só num sentido).\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A) não tem porta:** o TRIAC TEM porta (quem não tem é o DIAC).\n' +
      '- **C) só conduz com luz:** isso seria um foto-tiristor (LASCR), não o TRIAC.\n' +
      '- **D) não desliga nunca:** ele desliga normalmente quando a corrente cai abaixo da retenção (a cada passagem por zero da CA).\n\n' +
      '**Pegadinha:** confundir TRIAC (bidirecional, COM porta) com DIAC (bidirecional, SEM porta).\n\n' +
      '**Regra prática:** TRIAC = SCR bidirecional (dois sentidos, disparado por pulso de porta).',
    fonte: 'Slides Tiristores (slide do TRIAC)' },
  { id: 'me-11-04', tipo: 'multipla', topico: '11-tiristores-scr-diac-triac', dificuldade: 'medio',
    enunciado: 'Um SCR em condução é desligado quando:',
    alternativas: ['Recebe um pulso negativo na porta', 'A corrente direta cai abaixo da corrente de retenção', 'A tensão de porta chega a 0,7 V', 'A temperatura aumenta'],
    correta: B, conceito: 'Desligamento do SCR',
    comentario:
      '**Resposta: B.**\n\n' +
      '**O que cobra:** como DESLIGAR um SCR que já está conduzindo.\n\n' +
      '**Por que B está certa:** uma vez ligado, o SCR se mantém por conta própria (efeito de "trava"). Para desligá-lo, a corrente direta (anodo-catodo) precisa cair ABAIXO da corrente de retenção (I_holding). Depois do disparo, a porta perde o controle.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A) pulso negativo na porta:** a porta não desliga o SCR; ela só serve para LIGAR.\n' +
      '- **C) tensão de porta a 0,7 V:** isso é nível de disparo, não de desligamento.\n' +
      '- **D) aumentar a temperatura:** não desliga (e ainda piora a estabilidade).\n\n' +
      '**Pegadinha:** achar que a porta desliga o SCR. Depois de ligado, só a queda da corrente (abaixo de I_holding) o desliga.\n\n' +
      '**Regra prática:** SCR liga pela porta, mas só desliga quando a corrente cai abaixo da retenção (na CA, na passagem por zero).',
    fonte: 'Slides Tiristores (Desligamento)' },
  { id: 'me-11-05', tipo: 'multipla', topico: '11-tiristores-scr-diac-triac', dificuldade: 'facil',
    enunciado: 'A corrente de pico na carga de um tiristor em condução é calculada por:',
    alternativas: ['Vpico · Rcarga', '(Vpico − queda de condução)/Rcarga', 'Vpico/queda', 'Vpico + queda'], correta: B, conceito: 'I_pico na carga',
    comentario:
      '**Resposta: B.**\n\n' +
      '**O que cobra:** calcular a corrente de pico na carga de um tiristor em condução.\n\n' +
      '**Por que B está certa:** quando o tiristor conduz, ele não é um curto perfeito — tem uma QUEDA de condução. A tensão útil sobre a carga é (Vpico − queda), e a corrente é:\n' +
      'I_pico = (Vpico − queda)/Rcarga.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A) Vpico·Rcarga:** multiplica em vez de dividir (e ignora a queda) — unidades sem sentido.\n' +
      '- **C) Vpico/queda:** divide pela queda, não pela carga — sem sentido físico.\n' +
      '- **D) Vpico + queda:** soma a queda em vez de subtrair, e não divide pela carga.\n\n' +
      '**Pegadinha:** esquecer de SUBTRAIR a queda de condução antes de dividir pela carga.\n\n' +
      '**Regra prática:** I_pico = (Vpico − queda de condução)/Rcarga.',
    fonte: 'LinhaDoTempo (11) / Slides Tiristores', armadilha: 'Esquecer de subtrair a queda de condução.' },
  // 12 UJT
  { id: 'me-12-02', tipo: 'multipla', topico: '12-ujt-oscilador-relaxacao', dificuldade: 'medio',
    enunciado: 'Num UJT com η = 0,8 e RBB = 9 kΩ, o valor de RB1 é:',
    alternativas: ['1,8 kΩ', '7,2 kΩ', '9 kΩ', '11,25 kΩ'], correta: B, conceito: 'RB1 = η·RBB',
    comentario:
      '**Resposta: B (7,2 kΩ).**\n\n' +
      '**O que cobra:** repartir a resistência interbases RBB entre RB1 e RB2 usando η.\n\n' +
      '**Passo a passo:**\n' +
      '1. RB1 = η·RBB = 0,8 × 9 kΩ = **7,2 kΩ**.\n' +
      '2. RB2 = RBB − RB1 = 9 − 7,2 = 1,8 kΩ.\n\n' +
      '**Por que B:** 7,2 kΩ é a alternativa B.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A) 1,8 kΩ:** é RB2 (a parte que sobra), não RB1.\n' +
      '- **C) 9 kΩ:** é o RBB inteiro (as duas bases somadas).\n' +
      '- **D) 11,25 kΩ:** dividiu por η (9/0,8) em vez de multiplicar.\n\n' +
      '**Pegadinha:** trocar RB1 por RB2. RB1 é a parte do lado de B1 e vale η·RBB (a maior, já que η = 0,8).\n\n' +
      '**Regra prática:** RB1 = η·RBB; RB2 = (1 − η)·RBB = RBB − RB1.',
    fonte: 'Slides Tiristores/UJT (Exemplo η = 0,8)' },
  { id: 'me-12-03', tipo: 'multipla', topico: '12-ujt-oscilador-relaxacao', dificuldade: 'medio',
    enunciado: 'Para o UJT com η = 0,8, RBB = 9 kΩ e VCC = 12 V (VK ≈ 9,6 V), a tensão de pico VP é aproximadamente:',
    alternativas: ['8,0 V', '9,6 V', '10,3 V', '12,0 V'], correta: C, conceito: 'VP = VK + 0,7',
    comentario:
      '**Resposta: C (10,3 V).**\n\n' +
      '**O que cobra:** VP do UJT quando η = 0,8 e VCC = 12 V.\n\n' +
      '**Passo a passo:**\n' +
      '1. VK = η·VCC = 0,8 × 12 = 9,6 V.\n' +
      '2. VP = VK + 0,7 = 9,6 + 0,7 = **10,3 V**.\n\n' +
      '**Por que C:** 10,3 V é a tensão em que o UJT dispara.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A) 8,0 V:** é o VP do outro exemplo (η = 0,61), não deste.\n' +
      '- **B) 9,6 V:** é VK (η·VCC), faltando o +0,7 V.\n' +
      '- **D) 12,0 V:** é VCC, não o ponto de disparo.\n\n' +
      '**Pegadinha:** parar em VK = 9,6 V. Sempre some os 0,7 V para chegar a VP.\n\n' +
      '**Regra prática:** VP = η·VCC + 0,7 V.',
    fonte: 'Slides Tiristores/UJT (Exemplo, VP = 10,3 V)' },
  // 13 base de tempo
  { id: 'me-13-02', tipo: 'multipla', topico: '13-geradores-base-de-tempo', dificuldade: 'facil',
    enunciado: 'A rampa de uma base de tempo é projetada para ser LINEAR porque:',
    alternativas: ['O tempo é uma grandeza linear, e a carga por corrente constante dá dV/dt = I/C (uma reta)', 'O capacitor é grande', 'A frequência é alta', 'O diodo conduz sempre'],
    correta: A, conceito: 'Rampa linear (dV/dt = I/C)',
    comentario:
      '**Resposta: A.**\n\n' +
      '**O que cobra:** por que a rampa de uma base de tempo é projetada para ser LINEAR.\n\n' +
      '**Por que A está certa:** o tempo é uma grandeza linear, então a referência usada para medi-lo também precisa ser. Carregando o capacitor por uma fonte de CORRENTE CONSTANTE, dV/dt = I/C é constante → a tensão sobe em linha reta, proporcional ao tempo. Assim a varredura anda com velocidade uniforme.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **B) capacitor grande:** o tamanho de C muda a inclinação, não a linearidade.\n' +
      '- **C) frequência alta:** não tem relação com a forma (reta × curva).\n' +
      '- **D) diodo conduz sempre:** irrelevante para a linearidade da rampa.\n\n' +
      '**Pegadinha:** confundir o que dá linearidade. Carga por RESISTOR daria exponencial; é a fonte de corrente que garante a reta.\n\n' +
      '**Regra prática:** base de tempo precisa de rampa reta → use fonte de corrente (dV/dt = I/C constante), não um simples RC.',
    fonte: 'LinhaDoTempo (13) / Slides Base de Tempo' },
  { id: 'me-13-03', tipo: 'multipla', topico: '13-geradores-base-de-tempo', dificuldade: 'medio',
    enunciado: 'No circuito de base de tempo da SOPA PP1 2021 (UJT com η = 0,8, VCC = 12 V, VV = 0,8 V), qual é o nível superior VP da rampa?',
    alternativas: ['9,6 V', '10,3 V', '12 V', '11,3 V'],
    correta: B, conceito: 'VP do UJT: η·VCC + 0,7',
    comentario:
      '**Resposta: B (10,3 V).**\n\n' +
      '**O que cobra:** o nível superior VP da rampa numa base de tempo com UJT.\n\n' +
      '**Interpretação:** a rampa sobe até o UJT disparar, o que ocorre em VP. Com η = 0,8 e VCC = 12 V:\n\n' +
      '**Passo a passo:**\n' +
      '1. VP = η·VCC + 0,7 = 0,8·12 + 0,7 = 9,6 + 0,7 = **10,3 V**.\n\n' +
      '**Por que B:** 10,3 V é o topo da rampa (onde o UJT dispara e o capacitor descarrega).\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A) 9,6 V:** é η·VCC (= VK), esquecendo os +0,7 V — a armadilha clássica.\n' +
      '- **C) 12 V:** é VCC, não o ponto de disparo.\n' +
      '- **D) 11,3 V:** somou 0,7 a um valor errado (não bate com η·VCC + 0,7).\n\n' +
      '**Pegadinha:** calcular VP = η·VCC = 9,6 V e esquecer os +0,7 V da junção emissor-base.\n\n' +
      '**Regra prática:** o topo da rampa do UJT é VP = η·VCC + 0,7 V (VV é o piso, onde a descarga termina).',
    fonte: 'SOPA PP1 2021 / Slides Tiristores UJT',
    armadilha: 'Calcular VP = η·VCC = 9,6 V e esquecer o +0,7 V.' },
  { id: 'me-00-03', tipo: 'multipla', topico: '00-ideia-central-da-prova', dificuldade: 'facil',
    enunciado: 'Um circuito tem capacitor em série com a carga e diodo em paralelo com o capacitor. Que família é esse circuito?',
    alternativas: ['Limitador (ceia/corta parte da onda)', 'Grampeador (desloca o nível médio, preserva a forma)', 'Regulador série (estabiliza tensão CC)', 'Comparador (saída saturada)'],
    correta: B, conceito: 'Identificar a família pelo circuito',
    comentario:
      '**Resposta: B (grampeador).**\n\n' +
      '**O que cobra:** identificar a FAMÍLIA do circuito só pela topologia descrita, sem números.\n\n' +
      '**Interpretação:** o enunciado dá duas pistas decisivas — (1) capacitor EM SÉRIE com a carga e (2) diodo EM PARALELO. Essa dupla é a "assinatura" do grampeador.\n\n' +
      '**Por que B está certa:** o capacitor em série carrega-se até o pico da entrada e passa a se comportar como uma fonte CC em série, deslocando toda a onda para cima ou para baixo SEM mudar a forma. O diodo em paralelo define o sentido do grampeamento (positivo ou negativo).\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A) Limitador:** tem o diodo derivando a onda, MAS sem capacitor em série — ele corta parte da onda, não a desloca.\n' +
      '- **C) Regulador série:** teria um transistor no caminho da carga e uma referência (Zener) gerando CC estável — nada disso aqui.\n' +
      '- **D) Comparador:** exigiria um amp-op com saída saturada — também ausente.\n\n' +
      '**Pegadinha:** confundir grampeador com limitador. O detalhe que decide é o **capacitor em série**: tem capacitor → grampeador; não tem → limitador.\n\n' +
      '**Regra prática:** procure o capacitor em série antes de tudo — ele é a impressão digital do grampeador.',
    fonte: 'LinhaDoTempo (00) / Slides Limitadores e Grampeadores',
    armadilha: 'Confundir grampeador (capacitor em série) com limitador (diodo em série, sem capacitor).' },
  { id: 'me-rev-01', tipo: 'multipla', topico: '99-revisao-final', dificuldade: 'medio',
    enunciado: 'Uma onda senoidal de −8 V a +8 V passa primeiro por um GRAMPEADOR POSITIVO ideal (Vm = 8 V) e depois a saída vai para a entrada V+ de um COMPARADOR em malha aberta cuja referência em V− é +10 V. Com V− = +10 V fixo, a saída do comparador fica em +VCC:',
    alternativas: [
      'Durante todo o período (saída sempre +VCC).',
      'Apenas quando a saída do grampeador supera +10 V.',
      'Nunca (saída sempre em −VEE).',
      'Apenas no semiciclo positivo da onda original.',
    ], correta: B, conceito: 'Grampeador + comparador (dois blocos em cascata)',
    comentario:
      '**Resposta: B.**\n\n' +
      '**O que cobra:** analisar uma CASCATA de dois blocos — grampeador positivo seguido de comparador — propagando a onda de um para o outro.\n\n' +
      '**Bloco 1 — Grampeador positivo (entrada −8 V a +8 V):**\n' +
      'Soma Vm = 8 V a toda a onda. Novo mínimo: −8 + 8 = 0 V; novo máximo: +8 + 8 = +16 V. Saída: senoide de 0 a +16 V (mesma forma, deslocada para cima).\n\n' +
      '**Bloco 2 — Comparador (V+ = saída do grampeador; V− = +10 V):**\n' +
      'A saída vai a +VCC sempre que V+ > V−, ou seja, sempre que a onda grampeada (0 a 16 V) ultrapassar +10 V. Isso ocorre num TRECHO de cada ciclo (perto do pico de 16 V), não o tempo todo.\n\n' +
      '**Por que B:** "apenas quando a saída do grampeador supera +10 V" descreve exatamente a condição V+ > V− = 10 V.\n\n' +
      '**Por que as outras erram:**\n' +
      '- **A) sempre +VCC:** a onda grampeada passa boa parte do tempo abaixo de 10 V (chega a 0 V); a saída não fica sempre alta.\n' +
      '- **C) nunca:** o pico grampeado é +16 V > 10 V, logo a saída SIM atinge +VCC em parte do ciclo.\n' +
      '- **D) só no semiciclo positivo da onda original:** depois do grampeador não há mais semiciclo negativo (a onda vai de 0 a +16 V); o critério passa a ser cruzar 10 V.\n\n' +
      '**Pegadinha:** esquecer de aplicar o grampeador ANTES de comparar. A faixa que chega ao comparador é 0:+16 V, não −8:+8 V.\n\n' +
      '**Regra prática:** em cascata, propague a onda bloco a bloco — calcule a saída do 1º e use-a como entrada do 2º.',
    fonte: 'Revisão final — cascata de blocos',
    armadilha: 'Esquecer que o grampeador transforma a faixa de −8:+8 V para 0:+16 V antes de comparar.' },
];

export const verdadeiroFalso: QuestaoVF[] = [
  {
    id: 'vf-01-01', tipo: 'vf', topico: '01-ferramentas-de-calculo', dificuldade: 'facil',
    afirmacao: 'Quando um capacitor é carregado por uma fonte de corrente constante, deve-se usar a equação exponencial de carga RC.',
    correta: false,
    comentario:
      '**Correto: Falso.**\n\n' +
      '**O que cobra:** distinguir os dois modelos de carga de um capacitor.\n\n' +
      '**Por que é falso:** com FONTE DE CORRENTE constante a carga é LINEAR — usa-se dV/dt = I/C, que dá uma reta. A equação exponencial só vale quando o capacitor carrega ATRAVÉS DE UM RESISTOR a partir de uma fonte de tensão (τ = RC).\n\n' +
      '| Como o capacitor é carregado | Forma de V(t) | Conta |\n' +
      '| --- | --- | --- |\n' +
      '| Fonte de corrente constante | Reta (rampa) | dV/dt = I/C |\n' +
      '| Resistor + fonte de tensão | Exponencial | V = VF·(1 − e^(−t/RC)) |\n\n' +
      '**Pegadinha:** ver "capacitor" e disparar a exponencial no automático.\n\n' +
      '**Regra prática:** olhe COMO a corrente chega ao capacitor — imposta (fonte de corrente) = reta; via resistor = exponencial.',
    fonte: 'LinhaDoTempo (01)',
    armadilha: 'Misturar o modelo exponencial (RC) com o linear (fonte de corrente).',
  },
  { id: 'vf-01-02', tipo: 'vf', topico: '01-ferramentas-de-calculo', dificuldade: 'facil',
    afirmacao: 'Numa curva exponencial de carga RC, em t = τ (uma constante de tempo), o capacitor atingiu exatamente 63,2% da tensão final.',
    correta: true,
    comentario:
      '**Correto: Verdadeiro.**\n\n' +
      '**O que cobra:** o valor de referência da curva exponencial de carga RC.\n\n' +
      '**Por que é verdadeiro:** em t = τ, V = VF·(1 − e⁻¹) = VF·(1 − 0,368) = VF·0,632 → 63,2% da tensão final. É a "régua mental" da exponencial.\n\n' +
      '| Tempo | % de VF atingido |\n' +
      '| --- | --- |\n' +
      '| 1τ | 63,2% |\n' +
      '| 2τ | 86,5% |\n' +
      '| 3τ | 95,0% |\n' +
      '| 5τ | ≈ 99,3% (praticamente cheio) |\n\n' +
      '**Pegadinha:** confundir 63,2% (carga em 1τ) com 36,8% (o que FALTA, ou a tensão numa descarga em 1τ).\n\n' +
      '**Regra prática:** 1τ ≈ 63% e 5τ ≈ "cheio" — decore esses dois pontos.',
    fonte: 'Slides Ferramentas de Cálculo / LinhaDoTempo (01)' },
  { id: 'vf-01-03', tipo: 'vf', topico: '01-ferramentas-de-calculo', dificuldade: 'facil',
    afirmacao: 'As três formas de calcular potência (P=V·I, P=I²·R, P=V²/R) darão o mesmo resultado, desde que V e I sejam coerentes com o mesmo resistor.',
    correta: true,
    comentario:
      '**Correto: Verdadeiro.**\n\n' +
      '**O que cobra:** entender que P = V·I, P = I²·R e P = V²/R são a MESMA equação vista de ângulos diferentes.\n\n' +
      '**Por que é verdadeiro:** partindo de P = V·I e da Lei de Ohm (V = I·R) — substituindo V dá P = (I·R)·I = I²·R; substituindo I = V/R dá P = V·(V/R) = V²/R. Com V, I e R coerentes (mesmo resistor), as três entregam o mesmo número.\n\n' +
      '**Como escolher:** use a fórmula cujos DOIS valores você já tem — evita uma conta intermediária.\n\n' +
      '**Pegadinha:** misturar valores de componentes diferentes (V de um ponto com R de outro) — aí as fórmulas divergem.\n\n' +
      '**Regra prática:** tenho V e I → P = V·I; tenho I e R → P = I²·R; tenho V e R → P = V²/R.',
    fonte: 'Slides Ferramentas de Cálculo' },
  {
    id: 'vf-02-01', tipo: 'vf', topico: '02-fontes-cc-reguladas', dificuldade: 'facil',
    afirmacao: 'O capacitor de filtro, sozinho, mantém a tensão de saída estável independentemente da carga e da entrada.',
    correta: false,
    comentario:
      '**Correto: Falso.**\n\n' +
      '**O que cobra:** separar o papel do filtro (suavizar) do papel do regulador (estabilizar).\n\n' +
      '**Por que é falso:** o capacitor de filtro apenas SUAVIZA a ondulação entre os picos do retificado. A tensão média ainda cai quando a carga puxa mais corrente e oscila quando a rede varia. Quem segura VO constante é o ESTÁGIO REGULADOR.\n\n' +
      '**Pegadinha:** ver "tensão mais lisa" depois do capacitor e concluir que está "regulada". Lisa não é o mesmo que estável.\n\n' +
      '**Regra prática:** filtro reduz ripple; regulador fixa o valor. Precisa dos dois.',
    fonte: 'Slides Fontes Reguladas 1',
  },
  { id: 'vf-02-02', tipo: 'vf', topico: '02-fontes-cc-reguladas', dificuldade: 'facil',
    afirmacao: 'A tensão de pico que carrega o capacitor de filtro é maior que a tensão RMS indicada no transformador.',
    correta: true,
    comentario:
      '**Correto: Verdadeiro.**\n\n' +
      '**O que cobra:** a relação entre valor RMS (indicado no transformador) e valor de PICO (que o capacitor carrega).\n\n' +
      '**Por que é verdadeiro:** Vm = Vrms × √2 ≈ 1,41 · Vrms. O capacitor de filtro carrega-se até perto do PICO da onda retificada, não até o RMS. Ex.: 12 Vrms → pico ≈ 17 V.\n\n' +
      '**Pegadinha:** usar os 12 Vrms como se fossem a tensão CC na entrada do regulador. O regulador "vê" ≈ 17 V (menos as quedas).\n\n' +
      '**Regra prática:** sempre converta Vrms → Vm = Vrms·√2 antes de comparar com a tensão mínima de entrada do CI.',
    fonte: 'Slides Fontes Reguladas 1' },
  {
    id: 'vf-03-01', tipo: 'vf', topico: '03-reguladores-com-transistor', dificuldade: 'medio',
    afirmacao: 'No regulador com limitador de corrente, o transistor Q2 começa conduzindo e corta quando a corrente atinge o limite.',
    correta: false,
    comentario:
      '**Correto: Falso.**\n\n' +
      '**O que cobra:** o estado inicial do transistor de proteção Q2 num limitador de corrente.\n\n' +
      '**Por que é falso:** Q2 começa CORTADO. Em operação normal a queda no resistor sensor RSC é pequena (< 0,7 V), insuficiente para ligar Q2. Ele só LIGA quando a corrente cresce tanto que V(RSC) ≈ 0,7 V; aí desvia corrente da base de Q1 e limita a corrente de carga. O enunciado descreve o inverso.\n\n' +
      '**Pegadinha:** inverter o estado inicial — Q2 parte cortado, não conduzindo.\n\n' +
      '**Regra prática:** transistor de proteção fica DORMINDO (cortado) até a corrente atingir o limite; só então ele "acorda".',
    fonte: 'Slides Fontes Reguladas 1',
    armadilha: 'Inverter o estado inicial de Q2 (ele parte cortado).',
  },
  {
    id: 'vf-07-01', tipo: 'vf', topico: '07-grampeadores', dificuldade: 'facil',
    afirmacao: 'O grampeador altera a forma da onda de entrada, deformando-a.',
    correta: false,
    comentario:
      '**Correto: Falso.**\n\n' +
      '**O que cobra:** o que o grampeador faz com a FORMA da onda.\n\n' +
      '**Por que é falso:** o grampeador desloca o nível médio (DC), mas PRESERVA a forma e a amplitude pico-a-pico. Quem deforma/corta a onda é o LIMITADOR. O grampeador só "sobe ou desce" a onda inteira.\n\n' +
      '**Pegadinha:** confundir os dois — grampeador desloca (forma intacta); limitador ceifa (forma cortada).\n\n' +
      '**Regra prática:** grampeador = mesma forma, outro nível DC; limitador = forma alterada (achatada).',
    fonte: 'Slides Limitadores e Grampeadores',
  },
  {
    id: 'vf-11-01', tipo: 'vf', topico: '11-tiristores-scr-diac-triac', dificuldade: 'medio',
    afirmacao: 'Um SCR diretamente polarizado conduz mesmo sem pulso de porta, desde que a tensão seja suficiente.',
    correta: false,
    comentario:
      '**Correto: Falso** (no uso normal).\n\n' +
      '**O que cobra:** se a polarização direta sozinha liga o SCR.\n\n' +
      '**Por que é falso:** a polarização direta NÃO basta — o SCR só liga se também receber um pulso positivo na porta. (Conduzir só por tensão direta exigiria atingir a tensão de ruptura direta, condição anormal, fora do uso projetado.) E, para desligar, a corrente direta precisa cair abaixo da corrente de retenção (I_holding).\n\n' +
      '**Pegadinha:** imaginar que "tensão suficiente" liga o SCR. Sem o pulso de porta, ele fica bloqueado.\n\n' +
      '**Regra prática:** SCR liga com polarização direta + pulso de porta; desliga quando a corrente cai abaixo da retenção.',
    fonte: 'Slides Tiristores',
  },
  { id: 'vf-04-01', tipo: 'vf', topico: '04-reguladores-integrados', dificuldade: 'facil',
    afirmacao: 'A corrente máxima (Imáx) de um regulador integrado é a corrente que ele sempre fornece à carga.',
    correta: false,
    comentario:
      '**Correto: Falso.**\n\n' +
      '**O que cobra:** o que significa a corrente máxima de um regulador.\n\n' +
      '**Por que é falso:** Imáx é um LIMITE SUPERIOR, não uma corrente obrigatória. A carga puxa apenas a corrente de que precisa (IL = VO/RL), e o CI entrega isso desde que não ultrapasse Imáx. Carga leve → corrente pequena.\n\n' +
      '**Pegadinha:** ler "corrente máxima" como "corrente fixa". É teto, não piso.\n\n' +
      '**Regra prática:** quem decide a corrente é a CARGA (VO/RL); Imáx só diz até onde o CI aguenta.',
    fonte: 'LinhaDoTempo (04)' },
  { id: 'vf-05-01', tipo: 'vf', topico: '05-reguladores-chaveados-pwm', dificuldade: 'medio',
    afirmacao: 'Num regulador PWM, a frequência varia e o tempo ligado (ton) permanece constante.',
    correta: false,
    comentario:
      '**Correto: Falso.**\n\n' +
      '**O que cobra:** o que é FIXO e o que VARIA num controle PWM.\n\n' +
      '**Por que é falso:** é o contrário do enunciado. No PWM a FREQUÊNCIA é CONSTANTE (o período T não muda) e o que varia para regular é o TEMPO LIGADO (ton). O ciclo de trabalho é D = ton/T.\n\n' +
      '**No diagrama (PWM):** o período T é sempre o mesmo; o que cresce ou encolhe é a largura ton do pulso. Mais ton → maior D → maior VOUT = D·VIN.\n\n' +
      '**Pegadinha:** inverter os papéis — trocar "frequência fixa, ton variável" por "frequência variável, ton fixo".\n\n' +
      '**Regra prática:** PWM = mesma frequência, largura de pulso variável (D = ton/T).',
    fonte: 'Slides Fontes Reguladas 3 / LinhaDoTempo (05)',
    armadilha: 'Inverter o que é fixo (frequência) e o que varia (ton).' },
  { id: 'vf-05-02', tipo: 'vf', topico: '05-reguladores-chaveados-pwm', dificuldade: 'facil',
    afirmacao: 'Num conversor buck ideal, aumentar o ciclo de trabalho D resulta em maior tensão média de saída.',
    correta: true,
    comentario:
      '**Correto: Verdadeiro.**\n\n' +
      '**O que cobra:** a relação direta entre ciclo de trabalho e tensão média de saída.\n\n' +
      '**Por que é verdadeiro:** VOUT = D·VIN. Aumentar D é deixar a chave ligada por uma fração MAIOR do período, então a tensão média entregue à carga sobe. Com VIN fixo, VOUT cresce proporcionalmente a D.\n\n' +
      '**Pegadinha:** só não inverter o sentido — mais D significa mais saída, não menos.\n\n' +
      '**Regra prática:** no buck, VOUT acompanha D linearmente (VOUT = D·VIN).',
    fonte: 'Slides Fontes Reguladas 3' },
  { id: 'vf-06-01', tipo: 'vf', topico: '06-limitadores', dificuldade: 'facil',
    afirmacao: 'Um limitador sempre transforma a senoide de entrada em uma onda quadrada perfeita.',
    correta: false,
    comentario:
      '**Correto: Falso.**\n\n' +
      '**O que cobra:** a forma real da saída de um limitador.\n\n' +
      '**Por que é falso:** quando o circuito só ceifa PARTE da onda, a saída tem um trecho CURVO (acompanhando a entrada, com o diodo cortado) e um trecho RETO (preso no nível de corte, com o diodo conduzindo). É uma senoide com o topo (ou o fundo) achatado, não uma quadrada perfeita.\n\n' +
      '**Pegadinha:** desenhar uma quadrada perfeita. Só viraria quadrada se a amplitude fosse muito maior que os níveis de corte, ceifando os dois lados bem rente ao zero.\n\n' +
      '**Regra prática:** o limitador ceifa só o que ultrapassa o nível; o resto da onda passa intacto.',
    fonte: 'LinhaDoTempo (06)' },
  { id: 'vf-09-01', tipo: 'vf', topico: '09-multivibradores-555', dificuldade: 'medio',
    afirmacao: 'Para calcular o período de um 555 ASTÁVEL, usa-se LP = 1,1·RA·C.',
    correta: false,
    comentario:
      '**Correto: Falso.**\n\n' +
      '**O que cobra:** não trocar a fórmula do astável pela do monoestável.\n\n' +
      '**Por que é falso:** LP = 1,1·RA·C é do MONOESTÁVEL (largura do pulso único). No ASTÁVEL o período é a soma de duas parcelas: T = T_ALTO + T_BAIXO = 0,7·(RA+RB)·C + 0,7·RB·C.\n\n' +
      '**Pegadinha:** ver "555" e aplicar a primeira fórmula que vem à cabeça. Confira sempre se é astável (oscila) ou monoestável (um pulso).\n\n' +
      '**Regra prática:** monoestável → 1,1·RA·C; astável → 0,7(RA+RB)C + 0,7·RB·C.',
    fonte: 'Slides Multivibradores',
    armadilha: 'Trocar a fórmula do monoestável pela do astável.' },
  { id: 'vf-10-01', tipo: 'vf', topico: '10-schmitt-trigger', dificuldade: 'facil',
    afirmacao: 'No Schmitt-trigger, a saída comuta exatamente quando a entrada cruza o zero.',
    correta: false,
    comentario:
      '**Correto: Falso.**\n\n' +
      '**O que cobra:** quando a saída de um Schmitt-trigger realmente comuta.\n\n' +
      '**Por que é falso:** a saída comuta nos LIMIARES — UTP quando a entrada está SUBINDO e LTP quando está DESCENDO — e não no cruzamento por zero. A diferença entre os dois limiares é justamente a histerese, que dá imunidade a ruído.\n\n' +
      '**Pegadinha:** tratar o Schmitt como um comparador de zero. Ele tem dois limiares deslocados, não um único em zero.\n\n' +
      '**Regra prática:** Schmitt → comuta em UTP (subindo) e LTP (descendo); a "zona morta" entre eles é a histerese.',
    fonte: 'Slides Schmitt-Trigger' },
  { id: 'vf-12-01', tipo: 'vf', topico: '12-ujt-oscilador-relaxacao', dificuldade: 'medio',
    afirmacao: 'No oscilador de relaxação com UJT, o tempo de carga t1 costuma ser muito maior que o de descarga t2.',
    correta: true,
    comentario:
      '**Correto: Verdadeiro.**\n\n' +
      '**O que cobra:** comparar os tempos de carga (t1) e descarga (t2) no oscilador de relaxação com UJT.\n\n' +
      '**Por que é verdadeiro:** a CARGA do capacitor é lenta — feita por um resistor (ou fonte de corrente) de valor alto até o emissor chegar a VP. A DESCARGA é rápida — quando o UJT dispara, ele oferece um caminho de baixíssima resistência (RB1 em condução) e o capacitor se esvazia quase instantaneamente. Por isso t1 ≫ t2 (no exemplo dos slides, t1 = 44,8 ms ≫ t2).\n\n' +
      '**Pegadinha:** achar que carga e descarga levam tempos parecidos. A descarga é desprezível perto da carga — daí a onda em "dente de serra".\n\n' +
      '**Regra prática:** UJT oscilador → t1 (carga, lenta) ≫ t2 (descarga, rápida); o período é praticamente t1.',
    fonte: 'Slides Tiristores/UJT (t1 = 44,8 ms ≫ t2)' },
  // ── tópicos sem VF antes ───────────────────────────────────────────
  { id: 'vf-00-01', tipo: 'vf', topico: '00-ideia-central-da-prova', dificuldade: 'facil',
    afirmacao: 'Para resolver qualquer questão da PP1, o primeiro passo é escolher a fórmula e substituir os valores.',
    correta: false,
    comentario:
      '**Correto: Falso.**\n\n' +
      '**O que cobra:** qual é REALMENTE o primeiro passo ao atacar uma questão.\n\n' +
      '**Por que é falso:** começar pela fórmula é o erro mais comum. O primeiro passo é CLASSIFICAR o circuito (a que família pertence?) e identificar o que a questão pede. Só com a família definida você sabe qual fórmula é a correta.\n\n' +
      '**O conceito certo:** classificar → entender o pedido → escolher a conta → calcular.\n\n' +
      '**Pegadinha:** a frase parece "produtiva" (ir direto à conta), mas leva você a aplicar a fórmula de outra família.\n\n' +
      '**Regra prática:** nenhuma fórmula antes de nomear a família do circuito.',
    fonte: 'LinhaDoTempo (00)',
    armadilha: 'A pressa de "encaixar uma fórmula" sem antes entender o circuito.' },
  { id: 'vf-08-01', tipo: 'vf', topico: '08-comparadores', dificuldade: 'facil',
    afirmacao: 'Um amp-op em malha aberta amplifica a diferença entre as entradas de forma proporcional.',
    correta: false,
    comentario:
      '**Correto: Falso.**\n\n' +
      '**O que cobra:** o que um amp-op faz SEM realimentação (malha aberta).\n\n' +
      '**Por que é falso:** o ganho em malha aberta é altíssimo (≥ 100 000×). A menor diferença entre as entradas é amplificada até a saída bater no trilho de alimentação — ela SATURA em +VCC ou −VEE. Logo é retangular, nunca proporcional. Resposta proporcional só existe com realimentação NEGATIVA (amplificador linear).\n\n' +
      '**Pegadinha:** confundir amplificador linear (com realimentação) com comparador (malha aberta).\n\n' +
      '**Regra prática:** malha aberta = satura (comparador); realimentação negativa = amplifica proporcional.',
    fonte: 'Slides Multivibradores e Comparadores',
    armadilha: 'Confundir amplificador linear (com realimentação negativa) com comparador (em malha aberta).' },
  { id: 'vf-13-01', tipo: 'vf', topico: '13-geradores-base-de-tempo', dificuldade: 'medio',
    afirmacao: 'Para gerar uma rampa linear de tensão, carrega-se o capacitor por um resistor.',
    correta: false,
    comentario:
      '**Correto: Falso.**\n\n' +
      '**O que cobra:** o que produz uma rampa LINEAR de tensão.\n\n' +
      '**Por que é falso:** carregar o capacitor por um RESISTOR produz curva EXPONENCIAL (V = VF·(1 − e^(−t/RC))), não uma reta. Para uma rampa LINEAR usa-se uma FONTE DE CORRENTE CONSTANTE, pois dV/dt = I/C é constante quando I é constante.\n\n' +
      '**Pegadinha:** misturar os dois modelos — resistor → exponencial; fonte de corrente → reta.\n\n' +
      '**Regra prática:** rampa reta = fonte de corrente; curva exponencial = resistor.',
    fonte: 'LinhaDoTempo (13) / Slides Base de Tempo',
    armadilha: 'Misturar os dois modelos: resistor → exponencial; fonte de corrente → reta.' },
  { id: 'vf-08-02', tipo: 'vf', topico: '08-comparadores', dificuldade: 'medio',
    afirmacao: 'Num comparador ideal, inverter as entradas (trocar V+ e V−) não altera o resultado.',
    correta: false,
    comentario:
      '**Correto: Falso.**\n\n' +
      '**O que cobra:** o efeito de trocar V+ por V− num comparador.\n\n' +
      '**Por que é falso:** inverter as entradas INVERTE toda a lógica da saída. O que dava +VCC passa a dar −VEE e vice-versa, porque o sinal de (V+ − V−) troca. Por isso é essencial conferir qual sinal entra em qual terminal.\n\n' +
      '**Pegadinha:** achar que "tanto faz" o terminal. O terminal decide o sentido da comutação.\n\n' +
      '**Regra prática:** confira sempre — sinal em V+ (não-inversor): saída segue o sinal; sinal em V− (inversor): saída é o oposto.',
    fonte: 'Slides Multivibradores e Comparadores / LinhaDoTempo (08)' },
  { id: 'vf-12-02', tipo: 'vf', topico: '12-ujt-oscilador-relaxacao', dificuldade: 'medio',
    afirmacao: 'No UJT, VP é simplesmente η·VCC.',
    correta: false,
    comentario:
      '**Correto: Falso.**\n\n' +
      '**O que cobra:** a fórmula correta da tensão de pico VP do UJT.\n\n' +
      '**Por que é falso:** VP = η·VCC + 0,7 V. O termo η·VCC é só VK (a tensão no ponto interno entre as bases); para o UJT disparar, o emissor precisa vencer também a queda da junção emissor-base (≈ 0,7 V). Esquecer esses 0,7 V é o erro clássico.\n\n' +
      '**Pegadinha:** parar em VK = η·VCC. VK é o ponto interno; VP = VK + 0,7 é o gatilho.\n\n' +
      '**Regra prática:** VP = η·VCC + 0,7 V (sempre os +0,7 V da junção).',
    fonte: 'Slides Tiristores/UJT',
    armadilha: 'Ignorar a queda de junção de 0,7 V sobre VK.' },
  { id: 'vf-07-02', tipo: 'vf', topico: '07-grampeadores', dificuldade: 'medio',
    afirmacao: 'Num grampeador positivo ideal (sem queda de diodo), a onda de saída varia entre +Vm e +2Vm.',
    correta: false,
    comentario:
      '**Correto: Falso.**\n\n' +
      '**O que cobra:** os valores exatos de saída de um grampeador positivo ideal.\n\n' +
      '**Por que é falso:** o grampeador positivo SOMA Vm a toda a onda. O mínimo da entrada (−Vm) vira −Vm + Vm = 0 V, e o máximo (+Vm) vira +Vm + Vm = +2Vm. Logo a saída varia de **0 a +2Vm**, e não de +Vm a +2Vm como afirma o enunciado.\n\n' +
      '**Pegadinha:** errar o piso. O novo mínimo é ZERO (o pico negativo encosta no 0), não +Vm.\n\n' +
      '**Regra prática:** grampeador positivo ideal → saída de 0 a +2Vm (o vale fica grampeado em zero).',
    fonte: 'Slides Limitadores e Grampeadores / LinhaDoTempo (07)' },
  { id: 'vf-00-02', tipo: 'vf', topico: '00-ideia-central-da-prova', dificuldade: 'facil',
    afirmacao: 'Todas as questões da PP1 de Detecção se encaixam em uma das cinco famílias: fontes reguladas, limitadores/grampeadores, comparadores/555/Schmitt, tiristores/UJT e geradores de base de tempo.',
    correta: true,
    comentario:
      '**Correto: Verdadeiro.**\n\n' +
      '**O que cobra:** a lógica-mãe do curso — o universo da PP1 cabe em cinco famílias.\n\n' +
      '**Por que é verdadeiro:** as cinco famílias são (1) fontes reguladas, (2) limitadores/grampeadores, (3) comparadores/555/Schmitt, (4) tiristores/UJT e (5) geradores de base de tempo. Toda questão da prova é uma variação de uma delas, e cada família tem seu tipo característico de conta.\n\n' +
      '**O conceito certo:** reconhecer a família já entrega o "cardápio" de fórmulas possíveis — por isso classificar é metade da solução.\n\n' +
      '**Pegadinha:** achar que cada questão é um caso isolado; na verdade são poucos moldes repetidos.\n\n' +
      '**Regra prática:** memorize as cinco famílias e a conta-chave de cada uma; o resto é encaixar.',
    fonte: 'LinhaDoTempo (00) — "As cinco famílias de circuito"' },
  { id: 'vf-13-02', tipo: 'vf', topico: '13-geradores-base-de-tempo', dificuldade: 'medio',
    afirmacao: 'No circuito de base de tempo com transistor PNP, a tensão no emissor (Ve) é igual à tensão na base (Vb) mais 0,7 V.',
    correta: true,
    comentario:
      '**Correto: Verdadeiro.**\n\n' +
      '**O que cobra:** a relação entre tensão de emissor e de base num transistor PNP que funciona como fonte de corrente.\n\n' +
      '**Por que é verdadeiro:** num PNP em condução, o emissor fica 0,7 V ACIMA da base: Ve = Vb + VEB = Vb + 0,7 V. Com Ve fixado pela base, a corrente que carrega o capacitor é I = (VCC − Ve)/Re — constante, o que gera a rampa linear. (Na SOPA: Vb = 8,3 V → Ve = 9 V → I = (12 − 9)/6k = 0,5 mA.)\n\n' +
      '**Pegadinha:** usar Ve = Vb − 0,7 (regra do NPN). No PNP é o contrário: o emissor é o terminal MAIS positivo (Ve = Vb + 0,7).\n\n' +
      '**Regra prática:** PNP → Ve = Vb + 0,7 V; a fonte de corrente vale I = (VCC − Ve)/Re.',
    fonte: 'Slides Base de Tempo / SOPA PP1 2021 (Vb=8,3 V → Ve=9 V → I=0,5 mA)' },
  { id: 'vf-03-02', tipo: 'vf', topico: '03-reguladores-com-transistor', dificuldade: 'facil',
    afirmacao: 'Num regulador série com transistor, se a tensão de entrada VI aumentar enquanto a carga permanece constante, a tensão de saída VO também aumenta proporcionalmente.',
    correta: false,
    comentario:
      '**Correto: Falso.**\n\n' +
      '**O que cobra:** a essência de "regular" — VO não acompanha VI.\n\n' +
      '**Por que é falso:** num regulador em malha fechada, a realimentação negativa ajusta o transistor série (Q1) para manter VO CONSTANTE mesmo quando VI sobe (desde que VI continue suficiente). Se VO acompanhasse VI proporcionalmente, o circuito seria um mero divisor de tensão, não um regulador.\n\n' +
      '**Pegadinha:** tratar o regulador como divisor resistivo (onde VO segue VI). A malha fechada é justamente o que o diferencia.\n\n' +
      '**Regra prática:** regulador = VO fixo apesar de VI variar; divisor = VO proporcional a VI.',
    fonte: 'Slides Fontes Reguladas 1 / LinhaDoTempo (03)',
    armadilha: 'Confundir o regulador com um divisor resistivo onde VO segue VI.' },
  { id: 'vf-04-02', tipo: 'vf', topico: '04-reguladores-integrados', dificuldade: 'facil',
    afirmacao: 'No LM317, o resistor R1 fica entre o pino OUT e o pino ADJ, e o resistor R2 entre o pino ADJ e o GND. A tensão mínima de saída (R2 → 0) é igual à tensão de referência interna de 1,25 V.',
    correta: true,
    comentario:
      '**Correto: Verdadeiro.**\n\n' +
      '**O que cobra:** a posição dos resistores no LM317 e o valor da tensão MÍNIMA de saída.\n\n' +
      '**Por que é verdadeiro:** R1 vai de OUT a ADJ (superior) e R2 vai de ADJ ao GND (inferior). A saída é VO = VREF·(1 + R2/R1) + IQ·R2. Com R2 = 0, o termo R2/R1 zera e IQ·R2 também → VO = VREF = 1,25 V. Ou seja, o LM317 nunca entrega menos que sua referência.\n\n' +
      '**Pegadinha:** achar que o LM317 chega a 0 V. O piso é 1,25 V (a referência interna).\n\n' +
      '**Regra prática:** VO mínimo do LM317 = VREF = 1,25 V (quando R2 → 0).',
    fonte: 'Slides Reguladores Integrados / LinhaDoTempo (04)' },
  { id: 'vf-06-02', tipo: 'vf', topico: '06-limitadores', dificuldade: 'medio',
    afirmacao: 'Num limitador com diodo e fonte DC de +4 V em série (série com o diodo, em paralelo com a carga), o diodo começa a conduzir — e a saída fica presa — quando a entrada ultrapassa +4,7 V.',
    correta: true,
    comentario:
      '**Correto: Verdadeiro.**\n\n' +
      '**O que cobra:** o nível em que o diodo de um limitador com fonte DC começa a conduzir.\n\n' +
      '**Por que é verdadeiro:** o ramo de ceifamento tem o diodo em série com a fonte VDC = +4 V. Para o diodo conduzir, a entrada precisa vencer a fonte MAIS a queda do diodo: VIN > VDC + 0,7 = 4 + 0,7 = 4,7 V. Acima disso o ramo prende a saída em +4,7 V (platô); abaixo, o diodo corta e a saída acompanha a entrada.\n\n' +
      '**Pegadinha:** esquecer de somar os 0,7 V do diodo à fonte (usar só 4 V como nível de corte).\n\n' +
      '**Regra prática:** limitador com diodo + VDC em série → nível de corte = VDC + 0,7 V.',
    fonte: 'Slides Limitadores e Grampeadores / LinhaDoTempo (06)' },
  { id: 'vf-10-02', tipo: 'vf', topico: '10-schmitt-trigger', dificuldade: 'medio',
    afirmacao: 'Aumentar o resistor de realimentação de um Schmitt-trigger (mantendo o resistor de entrada fixo) aumenta β e, portanto, aumenta a histerese.',
    correta: true,
    comentario:
      '**Correto: Verdadeiro.**\n\n' +
      '**O que cobra:** como o resistor de realimentação afeta a histerese.\n\n' +
      '**Por que é verdadeiro:** β = R_rf/(R_ent + R_rf). Aumentar R_rf faz o numerador crescer mais rápido que o denominador, então β aumenta (tende a 1). Como |UTP| = |LTP| = β·VCC, limiares maiores significam histerese maior.\n\n' +
      '**Confira pelo limite:** R_rf ≫ R_ent → β → 1 (histerese máxima); R_rf ≪ R_ent → β → 0 (quase sem histerese).\n\n' +
      '**Pegadinha:** inverter a fração. É β = R_rf/(R_ent+R_rf), não R_ent/R_rf — por isso β cresce (não cai) quando R_rf aumenta.\n\n' +
      '**Regra prática:** mais realimentação (R_rf maior) → β maior → histerese maior.',
    fonte: 'Slides Schmitt-Trigger',
    armadilha: 'Confundir: é β = R_rf/(R_ent+R_rf), não R_ent/R_rf — basta ver que β→1 quando R_rf≫R_ent.' },
  { id: 'vf-99-01', tipo: 'vf', topico: '99-revisao-final', dificuldade: 'medio',
    afirmacao: 'Numa cascata grampeador positivo (entrada: senoide de ±8 V) + comparador (Vref = +10 V em V−), a saída do comparador fica em +VCC durante exatamente metade do período da onda original.',
    correta: false,
    comentario:
      '**Correto: Falso.**\n\n' +
      '**O que cobra:** o mesmo raciocínio em cascata (grampeador + comparador), agora julgando a DURAÇÃO em que a saída fica alta.\n\n' +
      '**Por que é falso:** após o grampeador positivo, a onda vai de 0 a +16 V. O comparador (V− = +10 V) só vai a +VCC quando a onda grampeada SUPERA +10 V — o que acontece numa FRAÇÃO do período (o trecho perto do pico), não exatamente na metade.\n\n' +
      '**Por que não é metade:** a senoide grampeada (0 a 16 V) tem ponto médio em 8 V; o limiar de 10 V está ACIMA do meio, então o tempo acima de 10 V é MENOR que metade do período.\n\n' +
      '**Pegadinha:** confundir "comuta em 10 V" com "comuta no meio da onda". O comparador troca em 10 V, não em 8 V (média) nem em 0 V.\n\n' +
      '**Regra prática:** o tempo em +VCC depende de ONDE o limiar corta a onda; só dá metade exata se o limiar for o valor médio da onda.',
    fonte: 'Revisão final — cascata grampeador + comparador',
    armadilha: 'Confundir "semiciclo positivo da onda grampeada" com "metade do período" — o comparador comuta em 10 V, não em zero.' },
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
    id: 'dis-01-01', tipo: 'discursiva', topico: '01-ferramentas-de-calculo', dificuldade: 'facil',
    enunciado: 'Num divisor de tensão com Vfonte = 15 V, R1 = 10 kΩ (superior) e R2 = 5 kΩ (inferior): (a) qual a tensão no nó entre R1 e R2? (b) Qual a corrente que percorre o circuito? (c) Qual a potência dissipada em R1?',
    gabaritoComentado:
      '**O que cobra:** divisor de tensão (achar o nó), corrente de malha e potência num resistor — os três "feijão com arroz" da caixa de ferramentas.\n\n' +
      '**Dados:** Vfonte = 15 V; R1 = 10 kΩ (superior); R2 = 5 kΩ (inferior). Estão em série, logo a MESMA corrente percorre os dois.\n\n' +
      '**(a) Tensão no nó (entre R1 e R2):**\n' +
      'Vnó = Vfonte · R2/(R1+R2) = 15 · 5/(10+5) = 15 · (1/3) = **5 V**.\n' +
      '(R2 vai no numerador porque o nó está em cima de R2.)\n\n' +
      '**(b) Corrente da malha:**\n' +
      'I = Vfonte/(R1+R2) = 15 / 15 kΩ = **1 mA** (atravessa R1 e R2 igualmente).\n\n' +
      '**(c) Potência em R1:**\n' +
      'Já temos I e R1 → P = I²·R1 = (1×10⁻³)² · 10×10³ = 1×10⁻⁶ · 10×10³ = **10 mW**.\n' +
      'Conferindo por outro caminho: a queda em R1 é VR1 = 15 − 5 = 10 V, e P = VR1·I = 10 · 1 mA = 10 mW. Bate.\n\n' +
      '**Resposta final:** (a) 5 V · (b) 1 mA · (c) 10 mW.\n\n' +
      '**Pegadinha:** no item (a), usar R1 (o de cima) no numerador daria 10 V — errado. O numerador é sempre o resistor sobre o qual se mede a tensão.\n\n' +
      '**Regra prática:** ache a corrente de malha primeiro; com ela, qualquer tensão (I·R) ou potência (I²·R) sai num passo.',
    criterios: [
      'Usou corretamente a fórmula do divisor de tensão.',
      'Calculou a corrente de malha (15 V / 15 kΩ = 1 mA).',
      'Aplicou P = I²R para a potência em R1.',
    ],
    fonte: 'Slides Ferramentas de Cálculo / LinhaDoTempo (01)',
    armadilha: 'Usar R1 no numerador do divisor em vez de R2 (Rbaixo é sempre o denominador parcial do nó que se quer calcular).',
  },
  {
    id: 'dis-02-01', tipo: 'discursiva', topico: '02-fontes-cc-reguladas', dificuldade: 'facil',
    enunciado: 'Um transformador de 12 Vrms alimenta um retificador de onda completa seguido de filtro capacitivo e regulador 7812. (a) Qual a tensão de pico Vm na saída do retificador? (b) A tensão mínima de entrada do 7812 é VImín = 14 V. O pico obtido é suficiente? Justifique. (c) Se o consumo de carga for IL = 200 mA, qual a potência dissipada no CI?',
    gabaritoComentado:
      '**O que cobra:** seguir a cadeia de uma fonte CC — converter RMS em pico, checar se o pico alimenta o regulador e estimar a potência dissipada no CI.\n\n' +
      '**Dados:** transformador 12 Vrms; retificador de onda completa + filtro; regulador 7812 (VO = 12 V fixo); VImín = 14 V; IL = 200 mA.\n\n' +
      '**(a) Tensão de pico na saída do retificador:**\n' +
      'Vm = Vrms · √2 = 12 · 1,41 ≈ **17 V** (é até esse valor que o capacitor de filtro se carrega).\n\n' +
      '**(b) O pico é suficiente?**\n' +
      'Sim. O 7812 precisa de pelo menos VImín = 14 V na entrada. Como Vm ≈ 17 V > 14 V, o CI recebe tensão acima do mínimo e regula normalmente os 12 V de saída.\n\n' +
      '**(c) Potência dissipada no CI:**\n' +
      'O regulador linear "queima" a diferença entre o que entra e o que sai, vezes a corrente:\n' +
      'P ≈ (VI − VO)·IL ≈ (17 − 12)·0,2 = **1 W**.\n' +
      '(Estimativa de pior caso, com VI = Vm ≈ 17 V; na prática a entrada média é um pouco menor por causa do ripple, e a dissipação fica logo abaixo de 1 W.)\n\n' +
      '**Resposta final:** (a) ≈ 17 V · (b) sim, pois 17 V > 14 V · (c) ≈ 1 W.\n\n' +
      '**Pegadinha:** comparar 12 Vrms (em vez dos 17 V de pico) com VImín — você concluiria erradamente que a fonte não regula.\n\n' +
      '**Regra prática:** num regulador linear a sobra (VI − VO) vira calor: P ≈ (VI − VO)·IL. Quanto maior a diferença, mais ele esquenta.',
    criterios: [
      'Converteu Vrms para Vm = Vrms × √2.',
      'Comparou Vm com VImín para concluir se o CI regula.',
      'Calculou P ≈ (VI − VO) × IL.',
    ],
    fonte: 'Slides Fontes Reguladas 1',
    armadilha: 'Confundir a tensão RMS do transformador com a tensão de pico que o capacitor de filtro carrega.',
  },
  {
    id: 'dis-04-01', tipo: 'discursiva', topico: '04-reguladores-integrados', dificuldade: 'medio',
    enunciado: 'Um circuito com LM317 tem tensão de saída mínima de 1,25 V e máxima de 8,75 V, e o CI tem corrente de polarização de 50 µA. Determine (a) a tensão regulada VREG do LM317 e (b) o valor do resistor variável Rx, sabendo que o resistor fixo vale Rx/5 (resistor inferior = Rx, superior = Rx/5 na montagem da lista).',
    imagem: '/imagens/cursos/det/04-lm317.webp',
    gabaritoComentado:
      '**O que cobra:** a equação do LM317 com a corrente de ajuste IQ — achar a tensão de referência e dimensionar o resistor de ajuste.\n\n' +
      '**No circuito:** R1 entre OUT e ADJ, R2 entre ADJ e o terra; vale VO = VREG·(1 + R2/R1) + IQ·R2, com IQ = 50 µA.\n\n' +
      '**(a) Tensão regulada VREG:**\n' +
      'A saída MÍNIMA do LM317 ocorre com o resistor de ajuste no mínimo (R2 → 0): aí VO = VREG·(1+0) + 0 = VREG. Como o enunciado dá VO_mín = 1,25 V, então **VREG = 1,25 V** (a própria referência interna do CI).\n\n' +
      '**(b) Resistor de ajuste Rx para VO_máx = 8,75 V:**\n' +
      'Leve a equação ao máximo e isole o resistor de ajuste, SEM esquecer o termo IQ·R2:\n' +
      '8,75 = 1,25·(1 + R2/R1) + (50 µA)·R2.\n' +
      'Resolvendo com os resistores da montagem da lista, chega-se a **Rx = 5 kΩ** (resposta oficial, Lista 2).\n\n' +
      '**Resposta final (Lista 2):** (a) VREG = 1,25 V · (b) Rx = 5 kΩ.\n\n' +
      '**Pegadinha:** esquecer o termo IQ·R2 — a corrente de ajuste (50 µA) foi dada justamente para entrar na conta. Sem ela, o resultado sai errado.\n\n' +
      '**Regra prática:** VO_mín do LM317 = VREG; para o resto, VO = VREG·(1 + R2/R1) + IQ·R2 — inclua IQ sempre que o enunciado o fornecer.',
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
    imagem: '/imagens/cursos/det/03-serie-paralelo.svg',
    gabaritoComentado:
      '**O que cobra:** entender que, num regulador série, VO é fixada pela REFERÊNCIA (Zener + divisor) e não pela entrada; depois, estimar a potência nos transistores.\n\n' +
      '**No circuito (lado SÉRIE):** Q1 é o transistor série que conduz a corrente da carga (IL) de VI até VO/RL; a referência Zener (9,3 V) com o divisor fixa o "alvo" de VO; Q2 é o transistor de controle, que compara a saída com a referência e comanda a base de Q1.\n\n' +
      '**(a) e (b) VO para VI = 62 V e VI = 50 V:**\n' +
      'A saída é amarrada pela malha de referência (Zener + divisor), NÃO pela entrada. Desde que VI seja suficiente para o circuito operar, VO não muda. Logo VO = **40 V** tanto para VI = 62 V quanto para VI = 50 V.\n\n' +
      '**(c) e (d) Potências para VI = 35 V e VO = 20 V:**\n' +
      'O transistor série Q1 sustenta a diferença (VI − VO) enquanto conduz a corrente de carga:\n' +
      'P_Q1 ≈ (VI − VO)·IL = (35 − 20)·IL. Com os valores do circuito (IL ≈ 43 mA), P_Q1 = **642 mW**.\n' +
      'O transistor de controle Q2 dissipa P_Q2 = **494 mW**.\n\n' +
      '**Resposta final (Lista 2):** (a) 40 V · (b) 40 V · (c) P_Q1 = 642 mW · (d) P_Q2 = 494 mW.\n\n' +
      '**Pegadinha:** supor que VO acompanha VI (daria 62 V e 50 V). Num regulador a saída fica TRAVADA pela referência.\n\n' +
      '**Regra prática:** VO do regulador = tensão da referência (ajustada pelo divisor); a entrada só precisa ser "alta o bastante". A sobra (VI − VO) vira calor no transistor série.',
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
    imagem: '/imagens/cursos/det/10-schmitt-circuito.webp',
    gabaritoComentado:
      '**O que cobra:** explicar o que é histerese e por que a saída não troca de estado no cruzamento por zero.\n\n' +
      '**No circuito:** Schmitt inversor — Vi entra em V−; a saída Vo realimenta o nó V+ por um divisor R1/R2, de modo que V+ = β·Vo, com β = R2/(R1+R2).\n\n' +
      '**O que é histerese:** é a existência de DOIS limiares distintos (UTP e LTP) em vez de um só. Por causa da realimentação POSITIVA, a referência V+ depende do ESTADO ATUAL da saída:\n' +
      '- saída alta → V+ = β·(+VCC) = UTP;\n' +
      '- saída baixa → V+ = β·(−VEE) = LTP.\n\n' +
      '**Por que não comuta no zero:** a saída só troca quando a entrada ULTRAPASSA o limiar VÁLIDO naquele momento — UTP enquanto sobe, LTP enquanto desce. Como UTP ≠ 0 e LTP ≠ 0, o cruzamento por zero não dispara nada. Isso dá "memória" ao circuito e imunidade a ruído: pequenas oscilações em torno de zero não conseguem comutar a saída.\n\n' +
      '**Pegadinha:** imaginar um único limiar em zero. São dois, e qual vale depende de a saída estar alta ou baixa.\n\n' +
      '**Regra prática:** realimentação positiva → V+ = β·Vo → dois limiares (UTP/LTP) → comutação só nos limiares, nunca no zero.',
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
    imagem: '/imagens/cursos/det/12-ujt-circuito.webp',
    gabaritoComentado:
      '**O que cobra:** dimensionar um oscilador de relaxação com UJT — repartir RBB, achar os níveis VK e VP e calcular o tempo de carga t1 (carga EXPONENCIAL por resistor).\n\n' +
      '**Dados:** η = 0,8; RBB = 9 kΩ; VCC = 12 V; R1 = 12 kΩ; C = 2 µF; VV = 1 V.\n\n' +
      '**No circuito:** R1 carrega o capacitor C ligado ao emissor; as bases B1/B2 têm as resistências internas RB1/RB2 (soma = RBB).\n\n' +
      '**Passo a passo:**\n' +
      '1. RB1 = η·RBB = 0,8·9k = **7,2 kΩ**.\n' +
      '2. RB2 = RBB − RB1 = 9k − 7,2k = **1,8 kΩ**.\n' +
      '3. VK = η·VCC = 0,8·12 = **9,6 V** (ponto interno entre as bases).\n' +
      '4. VP = VK + 0,7 = **10,3 V** (tensão de disparo do emissor).\n' +
      '5. Tempo de carga (exponencial, de VV até VP):\n' +
      't1 = R1·C·ln[(VCC − VV)/(VCC − VP)] = 12k·2µF·ln[(12 − 1)/(12 − 10,3)] = 0,024·ln(11/1,7) = 0,024·1,87 ≈ **44,8 ms**.\n\n' +
      '**Resposta final (slide):** RB1 = 7,2 kΩ · RB2 = 1,8 kΩ · VK = 9,6 V · VP = 10,3 V · t1 ≈ 44,8 ms.\n\n' +
      '**Pegadinha:** (1) esquecer o +0,7 V em VP; (2) usar a rampa LINEAR (dV/dt = I/C) — aqui a carga é por RESISTOR, então é exponencial; (3) usar RB1(OFF) na descarga.\n\n' +
      '**Regra prática:** UJT → RB1 = η·RBB; VP = η·VCC + 0,7; carga por resistor → t1 = R·C·ln[(VCC − VV)/(VCC − VP)].',
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
    imagem: '/imagens/cursos/det/09-555-astavel.webp',
    gabaritoComentado:
      '**O que cobra:** entender, pelo caminho da corrente, por que o tempo ALTO usa (RA+RB) e o BAIXO usa só RB.\n\n' +
      '**No circuito:** RA vai de +VCC ao nó entre RA e RB; RB vai desse nó ao capacitor C (pinos 6/2); o pino 7 (DESCARGA) liga o nó RA–RB ao terra quando a saída está baixa.\n\n' +
      '**Fase ALTA (capacitor carregando):**\n' +
      'A corrente vem de +VCC e atravessa RA e RB em SÉRIE até o capacitor. Por isso a carga usa os dois resistores:\n' +
      'T_ALTO = 0,7·(RA + RB)·C.\n\n' +
      '**Fase BAIXA (capacitor descarregando):**\n' +
      'O pino 7 entra em condução e abre um caminho ao terra a partir do nó entre RA e RB. O capacitor descarrega APENAS por RB:\n' +
      'T_BAIXO = 0,7·RB·C.\n\n' +
      '**Fechando:** T = T_ALTO + T_BAIXO; f = 1/T. Como a carga sempre passa por RA, o nível alto dura mais que o baixo — por isso o 555 básico não chega a 50% de duty.\n\n' +
      '**Pegadinha:** usar (RA+RB) também na descarga. Na descarga, RA fica "curto-circuitado" pelo pino 7 — só RB conta.\n\n' +
      '**Regra prática:** carga = pelos dois (RA+RB); descarga = só por RB (o pino 7 desvia RA).',
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
    imagem: '/imagens/cursos/det/q-scr-carga.webp',
    gabaritoComentado:
      '**O que cobra:** descrever a forma de onda da corrente na carga (IL) de um SCR alimentado por senoide e disparado no semiciclo positivo.\n\n' +
      '**No circuito:** a fonte V2 (senoide) alimenta o SCR (anodo A, catodo K) em série com a carga RL; um pulso na porta dispara o SCR. A queda de condução vale 1,5 V.\n\n' +
      '**Análise por trechos:**\n' +
      '1. **Semiciclo NEGATIVO:** o SCR está reversamente polarizado → não conduz. IL = 0 (um pulso de porta seria ignorado).\n' +
      '2. **Semiciclo POSITIVO, antes do pulso:** diretamente polarizado, mas ainda sem gatilho → bloqueado. IL = 0.\n' +
      '3. **A partir do PULSO:** o SCR liga e conduz; a corrente acompanha o restante da senoide, descontada a queda: IL = (V2 − 1,5)/RL.\n' +
      '4. **Fim do semiciclo:** quando a senoide cai e a corrente chega a zero, o SCR DESLIGA sozinho (corrente abaixo da retenção).\n\n' +
      '**Forma de onda:** IL é nula no semiciclo negativo e no começo do positivo; surge como um PEDAÇO da senoide, do disparo até a passagem por zero. O ângulo do pulso controla quanto da senoide passa (controle de potência por ângulo de disparo).\n\n' +
      '**Pegadinha:** desenhar a senoide inteira no semiciclo positivo. A corrente só existe DEPOIS do pulso — antes dele, IL = 0.\n\n' +
      '**Regra prática:** SCR em CA → conduz do disparo até a corrente zerar; desconte a queda de condução (IL = (V2 − queda)/RL).',
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
    imagem: '/imagens/cursos/det/06-limitador-circuito.webp',
    gabaritoComentado:
      '**O que cobra:** desenhar a saída de um limitador que ceifa o pico positivo no nível VDC + 0,7 V, analisando semiciclo a semiciclo.\n\n' +
      '**No circuito:** Vi entra por R até o nó A (= Vo); o ramo de ceifamento (diodo D em série com a fonte VDC) liga o nó A ao terra e só atua quando a tensão em A tenta passar de VDC + 0,7 V.\n\n' +
      '**Semiciclo NEGATIVO:** o diodo do ramo de ceifamento fica reverso (corta). Sem caminho de desvio, a saída ACOMPANHA a entrada, descendo até −Vpico.\n\n' +
      '**Semiciclo POSITIVO:**\n' +
      '- Enquanto Vi < VDC + 0,7, o diodo ainda está cortado → a saída acompanha a entrada (sobe junto).\n' +
      '- Quando Vi passa de VDC + 0,7, o diodo CONDUZ e prende o nó A nesse nível → a saída vira um PLATÔ em VDC + 0,7 V.\n\n' +
      '**Forma de onda:** senoide normal embaixo (até −Vpico) com o TOPO achatado num platô em VDC + 0,7 V. Mínimo = −Vpico; máximo = VDC + 0,7 V.\n\n' +
      '**Pegadinha:** ceifar no nível VDC "puro" (esquecendo os 0,7 V do diodo) ou achatar também o semiciclo negativo (que aqui passa intacto).\n\n' +
      '**Regra prática:** limitador → ache o nível de corte (VDC + 0,7), veja em que semiciclo o diodo conduz e marque o platô; o resto da onda passa.',
    criterios: [
      'Diodo corta no semiciclo negativo (saída acompanha a entrada).',
      'Platô em VDC + 0,7 V no semiciclo positivo.',
      'Marca máximo (VDC+0,7) e mínimo (−Vpico).',
    ],
    fonte: 'LinhaDoTempo (06) / Slides Limitadores e Grampeadores',
  },
  {
    id: 'dis-11-02', tipo: 'discursiva', topico: '11-tiristores-scr-diac-triac', dificuldade: 'dificil',
    enunciado: 'Oscilador com DIAC (S₁, VBR = 30 V): fonte de +50 V, R = 10 kΩ em série e C = 10 nF em paralelo com o DIAC. Determine a frequência do sinal de saída.',
    imagem: '/imagens/cursos/det/11-diac-oscilador.webp',
    gabaritoComentado:
      '**O que cobra:** a frequência de um oscilador de relaxação com DIAC — reconhecer carga EXPONENCIAL por resistor (não rampa linear) e usar VBR como alvo.\n\n' +
      '**No circuito:** a fonte de +50 V carrega C = 10 nF através de R = 10 kΩ; o DIAC (S₁, VBR = 30 V) fica em paralelo com C. Quando VC atinge VBR, o DIAC dispara e descarrega C quase instantaneamente; depois recomeça.\n\n' +
      '**Passo a passo:**\n' +
      '1. Constante de tempo: RC = 10 kΩ · 10 nF = 1×10⁻⁴ s.\n' +
      '2. Carga exponencial: VC = VCC·(1 − e^(−t/RC)). Alvo: VC = VBR = 30 V.\n' +
      '3. 30 = 50·(1 − e^(−t/RC)) → 0,6 = 1 − e^(−t/RC) → e^(−t/RC) = 0,4.\n' +
      '4. −t/RC = ln 0,4 = −0,916 → t = 0,916·10⁻⁴ ≈ 9,2×10⁻⁵ s.\n' +
      '5. f = 1/t ≈ **10,9 kHz**.\n\n' +
      '**Resposta final (oficial):** f ≈ 10,9 kHz.\n\n' +
      '**Pegadinha:** usar a fórmula LINEAR (dV/dt = I/C) da base de tempo. Aqui a carga é por RESISTOR → exponencial; e o alvo é VBR (30 V), não VCC (50 V).\n\n' +
      '**Regra prática:** oscilador com DIAC → carga exponencial por R até VBR; t = RC·ln[VCC/(VCC − VBR)] e f = 1/t.',
    criterios: [
      'Reconheceu carga exponencial por R (não dV/dt = I/C).',
      'Usou VBR = 30 V como alvo (não VCC).',
      'Chegou a f ≈ 10,9 kHz.',
    ],
    fonte: 'SOPA PP1 2021 — 2ª questão (gabarito oficial)',
    armadilha: 'Usar a fórmula linear (fonte de corrente); aqui a carga é por resistor.',
  },
  {
    id: 'dis-10-02', tipo: 'discursiva', topico: '10-schmitt-trigger', dificuldade: 'dificil',
    enunciado: 'Determine UTP e LTP de dois Schmitt (±12 V): (1) com Zener de 7 V em série com o divisor 10 kΩ/10 kΩ; (2) com dois diodos no divisor 15 kΩ/30 kΩ.',
    imagem: '/imagens/cursos/det/10-schmitt-zener.webp',
    gabaritoComentado:
      '**O que cobra:** achar UTP e LTP de dois Schmitt cujos limiares ficam ASSIMÉTRICOS por causa de Zener / diodos na realimentação — o truque é reavaliar a queda do componente conforme a saída está alta ou baixa.\n\n' +
      '**Circuito 1 (Zener de 7 V + divisor 10 kΩ / 10 kΩ, ±12 V):**\n' +
      '- Vo = +12 V → o Zener trabalha na região ZENER (cai 7 V); o que sobra é dividido pelo 10k/10k:\n' +
      '  UTP = (12 − 7)·10k/20k = 5·0,5 = **+2,5 V**.\n' +
      '- Vo = −12 V → o Zener conduz como diodo COMUM (0,7 V):\n' +
      '  LTP = (−12 + 0,7)·10k/20k = −11,3·0,5 = **−5,65 V**.\n\n' +
      '**Circuito 2 (dois diodos + divisor 15 kΩ / 30 kΩ, ±12 V):**\n' +
      '- Vo = +12 V → os diodos NÃO conduzem; vale o divisor puro:\n' +
      '  UTP = 12·30k/(15k+30k) = 12·(2/3) = **+8 V**.\n' +
      '- Vo = −12 V → os diodos CONDUZEM e grampeiam em duas quedas:\n' +
      '  LTP = 2·(−0,7) = **−1,4 V**.\n\n' +
      '**Resposta final (oficial):** C1 → UTP = +2,5 V, LTP = −5,65 V; C2 → UTP = +8 V, LTP = −1,4 V.\n\n' +
      '**Pegadinha:** supor limiares simétricos (UTP = −LTP). O Zener (7 V de um lado, 0,7 V do outro) e os diodos quebram a simetria — reavalie a queda em cada estado da saída.\n\n' +
      '**Regra prática:** com Zener/diodo na realimentação, calcule UTP e LTP SEPARADAMENTE, trocando a queda do componente conforme Vo esteja em +VCC ou −VEE.',
    criterios: [
      'Reavaliou a queda do componente conforme Vo (alta × baixa).',
      'Circuito 1: +2,5 V e −5,65 V.',
      'Circuito 2: +8 V e −1,4 V.',
    ],
    fonte: 'SOPA PP1 2021 — questão de Schmitt (gabarito oficial)',
    armadilha: 'Assumir limiares simétricos (UTP = −LTP): Zener/diodos os tornam assimétricos.',
  },
  {
    id: 'dis-13-01', tipo: 'discursiva', topico: '13-geradores-base-de-tempo', dificuldade: 'dificil',
    enunciado: 'Base de tempo com UJT: VCC = 12 V, divisor de base 8,1 kΩ/18 kΩ, resistor de emissor 6 kΩ (fonte de corrente PNP), UJT com η = 0,8 e VV = 0,8 V. Determine o capacitor C para frequência de 5 kHz.',
    imagem: '/imagens/cursos/det/13-base-tempo-circuito.webp',
    gabaritoComentado:
      '**O que cobra:** dimensionar o capacitor de uma base de tempo (fonte de corrente PNP + UJT) para uma dada frequência — junta divisor, transistor como fonte de corrente, níveis do UJT e rampa linear.\n\n' +
      '**Dados:** VCC = 12 V; divisor de base 8,1 kΩ / 18 kΩ; resistor de emissor Re = 6 kΩ; UJT com η = 0,8 e VV = 0,8 V; f = 5 kHz.\n\n' +
      '**No circuito:** o divisor 8,1k/18k fixa a base do PNP (Q); o PNP com Re forma a FONTE DE CORRENTE que carrega C linearmente; o UJT descarrega C ao atingir VP.\n\n' +
      '**1) Corrente da fonte (PNP):**\n' +
      'Vb = VCC·18k/(8,1k+18k) = 12·18/26,1 ≈ 8,3 V.\n' +
      'Ve = Vb + 0,7 = 9 V (PNP).\n' +
      'I = (VCC − Ve)/Re = (12 − 9)/6k = **0,5 mA**.\n\n' +
      '**2) Excursão da rampa (níveis do UJT):**\n' +
      'VP = η·VCC + 0,7 = 0,8·12 + 0,7 = 10,3 V; piso = VV = 0,8 V.\n' +
      'ΔV = VP − VV = 10,3 − 0,8 = **9,5 V**.\n\n' +
      '**3) Período:**\n' +
      'T = 1/f = 1/5000 = 0,2 ms = 2×10⁻⁴ s.\n\n' +
      '**4) Capacitor (rampa linear: I/C = ΔV/T):**\n' +
      'C = I·T/ΔV = (0,5×10⁻³ · 2×10⁻⁴)/9,5 = 1×10⁻⁷/9,5 ≈ 1,05×10⁻⁸ F = **10,5 nF**.\n\n' +
      '**Resposta final (oficial):** C ≈ 10,5 nF.\n\n' +
      '**Pegadinha:** usar a exponencial de RC (aqui a carga é por FONTE DE CORRENTE → rampa linear); esquecer o +0,7 V em VP; ou usar Ve = Vb − 0,7 (regra do NPN) num PNP.\n\n' +
      '**Regra prática:** base de tempo → ache I pela fonte de corrente, ΔV = VP − VV, T = 1/f e feche com C = I·T/ΔV.',
    criterios: [
      'Achou I = 0,5 mA pela fonte de corrente.',
      'VP = 10,3 V (= η·VCC + 0,7).',
      'Aplicou dV/dt = I/C e chegou a C = 10,5 nF.',
    ],
    fonte: 'SOPA PP1 2021 — 3ª questão (gabarito oficial)',
    armadilha: 'Usar exponencial RC; aqui a carga é por fonte de corrente (rampa linear).',
  },
  {
    id: 'dis-03-02', tipo: 'discursiva', topico: '03-reguladores-com-transistor', dificuldade: 'dificil',
    enunciado: 'Regulador série com proteção de corrente: resistor sensor RSC = 0,35 Ω; referência Zener (VZ = 1,8 V) com divisor 18 kΩ/18 kΩ. Determine (a) a corrente de curto-circuito; (b) Vo para VI = 17 V; (c) Vo para VI = 12 V.',
    gabaritoComentado:
      '**O que cobra:** um regulador série com proteção de corrente — achar a corrente de curto e mostrar que VO não depende de VI.\n\n' +
      '**Dados:** RSC = 0,35 Ω (sensor); referência Zener VZ = 1,8 V; divisor de realimentação 18 kΩ / 18 kΩ.\n\n' +
      '**(a) Corrente de curto-circuito:**\n' +
      'O transistor de proteção liga quando a queda no sensor chega a ≈ 0,7 V:\n' +
      'I_curto = 0,7 / RSC = 0,7 / 0,35 = **2 A**.\n\n' +
      '**(b) VO para VI = 17 V:**\n' +
      'VO é fixada pela referência, não pela entrada. A tensão de referência é VZ + VBE = 1,8 + 0,7 = 2,5 V, e o divisor 18k/18k a multiplica:\n' +
      'VO = (VZ + VBE)·(18k + 18k)/18k = 2,5 · 2 = **5 V**.\n\n' +
      '**(c) VO para VI = 12 V:**\n' +
      'Enquanto VI for suficiente para o regulador operar (12 V está acima de 5 V + folga), VO continua **5 V**. Cair de 17 para 12 V não altera a saída — só reduz a sobra que o transistor série dissipa.\n\n' +
      '**Resposta final:** (a) 2 A · (b) 5 V · (c) 5 V.\n\n' +
      '**Pegadinha:** achar que VO cai quando VI cai de 17 para 12 V. O regulador segura VO; o que muda é apenas o calor no transistor série.\n\n' +
      '**Regra prática:** I_curto = 0,7/RSC; VO = (VZ + 0,7)·(ganho do divisor). A entrada não entra nessas contas, desde que seja suficiente.',
    criterios: [
      'I_curto = 0,7/RSC = 2 A.',
      'Vo = 5 V pela referência (Zener + divisor).',
      'Vo não muda quando VI cai de 17 V para 12 V.',
    ],
    fonte: 'SOPA PP1 2021 — questão de regulador com limitador (gabarito oficial)',
    armadilha: 'Achar que Vo cai quando VI cai — o regulador mantém Vo constante.',
  },
  {
    id: 'dis-07-01', tipo: 'discursiva', topico: '07-grampeadores', dificuldade: 'medio',
    enunciado: 'Uma senoide de −10 V a +10 V passa por um grampeador NEGATIVO ideal (capacitor em série + diodo). Descreva a forma de onda de saída e explique o papel do capacitor nesse circuito.',
    imagem: '/imagens/cursos/det/07-grampeador-circuito.webp',
    gabaritoComentado:
      '**O que cobra:** descrever a saída de um grampeador NEGATIVO e explicar o papel do capacitor.\n\n' +
      '**No circuito:** o capacitor C fica em série com a entrada e o diodo D deriva o nó. (Atenção: a figura ilustra o grampeador POSITIVO — no NEGATIVO o diodo está invertido, de modo que C se carrega no semiciclo positivo e passa a SUBTRAIR da entrada.)\n\n' +
      '**Funcionamento, passo a passo:**\n' +
      '1. No semiciclo POSITIVO o diodo conduz e carrega C até o pico Vm = 10 V.\n' +
      '2. Depois, C age como fonte DC de 10 V em série, mas SUBTRAINDO da entrada: VO = Vi − 10 V.\n' +
      '3. Mínimo: −10 − 10 = **−20 V**. Máximo: +10 − 10 = **0 V**.\n\n' +
      '**Forma de onda:** a mesma senoide, sem deformação, deslocada para baixo — de −20 V a 0 V (pico-a-pico continua 20 V).\n\n' +
      '**Papel do capacitor:** ele MEMORIZA o valor de pico da entrada e o mantém como um nível DC constante em série, "empurrando" toda a onda para baixo sem mudar a forma.\n\n' +
      '**Resposta final:** saída de −20 V a 0 V; o capacitor é a "memória" do pico (fonte DC em série).\n\n' +
      '**Pegadinha:** dizer que a forma muda. O grampeador só desloca o nível médio; a forma e os 20 V pico-a-pico continuam iguais.\n\n' +
      '**Regra prática:** grampeador negativo → VO = Vi − Vm (máximo vai a 0, mínimo a −2Vm).',
    criterios: [
      'Onda deslocada de −20 V a 0 V (saída = entrada − 10 V).',
      'Forma preservada (sem deformação).',
      'Explicou o capacitor como "memória" do pico (fonte DC em série).',
    ],
    fonte: 'Slides Limitadores e Grampeadores / LinhaDoTempo (07)',
    armadilha: 'Dizer que a forma da onda muda — o grampeador apenas desloca o nível médio.',
  },
  {
    id: 'dis-06-02', tipo: 'discursiva', topico: '06-limitadores', dificuldade: 'medio',
    enunciado: 'Limitador ativo: amp-op (±15 V) com diodo e referência de 4 V; entrada triangular de ±2 V. Determine os valores máximo e mínimo da saída Vo.',
    gabaritoComentado:
      '**O que cobra:** os dois patamares de saída de um limitador ATIVO (amp-op + diodo + referência) — máximo e mínimo.\n\n' +
      '**Dados:** amp-op alimentado em ±15 V; referência de +4 V; diodo; entrada triangular de ±2 V.\n\n' +
      '**Ideia:** num limitador ativo, o amp-op força a saída a respeitar dois limites independentes — um fixado pela REFERÊNCIA, outro pela condução do DIODO. A saída alterna entre esses dois patamares conforme a entrada sobe e desce; ela NÃO é proporcional (é ceifada).\n\n' +
      '**Patamares:**\n' +
      '- Máximo: fixado pela referência → **+4 V**.\n' +
      '- Mínimo: fixado pela queda de condução do diodo → **−0,7 V**.\n\n' +
      '**Resposta final (oficial):** Vo varia entre +4 V (máximo) e −0,7 V (mínimo).\n\n' +
      '**Pegadinha:** tentar calcular uma saída PROPORCIONAL à triangular de ±2 V. O circuito limita (ceifa), então a saída fica entre dois níveis fixos, não segue a triangular.\n\n' +
      '**Regra prática:** limitador ativo → identifique o que fixa cada extremo (referência de um lado, queda do diodo do outro).',
    criterios: [
      'Máximo = +4 V (fixado pela referência).',
      'Mínimo = −0,7 V (queda do diodo).',
      'Saída ceifada (patamares), não proporcional.',
    ],
    fonte: 'SOPA PP1 2021 — questão de limitador ativo (gabarito oficial)',
  },
  {
    id: 'dis-08-01', tipo: 'discursiva', topico: '08-comparadores', dificuldade: 'facil',
    enunciado: 'Explique, com base no funcionamento do amp-op em malha aberta, por que a saída de um comparador é sempre retangular (nunca proporcional à diferença de entradas). Em seguida, descreva como ele funciona como detector de cruzamento por zero de uma senoide.',
    imagem: '/imagens/cursos/det/08-comparador-circuito.webp',
    gabaritoComentado:
      '**O que cobra:** (1) por que a saída de um comparador é sempre retangular e (2) como ele detecta o cruzamento por zero de uma senoide.\n\n' +
      '**No circuito:** o sinal entra em V+ (Vi) e a referência em V− (Vref); a saída Vo oscila entre +VCC e −VEE.\n\n' +
      '**(1) Por que a saída é retangular:**\n' +
      'O amp-op em malha aberta tem ganho de tensão altíssimo (100 000× ou mais). Mesmo a menor diferença entre V+ e V− gera uma saída que estoura os trilhos da alimentação — ele SATURA em +VCC (se V+ > V−) ou −VEE (se V+ < V−). Como nunca fica no meio, a saída só tem dois níveis: é retangular.\n\n' +
      '**(2) Detector de cruzamento por zero:**\n' +
      'Liga-se a referência V− ao terra (Vref = 0 V) e a senoide a V+.\n' +
      '- Quando a senoide cruza o zero subindo (V+ passa de − para +), V+ > V− e a saída COMUTA para +VCC.\n' +
      '- Quando cruza o zero descendo (V+ passa de + para −), V+ < V− e a saída volta a −VEE.\n' +
      'Resultado: uma onda quadrada cujas transições marcam exatamente os cruzamentos por zero da senoide.\n\n' +
      '**Pegadinha:** achar que a saída "acompanha" a amplitude da senoide. Não — ela só registra o SINAL da diferença (acima/abaixo da referência).\n\n' +
      '**Regra prática:** comparador com Vref = 0 → "carimba" cada cruzamento por zero, virando a senoide em onda quadrada.',
    criterios: [
      'Ganho altíssimo leva à saturação — nunca resposta proporcional.',
      'Referência em zero e sinal em V+ → detecção do cruzamento.',
      'Saída comuta de +VCC para −VEE nos cruzamentos por zero.',
    ],
    fonte: 'Slides Multivibradores e Comparadores / LinhaDoTempo (08)',
  },
  {
    id: 'dis-05-01', tipo: 'discursiva', topico: '05-reguladores-chaveados-pwm', dificuldade: 'medio',
    enunciado: 'Um conversor buck ideal é alimentado com VIN = 20 V. O divisor de realimentação tem R1 = 8 kΩ (inferior) e R2 = 24 kΩ (superior), e a referência interna é VREF = 4 V. (a) Determine VOUT em regime regulado. (b) Determine o ciclo de trabalho D.',
    imagem: '/imagens/cursos/det/05-pwm.webp',
    gabaritoComentado:
      '**O que cobra:** num buck com realimentação, achar VOUT (definido pelo divisor + VREF) e depois o ciclo de trabalho D.\n\n' +
      '**Dados:** VIN = 20 V; divisor de realimentação R1 = 8 kΩ (inferior) e R2 = 24 kΩ (superior); referência VREF = 4 V.\n\n' +
      '**Ideia-chave:** o controlador ajusta D até que a tensão amostrada pelo divisor (VFB) iguale a referência: VFB = VREF. O divisor "mostra" ao controlador uma fração de VOUT.\n\n' +
      '**(a) Tensão de saída VOUT:**\n' +
      'VFB = VOUT · R1/(R1+R2) = VREF.\n' +
      'VOUT = VREF · (R1+R2)/R1 = 4 · (8k + 24k)/8k = 4 · 4 = **16 V**.\n\n' +
      '**(b) Ciclo de trabalho D:**\n' +
      'Buck ideal: VOUT = D·VIN → D = VOUT/VIN = 16/20 = **0,8** (80%).\n\n' +
      '**Resposta final (slide):** VOUT = 16 V · D = 0,8.\n\n' +
      '**Pegadinha:** achar que a frequência varia para regular. No PWM a frequência é CONSTANTE; o que o controlador muda é o duty D (ton/T).\n\n' +
      '**Regra prática:** em regime, VFB = VREF → VOUT = VREF·(R1+R2)/R1; depois D = VOUT/VIN.',
    criterios: [
      'Em regime: VFB = VREF → VOUT = VREF·(R1+R2)/R1 = 16 V.',
      'D = VOUT/VIN = 0,8 (80%).',
      'Não confundiu a frequência fixa com o que varia (D/ton).',
    ],
    fonte: 'Slides Fontes Reguladas 3 (Exemplo do slide, VOUT=16 V, D=0,8)',
    armadilha: 'Achar que a frequência varia para regular — no PWM, a frequência é CONSTANTE; varia o duty.',
  },
  {
    id: 'dis-09-02', tipo: 'discursiva', topico: '09-multivibradores-555', dificuldade: 'medio',
    enunciado: 'Dois CI 555: o primeiro em monoestável e o segundo em astável, com a saída do monoestável habilitando o astável. Explique o comportamento da saída e em que intervalo o astável oscila.',
    imagem: '/imagens/cursos/det/q-dois-555.webp',
    gabaritoComentado:
      '**O que cobra:** entender uma cascata de dois 555 — um monoestável que HABILITA um astável — e dizer quando aparece oscilação na saída.\n\n' +
      '**No circuito:** o 555 #1 está em MONOESTÁVEL; sua saída (pino 3) vai ao pino 4 (RESET) do 555 #2, em ASTÁVEL. Com o RESET do #2 em nível alto (habilitado), ele oscila; em nível baixo, fica desabilitado (saída em repouso).\n\n' +
      '**Comportamento, passo a passo:**\n' +
      '1. Um disparo no #1 gera um pulso de largura LP = 1,1·RA·C.\n' +
      '2. Durante esse pulso, o #2 fica HABILITADO e oscila, produzindo a onda retangular na saída.\n' +
      '3. Terminado o pulso do #1, o #2 é desabilitado (RESET baixo) e a saída para.\n\n' +
      '**Na SOPA:** o pulso do monoestável habilita o astável na janela de ≈ 2 s a 7 s — só nesse intervalo aparece oscilação na saída.\n\n' +
      '**Ideia central:** monoestável = "janela de tempo" (quanto dura); astável = oscilador que só funciona DENTRO dessa janela.\n\n' +
      '**Pegadinha:** achar que o astável oscila o tempo todo. Ele só oscila enquanto o monoestável o mantém habilitado (RESET alto).\n\n' +
      '**Regra prática:** monoestável define QUANDO/por quanto tempo; o astável habilitado define O QUE oscila nesse meio-tempo.',
    criterios: [
      'Monoestável define a janela (LP = 1,1·R·C).',
      'Astável só oscila enquanto habilitado.',
      'Fora da janela, saída em repouso.',
    ],
    fonte: 'SOPA PP1 2021 — 1ª questão (gabarito oficial)',
  },
  {
    id: 'dis-00-01', tipo: 'discursiva', topico: '00-ideia-central-da-prova', dificuldade: 'facil',
    enunciado: 'Para cada descrição abaixo, identifique a família de circuito e explique (em uma frase) o que a questão de prova costuma pedir sobre ele: (a) circuito com capacitor em série e diodo derivando a carga; (b) circuito com amp-op sem realimentação, duas entradas e saída que vai a ±VCC; (c) circuito com transistor no caminho da corrente, Zener na base como referência, e saída CC estável.',
    gabaritoComentado:
      '**O que cobra:** reconhecer a família de três circuitos só pela descrição e dizer o que a prova costuma perguntar de cada um.\n\n' +
      '**(a) Capacitor em série + diodo derivando a carga → Grampeador.** A "impressão digital" é o capacitor em série (memoriza o pico e vira fonte CC). A prova pede a FORMA DE ONDA de saída (mesma forma, deslocada em DC) e os valores máximo e mínimo após o deslocamento.\n\n' +
      '**(b) Amp-op sem realimentação, duas entradas, saída a ±VCC → Comparador.** Sem realimentação o ganho enorme satura a saída. A prova pede a forma de onda (onda quadrada) e EM QUE CONDIÇÃO ela fica em +VCC ou −VEE (comparando V+ com V−).\n\n' +
      '**(c) Transistor no caminho da corrente + Zener na base + saída CC estável → Regulador série com transistor.** A prova pede VO (tensão regulada, fixada pela referência), IL (corrente de carga) e, às vezes, a potência dissipada em Q1 ≈ (VI − VO)·IL.\n\n' +
      '**Pegadinha:** confundir (a) grampeador (preserva a forma, só desloca) com um limitador (corta a forma). O capacitor em série é o que decide.\n\n' +
      '**Regra prática:** ligue cada "assinatura" de topologia à pergunta típica — assim você antecipa a conta antes mesmo de ver os números.',
    criterios: [
      '(a) Identificou grampeador e citou deslocamento de DC (máximo/mínimo).',
      '(b) Identificou comparador e citou saída quadrada (±VCC) com condição de disparo.',
      '(c) Identificou regulador série e citou VO constante / potência em Q1.',
    ],
    fonte: 'LinhaDoTempo (00) — visão geral da PP1',
    armadilha: 'Confundir grampeador (preserva a forma) com limitador (corta a forma).',
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

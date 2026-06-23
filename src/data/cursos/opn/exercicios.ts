import type { Questao } from '@tipos/question';
export type { Questao } from '@tipos/question';
import {
  multiplaEscolha, verdadeiroFalso, correlacionar, discursivas,
} from './banco-geral';

// ─────────────────────────────────────────────────────────────────────────────
// BANCO GERAL — página /opn/questoes. POPULADO a partir da pasta independente
// ../OPN/EXERCÍCIOS (Fácil/Médio/Difícil), transcrito em ./banco-geral.ts.
//
// IMPORTANTE: as questões de exemplo das mini-matérias vivem em `perTopico`
// (mais abaixo) e NÃO entram aqui — os dois bancos nunca se misturam (mesmo
// padrão adotado no curso ING-4).
// ─────────────────────────────────────────────────────────────────────────────
export { multiplaEscolha, verdadeiroFalso, correlacionar, discursivas };

export const todasQuestoes: Questao[] = [
  ...multiplaEscolha, ...verdadeiroFalso, ...correlacionar, ...discursivas,
];

export const totalQuestoes = {
  multipla: multiplaEscolha.length,
  vf: verdadeiroFalso.length,
  correlacione: correlacionar.length,
  discursiva: discursivas.length,
};

// ─────────────────────────────────────────────────────────────────────────────
// QUESTÕES DE EXEMPLO POR TÓPICO ("perTopico"). São parte da AULA de cada
// mini-matéria (finalidade didática) e aparecem na seção "Exercícios" da própria
// matéria, via questoesPorTopico(). NÃO são exportadas e NÃO entram em
// todasQuestoes — por isso não aparecem no banco geral nem nos simulados.
// ─────────────────────────────────────────────────────────────────────────────
const perTopico: Questao[] = [
  // ── 00 — Introdução e mapa da prova ──
  {
    id: 'opn-ex-00-01',
    tipo: 'multipla',
    topico: '00-introducao-e-mapa-da-prova',
    enunciado:
      'Faltam dez minutos para o fim da prova e você ainda tem pendentes: um item de pergunta direta, a explicação de uma manobra tática e um problema de cálculo do rumo e da velocidade de um contato na Rosa. Considerando apenas a pontuação, qual deles tem o MAIOR valor isolado?',
    alternativas: [
      'O item de pergunta direta (0,2 ponto)',
      'A explicação de uma manobra tática',
      'O problema de rumo e velocidade do contato (Rosa)',
      'Os três valem o mesmo',
    ],
    correta: 2,
    conceito: 'Distribuição de pontos da PP1',
    comentario:
      'C) O problema de contato da Rosa vale 1,2 ponto. A explicação de uma manobra vale ~0,75 (a Q4 pede duas manobras por 1,5) e a pergunta direta, 0,2. Em recuperação de ponto a Rosa rende mais — desde que sobre tempo para plotar com cuidado. A) e B) valem menos; D) ignora os pesos distintos das questões.',
    fonte: 'Orientações do Professor — OPN 1/PP1 (distribuição da pontuação).',
    armadilha: 'Resolver primeiro o item "rápido" (a direta) e deixar o item mais valioso sem tempo de plotagem.',
  },
  {
    id: 'opn-ex-00-02',
    tipo: 'vf',
    topico: '00-introducao-e-mapa-da-prova',
    afirmacao:
      'Por estar entre os conteúdos excluídos pelo professor, o Campo de Atuação do Poder Naval "Segurança Marítima" não será cobrado na PP1.',
    correta: false,
    comentario:
      'Falso. O que foi excluído foi a OPERAÇÃO de Segurança Marítima (alínea do inciso 1.71). O CAMPO DE ATUAÇÃO "Segurança Marítima" permanece cobrado na UE1. Confundir os dois leva o aluno a deixar de estudar um campo que cai.',
    fonte: 'Orientações do Professor — OPN 1/PP1 (conteúdo excluído da UE1).',
    armadilha: 'Tratar "Segurança Marítima" como um bloco único e riscar o campo junto com a operação.',
  },
  {
    id: 'opn-ex-00-03',
    tipo: 'discursiva',
    topico: '00-introducao-e-mapa-da-prova',
    contexto: 'Um Aspirante vai montar a estratégia de tempo para os 160 minutos da PP1.',
    enunciado:
      'Justifique, com base na distribuição da pontuação, por que é recomendável reservar a maior fatia de tempo para a Questão 3 (Rosa de Manobras), e não para as questões conceituais.',
    gabaritoComentado:
      'A Q3 (Rosa) vale 3,7 pontos — o maior peso da prova — e é a que mais depende de execução gráfica (plotagem com régua e compasso), portanto a mais sujeita a erro mecânico: escala trocada, recíproca, sentido do vetor e hora esquecida. As questões conceituais (Q1 + Q2 = 2,0) cobram memória e leitura e rendem menos por minuto. Reservar ~65 min à Rosa protege o maior peso da prova contra o erro de pressa.',
    criterios: [
      'Citar que a Q3 (Rosa) vale 3,7 — o maior peso.',
      'Associar a Rosa a erro mecânico / execução gráfica que exige tempo.',
      'Comparar com o peso menor das questões conceituais (2,0).',
    ],
    fonte: 'Orientações do Professor — OPN 1/PP1; Linha do Tempo (estratégia de 160 min).',
  },

  // ── 01 — Poder Marítimo e Poder Naval ──
  {
    id: 'opn-ex-01-01',
    tipo: 'discursiva',
    topico: '01-poder-maritimo-e-poder-naval',
    contexto:
      'Durante uma crise marítima, o Estado mobiliza ao mesmo tempo: os portos e terminais da costa, navios mercantes para transporte logístico, institutos de pesquisa oceanográfica e uma força-tarefa de fragatas com fuzileiros navais embarcados.',
    enunciado:
      'Classifique cada um desses elementos como Poder Marítimo e/ou Poder Naval, justificando a diferença conceitual entre os dois.',
    gabaritoComentado:
      'Os quatro são elementos do PODER MARÍTIMO, pois integram o conjunto de recursos da Nação para o uso do mar e das águas interiores. Apenas a força-tarefa de fragatas com fuzileiros é, simultaneamente, PODER NAVAL — o componente MILITAR do Poder Marítimo e da Expressão Militar do Poder Nacional. Portos, navios mercantes e institutos de pesquisa são Poder Marítimo, mas não Poder Naval. Diferença: Marítimo é o todo do mar (função político-militar e econômico-social); Naval é a parcela militar, capaz de atuar no mar, nas águas interiores, em áreas terrestres limitadas e no espaço aéreo sobrejacente.',
    criterios: [
      'Reconhecer que TODOS os elementos são Poder Marítimo.',
      'Isolar a força-tarefa de fragatas/fuzileiros como o único que também é Poder Naval.',
      'Justificar com "Marítimo = todo do mar; Naval = militar do mar".',
    ],
    fonte: 'Apostila EN-131, itens 1.2.1 e 1.2.2.',
    armadilha: 'Classificar navios mercantes ou portos como Poder Naval só por estarem "no mar".',
  },
  {
    id: 'opn-ex-01-02',
    tipo: 'multipla',
    topico: '01-poder-maritimo-e-poder-naval',
    enunciado:
      'Diante de uma nova missão, o Comando da Esquadra decide constituir um Grupo-Tarefa de porte intermediário — nem um navio isolado, nem toda a Esquadra. Essa possibilidade de dimensionar a força conforme a missão ilustra qual característica do Poder Naval?',
    alternativas: ['Mobilidade', 'Permanência', 'Versatilidade', 'Flexibilidade'],
    correta: 3,
    conceito: 'Flexibilidade = organizar grupamentos de diferentes valores',
    comentario:
      'D) Flexibilidade é organizar grupamentos operativos de diferentes valores, em função da missão (a "força montada"). A) Mobilidade é deslocar-se prontamente; B) Permanência é operar por longos períodos; C) Versatilidade é mudar de postura/tarefa (a "função executada") — e não dimensionar a força.',
    fonte: 'Apostila EN-131, item 1.3.',
    armadilha: 'Marcar Versatilidade, que é mudar de tarefa — e não montar/dimensionar a força.',
  },
  {
    id: 'opn-ex-01-03',
    tipo: 'vf',
    topico: '01-poder-maritimo-e-poder-naval',
    afirmacao:
      'O Poder Naval é capaz de atuar exclusivamente no mar e nas águas interiores, não alcançando áreas terrestres.',
    correta: false,
    comentario:
      'Falso. Pela Apostila, o Poder Naval atua no mar, nas águas interiores, em CERTAS ÁREAS TERRESTRES LIMITADAS de interesse para as operações navais e no ESPAÇO AÉREO SOBREJACENTE. "Exclusivamente no mar" é definição incompleta.',
    fonte: 'Apostila EN-131, item 1.2.2.',
    armadilha: 'A palavra "exclusivamente" — quase sempre torna falsa a definição de alcance do Poder Naval.',
  },
  {
    id: 'opn-ex-01-04',
    tipo: 'correlacione',
    topico: '01-poder-maritimo-e-poder-naval',
    titulo: 'Associe cada característica do Poder Naval à sua definição.',
    chaves: [
      { chave: 'MOB', texto: 'Mobilidade' },
      { chave: 'PERM', texto: 'Permanência' },
      { chave: 'FLEX', texto: 'Flexibilidade' },
      { chave: 'VERS', texto: 'Versatilidade' },
    ],
    itens: [
      { texto: 'Deslocar-se prontamente e a grandes distâncias, mantendo elevado nível de prontidão.', chave: 'MOB' },
      { texto: 'Operar continuamente, com independência e por longos períodos, em áreas distantes.', chave: 'PERM' },
      { texto: 'Organizar grupamentos operativos de diferentes valores, em função da missão.', chave: 'FLEX' },
      { texto: 'Alterar a postura militar, mantendo a aptidão para executar uma ampla gama de tarefas.', chave: 'VERS' },
    ],
    fonte: 'Apostila EN-131, item 1.3.',
  },

  // ── 02 — Missão, Campos de Atuação e Tarefas Básicas ──
  {
    id: 'opn-ex-02-01',
    tipo: 'vf',
    topico: '02-missao-campos-e-tarefas-do-poder-naval',
    afirmacao:
      'O Campo de Atuação "Segurança Marítima" divide-se em duas vertentes: Proteção Marítima e Diplomacia Naval.',
    correta: false,
    comentario:
      'Falso. As vertentes da Segurança Marítima são Proteção Marítima (emprego coercitivo / fiscalização de leis nas AJB) e Segurança da Navegação Aquaviária (atribuições da Autoridade Marítima, SAR, salvaguarda da vida). A Diplomacia Naval é outro CAPN — ligado ao apoio à política externa —, não uma vertente.',
    fonte: 'Apostila EN-131, item 1.5.',
    armadilha: 'Trocar "Segurança da Navegação Aquaviária" por "Diplomacia Naval".',
  },
  {
    id: 'opn-ex-02-02',
    tipo: 'multipla',
    topico: '02-missao-campos-e-tarefas-do-poder-naval',
    enunciado:
      'Um navio-patrulha aborda, nas Águas Jurisdicionais Brasileiras, uma embarcação suspeita de pesca ilegal e a conduz para autuação, em emprego coercitivo do Poder Naval. Essa atuação corresponde, respectivamente, a qual Campo de Atuação e qual Tarefa Básica?',
    alternativas: [
      'Defesa Naval; Negar o uso do mar',
      'Segurança Marítima; Realizar Proteção Marítima',
      'Diplomacia Naval; Projetar Poder',
      'Apoio às Ações do Estado; Contribuir para o Desenvolvimento Nacional',
    ],
    correta: 1,
    conceito: 'Proteção Marítima: vertente da Segurança Marítima e Tarefa Básica',
    comentario:
      'B) Fiscalizar o cumprimento de leis nas AJB por emprego coercitivo é a vertente Proteção Marítima do CAPN Segurança Marítima — e também a TBPN "Realizar Proteção Marítima". A) Defesa Naval/Negar é contra força antagônica estatal; C) Diplomacia Naval é apoio à política externa; D) Contribuir é cooperação com políticas nacionais. Nenhuma descreve fiscalização coercitiva nas AJB.',
    fonte: 'Apostila EN-131, itens 1.5 e 1.6.',
    armadilha: 'Marcar Defesa Naval por haver "uso da força" — aqui é uso limitado/coercitivo, típico da Segurança Marítima.',
  },
  {
    id: 'opn-ex-02-03',
    tipo: 'discursiva',
    topico: '02-missao-campos-e-tarefas-do-poder-naval',
    contexto:
      'Uma força naval recebe a tarefa de impedir que navios de uma força antagônica utilizem determinada área marítima e, em seguida, assegurar que a navegação mercante amiga possa cruzá-la.',
    enunciado:
      'Identifique, na ordem, as duas Tarefas Básicas do Poder Naval envolvidas e explique a relação entre elas.',
    gabaritoComentado:
      'Primeiro "Negar o uso do mar" — impedir que a força antagônica use a área (negação de área); depois "Controlar áreas marítimas e águas interiores" — assegurar o uso próprio (navegação amiga). Relação: na gradação do uso da força, negar é mais alta que controlar, e negar costuma ser tarefa prévia de controlar — só se assegura o uso próprio depois de impedir o uso pelo inimigo. Síntese: negar = o inimigo não usa; controlar = nós usamos.',
    criterios: [
      'Identificar "Negar" e, na sequência, "Controlar".',
      'Explicar que negar é de gradação mais alta e tarefa prévia de controlar.',
      'Sintetizar com "inimigo não usa × nós usamos".',
    ],
    fonte: 'Apostila EN-131, item 1.6.',
  },
  {
    id: 'opn-ex-02-04',
    tipo: 'correlacione',
    topico: '02-missao-campos-e-tarefas-do-poder-naval',
    titulo: 'Associe cada Campo de Atuação do Poder Naval ao propósito da Missão da MB que lhe dá origem.',
    chaves: [
      { chave: 'DEF', texto: 'Defesa Naval' },
      { chave: 'SEG', texto: 'Segurança Marítima' },
      { chave: 'DIP', texto: 'Diplomacia Naval' },
      { chave: 'APO', texto: 'Apoio às Ações do Estado' },
    ],
    itens: [
      { texto: 'Defesa da Pátria.', chave: 'DEF' },
      { texto: 'Apoio à Política Externa.', chave: 'DIP' },
      { texto: 'Atribuições subsidiárias (uso limitado da força): vigilância e patrulha das AJB.', chave: 'SEG' },
      { texto: 'Garantia dos poderes/lei e ordem e cooperação com outros órgãos do Estado.', chave: 'APO' },
    ],
    fonte: 'Apostila EN-131, itens 1.4 e 1.5.',
  },

  // ── 03 — Operações, Ações e Atividades Navais ──
  {
    id: 'opn-ex-03-01',
    tipo: 'multipla',
    topico: '03-operacoes-acoes-e-atividades-navais',
    enunciado:
      'Em um exercício, uma fragata e uma aeronave de patrulha empregam sonar e torpedos contra um submarino inimigo, na porção submersa do ambiente operacional, para proteger as Linhas de Comunicação Marítima. Esse emprego é classificado como:',
    alternativas: [
      'Ação Naval de Superfície',
      'Operação Antissubmarino',
      'Atividade Naval de Inspeção',
      'Forma Transversal de Guerra Eletrônica',
    ],
    correta: 1,
    conceito: 'Classificação do emprego do Poder Naval',
    comentario:
      'B) É uma Operação Antissubmarino: conjunto de ações cinéticas e não cinéticas com foco na porção submersa, contra submarinos, para proteger as LCM. A) Ação de Superfície atua na superfície contra meios de superfície; C) Inspeção Naval é atividade de fiscalização; D) Guerra Eletrônica é forma transversal (espectro eletromagnético).',
    fonte: 'Apostila EN-131, item 1.7.1.',
    armadilha: 'Marcar "Ação" só por envolver torpedos — o conjunto com efeito/missão é uma Operação.',
  },
  {
    id: 'opn-ex-03-02',
    tipo: 'vf',
    topico: '03-operacoes-acoes-e-atividades-navais',
    afirmacao:
      'A Guerra Eletrônica é classificada como uma Operação Naval, pois emprega meios para reduzir a capacidade de combate do oponente.',
    correta: false,
    comentario:
      'Falso. A Guerra Eletrônica é uma FORMA TRANSVERSAL de emprego do Poder Naval — atravessa Operações, Ações e Atividades para obter superioridade no espectro eletromagnético. Não é Operação nem Ação.',
    fonte: 'Apostila EN-131, item 1.8.',
    armadilha: 'Associar "reduzir a capacidade do oponente" automaticamente a uma Operação.',
  },
  {
    id: 'opn-ex-03-03',
    tipo: 'correlacione',
    topico: '03-operacoes-acoes-e-atividades-navais',
    titulo: 'Classifique cada exemplo na categoria correta de emprego do Poder Naval.',
    chaves: [
      { chave: 'OP', texto: 'Operação Naval' },
      { chave: 'AC', texto: 'Ação Naval' },
      { chave: 'AT', texto: 'Atividade Naval' },
      { chave: 'FT', texto: 'Forma Transversal' },
    ],
    itens: [
      { texto: 'Operação de Ataque contra a rede de C2 inimiga.', chave: 'OP' },
      { texto: 'Defesa Antiaérea contra mísseis e aeronaves inimigas, por TTP padronizados.', chave: 'AC' },
      { texto: 'Levantamento hidroceanográfico por pessoal técnico qualificado.', chave: 'AT' },
      { texto: 'Emprego de energia eletromagnética para negar ao oponente o uso do espectro.', chave: 'FT' },
    ],
    fonte: 'Apostila EN-131, itens 1.7 e 1.8.',
  },
  {
    id: 'opn-ex-03-04',
    tipo: 'discursiva',
    topico: '03-operacoes-acoes-e-atividades-navais',
    contexto:
      'Em uma campanha, a Força Naval conduz uma Operação Antissubmarino; dentro dela, navios executam tarefas padronizadas de varredura e, em paralelo, especialistas realizam levantamento hidroceanográfico para apoiar o emprego do sonar.',
    enunciado:
      'Classifique a Operação Antissubmarino, a varredura padronizada e o levantamento hidroceanográfico nas categorias de emprego do Poder Naval, justificando cada uma.',
    gabaritoComentado:
      'A Operação Antissubmarino é uma OPERAÇÃO NAVAL — conjunto de ações táticas com efeito ligado a CAPN/TBPN. A varredura padronizada é uma AÇÃO NAVAL — tarefa típica da operação, executada por TTP padronizados. O levantamento hidroceanográfico é uma ATIVIDADE NAVAL — técnica de pessoal qualificado, que fornece produto especializado e pode ocorrer de forma independente. Síntese: operação = efeito/missão; ação = TTP; atividade = técnica especializada.',
    criterios: [
      'Operação Antissubmarino = Operação Naval (efeito/missão).',
      'Varredura padronizada = Ação Naval (TTP).',
      'Levantamento hidroceanográfico = Atividade Naval (técnica de especialista).',
    ],
    fonte: 'Apostila EN-131, item 1.7.',
  },

  // ── 04 — Documentos Operativos e Diretivas ──
  {
    id: 'opn-ex-04-01',
    tipo: 'vf',
    topico: '04-documentos-operativos-e-diretivas',
    afirmacao:
      'Por se tratar de uma diretiva de execução, a Ordem de Operação pode conter Hipóteses Básicas, desde que o Comandante preveja um Plano Contingente.',
    correta: false,
    comentario:
      'Falso. A Ordem de Operação é ordem EFETIVA de execução (operação imediata ou em futuro próximo) e, por isso, NÃO contém Hipóteses Básicas. A HB é própria do Plano de Operação (futuro não imediato); se a HB não se concretiza, entra o Plano Contingente — relacionado ao Plano, não à Ordem.',
    fonte: 'Apostila EN-131, item 2.2.1.5.',
    armadilha: 'Misturar o Plano Contingente (ligado ao Plano) com a Ordem de Operação.',
  },
  {
    id: 'opn-ex-04-02',
    tipo: 'multipla',
    topico: '04-documentos-operativos-e-diretivas',
    enunciado:
      'Um Comando precisa deslocar três navios para outro porto, por motivos exclusivamente logísticos e de adestramento, sem qualquer solução de problema militar. Dado o pequeno vulto da movimentação, qual diretiva é a mais adequada?',
    alternativas: [
      'Ordem de Operação',
      'Plano de Operação',
      'Ordem de Movimento Simplificada (OMS)',
      'Ordem Preparatória',
    ],
    correta: 2,
    conceito: 'OrdMov/OMS para movimentação administrativa',
    comentario:
      'C) Movimentar Forças/Unidades por fins logísticos e de adestramento, sem solução de problema militar, é Ordem de Movimento — e, pelo pequeno vulto, a OMS (versão simplificada). A) e B) resolvem problema militar; D) Ordem Preparatória só alerta sobre operação iminente.',
    fonte: 'Apostila EN-131, itens 2.2.1.6 e 2.2.1.7.',
    armadilha: 'Marcar Ordem de Operação por ser "uma ordem" — aqui não há operação/problema militar, é trânsito.',
  },
  {
    id: 'opn-ex-04-03',
    tipo: 'discursiva',
    topico: '04-documentos-operativos-e-diretivas',
    contexto:
      'Um Comandante de Força planeja, com meses de antecedência, uma operação cujo desenrolar depende de uma suposição sobre a postura de uma força antagônica. Semanas depois, concluídos os preparativos e definida a situação, ele determina a execução imediata.',
    enunciado:
      'Identifique qual diretiva corresponde a cada momento (planejamento antecipado e determinação de execução imediata) e explique o papel da Hipótese Básica em cada uma.',
    gabaritoComentado:
      'No planejamento antecipado, com suposição sobre o inimigo, a diretiva é o PLANO DE OPERAÇÃO — futuro não imediato, que PODE conter Hipótese Básica (a suposição sobre a postura antagônica), exigindo um Plano Contingente caso ela não se concretize. Na determinação de execução imediata, concluídos os preparativos, o Comandante substitui o plano por uma ORDEM DE OPERAÇÃO — ordem efetiva, que NÃO contém Hipótese Básica. Síntese: Plano = planejar o futuro incerto (com HB); Ordem = mandar executar agora (sem HB).',
    criterios: [
      'Planejamento antecipado = Plano de Operação (com Hipótese Básica).',
      'Execução imediata = Ordem de Operação (sem Hipótese Básica).',
      'Citar a substituição do Plano pela Ordem ao concluir os preparativos.',
    ],
    fonte: 'Apostila EN-131, itens 2.2.1.3 e 2.2.1.5.',
  },
  {
    id: 'opn-ex-04-04',
    tipo: 'correlacione',
    topico: '04-documentos-operativos-e-diretivas',
    titulo: 'Associe cada diretiva à sua finalidade.',
    chaves: [
      { chave: 'CI', texto: 'Carta de Instrução' },
      { chave: 'OPREP', texto: 'Ordem Preparatória' },
      { chave: 'OOPE', texto: 'Ordem de Operação' },
      { chave: 'OMOV', texto: 'Ordem de Movimento' },
    ],
    itens: [
      { texto: 'Orientar o planejamento dos comandos subordinados (alto escalão).', chave: 'CI' },
      { texto: 'Alertar sobre operação iminente, antes da ordem definitiva.', chave: 'OPREP' },
      { texto: 'Determinar a execução coordenada e imediata de uma operação (sem HB).', chave: 'OOPE' },
      { texto: 'Determinar movimentação de Forças por fins administrativos/logísticos.', chave: 'OMOV' },
    ],
    fonte: 'Apostila EN-131, item 2.2.1.',
  },

  // ── 05 — Estrutura da OrdOpe/OrdMov ──
  {
    id: 'opn-ex-05-01',
    tipo: 'multipla',
    topico: '05-estrutura-da-ordope-e-ordmov',
    enunciado:
      'Na Organização por Tarefa de uma diretiva consta a "UT 44.2.7". Pela lei de formação da numeração dos Grupamentos Operativos, essa Unidade-Tarefa pertence, respectivamente, a qual Grupo-Tarefa e a qual Força-Tarefa?',
    alternativas: [
      'GT 44.2.7 e FT 44.2',
      'GT 7 e FT 2',
      'GT 44.2 e FT 44',
      'GT 2 e FT 44.2.7',
    ],
    correta: 2,
    conceito: 'Lei de formação FT/GT/UT/ET',
    comentario:
      'C) A numeração encaixa a hierarquia: UT 44.2.7 → GT 44.2 → FT 44. O primeiro número é a FT (44); FT + ponto + nº é o GT (44.2); GT + ponto + nº é a UT (44.2.7). As demais leem os algarismos isolados ou invertem os níveis.',
    fonte: 'Apostila EN-131, item 2.3.1.',
    armadilha: 'Ler os algarismos isolados em vez da hierarquia encadeada.',
  },
  {
    id: 'opn-ex-05-02',
    tipo: 'vf',
    topico: '05-estrutura-da-ordope-e-ordmov',
    afirmacao:
      'Na Organização por Tarefa, a sigla (QA) "Quando Ativado" indica que os meios receberam tarefas cujo momento de execução é indeterminado.',
    correta: false,
    comentario:
      'Falso — isso descreve (QF) "Quando Formado". A sigla (QA) "Quando Ativado" indica tarefas a serem executadas em momentos determinados ou em posições geográficas preestabelecidas. A afirmação troca QA por QF.',
    fonte: 'Apostila EN-131, item 2.3.1.',
    armadilha: 'A troca QF ↔ QA (indeterminado × determinado).',
  },
  {
    id: 'opn-ex-05-03',
    tipo: 'discursiva',
    topico: '05-estrutura-da-ordope-e-ordmov',
    contexto: 'Um Aspirante recebe uma Ordem de Movimento e precisa preparar o serviço da comissão.',
    enunciado:
      'Descreva as três grandes partes do Documento Básico e cite ao menos três dados que ele deve extrair de uma Ordem de Movimento para o planejamento do trânsito.',
    gabaritoComentado:
      'O Documento Básico tem CABEÇALHO (comando e numeração do Grupamento Operativo — FT/GT/UT/ET —, navio-capitânia e Ref. Msg.), CORPO (Organização por Tarefa com símbolos de capitânia e QF/QA, Missão no §2, Execução/Tarefas no §3, Instruções para Coordenação e para Reconhecimento) e FECHO. De uma OrdMov extraem-se, para o trânsito: PIM (posição e intenção de movimento), velocidade, ETA, RDVZ, eventos e fonia administrativa (três bastam). Esses dados alimentam a navegação e o quadro tático.',
    criterios: [
      'Citar Cabeçalho, Corpo e Fecho.',
      'Descrever ao menos dois itens do Corpo (Organização por Tarefa, Missão §2, Execução §3...).',
      'Citar três dados extraídos da OrdMov (PIM, velocidade, ETA, RDVZ...).',
    ],
    fonte: 'Apostila EN-131, item 2.3.',
  },
  {
    id: 'opn-ex-05-04',
    tipo: 'correlacione',
    topico: '05-estrutura-da-ordope-e-ordmov',
    titulo: 'Associe cada símbolo/sigla da Organização por Tarefa ao seu significado.',
    chaves: [
      { chave: 'CCC', texto: '(CCC)' },
      { chave: 'CC', texto: '(CC)' },
      { chave: 'QF', texto: '(QF) Quando Formado' },
      { chave: 'QA', texto: '(QA) Quando Ativado' },
    ],
    itens: [
      { texto: 'Capitânia de Força-Tarefa.', chave: 'CCC' },
      { texto: 'Capitânia de Grupo-Tarefa.', chave: 'CC' },
      { texto: 'Tarefas de momento de execução indeterminado.', chave: 'QF' },
      { texto: 'Tarefas em momentos determinados ou posições preestabelecidas.', chave: 'QA' },
    ],
    fonte: 'Apostila EN-131, item 2.3.1.',
  },

  // ── 06 — ATP como linguagem operativa ──
  {
    id: 'opn-ex-06-01',
    tipo: 'multipla',
    topico: '06-atp-linguagem-operativa',
    enunciado: 'Durante um exercício, o OCT transmite "INTE G FORM 2". Qual é a função desse sinal?',
    alternativas: [
      'Ordena formar a Formatura 2, sendo o navio G o guia.',
      'Cancela a Formatura 2 anteriormente ordenada.',
      'Pergunta qual é o Guia da Formatura 2.',
      'Designa o navio G como novo guia da Formatura 2.',
    ],
    correta: 2,
    conceito: 'Galhardete interrogativo INTE',
    comentario:
      'C) INTE é o galhardete interrogativo: "INTE G FORM 2" pergunta "quem é o Guia da Formatura 2?". A) confunde com uma ordem FORM; B) é função do NEGAT (cancelar/negar); D) é função do DESIG (designar). INTE abre uma pergunta, não uma ordem.',
    fonte: 'Extrato do ATP-1 Vol. II; mnemônicos OPN — Bloco 6.',
    armadilha: 'Ler INTE como ordem de formar, e não como interrogação.',
  },
  {
    id: 'opn-ex-06-02',
    tipo: 'vf',
    topico: '06-atp-linguagem-operativa',
    afirmacao:
      'No inglês operativo do ATP, o termo "should" expressa obrigatoriedade, com o mesmo peso de "shall" e "must".',
    correta: false,
    comentario:
      'Falso. "should" expressa RECOMENDAÇÃO (e, às vezes, "caso / em caso de"). A obrigatoriedade é dada por "shall", "are to" e "must". Tratar "should" como obrigação muda indevidamente o peso da ordem.',
    fonte: 'Apontamentos sobre o inglês do ATP.',
    armadilha: 'Equiparar "should" a "shall"/"must".',
  },
  {
    id: 'opn-ex-06-03',
    tipo: 'correlacione',
    topico: '06-atp-linguagem-operativa',
    titulo: 'Associe cada sinal do ATP ao seu efeito.',
    chaves: [
      { chave: 'FORM', texto: 'FORM' },
      { chave: 'RUMOCOR', texto: 'RUMOCOR (CORPEN)' },
      { chave: 'GUINA', texto: 'GUINA (TURN)' },
      { chave: 'POS', texto: 'POS (STATION)' },
    ],
    itens: [
      { texto: 'Forma uma formatura específica.', chave: 'FORM' },
      { texto: 'Altera o rumo por conversão sucessiva (geometria mantida).', chave: 'RUMOCOR' },
      { texto: 'Altera o rumo de todos simultaneamente (a formatura se altera).', chave: 'GUINA' },
      { texto: 'Faz um navio específico tomar ou mudar de posto.', chave: 'POS' },
    ],
    fonte: 'Extrato do ATP-1 Vol. II.',
  },
  {
    id: 'opn-ex-06-04',
    tipo: 'discursiva',
    topico: '06-atp-linguagem-operativa',
    contexto:
      'Um Aspirante lê, num sinal do ATP, a frase "The tackline may be omitted if the omission cannot cause ambiguity".',
    enunciado:
      'Explique o que o termo "may" determina nesse caso e diferencie-o do que ocorreria se a frase usasse "shall". Em seguida, diga o que é o TACK.',
    gabaritoComentado:
      '"may" expressa PERMISSÃO/opção: o TACK (tackline) PODE ser omitido, a critério, desde que a omissão não cause ambiguidade — não é obrigatório omitir nem manter. Se a frase usasse "shall", haveria OBRIGAÇÃO (o TACK deveria ser omitido). O TACK é o separador usado entre sinais, ou para ligar um sinal ao seu designador. Síntese: may = pode; shall = deve.',
    criterios: [
      '"may" = permissão/opção.',
      '"shall" = obrigação (contraste).',
      'Definir TACK como separador de sinais / ligação ao designador.',
    ],
    fonte: 'Apontamentos sobre o inglês do ATP; extrato do ATP-1 Vol. II.',
  },

  // ── 07 — Organização, Comando e Prontidão ──
  {
    id: 'opn-ex-07-01',
    tipo: 'multipla',
    topico: '07-organizacao-comando-e-prontidao',
    enunciado:
      'Em uma comissão, o ComemCh organiza os meios navais e aeronavais, atribui uma missão ao ComDiv-1 e adjudica-lhe meios para cumpri-la. Que relação de comando o ComemCh exerce sobre esses meios?',
    alternativas: ['Controle Tático', 'Comando Operacional', 'Comando Tático', 'Controle Operacional'],
    correta: 1,
    conceito: 'Comando Operacional (compor força + missão + meios)',
    comentario:
      'B) Compor a força, atribuir missão e adjudicar meios é Comando Operacional (nível operacional). A) Controle Tático dirige movimentos/manobras; C) Comando Tático atribui TAREFAS (não a missão) e organiza por tarefas; D) Controle Operacional coordena o emprego para missão específica, mas não compõe a força nem designa a missão original.',
    fonte: 'Apostila EN-131, item 3.3.1.',
    armadilha: 'Confundir "atribuir missão" (Comando Operacional) com "atribuir tarefas" (Comando Tático).',
  },
  {
    id: 'opn-ex-07-02',
    tipo: 'vf',
    topico: '07-organizacao-comando-e-prontidao',
    afirmacao:
      'A promulgação de um Alarme de Ameaça Vermelho obriga automaticamente todas as unidades a assumirem a Condição de Prontidão I e a abrirem fogo.',
    correta: false,
    comentario:
      'Falso. O alarme de ameaça é SOMENTE INFORMATIVO: indica que o ataque é iminente ou já foi iniciado (vermelho), mas NÃO ordena, por si, assumir prontidão mais alta nem abrir fogo. As ações das forças não se ligam automaticamente ao alarme.',
    fonte: 'Apostila EN-131, item 3.4.1.',
    armadilha: 'Tratar o alarme de ameaça como ordem automática de ação.',
  },
  {
    id: 'opn-ex-07-03',
    tipo: 'correlacione',
    topico: '07-organizacao-comando-e-prontidao',
    titulo: 'Associe cada relação de comando e controle à sua descrição.',
    chaves: [
      { chave: 'COMOP', texto: 'Comando Operacional' },
      { chave: 'CONOP', texto: 'Controle Operacional' },
      { chave: 'COMTAC', texto: 'Comando Tático' },
      { chave: 'CONTAC', texto: 'Controle Tático' },
    ],
    itens: [
      { texto: 'Compor a força, designar missões/objetivos e cuidar da logística operacional.', chave: 'COMOP' },
      { texto: 'Coordenar o emprego para missão/tarefa específica (função, tempo, área).', chave: 'CONOP' },
      { texto: 'Estabelecer a organização por tarefas e atribuir tarefas às forças.', chave: 'COMTAC' },
      { texto: 'Dirigir os movimentos e as manobras das forças na área de operações.', chave: 'CONTAC' },
    ],
    fonte: 'Apostila EN-131, item 3.3.1.',
  },
  {
    id: 'opn-ex-07-04',
    tipo: 'discursiva',
    topico: '07-organizacao-comando-e-prontidao',
    contexto:
      'Na estrutura de comando de um exercício, um Comandante de Divisão recebe o Controle Operacional dos meios, dirige e planeja a operação, atribui tarefas às unidades subordinadas e, durante a execução, manobra os meios.',
    enunciado:
      'Identifique as relações de Comando e Controle exercidas ao "atribuir tarefas às unidades" e ao "manobrar os meios durante a operação", justificando cada uma.',
    gabaritoComentado:
      '"Atribuir tarefas às unidades subordinadas" é COMANDO TÁTICO (ComTac) — estabelece a organização por tarefas e atribui tarefas. "Manobrar os meios durante a operação" é CONTROLE TÁTICO (ConTac) — dirige os movimentos e as manobras das forças para executar as tarefas. O Controle Operacional, que ele também detém, coordena o emprego para a missão; mas é o ComTac que atribui as tarefas e o ConTac que as executa em movimento. Síntese: ComTac atribui tarefas; ConTac manobra.',
    criterios: [
      'Atribuir tarefas = Comando Tático.',
      'Manobrar os meios = Controle Tático.',
      'Justificar com as definições (organização por tarefas × movimentos/manobras).',
    ],
    fonte: 'Apostila EN-131, item 3.3.1.',
  },

  // ── 08 — Rosa I: Movimento relativo ──
  {
    id: 'opn-ex-08-01',
    tipo: 'multipla',
    topico: '08-rosa-de-manobras-movimento-relativo',
    enunciado:
      'Na plotagem, um contato percorre 1.500 jardas de movimento relativo em 3 minutos. Pela regra dos 3 minutos, qual é a VMR?',
    alternativas: ['5 nós', '15 nós', '30 nós', '150 nós'],
    correta: 1,
    conceito: 'Regra dos 3 minutos',
    comentario:
      'B) Regra dos 3 minutos: VMR (nós) = distância em 3 min (jardas) ÷ 100 = 1500 ÷ 100 = 15 nós. As demais aplicam o divisor errado.',
    fonte: 'Manual de Rosa de Manobras; mnemônicos OPN — Bloco 8.',
    armadilha: 'Usar um divisor diferente de 100 na regra dos 3 minutos.',
  },
  {
    id: 'opn-ex-08-02',
    tipo: 'vf',
    topico: '08-rosa-de-manobras-movimento-relativo',
    afirmacao:
      'A Direção do Movimento Relativo (DMR) de um contato corresponde sempre ao rumo verdadeiro desse contato.',
    correta: false,
    comentario:
      'Falso. A DMR é a direção do movimento RELATIVO (como o contato se move em relação a nós), resultado da combinação dos dois movimentos. O rumo verdadeiro do contato é o vetor tm, obtido por tr + rm = tm. Um contato em rumo 026° pode ter DMR 063°.',
    fonte: 'Manual de Rosa de Manobras.',
    armadilha: 'Igualar a DMR ao rumo verdadeiro do alvo.',
  },
  {
    id: 'opn-ex-08-03',
    tipo: 'multipla',
    topico: '08-rosa-de-manobras-movimento-relativo',
    enunciado:
      'No PPI, um contato mantém marcação constante de 045° enquanto a distância diminui de forma contínua. O que isso indica?',
    alternativas: [
      'O contato está parado.',
      'O contato está se afastando.',
      'Há rota de colisão.',
      'O contato está no PMA.',
    ],
    correta: 2,
    conceito: 'Risco de colisão no movimento relativo',
    comentario:
      'C) Marcação constante + distância diminuindo = rota de colisão: o contato vem direto para o centro (nós). A) parado manteria a distância; B) afastar-se aumentaria a distância; D) no PMA a distância é mínima e a marcação varia.',
    fonte: 'Manual de Rosa de Manobras.',
    armadilha: 'Associar marcação constante a contato parado.',
  },
  {
    id: 'opn-ex-08-04',
    tipo: 'discursiva',
    topico: '08-rosa-de-manobras-movimento-relativo',
    contexto:
      'Um Aspirante plotou M1 e M2 de um contato no diagrama de posições e precisa achar o rumo e a velocidade verdadeiros do alvo.',
    enunciado:
      'Explique a relação entre a linha M1-M2 e o vetor rm, e como, a partir dela, se obtém o rumo e a velocidade do alvo.',
    gabaritoComentado:
      'A linha M1-M2 (diagrama de posições) é PARALELA ao vetor rm (diagrama de velocidades), no sentido de r para m; a DMR é a direção dessa linha. A VMR vem da distância M1-M2 dividida pelo tempo entre as plotagens. No diagrama de velocidades, traça-se tr (nosso rumo/velocidade) a partir de t; do ponto r, traça-se rm paralelo a M1-M2 com comprimento igual à VMR, achando o ponto m. Unindo t a m obtém-se tm = rumo e velocidade verdadeiros do alvo (tr + rm = tm).',
    criterios: [
      'M1-M2 ∥ rm (sentido r→m); DMR = direção da linha.',
      'VMR = distância relativa ÷ tempo.',
      'Construir tr e rm para achar tm (rumo e velocidade do alvo).',
    ],
    fonte: 'Manual de Rosa de Manobras; Miguens, Cap. 14.',
  },

  // ── 09 — Rosa II: PMA e contatos ──
  {
    id: 'opn-ex-09-01',
    tipo: 'multipla',
    topico: '09-rosa-de-manobras-pma-e-contatos',
    enunciado:
      'Entre M1 e M2, decorridos 6 minutos, o contato percorreu 2.400 jardas de movimento relativo. Qual é a VMR? (use 1 MN = 2.000 jd)',
    alternativas: ['6 nós', '12 nós', '24 nós', '40 nós'],
    correta: 1,
    conceito: 'Regra dos 6 minutos / VMR',
    comentario:
      'B) 2.400 jd = 1,2 MN. Regra dos 6 minutos: VMR = milhas em 6 min × 10 = 1,2 × 10 = 12 nós. (Conferência: 2.400 jd ÷ 6 min = 400 jd/min = 12 kt.) As demais erram o fator.',
    fonte: 'Manual de Rosa de Manobras.',
    armadilha: 'Aplicar a regra dos 3 minutos a um intervalo de 6 minutos.',
  },
  {
    id: 'opn-ex-09-02',
    tipo: 'vf',
    topico: '09-rosa-de-manobras-pma-e-contatos',
    afirmacao:
      'O PMA de um contato fica completamente determinado pela sua marcação e pela sua menor distância.',
    correta: false,
    comentario:
      'Falso. O PMA tem TRÊS elementos: marcação verdadeira, menor distância E HORA. Omitir a hora deixa o PMA incompleto — e a hora costuma valer parte do ponto na prova.',
    fonte: 'Manual de Rosa de Manobras; mnemônicos OPN — Bloco 9.',
    armadilha: 'Esquecer a hora do PMA.',
  },
  {
    id: 'opn-ex-09-03',
    tipo: 'multipla',
    topico: '09-rosa-de-manobras-pma-e-contatos',
    enunciado:
      'Num problema de contato obtém-se DMR = 217° e, ao fechar o diagrama de velocidades, tm = 237°. O que representa cada valor?',
    alternativas: [
      'Ambos são o rumo verdadeiro do contato.',
      '217° é o rumo do contato; 237° é a DMR.',
      '217° é a DMR (movimento relativo); 237° é o rumo verdadeiro do contato.',
      '217° é a marcação do PMA; 237° é a recíproca.',
    ],
    correta: 2,
    conceito: 'DMR × rumo do contato',
    comentario:
      'C) A DMR (217°) é a direção do movimento relativo (reta M1-M2); o rumo verdadeiro do contato é o tm (237°), obtido por tr + rm = tm. São direções distintas no mesmo problema. A) iguala os dois; B) inverte; D) confunde com PMA/recíproca.',
    fonte: 'Manual de Rosa de Manobras; Miguens, Cap. 14.',
    armadilha: 'Usar a DMR como se fosse o rumo do contato.',
  },
  {
    id: 'opn-ex-09-04',
    tipo: 'discursiva',
    topico: '09-rosa-de-manobras-pma-e-contatos',
    contexto:
      'Um contato é plotado em M1 (mais distante) e M2 (mais próximo); o Oficial de Quarto baixa a perpendicular de R à reta M1-M2 e obtém uma distância de PMA praticamente nula.',
    enunciado: 'Interprete o que essa perpendicular quase nula significa e que providência ela exige.',
    gabaritoComentado:
      'PMA praticamente nulo significa que a reta do movimento relativo passa pelo centro R — ou seja, ROTA DE COLISÃO: o contato passará quase por cima de nós, com marcação tendendo a constante e distância caindo. Providência: alterar rumo e/ou velocidade (manobra de safamento) para abrir o PMA a uma distância segura, conforme as regras de governo.',
    criterios: [
      'PMA nulo = rota de colisão (reta relativa passa por R).',
      'Sintoma: marcação constante / distância decrescente.',
      'Providência: manobrar (rumo/velocidade) para abrir o PMA.',
    ],
    fonte: 'Manual de Rosa de Manobras.',
  },

  // ── 10 — Rosa III: Vento ──
  {
    id: 'opn-ex-10-01',
    tipo: 'multipla',
    topico: '10-rosa-de-manobras-vento',
    enunciado:
      'Um navio navega no rumo 060°. O anemômetro indica vento relativo de 090° por boreste. Qual a direção verdadeira DE ONDE sopra o vento aparente?',
    alternativas: ['150°', '330°', '030°', '060°'],
    correta: 0,
    conceito: 'Conversão polar (boreste)',
    comentario:
      'A) Para boreste, soma-se: 060° + 090° = 150°. O vento aparente sopra DE 150°. B) 330° é a recíproca (para onde o vetor aponta), não de onde sopra; C) e D) ignoram o ângulo do anemômetro.',
    fonte: 'Manual de Rosa de Manobras; Aula UE5 (Vento).',
    armadilha: 'Dar a recíproca (330°) — que é "para onde", não "de onde".',
  },
  {
    id: 'opn-ex-10-02',
    tipo: 'vf',
    topico: '10-rosa-de-manobras-vento',
    afirmacao:
      'O vento aparente é a direção verdadeira do vento relativo, e coincide sempre com o vento real.',
    correta: false,
    comentario:
      'Falso. O vento aparente é apenas a direção verdadeira do vento relativo (do anemômetro). O vento REAL exige fechar o triângulo com o movimento do navio (tr + rw = tw); só coincide com o aparente se o navio estiver parado.',
    fonte: 'Manual de Rosa de Manobras.',
    armadilha: 'Parar no vento aparente e chamá-lo de real.',
  },
  {
    id: 'opn-ex-10-03',
    tipo: 'vf',
    topico: '10-rosa-de-manobras-vento',
    afirmacao:
      'No problema de vento sobre o convés, há sempre uma única combinação de rumo e velocidade que produz o vento desejado.',
    correta: false,
    comentario:
      'Falso. O problema pode ter DUAS soluções (o arco do vento real corta a linha de proa em dois pontos), UMA (tangência) ou NENHUMA (o arco não alcança a linha de proa). Tratar como solução única é resposta incompleta.',
    fonte: 'Manual de Rosa de Manobras.',
    armadilha: 'Assumir solução única no problema de vento no convés.',
  },
  {
    id: 'opn-ex-10-04',
    tipo: 'discursiva',
    topico: '10-rosa-de-manobras-vento',
    contexto:
      'Navio no rumo 060°, velocidade 10 nós; o anemômetro indica vento relativo de 090° por boreste, 14 nós.',
    enunciado: 'Descreva os passos para obter o vento real e indique o resultado aproximado.',
    gabaritoComentado:
      '(1) Converter o relativo em aparente verdadeiro: para boreste, rumo + ângulo = 060° + 090° = 150° (vento aparente de 150°). (2) Traçar tr (060°/10 kt) a partir de t; do ponto r, traçar o vetor do aparente "para onde" (recíproca de 150° = 330°) com 14 kt, achando w. (3) Fechar tw = t→w; a direção DE ONDE sopra o vento real é a recíproca de tw. Resultado: vento real ≈ 185°/17 kt. Conferir o bordo (BE = soma) e a recíproca.',
    criterios: [
      'Converter relativo → aparente (060 + 090 = 150°).',
      'Montar tr + rw e fechar tw.',
      'Tomar a recíproca de tw; resultado ≈ 185°/17 kt.',
    ],
    fonte: 'Manual de Rosa de Manobras; Aula UE5 (Vento).',
  },

  // ── 11 — Rosa IV: Entrar em posição ──
  {
    id: 'opn-ex-11-01',
    tipo: 'multipla',
    topico: '11-rosa-de-manobras-entrar-em-posicao',
    enunciado:
      'Na manobra de entrar em posição, a distância relativa a percorrer é 3.000 jardas e a VMR resultante é 10 nós. Qual o tempo de manobra? (1 MN = 2.000 jd)',
    alternativas: ['3 min', '9 min', '15 min', '30 min'],
    correta: 1,
    conceito: 'Tempo = distância ÷ VMR',
    comentario:
      'B) 3.000 jd = 1,5 MN; a 10 nós percorre 1,5 MN em 9 min. (Conferência: 10 kt ≈ 333 jd/min; 3.000 ÷ 333 ≈ 9 min.) As demais erram a conversão jardas/nós.',
    fonte: 'Manual de Rosa de Manobras.',
    armadilha: 'Dividir jardas por nós sem converter as unidades.',
  },
  {
    id: 'opn-ex-11-02',
    tipo: 'vf',
    topico: '11-rosa-de-manobras-entrar-em-posicao',
    afirmacao: 'Para achar o rumo de manobra, usa-se o compasso com raio igual à velocidade do guia.',
    correta: false,
    comentario:
      'Falso. O raio do compasso é a VELOCIDADE DE MANOBRA do próprio navio (o módulo de tm), não a velocidade do guia. A velocidade do guia define o vetor tr (referência), não o raio que acha o tm.',
    fonte: 'Manual de Rosa de Manobras; mnemônicos OPN — Bloco 11.',
    armadilha: 'Trocar a velocidade de manobra pela velocidade do guia.',
  },
  {
    id: 'opn-ex-11-03',
    tipo: 'multipla',
    topico: '11-rosa-de-manobras-entrar-em-posicao',
    enunciado:
      'Ao concluir a manobra de entrar em posição, ocupando um posto cujo deslocamento relativo era 135°, em que marcação o seu navio observará o guia?',
    alternativas: ['135°', '090°', '315°', '045°'],
    correta: 2,
    conceito: 'Final do guia = recíproca do deslocamento',
    comentario:
      'C) O "final do guia" é a recíproca do deslocamento ocupado: recíproca de 135° = 315°. Se você ficou a 135° do guia, ele fica a 315° de você. A) é o seu deslocamento (não o do guia); B) e D) não correspondem.',
    fonte: 'Manual de Rosa de Manobras; mnemônicos OPN — Bloco 11.',
    armadilha: 'Dar o próprio deslocamento (135°) em vez da recíproca.',
  },
  {
    id: 'opn-ex-11-04',
    tipo: 'discursiva',
    topico: '11-rosa-de-manobras-entrar-em-posicao',
    contexto:
      'O guia navega em 090°/10 kt. Seu navio deve ocupar um posto cujo deslocamento relativo é 135°/2.800 jd, com velocidade de manobra de 15 kt.',
    enunciado: 'Descreva o procedimento para achar o rumo e o tempo de manobra e indique os resultados aproximados.',
    gabaritoComentado:
      '(1) Plotar tr = 090°/10 kt a partir de t. (2) Do ponto r, traçar uma reta na direção do deslocamento (135°) — direção do rm. (3) Com o compasso em t e raio = velocidade de manobra (15 kt), marcar a interseção com essa reta: ponto m. (4) tm = t→m dá o rumo de manobra ≈ 107°; o rm mede a VMR ≈ 6,2 kt. (5) Tempo = 2.800 jd ÷ 6,2 kt ≈ 14 min. (6) Final do guia = recíproca de 135° = 315°. Conferir que não se tomou a recíproca do rumo.',
    criterios: [
      'tr do guia + reta do rm na direção 135°.',
      'Compasso com raio = velocidade de manobra (15 kt) → tm (rumo ≈ 107°).',
      'Tempo = distância ÷ VMR ≈ 14 min; final do guia = 315°.',
    ],
    fonte: 'Manual de Rosa de Manobras; Aula UE5 (Aula 4 — POS).',
  },

  // ── 12 — Manobras Táticas I: formaturas e sinais ──
  {
    id: 'opn-ex-12-01',
    tipo: 'vf',
    topico: '12-manobras-taticas-formaturas-e-sinais',
    afirmacao: 'Considera-se navio grande aquele cujo comprimento é igual ou maior que 450 pés.',
    correta: false,
    comentario:
      'Falso. Navio GRANDE é o de comprimento MAIOR que 450 pés; o de comprimento IGUAL ou menor que 450 pés é navio PEQUENO. O "igual a 450 pés" pertence ao pequeno, não ao grande.',
    fonte: 'Apostila EN-131, item 4.2.',
    armadilha: 'Incluir o "igual a 450 pés" na definição de navio grande.',
  },
  {
    id: 'opn-ex-12-02',
    tipo: 'multipla',
    topico: '12-manobras-taticas-formaturas-e-sinais',
    enunciado:
      'Numa linha, são adjacentes uma fragata (navio grande) e um submarino. Qual a distância padrão a observar entre eles?',
    alternativas: ['500 jardas', '750 jardas', '1.000 jardas', '2.000 jardas'],
    correta: 2,
    conceito: 'Distância padrão entre tipos diferentes',
    comentario:
      'C) Entre navios de tipos diferentes, observa-se a distância padrão DO MAIOR. A fragata (grande) tem 1.000 jd; o submarino, 500 jd. Prevalece a do maior: 1.000 jardas. A) é a do pequeno; B) não existe; D) é a milha náutica.',
    fonte: 'Apostila EN-131, item 4.3.1.',
    armadilha: 'Aplicar os 500 jd do submarino em vez da distância do maior.',
  },
  {
    id: 'opn-ex-12-03',
    tipo: 'correlacione',
    topico: '12-manobras-taticas-formaturas-e-sinais',
    titulo: 'Associe cada sinal FORM à formatura correspondente (numeração da Apostila EN-131, item 4.8).',
    chaves: [
      { chave: 'F1', texto: 'FORM 1' },
      { chave: 'F2', texto: 'FORM 2' },
      { chave: 'F3', texto: 'FORM 3' },
      { chave: 'F4', texto: 'FORM 4' },
    ],
    itens: [
      { texto: 'Coluna (sequência numérica crescente, de vante para ré).', chave: 'F1' },
      { texto: 'Coluna (sequência numérica inversa).', chave: 'F2' },
      { texto: 'Linha de frente por boreste.', chave: 'F3' },
      { texto: 'Linha de frente por bombordo.', chave: 'F4' },
    ],
    fonte: 'Apostila EN-131, item 4.8 (Extrato do ATP-1 Vol. II).',
  },
  {
    id: 'opn-ex-12-04',
    tipo: 'multipla',
    topico: '12-manobras-taticas-formaturas-e-sinais',
    enunciado: 'O OCT transmite um sinal GUINA. Qual método de execução se aplica e o que isso significa?',
    alternativas: [
      'Executivo normal: aguarda-se "executar" antes de cumprir.',
      'Executivo imediato: a ordem é cumprida no próprio sinal.',
      'Executivo normal: a formatura é mantida.',
      'Executivo imediato: o guia muda automaticamente.',
    ],
    correta: 1,
    conceito: 'GUINA usa executivo imediato',
    comentario:
      'B) GUINA (e VELOC) usa o executivo IMEDIATO — cumprido no próprio sinal. O executivo normal (aguardar execução → executar) é de FORM, RUMOCOR e POS. C) descreve mal a GUINA (que altera a formatura); D) na GUINA o guia normalmente NÃO muda.',
    fonte: 'Apostila EN-131, Cap. 4; extrato do ATP.',
    armadilha: 'Associar GUINA ao executivo normal.',
  },

  // ── 13 — Manobras Táticas II: GUINA, RUMOCOR e guia ──
  {
    id: 'opn-ex-13-01',
    tipo: 'multipla',
    topico: '13-manobras-taticas-guina-rumocor-e-guia',
    enunciado:
      'Uma força em coluna recebe um sinal para que cada navio guine sucessivamente no mesmo ponto em que o guia guinou, preservando a coluna no novo rumo. Que manobra é essa e o que acontece com o guia?',
    alternativas: [
      'GUINA; o guia não muda.',
      'RUMOCOR; o navio-testa que guina primeiro vira guia.',
      'GUINA; o navio-pião vira guia.',
      'RUMOCOR; o guia permanece o mesmo.',
    ],
    correta: 1,
    conceito: 'RUMOCOR (conversão sucessiva) e mudança automática de guia',
    comentario:
      'B) Guinar sucessivamente no mesmo ponto, preservando a formatura, é RUMOCOR (conversão sucessiva); em coluna, o navio-testa que guina primeiro torna-se o guia automaticamente. A) e C) descrevem GUINA (simultânea); D) erra a mudança de guia própria do RUMOCOR.',
    fonte: 'Apostila EN-131, item 4.11.',
    armadilha: 'Confundir conversão sucessiva (RUMOCOR) com simultânea (GUINA).',
  },
  {
    id: 'opn-ex-13-02',
    tipo: 'vf',
    topico: '13-manobras-taticas-guina-rumocor-e-guia',
    afirmacao:
      'Na GUINA (conversão simultânea), os navios mantêm as marcações relativas ao guia e o navio-pião torna-se o novo guia.',
    correta: false,
    comentario:
      'Falso — isso descreve a RUMOCOR. Na GUINA, todos guinam simultaneamente mantendo as marcações VERDADEIRAS e distâncias, a formatura se altera em relação ao novo rumo e o guia NORMALMENTE não muda.',
    fonte: 'Apostila EN-131, item 4.11.1.',
    armadilha: 'Atribuir à GUINA as marcações relativas e a mudança de guia (que são do RUMOCOR).',
  },
  {
    id: 'opn-ex-13-03',
    tipo: 'discursiva',
    topico: '13-manobras-taticas-guina-rumocor-e-guia',
    contexto: 'Uma força em coluna, com o guia à frente, recebe o sinal RUMOCOR BB 000.',
    enunciado:
      'Explique a manobra: o que o sinal ordena, a sequência dos navios, o que ocorre com o guia e a formatura final.',
    gabaritoComentado:
      'RUMOCOR BB 000 ordena uma conversão SUCESSIVA por bombordo para o rumo 000° (Norte). O navio-testa da coluna guina na execução do sinal para 000° e, se não for o guia, torna-se o guia automaticamente. Os demais navios seguem suas águas — mantêm rumo e velocidade até atingirem o ponto em que o guia guinou, e então guinam por bombordo para 000°. Ao final, mantêm-se as marcações relativas e distâncias: a COLUNA é preservada, agora no rumo 000°. (Padrão código-guia-sequência-bordo-resultado.)',
    criterios: [
      'Conversão sucessiva por BB para 000°.',
      'Navio-testa guina primeiro e vira guia.',
      'Demais seguem as águas (guinam no mesmo ponto); coluna preservada no novo rumo.',
    ],
    fonte: 'Apostila EN-131, item 4.11.2.',
  },
  {
    id: 'opn-ex-13-04',
    tipo: 'correlacione',
    topico: '13-manobras-taticas-guina-rumocor-e-guia',
    titulo: 'Associe cada característica à manobra correta (GUINA ou RUMOCOR).',
    chaves: [
      { chave: 'G', texto: 'GUINA' },
      { chave: 'R', texto: 'RUMOCOR' },
    ],
    itens: [
      { texto: 'Conversão simultânea de todos os navios.', chave: 'G' },
      { texto: 'Conversão sucessiva (um após o outro).', chave: 'R' },
      { texto: 'Mantém as marcações verdadeiras; guia normalmente não muda.', chave: 'G' },
      { texto: 'Preserva a formatura; o navio-testa/pião vira guia.', chave: 'R' },
    ],
    fonte: 'Apostila EN-131, item 4.11.',
  },

  // ── 14 — Quadro Tático I: COC/CIC e etapas ──
  {
    id: 'opn-ex-14-01',
    tipo: 'multipla',
    topico: '14-quadro-tatico-coc-cic-e-etapas',
    enunciado: 'No funcionamento do COC/CIC, qual é a sequência correta das cinco etapas básicas?',
    alternativas: [
      'Coleta → Avaliação → Filtragem → Apresentação → Disseminação',
      'Coleta → Filtragem → Apresentação → Avaliação → Disseminação',
      'Filtragem → Coleta → Apresentação → Disseminação → Avaliação',
      'Coleta → Apresentação → Filtragem → Avaliação → Disseminação',
    ],
    correta: 1,
    conceito: 'As cinco etapas do COC/CIC',
    comentario:
      'B) A ordem é Coleta → Filtragem → Apresentação → Avaliação → Disseminação: coleta-se, filtra-se o não essencial, apresenta-se o que sobrou, avalia-se e, por fim, dissemina-se. As demais embaralham a ordem.',
    fonte: 'Apostila EN-131, item 6.2.2.',
    armadilha: 'Avaliar antes de apresentar, ou filtrar antes de coletar.',
  },
  {
    id: 'opn-ex-14-02',
    tipo: 'vf',
    topico: '14-quadro-tatico-coc-cic-e-etapas',
    afirmacao:
      'A tarefa principal do COC/CIC é prover controle e assistência em operações como o Apoio de Fogo Naval e a navegação em águas restritas.',
    correta: false,
    comentario:
      'Falso — isso é a tarefa SECUNDÁRIA. A tarefa PRINCIPAL do COC/CIC é manter o Comando e as demais estações constantemente informados da situação tática (forças amigas e inimigas).',
    fonte: 'Apostila EN-131, item 6.2.1.',
    armadilha: 'Inverter a tarefa principal com a secundária.',
  },
  {
    id: 'opn-ex-14-03',
    tipo: 'discursiva',
    topico: '14-quadro-tatico-coc-cic-e-etapas',
    contexto:
      'Durante um exercício, o COC recebe ecos de radar, contatos por link de dados e relatos visuais, mas o Comando reclama que recebe informação demais e sem prioridade.',
    enunciado:
      'Explique qual etapa do COC resolve esse problema e descreva, na ordem, as cinco etapas básicas.',
    gabaritoComentado:
      'O excesso de informação sem prioridade é resolvido pela FILTRAGEM (2ª etapa): classifica e aprecia as informações coletadas, eliminando as não essenciais e priorizando as demais. As cinco etapas, na ordem: (1) Coleta — receber de qualquer fonte; (2) Filtragem — eliminar o não essencial e priorizar; (3) Apresentação — exibir nas plotagens e quadros; (4) Avaliação — usar corretamente, destacando o mais importante ao Comando; (5) Disseminação — distribuir sem atraso. A filtragem é o que evita afogar o Comando em dados.',
    criterios: [
      'Identificar a Filtragem como a etapa que prioriza/elimina o não essencial.',
      'Listar as cinco etapas na ordem correta.',
    ],
    fonte: 'Apostila EN-131, item 6.2.2.',
  },
  {
    id: 'opn-ex-14-04',
    tipo: 'correlacione',
    topico: '14-quadro-tatico-coc-cic-e-etapas',
    titulo: 'Associe cada etapa do COC/CIC à sua descrição.',
    chaves: [
      { chave: 'COL', texto: 'Coleta' },
      { chave: 'FIL', texto: 'Filtragem' },
      { chave: 'AVL', texto: 'Avaliação' },
      { chave: 'DIS', texto: 'Disseminação' },
    ],
    itens: [
      { texto: 'Aquisição/recebimento de informações de qualquer fonte.', chave: 'COL' },
      { texto: 'Eliminação das informações não essenciais e priorização.', chave: 'FIL' },
      { texto: 'Utilização correta das informações, destacando as mais importantes ao Comando.', chave: 'AVL' },
      { texto: 'Distribuição, sem atraso, às estações que necessitem.', chave: 'DIS' },
    ],
    fonte: 'Apostila EN-131, item 6.2.2.',
  },

  // ── 15 — Quadro Tático II: contatos e partes ──
  {
    id: 'opn-ex-15-01',
    tipo: 'multipla',
    topico: '15-quadro-tatico-contatos-e-partes',
    enunciado:
      'O radar detecta o lançamento de um míssil a partir de um contato hostil próximo, exigindo disseminação imediata por ameaça à Força. Que tipo de parte de contato é o adequado?',
    alternativas: ['Parte Inicial', 'Parte Instantânea', 'Parte Ampliadora', 'SITREP de contatos'],
    correta: 1,
    conceito: 'Parte Instantânea para ameaça imediata',
    comentario:
      'B) A Parte Instantânea é reservada à ameaça IMEDIATA (prioridade máxima), como um lançamento detectado. A) Inicial é a 1ª disseminação de contato novo, sem urgência; C) Ampliadora atualiza um contato existente; D) SITREP resume vários contatos num período.',
    fonte: 'Apostila EN-131, Cap. 6 (disseminação de contato).',
    armadilha: 'Usar a Parte Inicial numa situação de ameaça imediata.',
  },
  {
    id: 'opn-ex-15-02',
    tipo: 'vf',
    topico: '15-quadro-tatico-contatos-e-partes',
    afirmacao:
      'O Ponto de Maior Aproximação (PMA) deve constar obrigatoriamente em todas as partes de contato disseminadas.',
    correta: false,
    comentario:
      'Falso. O PMA (marcação/distância/hora) entra na parte APENAS quando necessário por segurança ou interceptação — não em toda parte. Incluí-lo sempre sobrecarrega a disseminação.',
    fonte: 'Apostila EN-131, Cap. 6; mnemônicos OPN — Bloco 15.',
    armadilha: 'Tornar o PMA obrigatório em qualquer parte de contato.',
  },
  {
    id: 'opn-ex-15-03',
    tipo: 'discursiva',
    topico: '15-quadro-tatico-contatos-e-partes',
    contexto:
      'A partir da plotagem na Rosa, obteve-se um contato de superfície desconhecido em marcação 020°, distância 14.000 jardas, rumo 160° e velocidade 16 nós, recém-detectado.',
    enunciado:
      'Identifique o tipo de parte adequado e liste, na ordem, os elementos essenciais que ela deve conter.',
    gabaritoComentado:
      'Por ser um contato novo, o tipo é PARTE INICIAL. Elementos essenciais, na ordem: (1) chamada/precedência (destinatário e origem); (2) categoria (desconhecido); (3) número de acompanhamento; (4) posição (marcação 020°/distância 14.000 jd, ou a grade correspondente); (5) rumo e velocidade (160°/16 kt); (6) informações complementares; (7) hora; (8) fecho (câmbio). O PMA só entraria se houvesse necessidade de segurança/interceptação.',
    criterios: [
      'Tipo = Parte Inicial (contato novo).',
      'Listar os 8 elementos essenciais na ordem.',
      'Aplicar os dados (categoria desconhecido, posição, rumo/velocidade).',
    ],
    fonte: 'Apostila EN-131, Cap. 6.',
  },
  {
    id: 'opn-ex-15-04',
    tipo: 'correlacione',
    topico: '15-quadro-tatico-contatos-e-partes',
    titulo: 'Associe cada expressão de Parte Mista ao seu significado.',
    chaves: [
      { chave: 'TENHO', texto: 'EU TENHO' },
      { chave: 'QUERO', texto: 'EU QUERO' },
      { chave: 'JUNT', texto: 'JUNTARAM' },
      { chave: 'BIF', texto: 'BIFURCADO' },
    ],
    itens: [
      { texto: 'Confirmo a existência do contato no meu próprio sensor.', chave: 'TENHO' },
      { texto: 'Assumo a responsabilidade de disseminar o contato.', chave: 'QUERO' },
      { texto: 'Dois ou mais contatos se fundem em um.', chave: 'JUNT' },
      { texto: 'Um contato se divide em dois ou mais.', chave: 'BIF' },
    ],
    fonte: 'Apostila EN-131, Cap. 6 (partes mistas).',
  },

  // ── 16 — Quadro Tático III: plotagens, PIM e OPGEN ──
  {
    id: 'opn-ex-16-01',
    tipo: 'multipla',
    topico: '16-quadro-tatico-plotagens-pim-e-opgen',
    enunciado:
      'O COC precisa acompanhar contatos aéreos e a meteorologia da área, em movimento relativo. Qual plotagem é a adequada?',
    alternativas: [
      'Plotagem de Superfície',
      'Plotagem Sumária',
      'Plotagem Geográfica',
      'Plotagem em movimento verdadeiro',
    ],
    correta: 1,
    conceito: 'Plotagem Sumária (aéreos e meteorologia)',
    comentario:
      'B) A Plotagem Sumária, em movimento relativo, trata dos contatos aéreos e da meteorologia. A) Superfície é para contatos de superfície; C) Geográfica é em movimento verdadeiro (todos os contatos); D) descreve a geográfica.',
    fonte: 'Apostila EN-131, Cap. 6; mnemônicos OPN — Bloco 16.',
    armadilha: 'Confundir a Sumária (aéreos) com a de Superfície.',
  },
  {
    id: 'opn-ex-16-02',
    tipo: 'vf',
    topico: '16-quadro-tatico-plotagens-pim-e-opgen',
    afirmacao: 'O PIM (Posição e Intenção de Movimento) é estabelecido individualmente por cada navio da Força.',
    correta: false,
    comentario:
      'Falso. O PIM é estabelecido pelo OCT e descreve a posição e a intenção de movimento da FORÇA (posição, rumo, velocidade, hora). Serve de referência para o retorno de aeronaves, a manutenção de postos, os comandos adjacentes e o RDVZ.',
    fonte: 'Apostila EN-131, Cap. 6; mnemônicos OPN — Bloco 16.',
    armadilha: 'Atribuir o PIM a cada navio em vez de ao OCT.',
  },
  {
    id: 'opn-ex-16-03',
    tipo: 'correlacione',
    topico: '16-quadro-tatico-plotagens-pim-e-opgen',
    titulo: 'Associe cada plotagem ao seu conteúdo/movimento.',
    chaves: [
      { chave: 'SUP', texto: 'Plotagem de Superfície' },
      { chave: 'SUM', texto: 'Plotagem Sumária' },
      { chave: 'GEO', texto: 'Plotagem Geográfica' },
    ],
    itens: [
      { texto: 'Movimento relativo; contatos de superfície.', chave: 'SUP' },
      { texto: 'Movimento relativo; contatos aéreos e meteorologia.', chave: 'SUM' },
      { texto: 'Movimento verdadeiro; todos os contatos, arquivo e navegação.', chave: 'GEO' },
    ],
    fonte: 'Apostila EN-131, Cap. 6.',
  },
  {
    id: 'opn-ex-16-04',
    tipo: 'discursiva',
    topico: '16-quadro-tatico-plotagens-pim-e-opgen',
    contexto:
      'Uma Força Naval em trânsito precisa que suas aeronaves retornem com segurança e que os navios fora da cobertura mantenham seus postos.',
    enunciado:
      'Explique o que é o PIM, quem o estabelece, sua estrutura e como ele atende a essa necessidade.',
    gabaritoComentado:
      'O PIM (Posição e Intenção de Movimento) é estabelecido pelo OCT e descreve onde a Força estará e como se deslocará, na forma posição → rumo → velocidade → hora. Ao informar a posição e a intenção de movimento da Força, permite que as aeronaves saibam para onde retornar e que os navios fora da cobertura mantenham seus postos em relação à Força, além de apoiar a coordenação com comandos adjacentes e o RDVZ. Em síntese, o PIM antecipa o movimento da Força para todos se coordenarem.',
    criterios: [
      'PIM = posição e intenção de movimento da Força.',
      'Estabelecido pelo OCT; estrutura posição/rumo/velocidade/hora.',
      'Atende ao retorno de aeronaves e à manutenção de postos.',
    ],
    fonte: 'Apostila EN-131, Cap. 6; mnemônicos OPN — Bloco 16.',
  },

  // ═══════════════ EXPANSÃO TÉCNICA (foco: ATP, Rosa, Quadro Tático) ═══════════════

  // ── 06 — ATP como linguagem operativa ──
  {
    id: 'opn-ex-06-05',
    tipo: 'multipla',
    topico: '06-atp-linguagem-operativa',
    enunciado:
      'No inglês operativo do ATP, um sinal diz: "The tackline MAY be omitted...". Como deve ser interpretado o termo "may" e o que isso significa para o cumprimento da ordem?',
    alternativas: [
      'Obrigação — a omissão da tackline é mandatória.',
      'Recomendação — convém omitir a tackline, mas não é obrigatório.',
      'Permissão — autoriza-se a omissão da tackline, a critério da unidade.',
      'Proibição — a tackline nunca pode ser omitida.',
    ],
    correta: 2,
    conceito: 'Termos de obrigação no ATP',
    comentario:
      'C) "may" exprime PERMISSÃO/opção. "shall/are to/must" = obrigação; "should" = recomendação; "may" = permissão. Interpretar o peso do verbo errado leva a cumprir como obrigatório o que era opcional.',
    fonte: 'Extrato do ATP-1 Vol. II; Aula UE3.',
    armadilha: 'Tratar "may" como "shall" e cumprir uma opção como se fosse ordem efetiva.',
  },
  {
    id: 'opn-ex-06-06',
    tipo: 'multipla',
    topico: '06-atp-linguagem-operativa',
    enunciado:
      'Durante um exercício, o OCT transmite "INTE G FORM 2". Qual a função do galhardete INTE nesse sinal?',
    alternativas: [
      'Cancela a ordem de formar a Formatura 2 (resposta negativa).',
      'Designa a unidade que será o novo Guia da Formatura 2.',
      'Interroga a situação da força: pergunta "quem é o Guia da Formatura 2?".',
      'Ordena, de forma imediata, a execução da Formatura 2.',
    ],
    correta: 2,
    conceito: 'Grupos governantes do ATP (INTE)',
    comentario:
      'C) INTE é o galhardete INTERROGATIVO — abre uma pergunta sobre a situação da força. NEGAT cancela/nega; DESIG designa uma unidade; um sinal FORM ordena. INTE pergunta, não ordena.',
    fonte: 'Extrato do ATP-1 Vol. II; Aula de Manobras Táticas.',
    armadilha: 'Confundir INTE (pergunta) com um sinal de ordem ou com NEGAT (cancelar).',
  },
  {
    id: 'opn-ex-06-07',
    tipo: 'vf',
    topico: '06-atp-linguagem-operativa',
    afirmacao:
      'Os sinais GUINA e VELOC são cumpridos pelo método executivo imediato (no próprio sinal), enquanto FORM, RUMOCOR e POS usam o método executivo normal ("aguardar execução" → "atenção... executar").',
    correta: true,
    comentario:
      'Verdadeiro. O método imediato vale para ordens simples/urgentes (GUINA, VELOC); o normal, para manobras que exigem planejamento na Rosa (FORM, RUMOCOR, POS).',
    fonte: 'Apostila EN-131, Cap. 4; Aula de Manobras Táticas.',
    armadilha: 'Achar que toda manobra "aguarda execução" — GUINA e VELOC são imediatas.',
  },

  // ── 08 — Rosa I: movimento relativo ──
  {
    id: 'opn-ex-08-05',
    tipo: 'multipla',
    topico: '08-rosa-de-manobras-movimento-relativo',
    enunciado:
      'Na tela de radar (PPI, movimento relativo), um contato mantém a MARCAÇÃO CONSTANTE enquanto a DISTÂNCIA diminui. O que isso indica?',
    alternativas: [
      'O contato está se afastando, sem risco.',
      'O contato está parado em relação à Terra.',
      'Há rota de colisão: a DMR aponta para o nosso navio.',
      'O contato mudou de rumo verdadeiro.',
    ],
    correta: 2,
    conceito: 'Risco de colisão no movimento relativo',
    comentario:
      'C) Marcação constante + distância decrescente = rota de colisão: o contato vem direto para o centro (nós). É o alerta máximo do Oficial de Quarto.',
    fonte: 'Manual de Rosa de Manobra; Aula UE5.',
    armadilha: 'Achar que marcação constante significa "parado" — significa que ele vem direto para nós.',
  },
  {
    id: 'opn-ex-08-06',
    tipo: 'vf',
    topico: '08-rosa-de-manobras-movimento-relativo',
    afirmacao:
      'No diagrama de velocidades, a linha que une as posições M1 e M2 (diagrama de posições) é sempre paralela ao vetor rm, no sentido de r para m.',
    correta: true,
    comentario:
      'Verdadeiro. É a "regra de ouro" que liga os dois diagramas: M1-M2 ∥ rm (sempre de r para m). Junto com tr + rm = tm, permite achar o rumo e a velocidade verdadeiros do alvo.',
    fonte: 'Manual de Rosa de Manobra; Aula UE5.',
    armadilha: 'Traçar o rm de m para r (sentido invertido) e ler a recíproca.',
  },
  {
    id: 'opn-ex-08-07',
    tipo: 'multipla',
    topico: '08-rosa-de-manobras-movimento-relativo',
    enunciado:
      'Pela regra dos 3 minutos, um navio que percorre 1.500 jardas em 3 minutos navega a que velocidade?',
    alternativas: ['7,5 nós', '10 nós', '15 nós', '30 nós'],
    correta: 2,
    conceito: 'Regra dos 3 minutos',
    comentario:
      'C) Velocidade (nós) = distância em 3 min (jardas) ÷ 100 = 1500 ÷ 100 = 15 nós. (Pela regra dos 6 minutos, usa-se distância em milhas × 10.)',
    fonte: 'Manual de Rosa de Manobra; Aula UE5.',
    armadilha: 'Dividir por 1.000 (escala) em vez de 100, ou usar a regra dos 6 minutos com jardas.',
  },

  // ── 09 — Rosa II: PMA e contatos ──
  {
    id: 'opn-ex-09-05',
    tipo: 'multipla',
    topico: '09-rosa-de-manobras-pma-e-contatos',
    enunciado:
      'Nosso navio navega em 260°/12 kt. Um contato é plotado: M1 (0342) marcação 020°/14.000 jd; M2 (0349) marcação 015°/11.000 jd. Qual o RUMO e a VELOCIDADE verdadeiros do contato (valores aproximados)?',
    alternativas: [
      'Rumo 057° / 24 kt',
      'Rumo 217° / 13,7 kt',
      'Rumo 237° / 24 kt',
      'Rumo 307° / 4,2 kt',
    ],
    correta: 2,
    conceito: 'Elementos do contato (tr + rm = tm)',
    comentario:
      'C) DMR ≈ 217,5°, VMR ≈ 13,7 kt; no diagrama de velocidades, tr (260°/12) + rm (217,5°/13,7) = tm ≈ 237°/24 kt. A) é a recíproca do rumo (erro clássico); B) é a DMR/VMR; D) é a marcação/distância do PMA.',
    fonte: 'Manual de Rosa de Manobra; exemplo conferido no motor da Rosa.',
    armadilha: 'Responder 057° (recíproca) ou confundir o rumo do alvo com a DMR (217°).',
  },
  {
    id: 'opn-ex-09-06',
    tipo: 'multipla',
    topico: '09-rosa-de-manobras-pma-e-contatos',
    enunciado: 'Quais são os TRÊS elementos que definem um PMA (Ponto de Maior Aproximação)?',
    alternativas: [
      'Rumo, velocidade e aspecto.',
      'Marcação, menor distância e hora.',
      'DMR, VMR e tempo.',
      'Latitude, longitude e profundidade.',
    ],
    correta: 1,
    conceito: 'Elementos do PMA',
    comentario:
      'B) O PMA é o pé da perpendicular de R à reta M1-M2 e se expressa por marcação verdadeira, menor distância e hora. Esquecer a HORA é o erro que mais custa ponto.',
    fonte: 'Manual de Rosa de Manobra; Aula UE5.',
    armadilha: 'Dar só marcação e distância e esquecer a hora do PMA.',
  },
  {
    id: 'opn-ex-09-07',
    tipo: 'vf',
    topico: '09-rosa-de-manobras-pma-e-contatos',
    afirmacao:
      'Se a reta do movimento relativo (DMR) cruza a nossa linha de rumo À VANTE do centro, o contato fará corte de proa (passará à nossa frente).',
    correta: true,
    comentario:
      'Verdadeiro. Onde a DMR cruza a linha de rumo: à vante do centro = corte de proa (passa na frente); à ré = corte de popa. A hora/distância do corte saem como no PMA (de M2 ao ponto de cruzamento ÷ VMR).',
    fonte: 'Manual de Rosa de Manobra; Aula UE5.',
    armadilha: 'Trocar proa por popa, ou esquecer de medir a hora do corte a partir de M2.',
  },

  // ── 10 — Rosa III: vento ──
  {
    id: 'opn-ex-10-05',
    tipo: 'multipla',
    topico: '10-rosa-de-manobras-vento',
    enunciado:
      'Navio no rumo 060°. O anemômetro indica vento relativo de 090° por BORESTE. De qual direção verdadeira sopra o vento aparente?',
    alternativas: ['De 030°', 'De 150°', 'De 330°', 'De 030° por boreste'],
    correta: 1,
    conceito: 'Conversão polar (relativo → aparente)',
    comentario:
      'B) Para BORESTE, soma-se o ângulo ao rumo: 060° + 090° = 150°. O vento aparente sopra de 150°. (Para bombordo, subtrai-se.)',
    fonte: 'Manual de Rosa de Manobra; Aula UE5.',
    armadilha: 'Subtrair (regra de bombordo) ou dar 330° (a recíproca, que é "para onde" vai o vetor).',
  },
  {
    id: 'opn-ex-10-06',
    tipo: 'vf',
    topico: '10-rosa-de-manobras-vento',
    afirmacao:
      'No problema de vento sobre o convés (lançamento de aeronaves), pode haver duas soluções de rumo/velocidade, uma única, ou nenhuma — esta última quando o arco do vento real não corta a linha de proa.',
    correta: true,
    comentario:
      'Verdadeiro. Como o método é gráfico (arco × linha de proa), o problema pode ter duas soluções (escolhe-se em geral a de menor velocidade), uma só, ou nenhuma — quando o arco não intercepta a linha de proa, a manobra é impossível.',
    fonte: 'Manual de Rosa de Manobra; Aula UE5.',
    armadilha: 'Assumir que sempre há solução única e não verificar se o arco corta a linha de proa.',
  },
  {
    id: 'opn-ex-10-07',
    tipo: 'multipla',
    topico: '10-rosa-de-manobras-vento',
    enunciado: 'No triângulo do vento da Rosa, qual relação vetorial fecha o vento real (tw)?',
    alternativas: [
      'tr + rm = tm',
      'tr + rw = tw',
      'tw + tr = rw',
      'rw − tr = tw',
    ],
    correta: 1,
    conceito: 'Triângulo do vento',
    comentario:
      'B) tr (navio) + rw (vento aparente, de r para w) = tw (vento real, de t para w). A direção DE ONDE sopra o vento real é a recíproca de tw. A) é o problema de contato; as demais invertem os vetores.',
    fonte: 'Manual de Rosa de Manobra; Aula UE5.',
    armadilha: 'Usar a equação do contato (tm) ou ler a direção de tw em vez da sua recíproca.',
  },

  // ── 11 — Rosa IV: entrar em posição ──
  {
    id: 'opn-ex-11-05',
    tipo: 'multipla',
    topico: '11-rosa-de-manobras-entrar-em-posicao',
    enunciado:
      'Ao resolver "entrar em posição" na Rosa, qual valor se usa como RAIO do compasso (a partir do centro t) para achar o ponto m e o rumo de manobra?',
    alternativas: [
      'A velocidade do guia.',
      'A velocidade de manobra (do nosso navio).',
      'A VMR do deslocamento.',
      'A distância do posto a ocupar.',
    ],
    correta: 1,
    conceito: 'Entrar em posição (papéis vetoriais)',
    comentario:
      'B) O raio é a VELOCIDADE DE MANOBRA do nosso navio (módulo de tm). A direção do rm (deslocamento até o posto) já é conhecida; a interseção do arco da velocidade de manobra com a reta do rm dá o ponto m. A velocidade do guia é tr.',
    fonte: 'Manual de Rosa de Manobra; Aula UE5.',
    armadilha: 'Usar a velocidade do guia (tr) como raio em vez da velocidade de manobra.',
  },
  {
    id: 'opn-ex-11-06',
    tipo: 'vf',
    topico: '11-rosa-de-manobras-entrar-em-posicao',
    afirmacao:
      'Se a velocidade de manobra for insuficiente, o arco não corta a reta do deslocamento e o posto é inatingível — não há solução.',
    correta: true,
    comentario:
      'Verdadeiro. Como no vento no convés, o arco da velocidade de manobra pode cortar a reta do rm em dois pontos (duas soluções), num só, ou em nenhum (posto inatingível com aquela velocidade).',
    fonte: 'Manual de Rosa de Manobra; motor solveStation.',
    armadilha: 'Forçar uma solução quando a velocidade de manobra não alcança a direção exigida.',
  },

  // ── 12 — Manobras Táticas I: formaturas e sinais ──
  {
    id: 'opn-ex-12-05',
    tipo: 'multipla',
    topico: '12-manobras-taticas-formaturas-e-sinais',
    enunciado:
      'Pela numeração de formaturas da Apostila (EN-131, item 4.8), o sinal FORM 3 corresponde a qual formatura?',
    alternativas: [
      'Coluna na sequência numérica crescente.',
      'Coluna na sequência numérica inversa.',
      'Linha de frente por boreste (BE).',
      'Linha de marcação.',
    ],
    correta: 2,
    conceito: 'Numeração FORM (Apostila 4.8)',
    comentario:
      'C) FORM 3 = linha de frente por BORESTE; FORM 4 = linha de frente por BOMBORDO. FORM 1 = coluna (crescente) e FORM 2 = coluna (inversa) — atenção: FORM 2 NÃO é linha de frente.',
    fonte: 'Apostila EN-131, item 4.8 (extrato do ATP-1 Vol. II).',
    armadilha: 'Achar que a linha de frente começa no FORM 2 — ela começa no FORM 3 (BE).',
  },
  {
    id: 'opn-ex-12-06',
    tipo: 'multipla',
    topico: '12-manobras-taticas-formaturas-e-sinais',
    enunciado:
      'Numa mesma linha, uma fragata (navio grande, > 450 pés) é adjacente a um submarino. Qual a distância padrão a observar entre eles?',
    alternativas: ['500 jardas', '1.000 jardas', '750 jardas', '2.000 jardas'],
    correta: 1,
    conceito: 'Distância padrão (Apostila 4.3.1)',
    comentario:
      'B) Entre navios de TIPOS DIFERENTES, observa-se a distância padrão DO MAIOR. A fragata (grande) tem 1.000 jd; o submarino, isolado, teria 500 jd. Prevalece a do maior: 1.000 jardas.',
    fonte: 'Apostila EN-131, item 4.3.1.',
    armadilha: 'Aplicar os 500 jd do submarino em vez da distância do maior.',
  },
  {
    id: 'opn-ex-12-07',
    tipo: 'vf',
    topico: '12-manobras-taticas-formaturas-e-sinais',
    afirmacao:
      'FORM 1 e FORM 2 são ambas formaturas em COLUNA (a FORM 2 apenas inverte a sequência numérica dos navios).',
    correta: true,
    comentario:
      'Verdadeiro. FORM 1 = coluna em sequência crescente (vante para ré); FORM 2 = coluna em sequência inversa. A linha de frente só aparece no FORM 3 (BE) e FORM 4 (BB).',
    fonte: 'Apostila EN-131, item 4.8.',
    armadilha: 'Tratar FORM 2 como linha de frente.',
  },

  // ── 13 — Manobras Táticas II: GUINA, RUMOCOR e guia ──
  {
    id: 'opn-ex-13-05',
    tipo: 'multipla',
    topico: '13-manobras-taticas-guina-rumocor-e-guia',
    enunciado: 'Em qual manobra ocorre a MUDANÇA AUTOMÁTICA de Guia (o navio-pião/testa torna-se guia)?',
    alternativas: [
      'Na GUINA (conversão simultânea).',
      'No RUMOCOR (conversão sucessiva).',
      'No sinal VELOC.',
      'Em nenhuma — o guia só muda por DESIG.',
    ],
    correta: 1,
    conceito: 'GUINA × RUMOCOR e mudança de guia',
    comentario:
      'B) No RUMOCOR (sucessivo), o navio-testa/pião que guina primeiro torna-se automaticamente o guia. Na GUINA (simultânea), o guia normalmente NÃO muda. A banca adora dizer que muda na GUINA — é falso.',
    fonte: 'Apostila EN-131, item 4.11; ATP Man Tat.',
    armadilha: 'Dizer que o guia muda na GUINA (não muda) — a mudança automática é no RUMOCOR.',
  },
  {
    id: 'opn-ex-13-06',
    tipo: 'multipla',
    topico: '13-manobras-taticas-guina-rumocor-e-guia',
    enunciado:
      'O OCT ordena FORM D (diamante), com a força em coluna. Como os navios se posicionam?',
    alternativas: [
      'O navio mais de ré vira guia; os demais entram na sua esteira.',
      'O navio de vante vira guia; o 2º na alheta de BB, o 3º na alheta de BE e o 4º na esteira.',
      'Todos guinam 90° simultaneamente para boreste.',
      'Os navios formam pelo través de boreste do guia.',
    ],
    correta: 1,
    conceito: 'FORM D (Apostila 4.8.3)',
    comentario:
      'B) FORM D só se forma a partir de coluna: o navio de vante torna-se automaticamente o guia; o 2º forma na alheta de bombordo, o 3º na alheta de boreste e o 4º na esteira (popa). Emprego: apoio mútuo em defesa antiaérea.',
    fonte: 'Apostila EN-131, item 4.8.3.',
    armadilha: 'Trocar a alheta de cada navio ou achar que o guia é o de ré (isso é FORM F).',
  },
  {
    id: 'opn-ex-13-07',
    tipo: 'vf',
    topico: '13-manobras-taticas-guina-rumocor-e-guia',
    afirmacao:
      'Na FORM F (inversão de coluna), o navio mais de ré torna-se o guia e aumenta a velocidade para um nó a menos que a velocidade de evolução; os demais reduzem para 7 nós (ou o valor indicado), e a velocidade não retorna automaticamente à anterior.',
    correta: true,
    comentario:
      'Verdadeiro. Na FORM F o guia é o navio mais de ré (≠ FORM D). Sobe à velocidade de evolução −1 nó e ultrapassa pelo bordo indicado; os demais reduzem a 7 nós. Só o OCT determina o retorno à velocidade anterior.',
    fonte: 'Apostila EN-131, item 4.10.a.',
    armadilha: 'Presumir retorno automático à velocidade anterior, ou confundir o guia da FORM F (ré) com o da FORM D (vante).',
  },
  {
    id: 'opn-ex-13-08',
    tipo: 'discursiva',
    topico: '13-manobras-taticas-guina-rumocor-e-guia',
    contexto: 'A força está em linha de frente e recebe o sinal RUMOCOR SIERRA 045 (guinada de busca).',
    enunciado:
      'Explique a manobra: quem guina primeiro e vira guia, como os demais executam e qual a formatura final.',
    gabaritoComentado:
      'RUMOCOR SIERRA é a guinada de busca, executada em linha de frente, com mudança de rumo entre 45° e 135°. Na execução, o navio do FLANCO OPOSTO ao bordo da guinada guina primeiro para o novo rumo (045°) e torna-se o GUIA. Os demais navios mantêm o rumo e guinam sucessivamente, cada um no momento apropriado, de modo a ficarem, ao final, PELO TRAVÉS do novo guia. A formatura final é novamente uma linha de frente, agora no rumo 045°, com o guia no flanco que iniciou a guinada.',
    criterios: [
      'O navio do flanco oposto ao bordo da guinada guina primeiro e vira guia.',
      'Os demais mantêm o rumo e guinam sucessivamente.',
      'Formatura final = linha de frente, navios pelo través do novo guia, no novo rumo.',
    ],
    fonte: 'Apostila EN-131, item 4.11; ATP Man Tat.',
    armadilha: 'Dizer que é a sequência numérica (é a sequência das guinadas) ou cruzar a popa do guia.',
  },

  // ── 14 — Quadro Tático I: COC/CIC e etapas ──
  {
    id: 'opn-ex-14-05',
    tipo: 'multipla',
    topico: '14-quadro-tatico-coc-cic-e-etapas',
    enunciado: 'Quais são, na ordem correta, as cinco etapas básicas de funcionamento do COC/CIC?',
    alternativas: [
      'Coleta → Apresentação → Filtragem → Disseminação → Avaliação.',
      'Coleta → Filtragem → Apresentação → Avaliação → Disseminação.',
      'Filtragem → Coleta → Avaliação → Apresentação → Disseminação.',
      'Detecção → Classificação → Engajamento → Avaliação → Relato.',
    ],
    correta: 1,
    conceito: 'Etapas do COC (COL-FIL-APR-AVL-DIS)',
    comentario:
      'B) Coleta (receber de qualquer fonte) → Filtragem (classificar/priorizar) → Apresentação (plotagens/quadros) → Avaliação (uso correto p/ o Comando) → Disseminação (distribuir sem atraso). É a espinha dorsal dos cenários da Q5.',
    fonte: 'Apostila EN-131, Cap. 6 (item 6.2); Aula 8.1.',
    armadilha: 'Inverter Filtragem e Apresentação, ou pôr a Disseminação antes da Avaliação.',
  },
  {
    id: 'opn-ex-14-06',
    tipo: 'multipla',
    topico: '14-quadro-tatico-coc-cic-e-etapas',
    enunciado: 'Quem é o oficial responsável por todo o COC/CIC?',
    alternativas: [
      'O Controlador Aéreo.',
      'O Supervisor de serviço (praça OR mais antiga).',
      'O Avaliador.',
      'O Oficial de Ligação de AFN (OLA).',
    ],
    correta: 2,
    conceito: 'Guarnecimento do COC',
    comentario:
      'C) O AVALIADOR é o oficial responsável por todo o COC; abaixo dele estão os oficiais de ambiente (OF GAA-GE, OF GAS, OF GSup), o Controlador Aéreo, o Supervisor e os operadores. O OLA é posto eventual.',
    fonte: 'Apostila EN-131, Cap. 6; Aula 8.1.',
    armadilha: 'Confundir o Avaliador (responsável geral) com um oficial de ambiente específico.',
  },
  {
    id: 'opn-ex-14-07',
    tipo: 'vf',
    topico: '14-quadro-tatico-coc-cic-e-etapas',
    afirmacao:
      'A tarefa PRINCIPAL do COC/CIC é prover o controle e a assistência em operações específicas (AFN, navegação, manobras), e a SECUNDÁRIA é manter o Comando informado da situação tática.',
    correta: false,
    comentario:
      'Falso — está invertido. A tarefa PRINCIPAL é manter o Comando e as estações informados da situação tática (compilação do quadro tático); a SECUNDÁRIA é prover controle e/ou assistência em operações específicas.',
    fonte: 'Apostila EN-131, Cap. 6; Aula 8.1.',
    armadilha: 'Inverter principal (informar) e secundária (controle/assistência).',
  },

  // ── 15 — Quadro Tático II: contatos e partes (FOCO: designar, achar, ampliar) ──
  {
    id: 'opn-ex-15-05',
    tipo: 'multipla',
    topico: '15-quadro-tatico-contatos-e-partes',
    enunciado:
      'No Código Operativo Abreviado, um contato de superfície ainda não identificado é DESIGNADO como "UJ 4501". O que significam o "U", o "J" e o codinome em inglês desse contato?',
    alternativas: [
      'U = unidade; J = Juliett; codinome "bogey".',
      'U = desconhecido (unknown); J = plataforma de superfície; codinome "skunk".',
      'U = urgente; J = jamming; codinome "racket".',
      'U = amigo; J = jato; codinome "friend".',
    ],
    correta: 1,
    conceito: 'Designação de contato (COA)',
    comentario:
      'B) A 1ª letra é a categoria (U = desconhecido/unknown) e a 2ª, a plataforma (J = superfície). Um contato de superfície desconhecido é um "skunk". Aéreo desconhecido = bogey/vagabundo; submarino = goblin/saci; emissão EW = racket/ruído.',
    fonte: 'Slide 8.3; ComOpNav-516 (Código Operativo Abreviado).',
    armadilha: 'Ler "J" como a bandeira Juliett ou confundir o codinome com o de outro ambiente.',
  },
  {
    id: 'opn-ex-15-06',
    tipo: 'multipla',
    topico: '15-quadro-tatico-contatos-e-partes',
    enunciado:
      'O operador de radar ACHA (detecta pela primeira vez) um pesqueiro que não representa ameaça e vai disseminá-lo. Qual o tipo de parte adequado?',
    alternativas: [
      'Parte Instantânea.',
      'Parte Inicial.',
      'Parte Ampliadora.',
      'Parte Situação de Raides (SITREP).',
    ],
    correta: 1,
    conceito: 'Tipos de parte (achar/disseminar contato novo)',
    comentario:
      'B) Contato NOVO, sem ameaça imediata → Parte INICIAL. A Instantânea é só para ameaça imediata; a Ampliadora atualiza um contato já disseminado; o SITREP resume vários contatos.',
    fonte: 'Slide 8.3; Apostila EN-131, Cap. 6.',
    armadilha: 'Usar a Instantânea para um contato novo qualquer — ela é reservada à ameaça imediata.',
  },
  {
    id: 'opn-ex-15-07',
    tipo: 'multipla',
    topico: '15-quadro-tatico-contatos-e-partes',
    enunciado:
      'O Avaliador determina ATUALIZAR o rumo e a velocidade do contato UJ 4501, que já havia sido disseminado e guinou. Qual parte se emprega?',
    alternativas: [
      'Parte Inicial (porque o contato mudou de rumo).',
      'Parte Ampliadora.',
      'Parte Instantânea.',
      'Parte Mista "BIFURCADO".',
    ],
    correta: 1,
    conceito: 'Parte ampliadora (atualizar contato)',
    comentario:
      'B) AMPLIAR/atualizar um contato já disseminado (nova posição/rumo/velocidade/identificação) é a Parte AMPLIADORA. A Inicial é só o "nascimento" do contato; a Mista BIFURCADO é quando um eco se divide em dois.',
    fonte: 'Slide 8.3; Apostila EN-131, Cap. 6.',
    armadilha: 'Reabrir o contato como "Inicial" a cada atualização — a partir da 2ª vez é Ampliadora.',
  },
  {
    id: 'opn-ex-15-08',
    tipo: 'multipla',
    topico: '15-quadro-tatico-contatos-e-partes',
    enunciado:
      'A Fragata União (costado F45) detecta um contato e precisa atribuir-lhe um número de acompanhamento. Qual número é coerente com o seu bloco?',
    alternativas: ['Contato 0145', 'Contato 4501', 'Contato 1450', 'Contato 5400'],
    correta: 1,
    conceito: 'Número e bloco de acompanhamento',
    comentario:
      'B) O número deriva do costado/indicativo e o bloco é a faixa da unidade: F45 → 4500–4577. O contato 4501 cai nessa faixa. Usar número fora do bloco do próprio navio gera confusão na força.',
    fonte: 'Slide 8.3; Apostila EN-131, Cap. 6.',
    armadilha: 'Numerar o contato fora da faixa (bloco) do próprio navio.',
  },
  {
    id: 'opn-ex-15-09',
    tipo: 'multipla',
    topico: '15-quadro-tatico-contatos-e-partes',
    enunciado:
      'Uma aeronave identifica o contato UJ 1443 como o Porta-Aviões amigo "Nimitz". O FTC-S precisa mudar a categoria do contato. Como isso é informado na fonia?',
    alternativas: [
      'Abre-se uma nova Parte Inicial com outro número.',
      'O contato é REDESIGNADO: "UJ 1443 redesignado R 1443" (skunk now friend).',
      'Transmite-se "NEGAT 1443" para apagar o contato.',
      'Emprega-se a Parte Instantânea, por se tratar de porta-aviões.',
    ],
    correta: 1,
    conceito: 'Redesignação de categoria',
    comentario:
      'B) Mudou a categoria, REDESIGNA-SE o número mantendo o acompanhamento: "UJ 1443 redesignado R 1443" (EN: skunk NOW friend). Não se abre número novo nem se apaga o contato.',
    fonte: 'Slide 8.3 (Disseminação no ambiente de superfície).',
    armadilha: 'Criar um novo número em vez de redesignar o existente.',
  },
  {
    id: 'opn-ex-15-10',
    tipo: 'vf',
    topico: '15-quadro-tatico-contatos-e-partes',
    afirmacao:
      'Na fonia tática, anunciar "Dado Belina 1443" (EN: alligator) significa que o contato 1443 está sendo transmitido por link de dados; "NEGAT Dado Belina 1443" cancela essa transmissão.',
    correta: true,
    comentario:
      'Verdadeiro. "Dado Belina" = alligator = estou transmitindo o contato por link; "NEGAT Dado Belina" = negative alligator = cancelo a transmissão por link. Reduz o tráfego de voz.',
    fonte: 'Slide 8.3; Link YB.',
    armadilha: 'Achar que "Dado Belina" é o nome do contato — é o anúncio de transmissão por link.',
  },
  {
    id: 'opn-ex-15-11',
    tipo: 'multipla',
    topico: '15-quadro-tatico-contatos-e-partes',
    enunciado:
      'O navio que acompanhava o contato R1443 informa: "R1443 DESVANECIDO, Azul 048.2 – 057.1 – 045 – 15, minuto 52". O que isso comunica?',
    alternativas: [
      'Que o contato foi destruído.',
      'Que PERDEU o acompanhamento do contato e dá a última posição/rumo/velocidade/hora (EN: faded/lost).',
      'Que o contato foi redesignado como hostil.',
      'Que dois contatos se fundiram (JUNTARAM).',
    ],
    correta: 1,
    conceito: 'Perda de acompanhamento (desvanecido/FADED)',
    comentario:
      'B) "Desvanecido" (EN: faded/lost) = perdi o acompanhamento; informa-se a última posição (grade Azul 048.2–057.1), rumo 045, veloc 15 e a hora (minuto 52). Depois pode vir "retomado" (resumed) se reaver o contato.',
    fonte: 'Slide 8.3 (Disseminação no ambiente de superfície).',
    armadilha: 'Interpretar "desvanecido" como destruição do alvo — é só perda de acompanhamento.',
  },
  {
    id: 'opn-ex-15-12',
    tipo: 'correlacione',
    topico: '15-quadro-tatico-contatos-e-partes',
    titulo: 'Associe cada codinome do Código Operativo Abreviado ao seu significado.',
    chaves: [
      { chave: 'SK', texto: 'skunk' },
      { chave: 'BG', texto: 'bogey' },
      { chave: 'GB', texto: 'goblin' },
      { chave: 'RK', texto: 'racket' },
      { chave: 'BD', texto: 'bulldog' },
    ],
    itens: [
      { texto: 'Contato de superfície desconhecido.', chave: 'SK' },
      { texto: 'Contato aéreo desconhecido (vagabundo).', chave: 'BG' },
      { texto: 'Contato submarino (saci).', chave: 'GB' },
      { texto: 'Emissão eletromagnética detectada (ruído).', chave: 'RK' },
      { texto: 'Míssil lançado (lançou buldogue).', chave: 'BD' },
    ],
    fonte: 'Slide 8.3; ComOpNav-516 (Código Operativo Abreviado).',
  },
  {
    id: 'opn-ex-15-13',
    tipo: 'discursiva',
    topico: '15-quadro-tatico-contatos-e-partes',
    contexto:
      'Você é o A140 (indicativo A0T) e detecta, pela CI-GSU, um contato de superfície desconhecido nº 1443 na grade Azul 037.2 – 048.0. Vai disseminar ao FTC-S (indicativo I4N).',
    enunciado:
      'Monte a PARTE INICIAL desse contato em PROFON e, em seguida, explique como ficaria a PARTE AMPLIADORA quando o contato passar a Azul 040.2 – 051.0, rumo 045, velocidade 15.',
    gabaritoComentado:
      'Parte Inicial: "I4N aqui A0T NOVO UJ 1443 Azul 037.2 – 048.0 câmbio." (EN: I4N this is A0T new skunk 1443 Blue 037.2 – 048.0 over). Estrutura: [destinatário I4N] AQUI [origem A0T] → tipo (NOVO = inicial) → COA + número (UJ 1443) → posição na grade (Azul X.X – Y.Y) → fecho (câmbio). Parte Ampliadora: "I4N aqui A0T UJ 1443 Azul 040.2 – 051.0 – 045 – 15 câmbio." — repete o número, atualiza a posição (Azul 040.2 – 051.0) e acrescenta rumo (045) e velocidade (15). A diferença essencial é que a Inicial usa "NOVO" (nascimento do contato) e a Ampliadora apenas atualiza os dados.',
    criterios: [
      'Inicial com "NOVO", COA (UJ) + número e posição na grade (cor X.X – Y.Y).',
      'Estrutura [destinatário] AQUI [origem] ... câmbio.',
      'Ampliadora repete o número e atualiza posição/rumo/velocidade (sem "NOVO").',
    ],
    fonte: 'Slide 8.3 (Disseminação de contato no ambiente de superfície).',
    armadilha: 'Repetir "NOVO" na ampliadora ou esquecer o fecho (câmbio) e a cor da grade.',
  },

  // ── 16 — Quadro Tático III: plotagens, PIM e OPGEN ──
  {
    id: 'opn-ex-16-05',
    tipo: 'multipla',
    topico: '16-quadro-tatico-plotagens-pim-e-opgen',
    enunciado: 'Qual plotagem é feita em MOVIMENTO VERDADEIRO e serve de arquivo das posições de navegação e de acompanhamento do PIM?',
    alternativas: [
      'Plotagem de Superfície.',
      'Plotagem Sumária.',
      'Plotagem Geográfica.',
      'Plotagem de Raides.',
    ],
    correta: 2,
    conceito: 'Tipos de plotagem',
    comentario:
      'C) A Geográfica é em movimento verdadeiro (posições reais), cobre contatos de superfície, submarinos e alguns aéreos, serve de arquivo de navegação e acompanha o PIM. Superfície e Sumária são em movimento relativo (navio no centro).',
    fonte: 'Apostila EN-131, Cap. 6; Aula 8.4.',
    armadilha: 'Atribuir movimento verdadeiro à Superfície/Sumária — só a Geográfica é verdadeira.',
  },
  {
    id: 'opn-ex-16-06',
    tipo: 'multipla',
    topico: '16-quadro-tatico-plotagens-pim-e-opgen',
    enunciado:
      'Considere o PIM: "23º30′N – 034º53′W – 070º – 15 kt – 10 horas – 090º – 12 kt – 14 horas". O que ele descreve?',
    alternativas: [
      'A posição de um contato inimigo em dois instantes.',
      'A derrota pretendida da Força em duas pernas: de 23º30′N/034º53′W no rumo 070°/15 kt até as 10h, depois rumo 090°/12 kt até as 14h.',
      'O ponto de encontro (RDVZ) e a hora estimada de chegada (ETA).',
      'As coordenadas de dois RDVZ sucessivos.',
    ],
    correta: 1,
    conceito: 'Leitura do PIM',
    comentario:
      'B) O PIM é a derrota pretendida da Força (estabelecida pelo OCT), descrita como uma SEQUÊNCIA DE PERNAS: posição → rumo → velocidade → hora. Aqui são duas pernas (070°/15 kt até 10h; depois 090°/12 kt até 14h).',
    fonte: 'Apostila EN-131, Cap. 6; Aula 8.4.',
    armadilha: 'Ler o PIM como posições de contato (é o movimento da própria Força) ou como um RDVZ.',
  },
  {
    id: 'opn-ex-16-07',
    tipo: 'vf',
    topico: '16-quadro-tatico-plotagens-pim-e-opgen',
    afirmacao:
      'O OPGEN é um documento operativo da USN/OTAN constante da publicação APP-4 (Sistema de Mensagens Táticas Marítimas), usado na MB em determinados exercícios; para a PP1 basta conhecer o conceito.',
    correta: true,
    comentario:
      'Verdadeiro. OPGEN é da APP-4 (USN/OTAN), empregado em exercícios (no mar ou no SSTT do CAAML) e aprofundado em OPN-2 (U27). Não confundir com as diretivas da MB (UE2).',
    fonte: 'Aula 8.4; orientação do professor.',
    armadilha: 'Confundir o OPGEN (APP-4, exercícios aliados) com uma diretiva nacional da UE2.',
  },
  {
    id: 'opn-ex-16-08',
    tipo: 'multipla',
    topico: '16-quadro-tatico-plotagens-pim-e-opgen',
    enunciado: 'Diferencie RDVZ e ETA.',
    alternativas: [
      'RDVZ é a estimativa de chegada; ETA é o ponto de encontro.',
      'RDVZ é o ponto de encontro entre grupamentos; ETA é a estimativa de horário de chegada (a um RDVZ, porto ou ponto de navegação).',
      'Ambos significam a mesma coisa.',
      'RDVZ é uma plotagem; ETA é um quadro informativo.',
    ],
    correta: 1,
    conceito: 'RDVZ × ETA',
    comentario:
      'B) RDVZ (Rendez-vous) = ponto de encontro entre grupamentos operativos ou unidades; ETA (Estimated Time of Arrival) = estimativa de horário de chegada a um RDVZ, porto ou ponto de navegação.',
    fonte: 'Apostila EN-131, Cap. 6; Aula 8.4.',
    armadilha: 'Trocar as definições (RDVZ = lugar; ETA = hora).',
  },

  // @opn-pertopico (ponto de inserção — não remover)
];

export function questoesPorTopico(slug: string): Questao[] {
  return perTopico.filter((q) => q.topico === slug);
}

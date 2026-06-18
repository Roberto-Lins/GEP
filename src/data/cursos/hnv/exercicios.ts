// Banco de questões do curso HNV (História Naval). Transcrito dos exercícios oficiais por dificuldade.
import type { QuestaoMultipla, QuestaoVF, QuestaoDiscursiva, Questao } from '@tipos/question';
export type { Questao } from '@tipos/question';

export const multiplaEscolha: QuestaoMultipla[] = [
  {
    "id": "hnv-o-f-01",
    "tipo": "multipla",
    "topico": "01-mediterraneo-antigo-e-batalha-de-mylae",
    "dificuldade": "facil",
    "enunciado": "Durante a Batalha de Mylae, o comandante cartaginês Aníbal Giscão foi surpreendido pelo uso dos corvos romanos, o que resultou na captura de cerca de trinta de suas galeras e na sua própria fuga. A respeito das consequências desse desfecho para o comandante em Cartago, assinale a alternativa correta:",
    "alternativas": [
      "Foi recebido com honras por ter preservado parte da frota mercante.",
      "Recebeu o comando de uma nova esquadra para atacar a Sicília.",
      "Foi crucificado pelo Conselho de Anciãos para servir de exemplo aos demais almirantes.",
      "Foi exilado na Península Ibérica para negociar a paz com os romanos."
    ],
    "correta": 2,
    "conceito": "Mediterrâneo antigo e Mylae",
    "comentario": "Alternativa C. O texto afirma explicitamente que o Conselho de Anciãos decidiu crucificá-lo devido ao péssimo resultado. Por que as outras estão erradas: A e B são opostas à realidade de derrota humilhante; D não condiz com a prática política punitiva cartaginesa descrita.",
    "fonte": "Leonardo Ferreira.",
    "armadilha": "Imaginar que Cartago teria piedade de seus líderes derrotados por serem uma elite mercantil."
  },
  {
    "id": "hnv-o-f-02",
    "tipo": "multipla",
    "topico": "02-da-galera-ao-navio-de-vela",
    "dificuldade": "facil",
    "enunciado": "A respeito da Coga, embarcação típica dos mares setentrionais que começou a ser militarizada no século XIII com a inclusão de castelos de proa e popa, é correto afirmar que a sua unidade de medida de carga (tonelada) teve origem em:",
    "alternativas": [
      "Tonéis de vinho embarcados em Bordeaux, na França.",
      "Barris de pólvora utilizados pela Liga Hanseática.",
      "O peso das pedras de lastro necessárias para estabilizar o casco.",
      "A quantidade de madeira do Báltico transportada para a Inglaterra."
    ],
    "correta": 0,
    "conceito": "Galera, vela e canhão",
    "comentario": "Alternativa A. O texto explica que a \"tonelada\" vinha da capacidade de transportar tonéis de vinho de Bordeaux, cada um contendo cerca de 252 galões. Por que as outras estão erradas: B, C e D são invenções baseadas em outros itens de comércio, mas não são a origem etimológica do termo no texto.",
    "fonte": "Willian Cezar.",
    "armadilha": "Associar tonelada ao peso de canhões (contexto bélico) em vez do contexto mercantil original (vinho)."
  },
  {
    "id": "hnv-o-f-03",
    "tipo": "multipla",
    "topico": "03-franca-antartica-corso-e-religiao",
    "dificuldade": "facil",
    "enunciado": "Ao estabelecer a França Antártica em 1555, Villegagnon impôs uma disciplina rígida aos colonos, o que incluiu a proibição do contato com mulheres indígenas e a obrigatoriedade de seguir padrões religiosos estritos. Esse cenário gerou tensões que foram agravadas por:",
    "alternativas": [
      "Um ataque imediato de piratas ingleses que destruiu o Forte Coligny no primeiro mês.",
      "A chegada de colonos calvinistas e luteranos em 1557, trazendo conflitos religiosos para a ilha.",
      "Uma aliança secreta entre Villegagnon e o governador Tomé de Souza contra os indígenas.",
      "O desinteresse total da Coroa Francesa pelo projeto desde o dia da partida."
    ],
    "correta": 1,
    "conceito": "França Antártica, corso e religião",
    "comentario": "Alternativa B. A segunda expedição trouxe protestantes que logo entraram em conflito com a visão católica de Villegagnon sobre rituais como a Eucaristia. Por que as outras estão erradas: A é factualmente incorreta (o forte durou anos); C é impossível (eram inimigos); D é falsa, pois Henrique II apoiou o projeto inicialmente.",
    "fonte": "Maria Fernanda Bicalho.",
    "armadilha": "Achar que a colônia fracassou apenas por falta de comida, ignorando o fator central da \"peçonha luterana\" e da disciplina religiosa."
  },
  {
    "id": "hnv-o-f-04",
    "tipo": "multipla",
    "topico": "05-brasil-holandes-restauracao-e-imperio",
    "dificuldade": "facil",
    "enunciado": "Marcello Loureiro descreve o governo de D. João IV como um Estado Polissinodal, uma característica fundamental da monarquia portuguesa no século XVII. Assinale a alternativa que define corretamente esse conceito:",
    "alternativas": [
      "Um governo exercido exclusivamente pelo Rei, sem a consulta de qualquer órgão.",
      "Um sistema baseado no poder de um único conselho militar que comandava as colônias.",
      "Um modelo composto por várias instâncias e conselhos (como o de Guerra e o Ultramarino) que produziam pareceres para assessorar o Rei.",
      "Uma administração descentralizada onde cada governador de colônia criava suas próprias leis."
    ],
    "correta": 2,
    "conceito": "Restauração e império atlântico",
    "comentario": "Alternativa C. O termo \"polissinodal\" refere-se à composição de várias \"cabeças\" ou conselhos que deliberavam sobre o império. Por que as outras estão erradas: A descreve o absolutismo puro (não o polissinodal luso); B simplifica o sistema que tinha vários conselhos; D confunde a \"tirania da distância\" com o modelo de governo formal.",
    "fonte": "Marcello Loureiro.",
    "armadilha": "Confundir a morosidade do processo (consequência) com a estrutura do governo (conceito)."
  },
  {
    "id": "hnv-o-f-05",
    "tipo": "multipla",
    "topico": "04-ocupacoes-francesas-e-holandesas",
    "dificuldade": "facil",
    "enunciado": "Na Batalha Naval de Abrolhos (1631), as esquadras de D. Antônio Oquendo (ibérica) e Adrian Pater (holandesa) se enfrentaram em um dos maiores combates do Atlântico. Sobre o resultado dessa batalha, é correto afirmar que:",
    "alternativas": [
      "Foi uma vitória tática e estratégica holandesa que expulsou os portugueses da Bahia.",
      "Resultou na morte do comandante ibérico D. Antônio Oquendo logo nos primeiros minutos.",
      "Foi uma vitória estratégica ibérica, pois permitiu o desembarque de tropas para reforçar o Arraial de Bom Jesus.",
      "Marcou o fim definitivo da Companhia das Índias Ocidentais no Brasil."
    ],
    "correta": 2,
    "conceito": "Operações navais holandesas",
    "comentario": "Alternativa C. Embora tenha havido perdas em ambos os lados, o objetivo de Oquendo de reforçar a resistência em Pernambuco foi atingido. Por que as outras estão erradas: A é falsa (Pater morreu, não Oquendo); B inverte os comandantes; D é falsa, pois a WIC durou até 1654.",
    "fonte": "Willian Cezar.",
    "armadilha": "Focar apenas na destruição dos navios (tática) e esquecer o desembarque de tropas (estratégica)."
  },
  {
    "id": "hnv-o-f-06",
    "tipo": "multipla",
    "topico": "02-da-galera-ao-navio-de-vela",
    "dificuldade": "facil",
    "enunciado": "A Batalha de Sluys (1340) é citada como um marco nas guerras navais. Complete a lacuna corretamente: Embora os franceses tenham utilizado os primeiros ___________ a bordo, a tática predominante e decisiva para a vitória inglesa foi a ____________.",
    "alternativas": [
      "mosquetes / manobra de esporão.",
      "corvos / propulsão a remo.",
      "canhões / abordagem e luta corpo a corpo nos conveses.",
      "arqueiros / utilização do fogo grego."
    ],
    "correta": 2,
    "conceito": "Galera, vela e canhão",
    "comentario": "Alternativa C. O texto afirma que, apesar dos primeiros canhões, a vitória inglesa veio pela abordagem tradicional. Por que as outras estão erradas: A, B e D citam tecnologias não relacionadas ao evento ou ao período conforme descrito no texto.",
    "fonte": "Willian Cezar.",
    "armadilha": "Achar que a presença de canhões significa que eles decidiram a batalha; na transição, a abordagem ainda era soberana."
  },
  {
    "id": "hnv-o-f-07",
    "tipo": "multipla",
    "topico": "03-franca-antartica-corso-e-religiao",
    "dificuldade": "facil",
    "enunciado": "A respeito da França Antártica, é correto afirmar que os franceses conseguiram se manter na Baía de Guanabara por mais de uma década devido, principalmente, à aliança com qual grupo indígena?",
    "alternativas": [
      "Tupiniquins.",
      "Temiminós.",
      "Tamoios (ou Tupinambás).",
      "Aimorés."
    ],
    "correta": 2,
    "conceito": "França Antártica, corso e religião",
    "comentario": "Alternativa C. Os Tamoios forneceram alimentos, mão de obra e apoio militar aos franceses contra os portugueses. Por que as outras estão erradas: A e B eram aliados dos portugueses (especialmente Araribóia, dos Temiminós); D não participou dessa aliança central.",
    "fonte": "Maria Fernanda Bicalho / Willian Cezar.",
    "armadilha": "Confundir os nomes das tribos; lembre-se que Araribóia (aliado luso) lutou contra os Tamoios (aliados franceses)."
  },
  {
    "id": "hnv-o-f-08",
    "tipo": "multipla",
    "topico": "05-brasil-holandes-restauracao-e-imperio",
    "dificuldade": "facil",
    "enunciado": "De acordo com Marcello Loureiro, a Holanda (Províncias Unidas) não podia atacar Portugal de forma aberta e total logo após 1640 porque possuía um interesse econômico específico em uma localidade portuguesa. Que interesse era esse?",
    "alternativas": [
      "O comércio do sal de Setúbal, vital para a indústria do arenque.",
      "As minas de ouro recentemente descobertas no Rio de Janeiro.",
      "O monopólio da venda de vinho de Bordeaux para Lisboa.",
      "A compra de navios de guerra construídos nos estaleiros do Tejo."
    ],
    "correta": 0,
    "conceito": "Restauração e império atlântico",
    "comentario": "Alternativa A. O sal era fundamental para a conservação de peixes na Holanda, o que moderava a agressividade batava contra a metrópole portuguesa. Por que as outras estão erradas: B é anacronismo (ouro só no fim do XVII); C e D são invenções sem base no texto.",
    "fonte": "Marcello Loureiro.",
    "armadilha": "Achar que a Holanda temia a marinha portuguesa (que tinha apenas 13 navios); o temor era econômico."
  },
  {
    "id": "hnv-o-f-09",
    "tipo": "multipla",
    "topico": "01-mediterraneo-antigo-e-batalha-de-mylae",
    "dificuldade": "facil",
    "enunciado": "Sobre o modelo de exército de Roma durante a Primeira Guerra Púnica, é correto afirmar que:",
    "alternativas": [
      "Era composto majoritariamente por mercenários profissionais do Egito e da Gália.",
      "Era um exército \"cívico\", formado por cidadãos que viam a guerra como um dever para com a República.",
      "Dependia de escravos libertos que ganhavam a cidadania após a primeira batalha.",
      "Era financiado exclusivamente por comerciantes gregos interessados na queda de Cartago."
    ],
    "correta": 1,
    "conceito": "Mediterrâneo antigo e Mylae",
    "comentario": "Alternativa B. O cidadão romano servia no exército como dever ligado ao censo e à sua posição social. Por que as outras estão erradas: A descreve o modelo de Cartago (mercenários); C e D são historicamente incorretas segundo o texto.",
    "fonte": "Leonardo Ferreira.",
    "armadilha": "Confundir a economia agropastoril de Roma (que gerava o soldado-cidadão) com a economia mercantil de Cartago (que gerava o uso de mercenários)."
  },
  {
    "id": "hnv-o-f-10",
    "tipo": "multipla",
    "topico": "05-brasil-holandes-restauracao-e-imperio",
    "dificuldade": "facil",
    "enunciado": "Salvador Correia de Sá e Benevides foi uma figura central na defesa do império. Assinale a alternativa que indica uma ação correta atribuída a ele nos textos:",
    "alternativas": [
      "Fundou a cidade de São Sebastião do Rio de Janeiro em 1565.",
      "Liderou a reconquista de Angola em 1648, financiada em grande parte por negociantes do Rio de Janeiro.",
      "Foi o primeiro pastor calvinista a pregar na ilha de Villegagnon.",
      "Comandou a esquadra holandesa que invadiu Salvador em 1624."
    ],
    "correta": 1,
    "conceito": "Restauração e império atlântico",
    "comentario": "Alternativa B. Ele organizou a expedição no Brasil com recursos de latifundiários e negociantes locais para retomar o suprimento de escravizados. Por que as outras estão erradas: A foi Estácio de Sá; C foi Jean de Léry; D foi Willekens.",
    "fonte": "Marcello Loureiro / Willian Cezar.",
    "armadilha": "Confundir os parentes \"Sá\" (Estácio, Mem, Salvador); Salvador é o herói da reconquista de Angola no século XVII."
  },
  {
    "id": "hnv-o-m-01",
    "tipo": "multipla",
    "topico": "01-mediterraneo-antigo-e-batalha-de-mylae",
    "dificuldade": "medio",
    "enunciado": `Sobre a geopolítica da Primeira Guerra Púnica e as motivações para o conflito entre Roma e Cartago, analise as seguintes afirmativas:

I. A Sicília era estratégica para Roma devido ao seu valor agrícola e à proximidade com a Península Itálica, funcionando como uma barreira defensiva contra invasões cartaginesas.
II. O controle do Estreito de Messina foi o estopim formal da guerra, iniciado pelo pedido de socorro do povo marmentino aos romanos contra Siracusa e Cartago.
III. Cartago desejava o controle da Sicília para garantir o suprimento de prata necessária para pagar seus exércitos mercenários, uma vez que as minas ibéricas estavam exauridas.

Está(ão) correta(s):`,
    "alternativas": [
      "Apenas I e II.",
      "Apenas II e III.",
      "Apenas I e III.",
      "Todas as afirmativas."
    ],
    "correta": 0,
    "conceito": "Mediterrâneo antigo e Mylae",
    "comentario": "Resposta: A. Raciocínio: I e II estão corretas conforme o texto. A III está incorreta porque a Ibéria (Espanha) era, na verdade, a principal fonte produtora de prata e riqueza para Cartago naquele período, e não estava exaurida.",
    "fonte": "Ferreira (\"Batalha de Mylae\").",
    "armadilha": "Achar que a prata vinha da Sicília. A Sicília era estratégica pelos cereais e pelo controle de rotas."
  },
  {
    "id": "hnv-o-m-02",
    "tipo": "multipla",
    "topico": "03-franca-antartica-corso-e-religiao",
    "dificuldade": "medio",
    "enunciado": "No contexto da disputa colonial no século XVI, a distinção jurídica entre o corso e a pirataria era fundamental para a política externa das monarquias europeias. Com base no texto de Maria Fernanda Bicalho, assinale a alternativa que descreve corretamente a lógica do corso francês:",
    "alternativas": [
      "Era uma atividade de rapina ilegal, praticada por indivíduos sem pátria que visavam apenas o enriquecimento pessoal através da pilhagem de navios mercantes.",
      "Tratava-se de um empreendimento planejado e oficialmente amparado pela Coroa francesa, utilizado para contestar o monopólio ibérico e a política de mare clausum.",
      "Era uma tática de guerra estritamente religiosa, financiada pelos jesuítas franceses para combater a influência luterana no litoral da América Portuguesa.",
      "Consistia na navegação livre e pacífica de navios mercantes franceses que buscavam apenas realizar o escambo de pau-brasil sem o uso de armas."
    ],
    "correta": 1,
    "conceito": "França Antártica, corso e religião",
    "comentario": "Resposta: B. Raciocínio: O corso recebia respaldo formal (aval) dos governantes e inseria-se na disputa entre monarquias. Era uma ferramenta política para defender o mare liberum contra o Tratado de Tordesilhas.",
    "fonte": "Bicalho (\"A França Antártica...\").",
    "armadilha": "Confundir corso com pirataria (atividade privada sem respaldo oficial)."
  },
  {
    "id": "hnv-o-m-03",
    "tipo": "multipla",
    "topico": "04-ocupacoes-francesas-e-holandesas",
    "dificuldade": "medio",
    "enunciado": "A invasão holandesa da Bahia (1624-1625) e a subsequente reação luso-espanhola, conhecida como \"Jornada dos Vassalos\", representaram um esforço naval sem precedentes no Atlântico Sul. Sobre este evento, é correto afirmar:",
    "alternativas": [
      "Os holandeses ocuparam Salvador com facilidade porque a cidade não possuía qualquer sistema de fortificação ou defesa naval.",
      "A \"Jornada dos Vassalos\" foi uma frota composta exclusivamente por mercenários ingleses contratados por D. Fadrique de Toledo para retomar a Bahia.",
      "A reação ibérica combinou um bloqueio naval rigoroso com o cerco terrestre, forçando a expulsão definitiva dos holandeses de Salvador em 1625.",
      "Jacob Willekens conseguiu manter o controle da Bahia até a Restauração de 1640, quando Portugal cedeu o território em troca de apoio contra a Espanha."
    ],
    "correta": 2,
    "conceito": "Operações navais holandesas",
    "comentario": "Resposta: C. Raciocínio: A operação envolveu 52 navios e mais de 12 mil homens. O bloqueio naval e o cerco terrestre foram as bases da vitória de D. Fadrique.",
    "fonte": "Cezar (\"História das Guerras Navais\" / HNV P1).",
    "armadilha": "Achar que a reconquista foi rápida e sem esforço, ou que os holandeses ficaram na Bahia por décadas (eles foram expulsos e depois atacaram Pernambuco)."
  },
  {
    "id": "hnv-o-m-04",
    "tipo": "multipla",
    "topico": "05-brasil-holandes-restauracao-e-imperio",
    "dificuldade": "medio",
    "enunciado": "Marcello Loureiro afirma que governar o Império Marítimo Português após 1640 era, em larga medida, \"informar e ser informado\". Sobre a gestão do império e a circulação de informações, assinale a alternativa que preenche corretamente as lacunas: A estrutura de governo era __________, composta por vários conselhos dotados de autogoverno. O processo decisório era prejudicado pela __________, que tornava as comunicações morosas e permitia que oficiais locais __________ as ordens reais.",
    "alternativas": [
      "centralizada / falta de navios / ignorassem.",
      "polissinodal / tirania da distância / adaptassem.",
      "absolutista / burocracia excessiva / recusassem.",
      "democrática / agitação dos mares / contestassem."
    ],
    "correta": 1,
    "conceito": "Restauração e império atlântico",
    "comentario": "Resposta: B. Raciocínio: O Estado era polissinodal (vários conselhos). A \"tirania da distância\" (Russell-Wood) dificultava o controle. Os oficiais locais interpretavam e adaptavam as ordens conforme as realidades locais.",
    "fonte": "Loureiro (\"Em miserável estado\").",
    "armadilha": "Achar que a adaptação local era uma rebelião; na verdade, era uma necessidade prática da administração a distância."
  },
  {
    "id": "hnv-o-m-05",
    "tipo": "multipla",
    "topico": "02-da-galera-ao-navio-de-vela",
    "dificuldade": "medio",
    "enunciado": "Sobre a evolução tecnológica dos navios na Baixa Idade Média e a transição da galera para a coga, compare as duas embarcações através da relação de Causa e Efeito: (Causa) A necessidade de maior capacidade de carga para o comércio da Liga Hanseática e a resistência a mares turbulentos... (Efeito) ...levou ao desenvolvimento da/o:",
    "alternativas": [
      "Galera, com sua estrutura leve e movida a remo, focada na velocidade no Mar Mediterrâneo.",
      "Esporão de bronze, peça fundamental para o abalroamento de navios piratas no Canal da Mancha.",
      "Coga, com borda alta e quilha sólida, que posteriormente foi militarizada com castelos e gáveas.",
      "Dracar viking, que substituiu definitivamente as cogas no comércio de vinhos de Bordeaux."
    ],
    "correta": 2,
    "conceito": "Galera, vela e canhão",
    "comentario": "Resposta: C. Raciocínio: A coga surgiu como navio mercante bojudos e de borda alta. A militarização ocorreu para prover defesa contra pirataria e conflitos regionais.",
    "fonte": "Cezar (\"História das Guerras Navais\" / HNV P1).",
    "armadilha": "Inverter os papéis; a galera era mediterrânea e focada no remo/velocidade, não na carga pesada do Norte."
  },
  {
    "id": "hnv-o-m-06",
    "tipo": "multipla",
    "topico": "05-brasil-holandes-restauracao-e-imperio",
    "dificuldade": "medio",
    "enunciado": `Analise as proposições abaixo sobre o contexto internacional de Portugal em 1640:

I. Portugal mantinha uma relação ambígua com a Holanda: precisava de seu apoio contra a Espanha na Europa, mas dependia da reconquista dos territórios ultramarinos (Brasil/Angola) tomados pela WIC.
II. A defasagem naval era crítica: enquanto as Províncias Unidas possuíam cerca de 14.000 navios, Portugal contava com apenas 13 embarcações.
III. O comércio do sal de Setúbal era um fator moderador, pois os holandeses precisavam desse insumo para a sua indústria pesqueira de arenque.

Está(ão) correta(s):`,
    "alternativas": [
      "Apenas I.",
      "Apenas II e III.",
      "Apenas I e III.",
      "I, II e III."
    ],
    "correta": 3,
    "conceito": "Restauração e império atlântico",
    "comentario": "Resposta: D. Raciocínio: Todas as informações constam no texto de Loureiro. A disparidade naval (14.000 vs 13) é o argumento do \"Papel-Forte\" de Vieira.",
    "fonte": "Loureiro (\"Em miserável estado\").",
    "armadilha": "Duvidar do número de navios (13 parece pouco, mas é o dado histórico citado no texto)."
  },
  {
    "id": "hnv-o-m-07",
    "tipo": "multipla",
    "topico": "03-franca-antartica-corso-e-religiao",
    "dificuldade": "medio",
    "enunciado": "A trajetória de Jean de Bolés e as polêmicas sobre a \"peçonha luterana\" revelam muito sobre a cultura política do Rio de Janeiro colonial. Assinale a exceção entre as ideias defendidas por Bolés ou as situações por ele vivenciadas:",
    "alternativas": [
      "Afirmava que o Papa não deveria ser respeitado e que a hóstia consagrada era apenas um pedaço de pão.",
      "Defendia que a \"peçonha luterana\" era uma invenção dos jesuítas para obter terras dos índios Tamoios.",
      "Foi preso pelo Bispo na Bahia e enviado a ferros para os cárceres da Inquisição em Lisboa.",
      "Conviveu com o governador Mem de Sá e ajudou na conquista do Forte Coligny por conhecer suas fraquezas internas."
    ],
    "correta": 1,
    "conceito": "França Antártica, corso e religião",
    "comentario": "Resposta: B. Raciocínio: B é a incorreta. O termo \"peçonha luterana\" era usado pelos católicos contra os reformados. Bolés defendia ideias heréticas conforme os depoimentos de Maria Marques, mas o texto não diz que ele alegava ser uma \"invenção dos jesuítas\".",
    "fonte": "Bicalho (\"A França Antártica...\").",
    "armadilha": "Esquecer que, apesar de \"herético\", ele foi um aliado militar vital para os portugueses em 1560."
  },
  {
    "id": "hnv-o-m-08",
    "tipo": "multipla",
    "topico": "05-brasil-holandes-restauracao-e-imperio",
    "dificuldade": "medio",
    "enunciado": "\"A autoridade real era filtrada, mediada e dispersada pelos oficiais régios e diversas outras instâncias de poder local.\" Esta frase, citada por Marcello Loureiro, refere-se a uma característica da governabilidade imperial portuguesa. Assinale a alternativa que explica essa afirmação:",
    "alternativas": [
      "O Rei de Portugal não tinha interesse real em governar as colônias, deixando-as sob o controle total dos indígenas.",
      "A descentralização era uma falha do sistema que permitia a corrupção generalizada de todos os oficiais da Coroa.",
      "A distância e a autonomia dos conselhos exigiam que ordens metropolitanas fossem adaptadas às realidades e negociações locais.",
      "Os oficiais régios em Salvador e Luanda eram funcionários espanhóis que sabotavam as ordens de D. João IV."
    ],
    "correta": 2,
    "conceito": "Restauração e império atlântico",
    "comentario": "Resposta: C. Raciocínio: J. H. Elliott e Russell-Wood explicam que a \"descentralização da autoridade\" era provocada pela extensa área e pela tirania da distância.",
    "fonte": "Loureiro (\"Em miserável estado\").",
    "armadilha": "Achar que \"dispersada\" significa \"inexistente\"; o poder real existia, mas era mediado."
  },
  {
    "id": "hnv-o-m-09",
    "tipo": "multipla",
    "topico": "01-mediterraneo-antigo-e-batalha-de-mylae",
    "dificuldade": "medio",
    "enunciado": "Na Batalha de Mylae, a captura da nau capitânia de Aníbal Giscão pelos romanos representou um marco simbólico e militar. Sobre as consequências imediatas da vitória romana, assinale a correta:",
    "alternativas": [
      "Roma assinou um tratado de paz imediato com Cartago, dividindo a Sicília em duas partes iguais.",
      "O comandante romano Gaio Duílio foi homenageado com uma coluna rostrata, decorada com os esporões dos navios capturados.",
      "Cartago abandonou definitivamente a tecnologia do esporão e passou a construir navios equipados com corvos.",
      "A Batalha de Mylae resultou na ocupação imediata e total da cidade de Cartago no norte da África."
    ],
    "correta": 1,
    "conceito": "Mediterrâneo antigo e Mylae",
    "comentario": "Resposta: B. Raciocínio: Gaio Duílio recebeu o direito a uma coluna rostrata no Fórum Romano, informando o número de barcos capturados e o valor dos tesouros.",
    "fonte": "Ferreira (\"Batalha de Mylae\").",
    "armadilha": "Achar que a guerra acabou ali (Mylae foi em 260 a.C., mas a guerra durou até 241 a.C.)."
  },
  {
    "id": "hnv-o-m-10",
    "tipo": "multipla",
    "topico": "05-brasil-holandes-restauracao-e-imperio",
    "dificuldade": "medio",
    "enunciado": "A respeito do papel de Salvador Correia de Sá e Benevides nos pareceres consultivos de 1643, é correto afirmar:",
    "alternativas": [
      "Ele recomendava que o Nordeste brasileiro fosse abandonado para que Portugal focasse todos os recursos na invasão de Buenos Aires.",
      "Propôs que a reconquista de Angola fosse feita com índios flecheiros e paulistas, em virtude da amizade com os negros jagas.",
      "Afirmava que o comércio com Buenos Aires era a prioridade absoluta, devendo-se pagar tributos à Espanha para reabrir o porto.",
      "Foi o primeiro oficial a sugerir que a WIC (Companhia das Índias Ocidentais) deveria ser contratada por Portugal para defender o Rio de Janeiro."
    ],
    "correta": 1,
    "conceito": "Restauração e império atlântico",
    "comentario": "Resposta: B. Raciocínio: Salvador de Sá sugeriu uma expedição de 600 infantes, incluindo índios flecheiros comandados por paulistas, aproveitando a amizade com os jagas.",
    "fonte": "Loureiro (\"Em miserável estado\").",
    "armadilha": "Salvador queria sim invadir Buenos Aires para obter prata, mas o parecer dele sobre Angola enfatizava a necessidade urgente de negros para sustentar o Brasil."
  },
  {
    "id": "hnv-o-d-01",
    "tipo": "multipla",
    "topico": "05-brasil-holandes-restauracao-e-imperio",
    "dificuldade": "dificil",
    "enunciado": `O Estado português no pós-1640 é definido por Marcello Loureiro como uma "monarquia pluricontinental" operada por um sistema "polissinodal", onde governar era, essencialmente, "informar e ser informado". Contudo, essa gestão dependia da circulação física de papéis sob o "ritmo das velas". Simultaneamente, Willian Cezar destaca a imensa disparidade naval luso-holandesa, citando o "Papel-Forte" de Vieira: Portugal possuía apenas 13 navios frente aos 14.000 da Holanda. Essa precariedade material impunha o que a historiografia chama de "descerebração" do governo central, pois a "tirania da distância" e a hegemonia inimiga nos mares filtravam a autoridade régia. A partir dessa conjuntura, avalie as afirmativas:

I. A autonomia dos oficiais régios na periferia (como no Rio e em Angola) era uma forma de rebeldia política contra a nova dinastia de Bragança.
II. A morosidade polissinodal, somada à defasagem naval, forçava a adaptação das ordens de Lisboa às realidades e negociações locais.
III. O domínio holandês sobre o "ritmo das velas" impedia que o centro recebesse informações acuradas, tornando o processo decisório "descerebrado".

Está correto o que se afirma em:`,
    "alternativas": [
      "I e II apenas.",
      "II e III apenas.",
      "I e III apenas.",
      "I, II e III."
    ],
    "correta": 1,
    "conceito": "Restauração e império atlântico",
    "comentario": "Alternativa Correta: B. Explicação: A afirmativa I está incorreta porque a autonomia não era rebeldia, mas uma necessidade prática imposta pela distância e falta de meios (Loureiro). As afirmativas II e III sintetizam o argumento de que a estrutura administrativa (polissinodal) colidia com a limitação tecnológica e numérica da marinha lusa, gerando a mediação local da autoridade (Loureiro). Relação: Conecta a estrutura de governo (Loureiro) à incapacidade material de mantê-la (Cezar/Vieira). Caminho de raciocínio: Crise de 1640 -> 13 navios vs 14.000 -> lentidão da informação -> oficiais locais decidem sozinhos -> governo \"descerebrado\".",
    "fonte": "Loureiro e Cezar (via citação de Vieira no texto de Loureiro).",
    "armadilha": "Insinuar que a autonomia periférica era intencionalmente subversiva (I)."
  },
  {
    "id": "hnv-o-d-02",
    "tipo": "multipla",
    "topico": "01-mediterraneo-antigo-e-batalha-de-mylae",
    "dificuldade": "dificil",
    "enunciado": "Leonardo Ferreira, ao analisar a Batalha de Mylae, destaca que a resiliência de Roma advinha de seu exército \"cívico\", onde o cidadão-proprietário lutava por dever e posição social, suportando perdas que arruinariam o modelo mercantil de mercenários de Cartago. Maria Fernanda Bicalho, ao discutir a \"Guerra Viva\" na conquista do Rio de Janeiro, aponta para uma lógica similar de engajamento: vassalos que disponibilizavam \"vidas e fazendas\" em prol do Rei, não por um soldo profissional, mas pela expectativa de mercês e inserção na \"nobreza da terra\". Em ambos os contextos, o financiamento da guerra e a manutenção do poder naval/territorial dependiam de um pacto entre o combatente e a entidade política (República ou Coroa). Considerando os dois processos, identifica-se um erro interpretativo na seguinte afirmação:",
    "alternativas": [
      "Roma venceu por possuir uma marinha profissional permanente, superior à logística de mercenários cartagineses.",
      "A \"Guerra Viva\" e o civismo romano representam formas de externalização dos custos militares do Estado para os agentes sociais.",
      "O sistema de mercês no Brasil e o dever de militia em Roma criavam uma coesão política que compensava inferioridades técnicas iniciais.",
      "Cartago fracassou em guerras longas devido ao custo insustentável de manter tropas em prontidão permanente sem uma base cívica."
    ],
    "correta": 0,
    "conceito": "Mediterrâneo antigo e Mylae",
    "comentario": "Alternativa Correta: A. Explicação: O erro sutil é o anacronismo e a imprecisão técnica: o exército/marinha romano não era profissional nem permanente; era cívico e sazonal (Ferreira). Relação: Comparam-se os modelos de recrutamento e a sustentabilidade econômica do esforço de guerra. Caminho de raciocínio: Roma = dever cívico/fazenda própria; Brasil = serviço/vassalo/mercê; Cartago = dinheiro/mercenário -> O erro é chamar o modelo romano de profissional.",
    "fonte": "Ferreira e Bicalho.",
    "armadilha": "Achar que \"eficiência\" em Roma significava \"profissionalismo moderno\"."
  },
  {
    "id": "hnv-o-d-03",
    "tipo": "multipla",
    "topico": "03-franca-antartica-corso-e-religiao",
    "dificuldade": "dificil",
    "enunciado": "Jean de Bolés (ou Jean Cointá) é descrito por Bicalho como um \"intermediário cultural\" douto em escrituras, que ajudou Mem de Sá a destruir o Forte Coligny por conhecer suas fraquezas. Contudo, apesar de seu serviço militar na \"guerra viva\", foi perseguido pela Inquisição por suas ideias reformistas. Marcello Loureiro, ao tratar da gestão imperial, mostra que Salvador de Sá também atuava como um intermediário, mas no campo mercantil, financiando a reconquista de Angola (1648) com capital de negociantes do Rio. Ambos os casos demonstram que a projeção do poder naval português dependia de indivíduos que operavam nas frestas da legalidade e da ortodoxia, mediando interesses da Coroa com as realidades locais. Sobre esses intermediários e a governabilidade, é correto afirmar:",
    "alternativas": [
      "O serviço militar (Guerra Viva) de Bolés garantiu-lhe imunidade religiosa, mostrando a primazia do Império sobre a Fé.",
      "A trajetória de Bolés ilustra a \"bifrontalidade\" da ameaça francesa: uma contestação política aliada à heresia religiosa.",
      "Salvador de Sá agiu de forma independente de Lisboa porque a Inquisição o proibira de comercializar com Angola.",
      "A Inquisição de Goa executou Bolés porque ele se recusou a fornecer informações navais sobre a Baía de Guanabara."
    ],
    "correta": 1,
    "conceito": "França Antártica, corso e religião",
    "comentario": "Alternativa Correta: B. Explicação: Bolés representava tanto o perigo militar francês quanto a \"peçonha luterana\" (Bicalho). A alternativa A está errada pois ele foi preso apesar da ajuda (Bicalho). A C e D são invenções sem base nas fontes. Relação: Relaciona o papel do indivíduo \"douto\" e do oficial régio na manutenção do império.",
    "fonte": "Bicalho e Loureiro.",
    "armadilha": "Achar que a utilidade militar de Bolés o protegeu da intolerância religiosa."
  },
  {
    "id": "hnv-o-d-04",
    "tipo": "multipla",
    "topico": "02-da-galera-ao-navio-de-vela",
    "dificuldade": "dificil",
    "enunciado": "A transição tecnológica da galera mediterrânea para o navio oceânico de vela e canhão é descrita por Willian Cezar como um divisor de águas estratégico. A coga militarizada, com castelos e borda alta, antecipou a \"fortaleza flutuante\", anulando a tática de abordagem das galeras. Paralelamente, Ferreira mostra que Roma, em Mylae, usou o corvus para \"terrestrializar\" o mar. Enquanto a coga usava a altura estrutural para defesa, o corvus usava a articulação técnica para forçar a infantaria sobre o convés inimigo. Em ambos os casos, o objetivo era superar a superioridade de manobra do adversário através de uma adaptação técnica. Relacionando essas tecnologias e seus contextos, assinale a combinação Verdadeiro (V) / Falso (F) correta: ( ) O binômio vela-canhão eliminou a necessidade de abordagem física desde o século XIV, como visto em Sluys. ( ) O leme central de cadaste foi uma inovação da coga que melhorou a manobrabilidade em relação ao leme lateral antigo. ( ) O corvus romano era fixo na proa, impedindo movimentos de rotação, o que limitava o ataque ao flanco inimigo. ( ) A borda alta do navio de vela norte-atlântico tornou-se o padrão para a futura guerra oceânica por permitir maior autonomia.",
    "alternativas": [
      "F - V - F - V.",
      "V - V - F - F.",
      "F - F - V - V.",
      "V - F - V - F."
    ],
    "correta": 0,
    "conceito": "Galera, vela e canhão",
    "comentario": "Alternativa Correta: A. Explicação: (F) Em Sluys (1340), a abordagem ainda foi a tática decisiva apesar dos primeiros canhões (Cezar). (V) O leme de cadaste foi uma inovação da coga (Cezar). (F) O corvus permitia rotação em torno de seu eixo (Ferreira). (V) A borda alta e autonomia definiram o navio de vela oceânico (Cezar). Relação: Evolução técnica do combate próximo (Antiguidade/Medieval) para a projeção oceânica.",
    "fonte": "Cezar e Ferreira.",
    "armadilha": "Afirmar que o canhão decidiu Sluys (inversão de cronologia tática)."
  },
  {
    "id": "hnv-o-d-05",
    "tipo": "multipla",
    "topico": "05-brasil-holandes-restauracao-e-imperio",
    "dificuldade": "dificil",
    "enunciado": "A ocupação holandesa de Angola (1641) gerou o que Marcello Loureiro descreve como um colapso nos circuitos mercantis do Atlântico Sul: \"sem negros não há Pernambuco\". A Batalha de Abrolhos (1631), descrita por Cezar, embora ocorrida dez anos antes, ilustra a tentativa luso-espanhola de manter o fluxo de recursos para o Arraial de Bom Jesus. A perda de Angola desestruturou a Fazenda Real e causou uma crise de liquidez, pois a prata de Potosí, que entrava pelo Prata em troca de escravizados, parou de circular. Sobre a conexão entre esses eventos navais e a economia imperial, é correto afirmar:",
    "alternativas": [
      "A vitória estratégica de Oquendo em Abrolhos garantiu a posse definitiva de Angola até 1648.",
      "O bloqueio holandês em Luanda visava, primariamente, impedir que a prata de Potosí chegasse a Salvador e Lisboa.",
      "A crise de liquidez no Brasil em 1641 foi causada pela superprodução de açúcar, que desvalorizou a moeda local.",
      "A reconquista de Angola em 1648 foi um empreendimento estatal português, financiado integralmente pelo Conselho da Fazenda de Lisboa."
    ],
    "correta": 1,
    "conceito": "Restauração e império atlântico",
    "comentario": "Alternativa Correta: B. Explicação: Loureiro explica que a falta de negros em Buenos Aires (devido à queda de Angola) paralisou a entrada do \"metal branco\" (prata), causando o impasse monetário (Loureiro). A opção A é anacrônica (Abrolhos foi em 1631, Luanda caiu em 1641). A D está errada pois foi financiada por negociantes do Rio (Loureiro). Relação: O impacto estratégico da interrupção de rotas navais na solvência financeira do império.",
    "fonte": "Loureiro e Cezar.",
    "armadilha": "Atribuir a crise à produção de açúcar (C), quando o texto foca na falta de escravos e prata."
  },
  {
    "id": "hnv-o-d-06",
    "tipo": "multipla",
    "topico": "05-brasil-holandes-restauracao-e-imperio",
    "dificuldade": "dificil",
    "enunciado": "A prática do corso francês no século XVI é distinguida por Bicalho da pirataria comum por ser um empreendimento planejado com respaldo formal da Coroa para contestar o mare clausum. Na década de 1640, Loureiro observa que a Holanda também moderava sua agressividade contra a metrópole portuguesa (apesar da guerra nas colônias) devido ao interesse no comércio do sal de Setúbal. Comparando esses dois contextos de restrição ou autorização da violência marítima, conclui-se que:",
    "alternativas": [
      "O corso francês e a moderação holandesa mostram que o mar era um espaço de anarquia total, onde tratados não tinham valor.",
      "O sal de Setúbal funcionava como um \"seguro diplomático\" para Portugal, impedindo um ataque batavo total ao Reino.",
      "Henrique II apoiava Villegagnon exclusivamente por motivos religiosos, ignorando os lucros do corso do pau-brasil.",
      "O Tratado de Tordesilhas foi aceito pela França como base para a política de mare liberum no Atlântico Sul."
    ],
    "correta": 1,
    "conceito": "Restauração e império atlântico",
    "comentario": "Alternativa Correta: B. Explicação: Loureiro afirma que os holandeses não agiam francamente contra Portugal metropolitano pelo interesse no sal para a indústria do arenque (Loureiro). A alternativa D é um erro conceitual: a França contestava Tordesilhas (Bicalho). Relação: O mar como espaço de negociação diplomática e econômica regulada por interesses materiais.",
    "fonte": "Bicalho e Loureiro.",
    "armadilha": "Confundir a defesa do mare liberum com a aceitação de Tordesilhas (D)."
  },
  {
    "id": "hnv-o-d-07",
    "tipo": "multipla",
    "topico": "05-brasil-holandes-restauracao-e-imperio",
    "dificuldade": "dificil",
    "enunciado": "A historiografia recente, citada por Loureiro (como Elliott e Russell-Wood), mitiga a noção de um poder real absoluto no império português, sugerindo que a autoridade era \"filtrada e dispersada\". No Rio de Janeiro, Bicalho demonstra que a elite (\"nobreza da terra\") construiu sua legitimidade através da \"Guerra Viva\", ocupando cargos e reivindicando sesmarias. Esse emaranhado de interesses locais criava uma governabilidade onde as ordens de Lisboa eram frequentemente adaptadas. Sobre essa dinâmica de poder, complete as lacunas do argumento histórico: \"A monarquia pluricontinental era um Estado __________, onde a 'tirania da distância' permitia que os agentes locais __________ as ordens régias, transformando a conquista militar em um mecanismo de __________ social e pacto político.\"",
    "alternativas": [
      "centralizado / ignorassem / repressão.",
      "polissinodal / adaptassem / ascensão.",
      "absolutista / repudiassem / estagnação.",
      "democrático / negociassem / igualdade."
    ],
    "correta": 1,
    "conceito": "Restauração e império atlântico",
    "comentario": "Alternativa Correta: B. Explicação: O Estado era polissinodal (Loureiro). Os agentes adaptavam as ordens (Loureiro). O sistema de mercês permitia ascensão social e pacto (Bicalho). Relação: Estrutura administrativa (polissinodal) vs. Prática social (Guerra Viva/Mercês).",
    "fonte": "Loureiro e Bicalho.",
    "armadilha": "Confundir \"polissinodal\" com \"absolutista\" (C)."
  },
  {
    "id": "hnv-o-d-08",
    "tipo": "multipla",
    "topico": "02-da-galera-ao-navio-de-vela",
    "dificuldade": "dificil",
    "enunciado": "Willian Cezar descreve a coga como um navio de casco sólido, quilha e borda alta, que oferecia melhor resistência às águas turbulentas do Mar do Norte. Já Leonardo Ferreira descreve as galeras mediterrâneas (trirremes e quinquerremes) como embarcações velozes, movidas a remo, preferidas para o abalroamento. No século XV, a coexistência desses dois modelos refletia a divisão entre mares fechados e a futura navegação oceânica. A respeito dessa evolução naval, assinale a afirmação incorreta:",
    "alternativas": [
      "A unidade de medida \"tonelada\" originou-se na capacidade de carga de vinhos das cogas em Bordeaux.",
      "As cogas originalmente possuíam leme lateral, adotando o leme central à popa apenas após sua militarização.",
      "A galera mediterrânea era inadequada para o Atlântico devido à sua baixa borda, que permitia a entrada de água em mares agitados.",
      "O esporão continuou sendo a arma primária dos navios ibéricos no Índico, substituindo o canhão em eficiência estratégica."
    ],
    "correta": 3,
    "conceito": "Galera, vela e canhão",
    "comentario": "Alternativa Correta: D. Explicação: Incorreta. Foi o binômio vela-canhão que permitiu o domínio estratégico português no Índico e Atlântico, e não o esporão (Cezar). Relação: Morfologia naval e adequação ao ambiente geográfico e estratégico.",
    "fonte": "Cezar e Ferreira.",
    "armadilha": "Achar que a galera, por ser clássica, dominou as grandes navegações oceânicas (C)."
  },
  {
    "id": "hnv-o-d-09",
    "tipo": "multipla",
    "topico": "05-brasil-holandes-restauracao-e-imperio",
    "dificuldade": "dificil",
    "enunciado": "A exaustão financeira de Portugal após 1640 é comparada por Loureiro ao \"miserável estado\" do reino. Em contrapartida, Ferreira explica que Cartago, apesar de rica, enfrentava crises de custos pois mercenários não aceitavam lutar sem soldo regular. No Brasil, Salvador de Sá financiou a reconquista de Angola com 60.000 cruzados obtidos de negociantes e latifundiários fluminenses, além de vender bens próprios. Essa comparação entre os modelos de financiamento revela que:",
    "alternativas": [
      "Portugal e Cartago falharam em delegar a guerra para agentes privados, dependendo apenas do tesouro central.",
      "O sucesso da reconquista de Angola foi uma vitória do capital privado colonial sobre a incapacidade financeira da Coroa.",
      "A elite cívica romana era mais rica que a nobreza da terra fluminense, permitindo a construção de 14.000 navios em 260 a.C.",
      "O soldo mercenário era mais barato que o sistema de mercês português, facilitando a defesa de Pernambuco."
    ],
    "correta": 1,
    "conceito": "Restauração e império atlântico",
    "comentario": "Alternativa Correta: B. Explicação: Loureiro detalha que Salvador de Sá levantou os recursos com negociantes e latifundiários do Rio, pois a Coroa estava exausta (Loureiro). A alternativa C é falsa (Roma não tinha 14.000 navios, esse número era da Holanda em 1640). A D inverte a lógica do texto. Relação: Logística financeira da guerra: capital público vs. capital privado/cívico.",
    "fonte": "Loureiro e Ferreira.",
    "armadilha": "Inverter os dados numéricos (14.000 navios era da Holanda, não de Roma) em C."
  },
  {
    "id": "hnv-o-d-10",
    "tipo": "multipla",
    "topico": "03-franca-antartica-corso-e-religiao",
    "dificuldade": "dificil",
    "enunciado": "A \"França Antártica\" de Villegagnon foi lida como uma ameaça religiosa devido à chegada de ministros calvinistas em 1557, como Jean de Léry. Bicalho afirma que o conflito contra os franceses e os Tamoios foi legitimado como uma \"Guerra Santa\" para extirpar a \"peçonha luterana\". No século seguinte, a ocupação holandesa do Nordeste também foi marcada por tensões religiosas, embora Nassau tenha implementado uma política de relativa tolerância para governar o açúcar. A respeito das motivações religiosas e navais nessas ocupações, é correto afirmar:",
    "alternativas": [
      "A aliança entre Villegagnon e os Tamoios foi rompida imediatamente após a descoberta de que os índios eram calvinistas.",
      "A expulsão dos franceses em 1567 foi justificada pela Igreja exclusivamente pela prática de pirataria, e não por heresia.",
      "A \"bifrontalidade\" do projeto português no Rio envolvia a solidariedade entre a expansão do Império e a defesa da Fé (Catolicismo).",
      "Calabar foi um traidor dos holandeses que se converteu ao calvinismo para ajudar a resistência no Arraial de Bom Jesus."
    ],
    "correta": 2,
    "conceito": "França Antártica, corso e religião",
    "comentario": "Alternativa Correta: C. Explicação: Bicalho define o processo colonizador como bifronte: Fé e Império (Bicalho). A alternativa A é falsa (índios não eram calvinistas). A B ignora a \"peçonha luterana\". A D inverte o papel de Calabar (ele ajudou os holandeses - Cezar). Relação: O papel da religião como instrumento de legitimação da guerra e da conquista naval.",
    "fonte": "Bicalho e Cezar.",
    "armadilha": "Confundir a atuação de Calabar (ajudou holandeses) com a resistência (D)"
  }
];

export const verdadeiroFalso: QuestaoVF[] = [
  {
    "id": "hnv-vf-f-01",
    "tipo": "vf",
    "topico": "01-mediterraneo-antigo-e-batalha-de-mylae",
    "dificuldade": "facil",
    "afirmacao": "Enquanto Roma possuía um exército cívico de nativos, Cartago dependia da contratação de mercenários de diversas regiões, como Numídia e Gália.",
    "correta": true,
    "comentario": "Gabarito: Verdadeiro. Cartago não tinha nativos em número suficiente e usava sua riqueza para contratar estrangeiros.",
    "fonte": "Leonardo Ferreira",
    "armadilha": "Achar que \"profissional\" e \"cívico\" são a mesma coisa. O mercenário é profissional, o romano era um cidadão-soldado."
  },
  {
    "id": "hnv-vf-f-02",
    "tipo": "vf",
    "topico": "01-mediterraneo-antigo-e-batalha-de-mylae",
    "dificuldade": "facil",
    "afirmacao": "O corvus foi uma tecnologia naval desenvolvida originalmente pelos cartagineses para facilitar o abalroamento de navios romanos.",
    "correta": false,
    "comentario": "Gabarito: Falso. O corvus foi uma inovação romana para anular a superioridade de manobra cartaginesa por meio da abordagem.",
    "fonte": "Leonardo Ferreira",
    "armadilha": "Associar qualquer tecnologia naval de Mylae a Cartago por ela ser a \"potência do mar\"."
  },
  {
    "id": "hnv-vf-f-03",
    "tipo": "vf",
    "topico": "02-da-galera-ao-navio-de-vela",
    "dificuldade": "facil",
    "afirmacao": "A coga, ao ser militarizada, passou a contar com o leme central à popa (leme de cadaste), o que melhorava a sua manobrabilidade em relação ao leme lateral.",
    "correta": true,
    "comentario": "Gabarito: Verdadeiro. Foi uma das inovações técnicas da coga para se tornar um navio de guerra eficaz.",
    "fonte": "Willian Cezar",
    "armadilha": "Confundir o leme de popa com o remo de direção antigo."
  },
  {
    "id": "hnv-vf-f-04",
    "tipo": "vf",
    "topico": "05-brasil-holandes-restauracao-e-imperio",
    "dificuldade": "facil",
    "afirmacao": "Em 1640, no início da Restauração, a marinha portuguesa era numericamente superior à holandesa, contando com mais de 14.000 embarcações de guerra.",
    "correta": false,
    "comentario": "Gabarito: Falso. A defasagem era imensa: a Holanda tinha 14.000 navios, enquanto Portugal possuía apenas 13.",
    "fonte": "Marcello Loureiro (citação do \"Papel-Forte\")",
    "armadilha": "Inverter os números das potências. Portugal estava em \"miserável estado\"."
  },
  {
    "id": "hnv-vf-f-05",
    "tipo": "vf",
    "topico": "03-franca-antartica-corso-e-religiao",
    "dificuldade": "facil",
    "afirmacao": "Jean de Bolés, o francês que ajudou Mem de Sá a destruir o Forte Coligny, acabou sendo condenado à morte pela Inquisição de Goa em 1572.",
    "correta": true,
    "comentario": "Gabarito: Verdadeiro. Apesar de ajudar os portugueses, suas ideias heréticas o levaram à fogueira nas Índias.",
    "fonte": "Maria Fernanda Bicalho",
    "armadilha": "Achar que, por ter ajudado na guerra, ele foi perdoado pela Igreja. A \"peçonha luterana\" era imperdoável."
  },
  {
    "id": "hnv-vf-f-06",
    "tipo": "vf",
    "topico": "03-franca-antartica-corso-e-religiao",
    "dificuldade": "facil",
    "afirmacao": "O Forte Coligny, na Baía de Guanabara, foi construído pelos portugueses para servir de base no ataque final contra Villegagnon.",
    "correta": false,
    "comentario": "Gabarito: Falso. O forte foi erguido pelos franceses e nomeado em honra ao Almirante Gaspar de Coligny.",
    "fonte": "Willian Cezar / Bicalho",
    "armadilha": "Confundir quem construiu com quem destruiu. Mem de Sá o arrasou em 1560."
  },
  {
    "id": "hnv-vf-f-07",
    "tipo": "vf",
    "topico": "03-franca-antartica-corso-e-religiao",
    "dificuldade": "facil",
    "afirmacao": "O conceito de Mare Clausum era defendido pelas coroas ibéricas para justificar o monopólio de navegação e comércio baseado na partilha papal de Tordesilhas.",
    "correta": true,
    "comentario": "Gabarito: Verdadeiro. Os franceses contestavam isso defendendo o Mare Liberum (mar livre).",
    "fonte": "Maria Fernanda Bicalho",
    "armadilha": "Achar que o Mare Clausum era uma lei internacional aceita por todos; era uma pretensão ibérica contestada pelo corso."
  },
  {
    "id": "hnv-vf-f-08",
    "tipo": "vf",
    "topico": "04-ocupacoes-francesas-e-holandesas",
    "dificuldade": "facil",
    "afirmacao": "A Batalha de Abrolhos (1631) é considerada uma vitória estratégica ibérica porque permitiu o desembarque de reforços militares no Arraial de Bom Jesus.",
    "correta": true,
    "comentario": "Gabarito: Verdadeiro. Mesmo com perdas navais, o objetivo terrestre foi cumprido.",
    "fonte": "Willian Cezar",
    "armadilha": "Achar que vitória estratégica exige a destruição total da frota inimiga."
  },
  {
    "id": "hnv-vf-f-09",
    "tipo": "vf",
    "topico": "03-franca-antartica-corso-e-religiao",
    "dificuldade": "facil",
    "afirmacao": "O termo \"peçonha luterana\" era utilizado pelos jesuítas e autoridades portuguesas para descrever a ameaça da fé protestante disseminada pelos franceses.",
    "correta": true,
    "comentario": "Gabarito: Verdadeiro. Servia como justificativa para transformar a expulsão dos franceses em uma \"Guerra Santa\".",
    "fonte": "Maria Fernanda Bicalho",
    "armadilha": "Achar que o termo era um elogio ou algo neutro; era um termo de combate religioso."
  },
  {
    "id": "hnv-vf-f-10",
    "tipo": "vf",
    "topico": "01-mediterraneo-antigo-e-batalha-de-mylae",
    "dificuldade": "facil",
    "afirmacao": "A posse da Sicília era estratégica para Roma porque, além de sua riqueza cerealífera, a ilha era a mais próxima da Península Itálica, facilitando uma possível invasão cartaginesa.",
    "correta": true,
    "comentario": "Gabarito: Verdadeiro. O controle de Messina e da Sicília era uma questão de segurança nacional para os romanos.",
    "fonte": "Leonardo Ferreira",
    "armadilha": "Achar que a guerra foi apenas por \"honra\" ou \"glória\"; a motivação era logística e de segurança."
  },
  {
    "id": "hnv-vf-m-01",
    "tipo": "vf",
    "topico": "01-mediterraneo-antigo-e-batalha-de-mylae",
    "dificuldade": "medio",
    "afirmacao": "A Batalha de Mylae é considerada uma \"terrestrialização\" da guerra naval, pois os romanos usaram sua superioridade na infantaria para vencer a perícia marinheira cartaginesa.",
    "correta": true,
    "comentario": "Justificativa: Através do corvus, a batalha naval transformou-se em uma luta corpo a corpo nos conveses, similar a uma batalha campal terrestre.",
    "fonte": "Ferreira (\"Batalha de Mylae\")"
  },
  {
    "id": "hnv-vf-m-02",
    "tipo": "vf",
    "topico": "03-franca-antartica-corso-e-religiao",
    "dificuldade": "medio",
    "afirmacao": "Villegagnon, ao fundar a França Antártica, incentivou o casamento de colonos franceses com mulheres indígenas Tamoios para facilitar a colonização.",
    "correta": false,
    "comentario": "Justificativa: Falso. Villegagnon proibia o contato com mulheres indígenas, impondo uma disciplina severa de acordo com sua posição de cavaleiro da Ordem de Malta.",
    "fonte": "Bicalho (\"A França Antártica...\")",
    "armadilha": "Achar que, por serem aliados, havia mistura social incentivada."
  },
  {
    "id": "hnv-vf-m-03",
    "tipo": "vf",
    "topico": "02-da-galera-ao-navio-de-vela",
    "dificuldade": "medio",
    "afirmacao": "A unidade de medida \"tonelada\" tem origem na capacidade das cogas de transportarem tonéis de madeira contendo vinho de Bordeaux.",
    "correta": true,
    "comentario": "Justificativa: O texto explica que cada tonel de madeira ocupava entre 0,9 e 1,2 metros cúbicos e continha cerca de 252 galões.",
    "fonte": "Cezar (\"História das Guerras Navais\" / HNV P1)"
  },
  {
    "id": "hnv-vf-m-04",
    "tipo": "vf",
    "topico": "05-brasil-holandes-restauracao-e-imperio",
    "dificuldade": "medio",
    "afirmacao": "O Conselho Ultramarino, criado em 1643, concordou integralmente com o parecer de Salvador de Sá para a invasão imediata de Buenos Aires por forças navais.",
    "correta": false,
    "comentario": "Justificativa: Falso. O Conselho Ultramarino manifestou-se contra a invasão, alegando que não convinha abrir novas frentes de guerra \"em tempo de tantos apertos\".",
    "fonte": "Loureiro (\"Em miserável estado\")",
    "armadilha": "Confundir o apoio do Conselho de Guerra (que concordou) com a decisão final do Conselho Ultramarino (que barrou)."
  },
  {
    "id": "hnv-vf-m-05",
    "tipo": "vf",
    "topico": "03-franca-antartica-corso-e-religiao",
    "dificuldade": "medio",
    "afirmacao": "O conceito de Mare Clausum era sustentado pelas coroas ibéricas com base no Tratado de Tordesilhas e no aval do Papado.",
    "correta": true,
    "comentario": "Justificativa: Os ibéricos defendiam o monopólio exclusivo de navegação e comércio, o que era contestado pelos franceses em nome do Mare Liberum.",
    "fonte": "Bicalho (\"A França Antártica...\")"
  },
  {
    "id": "hnv-vf-m-06",
    "tipo": "vf",
    "topico": "02-da-galera-ao-navio-de-vela",
    "dificuldade": "medio",
    "afirmacao": "A Batalha de Sluys (1340) foi decidida pelo uso massivo e tecnológico de canhões de bronze, que afundaram a esquadra francesa à longa distância.",
    "correta": false,
    "comentario": "Justificativa: Falso. Embora houvesse os primeiros canhões, a tática predominante e decisiva em Sluys foi a abordagem e a luta corpo a corpo nos conveses.",
    "fonte": "Cezar (\"História das Guerras Navais\" / HNV P1)",
    "armadilha": "Achar que a presença de canhões significava que eles já eram a arma principal no século XIV."
  },
  {
    "id": "hnv-vf-m-07",
    "tipo": "vf",
    "topico": "05-brasil-holandes-restauracao-e-imperio",
    "dificuldade": "medio",
    "afirmacao": "Os holandeses moderavam suas ações contra a metrópole portuguesa porque dependiam do sal de Setúbal para a conservação da sua indústria de arenque.",
    "correta": true,
    "comentario": "Justificativa: O interesse comercial no sal impedia um ataque franco e aberto à metrópole, apesar da guerra que ocorria no ultramar.",
    "fonte": "Loureiro (\"Em miserável estado\")"
  },
  {
    "id": "hnv-vf-m-08",
    "tipo": "vf",
    "topico": "03-franca-antartica-corso-e-religiao",
    "dificuldade": "medio",
    "afirmacao": "Estácio de Sá, após fundar o Rio de Janeiro, expulsou os franceses em 1567 e retornou a Salvador para ser recompensado com o cargo de governador-geral.",
    "correta": false,
    "comentario": "Justificativa: Falso. Estácio de Sá morreu em 1567 em decorrência de uma flecha envenenada recebida durante os combates em Uruçu-Mirim.",
    "fonte": "Cezar / Bicalho"
  },
  {
    "id": "hnv-vf-m-09",
    "tipo": "vf",
    "topico": "05-brasil-holandes-restauracao-e-imperio",
    "dificuldade": "medio",
    "afirmacao": "A crise de liquidez na América portuguesa após 1640 estava vinculada à desagregação do comércio com o Rio da Prata, que era a via de entrada da prata de Potosí.",
    "correta": true,
    "comentario": "Justificativa: A \"desunião\" com o Prata impediu o fluxo do metal branco, causando impasse na circulação monetária em Salvador e no Rio.",
    "fonte": "Loureiro (\"Em miserável estado\")"
  },
  {
    "id": "hnv-vf-m-10",
    "tipo": "vf",
    "topico": "05-brasil-holandes-restauracao-e-imperio",
    "dificuldade": "medio",
    "afirmacao": "O Estado Polissinodal português permitia uma resposta rápida aos ataques holandeses porque o Rei concentrava todas as decisões sem precisar ouvir as instâncias locais.",
    "correta": false,
    "comentario": "Justificativa: Falso. O sistema era complexo e moroso; as decisões dependiam de exames de cartas e arbítrios, sendo frequentemente adaptadas pelos agentes locais.",
    "fonte": "Loureiro (\"Em miserável estado\")"
  },
  {
    "id": "hnv-vf-d-01",
    "tipo": "vf",
    "topico": "01-mediterraneo-antigo-e-batalha-de-mylae",
    "dificuldade": "dificil",
    "afirmacao": "A resiliência de Roma na Primeira Guerra Púnica e a de Portugal no pós-1640 fundamentavam-se no uso extensivo de mercenários estrangeiros, uma vez que ambas as potências enfrentavam exaustão financeira (o \"miserável estado\") e precisavam de profissionais para operar tecnologias complexas como o corvus e o canhão de bronze.",
    "correta": false,
    "comentario": "Justificativa: Diferente de Cartago, o exército romano era cívico, composto por cidadãos que serviam por dever e posição social, custeando a própria estadia. Portugal, embora exausto, dependia da Guerra Viva, onde vassalos investiam recursos próprios (\"vidas e fazendas\") em troca de mercês régias futuras, e não de um contrato mercenário profissional pago pelo Estado. Correção: Roma utilizava um exército cívico de nativos, enquanto Portugal utilizava o sistema de mercês e serviços de vassalos coloniais para compensar a falta de um exército mercenário permanente. Relação entre fontes: A análise de Ferreira sobre a economia agropastoril romana ajuda a entender por que a solução para a exaustão de Portugal (Loureiro/Bicalho) não foi o mercenarismo, mas a delegação da guerra aos agentes sociais. O que o aluno excelente percebe: A diferença fundamental entre o soldo (contrato mercantil cartaginês) e a mercê (lógica redistributiva lusa).",
    "fonte": "Ferreira (\"Batalha de Mylae\") e Loureiro (\"Em miserável estado\") / Bicalho (\"A França Antártica\").",
    "armadilha": "Achar que \"uso de tecnologia\" ou \"eficiência\" exige necessariamente mercenários pagos em dinheiro."
  },
  {
    "id": "hnv-vf-d-02",
    "tipo": "vf",
    "topico": "03-franca-antartica-corso-e-religiao",
    "dificuldade": "dificil",
    "afirmacao": "O corso francês na Guanabara caracterizava-se como uma atividade de pirataria privada desvinculada de projetos estatais, visto que a França de Henrique II adotava a tese do mare clausum para proteger seus navios de 200 toneladas de ataques portugueses e indígenas.",
    "correta": false,
    "comentario": "Justificativa: O corso era um empreendimento planejado com respaldo formal (aval) da monarquia e inseria-se na disputa entre coroas. A França contestava o monopólio ibérico (mare clausum) defendendo a liberdade dos mares (mare liberum). Além disso, o projeto de Villegagnon visava a fundação de uma colônia duradoura com apoio real e de armadores. Correção: O corso francês era uma ferramenta de política externa com apoio oficial para contestar o monopólio ibérico (mare clausum) em favor do mare liberum. Relação entre fontes: Bicalho define a legitimidade jurídica do corso, enquanto Cezar detalha a tentativa de Villegagnon de transformar essa atividade em ocupação territorial e econômica. O que o aluno excelente percebe: O corso é uma extensão da guerra diplomática e comercial do Estado Nacional.",
    "fonte": "Bicalho (\"A França Antártica\") e Cezar (\"História das Guerras Navais\").",
    "armadilha": "Confundir a atividade de pilhagem (meio) com a falta de legitimidade política (pirataria)."
  },
  {
    "id": "hnv-vf-d-03",
    "tipo": "vf",
    "topico": "05-brasil-holandes-restauracao-e-imperio",
    "dificuldade": "dificil",
    "afirmacao": "A estrutura do Estado Polissinodal de D. João IV, ao concentrar todas as decisões em um comando militar único e centralizado, permitiu que Portugal superasse a \"tirania da distância\" e respondesse com agilidade à imensa esquadra holandesa de 14.000 navios.",
    "correta": false,
    "comentario": "Justificativa: O Estado Polissinodal era composto por \"várias cabeças\" (conselhos autônomos como Guerra e Ultramarino) que geravam processos lentos e morosos. A autoridade real era \"filtrada e dispersada\" pela distância e pelos oficiais locais, gerando uma \"descerebração\" do governo central. Correção: O Estado Polissinodal era descentralizado e burocrático, com decisões lentas que dependiam do tráfego marítimo, dificultando o controle sobre a vasta periferia do império. Relação entre fontes: Loureiro explica a paralisia burocrática, enquanto Cezar fornece o dado material da defasagem naval (13 navios lusos vs 14.000 holandeses) que impedia a imposição dessa burocracia no mar. O que o aluno excelente percebe: A relação intrínseca entre tecnologia de transporte (ritmo das velas) e a incapacidade de centralização administrativa.",
    "fonte": "Loureiro (\"Em miserável estado\") e Cezar (\"História das Guerras Navais\").",
    "armadilha": "Atribuir agilidade a um sistema que o próprio texto classifica como moroso e \"descerebrado\"."
  },
  {
    "id": "hnv-vf-d-04",
    "tipo": "vf",
    "topico": "04-ocupacoes-francesas-e-holandesas",
    "dificuldade": "dificil",
    "afirmacao": "A Batalha de Abrolhos (1631) resultou no colapso imediato dos circuitos mercantis do Atlântico Sul, pois a derrota estratégica de D. Antônio Oquendo impediu que qualquer reforço chegasse ao Arraial de Bom Jesus, selando a perda definitiva de Angola naquele mesmo ano.",
    "correta": false,
    "comentario": "Justificativa: Abrolhos foi uma vitória estratégica de Oquendo, pois ele logrou desembarcar tropas para reforçar a resistência no Arraial de Bom Jesus. A perda de Luanda (Angola) só ocorreu dez anos depois, em 1641, afetando então a liquidez monetária e o tráfico de escravizados. Correção: Abrolhos foi uma vitória estratégica ibérica que permitiu reforçar a resistência terrestre; o colapso sistêmico do Atlântico só ocorreu após a queda de Angola em 1641. Relação entre fontes: Cezar detalha o sucesso da missão tática em 1631, enquanto Loureiro explica que o verdadeiro abalo econômico foi a perda da praça africana na década seguinte. O que o aluno excelente percebe: O conceito de \"vitória estratégica\" (cumprir o objetivo da missão) versus o colapso macroeconômico do império.",
    "fonte": "Cezar (\"História das Guerras Navais\") e Loureiro (\"Em miserável estado\").",
    "armadilha": "Inversão de cronologia e consequência histórica (1631 vs 1641)."
  },
  {
    "id": "hnv-vf-d-05",
    "tipo": "vf",
    "topico": "02-da-galera-ao-navio-de-vela",
    "dificuldade": "dificil",
    "afirmacao": "A coga do Mar do Norte, com sua borda alta e propulsão a vela única, representava uma adaptação morfológica superior às águas turbulentas, superando a lógica das galeras mediterrâneas que priorizavam a força humana e o abalroamento em águas calmas.",
    "correta": true,
    "comentario": "Justificativa: Surgida por volta de 1200, a coga era bojudos e resistente. Diferente da galera (baixa borda, remo), a coga militarizada com castelos e leme de cadaste permitia maior autonomia e resistência aos mares frios e turbulentos do Norte e Báltico. Relação entre fontes: Ferreira descreve a limitação da galera (combate diurno/costeiro), o que realça o salto qualitativo da coga (resistência/autonomia estratégica) descrito por Cezar. O que o aluno excelente percebe: A morfologia do navio como resposta direta ao ambiente operacional.",
    "fonte": "Cezar (\"História das Guerras Navais\") e Ferreira (\"Batalha de Mylae\").",
    "armadilha": "Achar que a galera era superior por ser o navio de guerra \"clássico\", ignorando a geografia."
  },
  {
    "id": "hnv-vf-d-06",
    "tipo": "vf",
    "topico": "03-franca-antartica-corso-e-religiao",
    "dificuldade": "dificil",
    "afirmacao": "Nicolau Durand de Villegagnon falhou na consolidação da França Antártica por ter adotado a \"peçonha luterana\" como base de sua administração na ilha, incentivando casamentos com indígenas e o livre exame das escrituras, o que provocou a imediata intervenção jesuítica.",
    "correta": false,
    "comentario": "Justificativa: Villegagnon era um cavaleiro católico da Ordem de Malta que impunha disciplina severa e proibia o contato com indígenas. A \"peçonha luterana\" (calvinismo) foi trazida por colonos que chegaram depois (1557), gerando conflitos religiosos internos que Villegagnon tentou reprimir antes de retornar à França em 1559. Correção: Villegagnon era católico e sua rigidez colidiu com os calvinistas; a heresia protestante foi um fator de desagregação interna e pretexto para a \"Guerra Santa\" portuguesa, não a base de seu governo. Relação entre fontes: Bicalho explica o termo pejorativo (\"peçonha\"), enquanto Cezar detalha a trajetória biográfica e a rigidez moral de Villegagnon. O que o aluno excelente percebe: A contradição interna do projeto francês (Católicos vs. Protestantes) como fator de fraqueza naval.",
    "fonte": "Bicalho (\"A França Antártica\") e Cezar (\"História das Guerras Navais\").",
    "armadilha": "Atribuir a heresia ao líder católico do projeto francês."
  },
  {
    "id": "hnv-vf-d-07",
    "tipo": "vf",
    "topico": "01-mediterraneo-antigo-e-batalha-de-mylae",
    "dificuldade": "dificil",
    "afirmacao": "O sucesso de Roma em Mylae e a reconquista de Angola por Salvador de Sá demonstram que o controle do mar na História Naval é um fator puramente tecnológico, dependente da introdução isolada do corvus romano e do canhão de bronze luso.",
    "correta": false,
    "comentario": "Justificativa: O poder naval é reflexo de estruturas sociais e econômicas organizadas. Em Mylae, a adaptação técnica foi viabilizada pelo civismo romano. Em Angola, o sucesso deveu-se ao financiamento privado de negociantes do Rio e à mobilização de redes de vassalos e indígenas, compensando a falta de recursos da Coroa. Correção: O poder naval depende de economia, cultura política e pactos sociais; a tecnologia é apenas o meio viabilizado por essas estruturas. Relação entre fontes: Ferreira fornece a base antiga para o conceito que Loureiro/Bicalho aplicam na modernidade: o mar como sistema de administração imperial sustentado pela sociedade. O que o aluno excelente percebe: O mar como sistema nervoso do império, não apenas arena de tiro.",
    "fonte": "Ferreira (\"Batalha de Mylae\"), Bicalho (\"A França Antártica\") e Loureiro (\"Em miserável estado\").",
    "armadilha": "Determinismo tecnológico (achar que a arma vence a guerra sozinha)."
  },
  {
    "id": "hnv-vf-d-08",
    "tipo": "vf",
    "topico": "05-brasil-holandes-restauracao-e-imperio",
    "dificuldade": "dificil",
    "afirmacao": "A interrupção do comércio com o Rio da Prata na década de 1640 causou uma crise de liquidez no Brasil, pois a queda de Angola impediu o fluxo de escravizados, que eram a principal mercadoria de troca pela prata de Potosí.",
    "correta": true,
    "comentario": "Justificativa: O relatório de Vieira (1643) afirma que, com a falta de Angola (escravos), não haveria açúcar, e com a desunião do Prata, não haveria dinheiro (prata). Angola era o ponto vital para irrigar a Bacia do Prata com mão de obra e extrair o \"metal branco\" necessário à solvência do Reino. Relação entre fontes: Loureiro fornece a análise econômica de Vieira, enquanto Cezar contextualiza a agressividade da WIC em Luanda para atingir justamente esse ponto sensível. O que o aluno excelente percebe: A interdependência sistêmica da monarquia pluricontinental.",
    "fonte": "Loureiro (\"Em miserável estado\") e Cezar (\"História das Guerras Navais\").",
    "armadilha": "Achar que a falta de dinheiro era causada apenas pela guerra na Europa, ignorando a conexão africana."
  },
  {
    "id": "hnv-vf-d-09",
    "tipo": "vf",
    "topico": "02-da-galera-ao-navio-de-vela",
    "dificuldade": "dificil",
    "afirmacao": "A Batalha de Sluys (1340) marcou o fim imediato das táticas de abordagem na História Naval, uma vez que o binômio vela-canhão permitiu aos ingleses afundarem a frota francesa à longa distância sem necessidade de luta corpo a corpo nos conveses.",
    "correta": false,
    "comentario": "Justificativa: Embora os franceses tenham usado os primeiros canhões em Sluys, a tática predominante e decisiva foi a abordagem e a luta corpo a corpo nos conveses. O canhão só atingiria maturidade estratégica séculos depois, e a transição tecnológica foi lenta. Correção: Em Sluys, o canhão era marginal; a batalha foi vencida pela abordagem tradicional, mostrando que a tática de infantaria embarcada persistiu por muito tempo. Relação entre fontes: Ferreira explica a \"terrestrialização\" do mar na Antiguidade, o que ajuda a entender por que, mesmo no século XIV (Cezar), a lógica de infantaria embarcada ainda era a soberana. O que o aluno excelente percebe: A longa duração das táticas de abordagem frente à inovação da artilharia.",
    "fonte": "Cezar (\"História das Guerras Navais\") e Ferreira (\"Batalha de Mylae\").",
    "armadilha": "Anacronismo tático (achar que a invenção da arma muda o combate instantaneamente)."
  },
  {
    "id": "hnv-vf-d-10",
    "tipo": "vf",
    "topico": "01-mediterraneo-antigo-e-batalha-de-mylae",
    "dificuldade": "dificil",
    "afirmacao": "Tanto o cidadão romano em Mylae quanto o vassalo no Rio de Janeiro eram motivados pela \"justiça distributiva\", recebendo salários militares (soldo) fixos pagos pela República e pela Coroa para garantir que a expansão naval não arruinasse suas propriedades.",
    "correta": false,
    "comentario": "Justificativa: O cidadão romano não recebia soldo; servia por dever cívico e custeava a própria estadia. O vassalo colonial buscava mercês (terras, cargos, privilégios) como recompensa posterior por colocar \"vidas e fazendas\" em risco, e não um salário fixo estatal. Correção: Romanos serviam por dever cívico (gratuito); vassalos serviam por um contrato de reciprocidade (mercês). Nenhum dos dois operava sob a lógica do soldo estatal profissional. Relação entre fontes: O civismo de Ferreira e a \"Guerra Viva\" de Bicalho são as duas faces do Estado terceirizando o custo da guerra para a sociedade em troca de prestígio ou dever. O que o aluno excelente percebe: A ausência de um exército profissional burocrático (Weberiano) em ambas as eras.",
    "fonte": "Ferreira (\"Batalha de Mylae\") e Bicalho (\"A França Antártica\") / Loureiro.",
    "armadilha": "Modernizar o conceito de \"pagamento\", confundindo salário (soldo) com recompensa honorífica ou patrimonial (mercê)."
  }
];

export const discursivas: QuestaoDiscursiva[] = [
  {
    "id": "hnv-d-f-01",
    "tipo": "discursiva",
    "topico": "01-mediterraneo-antigo-e-batalha-de-mylae",
    "dificuldade": "facil",
    "contexto": "Durante a Primeira Guerra Púnica, Roma, uma potência essencialmente terrestre, precisou enfrentar a hegemonia naval de Cartago. Para compensar sua falta de perícia em manobras de abalroamento, os romanos introduziram uma adaptação técnica em suas galeras que alterou a natureza do combate.",
    "enunciado": "Explique o que era o corvus e qual era a sua função tática principal no combate naval.",
    "gabaritoComentado": "O corvus era uma ponte de abordagem com um bico metálico na extremidade, instalada na proa dos navios romanos. Sua função era grampear o navio inimigo, travando-o, para permitir que a infantaria romana atravessasse e realizasse o combate corpo a corpo no convés adversário.",
    "criterios": [
      "Define o corvus como ponte de abordagem com bico metálico.",
      "Explica o travamento do navio inimigo.",
      "Relaciona o uso do corvus ao combate corpo a corpo romano."
    ],
    "comentario": "Roma transformou a batalha naval em uma batalha terrestre \"sobre o mar\", onde sua infantaria era superior.",
    "fonte": "Leonardo Ferreira (\"A Batalha de Mylae\").",
    "armadilha": "Achar que o corvus servia para afundar navios por impacto (abalroamento); sua função era exclusivamente a abordagem e travamento."
  },
  {
    "id": "hnv-d-f-02",
    "tipo": "discursiva",
    "topico": "02-da-galera-ao-navio-de-vela",
    "dificuldade": "facil",
    "contexto": "A partir de 1200, nos mares setentrionais da Europa, surgiu um tipo de embarcação que se diferenciava das galeras mediterrâneas. Esse modelo foi amplamente adotado pela Liga Hanseática para o comércio e, posteriormente, militarizado para defesa contra a pirataria.",
    "enunciado": "Identifique essa embarcação e cite duas características de sua estrutura física que a tornavam resistente aos mares do Norte.",
    "gabaritoComentado": "A embarcação é a Coga. Suas características incluem uma quilha sólida, casco bojudo, borda alta e propulsão por um único mastro com vela retangular.",
    "criterios": [
      "Identifica corretamente a embarcação como coga.",
      "Cita ao menos duas características estruturais da coga.",
      "Relaciona a estrutura da coga aos mares do Norte."
    ],
    "comentario": "A coga foi projetada para as águas turbulentas do Báltico e do Mar do Norte, priorizando a estabilidade e a capacidade de carga em detrimento da velocidade.",
    "fonte": "Willian Cezar (\"História das Guerras Navais\" / HNV P1).",
    "armadilha": "Confundir a coga com a galera; a galera era movida a remo e possuía borda baixa, inadequada para o Mar do Norte."
  },
  {
    "id": "hnv-d-f-03",
    "tipo": "discursiva",
    "topico": "03-franca-antartica-corso-e-religiao",
    "dificuldade": "facil",
    "contexto": "No século XVI, a Baía de Guanabara e o litoral brasileiro foram alvo constante de embarcações estrangeiras, especialmente francesas. No entanto, juridicamente, as ações desses navegantes podiam ser classificadas de formas distintas conforme o apoio que recebiam de suas coroas.",
    "enunciado": "Conforme o texto de Maria Fernanda Bicalho, qual a diferença fundamental entre a prática do corso e a pirataria?",
    "gabaritoComentado": "O corso era um empreendimento planejado que recebia respaldo formal (aval) dos governantes, inserindo-se em disputas entre monarquias. Já a pirataria era a ação de indivíduos isolados que atuavam sem qualquer apoio oficial.",
    "criterios": [
      "Distingue corso de pirataria pelo respaldo oficial.",
      "Explica o papel político do corsário nas disputas monárquicas.",
      "Evita reduzir a diferença ao grau de violência."
    ],
    "comentario": "O corsário agia como um instrumento da política externa de seu rei (como na contestação do monopólio ibérico), enquanto o pirata agia por conta própria.",
    "fonte": "Maria Fernanda Bicalho (\"A França Antártica...\").",
    "armadilha": "Achar que a diferença estava na violência empregada; ambos praticavam pilhagem, a diferença era apenas a legitimidade política."
  },
  {
    "id": "hnv-d-f-04",
    "tipo": "discursiva",
    "topico": "05-brasil-holandes-restauracao-e-imperio",
    "dificuldade": "facil",
    "contexto": "Em 1640, Portugal passou por uma mudança política drástica que encerrou o período da União Ibérica. Esse evento obrigou a nova dinastia de Bragança a reorganizar a administração do império para enfrentar as guerras que viriam.",
    "enunciado": "Como ficou conhecido esse evento histórico e qual foi o rei aclamado pelo golpe de 1º de dezembro?",
    "gabaritoComentado": "O evento ficou conhecido como Restauração. O monarca aclamado foi o Duque de Bragança, coroado como D. João IV.",
    "criterios": [
      "Identifica o evento como Restauração.",
      "Cita D. João IV como monarca aclamado.",
      "Relaciona a Restauração ao fim da União Ibérica."
    ],
    "comentario": "A Restauração marcou a separação de Portugal da Coroa de Castela e o início da luta pelo reconhecimento da independência lusa.",
    "fonte": "Marcello Loureiro (\"Em miserável estado\").",
    "armadilha": "Confundir o rei aclamado com Filipe IV, que era o rei espanhol que D. João IV substituiu."
  },
  {
    "id": "hnv-d-f-05",
    "tipo": "discursiva",
    "topico": "04-ocupacoes-francesas-e-holandesas",
    "dificuldade": "facil",
    "contexto": "No contexto das invasões holandesas ao Brasil, uma instituição comercial desempenhou o papel de braço armado e financeiro das Províncias Unidas. Ela foi responsável pela logística e execução dos ataques a Salvador e a Pernambuco.",
    "enunciado": "Qual o nome dessa instituição e qual era o seu principal interesse comercial no Atlântico Sul?",
    "gabaritoComentado": "A instituição era a WIC (Companhia das Índias Ocidentais). Seu principal interesse era o controle do comércio de açúcar e do tráfico de escravizados no Atlântico.",
    "criterios": [
      "Identifica a WIC como Companhia das Índias Ocidentais.",
      "Cita o açúcar como interesse comercial central.",
      "Relaciona a WIC ao tráfico de escravizados no Atlântico."
    ],
    "comentario": "A WIC era uma companhia de comércio privilegiada que buscava lucros através da exploração colonial e do ataque ao império luso-espanhol.",
    "fonte": "Willian Cezar / Marcello Loureiro.",
    "armadilha": "Confundir com a VOC (Companhia das Índias Orientais), que atuava no Oriente."
  },
  {
    "id": "hnv-d-f-06",
    "tipo": "discursiva",
    "topico": "05-brasil-holandes-restauracao-e-imperio",
    "dificuldade": "facil",
    "contexto": "Para o governo português e para os conselheiros da época, como o Padre Antônio Vieira, o Império Marítimo era uma estrutura interdependente. A perda de um território em um continente poderia causar o colapso econômico de outro.",
    "enunciado": "Por que a manutenção de Angola era considerada vital para a existência do Brasil açucareiro?",
    "gabaritoComentado": "Angola era vital porque era o principal fornecedor de mão de obra escravizada. Sem os negros de Angola, os engenhos de açúcar no Brasil não podiam funcionar, aniquilando a arrecadação da Fazenda Real.",
    "criterios": [
      "Explica Angola como fornecedora de mão de obra escravizada.",
      "Relaciona Angola ao funcionamento dos engenhos brasileiros.",
      "Conecta o tráfico à arrecadação da Fazenda Real."
    ],
    "comentario": "O sistema colonial dependia do fluxo constante de escravizados africanos para produzir o açúcar, que era a base da riqueza do império.",
    "fonte": "Marcello Loureiro (Citação do Conselho de Guerra e Pe. Vieira).",
    "armadilha": "Focar apenas na defesa militar e esquecer que a motivação principal era a mão de obra para a economia do açúcar."
  },
  {
    "id": "hnv-d-f-07",
    "tipo": "discursiva",
    "topico": "02-da-galera-ao-navio-de-vela",
    "dificuldade": "facil",
    "contexto": "A partir de meados do século XIV, um novo instrumento bélico começou a ser introduzido a bordo das embarcações europeias. Embora inicialmente pesados e de difícil manuseio, eles transformaram o navio de um simples transporte de tropas em uma arma estratégica.",
    "enunciado": "Que instrumento era esse e por que ele permitiu que os combates ocorressem sem a necessidade de abordagem física imediata?",
    "gabaritoComentado": "O instrumento era o canhão (artilharia de bronze ou ferro). Ele permitiu o combate à distância por meio do bombardeio, possibilitando a destruição de muralhas, fortalezas e outras embarcações sem a necessidade do choque direto.",
    "criterios": [
      "Identifica o canhão ou a artilharia embarcada.",
      "Explica o combate à distância por bombardeio.",
      "Relaciona a artilharia à mudança estratégica do navio."
    ],
    "comentario": "A união da vela com o canhão permitiu que o poder naval fosse projetado a longas distâncias com alto poder de destruição.",
    "fonte": "Willian Cezar (\"História das Guerras Navais\" / HNV P1).",
    "armadilha": "Achar que o canhão de ferro era preferido; na verdade, os de bronze eram os favoritos por serem mais leves e resistentes à corrosão."
  },
  {
    "id": "hnv-d-f-08",
    "tipo": "discursiva",
    "topico": "03-franca-antartica-corso-e-religiao",
    "dificuldade": "facil",
    "contexto": "Maria Fernanda Bicalho analisa a conquista do Rio de Janeiro sob a lógica do Antigo Regime, onde a participação em batalhas não era vista apenas como um dever militar, mas como uma forma de obter reconhecimento social e político junto à Coroa.",
    "enunciado": "Defina o conceito de \"Guerra Viva\" e explique como ela se relacionava com o sistema de mercês régias.",
    "gabaritoComentado": "\"Guerra Viva\" é a participação concreta em combates e conquistas em defesa da monarquia. Os vassalos que disponibilizavam suas \"vidas e fazendas\" esperavam em troca as mercês régias, como terras (sesmarias), cargos, títulos e privilégios.",
    "criterios": [
      "Define Guerra Viva como serviço militar ativo ao Rei.",
      "Explica a oferta de vidas e fazendas pelos vassalos.",
      "Relaciona o serviço às mercês régias."
    ],
    "comentario": "A guerra era vivida como um serviço ao Rei que gerava um direito de recompensa, consolidando as elites locais na colônia.",
    "fonte": "Maria Fernanda Bicalho (\"A França Antártica...\").",
    "armadilha": "Interpretar o termo como \"guerra com muitas mortes\"; o foco é no sentido político de \"serviço ativo\"."
  },
  {
    "id": "hnv-d-f-09",
    "tipo": "discursiva",
    "topico": "01-mediterraneo-antigo-e-batalha-de-mylae",
    "dificuldade": "facil",
    "contexto": "A Primeira Guerra Púnica foi motivada por um choque de interesses geopolíticos em uma região extremamente fértil e próxima da Península Itálica, o que tornava o controle das águas ao seu redor essencial para a segurança de Roma.",
    "enunciado": "Identifique essa região estratégica e explique por que o Estreito de Messina era o ponto nevrálgico dessa disputa.",
    "gabaritoComentado": "A região era a ilha da Sicília. O Estreito de Messina era nevrálgico porque separava a Sicília da Itália por apenas 3,3 km de largura; se Cartago o controlasse, poderia facilmente invadir a Península Itálica.",
    "criterios": [
      "Identifica a Sicília como região estratégica.",
      "Explica a posição do Estreito de Messina.",
      "Relaciona Messina à segurança da Península Itálica."
    ],
    "comentario": "Messina era a porta de entrada para a Itália e o nó comercial que controlava as rotas do Mediterrâneo central.",
    "fonte": "Leonardo Ferreira (\"Batalha de Mylae\").",
    "armadilha": "Achar que a disputa era apenas por comércio; a segurança territorial de Roma era o fator primordial no Estreito."
  },
  {
    "id": "hnv-d-f-10",
    "tipo": "discursiva",
    "topico": "04-ocupacoes-francesas-e-holandesas",
    "dificuldade": "facil",
    "contexto": "Em 1625, uma imensa expedição naval foi organizada para retomar a cidade de Salvador das mãos dos holandeses. A força contava com dezenas de navios espanhóis, portugueses e napolitanos, somando mais de 12 mil homens.",
    "enunciado": "Como ficou conhecida essa expedição e qual o nome do comandante que liderou essa reconquista?",
    "gabaritoComentado": "A expedição ficou conhecida como Jornada dos Vassalos. Foi comandada por D. Fadrique de Toledo Osório.",
    "criterios": [
      "Identifica a expedição como Jornada dos Vassalos.",
      "Cita D. Fadrique de Toledo Osório como comandante.",
      "Relaciona a expedição à retomada de Salvador."
    ],
    "comentario": "O nome \"Vassalos\" deve-se à participação de muitos nobres que financiaram e serviram na expedição sob a Coroa Unificada.",
    "fonte": "Willian Cezar (\"História das Guerras Navais\" / HNV P1).",
    "armadilha": "Achar que a expedição foi organizada apenas por Portugal; foi uma operação conjunta da União Ibérica sob comando espanhol."
  },
  {
    "id": "hnv-d-m-01",
    "tipo": "discursiva",
    "topico": "01-mediterraneo-antigo-e-batalha-de-mylae",
    "dificuldade": "medio",
    "contexto": "Na Primeira Guerra Púnica, o choque entre Roma e Cartago não foi apenas um embate de esquadras, mas um confronto entre estruturas sociais e militares distintas. Enquanto Cartago era uma potência naval consolidada, Roma era uma potência terrestre em expansão. Ferreira argumenta que a natureza do exército romano conferiu uma vantagem de longo prazo sobre o modelo cartaginês, especialmente em conflitos de desgaste.",
    "enunciado": "Analise como o caráter \"cívico\" do exército romano influenciou a resiliência de Roma na guerra e compare-o com as limitações geradas pelo uso de mercenários por parte de Cartago.",
    "gabaritoComentado": "O exército romano era composto por cidadãos-proprietários que viam o serviço militar como um dever cívico (census e militia), o que gerava coesão moral e política, permitindo a Roma suportar perdas pesadas e manter o esforço de guerra. Em contraste, Cartago dependia de mercenários caros que, embora eficazes em guerras curtas, geravam altos custos econômicos e eram propensos a sedições em conflitos longos. Consequentemente, a estrutura social romana permitiu uma mobilização constante que exauriu a capacidade financeira e militar de Cartago.",
    "criterios": [
      "Define o caráter cívico do exército romano.",
      "Compara o modelo romano com o mercenarismo cartaginês.",
      "Relaciona coesão social e resiliência em guerra longa.",
      "Explica o desgaste econômico de Cartago."
    ],
    "comentario": "Relacionar a base social da tropa com a sustentabilidade estratégica da guerra.",
    "fonte": "Ferreira (\"Batalha de Mylae\").",
    "armadilha": "Focar apenas na tecnologia (corvus) e esquecer que a base do poder romano era a sua organização política e cívica."
  },
  {
    "id": "hnv-d-m-02",
    "tipo": "discursiva",
    "topico": "03-franca-antartica-corso-e-religiao",
    "dificuldade": "medio",
    "contexto": "A presença francesa na Baía de Guanabara no século XVI é frequentemente analisada sob a ótica da ocupação territorial. Contudo, Maria Fernanda Bicalho propõe que a ameaça representada pela França Antártica era \"bifronte\". Isso significa que o projeto de Villegagnon atingia dois pilares fundamentais da sustentação do Império Português na América.",
    "enunciado": "Explique as duas dimensões dessa ameaça (política e religiosa) e justifique como a chegada dos ministros calvinistas em 1557 agravou a reação portuguesa.",
    "gabaritoComentado": "A ameaça era política, pois contestava a soberania portuguesa e o monopólio do comércio (corso vs. mare clausum), e religiosa, pois introduzia o protestantismo em terras católicas. A chegada dos calvinistas (\"peçonha luterana\") em 1557 transformou a disputa territorial em uma \"Guerra Santa\", legitimando a expulsão dos franceses como uma defesa da Fé e do Império. Assim, a religião serviu como coesão para a contraofensiva portuguesa liderada pelos jesuítas e pela Coroa.",
    "criterios": [
      "Explica a ameaça política à soberania portuguesa.",
      "Explica a ameaça religiosa protestante.",
      "Relaciona os calvinistas de 1557 à Guerra Santa.",
      "Conecta mare clausum, corso e Fé/Império."
    ],
    "comentario": "Conectar a disputa colonial ao contexto da Reforma e Contrarreforma europeia.",
    "fonte": "Bicalho (\"A França Antártica...\").",
    "armadilha": "Tratar a invasão apenas como um evento militar, ignorando o peso do discurso religioso na legitimação da conquista."
  },
  {
    "id": "hnv-d-m-03",
    "tipo": "discursiva",
    "topico": "05-brasil-holandes-restauracao-e-imperio",
    "dificuldade": "medio",
    "contexto": "Após a Restauração de 1640, Portugal encontrou-se em uma situação diplomática e financeira desesperadora, o que Marcello Loureiro chama de \"miserável estado\". A monarquia precisava priorizar territórios em um sistema que Loureiro define como \"pluricontinental\", onde a economia de uma região era o motor de outra.",
    "enunciado": "Relacione a importância estratégica de Angola para a manutenção do Brasil açucareiro e contextualize como a perda de Luanda em 1641 impactou a arrecadação da Fazenda Real portuguesa.",
    "gabaritoComentado": "Angola era o \"ponto nervoso\" do Atlântico, pois fornecia a mão de obra escravizada essencial para os engenhos de açúcar no Brasil. Sem o fluxo de escravos de Angola, a produção de açúcar no Brasil colapsaria, o que por sua vez aniquilaria os direitos alfandegários e dízimos que sustentavam a Fazenda Real em Lisboa. Portanto, a interdependência entre os continentes significava que a segurança de Portugal dependia diretamente da reconquista africana.",
    "criterios": [
      "Define Angola como ponto nervoso do Atlântico português.",
      "Relaciona escravizados de Angola ao açúcar brasileiro.",
      "Explica o impacto fiscal da perda de Luanda.",
      "Apresenta a interdependência da monarquia pluricontinental."
    ],
    "comentario": "Demonstrar a visão sistêmica da economia imperial (Triângulo Atlântico).",
    "fonte": "Loureiro (\"Em miserável estado\").",
    "armadilha": "Achar que a preocupação com Angola era puramente territorial, quando era essencialmente econômica (tráfico negreiro)."
  },
  {
    "id": "hnv-d-m-04",
    "tipo": "discursiva",
    "topico": "02-da-galera-ao-navio-de-vela",
    "dificuldade": "medio",
    "contexto": "A evolução das embarcações entre os séculos XIII e XV marcou a transição da guerra naval mediterrânica para a guerra oceânica. A coga, originária do Mar do Norte, e a galera, tradicional do Mediterrâneo, representavam lógicas distintas de construção e emprego militar, influenciadas pela geografia dos mares onde operavam.",
    "enunciado": "Compare as características estruturais da coga e da galera e analise como a militarização da coga (castelos e gáveas) prefigurou a superioridade dos navios de borda alta na Era das Velas.",
    "gabaritoComentado": "A galera era longa, de borda baixa e movida a remo, ideal para águas calmas e táticas de abalroamento. A coga possuía casco bojudo, borda alta, quilha sólida e vela única, sendo mais resistente a mares turbulentos. A militarização da coga com castelos de proa/popa e cestos de gávea transformou-a em uma \"fortaleza flutuante\", permitindo a defesa contra abordagens e o uso de armas de arremesso de posições elevadas. Essa estrutura de borda alta tornou-se a base para o desenvolvimento dos galeões que dominariam os oceanos.",
    "criterios": [
      "Compara galera e coga em estrutura e propulsão.",
      "Relaciona cada embarcação ao ambiente marítimo.",
      "Explica a militarização da coga por castelos e gáveas.",
      "Conecta a coga aos navios de borda alta posteriores."
    ],
    "comentario": "Relacionar morfologia naval, ambiente geográfico e tática de combate.",
    "fonte": "Cezar (\"História das Guerras Navais\" / HNV P1).",
    "armadilha": "Acreditar que a coga era um navio de guerra desde o início; ela nasceu mercante e foi adaptada."
  },
  {
    "id": "hnv-d-m-05",
    "tipo": "discursiva",
    "topico": "03-franca-antartica-corso-e-religiao",
    "dificuldade": "medio",
    "contexto": "O conceito de \"Guerra Viva\", discutido por Bicalho, é fundamental para entender como a conquista do Rio de Janeiro foi financiada e executada. No Antigo Regime, a monarquia não possuía recursos para manter exércitos profissionais permanentes em todas as colônias, dependendo de um pacto específico com seus súditos.",
    "enunciado": "Justifique o uso do conceito de \"Guerra Viva\" na conquista da Guanabara e explique como esse processo contribuiu para a formação da \"nobreza da terra\" no Rio de Janeiro.",
    "gabaritoComentado": "A \"Guerra Viva\" era a prestação de serviço militar por vassalos que disponibilizavam \"vidas e fazendas\" em prol do Rei. Em troca desses serviços, os conquistadores reivindicavam mercês régias, como terras (sesmarias), cargos administrativos e títulos honoríficos. Esse sistema consolidou a \"nobreza da terra\", uma elite local cuja legitimidade e poder político baseavam-se no passado de conquista e na dívida que a Coroa tinha para com seus ancestrais.",
    "criterios": [
      "Define Guerra Viva como serviço de vassalos.",
      "Explica a troca entre serviço militar e mercês.",
      "Relaciona mercês a sesmarias, cargos ou títulos.",
      "Conecta o processo à formação da nobreza da terra."
    ],
    "comentario": "Conectar a prática da guerra ao sistema de recompensas (mercedes) e à estratificação social colonial.",
    "fonte": "Bicalho (\"A França Antártica...\").",
    "armadilha": "Definir \"guerra viva\" apenas como \"guerra intensa\", ignorando o caráter jurídico de prestação de serviço."
  },
  {
    "id": "hnv-d-m-06",
    "tipo": "discursiva",
    "topico": "05-brasil-holandes-restauracao-e-imperio",
    "dificuldade": "medio",
    "contexto": "O Estado português no século XVII é definido por Loureiro como \"polissinodal\", operando através de uma rede complexa de conselhos. Esse modelo administrativo, somado à imensa extensão do império, criava desafios para a rapidez das decisões militares, afetando a defesa de territórios como o Brasil e Angola.",
    "enunciado": "Contextualize o funcionamento do Estado Polissinodal e analise como a circulação de informações (\"ritmo das velas\") impactava a governabilidade do Império Marítimo.",
    "gabaritoComentado": "O Estado polissinodal era composto por múltiplos conselhos (Guerra, Ultramarino, Fazenda) que funcionavam de forma autônoma e geravam pareceres morosos antes da decisão régia. A governabilidade dependia da circulação de informações (cartas, arbítrios) que viajavam via navio, sujeitas à \"tirania da distância\". Consequentemente, as decisões centrais chegavam às periferias com atraso, forçando os oficiais locais a adaptarem as ordens conforme as realidades e negociações locais.",
    "criterios": [
      "Define Estado Polissinodal como rede de conselhos.",
      "Explica a morosidade decisória dos pareceres.",
      "Relaciona o ritmo das velas à governabilidade imperial.",
      "Mostra a adaptação local das ordens régias."
    ],
    "comentario": "Relacionar estrutura burocrática, tecnologia de comunicação e autonomia local.",
    "fonte": "Loureiro (\"Em miserável estado\").",
    "armadilha": "Achar que o Rei exercia um poder absoluto e centralizado em tempo real sobre as colônias."
  },
  {
    "id": "hnv-d-m-07",
    "tipo": "discursiva",
    "topico": "01-mediterraneo-antigo-e-batalha-de-mylae",
    "dificuldade": "medio",
    "contexto": "A Batalha de Mylae (260 a.C.) marcou a primeira grande vitória naval de Roma. Além da inovação técnica do corvus, a derrota teve repercussões profundas dentro da política interna de Cartago, alterando o equilíbrio entre as facções que disputavam o governo da cidade africana.",
    "enunciado": "Explique a inovação tática do corvus e analise como a derrota em Mylae fortaleceu a facção \"africana\" (clã dos Hanão) em detrimento dos Bárrcidas em Cartago.",
    "gabaritoComentado": "O corvus era uma ponte de abordagem com um bico metálico que, ao ser cravada no navio inimigo, transformava o combate naval em uma luta de infantaria sobre o convés. A derrota desmoralizou os Bárrcidas, que defendiam a expansão marítima, e abriu um vácuo de poder preenchido pelo clã Hanão (facção \"africana\"). Esta última priorizava a expansão terrestre no próprio território africano em vez de continuar a custosa guerra marítima contra Roma, visando proteger seus interesses como proprietários de terra.",
    "criterios": [
      "Explica a função tática do corvus.",
      "Relaciona Mylae à derrota cartaginesa.",
      "Identifica a facção africana dos Hanão.",
      "Analisa o impacto político interno em Cartago."
    ],
    "comentario": "Relacionar um evento tático naval a uma mudança na política interna de uma potência.",
    "fonte": "Ferreira (\"Batalha de Mylae\").",
    "armadilha": "Focar apenas no funcionamento do corvus e ignorar as consequências políticas internas em Cartago."
  },
  {
    "id": "hnv-d-m-08",
    "tipo": "discursiva",
    "topico": "02-da-galera-ao-navio-de-vela",
    "dificuldade": "medio",
    "contexto": "O binômio vela-canhão é frequentemente citado como a tecnologia que deu \"dimensão estratégica\" ao poder naval europeu. A introdução da artilharia pesada de bronze e ferro alterou permanentemente a forma como os Estados Nacionais projetavam poder nos oceanos recém-descobertos.",
    "enunciado": "Relacione a adoção dos canhões a bordo com a necessidade de autonomia estratégica dos navios e justifique a preferência militar pelos canhões de bronze em relação aos de ferro no século XVII.",
    "gabaritoComentado": "O canhão permitiu o combate à distância, transformando o navio em um instrumento estratégico de destruição e bloqueio, em vez de mero transporte de tropas para abordagem. A preferência pelo bronze ocorria porque este material era mais leve, mais resistente à corrosão marinha e menos propenso a explosões acidentais do que o ferro fundido da época, que era considerado de qualidade inferior e sujeito a fraturas. Essa autonomia permitiu a manutenção de impérios ultramarinos sem dependência constante de bases terrestres próximas.",
    "criterios": [
      "Explica o canhão como arma de combate à distância.",
      "Relaciona artilharia e autonomia estratégica do navio.",
      "Justifica a preferência pelo bronze.",
      "Compara bronze e ferro no ambiente marítimo."
    ],
    "comentario": "Conectar ciência dos materiais, tática naval e alcance geopolítico.",
    "fonte": "Cezar (\"História das Guerras Navais\" / HNV P1).",
    "armadilha": "Achar que o ferro era superior por ser \"mais duro\", ignorando o problema da corrosão e do peso no mar."
  },
  {
    "id": "hnv-d-m-09",
    "tipo": "discursiva",
    "topico": "03-franca-antartica-corso-e-religiao",
    "dificuldade": "medio",
    "contexto": "Jean de Bolés (ou Jean Cointá) é um personagem que ilustra a complexidade da ocupação francesa na Guanabara. Sua trajetória envolve desde a participação na França Antártica até a sua prisão pela Inquisição, passando por um papel crucial na ajuda militar aos portugueses.",
    "enunciado": "Analise o papel de Jean de Bolés na tomada do Forte Coligny por Mem de Sá (1560) e justifique por que, apesar de sua ajuda militar, ele acabou sendo perseguido pela Igreja.",
    "gabaritoComentado": "Bolés foi fundamental para os portugueses porque, tendo vivido na França Antártica, conhecia por dentro a estrutura e as fraquezas do Forte Coligny. No entanto, ele era um \"intermediário cultural\" que defendia o livre exame das escrituras e simpatizava com ideias reformadas (luteranas/calvinistas), o que era visto como \"peçonha luterana\" pelos jesuítas. A sua liberdade de pensamento e a influência sobre colonos católicos em São Vicente fizeram dele uma ameaça à coesão da Fé, levando à sua prisão inquisitorial.",
    "criterios": [
      "Explica o conhecimento interno de Bolés sobre o Forte Coligny.",
      "Relaciona Bolés à ajuda militar a Mem de Sá.",
      "Identifica suas ideias reformadas como ameaça religiosa.",
      "Distingue utilidade militar e perseguição inquisitorial."
    ],
    "comentario": "Contrastar a utilidade militar pragmática com a intolerância ideológica/religiosa do período.",
    "fonte": "Bicalho (\"A França Antártica...\").",
    "armadilha": "Achar que ele foi preso por ser espião francês; ele foi preso por suas opiniões religiosas."
  },
  {
    "id": "hnv-d-m-10",
    "tipo": "discursiva",
    "topico": "04-ocupacoes-francesas-e-holandesas",
    "dificuldade": "medio",
    "contexto": "A Batalha de Abrolhos (1631) é descrita por Cezar como um dos maiores combates em águas americanas. O embate entre a esquadra de D. Antônio Oquendo e Adrian Pater não se resolveu com a aniquilação total de um dos lados, exigindo uma análise mais refinada de seus resultados.",
    "enunciado": "Compare os resultados táticos e estratégicos da Batalha de Abrolhos e justifique por que a ação de Oquendo foi fundamental para a resistência luso-espanhola no Nordeste.",
    "gabaritoComentado": "Taticamente, a batalha foi um engajamento sangrento que resultou na destruição da capitânia holandesa e na morte de Adrian Pater. Estrategicamente, foi uma vitória ibérica porque o objetivo principal de Oquendo era proteger e efetuar o desembarque de cerca de 2.000 soldados para reforçar o Arraial de Bom Jesus, núcleo da resistência contra a ocupação de Pernambuco. Sem esse reforço, a resistência terrestre em Pernambuco poderia ter capitulado muito antes, consolidando o domínio holandês de forma mais rápida.",
    "criterios": [
      "Diferencia resultado tático e estratégico em Abrolhos.",
      "Cita a destruição da capitânia holandesa ou a morte de Pater.",
      "Explica o desembarque de reforços para o Arraial de Bom Jesus.",
      "Relaciona os reforços à resistência luso-espanhola."
    ],
    "comentario": "Diferenciar sucesso em combate (tático) de sucesso no objetivo da missão (estratégico).",
    "fonte": "Cezar (\"História das Guerras Navais\" / HNV P1).",
    "armadilha": "Achar que a batalha expulsou os holandeses de vez (eles ficaram até 1654)."
  },
  {
    "id": "hnv-d-d-01",
    "tipo": "discursiva",
    "topico": "01-mediterraneo-antigo-e-batalha-de-mylae",
    "dificuldade": "dificil",
    "contexto": "A historiografia naval clássica frequentemente foca na inovação tecnológica como o fator determinante para a vitória. No entanto, Leonardo Ferreira, ao analisar a Batalha de Mylae (260 a.C.), e Maria Fernanda Bicalho, ao discutir a \"Guerra Viva\" no Rio de Janeiro seiscentista, sugerem que a eficácia militar depende da natureza do pacto entre o Estado e seus combatentes. Em Roma, o exército cívico de cidadãos-proprietários enfrentou a lógica mercantil dos mercenários cartagineses. No Brasil colonial, a Coroa Portuguesa dependia da oferta de \"vidas e fazendas\" por vassalos que buscavam mercês régias em troca de serviços. Em ambos os casos, a tecnologia (o corvus ou a fortificação) foi apenas o meio de viabilizar uma vontade política sustentada por estruturas sociais específicas que garantiam a resiliência em conflitos de longa duração.",
    "enunciado": "Analise em conjunto como os modelos de mobilização (cívico-romano vs. remuneratório-colonial) moldaram a sustentabilidade do esforço de guerra e discuta em que medida o sucesso naval dependeu mais da coesão do pacto político do que da superioridade técnica intrínseca das embarcações.",
    "gabaritoComentado": "O aluno deve demonstrar que o modelo cívico de Roma permitia suportar derrotas iniciais e financiar frotas via cidadãos, enquanto Cartago sofria com o custo e a instabilidade de mercenários em guerras longas. No Brasil, a \"Guerra Viva\" transformou a conquista em ascensão social; os vassalos investiam recursos próprios esperando mercês (sesmarias, cargos), o que garantia a posse definitiva onde o Estado central falharia. Conclui-se que a tecnologia (corvus) só funciona se houver pessoal motivado por um pacto social (dever cívico ou economia de favores).",
    "criterios": [
      "Compara o modelo cívico romano e o remuneratório-colonial.",
      "Explica a instabilidade dos mercenários cartagineses.",
      "Relaciona Guerra Viva, mercês e conquista colonial.",
      "Avalia tecnologia como meio dependente de pacto político."
    ],
    "comentario": "Relação entre as fontes: Cruzamento entre sociologia militar antiga e cultura política do Antigo Regime colonial. Contexto histórico: Primeira Guerra Púnica e Conquista do Rio de Janeiro. Problema central: Sustentabilidade do esforço de guerra sob esgotamento de recursos centrais. Atores envolvidos: Senado Romano, Mercadores Cartagineses, Vassalos Luso-brasileiros e Coroa Francesa/Portuguesa. Meios navais/militares: Galeras com corvus e milícias de vassalos/indígenas aliados. Interesses: Defesa da República (Roma) e obtenção de mercês régias (Brasil). Consequência histórica: Vitória estratégica romana no Mediterrâneo e consolidação da elite \"nobreza da terra\" no Rio de Janeiro. Pontos satisfatórios: Definir exército cívico e guerra viva. Resposta excelente: Relacionar a falha dos mercenários de Cartago com a necessidade portuguesa de delegar a guerra a agentes locais.",
    "fonte": "Ferreira (Batalha de Mylae) e Bicalho (A França Antártica).",
    "armadilha": "Achar que \"Guerra Viva\" significa apenas intensidade de combate, ignorando o sentido de \"prestação de serviço\"."
  },
  {
    "id": "hnv-d-d-02",
    "tipo": "discursiva",
    "topico": "05-brasil-holandes-restauracao-e-imperio",
    "dificuldade": "dificil",
    "contexto": "Após a Restauração de 1640, Portugal enfrentou o que Marcello Loureiro define como \"miserável estado\": um abismo naval onde possuía 13 navios frente aos 14.000 da Holanda. Nesse cenário, Willian Cezar descreve a transição tecnológica para o binômio vela-canhão, que conferiu dimensão estratégica aos navios. A monarquia portuguesa, operando como um \"Estado Polissinodal\", dependia da circulação de informações marítimas para governar suas periferias (Brasil e Angola). No entanto, a \"tirania da distância\" e a superioridade holandesa no Atlântico impunham uma \"descerebração\" ao governo central. As decisões em Lisboa, gestadas em conselhos morosos, frequentemente chegavam defasadas, obrigando os oficiais régios no ultramar a adaptarem e mediarem a autoridade real conforme as urgências locais de defesa e comércio.",
    "enunciado": "Relacione o conceito de \"Estado Polissinodal\" com a evolução tecnológica do binômio vela-canhão e avalie criticamente como a defasagem naval de Portugal impactou a autonomia decisória dos oficiais régios na América e na África.",
    "gabaritoComentado": "A tecnologia de vela-canhão permitiu a projeção global, mas a defasagem numérica lusa tornou a comunicação perigosa e lenta. O aluno deve explicar que o sistema de conselhos (Guerra, Ultramarino) dependia da \"informação sob o ritmo das velas\". Sem navios para garantir esse fluxo, a autoridade real era \"filtrada e dispersada\" (Elliott). Isso gerou uma autonomia forçada: oficiais locais tomavam decisões estratégicas (como a reconquista de Angola) sem esperar o centro, que estava \"descerebrado\" pela falta de meios navais e pela distância.",
    "criterios": [
      "Define Estado Polissinodal e seu funcionamento por conselhos.",
      "Relaciona vela-canhão à projeção e comunicação imperial.",
      "Explica a defasagem naval portuguesa frente à Holanda.",
      "Avalia a autonomia decisória dos oficiais ultramarinos."
    ],
    "comentario": "Relação entre as fontes: Conexão entre a estrutura administrativa (gestão polissinodal) e as limitações materiais (tecnologia e defasagem naval). Contexto histórico: Pós-Restauração de 1640 e auge da Companhia das Índias Ocidentais (WIC). Problema central: Governabilidade de um império descontínuo com marinha inferior. Atores envolvidos: D. João IV, Conselhos Superiores, Oficiais Régios (Salvador de Sá) e WIC. Meios navais/militares: Os 13 navios lusos vs. a esquadra holandesa; binômio vela-canhão. Interesses: Manutenção da soberania dos Bragança e controle dos fluxos de açúcar/negros. Consequência histórica: Descentralização prática da autoridade e fortalecimento dos poderes locais coloniais. Pontos satisfatórios: Explicar o que é Estado Polissinodal e a disparidade 13 vs 14.000. Resposta excelente: Discutir a autonomia local não como rebeldia, mas como adaptação à \"tirania da distância\".",
    "fonte": "Loureiro (Em miserável estado) e Cezar (História das Guerras Navais).",
    "armadilha": "Achar que Portugal era um Estado Absolutista centralizado de fato, ignorando a mediação local."
  },
  {
    "id": "hnv-d-d-03",
    "tipo": "discursiva",
    "topico": "05-brasil-holandes-restauracao-e-imperio",
    "dificuldade": "dificil",
    "contexto": "A ocupação holandesa de Angola (1641) representou um golpe estratégico no \"ponto nervoso\" da monarquia pluricontinental portuguesa. Marcello Loureiro e os pareceres de conselheiros como o Padre Vieira sublinham que \"sem negros não há Pernambuco, e sem Angola não há negros\". Simultaneamente, Willian Cezar descreve a Batalha Naval de Abrolhos (1631) como uma vitória estratégica ibérica, pois permitiu o desembarque de tropas para reforçar a resistência terrestre no Arraial de Bom Jesus. Esses eventos revelam que a guerra no mar não visava apenas a aniquilação de frotas, mas a manutenção de circuitos mercantis intercontinentais. A perda de Angola desarticulou o triângulo comercial luso, gerando crises de liquidez e forçando o governo a reavaliar suas prioridades geográficas e diplomáticas diante da WIC e de Castela.",
    "enunciado": "Discuta a importância de Angola como pivô da economia imperial portuguesa e analise em conjunto como a estratégia naval holandesa de bloqueio e ocupação de pontos-chave visava desestruturar a Fazenda Real portuguesa.",
    "gabaritoComentado": "Angola era vital pois o açúcar brasileiro dependia da mão de obra escravizada. A WIC usou seu poder naval para tomar Elmina e Luanda, capturando os lucros do tráfico e estrangulando a arrecadação portuguesa (dízimos e alfândegas). O aluno deve relacionar isso à Batalha de Abrolhos, mostrando que a defesa portuguesa focava em manter núcleos de resistência que dependiam desses fluxos. A consequência foi o \"miserável estado\" financeiro de Lisboa e o impasse monetário no Prata.",
    "criterios": [
      "Explica Angola como pivô do açúcar brasileiro.",
      "Relaciona WIC, Luanda e tráfico transatlântico.",
      "Conecta bloqueios e ocupações à Fazenda Real.",
      "Analisa Abrolhos como defesa de circuitos mercantis."
    ],
    "comentario": "Relação entre as fontes: Conexão entre a logística do tráfico negreiro e o impacto das batalhas navais na sustentação econômica do Império. Contexto histórico: Domínio holandês no Nordeste e na África Ocidental. Problema central: Interdependência econômica entre os continentes (monarquia pluricontinental). Atores envolvidos: WIC, Fazenda Real de Portugal, Padre Vieira, Salvador de Sá. Meios navais/militares: Esquadras de bloqueio da WIC; expedições luso-espanholas de socorro. Interesses: Monopólio do açúcar e controle do tráfico transatlântico de escravizados. Consequência histórica: Reconquista de Angola em 1648 financiada pelo Rio de Janeiro. Pontos satisfatórios: Explicar a relação Angola-Brasil-Açúcar. Resposta excelente: Analisar o impacto da falta de negros na circulação monetária e na arrecadação alfandegária de Lisboa.",
    "fonte": "Loureiro (Em miserável estado) e Cezar (Batalha de Abrolhos).",
    "armadilha": "Ver a perda de Angola como um evento geográfico isolado, sem impacto fiscal no Reino."
  },
  {
    "id": "hnv-d-d-04",
    "tipo": "discursiva",
    "topico": "03-franca-antartica-corso-e-religiao",
    "dificuldade": "dificil",
    "contexto": "A presença francesa na Guanabara (França Antártica) e a posterior ameaça da \"peçonha luterana\" são analisadas por Maria Fernanda Bicalho como uma ameaça bifronte ao projeto colonizador português: política e religiosa. O uso do corso francês contestava o monopólio ibérico (mare clausum) em favor do mare liberum. No século seguinte, Marcello Loureiro mostra que a legitimidade da dinastia de Bragança também dependia de uma reafirmação religiosa e clientelar. A expulsão de franceses (vistos como hereges calvinistas) e holandeses (protestantes) foi legitimada pela Igreja como uma \"Guerra Santa\" contra a heresia. Nesse sentido, a tecnologia naval e a estratégia militar estavam profundamente entrelaçadas com a defesa da Fé e a manutenção de alianças com indígenas convertidos e vassalos católicos.",
    "enunciado": "Relacione o conceito de \"peçonha luterana\" (Bicalho) com a necessidade de legitimação política da Dinastia de Bragança (Loureiro) e mostre como o discurso religioso foi utilizado para mobilizar recursos navais e militares nas guerras de expulsão.",
    "gabaritoComentado": "O aluno deve mostrar que o termo \"peçonha luterana\" transformou uma disputa comercial (corso) em uma causa religiosa. Na Restauração, D. João IV precisava (re)significar o pertencimento dos vassalos; a luta contra o holandês herege servia para unir o império sob a bandeira católica. O discurso religioso legitimava a \"Guerra Viva\", motivando vassalos a doarem \"vidas e fazendas\" pela Fé e pelo Rei, compensando a falta de recursos estatais.",
    "criterios": [
      "Define peçonha luterana no contexto francês.",
      "Relaciona religião e legitimação política dos Bragança.",
      "Explica o discurso de Guerra Santa.",
      "Mostra a mobilização de recursos por Fé e Império."
    ],
    "comentario": "Relação entre as fontes: Análise do uso da religião como instrumento de coesão política e militar em dois períodos distintos. Contexto histórico: Invasão francesa (1555) e Restauração Portuguesa (1640). Problema central: Legitimação do poder monárquico e mobilização de recursos em crises. Atores envolvidos: Villegagnon, Mem de Sá, Jesuítas, D. João IV, Calvinistas. Meios navais/militares: Esquadras financiadas por particulares; alianças indígenas. Interesses: Defesa do catolicismo e soberania territorial portuguesa. Consequência histórica: Fundação do Rio de Janeiro e expulsão definitiva dos \"hereges\" do litoral. Pontos satisfatórios: Definir peçonha luterana e legitimação dinástica. Resposta excelente: Explicar como a Igreja (Jesuítas) atuou como braço ideológico da guerra naval.",
    "fonte": "Bicalho (França Antártica) e Loureiro (Em miserável estado).",
    "armadilha": "Achar que as guerras foram estritamente religiosas, ignorando o pano de fundo comercial/imperial."
  },
  {
    "id": "hnv-d-d-05",
    "tipo": "discursiva",
    "topico": "05-brasil-holandes-restauracao-e-imperio",
    "dificuldade": "dificil",
    "contexto": "Leonardo Ferreira destaca que o modelo de Estado criado pela elite romana considerava o serviço militar (militia) um dever do cidadão, custeado por suas próprias fazendas e sem pagamento de soldo regular. Em contrapartida, Cartago dependia de mercenários caros, cujo custo tornava-se insustentável em guerras de longa duração. Séculos depois, Marcello Loureiro descreve Portugal em 1640 enfrentando uma exaustão financeira similar, onde a solução para a falta de capital estatal foi a delegação da guerra a vassalos locais e a criação de companhias de comércio. A transição da galera mediterrânea para os navios de borda alta militarizados (cogas e galeões) exigia investimentos que as coroas nem sempre podiam sustentar, levando a inovações administrativas para financiar a força naval.",
    "enunciado": "Compare as limitações econômicas de Cartago na Primeira Guerra Púnica com as dificuldades financeiras de Portugal no pós-1640 e avalie criticamente como cada Estado buscou superar a escassez de recursos para manter sua presença no mar.",
    "gabaritoComentado": "Cartago faliu por depender de mercenários que exigiam soldo constante em uma guerra de atrito. Portugal superou a exaustão financeira via \"Estado Polissinodal\" e \"Guerra Viva\", onde vassalos investiam (como Salvador de Sá em Angola) em troca de mercês futuras. Roma venceu por ter um exército cívico \"gratuito\". O aluno deve concluir que a sustentabilidade naval dependia da capacidade do Estado em externalizar custos ou possuir uma base cívica comprometida.",
    "criterios": [
      "Compara mercenarismo cartaginês e exaustão portuguesa.",
      "Explica a externalização de custos militares.",
      "Relaciona Guerra Viva e financiamento por vassalos.",
      "Avalia a sustentabilidade naval em guerras longas."
    ],
    "comentario": "Relação entre as fontes: Comparação entre modelos de financiamento militar e naval na Antiguidade e na Idade Moderna. Contexto histórico: Primeira Guerra Púnica e Crise da Restauração Portuguesa. Problema central: Financiamento de frotas e exércitos em guerras de longa duração. Atores envolvidos: Clã dos Bárrcidas, Senado Romano, D. João IV, Mercadores de Lisboa/Rio. Meios navais/militares: Mercenários vs. Cidadãos-soldados vs. Vassalos/Nobreza da terra. Interesses: Proteção de rotas de prata (Cartago) e preservação do Império Ultramarino (Portugal). Consequência histórica: Vitória romana por exaustão de Cartago; reconquista de Angola via capital fluminense. Pontos satisfatórios: Explicar a diferença entre mercenário e cívico. Resposta excelente: Relacionar a falha de liquidez (falta de prata do Prata) com a incapacidade de sustentar tropas no Brasil.",
    "fonte": "Ferreira (Batalha de Mylae) e Loureiro (Em miserável estado).",
    "armadilha": "Atribuir a vitória romana apenas ao corvus, ignorando a superioridade financeira do modelo cívico."
  },
  {
    "id": "hnv-d-d-06",
    "tipo": "discursiva",
    "topico": "02-da-galera-ao-navio-de-vela",
    "dificuldade": "dificil",
    "contexto": "A transição das galeras de remo para os navios de vela e canhão alterou a lógica tática e estratégica da guerra naval. Willian Cezar explica que a coga de guerra, com castelos e gáveas, transformou o navio em uma \"fortaleza flutuante\". Essa tecnologia permitiu combates como a Batalha de Sluys (1340), onde o choque físico ainda predominava, mas os canhões começavam a aparecer. Em contraste, a Batalha de Mylae na Antiguidade utilizou o corvus para \"terrestrializar\" o mar. Enquanto a galera mediterrânea priorizava a velocidade e o esporão, o navio oceânico moderno focou na autonomia e na destruição à distância. Essas mudanças tecnológicas não foram apenas técnicas, mas respostas a novos teatros de operações (Mar do Norte e Atlântico) e novos objetivos imperiais.",
    "enunciado": "Relacione a evolução estrutural das embarcações (da galera à coga militarizada) com a mudança no binômio tático \"abordagem vs. bombardeio\" e analise como essas mudanças afetaram o controle estratégico dos mares.",
    "gabaritoComentado": "A galera era rápida e focada no esporão/abordagem (combate próximo). A coga introduziu a borda alta, dificultando a abordagem e permitindo plataformas elevadas (castelos). O binômio vela-canhão permitiu a projeção de poder sem o choque direto, dando \"autonomia estratégica\". O aluno deve citar que em Sluys a abordagem ainda era decisiva, mas os canhões em navios de borda alta (cogas/galeões) abriram caminho para o domínio oceânico ibérico e holandês.",
    "criterios": [
      "Descreve a transição da galera à coga militarizada.",
      "Compara abordagem, esporão e bombardeio.",
      "Explica a lenta adoção estratégica do canhão.",
      "Relaciona estrutura naval e controle dos mares."
    ],
    "comentario": "Relação entre as fontes: Evolução da técnica de combate naval da Antiguidade à Idade Moderna. Contexto histórico: Guerras navais medievais e expansão marítima. Problema central: Transição do combate de infantaria embarcada para o combate de artilharia naval. Atores envolvidos: Romanos, Cartagineses, Liga Hanseática, Ingleses, Franceses. Meios navais/militares: Galeras, Cogas, Canhões de bronze/ferro. Interesses: Domínio costeiro (Mediterrâneo) vs. Domínio oceânico/estratégico. Consequência histórica: Superioridade estratégica dos navios de vela que possibilitou impérios globais. Pontos satisfatórios: Descrever a coga e a galera. Resposta excelente: Explicar como a borda alta da coga anulou as táticas de abordagem das galeras baixas.",
    "fonte": "Cezar (Velas e Canhões) e Ferreira (Batalha de Mylae).",
    "armadilha": "Achar que o canhão substituiu a abordagem imediatamente; a transição foi lenta."
  },
  {
    "id": "hnv-d-d-07",
    "tipo": "discursiva",
    "topico": "03-franca-antartica-corso-e-religiao",
    "dificuldade": "dificil",
    "contexto": "Maria Fernanda Bicalho apresenta o corso francês como uma prática institucionalizada de contestação ao monopólio ibérico, apoiada por alianças locais (Tamoios) e intérpretes (truchements). Marcello Loureiro, por sua vez, discute a importância de intermediários similares e conselheiros na gestão da monarquia portuguesa, como Salvador de Sá e o Padre Vieira. A expulsão dos franceses da Guanabara dependeu de uma aliança luso-indígena coordenada por jesuítas e oficiais régios. Da mesma forma, a reconquista de Angola exigiu que Salvador de Sá mobilizasse paulistas e indígenas em um projeto financiado por negociantes do Rio. O mar, portanto, não era apenas um espaço de navios, mas de redes de alianças que conectavam as \"cabeças\" do império às realidades locais.",
    "enunciado": "Compare o papel das alianças indígenas e dos intermediários culturais na França Antártica (Bicalho) e na Reconquista de Angola (Loureiro) e discuta como esses atores locais foram decisivos para compensar a fraqueza naval das metrópoles.",
    "gabaritoComentado": "Os franceses usaram Tamoios e truchements para se fixar sem frotas permanentes. Os portugueses reagiram via Araribóia e alianças jesuíticas. Em Angola, Salvador de Sá usou \"índios flecheiros\" e paulistas financiado por negociantes locais. O aluno deve concluir que os intermediários locais (indígenas e colonos) eram os \"músculos\" da guerra onde a marinha estatal era insuficiente. O controle do mar dependia de quem controlava o \"apoio em terra\" e o financiamento local.",
    "criterios": [
      "Compara alianças indígenas francesas e portuguesas.",
      "Cita Tamoios, Araribóia, paulistas ou índios flecheiros.",
      "Explica o papel dos intermediários culturais e locais.",
      "Relaciona alianças à compensação da fraqueza naval metropolitana."
    ],
    "comentario": "Relação entre as fontes: Papel dos agentes locais e alianças nativas na estratégia imperial. Contexto histórico: Guerras coloniais na Guanabara e no Atlântico Sul. Problema central: Insuficiência de meios navais das metrópoles e dependência de alianças locais. Atores envolvidos: Tamoios, Araribóia, Salvador de Sá, Jesuítas, Paulistas. Meios navais/militares: Milícias indígenas, navios financiados por vassalos. Interesses: Comércio de pau-brasil e recuperação do tráfico negreiro. Consequência histórica: Manutenção do Brasil no império português via alianças regionais. Pontos satisfatórios: Citar os Tamoios e o papel de Salvador de Sá. Resposta excelente: Relacionar a \"Guerra Viva\" com a externalização do custo militar para os vassalos e aliados indígenas.",
    "fonte": "Bicalho (A França Antártica) e Loureiro (Em miserável estado).",
    "armadilha": "Achar que os indígenas eram apenas \"vítimas\" passivas, ignorando sua agência como aliados militares."
  },
  {
    "id": "hnv-d-d-08",
    "tipo": "discursiva",
    "topico": "01-mediterraneo-antigo-e-batalha-de-mylae",
    "dificuldade": "dificil",
    "contexto": "A Batalha de Mylae foi motivada pelo controle da Sicília e do Estreito de Messina, pontos vitais para a segurança de Roma e a economia de Cartago. Ferreira destaca que Messina permitia o controle das rotas do Mediterrâneo central. No século XVII, Marcello Loureiro descreve uma disputa similar pelo Rio da Prata, onde o controle de Buenos Aires era visto por Salvador de Sá e pelo Conselho de Guerra como a \"estrada aberta até Potosí\". O controle desses estreitos e estuários não era apenas geográfico, mas estratégico: em Mylae, visava-se impedir uma invasão da Itália; no Prata, visava-se drenar a prata espanhola para sustentar a Fazenda Real portuguesa esgotada pela guerra contra a Holanda.",
    "enunciado": "Relacione a importância estratégica do Estreito de Messina em 260 a.C. com a disputa pelo Rio da Prata em 1640 e avalie criticamente como o controle de passagens marítimas estreitas fundamenta a projeção de poder imperial.",
    "gabaritoComentado": "Ambos são \"pontos nervosos\" geográficos. Messina era a porta da Itália e nó comercial mediterrâneo. O Prata era a via de entrada para a prata de Potosí. O aluno deve discutir que o poder naval foca nesses pontos para estrangular o inimigo ou irrigar o império. Roma usou Mylae para garantir Messina; Portugal tentou (sem sucesso oficial inicial) Buenos Aires para resolver a crise de liquidez. A passagens marítimas são as \"chaves\" dos circuitos mercantis e militares.",
    "criterios": [
      "Identifica Messina e o Rio da Prata como passagens estratégicas.",
      "Relaciona Messina à segurança romana.",
      "Relaciona o Prata à prata de Potosí e à solvência portuguesa.",
      "Avalia estreitos e estuários como chaves de poder imperial."
    ],
    "comentario": "Relação entre as fontes: Geopolítica de estreitos e estuários como motor de conflitos navais em diferentes eras. Contexto histórico: Primeira Guerra Púnica e Disputa Luso-espanhola pelo Prata. Problema central: Controle de rotas de suprimento e escoamento de metais preciosos/cereais. Atores envolvidos: Senado Romano, Cartago, Salvador de Sá, Conselho de Guerra. Meios navais/militares: Frotas de bloqueio e esquadras de conquista. Interesses: Segurança territorial (Roma) e solvência financeira (Portugal). Consequência histórica: Hegemonia romana na Sicília e persistência do interesse luso no Prata por séculos. Pontos satisfatórios: Identificar Messina e o Prata como alvos estratégicos. Resposta excelente: Relacionar a falta de prata em 1640 com a necessidade de controle naval do estuário platino.",
    "fonte": "Ferreira (Batalha de Mylae) e Loureiro (Em miserável estado).",
    "armadilha": "Focar na batalha física e esquecer o valor econômico (cereais/prata) por trás do ponto geográfico."
  },
  {
    "id": "hnv-d-d-09",
    "tipo": "discursiva",
    "topico": "05-brasil-holandes-restauracao-e-imperio",
    "dificuldade": "dificil",
    "contexto": "A gestão do Império Português, segundo Marcello Loureiro, passava por um \"Estado Polissinodal\" onde o Conselho Ultramarino e o Conselho de Guerra frequentemente divergiam. No parecer sobre Buenos Aires e Angola em 1643, o Ultramarino barrou a invasão do Prata por considerá-la inoportuna, apesar do apoio do Conselho de Guerra. Esse processo deliberativo baseava-se em cartas, arbítrios e informações que viajavam sob o \"ritmo das velas\". Simultaneamente, a transição tecnológica descrita por Willian Cezar mostra que a eficácia dessas ordens dependia da manobrabilidade e do armamento dos navios disponíveis. A \"descerebração\" do governo ocorria quando o centro perdia a compatibilidade com a realidade local devido à morosidade burocrática e técnica da navegação.",
    "enunciado": "Analise em conjunto as tensões entre os Conselhos Superiores (Guerra vs. Ultramarino) e a \"tirania da distância\" (Loureiro) e discuta como essa arquitetura de poder afetava a estratégia naval lusa no Atlântico Sul.",
    "gabaritoComentado": "O aluno deve explicar que o autogoverno dos conselhos gerava paralisia ou ordens contraditórias. Enquanto o Conselho de Guerra focava na agressividade militar (Prata), o Ultramarino focava na preservação do que restava (Angola/Brasil). A \"tirania da distância\" agravava isso: quando uma decisão era tomada em Lisboa, a situação no mar já havia mudado. Conclui-se que o \"Estado polissinodal\" retardava a reação naval portuguesa contra a WIC, favorecendo a autonomia dos governadores locais.",
    "criterios": [
      "Explica a divergência entre Conselho de Guerra e Ultramarino.",
      "Define tirania da distância no governo imperial.",
      "Relaciona morosidade decisória à estratégia naval.",
      "Analisa a autonomia local como efeito da arquitetura polissinodal."
    ],
    "comentario": "Relação entre as fontes: Impacto da burocracia administrativa e da técnica de navegação na condução da guerra naval. Contexto histórico: Administração de D. João IV e conflitos com a Holanda. Problema central: Morosidade decisória e falta de coordenação entre instâncias de poder. Atores envolvidos: Conselho de Guerra, Conselho Ultramarino, Salvador de Sá. Meios navais/militares: Navios de aviso e esquadras de socorro. Interesses: Expansão militar vs. Cautela administrativa e diplomática. Consequência histórica: Prevalência do Conselho Ultramarino nas decisões sobre o Prata; atraso na defesa de Pernambuco. Pontos satisfatórios: Definir Estado Polissinodal e descrever a divergência sobre Buenos Aires. Resposta excelente: Analisar como a autonomia dos conselhos refletia a \"segunda escolástica\" e o contratualismo luso.",
    "fonte": "Loureiro (Em miserável estado) e Cezar (História das Guerras Navais).",
    "armadilha": "Achar que as divergências eram apenas \"erros\", e não parte da lógica corporativa de governo."
  },
  {
    "id": "hnv-d-d-10",
    "tipo": "discursiva",
    "topico": "04-ocupacoes-francesas-e-holandesas",
    "dificuldade": "dificil",
    "contexto": "A Batalha de Abrolhos (1631) e a \"Jornada dos Vassalos\" (1625) exemplificam grandes esforços navais da União Ibérica para manter o controle do litoral brasileiro contra a WIC holandesa. Willian Cezar destaca que em Abrolhos, a vitória ibérica permitiu o desembarque de tropas no Arraial de Bom Jesus. Maria Fernanda Bicalho argumenta que a fundação e a defesa de cidades como o Rio de Janeiro eram estratégias para garantir a posse definitiva (povoar para não perder). A história naval desses conflitos revela que o mar era o meio para atingir o objetivo final: a ocupação terrestre estável. Sem o controle dos portos e baías, a exploração do açúcar e a arrecadação da Fazenda Real seriam impossíveis, transformando cada combate naval em uma luta pela sobrevivência econômica do Reino.",
    "enunciado": "Avalie criticamente a relação entre batalhas navais (Abrolhos/Jornada dos Vassalos) e a estratégia de fortificação e povoamento do litoral e mostre como o controle do mar era indissociável da exploração econômica do açúcar.",
    "gabaritoComentado": "As batalhas navais visavam quebrar bloqueios para permitir que reforços chegassem às fortificações terrestres. O controle do mar garantia que o açúcar chegasse a Lisboa e que os escravizados chegassem aos engenhos. Sem frotas, as cidades (Rio, Salvador, Recife) ficariam isoladas e cairiam. O aluno deve concluir que o poder naval era o suporte da \"monarquia pluricontinental\": se o mar fosse bloqueado, o sistema econômico e administrativo colapsaria, como ocorreu na crise de liquidez de 1640.",
    "criterios": [
      "Relaciona batalhas navais a desembarque e reforço terrestre.",
      "Cita Jornada dos Vassalos ou Abrolhos.",
      "Explica fortificação e povoamento como posse do litoral.",
      "Conecta controle do mar à economia açucareira."
    ],
    "comentario": "Relação entre as fontes: Integração entre tática naval e estratégia de ocupação colonial/econômica. Contexto histórico: Invasões Holandesas e Expulsão dos Franceses. Problema central: Dependência da comunicação marítima para a viabilidade econômica colonial. Atores envolvidos: D. Antônio Oquendo, D. Fadrique de Toledo, WIC, Vassalos locais. Meios navais/militares: Galeões, bloqueios navais e fortificações costeiras. Interesses: Monopólio do açúcar e controle do território americano. Consequência histórica: Retomada de Salvador e reforço da resistência em Pernambuco. Pontos satisfatórios: Citar a Jornada dos Vassalos e a importância das cidades costeiras. Resposta excelente: Conectar a vitória estratégica em Abrolhos com a sustentação da Fazenda Real em Lisboa.",
    "fonte": "Cezar (Ocupações Holandesas) e Bicalho (A França Antártica).",
    "armadilha": "Focar apenas no combate entre navios, ignorando que o objetivo era o desembarque de tropas e carga."
  }
];

export const correlacionar = [] as never[];

export const todasQuestoes: Questao[] = [...multiplaEscolha, ...verdadeiroFalso, ...discursivas];

export function questoesPorTopico(slug: string): Questao[] {
  return todasQuestoes.filter((q) => q.topico === slug);
}

export const totalQuestoes = {
  multipla: multiplaEscolha.length,
  vf: verdadeiroFalso.length,
  correlacione: 0,
  discursiva: discursivas.length,
};

# -*- coding: utf-8 -*-
"""Simulado final da família rel-t2 — 12 objetivas e 6 discursivas."""

from helper import obj, vf, cor, dis

T = "99-revisao-final"
S = "SG01"

OBJETIVAS = [
    obj(S, "N2", 1, topico=T,
        conceitos=["REL-T2-M02-C002", "REL-T2-M02-C011", "REL-T2-M03-C001"],
        enunciado="Um oficial precisa indicar, para um documento interno, qual instrumento define os OBJETIVOS de defesa do país, qual ORIENTA os segmentos do Estado quanto às medidas para alcançá-los, qual os TRADUZ em ações e metas para cada Força e qual se dirige principalmente à sociedade e ao mundo. A sequência correta é:",
        alternativas=[
            "END, PND, PESD e Livro Branco de Defesa Nacional.",
            "PND, END, PESD e Livro Branco de Defesa Nacional.",
            "Livro Branco de Defesa Nacional, PND, END e PESD.",
            "PND, PESD, END e Política Marítima Nacional.",
            "END, PESD, Política Naval e Livro Branco de Defesa Nacional.",
        ],
        correta=1,
        comentario="A PND define os objetivos; a END orienta os segmentos do Estado quanto às medidas a implementar, sendo “o vínculo entre o posicionamento do País nas questões de Defesa e as ações necessárias para efetivamente dotar o Estado da capacidade para atender seus interesses”; o PESD, elaborado pelo Ministério da Defesa, traduz a END em ações concretas e metas para cada Força; e o Livro Branco de Defesa Nacional é documento voltado principalmente para a sociedade e para o mundo, explicando a organização e a estruturação da Defesa no Brasil. Trocar PND por END é o erro mais frequente do tema.",
        distratores=[
            "Errada. Inverte PND e END nas duas primeiras posições.",
            "Correta. PND define, END orienta, PESD traduz em metas, Livro Branco comunica.",
            "Errada. O Livro Branco não define objetivos; ele comunica.",
            "Errada. Inverte END e PESD e substitui o Livro Branco pela Política Marítima Nacional.",
            "Errada. Omite a PND, que é justamente quem define os objetivos.",
        ],
        fonte="AULA 13.pdf, slides “Política Nacional de Defesa”, “Estratégia Nacional de Defesa (END)” e “Planejamento Estratégico Setorial de Defesa (PESD) 2020-2031”; REL - T2.pdf, distinção entre os documentos.",
        competencia="Atribuir a cada documento da arquitetura de defesa a sua função própria.",
        erro="Atribuir à END a definição dos objetivos de defesa.",
        tempo=3),

    vf(S, "N1", 2, topico=T,
       conceitos=["REL-T2-M03-C003"],
       afirmacao="O entorno estratégico brasileiro, tal como definido na Política Naval, compreende a América do Sul, o Atlântico Sul, os países da costa ocidental africana e a Antártica.",
       correta=True,
       comentario="**Verdadeira.** São exatamente os quatro itens do slide. Vale distinguir esse conceito de outro, mais amplo e de natureza acadêmica: o espaço oceanopolítico brasileiro proposto por Barbosa Jr., que alcança o Atlântico Norte até 18° de latitude norte, o mar do Caribe, a costa oeste da América do Sul, a Antártica e as costas oeste e leste da África até Moçambique. O primeiro é definição institucional; o segundo, proposta de análise.",
       fonte="AULA 14.pdf, slide “Política Naval” (entorno estratégico); REL - T1 - IM415, seção 6 (espaço oceanopolítico de Barbosa Jr.).",
       competencia="Recuperar a definição de entorno estratégico e distingui-la do espaço oceanopolítico.",
       erro="Omitir a Antártica ou a costa ocidental africana, ou confundir entorno com espaço oceanopolítico.",
       tempo=2),

    obj(S, "N3", 3, topico=T,
        conceitos=["REL-T2-M01-C017", "REL-T2-M01-C011", "REL-T2-M01-C016"],
        enunciado="Aponte a alternativa que contém apenas afirmações INCORRETAS sobre a tipologia da autonomia na política externa brasileira. **I.** O período de autonomia pela distância compreende a Política Externa Independente e os governos militares, sem exceções. **II.** O Pragmatismo Responsável incluiu o reconhecimento da República Popular da China e da independência de Angola, além da denúncia do tratado militar com os Estados Unidos. **III.** A autonomia pela participação designa o período Lula, marcado pela expansão preferencialmente Sul-Sul. **IV.** O alinhamento valorativo é categoria distinta do alinhamento automático, porque se ancora em afinidade entre governos e tende a cair com a alternância no parceiro.",
        alternativas=[
            "I e II.",
            "I e III.",
            "II e IV.",
            "III e IV.",
            "I, III e IV.",
        ],
        correta=1,
        comentario="As incorretas são **I** e **III**. O item I falha na exceção: o slide diz “PEI até Governos Militares (com exceção do período Castello)”, e Castello Branco é alinhamento automático. O item III troca os rótulos: autonomia pela participação é FHC; Lula é autonomia pela diversificação, com estratégia bifronte. Os itens II e IV são corretos — o Pragmatismo Responsável é do período Geisel e inclui exatamente essas decisões, e o alinhamento valorativo é a categoria que o slide reserva ao período Bolsonaro durante o governo Trump, distinta do alinhamento automático porque depende de afinidade de governo, e não de cálculo de bloco.",
        distratores=[
            "Errada. O item II é correto.",
            "Correta. Apenas I e III são incorretos.",
            "Errada. Os dois itens são corretos.",
            "Errada. O item IV é correto.",
            "Errada. O item IV é correto.",
        ],
        fonte="AULA 12.pdf, slides “Síntese tipológica”, “PEB - Governos civis-militares (1964~1985)” e “PEB - Governos pós-1985”.",
        competencia="Aplicar a tipologia com suas exceções e distinguir alinhamento valorativo de automático.",
        erro="Esquecer a exceção de Castello Branco e trocar os rótulos de FHC e Lula.",
        tempo=4),

    obj(S, "N3", 4, topico=T,
        conceitos=["REL-T2-M03-C007", "REL-T2-M03-C008", "REL-T2-M02-C009"],
        enunciado="Um Aspirante escreve: “A defesa ribeirinha é função do Poder Naval e alcança apenas os rios navegáveis, que estão fora das Águas Jurisdicionais Brasileiras.” Quantos erros essa frase contém e quais são?",
        alternativas=[
            "Nenhum erro: a frase está correta em todos os seus elementos.",
            "Dois erros: a defesa marítima e ribeirinha é função do Poder MARÍTIMO, não do Poder Naval; e as águas interiores INTEGRAM as Águas Jurisdicionais Brasileiras por definição expressa.",
            "Um erro: a defesa ribeirinha é tarefa básica do Poder Naval, e não função do Poder Marítimo.",
            "Um erro: as águas interiores integram as AJB, mas a atribuição da função ao Poder Naval está correta.",
            "Três erros: além dos dois relativos a função e a AJB, a defesa ribeirinha não alcança rios navegáveis, e sim exclusivamente águas de estuário.",
        ],
        correta=1,
        comentario="Dois erros. Primeiro, a atribuição: “defesa marítima e ribeirinha” é uma das quatro **funções do Poder Marítimo** — ao lado de intercomunicação, pesquisa e explotação —, e não uma das quatro **tarefas básicas do Poder Naval**, que são controle de área marítima, negação do uso do mar, projeção de poder sobre terra e contribuição para a dissuasão. Segundo, a definição de AJB começa justamente por “as águas interiores e os espaços marítimos”, de modo que dizer que os rios estão fora das AJB inverte o conceito. É esse duplo acerto que responde ao Estudo Dirigido que pede a correlação entre defesa ribeirinha e AJB: a função ribeirinha cobre precisamente a parte interior da jurisdição.",
        distratores=[
            "Errada. Há dois erros identificáveis.",
            "Correta. Erro de atribuição funcional e erro de definição de AJB.",
            "Errada. Inverte a correção: a defesa marítima e ribeirinha é função do Poder Marítimo.",
            "Errada. A atribuição ao Poder Naval está incorreta.",
            "Errada. O terceiro erro apontado não existe: nada no corpus restringe a função a estuários.",
        ],
        fonte="AULA 14.pdf, slide “Funções do Poder Marítimo”; AULA 13.pdf, slides “Poder Naval (END)” (definição de AJB e tarefas básicas) e Estudo Dirigido (“Correlacione a defesa ribeirinha com o conceito de AJB”).",
        competencia="Identificar erros de atribuição entre listas próximas e de definição de AJB.",
        erro="Atribuir ao Poder Naval uma função do Poder Marítimo e excluir as águas interiores das AJB.",
        tempo=4),

    obj(S, "N4", 5, topico=T,
        conceitos=["REL-T2-M04-C009", "REL-T2-M01-C018", "REL-T2-M99-C005"],
        enunciado="Avalie as asserções, que integram conteúdos dos módulos de Estados Unidos e de Política Externa Brasileira. **I.** A reativação de um princípio de exclusão de potências extra-hemisféricas eleva o custo, para o Brasil, de sustentar uma política externa de autonomia pela diversificação. **PORQUE** **II.** O imperativo estratégico norte-americano inclui a hegemonia sobre a América do Sul e o Caribe como degrau necessário à sua projeção global, de modo que a presença de um competidor sistêmico na região é tratada como problema de segurança, e não apenas de comércio. Assinale a alternativa CORRETA.",
        alternativas=[
            "As asserções I e II são verdadeiras, e a II é uma justificativa da I.",
            "As asserções I e II são verdadeiras, mas a II não é uma justificativa da I.",
            "A asserção I é verdadeira, e a II é falsa.",
            "A asserção I é falsa, e a II é verdadeira.",
            "As asserções I e II são falsas.",
        ],
        correta=0,
        comentario="As duas são verdadeiras e há nexo causal direto. A asserção II reproduz o segundo degrau do imperativo estratégico americano, tal como o slide o apresenta: América do Norte, depois América do Sul e Caribe, depois os oceanos das duas costas, e por fim evitar hegemon na Eurásia. Se a região é tratada como pré-requisito de segurança, a presença de competidor sistêmico deixa de ser questão comercial e passa a ser questão de segurança — e é isso que encarece, para o Brasil, diversificar parceiros. A asserção I decorre da II: a autonomia pela diversificação supõe liberdade de escolher parceiros a custo baixo; quando o custo sobe, o dilema interesses × meios se aperta. Note que a diferença em relação à pegadinha clássica é que aqui NÃO se afirma explicação “completa”: afirma-se justificativa, e a justificativa existe.",
        distratores=[
            "Correta. Há nexo causal: o tratamento da região como problema de segurança encarece a diversificação.",
            "Errada. O nexo existe e é direto.",
            "Errada. A asserção II é a formulação do próprio slide do imperativo americano.",
            "Errada. A asserção I decorre logicamente da II.",
            "Errada. Ambas são verdadeiras.",
        ],
        fonte="AULA 15.pdf, slide “EUA - Imperativo Estratégico”; AULA 12.pdf, slides “PEB - Governos pós-1985 — Lula” e “PEB - Dilemas futuros”; HAESBAERT & SANTA BÁRBARA (2026), considerações finais.",
        competencia="Integrar dois módulos em julgamento de asserção e razão.",
        erro="Negar o nexo por tratar a presença de competidor na região como questão apenas comercial.",
        tempo=5,
        extra_assinatura=["integração entre módulos 01 e 04"]),

    obj(S, "N3", 6, topico=T,
        conceitos=["REL-T2-M05-C010", "REL-T2-M05-C003"],
        enunciado="Aponte a alternativa INCORRETA sobre a questão de Taiwan.",
        alternativas=[
            "O governo nacionalista de Chiang Kai-shek refugiou-se na ilha em 1949, mantendo a denominação de República da China, enquanto o Partido Comunista Chinês proclamou a República Popular da China no continente.",
            "A República Popular da China passou a ocupar o assento chinês no Conselho de Segurança da ONU em 1971, no contexto da aproximação com os Estados Unidos e do isolamento diplomático do governo de Taipei.",
            "A questão de Taiwan articula-se diretamente ao primeiro imperativo estratégico chinês, que é manter a integridade territorial.",
            "Por não ser membro pleno da ONU, Taiwan está impedida de participar de qualquer organização internacional, o que a mantém em isolamento econômico e institucional completo.",
            "A liderança global da ilha na produção de semicondutores constitui, ao mesmo tempo, vulnerabilidade e fator de proteção, no que se descreve como escudo de silício.",
        ],
        correta=3,
        comentario="A alternativa incorreta confunde ausência de membresia plena na ONU com isolamento completo. Taiwan ingressou na Organização Mundial do Comércio em 2002, sob a denominação “Território Aduaneiro Separado de Taiwan, Penghu, Kinmen e Matsu”, e participa da Cooperação Econômica Ásia-Pacífico como economia-membro, ambas sob o nome Chinese Taipei. É o que se chama participação seletiva e funcional: a ilha atua em fóruns internacionais sob termos específicos. A admissão como membro pleno da ONU, sim, enfrenta obstáculo estrutural, porque exige recomendação do Conselho de Segurança, em que a República Popular da China tem poder de veto.",
        distratores=[
            "Correta e verdadeira. É a descrição do corpus.",
            "Correta e verdadeira. A entrada em 1971 está registrada no corpus.",
            "Correta e verdadeira. Integridade territorial é o primeiro imperativo chinês.",
            "INCORRETA — resposta da questão. Taiwan participa da OMC e da APEC como Chinese Taipei.",
            "Correta e verdadeira. É a definição de escudo de silício.",
        ],
        fonte="IDEG, “Taiwan e as Nações Unidas”; AULA 16.pdf, slide “China recente”; REL - T2.pdf, entrada da RPC no CSNU em 1971.",
        competencia="Distinguir ausência de membresia plena de isolamento institucional.",
        erro="Concluir isolamento completo a partir da não admissão como membro pleno da ONU.",
        tempo=4),

    obj(S, "N3", 7, topico=T,
        conceitos=["REL-T2-M06-C009", "REL-T2-M06-C003", "REL-T2-M06-C007"],
        enunciado="Aponte a alternativa que NÃO contribui para explicar por que a fragmentação da União Soviética em 1991 é lida em Moscou como perda de segurança, e não apenas de prestígio.",
        alternativas=[
            "Na URSS, as repúblicas bálticas e as do sul funcionavam como Estados tampão do núcleo russo, de modo que um invasor teria de atravessá-las antes de alcançar a Rússia.",
            "A planície que se estende da Alemanha, passa pela Polônia e chega à Rússia não oferece acidente geográfico que barre o avanço de tropas terrestres, o que torna a profundidade territorial substituta de fronteira defensável.",
            "A perda dos satélites soviéticos implicou também perda de infraestrutura portuária e, com ela, de acesso a rotas de comércio.",
            "Diversos países do antigo Pacto de Varsóvia aderiram posteriormente à aliança ocidental, reduzindo a camada protetora a oeste do centro Europa-Urais.",
            "A União Soviética foi dissolvida por decisão de uma guerra civil devastadora que levou à independência de todas as repúblicas que dela faziam parte.",
        ],
        correta=4,
        comentario="A alternativa que não contribui é também factualmente insustentável: a dissolução da União Soviética em 1991 não resultou de guerra civil devastadora. Essa formulação é o tipo de alternativa longa e parcialmente verossímil que o corpus emprega — o erro está enxertado no meio de uma frase de aparência técnica. As demais quatro contribuem, e juntas formam o argumento completo: a URSS organizava a defesa em camadas; a planície não oferece barreira; a perda incluiu portos e rotas; e a camada protetora diminuiu ainda mais com as adesões posteriores. Nada disso justifica ações subsequentes — explica a percepção, que é o que o curso trata como problema analítico.",
        distratores=[
            "Contribui. Descreve a lógica de camadas da URSS.",
            "Contribui. É o condicionante geográfico que torna a camada necessária.",
            "Contribui. Acrescenta a dimensão marítima e comercial da perda.",
            "Contribui. Descreve a redução posterior da camada protetora.",
            "NÃO contribui — resposta da questão. A dissolução não se deu por guerra civil devastadora.",
        ],
        fonte="AULA 17.pdf, slides “União Soviética”, “Pós-Guerra Fria (2000)”, “OTAN em 2014”, “OTAN em 2024” e “‘Paranoia geopolítica’?”; REL - T2.pdf, seções sobre a URSS e o pós-Guerra Fria; ZOLOTOVA (GPF, 2022) (perda de infraestrutura portuária).",
        competencia="Reconhecer alternativa longa com erro factual enxertado em comando do tipo “NÃO contribui”.",
        erro="Aceitar alternativa de aparência técnica sem verificar o fato central que ela afirma.",
        tempo=4),

    obj(S, "N4", 8, topico=T,
        conceitos=["REL-T2-M05-C012", "REL-T2-M04-C011", "REL-T2-M99-C004"],
        enunciado="Integrando os módulos de China e de Estados Unidos: se um ator investe em mísseis balísticos de longo alcance, submarinos em posições selecionadas, mísseis antinavio e interferência eletrônica ao longo de uma cadeia de ilhas, e o ator adversário responde alterando a composição da frota para menor proporção de navios grandes, maior proporção de pequenos e um terceiro elemento de grandes veículos não tripulados, qual é a leitura correta da interação?",
        alternativas=[
            "Ambos os atores adotaram a mesma estratégia, uma vez que os dois ampliaram o número de plataformas.",
            "O primeiro ator busca negação regional — manter o adversário fora de uma área definida e dificultar sua ação caso entre — e o segundo responde por dispersão, reduzindo o valor de cada alvo e multiplicando os problemas que o primeiro precisa resolver; trata-se de uma interação estratégica em que a medida de um explica a contramedida do outro.",
            "O segundo ator abandonou a projeção de poder global, porque plataformas menores têm alcance reduzido.",
            "O primeiro ator busca projeção de poder global, e o segundo, defesa costeira.",
            "A interação não pode ser analisada, porque as duas decisões pertencem a domínios distintos: uma é de armamento e a outra é de construção naval.",
        ],
        correta=1,
        comentario="É a questão de integração mais direta entre os dois módulos. O antiacesso e a negação de área constituem estratégia de **negação regional**: manter o adversário fora, com alcance longo, e dificultar sua ação depois que entrou, com alcance curto. A resposta do adversário é doutrinária antes de ser material: se concentrar capacidade em poucas plataformas de alto valor oferece alvos rentáveis, dispersá-la em mais plataformas, menores e em parte não tripuladas, reduz a perda por vetor atingido e obriga o oponente a resolver muitos problemas ao mesmo tempo. Note que nenhum dos dois atores abandonou seu objetivo: um continua querendo negar a área, o outro continua querendo operar nela. Mudaram os meios, não os fins — e é exatamente isso que a matriz comparativa registra ao classificar o instrumento chinês como negação e o americano como projeção.",
        distratores=[
            "Errada. Ampliar plataformas não iguala estratégias: as funções são opostas, negação e projeção.",
            "Correta. Negação regional de um lado, dispersão como contramedida do outro, com fins inalterados.",
            "Errada. A arquitetura mantém porta-aviões, submarinos e combatentes de superfície; o objetivo segue sendo operar longe.",
            "Errada. Inverte os papéis dos dois atores.",
            "Errada. A análise da interação estratégica é precisamente o objeto da disciplina.",
        ],
        fonte="AULA 16.pdf, slide “Mar do Sul da China - A2/AD”; AULA 15.pdf, slides “A2/AD - Anti-access/Area Denial” e “Previsão sobre a dimensão da Marinha dos EUA”; REL - T2.pdf, definições de A2 e AD; CRS RL32665, sumário executivo.",
        competencia="Ler medida e contramedida como interação estratégica entre dois atores.",
        erro="Igualar as duas estratégias por ambas envolverem aumento de plataformas.",
        tempo=5,
        extra_assinatura=["integração entre módulos 04 e 05"]),

    obj(S, "N3", 9, topico=T,
        conceitos=["REL-T2-M03-C011", "REL-T2-M03-C020", "REL-T2-M03-C005"],
        enunciado="A projeção de exaustão de recursos minerais críticos ao longo das próximas décadas é apresentada como fator de pressão sobre o ambiente marítimo. Qual encadeamento liga corretamente esse fator ao Conceito Estratégico Marítimo-Naval do PEM 2040?",
        alternativas=[
            "Escassez de minerais → redução do comércio marítimo → menor necessidade de controle de área marítima → prevalência do Combate no Mar sobre o Combate pelo Mar.",
            "Escassez de minerais → valorização do leito e do subsolo marinhos → intensificação das disputas por áreas marítimas e por reivindicação de plataforma continental → deslocamento do problema do plano das batalhas navais para o plano da soberania e do controle multidomínio, isto é, do Combate no Mar para o Combate pelo Mar.",
            "Escassez de minerais → aumento da pesca ilegal → prioridade absoluta à função de pesquisa do Poder Marítimo → irrelevância da defesa marítima.",
            "Escassez de minerais → substituição integral por materiais sintéticos → esvaziamento da Economia Azul → redução das ameaças listadas no PEM 2040.",
            "Escassez de minerais → concentração de reservas em países desenvolvidos → transferência das disputas para o plano exclusivamente jurídico, sem componente estratégico.",
        ],
        correta=1,
        comentario="O encadeamento correto é o que o corpus sustenta em três pontos. A Política Naval registra que a intensificação de disputas por áreas marítimas, água doce, alimentos, recursos minerais, biodiversidade e energia respalda a necessidade de fortalecer o Poder Naval. A oceanopolítica registra que a teoria do poder marítimo pode ser revisitada porque o conflito se desloca das rotas — que continuam importantíssimas — para os recursos do solo e do subsolo marinhos, e que ampliar a plataforma continental além das 200 milhas reduz a Área, espaço comum da humanidade, o que é potencialmente gerador de conflito. E o PEM 2040 formaliza o deslocamento conceitual: o Combate pelo Mar tem foco estratégico e geopolítico, ligado à soberania e ao controle por meio dos espaços aéreo, cibernético, espacial, marítimo e subaquático — e não à batalha naval em um espaço delimitado.",
        distratores=[
            "Errada. Inverte a direção: escassez aumenta, não reduz, a disputa por espaço marítimo.",
            "Correta. Valorização do leito e do subsolo, disputa por plataforma e deslocamento conceitual.",
            "Errada. Prioridade absoluta a uma função e irrelevância de outra não se sustentam no corpus.",
            "Errada. Nada no corpus sustenta substituição integral por sintéticos.",
            "Errada. A disputa jurídica sobre plataforma continental tem componente estratégico explícito.",
        ],
        fonte="AULA 14.pdf, slides “Política Naval” (intensificação de disputas) e “PEM 2040 - Conceito Estratégico Marítimo-Naval”; MORE, seção 3 (deslocamento do plano terrestre para o oceânico e a redução da Área); P1 REL 2024, questão 15 (mesmo objeto conceitual, com estímulo e comando distintos).",
        competencia="Encadear pressão material, disputa jurídica e deslocamento conceitual do combate no mar para o combate pelo mar.",
        erro="Ler a escassez de recursos como fator de redução, e não de intensificação, da disputa marítima.",
        tempo=4),

    obj(S, "N3", 10, topico=T,
        conceitos=["REL-T2-M00-C005", "REL-T2-M00-C006", "REL-T2-M00-C008", "REL-T2-M04-C007"],
        enunciado="Um Estado hegemônico cria, no pós-guerra, um conjunto de instituições de comércio, finanças e segurança coletiva, financia a reconstrução de economias aliadas com juros baixos e assistência técnica, e promove regimes políticos semelhantes ao seu. Qual análise é mais rigorosa?",
        alternativas=[
            "A ação é inequivocamente liberal, porque instituições multilaterais, livre comércio e promoção da democracia são as características da lente liberal.",
            "A ação é inequivocamente realista, porque toda criação institucional por hegemon é instrumento de poder.",
            "O caso admite as duas leituras, e a análise rigorosa identifica que a forma é liberal — instituições que reduzem incerteza e ampliam ganhos mútuos — enquanto o efeito inclui a codificação de regras favoráveis a quem as escreveu e a produção de alinhamento; a escolha entre as leituras depende de o enunciado destacar o funcionamento das regras ou a sua distribuição de vantagem.",
            "O caso é construtivista, porque a promoção de regimes semelhantes revela a difusão de uma identidade e de valores.",
            "O caso não admite análise teórica, porque instituições de segurança coletiva e de comércio pertencem a campos distintos.",
        ],
        correta=2,
        comentario="Esta é a clínica institucional do curso aplicada ao caso histórico mais importante. As instituições de Bretton Woods e do sistema comercial do pós-guerra são o exemplo canônico de arranjo que sustenta as duas leituras: elas de fato reduziram incerteza e ampliaram ganhos — leitura liberal —, e de fato codificaram regras vantajosas para quem as escreveu e produziram alinhamento — leitura realista. O erro que a questão pune é o automatismo nas duas direções: nem “tem instituição, logo é liberal”, nem “foi criado por hegemon, logo é instrumento”. A regra do curso é que a classificação segue o aspecto destacado pelo enunciado, e a resposta de nível superior é a que diz QUAL aspecto decidiria. Há ainda uma leitura construtivista defensável na difusão de valores, mas ela não cobre o conjunto do caso.",
        distratores=[
            "Errada. Automatismo por palavra-chave: presença de instituição é pista, não prova.",
            "Errada. Generalização inválida, e o próprio slide trata o liberalismo como pedra de toque da política externa americana.",
            "Correta. Identifica a ambiguidade e o critério de arbitragem.",
            "Errada. A difusão de valores é um aspecto do caso, e não o que explica o conjunto de comércio, finanças e segurança.",
            "Errada. Analisar arranjos que combinam campos é justamente o objeto da disciplina.",
        ],
        fonte="AULA 15.pdf, slides “Hegemonia Mundial”, “2. Liberais” e “1. Realismo”; REL - T2.pdf, seção sobre o liberalismo como forma de política externa (GATT 1947, ONU, FMI, Banco Mundial e BIRD).",
        competencia="Arbitrar entre leituras concorrentes de um arranjo institucional histórico, declarando o critério.",
        erro="Classificar por automatismo, seja por presença de instituição, seja por identidade do criador.",
        tempo=5),

    obj(S, "N2", 11, topico=T,
        conceitos=["REL-T2-M02-C010", "REL-T2-M03-C014", "REL-T2-M03-C012"],
        enunciado="Sobre o setor nuclear e o Programa Nuclear da Marinha, assinale a alternativa CORRETA.",
        alternativas=[
            "O setor nuclear é responsabilidade do Exército, ao qual também cabe o setor cibernético, enquanto a Marinha responde pelo setor espacial.",
            "O setor nuclear é responsabilidade da Marinha, e o Programa Nuclear da Marinha tem duas frentes: o protótipo de reator do submarino de propulsão nuclear e o domínio da tecnologia do ciclo do combustível nuclear.",
            "O setor nuclear é responsabilidade da Marinha e o Programa Nuclear da Marinha destina-se ao desenvolvimento de armamento nuclear embarcado, o que a END autoriza expressamente.",
            "Os três setores estratégicos — nuclear, cibernético e espacial — são de responsabilidade conjunta das três Forças, sem atribuição individualizada.",
            "O Programa Nuclear da Marinha é um dos programas de Construção do Núcleo do Poder Naval, ao lado do PROSUB, do PCT, do PROHIDRO e do PROADSUMUS.",
        ],
        correta=1,
        comentario="A atribuição é individualizada: Marinha responde pelo setor **nuclear**, Exército pelo **cibernético** e Força Aérea pelo **espacial**. O Programa Nuclear da Marinha tem duas frentes declaradas — protótipo de reator do submarino de propulsão nuclear e domínio do ciclo do combustível —, nenhuma delas de armamento. Note a última alternativa, que erra por um detalhe de hierarquia: o PNM é programa estratégico **autônomo**, listado ao lado de Pessoal, Construção do Núcleo do Poder Naval, OCOP, SisGAAz, Ampliação da Capacidade de Apoio Logístico e Mentalidade Marítima; quem reúne PROSUB, PCT, PROHIDRO e PROADSUMUS é a Construção do Núcleo do Poder Naval.",
        distratores=[
            "Errada. Troca as três atribuições.",
            "Correta. Setor nuclear na Marinha e as duas frentes do PNM.",
            "Errada. O programa é de propulsão e de ciclo do combustível; não há autorização para armamento.",
            "Errada. A atribuição é individualizada por Força.",
            "Errada. O PNM é programa estratégico autônomo; os quatro citados integram a Construção do Núcleo do Poder Naval.",
        ],
        fonte="AULA 13.pdf, slides “SETORES ESTRATÉGICOS DA DEFESA NACIONAL” e “Responsabilidade pelos Setores Estratégicos”; AULA 14.pdf, slides “Programas Estratégicos” e “Construção do Núcleo do Poder Naval”; REL - T2.pdf, as duas frentes do PNM.",
        competencia="Atribuir corretamente setores estratégicos e situar o PNM na hierarquia dos programas.",
        erro="Atribuir armamento nuclear ao PNM ou subordiná-lo à Construção do Núcleo do Poder Naval.",
        tempo=3),

    obj(S, "N4", 12, topico=T,
        conceitos=["REL-T2-M04-C013", "REL-T2-M05-C016", "REL-T2-M99-C007"],
        enunciado="Considere a hipótese: a economia chinesa desacelera de forma prolongada e, simultaneamente, o arco de alianças construído pelos Estados Unidos na Ásia permanece robusto. Qual conjunto de consequências é mais consistente com o cenário correspondente, e qual é a advertência analítica pertinente?",
        alternativas=[
            "A China estabeleceria uma ordem sinocêntrica com países recalcitrantes, e a advertência é que Japão, Índia e Rússia resistiriam às imposições.",
            "Haveria dificuldade chinesa em sustentar projetos de expansão e tensões internas, com perda de capacidade de se impor na região; aliados asiáticos deixariam de ver necessidade da presença ostensiva americana e poderiam desenvolver políticas nacionalistas contrárias aos interesses dos Estados Unidos. A advertência é contraintuitiva: arco forte somado a China fraca não é necessariamente favorável a Washington, e o precedente invocado em aula é o do Afeganistão dos anos 1980, em que combatentes financiados pelos Estados Unidos, após a derrota soviética, fundaram a Al-Qaeda e atacaram os próprios Estados Unidos.",
            "As potências asiáticas se engalfinhariam pela hegemonia regional em um vácuo de poder, e a advertência é que vácuos de poder são estáveis por definição.",
            "Configurar-se-ia um equilíbrio semelhante ao Concerto Europeu do século XIX, e a advertência é que esse equilíbrio é estável no longo prazo.",
            "Nada mudaria em relação ao presente, porque a desaceleração econômica não afeta a capacidade militar já construída.",
        ],
        correta=1,
        comentario="O cenário é **Cria Cuervos** e é o mais contraintuitivo dos quatro, razão pela qual é o mais cobrável. A combinação de China enfraquecida com arco robusto produz um resultado adverso a quem construiu o arco: aliados que não percebem mais a ameaça deixam de valorizar a proteção e desenvolvem agenda própria. A analogia registrada em aula é precisa e vale como mecanismo, não como ornamento: no lugar do arco anti-China, os combatentes muçulmanos no Afeganistão; no lugar da China, a União Soviética em declínio econômico; resultado, derrota soviética e, depois, o ataque de 11 de setembro por forças antes financiadas pelos Estados Unidos. As demais alternativas descrevem outros quadrantes — Império do Meio II, Casa sem Dono e Concerto Asiático — e duas delas invertem advertências explícitas do corpus: em aula se afirma que NÃO existe vácuo de poder, porque alguém buscará a hegemonia, e que o Concerto Asiático é equilíbrio INSTÁVEL, cujo desdobramento pode ser conflito.",
        distratores=[
            "Errada. Descreve Império do Meio II, que pressupõe China forte e arco frágil.",
            "Correta. Descreve Cria Cuervos, com a advertência contraintuitiva e o precedente afegão.",
            "Errada. Descreve Casa sem Dono e inverte a advertência: o corpus nega a existência de vácuo de poder.",
            "Errada. Descreve Concerto Asiático e inverte a advertência: o corpus o qualifica como equilíbrio instável.",
            "Errada. A desaceleração afeta sustentação de projetos e coesão interna, que são variáveis do cenário.",
        ],
        fonte="AULA 15.pdf, slides “Cenários”, “Cenários para o Leste e Sudeste Asiáticos” (Cria Cuervos, Casa sem dono, Concerto Asiático, Império do Meio II); REL - T2.pdf, analogia do Afeganistão e a negação do vácuo de poder.",
        competencia="Identificar o cenário correspondente a uma combinação de forças-motrizes e extrair a advertência analítica.",
        erro="Supor que arco de alianças forte é sempre favorável aos Estados Unidos.",
        tempo=5,
        extra_assinatura=["integração entre módulos 04 e 05"]),
]

DISCURSIVAS = [
    dis(S, "N3", 13, topico=T,
        conceitos=["REL-T2-M02-C014", "REL-T2-M03-C016", "REL-T2-M03-C019", "REL-T2-M02-C009"],
        enunciado="Parta do SisGAAz e remonte a cadeia até um Objetivo Nacional de Defesa, passando pela capacidade construída e pela tarefa básica do Poder Naval envolvida. Explique o nexo em cada degrau.",
        gabarito=(
            "**Tese.** O SisGAAz é a ação; ele constrói gestão da informação e pronta-resposta; habilita o controle de área marítima; e serve ao objetivo de garantir a soberania, o patrimônio nacional e a integridade territorial.\n\n"
            "**Degrau 1 — ação.** O Sistema de Gerenciamento da Amazônia Azul tem por objetivo monitorar e controlar, de forma integrada, as Águas Jurisdicionais Brasileiras e as áreas internacionais de responsabilidade para operações de Socorro e Salvamento, a fim de agilizar o ciclo decisório e assegurar capacidade de pronta resposta a qualquer ameaça, emergência, agressão ou ilegalidade. É um dos sete Programas Estratégicos da Marinha e integra AIS, LRIT, VTS, radar, satélite e demais sistemas.\n\n"
            "**Degrau 2 — capacidades.** Entre as nove Capacidades Nacionais de Defesa, o SisGAAz constrói diretamente **gestão da informação** e **pronta-resposta**, e contribui para **coordenação e controle**. O nexo está no objetivo declarado do próprio sistema: agilizar o ciclo decisório é, por definição, gestão da informação convertida em tempo de decisão.\n\n"
            "**Degrau 3 — tarefa básica.** A tarefa habilitada é **controle de área marítima**. O nexo é de precedência: não se controla o que não se conhece. A END determina que o monitoramento do mar, inclusive a partir do espaço, integre o repertório de práticas e capacitações operacionais — e é essa determinação que o SisGAAz materializa. Sem consciência situacional, a jurisdição sobre a Amazônia Azul é apenas nominal.\n\n"
            "**Degrau 4 — objetivo.** O objetivo servido é garantir a soberania, o patrimônio nacional e a integridade territorial. O nexo: as AJB compreendem as águas interiores e os espaços marítimos em que o Brasil exerce jurisdição, em algum grau, inclusive as águas sobrejacentes à plataforma continental estendida onde ela ocorrer; exercer jurisdição sem capacidade de detectar, identificar e responder é abdicar de soberania na prática. Pode-se acrescentar o objetivo de salvaguardar pessoas, bens, recursos e interesses nacionais, dado o componente de socorro e salvamento.\n\n"
            "**Nuance obrigatória.** O alcance do sistema é MAIOR que a Amazônia Azul: ele cobre também áreas internacionais de responsabilidade SAR, que estão fora das AJB. Isso significa que uma parte da sua função não é de jurisdição, e sim de responsabilidade internacional assumida — o que liga o programa ao objetivo de contribuir para a estabilidade regional e para a paz e a segurança internacionais, e ao apoio à política externa previsto no PESD.\n\n"
            "**Conclusão.** A cadeia se sustenta porque cada degrau é condição do seguinte: sem sistema não há informação, sem informação não há decisão em tempo útil, sem decisão não há controle, e sem controle a soberania declarada não se exerce.\n\n"
            "**Insuficiente:** dizer que o SisGAAz protege a Amazônia Azul e garante a soberania — salta dois degraus. **Satisfatória:** percorre os quatro degraus. **Nível MB:** percorre os quatro degraus explicando o nexo de cada um e registra a nuance do alcance SAR."
        ),
        criterios=[
            "Descreve o SisGAAz com seu objetivo declarado (0,15)",
            "Nomeia ao menos duas Capacidades Nacionais de Defesa construídas (0,2)",
            "Nomeia a tarefa básica do Poder Naval e explica o nexo de precedência (0,25)",
            "Nomeia o Objetivo Nacional de Defesa e explica o nexo com a definição de AJB (0,25)",
            "Registra a nuance do alcance para áreas SAR internacionais (0,15)",
            "Não pontua: saltar degraus; confundir capacidade com tarefa básica",
        ],
        fonte="AULA 14.pdf, slides “SisGAAz” e “Programas Estratégicos”; AULA 13.pdf, slides “Capacidades Nacionais de Defesa (CND)”, “Poder Naval (END)” e “Objetivos Nacionais de Defesa”.",
        competencia="Percorrer a cadeia ação-capacidade-tarefa-objetivo explicando o nexo de cada degrau.",
        erro="Saltar da ação ao objetivo sem nomear capacidade e tarefa.",
        tempo=12),

    dis(S, "N4", 14, topico=T,
        conceitos=["REL-T2-M99-C001", "REL-T2-M99-C002", "REL-T2-M99-C003", "REL-T2-M99-C007"],
        enunciado="Compare Brasil, Estados Unidos, China e Rússia em objetivos estratégicos, condicionantes geográficos e vulnerabilidades. Conclua identificando a lógica teórica que melhor explica cada um e declarando pelo menos dois limites da comparação.",
        gabarito=(
            "**Tese.** Os quatro atores diferem menos em ambição e mais na NATUREZA do problema que precisam resolver — e essa natureza é dada, em primeiro lugar, pela geografia.\n\n"
            "**Objetivos.** Brasil: soberania, integridade territorial, autonomia tecnológica e produtiva, coesão nacional, salvaguarda de interesses no exterior, envolvimento da sociedade, estabilidade regional e projeção no concerto das Nações. Estados Unidos: hegemonia na América do Norte; depois América do Sul e Caribe; domínio dos oceanos das duas costas como instrumento de projeção e de livre comércio; e evitar o surgimento de potência hegemônica na Eurásia. China: manter a integridade territorial; evitar desigualdades significativas internas; manter abertura ao exterior sem permitir desagregação. Rússia: manter o centro Europa-Urais com áreas tampão; garantir o Cazaquistão na área de influência; tentar o acesso aos mares.\n\n"
            "**Condicionantes geográficos.** Brasil: cerca de 8.500 km de litoral, com 80% da população e 90% do PIB nele concentrados, bacias internacionais e nenhum rival estatal de peso comparável no entorno. Estados Unidos: bioceanidade, planícies centrais com rios navegáveis interligados por canais e eclusas, vizinhos de poder muito inferior. China: isoieta de 300 mm separando litoral rico de interior pobre, zonas tampão de aridez e altitude, litoral fechado por cadeias de ilhas. Rússia: planície aberta da Alemanha à Rússia, centro Europa-Urais, saídas marítimas congeladas ou dependentes de estreitos de terceiros.\n\n"
            "**Vulnerabilidades.** Brasil: dependência do mar para mais de 95% do comércio exterior, somada a baixa prontidão, baixo investimento e cultura de defesa pouco consolidada — vulnerabilidade sobretudo interna e institucional. Estados Unidos: declínio relativo de participação econômica e dependência do arco de alianças, além do desafio do antiacesso adversário. China: Estreito de Málaca, perda da autossuficiência em alimento e petróleo, demografia, custos trabalhistas crescentes e desigualdade litoral-interior. Rússia: demografia em retração, dependência de hidrocarbonetos, frota e indústria naval defasadas e perda dos tampões.\n\n"
            "**Lógica teórica predominante.** Rússia: realista, e de forma quase pura — segurança do centro, profundidade territorial, equilíbrio de poder. China: realista no imperativo de integridade e no A2/AD, mas com componente liberal significativo, porque depende de abertura e de fluxos, e com camada construtivista relevante, pela memória das humilhações e pelo Tianxia como ordem hierárquica legítima. Estados Unidos: variável conforme o aspecto — liberal na arquitetura institucional do pós-guerra, realista na Doutrina Monroe e em sua releitura contemporânea, construtivista no Destino Manifesto e no American way of life. Brasil: predominantemente liberal-institucional, pelos princípios do art. 4º, pela reivindicação de assento no Conselho de Segurança e pela aposta em integração regional, com componente realista no esforço de dissuasão marítima e de autonomia tecnológica.\n\n"
            "**Limites da comparação.** Primeiro, **escala**: os quatro não são atores de porte comparável, e comparar serve para isolar variáveis, não para ranquear. Segundo, **assimetria das fontes**: o Brasil é analisado por documentos oficiais próprios — PND, END, PESD, Política Naval, PEM 2040 —, enquanto os outros três são analisados por slides de aula e por leituras complementares, algumas com posição declarada; a base documental não é equivalente. Terceiro, **posição no sistema**: um ator que sustenta uma ordem e um ator que quer revisá-la não enfrentam o mesmo problema, o que torna certas categorias intransferíveis. Quarto, **lente não é atributo fixo de país**: a mesma potência pede lentes distintas conforme o aspecto destacado, e atribuir uma lente permanente a um ator é erro de método.\n\n"
            "**Conclusão.** A comparação mostra que três dos quatro imperativos são de preservação ou de recuperação, e só um — o norte-americano — tem objeto fora do próprio hemisfério. É essa assimetria, e não a diferença de capacidade, que organiza a competição sistêmica contemporânea: a China precisa de fluxo, a Rússia precisa de distância, os Estados Unidos precisam de ausência de rival continental e o Brasil precisa de capacidade proporcional ao que já possui.\n\n"
            "**Insuficiente:** descrever os quatro países em sequência, sem critério de comparação. **Satisfatória:** compara nas três linhas pedidas. **Nível MB:** compara nas três linhas, atribui lente por aspecto e não por país, e declara pelo menos dois limites com justificativa."
        ),
        criterios=[
            "Compara objetivos estratégicos dos quatro atores com formulação fiel ao corpus (0,2)",
            "Compara condicionantes geográficos dos quatro atores (0,2)",
            "Compara vulnerabilidades dos quatro atores, com ao menos um dado (0,2)",
            "Atribui lógica teórica por ASPECTO, e não como atributo fixo de país (0,2)",
            "Declara pelo menos dois limites da comparação, com justificativa (0,2)",
            "Não pontua: descrever países em sequência sem critério; atribuir uma lente permanente a cada ator; omitir os limites",
        ],
        fonte="AULA 13.pdf, “Objetivos Nacionais de Defesa”; AULA 14.pdf, “Economia Azul”; AULA 15.pdf, “EUA - Imperativo Estratégico”, “Declínio?” e slides das teorias; AULA 16.pdf, “China - Imperativo Estratégico” e mapas; AULA 17.pdf, “Imperativos Estratégicos” e “Desafios para a Rússia”; T2_2025.pdf, itens 2, 3 e 6.",
        competencia="Produzir a matriz comparativa global com atribuição de lente por aspecto e limites declarados.",
        erro="Descrever os quatro países em sequência em vez de compará-los por critério.",
        tempo=25,
        extra_assinatura=["integração entre os módulos 01 a 06"]),

    dis(S, "N3", 15, topico=T,
        conceitos=["REL-T2-M01-C008", "REL-T2-M01-C014", "REL-T2-M01-C015", "REL-T2-M01-C017"],
        enunciado="Discorra sobre continuidades e descontinuidades da política externa brasileira entre os governos FHC e Lula e indique o posicionamento comum dos dois governos quanto à estruturação do ente de maior poder geopolítico no âmbito da ONU, apresentando os argumentos que o sustentam.",
        gabarito=(
            "**Tese.** Há continuidade no objetivo de ampliar a inserção internacional do Brasil e descontinuidade no método: participação e integração multilateral em FHC, diversificação preferencialmente Sul-Sul em Lula.\n\n"
            "**Descontinuidades.** FHC é caracterizado como **autonomia pela participação e integração**: busca de reinserção mais ativa no sistema econômico internacional e nos organismos internacionais, com abertura da economia; assinatura do TNP e do Regime de Controle de Tecnologia de Mísseis; visão kantiana das relações internacionais nos anos 1990. Lula é caracterizado como **autonomia pela diversificação**: expansão preferencialmente Sul-Sul, abertura de diversas embaixadas, IBAS, Unasul e BRICS, em estratégia **bifronte** entre América Latina e resto do mundo. O método difere: o primeiro busca autonomia participando das regras existentes; o segundo, multiplicando parceiros.\n\n"
            "**Continuidades.** Ambos perseguem maior peso decisório internacional, e ambos operam sobre a mesma base de princípios: os do art. 4º da Constituição, herdeiros de Rio Branco — não-intervenção, autodeterminação, solução pacífica dos conflitos. A CPLP, criada em 1996 sob FHC, e a Unasul, de 2008 sob Lula, são instrumentos distintos do mesmo esforço de densificar o entorno. E nenhum dos dois converteu participação em subordinação: FHC rejeitou a ALCA na Cúpula das Américas em Quebec, em 2001.\n\n"
            "**Posicionamento comum quanto à ONU.** O ente de maior poder geopolítico no âmbito da ONU é o **Conselho de Segurança**. Os dois governos reivindicaram assento permanente para o Brasil e maior representatividade do órgão.\n\n"
            "**Argumentos que sustentam o posicionamento.** (1) O Conselho está centrado nas potências vencedoras da Segunda Guerra Mundial e não reflete a geopolítica do século XXI. (2) Países em desenvolvimento deveriam ocupar assentos permanentes, sob pena de o órgão decidir sobre regiões que não têm voz nele. (3) No caso brasileiro, há credencial específica: trajetória de solução pacífica de litígios desde Rio Branco, princípios constitucionais de não-intervenção e de defesa da paz, e contribuição efetiva em operações internacionais. (4) Há também argumento de coerência interna aos documentos de defesa: um dos Objetivos Nacionais de Defesa é incrementar a projeção do Brasil no concerto das Nações e sua inserção em processos decisórios internacionais — ou seja, a reivindicação não é apenas diplomática, é objetivo de Estado inscrito na política de defesa.\n\n"
            "**Nuance.** Há tensão a registrar: FHC assinou TNP e Regime de Controle de Tecnologia de Mísseis, isto é, aceitou restrições em tecnologias sensíveis, ao mesmo tempo que se reivindicava maior peso decisório. A leitura favorável é que a adesão credencia; a leitura crítica é que ela reduz a margem de barganha. O reconhecimento dessa tensão distingue a resposta de nível superior.\n\n"
            "**Conclusão.** Entre FHC e Lula muda a estratégia de inserção, não o objetivo; e o ponto em que a continuidade é mais visível é justamente o mais estrutural: a reivindicação de reforma do Conselho de Segurança, sustentada em argumento de representatividade e ancorada, no plano interno, em objetivo expresso da política de defesa.\n\n"
            "**Insuficiente:** dizer que FHC se aproximou dos EUA e Lula se afastou — erro corrigido literalmente no corpus. **Satisfatória:** apresenta rótulos corretos e identifica o Conselho de Segurança. **Nível MB:** apresenta rótulos, continuidades e descontinuidades, identifica o Conselho de Segurança, apresenta ao menos três argumentos e registra a tensão do TNP."
        ),
        criterios=[
            "Apresenta os rótulos corretos de FHC e Lula, sem descrevê-los como aproximação/afastamento em relação aos EUA (0,2)",
            "Apresenta pelo menos duas descontinuidades de método com evidência (0,2)",
            "Apresenta pelo menos duas continuidades (0,15)",
            "Identifica o Conselho de Segurança como o ente de maior poder geopolítico da ONU (0,15)",
            "Apresenta pelo menos dois argumentos que sustentam a reivindicação comum (0,2)",
            "Registra a tensão entre adesão a regimes restritivos e reivindicação de peso decisório (0,1)",
            "Não pontua: descrever FHC como aproximação com os EUA; não identificar o Conselho de Segurança",
        ],
        fonte="AULA 12.pdf, slides “PEB - Governos pós-1985” (FHC e Lula) e “Síntese tipológica”; AULA 13.pdf, slide “Objetivos Nacionais de Defesa”; P1 REL 2024, questão 18 e Correção da SOPA da P1 (padrão de correção e o erro literal a evitar).",
        competencia="Comparar dois governos por método e objetivo, e fundamentar a reivindicação comum sobre o CSNU.",
        erro="Descrever FHC como aproximação com os Estados Unidos.",
        tempo=18),

    dis(S, "N4", 16, topico=T,
        conceitos=["REL-T2-M05-C002", "REL-T2-M05-C003", "REL-T2-M05-C013", "REL-T2-M05-C009"],
        enunciado="Explique por que o imperativo estratégico chinês constitui um trilema, e não uma lista de três objetivos independentes. Relacione o trilema a uma vulnerabilidade contemporânea concreta e conclua sobre a sustentabilidade da solução adotada.",
        gabarito=(
            "**Tese.** Os três itens do imperativo chinês são mutuamente condicionados: satisfazer plenamente dois deles tende a comprometer o terceiro. É por isso que constituem um trilema, e não uma lista.\n\n"
            "**Os três itens.** (1) Manter a integridade territorial. (2) Evitar desigualdades significativas dentro do território, para não fomentar desafios ao poder político centralizado. (3) Manter abertura ao exterior para garantir prosperidade econômica, sem permitir a desagregação interna.\n\n"
            "**O mecanismo do trilema.** A abertura ao exterior gera prosperidade, mas a prosperidade se concentra no litoral, porque o comércio marítimo chinês sempre foi maior que o terrestre. A concentração gera desigualdade litoral-interior, que pressiona Beijing a redistribuir; redistribuir exige taxar as elites litorâneas, o que gera tensão política; a resposta histórica é centralizar, retirando autonomia do litoral e fechando o regime; e o fechamento reduz a geração de riqueza, comprometendo o próprio objetivo (3). O corpus registra o ciclo em Ming, em Qing e no governo de Mao, e é explícito quanto ao dilema: não dá para deixar fechado o tempo todo, porque o país empobrece, nem aberto o tempo todo, porque a desagregação e a desigualdade aumentam.\n\n"
            "**Vulnerabilidade contemporânea.** O Estreito de Málaca. A abertura que sustenta a prosperidade depende de fluxos que passam, em sua maior parte, por um único ponto de passagem obrigatória vigiado por marinhas de aliados de uma potência rival. E a vulnerabilidade se agravou por uma mudança estrutural: a China, historicamente autossuficiente, hoje importa alimento e petróleo, e a projeção é de crescimento dessas importações. A perspectiva registrada em aula é de um país que se vê “engaiolado” pela presença de bases americanas em Japão, Coreia do Sul, Filipinas e Taiwan. Ou seja: o item (3) do imperativo é hoje o mais exposto — e é justamente o que financia a satisfação dos itens (1) e (2).\n\n"
            "**Soluções adotadas e sua natureza.** Três instrumentos: corredores terrestres alternativos com apoio de Mianmar e Bangladesh; investimento na possibilidade do Canal de Kra, na Tailândia; e a iniciativa Um Cinturão, Uma Rota, com ramos terrestre e marítimo, financiada majoritariamente com capital chinês. No plano militar, o antiacesso e a negação de área ao longo da Primeira Cadeia de Ilhas buscam afastar quem poderia interditar os fluxos.\n\n"
            "**Sustentabilidade.** Limitada, por três razões. Primeira: os instrumentos substituem a dependência de um estreito vigiado pela dependência da estabilidade e da anuência de países anfitriões — a vulnerabilidade muda de natureza, de geográfica para política, e se dispersa entre mais atores. Segunda: a própria projeção externa gera reação, e a reação é o arco de alianças que fecha o litoral, o que realimenta o problema; a Índia, por exemplo, opõe-se explicitamente, porque o canal aumentaria a influência chinesa em áreas onde ela projeta poder. Terceira: o trilema tem agora um agravante demográfico e de custos — a política do filho único, de 1979 a 2015, reduz a população economicamente ativa e eleva custos previdenciários, enquanto a alta de salários encareceu o custo trabalhista e deslocou empresas para Vietnã, Camboja e Laos, o que pressiona o item (3) por dentro, e não por fora.\n\n"
            "**Conclusão.** A solução chinesa é mitigatória, não resolutiva: ela reduz a exposição a um ponto de estrangulamento sem eliminar a estrutura do trilema, porque não altera o fato de que a prosperidade que sustenta a coesão depende de fluxos que a China não controla — e, no sentido de Mahan, controlar linhas de comunicação marítimas exige capacidade que ela ainda não possui em escala global.\n\n"
            "**Insuficiente:** listar os três itens do imperativo. **Satisfatória:** explica o trilema e cita Málaca. **Nível MB:** explica o mecanismo do trilema, liga a Málaca com a perda de autossuficiência, nomeia os instrumentos e conclui pela sustentabilidade limitada com três razões."
        ),
        criterios=[
            "Enuncia corretamente os três itens do imperativo chinês (0,15)",
            "Explica o mecanismo do trilema, com o ciclo abertura-desigualdade-centralização-fechamento (0,25)",
            "Relaciona a uma vulnerabilidade contemporânea, registrando a perda de autossuficiência (0,2)",
            "Nomeia pelo menos dois instrumentos adotados (0,15)",
            "Conclui sobre a sustentabilidade com pelo menos duas razões (0,25)",
            "Não pontua: listar os três itens como objetivos independentes; concluir sem avaliar sustentabilidade",
        ],
        fonte="AULA 16.pdf, slides “China - Dupla Tensão Histórica”, “China - Imperativo Estratégico”, “Perspectiva Chinesa”, “Mar do Sul da China - A2/AD”, “China recente” e “Investimentos no Exterior e One Belt, One Road”; REL - T2.pdf, seções correspondentes; Geopolitical Futures, “The Third Opium War”.",
        competencia="Demonstrar interdependência entre objetivos estratégicos e avaliar a sustentabilidade da solução.",
        erro="Tratar os três itens do imperativo chinês como objetivos independentes.",
        tempo=20),

    dis(S, "N3", 17, topico=T,
        conceitos=["REL-T2-M00-C003", "REL-T2-M00-C011", "REL-T2-M00-C010", "REL-T2-M04-C010"],
        contexto="Um Estado de porte médio, com litoral extenso e dependência de exportações por via marítima, participa em um mesmo ano de três exercícios navais multinacionais: um com a marinha de uma potência global, um no âmbito de um arranjo regional de países de língua comum e um terceiro com países da costa oposta do oceano que banha seu litoral.",
        enunciado="Analise a participação nesses exercícios pela matriz de cenários, identificando objetivo, instrumento e a capacidade construída, e explique por que a interoperabilidade externa é relevante para um Estado com esse perfil.",
        gabarito=(
            "**Ator e objetivo.** Ator: Estado costeiro de porte médio. Objetivos: assegurar o uso do mar de que sua economia depende; ampliar a densidade do seu entorno estratégico; e sustentar apoio à política externa por meio militar.\n\n"
            "**Condicionantes.** Litoral extenso e dependência de exportação marítima; ausência de rival estatal próximo de peso comparável, o que reduz o incentivo interno a investir em defesa; e restrições de financiamento — fator condicionante do Poder Marítimo expressamente listado.\n\n"
            "**Instrumento.** Exercício conjunto multinacional é instrumento **militar e diplomático simultaneamente**: militar porque produz capacidade; diplomático porque sinaliza alinhamento, constrói confiança e dá densidade a arranjos regionais. Note que os três exercícios servem a propósitos distintos: com a potência global, acesso a padrões, doutrina e tecnologia; no arranjo de língua comum, adensamento do entorno estratégico; com a costa oposta, afirmação do oceano compartilhado como espaço de cooperação — o que, no caso brasileiro, corresponde ao pressuposto da PND de manter o Atlântico Sul como Zona de Paz e Cooperação.\n\n"
            "**Capacidade construída.** Interoperabilidade externa, isto é, a capacidade de integração entre forças de países diferentes — distinta da interoperabilidade interna, que é a integração entre as forças de um mesmo país. Entre as Capacidades Nacionais de Defesa, a participação constrói principalmente **coordenação e controle**, **mobilidade estratégica** e **logística**, e contribui para **gestão da informação**.\n\n"
            "**Por que é relevante para esse perfil.** Quatro razões. (1) Raramente uma batalha será ganha com o emprego de apenas uma força ou, em conflito de maior escala, sem alianças táticas ou estratégicas — de modo que um Estado que não exercita com outros não opera com outros quando precisa. (2) O ambiente é multidomínio: terrestre, marítimo, aéreo, cibernético e espacial, e nenhum Estado de porte médio cobre sozinho todos os domínios. (3) Para um Estado com restrição de financiamento, exercitar é a forma mais barata de adquirir doutrina e padrão: a capacidade se constrói sem aquisição de meios. (4) O exercício é apoio à política externa, objetivo expresso tanto no texto da missão do PESD quanto na perspectiva Sociedade do Mapa Estratégico Setorial e entre os resultados da Política Naval — é diplomacia naval no sentido do Conceito Estratégico Marítimo-Naval do PEM 2040.\n\n"
            "**Lente teórica.** Predomina leitura liberal-institucional se o que se destaca é a construção de confiança e o adensamento de arranjos regionais; predomina leitura realista se o que se destaca é o ganho de capacidade diante de disputa crescente por recursos marítimos. As duas são defensáveis, e a escolha depende do aspecto destacado.\n\n"
            "**Contraponto.** Há custo: exercitar com uma potência global sinaliza alinhamento e pode ser lido por terceiros como escolha de lado, reduzindo a margem de uma política externa de diversificação. Participar dos três, e não de um só, é precisamente a forma de mitigar esse custo.\n\n"
            "**Conclusão.** A participação constrói interoperabilidade externa e serve simultaneamente a objetivo econômico, de defesa e de política externa; para um Estado de porte médio com restrição orçamentária, é o instrumento de melhor relação entre capacidade adquirida e recurso empregado — desde que a distribuição entre parceiros preserve a margem de manobra diplomática.\n\n"
            "**Insuficiente:** dizer que exercícios conjuntos melhoram o treinamento. **Satisfatória:** percorre objetivo, instrumento e capacidade. **Nível MB:** percorre a matriz, distingue interoperabilidade externa de interna, dá quatro razões, escolhe lente e registra o custo."
        ),
        criterios=[
            "Identifica objetivos ligados a economia, entorno e política externa (0,2)",
            "Trata o exercício conjunto como instrumento militar E diplomático, diferenciando os três exercícios (0,2)",
            "Nomeia a interoperabilidade externa e a distingue da interna (0,2)",
            "Nomeia ao menos duas Capacidades Nacionais de Defesa construídas (0,15)",
            "Escolhe a lente teórica e registra o custo diplomático da escolha (0,25)",
            "Não pontua: tratar exercício conjunto como assunto exclusivamente militar; confundir interoperabilidade interna com externa",
        ],
        fonte="SOPA REL T1 2024, questão 5 (distinção entre interoperabilidade interna e externa e âmbito multidomínio — conceito, com enunciado e comando distintos); T2_2025.pdf, item 5 do trabalho (operações de interoperabilidade externa); AULA 13.pdf, “Capacidades Nacionais de Defesa (CND)” e “PESD — Missão”; AULA 14.pdf, “Política Naval” e “PEM 2040 - Conceito Estratégico Marítimo-Naval”.",
        competencia="Aplicar a matriz de cenários a um instrumento de cooperação militar e avaliar seu custo diplomático.",
        erro="Tratar exercício conjunto como assunto apenas militar, sem dimensão diplomática.",
        tempo=16,
        extra_assinatura=["integração entre módulos 00, 02, 03 e 04"]),

    dis(S, "N4", 18, topico=T,
        conceitos=["REL-T2-M00-C009", "REL-T2-M00-C010", "REL-T2-M99-C007", "REL-T2-M04-C015"],
        contexto="Duas leituras circulam sobre um mesmo arranjo internacional recém-criado. A primeira sustenta que se trata de um mecanismo de cooperação mais ágil que as instituições existentes, capaz de produzir resultados onde elas falharam. A segunda sustenta que se trata de instrumento de poder de uma potência, uma vez que a autoridade se concentra em sua presidência, os mandatos dos membros são renováveis a critério dela e a influência acompanha o aporte financeiro.",
        enunciado="Escolha a leitura mais defensável, justifique por evidência, reconheça o que a leitura concorrente explica melhor e enuncie o critério geral que você usou para arbitrar. Sua resposta será avaliada pelo critério, e não pela escolha.",
        gabarito=(
            "**Observação ao corretor.** As duas escolhas pontuam integralmente se sustentadas. O que se avalia é a explicitação do critério de arbitragem, a ancoragem em evidência e o reconhecimento do que a leitura concorrente explica melhor.\n\n"
            "**Tese.** A segunda leitura é mais defensável para explicar o FUNCIONAMENTO do arranjo, e a primeira explica melhor a sua FORMA e a sua justificativa pública.\n\n"
            "**Critério geral de arbitragem — enunciado antes de aplicar.** Uma instituição sustenta leitura liberal-institucional quando a regra que ela cria **restringe também quem a criou** e quando reduz incerteza de forma simétrica para os participantes. Sustenta leitura de instrumento de poder quando a autoridade é assimétrica, quando a permanência dos participantes depende da vontade de um deles e quando a influência é função de recurso, e não de regra.\n\n"
            "**Aplicação ao caso — evidência.** Três elementos do desenho apontam para a segunda leitura: a autoridade emana da presidência, o que significa que a regra não a restringe; os mandatos são renováveis a critério dessa presidência, o que torna a permanência precária e reduz o incentivo à discordância; e a influência acompanha o aporte financeiro, o que substitui igualdade formal por hierarquia material. Nenhum dos três é compatível com a definição de instituição que reduz incerteza simetricamente.\n\n"
            "**O que a leitura concorrente explica melhor.** Três coisas. (1) A FORMA: há órgão, carta, membros, mandatos e orçamento — é institucionalização real, não retórica, e a existência da forma produz efeitos, inclusive de legitimação. (2) A ORIGEM: o arranjo nasce de um ato dentro do sistema existente, e não fora dele. (3) A ADESÃO: Estados aderem voluntariamente, o que indica que percebem ganho — e a lente liberal explica adesão por expectativa de benefício melhor do que a lente realista explicaria por coerção pura. Registre-se ainda que instituições criadas por potências hegemônicas produziram, historicamente, bens públicos reais: a arquitetura do pós-guerra reduziu incerteza comercial e financiou reconstrução, ainda que codificando regras vantajosas para quem as escreveu.\n\n"
            "**Nuance metodológica.** Classificação não é atributo do fato, e sim do aspecto destacado — o mesmo arranjo é liberal na forma e instrumento no funcionamento, e é por isso que perguntas sobre casos como esse não têm resposta única. O erro a evitar é o automatismo nas duas direções: nem “tem instituição, logo é liberal”, nem “foi criado por potência, logo é instrumento”. Deve-se registrar também que as análises disponíveis sobre arranjos recentes frequentemente provêm de fontes com posição declarada, o que obriga a identificá-las como interpretação e a datar a informação.\n\n"
            "**Conclusão.** A leitura de instrumento de poder explica melhor o caso porque o critério de arbitragem — a regra restringe quem a criou? — é respondido negativamente nos três elementos do desenho. A leitura institucional permanece necessária para explicar por que o arranjo existe na forma em que existe e por que outros Estados aderem, e desprezá-la empobreceria a análise.\n\n"
            "**Insuficiente:** escolher uma leitura e repetir os argumentos do enunciado. **Satisfatória:** escolhe, justifica por evidência e menciona a leitura concorrente. **Nível MB:** enuncia o critério ANTES de aplicar, ancora nos três elementos do desenho, diz o que a concorrente explica melhor, registra a nuance de que classificação depende do aspecto e adverte sobre a natureza posicionada das fontes."
        ),
        criterios=[
            "Enuncia o critério geral de arbitragem antes de aplicá-lo ao caso (0,25)",
            "Escolhe uma leitura e a ancora em evidência específica do desenho institucional (0,2)",
            "Reconhece pelo menos duas coisas que a leitura concorrente explica melhor (0,2)",
            "Registra que a classificação depende do aspecto destacado, e não do fato (0,2)",
            "Adverte sobre a natureza posicionada das fontes e a necessidade de datar informação de conjuntura (0,15)",
            "Não pontua: escolher sem critério explícito; tratar o caso como tendo resposta única e óbvia; reproduzir o enunciado",
        ],
        fonte="AULA 15.pdf, slides “1. Realismo”, “2. Liberais”, “3. Construtivismo” e “Hegemonia Mundial”; LOVATT (ECFR, 23/01/2026), desenho institucional do arranjo (fonte com posição declarada); matriz-cobertura.json (clínica de caso ambíguo do Módulo 00).",
        competencia="Arbitrar entre interpretações concorrentes enunciando o critério e reconhecendo o valor da leitura vencida.",
        erro="Escolher uma leitura sem enunciar o critério de arbitragem.",
        tempo=20,
        extra_assinatura=["integração entre módulos 00 e 04"]),
]

SIMULADOS = [
    {
        "id": S,
        "titulo": "Simulado final — T2 de Relações Internacionais",
        "descricao": (
            "Prova completa no formato inferido do corpus: 12 questões objetivas e 6 discursivas, "
            "com maioria de nível N3 e N4 e pelo menos quatro integrações entre módulos. "
            "Gabarito integralmente comentado, com critérios de correção por elementos exigidos."
        ),
        "duracaoMinutos": 180,
        "pontos": 10,
        "itens": len(OBJETIVAS) + len(DISCURSIVAS),
        "blueprint": [
            {"bloco": "Objetivas — arquitetura de defesa e poder marítimo (Q1, Q2, Q4, Q9, Q11)",
             "pontos": 2.0,
             "objetivo": "Verificar listas fechadas, definição de AJB, distinção Poder Marítimo/Poder Naval e a cadeia objetivo-capacidade-ação."},
            {"bloco": "Objetivas — política externa brasileira (Q3)",
             "pontos": 0.4,
             "objetivo": "Verificar a tipologia da autonomia com suas exceções."},
            {"bloco": "Objetivas — EUA, China e Rússia (Q6, Q7, Q10)",
             "pontos": 1.2,
             "objetivo": "Verificar Taiwan, percepção de ameaça russa e arbitragem entre lentes teóricas."},
            {"bloco": "Objetivas — integração entre módulos (Q5, Q8, Q12)",
             "pontos": 1.4,
             "objetivo": "Verificar a capacidade de cruzar módulos em asserção e razão, interação estratégica e cenários."},
            {"bloco": "Discursivas de cadeia e comparação (Q13, Q14)",
             "pontos": 2.0,
             "objetivo": "Verificar o percurso da cadeia de defesa e a matriz comparativa global com limites declarados."},
            {"bloco": "Discursivas de política externa e de trilema (Q15, Q16)",
             "pontos": 1.8,
             "objetivo": "Verificar comparação entre governos e demonstração de interdependência entre objetivos estratégicos."},
            {"bloco": "Discursivas de aplicação e arbitragem (Q17, Q18)",
             "pontos": 1.2,
             "objetivo": "Verificar aplicação da matriz de cenários a caso inédito e arbitragem explícita entre interpretações."},
        ],
        "rubrica": [
            "Correção por ELEMENTOS EXIGIDOS, com crédito parcial, conforme o padrão observado no corpus: a crítica é sempre “faltou mencionar X”.",
            "Discursiva sem nexo causal explícito não atinge o nível satisfatório, ainda que a conclusão esteja correta.",
            "Citar autor, documento ou artigo sem instrumentalizar o conceito não pontua.",
            "Em caso ambíguo, resposta única e sem contraponto não atinge o nível MB.",
            "Exemplo de conjuntura sem o conceito que ele ilumina, ou sem data de corte, não pontua.",
            "Formulações distintas da resposta-modelo pontuam integralmente quando conceitualmente defensáveis e sustentadas por evidência do corpus.",
            "A pontuação por bloco é a do blueprint; a soma é 10,0.",
            "PONTO DE INCERTEZA: não há prova escrita de T2 no corpus autorizado. A duração de 180 minutos e a distribuição entre objetivas e discursivas foram calibradas pelo padrão de P1 e P2 de 2024, em que o discursivo pesa mais que o objetivo. Se a T2 repetir o formato de trabalho em grupo de 2025, use as questões 14, 16 e 17 como ensaio dos itens de maior peso do trabalho.",
        ],
        "questoes": OBJETIVAS + DISCURSIVAS,
    }
]

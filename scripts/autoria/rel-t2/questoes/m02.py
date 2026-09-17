# -*- coding: utf-8 -*-
"""Banco do Módulo 02 — PND, END e PESD."""

from helper import obj, vf, cor, dis

T = "02-pnd-end-e-pesd"

QUESTOES = [
    vf("M02", "N1", 1, topico=T,
       conceitos=["REL-T2-M02-C009"],
       afirmacao="Segundo a END, as tarefas básicas do Poder Naval são cinco: controle de área marítima, negação do uso do mar, projeção de poder sobre terra, contribuição para a dissuasão e monitoramento do mar.",
       correta=False,
       comentario="**Falsa.** As tarefas básicas são **quatro**: controle de área marítima, negação do uso do mar, projeção de poder sobre terra e contribuição para a dissuasão. O monitoramento do mar aparece no slide em frase separada e com outra natureza: “o monitoramento do mar, inclusive a partir do espaço, deverá integrar o repertório de práticas e capacitações operacionais”. É repertório a incorporar, não quinta tarefa básica. Promovê-lo a tarefa é o erro de literalidade mais previsível do módulo.",
       fonte="AULA 13.pdf, slide “Poder Naval (END) — Tarefas básicas”.",
       competencia="Recuperar a lista das tarefas básicas com a distinção entre tarefa e repertório.",
       erro="Contar o monitoramento do mar como quinta tarefa básica."),

    obj("M02", "N2", 2, topico=T,
        conceitos=["REL-T2-M02-C008"],
        enunciado="Sobre o conceito de Águas Jurisdicionais Brasileiras (AJB) tal como enunciado na END, assinale a alternativa CORRETA.",
        alternativas=[
            "Compreendem exclusivamente o mar territorial e a zona contígua, faixas em que o Brasil exerce jurisdição plena.",
            "Compreendem as águas interiores e os espaços marítimos em que o Brasil exerce jurisdição, em algum grau, e abrangem a faixa de 200 milhas marítimas contadas das linhas de base, acrescida das águas sobrejacentes à extensão da plataforma continental além das 200 MN, onde ela ocorrer.",
            "Compreendem as 200 milhas marítimas contadas do litoral, excluídas as águas interiores, que pertencem ao regime jurídico dos rios e lagos.",
            "Compreendem toda a área em que o Brasil exerce soberania plena sobre recursos naturais vivos e não vivos, o que equivale exatamente à Amazônia Azul.",
            "Compreendem apenas os espaços marítimos, já que a expressão “jurisdicionais” exclui por definição as águas interiores.",
        ],
        correta=1,
        comentario="A definição do slide tem três elementos que a alternativa correta preserva e as demais quebram: **(1)** inclui as águas interiores; **(2)** a jurisdição é exercida “em algum grau”, e não plenamente em toda a extensão; **(3)** a faixa é contada das **linhas de base** e se estende além das 200 MN onde houver plataforma continental estendida. A cláusula “onde ela ocorrer” é o que permite discutir feições oceânicas afastadas, como a Elevação do Rio Grande, objeto do Estudo Dirigido do professor.",
        distratores=[
            "Errada. Exclui as águas interiores e a plataforma estendida, e atribui jurisdição plena onde o slide diz “em algum grau”.",
            "Correta. Reproduz os três elementos da definição.",
            "Errada. As águas interiores integram as AJB por definição expressa.",
            "Errada. Confunde jurisdição “em algum grau” com soberania plena, e iguala um conceito jurídico (AJB) a uma designação pública (Amazônia Azul).",
            "Errada. O próprio texto da END começa por “as águas interiores e os espaços marítimos”.",
        ],
        fonte="AULA 13.pdf, slides “Poder Naval (END)” (definição de AJB); Estudo Dirigido (“O conceito de AJB utilizado pela Marinha do Brasil abrange a Elevação do Rio Grande? Por quê?”).",
        competencia="Reproduzir a definição de AJB com precisão literal e reconhecer suas cláusulas condicionais.",
        erro="Igualar AJB a mar territorial ou supor jurisdição plena em toda a extensão.",
        tempo=3),

    cor("M02", "N3", 3, topico=T,
        conceitos=["REL-T2-M02-C006", "REL-T2-M02-C007", "REL-T2-M02-C009", "REL-T2-M02-C010",
                   "REL-T2-M02-C011", "REL-T2-M02-C002"],
        titulo="Correlacione cada enunciado ao documento ou à categoria a que ele pertence",
        chaves=[
            ("A", "Objetivo Nacional de Defesa (PND)"),
            ("B", "Capacidade Nacional de Defesa (END)"),
            ("C", "Tarefa básica do Poder Naval (END)"),
            ("D", "Responsabilidade por setor estratégico"),
            ("E", "Missão ou visão do PESD 2020-2031"),
        ],
        itens=[
            ("Promover a autonomia tecnológica e produtiva na área de defesa.", "A"),
            ("Mobilidade estratégica.", "B"),
            ("Negação do uso do mar.", "C"),
            ("A Força Aérea responde pelo setor espacial.", "D"),
            ("Preparar as Forças Armadas em permanente estado de prontidão, inclusive em apoio à política externa.", "E"),
            ("Incrementar a projeção do Brasil no concerto das Nações e sua inserção em processos decisórios internacionais.", "A"),
            ("Gestão da informação.", "B"),
            ("Contribuição para a dissuasão.", "C"),
        ],
        comentario="A correlação testa exatamente o que o professor embaralha em distratores. Três regras resolvem: **objetivos** dizem O QUE se quer (verbos como garantir, assegurar, promover, preservar, salvaguardar, ampliar, contribuir, incrementar); **capacidades** são substantivos que nomeiam o que a Força precisa saber fazer (proteção, pronta-resposta, dissuasão, coordenação e controle, gestão da informação, logística, mobilidade estratégica, mobilização, desenvolvimento tecnológico de defesa); **tarefas básicas** são as quatro funções operacionais do Poder Naval. Note a pegadinha embutida: “contribuição para a dissuasão” é tarefa básica do Poder Naval, enquanto “dissuasão” isolada é Capacidade Nacional de Defesa — a mesma palavra em dois níveis distintos da cadeia.",
        fonte="AULA 13.pdf, slides “Objetivos Nacionais de Defesa” (dois), “Capacidades Nacionais de Defesa (CND)”, “Poder Naval (END) — Tarefas básicas”, “Responsabilidade pelos Setores Estratégicos” e “PESD 2020-2031 — Missão”.",
        competencia="Distinguir o nível documental a que pertence cada enunciado da arquitetura de defesa.",
        erro="Confundir capacidade (dissuasão) com tarefa básica (contribuição para a dissuasão).",
        tempo=7),

    obj("M02", "N3", 4, topico=T,
        conceitos=["REL-T2-M02-C014", "REL-T2-M02-C007", "REL-T2-M02-C010"],
        enunciado="Percorrendo a cadeia objetivo → estratégia → capacidade → ação no sentido inverso, qual encadeamento está CORRETO?",
        alternativas=[
            "PROSUB → tarefa básica de projeção de poder sobre terra → diretriz de emprego do Poder Naval da END → objetivo de preservar a coesão e a unidade nacionais.",
            "PROSUB → capacidades de dissuasão e de desenvolvimento tecnológico de defesa, com o setor nuclear sob responsabilidade da Marinha → orientação da END para dotar o Estado de capacidade → objetivo de promover a autonomia tecnológica e produtiva na área de defesa.",
            "SisGAAz → capacidade de mobilização → pressuposto de estímulo à Base Industrial de Defesa → objetivo de ampliar o envolvimento da sociedade nos assuntos de Defesa Nacional.",
            "Complexo naval na foz do Amazonas → capacidade de gestão da informação → setor cibernético sob responsabilidade do Exército → objetivo de contribuir para a estabilidade regional.",
            "PESD 2020-2031 → Objetivos Nacionais de Defesa → Capacidades Nacionais de Defesa → ações das Forças, porque o planejamento setorial antecede a definição dos objetivos.",
        ],
        correta=1,
        comentario="A cadeia correta liga uma ação concreta à capacidade que ela constrói, à orientação estratégica que a justifica e ao objetivo político que a sustenta. O PROSUB constrói **dissuasão** e **desenvolvimento tecnológico de defesa**; o setor nuclear é responsabilidade da **Marinha**; a END é justamente “o vínculo entre o posicionamento do País nas questões de Defesa e as ações necessárias para efetivamente dotar o Estado da capacidade para atender seus interesses”; e o objetivo da PND correspondente é promover a autonomia tecnológica e produtiva. O erro que a questão pune é saltar da ação ao objetivo sem nomear a capacidade — é exatamente aí que se perde o ponto do nexo causal.",
        distratores=[
            "Errada. A projeção de poder sobre terra não é a tarefa que o PROSUB constrói primariamente, e coesão nacional não é o objetivo pertinente.",
            "Correta. Ação → capacidades → orientação da END → objetivo da PND, sem salto.",
            "Errada. O SisGAAz constrói gestão da informação e pronta-resposta, não mobilização; e a BID é pressuposto, não etapa dessa cadeia.",
            "Errada. O setor cibernético é do Exército e não se aplica ao complexo naval; a cadeia mistura níveis.",
            "Errada. Inverte a ordem: a PND define objetivos, a END orienta e o PESD traduz em metas setoriais.",
        ],
        fonte="AULA 13.pdf, slides “Estratégia Nacional de Defesa (END)”, “Capacidades Nacionais de Defesa (CND)”, “Responsabilidade pelos Setores Estratégicos” e “Objetivos Nacionais de Defesa”; Estudos Dirigidos por correlação.",
        competencia="Remontar a cadeia objetivo-estratégia-capacidade-ação a partir de um programa concreto.",
        erro="Saltar da ação ao objetivo sem nomear a capacidade intermediária.",
        tempo=4),

    dis("M02", "N3", 5, topico=T,
        conceitos=["REL-T2-M02-C012", "REL-T2-M02-C011"],
        enunciado="Correlacione diretamente o PESD 2020-2031 e o ensino na Escola Naval, indicando a perspectiva do Mapa Estratégico Setorial em que o vínculo se estabelece e o mecanismo que liga um ao outro.",
        gabarito=(
            "**Tese.** O ensino na Escola Naval é instrumento direto do PESD, e o vínculo se estabelece na perspectiva **Aprendizado e Crescimento** do Mapa Estratégico Setorial.\n\n"
            "**Conceito.** O PESD é elaborado pelo Ministério da Defesa para traduzir a END em ações concretas e metas para cada Força. Sua missão inclui preparar as Forças Armadas em permanente estado de prontidão, inclusive em apoio à política externa, e sua visão de futuro fala de Forças modernas, compatíveis, adequadamente preparadas e permanentemente prontas.\n\n"
            "**Evidência.** Na perspectiva Aprendizado e Crescimento, o Mapa Estratégico Setorial fixa três objetivos: preservar a efetividade dos sistemas de ensino das Forças Armadas; estimular o desenvolvimento de Estudos de Defesa; e incrementar a preservação do patrimônio histórico-cultural e o culto aos valores, às tradições e à ética. A Escola Naval realiza os três simultaneamente: é sistema de ensino, é ambiente de Estudos de Defesa e é instituição de formação em valores e tradições.\n\n"
            "**Nexo causal.** As quatro perspectivas do Mapa não são listas paralelas: são uma cadeia. Aprendizado e Crescimento sustenta Processos Internos, que entrega resultado na perspectiva Sociedade. Sem sistema de ensino efetivo não há pessoal capaz de operar os setores estratégicos nem de conduzir governança e inovação; sem isso não se entrega à sociedade dissuasão, preparo para a destinação constitucional, contribuição ao desenvolvimento e apoio à política externa. A formação do Aspirante é, portanto, a base da cadeia, e não um item lateral.\n\n"
            "**Fechamento com a disciplina.** O objetivo “incrementar o apoio à política externa”, presente na perspectiva Sociedade e no texto da missão, é o que dá sentido a estudar Relações Internacionais na Escola Naval: o oficial formado é também instrumento de apoio à política externa, o que exige compreender o sistema internacional, e não apenas operar meios.\n\n"
            "**Conclusão.** O PESD correlaciona-se com a Escola Naval pela perspectiva Aprendizado e Crescimento, e o mecanismo é de precedência causal: a efetividade do ensino é condição da capacidade que as demais perspectivas pressupõem.\n\n"
            "**Resposta insuficiente:** “A Escola Naval forma oficiais, e o PESD quer Forças preparadas.” Correto e vazio: não nomeia perspectiva nem mecanismo. **Satisfatória:** nomeia a perspectiva Aprendizado e Crescimento e um de seus objetivos. **Nível MB:** nomeia a perspectiva, os três objetivos, o mecanismo de cadeia entre as perspectivas e fecha com o apoio à política externa."
        ),
        criterios=[
            "Nomeia a perspectiva Aprendizado e Crescimento (0,2)",
            "Cita ao menos dois dos três objetivos dessa perspectiva (0,2)",
            "Explica o mecanismo de cadeia entre as perspectivas, e não apenas a lista (0,3)",
            "Explicita a função do PESD de traduzir a END em ações e metas por Força (0,1)",
            "Fecha ligando ao objetivo de apoio à política externa (0,2)",
            "Não pontua: responder pela perspectiva Sociedade sem justificar, ou afirmar o vínculo sem nomear perspectiva",
        ],
        fonte="AULA 13.pdf, slides “Planejamento Estratégico Setorial de Defesa (PESD) 2020-2031”, “PESD 2020-2031 — Visão de futuro”, “MAPA ESTRATÉGICO SETORIAL”, “Perspectiva Aprendizagem e Crescimento” e “Perspectiva Sociedade”, e Estudo Dirigido (“Correlacione diretamente o PESD e o ensino na Escola Naval”).",
        competencia="Correlacionar documento setorial e instituição de ensino nomeando perspectiva e mecanismo.",
        erro="Afirmar o vínculo sem nomear a perspectiva do Mapa Estratégico Setorial.",
        tempo=10),

    obj("M02", "N3", 6, topico=T,
        conceitos=["REL-T2-M02-C005", "REL-T2-M02-C006", "REL-T2-M02-C004"],
        enunciado="Um Aspirante monta a seguinte lista como sendo dos Objetivos Nacionais de Defesa: garantir a soberania e a integridade territorial; assegurar a capacidade de Defesa para as missões constitucionais; promover a autonomia tecnológica e produtiva; fortalecer a presença no entorno estratégico por meio da ZOPACAS; e contribuir para a paz e a segurança internacionais. Qual é o problema dessa lista?",
        alternativas=[
            "Nenhum: a lista reproduz corretamente cinco dos oito Objetivos Nacionais de Defesa.",
            "O item sobre a ZOPACAS não figura com essa redação entre os Objetivos Nacionais de Defesa; a manutenção do Atlântico Sul como Zona de Paz e Cooperação é um PRESSUPOSTO da PND, e a formulação apresentada vem de paráfrase de resumo.",
            "O item sobre autonomia tecnológica e produtiva pertence à END, e não aos Objetivos Nacionais de Defesa da PND.",
            "O item sobre contribuir para a paz e a segurança internacionais é do PESD, não da PND.",
            "A lista está incompleta apenas porque omite a definição de AJB, que integra os Objetivos Nacionais de Defesa.",
        ],
        correta=1,
        comentario="A lista mistura dois níveis. Os slides separam **pressupostos** da PND — entre eles buscar a manutenção do Atlântico Sul como ZOPACAS, estimular a BID, proteger e integrar a Amazônia e defender a exploração da Antártica só para pesquisa científica — dos **Objetivos Nacionais de Defesa**, que são oito e incluem preservar a coesão e a unidade nacionais, salvaguardar pessoas e interesses no exterior, ampliar o envolvimento da sociedade e incrementar a projeção do Brasil no concerto das Nações. A redação sobre entorno estratégico e ZOPACAS aparece em resumo de Aspirante, não no slide: é o tipo de item plausível e correto no conteúdo que não está na lista cobrada.",
        distratores=[
            "Errada. Quatro dos cinco itens estão corretos, mas o quinto não pertence à lista.",
            "Correta. ZOPACAS é pressuposto da PND; a redação apresentada é paráfrase de resumo.",
            "Errada. Promover a autonomia tecnológica e produtiva na área de defesa é Objetivo Nacional de Defesa expresso no slide.",
            "Errada. Contribuir para a estabilidade regional e para a paz e a segurança internacionais é Objetivo Nacional de Defesa.",
            "Errada. A definição de AJB aparece no bloco do Poder Naval, não entre os objetivos.",
        ],
        fonte="AULA 13.pdf, slides “Alguns pressupostos da PND” e “Objetivos Nacionais de Defesa” (dois slides); fontes-manifesto.json, conflito CF-03.",
        competencia="Separar pressupostos da PND de Objetivos Nacionais de Defesa, recusando paráfrase de resumo.",
        erro="Incluir na lista de objetivos um item que é pressuposto, por ser verdadeiro no conteúdo.",
        tempo=4),

    dis("M02", "N4", 7, topico=T,
        conceitos=["REL-T2-M02-C013", "REL-T2-M02-C001", "REL-T2-M01-C007"],
        enunciado="A herança pacífica da atuação do Barão do Rio Branco é apresentada em aula como ativo da política externa brasileira. À luz do debate proposto a partir de Alsina Jr., discuta em que medida essa mesma herança pode ser lida como passivo estratégico, e conclua.",
        gabarito=(
            "**Tese.** A herança de Rio Branco é ativo diplomático e, simultaneamente, pode ser lida como passivo estratégico — e a tensão entre as duas leituras é o núcleo do debate sobre a necessidade de uma Grande Estratégia brasileira.\n\n"
            "**Conceito.** Grande Estratégia, na formulação de Peter Feaver recuperada em aula, é a coleção de planos e políticas que compreendem o esforço deliberado do Estado para reunir ferramentas políticas, militares, diplomáticas e econômicas em favor do interesse nacional. Ela tem forte influência realista, porque supõe um sistema complexo e instável em que o Estado precisa planejar de longo prazo.\n\n"
            "**Leitura como ativo.** Dez fronteiras resolvidas sem guerra, não-intervenção, solução pacífica de litígios e boa vizinhança produziram três resultados mensuráveis: eliminaram a hipótese de conflito territorial no entorno, credenciaram o Brasil como interlocutor e mediador, e reduziram permanentemente a necessidade de dissuasão terrestre. Os princípios foram constitucionalizados no art. 4º da CF/88, o que lhes dá estabilidade que nenhum governo isolado poderia dar.\n\n"
            "**Leitura como passivo.** Alsina Jr. aponta, como principais ameaças à defesa do Brasil, ameaças INTERNAS: uma cultura excessivamente pacífica, assentada na crença de que o Brasil não entrará em guerra; uma cultura de defesa pouco consolidada; baixo investimento político e orçamentário; e baixa prontidão militar. Acrescenta que a defesa fica subordinada à diplomacia, porque uma diplomacia tão pacífica e conciliadora acaba enfraquecendo a autonomia das Forças Armadas. A fragmentação da sociedade é apresentada como fator que atrapalha a formação de uma Grande Estratégia, ainda que o Brasil represente cerca de 50% da América do Sul em população, território, recursos militares e economia.\n\n"
            "**Nexo causal.** O mecanismo é o mesmo nas duas leituras: ausência de ameaça estatal próxima reduz a percepção social de necessidade de defesa; percepção reduzida produz orçamento reduzido; orçamento reduzido produz baixa prontidão. O que foi conquista diplomática no século XX virou, no século XXI, ausência de incentivo — e o Brasil pode ser envolvido em disputas por água, energia e recursos da Amazônia Azul, além da própria Amazônia, cobiçada por grandes potências.\n\n"
            "**Contraponto e limite.** Não se trata de propor abandono dos princípios: eles são constitucionais e continuam rendendo. Milani e Nery indicam o caminho intermediário — consenso das elites sobre desenvolvimento, aprofundamento das relações civis-militares na estrutura decisória do Ministério da Defesa, integração entre Forças Armadas, universidades e setor privado para melhorar a BID, e maior integração entre política externa e política de defesa.\n\n"
            "**Conclusão.** A herança de Rio Branco não deve ser substituída, mas deixa de bastar: sem Grande Estratégia que converta a paz conquistada em capacidade preservada, a mesma herança que eliminou ameaças produz a desmobilização que as novas disputas por recursos tornam arriscada.\n\n"
            "**Resposta insuficiente:** dizer que a herança é boa e que falta orçamento. **Satisfatória:** apresenta as duas leituras. **Nível MB:** apresenta as duas leituras, nomeia o mecanismo que as une, cita as ameaças internas de Alsina Jr. e propõe o caminho intermediário sem abandonar a tese."
        ),
        criterios=[
            "Define Grande Estratégia com a formulação de Feaver e sua influência realista (0,15)",
            "Apresenta a leitura como ativo com pelo menos dois resultados concretos (0,2)",
            "Apresenta a leitura como passivo nomeando as ameaças internas de Alsina Jr. (0,25)",
            "Explicita o mecanismo comum: ausência de ameaça → percepção → orçamento → prontidão (0,25)",
            "Conclui com contraponto construtivo, sem abandonar os princípios constitucionais (0,15)",
            "Não pontua: atribuir a Alsina Jr. a tese de ameaça externa; apresentar só uma das leituras",
        ],
        fonte="AULA 12.pdf, slides “Pontos para Debate (segundo Alsina Jr.)” e “Principais heranças do Barão do Rio Branco”; REL - T2.pdf, desenvolvimento da crítica de Alsina Jr. e as conclusões de Milani e Nery; AULA 12.pdf, slide “PEB - Constituição de 1988”.",
        competencia="Sustentar duas leituras opostas do mesmo fato histórico e concluir sem simplificar.",
        erro="Ler a herança pacífica apenas como ativo, ignorando a crítica do corpus.",
        tempo=14),
]

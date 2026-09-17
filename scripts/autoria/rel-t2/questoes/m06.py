# -*- coding: utf-8 -*-
"""Banco do Módulo 06 — Rússia."""

from helper import obj, vf, cor, dis

T = "06-russia"

QUESTOES = [
    vf("M06", "N1", 1, topico=T,
       conceitos=["REL-T2-M06-C011"],
       afirmacao="Na divisão proposta por Dugin, as telurocracias são os Estados que se expandem militarmente pelo mar, associados ao polo atlanticista, enquanto as talassocracias se expandem por terra e correspondem à Eurásia.",
       correta=False,
       comentario="**Falsa.** Os termos estão invertidos. **Telurocracias** são os Estados que se expandem militarmente por terra, associados à Eurásia; **talassocracias** são os que se expandem pelo mar, associados aos atlanticistas. A raiz ajuda: *tellus* é terra, *thalassa* é mar. A inversão é o erro mais previsível do módulo porque as duas palavras são simétricas e pouco familiares, e o slide as apresenta na mesma linha.",
       fonte="AULA 17.pdf, slide “Geopolítica da Rússia (Dugin)”; REL - T2.pdf, item 1 da seção sobre Dugin.",
       competencia="Distinguir telurocracia de talassocracia.",
       erro="Inverter telurocracia e talassocracia."),

    obj("M06", "N2", 2, topico=T,
        conceitos=["REL-T2-M06-C003", "REL-T2-M06-C006"],
        enunciado="Sobre os imperativos estratégicos da Rússia tal como apresentados em aula, assinale a alternativa CORRETA.",
        alternativas=[
            "Consistem em manter o centro Europa-Urais protegido por áreas tampão, garantir o Cazaquistão em sua área de influência e tentar o acesso aos mares, sendo que cada uma das três saídas marítimas apresenta uma limitação estrutural: o Pacífico é distante do centro, o Mar Negro depende do controle turco e o Mar Báltico é refém de vários países.",
            "Consistem em conquistar acesso irrestrito a três oceanos, o que já foi alcançado com a expansão do czarismo para a Sibéria e o Alasca.",
            "Consistem em manter o centro na Sibéria, região que concentra as principais cidades e a maior parte da população russa.",
            "Consistem em expandir a fronteira até o Oceano Índico, único mar de águas quentes acessível ao território russo atual.",
            "Consistem exclusivamente em impedir a expansão da OTAN, sendo os demais elementos consequências desse objetivo único.",
        ],
        correta=0,
        comentario="O slide é preciso em três pontos que as demais alternativas quebram. Primeiro, o centro é **Europa-Urais**, e é lá que estão as principais cidades — São Petersburgo e Moscou —, não na Sibéria. Segundo, o verbo é **tentar** o acesso aos mares: é ambição não realizada, e o slide registra a limitação de cada saída. Terceiro, o Cazaquistão aparece em item próprio, como área de influência a garantir, e não se confunde com as áreas tampão listadas (Cáucaso, Mongólia, Bielorrússia, Finlândia, Países Bálticos, Polônia, Hungria).",
        distratores=[
            "Correta. Reproduz os três imperativos com as limitações de cada saída marítima.",
            "Errada. O acesso não foi alcançado: o slide diz “tentar”, e a Sibéria e o Alasca não resolveram o problema — o Alasca foi vendido em 1867.",
            "Errada. O centro é Europa-Urais; a Sibéria é profundidade territorial, não centro.",
            "Errada. O Índico é objetivo histórico do Grande Jogo, não acesso disponível ao território atual.",
            "Errada. Reduz três imperativos a um objetivo conjuntural.",
        ],
        fonte="AULA 17.pdf, slide “Imperativos Estratégicos”; REL - T2.pdf, seção sobre acesso aos mares e o centro Europa-Urais.",
        competencia="Recuperar os imperativos russos com precisão, incluindo o caráter não realizado do acesso aos mares.",
        erro="Tratar o acesso aos mares como conquistado, ou situar o centro russo na Sibéria.",
        tempo=3),

    obj("M06", "N3", 3, topico=T,
        conceitos=["REL-T2-M06-C006", "REL-T2-M00-C013"],
        enunciado="Uma análise sustenta que “é útil pensar a Rússia como um país sem litoral”. Qual justificativa torna essa afirmação defensável, apesar de a Rússia ter uma das maiores fronteiras marítimas do mundo?",
        alternativas=[
            "A afirmação é indefensável, uma vez que extensão de fronteira marítima é a definição de acesso ao mar.",
            "A afirmação é defensável porque extensão de litoral não equivale a acesso ao oceano aberto: o Pacífico russo ao norte permanece congelado boa parte do tempo, nos mares da Sibéria e de Okhotsk; a saída pelo Mar Negro é inevitavelmente pelos estreitos de Bósforo e Dardanelos, sob controle turco; e o Báltico é cercado por países da OTAN, com estreito sob controle dinamarquês — problema que se repete em Kaliningrado, enclave entre Polônia e Lituânia. A perda de infraestrutura portuária com o fim dos satélites soviéticos agravou o quadro.",
            "A afirmação é defensável porque a Rússia não possui marinha mercante, dependendo integralmente de bandeiras estrangeiras para seu comércio exterior.",
            "A afirmação é defensável apenas em relação ao Ártico, região em que o país não tem litoral próprio.",
            "A afirmação é defensável porque a Rússia renunciou ao acesso marítimo ao vender o Alasca em 1867.",
        ],
        correta=1,
        comentario="A formulação é contraintuitiva de propósito e é a melhor síntese do módulo. Ter litoral não é ter acesso: acesso exige água navegável o ano inteiro e passagem que não dependa da anuência de terceiros. A Rússia falha nos dois critérios em todas as suas saídas. Gelo no norte, estreitos turcos no sul, estreito dinamarquês no Báltico — e Kaliningrado repete o problema em miniatura, banhado pelo Báltico e com saída para o mar aberto pelo mesmo estreito. A consequência prática registrada é que a Rússia PRECISA de estratégia naval justamente para compensar o que lhe falta em acesso, e não por excesso de capacidade.",
        distratores=[
            "Errada. Confunde extensão de fronteira com utilidade estratégica do acesso.",
            "Correta. Distingue extensão de litoral de acesso ao oceano aberto, com as três limitações e o caso de Kaliningrado.",
            "Errada. A Rússia tem marinha mercante, ainda que pequena, com participação em torno de 0,1% do transporte mundial de carga e a maior parte da tonelagem operada sob bandeira estrangeira — o que é agravante, não a razão da afirmação.",
            "Errada. A Rússia tem extenso litoral ártico, e o Ártico é precisamente a prioridade da doutrina marítima de 2022.",
            "Errada. A venda do Alasca não constitui renúncia ao acesso marítimo, e o problema é estrutural e anterior.",
        ],
        fonte="ZOLOTOVA (GPF), “Russia's New Maritime Strategy”, 07/08/2022; REL - T2.pdf, seção sobre acesso aos mares e Kaliningrado; AULA 17.pdf, slide “Imperativos Estratégicos” e mapa da pressão russa sobre a Europa.",
        competencia="Distinguir extensão de litoral de acesso efetivo ao oceano aberto.",
        erro="Inferir acesso marítimo a partir da extensão da fronteira marítima.",
        tempo=4),

    cor("M06", "N3", 4, topico=T,
        conceitos=["REL-T2-M06-C005", "REL-T2-M06-C010", "REL-T2-M06-C009"],
        titulo="Correlacione cada situação ao problema geográfico russo que ela materializa",
        chaves=[
            ("A", "Planície europeia aberta"),
            ("B", "Ucrânia"),
            ("C", "Cáucaso"),
            ("D", "Ásia Central e países tampão"),
        ],
        itens=[
            ("Relevo que se estende da Alemanha, passa pela Polônia e chega à Rússia, facilitando o avanço de tropas terrestres e tornando a profundidade territorial substituta de fronteira defensável.", "A"),
            ("Região de ligação entre o Oriente Médio e a Rússia, das mais instáveis do planeta, com áreas separatistas e litígios, em que interessa manter presença — e mesmo avançar, com bases em terceiro país — para fazer frente a uma potência regional membro da OTAN que também disputa o Mar Negro.", "C"),
            ("Conjunto de repúblicas e de um vizinho de estepe que funcionam como zona tampão entre o sul russo e duas grandes potências asiáticas, e cuja estabilidade interessa para que não se aliem a rivais nem ingressem em aliança adversária.", "D"),
            ("Ingresso deste país em bloco econômico ou em aliança militar ocidental fortaleceria a presença europeia, aproximaria tropas e bases e acirraria a disputa por um mar interior estratégico.", "B"),
            ("Iniciativa chinesa de infraestrutura que reedita, com novos atores, uma disputa do século XIX por influência sobre esta região tampão, obrigando a Rússia a conter e simultaneamente manter aliança tática com o mesmo competidor.", "D"),
            ("Adesão de dois países nórdicos à aliança ocidental até meados de 2024, um deles com fronteira terrestre direta, reduzindo ainda mais a camada protetora sobre esta planície.", "A"),
        ],
        comentario="Os quatro problemas não são uma lista: são um encadeamento em torno do mesmo mecanismo — centro exposto, logo necessidade de camada protetora, logo atrito com quem quer sair da esfera de influência. Note dois itens de nível mais alto. O da iniciativa chinesa vai para **D** porque o novo Grande Jogo se dá na Ásia Central, e expõe a contradição declarada nos desafios: conter a expansão chinesa e manter aliança tática com a China ao mesmo tempo. O da adesão nórdica vai para **A** porque o efeito é sobre a camada de proteção do centro na planície europeia — e é o efeito não pretendido da invasão de 2022, que produziu exatamente o que se dizia querer evitar.",
        fonte="REL - T2.pdf, Problemas da Rússia 1 a 4 e DESAFIOS PARA A RÚSSIA; AULA 17.pdf, slides “Desafios para a Rússia” (dois), “OTAN em 2024” e mapa “Presión rusa sobre Europa”.",
        competencia="Associar situações concretas ao problema geográfico russo que cada uma materializa.",
        erro="Tratar os quatro problemas como lista independente, sem o mecanismo comum.",
        tempo=7),

    obj("M06", "N3", 5, topico=T,
        conceitos=["REL-T2-M06-C007", "REL-T2-M06-C004"],
        enunciado="O professor apresenta a expressão “paranoia geopolítica” entre aspas e seguida de interrogação. Qual é a leitura correta desse recurso?",
        alternativas=[
            "As aspas indicam que o termo é usado ironicamente para negar qualquer fundamento à percepção russa de ameaça, uma vez que as invasões alegadas não ocorreram.",
            "As aspas e a interrogação convertem o termo em problema analítico: a percepção de ameaça é dado a explicar, não justificativa a aceitar nem ilusão a descartar. O próprio slide traz as duas listas — casos em que a percepção se justificou (rivalidade com a Aliança Polaco-Lituana no século XVI, invasão por Napoleão, invasão por Hitler) e casos em que não (anexação das repúblicas bálticas em 1939, invasão da Polônia em 1939, incorporação de fato da Europa Oriental depois da II Guerra).",
            "As aspas indicam que o termo é uma citação de Dugin, autor que o emprega para fundamentar suas recomendações de 1997.",
            "As aspas indicam que o termo descreve com precisão clínica o comportamento russo desde 2008, servindo de diagnóstico e de justificativa das ações de 2014 e 2022.",
            "As aspas são apenas convenção tipográfica dos slides e não têm significado analítico.",
        ],
        correta=1,
        comentario="O recurso gráfico é um comando metodológico e é o coração analítico do módulo. O slide não oferece diagnóstico: oferece uma dupla lista que impede as duas leituras fáceis. Não se pode dizer que a percepção russa é infundada, porque metade da lista é de invasões realmente sofridas por uma planície sem fronteira defensável. Nem se pode aceitá-la como justificativa, porque a outra metade da lista é de casos em que a Rússia agiu ofensivamente sob a mesma percepção — e o slide acrescenta o século XXI: Geórgia em 2008, Crimeia em 2014, Ucrânia em 2022. A distinção que se cobra é a mais difícil e a mais valiosa da disciplina: **explicar não é justificar**.",
        distratores=[
            "Errada. As invasões por Napoleão e por Hitler ocorreram e estão no próprio slide.",
            "Correta. Converte o termo em problema analítico, com as duas listas.",
            "Errada. A expressão aparece em slide próprio, distinto do bloco sobre Dugin.",
            "Errada. Tomar a percepção como justificativa é precisamente o que o recurso gráfico impede.",
            "Errada. A dupla lista que acompanha o slide demonstra o contrário.",
        ],
        fonte="AULA 17.pdf, slide “‘Paranoia geopolítica’?”; REL - T2.pdf, seção PARANOIA GEOPOLÍTICA.",
        competencia="Tratar percepção de ameaça como variável explicativa, distinguindo explicação de justificação.",
        erro="Usar a percepção de ameaça como justificativa das ações, ou negar-lhe qualquer fundamento.",
        tempo=4),

    dis("M06", "N4", 6, topico=T,
        conceitos=["REL-T2-M06-C014", "REL-T2-M06-C003", "REL-T2-M06-C011", "REL-T2-M06-C009"],
        enunciado="Com base nos imperativos estratégicos, nos desafios declarados e nas diretrizes de Dugin, aponte se a decisão de invadir a Ucrânia em 2022 seguiu ou não esses aspectos. Aponte também as consequências da invasão, indicando as que contribuem positivamente e as que trazem resultados negativos para os objetivos mencionados.",
        gabarito=(
            "**Tese.** A decisão seguiu parte dos aspectos e contrariou outra parte, e o saldo é ambíguo: obteve ganhos pontuais no Mar Negro e produziu perdas estruturais nos três imperativos.\n\n"
            "**Teste 1 — serviu ao imperativo declarado?** Parcialmente. O imperativo de proteger o centro Europa-Urais com áreas tampão e o desafio explícito de impedir ou dificultar a entrada da Ucrânia na OTAN justificam a ação: o corpus registra que a Ucrânia na OTAN dificultaria a presença geoestratégica russa na Europa. Também serve ao imperativo de acesso aos mares, na parte do Mar Negro.\n\n"
            "**Teste 2 — seguiu Dugin?** Em parte. Duas recomendações de 1997 foram cumpridas — a invasão da Geórgia, em 2008, e a anexação da Crimeia, em 2014. A invasão de 2022 é coerente com a fragmentação da OTAN e com a saída de antigas repúblicas soviéticas da UE e da aliança. Mas contrariou frontalmente o eixo **Moscou-Tóquio**, que Dugin propunha justamente para CONTER a ascensão chinesa: na prática, a Rússia se aproximou da China. E paralisou o eixo **Moscou-Berlim**, que estava latente e foi interrompido pela própria invasão e pelo corte do fornecimento de gás, com a Alemanha em movimento de remilitarização e aumento de orçamento de defesa.\n\n"
            "**Consequências positivas para os objetivos russos.** (1) Controle de Sebastopol e da Crimeia reforça a posição no Mar Negro, atendendo ao imperativo de acesso. (2) Territórios ocupados no leste e no sul ampliam a profundidade em relação ao centro. (3) A demonstração de disposição de usar força eleva o custo esperado de futuras aproximações ocidentais na vizinhança imediata — efeito dissuasório sobre outros Estados do chamado próximo estrangeiro.\n\n"
            "**Consequências negativas para os objetivos russos.** (1) Efeito não pretendido decisivo: até meados de 2024 mais países ingressaram na OTAN, com destaque para Suécia e Finlândia, esta com fronteira terrestre direta — a camada protetora do centro diminuiu, não aumentou. (2) A OTAN aumentou em 20% os gastos militares em 2025, com 574 bilhões de dólares investidos pelos aliados e nova meta de 3,5% do PIB em gasto estritamente militar até 2035, mais 1,5% em segurança. (3) Paralisia do eixo Moscou-Berlim e perda do mercado europeu de gás, o que agrava o desafio declarado de obter dinamismo econômico que não dependa apenas de petróleo e gás. (4) Aprofundamento da dependência da China, contrariando o desafio de conter a expansão chinesa na Ásia Central e o eixo Moscou-Tóquio. (5) Efeito material sobre o mar: sanções afetaram cadeias de valor e a projeção é de queda de até 50% na movimentação de carga nos portos russos, além da dependência de 40% a 85% de componentes importados no setor naval civil — isto é, a ambição da doutrina marítima de 2022 ficou mais distante da capacidade. (6) Custo demográfico, que agrava o primeiro desafio declarado, de população encolhendo e envelhecendo.\n\n"
            "**Contraponto e leitura concorrente.** Uma leitura crítica sustenta que a invasão é o movimento mais ousado para formalizar uma esfera de influência e remodelar a ordem global, coerente com os três objetivos da Doutrina Primakov: combater a dominação dos Estados Unidos, restaurar a influência russa no espaço pós-soviético e interromper a expansão da OTAN. Essa leitura vem de fonte com posição declaradamente pró-ocidental e deve ser identificada como interpretação. A leitura concorrente, mais próxima do enquadramento do professor, trata a “paranoia geopolítica” como problema analítico: explica a decisão pela planície aberta e pela memória de invasões, sem por isso justificá-la — e registra que, sob a mesma percepção, a Rússia já agiu tanto defensiva quanto ofensivamente.\n\n"
            "**Conclusão.** A decisão foi coerente com o imperativo de tampão e de Mar Negro e com parte das diretrizes de Dugin, mas produziu o resultado oposto ao pretendido no imperativo mais importante: o centro Europa-Urais ficou menos protegido, e não mais. Em termos de matriz de cenários, é um caso em que o instrumento escolhido agravou a vulnerabilidade que pretendia corrigir — o que torna o saldo negativo no médio prazo, ainda que positivo em ganhos territoriais imediatos.\n\n"
            "**Resposta insuficiente:** dizer que a invasão seguiu os imperativos porque a Rússia queria segurança. **Satisfatória:** faz o teste de coerência e lista consequências dos dois sinais. **Nível MB:** faz os três testes, nomeia o eixo de Dugin contrariado, quantifica ao menos uma consequência negativa, identifica a posição da fonte crítica e conclui pelo saldo com justificativa temporal."
        ),
        criterios=[
            "Testa a coerência com os imperativos declarados, reconhecendo coerência parcial (0,15)",
            "Testa a coerência com Dugin e identifica o eixo Moscou-Tóquio como contrariado (0,2)",
            "Apresenta pelo menos duas consequências positivas para os objetivos russos (0,15)",
            "Apresenta pelo menos três consequências negativas, com ao menos uma quantificada (0,25)",
            "Identifica a posição da fonte crítica e apresenta a leitura concorrente (0,1)",
            "Conclui pelo saldo, distinguindo ganho imediato de perda estrutural (0,15)",
            "Não pontua: apresentar apenas um dos sinais de consequência; tratar a percepção de ameaça como justificativa",
        ],
        fonte="AULA 17.pdf, Estudos Dirigidos (“aponte se a decisão da invasão da Ucrânia seguiu (ou não) tais aspectos” e “aponte as consequências… positivamente e… negativas”), slides “Imperativos Estratégicos”, “Desafios para a Rússia”, “Geopolítica da Rússia (Dugin)” e “OTAN em 2024”; REL - T2.pdf, Dugin e o estado atual de cada eixo; ZOLOTOVA (GPF, 2022); GVINERIA (fonte com posição declarada).",
        competencia="Testar uma decisão estratégica contra imperativos e doutrina, e balancear consequências nos dois sinais.",
        erro="Apresentar apenas as consequências favoráveis ou apenas as desfavoráveis.",
        tempo=18),

    obj("M06", "N3", 7, topico=T,
        conceitos=["REL-T2-M06-C013", "REL-T2-M06-C010"],
        enunciado="A doutrina marítima russa aprovada em julho de 2022 declara a dominação americana dos oceanos como ameaça primária, define zonas de interesse vital — incluindo a bacia do Ártico e a Rota Marítima do Norte — e desloca a prioridade do Atlântico para o Ártico e o Pacífico. Qual análise dessa doutrina é mais rigorosa?",
        alternativas=[
            "A doutrina indica que a Rússia recuperou capacidade naval equivalente à soviética, uma vez que amplia o escopo declarado de interesses.",
            "Doutrina é declaração de intenção e deve ser avaliada contra a capacidade: a frota russa passou de mais de 1.300 navios nos anos 1980 para cerca de 70 submarinos e mais de 200 navios de superfície, muitos defasados; o setor naval civil depende de 40% a 85% de componentes importados; os estaleiros são defasados; há poucas bases no exterior — apontadas pela própria análise como ameaça principal às atividades marítimas russas; e a participação russa no transporte mundial de carga é de cerca de 0,1%. A ambição excede a capacidade por décadas, ainda que o compromisso de cerca de 1,8 trilhão de rublos com a Rota Marítima do Norte até 2035 sinalize prioridade real.",
            "A doutrina é irrelevante, porque documentos doutrinários não produzem efeito sobre o comportamento dos Estados.",
            "A doutrina demonstra que os vizinhos da Rússia passaram a considerá-la ameaça naval nova e imediata, o que explica o aumento de gastos da OTAN.",
            "O deslocamento do foco para o Ártico revela abandono do interesse russo pelo Mar Negro e pelo Báltico, que deixaram de figurar entre as zonas de interesse.",
        ],
        correta=1,
        comentario="A lição de método é a mais transferível do módulo: **nunca inferir capacidade a partir de doutrina**. O documento é ambicioso e a fonte que o analisa documenta o contrário em meios, em indústria, em bases e em participação no comércio. Duas ressalvas dão rigor à análise. Primeira, os vizinhos com presença no Báltico, no Mar Negro, no Cáspio, no Ártico e no Pacífico não viram na doutrina uma ameaça nova, justamente porque entendem melhor que ninguém que a capacidade russa no mar é limitada, muitas vezes por razões internas. Segunda, o Mar Negro, o Azov, o Mediterrâneo oriental, o Báltico e os estreitos das Curilas continuam listados como zonas que afetam significativamente o desenvolvimento econômico: houve mudança de prioridade, não abandono.",
        distratores=[
            "Errada. Ampliar o escopo declarado não é recuperar capacidade; as duas variáveis são independentes.",
            "Correta. Avalia doutrina contra capacidade, com os dados e as duas ressalvas.",
            "Errada. Doutrina orienta alocação de recursos e sinaliza prioridade, como o compromisso com a Rota Marítima do Norte demonstra.",
            "Errada. A própria análise registra que os vizinhos NÃO viram ameaça nova, pela limitação conhecida da capacidade russa.",
            "Errada. Mar Negro e Báltico permanecem entre as zonas listadas; houve mudança de prioridade relativa.",
        ],
        fonte="ZOLOTOVA (GPF), “Russia's New Maritime Strategy”, 07/08/2022 (propósito, restrições e conclusão); AULA 17.pdf, slide “Desafios para a Rússia” (Ártico) e bibliografia complementar sobre a marinha russa.",
        competencia="Avaliar documento doutrinário contra capacidade material, sem inferir uma da outra.",
        erro="Inferir capacidade naval a partir da ambição declarada em doutrina.",
        tempo=4,
        verificacao="Sempre que um documento declarar ambição, procure na mesma fonte os números de meios, indústria e bases antes de concluir."),

    obj("M06", "N4", 8, topico=T,
        conceitos=["REL-T2-M06-C012", "REL-T2-M06-C001", "REL-T2-M00-C008"],
        enunciado="Avalie os itens sobre a visão russa de multipolaridade e sobre o argumento histórico de origem comum, e aponte a alternativa que contém apenas itens CORRETOS. **I.** A busca russa por um mundo multipolar tem raiz na Doutrina Primakov dos anos 1990, cujos três objetivos duradouros são combater a dominação dos Estados Unidos, restaurar a influência russa no espaço pós-soviético e interromper a expansão da OTAN. **II.** A multipolaridade, como descrição de um sistema com vários polos, é conceitualmente idêntica à multipolaridade como projeto normativo de reconhecimento de esferas de influência. **III.** A origem comum de russos, ucranianos e bielorrussos no Rus de Kiev constitui, por si, título jurídico que ampara reivindicação territorial sobre a Ucrânia. **IV.** A análise que descreve a multipolaridade russa como retorno a esferas de influência em que o poder se sobrepõe à lei e à soberania provém de fonte com posição declarada e deve ser tratada como interpretação, não como descrição neutra.",
        alternativas=[
            "I e II.",
            "I e IV.",
            "II e III.",
            "III e IV.",
            "I, II e IV.",
        ],
        correta=1,
        comentario="Corretos são **I** e **IV**. O item I reproduz os três objetivos da Doutrina Primakov, que a fonte identifica como raiz da posição russa e que explicam os ultimatos de dezembro de 2021 à OTAN e aos Estados Unidos. O item IV é a exigência metodológica do curso: a análise provém de autor georgiano com posição declaradamente pró-ocidental e é interpretação identificável, não fato neutro — o que não a invalida, mas obriga a nomeá-la. O item II é falso e é a distinção conceitual mais fina do módulo: multipolaridade como **descrição** (há vários polos de poder) não equivale a multipolaridade como **projeto normativo** (as esferas de influência das grandes potências devem ser formalmente reconhecidas e respeitadas). O item III é falso e o próprio corpus o refuta em três passos: outras sociedades tiveram origem naquela mesma região, passaram-se mais de mil anos, e a invasão desrespeitaria regras do Direito Internacional.",
        distratores=[
            "Errada. O item II é falso: descrição de sistema e projeto normativo não se confundem.",
            "Correta. Apenas I e IV são corretos.",
            "Errada. Os dois itens são falsos.",
            "Errada. O item III é falso e refutado no próprio corpus.",
            "Errada. O item II é falso.",
        ],
        fonte="GVINERIA, “Visão da Rússia sobre Multipolaridade” (Doutrina Primakov, esferas de influência, ultimatos de dezembro de 2021), citada na bibliografia complementar da AULA 17.pdf; REL - T2.pdf, refutação do argumento de origem comum; fontes-manifesto.json (natureza posicionada das fontes).",
        competencia="Distinguir descrição de sistema de projeto normativo e identificar a posição de uma fonte.",
        erro="Tratar análise de fonte posicionada como descrição neutra, ou aceitar origem histórica comum como título jurídico.",
        tempo=5),
]

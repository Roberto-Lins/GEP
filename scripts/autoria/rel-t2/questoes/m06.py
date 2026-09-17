# -*- coding: utf-8 -*-
"""Banco do Módulo 06 — Política Externa Brasileira: aplicação e integração.

A numeração começa em 9 porque os números 1 a 8 foram emitidos para o módulo de
Rússia, retirado do escopo. Nenhum ID é reutilizado, nem de questão descartada.
"""

from helper import obj, vf, cor, dis

T = "06-peb-aplicacao-e-integracao"

QUESTOES = [
    vf("M06", "N1", 9, topico=T,
       conceitos=["REL-T2-M06-C017"],
       afirmacao="A determinação de buscar a integração econômica, política, social e cultural da América Latina está no caput do art. 4º da Constituição de 1988, entre os princípios que regem as relações internacionais do Brasil.",
       correta=False,
       comentario="**Falsa.** Os dez princípios estão no **caput** do art. 4º; a determinação de buscar a **integração latino-americana** está no **parágrafo único**. A distinção não é preciosismo: princípio é critério de conduta, aplicável a qualquer relação; a integração é um **objetivo** determinado ao país, com destinatário geográfico definido — e é ela que sustenta a razão institucional da política de integração sul-americana. Quem cita o art. 4º sem separar caput de parágrafo único perde justamente o elemento que responde ao Estudo Dirigido.",
       fonte="AULA 12.pdf, slide “PEB - Constituição de 1988”; Estudo Dirigido 2 da Aula 13.",
       competencia="Localizar corretamente a determinação de integração dentro do art. 4º.",
       erro="Tratar a integração latino-americana como o décimo primeiro princípio do caput."),

    obj("M06", "N2", 10, topico=T,
        conceitos=["REL-T2-M06-C016"],
        enunciado="O Estudo Dirigido pergunta se o alinhamento automático com a maior potência sempre apresentou resultados positivos, pedindo exemplo. Qual resposta é mais defensável à luz do corpus?",
        alternativas=[
            "Sim, sempre: a aliança com a maior potência garante contrapartidas proporcionais ao apoio prestado.",
            "Não necessariamente. A aliança não-escrita do início do século XX foi proveitosa porque havia convergência de interesses e o Brasil detinha ativo então escasso, com capacidade de barganha real; já no pós-Segunda Guerra, o Acordo Militar de 1952 e a participação na Guerra da Coreia não produziram as contrapartidas esperadas na medida pretendida — alinhamento não gera crédito automático.",
            "Não, nunca: toda aliança com potência superior é, por definição, subordinação sem ganho.",
            "A pergunta não admite resposta, porque alinhamento é conceito da Guerra Fria e não se aplica à era Rio Branco.",
            "Sim, desde que formalizado em tratado, pois só o vínculo jurídico assegura reciprocidade.",
        ],
        correta=1,
        comentario="O enunciado do professor pede **exemplo**, e a resposta forte traz **dois**, de sinais opostos, porque é a comparação que revela o mecanismo: o que decide não é a intensidade do alinhamento, e sim a **capacidade de barganha** — quão escasso e urgente é o ativo que se oferece. Na era Rio Branco havia convergência pontual e ativo valorizado; em 1952 a expectativa de contrapartida se frustrou. Note ainda que a aliança não-escrita **não era** alinhamento automático: era convergência negociada caso a caso, o que é precisamente o contraste que a questão explora.",
        distratores=[
            "Errada. O caso de 1952 mostra que proporcionalidade não é automática.",
            "Correta. Dois casos de sinais opostos e o mecanismo que os distingue.",
            "Errada. A própria aliança não-escrita é contraexemplo registrado no corpus.",
            "Errada. O Estudo Dirigido usa exatamente esses períodos como material de resposta.",
            "Errada. A aliança não-escrita era proveitosa e, por definição, não era tratado.",
        ],
        fonte="AULA 12.pdf, slides “PEB - República Velha (1889~1930)” e “PEB - Pós II GM (1946~1960)”; Estudos Dirigidos 1 e 4 da Aula 13.",
        competencia="Responder a pergunta de julgamento com dois casos de sinais opostos e o mecanismo comum.",
        erro="Responder sim ou não sem exemplo, ou tratar a aliança não-escrita como alinhamento automático.",
        tempo=4),

    cor("M06", "N2", 11, topico=T,
        conceitos=["REL-T2-M06-C017", "REL-T2-M06-C018", "REL-T2-M06-C019"],
        titulo="Correlacione cada instrumento ou herança ao papel que desempenha na política externa brasileira",
        chaves=[
            ("A", "Razão institucional da integração"),
            ("B", "Razão pragmática da integração"),
            ("C", "Instrumento do entorno estratégico"),
            ("D", "Herança convertida em norma vigente"),
        ],
        itens=[
            ("Parágrafo único do art. 4º da Constituição, que determina buscar a integração econômica, política, social e cultural da América Latina.", "A"),
            ("Participação de Uruguai e Paraguai no Mercosul: peso econômico reduzido, mas valor geopolítico elevado, porque elimina fontes de atrito entre os dois sócios maiores.", "B"),
            ("Zona de Paz e Cooperação do Atlântico Sul, de 1986, que envolve afastar bases ofensivas e evitar a presença de armas nucleares na região.", "C"),
            ("Comunidade dos Países de Língua Portuguesa, de 1996, que dá densidade institucional à direção africana do entorno.", "C"),
            ("Princípio da não-intervenção e abordagem basicamente pacífica para a solução de controvérsias, hoje inscritos entre os princípios constitucionais e no fundamento da Política Naval.", "D"),
            ("Registro, na Declaração do Iguaçu, da urgente necessidade de que a América Latina reforce seu poder de negociação com o resto do mundo.", "B"),
        ],
        comentario="O Estudo Dirigido 2 pede **duas razões de naturezas diferentes**, e a correlação treina exatamente essa separação. A razão **institucional** é normativa: existe uma determinação constitucional, e ela está no parágrafo único, não no caput. A razão **pragmática** é de cálculo: estabilizar o entorno, eliminar atrito entre Brasil e Argentina e aumentar poder de negociação coletivo. **ZOPACAS** e **CPLP** não são razões de integração: são instrumentos do **entorno estratégico**, e correspondem a dois dos quatro itens definidos pela Política Naval. E as heranças de Rio Branco entram numa quarta categoria: princípios que deixaram de ser prática diplomática de um período e viraram **norma vigente** — no art. 4º e no fundamento da Política Naval.",
        fonte="AULA 12.pdf, slides “PEB - Constituição de 1988”, “PEB - Governos pós-1985” e “Principais heranças do Barão do Rio Branco”; MAGNOLI, cap. 21, seção “Do Mercosul à Unasul”; AULA 14.pdf, slide “Entorno Estratégico”.",
        competencia="Separar fundamento normativo, cálculo pragmático, instrumento de entorno e herança normatizada.",
        erro="Classificar ZOPACAS e CPLP como razões de integração regional.",
        tempo=6),

    obj("M06", "N3", 12, topico=T,
        conceitos=["REL-T2-M06-C021", "REL-T2-M06-C017"],
        enunciado="Sobre o desenho institucional do Mercosul e seus efeitos, assinale a alternativa CORRETA.",
        alternativas=[
            "O bloco tem órgãos supranacionais com poder de decidir por maioria qualificada, o que acelera a harmonização normativa entre os membros.",
            "A estrutura definida no Protocolo de Ouro Preto é intergovernamental: os órgãos decisórios são compostos por representantes dos Estados e agem apenas por consenso, o que preserva a soberania de cada membro e, ao mesmo tempo, permite que qualquer um deles trave uma decisão; o Protocolo de Ushuaia acrescentou a cláusula democrática, e a adesão plena da Venezuela, concluída em 2012, expandiu o bloco para além do Cone Sul, mas reduziu sua funcionalidade ao torná-lo dependente de novos consensos.",
            "A cláusula democrática foi introduzida pelo Tratado de Assunção e é o que permite a suspensão automática de membros por maioria simples.",
            "A entrada da Venezuela, em 2012, aumentou a funcionalidade comercial do bloco, uma vez que ampliou o mercado interno sem alterar a regra de decisão.",
            "O Mercosul nasceu como união aduaneira plena, razão pela qual não precisou estabelecer metas sucessivas de integração.",
        ],
        correta=1,
        comentario="A regra de decisão é o que explica o ritmo da integração — e é o que a maioria das respostas ignora. **Intergovernamental por consenso** significa que a soberania está protegida e que a velocidade é a do membro mais relutante. O Tratado de Assunção (1991) fixou **duas metas sucessivas**: primeiro zona de livre-comércio, depois união aduaneira pela Tarifa Externa Comum. O **Protocolo de Ouro Preto (1994)** definiu a estrutura; o **Protocolo de Ushuaia (1998)** introduziu a cláusula democrática. E a leitura da fonte sobre a adesão venezuelana é explicitamente ambivalente: ganho de alcance geopolítico, perda de funcionalidade comercial e política — porque o bloco passa a depender de consensos que antes não precisava obter.",
        distratores=[
            "Errada. Não há supranacionalidade nem decisão por maioria: os órgãos são intergovernamentais e decidem por consenso.",
            "Correta. Descreve desenho, cláusula democrática e o efeito ambivalente da adesão venezuelana.",
            "Errada. A cláusula democrática é do Protocolo de Ushuaia, de 1998, e não do Tratado de Assunção.",
            "Errada. A fonte registra perda de funcionalidade comercial e política, e a regra de decisão é justamente o problema.",
            "Errada. O tratado estabeleceu metas sucessivas: zona de livre-comércio e depois união aduaneira.",
        ],
        fonte="MAGNOLI, cap. 21, seção “Do Mercosul à Unasul” (Tratado de Assunção, Ouro Preto, Ushuaia, adesão venezuelana); AULA 12.pdf, slide “PEB - Governos pós-1985”.",
        competencia="Ler o desenho institucional como explicação do ritmo e do limite da integração.",
        erro="Atribuir supranacionalidade ao Mercosul ou ignorar o efeito da regra de consenso.",
        tempo=4),

    obj("M06", "N3", 13, topico=T,
        conceitos=["REL-T2-M06-C018", "REL-T2-M03-C003", "REL-T2-M02-C005"],
        enunciado="O Estudo Dirigido pergunta por que a ZOPACAS e a CPLP são importantes para o entorno estratégico brasileiro — e, em seguida, para a Marinha. Qual encadeamento responde às duas metades?",
        alternativas=[
            "As duas são alianças militares que garantem defesa coletiva do Atlântico Sul, o que dispensa investimento naval próprio.",
            "As duas dão densidade institucional a dois dos quatro itens do entorno estratégico definido pela Política Naval — o Atlântico Sul e os países da costa ocidental africana; para a Marinha, um Atlântico Sul mantido como zona de paz e cooperação, com afastamento de bases ofensivas e sem armas nucleares, reduz a ameaça precisamente no espaço onde estão as Águas Jurisdicionais Brasileiras e por onde passa mais de 95% do comércio exterior do país.",
            "As duas são relevantes apenas no plano cultural e linguístico, sem efeito sobre planejamento de defesa.",
            "A ZOPACAS é um dos Objetivos Nacionais de Defesa e a CPLP é uma Capacidade Nacional de Defesa, o que explica sua presença nos documentos.",
            "As duas substituem o entorno estratégico da Política Naval, que foi revogado pela Política Marítima Nacional de 2025.",
        ],
        correta=1,
        comentario="A pergunta tem **duas metades**, e responder só a primeira é perder metade dos pontos — erro que o padrão de correção por elementos registra como “faltou mencionar”. A primeira metade é institucional: ZOPACAS e CPLP correspondem a dois dos quatro itens do entorno. A segunda é operacional: o valor para a Marinha é a **redução de ameaça no espaço que ela precisa controlar**. E há uma armadilha de classificação embutida: a manutenção do Atlântico Sul como zona de paz e cooperação é **pressuposto** da PND — não Objetivo Nacional de Defesa, nem Capacidade.",
        distratores=[
            "Errada. Nenhuma das duas é aliança militar de defesa coletiva.",
            "Correta. Liga entorno, pressuposto da PND e o espaço onde estão as AJB.",
            "Errada. Ambas têm efeito direto sobre pressupostos e entorno declarados em documentos de defesa.",
            "Errada. ZOPACAS é pressuposto da PND, e a CPLP não é capacidade de defesa.",
            "Errada. A PMN não revogou o entorno estratégico da Política Naval.",
        ],
        fonte="AULA 12.pdf, slide “PEB - Governos pós-1985”; Estudo Dirigido 5 da Aula 13; AULA 13.pdf, slide “Alguns pressupostos da PND”; AULA 14.pdf, slides “Entorno Estratégico” e “Economia Azul”.",
        competencia="Responder às duas metades de um Estudo Dirigido, ligando instrumento diplomático a efeito operacional.",
        erro="Responder só a metade institucional e omitir o efeito para a Marinha.",
        tempo=4),

    obj("M06", "N3", 14, topico=T,
        conceitos=["REL-T2-M06-C015", "REL-T2-M04-C009", "REL-T2-M05-C003"],
        enunciado="Comparando a ESTRUTURA dos imperativos estratégicos estudados, qual leitura é mais rigorosa?",
        alternativas=[
            "Os três são listas equivalentes de objetivos, diferindo apenas no número de itens.",
            "As estruturas diferem: o imperativo americano é uma SEQUÊNCIA de quatro degraus em que cada um é condição do seguinte; o chinês é um TRILEMA de três itens que se tensionam entre si, de modo que nenhuma configuração os satisfaz plenamente; e o brasileiro, reconstruído a partir dos objetivos de defesa, da Política Naval e dos dilemas futuros, é uma lista SEM HIERARQUIA declarada — ausência que a crítica sobre Grande Estratégia explora ao sustentar que ter documentos não é ter estratégia.",
            "Apenas o imperativo chinês é hierarquizado, pois a integridade territorial vem declaradamente antes dos demais itens.",
            "O imperativo brasileiro está enunciado em slide próprio do professor, com quatro degraus análogos aos americanos.",
            "A comparação é inválida, porque o Brasil não tem objetivos estratégicos declarados em documento oficial.",
        ],
        correta=1,
        comentario="A comparação rende quando se pergunta pela **forma**, e não pelo conteúdo. Sequência implica ordem: não se projeta poder na Eurásia com a retaguarda hemisférica disputada. Trilema implica conflito interno: abertura gera a desigualdade que ameaça a unidade, e combatê-la reduz a abertura. Lista sem hierarquia implica **indeterminação de prioridade** — e é exatamente aí que incide o debate sobre Grande Estratégia tratado no módulo de PND, END e PESD. Duas cautelas de método: o imperativo brasileiro é **reconstrução declarada** deste curso, não slide do professor; e o Brasil **tem** objetivos declarados — são os oito Objetivos Nacionais de Defesa —, o que invalida a última alternativa.",
        distratores=[
            "Errada. A diferença é de natureza: sequência, trilema e lista sem hierarquia.",
            "Correta. Compara por estrutura e declara a natureza reconstruída do caso brasileiro.",
            "Errada. O trilema chinês não é hierarquia: os três itens se tensionam.",
            "Errada. Não há slide com imperativo brasileiro; a reconstrução é autoria declarada.",
            "Errada. Há oito Objetivos Nacionais de Defesa declarados na PND.",
        ],
        fonte="AULA 13.pdf, slide “Objetivos Nacionais de Defesa”; AULA 14.pdf, slide “Política Naval”; AULA 15.pdf, slide “EUA - Imperativo Estratégico”; AULA 16.pdf, slide “China - Imperativo Estratégico”; AULA 12.pdf, slide “PEB - Dilemas futuros”.",
        competencia="Comparar imperativos pela estrutura e declarar o que é reconstrução de autoria.",
        erro="Apresentar o imperativo brasileiro como enunciado de slide.",
        tempo=5),

    dis("M06", "N4", 15, topico=T,
        conceitos=["REL-T2-M06-C022", "REL-T2-M06-C015", "REL-T2-M06-C023", "REL-T2-M00-C003"],
        enunciado="Aplique a matriz de dez passos ao Brasil, no formato exigido pelo trabalho de T2: selecione três objetivos ou desafios geoceanopolíticos, nomeie para cada um o condicionante que o produz e os fatores facilitadores e dificultadores, indique o instrumento correspondente e conclua em formato de sumário executivo, declarando um limite da análise.",
        gabarito=(
            "**Tese.** O problema estratégico brasileiro não é ameaça estatal próxima, e sim a distância entre o que o país **depende** do mar e o que ele **consegue garantir** nele — e é essa distância que ordena objetivos, instrumentos e prioridades.\n\n"
            "**Objetivo 1 — assegurar o uso do mar de que a economia depende.** *Condicionante:* cerca de 8.500 km de litoral, com 80% da população e 90% do PIB nele concentrados, e mais de 95% do comércio exterior escoando por rotas marítimas. *Facilitadores:* jurisdição já reconhecida sobre extensa área; ausência de rival estatal de peso comparável no entorno; base industrial naval em formação. *Dificultadores:* dimensão continental da área a monitorar; orçamento de ciclo longo em disputa anual; dependência de tecnologia externa. *Instrumento:* SisGAAz e o monitoramento integrado, somados ao complexo naval de uso múltiplo previsto para as proximidades da foz do Amazonas, que amplia negação do uso do mar, controle de áreas marítimas e projeção de poder.\n\n"
            "**Objetivo 2 — manter o entorno sul-americano estável e sem coalizão hostil.** *Condicionante:* fronteira com dez vizinhos e bacias internacionais compartilhadas — os rios amazônicos e platinos atravessam fronteiras políticas. *Facilitadores:* fronteiras estabilizadas desde a era Rio Branco; determinação constitucional de buscar a integração latino-americana; Mercosul e Unasul já existentes. *Dificultadores:* regra de consenso que permite a qualquer membro travar decisões; heterogeneidade política dos vizinhos; perda de funcionalidade do bloco após a ampliação. *Instrumento:* diplomacia de integração, cooperação em infraestrutura física e eliminação de fontes de atrito com os vizinhos menores.\n\n"
            "**Objetivo 3 — ampliar a inserção decisória sem alinhamento automático.** *Condicionante:* posição no hemisfério sul, distante dos principais polos de poder — desvantagem de acesso e vantagem de baixa exposição a rivalidade militar direta. *Facilitadores:* trajetória de autonomia pela diversificação; reivindicação de assento no Conselho de Segurança amparada em objetivo declarado de defesa; ZOPACAS e CPLP como instrumentos de entorno. *Dificultadores:* baixa continuidade estratégica entre governos; um hemisfério tratado como zona de exclusão por potência extrarregional encurta a margem de diversificação. *Instrumento:* multilateralismo seletivo, diplomacia naval e a articulação declarada entre defesa e política externa, que aparece em quatro documentos distintos.\n\n"
            "**Situação atual e prospecção.** No plano nacional, os programas estratégicos avançam em ritmo determinado pelo financiamento, e a Política Marítima Nacional foi reeditada em 2025. No plano internacional, a competição sistêmica entre as duas maiores potências pressiona escolhas de parceria e de cadeia produtiva, inclusive em minerais críticos. A variável que mais desloca o cenário nos próximos anos é a **continuidade orçamentária**: sem ela, objetivo declarado não vira capacidade.\n\n"
            "**Lente teórica e contraponto.** Predomina a leitura liberal-institucional no modo de agir — princípios constitucionais, integração, multilateralismo —, com componente realista claro nos instrumentos de dissuasão marítima. O contraponto é honesto: quem enfatizar o complexo naval e a busca de autonomia tecnológica lerá o caso como realista, e a evidência sustenta essa leitura no aspecto da capacidade.\n\n"
            "**Conclusão em sumário executivo.** *O Brasil depende do mar em grau que não corresponde à capacidade de garanti-lo; seus instrumentos privilegiam jurisdição, consciência situacional e integração regional, e não projeção; e o limite decisivo não é externo, mas interno — hierarquia entre objetivos e continuidade de financiamento.*\n\n"
            "**Limite declarado.** O imperativo estratégico brasileiro não está enunciado em slide do professor: é reconstrução a partir dos Objetivos Nacionais de Defesa, do fundamento da Política Naval e dos dilemas futuros. Análise feita com informação verificada até 2026.\n\n"
            "**Resposta insuficiente:** descrever o Brasil em ordem cronológica, sem separar objetivo, condicionante e instrumento. **Satisfatória:** apresenta os três objetivos com facilitadores e dificultadores. **Nível MB:** apresenta os três, ancora cada um em condicionante nomeado e instrumento correspondente, conclui em sumário executivo e declara o limite da análise, inclusive a natureza reconstruída do imperativo."
        ),
        criterios=[
            "Seleciona três objetivos ou desafios, sem descrever o país em bloco (0,2)",
            "Nomeia, para cada objetivo, o condicionante que o produz (0,2)",
            "Apresenta fatores facilitadores E dificultadores de cada objetivo (0,2)",
            "Indica o instrumento correspondente a cada objetivo, com nome próprio (0,2)",
            "Conclui em formato de sumário executivo — mecanismo, vulnerabilidade e limite (0,1)",
            "Declara ao menos um limite da análise, incluindo a natureza reconstruída do imperativo (0,1)",
            "Não pontua: narrar história da política externa; listar programas sem ligá-los a objetivo; omitir dificultadores",
        ],
        fonte="T2_2025.pdf, item 2 do trabalho (peso 2,0) e item 6 (sumário executivo); AULA 12.pdf, slides “PEB - Dilemas futuros” e “PEB - Governos pós-1985”; AULA 13.pdf, slide “Objetivos Nacionais de Defesa”; AULA 14.pdf, slides “Economia Azul”, “SisGAAz” e “Ampliação da Capacidade de Apoio Logístico”; MAGNOLI, cap. 21.",
        competencia="Produzir a análise geopolítica completa do Brasil no formato ponderado do trabalho de T2.",
        erro="Descrever o país em vez de preencher a matriz, ou omitir os fatores dificultadores.",
        tempo=16),

    obj("M06", "N4", 16, topico=T,
        conceitos=["REL-T2-M06-C020", "REL-T2-M06-C019", "REL-T2-M01-C017"],
        enunciado="A fonte obrigatória da Aula 13 afirma que o Brasil transita da condição de potência regional para a de ator global, especialmente na diplomacia comercial e nas negociações internacionais sobre temas financeiros, e observa que, ao contrário de outros grandes emergentes, situa-se no hemisfério sul, longe dos principais polos de poder — situação com desvantagens e com oportunidades inéditas. Qual leitura é mais defensável?",
        alternativas=[
            "A transição descrita equivale à aquisição de capacidade militar de alcance global, uma vez que ator global e potência global são sinônimos.",
            "A transição é setorial e se dá nos terrenos que a própria fonte nomeia — diplomacia comercial e negociações financeiras —, e a distância dos polos de poder opera nos dois sentidos: reduz a exposição direta à rivalidade militar entre as grandes potências e, ao mesmo tempo, diminui o peso do país nas decisões estruturais; o instrumento coerente com essa posição é o que a trajetória brasileira já privilegia, isto é, ganhar margem pela diversificação de parceiros e pela atuação em regras, e não pela projeção de força.",
            "A distância dos polos de poder é apenas desvantagem, razão pela qual a política externa brasileira deveria buscar alinhamento estável com a potência dominante.",
            "A fonte sustenta que a América Latina deve se contrapor em bloco aos Estados Unidos, e o Brasil deve liderar essa contraposição.",
            "A transição descrita é incompatível com a herança de Rio Branco, que limitava a atuação brasileira ao entorno sul-americano.",
        ],
        correta=1,
        comentario="A questão testa a leitura fiel de uma afirmação qualificada. A fonte diz **em que terrenos** a transição ocorre — diplomacia comercial e negociações financeiras — e registra explicitamente que a posição no hemisfério sul tem desvantagens **e** oportunidades inéditas. Inflar “ator global” para capacidade militar global é ir além da fonte; reduzir a distância a puro prejuízo também é. A quarta alternativa inverte o texto: a fonte afirma que a contraposição chavista entre América Latina e Estados Unidos **não faz sentido** para o Brasil, que procura se reposicionar como ator global. E a quinta ignora que as heranças de Rio Branco — não-intervenção, solução pacífica, uso do direito e da negociação — são justamente os instrumentos compatíveis com atuação em regras.",
        distratores=[
            "Errada. A fonte delimita os terrenos da transição; não fala de capacidade militar global.",
            "Correta. Lê a afirmação com suas qualificações e extrai o instrumento coerente.",
            "Errada. A fonte registra desvantagens E oportunidades inéditas.",
            "Errada. A fonte afirma que a contraposição chavista não faz sentido para o Brasil.",
            "Errada. As heranças de Rio Branco são instrumentos de atuação por direito e negociação, compatíveis com inserção global.",
        ],
        fonte="MAGNOLI, cap. 21, abertura (“unidade e diversidade”, Brasil como ator global, posição no hemisfério sul); AULA 12.pdf, slides “Principais heranças do Barão do Rio Branco” e “Síntese tipológica”.",
        competencia="Ler afirmação qualificada sem inflar nem reduzir o que a fonte sustenta.",
        erro="Traduzir “ator global” como capacidade militar global.",
        tempo=5),
]

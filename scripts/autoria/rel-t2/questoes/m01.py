# -*- coding: utf-8 -*-
"""Banco do Módulo 01 — Política Externa Brasileira."""

from helper import obj, vf, cor, dis

T = "01-politica-externa-brasileira"

QUESTOES = [
    vf("M01", "N1", 1, topico=T,
       conceitos=["REL-T2-M01-C017"],
       afirmacao="Na síntese tipológica apresentada em aula, o período de autonomia pela distância vai da Política Externa Independente até os governos militares, incluindo o governo Castello Branco.",
       correta=False,
       comentario="**Falsa.** O slide diz “PEI até Governos Militares (**com exceção do período Castello**) — Autonomia pela distância”. Castello Branco é caracterizado como alinhamento automático com os EUA, o oposto funcional da autonomia pela distância. A exceção é a parte cobrável da afirmação: ela mostra que a tipologia classifica pela RELAÇÃO entre ambição e abertura, não pelo regime político.",
       fonte="AULA 12.pdf, slides “Síntese tipológica” e “PEB - Governos civis-militares (1964~1985)”.",
       competencia="Recuperar a tipologia da autonomia com a exceção que o slide registra.",
       erro="Incluir Castello Branco na autonomia pela distância por ser governo militar."),

    obj("M01", "N2", 2, topico=T,
        conceitos=["REL-T2-M01-C012", "REL-T2-M01-C007"],
        enunciado="O art. 4º da Constituição de 1988 lista os princípios que regem as relações internacionais do Brasil e traz um parágrafo único sobre integração. Sobre esse dispositivo, assinale a alternativa CORRETA.",
        alternativas=[
            "O parágrafo único estabelece que o Brasil buscará a integração econômica, política, social e cultural dos povos da América do Sul, visando à formação de uma comunidade sul-americana de nações.",
            "Entre os princípios do art. 4º estão a independência nacional, a autodeterminação dos povos, a não-intervenção e a solução pacífica dos conflitos, três dos quais correspondem a heranças diretas da atuação do Barão do Rio Branco.",
            "O art. 4º inclui, entre seus princípios, a defesa da Amazônia Azul e a manutenção do Atlântico Sul como zona de paz e cooperação.",
            "O repúdio ao terrorismo e ao racismo foi acrescentado ao art. 4º apenas depois de 2001, em resposta aos atentados daquele ano.",
            "Como o art. 4º trata de princípios, ele não produz consequência prática sobre os meios de ação disponíveis à política externa brasileira.",
        ],
        correta=1,
        comentario="O art. 4º lista dez princípios, e três deles — autodeterminação dos povos (III), não-intervenção (IV) e solução pacífica dos conflitos (VII) — reproduzem as heranças que o slide atribui a Rio Branco: princípio da não-intervenção, abordagem basicamente pacífica para litígios e boa vizinhança. A continuidade entre 1902-1912 e 1988 é a resposta ao Estudo Dirigido sobre por que a herança de Rio Branco segue importante.",
        distratores=[
            "Errada. O texto fala em América LATINA e em comunidade latino-americana de nações, não sul-americana. A troca é a pegadinha mais comum do dispositivo.",
            "Correta. Os três princípios correspondem às heranças de Rio Branco registradas no slide.",
            "Errada. Amazônia Azul e ZOPACAS não estão no art. 4º: são, respectivamente, conceito da Marinha e pressuposto da PND.",
            "Errada. O repúdio ao terrorismo e ao racismo é o inciso VIII do texto de 1988, anterior a 2001.",
            "Errada. Os princípios restringem o repertório de meios: um Estado obrigado à não-intervenção e à solução pacífica tem menos instrumentos disponíveis, o que é exatamente o dilema interesses × meios da abertura da aula.",
        ],
        fonte="AULA 12.pdf, slides “PEB - Constituição de 1988” e “Principais heranças do Barão do Rio Branco”.",
        competencia="Ler o art. 4º com precisão literal e ligá-lo às heranças de Rio Branco.",
        erro="Trocar “América Latina” por “América do Sul” no parágrafo único.",
        tempo=3),

    dis("M01", "N3", 3, topico=T,
        conceitos=["REL-T2-M01-C008", "REL-T2-M01-C009", "REL-T2-M01-C001", "REL-T2-M01-C002"],
        enunciado="No caso do Brasil, o alinhamento com a maior potência sempre apresentou resultados positivos? Responda comparando dois momentos concretos do corpus e explique o que determinou a diferença de resultado.",
        gabarito=(
            "**Tese.** Não. O resultado do alinhamento depende de o Brasil possuir, no momento, um ativo escasso e urgente para a potência — e não da intensidade do alinhamento.\n\n"
            "**Conceito.** O dilema de abertura da aula é interesses × meios de ação, mediados por circunstâncias e por capacidade. Alinhar-se é um meio; o retorno do meio depende da circunstância.\n\n"
            "**Evidência favorável (1930-1945).** Depois de uma política comercial pendular com EUA e Alemanha, o alinhamento se aprofundou com a II Guerra e rendeu contrapartidas concretas: a parceria da siderúrgica de Volta Redonda, a base dos EUA em Natal, a posição de 5º maior recebedor do Lend-Lease e o envio da FEB, sendo o Brasil o único país latino-americano a mandar tropas. O ativo era a posição estratégica do Nordeste: os aviões não tinham autonomia para voar diretamente para a África, o que tornava as bases brasileiras insubstituíveis e urgentes.\n\n"
            "**Evidência desfavorável (1952, Coreia).** Com o Acordo Militar de 1952, houve tentativa frustrada de reeditar os ganhos dos anos 1940, e o Brasil não enviou tropas à Guerra da Coreia. O alinhamento formal permaneceu; o retorno, não.\n\n"
            "**Nexo causal.** A diferença não está no grau de alinhamento, e sim na existência de um ativo escasso e insubstituível no momento da barganha. Em 1942 a geografia do Nordeste não tinha substituto técnico; em 1952 o Brasil não dispunha de ativo comparável a oferecer no teatro coreano. Alinhamento sem ativo é adesão sem barganha.\n\n"
            "**Nuance.** A OPA de Juscelino mostra a resposta brasileira a essa constatação: deslocar a barganha do terreno militar para o do desenvolvimento, buscando uma contrapartida que não dependesse de um ativo militar circunstancial.\n\n"
            "**Conclusão.** Alinhar-se é instrumento, não estratégia. O que converte alinhamento em ganho é a escassez do que se oferece, e isso é conjuntural — razão pela qual o mesmo meio produziu industrialização em 1942 e nada em 1952.\n\n"
            "**Resposta insuficiente:** “Não, porque em 1952 não deu certo.” Constata sem explicar. **Satisfatória:** apresenta os dois casos com seus resultados. **Nível MB:** apresenta os dois casos, nomeia o mecanismo (escassez e urgência do ativo) e mostra a resposta institucional posterior (OPA)."
        ),
        criterios=[
            "Responde diretamente à pergunta com tese explícita (0,1)",
            "Apresenta o caso de 1930-1945 com pelo menos três contrapartidas concretas (0,3)",
            "Apresenta o caso de 1952 e a Coreia como contraexemplo (0,2)",
            "Nomeia o mecanismo que explica a diferença: escassez e urgência do ativo oferecido (0,3)",
            "Conclui sem repetir mecanicamente a tese (0,1)",
            "Não pontua: responder “depende” sem os dois casos, ou listar fatos sem o nexo causal",
        ],
        fonte="AULA 12.pdf, slides “PEB - 1º Período Vargas (1930-1945)”, “POSIÇÃO ESTRATÉGICA DO BRASIL”, “PEB - Pós II GM (1946~1960)” e Estudo Dirigido (“No caso do Brasil, o alinhamento automático com a maior potência sempre apresentou resultados positivos? Exemplifique”).",
        competencia="Comparar dois momentos históricos e isolar a variável que explica a diferença de resultado.",
        erro="Responder pelo resultado sem identificar a variável (escassez do ativo) que o produziu.",
        tempo=12),

    obj("M01", "N3", 4, topico=T,
        conceitos=["REL-T2-M01-C014", "REL-T2-M01-C015", "REL-T2-M01-C017"],
        enunciado="Um Aspirante escreve: “A diferença entre FHC e Lula é que o primeiro aproximou o Brasil dos Estados Unidos e o segundo se afastou deles, voltando-se para a América do Sul.” Qual é a correção mais precisa dessa afirmação?",
        alternativas=[
            "A afirmação está correta quanto a FHC e incorreta quanto a Lula, cuja política externa manteve a mesma ênfase norte-americana de seu antecessor.",
            "A afirmação erra nas duas partes: FHC se caracteriza por autonomia pela participação e integração, de perfil multilateral, e Lula por autonomia pela diversificação em estratégia bifronte, que inclui a América Latina E o resto do mundo.",
            "A afirmação está correta nas duas partes, mas é incompleta por não mencionar que ambos assinaram o TNP.",
            "A afirmação erra apenas quanto a Lula, porque a diversificação implicou abandono da agenda sul-americana em favor da cooperação Sul-Sul extrarregional.",
            "A afirmação está correta, pois a rejeição à ALCA em Quebec, em 2001, marca o início do afastamento brasileiro em relação aos Estados Unidos.",
        ],
        correta=1,
        comentario="Os dois erros são os mais frequentes do módulo, e o primeiro está registrado literalmente na correção da SOPA da P1 (“ele errou em dizer que foi aproximação c os eua”). FHC é autonomia pela **participação e integração**: reinserção mais ativa no sistema econômico internacional e nos organismos internacionais, com abertura econômica — perfil multilateral, não bilateral com os EUA. E a rejeição à ALCA em Quebec, em 2001, é de FHC. Lula é autonomia pela **diversificação**, com estratégia **bifronte**: América Latina de um lado, resto do mundo de outro — não substituição de uma pela outra.",
        distratores=[
            "Errada. Erra nas duas partes, não em uma: o rótulo de FHC não é aproximação com os EUA.",
            "Correta. Corrige os dois erros com os rótulos do próprio slide.",
            "Errada. O TNP e o MTCR foram assinados no período FHC; atribuí-los a ambos é impreciso, e a afirmação principal continua errada.",
            "Errada. A estratégia bifronte não abandona a América Latina — é justamente o contrário.",
            "Errada. Quebec 2001 é de FHC, e não marca afastamento: é coerente com participação sem subordinação.",
        ],
        fonte="AULA 12.pdf, slides “PEB - Governos pós-1985” (FHC e Lula) e “Síntese tipológica”; Correção da SOPA da P1 (correção literal do erro sobre FHC); P1 REL 2024, questão 18.",
        competencia="Aplicar corretamente os rótulos da tipologia a FHC e Lula, recusando a leitura bilateral.",
        erro="Descrever FHC como aproximação com os EUA e Lula como abandono da região.",
        tempo=3),

    obj("M01", "N3", 5, topico=T,
        conceitos=["REL-T2-M01-C011", "REL-T2-M01-C001"],
        enunciado="Durante o período dos governos civis-militares, um governo anticomunista reconheceu a República Popular da China e a independência de Angola, firmou acordo nuclear com a Alemanha e denunciou o tratado militar com os Estados Unidos. Qual leitura explica melhor esse conjunto de decisões?",
        alternativas=[
            "Trata-se de incoerência ideológica do governo, já que as decisões contrariam a orientação anticomunista declarada internamente.",
            "Trata-se de subordinação da política externa à política interna, porque as decisões buscavam aplacar a oposição doméstica ao regime.",
            "Trata-se de pragmatismo: o cálculo de interesses e de meios de ação prevaleceu sobre a afinidade ideológica, ampliando parcerias e reduzindo dependência de um único fornecedor estratégico.",
            "Trata-se de alinhamento valorativo, categoria que descreve políticas externas ancoradas em afinidade de governo.",
            "Trata-se de autonomia pela participação, porque o governo buscou inserção mais ativa nos organismos internacionais.",
        ],
        correta=2,
        comentario="O slide dá nome ao conjunto: **Pragmatismo Responsável**, do período Geisel. A lição conceitual é que política externa e orientação ideológica interna podem divergir sem contradição, porque a primeira responde ao dilema interesses × meios. Reconhecer a China e Angola amplia parcerias; o acordo nuclear com a Alemanha e a denúncia do tratado militar com os EUA reduzem dependência de um fornecedor único de tecnologia sensível.",
        distratores=[
            "Errada. Não é incoerência: é subordinação do critério ideológico ao cálculo de interesse, que tem nome próprio no slide.",
            "Errada. Nada no corpus liga essas decisões a um cálculo de apaziguamento doméstico.",
            "Correta. É o Pragmatismo Responsável: interesse e meios acima de afinidade ideológica.",
            "Errada. Alinhamento valorativo é a categoria que o slide reserva ao período Bolsonaro durante o governo Trump.",
            "Errada. Autonomia pela participação é o rótulo de FHC, e o período em questão pertence à autonomia pela distância.",
        ],
        fonte="AULA 12.pdf, slides “PEB - Governos civis-militares (1964~1985)” e “Síntese tipológica”; AULA 12.pdf, slide “Dilemas básicos de uma Política Externa”.",
        competencia="Explicar decisões de política externa por cálculo de interesse, mesmo contra a orientação ideológica interna.",
        erro="Tratar divergência entre ideologia interna e política externa como incoerência.",
        tempo=3),

    obj("M01", "N4", 6, topico=T,
        conceitos=["REL-T2-M01-C022", "REL-T2-M01-C021", "REL-T2-M01-C012"],
        enunciado="Avalie as asserções a seguir. **I.** A adesão do Uruguai e do Paraguai ao Mercosul teve importância econômica reduzida e valor geopolítico elevado para o Brasil. **PORQUE** **II.** Desde a independência, Brasil e Argentina disputaram influência junto aos vizinhos menores da bacia platina, e a inclusão de ambos no mesmo arranjo institucional elimina uma fonte histórica de atrito entre os dois parceiros maiores.",
        alternativas=[
            "As asserções I e II são verdadeiras, e a II é uma justificativa da I.",
            "As asserções I e II são verdadeiras, mas a II não é uma justificativa da I.",
            "A asserção I é verdadeira, e a II é falsa.",
            "A asserção I é falsa, e a II é verdadeira.",
            "As asserções I e II são falsas.",
        ],
        correta=0,
        comentario="As duas são verdadeiras e a segunda explica a primeira. A asserção I reproduz a leitura de Magnoli: a participação dos dois vizinhos menores tem peso econômico pequeno e valor geopolítico alto. A asserção II fornece o mecanismo: a disputa Brasil-Argentina por influência sobre Uruguai, Paraguai e Bolívia atravessa toda a história independente — Travassos chegou a chamar Bolívia e Paraguai de “prisioneiros geopolíticos” da Argentina, e a soldagem de interesses por ferrovia, ponte, rodovia e Itaipu é parte dessa disputa. Trazer os dois para dentro do mesmo arranjo remove o objeto do atrito. É exatamente por isso que o valor é geopolítico.",
        distratores=[
            "Correta. O mecanismo da asserção II é a causa do valor geopolítico afirmado em I.",
            "Errada. Há relação causal direta: o valor geopolítico decorre da neutralização do atrito histórico.",
            "Errada. A asserção II é sustentada pelo corpus, inclusive pela operação geopolítica de Itaipu e da Ponte da Amizade.",
            "Errada. A asserção I é a leitura expressa da bibliografia obrigatória.",
            "Errada. Ambas são verdadeiras.",
        ],
        fonte="MAGNOLI, cap. 21, seção “Do Mercosul à Unasul” e seção “O Brasil e a América do Sul” (Travassos, prisioneiros geopolíticos, Itaipu); AULA 12.pdf, Estudo Dirigido sobre integração latino-americana.",
        competencia="Julgar asserção e razão distinguindo verdade das partes de existência do nexo causal.",
        erro="Negar o nexo por tratar a rivalidade platina como fato histórico sem consequência institucional.",
        tempo=4),

    dis("M01", "N4", 7, topico=T,
        conceitos=["REL-T2-M01-C012", "REL-T2-M01-C022", "REL-T2-M01-C018"],
        enunciado="Apresente uma razão institucional e uma razão de política pragmática para que o Brasil busque a integração da América Latina, e indique um limite dessa estratégia à luz dos dilemas futuros da política externa brasileira.",
        gabarito=(
            "**Tese.** A integração latino-americana é, para o Brasil, simultaneamente um dever constitucional e um cálculo de poder — e sua eficácia depende da funcionalidade do arranjo escolhido.\n\n"
            "**Razão institucional.** O parágrafo único do art. 4º da Constituição determina que a República Federativa do Brasil buscará a integração econômica, política, social e cultural dos povos da América Latina, visando à formação de uma comunidade latino-americana de nações. Não é opção de governo: é mandamento constitucional, coerente com os princípios de autodeterminação, não-intervenção e solução pacífica dos conflitos do mesmo artigo, que são heranças de Rio Branco.\n\n"
            "**Razão pragmática.** A integração amplia o poder de negociação do Brasil com o resto do mundo — formulação que a própria Declaração do Iguaçu registra como “urgente necessidade de que a América Latina reforce seu poder de negociação” — e neutraliza fontes históricas de atrito no entorno. Um entorno pacificado reduz a necessidade de dissuasão terrestre e libera o esforço de defesa para o Atlântico Sul e a Amazônia Azul, que são os vetores de projeção do país. A inclusão de Uruguai e Paraguai no Mercosul é o exemplo: peso econômico pequeno, valor geopolítico alto.\n\n"
            "**Limite.** A integração é instrumento, não fim, e pode perder funcionalidade. Magnoli registra que a adesão da Venezuela, concluída em 2012, expandiu o Mercosul para além do Cone Sul e para o espaço caribenho, mas ao mesmo tempo reduziu sua funcionalidade comercial e política, por passar a depender de consensos entre Brasil e Venezuela — agravado pela estrutura intergovernamental de Ouro Preto, que age apenas por consenso. Somado ao diagnóstico dos dilemas futuros (ambiente internacional incerto, competição interestatal crescente), o limite é claro: ampliar um bloco que decide por consenso pode reduzir a capacidade de decidir.\n\n"
            "**Conclusão.** O Brasil tem obrigação constitucional e interesse estratégico na integração, mas o retorno depende do desenho institucional: arranjo que só decide por unanimidade e se amplia sem convergência tende a converter ganho geopolítico em paralisia decisória.\n\n"
            "**Resposta insuficiente:** citar o art. 4º e dizer que “a união fortalece”. **Satisfatória:** apresenta as duas razões corretamente. **Nível MB:** apresenta as duas razões, nomeia o mecanismo de cada uma e identifica um limite com evidência (Venezuela 2012 e a regra do consenso)."
        ),
        criterios=[
            "Apresenta a razão institucional citando o parágrafo único do art. 4º com precisão (América Latina) (0,25)",
            "Apresenta a razão pragmática com mecanismo explícito: poder de negociação e/ou neutralização de atrito (0,25)",
            "Identifica um limite com evidência do corpus (0,3)",
            "Conclui articulando obrigação, interesse e desenho institucional (0,2)",
            "Não pontua: trocar América Latina por América do Sul; apresentar as duas razões sem distinguir institucional de pragmático",
        ],
        fonte="AULA 12.pdf, slides “PEB - Constituição de 1988” e “PEB - Dilemas futuros”, e Estudo Dirigido (“Por que o Brasil deve buscar a integração da América Latina? Dê uma razão institucional e outra de política pragmática”); MAGNOLI, cap. 21, seções “Do Mercosul à Unasul” e Declaração do Iguaçu.",
        competencia="Fundamentar a integração regional por duas vias distintas e reconhecer o limite do instrumento.",
        erro="Dar duas razões pragmáticas, ou citar o art. 4º sem o mandamento do parágrafo único.",
        tempo=12),

    obj("M01", "N2", 8, topico=T,
        conceitos=["REL-T2-M01-C006", "REL-T2-M01-C019"],
        enunciado="Sobre a chamada aliança “não-escrita” entre Brasil e Estados Unidos no final do século XIX e na primeira década do século XX, assinale a alternativa INCORRETA.",
        alternativas=[
            "Funcionou como anteparo a pretensões imperialistas da Grã-Bretanha, da França e dos Países Baixos, além de servir a interesses econômicos.",
            "Foi contemporânea da resolução, por via diplomática, das questões fronteiriças conduzidas pelo Barão do Rio Branco.",
            "Consistiu em tratado formal de assistência recíproca firmado entre os dois países, cujo primeiro equivalente institucional seria o TIAR.",
            "Conviveu com a preocupação principal do Brasil na República Velha, que era a modernização econômica e militar da Argentina.",
            "Beneficiou também os Estados Unidos, à medida que consolidava uma esfera de influência hemisférica coerente com a Doutrina Monroe.",
        ],
        correta=2,
        comentario="A alternativa incorreta é a única que transforma a aliança em tratado. O slide a qualifica como **não-escrita**, e é exatamente esse o ponto: o alinhamento produziu efeitos práticos sem instrumento jurídico. O TIAR só vem em 1947, quatro décadas depois, e é de natureza distinta — assistência recíproca hemisférica no contexto da Guerra Fria.",
        distratores=[
            "Correta e verdadeira. É a formulação do slide.",
            "Correta e verdadeira. É o mesmo período da chamada era Rio Branco.",
            "INCORRETA — resposta da questão. A aliança é não-escrita; não houve tratado.",
            "Correta e verdadeira. O slide registra a Argentina como preocupação principal do período.",
            "Correta e verdadeira. Magnoli lê o Sistema Interamericano como quadro que embasava a liderança dos EUA.",
        ],
        fonte="AULA 12.pdf, slides “PEB - República Velha (1889~1930)” (dois slides) e “Principais heranças do Barão do Rio Branco”; MAGNOLI, cap. 21 (Sistema Interamericano e TIAR).",
        competencia="Reconhecer a natureza informal da aliança e datar corretamente os instrumentos hemisféricos.",
        erro="Tratar a aliança não-escrita como tratado, confundindo-a com o TIAR.",
        tempo=3),
]

# -*- coding: utf-8 -*-
"""Banco do Módulo 99 — revisão final e comparações globais."""

from helper import obj, vf, cor, dis

T = "99-revisao-final"

QUESTOES = [
    cor("M99", "N3", 1, topico=T,
        conceitos=["REL-T2-M99-C001", "REL-T2-M99-C002", "REL-T2-M99-C004"],
        titulo="Correlacione cada condicionante geográfico ou instrumento marítimo ao ator a que corresponde",
        chaves=[
            ("A", "Brasil"),
            ("B", "Estados Unidos"),
            ("C", "China"),
            ("D", "Rússia"),
        ],
        itens=[
            ("Bioceanidade e planícies centrais com rios navegáveis interligados por canais e eclusas, com vizinhos de poder muito inferior.", "B"),
            ("Litoral concentrando 80% da população e 90% do PIB, sem rival estatal de peso comparável no entorno imediato.", "A"),
            ("Linha de igual precipitação separando litoral rico de interior pobre, com zonas tampão de altitude e aridez, e litoral fechado por cadeias de ilhas.", "C"),
            ("Planície aberta a oeste do centro político, com saídas marítimas congeladas ou dependentes de estreitos controlados por terceiros.", "D"),
            ("Instrumento marítimo dominante: jurisdição e consciência situacional sobre área de dimensão continental, com sistema integrado de gerenciamento.", "A"),
            ("Instrumento marítimo dominante: negação regional por cadeias de ilhas, somada a corredores terrestres alternativos e a um programa global de infraestrutura.", "C"),
            ("Instrumento marítimo dominante: projeção global sustentada por rede de bases, canais interoceânicos e alianças que somam a maioria das grandes marinhas.", "B"),
            ("Instrumento marítimo dominante: compensação de acesso deficiente, com doutrina de 2022 voltada ao Ártico e à rota setentrional, apesar de frota e indústria naval defasadas.", "D"),
        ],
        comentario="A matriz comparativa se resolve por uma pergunta só: **que tarefa a geografia permite e o instrumento cumpre?** O Brasil investe em JURISDIÇÃO, porque tem área imensa e nenhum rival próximo; os Estados Unidos, em PROJEÇÃO, porque têm acesso livre e aliados; a China, em NEGAÇÃO, porque tem acesso obstruído e precisa manter o adversário longe; a Rússia, em COMPENSAÇÃO, porque tem litoral extenso e acesso deficiente. Note a assimetria decisiva: Brasil e Estados Unidos têm acesso oceânico livre; China e Rússia, não — a primeira por cadeias de ilhas, a segunda por gelo e estreitos alheios.",
        fonte="AULA 14.pdf, slides “Economia Azul”, “SisGAAz” e “Programas Estratégicos”; AULA 15.pdf, mapas de formação geográfica e slides de estrutura de força naval; AULA 16.pdf, mapas de isoieta e topografia e slide “Mar do Sul da China - A2/AD”; AULA 17.pdf, slide “Imperativos Estratégicos”; ZOLOTOVA (GPF, 2022).",
        competencia="Preencher a matriz comparativa associando geografia e instrumento por ator.",
        erro="Comparar marinhas por número de meios em vez de por tarefa que a composição permite cumprir.",
        tempo=8),

    obj("M99", "N4", 2, topico=T,
        conceitos=["REL-T2-M99-C001", "REL-T2-M99-C007"],
        enunciado="Ao comparar os imperativos estratégicos de Brasil, Estados Unidos, China e Rússia, qual leitura é mais rigorosa?",
        alternativas=[
            "Todos os quatro têm imperativos expansionistas, diferindo apenas na capacidade de realizá-los.",
            "Os imperativos diferem em NATUREZA, e não apenas em escala: os da China são de preservação (integridade territorial, contenção da desigualdade interna, abertura sem desagregação); os do Brasil, de preservação e inserção (soberania, integridade, autonomia tecnológica, coesão, projeção no concerto das Nações); os dos Estados Unidos, de manutenção de hegemonia em degraus, culminando em evitar hegemon eurasiático; e os da Rússia, de recuperação de posição perdida (centro com tampões, Cazaquistão na área de influência, tentar acesso aos mares). Apenas os Estados Unidos têm um imperativo cujo objeto está fora do próprio hemisfério.",
            "Os imperativos são incomparáveis, porque documentos de defesa brasileiros e slides sobre potências estrangeiras têm naturezas distintas.",
            "Os quatro imperativos se reduzem à busca de acesso ao mar, uma vez que todos são Estados com litoral.",
            "Os imperativos da China e da Rússia são idênticos, pois ambos os países são potências continentais autoritárias com acesso marítimo restrito.",
        ],
        correta=1,
        comentario="Comparar não é ranquear: é isolar variáveis. E a variável que organiza a comparação é a **natureza** do imperativo. Três dos quatro atores têm imperativos de preservação ou de recuperação; só os Estados Unidos têm um imperativo de manutenção de hegemonia com objeto extra-hemisférico — evitar o surgimento de uma potência hegemônica na Eurásia. Esse detalhe explica por que a competição sistêmica é assimétrica: a China busca não se desagregar e prosperar; os Estados Unidos buscam impedir que alguém domine outro continente. A alternativa que iguala China e Rússia falha no essencial: o imperativo chinês depende de ABERTURA ao exterior para prosperar, enquanto o russo depende de CAMADA protetora — um precisa de fluxo, o outro de distância.",
        distratores=[
            "Errada. Três dos quatro são de preservação ou recuperação, não de expansão.",
            "Correta. Distingue a natureza de cada imperativo e identifica a assimetria do caso americano.",
            "Errada. A diferença de tipo documental exige cautela declarada, mas não impede a comparação — que é justamente o que o trabalho de T2 pede.",
            "Errada. Acesso ao mar é imperativo russo e condicionante chinês; para os Estados Unidos é instrumento, e para o Brasil é base econômica já disponível.",
            "Errada. O imperativo chinês exige abertura ao exterior; o russo exige camada protetora. São lógicas opostas.",
        ],
        fonte="AULA 13.pdf, slides “Objetivos Nacionais de Defesa”; AULA 15.pdf, slide “EUA - Imperativo Estratégico”; AULA 16.pdf, slide “China - Imperativo Estratégico”; AULA 17.pdf, slide “Imperativos Estratégicos”; T2_2025.pdf, item 2 do trabalho.",
        competencia="Comparar imperativos por natureza, e não por escala, declarando a assimetria relevante.",
        erro="Tratar todos os imperativos como expansionistas, ou igualar China e Rússia por serem continentais.",
        tempo=5),

    dis("M99", "N4", 3, topico=T,
        conceitos=["REL-T2-M99-C006", "REL-T2-M99-C005", "REL-T2-M00-C005", "REL-T2-M00-C006"],
        contexto="Um Estado insular de porte médio tem, como maior parceiro comercial, uma grande potência regional ascendente, de quem recebe também investimento relevante em energia, transportes, mineração e logística. Ao mesmo tempo, esse Estado integra acordos de segurança e de inteligência com uma potência marítima extrarregional e proíbe empresas de telecomunicações da potência vizinha de participar da sua infraestrutura de rede de nova geração.",
        enunciado="Explique a decisão, indicando a regra geral que ela ilustra sobre a tensão entre economia e segurança, e apresente o limite dessa regra.",
        gabarito=(
            "**Tese.** Quando a dependência econômica e a dependência de segurança apontam para atores diferentes, o vetor de segurança tende a prevalecer nas decisões estruturais — e é o que a proibição da infraestrutura de rede ilustra.\n\n"
            "**Conceito.** A tensão entre economia e segurança é uma das linhas da comparação global do curso. Nenhum dos quatro grandes atores escapa dela: o Brasil depende do mar para mais de 95% do comércio exterior e investe pouco em defesa; os Estados Unidos dependem de cadeias globais e adotam desacoplamento e tarifas; a China precisa de abertura para prosperar e teme a desagregação interna e o bloqueio de um estreito; a Rússia depende de receita de hidrocarbonetos e enfrenta sanções.\n\n"
            "**Evidência e nexo.** No caso descrito, o cálculo é geográfico antes de ser econômico. A geopolítica de uma ilha leva o Estado a se aliar à maior potência naval — mundial ou regional —, porque o que assegura a sua sobrevivência não é o fluxo comercial, e sim o controle das linhas de comunicação marítimas de que esse fluxo depende. Infraestrutura crítica de telecomunicações é, além disso, vetor de dependência estrutural e de vulnerabilidade informacional: não é bem substituível no curto prazo, ao contrário de um fluxo de commodities, que se redireciona. Acrescente-se que a potência extrarregional também é grande investidora na economia do país, o que reduz o custo econômico da escolha. Daí a regra: interesses de segurança se sobrepõem a interesses comerciais quando o ativo em jogo é estrutural e a substituição é difícil.\n\n"
            "**Lente teórica.** Predomina leitura realista: a decisão privilegia segurança e autonomia decisória sobre ganho econômico imediato, e o instrumento é a aliança. Há leitura liberal secundária, já que o Estado age dentro de arranjos institucionalizados de segurança e de inteligência; mas a razão declarada não é a maximização de ganhos mútuos.\n\n"
            "**Limite da regra.** A regra é **tendência observada, não lei**. Três limites. Primeiro, ela vale para decisões estruturais e de difícil reversão; em decisões correntes, o vetor comercial frequentemente prevalece — o mesmo Estado segue comerciando amplamente com o parceiro que excluiu da rede. Segundo, ela pressupõe que o aliado de segurança tenha capacidade efetiva de prover a proteção prometida: se essa capacidade for duvidosa, o cálculo muda, e é exatamente essa a variável dos cenários asiáticos, em que a força do arco de alianças é uma das duas forças-motrizes. Terceiro, a regra não diz QUANTO custo econômico o Estado aceita pagar: no caso, o custo foi mitigado pelo investimento da própria potência aliada.\n\n"
            "**Aplicação ao Brasil.** A regra é diretamente relevante ao dilema brasileiro de autonomia pela diversificação: um hemisfério tratado como zona de exclusão por competidores extra-hemisféricos eleva o custo de diversificar parceiros, e a decisão brasileira deixa de ser apenas comercial.\n\n"
            "**Conclusão.** A decisão ilustra a prevalência do vetor de segurança em ativos estruturais, e não a ruptura da relação comercial — o que é precisamente o que a regra permite prever e o seu limite obriga a qualificar.\n\n"
            "**Resposta insuficiente:** dizer que o país preferiu segurança a comércio. **Satisfatória:** explica a prevalência com o argumento da geografia insular. **Nível MB:** explica a prevalência, distingue ativo estrutural de fluxo substituível, escolhe a lente, apresenta ao menos dois limites da regra e aplica ao caso brasileiro."
        ),
        criterios=[
            "Enuncia a regra sobre prevalência do vetor de segurança em decisões estruturais (0,2)",
            "Explica o nexo pela geografia insular e pela dependência das linhas de comunicação marítimas (0,2)",
            "Distingue ativo estrutural de fluxo substituível (0,2)",
            "Apresenta pelo menos dois limites da regra (0,25)",
            "Aplica a regra ao dilema brasileiro de diversificação (0,15)",
            "Não pontua: afirmar a prevalência sem mecanismo; apresentar a regra como lei sem limite",
        ],
        fonte="Gabarito da P2 REL 2024, questão 18c (a “geopolítica de uma ilha” e a sobreposição dos interesses de segurança aos comerciais — objeto geopolítico análogo, com enunciado e comando distintos); AULA 15.pdf, slide “Cenários — Forças-motrizes”; AULA 14.pdf, slides “Economia Azul”; AULA 12.pdf, slide “PEB - Dilemas futuros”.",
        competencia="Enunciar uma regra a partir de caso, aplicá-la e delimitar seus limites.",
        erro="Apresentar a tendência observada como lei, sem limites e sem condição de aplicação.",
        tempo=15),

    obj("M99", "N2", 4, topico=T,
        conceitos=["REL-T2-M99-C008", "REL-T2-M00-C016"],
        enunciado="Faltando poucas horas para a avaliação, qual protocolo de revisão tem maior retorno esperado, considerando o perfil de cobrança inferido do corpus?",
        alternativas=[
            "Reler integralmente os seis decks, na ordem em que foram apresentados, para garantir cobertura completa.",
            "Recuperar primeiro as listas fechadas — art. 4º da CF/88, Objetivos Nacionais de Defesa, Capacidades Nacionais de Defesa, tarefas básicas do Poder Naval, elementos, funções e condicionantes do Poder Marítimo, imperativos dos quatro atores —, depois treinar os formatos de comando invertido e de asserção e razão, e por fim escrever uma resposta em seis movimentos cronometrada.",
            "Memorizar as datas de todos os eventos históricos dos seis módulos, uma vez que o detalhismo é classificado como alto.",
            "Resolver o maior número possível de questões de provas anteriores, reproduzindo seus gabaritos.",
            "Concentrar toda a revisão na parte brasileira, já que os três módulos iniciais somam mais conceitos que os três finais.",
        ],
        correta=1,
        comentario="O protocolo segue o perfil de cobrança. Listas fechadas são o que se perde primeiro sob pressão e o que rende ponto direto, tanto em objetiva quanto como elemento exigido em discursiva — e a correção observada no corpus é por elementos faltantes (“faltou mencionar”). Formato vem em segundo porque neutralizar comando invertido e asserção e razão vale mais que um conceito extra. A resposta cronometrada vem por último porque integra tudo. Relê-se deck na ordem apresentada quando há tempo; na véspera, não há. E memorizar todas as datas contraria o próprio perfil: a memorização é média e SUBORDINADA à aplicação.",
        distratores=[
            "Errada. Releitura linear é a atividade de menor retorno por minuto na véspera.",
            "Correta. Listas fechadas, depois formato, depois escrita cronometrada.",
            "Errada. O detalhismo é alto quanto a distinções conceituais, não quanto a datas isoladas; a memorização é subordinada à aplicação.",
            "Errada. Reproduzir gabarito antigo não treina aplicação inédita, que é o eixo mais alto do perfil.",
            "Errada. Número de conceitos não mede peso de prova, e a comparação entre os quatro atores exige os seis módulos.",
        ],
        fonte="perfil-cobranca.json (memorização média e subordinada; correção por elementos); Correção da SOPA da P1 (“faltou mencionar”); T2_2025.pdf; SOPA REL T1 2024 e Gabarito da P2 REL 2024 (formatos).",
        competencia="Sequenciar a revisão de véspera pelo retorno esperado, conforme o perfil de cobrança.",
        erro="Gastar a véspera em releitura linear em vez de recuperação ativa de listas fechadas.",
        tempo=3),

    dis("M99", "N3", 5, topico=T,
        conceitos=["REL-T2-M99-C007", "REL-T2-M99-C003", "REL-T2-M00-C003"],
        enunciado="Caso a avaliação seja um trabalho em grupo de análise geopolítica de uma nação, nos termos praticados em 2025, apresente o roteiro que você seguiria para os itens de maior peso: os três principais objetivos ou desafios geoceanopolíticos da nação estudada, com fatores facilitadores e dificultadores, situação atual da nação e do sistema internacional, e perspectiva de alteração futura. Use um dos quatro atores do curso como exemplo.",
        gabarito=(
            "**Observação ao corretor.** Qualquer dos quatro atores pontua integralmente. A resposta-modelo usa a Rússia. O que se avalia é o ROTEIRO e o nexo, não a escolha do país.\n\n"
            "**Roteiro em seis passos, derivado da matriz de dez passos do curso.**\n\n"
            "**1. Selecionar três objetivos ou desafios, e não descrever o país.** Para a Rússia: (a) manter o centro Europa-Urais protegido por camada tampão; (b) obter acesso utilizável ao mar; (c) obter dinamismo econômico que não dependa apenas de petróleo e gás. Os três estão declarados no corpus, o que os torna defensáveis.\n\n"
            "**2. Para cada um, nomear o condicionante que o produz.** (a) Planície que se estende da Alemanha, passa pela Polônia e chega à Rússia, sem acidente geográfico que barre avanço terrestre. (b) Pacífico setentrional congelado boa parte do tempo; Mar Negro dependente de Bósforo e Dardanelos, sob controle turco; Báltico cercado por países da aliança adversária e com estreito controlado pela Dinamarca — problema repetido em Kaliningrado. (c) Estrutura produtiva concentrada em hidrocarbonetos.\n\n"
            "**3. Separar facilitadores de dificultadores, para cada objetivo.** Facilitadores: profundidade territorial e memória estratégica que sustenta apoio interno a políticas de segurança; base de recursos naturais; prioridade orçamentária declarada, como o compromisso de cerca de 1,8 trilhão de rublos com a rota setentrional até 2035. Dificultadores: perda dos tampões com a fragmentação da URSS em 1991 e as ondas posteriores de adesão à OTAN, inclusive Suécia e Finlândia até meados de 2024, esta com fronteira terrestre direta; frota muito inferior à soviética e estaleiros defasados, com dependência de 40% a 85% de componentes importados no setor civil; poucas bases no exterior; demografia em retração e envelhecimento.\n\n"
            "**4. Situar a nação E o sistema internacional, separadamente.** Nação: economia sob sanções, dependência crescente da China, contradição declarada entre conter a expansão chinesa na Ásia Central e manter aliança tática com a China. Sistema: competição interestatal crescente; aumento de 20% nos gastos militares da OTAN em 2025, com 574 bilhões de dólares e nova meta de 3,5% do PIB até 2035 mais 1,5% em segurança; e disputa aberta por rotas e recursos no Ártico, onde convergem interesses de três potências militares.\n\n"
            "**5. Projetar alteração futura ancorada em mecanismo, não em opinião.** Para (b), a variável crítica é o degelo: rotas setentrionais mais navegáveis aumentariam o valor do único acesso que não depende de estreito alheio, o que tenderia a deslocar esforço para o Ártico — tendência já registrada na doutrina marítima de 2022, que desloca a prioridade do Atlântico para o Ártico e o Pacífico. Para (c), a variável crítica é o preço e o destino dos hidrocarbonetos: quanto mais a receita se concentra em um único comprador, mais o objetivo (b) se subordina ao parceiro que o financia. Cada projeção deve nomear a variável que a controla e dizer em que direção ela empurra.\n\n"
            "**6. Fechar com sumário executivo, em um ou dois parágrafos.** Enunciar o que foi pesquisado e os principais resultados, sem repetir o desenvolvimento, e declarar o limite da análise: comparações entre atores de escalas distintas servem para isolar variáveis, não para ranquear; e as fontes usadas incluem análises com posição declarada, identificadas como tais.\n\n"
            "**Erro que o roteiro evita.** Descrever o país em lugar de analisar objetivos; listar facilitadores e dificultadores sem dizer em que direção cada um empurra a decisão; e projetar futuro sem nomear a variável que controla a projeção.\n\n"
            "**Insuficiente:** apresentar três objetivos sem condicionante nem fator. **Satisfatória:** apresenta os três com facilitadores e dificultadores. **Nível MB:** apresenta os três, separa nação de sistema, ancora cada projeção em uma variável nomeada e declara o limite da análise."
        ),
        criterios=[
            "Seleciona três objetivos ou desafios declarados no corpus, e não descreve o país (0,2)",
            "Nomeia o condicionante que produz cada objetivo (0,2)",
            "Separa facilitadores de dificultadores, dizendo a direção em que cada um empurra (0,2)",
            "Situa nação e sistema internacional separadamente, com ao menos um dado (0,15)",
            "Projeta alteração futura nomeando a variável que a controla (0,15)",
            "Fecha com sumário executivo e declara o limite da análise (0,1)",
            "Não pontua: descrever o país em vez de analisar objetivos; projetar futuro sem mecanismo",
        ],
        fonte="T2_2025.pdf, itens 2 e 6 do trabalho (pesos 2,0 e 1,0); AULA 17.pdf, slides “Imperativos Estratégicos”, “Desafios para a Rússia” e “OTAN em 2024”; ZOLOTOVA (GPF, 2022); matriz-cobertura.json (matriz de dez passos).",
        competencia="Estruturar a análise geopolítica de uma nação no formato exigido pelo trabalho, com mecanismo e limite.",
        erro="Descrever o país em vez de analisar objetivos e desafios.",
        tempo=16),
]

# ── Questões de fechamento de cobertura ───────────────────────────────────
# Cobrem, por integração, conceitos examináveis dos módulos 01, 03, 04, 05 e 06
# que a matriz registrava sem vínculo de questão.

QUESTOES += [
    cor("M99", "N2", 6, topico=T,
        conceitos=["REL-T2-M01-C003", "REL-T2-M01-C004", "REL-T2-M01-C005", "REL-T2-M01-C010",
                   "REL-T2-M01-C013", "REL-T2-M01-C016", "REL-T2-M01-C020"],
        titulo="Correlacione cada marco ao período da política externa brasileira a que pertence",
        chaves=[
            ("A", "Colônia"),
            ("B", "Império — 1ª fase (1822-1850)"),
            ("C", "Império — 2ª fase (1850-1889)"),
            ("D", "Política Externa Independente (1961-1964)"),
            ("E", "Sarney, Collor e Itamar (transição)"),
            ("F", "Bolsonaro"),
        ],
        itens=[
            ("Aliança com a Inglaterra desde o século XIV e ameaças de Espanha, França e Províncias Unidas sobre o Prata, o litoral e a Amazônia.", "A"),
            ("Reconhecimento do país, Guerra da Cisplatina e a proibição inglesa ao tráfico negreiro, com a Grã-Bretanha declinante e os EUA ascendentes.", "B"),
            ("Guerra do Paraguai, livre navegação no rio Amazonas e Questão Christie, com apoio norte-americano crescente a partir da década de 1870.", "C"),
            ("Ênfase nos três D — desarmamento, descolonização e desenvolvimento — e retomada das relações diplomáticas com a URSS.", "D"),
            ("ZOPACAS em 1986, reatamento com Cuba, distensão com a Argentina e, na sequência, Mercosul em 1991 e Rio 92.", "E"),
            ("Alinhamento valorativo durante o governo Trump e distanciamento cauteloso durante o governo Biden.", "F"),
            ("Cepal, Alalc pelo Tratado de Montevidéu de 1960 e sua substituição pela Aladi em 1980, com metas mais flexíveis.", "E"),
        ],
        comentario="A correlação organiza o módulo 01 por período e força a distinção entre marcos próximos. Três cuidados. O item da aliança inglesa vai para **A** porque o slide a data desde o século XIV, e não do século XIX. Os itens do Prata se dividem: Cisplatina e tráfico negreiro são da 1ª fase; Paraguai, Amazonas e Questão Christie, da 2ª. E o item de Cepal, Alalc e Aladi vai para **E** não por ser criação daquele período, mas porque é o legado institucional que a transição herda e reformula: o Mercosul de 1991 nasce justamente do reconhecimento do fracasso dessas tentativas anteriores, cujo mecanismo Magnoli identifica na ironia de que a ênfase generalizada em substituição de importações limitou o próprio comércio intrabloco.",
        fonte="AULA 12.pdf, slides “Precedentes históricos — Colônia”, “PEB — Império – 1ª fase”, “PEB - Império - 2ª fase (1850~1889)”, “PEB - Política Externa Independente (1961~1964)” e “PEB - Governos pós-1985”; MAGNOLI, cap. 21, seção “Invenção da América Latina”.",
        competencia="Situar marcos da política externa brasileira no período correto, distinguindo fases próximas.",
        erro="Fundir as duas fases do Império, ou datar a aliança inglesa no século XIX.",
        tempo=8),

    cor("M99", "N2", 7, topico=T,
        conceitos=["REL-T2-M03-C002", "REL-T2-M03-C004", "REL-T2-M03-C006", "REL-T2-M03-C015",
                   "REL-T2-M03-C018", "REL-T2-M03-C021"],
        titulo="Correlacione cada enunciado ao documento, programa ou corrente a que pertence",
        chaves=[
            ("A", "Política Naval — fundamento e premissas"),
            ("B", "Política Naval — resultados para a sociedade e processos"),
            ("C", "Programa Fragata Classe Tamandaré"),
            ("D", "Programa Mentalidade Marítima"),
            ("E", "Oceanopolítica (leitura complementar)"),
        ],
        itens=[
            ("O eventual enfrentamento de antagonismos deve ocorrer de forma soberana, de acordo com os princípios e fundamentos constitucionais e as normas do Direito Internacional.", "A"),
            ("Prioridade ao relacionamento com os países detentores de maiores capacidades tecnológicas, e busca de maior representatividade em fóruns regionais, inter-regionais e globais.", "A"),
            ("Contribuir para a Defesa da Pátria, prover a Segurança Marítima, cooperar com o desenvolvimento nacional e apoiar a política externa; e, entre os processos, ampliar a consciência situacional marítima nas áreas de interesse.", "B"),
            ("Execução pela Emgepron com a SPE Águas Azuis, e construção das quatro embarcações da primeira fase no Estaleiro Brasil Sul, em Itajaí.", "C"),
            ("Atuação em três níveis: comunicação estratégica para avivar a consciência de que o Brasil começou pelo mar; promoção de pensamento estratégico marítimo autóctone junto a atores governamentais; e foco nos homens e mulheres do mar, núcleo maduro do Poder Marítimo.", "D"),
            ("Fronteira integral como linha permanente onde se chocam interesses opostos dos Estados, de modo que há tantas fronteiras quantos interesses — e quanto mais desenvolvido o Estado, mais fronteiras e mais poder exigido para mantê-las.", "E"),
            ("Deslocamento dos conflitos por recursos e espaços do plano terrestre para o plano oceânico, agravado pela assimetria no acesso ao conhecimento técnico-científico sobre os oceanos.", "E"),
        ],
        comentario="Duas distinções decidem a correlação. A primeira separa o **fundamento e as premissas** da Política Naval — como o país deve enfrentar antagonismos e com quem deve se relacionar — dos seus **resultados e processos**, que compõem o mapa estratégico da Marinha, paralelo ao Mapa Estratégico Setorial do Ministério da Defesa. A segunda separa o que é documento institucional brasileiro do que é **leitura acadêmica complementar**: fronteira integral e o deslocamento do conflito do plano terrestre para o oceânico são conceitos da linha oceanopolítica, não da Política Naval — e o erro de atribuí-los a documento oficial custa ponto em resposta discursiva, porque muda a autoridade invocada.",
        fonte="AULA 14.pdf, slides “Política Naval” (fundamento, premissas e resultados), “Programa Fragata Classe Tamandaré” e “Mentalidade Marítima”; MORE, seções 2, 3 e 3.1 (fronteira integral de Martinez Busch e o deslocamento dos conflitos).",
        competencia="Atribuir cada enunciado ao documento institucional ou à leitura acadêmica correta.",
        erro="Atribuir conceito de leitura complementar a documento oficial da Marinha.",
        tempo=8),

    obj("M99", "N2", 8, topico=T,
        conceitos=["REL-T2-M04-C001", "REL-T2-M04-C002", "REL-T2-M05-C001", "REL-T2-M05-C004",
                   "REL-T2-M05-C005", "REL-T2-M05-C009", "REL-T2-M06-C002", "REL-T2-M06-C008"],
        enunciado="Aponte a alternativa que contém apenas afirmações CORRETAS sobre a formação territorial e histórica dos três atores extrarregionais estudados. **I.** A expansão norte-americana combinou compra (Louisiana da França em 1803, Flórida da Espanha em 1819, Alasca da Rússia em 1867), tratado com o Reino Unido (1818, 1842 e 1846) e guerra com o México, sendo as planícies centrais com os rios Mississippi e Missouri o fator que facilitou o avanço para oeste. **II.** Na China, a primeira dinastia com registro escrito e evidência arqueológica é a Shang, e foi a Qin que promoveu a primeira unificação, com governo burocrático centralizado e padronização de pesos, moedas e escrita. **III.** O litígio do platô de Doklam opõe a China a Bangladesh, enquanto Aksai Chin e Arunachal Pradesh são disputas com o Japão. **IV.** Na Rússia, o Grão-Ducado de Moscou se consolida entre 1390 e 1530, com Moscou como centro político e religioso por efeito da ocupação mongol sobre Kiev, e o Império Russo, a partir de 1721, alcança sua maior extensão sob Pedro o Grande. **V.** O Grande Jogo do século XIX opôs o Império Britânico e o Império Russo no contexto de uma China enfraquecida, disputando o controle de tampões como o Afeganistão e o acesso russo às águas quentes.",
        alternativas=[
            "I, II e III.",
            "I, II, IV e V.",
            "II, III e IV.",
            "I, III e V.",
            "III, IV e V.",
        ],
        correta=1,
        comentario="O único item incorreto é o **III**, e ele contém dois erros. O platô de Doklam é litígio com o **Butão** — o próprio mapa do deck rotula Bhutan —, e não com Bangladesh; esse é um erro que aparece em resumo de Aspirante e está sinalizado no curso. E Aksai Chin e Arunachal Pradesh são litígios com a **Índia**, nos setores ocidental e oriental respectivamente; com o Japão a disputa é pelas ilhas Diaoyu, que os japoneses chamam Senkaku. Os demais itens são corretos: I reproduz a legenda do mapa de expansão territorial e a leitura das planícies; II corrige a atribuição frequente da primeira dinastia à Zhou, que na verdade é a dinastia do conceito de Mandato do Céu; IV e V reproduzem a formação territorial russa e o Grande Jogo, que é o precedente direto do desafio contemporâneo na Ásia Central.",
        distratores=[
            "Errada. O item III é incorreto em dois pontos.",
            "Correta. Apenas o item III é incorreto.",
            "Errada. O item III é incorreto.",
            "Errada. O item III é incorreto e o item II, correto, ficou de fora.",
            "Errada. O item III é incorreto.",
        ],
        fonte="AULA 15.pdf, mapa “Estados Unidos: expansão territorial”; AULA 16.pdf, slides das dinastias, “China recente” e mapas dos litígios; AULA 17.pdf, slides “Grão-Ducado de Moscou”, “Império Russo” e “O Grande Jogo (século XIX)”; REL - T2.pdf, leitura dos mapas; fontes-manifesto.json, conflito CF-04.",
        competencia="Verificar precisão factual sobre formação territorial e litígios dos três atores extrarregionais.",
        erro="Situar o platô de Doklam como litígio com Bangladesh e Aksai Chin com o Japão.",
        tempo=5,
        extra_assinatura=["integração entre módulos 04, 05 e 06"]),
]

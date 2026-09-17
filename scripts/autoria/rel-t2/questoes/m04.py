# -*- coding: utf-8 -*-
"""Banco do Módulo 04 — Estados Unidos."""

from helper import obj, vf, cor, dis

T = "04-estados-unidos"

QUESTOES = [
    vf("M04", "N1", 1, topico=T,
       conceitos=["REL-T2-M04-C004"],
       afirmacao="A Doutrina Monroe, de 1823, constituiu-se como tratado internacional negociado entre os Estados Unidos e as repúblicas americanas recém-independentes, o que explica sua permanência como princípio de política externa.",
       correta=False,
       comentario="**Falsa.** A Doutrina Monroe não foi pacto negociado nem tratado internacional: foi **declaração unilateral**, formulada em mensagem presidencial ao Congresso dos Estados Unidos, cuja eficácia derivou da assimetria de poder que permitiu converter um enunciado político em princípio durável de política externa. A permanência não vem de força jurídica, e sim da sua **dupla natureza** — simultaneamente anticolonial (contra a intervenção europeia) e hegemonista (organizando o hemisfério em torno de um Estado-diretor). Magnoli registra ainda que, na prática, a independência das antigas colônias espanholas era assegurada pela hegemonia britânica nos mares: a declaração indicava a ambição, não a capacidade.",
       fonte="HAESBAERT & SANTA BÁRBARA (2026), seção sobre a Doutrina Monroe; MAGNOLI, cap. 21, p. 344-345; AULA 15.pdf, slide “EUA - Expansão, Doutrina Monroe”.",
       competencia="Reconhecer a natureza unilateral e a dupla natureza da Doutrina Monroe.",
       erro="Tratar a Doutrina Monroe como tratado ou pacto negociado."),

    obj("M04", "N2", 2, topico=T,
        conceitos=["REL-T2-M04-C008"],
        enunciado="Os Estados Unidos correspondiam a cerca de 27% do PIB mundial em 1945 e a aproximadamente 20% atualmente. Sobre a interpretação desse dado, assinale a alternativa CORRETA.",
        alternativas=[
            "O dado demonstra declínio absoluto, uma vez que houve redução mensurável da participação americana na economia mundial.",
            "O dado caracteriza declínio relativo, e precisa ser lido junto de indicadores que permanecem favoráveis: supremacia militar, com uma Marinha equivalente às 12 maiores marinhas seguintes, das quais 9 são aliadas; supremacia financeira, com o dólar como moeda-padrão; liderança em inovação tecnológica e capital humano; e mercado de trabalho flexível, que acelera a superação de crises.",
            "O dado é irrelevante para a análise de poder, porque participação no PIB mundial não guarda relação com capacidade militar.",
            "O dado demonstra que os Estados Unidos deixaram de ser potência hegemônica, condição que passou à China a partir de sua entrada na OMC.",
            "O dado indica crescimento absoluto e relativo, já que a economia americana cresceu em termos nominais no período.",
        ],
        correta=1,
        comentario="Perder participação em um mundo que cresceu é declínio **relativo**, não absoluto: os outros cresceram mais. A distinção é a mais cobrável do módulo porque produz alternativas parcialmente verdadeiras. E a leitura correta exige a cláusula que quase todos esquecem: a supremacia naval americana é potencializada por **alianças** — das 12 maiores marinhas seguintes, 9 são aliadas. É o que torna o arco de alianças a variável crítica dos cenários asiáticos: é ela, e não o PIB, que o declínio ameaçaria primeiro.",
        distratores=[
            "Errada. Declínio absoluto seria redução do poder em si, e não da fração relativa.",
            "Correta. Declínio relativo, com os indicadores de força e a cláusula das alianças.",
            "Errada. Base econômica é condição de sustentação de esquadra, indústria e inovação.",
            "Errada. Nada no corpus sustenta transferência de hegemonia; o próprio slide mantém os indicadores de supremacia.",
            "Errada. Confunde crescimento nominal com participação relativa, que é o que o dado mede.",
        ],
        fonte="AULA 15.pdf, slide “Declínio?”; REL - T2.pdf, seção sobre conjuntura e situação dos EUA (declínio relativo, tripla hélice).",
        competencia="Distinguir declínio relativo de absoluto e ler o dado com os indicadores de força.",
        erro="Concluir declínio absoluto a partir da queda de participação no PIB mundial.",
        tempo=3),

    obj("M04", "N3", 3, topico=T,
        conceitos=["REL-T2-M04-C009", "REL-T2-M00-C014"],
        enunciado="Avalie as asserções. **I.** Spykman explica em grande parte o raciocínio geopolítico atual dos Estados Unidos em relação ao mundo. **PORQUE** **II.** O controle geopolítico da América do Sul e do Caribe é a explicação completa da projeção de poder americana no restante do mundo. Assinale a alternativa CORRETA.",
        alternativas=[
            "As asserções I e II são verdadeiras, e a II é a explicação completa da I.",
            "A asserção I é verdadeira, e a II é falsa, porque o controle da América do Sul e do Caribe é PRÉ-REQUISITO da projeção global, e não sua explicação completa: o imperativo estratégico americano tem quatro degraus, e o último é evitar o surgimento de uma potência hegemônica na Eurásia.",
            "A asserção I é falsa, e a II é verdadeira.",
            "As asserções I e II são falsas.",
            "As asserções I e II são verdadeiras, mas a II não guarda qualquer relação com a I.",
        ],
        correta=1,
        comentario="Esta é a armadilha mais fina do formato, e o corpus a usa: a palavra **completa** muda o gabarito. Spykman de fato explica o raciocínio americano — consolidar a hegemonia nas Américas para depois conter a potência eurasiática pelas fímbrias. Mas o slide lista **quatro** degraus do imperativo: América do Norte; América do Sul e Caribe; domínio dos oceanos que banham as duas costas, vistos como instrumento de projeção e de livre comércio; e evitar hegemon na Eurásia. Um degrau é condição necessária, não explicação suficiente. Note também que a alternativa E é falsa por outro motivo: há relação, e ela é de precedência.",
        distratores=[
            "Errada. A palavra “completa” torna a segunda asserção falsa.",
            "Correta. Pré-requisito não é explicação completa; o imperativo tem quatro degraus.",
            "Errada. A asserção I é sustentada pelo slide e pela leitura complementar.",
            "Errada. A asserção I é verdadeira.",
            "Errada. Há relação, e é de precedência: a retaguarda hemisférica antecede a projeção global.",
        ],
        fonte="AULA 15.pdf, slides “EUA - Imperativo Estratégico” e “Expansão geopolítica”; REL - T2.pdf, os quatro itens do imperativo estratégico dos EUA; SOPA REL T1 2024, questão 10 (mesmo formato, com asserções e gabarito distintos).",
        competencia="Julgar nexo causal atentando para a exigência de explicação completa.",
        erro="Aceitar um pré-requisito como explicação completa.",
        tempo=4),

    obj("M04", "N3", 4, topico=T,
        conceitos=["REL-T2-M04-C003", "REL-T2-M04-C005", "REL-T2-M04-C006", "REL-T2-M00-C013"],
        enunciado="Qual encadeamento reconstrói corretamente a passagem dos Estados Unidos de potência continental a potência marítima?",
        alternativas=[
            "Doutrina Monroe (1823) → Corolário Roosevelt (1904) → fechamento da fronteira interna → Guerra Civil → Mahan → Canal do Panamá.",
            "Expansão territorial e fechamento da fronteira interna, diagnosticado na tese da fronteira de Turner (1893) → consolidação de um modelo industrial-financeiro com a vitória do Norte na Guerra Civil → formulação de Mahan sobre o poder marítimo (1890) e a Guerra Hispano-Americana (1898) → tradução política por Theodore Roosevelt, com o Canal do Panamá e o Corolário de 1904 → o Caribe como mare nostrum após a inauguração do canal em 1914.",
            "Guerra Civil → Doutrina Monroe → tese da fronteira de Turner → Grande Esquadra Branca → anexação do Havaí → Spykman.",
            "Compra da Louisiana (1803) → Corolário Polk (1845) → Mahan → tese da fronteira de Turner → Guerra Civil → Canal do Panamá.",
            "Guerra Hispano-Americana (1898) → Guerra Civil → Destino Manifesto → Doutrina Monroe → Corolário Roosevelt.",
        ],
        correta=1,
        comentario="O encadeamento correto não é uma lista cronológica: é uma cadeia causal. A fronteira interna se fecha e se esgota economicamente, o que desloca a lógica expansionista do espaço continental para o marítimo e externo — exatamente o diagnóstico de Turner. A Guerra Civil, com a vitória do modelo industrial-financeiro do Norte, fornece a base material: mercado interno ampliado, mercado financeiro forte e inovação industrial. Mahan formula a teoria e a Guerra Hispano-Americana fornece a oportunidade. Roosevelt, admirador declarado de Mahan, traduz a teoria em ação: intervenção na Colômbia, secessão do Panamá garantida com navios de guerra, canal e o Corolário de 1904, com o Caribe tomado como “mediterrâneo americano”. Depois de 1914, o Caribe se torna espécie de mare nostrum.",
        distratores=[
            "Errada. Inverte causa e consequência: o Corolário Roosevelt é efeito da virada marítima, não sua causa.",
            "Correta. É a cadeia causal, com base material, teoria, oportunidade e tradução política.",
            "Errada. A Doutrina Monroe antecede a Guerra Civil em quatro décadas.",
            "Errada. Põe Mahan (1890) antes de Turner (1893) na cadeia causal e a Guerra Civil depois de ambos.",
            "Errada. Ordem cronologicamente impossível.",
        ],
        fonte="AULA 15.pdf, slides “EUA - Destino Manifesto (embasamento)”, “EUA - Guerra Civil” e “Expansão geopolítica”; HAESBAERT & SANTA BÁRBARA (2026), seções sobre Turner, Mahan e o Corolário Roosevelt; REL - T2.pdf, seção sobre expansão geopolítica.",
        competencia="Reconstruir a virada marítima americana como cadeia causal, e não como cronologia.",
        erro="Ordenar os eventos por data sem identificar a relação de causa entre eles.",
        tempo=4),

    cor("M04", "N3", 5, topico=T,
        conceitos=["REL-T2-M04-C013", "REL-T2-M04-C012"],
        titulo="Correlacione cada descrição ao cenário para o Leste e Sudeste Asiáticos",
        chaves=[
            ("A", "Cria Cuervos"),
            ("B", "Concerto Asiático"),
            ("C", "Casa sem Dono"),
            ("D", "Império do Meio II"),
        ],
        itens=[
            ("A economia chinesa desacelera e a China enfrenta tensões internas, deixando de se impor na região; as demais potências asiáticas não veem mais necessidade da permanência ostensiva dos Estados Unidos e desenvolvem políticas nacionalistas contrárias aos interesses americanos.", "A"),
            ("Os Estados Unidos perdem capacidade de influenciar decisivamente na região e a China estabelece uma nova ordem sinocêntrica, mas com países recalcitrantes: Japão, Índia e Rússia.", "D"),
            ("A desaceleração chinesa impede a projeção de poder de antes e um presidente isolacionista imprime política de retirada militar das tropas na Ásia; as potências asiáticas remanescentes se engalfinham pela hegemonia regional, com diversas alianças e contra-alianças.", "C"),
            ("Configuração semelhante ao Concerto Europeu do século XIX, com uma potência externa presente e um equilíbrio delicado entre as potências asiáticas para evitar um conflito maior; o desdobramento pode ser um conflito futuro, por se tratar de equilíbrio instável.", "B"),
        ],
        comentario="As duas forças-motrizes são o nível de expansão da economia chinesa e a capacidade dos Estados Unidos de forjar e manter um arco de alianças para conter a China. Cruzando-as: **Cria Cuervos** é China fraca com arco forte (e o arco se volta contra quem o construiu — “cría cuervos y te sacarán los ojos”, analogia registrada em aula com o Afeganistão dos anos 1980, em que os combatentes financiados pelos EUA depois fundaram a Al-Qaeda); **Concerto Asiático** é China forte com arco forte; **Casa sem Dono** é China fraca com arco frágil; **Império do Meio II** é China forte com arco frágil. A lição contraintuitiva está em Cria Cuervos: arco forte não é sempre favorável aos Estados Unidos. E em Casa sem Dono vale o princípio explícito em aula — não existe vácuo de poder, alguém buscará a hegemonia. [INFERÊNCIA PEDAGÓGICA quanto à posição gráfica dos eixos; as quatro descrições são explícitas nos slides.]",
        fonte="AULA 15.pdf, slides “Cenários”, “Cenários para o Leste e Sudeste Asiáticos” (quatro descrições) e “Mandato Divino X Destino Manifesto”; REL - T2.pdf, leitura dos quadrantes e a analogia do Afeganistão; fontes-manifesto.json, incerteza I-02.",
        competencia="Situar cada cenário no cruzamento das duas forças-motrizes.",
        erro="Supor que o cenário com arco de alianças forte é sempre favorável aos Estados Unidos.",
        tempo=6),

    dis("M04", "N4", 6, topico=T,
        conceitos=["REL-T2-M04-C014", "REL-T2-M04-C004", "REL-T2-M00-C011"],
        enunciado="Explique como a atuação recente dos Estados Unidos no Hemisfério Ocidental pode ser lida como reativação da Doutrina Monroe, indicando o mecanismo, os instrumentos empregados, a implicação para o Brasil e a data de corte da informação. Registre a natureza da fonte usada.",
        gabarito=(
            "**Tese.** A atuação recente dos Estados Unidos no Hemisfério Ocidental reativa a estrutura da Doutrina Monroe: negar a presença de potência extra-hemisférica e organizar o hemisfério em torno de um Estado-diretor. O que muda é o competidor visado — antes potências europeias, agora a China — e o predomínio da coerção sobre o consenso.\n\n"
            "**Conceito.** A Doutrina Monroe é declaração unilateral de dupla natureza, anticolonial e hegemonista, que fez a paz e a segurança dos Estados Unidos dependerem de um recorte territorial específico, o “Hemisfério Ocidental”. O Corolário Roosevelt de 1904 acrescentou o exercício de um poder de polícia internacional. A leitura de que há hoje um novo corolário — apelidado na imprensa de “Doutrina Donroe”, expressão surgida em capa de jornal em 08/01/2025 e depois adotada pelo próprio presidente — é a de que a Estratégia de Segurança Nacional de 2025 trata o Hemisfério Ocidental como prioritário e nega acesso territorial a competidores não-hemisféricos, depois de alegados anos de negligência.\n\n"
            "**Evidência e instrumentos.** (1) Instrumento econômico e de pressão diplomática: o Panamá, primeiro país da América Latina e do Caribe a aderir à iniciativa chinesa Um Cinturão, Uma Rota em 2017, deixou o empreendimento em 2025 sob pressão americana; houve ainda crítica oficial à concessão portuária de Balboa e Cristóbal a operadora de Hong Kong. (2) Instrumento militar: a invasão da Venezuela em janeiro de 2026, com objetivo declarado de retorno de empresas americanas à indústria petrolífera venezuelana e de envio preferencial de petróleo aos Estados Unidos, em substituição ao grande parceiro comercial venezuelano, a China. (3) Instrumento territorial: a pretensão sobre a Groenlândia e o interesse no Ártico, onde o degelo abre rotas e recursos. (4) Instrumento de cadeia produtiva: a disputa por terras raras e minerais críticos, indispensáveis a semicondutores, baterias, turbinas, inteligência artificial e infraestrutura digital.\n\n"
            "**Nexo causal.** A cadeia é: competição sistêmica com a China → necessidade de controlar insumos críticos e pontos de passagem obrigatória → reativação de um princípio que já legitimava exclusão de potências extra-hemisféricas → emprego de instrumentos econômicos, diplomáticos e, no limite, militares no “quintal” imediato. Em termos de geopolítica clássica, é o jogo entre poder marítimo e poder terrestre somado ao controle de chokepoints nos fluxos globais.\n\n"
            "**Implicação para o Brasil.** Direta e dupla. Primeiro, o Brasil detém a segunda reserva mundial de terras raras, com cerca de 23% do total, o que o coloca no cálculo americano de soberania mineral como pré-condição de supremacia digital — e, portanto, sob pressão negociadora. Segundo, um hemisfério tratado como zona de exclusão restringe a margem da autonomia pela diversificação: quanto menos o Brasil puder diversificar parceiros sem custo, mais a política externa volta ao dilema interesses × meios que abre o Módulo 01. O Atlântico Sul como zona de paz e cooperação, pressuposto da PND, fica sob tensão pela mesma razão.\n\n"
            "**Leitura concorrente.** A fonte utilizada tem posição declarada: interpreta o processo como imperialismo e colonialidade do poder, e essa é uma leitura, não uma descrição neutra. A leitura concorrente sustentaria que se trata de resposta defensiva legítima à penetração de um competidor estratégico em área de segurança imediata — e é a leitura que o próprio imperativo estratégico americano, tal como o slide o apresenta, tornaria esperada. O aluno deve registrar as duas.\n\n"
            "**Data de corte.** Informações verificadas nas fontes autorizadas até 23/01/2026 (análise do Conselho da Paz) e abril de 2026 (artigo acadêmico aceito em 10/04/2026). Fatos posteriores não estão cobertos.\n\n"
            "**Resposta insuficiente:** narrar os acontecimentos recentes sem nomear o conceito. **Satisfatória:** liga os fatos à Doutrina Monroe e cita instrumentos. **Nível MB:** nomeia o conceito, identifica o mecanismo, distingue os instrumentos, extrai a implicação brasileira, registra a leitura concorrente e data a informação."
        ),
        criterios=[
            "Nomeia a Doutrina Monroe e sua dupla natureza, e não apenas os fatos recentes (0,2)",
            "Identifica o mecanismo: exclusão de competidor extra-hemisférico em contexto de competição sistêmica (0,2)",
            "Nomeia pelo menos dois instrumentos distintos com evidência concreta (0,2)",
            "Extrai implicação específica para o Brasil, com dado (terras raras) ou conceito (autonomia pela diversificação) (0,2)",
            "Registra a natureza posicionada da fonte e apresenta leitura concorrente (0,1)",
            "Informa a data de corte da informação (0,1)",
            "Não pontua: usar exemplo atual sem conceito; apresentar a interpretação da fonte como fato neutro; omitir a data",
        ],
        fonte="HAESBAERT & SANTA BÁRBARA (2026), seção “(Des)Territorializações em disputa na Doutrina Donroe” e considerações finais; LOVATT (ECFR, 23/01/2026); AULA 15.pdf, slides “EUA - Expansão, Doutrina Monroe” e “EUA - Imperativo Estratégico”; AULA 12.pdf, slide “PEB - Governos pós-1985 — Lula”.",
        competencia="Interpretar acontecimento contemporâneo por conceito, com instrumentos, implicação, leitura concorrente e datação.",
        erro="Narrar a conjuntura sem nomear o conceito, ou tratar fonte posicionada como descrição neutra.",
        tempo=15),

    obj("M04", "N4", 7, topico=T,
        conceitos=["REL-T2-M04-C015", "REL-T2-M00-C006", "REL-T2-M04-C007"],
        enunciado="Um arranjo internacional é criado em janeiro de 2026 a partir de uma resolução do Conselho de Segurança da ONU, mas sua carta constitutiva omite qualquer referência ao conflito específico que motivou aquela resolução e critica instituições que “frequentemente falharam”, propondo um órgão de construção da paz mais ágil. O arranjo tem presidência permanente exercida por um chefe de Estado, mandatos dos Estados-membros renováveis a critério dessa presidência, financiamento descrito como voluntário com associação permanente para quem aportar um bilhão de dólares, e um conselho executivo por ela nomeado. Qual análise é mais defensável?",
        alternativas=[
            "Trata-se de arranjo inequivocamente liberal, porque institucionaliza a cooperação e deriva de resolução do Conselho de Segurança.",
            "Trata-se de arranjo inequivocamente realista, porque foi criado por uma grande potência, e toda criação institucional por potência hegemônica é instrumento de poder.",
            "O caso é ambíguo por construção e a análise deve identificar qual leitura o desenho institucional sustenta melhor: a forma é de cooperação institucionalizada, mas a distribuição interna de autoridade — decisões emanando da presidência, mandatos renováveis a seu critério e influência proporcional ao aporte financeiro — sustenta melhor a leitura de instrumento de poder.",
            "O caso não admite análise pelas lentes teóricas, porque arranjos criados por decisão unilateral não são instituições internacionais.",
            "Trata-se de arranjo construtivista, porque a criação de um órgão próprio expressa a identidade e os valores de quem o propôs.",
        ],
        correta=2,
        comentario="É a clínica institucional do Módulo 00 aplicada a um caso contemporâneo. O curso ensina que instituições podem ser vistas tanto como mecanismos de cooperação quanto como instrumentos de poder — e que o que decide não é a existência da instituição, mas o que o enunciado destaca. Aqui o enunciado destaca o **desenho interno**: autoridade concentrada, mandato precário e influência proporcional a dinheiro. Cooperação institucionalizada costuma implicar regra que restringe também quem a criou; nada disso aparece. Note que a resposta correta não afirma que a leitura liberal é impossível: ela afirma qual das duas o desenho sustenta melhor, que é exatamente o que se pede de uma resposta de nível MB.",
        distratores=[
            "Errada. A origem em resolução e a forma institucional são pistas, não prova; a carta omite o conflito que a motivou.",
            "Errada. Generalização inválida: Bretton Woods também foi criado por potência hegemônica e a leitura liberal do arranjo é sustentável.",
            "Correta. Identifica a ambiguidade e arbitra pelo desenho interno de autoridade.",
            "Errada. Arranjos assimétricos continuam sendo objeto das lentes teóricas — é precisamente o que as torna úteis.",
            "Errada. O enunciado não traz identidade ou norma compartilhada como variável; traz distribuição de autoridade e dinheiro.",
        ],
        fonte="LOVATT, H. (ECFR), “O Conselho da Paz de Trump se torna global”, 23/01/2026 (fonte com posição declarada); AULA 15.pdf, slides “2. Liberais” e “Segundo as principais Teorias em RI — 1. Realismo”; AULA 15.pdf, slide “Hegemonia Mundial”.",
        competencia="Arbitrar entre leituras concorrentes de um mesmo arranjo institucional pelo seu desenho interno.",
        erro="Classificar o arranjo como liberal por ele ser uma instituição.",
        tempo=5,
        verificacao="Pergunte se a regra restringe também quem a criou. Se não restringe, a leitura de instrumento é mais forte."),

    obj("M04", "N3", 8, topico=T,
        conceitos=["REL-T2-M04-C010", "REL-T2-M04-C011"],
        enunciado="A discussão sobre a estrutura de força naval dos Estados Unidos evoluiu de uma meta de 355 navios (2016) para 381 navios (2023), e a principal alteração recente é a incorporação de embarcações autônomas, com previsão de uma nova arquitetura de frota com menor proporção de navios grandes, maior proporção de pequenos e um terceiro elemento de grandes veículos não tripulados. Qual inferência doutrinária essa mudança de composição sustenta?",
        alternativas=[
            "Que a Marinha dos Estados Unidos abandonou a projeção de poder global em favor da defesa costeira.",
            "Que a mudança é apenas orçamentária, sem consequência doutrinária, uma vez que plataformas menores custam menos.",
            "Que a frota se adapta ao ambiente de antiacesso e negação de área: dispersar a capacidade de combate em mais plataformas, menores e em parte não tripuladas, reduz a perda por vetor atingido e dificulta a solução do problema para quem emprega mísseis de longo alcance.",
            "Que a substituição de tripulados por autônomos elimina a necessidade de bases avançadas e de interoperabilidade externa.",
            "Que o aumento da meta de 355 para 381 navios indica que a frota atual já superou ambos os números.",
        ],
        correta=2,
        comentario="Números, aqui, são evidência de doutrina. Contra um adversário que investe em antiacesso e negação de área — mísseis balísticos de longo alcance, submarinos em pontos estratégicos, mísseis antinavio e interferência eletrônica —, concentrar capacidade em poucas plataformas de alto valor é oferecer alvos rentáveis. Dispersar em mais plataformas, menores e em parte não tripuladas, é resposta ao problema: cada vetor atingido custa menos e o adversário precisa resolver muitos problemas simultâneos. Nenhuma das duas metas descreve a frota existente: são objetivos de nível de força.",
        distratores=[
            "Errada. A arquitetura mantém porta-aviões, submarinos e combatentes de superfície, e o objetivo segue sendo operar longe.",
            "Errada. Custo é condicionante, e a composição escolhida responde a um problema operacional identificado.",
            "Correta. É a inferência doutrinária que a composição sustenta.",
            "Errada. Plataformas autônomas ampliam a demanda por logística, comunicações e bases, não a eliminam.",
            "Errada. As metas são objetivos de nível de força, e não descrição da frota atual.",
        ],
        fonte="AULA 15.pdf, slides “Previsão sobre a dimensão da Marinha dos EUA (segundo o Congresso dos EUA)” e “A2/AD - Anti-access/Area Denial”; CRS RL32665, sumário executivo (nova arquitetura de frota); AULA 16.pdf, slide “Mar do Sul da China - A2/AD”.",
        competencia="Inferir doutrina a partir da composição de uma estrutura de força.",
        erro="Decorar números sem extrair a doutrina que a composição revela.",
        tempo=4),
]

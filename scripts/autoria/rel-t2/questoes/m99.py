# -*- coding: utf-8 -*-
"""Banco do Módulo 99 — revisão final e comparações globais."""

from helper import obj, vf, cor, dis

T = "99-revisao-final"

QUESTOES = [


    dis("M99", "N4", 3, topico=T,
        conceitos=["REL-T2-M99-C006", "REL-T2-M99-C005", "REL-T2-M00-C005", "REL-T2-M00-C006"],
        contexto="Um Estado insular de porte médio tem, como maior parceiro comercial, uma grande potência regional ascendente, de quem recebe também investimento relevante em energia, transportes, mineração e logística. Ao mesmo tempo, esse Estado integra acordos de segurança e de inteligência com uma potência marítima extrarregional e proíbe empresas de telecomunicações da potência vizinha de participar da sua infraestrutura de rede de nova geração.",
        enunciado="Explique a decisão, indicando a regra geral que ela ilustra sobre a tensão entre economia e segurança, e apresente o limite dessa regra.",
        gabarito=(
            "**Tese.** Quando a dependência econômica e a dependência de segurança apontam para atores diferentes, o vetor de segurança tende a prevalecer nas decisões estruturais — e é o que a proibição da infraestrutura de rede ilustra.\n\n"
            "**Conceito.** A tensão entre economia e segurança é uma das linhas da comparação global do curso. Nenhum dos três grandes atores escapa dela: o Brasil depende do mar para mais de 95% do comércio exterior e investe pouco em defesa; os Estados Unidos dependem de cadeias globais e adotam desacoplamento e tarifas; e a China precisa de abertura para prosperar e teme, ao mesmo tempo, a desagregação interna e o bloqueio de um estreito.\n\n"
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
    cor("M99", "N3", 9, topico=T,
        conceitos=["REL-T2-M99-C002", "REL-T2-M99-C004", "REL-T2-M04-C001", "REL-T2-M05-C001"],
        titulo="Correlacione cada condicionante geográfico ou instrumento marítimo ao ator a que corresponde",
        chaves=[
            ("A", "Brasil"),
            ("B", "Estados Unidos"),
            ("C", "China"),
        ],
        itens=[
            ("Bioceanidade e planícies centrais com rios navegáveis interligados por canais e eclusas, com vizinhos de poder muito inferior.", "B"),
            ("Litoral concentrando 80% da população e 90% do PIB, sem rival estatal de peso comparável no entorno imediato.", "A"),
            ("Linha de igual precipitação separando litoral rico de interior pobre, com zonas tampão de altitude e aridez, e litoral fechado por cadeias de ilhas.", "C"),
            ("Instrumento marítimo dominante: jurisdição e consciência situacional sobre área de dimensão continental, com sistema integrado de gerenciamento.", "A"),
            ("Instrumento marítimo dominante: negação regional por cadeias de ilhas, somada a corredores terrestres alternativos e a um programa global de infraestrutura.", "C"),
            ("Instrumento marítimo dominante: projeção global sustentada por rede de bases, canais interoceânicos e alianças que somam a maioria das grandes marinhas.", "B"),
        ],
        comentario="A matriz comparativa se resolve por uma pergunta só: **que tarefa a geografia permite e o instrumento cumpre?** O Brasil investe em JURISDIÇÃO, porque tem área imensa e nenhum rival próximo; os Estados Unidos, em PROJEÇÃO, porque têm acesso livre e aliados; a China, em NEGAÇÃO, porque tem acesso obstruído e precisa manter o adversário longe. Note a assimetria decisiva: Brasil e Estados Unidos têm acesso oceânico livre; a China, não — o litoral é fechado por cadeias de ilhas e as rotas dependem de um estreito controlável por terceiros.",
        fonte="AULA 14.pdf, slides “Economia Azul”, “SisGAAz” e “Programas Estratégicos”; AULA 15.pdf, mapas de formação geográfica e slides de estrutura de força naval; AULA 16.pdf, mapas de isoieta e topografia e slide “Mar do Sul da China - A2/AD”.",
        competencia="Preencher a matriz comparativa associando geografia e instrumento por ator.",
        erro="Comparar marinhas por número de meios em vez de por tarefa que a composição permite cumprir.",
        tempo=6),

    obj("M99", "N4", 10, topico=T,
        conceitos=["REL-T2-M99-C001", "REL-T2-M99-C007", "REL-T2-M06-C015"],
        enunciado="Ao comparar os imperativos estratégicos de Brasil, Estados Unidos e China, qual leitura é mais rigorosa?",
        alternativas=[
            "Os três têm imperativos expansionistas, diferindo apenas na capacidade de realizá-los.",
            "Os imperativos diferem em NATUREZA e em ESTRUTURA, e não apenas em escala: os da China são de preservação e formam um trilema, porque a abertura de que a prosperidade depende alimenta a desigualdade que ameaça a unidade; os do Brasil são de preservação e inserção, e estão declarados em lista sem hierarquia entre si; os dos Estados Unidos são de manutenção de hegemonia, em sequência de quatro degraus cujo último tem objeto FORA do próprio hemisfério. Apenas o caso americano tem esse objeto extra-hemisférico.",
            "Os imperativos são incomparáveis, porque documentos de defesa brasileiros e slides sobre potências estrangeiras têm naturezas distintas.",
            "Os três se reduzem à busca de acesso ao mar, uma vez que todos são Estados com litoral.",
            "Os imperativos de Brasil e China são idênticos, pois ambos priorizam integridade territorial e desenvolvimento econômico.",
        ],
        correta=1,
        comentario="Comparar não é ranquear: é isolar variáveis. E as variáveis que organizam esta comparação são a **natureza** (preservação, inserção ou manutenção de hegemonia) e a **estrutura** (lista sem hierarquia, trilema ou sequência). Dois dos três são de preservação; só os Estados Unidos têm imperativo cujo objeto está fora do hemisfério — evitar o surgimento de potência hegemônica na Eurásia. É essa assimetria, e não a diferença de capacidade, que torna a competição sistêmica desigual em natureza. A alternativa que iguala Brasil e China falha no essencial: o imperativo chinês é internamente contraditório por construção, enquanto o brasileiro é indeterminado por falta de hierarquia declarada — problemas diferentes, com soluções diferentes.",
        distratores=[
            "Errada. Dois dos três são de preservação e inserção, não de expansão.",
            "Correta. Distingue natureza e estrutura, e identifica a assimetria do caso americano.",
            "Errada. A diferença de tipo documental exige cautela declarada, mas não impede a comparação — que é justamente o que o trabalho de T2 pede.",
            "Errada. Para os EUA o mar é instrumento; para a China é cerco a romper; para o Brasil é base econômica já disponível e a garantir.",
            "Errada. Trilema e lista sem hierarquia são estruturas distintas, com problemas distintos.",
        ],
        fonte="AULA 13.pdf, slide “Objetivos Nacionais de Defesa”; AULA 14.pdf, slide “Política Naval”; AULA 15.pdf, slide “EUA - Imperativo Estratégico”; AULA 16.pdf, slide “China - Imperativo Estratégico”; T2_2025.pdf, item 2 do trabalho.",
        competencia="Comparar imperativos por natureza e estrutura, declarando a assimetria relevante.",
        erro="Tratar todos os imperativos como expansionistas, ou igualar Brasil e China por priorizarem integridade territorial.",
        tempo=5),

    obj("M99", "N2", 11, topico=T,
        conceitos=["REL-T2-M04-C002", "REL-T2-M05-C004", "REL-T2-M05-C009"],
        enunciado="Aponte a alternativa que contém apenas afirmações CORRETAS sobre a formação territorial e histórica dos dois atores extrarregionais estudados. **I.** A expansão norte-americana combinou compra, tratado e guerra, com a Louisiana adquirida da França em 1803 e o Alasca comprado da Rússia em 1867. **II.** A primeira dinastia chinesa com registro escrito e evidência arqueológica é a Shang, e a última dinastia imperial, a Qing, vai de 1644 a 1911. **III.** O platô de Doklam é litígio entre China e Bangladesh, e Aksai Chin é litígio entre China e Japão.",
        alternativas=[
            "Apenas I.",
            "Apenas I e II.",
            "Apenas II e III.",
            "I, II e III.",
            "Apenas III.",
        ],
        correta=1,
        comentario="O único item incorreto é o **III**, e ele contém dois erros. O platô de **Doklam** é litígio com o **Butão** — o próprio mapa do deck rotula *Bhutan* —, e **Aksai Chin** é litígio com a **Índia**, não com o Japão; com o Japão o litígio é o das ilhas **Diaoyu/Senkaku**. O erro de Doklam aparece em resumo de Aspirante em circulação e está registrado como conflito entre fontes resolvido em favor do slide. Os itens I e II reproduzem o corpus: a compra da Louisiana (1803) e do Alasca (1867) constam do mapa de expansão territorial, e a Shang como primeira dinastia com registro escrito e a Qing como última dinastia imperial (1644-1911) constam dos slides de dinastias.",
        distratores=[
            "Errada. O item II também é correto.",
            "Correta. O item III é incorreto em dois pontos.",
            "Errada. O item III é incorreto.",
            "Errada. O item III é incorreto.",
            "Errada. O item III é o único incorreto.",
        ],
        fonte="AULA 15.pdf, mapa “Estados Unidos: expansão territorial”; AULA 16.pdf, slides das dinastias, “China recente” e mapas dos litígios; REL - T2.pdf, leitura dos mapas; fontes-manifesto.json, conflito CF-04.",
        competencia="Verificar precisão factual sobre formação territorial e litígios dos dois atores extrarregionais.",
        erro="Situar o platô de Doklam como litígio com Bangladesh e Aksai Chin com o Japão.",
        tempo=4,
        extra_assinatura=["integração entre módulos 04 e 05"]),

    dis("M99", "N3", 12, topico=T,
        conceitos=["REL-T2-M99-C008", "REL-T2-M06-C022", "REL-T2-M99-C007"],
        enunciado="Caso a T2 seja cobrada no formato de trabalho de análise geopolítica, descreva o roteiro que você seguiria para o item de maior peso — três objetivos ou desafios geoceanopolíticos de uma nação, com fatores facilitadores e dificultadores, situação atual e perspectivas —, usando o Brasil como nação analisada.",
        gabarito=(
            "**Observação ao corretor.** Qualquer dos três atores do curso pontua integralmente. A resposta-modelo usa o **Brasil**, por ser o caso com base documental própria e por integrar os módulos 01 a 03. O que se avalia é o ROTEIRO e o nexo, não a escolha do país.\n\n"
            "**1. Selecionar três objetivos ou desafios, e não descrever o país.** Para o Brasil: (a) assegurar o uso do mar de que a economia depende; (b) manter o entorno sul-americano estável e sem coalizão hostil; (c) ampliar a inserção decisória sem alinhamento automático.\n\n"
            "**2. Para cada um, nomear o condicionante que o produz.** (a) Cerca de 8.500 km de litoral, com 80% da população e 90% do PIB nele concentrados, e mais de 95% do comércio exterior por via marítima. (b) Fronteira com dez vizinhos e bacias internacionais compartilhadas, com rios que atravessam fronteiras políticas. (c) Posição no hemisfério sul, distante dos principais polos de poder.\n\n"
            "**3. Separar facilitadores de dificultadores, sem misturá-los.** Facilitadores: jurisdição reconhecida sobre área extensa; ausência de rival estatal próximo; fronteiras estabilizadas desde a era Rio Branco; determinação constitucional de integração; trajetória de diversificação de parceiros. Dificultadores: dimensão da área a monitorar; orçamento de ciclo longo em disputa anual; regra de consenso que trava decisões no bloco regional; baixa continuidade estratégica entre governos; hemisfério tratado como zona de exclusão por potência extrarregional.\n\n"
            "**4. Nomear o instrumento de cada objetivo, com nome próprio.** SisGAAz e o complexo naval de uso múltiplo previsto para a foz do Amazonas; Mercosul, Unasul e cooperação em infraestrutura física; ZOPACAS, CPLP, diplomacia naval e a articulação declarada entre defesa e política externa.\n\n"
            "**5. Situação atual, nacional e internacional.** Nacional: programas estratégicos avançando em ritmo determinado pelo financiamento; Política Marítima Nacional reeditada em 2025. Internacional: competição sistêmica entre as duas maiores potências pressionando escolhas de parceria e de cadeia produtiva, inclusive em minerais críticos.\n\n"
            "**6. Prospecção com variável nomeada.** A variável que mais desloca o cenário é a **continuidade orçamentária**: sem ela, objetivo declarado não vira capacidade. A segunda é o grau de fechamento do hemisfério, que determina a margem de diversificação disponível.\n\n"
            "**7. Fechar em sumário executivo e declarar o limite.** Mecanismo, vulnerabilidade com instrumentos e limite, em três linhas — mais a ressalva de que o imperativo estratégico brasileiro é reconstrução a partir de documentos, e não enunciado de slide, e a data de corte da informação.\n\n"
            "**Insuficiente:** apresentar três objetivos sem condicionante nem fator. **Satisfatória:** apresenta os três com facilitadores e dificultadores. **Nível MB:** apresenta os três, separa nação de sistema, ancora cada projeção em uma variável nomeada e declara o limite da análise."
        ),
        criterios=[
            "Seleciona três objetivos ou desafios em vez de descrever o país (0,2)",
            "Nomeia o condicionante que produz cada objetivo (0,2)",
            "Separa facilitadores de dificultadores, sem misturar (0,2)",
            "Nomeia o instrumento de cada objetivo (0,2)",
            "Apresenta situação atual nacional E internacional e prospecção com variável nomeada (0,1)",
            "Fecha em sumário executivo e declara o limite da análise (0,1)",
            "Não pontua: narrar a história do país; listar programas sem vínculo com objetivo; omitir dificultadores",
        ],
        fonte="T2_2025.pdf, itens 2 e 6 do trabalho (pesos 2,0 e 1,0); AULA 12.pdf, slides “PEB - Dilemas futuros” e “PEB - Governos pós-1985”; AULA 14.pdf, slides “Economia Azul” e “SisGAAz”; matriz-cobertura.json (matriz de dez passos).",
        competencia="Executar o roteiro do item de maior peso do trabalho de T2, com nação, fatores e prospecção.",
        erro="Descrever o país em vez de estruturar objetivos, condicionantes, fatores e instrumentos.",
        tempo=14),
    obj("M99", "N3", 13, topico=T,
        conceitos=["REL-T2-M99-C003", "REL-T2-M99-C006", "REL-T2-M06-C015"],
        enunciado="Comparando as VULNERABILIDADES centrais de Brasil, Estados Unidos e China, qual leitura é mais rigorosa?",
        alternativas=[
            "As três são da mesma natureza — dependência de comércio exterior —, e diferem apenas em magnitude.",
            "São de naturezas distintas: a brasileira é sobretudo INTERNA E INSTITUCIONAL, porque a dependência do mar para mais de 95% do comércio exterior convive com baixa prontidão, orçamento restrito e cultura de defesa pouco consolidada; a americana é de SUSTENTAÇÃO, porque o declínio relativo de participação econômica e a dependência do arco de alianças convivem com o desafio do antiacesso adversário; e a chinesa é de FLUXO, porque a prosperidade que financia a unidade depende de passagem por um estreito controlável por terceiros, somada à perda de autossuficiência em alimento e petróleo, à demografia e à desigualdade litoral-interior.",
            "A vulnerabilidade brasileira é externa e militar, decorrente da ameaça de invasão por vizinhos da América do Sul.",
            "A vulnerabilidade chinesa foi resolvida pelos corredores terrestres alternativos e pelo programa de infraestrutura global.",
            "A vulnerabilidade americana é irrelevante, porque a superioridade naval absoluta torna o declínio de participação econômica inconsequente.",
        ],
        correta=1,
        comentario="A comparação só rende se separar **natureza** de **magnitude**. O caso brasileiro é o único em que o principal obstáculo está dentro de casa: não há ameaça estatal próxima, e o que falta é capacidade proporcional à dependência já existente. O americano é de sustentação: o problema não é ter poder, é manter compromissos simultâneos com participação econômica relativa menor. O chinês é de fluxo: tudo depende de manter aberto o que passa por um ponto de passagem obrigatória. Note as duas armadilhas: os corredores alternativos e o programa de infraestrutura **mudam a natureza** da vulnerabilidade chinesa — de marítima para terrestre e dependente de terceiros —, mas não a eliminam; e superioridade naval não neutraliza base econômica relativa, porque é ela que sustenta esquadra, indústria e inovação.",
        distratores=[
            "Errada. Só o caso brasileiro tem a dependência comercial como eixo; os outros dois têm eixos distintos.",
            "Correta. Separa as três naturezas e nomeia a evidência de cada uma.",
            "Errada. O corpus registra ausência de rival estatal de peso comparável no entorno brasileiro.",
            "Errada. As alternativas mudam a natureza da vulnerabilidade, sem eliminá-la.",
            "Errada. Base econômica é condição de sustentação de esquadra, indústria e inovação.",
        ],
        fonte="AULA 14.pdf, slide “Economia Azul”; AULA 15.pdf, slide “Declínio?”; AULA 16.pdf, slides “China recente” e “Perspectiva Chinesa”; Geopolitical Futures (2019), perda da autossuficiência chinesa.",
        competencia="Comparar vulnerabilidades por natureza, e não por magnitude.",
        erro="Tratar a vulnerabilidade brasileira como externa e militar.",
        tempo=5,
        extra_assinatura=["integração entre os módulos 03, 04, 05 e 06"]),
]

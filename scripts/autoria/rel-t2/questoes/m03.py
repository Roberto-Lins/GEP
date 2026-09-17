# -*- coding: utf-8 -*-
"""Banco do Módulo 03 — Política Marítima, Política Naval, PEM 2040 e Economia Azul."""

from helper import obj, vf, cor, dis

T = "03-politica-maritima-naval-e-economia-azul"

QUESTOES = [
    vf("M03", "N1", 1, topico=T,
       conceitos=["REL-T2-M03-C007"],
       afirmacao="Poder Naval e Poder Marítimo são expressões equivalentes, uma vez que ambas designam o conjunto de meios de que o Estado dispõe para atuar no mar.",
       correta=False,
       comentario="**Falsa.** A relação é de contenção, não de equivalência: o Poder Marítimo **compreende** o Poder Naval. O Poder Naval é o braço militar, operacionalizado pela Marinha; o Poder Marítimo reúne oito elementos — Poder Naval, Marinha Mercante, indústria naval, indústria bélica, pessoal, pesquisa e tecnologia, recursos do mar e infraestrutura marítima e hidroviária. Confundir os dois esvazia metade do conceito, justamente a metade civil, que é a que sustenta a exigência de Mahan de integrar Marinha de Guerra e Marinha Mercante.",
       fonte="AULA 14.pdf, slide “Elementos do Poder Marítimo” (diagrama); REL - T2.pdf, lista dos oito elementos e a distinção entre os dois poderes; AULA 15.pdf, slide “Expansão geopolítica” (Mahan).",
       competencia="Distinguir Poder Marítimo de Poder Naval pela relação de contenção.",
       erro="Usar Poder Naval e Poder Marítimo como sinônimos."),

    obj("M03", "N2", 2, topico=T,
        conceitos=["REL-T2-M03-C001", "REL-T2-M00-C002"],
        enunciado="Um Aspirante afirma, em uma resposta, que “a Política Marítima Nacional encontra-se defasada em relação à PND e à END, por ser a atualização de 1994 de um decreto de 1984, razão pela qual a Marinha instituiu um Grupo de Trabalho Interministerial em 2021”. Avalie a afirmação.",
        alternativas=[
            "Está integralmente correta e reproduz o que consta do slide da Aula 15.",
            "Está desatualizada: descreve o estado ANTERIOR. O slide registra que a Política Marítima Nacional foi reeditada pelo Decreto nº 12.481, de 02 de junho de 2025, de modo que a defasagem descrita é o antecedente, e o GTI de 2021 é a etapa intermediária.",
            "Está errada porque nunca houve defasagem: a PMN sempre acompanhou as revisões da PND e da END.",
            "Está errada porque o Grupo de Trabalho Interministerial foi instituído pelo Ministério da Defesa, e não pela Marinha.",
            "Está correta quanto à defasagem e errada quanto ao GTI, que na verdade produziu apenas estudos comparativos sem consequência normativa.",
        ],
        correta=1,
        comentario="Este é o conflito CF-02 do manifesto de fontes, e a hierarquia o resolve. As duas informações não são contraditórias em simultâneo: são etapas de uma sequência. Defasagem (decreto de 1984, atualizado em 1994) → instituição do GTI em 2021, com estudos comparativos das políticas marítimas de outros países e alinhamento aos interesses estratégicos nacionais → reedição pelo Decreto 12.481, de 02/06/2025. Quem estudou só pelo resumo responde “está defasada” e erra, porque o slide registra o desfecho. A lição de método é que resumo de colega descreve um momento; o slide do professor descreve o estado atual.",
        distratores=[
            "Errada. O slide traz o decreto de 2025, que encerra a defasagem descrita.",
            "Correta. A afirmação descreve o antecedente; a sequência termina no decreto de 2025.",
            "Errada. A defasagem existiu e é justamente o que motivou o GTI.",
            "Errada. O corpus atribui a instituição do GTI à Marinha.",
            "Errada. Os estudos comparativos são a etapa que antecede e fundamenta a reedição normativa.",
        ],
        fonte="AULA 14.pdf, slide “Política Marítima Nacional” (Decreto 12.481, de 02/06/2025); REL - T2.pdf, seção sobre a PMN; fontes-manifesto.json, conflito CF-02.",
        competencia="Resolver divergência entre resumo e slide reconstruindo a sequência causal.",
        erro="Afirmar que a PMN está defasada por ter estudado apenas pelo resumo.",
        tempo=3),

    cor("M03", "N2", 3, topico=T,
        conceitos=["REL-T2-M03-C007", "REL-T2-M03-C008", "REL-T2-M03-C009", "REL-T2-M03-C010",
                   "REL-T2-M03-C003", "REL-T2-M03-C012"],
        titulo="Correlacione cada item à categoria do PEM 2040 ou da Política Naval a que pertence",
        chaves=[
            ("A", "Elemento do Poder Marítimo"),
            ("B", "Função do Poder Marítimo"),
            ("C", "Fator condicionante do Poder Marítimo"),
            ("D", "Ameaça listada no PEM 2040"),
            ("E", "Item do entorno estratégico brasileiro"),
            ("F", "Programa Estratégico da Marinha"),
        ],
        itens=[
            ("Marinha Mercante", "A"),
            ("Explotação", "B"),
            ("Mentalidade marítima", "C"),
            ("Biopirataria", "D"),
            ("Países da costa ocidental africana", "E"),
            ("SisGAAz", "F"),
            ("Defesa marítima e ribeirinha", "B"),
            ("Capacidade de mobilização", "C"),
            ("Antártica", "E"),
            ("Pesca ilegal", "D"),
        ],
        comentario="Quatro listas do módulo são embaralháveis, e o professor as embaralha. As chaves de leitura: **elementos** são coisas (Poder Naval, Marinha Mercante, indústria naval, indústria bélica, pessoal, pesquisa e tecnologia, recursos do mar, infraestrutura marítima e hidroviária); **funções** são o que o Poder Marítimo faz (intercomunicação, defesa marítima e ribeirinha, pesquisa, explotação); **condicionantes** são o que viabiliza ou limita (mentalidade marítima, capacidade de financiamento, necessidade de desenvolvimento sustentável, capacidade de mobilização, capacidade tecnológica e industrial); **ameaças** são o que se enfrenta. Cuidado com “mentalidade marítima”, que aparece duas vezes na aula — como condicionante e como programa estratégico; aqui, pela redação em minúscula e pelo contexto de lista de condicionantes, é o condicionante.",
        fonte="AULA 14.pdf, slides “Elementos do Poder Marítimo”, “Funções do Poder Marítimo”, “Fatores Condicionantes do Poder Marítimo”, “PEM 2040 - Ameaças”, “Política Naval” (entorno estratégico) e “Programas Estratégicos”; REL - T2.pdf, listas recuperadas.",
        competencia="Classificar itens nas quatro listas do PEM 2040 e da Política Naval sem embaralhá-las.",
        erro="Trocar elementos por funções, ou condicionantes por ameaças.",
        tempo=8),

    obj("M03", "N3", 4, topico=T,
        conceitos=["REL-T2-M03-C011", "REL-T2-M00-C013"],
        enunciado="Avalie as afirmativas a seguir. **AFIRMATIVA 1:** O Conceito Estratégico Marítimo-Naval do PEM 2040 incorpora a distinção entre Combate no Mar e Combate pelo Mar, sendo o segundo de natureza estratégica e geopolítica e alcançando os espaços aéreo, cibernético, espacial, marítimo e subaquático. **PORQUE** **AFIRMATIVA 2:** A adoção do Combate pelo Mar significa que o pensamento de Mahan foi superado e não é mais considerado nas estratégias navais dos principais países. Assinale a alternativa CORRETA.",
        alternativas=[
            "A afirmativa 1 está correta e a afirmativa 2 está errada.",
            "A afirmativa 1 está errada e a afirmativa 2 está correta.",
            "Ambas estão corretas e a afirmativa 2 é a explicação da afirmativa 1.",
            "Ambas estão corretas, mas a afirmativa 2 não é a explicação da afirmativa 1.",
            "Ambas estão erradas.",
        ],
        correta=0,
        comentario="A primeira afirmativa reproduz o corpus: o Combate no Mar diz respeito a batalhas navais tradicionais, com navios, submarinos e aeronaves, em determinado espaço marítimo e com o fim de vencer a batalha; o Combate pelo Mar tem foco estratégico e geopolítico, ligado à soberania e ao controle do mar por meio dos espaços aéreo, cibernético, espacial, marítimo e subaquático. A segunda é falsa por dois motivos independentes: ampliar o conceito não é superar o anterior, e Mahan segue no centro de qualquer raciocínio sobre comando do mar, choke points e bases — inclusive na estrutura de força americana e no próprio desenho dos programas brasileiros. Sendo a segunda falsa, não há nexo a julgar.",
        distratores=[
            "Correta. A primeira é a formulação do corpus; a segunda é falsa por exagero de superação.",
            "Errada. A primeira reproduz literalmente a distinção do PEM 2040.",
            "Errada. A afirmativa 2 é falsa, logo não pode explicar nada.",
            "Errada. A afirmativa 2 não é correta.",
            "Errada. A afirmativa 1 é correta.",
        ],
        fonte="AULA 14.pdf, slide “PEM 2040 - Conceito Estratégico Marítimo-Naval”; REL - T2.pdf, distinção entre combate no mar e combate pelo mar; SOPA REL T1 2024, questão 4 (formato de asserção e razão sobre o mesmo par conceitual, com fatos e gabarito distintos).",
        competencia="Julgar par de asserções sobre ampliação conceitual, recusando a tese de superação total.",
        erro="Aceitar que o Combate pelo Mar tornou Mahan irrelevante.",
        tempo=4),

    dis("M03", "N3", 5, topico=T,
        conceitos=["REL-T2-M03-C019", "REL-T2-M02-C009", "REL-T2-M03-C016"],
        enunciado="Correlacione UMA das tarefas básicas do Poder Naval com o conceito de Amazônia Azul, explicando o nexo e indicando o programa estratégico que operacionaliza essa relação.",
        gabarito=(
            "**Tese.** A tarefa de **controle de área marítima** é a que se correlaciona mais diretamente com a Amazônia Azul, e o programa que a operacionaliza é o SisGAAz.\n\n"
            "**Conceitos.** Amazônia Azul é a designação do oceano do Brasil, que dá dimensão pública ao conceito jurídico de Águas Jurisdicionais Brasileiras — as águas interiores e os espaços marítimos em que o Brasil exerce jurisdição, em algum grau, incluindo a faixa de 200 milhas marítimas contadas das linhas de base e as águas sobrejacentes à plataforma continental estendida, onde ela ocorrer. Controle de área marítima é uma das quatro tarefas básicas do Poder Naval na END.\n\n"
            "**Nexo causal.** Não se controla o que não se conhece. Controlar área marítima pressupõe consciência situacional: saber quem está onde, fazendo o quê, em tempo útil para decidir. A END determina que o monitoramento do mar, inclusive a partir do espaço, integre o repertório de práticas e capacitações operacionais — e é precisamente essa a função do Sistema de Gerenciamento da Amazônia Azul, cujo objetivo declarado é monitorar e controlar de forma integrada as AJB e as áreas internacionais de responsabilidade SAR, a fim de agilizar o ciclo decisório e assegurar pronta resposta a qualquer ameaça, emergência, agressão ou ilegalidade. A cadeia é: dado → consciência situacional → decisão → controle.\n\n"
            "**Evidência de escala.** A Amazônia Azul não é espaço simbólico: do mar vêm cerca de 95% do petróleo, 80% do gás natural e 45% do pescado produzidos no País, e por rotas marítimas escoam mais de 95% do comércio exterior brasileiro. Controlar essa área é controlar a base material da economia nacional.\n\n"
            "**Nuance.** A correlação também funciona com **negação do uso do mar** — impedir que um adversário use a Amazônia Azul contra o Brasil — e com **contribuição para a dissuasão**, uma vez que área monitorada é área cuja violação tem custo previsível. O que não se aceita é responder sem escolher uma tarefa e sem explicar o nexo. Registre-se ainda que o SisGAAz alcança áreas internacionais de responsabilidade SAR, que estão FORA das AJB: o sistema é maior que a Amazônia Azul.\n\n"
            "**Conclusão.** Controle de área marítima é a tarefa básica que a Amazônia Azul exige com mais evidência, porque jurisdição sem consciência situacional é jurisdição apenas nominal — e o SisGAAz é o instrumento que converte uma em outra.\n\n"
            "**Resposta insuficiente:** “A Marinha protege a Amazônia Azul, que é grande e rica.” Não escolhe tarefa nem explica nexo. **Satisfatória:** escolhe a tarefa e explica o nexo. **Nível MB:** escolhe a tarefa, explica o nexo pela cadeia dado-decisão-controle, nomeia o SisGAAz com seu objetivo, ancora em dado de escala e registra a nuance do alcance SAR."
        ),
        criterios=[
            "Escolhe explicitamente UMA tarefa básica entre as quatro (0,15)",
            "Define Amazônia Azul e a relaciona à definição de AJB (0,2)",
            "Explica o nexo causal entre a tarefa escolhida e o conceito (0,3)",
            "Nomeia o SisGAAz e seu objetivo declarado (0,2)",
            "Ancora em pelo menos um dado de escala da Economia Azul (0,15)",
            "Não pontua: não escolher tarefa; afirmar a correlação sem nexo; listar as quatro tarefas sem decidir",
        ],
        fonte="AULA 13.pdf, slides “Poder Naval (END)” e Estudo Dirigido (“Correlacione alguma das tarefas básicas do Poder Naval com o conceito de Amazônia Azul”); AULA 14.pdf, slides “SisGAAz” e “Economia Azul”.",
        competencia="Correlacionar tarefa básica e conceito público nomeando o instrumento que os liga.",
        erro="Afirmar a correlação sem escolher uma tarefa e sem explicitar o nexo.",
        tempo=10),

    obj("M03", "N3", 6, topico=T,
        conceitos=["REL-T2-M03-C014", "REL-T2-M02-C010", "REL-T2-M03-C013"],
        enunciado="Sobre os programas de construção do núcleo do Poder Naval, assinale a alternativa INCORRETA.",
        alternativas=[
            "O PROSUB, criado em 2008 em parceria entre Brasil e França, prevê quatro submarinos convencionais — Riachuelo, Humaitá, Tonelero e Angostura — e o primeiro submarino brasileiro com propulsão nuclear, o Álvaro Alberto, previsto para 2038.",
            "O PROSUB contempla também a construção de um complexo de infraestrutura industrial e de apoio à operação dos submarinos em Itaguaí, no Rio de Janeiro, que engloba os estaleiros, a Base Naval e a Unidade de Fabricação de Estruturas Metálicas.",
            "O submarino Álvaro Alberto dotará a Marinha do Brasil de armamento nuclear embarcado, o que explica a atribuição do setor nuclear à Marinha na END.",
            "O PROHIDRO destina-se à obtenção de meios hidroceanográficos, e sua relevância em termos de Política Nacional de Defesa decorre de o levantamento hidrográfico sustentar o pleito de plataforma continental estendida e, por consequência, a própria extensão das AJB.",
            "A parceria do PROSUB é caracterizada como relação entre Estados, e não como contrato comercial ordinário, o que a torna também instrumento de política externa.",
        ],
        correta=2,
        comentario="A alternativa incorreta troca **propulsão** por **armamento**. O Programa Nuclear da Marinha tem duas frentes declaradas: o protótipo de reator do submarino de propulsão nuclear e o domínio da tecnologia do ciclo do combustível nuclear. Nenhuma delas é armamento. Isso é coerente com os princípios do país — a Declaração do Iguaçu de 1985 pressupunha a renúncia a programas nucleares com fins bélicos, e a ZOPACAS envolve evitar a presença de armas nucleares no Atlântico Sul, pressuposto expresso da PND. Um submarino de propulsão nuclear ganha autonomia e permanência submersa, o que serve à dissuasão convencional; não é vetor nuclear.",
        distratores=[
            "Correta e verdadeira. É a descrição do slide.",
            "Correta e verdadeira. O complexo de Itaguaí é BID materializada.",
            "INCORRETA — resposta da questão. O programa é de propulsão e de ciclo do combustível, não de armamento.",
            "Correta e verdadeira. É a resposta ao Estudo Dirigido sobre o PROHIDRO.",
            "Correta e verdadeira. O slide qualifica a parceria como relação entre Estados.",
        ],
        fonte="AULA 14.pdf, slides “PROSUB” (dois), “Construção do Núcleo do Poder Naval” e Estudo Dirigido sobre o PROHIDRO; REL - T2.pdf, as duas frentes do PNM; AULA 13.pdf, slide “Alguns pressupostos da PND” (ZOPACAS).",
        competencia="Distinguir propulsão nuclear de armamento nuclear e justificar o PROHIDRO pela cadeia até a jurisdição.",
        erro="Atribuir armamento nuclear ao submarino Álvaro Alberto.",
        tempo=4),

    dis("M03", "N4", 7, topico=T,
        conceitos=["REL-T2-M03-C010", "REL-T2-M03-C008", "REL-T2-M03-C005"],
        enunciado="Entre as ameaças listadas no PEM 2040, escolha a que você considera operacionalmente mais difícil de combater e justifique com critérios explícitos. Relacione a escolha com pelo menos uma função do Poder Marítimo.",
        gabarito=(
            "**Observação ao corretor.** A pergunta admite mais de uma resposta defensável. O que se avalia é o CRITÉRIO e o NEXO, não a escolha. A resposta-modelo abaixo escolhe a pesca ilegal; escolhas como ameaças cibernéticas, crime organizado ou disputa por recursos naturais pontuam integralmente se sustentadas pelos mesmos critérios.\n\n"
            "**Tese.** A pesca ilegal é operacionalmente a mais difícil de combater entre as ameaças do PEM 2040.\n\n"
            "**Critérios explícitos.** Adoto quatro: (1) dispersão espacial da ameaça; (2) ausência de assinatura que a distinga de atividade lícita; (3) sobreposição com direito de terceiros e limites jurídicos de atuação; (4) razão entre a área a cobrir e os meios disponíveis.\n\n"
            "**Aplicação dos critérios.** (1) A pesca ilegal ocorre em toda a extensão das Águas Jurisdicionais Brasileiras, e não em um ponto definido. (2) Um pesqueiro ilegal é fisicamente idêntico a um pesqueiro legal: a ilegalidade está na licença, na cota ou na área, não na plataforma — o que obriga a abordagem e inspeção, e não apenas detecção. (3) Parte da atividade se dá em faixas em que a jurisdição é exercida “em algum grau”, e não plenamente, o que condiciona o que se pode fazer; e a Política Naval determina que o enfrentamento ocorra de forma soberana, conforme os princípios constitucionais e as normas do Direito Internacional. (4) A área é de dimensão continental e os meios são finitos, o que impõe escolha de prioridades.\n\n"
            "**Função do Poder Marítimo afetada.** A ameaça atinge diretamente a **explotação**, isto é, a exploração e o aproveitamento dos recursos, porque subtrai recurso vivo que integra o patrimônio nacional; e mobiliza a **defesa marítima e ribeirinha**, porque a resposta é justamente fiscalização e presença. A função de **pesquisa** também é afetada, já que sem levantamento de estoques não se sabe qual captura é sustentável.\n\n"
            "**Contraponto.** Uma escolha igualmente defensável seria a ameaça cibernética: ela dispensa presença física, tem atribuição de autoria incerta e não é enfrentável por meio naval, o que a torna de outra natureza. O critério que a favoreceria é a ausência de assinatura; o critério que a desfavorece, na comparação, é a escala espacial — ela não exige cobrir uma área de dimensão continental. Já a disputa por recursos naturais entre Estados tem assinatura clara e é enfrentável por dissuasão, o que a torna menos difícil no plano operacional, ainda que mais grave no plano estratégico.\n\n"
            "**Conclusão.** A dificuldade operacional decorre da combinação entre dispersão, indistinção da assinatura e limite jurídico — e é essa combinação, não a gravidade da ameaça, que a pergunta mede. É também por isso que a resposta brasileira é de consciência situacional e presença, não de poder de fogo.\n\n"
            "**Resposta insuficiente:** escolher uma ameaça e dizer que é difícil porque o mar é grande. **Satisfatória:** escolher e apresentar dois critérios aplicados. **Nível MB:** escolher, apresentar critérios explícitos, aplicá-los um a um, ligar a uma função do Poder Marítimo e comparar com uma escolha alternativa."
        ),
        criterios=[
            "Escolhe explicitamente UMA ameaça da lista do PEM 2040 (0,1)",
            "Enuncia critérios de dificuldade OPERACIONAL antes de aplicá-los (0,25)",
            "Aplica os critérios ao caso escolhido, um a um (0,25)",
            "Relaciona a escolha a pelo menos uma função do Poder Marítimo, nomeando-a (0,2)",
            "Compara com uma escolha alternativa, mostrando por que a mantém (0,2)",
            "Não pontua: escolher ameaça que não está na lista do PEM 2040; justificar por gravidade em vez de dificuldade operacional",
        ],
        fonte="AULA 14.pdf, slides “PEM 2040 - Ameaças”, “Funções do Poder Marítimo”, “Política Naval” e Estudo Dirigido (“Qual das ameaças contidas no PEM 2040 é mais difícil de combater, em termos operacionais? Por quê?”).",
        competencia="Emitir julgamento fundamentado com critérios explícitos e comparar com alternativa.",
        erro="Confundir gravidade estratégica com dificuldade operacional.",
        tempo=12),

    obj("M03", "N4", 8, topico=T,
        conceitos=["REL-T2-M03-C020", "REL-T2-M03-C017", "REL-T2-M03-C005"],
        enunciado="Considere os dados da Economia Azul apresentados em aula: do mar vêm cerca de 95% do petróleo, 80% do gás natural e 45% do pescado produzidos no Brasil, por rotas marítimas escoam mais de 95% do comércio exterior, e nos cerca de 8.500 km de faixa litorânea concentram-se 80% da população e 90% do PIB. Qual conclusão estratégica esses dados sustentam de forma mais rigorosa?",
        alternativas=[
            "Que o Brasil já é uma potência marítima consolidada, uma vez que sua economia depende majoritariamente do mar.",
            "Que a dependência mede vulnerabilidade: quanto maior a fração da economia que transita pelo mar e se concentra no litoral, maior o dano que uma interdição do tráfego marítimo ou uma agressão litorânea pode causar — o que justifica, entre outras decisões, um complexo naval de uso múltiplo que amplie negação do uso do mar, controle de áreas marítimas e projeção de poder.",
            "Que o esforço de defesa deve se concentrar nas fronteiras terrestres, já que o litoral, por concentrar população e PIB, é naturalmente mais protegido.",
            "Que a Economia Azul torna dispensável o investimento em Poder Naval, porque a atividade econômica privada tende a prover a segurança de que necessita.",
            "Que a concentração populacional no litoral é consequência da Economia Azul e não tem implicação para o planejamento de defesa.",
        ],
        correta=1,
        comentario="Dado não é argumento: o que transforma um no outro é o mecanismo. Os percentuais medem **dependência**, e dependência é a definição operacional de vulnerabilidade — é o que se perde se o fluxo for interrompido. Daí decorre uma cadeia verificável no próprio corpus: a intensificação de disputas por áreas marítimas, água doce, alimentos, recursos minerais, biodiversidade e energia respalda a necessidade de fortalecimento do Poder Naval; e a END aponta a necessidade de um complexo naval de uso múltiplo nas proximidades da foz do rio Amazonas, que ampliará negação do uso do mar, controle de áreas marítimas e projeção de poder, com prioridade para o litoral norte e nordeste. Note que três das quatro tarefas básicas aparecem justificadas por dados econômicos.",
        distratores=[
            "Errada. Depender do mar não é o mesmo que ter poder sobre ele — é precisamente o oposto, se a capacidade não acompanha.",
            "Correta. Dependência medida vira vulnerabilidade, que vira justificativa de capacidade e de decisão de infraestrutura.",
            "Errada. Concentração de valor é concentração de alvo, não proteção natural.",
            "Errada. Segurança marítima é bem público; o corpus atribui a Segurança Marítima aos resultados que a Marinha entrega à sociedade.",
            "Errada. Inverte a causalidade e nega a implicação que o próprio PEM 2040 e a END extraem dos dados.",
        ],
        fonte="AULA 14.pdf, slides “Economia Azul” (três), “Política Naval” (intensificação de disputas) e “Ampliação da Capacidade de Apoio Logístico para os Meios Operativos”; Estudo Dirigido (“o conceito de Economia Azul é fundamental para as atribuições da Marinha? Por quê?”).",
        competencia="Converter dado quantitativo em argumento estratégico por meio de mecanismo explícito.",
        erro="Ler dependência econômica do mar como evidência de poder marítimo consolidado.",
        tempo=4),
]

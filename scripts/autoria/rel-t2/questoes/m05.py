# -*- coding: utf-8 -*-
"""Banco do Módulo 05 — China."""

from helper import obj, vf, cor, dis

T = "05-china"

QUESTOES = [
    vf("M05", "N1", 1, topico=T,
       conceitos=["REL-T2-M05-C008"],
       afirmacao="As zonas econômicas especiais criadas por Deng Xiaoping correspondem, no vocabulário do direito do mar, às zonas econômicas exclusivas previstas na CNUDM, uma vez que ambas designam áreas de regime econômico diferenciado.",
       correta=False,
       comentario="**Falsa.** A coincidência de sigla é acidental e o corpus alerta expressamente para ela. **Zona econômica especial** é instrumento de política industrial interna: área com características capitalistas e incentivos fiscais para indústrias e empresas, criada para atrair capital estrangeiro sem abrir a economia inteira. **Zona econômica exclusiva** é instituto de direito internacional do mar, faixa marítima em que o Estado costeiro tem direitos sobre recursos. Uma é decisão de desenvolvimento; a outra é título jurídico sobre espaço marítimo. Trocá-las em uma resposta sobre o Mar do Sul da China inverte completamente o argumento.",
       fonte="AULA 16.pdf, slides “China Deng Xiao Ping” e “China - ZEE”; REL - T2.pdf, alerta expresso (“não confundir com zona econômica exclusiva!”).",
       competencia="Distinguir zona econômica especial de zona econômica exclusiva.",
       erro="Tratar as duas ZEE como o mesmo conceito por homonímia de sigla."),

    obj("M05", "N3", 2, topico=T,
        conceitos=["REL-T2-M05-C002", "REL-T2-M05-C003", "REL-T2-M05-C006"],
        enunciado="Qual encadeamento reproduz corretamente o mecanismo da dupla tensão histórica chinesa, tal como apresentado em aula?",
        alternativas=[
            "Interior mais rico que o litoral → pressão do litoral por redistribuição → abertura comercial forçada → perda de integridade territorial.",
            "Litoral mais rico que o interior, por efeito de um comércio marítimo maior que o terrestre e de ameaças terrestres superiores à cobiça marítima → aumento da desigualdade pressiona o centro político a redistribuir riqueza para o interior → a taxação das elites litorâneas gera tensão política e provoca centralização por parte de Beijing, que retira autonomia do litoral e fecha o regime → diminuição da abertura ao exterior, isto é, autarcização.",
            "Abertura ao exterior → enriquecimento generalizado → desnecessidade de centralização política → federalização do regime.",
            "Ameaça marítima superior à terrestre → concentração de riqueza no interior → deslocamento da capital para o litoral → abertura permanente.",
            "Centralização política em Beijing → enriquecimento do interior → declínio do litoral → fim do comércio marítimo.",
        ],
        correta=1,
        comentario="O mecanismo tem quatro passos e a ordem importa, porque cada passo é causa do seguinte. O ponto de partida é geográfico e comercial: o comércio marítimo chinês sempre foi maior que o terrestre, e a cobiça externa pelo litoral foi menor que as ameaças terrestres do interior — donde litoral rico e interior pobre. A desigualdade pressiona Beijing, preocupada com a integridade territorial, a redistribuir. Redistribuir exige taxar as elites litorâneas, o que gera tensão política. A resposta de Beijing é centralizar, retirando autonomia do litoral e fechando o regime. O resultado é autarcização, com redução da geração de riqueza. O corpus registra o ciclo em Ming, Qing e no governo de Mao — e o Século das Humilhações mostrou o mecanismo em detalhe fiscal: o camponês transacionava em cobre e pagava imposto em prata, e a saída de prata elevou seu preço relativo, de modo que o mesmo governo que não o protegia passou a tomar mais do seu dinheiro.",
        distratores=[
            "Errada. Inverte o ponto de partida: é o litoral que é mais rico.",
            "Correta. É o mecanismo em quatro passos, na ordem causal.",
            "Errada. O corpus afirma o contrário: abertura prolongada aumenta desigualdade e risco de desagregação.",
            "Errada. A ameaça terrestre é a maior, não a marítima.",
            "Errada. Inverte a direção de toda a cadeia.",
        ],
        fonte="AULA 16.pdf, slide “China - Dupla Tensão Histórica”; REL - T2.pdf, seção “A dupla tensão histórica”; Geopolitical Futures, “The Third Opium War” (mecanismo prata/cobre e o interior contra o litoral).",
        competencia="Reproduzir o mecanismo causal da dupla tensão na ordem correta.",
        erro="Descrever a dupla tensão como conflito entre ricos e pobres, sem o passo político da centralização.",
        tempo=4),

    obj("M05", "N2", 3, topico=T,
        conceitos=["REL-T2-M05-C010"],
        enunciado="Sobre o status internacional de Taiwan, assinale a alternativa CORRETA.",
        alternativas=[
            "A Resolução 2758 da Assembleia Geral da ONU, de 1971, determinou a soberania da República Popular da China sobre Taiwan, encerrando qualquer controvérsia jurídica sobre o tema.",
            "O princípio de Uma Só China, sustentado pela República Popular da China, e a política de Uma Só China, praticada pelos Estados Unidos, são formulações distintas: o primeiro afirma que Taiwan é parte inalienável do território chinês e que a RPC é o único governo legítimo; a segunda reconhece diplomaticamente a RPC e não apoia a independência de Taiwan, mas mantém laços não oficiais com Taipei, amparados no Taiwan Relations Act, nos Três Comunicados Conjuntos e nas Seis Garantias.",
            "Taiwan está diplomaticamente isolada, não participando de nenhum foro internacional, uma vez que a admissão de novos membros na ONU depende de recomendação do Conselho de Segurança.",
            "A chamada ambiguidade estratégica consiste no compromisso formal dos Estados Unidos de intervir militarmente em caso de ataque a Taiwan, sem especificar os meios que empregariam.",
            "O chamado escudo de silício designa o sistema de defesa antimíssil instalado na ilha com tecnologia americana.",
        ],
        correta=1,
        comentario="A distinção **princípio** (posição da RPC) × **política** (posição dos EUA) é a mais cobrável do tema, porque as duas expressões são quase iguais e significam coisas diferentes. Quanto à Resolução 2758, ela “restaurou” os direitos da RPC nas Nações Unidas e retirou os delegados de Chiang Kai-shek, mas suas consequências jurídicas permanecem disputadas: Pequim sustenta que resolveu em definitivo a representação de toda a China; os Estados Unidos e Taiwan argumentam que tratou apenas da representação na ONU, sem determinar soberania territorial. Reduzi-la a um ato que “declarou Taiwan parte da China” é simplificação que a própria fonte adverte contra.",
        distratores=[
            "Errada. A resolução tratou de representação; a consequência jurídica é disputada.",
            "Correta. A distinção entre princípio e política, com os instrumentos de cada lado.",
            "Errada. Taiwan participa da OMC desde 2002, como “Território Aduaneiro Separado de Taiwan, Penghu, Kinmen e Matsu”, e da APEC como economia-membro, ambas sob a denominação Chinese Taipei.",
            "Errada. Ambiguidade estratégica é o oposto: apoio à capacidade de autodefesa SEM definir de antemão como se responderia a um conflito.",
            "Errada. Escudo de silício designa a centralidade da ilha na produção global de semicondutores, que é simultaneamente vulnerabilidade e proteção.",
        ],
        fonte="IDEG, “Taiwan e as Nações Unidas: a política de Uma Só China e os limites do reconhecimento internacional”; AULA 16.pdf, slide “China recente” (Questão Taiwan) e mapa do Estreito de Taiwan.",
        competencia="Distinguir princípio de política de Uma Só China e interpretar corretamente a Resolução 2758.",
        erro="Afirmar que a Resolução 2758 decidiu a soberania sobre Taiwan.",
        tempo=3),

    obj("M05", "N3", 4, topico=T,
        conceitos=["REL-T2-M05-C012", "REL-T2-M05-C011"],
        enunciado="Sobre a estratégia chinesa de antiacesso e negação de área, assinale a alternativa INCORRETA.",
        alternativas=[
            "O antiacesso (A2) busca impedir a entrada do adversário em determinada região estratégica e envolve o uso de mísseis balísticos de longo alcance e de submarinos em locais estratégicos.",
            "A negação de área (AD) busca dificultar as ações do adversário depois de ele já ter entrado na região estratégica, e envolve mísseis antinavio e interferência eletrônica.",
            "A China aplica o antiacesso na região da Primeira Cadeia de Ilhas, que abrange desde as ilhas ao sul do Japão, em Okinawa, passando por Taiwan e Filipinas, até o Estreito de Málaca.",
            "As ilhas empregadas para o antiacesso são necessariamente distintas das empregadas para a negação de área, uma vez que as duas estratégias exigem alcances e posições incompatíveis.",
            "Entre as ações que indicam o emprego dessa estratégia estão a instalação de sistemas de mísseis e de bases navais em províncias ao sul, como Hainan, a militarização de ilhas artificiais nas Spratly e a presença de navios chineses na região.",
        ],
        correta=3,
        comentario="A alternativa incorreta inventa uma incompatibilidade que o corpus nega expressamente: **as mesmas ilhas são usadas tanto para a estratégia A2 quanto para AD**. Spratly, Paracel e Hainan aparecem nos dois papéis. A diferença entre A2 e AD não é de posição geográfica, e sim de **alcance e função**: manter o adversário fora (longe, com mísseis balísticos e submarinos) ou dificultar sua ação depois que entrou (perto, com mísseis antinavio e guerra eletrônica). Confundir isso é o erro conceitual mais comum do tema.",
        distratores=[
            "Correta e verdadeira. É a definição operacional de A2.",
            "Correta e verdadeira. É a definição operacional de AD.",
            "Correta e verdadeira. É o alcance da Primeira Cadeia registrado no corpus.",
            "INCORRETA — resposta da questão. As mesmas ilhas servem às duas estratégias.",
            "Correta e verdadeira. São as ações que o corpus arrola como indício do emprego da estratégia.",
        ],
        fonte="AULA 16.pdf, slides “Mar do Sul da China - A2/AD” e mapa das reivindicações; REL - T2.pdf, definições de A2 e AD e o alcance da Primeira Cadeia; AULA 15.pdf, slide “A2/AD - Anti-access/Area Denial”.",
        competencia="Distinguir A2 de AD por alcance e função, e não por geografia.",
        erro="Supor que A2 e AD empregam posições geográficas mutuamente exclusivas.",
        tempo=4),

    dis("M05", "N4", 5, topico=T,
        conceitos=["REL-T2-M05-C013", "REL-T2-M05-C014", "REL-T2-M00-C013"],
        contexto="Um Estado asiático de grande população depende de um único estreito para a passagem da maior parte de suas importações de energia e de alimentos e de suas exportações. Esse estreito é vigiado por marinhas de países aliados de uma potência rival. O Estado em questão financia portos e corredores terrestres em países vizinhos, negocia com um terceiro país a abertura de um canal que contornaria o estreito e conduz um programa global de infraestrutura com ramos terrestre e marítimo.",
        enunciado="Analise o caso pela matriz de cenários, identificando vulnerabilidade, instrumentos, o efeito sobre a soberania dos países anfitriões e o interesse de um terceiro ator contrariado. Conclua indicando se os instrumentos resolvem a vulnerabilidade.",
        gabarito=(
            "**Ator e objetivo.** O ator é a China; o objetivo é assegurar o fluxo de energia, alimentos e comércio, que é condição do seu imperativo de manter abertura ao exterior para garantir prosperidade econômica.\n\n"
            "**Condicionante e vulnerabilidade.** A condicionante é geográfica: o litoral chinês é fechado pela Primeira Cadeia de Ilhas, e a saída para o Índico passa pelo Estreito de Málaca. A vulnerabilidade é a dependência de um único ponto de passagem obrigatória vigiado por terceiros — agravada por uma mudança estrutural: a China, historicamente autossuficiente, hoje importa alimento e petróleo, e a projeção é de que essas importações cresçam. A perspectiva registrada em aula é a de um país que se vê “engaiolado” pela presença de bases americanas em países aliados como Japão, Coreia do Sul, Filipinas e Taiwan, além de meios navais e aéreos americanos na região.\n\n"
            "**Instrumentos.** Três, todos econômicos e de infraestrutura, não militares: (1) corredores terrestres de acesso ao mar, com apoio de Mianmar e Bangladesh; (2) investimento na possibilidade do Canal de Kra, na Tailândia, que contornaria Málaca e aumentaria a influência chinesa tanto no Golfo da Tailândia quanto na Baía de Bengala; (3) a iniciativa Um Cinturão, Uma Rota, com ramo terrestre e ramo marítimo, financiada majoritariamente com capital chinês.\n\n"
            "**Efeito sobre a soberania dos anfitriões.** Há precedente. O funcionamento do Canal de Suez e do Canal do Panamá se deu com presença física de representantes das potências construtoras, inclusive em atividades de segurança — e mecanismo análogo é utilizado em projetos de infraestrutura financiados pela China. Acrescente-se que a iniciativa deixa países endividados junto a bancos chineses, mesmo a juros baixos, em relação de dependência. Logo, a soberania do país anfitrião pode ser afetada, não por conquista, mas por dependência e presença.\n\n"
            "**Terceiro ator contrariado.** A Índia. O canal aumentaria a influência chinesa em áreas onde a Índia projeta poder, como a Baía de Bengala e o Sudeste Asiático, tornando-a mais ameaçada. A Índia já qualificou a iniciativa de infraestrutura como “empresa colonial, deixando dívida e comunidades destruídas em seu rastro”, criticou o corredor que atravessa a Caxemira ocupada pelo Paquistão e boicotou a cúpula do projeto.\n\n"
            "**Lente teórica.** Predomina leitura realista: a ação é motivada por vulnerabilidade de segurança — energética e alimentar — e busca reduzir dependência de pontos controlados por rival. Há leitura liberal secundária defensável, já que os instrumentos são de integração comercial e criam interdependência; mas a justificativa é a de contornar bloqueio, não a de maximizar ganho mútuo.\n\n"
            "**Conclusão.** Os instrumentos reduzem, mas não eliminam a vulnerabilidade: substituem a dependência de um estreito vigiado pela dependência da estabilidade política e da anuência de países anfitriões. A vulnerabilidade muda de natureza — de geográfica para política — e se dispersa entre mais atores. Enquanto a China não tiver capacidade de assegurar por si as linhas de comunicação marítimas, no sentido de Mahan, a solução permanece mitigatória.\n\n"
            "**Resposta insuficiente:** dizer que a China quer fugir do Estreito de Málaca. **Satisfatória:** identifica vulnerabilidade e instrumentos. **Nível MB:** percorre a matriz, nomeia o precedente de Suez e Panamá, identifica o interesse indiano contrariado, escolhe a lente e conclui que a vulnerabilidade muda de natureza em vez de desaparecer."
        ),
        criterios=[
            "Identifica a vulnerabilidade como dependência de ponto de passagem obrigatória e registra a perda de autossuficiência (0,2)",
            "Nomeia pelo menos dois instrumentos concretos (0,2)",
            "Discute o efeito sobre a soberania do anfitrião com o precedente de Suez e Panamá ou a dependência financeira (0,2)",
            "Identifica a Índia como ator contrariado e explica por quê (0,2)",
            "Conclui avaliando se os instrumentos resolvem a vulnerabilidade, e não apenas listando-os (0,2)",
            "Não pontua: listar instrumentos sem avaliar eficácia; omitir o terceiro ator",
        ],
        fonte="AULA 16.pdf, slides “Perspectiva Chinesa”, mapa do Estreito de Málaca e “Investimentos no Exterior e One Belt, One Road”; REL - T2.pdf, seção PERSPECTIVA CHINESA; Gabarito da P2 REL 2024, questão 17 (mesmo objeto geopolítico, com enunciado, subitens e gabarito distintos); Geopolitical Futures, “The Third Opium War” (perda da autossuficiência).",
        competencia="Aplicar a matriz de cenários a um caso de vulnerabilidade logística e avaliar a eficácia dos instrumentos.",
        erro="Listar os instrumentos sem avaliar se resolvem a vulnerabilidade.",
        tempo=15),

    obj("M05", "N3", 6, topico=T,
        conceitos=["REL-T2-M05-C007", "REL-T2-M00-C005"],
        enunciado="Em 1960 ocorre o Grande Cisma entre a China e a União Soviética, e em 1971 e 1972 os Estados Unidos promovem uma aproximação com Pequim que resultou, no mesmo período, na entrada da República Popular da China no Conselho de Segurança da ONU. Qual leitura explica melhor a conduta americana?",
        alternativas=[
            "Leitura liberal, porque a aproximação se deu por meio de instituições multilaterais e ampliou a participação chinesa no sistema internacional.",
            "Leitura construtivista, porque a aproximação exigiu a reconstrução da identidade chinesa perante o Ocidente antes de qualquer movimento diplomático.",
            "Leitura realista: diante de uma fenda entre dois Estados comunistas, os Estados Unidos aproveitaram a fragilidade para se aliar à China e dividir o bloco na Ásia, isolando a URSS — cálculo de equilíbrio de poder em que o interesse de segurança prevaleceu sobre a afinidade ideológica.",
            "Nenhuma leitura se aplica, porque a aproximação foi resultado de iniciativa pessoal de negociadores, sem cálculo estratégico de Estado.",
            "Leitura realista, mas apenas do lado chinês, já que para os Estados Unidos a decisão foi de natureza econômica, visando ao acesso ao mercado chinês.",
        ],
        correta=2,
        comentario="É o caso mais nítido de pragmatismo realista do corpus. O Grande Cisma não foi divergência pessoal: a China acusava a URSS de se preocupar com os próprios interesses e não com o comunismo internacional, e via a URSS fazendo concessões a interesses ocidentais; a URSS via a China como comunista radical. Os Estados Unidos exploraram a fenda: visita secreta de Kissinger em 1971, visita oficial de Nixon em 1972, reatamento de relações e reconhecimento formal em 1979. A RPC entrou no Conselho de Segurança em 1971, no contexto dessa aproximação e do isolamento diplomático da República da China. Dois Estados capitalista e comunista se aproximam contra um terceiro comunista — o interesse de segurança venceu a afinidade ideológica nos dois lados.",
        distratores=[
            "Errada. A instituição foi consequência do arranjo, não sua razão; o objetivo declarado era isolar a URSS.",
            "Errada. O corpus não apresenta mudança identitária como variável; apresenta cálculo de equilíbrio de poder.",
            "Correta. Equilíbrio de poder e interesse de segurança acima da afinidade ideológica.",
            "Errada. A visita secreta prévia e o arranjo de trégua indicam cálculo de Estado, não improviso pessoal.",
            "Errada. O acesso econômico veio depois e por consequência; a razão registrada é o isolamento da URSS.",
        ],
        fonte="AULA 16.pdf, slides “China - Maoísmo” (Grande Cisma, trégua com os EUA visando antagonizar a URSS); REL - T2.pdf, detalhamento do Grande Cisma, visita de Kissinger em 1971, visita de Nixon em 1972, reconhecimento em 1979 e entrada da RPC no CSNU em 1971; AULA 15.pdf, slide “1. Realismo”.",
        competencia="Aplicar a lente realista a um caso em que a afinidade ideológica é contrariada.",
        erro="Ler a aproximação como abertura institucional em vez de cálculo de equilíbrio de poder.",
        tempo=4),

    obj("M05", "N3", 7, topico=T,
        conceitos=["REL-T2-M05-C015", "REL-T2-M04-C008"],
        enunciado="Segundo dado de 2020 apresentado em aula, a marinha chinesa passou a contar com mais navios que a americana (332 contra 291, incluindo submarinos), e o relatório do Congresso dos Estados Unidos registra, entre 2005 e 2020, a incorporação chinesa de 49 corvetas, 35 naves de patrulha costeira com mísseis, 2 porta-aviões, 11 destróieres, 6 fragatas, 1 cruzador e 17 embarcações para ataque anfíbio. Qual conclusão é sustentada por esses dados?",
        alternativas=[
            "Que a China superou os Estados Unidos em poder naval, uma vez que poder naval se mede pelo número de unidades disponíveis.",
            "Que a composição da força revela doutrina: o predomínio de corvetas e de patrulhas costeiras com mísseis indica investimento em negação regional, coerente com antiacesso e negação de área, e não em projeção global — cuja comparação exigiria considerar tonelagem, porta-aviões, rede de bases no exterior e experiência operacional, além do fato de que a supremacia americana é potencializada por 9 marinhas aliadas entre as 12 seguintes.",
            "Que os dados são irrelevantes, porque contagem de navios não guarda relação com capacidade militar.",
            "Que a China abandonou a estratégia de antiacesso, já que a incorporação de dois porta-aviões indica opção por projeção de poder distante.",
            "Que a marinha americana entrou em declínio absoluto, uma vez que perdeu a primeira posição em número de unidades.",
        ],
        correta=1,
        comentario="O dado é verdadeiro e a conclusão apressada é falsa — combinação de que o professor gosta. Contagem de cascos não mede poder naval: mede número de cascos. O que a **composição** revela é a doutrina. Corvetas e patrulhas costeiras com mísseis são plataformas de alcance regional, adequadas a manter o adversário fora de uma área definida; são a materialização de A2/AD, não de projeção oceânica. Dois porta-aviões não invertem isso, e a comparação honesta precisa das variáveis que a alternativa correta lista — inclusive a cláusula das alianças, que multiplica o poder relativo americano.",
        distratores=[
            "Errada. Poder naval não se reduz a número de unidades; ignora tonelagem, alcance, bases e alianças.",
            "Correta. A composição revela a doutrina e enumera as variáveis que faltam à comparação.",
            "Errada. Os dados são relevantes como evidência de doutrina; o erro está na inferência apressada, não no dado.",
            "Errada. Dois porta-aviões não substituem a estrutura de negação regional predominante na composição.",
            "Errada. Declínio absoluto exige redução de poder em si, o que os indicadores americanos não sustentam.",
        ],
        fonte="AULA 16.pdf, slides “Marinha Chinesa”, “Previsão do crescimento da Marinha Chinesa” e “A marinha chinesa possui agora mais navios que os EUA” (fonte: relatório do Departamento de Defesa dos EUA, 2024); AULA 15.pdf, slide “Declínio?” (cláusula das alianças).",
        competencia="Recusar inferência apressada a partir de contagem, lendo a composição como evidência de doutrina.",
        erro="Concluir superioridade naval a partir do número de cascos.",
        tempo=4,
        verificacao="Antes de comparar duas marinhas, pergunte que TAREFA cada composição permite cumprir, e não quantos navios existem."),

    obj("M05", "N4", 8, topico=T,
        conceitos=["REL-T2-M05-C016", "REL-T2-M05-C006", "REL-T2-M04-C012"],
        enunciado="Avalie os itens sobre a analogia entre as Guerras do Ópio e a competição contemporânea entre Estados Unidos e China, e aponte a alternativa que contém apenas itens INCORRETOS. **I.** Em ambos os casos, uma potência ocidental insatisfeita com os termos da relação econômica busca redefini-los, primeiro por instrumentos econômicos e depois por pressão mais direta. **II.** A analogia é integral, porque a situação interna chinesa hoje é equivalente à do fim da dinastia Qing: regime que perde o controle sobre o interior e sobre a burocracia. **III.** A memória do Século das Humilhações é irrelevante para o cálculo político contemporâneo, uma vez que se trata de eventos com mais de um século. **IV.** Aceitar as exigências externas nos termos propostos pela potência rival tenderia a ser lido internamente como versão moderna dos tratados desiguais, o que restringe a margem de manobra do governo chinês. **V.** A situação é historicamente inédita em um aspecto decisivo: nunca antes houve, simultaneamente, uma China poderosa e uns Estados Unidos poderosos.",
        alternativas=[
            "I, II e III.",
            "II e III.",
            "II, III e V.",
            "I, IV e V.",
            "III, IV e V.",
        ],
        correta=1,
        comentario="Os itens **II** e **III** são os incorretos. O **II** é falso porque a fonte registra três diferenças estruturais que impedem a analogia integral: a dinastia Qing era usurpadora estrangeira, o Partido Comunista Chinês é han e conta com o recurso do nacionalismo; o PCC é jovem em termos dinásticos; e não demonstra perder o controle — ao contrário, ampliou o controle sobre a sociedade. O **III** é falso e inverte o argumento central: a memória das humilhações é justamente o que dá ao PCC mais legitimidade que o marxismo, e o “rejuvenescimento nacional” fala a esse sentimento. Os itens I, IV e V são corretos: I descreve o mecanismo comum, IV descreve a restrição interna que decorre da memória e V registra a novidade histórica apontada em aula — nunca houve uma China poderosa e uns Estados Unidos poderosos ao mesmo tempo.",
        distratores=[
            "Errada. O item I é correto: descreve o mecanismo comum aos dois momentos.",
            "Correta. Apenas II e III são incorretos.",
            "Errada. O item V é correto e é o ponto mais destacado pelas fontes de aprofundamento.",
            "Errada. Os três itens dessa alternativa são corretos.",
            "Errada. Os itens IV e V são corretos.",
        ],
        fonte="Geopolitical Futures, “The Third Opium War”, seções “A New Chapter” e “Where History Diverges”; BARTOSIAK, “The Politics of Space” (novidade histórica da simultaneidade); AULA 16.pdf, slide “China - Século das Humilhações”; AULA 15.pdf, slide “Mandato Divino X Destino Manifesto”.",
        competencia="Avaliar os limites de uma analogia histórica, distinguindo mecanismo comum de equivalência integral.",
        erro="Levar a analogia do ópio ao ponto de equivalência integral, ignorando as diferenças estruturais.",
        tempo=5),
]

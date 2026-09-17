// GERADO por scripts/autoria/rel-t2/build.py. Não editar à mão.
import type { Questao } from '@tipos/question';

export const questoesCanonicas: Questao[] = [
  {
    "id": "REL-T2-M00-VF-N1-001",
    "topico": "00-metodo-e-matriz-de-cenarios",
    "dificuldade": "facil",
    "conceptIds": [
      "REL-T2-M00-C001"
    ],
    "fonte": "AULA 13.pdf, primeiro slide; AULA 12.pdf, primeiro slide.",
    "competencia": "Determinar a aula pelo título interno do deck, não pelo nome do arquivo.",
    "erroProvavel": "Confiar no nome da pasta ou do arquivo para identificar a aula.",
    "armadilha": "Confiar no nome da pasta ou do arquivo para identificar a aula.",
    "tempoEstimadoMin": 2,
    "assinatura": [
      "vf",
      "N1",
      "âncora — recuperação de lista fechada ou definição literal",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "vf",
    "afirmacao": "O arquivo cujo nome é “AULA 13.pdf” contém, no seu primeiro slide, o título interno “Aula 13 — Política Externa Brasileira”.",
    "correta": false,
    "comentario": "**Falsa.** O arquivo “AULA 13.pdf” abre com “Aula 14 – SUE 1.11 PND, END, PESD”. O deslocamento é de uma unidade em todos os seis decks: quem quiser a Aula 13 (Política Externa Brasileira) precisa abrir “AULA 12.pdf” — que, além disso, traz as Aulas 13 e 14 emendadas. A regra do curso é simples: o número da aula é o do TÍTULO INTERNO, nunca o do nome do arquivo.",
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M00-OBJ-N2-002",
    "topico": "00-metodo-e-matriz-de-cenarios",
    "dificuldade": "medio",
    "conceptIds": [
      "REL-T2-M00-C002",
      "REL-T2-M02-C003"
    ],
    "fonte": "AULA 13.pdf, slide “Política Nacional de Defesa/Estratégia Nacional de Defesa”; AULA 12.pdf, mesmo slide em versão anterior; fontes-manifesto.json, conflito CF-01.",
    "competencia": "Resolver conflito entre fontes aplicando a hierarquia declarada.",
    "erroProvavel": "Resolver divergência por contagem de fontes em vez de por hierarquia.",
    "armadilha": "Resolver divergência por contagem de fontes em vez de por hierarquia.",
    "tempoEstimadoMin": 3,
    "assinatura": [
      "obj",
      "N2",
      "reconhecimento aplicado — identificar o conceito em situação descrita",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "multipla",
    "enunciado": "Um Aspirante encontra duas informações incompatíveis sobre a PND/END. O resumo de um colega e um deck em circulação dizem que a versão vigente é a de 2016, aprovada pelo Congresso em 2018. Outro deck da mesma aula, mais recente, diz que a versão atual é de 18 de novembro de 2025, com link para o Decreto nº 12.725. Aplicando a hierarquia das fontes adotada no curso, qual conduta é correta?",
    "alternativas": [
      "Adotar a informação de 2016, porque é a que aparece em duas fontes contra uma, e maioria de testemunhos prevalece.",
      "Adotar a informação de 18/11/2025, porque entre dois slides do professor prevalece o mais recente, e registrar que decks antigos ainda citam 2016.",
      "Descartar as duas informações e responder apenas que a PND foi aprovada pelo Congresso em 2005, 2012 e 2018, evitando a data da versão.",
      "Adotar a informação de 2016 no estudo e a de 2025 na prova, porque o professor tende a cobrar o que está no material mais antigo, já consolidado.",
      "Buscar a resposta em pesquisa externa atual e adotá-la, porque a divergência entre os slides torna o corpus autorizado insuficiente."
    ],
    "correta": 1,
    "comentario": "A hierarquia coloca o slide do professor no topo. Quando dois slides do MESMO professor sobre a MESMA aula divergem, a divergência não é erro de extração: é atualização. Prevalece o mais recente, e o registro da versão antiga vira matéria de pegadinha — aprovação pelo Congresso (2005, 2012, 2018) e versão em vigor (nov/2025) são coisas diferentes.",
    "explicacaoDistratores": [
      "Errada. Contagem de testemunhos não é critério: o resumo do colega é nível 3 e o deck antigo foi superado pelo próprio professor.",
      "Correta. Entre slides do professor prevalece o mais recente; a informação antiga é preservada como registro, não como resposta.",
      "Errada. Omitir a informação disponível é perder ponto por silêncio; as duas datas coexistem com sentidos distintos.",
      "Errada. Não há evidência no corpus de que o professor cobre material superado, e estudar deliberadamente o dado errado é indefensável.",
      "Errada. A pesquisa externa está autorizada apenas para caixas de conjuntura datadas, nunca para substituir a explicação do professor."
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M00-OBJ-N3-003",
    "topico": "00-metodo-e-matriz-de-cenarios",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M00-C004",
      "REL-T2-M00-C005",
      "REL-T2-M00-C006"
    ],
    "fonte": "AULA 15.pdf, slides “Segundo as principais Teorias em RI — 1. Realismo”, “2. Liberais” e “3. Construtivismo”; perfil-cobranca.json (aplicação inédita alta).",
    "competencia": "Classificar um cenário pela variável explicativa predominante, recusando a associação por palavra-chave.",
    "erroProvavel": "Classificar como liberal qualquer caso em que apareça uma instituição.",
    "armadilha": "Classificar como liberal qualquer caso em que apareça uma instituição.",
    "tempoEstimadoMin": 4,
    "assinatura": [
      "obj",
      "N3",
      "aplicação inédita — decidir em cenário novo com distratores próximos",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "multipla",
    "enunciado": "Um Estado costeiro de porte médio assina um acordo de cooperação em segurança marítima com uma potência extrarregional. O acordo cria um comitê permanente, prevê exercícios conjuntos anuais e transferência de tecnologia de sensores. Nos documentos internos do Estado costeiro, o acordo é justificado pela necessidade de monitorar uma área marítima onde uma terceira potência ampliou a presença de embarcações pesqueiras e de navios de pesquisa. Qual leitura explica melhor o caso, e por quê?",
    "alternativas": [
      "Leitura liberal, porque a criação de um comitê permanente e de exercícios anuais institucionaliza a cooperação, e instituições são o objeto próprio da lente liberal.",
      "Leitura construtivista, porque a escolha do parceiro revela identidade compartilhada e normas comuns entre os dois Estados signatários.",
      "Leitura realista, porque a justificativa interna vincula o acordo à percepção de ameaça e ao ganho de capacidade de monitoramento, e cooperar por segurança é comportamento realista.",
      "Nenhuma leitura se aplica, porque cooperação e conflito pertencem a lentes distintas e o caso mistura as duas.",
      "Leitura liberal, porque a transferência de tecnologia aumenta a interdependência entre os signatários e reduz o incentivo ao conflito entre eles."
    ],
    "correta": 2,
    "comentario": "O que decide é a variável explicativa PREDOMINANTE no enunciado, não a presença de uma palavra-pista. Há instituição no caso (comitê, exercícios), mas a justificativa declarada é percepção de ameaça e ganho de capacidade — segurança e poder. Estado realista coopera, e coopera justamente quando a cooperação serve à segurança. O slide do professor é explícito: no realismo, o imperativo central é manter a segurança e preservar o poder do Estado.",
    "explicacaoDistratores": [
      "Errada. A existência de instituição é pista, não prova. O comitê é o meio; o fim declarado é segurança.",
      "Errada. O enunciado não traz identidade, norma ou valor compartilhado — traz percepção de ameaça material.",
      "Correta. A variável predominante é ameaça percebida e ganho de capacidade; a forma institucional é instrumento.",
      "Errada. A cooperação não é exterior ao realismo: o próprio slide trata cooperação a serviço de segurança e poder.",
      "Errada. Interdependência entre os signatários não é o motivo declarado; o motivo é a conduta de um terceiro ator."
    ],
    "resolucaoPassoAPasso": [
      "1. Ator e objetivo: Estado costeiro de porte médio; objetivo declarado é monitorar área marítima.",
      "2. Ameaça percebida: ampliação da presença de uma terceira potência.",
      "3. Instrumento: acordo institucional com transferência de tecnologia.",
      "4. Teste da lente: o instrumento é institucional, mas a razão é de segurança. Predomina poder e segurança.",
      "5. Contraponto: a forma institucional cria expectativas e custos de ruptura, o que abre espaço para leitura liberal secundária — mas não é o que o enunciado destaca."
    ],
    "verificacaoIndependente": "Releia o enunciado procurando a JUSTIFICATIVA, não os substantivos. A justificativa é que decide.",
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M00-COR-N3-004",
    "topico": "00-metodo-e-matriz-de-cenarios",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M00-C005",
      "REL-T2-M00-C006",
      "REL-T2-M00-C007",
      "REL-T2-M00-C008"
    ],
    "fonte": "AULA 15.pdf, slides das três teorias; perfil-cobranca.json (correlação de melhores pares, formato observado na SOPA T1).",
    "competencia": "Atribuir a lente adequada pela variável predominante, distinguindo instituição-instrumento de instituição-restrição.",
    "erroProvavel": "Marcar L sempre que houver organismo ou norma no enunciado.",
    "armadilha": "Marcar L sempre que houver organismo ou norma no enunciado.",
    "tempoEstimadoMin": 6,
    "assinatura": [
      "cor",
      "N3",
      "aplicação inédita — decidir em cenário novo com distratores próximos",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "correlacione",
    "titulo": "Correlacione cada situação à lente que MELHOR a explica",
    "chaves": [
      {
        "chave": "R",
        "texto": "Realismo — imperativo central: sobrevivência, poder e segurança em sistema anárquico"
      },
      {
        "chave": "L",
        "texto": "Liberalismo/institucionalismo — imperativo central: maximizar cooperação e ganhos da interdependência"
      },
      {
        "chave": "C",
        "texto": "Construtivismo — imperativo central: preservar e promover identidades, normas e valores tidos por legítimos"
      }
    ],
    "itens": [
      {
        "texto": "Um país eleva o gasto de defesa depois de um rival regional incorporar submarinos de nova geração, sem qualquer mudança em seu discurso oficial sobre valores.",
        "chave": "R"
      },
      {
        "texto": "Dois vizinhos historicamente rivais passam a tratar a fronteira comum como área de livre circulação depois de uma geração de institucionalidade compartilhada, e as forças armadas de ambos deixam de planejar o vizinho como hipótese de emprego.",
        "chave": "C"
      },
      {
        "texto": "Um Estado adere a um organismo multilateral de comércio para reduzir incerteza sobre tarifas e ampliar previsibilidade para seus exportadores.",
        "chave": "L"
      },
      {
        "texto": "Um Estado que se declara defensor do multilateralismo veta, em um conselho, uma resolução que atingiria diretamente um aliado seu.",
        "chave": "R"
      },
      {
        "texto": "Um Estado nega o ensino da língua nativa em uma região incorporada e impõe a língua do centro político como única na escola.",
        "chave": "C"
      },
      {
        "texto": "Um bloco regional adota cláusula que suspende membros cujo governo rompa a ordem democrática, e a cláusula é acionada contra um membro.",
        "chave": "L"
      }
    ],
    "comentario": "A regra é sempre a mesma: identifique a variável que o enunciado destaca. **R** aparece quando o texto destaca ameaça, capacidade relativa ou interesse acima de norma declarada — inclusive quando o ator usa uma instituição para isso (o veto é instrumento institucional a serviço de interesse). **L** aparece quando o texto destaca redução de incerteza, ganho mútuo e regra que obriga o próprio autor. **C** aparece quando o texto destaca mudança na percepção de quem é amigo ou inimigo, ou a imposição/promoção de identidade. Note que o item do veto tem instituição e o item da cláusula democrática tem norma: a diferença é que no primeiro a instituição serve ao interesse do ator e no segundo a regra restringe o próprio bloco.",
    "modalidades": [
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M00-DIS-N4-005",
    "topico": "00-metodo-e-matriz-de-cenarios",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M00-C009",
      "REL-T2-M00-C008",
      "REL-T2-M00-C010"
    ],
    "fonte": "AULA 15.pdf, slides das três teorias; P1 REL 2024, questão 1 (o Brexit aparece como estímulo de prova); Gabarito da P2 REL 2024 (padrão de resposta com mecanismo causal explícito); perfil-cobranca.json.",
    "competencia": "Sustentar uma conclusão em caso ambíguo, com duas leituras construídas e evidência que arbitre entre elas.",
    "erroProvavel": "Dar resposta única a caso ambíguo, ou classificar sem apontar a evidência.",
    "armadilha": "Dar resposta única a caso ambíguo, ou classificar sem apontar a evidência.",
    "tempoEstimadoMin": 12,
    "assinatura": [
      "dis",
      "N4",
      "integração — cruza módulos, arbitra entre leituras ou projeta consequência",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "discursiva",
    "enunciado": "Construa as DUAS leituras possíveis desse caso, escolha a que explica melhor o resultado e justifique a escolha por evidência. Sua resposta deve deixar claro que a classificação depende do aspecto destacado, e não do fato em si.",
    "gabaritoComentado": "**Leitura realista.** Tese: predomina a lógica de soberania e autonomia decisória. Conceito: o imperativo realista é preservar a capacidade de decidir por si em sistema anárquico; interdependência profunda é vista como restrição à autonomia, não como ganho. Evidência: as razões de saída nomeiam controle de fronteiras, de regulação e de jurisdição de última instância — três dimensões de autoridade, não de bem-estar. Nexo: quem trata autoridade sobre o próprio território como bem não negociável aceita perda material para recuperá-la; logo, custo econômico conhecido não dissuade.\n\n**Leitura liberal/institucional.** Tese: predomina a lógica de interdependência e de custos de ruptura. Conceito: instituições reduzem incerteza e criam ganhos que se perdem ao sair; integração gera dependência mútua que encarece a saída. Evidência: barreiras alfandegárias novas, reorganização de cadeias, perda de acesso preferencial e anos de renegociação. Nexo: se a interdependência é o que explica o caso, o comportamento esperado seria permanecer — e é exatamente por isso que essa leitura explica melhor o CUSTO do que a DECISÃO.\n\n**Arbitragem.** A leitura que explica melhor o RESULTADO é a realista, porque o resultado foi sair apesar dos custos: a variável que prevaleceu na decisão foi autonomia, não bem-estar agregado. A leitura institucional explica melhor as CONSEQUÊNCIAS e a dificuldade da transição. Conclusão fundamentada: em casos ambíguos, a lente correta é a que explica a variável que o enunciado coloca em primeiro plano — aqui, se o comando pedisse as consequências da saída, a resposta mudaria de lente sem que o fato mudasse.\n\n**Nuance obrigatória.** Há ainda uma leitura construtivista defensável (identidade nacional distinta da identidade do bloco, construída historicamente), que não precisa ser desenvolvida, mas cuja menção demonstra que o aluno não trata o caso como binário.\n\n**Resposta insuficiente:** “É realismo porque o país buscou seus interesses.” Não diz qual interesse, qual condicionante, qual ação nem qual relação causal. **Resposta satisfatória:** constrói as duas leituras e escolhe uma, mas não diz qual evidência sustenta a escolha. **Resposta de nível MB:** constrói as duas, escolhe uma, ancora a escolha em evidência específica do enunciado, reconhece a leitura concorrente e explicita que a classificação depende do aspecto destacado.",
    "criterios": [
      "Constrói a leitura realista com conceito e evidência do enunciado (0,2)",
      "Constrói a leitura liberal/institucional com conceito e evidência do enunciado (0,2)",
      "Escolhe uma leitura e nomeia a evidência específica que a sustenta (0,3)",
      "Explicita que a classificação depende do aspecto destacado pelo enunciado (0,2)",
      "Reconhece uma leitura concorrente ou nuance sem abandonar a conclusão (0,1)",
      "Não pontua: afirmar a classificação sem nexo causal, ou tratar o caso como tendo resposta única e óbvia"
    ],
    "contexto": "Considere um Estado insular europeu que, por decisão majoritária em referendo, deixa um bloco de integração regional de que era membro há décadas. Ao longo do processo, dois conjuntos de razões apareceram no debate público: por um lado, recuperar o controle sobre fronteiras, sobre regulação econômica e sobre decisões judiciais de última instância; por outro, os custos de sair — barreiras alfandegárias novas, reorganização de cadeias produtivas, perda de acesso preferencial a um mercado vizinho e anos de negociação para reconstruir regras que já existiam.",
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M00-OBJ-N3-006",
    "topico": "00-metodo-e-matriz-de-cenarios",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M00-C003",
      "REL-T2-M00-C011"
    ],
    "fonte": "matriz-cobertura.json (matriz de dez passos desta autoria); T2_2025.pdf, itens 2, 4 e 5 do trabalho; AULA 16.pdf, slide “Perspectiva Chinesa”.",
    "competencia": "Situar corretamente cada elemento de um cenário nos dez passos da matriz.",
    "erroProvavel": "Confundir recursos (o que tem) com instrumentos (o que usa).",
    "armadilha": "Confundir recursos (o que tem) com instrumentos (o que usa).",
    "tempoEstimadoMin": 3,
    "assinatura": [
      "obj",
      "N3",
      "aplicação inédita — decidir em cenário novo com distratores próximos",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "multipla",
    "enunciado": "Aplicando a matriz de análise de cenários em dez passos, um Aspirante escreve sobre um Estado que, temendo o bloqueio de um estreito por onde passa a maior parte de sua energia importada, financia a construção de um porto em país terceiro e negocia um corredor ferroviário alternativo. Na matriz, o porto financiado e o corredor ferroviário ocupam qual posição, e por quê?",
    "alternativas": [
      "Vulnerabilidades, porque dependem da estabilidade política do país terceiro.",
      "Recursos, porque passam a integrar as capacidades disponíveis ao Estado depois de concluídos.",
      "Instrumentos, porque são os meios efetivamente empregados para atuar sobre a vulnerabilidade identificada.",
      "Condicionantes, porque a geografia do estreito é o que determina a necessidade da obra.",
      "Objetivo, porque a conclusão da obra é o que o Estado pretende alcançar no cenário descrito."
    ],
    "correta": 2,
    "comentario": "A matriz separa o que o ator TEM (recursos) do que ele USA (instrumentos), e ambos do que o ameaça (vulnerabilidades) e do que o restringe (condicionantes). O porto e o corredor são ações empregadas — instrumentos econômicos e de infraestrutura — dirigidas contra a vulnerabilidade do estreito. A vulnerabilidade é a dependência do estreito; o condicionante é a geografia; o objetivo é assegurar o fluxo energético.",
    "explicacaoDistratores": [
      "Errada. A dependência do país terceiro é uma vulnerabilidade NOVA criada pelo instrumento, não a posição do instrumento na matriz.",
      "Errada. Recursos é o que está disponível; aqui há emprego deliberado de meios para um fim.",
      "Correta. Instrumento é o meio empregado: infraestrutura financiada e corredor negociado.",
      "Errada. O condicionante é a geografia do estreito, que existe independentemente da decisão.",
      "Errada. O objetivo é garantir o fluxo energético; a obra é meio, não fim."
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M00-OBJ-N2-007",
    "topico": "00-metodo-e-matriz-de-cenarios",
    "dificuldade": "medio",
    "conceptIds": [
      "REL-T2-M00-C016",
      "REL-T2-M00-C010"
    ],
    "fonte": "SOPA REL T1 2024, questões 4, 5 e 10 (inclusive a variante “explicação completa”); Gabarito da P2 REL 2024, questões 6, 7, 9, 10 e 13; P1 REL 2024, questões 6 e 12.",
    "competencia": "Executar o procedimento de duas etapas em questões de asserção e razão.",
    "erroProvavel": "Aceitar o nexo porque as duas afirmativas são verdadeiras.",
    "armadilha": "Aceitar o nexo porque as duas afirmativas são verdadeiras.",
    "tempoEstimadoMin": 3,
    "assinatura": [
      "obj",
      "N2",
      "reconhecimento aplicado — identificar o conceito em situação descrita",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "multipla",
    "enunciado": "Em uma questão de asserção e razão, o Aspirante julga que as duas afirmativas são verdadeiras. O comando oferece, entre outras, as opções “ambas são verdadeiras e a II é justificativa da I” e “ambas são verdadeiras, mas a II NÃO é justificativa da I”. Qual é o procedimento correto antes de escolher entre as duas?",
    "alternativas": [
      "Escolher a opção que afirma o nexo, porque duas afirmativas verdadeiras sobre o mesmo tema normalmente se explicam mutuamente.",
      "Verificar se a segunda afirmativa é causa suficiente e específica da primeira, e não apenas um fato verdadeiro do mesmo assunto, atentando para variantes que exigem explicação COMPLETA.",
      "Escolher a opção que nega o nexo, porque o professor usa essa alternativa com mais frequência nas provas do corpus.",
      "Reler apenas a primeira afirmativa, já que o nexo depende exclusivamente do que ela afirma.",
      "Escolher qualquer uma, porque quando as duas afirmativas são verdadeiras a diferença entre as opções é apenas de redação."
    ],
    "correta": 1,
    "comentario": "Julgar as afirmativas é só a primeira metade do trabalho. A segunda é testar o NEXO: a afirmativa II precisa ser a razão da I, com suficiência e especificidade. O corpus traz duas armadilhas nesse ponto. Uma é a variante refinada “é a explicação COMPLETA da afirmativa 1”: uma razão que seja apenas um dos elementos necessários não é explicação completa. A outra é a alternativa em que ambas são verdadeiras e o nexo é falso, usada mais de uma vez nas provas.",
    "explicacaoDistratores": [
      "Errada. Verdade das partes não implica relação causal entre elas.",
      "Correta. Testar suficiência e especificidade do nexo, e atentar para a exigência de explicação completa.",
      "Errada. Escolher por frequência estatística de gabarito é chute, não método — e o corpus não sustenta essa frequência.",
      "Errada. O nexo depende da relação entre as duas, o que exige reler as duas.",
      "Errada. A diferença entre afirmar e negar o nexo é substantiva e decide a questão."
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M00-OBJ-N4-008",
    "topico": "00-metodo-e-matriz-de-cenarios",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M00-C012",
      "REL-T2-M00-C013",
      "REL-T2-M00-C014",
      "REL-T2-M00-C015"
    ],
    "fonte": "AULA 15.pdf, slide “Expansão geopolítica”; REL - T1 - IM415, seção 5 (repertório dos geopolíticos); SOPA REL T1 2024, questões 1 e 9 (regra de adequação entre objeto e premissa); T2_2025.pdf, item 3 do trabalho.",
    "competencia": "Escolher a lente teórica por adequação entre objeto e premissa, e instrumentalizar seus conceitos.",
    "erroProvavel": "Escolher o autor por associação vaga (país grande, logo Mackinder) em vez de por adequação conceitual.",
    "armadilha": "Escolher o autor por associação vaga (país grande, logo Mackinder) em vez de por adequação conceitual.",
    "tempoEstimadoMin": 4,
    "assinatura": [
      "obj",
      "N4",
      "integração — cruza módulos, arbitra entre leituras ou projeta consequência",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "multipla",
    "enunciado": "Um grupo precisa escolher, entre os autores disponíveis, aquele cujos conceitos melhor explicam o seguinte conjunto: um Estado continental de grande extensão, com dois litorais separados por todo o território, que constrói uma passagem artificial entre os dois oceanos, estabelece uma rede de bases de reabastecimento em pontos de passagem obrigatória do comércio mundial e mantém uma esquadra capaz de operar longe da própria costa. Qual escolha é mais adequada, e por qual razão conceitual?",
    "alternativas": [
      "Mackinder, porque a extensão continental do Estado o aproxima da condição de potência do interior eurasiático descrita em sua teoria.",
      "Mahan, porque os conceitos de comando do mar, de bases e de pontos de estrangulamento descrevem exatamente os três elementos do caso.",
      "Corbett, porque a existência de uma esquadra oceânica indica preferência por bloqueio e incursão em vez de batalha decisiva.",
      "Douhet, porque uma esquadra capaz de operar longe da costa depende de cobertura aérea e, portanto, do comando do ar.",
      "Haushofer, porque a construção da passagem artificial amplia o espaço vital do Estado para além de suas fronteiras originais."
    ],
    "correta": 1,
    "comentario": "A regra que o próprio professor enuncia é de ADEQUAÇÃO: quanto mais o objeto se insere nas premissas da abordagem, maior o sucesso da análise. Os três elementos do caso — passagem artificial entre oceanos, rede de bases em pontos de passagem obrigatória e esquadra de alcance oceânico — são, um a um, os conceitos de Mahan: integração entre as duas costas, bases de reabastecimento e domínio dos choke points. Escolher o autor certo não basta: é preciso instrumentalizar os conceitos, e é isso que a alternativa correta faz.",
    "explicacaoDistratores": [
      "Errada. Extensão continental não é a premissa de Mackinder: a premissa é a posição no interior eurasiático e o controle da Europa Oriental.",
      "Correta. Os três elementos do caso correspondem termo a termo aos conceitos de Mahan.",
      "Errada. Corbett se distingue por preferir controle a comando do mar; o caso descreve construção de comando, não estratégia de negação.",
      "Errada. Douhet trata do comando do ar e de bombardeio estratégico; a cobertura aérea de uma esquadra não é o objeto da sua teoria.",
      "Errada. Espaço vital de Haushofer é expansão territorial por necessidade orgânica do Estado, não abertura de via de comunicação marítima."
    ],
    "verificacaoIndependente": "Liste os elementos concretos do caso e marque, ao lado de cada um, o conceito do autor que o cobre. O autor certo cobre todos.",
    "modalidades": [
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M01-VF-N1-001",
    "topico": "01-politica-externa-brasileira",
    "dificuldade": "facil",
    "conceptIds": [
      "REL-T2-M01-C017"
    ],
    "fonte": "AULA 12.pdf, slides “Síntese tipológica” e “PEB - Governos civis-militares (1964~1985)”.",
    "competencia": "Recuperar a tipologia da autonomia com a exceção que o slide registra.",
    "erroProvavel": "Incluir Castello Branco na autonomia pela distância por ser governo militar.",
    "armadilha": "Incluir Castello Branco na autonomia pela distância por ser governo militar.",
    "tempoEstimadoMin": 2,
    "assinatura": [
      "vf",
      "N1",
      "âncora — recuperação de lista fechada ou definição literal",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "vf",
    "afirmacao": "Na síntese tipológica apresentada em aula, o período de autonomia pela distância vai da Política Externa Independente até os governos militares, incluindo o governo Castello Branco.",
    "correta": false,
    "comentario": "**Falsa.** O slide diz “PEI até Governos Militares (**com exceção do período Castello**) — Autonomia pela distância”. Castello Branco é caracterizado como alinhamento automático com os EUA, o oposto funcional da autonomia pela distância. A exceção é a parte cobrável da afirmação: ela mostra que a tipologia classifica pela RELAÇÃO entre ambição e abertura, não pelo regime político.",
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M01-OBJ-N2-002",
    "topico": "01-politica-externa-brasileira",
    "dificuldade": "medio",
    "conceptIds": [
      "REL-T2-M01-C012",
      "REL-T2-M01-C007"
    ],
    "fonte": "AULA 12.pdf, slides “PEB - Constituição de 1988” e “Principais heranças do Barão do Rio Branco”.",
    "competencia": "Ler o art. 4º com precisão literal e ligá-lo às heranças de Rio Branco.",
    "erroProvavel": "Trocar “América Latina” por “América do Sul” no parágrafo único.",
    "armadilha": "Trocar “América Latina” por “América do Sul” no parágrafo único.",
    "tempoEstimadoMin": 3,
    "assinatura": [
      "obj",
      "N2",
      "reconhecimento aplicado — identificar o conceito em situação descrita",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "multipla",
    "enunciado": "O art. 4º da Constituição de 1988 lista os princípios que regem as relações internacionais do Brasil e traz um parágrafo único sobre integração. Sobre esse dispositivo, assinale a alternativa CORRETA.",
    "alternativas": [
      "O parágrafo único estabelece que o Brasil buscará a integração econômica, política, social e cultural dos povos da América do Sul, visando à formação de uma comunidade sul-americana de nações.",
      "Entre os princípios do art. 4º estão a independência nacional, a autodeterminação dos povos, a não-intervenção e a solução pacífica dos conflitos, três dos quais correspondem a heranças diretas da atuação do Barão do Rio Branco.",
      "O art. 4º inclui, entre seus princípios, a defesa da Amazônia Azul e a manutenção do Atlântico Sul como zona de paz e cooperação.",
      "O repúdio ao terrorismo e ao racismo foi acrescentado ao art. 4º apenas depois de 2001, em resposta aos atentados daquele ano.",
      "Como o art. 4º trata de princípios, ele não produz consequência prática sobre os meios de ação disponíveis à política externa brasileira."
    ],
    "correta": 1,
    "comentario": "O art. 4º lista dez princípios, e três deles — autodeterminação dos povos (III), não-intervenção (IV) e solução pacífica dos conflitos (VII) — reproduzem as heranças que o slide atribui a Rio Branco: princípio da não-intervenção, abordagem basicamente pacífica para litígios e boa vizinhança. A continuidade entre 1902-1912 e 1988 é a resposta ao Estudo Dirigido sobre por que a herança de Rio Branco segue importante.",
    "explicacaoDistratores": [
      "Errada. O texto fala em América LATINA e em comunidade latino-americana de nações, não sul-americana. A troca é a pegadinha mais comum do dispositivo.",
      "Correta. Os três princípios correspondem às heranças de Rio Branco registradas no slide.",
      "Errada. Amazônia Azul e ZOPACAS não estão no art. 4º: são, respectivamente, conceito da Marinha e pressuposto da PND.",
      "Errada. O repúdio ao terrorismo e ao racismo é o inciso VIII do texto de 1988, anterior a 2001.",
      "Errada. Os princípios restringem o repertório de meios: um Estado obrigado à não-intervenção e à solução pacífica tem menos instrumentos disponíveis, o que é exatamente o dilema interesses × meios da abertura da aula."
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M01-DIS-N3-003",
    "topico": "01-politica-externa-brasileira",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M01-C008",
      "REL-T2-M01-C009",
      "REL-T2-M01-C001",
      "REL-T2-M01-C002"
    ],
    "fonte": "AULA 12.pdf, slides “PEB - 1º Período Vargas (1930-1945)”, “POSIÇÃO ESTRATÉGICA DO BRASIL”, “PEB - Pós II GM (1946~1960)” e Estudo Dirigido (“No caso do Brasil, o alinhamento automático com a maior potência sempre apresentou resultados positivos? Exemplifique”).",
    "competencia": "Comparar dois momentos históricos e isolar a variável que explica a diferença de resultado.",
    "erroProvavel": "Responder pelo resultado sem identificar a variável (escassez do ativo) que o produziu.",
    "armadilha": "Responder pelo resultado sem identificar a variável (escassez do ativo) que o produziu.",
    "tempoEstimadoMin": 12,
    "assinatura": [
      "dis",
      "N3",
      "aplicação inédita — decidir em cenário novo com distratores próximos",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "discursiva",
    "enunciado": "No caso do Brasil, o alinhamento com a maior potência sempre apresentou resultados positivos? Responda comparando dois momentos concretos do corpus e explique o que determinou a diferença de resultado.",
    "gabaritoComentado": "**Tese.** Não. O resultado do alinhamento depende de o Brasil possuir, no momento, um ativo escasso e urgente para a potência — e não da intensidade do alinhamento.\n\n**Conceito.** O dilema de abertura da aula é interesses × meios de ação, mediados por circunstâncias e por capacidade. Alinhar-se é um meio; o retorno do meio depende da circunstância.\n\n**Evidência favorável (1930-1945).** Depois de uma política comercial pendular com EUA e Alemanha, o alinhamento se aprofundou com a II Guerra e rendeu contrapartidas concretas: a parceria da siderúrgica de Volta Redonda, a base dos EUA em Natal, a posição de 5º maior recebedor do Lend-Lease e o envio da FEB, sendo o Brasil o único país latino-americano a mandar tropas. O ativo era a posição estratégica do Nordeste: os aviões não tinham autonomia para voar diretamente para a África, o que tornava as bases brasileiras insubstituíveis e urgentes.\n\n**Evidência desfavorável (1952, Coreia).** Com o Acordo Militar de 1952, houve tentativa frustrada de reeditar os ganhos dos anos 1940, e o Brasil não enviou tropas à Guerra da Coreia. O alinhamento formal permaneceu; o retorno, não.\n\n**Nexo causal.** A diferença não está no grau de alinhamento, e sim na existência de um ativo escasso e insubstituível no momento da barganha. Em 1942 a geografia do Nordeste não tinha substituto técnico; em 1952 o Brasil não dispunha de ativo comparável a oferecer no teatro coreano. Alinhamento sem ativo é adesão sem barganha.\n\n**Nuance.** A OPA de Juscelino mostra a resposta brasileira a essa constatação: deslocar a barganha do terreno militar para o do desenvolvimento, buscando uma contrapartida que não dependesse de um ativo militar circunstancial.\n\n**Conclusão.** Alinhar-se é instrumento, não estratégia. O que converte alinhamento em ganho é a escassez do que se oferece, e isso é conjuntural — razão pela qual o mesmo meio produziu industrialização em 1942 e nada em 1952.\n\n**Resposta insuficiente:** “Não, porque em 1952 não deu certo.” Constata sem explicar. **Satisfatória:** apresenta os dois casos com seus resultados. **Nível MB:** apresenta os dois casos, nomeia o mecanismo (escassez e urgência do ativo) e mostra a resposta institucional posterior (OPA).",
    "criterios": [
      "Responde diretamente à pergunta com tese explícita (0,1)",
      "Apresenta o caso de 1930-1945 com pelo menos três contrapartidas concretas (0,3)",
      "Apresenta o caso de 1952 e a Coreia como contraexemplo (0,2)",
      "Nomeia o mecanismo que explica a diferença: escassez e urgência do ativo oferecido (0,3)",
      "Conclui sem repetir mecanicamente a tese (0,1)",
      "Não pontua: responder “depende” sem os dois casos, ou listar fatos sem o nexo causal"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M01-OBJ-N3-004",
    "topico": "01-politica-externa-brasileira",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M01-C014",
      "REL-T2-M01-C015",
      "REL-T2-M01-C017"
    ],
    "fonte": "AULA 12.pdf, slides “PEB - Governos pós-1985” (FHC e Lula) e “Síntese tipológica”; Correção da SOPA da P1 (correção literal do erro sobre FHC); P1 REL 2024, questão 18.",
    "competencia": "Aplicar corretamente os rótulos da tipologia a FHC e Lula, recusando a leitura bilateral.",
    "erroProvavel": "Descrever FHC como aproximação com os EUA e Lula como abandono da região.",
    "armadilha": "Descrever FHC como aproximação com os EUA e Lula como abandono da região.",
    "tempoEstimadoMin": 3,
    "assinatura": [
      "obj",
      "N3",
      "aplicação inédita — decidir em cenário novo com distratores próximos",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "multipla",
    "enunciado": "Um Aspirante escreve: “A diferença entre FHC e Lula é que o primeiro aproximou o Brasil dos Estados Unidos e o segundo se afastou deles, voltando-se para a América do Sul.” Qual é a correção mais precisa dessa afirmação?",
    "alternativas": [
      "A afirmação está correta quanto a FHC e incorreta quanto a Lula, cuja política externa manteve a mesma ênfase norte-americana de seu antecessor.",
      "A afirmação erra nas duas partes: FHC se caracteriza por autonomia pela participação e integração, de perfil multilateral, e Lula por autonomia pela diversificação em estratégia bifronte, que inclui a América Latina E o resto do mundo.",
      "A afirmação está correta nas duas partes, mas é incompleta por não mencionar que ambos assinaram o TNP.",
      "A afirmação erra apenas quanto a Lula, porque a diversificação implicou abandono da agenda sul-americana em favor da cooperação Sul-Sul extrarregional.",
      "A afirmação está correta, pois a rejeição à ALCA em Quebec, em 2001, marca o início do afastamento brasileiro em relação aos Estados Unidos."
    ],
    "correta": 1,
    "comentario": "Os dois erros são os mais frequentes do módulo, e o primeiro está registrado literalmente na correção da SOPA da P1 (“ele errou em dizer que foi aproximação c os eua”). FHC é autonomia pela **participação e integração**: reinserção mais ativa no sistema econômico internacional e nos organismos internacionais, com abertura econômica — perfil multilateral, não bilateral com os EUA. E a rejeição à ALCA em Quebec, em 2001, é de FHC. Lula é autonomia pela **diversificação**, com estratégia **bifronte**: América Latina de um lado, resto do mundo de outro — não substituição de uma pela outra.",
    "explicacaoDistratores": [
      "Errada. Erra nas duas partes, não em uma: o rótulo de FHC não é aproximação com os EUA.",
      "Correta. Corrige os dois erros com os rótulos do próprio slide.",
      "Errada. O TNP e o MTCR foram assinados no período FHC; atribuí-los a ambos é impreciso, e a afirmação principal continua errada.",
      "Errada. A estratégia bifronte não abandona a América Latina — é justamente o contrário.",
      "Errada. Quebec 2001 é de FHC, e não marca afastamento: é coerente com participação sem subordinação."
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M01-OBJ-N3-005",
    "topico": "01-politica-externa-brasileira",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M01-C011",
      "REL-T2-M01-C001"
    ],
    "fonte": "AULA 12.pdf, slides “PEB - Governos civis-militares (1964~1985)” e “Síntese tipológica”; AULA 12.pdf, slide “Dilemas básicos de uma Política Externa”.",
    "competencia": "Explicar decisões de política externa por cálculo de interesse, mesmo contra a orientação ideológica interna.",
    "erroProvavel": "Tratar divergência entre ideologia interna e política externa como incoerência.",
    "armadilha": "Tratar divergência entre ideologia interna e política externa como incoerência.",
    "tempoEstimadoMin": 3,
    "assinatura": [
      "obj",
      "N3",
      "aplicação inédita — decidir em cenário novo com distratores próximos",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "multipla",
    "enunciado": "Durante o período dos governos civis-militares, um governo anticomunista reconheceu a República Popular da China e a independência de Angola, firmou acordo nuclear com a Alemanha e denunciou o tratado militar com os Estados Unidos. Qual leitura explica melhor esse conjunto de decisões?",
    "alternativas": [
      "Trata-se de incoerência ideológica do governo, já que as decisões contrariam a orientação anticomunista declarada internamente.",
      "Trata-se de subordinação da política externa à política interna, porque as decisões buscavam aplacar a oposição doméstica ao regime.",
      "Trata-se de pragmatismo: o cálculo de interesses e de meios de ação prevaleceu sobre a afinidade ideológica, ampliando parcerias e reduzindo dependência de um único fornecedor estratégico.",
      "Trata-se de alinhamento valorativo, categoria que descreve políticas externas ancoradas em afinidade de governo.",
      "Trata-se de autonomia pela participação, porque o governo buscou inserção mais ativa nos organismos internacionais."
    ],
    "correta": 2,
    "comentario": "O slide dá nome ao conjunto: **Pragmatismo Responsável**, do período Geisel. A lição conceitual é que política externa e orientação ideológica interna podem divergir sem contradição, porque a primeira responde ao dilema interesses × meios. Reconhecer a China e Angola amplia parcerias; o acordo nuclear com a Alemanha e a denúncia do tratado militar com os EUA reduzem dependência de um fornecedor único de tecnologia sensível.",
    "explicacaoDistratores": [
      "Errada. Não é incoerência: é subordinação do critério ideológico ao cálculo de interesse, que tem nome próprio no slide.",
      "Errada. Nada no corpus liga essas decisões a um cálculo de apaziguamento doméstico.",
      "Correta. É o Pragmatismo Responsável: interesse e meios acima de afinidade ideológica.",
      "Errada. Alinhamento valorativo é a categoria que o slide reserva ao período Bolsonaro durante o governo Trump.",
      "Errada. Autonomia pela participação é o rótulo de FHC, e o período em questão pertence à autonomia pela distância."
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M01-OBJ-N4-006",
    "topico": "01-politica-externa-brasileira",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M01-C022",
      "REL-T2-M01-C021",
      "REL-T2-M01-C012"
    ],
    "fonte": "MAGNOLI, cap. 21, seção “Do Mercosul à Unasul” e seção “O Brasil e a América do Sul” (Travassos, prisioneiros geopolíticos, Itaipu); AULA 12.pdf, Estudo Dirigido sobre integração latino-americana.",
    "competencia": "Julgar asserção e razão distinguindo verdade das partes de existência do nexo causal.",
    "erroProvavel": "Negar o nexo por tratar a rivalidade platina como fato histórico sem consequência institucional.",
    "armadilha": "Negar o nexo por tratar a rivalidade platina como fato histórico sem consequência institucional.",
    "tempoEstimadoMin": 4,
    "assinatura": [
      "obj",
      "N4",
      "integração — cruza módulos, arbitra entre leituras ou projeta consequência",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "multipla",
    "enunciado": "Avalie as asserções a seguir. **I.** A adesão do Uruguai e do Paraguai ao Mercosul teve importância econômica reduzida e valor geopolítico elevado para o Brasil. **PORQUE** **II.** Desde a independência, Brasil e Argentina disputaram influência junto aos vizinhos menores da bacia platina, e a inclusão de ambos no mesmo arranjo institucional elimina uma fonte histórica de atrito entre os dois parceiros maiores.",
    "alternativas": [
      "As asserções I e II são verdadeiras, e a II é uma justificativa da I.",
      "As asserções I e II são verdadeiras, mas a II não é uma justificativa da I.",
      "A asserção I é verdadeira, e a II é falsa.",
      "A asserção I é falsa, e a II é verdadeira.",
      "As asserções I e II são falsas."
    ],
    "correta": 0,
    "comentario": "As duas são verdadeiras e a segunda explica a primeira. A asserção I reproduz a leitura de Magnoli: a participação dos dois vizinhos menores tem peso econômico pequeno e valor geopolítico alto. A asserção II fornece o mecanismo: a disputa Brasil-Argentina por influência sobre Uruguai, Paraguai e Bolívia atravessa toda a história independente — Travassos chegou a chamar Bolívia e Paraguai de “prisioneiros geopolíticos” da Argentina, e a soldagem de interesses por ferrovia, ponte, rodovia e Itaipu é parte dessa disputa. Trazer os dois para dentro do mesmo arranjo remove o objeto do atrito. É exatamente por isso que o valor é geopolítico.",
    "explicacaoDistratores": [
      "Correta. O mecanismo da asserção II é a causa do valor geopolítico afirmado em I.",
      "Errada. Há relação causal direta: o valor geopolítico decorre da neutralização do atrito histórico.",
      "Errada. A asserção II é sustentada pelo corpus, inclusive pela operação geopolítica de Itaipu e da Ponte da Amizade.",
      "Errada. A asserção I é a leitura expressa da bibliografia obrigatória.",
      "Errada. Ambas são verdadeiras."
    ],
    "modalidades": [
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M01-DIS-N4-007",
    "topico": "01-politica-externa-brasileira",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M01-C012",
      "REL-T2-M01-C022",
      "REL-T2-M01-C018"
    ],
    "fonte": "AULA 12.pdf, slides “PEB - Constituição de 1988” e “PEB - Dilemas futuros”, e Estudo Dirigido (“Por que o Brasil deve buscar a integração da América Latina? Dê uma razão institucional e outra de política pragmática”); MAGNOLI, cap. 21, seções “Do Mercosul à Unasul” e Declaração do Iguaçu.",
    "competencia": "Fundamentar a integração regional por duas vias distintas e reconhecer o limite do instrumento.",
    "erroProvavel": "Dar duas razões pragmáticas, ou citar o art. 4º sem o mandamento do parágrafo único.",
    "armadilha": "Dar duas razões pragmáticas, ou citar o art. 4º sem o mandamento do parágrafo único.",
    "tempoEstimadoMin": 12,
    "assinatura": [
      "dis",
      "N4",
      "integração — cruza módulos, arbitra entre leituras ou projeta consequência",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "discursiva",
    "enunciado": "Apresente uma razão institucional e uma razão de política pragmática para que o Brasil busque a integração da América Latina, e indique um limite dessa estratégia à luz dos dilemas futuros da política externa brasileira.",
    "gabaritoComentado": "**Tese.** A integração latino-americana é, para o Brasil, simultaneamente um dever constitucional e um cálculo de poder — e sua eficácia depende da funcionalidade do arranjo escolhido.\n\n**Razão institucional.** O parágrafo único do art. 4º da Constituição determina que a República Federativa do Brasil buscará a integração econômica, política, social e cultural dos povos da América Latina, visando à formação de uma comunidade latino-americana de nações. Não é opção de governo: é mandamento constitucional, coerente com os princípios de autodeterminação, não-intervenção e solução pacífica dos conflitos do mesmo artigo, que são heranças de Rio Branco.\n\n**Razão pragmática.** A integração amplia o poder de negociação do Brasil com o resto do mundo — formulação que a própria Declaração do Iguaçu registra como “urgente necessidade de que a América Latina reforce seu poder de negociação” — e neutraliza fontes históricas de atrito no entorno. Um entorno pacificado reduz a necessidade de dissuasão terrestre e libera o esforço de defesa para o Atlântico Sul e a Amazônia Azul, que são os vetores de projeção do país. A inclusão de Uruguai e Paraguai no Mercosul é o exemplo: peso econômico pequeno, valor geopolítico alto.\n\n**Limite.** A integração é instrumento, não fim, e pode perder funcionalidade. Magnoli registra que a adesão da Venezuela, concluída em 2012, expandiu o Mercosul para além do Cone Sul e para o espaço caribenho, mas ao mesmo tempo reduziu sua funcionalidade comercial e política, por passar a depender de consensos entre Brasil e Venezuela — agravado pela estrutura intergovernamental de Ouro Preto, que age apenas por consenso. Somado ao diagnóstico dos dilemas futuros (ambiente internacional incerto, competição interestatal crescente), o limite é claro: ampliar um bloco que decide por consenso pode reduzir a capacidade de decidir.\n\n**Conclusão.** O Brasil tem obrigação constitucional e interesse estratégico na integração, mas o retorno depende do desenho institucional: arranjo que só decide por unanimidade e se amplia sem convergência tende a converter ganho geopolítico em paralisia decisória.\n\n**Resposta insuficiente:** citar o art. 4º e dizer que “a união fortalece”. **Satisfatória:** apresenta as duas razões corretamente. **Nível MB:** apresenta as duas razões, nomeia o mecanismo de cada uma e identifica um limite com evidência (Venezuela 2012 e a regra do consenso).",
    "criterios": [
      "Apresenta a razão institucional citando o parágrafo único do art. 4º com precisão (América Latina) (0,25)",
      "Apresenta a razão pragmática com mecanismo explícito: poder de negociação e/ou neutralização de atrito (0,25)",
      "Identifica um limite com evidência do corpus (0,3)",
      "Conclui articulando obrigação, interesse e desenho institucional (0,2)",
      "Não pontua: trocar América Latina por América do Sul; apresentar as duas razões sem distinguir institucional de pragmático"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M01-OBJ-N2-008",
    "topico": "01-politica-externa-brasileira",
    "dificuldade": "medio",
    "conceptIds": [
      "REL-T2-M01-C006",
      "REL-T2-M01-C019"
    ],
    "fonte": "AULA 12.pdf, slides “PEB - República Velha (1889~1930)” (dois slides) e “Principais heranças do Barão do Rio Branco”; MAGNOLI, cap. 21 (Sistema Interamericano e TIAR).",
    "competencia": "Reconhecer a natureza informal da aliança e datar corretamente os instrumentos hemisféricos.",
    "erroProvavel": "Tratar a aliança não-escrita como tratado, confundindo-a com o TIAR.",
    "armadilha": "Tratar a aliança não-escrita como tratado, confundindo-a com o TIAR.",
    "tempoEstimadoMin": 3,
    "assinatura": [
      "obj",
      "N2",
      "reconhecimento aplicado — identificar o conceito em situação descrita",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "multipla",
    "enunciado": "Sobre a chamada aliança “não-escrita” entre Brasil e Estados Unidos no final do século XIX e na primeira década do século XX, assinale a alternativa INCORRETA.",
    "alternativas": [
      "Funcionou como anteparo a pretensões imperialistas da Grã-Bretanha, da França e dos Países Baixos, além de servir a interesses econômicos.",
      "Foi contemporânea da resolução, por via diplomática, das questões fronteiriças conduzidas pelo Barão do Rio Branco.",
      "Consistiu em tratado formal de assistência recíproca firmado entre os dois países, cujo primeiro equivalente institucional seria o TIAR.",
      "Conviveu com a preocupação principal do Brasil na República Velha, que era a modernização econômica e militar da Argentina.",
      "Beneficiou também os Estados Unidos, à medida que consolidava uma esfera de influência hemisférica coerente com a Doutrina Monroe."
    ],
    "correta": 2,
    "comentario": "A alternativa incorreta é a única que transforma a aliança em tratado. O slide a qualifica como **não-escrita**, e é exatamente esse o ponto: o alinhamento produziu efeitos práticos sem instrumento jurídico. O TIAR só vem em 1947, quatro décadas depois, e é de natureza distinta — assistência recíproca hemisférica no contexto da Guerra Fria.",
    "explicacaoDistratores": [
      "Correta e verdadeira. É a formulação do slide.",
      "Correta e verdadeira. É o mesmo período da chamada era Rio Branco.",
      "INCORRETA — resposta da questão. A aliança é não-escrita; não houve tratado.",
      "Correta e verdadeira. O slide registra a Argentina como preocupação principal do período.",
      "Correta e verdadeira. Magnoli lê o Sistema Interamericano como quadro que embasava a liderança dos EUA."
    ],
    "modalidades": [
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M02-VF-N1-001",
    "topico": "02-pnd-end-e-pesd",
    "dificuldade": "facil",
    "conceptIds": [
      "REL-T2-M02-C009"
    ],
    "fonte": "AULA 13.pdf, slide “Poder Naval (END) — Tarefas básicas”.",
    "competencia": "Recuperar a lista das tarefas básicas com a distinção entre tarefa e repertório.",
    "erroProvavel": "Contar o monitoramento do mar como quinta tarefa básica.",
    "armadilha": "Contar o monitoramento do mar como quinta tarefa básica.",
    "tempoEstimadoMin": 2,
    "assinatura": [
      "vf",
      "N1",
      "âncora — recuperação de lista fechada ou definição literal",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "vf",
    "afirmacao": "Segundo a END, as tarefas básicas do Poder Naval são cinco: controle de área marítima, negação do uso do mar, projeção de poder sobre terra, contribuição para a dissuasão e monitoramento do mar.",
    "correta": false,
    "comentario": "**Falsa.** As tarefas básicas são **quatro**: controle de área marítima, negação do uso do mar, projeção de poder sobre terra e contribuição para a dissuasão. O monitoramento do mar aparece no slide em frase separada e com outra natureza: “o monitoramento do mar, inclusive a partir do espaço, deverá integrar o repertório de práticas e capacitações operacionais”. É repertório a incorporar, não quinta tarefa básica. Promovê-lo a tarefa é o erro de literalidade mais previsível do módulo.",
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M02-OBJ-N2-002",
    "topico": "02-pnd-end-e-pesd",
    "dificuldade": "medio",
    "conceptIds": [
      "REL-T2-M02-C008"
    ],
    "fonte": "AULA 13.pdf, slides “Poder Naval (END)” (definição de AJB); Estudo Dirigido (“O conceito de AJB utilizado pela Marinha do Brasil abrange a Elevação do Rio Grande? Por quê?”).",
    "competencia": "Reproduzir a definição de AJB com precisão literal e reconhecer suas cláusulas condicionais.",
    "erroProvavel": "Igualar AJB a mar territorial ou supor jurisdição plena em toda a extensão.",
    "armadilha": "Igualar AJB a mar territorial ou supor jurisdição plena em toda a extensão.",
    "tempoEstimadoMin": 3,
    "assinatura": [
      "obj",
      "N2",
      "reconhecimento aplicado — identificar o conceito em situação descrita",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "multipla",
    "enunciado": "Sobre o conceito de Águas Jurisdicionais Brasileiras (AJB) tal como enunciado na END, assinale a alternativa CORRETA.",
    "alternativas": [
      "Compreendem exclusivamente o mar territorial e a zona contígua, faixas em que o Brasil exerce jurisdição plena.",
      "Compreendem as águas interiores e os espaços marítimos em que o Brasil exerce jurisdição, em algum grau, e abrangem a faixa de 200 milhas marítimas contadas das linhas de base, acrescida das águas sobrejacentes à extensão da plataforma continental além das 200 MN, onde ela ocorrer.",
      "Compreendem as 200 milhas marítimas contadas do litoral, excluídas as águas interiores, que pertencem ao regime jurídico dos rios e lagos.",
      "Compreendem toda a área em que o Brasil exerce soberania plena sobre recursos naturais vivos e não vivos, o que equivale exatamente à Amazônia Azul.",
      "Compreendem apenas os espaços marítimos, já que a expressão “jurisdicionais” exclui por definição as águas interiores."
    ],
    "correta": 1,
    "comentario": "A definição do slide tem três elementos que a alternativa correta preserva e as demais quebram: **(1)** inclui as águas interiores; **(2)** a jurisdição é exercida “em algum grau”, e não plenamente em toda a extensão; **(3)** a faixa é contada das **linhas de base** e se estende além das 200 MN onde houver plataforma continental estendida. A cláusula “onde ela ocorrer” é o que permite discutir feições oceânicas afastadas, como a Elevação do Rio Grande, objeto do Estudo Dirigido do professor.",
    "explicacaoDistratores": [
      "Errada. Exclui as águas interiores e a plataforma estendida, e atribui jurisdição plena onde o slide diz “em algum grau”.",
      "Correta. Reproduz os três elementos da definição.",
      "Errada. As águas interiores integram as AJB por definição expressa.",
      "Errada. Confunde jurisdição “em algum grau” com soberania plena, e iguala um conceito jurídico (AJB) a uma designação pública (Amazônia Azul).",
      "Errada. O próprio texto da END começa por “as águas interiores e os espaços marítimos”."
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M02-COR-N3-003",
    "topico": "02-pnd-end-e-pesd",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M02-C006",
      "REL-T2-M02-C007",
      "REL-T2-M02-C009",
      "REL-T2-M02-C010",
      "REL-T2-M02-C011",
      "REL-T2-M02-C002"
    ],
    "fonte": "AULA 13.pdf, slides “Objetivos Nacionais de Defesa” (dois), “Capacidades Nacionais de Defesa (CND)”, “Poder Naval (END) — Tarefas básicas”, “Responsabilidade pelos Setores Estratégicos” e “PESD 2020-2031 — Missão”.",
    "competencia": "Distinguir o nível documental a que pertence cada enunciado da arquitetura de defesa.",
    "erroProvavel": "Confundir capacidade (dissuasão) com tarefa básica (contribuição para a dissuasão).",
    "armadilha": "Confundir capacidade (dissuasão) com tarefa básica (contribuição para a dissuasão).",
    "tempoEstimadoMin": 7,
    "assinatura": [
      "cor",
      "N3",
      "aplicação inédita — decidir em cenário novo com distratores próximos",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "correlacione",
    "titulo": "Correlacione cada enunciado ao documento ou à categoria a que ele pertence",
    "chaves": [
      {
        "chave": "A",
        "texto": "Objetivo Nacional de Defesa (PND)"
      },
      {
        "chave": "B",
        "texto": "Capacidade Nacional de Defesa (END)"
      },
      {
        "chave": "C",
        "texto": "Tarefa básica do Poder Naval (END)"
      },
      {
        "chave": "D",
        "texto": "Responsabilidade por setor estratégico"
      },
      {
        "chave": "E",
        "texto": "Missão ou visão do PESD 2020-2031"
      }
    ],
    "itens": [
      {
        "texto": "Promover a autonomia tecnológica e produtiva na área de defesa.",
        "chave": "A"
      },
      {
        "texto": "Mobilidade estratégica.",
        "chave": "B"
      },
      {
        "texto": "Negação do uso do mar.",
        "chave": "C"
      },
      {
        "texto": "A Força Aérea responde pelo setor espacial.",
        "chave": "D"
      },
      {
        "texto": "Preparar as Forças Armadas em permanente estado de prontidão, inclusive em apoio à política externa.",
        "chave": "E"
      },
      {
        "texto": "Incrementar a projeção do Brasil no concerto das Nações e sua inserção em processos decisórios internacionais.",
        "chave": "A"
      },
      {
        "texto": "Gestão da informação.",
        "chave": "B"
      },
      {
        "texto": "Contribuição para a dissuasão.",
        "chave": "C"
      }
    ],
    "comentario": "A correlação testa exatamente o que o professor embaralha em distratores. Três regras resolvem: **objetivos** dizem O QUE se quer (verbos como garantir, assegurar, promover, preservar, salvaguardar, ampliar, contribuir, incrementar); **capacidades** são substantivos que nomeiam o que a Força precisa saber fazer (proteção, pronta-resposta, dissuasão, coordenação e controle, gestão da informação, logística, mobilidade estratégica, mobilização, desenvolvimento tecnológico de defesa); **tarefas básicas** são as quatro funções operacionais do Poder Naval. Note a pegadinha embutida: “contribuição para a dissuasão” é tarefa básica do Poder Naval, enquanto “dissuasão” isolada é Capacidade Nacional de Defesa — a mesma palavra em dois níveis distintos da cadeia.",
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M02-OBJ-N3-004",
    "topico": "02-pnd-end-e-pesd",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M02-C014",
      "REL-T2-M02-C007",
      "REL-T2-M02-C010"
    ],
    "fonte": "AULA 13.pdf, slides “Estratégia Nacional de Defesa (END)”, “Capacidades Nacionais de Defesa (CND)”, “Responsabilidade pelos Setores Estratégicos” e “Objetivos Nacionais de Defesa”; Estudos Dirigidos por correlação.",
    "competencia": "Remontar a cadeia objetivo-estratégia-capacidade-ação a partir de um programa concreto.",
    "erroProvavel": "Saltar da ação ao objetivo sem nomear a capacidade intermediária.",
    "armadilha": "Saltar da ação ao objetivo sem nomear a capacidade intermediária.",
    "tempoEstimadoMin": 4,
    "assinatura": [
      "obj",
      "N3",
      "aplicação inédita — decidir em cenário novo com distratores próximos",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "multipla",
    "enunciado": "Percorrendo a cadeia objetivo → estratégia → capacidade → ação no sentido inverso, qual encadeamento está CORRETO?",
    "alternativas": [
      "PROSUB → tarefa básica de projeção de poder sobre terra → diretriz de emprego do Poder Naval da END → objetivo de preservar a coesão e a unidade nacionais.",
      "PROSUB → capacidades de dissuasão e de desenvolvimento tecnológico de defesa, com o setor nuclear sob responsabilidade da Marinha → orientação da END para dotar o Estado de capacidade → objetivo de promover a autonomia tecnológica e produtiva na área de defesa.",
      "SisGAAz → capacidade de mobilização → pressuposto de estímulo à Base Industrial de Defesa → objetivo de ampliar o envolvimento da sociedade nos assuntos de Defesa Nacional.",
      "Complexo naval na foz do Amazonas → capacidade de gestão da informação → setor cibernético sob responsabilidade do Exército → objetivo de contribuir para a estabilidade regional.",
      "PESD 2020-2031 → Objetivos Nacionais de Defesa → Capacidades Nacionais de Defesa → ações das Forças, porque o planejamento setorial antecede a definição dos objetivos."
    ],
    "correta": 1,
    "comentario": "A cadeia correta liga uma ação concreta à capacidade que ela constrói, à orientação estratégica que a justifica e ao objetivo político que a sustenta. O PROSUB constrói **dissuasão** e **desenvolvimento tecnológico de defesa**; o setor nuclear é responsabilidade da **Marinha**; a END é justamente “o vínculo entre o posicionamento do País nas questões de Defesa e as ações necessárias para efetivamente dotar o Estado da capacidade para atender seus interesses”; e o objetivo da PND correspondente é promover a autonomia tecnológica e produtiva. O erro que a questão pune é saltar da ação ao objetivo sem nomear a capacidade — é exatamente aí que se perde o ponto do nexo causal.",
    "explicacaoDistratores": [
      "Errada. A projeção de poder sobre terra não é a tarefa que o PROSUB constrói primariamente, e coesão nacional não é o objetivo pertinente.",
      "Correta. Ação → capacidades → orientação da END → objetivo da PND, sem salto.",
      "Errada. O SisGAAz constrói gestão da informação e pronta-resposta, não mobilização; e a BID é pressuposto, não etapa dessa cadeia.",
      "Errada. O setor cibernético é do Exército e não se aplica ao complexo naval; a cadeia mistura níveis.",
      "Errada. Inverte a ordem: a PND define objetivos, a END orienta e o PESD traduz em metas setoriais."
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M02-DIS-N3-005",
    "topico": "02-pnd-end-e-pesd",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M02-C012",
      "REL-T2-M02-C011"
    ],
    "fonte": "AULA 13.pdf, slides “Planejamento Estratégico Setorial de Defesa (PESD) 2020-2031”, “PESD 2020-2031 — Visão de futuro”, “MAPA ESTRATÉGICO SETORIAL”, “Perspectiva Aprendizagem e Crescimento” e “Perspectiva Sociedade”, e Estudo Dirigido (“Correlacione diretamente o PESD e o ensino na Escola Naval”).",
    "competencia": "Correlacionar documento setorial e instituição de ensino nomeando perspectiva e mecanismo.",
    "erroProvavel": "Afirmar o vínculo sem nomear a perspectiva do Mapa Estratégico Setorial.",
    "armadilha": "Afirmar o vínculo sem nomear a perspectiva do Mapa Estratégico Setorial.",
    "tempoEstimadoMin": 10,
    "assinatura": [
      "dis",
      "N3",
      "aplicação inédita — decidir em cenário novo com distratores próximos",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "discursiva",
    "enunciado": "Correlacione diretamente o PESD 2020-2031 e o ensino na Escola Naval, indicando a perspectiva do Mapa Estratégico Setorial em que o vínculo se estabelece e o mecanismo que liga um ao outro.",
    "gabaritoComentado": "**Tese.** O ensino na Escola Naval é instrumento direto do PESD, e o vínculo se estabelece na perspectiva **Aprendizado e Crescimento** do Mapa Estratégico Setorial.\n\n**Conceito.** O PESD é elaborado pelo Ministério da Defesa para traduzir a END em ações concretas e metas para cada Força. Sua missão inclui preparar as Forças Armadas em permanente estado de prontidão, inclusive em apoio à política externa, e sua visão de futuro fala de Forças modernas, compatíveis, adequadamente preparadas e permanentemente prontas.\n\n**Evidência.** Na perspectiva Aprendizado e Crescimento, o Mapa Estratégico Setorial fixa três objetivos: preservar a efetividade dos sistemas de ensino das Forças Armadas; estimular o desenvolvimento de Estudos de Defesa; e incrementar a preservação do patrimônio histórico-cultural e o culto aos valores, às tradições e à ética. A Escola Naval realiza os três simultaneamente: é sistema de ensino, é ambiente de Estudos de Defesa e é instituição de formação em valores e tradições.\n\n**Nexo causal.** As quatro perspectivas do Mapa não são listas paralelas: são uma cadeia. Aprendizado e Crescimento sustenta Processos Internos, que entrega resultado na perspectiva Sociedade. Sem sistema de ensino efetivo não há pessoal capaz de operar os setores estratégicos nem de conduzir governança e inovação; sem isso não se entrega à sociedade dissuasão, preparo para a destinação constitucional, contribuição ao desenvolvimento e apoio à política externa. A formação do Aspirante é, portanto, a base da cadeia, e não um item lateral.\n\n**Fechamento com a disciplina.** O objetivo “incrementar o apoio à política externa”, presente na perspectiva Sociedade e no texto da missão, é o que dá sentido a estudar Relações Internacionais na Escola Naval: o oficial formado é também instrumento de apoio à política externa, o que exige compreender o sistema internacional, e não apenas operar meios.\n\n**Conclusão.** O PESD correlaciona-se com a Escola Naval pela perspectiva Aprendizado e Crescimento, e o mecanismo é de precedência causal: a efetividade do ensino é condição da capacidade que as demais perspectivas pressupõem.\n\n**Resposta insuficiente:** “A Escola Naval forma oficiais, e o PESD quer Forças preparadas.” Correto e vazio: não nomeia perspectiva nem mecanismo. **Satisfatória:** nomeia a perspectiva Aprendizado e Crescimento e um de seus objetivos. **Nível MB:** nomeia a perspectiva, os três objetivos, o mecanismo de cadeia entre as perspectivas e fecha com o apoio à política externa.",
    "criterios": [
      "Nomeia a perspectiva Aprendizado e Crescimento (0,2)",
      "Cita ao menos dois dos três objetivos dessa perspectiva (0,2)",
      "Explica o mecanismo de cadeia entre as perspectivas, e não apenas a lista (0,3)",
      "Explicita a função do PESD de traduzir a END em ações e metas por Força (0,1)",
      "Fecha ligando ao objetivo de apoio à política externa (0,2)",
      "Não pontua: responder pela perspectiva Sociedade sem justificar, ou afirmar o vínculo sem nomear perspectiva"
    ],
    "modalidades": [
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M02-OBJ-N3-006",
    "topico": "02-pnd-end-e-pesd",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M02-C005",
      "REL-T2-M02-C006",
      "REL-T2-M02-C004"
    ],
    "fonte": "AULA 13.pdf, slides “Alguns pressupostos da PND” e “Objetivos Nacionais de Defesa” (dois slides); fontes-manifesto.json, conflito CF-03.",
    "competencia": "Separar pressupostos da PND de Objetivos Nacionais de Defesa, recusando paráfrase de resumo.",
    "erroProvavel": "Incluir na lista de objetivos um item que é pressuposto, por ser verdadeiro no conteúdo.",
    "armadilha": "Incluir na lista de objetivos um item que é pressuposto, por ser verdadeiro no conteúdo.",
    "tempoEstimadoMin": 4,
    "assinatura": [
      "obj",
      "N3",
      "aplicação inédita — decidir em cenário novo com distratores próximos",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "multipla",
    "enunciado": "Um Aspirante monta a seguinte lista como sendo dos Objetivos Nacionais de Defesa: garantir a soberania e a integridade territorial; assegurar a capacidade de Defesa para as missões constitucionais; promover a autonomia tecnológica e produtiva; fortalecer a presença no entorno estratégico por meio da ZOPACAS; e contribuir para a paz e a segurança internacionais. Qual é o problema dessa lista?",
    "alternativas": [
      "Nenhum: a lista reproduz corretamente cinco dos oito Objetivos Nacionais de Defesa.",
      "O item sobre a ZOPACAS não figura com essa redação entre os Objetivos Nacionais de Defesa; a manutenção do Atlântico Sul como Zona de Paz e Cooperação é um PRESSUPOSTO da PND, e a formulação apresentada vem de paráfrase de resumo.",
      "O item sobre autonomia tecnológica e produtiva pertence à END, e não aos Objetivos Nacionais de Defesa da PND.",
      "O item sobre contribuir para a paz e a segurança internacionais é do PESD, não da PND.",
      "A lista está incompleta apenas porque omite a definição de AJB, que integra os Objetivos Nacionais de Defesa."
    ],
    "correta": 1,
    "comentario": "A lista mistura dois níveis. Os slides separam **pressupostos** da PND — entre eles buscar a manutenção do Atlântico Sul como ZOPACAS, estimular a BID, proteger e integrar a Amazônia e defender a exploração da Antártica só para pesquisa científica — dos **Objetivos Nacionais de Defesa**, que são oito e incluem preservar a coesão e a unidade nacionais, salvaguardar pessoas e interesses no exterior, ampliar o envolvimento da sociedade e incrementar a projeção do Brasil no concerto das Nações. A redação sobre entorno estratégico e ZOPACAS aparece em resumo de Aspirante, não no slide: é o tipo de item plausível e correto no conteúdo que não está na lista cobrada.",
    "explicacaoDistratores": [
      "Errada. Quatro dos cinco itens estão corretos, mas o quinto não pertence à lista.",
      "Correta. ZOPACAS é pressuposto da PND; a redação apresentada é paráfrase de resumo.",
      "Errada. Promover a autonomia tecnológica e produtiva na área de defesa é Objetivo Nacional de Defesa expresso no slide.",
      "Errada. Contribuir para a estabilidade regional e para a paz e a segurança internacionais é Objetivo Nacional de Defesa.",
      "Errada. A definição de AJB aparece no bloco do Poder Naval, não entre os objetivos."
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M02-DIS-N4-007",
    "topico": "02-pnd-end-e-pesd",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M02-C013",
      "REL-T2-M02-C001",
      "REL-T2-M01-C007"
    ],
    "fonte": "AULA 12.pdf, slides “Pontos para Debate (segundo Alsina Jr.)” e “Principais heranças do Barão do Rio Branco”; REL - T2.pdf, desenvolvimento da crítica de Alsina Jr. e as conclusões de Milani e Nery; AULA 12.pdf, slide “PEB - Constituição de 1988”.",
    "competencia": "Sustentar duas leituras opostas do mesmo fato histórico e concluir sem simplificar.",
    "erroProvavel": "Ler a herança pacífica apenas como ativo, ignorando a crítica do corpus.",
    "armadilha": "Ler a herança pacífica apenas como ativo, ignorando a crítica do corpus.",
    "tempoEstimadoMin": 14,
    "assinatura": [
      "dis",
      "N4",
      "integração — cruza módulos, arbitra entre leituras ou projeta consequência",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "discursiva",
    "enunciado": "A herança pacífica da atuação do Barão do Rio Branco é apresentada em aula como ativo da política externa brasileira. À luz do debate proposto a partir de Alsina Jr., discuta em que medida essa mesma herança pode ser lida como passivo estratégico, e conclua.",
    "gabaritoComentado": "**Tese.** A herança de Rio Branco é ativo diplomático e, simultaneamente, pode ser lida como passivo estratégico — e a tensão entre as duas leituras é o núcleo do debate sobre a necessidade de uma Grande Estratégia brasileira.\n\n**Conceito.** Grande Estratégia, na formulação de Peter Feaver recuperada em aula, é a coleção de planos e políticas que compreendem o esforço deliberado do Estado para reunir ferramentas políticas, militares, diplomáticas e econômicas em favor do interesse nacional. Ela tem forte influência realista, porque supõe um sistema complexo e instável em que o Estado precisa planejar de longo prazo.\n\n**Leitura como ativo.** Dez fronteiras resolvidas sem guerra, não-intervenção, solução pacífica de litígios e boa vizinhança produziram três resultados mensuráveis: eliminaram a hipótese de conflito territorial no entorno, credenciaram o Brasil como interlocutor e mediador, e reduziram permanentemente a necessidade de dissuasão terrestre. Os princípios foram constitucionalizados no art. 4º da CF/88, o que lhes dá estabilidade que nenhum governo isolado poderia dar.\n\n**Leitura como passivo.** Alsina Jr. aponta, como principais ameaças à defesa do Brasil, ameaças INTERNAS: uma cultura excessivamente pacífica, assentada na crença de que o Brasil não entrará em guerra; uma cultura de defesa pouco consolidada; baixo investimento político e orçamentário; e baixa prontidão militar. Acrescenta que a defesa fica subordinada à diplomacia, porque uma diplomacia tão pacífica e conciliadora acaba enfraquecendo a autonomia das Forças Armadas. A fragmentação da sociedade é apresentada como fator que atrapalha a formação de uma Grande Estratégia, ainda que o Brasil represente cerca de 50% da América do Sul em população, território, recursos militares e economia.\n\n**Nexo causal.** O mecanismo é o mesmo nas duas leituras: ausência de ameaça estatal próxima reduz a percepção social de necessidade de defesa; percepção reduzida produz orçamento reduzido; orçamento reduzido produz baixa prontidão. O que foi conquista diplomática no século XX virou, no século XXI, ausência de incentivo — e o Brasil pode ser envolvido em disputas por água, energia e recursos da Amazônia Azul, além da própria Amazônia, cobiçada por grandes potências.\n\n**Contraponto e limite.** Não se trata de propor abandono dos princípios: eles são constitucionais e continuam rendendo. Milani e Nery indicam o caminho intermediário — consenso das elites sobre desenvolvimento, aprofundamento das relações civis-militares na estrutura decisória do Ministério da Defesa, integração entre Forças Armadas, universidades e setor privado para melhorar a BID, e maior integração entre política externa e política de defesa.\n\n**Conclusão.** A herança de Rio Branco não deve ser substituída, mas deixa de bastar: sem Grande Estratégia que converta a paz conquistada em capacidade preservada, a mesma herança que eliminou ameaças produz a desmobilização que as novas disputas por recursos tornam arriscada.\n\n**Resposta insuficiente:** dizer que a herança é boa e que falta orçamento. **Satisfatória:** apresenta as duas leituras. **Nível MB:** apresenta as duas leituras, nomeia o mecanismo que as une, cita as ameaças internas de Alsina Jr. e propõe o caminho intermediário sem abandonar a tese.",
    "criterios": [
      "Define Grande Estratégia com a formulação de Feaver e sua influência realista (0,15)",
      "Apresenta a leitura como ativo com pelo menos dois resultados concretos (0,2)",
      "Apresenta a leitura como passivo nomeando as ameaças internas de Alsina Jr. (0,25)",
      "Explicita o mecanismo comum: ausência de ameaça → percepção → orçamento → prontidão (0,25)",
      "Conclui com contraponto construtivo, sem abandonar os princípios constitucionais (0,15)",
      "Não pontua: atribuir a Alsina Jr. a tese de ameaça externa; apresentar só uma das leituras"
    ],
    "modalidades": [
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M03-VF-N1-001",
    "topico": "03-politica-maritima-naval-e-economia-azul",
    "dificuldade": "facil",
    "conceptIds": [
      "REL-T2-M03-C007"
    ],
    "fonte": "AULA 14.pdf, slide “Elementos do Poder Marítimo” (diagrama); REL - T2.pdf, lista dos oito elementos e a distinção entre os dois poderes; AULA 15.pdf, slide “Expansão geopolítica” (Mahan).",
    "competencia": "Distinguir Poder Marítimo de Poder Naval pela relação de contenção.",
    "erroProvavel": "Usar Poder Naval e Poder Marítimo como sinônimos.",
    "armadilha": "Usar Poder Naval e Poder Marítimo como sinônimos.",
    "tempoEstimadoMin": 2,
    "assinatura": [
      "vf",
      "N1",
      "âncora — recuperação de lista fechada ou definição literal",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "vf",
    "afirmacao": "Poder Naval e Poder Marítimo são expressões equivalentes, uma vez que ambas designam o conjunto de meios de que o Estado dispõe para atuar no mar.",
    "correta": false,
    "comentario": "**Falsa.** A relação é de contenção, não de equivalência: o Poder Marítimo **compreende** o Poder Naval. O Poder Naval é o braço militar, operacionalizado pela Marinha; o Poder Marítimo reúne oito elementos — Poder Naval, Marinha Mercante, indústria naval, indústria bélica, pessoal, pesquisa e tecnologia, recursos do mar e infraestrutura marítima e hidroviária. Confundir os dois esvazia metade do conceito, justamente a metade civil, que é a que sustenta a exigência de Mahan de integrar Marinha de Guerra e Marinha Mercante.",
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M03-OBJ-N2-002",
    "topico": "03-politica-maritima-naval-e-economia-azul",
    "dificuldade": "medio",
    "conceptIds": [
      "REL-T2-M03-C001",
      "REL-T2-M00-C002"
    ],
    "fonte": "AULA 14.pdf, slide “Política Marítima Nacional” (Decreto 12.481, de 02/06/2025); REL - T2.pdf, seção sobre a PMN; fontes-manifesto.json, conflito CF-02.",
    "competencia": "Resolver divergência entre resumo e slide reconstruindo a sequência causal.",
    "erroProvavel": "Afirmar que a PMN está defasada por ter estudado apenas pelo resumo.",
    "armadilha": "Afirmar que a PMN está defasada por ter estudado apenas pelo resumo.",
    "tempoEstimadoMin": 3,
    "assinatura": [
      "obj",
      "N2",
      "reconhecimento aplicado — identificar o conceito em situação descrita",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "multipla",
    "enunciado": "Um Aspirante afirma, em uma resposta, que “a Política Marítima Nacional encontra-se defasada em relação à PND e à END, por ser a atualização de 1994 de um decreto de 1984, razão pela qual a Marinha instituiu um Grupo de Trabalho Interministerial em 2021”. Avalie a afirmação.",
    "alternativas": [
      "Está integralmente correta e reproduz o que consta do slide da Aula 15.",
      "Está desatualizada: descreve o estado ANTERIOR. O slide registra que a Política Marítima Nacional foi reeditada pelo Decreto nº 12.481, de 02 de junho de 2025, de modo que a defasagem descrita é o antecedente, e o GTI de 2021 é a etapa intermediária.",
      "Está errada porque nunca houve defasagem: a PMN sempre acompanhou as revisões da PND e da END.",
      "Está errada porque o Grupo de Trabalho Interministerial foi instituído pelo Ministério da Defesa, e não pela Marinha.",
      "Está correta quanto à defasagem e errada quanto ao GTI, que na verdade produziu apenas estudos comparativos sem consequência normativa."
    ],
    "correta": 1,
    "comentario": "Este é o conflito CF-02 do manifesto de fontes, e a hierarquia o resolve. As duas informações não são contraditórias em simultâneo: são etapas de uma sequência. Defasagem (decreto de 1984, atualizado em 1994) → instituição do GTI em 2021, com estudos comparativos das políticas marítimas de outros países e alinhamento aos interesses estratégicos nacionais → reedição pelo Decreto 12.481, de 02/06/2025. Quem estudou só pelo resumo responde “está defasada” e erra, porque o slide registra o desfecho. A lição de método é que resumo de colega descreve um momento; o slide do professor descreve o estado atual.",
    "explicacaoDistratores": [
      "Errada. O slide traz o decreto de 2025, que encerra a defasagem descrita.",
      "Correta. A afirmação descreve o antecedente; a sequência termina no decreto de 2025.",
      "Errada. A defasagem existiu e é justamente o que motivou o GTI.",
      "Errada. O corpus atribui a instituição do GTI à Marinha.",
      "Errada. Os estudos comparativos são a etapa que antecede e fundamenta a reedição normativa."
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M03-COR-N2-003",
    "topico": "03-politica-maritima-naval-e-economia-azul",
    "dificuldade": "medio",
    "conceptIds": [
      "REL-T2-M03-C007",
      "REL-T2-M03-C008",
      "REL-T2-M03-C009",
      "REL-T2-M03-C010",
      "REL-T2-M03-C003",
      "REL-T2-M03-C012"
    ],
    "fonte": "AULA 14.pdf, slides “Elementos do Poder Marítimo”, “Funções do Poder Marítimo”, “Fatores Condicionantes do Poder Marítimo”, “PEM 2040 - Ameaças”, “Política Naval” (entorno estratégico) e “Programas Estratégicos”; REL - T2.pdf, listas recuperadas.",
    "competencia": "Classificar itens nas quatro listas do PEM 2040 e da Política Naval sem embaralhá-las.",
    "erroProvavel": "Trocar elementos por funções, ou condicionantes por ameaças.",
    "armadilha": "Trocar elementos por funções, ou condicionantes por ameaças.",
    "tempoEstimadoMin": 8,
    "assinatura": [
      "cor",
      "N2",
      "reconhecimento aplicado — identificar o conceito em situação descrita",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "correlacione",
    "titulo": "Correlacione cada item à categoria do PEM 2040 ou da Política Naval a que pertence",
    "chaves": [
      {
        "chave": "A",
        "texto": "Elemento do Poder Marítimo"
      },
      {
        "chave": "B",
        "texto": "Função do Poder Marítimo"
      },
      {
        "chave": "C",
        "texto": "Fator condicionante do Poder Marítimo"
      },
      {
        "chave": "D",
        "texto": "Ameaça listada no PEM 2040"
      },
      {
        "chave": "E",
        "texto": "Item do entorno estratégico brasileiro"
      },
      {
        "chave": "F",
        "texto": "Programa Estratégico da Marinha"
      }
    ],
    "itens": [
      {
        "texto": "Marinha Mercante",
        "chave": "A"
      },
      {
        "texto": "Explotação",
        "chave": "B"
      },
      {
        "texto": "Mentalidade marítima",
        "chave": "C"
      },
      {
        "texto": "Biopirataria",
        "chave": "D"
      },
      {
        "texto": "Países da costa ocidental africana",
        "chave": "E"
      },
      {
        "texto": "SisGAAz",
        "chave": "F"
      },
      {
        "texto": "Defesa marítima e ribeirinha",
        "chave": "B"
      },
      {
        "texto": "Capacidade de mobilização",
        "chave": "C"
      },
      {
        "texto": "Antártica",
        "chave": "E"
      },
      {
        "texto": "Pesca ilegal",
        "chave": "D"
      }
    ],
    "comentario": "Quatro listas do módulo são embaralháveis, e o professor as embaralha. As chaves de leitura: **elementos** são coisas (Poder Naval, Marinha Mercante, indústria naval, indústria bélica, pessoal, pesquisa e tecnologia, recursos do mar, infraestrutura marítima e hidroviária); **funções** são o que o Poder Marítimo faz (intercomunicação, defesa marítima e ribeirinha, pesquisa, explotação); **condicionantes** são o que viabiliza ou limita (mentalidade marítima, capacidade de financiamento, necessidade de desenvolvimento sustentável, capacidade de mobilização, capacidade tecnológica e industrial); **ameaças** são o que se enfrenta. Cuidado com “mentalidade marítima”, que aparece duas vezes na aula — como condicionante e como programa estratégico; aqui, pela redação em minúscula e pelo contexto de lista de condicionantes, é o condicionante.",
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M03-OBJ-N3-004",
    "topico": "03-politica-maritima-naval-e-economia-azul",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M03-C011",
      "REL-T2-M00-C013"
    ],
    "fonte": "AULA 14.pdf, slide “PEM 2040 - Conceito Estratégico Marítimo-Naval”; REL - T2.pdf, distinção entre combate no mar e combate pelo mar; SOPA REL T1 2024, questão 4 (formato de asserção e razão sobre o mesmo par conceitual, com fatos e gabarito distintos).",
    "competencia": "Julgar par de asserções sobre ampliação conceitual, recusando a tese de superação total.",
    "erroProvavel": "Aceitar que o Combate pelo Mar tornou Mahan irrelevante.",
    "armadilha": "Aceitar que o Combate pelo Mar tornou Mahan irrelevante.",
    "tempoEstimadoMin": 4,
    "assinatura": [
      "obj",
      "N3",
      "aplicação inédita — decidir em cenário novo com distratores próximos",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "multipla",
    "enunciado": "Avalie as afirmativas a seguir. **AFIRMATIVA 1:** O Conceito Estratégico Marítimo-Naval do PEM 2040 incorpora a distinção entre Combate no Mar e Combate pelo Mar, sendo o segundo de natureza estratégica e geopolítica e alcançando os espaços aéreo, cibernético, espacial, marítimo e subaquático. **PORQUE** **AFIRMATIVA 2:** A adoção do Combate pelo Mar significa que o pensamento de Mahan foi superado e não é mais considerado nas estratégias navais dos principais países. Assinale a alternativa CORRETA.",
    "alternativas": [
      "A afirmativa 1 está correta e a afirmativa 2 está errada.",
      "A afirmativa 1 está errada e a afirmativa 2 está correta.",
      "Ambas estão corretas e a afirmativa 2 é a explicação da afirmativa 1.",
      "Ambas estão corretas, mas a afirmativa 2 não é a explicação da afirmativa 1.",
      "Ambas estão erradas."
    ],
    "correta": 0,
    "comentario": "A primeira afirmativa reproduz o corpus: o Combate no Mar diz respeito a batalhas navais tradicionais, com navios, submarinos e aeronaves, em determinado espaço marítimo e com o fim de vencer a batalha; o Combate pelo Mar tem foco estratégico e geopolítico, ligado à soberania e ao controle do mar por meio dos espaços aéreo, cibernético, espacial, marítimo e subaquático. A segunda é falsa por dois motivos independentes: ampliar o conceito não é superar o anterior, e Mahan segue no centro de qualquer raciocínio sobre comando do mar, choke points e bases — inclusive na estrutura de força americana e no próprio desenho dos programas brasileiros. Sendo a segunda falsa, não há nexo a julgar.",
    "explicacaoDistratores": [
      "Correta. A primeira é a formulação do corpus; a segunda é falsa por exagero de superação.",
      "Errada. A primeira reproduz literalmente a distinção do PEM 2040.",
      "Errada. A afirmativa 2 é falsa, logo não pode explicar nada.",
      "Errada. A afirmativa 2 não é correta.",
      "Errada. A afirmativa 1 é correta."
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M03-DIS-N3-005",
    "topico": "03-politica-maritima-naval-e-economia-azul",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M03-C019",
      "REL-T2-M02-C009",
      "REL-T2-M03-C016"
    ],
    "fonte": "AULA 13.pdf, slides “Poder Naval (END)” e Estudo Dirigido (“Correlacione alguma das tarefas básicas do Poder Naval com o conceito de Amazônia Azul”); AULA 14.pdf, slides “SisGAAz” e “Economia Azul”.",
    "competencia": "Correlacionar tarefa básica e conceito público nomeando o instrumento que os liga.",
    "erroProvavel": "Afirmar a correlação sem escolher uma tarefa e sem explicitar o nexo.",
    "armadilha": "Afirmar a correlação sem escolher uma tarefa e sem explicitar o nexo.",
    "tempoEstimadoMin": 10,
    "assinatura": [
      "dis",
      "N3",
      "aplicação inédita — decidir em cenário novo com distratores próximos",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "discursiva",
    "enunciado": "Correlacione UMA das tarefas básicas do Poder Naval com o conceito de Amazônia Azul, explicando o nexo e indicando o programa estratégico que operacionaliza essa relação.",
    "gabaritoComentado": "**Tese.** A tarefa de **controle de área marítima** é a que se correlaciona mais diretamente com a Amazônia Azul, e o programa que a operacionaliza é o SisGAAz.\n\n**Conceitos.** Amazônia Azul é a designação do oceano do Brasil, que dá dimensão pública ao conceito jurídico de Águas Jurisdicionais Brasileiras — as águas interiores e os espaços marítimos em que o Brasil exerce jurisdição, em algum grau, incluindo a faixa de 200 milhas marítimas contadas das linhas de base e as águas sobrejacentes à plataforma continental estendida, onde ela ocorrer. Controle de área marítima é uma das quatro tarefas básicas do Poder Naval na END.\n\n**Nexo causal.** Não se controla o que não se conhece. Controlar área marítima pressupõe consciência situacional: saber quem está onde, fazendo o quê, em tempo útil para decidir. A END determina que o monitoramento do mar, inclusive a partir do espaço, integre o repertório de práticas e capacitações operacionais — e é precisamente essa a função do Sistema de Gerenciamento da Amazônia Azul, cujo objetivo declarado é monitorar e controlar de forma integrada as AJB e as áreas internacionais de responsabilidade SAR, a fim de agilizar o ciclo decisório e assegurar pronta resposta a qualquer ameaça, emergência, agressão ou ilegalidade. A cadeia é: dado → consciência situacional → decisão → controle.\n\n**Evidência de escala.** A Amazônia Azul não é espaço simbólico: do mar vêm cerca de 95% do petróleo, 80% do gás natural e 45% do pescado produzidos no País, e por rotas marítimas escoam mais de 95% do comércio exterior brasileiro. Controlar essa área é controlar a base material da economia nacional.\n\n**Nuance.** A correlação também funciona com **negação do uso do mar** — impedir que um adversário use a Amazônia Azul contra o Brasil — e com **contribuição para a dissuasão**, uma vez que área monitorada é área cuja violação tem custo previsível. O que não se aceita é responder sem escolher uma tarefa e sem explicar o nexo. Registre-se ainda que o SisGAAz alcança áreas internacionais de responsabilidade SAR, que estão FORA das AJB: o sistema é maior que a Amazônia Azul.\n\n**Conclusão.** Controle de área marítima é a tarefa básica que a Amazônia Azul exige com mais evidência, porque jurisdição sem consciência situacional é jurisdição apenas nominal — e o SisGAAz é o instrumento que converte uma em outra.\n\n**Resposta insuficiente:** “A Marinha protege a Amazônia Azul, que é grande e rica.” Não escolhe tarefa nem explica nexo. **Satisfatória:** escolhe a tarefa e explica o nexo. **Nível MB:** escolhe a tarefa, explica o nexo pela cadeia dado-decisão-controle, nomeia o SisGAAz com seu objetivo, ancora em dado de escala e registra a nuance do alcance SAR.",
    "criterios": [
      "Escolhe explicitamente UMA tarefa básica entre as quatro (0,15)",
      "Define Amazônia Azul e a relaciona à definição de AJB (0,2)",
      "Explica o nexo causal entre a tarefa escolhida e o conceito (0,3)",
      "Nomeia o SisGAAz e seu objetivo declarado (0,2)",
      "Ancora em pelo menos um dado de escala da Economia Azul (0,15)",
      "Não pontua: não escolher tarefa; afirmar a correlação sem nexo; listar as quatro tarefas sem decidir"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M03-OBJ-N3-006",
    "topico": "03-politica-maritima-naval-e-economia-azul",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M03-C014",
      "REL-T2-M02-C010",
      "REL-T2-M03-C013"
    ],
    "fonte": "AULA 14.pdf, slides “PROSUB” (dois), “Construção do Núcleo do Poder Naval” e Estudo Dirigido sobre o PROHIDRO; REL - T2.pdf, as duas frentes do PNM; AULA 13.pdf, slide “Alguns pressupostos da PND” (ZOPACAS).",
    "competencia": "Distinguir propulsão nuclear de armamento nuclear e justificar o PROHIDRO pela cadeia até a jurisdição.",
    "erroProvavel": "Atribuir armamento nuclear ao submarino Álvaro Alberto.",
    "armadilha": "Atribuir armamento nuclear ao submarino Álvaro Alberto.",
    "tempoEstimadoMin": 4,
    "assinatura": [
      "obj",
      "N3",
      "aplicação inédita — decidir em cenário novo com distratores próximos",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "multipla",
    "enunciado": "Sobre os programas de construção do núcleo do Poder Naval, assinale a alternativa INCORRETA.",
    "alternativas": [
      "O PROSUB, criado em 2008 em parceria entre Brasil e França, prevê quatro submarinos convencionais — Riachuelo, Humaitá, Tonelero e Angostura — e o primeiro submarino brasileiro com propulsão nuclear, o Álvaro Alberto, previsto para 2038.",
      "O PROSUB contempla também a construção de um complexo de infraestrutura industrial e de apoio à operação dos submarinos em Itaguaí, no Rio de Janeiro, que engloba os estaleiros, a Base Naval e a Unidade de Fabricação de Estruturas Metálicas.",
      "O submarino Álvaro Alberto dotará a Marinha do Brasil de armamento nuclear embarcado, o que explica a atribuição do setor nuclear à Marinha na END.",
      "O PROHIDRO destina-se à obtenção de meios hidroceanográficos, e sua relevância em termos de Política Nacional de Defesa decorre de o levantamento hidrográfico sustentar o pleito de plataforma continental estendida e, por consequência, a própria extensão das AJB.",
      "A parceria do PROSUB é caracterizada como relação entre Estados, e não como contrato comercial ordinário, o que a torna também instrumento de política externa."
    ],
    "correta": 2,
    "comentario": "A alternativa incorreta troca **propulsão** por **armamento**. O Programa Nuclear da Marinha tem duas frentes declaradas: o protótipo de reator do submarino de propulsão nuclear e o domínio da tecnologia do ciclo do combustível nuclear. Nenhuma delas é armamento. Isso é coerente com os princípios do país — a Declaração do Iguaçu de 1985 pressupunha a renúncia a programas nucleares com fins bélicos, e a ZOPACAS envolve evitar a presença de armas nucleares no Atlântico Sul, pressuposto expresso da PND. Um submarino de propulsão nuclear ganha autonomia e permanência submersa, o que serve à dissuasão convencional; não é vetor nuclear.",
    "explicacaoDistratores": [
      "Correta e verdadeira. É a descrição do slide.",
      "Correta e verdadeira. O complexo de Itaguaí é BID materializada.",
      "INCORRETA — resposta da questão. O programa é de propulsão e de ciclo do combustível, não de armamento.",
      "Correta e verdadeira. É a resposta ao Estudo Dirigido sobre o PROHIDRO.",
      "Correta e verdadeira. O slide qualifica a parceria como relação entre Estados."
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M03-DIS-N4-007",
    "topico": "03-politica-maritima-naval-e-economia-azul",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M03-C010",
      "REL-T2-M03-C008",
      "REL-T2-M03-C005"
    ],
    "fonte": "AULA 14.pdf, slides “PEM 2040 - Ameaças”, “Funções do Poder Marítimo”, “Política Naval” e Estudo Dirigido (“Qual das ameaças contidas no PEM 2040 é mais difícil de combater, em termos operacionais? Por quê?”).",
    "competencia": "Emitir julgamento fundamentado com critérios explícitos e comparar com alternativa.",
    "erroProvavel": "Confundir gravidade estratégica com dificuldade operacional.",
    "armadilha": "Confundir gravidade estratégica com dificuldade operacional.",
    "tempoEstimadoMin": 12,
    "assinatura": [
      "dis",
      "N4",
      "integração — cruza módulos, arbitra entre leituras ou projeta consequência",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "discursiva",
    "enunciado": "Entre as ameaças listadas no PEM 2040, escolha a que você considera operacionalmente mais difícil de combater e justifique com critérios explícitos. Relacione a escolha com pelo menos uma função do Poder Marítimo.",
    "gabaritoComentado": "**Observação ao corretor.** A pergunta admite mais de uma resposta defensável. O que se avalia é o CRITÉRIO e o NEXO, não a escolha. A resposta-modelo abaixo escolhe a pesca ilegal; escolhas como ameaças cibernéticas, crime organizado ou disputa por recursos naturais pontuam integralmente se sustentadas pelos mesmos critérios.\n\n**Tese.** A pesca ilegal é operacionalmente a mais difícil de combater entre as ameaças do PEM 2040.\n\n**Critérios explícitos.** Adoto quatro: (1) dispersão espacial da ameaça; (2) ausência de assinatura que a distinga de atividade lícita; (3) sobreposição com direito de terceiros e limites jurídicos de atuação; (4) razão entre a área a cobrir e os meios disponíveis.\n\n**Aplicação dos critérios.** (1) A pesca ilegal ocorre em toda a extensão das Águas Jurisdicionais Brasileiras, e não em um ponto definido. (2) Um pesqueiro ilegal é fisicamente idêntico a um pesqueiro legal: a ilegalidade está na licença, na cota ou na área, não na plataforma — o que obriga a abordagem e inspeção, e não apenas detecção. (3) Parte da atividade se dá em faixas em que a jurisdição é exercida “em algum grau”, e não plenamente, o que condiciona o que se pode fazer; e a Política Naval determina que o enfrentamento ocorra de forma soberana, conforme os princípios constitucionais e as normas do Direito Internacional. (4) A área é de dimensão continental e os meios são finitos, o que impõe escolha de prioridades.\n\n**Função do Poder Marítimo afetada.** A ameaça atinge diretamente a **explotação**, isto é, a exploração e o aproveitamento dos recursos, porque subtrai recurso vivo que integra o patrimônio nacional; e mobiliza a **defesa marítima e ribeirinha**, porque a resposta é justamente fiscalização e presença. A função de **pesquisa** também é afetada, já que sem levantamento de estoques não se sabe qual captura é sustentável.\n\n**Contraponto.** Uma escolha igualmente defensável seria a ameaça cibernética: ela dispensa presença física, tem atribuição de autoria incerta e não é enfrentável por meio naval, o que a torna de outra natureza. O critério que a favoreceria é a ausência de assinatura; o critério que a desfavorece, na comparação, é a escala espacial — ela não exige cobrir uma área de dimensão continental. Já a disputa por recursos naturais entre Estados tem assinatura clara e é enfrentável por dissuasão, o que a torna menos difícil no plano operacional, ainda que mais grave no plano estratégico.\n\n**Conclusão.** A dificuldade operacional decorre da combinação entre dispersão, indistinção da assinatura e limite jurídico — e é essa combinação, não a gravidade da ameaça, que a pergunta mede. É também por isso que a resposta brasileira é de consciência situacional e presença, não de poder de fogo.\n\n**Resposta insuficiente:** escolher uma ameaça e dizer que é difícil porque o mar é grande. **Satisfatória:** escolher e apresentar dois critérios aplicados. **Nível MB:** escolher, apresentar critérios explícitos, aplicá-los um a um, ligar a uma função do Poder Marítimo e comparar com uma escolha alternativa.",
    "criterios": [
      "Escolhe explicitamente UMA ameaça da lista do PEM 2040 (0,1)",
      "Enuncia critérios de dificuldade OPERACIONAL antes de aplicá-los (0,25)",
      "Aplica os critérios ao caso escolhido, um a um (0,25)",
      "Relaciona a escolha a pelo menos uma função do Poder Marítimo, nomeando-a (0,2)",
      "Compara com uma escolha alternativa, mostrando por que a mantém (0,2)",
      "Não pontua: escolher ameaça que não está na lista do PEM 2040; justificar por gravidade em vez de dificuldade operacional"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M03-OBJ-N4-008",
    "topico": "03-politica-maritima-naval-e-economia-azul",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M03-C020",
      "REL-T2-M03-C017",
      "REL-T2-M03-C005"
    ],
    "fonte": "AULA 14.pdf, slides “Economia Azul” (três), “Política Naval” (intensificação de disputas) e “Ampliação da Capacidade de Apoio Logístico para os Meios Operativos”; Estudo Dirigido (“o conceito de Economia Azul é fundamental para as atribuições da Marinha? Por quê?”).",
    "competencia": "Converter dado quantitativo em argumento estratégico por meio de mecanismo explícito.",
    "erroProvavel": "Ler dependência econômica do mar como evidência de poder marítimo consolidado.",
    "armadilha": "Ler dependência econômica do mar como evidência de poder marítimo consolidado.",
    "tempoEstimadoMin": 4,
    "assinatura": [
      "obj",
      "N4",
      "integração — cruza módulos, arbitra entre leituras ou projeta consequência",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "multipla",
    "enunciado": "Considere os dados da Economia Azul apresentados em aula: do mar vêm cerca de 95% do petróleo, 80% do gás natural e 45% do pescado produzidos no Brasil, por rotas marítimas escoam mais de 95% do comércio exterior, e nos cerca de 8.500 km de faixa litorânea concentram-se 80% da população e 90% do PIB. Qual conclusão estratégica esses dados sustentam de forma mais rigorosa?",
    "alternativas": [
      "Que o Brasil já é uma potência marítima consolidada, uma vez que sua economia depende majoritariamente do mar.",
      "Que a dependência mede vulnerabilidade: quanto maior a fração da economia que transita pelo mar e se concentra no litoral, maior o dano que uma interdição do tráfego marítimo ou uma agressão litorânea pode causar — o que justifica, entre outras decisões, um complexo naval de uso múltiplo que amplie negação do uso do mar, controle de áreas marítimas e projeção de poder.",
      "Que o esforço de defesa deve se concentrar nas fronteiras terrestres, já que o litoral, por concentrar população e PIB, é naturalmente mais protegido.",
      "Que a Economia Azul torna dispensável o investimento em Poder Naval, porque a atividade econômica privada tende a prover a segurança de que necessita.",
      "Que a concentração populacional no litoral é consequência da Economia Azul e não tem implicação para o planejamento de defesa."
    ],
    "correta": 1,
    "comentario": "Dado não é argumento: o que transforma um no outro é o mecanismo. Os percentuais medem **dependência**, e dependência é a definição operacional de vulnerabilidade — é o que se perde se o fluxo for interrompido. Daí decorre uma cadeia verificável no próprio corpus: a intensificação de disputas por áreas marítimas, água doce, alimentos, recursos minerais, biodiversidade e energia respalda a necessidade de fortalecimento do Poder Naval; e a END aponta a necessidade de um complexo naval de uso múltiplo nas proximidades da foz do rio Amazonas, que ampliará negação do uso do mar, controle de áreas marítimas e projeção de poder, com prioridade para o litoral norte e nordeste. Note que três das quatro tarefas básicas aparecem justificadas por dados econômicos.",
    "explicacaoDistratores": [
      "Errada. Depender do mar não é o mesmo que ter poder sobre ele — é precisamente o oposto, se a capacidade não acompanha.",
      "Correta. Dependência medida vira vulnerabilidade, que vira justificativa de capacidade e de decisão de infraestrutura.",
      "Errada. Concentração de valor é concentração de alvo, não proteção natural.",
      "Errada. Segurança marítima é bem público; o corpus atribui a Segurança Marítima aos resultados que a Marinha entrega à sociedade.",
      "Errada. Inverte a causalidade e nega a implicação que o próprio PEM 2040 e a END extraem dos dados."
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M04-VF-N1-001",
    "topico": "04-estados-unidos",
    "dificuldade": "facil",
    "conceptIds": [
      "REL-T2-M04-C004"
    ],
    "fonte": "HAESBAERT & SANTA BÁRBARA (2026), seção sobre a Doutrina Monroe; MAGNOLI, cap. 21, p. 344-345; AULA 15.pdf, slide “EUA - Expansão, Doutrina Monroe”.",
    "competencia": "Reconhecer a natureza unilateral e a dupla natureza da Doutrina Monroe.",
    "erroProvavel": "Tratar a Doutrina Monroe como tratado ou pacto negociado.",
    "armadilha": "Tratar a Doutrina Monroe como tratado ou pacto negociado.",
    "tempoEstimadoMin": 2,
    "assinatura": [
      "vf",
      "N1",
      "âncora — recuperação de lista fechada ou definição literal",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "vf",
    "afirmacao": "A Doutrina Monroe, de 1823, constituiu-se como tratado internacional negociado entre os Estados Unidos e as repúblicas americanas recém-independentes, o que explica sua permanência como princípio de política externa.",
    "correta": false,
    "comentario": "**Falsa.** A Doutrina Monroe não foi pacto negociado nem tratado internacional: foi **declaração unilateral**, formulada em mensagem presidencial ao Congresso dos Estados Unidos, cuja eficácia derivou da assimetria de poder que permitiu converter um enunciado político em princípio durável de política externa. A permanência não vem de força jurídica, e sim da sua **dupla natureza** — simultaneamente anticolonial (contra a intervenção europeia) e hegemonista (organizando o hemisfério em torno de um Estado-diretor). Magnoli registra ainda que, na prática, a independência das antigas colônias espanholas era assegurada pela hegemonia britânica nos mares: a declaração indicava a ambição, não a capacidade.",
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M04-OBJ-N2-002",
    "topico": "04-estados-unidos",
    "dificuldade": "medio",
    "conceptIds": [
      "REL-T2-M04-C008"
    ],
    "fonte": "AULA 15.pdf, slide “Declínio?”; REL - T2.pdf, seção sobre conjuntura e situação dos EUA (declínio relativo, tripla hélice).",
    "competencia": "Distinguir declínio relativo de absoluto e ler o dado com os indicadores de força.",
    "erroProvavel": "Concluir declínio absoluto a partir da queda de participação no PIB mundial.",
    "armadilha": "Concluir declínio absoluto a partir da queda de participação no PIB mundial.",
    "tempoEstimadoMin": 3,
    "assinatura": [
      "obj",
      "N2",
      "reconhecimento aplicado — identificar o conceito em situação descrita",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "multipla",
    "enunciado": "Os Estados Unidos correspondiam a cerca de 27% do PIB mundial em 1945 e a aproximadamente 20% atualmente. Sobre a interpretação desse dado, assinale a alternativa CORRETA.",
    "alternativas": [
      "O dado demonstra declínio absoluto, uma vez que houve redução mensurável da participação americana na economia mundial.",
      "O dado caracteriza declínio relativo, e precisa ser lido junto de indicadores que permanecem favoráveis: supremacia militar, com uma Marinha equivalente às 12 maiores marinhas seguintes, das quais 9 são aliadas; supremacia financeira, com o dólar como moeda-padrão; liderança em inovação tecnológica e capital humano; e mercado de trabalho flexível, que acelera a superação de crises.",
      "O dado é irrelevante para a análise de poder, porque participação no PIB mundial não guarda relação com capacidade militar.",
      "O dado demonstra que os Estados Unidos deixaram de ser potência hegemônica, condição que passou à China a partir de sua entrada na OMC.",
      "O dado indica crescimento absoluto e relativo, já que a economia americana cresceu em termos nominais no período."
    ],
    "correta": 1,
    "comentario": "Perder participação em um mundo que cresceu é declínio **relativo**, não absoluto: os outros cresceram mais. A distinção é a mais cobrável do módulo porque produz alternativas parcialmente verdadeiras. E a leitura correta exige a cláusula que quase todos esquecem: a supremacia naval americana é potencializada por **alianças** — das 12 maiores marinhas seguintes, 9 são aliadas. É o que torna o arco de alianças a variável crítica dos cenários asiáticos: é ela, e não o PIB, que o declínio ameaçaria primeiro.",
    "explicacaoDistratores": [
      "Errada. Declínio absoluto seria redução do poder em si, e não da fração relativa.",
      "Correta. Declínio relativo, com os indicadores de força e a cláusula das alianças.",
      "Errada. Base econômica é condição de sustentação de esquadra, indústria e inovação.",
      "Errada. Nada no corpus sustenta transferência de hegemonia; o próprio slide mantém os indicadores de supremacia.",
      "Errada. Confunde crescimento nominal com participação relativa, que é o que o dado mede."
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M04-OBJ-N3-003",
    "topico": "04-estados-unidos",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M04-C009",
      "REL-T2-M00-C014"
    ],
    "fonte": "AULA 15.pdf, slides “EUA - Imperativo Estratégico” e “Expansão geopolítica”; REL - T2.pdf, os quatro itens do imperativo estratégico dos EUA; SOPA REL T1 2024, questão 10 (mesmo formato, com asserções e gabarito distintos).",
    "competencia": "Julgar nexo causal atentando para a exigência de explicação completa.",
    "erroProvavel": "Aceitar um pré-requisito como explicação completa.",
    "armadilha": "Aceitar um pré-requisito como explicação completa.",
    "tempoEstimadoMin": 4,
    "assinatura": [
      "obj",
      "N3",
      "aplicação inédita — decidir em cenário novo com distratores próximos",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "multipla",
    "enunciado": "Avalie as asserções. **I.** Spykman explica em grande parte o raciocínio geopolítico atual dos Estados Unidos em relação ao mundo. **PORQUE** **II.** O controle geopolítico da América do Sul e do Caribe é a explicação completa da projeção de poder americana no restante do mundo. Assinale a alternativa CORRETA.",
    "alternativas": [
      "As asserções I e II são verdadeiras, e a II é a explicação completa da I.",
      "A asserção I é verdadeira, e a II é falsa, porque o controle da América do Sul e do Caribe é PRÉ-REQUISITO da projeção global, e não sua explicação completa: o imperativo estratégico americano tem quatro degraus, e o último é evitar o surgimento de uma potência hegemônica na Eurásia.",
      "A asserção I é falsa, e a II é verdadeira.",
      "As asserções I e II são falsas.",
      "As asserções I e II são verdadeiras, mas a II não guarda qualquer relação com a I."
    ],
    "correta": 1,
    "comentario": "Esta é a armadilha mais fina do formato, e o corpus a usa: a palavra **completa** muda o gabarito. Spykman de fato explica o raciocínio americano — consolidar a hegemonia nas Américas para depois conter a potência eurasiática pelas fímbrias. Mas o slide lista **quatro** degraus do imperativo: América do Norte; América do Sul e Caribe; domínio dos oceanos que banham as duas costas, vistos como instrumento de projeção e de livre comércio; e evitar hegemon na Eurásia. Um degrau é condição necessária, não explicação suficiente. Note também que a alternativa E é falsa por outro motivo: há relação, e ela é de precedência.",
    "explicacaoDistratores": [
      "Errada. A palavra “completa” torna a segunda asserção falsa.",
      "Correta. Pré-requisito não é explicação completa; o imperativo tem quatro degraus.",
      "Errada. A asserção I é sustentada pelo slide e pela leitura complementar.",
      "Errada. A asserção I é verdadeira.",
      "Errada. Há relação, e é de precedência: a retaguarda hemisférica antecede a projeção global."
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M04-OBJ-N3-004",
    "topico": "04-estados-unidos",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M04-C003",
      "REL-T2-M04-C005",
      "REL-T2-M04-C006",
      "REL-T2-M00-C013"
    ],
    "fonte": "AULA 15.pdf, slides “EUA - Destino Manifesto (embasamento)”, “EUA - Guerra Civil” e “Expansão geopolítica”; HAESBAERT & SANTA BÁRBARA (2026), seções sobre Turner, Mahan e o Corolário Roosevelt; REL - T2.pdf, seção sobre expansão geopolítica.",
    "competencia": "Reconstruir a virada marítima americana como cadeia causal, e não como cronologia.",
    "erroProvavel": "Ordenar os eventos por data sem identificar a relação de causa entre eles.",
    "armadilha": "Ordenar os eventos por data sem identificar a relação de causa entre eles.",
    "tempoEstimadoMin": 4,
    "assinatura": [
      "obj",
      "N3",
      "aplicação inédita — decidir em cenário novo com distratores próximos",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "multipla",
    "enunciado": "Qual encadeamento reconstrói corretamente a passagem dos Estados Unidos de potência continental a potência marítima?",
    "alternativas": [
      "Doutrina Monroe (1823) → Corolário Roosevelt (1904) → fechamento da fronteira interna → Guerra Civil → Mahan → Canal do Panamá.",
      "Expansão territorial e fechamento da fronteira interna, diagnosticado na tese da fronteira de Turner (1893) → consolidação de um modelo industrial-financeiro com a vitória do Norte na Guerra Civil → formulação de Mahan sobre o poder marítimo (1890) e a Guerra Hispano-Americana (1898) → tradução política por Theodore Roosevelt, com o Canal do Panamá e o Corolário de 1904 → o Caribe como mare nostrum após a inauguração do canal em 1914.",
      "Guerra Civil → Doutrina Monroe → tese da fronteira de Turner → Grande Esquadra Branca → anexação do Havaí → Spykman.",
      "Compra da Louisiana (1803) → Corolário Polk (1845) → Mahan → tese da fronteira de Turner → Guerra Civil → Canal do Panamá.",
      "Guerra Hispano-Americana (1898) → Guerra Civil → Destino Manifesto → Doutrina Monroe → Corolário Roosevelt."
    ],
    "correta": 1,
    "comentario": "O encadeamento correto não é uma lista cronológica: é uma cadeia causal. A fronteira interna se fecha e se esgota economicamente, o que desloca a lógica expansionista do espaço continental para o marítimo e externo — exatamente o diagnóstico de Turner. A Guerra Civil, com a vitória do modelo industrial-financeiro do Norte, fornece a base material: mercado interno ampliado, mercado financeiro forte e inovação industrial. Mahan formula a teoria e a Guerra Hispano-Americana fornece a oportunidade. Roosevelt, admirador declarado de Mahan, traduz a teoria em ação: intervenção na Colômbia, secessão do Panamá garantida com navios de guerra, canal e o Corolário de 1904, com o Caribe tomado como “mediterrâneo americano”. Depois de 1914, o Caribe se torna espécie de mare nostrum.",
    "explicacaoDistratores": [
      "Errada. Inverte causa e consequência: o Corolário Roosevelt é efeito da virada marítima, não sua causa.",
      "Correta. É a cadeia causal, com base material, teoria, oportunidade e tradução política.",
      "Errada. A Doutrina Monroe antecede a Guerra Civil em quatro décadas.",
      "Errada. Põe Mahan (1890) antes de Turner (1893) na cadeia causal e a Guerra Civil depois de ambos.",
      "Errada. Ordem cronologicamente impossível."
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M04-COR-N3-005",
    "topico": "04-estados-unidos",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M04-C013",
      "REL-T2-M04-C012"
    ],
    "fonte": "AULA 15.pdf, slides “Cenários”, “Cenários para o Leste e Sudeste Asiáticos” (quatro descrições) e “Mandato Divino X Destino Manifesto”; REL - T2.pdf, leitura dos quadrantes e a analogia do Afeganistão; fontes-manifesto.json, incerteza I-02.",
    "competencia": "Situar cada cenário no cruzamento das duas forças-motrizes.",
    "erroProvavel": "Supor que o cenário com arco de alianças forte é sempre favorável aos Estados Unidos.",
    "armadilha": "Supor que o cenário com arco de alianças forte é sempre favorável aos Estados Unidos.",
    "tempoEstimadoMin": 6,
    "assinatura": [
      "cor",
      "N3",
      "aplicação inédita — decidir em cenário novo com distratores próximos",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "correlacione",
    "titulo": "Correlacione cada descrição ao cenário para o Leste e Sudeste Asiáticos",
    "chaves": [
      {
        "chave": "A",
        "texto": "Cria Cuervos"
      },
      {
        "chave": "B",
        "texto": "Concerto Asiático"
      },
      {
        "chave": "C",
        "texto": "Casa sem Dono"
      },
      {
        "chave": "D",
        "texto": "Império do Meio II"
      }
    ],
    "itens": [
      {
        "texto": "A economia chinesa desacelera e a China enfrenta tensões internas, deixando de se impor na região; as demais potências asiáticas não veem mais necessidade da permanência ostensiva dos Estados Unidos e desenvolvem políticas nacionalistas contrárias aos interesses americanos.",
        "chave": "A"
      },
      {
        "texto": "Os Estados Unidos perdem capacidade de influenciar decisivamente na região e a China estabelece uma nova ordem sinocêntrica, mas com países recalcitrantes: Japão, Índia e Rússia.",
        "chave": "D"
      },
      {
        "texto": "A desaceleração chinesa impede a projeção de poder de antes e um presidente isolacionista imprime política de retirada militar das tropas na Ásia; as potências asiáticas remanescentes se engalfinham pela hegemonia regional, com diversas alianças e contra-alianças.",
        "chave": "C"
      },
      {
        "texto": "Configuração semelhante ao Concerto Europeu do século XIX, com uma potência externa presente e um equilíbrio delicado entre as potências asiáticas para evitar um conflito maior; o desdobramento pode ser um conflito futuro, por se tratar de equilíbrio instável.",
        "chave": "B"
      }
    ],
    "comentario": "As duas forças-motrizes são o nível de expansão da economia chinesa e a capacidade dos Estados Unidos de forjar e manter um arco de alianças para conter a China. Cruzando-as: **Cria Cuervos** é China fraca com arco forte (e o arco se volta contra quem o construiu — “cría cuervos y te sacarán los ojos”, analogia registrada em aula com o Afeganistão dos anos 1980, em que os combatentes financiados pelos EUA depois fundaram a Al-Qaeda); **Concerto Asiático** é China forte com arco forte; **Casa sem Dono** é China fraca com arco frágil; **Império do Meio II** é China forte com arco frágil. A lição contraintuitiva está em Cria Cuervos: arco forte não é sempre favorável aos Estados Unidos. E em Casa sem Dono vale o princípio explícito em aula — não existe vácuo de poder, alguém buscará a hegemonia. [INFERÊNCIA PEDAGÓGICA quanto à posição gráfica dos eixos; as quatro descrições são explícitas nos slides.]",
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M04-DIS-N4-006",
    "topico": "04-estados-unidos",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M04-C014",
      "REL-T2-M04-C004",
      "REL-T2-M00-C011"
    ],
    "fonte": "HAESBAERT & SANTA BÁRBARA (2026), seção “(Des)Territorializações em disputa na Doutrina Donroe” e considerações finais; LOVATT (ECFR, 23/01/2026); AULA 15.pdf, slides “EUA - Expansão, Doutrina Monroe” e “EUA - Imperativo Estratégico”; AULA 12.pdf, slide “PEB - Governos pós-1985 — Lula”.",
    "competencia": "Interpretar acontecimento contemporâneo por conceito, com instrumentos, implicação, leitura concorrente e datação.",
    "erroProvavel": "Narrar a conjuntura sem nomear o conceito, ou tratar fonte posicionada como descrição neutra.",
    "armadilha": "Narrar a conjuntura sem nomear o conceito, ou tratar fonte posicionada como descrição neutra.",
    "tempoEstimadoMin": 15,
    "assinatura": [
      "dis",
      "N4",
      "integração — cruza módulos, arbitra entre leituras ou projeta consequência",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "discursiva",
    "enunciado": "Explique como a atuação recente dos Estados Unidos no Hemisfério Ocidental pode ser lida como reativação da Doutrina Monroe, indicando o mecanismo, os instrumentos empregados, a implicação para o Brasil e a data de corte da informação. Registre a natureza da fonte usada.",
    "gabaritoComentado": "**Tese.** A atuação recente dos Estados Unidos no Hemisfério Ocidental reativa a estrutura da Doutrina Monroe: negar a presença de potência extra-hemisférica e organizar o hemisfério em torno de um Estado-diretor. O que muda é o competidor visado — antes potências europeias, agora a China — e o predomínio da coerção sobre o consenso.\n\n**Conceito.** A Doutrina Monroe é declaração unilateral de dupla natureza, anticolonial e hegemonista, que fez a paz e a segurança dos Estados Unidos dependerem de um recorte territorial específico, o “Hemisfério Ocidental”. O Corolário Roosevelt de 1904 acrescentou o exercício de um poder de polícia internacional. A leitura de que há hoje um novo corolário — apelidado na imprensa de “Doutrina Donroe”, expressão surgida em capa de jornal em 08/01/2025 e depois adotada pelo próprio presidente — é a de que a Estratégia de Segurança Nacional de 2025 trata o Hemisfério Ocidental como prioritário e nega acesso territorial a competidores não-hemisféricos, depois de alegados anos de negligência.\n\n**Evidência e instrumentos.** (1) Instrumento econômico e de pressão diplomática: o Panamá, primeiro país da América Latina e do Caribe a aderir à iniciativa chinesa Um Cinturão, Uma Rota em 2017, deixou o empreendimento em 2025 sob pressão americana; houve ainda crítica oficial à concessão portuária de Balboa e Cristóbal a operadora de Hong Kong. (2) Instrumento militar: a invasão da Venezuela em janeiro de 2026, com objetivo declarado de retorno de empresas americanas à indústria petrolífera venezuelana e de envio preferencial de petróleo aos Estados Unidos, em substituição ao grande parceiro comercial venezuelano, a China. (3) Instrumento territorial: a pretensão sobre a Groenlândia e o interesse no Ártico, onde o degelo abre rotas e recursos. (4) Instrumento de cadeia produtiva: a disputa por terras raras e minerais críticos, indispensáveis a semicondutores, baterias, turbinas, inteligência artificial e infraestrutura digital.\n\n**Nexo causal.** A cadeia é: competição sistêmica com a China → necessidade de controlar insumos críticos e pontos de passagem obrigatória → reativação de um princípio que já legitimava exclusão de potências extra-hemisféricas → emprego de instrumentos econômicos, diplomáticos e, no limite, militares no “quintal” imediato. Em termos de geopolítica clássica, é o jogo entre poder marítimo e poder terrestre somado ao controle de chokepoints nos fluxos globais.\n\n**Implicação para o Brasil.** Direta e dupla. Primeiro, o Brasil detém a segunda reserva mundial de terras raras, com cerca de 23% do total, o que o coloca no cálculo americano de soberania mineral como pré-condição de supremacia digital — e, portanto, sob pressão negociadora. Segundo, um hemisfério tratado como zona de exclusão restringe a margem da autonomia pela diversificação: quanto menos o Brasil puder diversificar parceiros sem custo, mais a política externa volta ao dilema interesses × meios que abre o Módulo 01. O Atlântico Sul como zona de paz e cooperação, pressuposto da PND, fica sob tensão pela mesma razão.\n\n**Leitura concorrente.** A fonte utilizada tem posição declarada: interpreta o processo como imperialismo e colonialidade do poder, e essa é uma leitura, não uma descrição neutra. A leitura concorrente sustentaria que se trata de resposta defensiva legítima à penetração de um competidor estratégico em área de segurança imediata — e é a leitura que o próprio imperativo estratégico americano, tal como o slide o apresenta, tornaria esperada. O aluno deve registrar as duas.\n\n**Data de corte.** Informações verificadas nas fontes autorizadas até 23/01/2026 (análise do Conselho da Paz) e abril de 2026 (artigo acadêmico aceito em 10/04/2026). Fatos posteriores não estão cobertos.\n\n**Resposta insuficiente:** narrar os acontecimentos recentes sem nomear o conceito. **Satisfatória:** liga os fatos à Doutrina Monroe e cita instrumentos. **Nível MB:** nomeia o conceito, identifica o mecanismo, distingue os instrumentos, extrai a implicação brasileira, registra a leitura concorrente e data a informação.",
    "criterios": [
      "Nomeia a Doutrina Monroe e sua dupla natureza, e não apenas os fatos recentes (0,2)",
      "Identifica o mecanismo: exclusão de competidor extra-hemisférico em contexto de competição sistêmica (0,2)",
      "Nomeia pelo menos dois instrumentos distintos com evidência concreta (0,2)",
      "Extrai implicação específica para o Brasil, com dado (terras raras) ou conceito (autonomia pela diversificação) (0,2)",
      "Registra a natureza posicionada da fonte e apresenta leitura concorrente (0,1)",
      "Informa a data de corte da informação (0,1)",
      "Não pontua: usar exemplo atual sem conceito; apresentar a interpretação da fonte como fato neutro; omitir a data"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M04-OBJ-N4-007",
    "topico": "04-estados-unidos",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M04-C015",
      "REL-T2-M00-C006",
      "REL-T2-M04-C007"
    ],
    "fonte": "LOVATT, H. (ECFR), “O Conselho da Paz de Trump se torna global”, 23/01/2026 (fonte com posição declarada); AULA 15.pdf, slides “2. Liberais” e “Segundo as principais Teorias em RI — 1. Realismo”; AULA 15.pdf, slide “Hegemonia Mundial”.",
    "competencia": "Arbitrar entre leituras concorrentes de um mesmo arranjo institucional pelo seu desenho interno.",
    "erroProvavel": "Classificar o arranjo como liberal por ele ser uma instituição.",
    "armadilha": "Classificar o arranjo como liberal por ele ser uma instituição.",
    "tempoEstimadoMin": 5,
    "assinatura": [
      "obj",
      "N4",
      "integração — cruza módulos, arbitra entre leituras ou projeta consequência",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "multipla",
    "enunciado": "Um arranjo internacional é criado em janeiro de 2026 a partir de uma resolução do Conselho de Segurança da ONU, mas sua carta constitutiva omite qualquer referência ao conflito específico que motivou aquela resolução e critica instituições que “frequentemente falharam”, propondo um órgão de construção da paz mais ágil. O arranjo tem presidência permanente exercida por um chefe de Estado, mandatos dos Estados-membros renováveis a critério dessa presidência, financiamento descrito como voluntário com associação permanente para quem aportar um bilhão de dólares, e um conselho executivo por ela nomeado. Qual análise é mais defensável?",
    "alternativas": [
      "Trata-se de arranjo inequivocamente liberal, porque institucionaliza a cooperação e deriva de resolução do Conselho de Segurança.",
      "Trata-se de arranjo inequivocamente realista, porque foi criado por uma grande potência, e toda criação institucional por potência hegemônica é instrumento de poder.",
      "O caso é ambíguo por construção e a análise deve identificar qual leitura o desenho institucional sustenta melhor: a forma é de cooperação institucionalizada, mas a distribuição interna de autoridade — decisões emanando da presidência, mandatos renováveis a seu critério e influência proporcional ao aporte financeiro — sustenta melhor a leitura de instrumento de poder.",
      "O caso não admite análise pelas lentes teóricas, porque arranjos criados por decisão unilateral não são instituições internacionais.",
      "Trata-se de arranjo construtivista, porque a criação de um órgão próprio expressa a identidade e os valores de quem o propôs."
    ],
    "correta": 2,
    "comentario": "É a clínica institucional do Módulo 00 aplicada a um caso contemporâneo. O curso ensina que instituições podem ser vistas tanto como mecanismos de cooperação quanto como instrumentos de poder — e que o que decide não é a existência da instituição, mas o que o enunciado destaca. Aqui o enunciado destaca o **desenho interno**: autoridade concentrada, mandato precário e influência proporcional a dinheiro. Cooperação institucionalizada costuma implicar regra que restringe também quem a criou; nada disso aparece. Note que a resposta correta não afirma que a leitura liberal é impossível: ela afirma qual das duas o desenho sustenta melhor, que é exatamente o que se pede de uma resposta de nível MB.",
    "explicacaoDistratores": [
      "Errada. A origem em resolução e a forma institucional são pistas, não prova; a carta omite o conflito que a motivou.",
      "Errada. Generalização inválida: Bretton Woods também foi criado por potência hegemônica e a leitura liberal do arranjo é sustentável.",
      "Correta. Identifica a ambiguidade e arbitra pelo desenho interno de autoridade.",
      "Errada. Arranjos assimétricos continuam sendo objeto das lentes teóricas — é precisamente o que as torna úteis.",
      "Errada. O enunciado não traz identidade ou norma compartilhada como variável; traz distribuição de autoridade e dinheiro."
    ],
    "verificacaoIndependente": "Pergunte se a regra restringe também quem a criou. Se não restringe, a leitura de instrumento é mais forte.",
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M04-OBJ-N3-008",
    "topico": "04-estados-unidos",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M04-C010",
      "REL-T2-M04-C011"
    ],
    "fonte": "AULA 15.pdf, slides “Previsão sobre a dimensão da Marinha dos EUA (segundo o Congresso dos EUA)” e “A2/AD - Anti-access/Area Denial”; CRS RL32665, sumário executivo (nova arquitetura de frota); AULA 16.pdf, slide “Mar do Sul da China - A2/AD”.",
    "competencia": "Inferir doutrina a partir da composição de uma estrutura de força.",
    "erroProvavel": "Decorar números sem extrair a doutrina que a composição revela.",
    "armadilha": "Decorar números sem extrair a doutrina que a composição revela.",
    "tempoEstimadoMin": 4,
    "assinatura": [
      "obj",
      "N3",
      "aplicação inédita — decidir em cenário novo com distratores próximos",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "multipla",
    "enunciado": "A discussão sobre a estrutura de força naval dos Estados Unidos evoluiu de uma meta de 355 navios (2016) para 381 navios (2023), e a principal alteração recente é a incorporação de embarcações autônomas, com previsão de uma nova arquitetura de frota com menor proporção de navios grandes, maior proporção de pequenos e um terceiro elemento de grandes veículos não tripulados. Qual inferência doutrinária essa mudança de composição sustenta?",
    "alternativas": [
      "Que a Marinha dos Estados Unidos abandonou a projeção de poder global em favor da defesa costeira.",
      "Que a mudança é apenas orçamentária, sem consequência doutrinária, uma vez que plataformas menores custam menos.",
      "Que a frota se adapta ao ambiente de antiacesso e negação de área: dispersar a capacidade de combate em mais plataformas, menores e em parte não tripuladas, reduz a perda por vetor atingido e dificulta a solução do problema para quem emprega mísseis de longo alcance.",
      "Que a substituição de tripulados por autônomos elimina a necessidade de bases avançadas e de interoperabilidade externa.",
      "Que o aumento da meta de 355 para 381 navios indica que a frota atual já superou ambos os números."
    ],
    "correta": 2,
    "comentario": "Números, aqui, são evidência de doutrina. Contra um adversário que investe em antiacesso e negação de área — mísseis balísticos de longo alcance, submarinos em pontos estratégicos, mísseis antinavio e interferência eletrônica —, concentrar capacidade em poucas plataformas de alto valor é oferecer alvos rentáveis. Dispersar em mais plataformas, menores e em parte não tripuladas, é resposta ao problema: cada vetor atingido custa menos e o adversário precisa resolver muitos problemas simultâneos. Nenhuma das duas metas descreve a frota existente: são objetivos de nível de força.",
    "explicacaoDistratores": [
      "Errada. A arquitetura mantém porta-aviões, submarinos e combatentes de superfície, e o objetivo segue sendo operar longe.",
      "Errada. Custo é condicionante, e a composição escolhida responde a um problema operacional identificado.",
      "Correta. É a inferência doutrinária que a composição sustenta.",
      "Errada. Plataformas autônomas ampliam a demanda por logística, comunicações e bases, não a eliminam.",
      "Errada. As metas são objetivos de nível de força, e não descrição da frota atual."
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M05-VF-N1-001",
    "topico": "05-china",
    "dificuldade": "facil",
    "conceptIds": [
      "REL-T2-M05-C008"
    ],
    "fonte": "AULA 16.pdf, slides “China Deng Xiao Ping” e “China - ZEE”; REL - T2.pdf, alerta expresso (“não confundir com zona econômica exclusiva!”).",
    "competencia": "Distinguir zona econômica especial de zona econômica exclusiva.",
    "erroProvavel": "Tratar as duas ZEE como o mesmo conceito por homonímia de sigla.",
    "armadilha": "Tratar as duas ZEE como o mesmo conceito por homonímia de sigla.",
    "tempoEstimadoMin": 2,
    "assinatura": [
      "vf",
      "N1",
      "âncora — recuperação de lista fechada ou definição literal",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "vf",
    "afirmacao": "As zonas econômicas especiais criadas por Deng Xiaoping correspondem, no vocabulário do direito do mar, às zonas econômicas exclusivas previstas na CNUDM, uma vez que ambas designam áreas de regime econômico diferenciado.",
    "correta": false,
    "comentario": "**Falsa.** A coincidência de sigla é acidental e o corpus alerta expressamente para ela. **Zona econômica especial** é instrumento de política industrial interna: área com características capitalistas e incentivos fiscais para indústrias e empresas, criada para atrair capital estrangeiro sem abrir a economia inteira. **Zona econômica exclusiva** é instituto de direito internacional do mar, faixa marítima em que o Estado costeiro tem direitos sobre recursos. Uma é decisão de desenvolvimento; a outra é título jurídico sobre espaço marítimo. Trocá-las em uma resposta sobre o Mar do Sul da China inverte completamente o argumento.",
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M05-OBJ-N3-002",
    "topico": "05-china",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M05-C002",
      "REL-T2-M05-C003",
      "REL-T2-M05-C006"
    ],
    "fonte": "AULA 16.pdf, slide “China - Dupla Tensão Histórica”; REL - T2.pdf, seção “A dupla tensão histórica”; Geopolitical Futures, “The Third Opium War” (mecanismo prata/cobre e o interior contra o litoral).",
    "competencia": "Reproduzir o mecanismo causal da dupla tensão na ordem correta.",
    "erroProvavel": "Descrever a dupla tensão como conflito entre ricos e pobres, sem o passo político da centralização.",
    "armadilha": "Descrever a dupla tensão como conflito entre ricos e pobres, sem o passo político da centralização.",
    "tempoEstimadoMin": 4,
    "assinatura": [
      "obj",
      "N3",
      "aplicação inédita — decidir em cenário novo com distratores próximos",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "multipla",
    "enunciado": "Qual encadeamento reproduz corretamente o mecanismo da dupla tensão histórica chinesa, tal como apresentado em aula?",
    "alternativas": [
      "Interior mais rico que o litoral → pressão do litoral por redistribuição → abertura comercial forçada → perda de integridade territorial.",
      "Litoral mais rico que o interior, por efeito de um comércio marítimo maior que o terrestre e de ameaças terrestres superiores à cobiça marítima → aumento da desigualdade pressiona o centro político a redistribuir riqueza para o interior → a taxação das elites litorâneas gera tensão política e provoca centralização por parte de Beijing, que retira autonomia do litoral e fecha o regime → diminuição da abertura ao exterior, isto é, autarcização.",
      "Abertura ao exterior → enriquecimento generalizado → desnecessidade de centralização política → federalização do regime.",
      "Ameaça marítima superior à terrestre → concentração de riqueza no interior → deslocamento da capital para o litoral → abertura permanente.",
      "Centralização política em Beijing → enriquecimento do interior → declínio do litoral → fim do comércio marítimo."
    ],
    "correta": 1,
    "comentario": "O mecanismo tem quatro passos e a ordem importa, porque cada passo é causa do seguinte. O ponto de partida é geográfico e comercial: o comércio marítimo chinês sempre foi maior que o terrestre, e a cobiça externa pelo litoral foi menor que as ameaças terrestres do interior — donde litoral rico e interior pobre. A desigualdade pressiona Beijing, preocupada com a integridade territorial, a redistribuir. Redistribuir exige taxar as elites litorâneas, o que gera tensão política. A resposta de Beijing é centralizar, retirando autonomia do litoral e fechando o regime. O resultado é autarcização, com redução da geração de riqueza. O corpus registra o ciclo em Ming, Qing e no governo de Mao — e o Século das Humilhações mostrou o mecanismo em detalhe fiscal: o camponês transacionava em cobre e pagava imposto em prata, e a saída de prata elevou seu preço relativo, de modo que o mesmo governo que não o protegia passou a tomar mais do seu dinheiro.",
    "explicacaoDistratores": [
      "Errada. Inverte o ponto de partida: é o litoral que é mais rico.",
      "Correta. É o mecanismo em quatro passos, na ordem causal.",
      "Errada. O corpus afirma o contrário: abertura prolongada aumenta desigualdade e risco de desagregação.",
      "Errada. A ameaça terrestre é a maior, não a marítima.",
      "Errada. Inverte a direção de toda a cadeia."
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M05-OBJ-N2-003",
    "topico": "05-china",
    "dificuldade": "medio",
    "conceptIds": [
      "REL-T2-M05-C010"
    ],
    "fonte": "IDEG, “Taiwan e as Nações Unidas: a política de Uma Só China e os limites do reconhecimento internacional”; AULA 16.pdf, slide “China recente” (Questão Taiwan) e mapa do Estreito de Taiwan.",
    "competencia": "Distinguir princípio de política de Uma Só China e interpretar corretamente a Resolução 2758.",
    "erroProvavel": "Afirmar que a Resolução 2758 decidiu a soberania sobre Taiwan.",
    "armadilha": "Afirmar que a Resolução 2758 decidiu a soberania sobre Taiwan.",
    "tempoEstimadoMin": 3,
    "assinatura": [
      "obj",
      "N2",
      "reconhecimento aplicado — identificar o conceito em situação descrita",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "multipla",
    "enunciado": "Sobre o status internacional de Taiwan, assinale a alternativa CORRETA.",
    "alternativas": [
      "A Resolução 2758 da Assembleia Geral da ONU, de 1971, determinou a soberania da República Popular da China sobre Taiwan, encerrando qualquer controvérsia jurídica sobre o tema.",
      "O princípio de Uma Só China, sustentado pela República Popular da China, e a política de Uma Só China, praticada pelos Estados Unidos, são formulações distintas: o primeiro afirma que Taiwan é parte inalienável do território chinês e que a RPC é o único governo legítimo; a segunda reconhece diplomaticamente a RPC e não apoia a independência de Taiwan, mas mantém laços não oficiais com Taipei, amparados no Taiwan Relations Act, nos Três Comunicados Conjuntos e nas Seis Garantias.",
      "Taiwan está diplomaticamente isolada, não participando de nenhum foro internacional, uma vez que a admissão de novos membros na ONU depende de recomendação do Conselho de Segurança.",
      "A chamada ambiguidade estratégica consiste no compromisso formal dos Estados Unidos de intervir militarmente em caso de ataque a Taiwan, sem especificar os meios que empregariam.",
      "O chamado escudo de silício designa o sistema de defesa antimíssil instalado na ilha com tecnologia americana."
    ],
    "correta": 1,
    "comentario": "A distinção **princípio** (posição da RPC) × **política** (posição dos EUA) é a mais cobrável do tema, porque as duas expressões são quase iguais e significam coisas diferentes. Quanto à Resolução 2758, ela “restaurou” os direitos da RPC nas Nações Unidas e retirou os delegados de Chiang Kai-shek, mas suas consequências jurídicas permanecem disputadas: Pequim sustenta que resolveu em definitivo a representação de toda a China; os Estados Unidos e Taiwan argumentam que tratou apenas da representação na ONU, sem determinar soberania territorial. Reduzi-la a um ato que “declarou Taiwan parte da China” é simplificação que a própria fonte adverte contra.",
    "explicacaoDistratores": [
      "Errada. A resolução tratou de representação; a consequência jurídica é disputada.",
      "Correta. A distinção entre princípio e política, com os instrumentos de cada lado.",
      "Errada. Taiwan participa da OMC desde 2002, como “Território Aduaneiro Separado de Taiwan, Penghu, Kinmen e Matsu”, e da APEC como economia-membro, ambas sob a denominação Chinese Taipei.",
      "Errada. Ambiguidade estratégica é o oposto: apoio à capacidade de autodefesa SEM definir de antemão como se responderia a um conflito.",
      "Errada. Escudo de silício designa a centralidade da ilha na produção global de semicondutores, que é simultaneamente vulnerabilidade e proteção."
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M05-OBJ-N3-004",
    "topico": "05-china",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M05-C012",
      "REL-T2-M05-C011"
    ],
    "fonte": "AULA 16.pdf, slides “Mar do Sul da China - A2/AD” e mapa das reivindicações; REL - T2.pdf, definições de A2 e AD e o alcance da Primeira Cadeia; AULA 15.pdf, slide “A2/AD - Anti-access/Area Denial”.",
    "competencia": "Distinguir A2 de AD por alcance e função, e não por geografia.",
    "erroProvavel": "Supor que A2 e AD empregam posições geográficas mutuamente exclusivas.",
    "armadilha": "Supor que A2 e AD empregam posições geográficas mutuamente exclusivas.",
    "tempoEstimadoMin": 4,
    "assinatura": [
      "obj",
      "N3",
      "aplicação inédita — decidir em cenário novo com distratores próximos",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "multipla",
    "enunciado": "Sobre a estratégia chinesa de antiacesso e negação de área, assinale a alternativa INCORRETA.",
    "alternativas": [
      "O antiacesso (A2) busca impedir a entrada do adversário em determinada região estratégica e envolve o uso de mísseis balísticos de longo alcance e de submarinos em locais estratégicos.",
      "A negação de área (AD) busca dificultar as ações do adversário depois de ele já ter entrado na região estratégica, e envolve mísseis antinavio e interferência eletrônica.",
      "A China aplica o antiacesso na região da Primeira Cadeia de Ilhas, que abrange desde as ilhas ao sul do Japão, em Okinawa, passando por Taiwan e Filipinas, até o Estreito de Málaca.",
      "As ilhas empregadas para o antiacesso são necessariamente distintas das empregadas para a negação de área, uma vez que as duas estratégias exigem alcances e posições incompatíveis.",
      "Entre as ações que indicam o emprego dessa estratégia estão a instalação de sistemas de mísseis e de bases navais em províncias ao sul, como Hainan, a militarização de ilhas artificiais nas Spratly e a presença de navios chineses na região."
    ],
    "correta": 3,
    "comentario": "A alternativa incorreta inventa uma incompatibilidade que o corpus nega expressamente: **as mesmas ilhas são usadas tanto para a estratégia A2 quanto para AD**. Spratly, Paracel e Hainan aparecem nos dois papéis. A diferença entre A2 e AD não é de posição geográfica, e sim de **alcance e função**: manter o adversário fora (longe, com mísseis balísticos e submarinos) ou dificultar sua ação depois que entrou (perto, com mísseis antinavio e guerra eletrônica). Confundir isso é o erro conceitual mais comum do tema.",
    "explicacaoDistratores": [
      "Correta e verdadeira. É a definição operacional de A2.",
      "Correta e verdadeira. É a definição operacional de AD.",
      "Correta e verdadeira. É o alcance da Primeira Cadeia registrado no corpus.",
      "INCORRETA — resposta da questão. As mesmas ilhas servem às duas estratégias.",
      "Correta e verdadeira. São as ações que o corpus arrola como indício do emprego da estratégia."
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M05-DIS-N4-005",
    "topico": "05-china",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M05-C013",
      "REL-T2-M05-C014",
      "REL-T2-M00-C013"
    ],
    "fonte": "AULA 16.pdf, slides “Perspectiva Chinesa”, mapa do Estreito de Málaca e “Investimentos no Exterior e One Belt, One Road”; REL - T2.pdf, seção PERSPECTIVA CHINESA; Gabarito da P2 REL 2024, questão 17 (mesmo objeto geopolítico, com enunciado, subitens e gabarito distintos); Geopolitical Futures, “The Third Opium War” (perda da autossuficiência).",
    "competencia": "Aplicar a matriz de cenários a um caso de vulnerabilidade logística e avaliar a eficácia dos instrumentos.",
    "erroProvavel": "Listar os instrumentos sem avaliar se resolvem a vulnerabilidade.",
    "armadilha": "Listar os instrumentos sem avaliar se resolvem a vulnerabilidade.",
    "tempoEstimadoMin": 15,
    "assinatura": [
      "dis",
      "N4",
      "integração — cruza módulos, arbitra entre leituras ou projeta consequência",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "discursiva",
    "enunciado": "Analise o caso pela matriz de cenários, identificando vulnerabilidade, instrumentos, o efeito sobre a soberania dos países anfitriões e o interesse de um terceiro ator contrariado. Conclua indicando se os instrumentos resolvem a vulnerabilidade.",
    "gabaritoComentado": "**Ator e objetivo.** O ator é a China; o objetivo é assegurar o fluxo de energia, alimentos e comércio, que é condição do seu imperativo de manter abertura ao exterior para garantir prosperidade econômica.\n\n**Condicionante e vulnerabilidade.** A condicionante é geográfica: o litoral chinês é fechado pela Primeira Cadeia de Ilhas, e a saída para o Índico passa pelo Estreito de Málaca. A vulnerabilidade é a dependência de um único ponto de passagem obrigatória vigiado por terceiros — agravada por uma mudança estrutural: a China, historicamente autossuficiente, hoje importa alimento e petróleo, e a projeção é de que essas importações cresçam. A perspectiva registrada em aula é a de um país que se vê “engaiolado” pela presença de bases americanas em países aliados como Japão, Coreia do Sul, Filipinas e Taiwan, além de meios navais e aéreos americanos na região.\n\n**Instrumentos.** Três, todos econômicos e de infraestrutura, não militares: (1) corredores terrestres de acesso ao mar, com apoio de Mianmar e Bangladesh; (2) investimento na possibilidade do Canal de Kra, na Tailândia, que contornaria Málaca e aumentaria a influência chinesa tanto no Golfo da Tailândia quanto na Baía de Bengala; (3) a iniciativa Um Cinturão, Uma Rota, com ramo terrestre e ramo marítimo, financiada majoritariamente com capital chinês.\n\n**Efeito sobre a soberania dos anfitriões.** Há precedente. O funcionamento do Canal de Suez e do Canal do Panamá se deu com presença física de representantes das potências construtoras, inclusive em atividades de segurança — e mecanismo análogo é utilizado em projetos de infraestrutura financiados pela China. Acrescente-se que a iniciativa deixa países endividados junto a bancos chineses, mesmo a juros baixos, em relação de dependência. Logo, a soberania do país anfitrião pode ser afetada, não por conquista, mas por dependência e presença.\n\n**Terceiro ator contrariado.** A Índia. O canal aumentaria a influência chinesa em áreas onde a Índia projeta poder, como a Baía de Bengala e o Sudeste Asiático, tornando-a mais ameaçada. A Índia já qualificou a iniciativa de infraestrutura como “empresa colonial, deixando dívida e comunidades destruídas em seu rastro”, criticou o corredor que atravessa a Caxemira ocupada pelo Paquistão e boicotou a cúpula do projeto.\n\n**Lente teórica.** Predomina leitura realista: a ação é motivada por vulnerabilidade de segurança — energética e alimentar — e busca reduzir dependência de pontos controlados por rival. Há leitura liberal secundária defensável, já que os instrumentos são de integração comercial e criam interdependência; mas a justificativa é a de contornar bloqueio, não a de maximizar ganho mútuo.\n\n**Conclusão.** Os instrumentos reduzem, mas não eliminam a vulnerabilidade: substituem a dependência de um estreito vigiado pela dependência da estabilidade política e da anuência de países anfitriões. A vulnerabilidade muda de natureza — de geográfica para política — e se dispersa entre mais atores. Enquanto a China não tiver capacidade de assegurar por si as linhas de comunicação marítimas, no sentido de Mahan, a solução permanece mitigatória.\n\n**Resposta insuficiente:** dizer que a China quer fugir do Estreito de Málaca. **Satisfatória:** identifica vulnerabilidade e instrumentos. **Nível MB:** percorre a matriz, nomeia o precedente de Suez e Panamá, identifica o interesse indiano contrariado, escolhe a lente e conclui que a vulnerabilidade muda de natureza em vez de desaparecer.",
    "criterios": [
      "Identifica a vulnerabilidade como dependência de ponto de passagem obrigatória e registra a perda de autossuficiência (0,2)",
      "Nomeia pelo menos dois instrumentos concretos (0,2)",
      "Discute o efeito sobre a soberania do anfitrião com o precedente de Suez e Panamá ou a dependência financeira (0,2)",
      "Identifica a Índia como ator contrariado e explica por quê (0,2)",
      "Conclui avaliando se os instrumentos resolvem a vulnerabilidade, e não apenas listando-os (0,2)",
      "Não pontua: listar instrumentos sem avaliar eficácia; omitir o terceiro ator"
    ],
    "contexto": "Um Estado asiático de grande população depende de um único estreito para a passagem da maior parte de suas importações de energia e de alimentos e de suas exportações. Esse estreito é vigiado por marinhas de países aliados de uma potência rival. O Estado em questão financia portos e corredores terrestres em países vizinhos, negocia com um terceiro país a abertura de um canal que contornaria o estreito e conduz um programa global de infraestrutura com ramos terrestre e marítimo.",
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M05-OBJ-N3-006",
    "topico": "05-china",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M05-C007",
      "REL-T2-M00-C005"
    ],
    "fonte": "AULA 16.pdf, slides “China - Maoísmo” (Grande Cisma, trégua com os EUA visando antagonizar a URSS); REL - T2.pdf, detalhamento do Grande Cisma, visita de Kissinger em 1971, visita de Nixon em 1972, reconhecimento em 1979 e entrada da RPC no CSNU em 1971; AULA 15.pdf, slide “1. Realismo”.",
    "competencia": "Aplicar a lente realista a um caso em que a afinidade ideológica é contrariada.",
    "erroProvavel": "Ler a aproximação como abertura institucional em vez de cálculo de equilíbrio de poder.",
    "armadilha": "Ler a aproximação como abertura institucional em vez de cálculo de equilíbrio de poder.",
    "tempoEstimadoMin": 4,
    "assinatura": [
      "obj",
      "N3",
      "aplicação inédita — decidir em cenário novo com distratores próximos",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "multipla",
    "enunciado": "Em 1960 ocorre o Grande Cisma entre a China e a União Soviética, e em 1971 e 1972 os Estados Unidos promovem uma aproximação com Pequim que resultou, no mesmo período, na entrada da República Popular da China no Conselho de Segurança da ONU. Qual leitura explica melhor a conduta americana?",
    "alternativas": [
      "Leitura liberal, porque a aproximação se deu por meio de instituições multilaterais e ampliou a participação chinesa no sistema internacional.",
      "Leitura construtivista, porque a aproximação exigiu a reconstrução da identidade chinesa perante o Ocidente antes de qualquer movimento diplomático.",
      "Leitura realista: diante de uma fenda entre dois Estados comunistas, os Estados Unidos aproveitaram a fragilidade para se aliar à China e dividir o bloco na Ásia, isolando a URSS — cálculo de equilíbrio de poder em que o interesse de segurança prevaleceu sobre a afinidade ideológica.",
      "Nenhuma leitura se aplica, porque a aproximação foi resultado de iniciativa pessoal de negociadores, sem cálculo estratégico de Estado.",
      "Leitura realista, mas apenas do lado chinês, já que para os Estados Unidos a decisão foi de natureza econômica, visando ao acesso ao mercado chinês."
    ],
    "correta": 2,
    "comentario": "É o caso mais nítido de pragmatismo realista do corpus. O Grande Cisma não foi divergência pessoal: a China acusava a URSS de se preocupar com os próprios interesses e não com o comunismo internacional, e via a URSS fazendo concessões a interesses ocidentais; a URSS via a China como comunista radical. Os Estados Unidos exploraram a fenda: visita secreta de Kissinger em 1971, visita oficial de Nixon em 1972, reatamento de relações e reconhecimento formal em 1979. A RPC entrou no Conselho de Segurança em 1971, no contexto dessa aproximação e do isolamento diplomático da República da China. Dois Estados capitalista e comunista se aproximam contra um terceiro comunista — o interesse de segurança venceu a afinidade ideológica nos dois lados.",
    "explicacaoDistratores": [
      "Errada. A instituição foi consequência do arranjo, não sua razão; o objetivo declarado era isolar a URSS.",
      "Errada. O corpus não apresenta mudança identitária como variável; apresenta cálculo de equilíbrio de poder.",
      "Correta. Equilíbrio de poder e interesse de segurança acima da afinidade ideológica.",
      "Errada. A visita secreta prévia e o arranjo de trégua indicam cálculo de Estado, não improviso pessoal.",
      "Errada. O acesso econômico veio depois e por consequência; a razão registrada é o isolamento da URSS."
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M05-OBJ-N3-007",
    "topico": "05-china",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M05-C015",
      "REL-T2-M04-C008"
    ],
    "fonte": "AULA 16.pdf, slides “Marinha Chinesa”, “Previsão do crescimento da Marinha Chinesa” e “A marinha chinesa possui agora mais navios que os EUA” (fonte: relatório do Departamento de Defesa dos EUA, 2024); AULA 15.pdf, slide “Declínio?” (cláusula das alianças).",
    "competencia": "Recusar inferência apressada a partir de contagem, lendo a composição como evidência de doutrina.",
    "erroProvavel": "Concluir superioridade naval a partir do número de cascos.",
    "armadilha": "Concluir superioridade naval a partir do número de cascos.",
    "tempoEstimadoMin": 4,
    "assinatura": [
      "obj",
      "N3",
      "aplicação inédita — decidir em cenário novo com distratores próximos",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "multipla",
    "enunciado": "Segundo dado de 2020 apresentado em aula, a marinha chinesa passou a contar com mais navios que a americana (332 contra 291, incluindo submarinos), e o relatório do Congresso dos Estados Unidos registra, entre 2005 e 2020, a incorporação chinesa de 49 corvetas, 35 naves de patrulha costeira com mísseis, 2 porta-aviões, 11 destróieres, 6 fragatas, 1 cruzador e 17 embarcações para ataque anfíbio. Qual conclusão é sustentada por esses dados?",
    "alternativas": [
      "Que a China superou os Estados Unidos em poder naval, uma vez que poder naval se mede pelo número de unidades disponíveis.",
      "Que a composição da força revela doutrina: o predomínio de corvetas e de patrulhas costeiras com mísseis indica investimento em negação regional, coerente com antiacesso e negação de área, e não em projeção global — cuja comparação exigiria considerar tonelagem, porta-aviões, rede de bases no exterior e experiência operacional, além do fato de que a supremacia americana é potencializada por 9 marinhas aliadas entre as 12 seguintes.",
      "Que os dados são irrelevantes, porque contagem de navios não guarda relação com capacidade militar.",
      "Que a China abandonou a estratégia de antiacesso, já que a incorporação de dois porta-aviões indica opção por projeção de poder distante.",
      "Que a marinha americana entrou em declínio absoluto, uma vez que perdeu a primeira posição em número de unidades."
    ],
    "correta": 1,
    "comentario": "O dado é verdadeiro e a conclusão apressada é falsa — combinação de que o professor gosta. Contagem de cascos não mede poder naval: mede número de cascos. O que a **composição** revela é a doutrina. Corvetas e patrulhas costeiras com mísseis são plataformas de alcance regional, adequadas a manter o adversário fora de uma área definida; são a materialização de A2/AD, não de projeção oceânica. Dois porta-aviões não invertem isso, e a comparação honesta precisa das variáveis que a alternativa correta lista — inclusive a cláusula das alianças, que multiplica o poder relativo americano.",
    "explicacaoDistratores": [
      "Errada. Poder naval não se reduz a número de unidades; ignora tonelagem, alcance, bases e alianças.",
      "Correta. A composição revela a doutrina e enumera as variáveis que faltam à comparação.",
      "Errada. Os dados são relevantes como evidência de doutrina; o erro está na inferência apressada, não no dado.",
      "Errada. Dois porta-aviões não substituem a estrutura de negação regional predominante na composição.",
      "Errada. Declínio absoluto exige redução de poder em si, o que os indicadores americanos não sustentam."
    ],
    "verificacaoIndependente": "Antes de comparar duas marinhas, pergunte que TAREFA cada composição permite cumprir, e não quantos navios existem.",
    "modalidades": [
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M05-OBJ-N4-008",
    "topico": "05-china",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M05-C016",
      "REL-T2-M05-C006",
      "REL-T2-M04-C012"
    ],
    "fonte": "Geopolitical Futures, “The Third Opium War”, seções “A New Chapter” e “Where History Diverges”; BARTOSIAK, “The Politics of Space” (novidade histórica da simultaneidade); AULA 16.pdf, slide “China - Século das Humilhações”; AULA 15.pdf, slide “Mandato Divino X Destino Manifesto”.",
    "competencia": "Avaliar os limites de uma analogia histórica, distinguindo mecanismo comum de equivalência integral.",
    "erroProvavel": "Levar a analogia do ópio ao ponto de equivalência integral, ignorando as diferenças estruturais.",
    "armadilha": "Levar a analogia do ópio ao ponto de equivalência integral, ignorando as diferenças estruturais.",
    "tempoEstimadoMin": 5,
    "assinatura": [
      "obj",
      "N4",
      "integração — cruza módulos, arbitra entre leituras ou projeta consequência",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "multipla",
    "enunciado": "Avalie os itens sobre a analogia entre as Guerras do Ópio e a competição contemporânea entre Estados Unidos e China, e aponte a alternativa que contém apenas itens INCORRETOS. **I.** Em ambos os casos, uma potência ocidental insatisfeita com os termos da relação econômica busca redefini-los, primeiro por instrumentos econômicos e depois por pressão mais direta. **II.** A analogia é integral, porque a situação interna chinesa hoje é equivalente à do fim da dinastia Qing: regime que perde o controle sobre o interior e sobre a burocracia. **III.** A memória do Século das Humilhações é irrelevante para o cálculo político contemporâneo, uma vez que se trata de eventos com mais de um século. **IV.** Aceitar as exigências externas nos termos propostos pela potência rival tenderia a ser lido internamente como versão moderna dos tratados desiguais, o que restringe a margem de manobra do governo chinês. **V.** A situação é historicamente inédita em um aspecto decisivo: nunca antes houve, simultaneamente, uma China poderosa e uns Estados Unidos poderosos.",
    "alternativas": [
      "I, II e III.",
      "II e III.",
      "II, III e V.",
      "I, IV e V.",
      "III, IV e V."
    ],
    "correta": 1,
    "comentario": "Os itens **II** e **III** são os incorretos. O **II** é falso porque a fonte registra três diferenças estruturais que impedem a analogia integral: a dinastia Qing era usurpadora estrangeira, o Partido Comunista Chinês é han e conta com o recurso do nacionalismo; o PCC é jovem em termos dinásticos; e não demonstra perder o controle — ao contrário, ampliou o controle sobre a sociedade. O **III** é falso e inverte o argumento central: a memória das humilhações é justamente o que dá ao PCC mais legitimidade que o marxismo, e o “rejuvenescimento nacional” fala a esse sentimento. Os itens I, IV e V são corretos: I descreve o mecanismo comum, IV descreve a restrição interna que decorre da memória e V registra a novidade histórica apontada em aula — nunca houve uma China poderosa e uns Estados Unidos poderosos ao mesmo tempo.",
    "explicacaoDistratores": [
      "Errada. O item I é correto: descreve o mecanismo comum aos dois momentos.",
      "Correta. Apenas II e III são incorretos.",
      "Errada. O item V é correto e é o ponto mais destacado pelas fontes de aprofundamento.",
      "Errada. Os três itens dessa alternativa são corretos.",
      "Errada. Os itens IV e V são corretos."
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M05-OBJ-N3-009",
    "topico": "05-china",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M05-C005",
      "REL-T2-M05-C014"
    ],
    "fonte": "AULA 16.pdf, os quatro slides “Tianxia” e o slide “Sistema sinocêntrico (tributário)”; REL - T2.pdf, seção Tianxia; AULA 16.pdf, slide “Investimentos no Exterior e One Belt, One Road”.",
    "competencia": "Reconhecer hierarquia sem ocupação e o papel do comércio dentro do pacote de subordinação.",
    "erroProvavel": "Ler Tianxia como império territorial ou tomar a liberdade de comércio como sinal de igualdade.",
    "armadilha": "Ler Tianxia como império territorial ou tomar a liberdade de comércio como sinal de igualdade.",
    "tempoEstimadoMin": 4,
    "assinatura": [
      "obj",
      "N3",
      "aplicação inédita — decidir em cenário novo com distratores próximos",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "multipla",
    "enunciado": "Sobre Tianxia e o sistema sinocêntrico tributário, assinale a alternativa CORRETA.",
    "alternativas": [
      "Tianxia designa um império territorial administrado diretamente pela corte, em que os povos submetidos perdiam autonomia administrativa e passavam a ser governados por funcionários chineses.",
      "Tianxia — “todos sob o céu” — é um conceito cultural que denotava o mundo geográfico, ou o reino metafísico dos mortais, e depois se associou à soberania política, organizando o mundo de forma CONCÊNTRICA a partir da corte até a franja dos “bárbaros”; no sistema tributário correspondente, o subordinado aceita posição inferior, envia tributos periódicos e adota o calendário chinês, recebendo em troca liberdade de comércio, com pouca violência empregada.",
      "O sistema tributário chinês equivalia ao sistema de Estados soberanos iguais, uma vez que previa comércio livre entre as partes.",
      "Tianxia foi um conceito exclusivamente chinês, sem aplicação por outros reinos, e desapareceu com o fim da dinastia Zhou.",
      "No sistema tributário, a submissão era obtida principalmente por conquista militar, e o tributo substituía a ocupação apenas quando a conquista se mostrava inviável."
    ],
    "correta": 1,
    "comentario": "A chave é reconhecer um modelo de **hierarquia sem ocupação**. A ordem é concêntrica: corte, oficiais maiores e menores, súditos comuns, Estados tributários e, na franja, os “bárbaros”. Os quatro mecanismos registrados em aula são econômicos e culturais antes de militares — tornar o outro dependente por produtos sofisticados, doutrinar nos valores confucianos, converter igualdade em vassalagem com o tempo e irradiar autoridade a partir do centro. E há uma inversão de vocabulário que a prova explora: a **liberdade de comércio** é parte do pacote de **subordinação**, e não sinal de igualdade — o tributário ganha acesso e concede posição. Note ainda que Tianxia foi aplicado por outros reinos da esfera cultural chinesa, entre eles Japão, Coreia e Vietnã, e que o conceito nasce com os Zhou, mas não se encerra com eles.",
    "explicacaoDistratores": [
      "Errada. Não há administração direta nem substituição dos aparelhos locais: a hierarquia dispensa a ocupação.",
      "Correta. Descreve a ordem concêntrica e o conteúdo do sistema tributário.",
      "Errada. Há reconhecimento explícito de posição inferior — não é igualdade jurídica entre as partes.",
      "Errada. O conceito foi aplicado por Japão, Coreia e Vietnã e atravessa dinastias posteriores aos Zhou.",
      "Errada. O corpus registra pouca violência empregada; a submissão se constrói por dependência e assimilação."
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M06-VF-N1-009",
    "topico": "06-peb-aplicacao-e-integracao",
    "dificuldade": "facil",
    "conceptIds": [
      "REL-T2-M06-C017"
    ],
    "fonte": "AULA 12.pdf, slide “PEB - Constituição de 1988”; Estudo Dirigido 2 da Aula 13.",
    "competencia": "Localizar corretamente a determinação de integração dentro do art. 4º.",
    "erroProvavel": "Tratar a integração latino-americana como o décimo primeiro princípio do caput.",
    "armadilha": "Tratar a integração latino-americana como o décimo primeiro princípio do caput.",
    "tempoEstimadoMin": 2,
    "assinatura": [
      "vf",
      "N1",
      "âncora — recuperação de lista fechada ou definição literal",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "vf",
    "afirmacao": "A determinação de buscar a integração econômica, política, social e cultural da América Latina está no caput do art. 4º da Constituição de 1988, entre os princípios que regem as relações internacionais do Brasil.",
    "correta": false,
    "comentario": "**Falsa.** Os dez princípios estão no **caput** do art. 4º; a determinação de buscar a **integração latino-americana** está no **parágrafo único**. A distinção não é preciosismo: princípio é critério de conduta, aplicável a qualquer relação; a integração é um **objetivo** determinado ao país, com destinatário geográfico definido — e é ela que sustenta a razão institucional da política de integração sul-americana. Quem cita o art. 4º sem separar caput de parágrafo único perde justamente o elemento que responde ao Estudo Dirigido.",
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M06-OBJ-N2-010",
    "topico": "06-peb-aplicacao-e-integracao",
    "dificuldade": "medio",
    "conceptIds": [
      "REL-T2-M06-C016"
    ],
    "fonte": "AULA 12.pdf, slides “PEB - República Velha (1889~1930)” e “PEB - Pós II GM (1946~1960)”; Estudos Dirigidos 1 e 4 da Aula 13.",
    "competencia": "Responder a pergunta de julgamento com dois casos de sinais opostos e o mecanismo comum.",
    "erroProvavel": "Responder sim ou não sem exemplo, ou tratar a aliança não-escrita como alinhamento automático.",
    "armadilha": "Responder sim ou não sem exemplo, ou tratar a aliança não-escrita como alinhamento automático.",
    "tempoEstimadoMin": 4,
    "assinatura": [
      "obj",
      "N2",
      "reconhecimento aplicado — identificar o conceito em situação descrita",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "multipla",
    "enunciado": "O Estudo Dirigido pergunta se o alinhamento automático com a maior potência sempre apresentou resultados positivos, pedindo exemplo. Qual resposta é mais defensável à luz do corpus?",
    "alternativas": [
      "Sim, sempre: a aliança com a maior potência garante contrapartidas proporcionais ao apoio prestado.",
      "Não necessariamente. A aliança não-escrita do início do século XX foi proveitosa porque havia convergência de interesses e o Brasil detinha ativo então escasso, com capacidade de barganha real; já no pós-Segunda Guerra, o Acordo Militar de 1952 e a participação na Guerra da Coreia não produziram as contrapartidas esperadas na medida pretendida — alinhamento não gera crédito automático.",
      "Não, nunca: toda aliança com potência superior é, por definição, subordinação sem ganho.",
      "A pergunta não admite resposta, porque alinhamento é conceito da Guerra Fria e não se aplica à era Rio Branco.",
      "Sim, desde que formalizado em tratado, pois só o vínculo jurídico assegura reciprocidade."
    ],
    "correta": 1,
    "comentario": "O enunciado do professor pede **exemplo**, e a resposta forte traz **dois**, de sinais opostos, porque é a comparação que revela o mecanismo: o que decide não é a intensidade do alinhamento, e sim a **capacidade de barganha** — quão escasso e urgente é o ativo que se oferece. Na era Rio Branco havia convergência pontual e ativo valorizado; em 1952 a expectativa de contrapartida se frustrou. Note ainda que a aliança não-escrita **não era** alinhamento automático: era convergência negociada caso a caso, o que é precisamente o contraste que a questão explora.",
    "explicacaoDistratores": [
      "Errada. O caso de 1952 mostra que proporcionalidade não é automática.",
      "Correta. Dois casos de sinais opostos e o mecanismo que os distingue.",
      "Errada. A própria aliança não-escrita é contraexemplo registrado no corpus.",
      "Errada. O Estudo Dirigido usa exatamente esses períodos como material de resposta.",
      "Errada. A aliança não-escrita era proveitosa e, por definição, não era tratado."
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M06-COR-N2-011",
    "topico": "06-peb-aplicacao-e-integracao",
    "dificuldade": "medio",
    "conceptIds": [
      "REL-T2-M06-C017",
      "REL-T2-M06-C018",
      "REL-T2-M06-C019"
    ],
    "fonte": "AULA 12.pdf, slides “PEB - Constituição de 1988”, “PEB - Governos pós-1985” e “Principais heranças do Barão do Rio Branco”; MAGNOLI, cap. 21, seção “Do Mercosul à Unasul”; AULA 14.pdf, slide “Entorno Estratégico”.",
    "competencia": "Separar fundamento normativo, cálculo pragmático, instrumento de entorno e herança normatizada.",
    "erroProvavel": "Classificar ZOPACAS e CPLP como razões de integração regional.",
    "armadilha": "Classificar ZOPACAS e CPLP como razões de integração regional.",
    "tempoEstimadoMin": 6,
    "assinatura": [
      "cor",
      "N2",
      "reconhecimento aplicado — identificar o conceito em situação descrita",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "correlacione",
    "titulo": "Correlacione cada instrumento ou herança ao papel que desempenha na política externa brasileira",
    "chaves": [
      {
        "chave": "A",
        "texto": "Razão institucional da integração"
      },
      {
        "chave": "B",
        "texto": "Razão pragmática da integração"
      },
      {
        "chave": "C",
        "texto": "Instrumento do entorno estratégico"
      },
      {
        "chave": "D",
        "texto": "Herança convertida em norma vigente"
      }
    ],
    "itens": [
      {
        "texto": "Parágrafo único do art. 4º da Constituição, que determina buscar a integração econômica, política, social e cultural da América Latina.",
        "chave": "A"
      },
      {
        "texto": "Participação de Uruguai e Paraguai no Mercosul: peso econômico reduzido, mas valor geopolítico elevado, porque elimina fontes de atrito entre os dois sócios maiores.",
        "chave": "B"
      },
      {
        "texto": "Zona de Paz e Cooperação do Atlântico Sul, de 1986, que envolve afastar bases ofensivas e evitar a presença de armas nucleares na região.",
        "chave": "C"
      },
      {
        "texto": "Comunidade dos Países de Língua Portuguesa, de 1996, que dá densidade institucional à direção africana do entorno.",
        "chave": "C"
      },
      {
        "texto": "Princípio da não-intervenção e abordagem basicamente pacífica para a solução de controvérsias, hoje inscritos entre os princípios constitucionais e no fundamento da Política Naval.",
        "chave": "D"
      },
      {
        "texto": "Registro, na Declaração do Iguaçu, da urgente necessidade de que a América Latina reforce seu poder de negociação com o resto do mundo.",
        "chave": "B"
      }
    ],
    "comentario": "O Estudo Dirigido 2 pede **duas razões de naturezas diferentes**, e a correlação treina exatamente essa separação. A razão **institucional** é normativa: existe uma determinação constitucional, e ela está no parágrafo único, não no caput. A razão **pragmática** é de cálculo: estabilizar o entorno, eliminar atrito entre Brasil e Argentina e aumentar poder de negociação coletivo. **ZOPACAS** e **CPLP** não são razões de integração: são instrumentos do **entorno estratégico**, e correspondem a dois dos quatro itens definidos pela Política Naval. E as heranças de Rio Branco entram numa quarta categoria: princípios que deixaram de ser prática diplomática de um período e viraram **norma vigente** — no art. 4º e no fundamento da Política Naval.",
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M06-OBJ-N3-012",
    "topico": "06-peb-aplicacao-e-integracao",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M06-C021",
      "REL-T2-M06-C017"
    ],
    "fonte": "MAGNOLI, cap. 21, seção “Do Mercosul à Unasul” (Tratado de Assunção, Ouro Preto, Ushuaia, adesão venezuelana); AULA 12.pdf, slide “PEB - Governos pós-1985”.",
    "competencia": "Ler o desenho institucional como explicação do ritmo e do limite da integração.",
    "erroProvavel": "Atribuir supranacionalidade ao Mercosul ou ignorar o efeito da regra de consenso.",
    "armadilha": "Atribuir supranacionalidade ao Mercosul ou ignorar o efeito da regra de consenso.",
    "tempoEstimadoMin": 4,
    "assinatura": [
      "obj",
      "N3",
      "aplicação inédita — decidir em cenário novo com distratores próximos",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "multipla",
    "enunciado": "Sobre o desenho institucional do Mercosul e seus efeitos, assinale a alternativa CORRETA.",
    "alternativas": [
      "O bloco tem órgãos supranacionais com poder de decidir por maioria qualificada, o que acelera a harmonização normativa entre os membros.",
      "A estrutura definida no Protocolo de Ouro Preto é intergovernamental: os órgãos decisórios são compostos por representantes dos Estados e agem apenas por consenso, o que preserva a soberania de cada membro e, ao mesmo tempo, permite que qualquer um deles trave uma decisão; o Protocolo de Ushuaia acrescentou a cláusula democrática, e a adesão plena da Venezuela, concluída em 2012, expandiu o bloco para além do Cone Sul, mas reduziu sua funcionalidade ao torná-lo dependente de novos consensos.",
      "A cláusula democrática foi introduzida pelo Tratado de Assunção e é o que permite a suspensão automática de membros por maioria simples.",
      "A entrada da Venezuela, em 2012, aumentou a funcionalidade comercial do bloco, uma vez que ampliou o mercado interno sem alterar a regra de decisão.",
      "O Mercosul nasceu como união aduaneira plena, razão pela qual não precisou estabelecer metas sucessivas de integração."
    ],
    "correta": 1,
    "comentario": "A regra de decisão é o que explica o ritmo da integração — e é o que a maioria das respostas ignora. **Intergovernamental por consenso** significa que a soberania está protegida e que a velocidade é a do membro mais relutante. O Tratado de Assunção (1991) fixou **duas metas sucessivas**: primeiro zona de livre-comércio, depois união aduaneira pela Tarifa Externa Comum. O **Protocolo de Ouro Preto (1994)** definiu a estrutura; o **Protocolo de Ushuaia (1998)** introduziu a cláusula democrática. E a leitura da fonte sobre a adesão venezuelana é explicitamente ambivalente: ganho de alcance geopolítico, perda de funcionalidade comercial e política — porque o bloco passa a depender de consensos que antes não precisava obter.",
    "explicacaoDistratores": [
      "Errada. Não há supranacionalidade nem decisão por maioria: os órgãos são intergovernamentais e decidem por consenso.",
      "Correta. Descreve desenho, cláusula democrática e o efeito ambivalente da adesão venezuelana.",
      "Errada. A cláusula democrática é do Protocolo de Ushuaia, de 1998, e não do Tratado de Assunção.",
      "Errada. A fonte registra perda de funcionalidade comercial e política, e a regra de decisão é justamente o problema.",
      "Errada. O tratado estabeleceu metas sucessivas: zona de livre-comércio e depois união aduaneira."
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M06-OBJ-N3-013",
    "topico": "06-peb-aplicacao-e-integracao",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M06-C018",
      "REL-T2-M03-C003",
      "REL-T2-M02-C005"
    ],
    "fonte": "AULA 12.pdf, slide “PEB - Governos pós-1985”; Estudo Dirigido 5 da Aula 13; AULA 13.pdf, slide “Alguns pressupostos da PND”; AULA 14.pdf, slides “Entorno Estratégico” e “Economia Azul”.",
    "competencia": "Responder às duas metades de um Estudo Dirigido, ligando instrumento diplomático a efeito operacional.",
    "erroProvavel": "Responder só a metade institucional e omitir o efeito para a Marinha.",
    "armadilha": "Responder só a metade institucional e omitir o efeito para a Marinha.",
    "tempoEstimadoMin": 4,
    "assinatura": [
      "obj",
      "N3",
      "aplicação inédita — decidir em cenário novo com distratores próximos",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "multipla",
    "enunciado": "O Estudo Dirigido pergunta por que a ZOPACAS e a CPLP são importantes para o entorno estratégico brasileiro — e, em seguida, para a Marinha. Qual encadeamento responde às duas metades?",
    "alternativas": [
      "As duas são alianças militares que garantem defesa coletiva do Atlântico Sul, o que dispensa investimento naval próprio.",
      "As duas dão densidade institucional a dois dos quatro itens do entorno estratégico definido pela Política Naval — o Atlântico Sul e os países da costa ocidental africana; para a Marinha, um Atlântico Sul mantido como zona de paz e cooperação, com afastamento de bases ofensivas e sem armas nucleares, reduz a ameaça precisamente no espaço onde estão as Águas Jurisdicionais Brasileiras e por onde passa mais de 95% do comércio exterior do país.",
      "As duas são relevantes apenas no plano cultural e linguístico, sem efeito sobre planejamento de defesa.",
      "A ZOPACAS é um dos Objetivos Nacionais de Defesa e a CPLP é uma Capacidade Nacional de Defesa, o que explica sua presença nos documentos.",
      "As duas substituem o entorno estratégico da Política Naval, que foi revogado pela Política Marítima Nacional de 2025."
    ],
    "correta": 1,
    "comentario": "A pergunta tem **duas metades**, e responder só a primeira é perder metade dos pontos — erro que o padrão de correção por elementos registra como “faltou mencionar”. A primeira metade é institucional: ZOPACAS e CPLP correspondem a dois dos quatro itens do entorno. A segunda é operacional: o valor para a Marinha é a **redução de ameaça no espaço que ela precisa controlar**. E há uma armadilha de classificação embutida: a manutenção do Atlântico Sul como zona de paz e cooperação é **pressuposto** da PND — não Objetivo Nacional de Defesa, nem Capacidade.",
    "explicacaoDistratores": [
      "Errada. Nenhuma das duas é aliança militar de defesa coletiva.",
      "Correta. Liga entorno, pressuposto da PND e o espaço onde estão as AJB.",
      "Errada. Ambas têm efeito direto sobre pressupostos e entorno declarados em documentos de defesa.",
      "Errada. ZOPACAS é pressuposto da PND, e a CPLP não é capacidade de defesa.",
      "Errada. A PMN não revogou o entorno estratégico da Política Naval."
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M06-OBJ-N3-014",
    "topico": "06-peb-aplicacao-e-integracao",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M06-C015",
      "REL-T2-M04-C009",
      "REL-T2-M05-C003"
    ],
    "fonte": "AULA 13.pdf, slide “Objetivos Nacionais de Defesa”; AULA 14.pdf, slide “Política Naval”; AULA 15.pdf, slide “EUA - Imperativo Estratégico”; AULA 16.pdf, slide “China - Imperativo Estratégico”; AULA 12.pdf, slide “PEB - Dilemas futuros”.",
    "competencia": "Comparar imperativos pela estrutura e declarar o que é reconstrução de autoria.",
    "erroProvavel": "Apresentar o imperativo brasileiro como enunciado de slide.",
    "armadilha": "Apresentar o imperativo brasileiro como enunciado de slide.",
    "tempoEstimadoMin": 5,
    "assinatura": [
      "obj",
      "N3",
      "aplicação inédita — decidir em cenário novo com distratores próximos",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "multipla",
    "enunciado": "Comparando a ESTRUTURA dos imperativos estratégicos estudados, qual leitura é mais rigorosa?",
    "alternativas": [
      "Os três são listas equivalentes de objetivos, diferindo apenas no número de itens.",
      "As estruturas diferem: o imperativo americano é uma SEQUÊNCIA de quatro degraus em que cada um é condição do seguinte; o chinês é um TRILEMA de três itens que se tensionam entre si, de modo que nenhuma configuração os satisfaz plenamente; e o brasileiro, reconstruído a partir dos objetivos de defesa, da Política Naval e dos dilemas futuros, é uma lista SEM HIERARQUIA declarada — ausência que a crítica sobre Grande Estratégia explora ao sustentar que ter documentos não é ter estratégia.",
      "Apenas o imperativo chinês é hierarquizado, pois a integridade territorial vem declaradamente antes dos demais itens.",
      "O imperativo brasileiro está enunciado em slide próprio do professor, com quatro degraus análogos aos americanos.",
      "A comparação é inválida, porque o Brasil não tem objetivos estratégicos declarados em documento oficial."
    ],
    "correta": 1,
    "comentario": "A comparação rende quando se pergunta pela **forma**, e não pelo conteúdo. Sequência implica ordem: não se projeta poder na Eurásia com a retaguarda hemisférica disputada. Trilema implica conflito interno: abertura gera a desigualdade que ameaça a unidade, e combatê-la reduz a abertura. Lista sem hierarquia implica **indeterminação de prioridade** — e é exatamente aí que incide o debate sobre Grande Estratégia tratado no módulo de PND, END e PESD. Duas cautelas de método: o imperativo brasileiro é **reconstrução declarada** deste curso, não slide do professor; e o Brasil **tem** objetivos declarados — são os oito Objetivos Nacionais de Defesa —, o que invalida a última alternativa.",
    "explicacaoDistratores": [
      "Errada. A diferença é de natureza: sequência, trilema e lista sem hierarquia.",
      "Correta. Compara por estrutura e declara a natureza reconstruída do caso brasileiro.",
      "Errada. O trilema chinês não é hierarquia: os três itens se tensionam.",
      "Errada. Não há slide com imperativo brasileiro; a reconstrução é autoria declarada.",
      "Errada. Há oito Objetivos Nacionais de Defesa declarados na PND."
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M06-DIS-N4-015",
    "topico": "06-peb-aplicacao-e-integracao",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M06-C022",
      "REL-T2-M06-C015",
      "REL-T2-M06-C023",
      "REL-T2-M00-C003"
    ],
    "fonte": "T2_2025.pdf, item 2 do trabalho (peso 2,0) e item 6 (sumário executivo); AULA 12.pdf, slides “PEB - Dilemas futuros” e “PEB - Governos pós-1985”; AULA 13.pdf, slide “Objetivos Nacionais de Defesa”; AULA 14.pdf, slides “Economia Azul”, “SisGAAz” e “Ampliação da Capacidade de Apoio Logístico”; MAGNOLI, cap. 21.",
    "competencia": "Produzir a análise geopolítica completa do Brasil no formato ponderado do trabalho de T2.",
    "erroProvavel": "Descrever o país em vez de preencher a matriz, ou omitir os fatores dificultadores.",
    "armadilha": "Descrever o país em vez de preencher a matriz, ou omitir os fatores dificultadores.",
    "tempoEstimadoMin": 16,
    "assinatura": [
      "dis",
      "N4",
      "integração — cruza módulos, arbitra entre leituras ou projeta consequência",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "discursiva",
    "enunciado": "Aplique a matriz de dez passos ao Brasil, no formato exigido pelo trabalho de T2: selecione três objetivos ou desafios geoceanopolíticos, nomeie para cada um o condicionante que o produz e os fatores facilitadores e dificultadores, indique o instrumento correspondente e conclua em formato de sumário executivo, declarando um limite da análise.",
    "gabaritoComentado": "**Tese.** O problema estratégico brasileiro não é ameaça estatal próxima, e sim a distância entre o que o país **depende** do mar e o que ele **consegue garantir** nele — e é essa distância que ordena objetivos, instrumentos e prioridades.\n\n**Objetivo 1 — assegurar o uso do mar de que a economia depende.** *Condicionante:* cerca de 8.500 km de litoral, com 80% da população e 90% do PIB nele concentrados, e mais de 95% do comércio exterior escoando por rotas marítimas. *Facilitadores:* jurisdição já reconhecida sobre extensa área; ausência de rival estatal de peso comparável no entorno; base industrial naval em formação. *Dificultadores:* dimensão continental da área a monitorar; orçamento de ciclo longo em disputa anual; dependência de tecnologia externa. *Instrumento:* SisGAAz e o monitoramento integrado, somados ao complexo naval de uso múltiplo previsto para as proximidades da foz do Amazonas, que amplia negação do uso do mar, controle de áreas marítimas e projeção de poder.\n\n**Objetivo 2 — manter o entorno sul-americano estável e sem coalizão hostil.** *Condicionante:* fronteira com dez vizinhos e bacias internacionais compartilhadas — os rios amazônicos e platinos atravessam fronteiras políticas. *Facilitadores:* fronteiras estabilizadas desde a era Rio Branco; determinação constitucional de buscar a integração latino-americana; Mercosul e Unasul já existentes. *Dificultadores:* regra de consenso que permite a qualquer membro travar decisões; heterogeneidade política dos vizinhos; perda de funcionalidade do bloco após a ampliação. *Instrumento:* diplomacia de integração, cooperação em infraestrutura física e eliminação de fontes de atrito com os vizinhos menores.\n\n**Objetivo 3 — ampliar a inserção decisória sem alinhamento automático.** *Condicionante:* posição no hemisfério sul, distante dos principais polos de poder — desvantagem de acesso e vantagem de baixa exposição a rivalidade militar direta. *Facilitadores:* trajetória de autonomia pela diversificação; reivindicação de assento no Conselho de Segurança amparada em objetivo declarado de defesa; ZOPACAS e CPLP como instrumentos de entorno. *Dificultadores:* baixa continuidade estratégica entre governos; um hemisfério tratado como zona de exclusão por potência extrarregional encurta a margem de diversificação. *Instrumento:* multilateralismo seletivo, diplomacia naval e a articulação declarada entre defesa e política externa, que aparece em quatro documentos distintos.\n\n**Situação atual e prospecção.** No plano nacional, os programas estratégicos avançam em ritmo determinado pelo financiamento, e a Política Marítima Nacional foi reeditada em 2025. No plano internacional, a competição sistêmica entre as duas maiores potências pressiona escolhas de parceria e de cadeia produtiva, inclusive em minerais críticos. A variável que mais desloca o cenário nos próximos anos é a **continuidade orçamentária**: sem ela, objetivo declarado não vira capacidade.\n\n**Lente teórica e contraponto.** Predomina a leitura liberal-institucional no modo de agir — princípios constitucionais, integração, multilateralismo —, com componente realista claro nos instrumentos de dissuasão marítima. O contraponto é honesto: quem enfatizar o complexo naval e a busca de autonomia tecnológica lerá o caso como realista, e a evidência sustenta essa leitura no aspecto da capacidade.\n\n**Conclusão em sumário executivo.** *O Brasil depende do mar em grau que não corresponde à capacidade de garanti-lo; seus instrumentos privilegiam jurisdição, consciência situacional e integração regional, e não projeção; e o limite decisivo não é externo, mas interno — hierarquia entre objetivos e continuidade de financiamento.*\n\n**Limite declarado.** O imperativo estratégico brasileiro não está enunciado em slide do professor: é reconstrução a partir dos Objetivos Nacionais de Defesa, do fundamento da Política Naval e dos dilemas futuros. Análise feita com informação verificada até 2026.\n\n**Resposta insuficiente:** descrever o Brasil em ordem cronológica, sem separar objetivo, condicionante e instrumento. **Satisfatória:** apresenta os três objetivos com facilitadores e dificultadores. **Nível MB:** apresenta os três, ancora cada um em condicionante nomeado e instrumento correspondente, conclui em sumário executivo e declara o limite da análise, inclusive a natureza reconstruída do imperativo.",
    "criterios": [
      "Seleciona três objetivos ou desafios, sem descrever o país em bloco (0,2)",
      "Nomeia, para cada objetivo, o condicionante que o produz (0,2)",
      "Apresenta fatores facilitadores E dificultadores de cada objetivo (0,2)",
      "Indica o instrumento correspondente a cada objetivo, com nome próprio (0,2)",
      "Conclui em formato de sumário executivo — mecanismo, vulnerabilidade e limite (0,1)",
      "Declara ao menos um limite da análise, incluindo a natureza reconstruída do imperativo (0,1)",
      "Não pontua: narrar história da política externa; listar programas sem ligá-los a objetivo; omitir dificultadores"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M06-OBJ-N4-016",
    "topico": "06-peb-aplicacao-e-integracao",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M06-C020",
      "REL-T2-M06-C019",
      "REL-T2-M01-C017"
    ],
    "fonte": "MAGNOLI, cap. 21, abertura (“unidade e diversidade”, Brasil como ator global, posição no hemisfério sul); AULA 12.pdf, slides “Principais heranças do Barão do Rio Branco” e “Síntese tipológica”.",
    "competencia": "Ler afirmação qualificada sem inflar nem reduzir o que a fonte sustenta.",
    "erroProvavel": "Traduzir “ator global” como capacidade militar global.",
    "armadilha": "Traduzir “ator global” como capacidade militar global.",
    "tempoEstimadoMin": 5,
    "assinatura": [
      "obj",
      "N4",
      "integração — cruza módulos, arbitra entre leituras ou projeta consequência",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "multipla",
    "enunciado": "A fonte obrigatória da Aula 13 afirma que o Brasil transita da condição de potência regional para a de ator global, especialmente na diplomacia comercial e nas negociações internacionais sobre temas financeiros, e observa que, ao contrário de outros grandes emergentes, situa-se no hemisfério sul, longe dos principais polos de poder — situação com desvantagens e com oportunidades inéditas. Qual leitura é mais defensável?",
    "alternativas": [
      "A transição descrita equivale à aquisição de capacidade militar de alcance global, uma vez que ator global e potência global são sinônimos.",
      "A transição é setorial e se dá nos terrenos que a própria fonte nomeia — diplomacia comercial e negociações financeiras —, e a distância dos polos de poder opera nos dois sentidos: reduz a exposição direta à rivalidade militar entre as grandes potências e, ao mesmo tempo, diminui o peso do país nas decisões estruturais; o instrumento coerente com essa posição é o que a trajetória brasileira já privilegia, isto é, ganhar margem pela diversificação de parceiros e pela atuação em regras, e não pela projeção de força.",
      "A distância dos polos de poder é apenas desvantagem, razão pela qual a política externa brasileira deveria buscar alinhamento estável com a potência dominante.",
      "A fonte sustenta que a América Latina deve se contrapor em bloco aos Estados Unidos, e o Brasil deve liderar essa contraposição.",
      "A transição descrita é incompatível com a herança de Rio Branco, que limitava a atuação brasileira ao entorno sul-americano."
    ],
    "correta": 1,
    "comentario": "A questão testa a leitura fiel de uma afirmação qualificada. A fonte diz **em que terrenos** a transição ocorre — diplomacia comercial e negociações financeiras — e registra explicitamente que a posição no hemisfério sul tem desvantagens **e** oportunidades inéditas. Inflar “ator global” para capacidade militar global é ir além da fonte; reduzir a distância a puro prejuízo também é. A quarta alternativa inverte o texto: a fonte afirma que a contraposição chavista entre América Latina e Estados Unidos **não faz sentido** para o Brasil, que procura se reposicionar como ator global. E a quinta ignora que as heranças de Rio Branco — não-intervenção, solução pacífica, uso do direito e da negociação — são justamente os instrumentos compatíveis com atuação em regras.",
    "explicacaoDistratores": [
      "Errada. A fonte delimita os terrenos da transição; não fala de capacidade militar global.",
      "Correta. Lê a afirmação com suas qualificações e extrai o instrumento coerente.",
      "Errada. A fonte registra desvantagens E oportunidades inéditas.",
      "Errada. A fonte afirma que a contraposição chavista não faz sentido para o Brasil.",
      "Errada. As heranças de Rio Branco são instrumentos de atuação por direito e negociação, compatíveis com inserção global."
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M99-DIS-N4-003",
    "topico": "99-revisao-final",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M99-C006",
      "REL-T2-M99-C005",
      "REL-T2-M00-C005",
      "REL-T2-M00-C006"
    ],
    "fonte": "Gabarito da P2 REL 2024, questão 18c (a “geopolítica de uma ilha” e a sobreposição dos interesses de segurança aos comerciais — objeto geopolítico análogo, com enunciado e comando distintos); AULA 15.pdf, slide “Cenários — Forças-motrizes”; AULA 14.pdf, slides “Economia Azul”; AULA 12.pdf, slide “PEB - Dilemas futuros”.",
    "competencia": "Enunciar uma regra a partir de caso, aplicá-la e delimitar seus limites.",
    "erroProvavel": "Apresentar a tendência observada como lei, sem limites e sem condição de aplicação.",
    "armadilha": "Apresentar a tendência observada como lei, sem limites e sem condição de aplicação.",
    "tempoEstimadoMin": 15,
    "assinatura": [
      "dis",
      "N4",
      "integração — cruza módulos, arbitra entre leituras ou projeta consequência",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "discursiva",
    "enunciado": "Explique a decisão, indicando a regra geral que ela ilustra sobre a tensão entre economia e segurança, e apresente o limite dessa regra.",
    "gabaritoComentado": "**Tese.** Quando a dependência econômica e a dependência de segurança apontam para atores diferentes, o vetor de segurança tende a prevalecer nas decisões estruturais — e é o que a proibição da infraestrutura de rede ilustra.\n\n**Conceito.** A tensão entre economia e segurança é uma das linhas da comparação global do curso. Nenhum dos três grandes atores escapa dela: o Brasil depende do mar para mais de 95% do comércio exterior e investe pouco em defesa; os Estados Unidos dependem de cadeias globais e adotam desacoplamento e tarifas; e a China precisa de abertura para prosperar e teme, ao mesmo tempo, a desagregação interna e o bloqueio de um estreito.\n\n**Evidência e nexo.** No caso descrito, o cálculo é geográfico antes de ser econômico. A geopolítica de uma ilha leva o Estado a se aliar à maior potência naval — mundial ou regional —, porque o que assegura a sua sobrevivência não é o fluxo comercial, e sim o controle das linhas de comunicação marítimas de que esse fluxo depende. Infraestrutura crítica de telecomunicações é, além disso, vetor de dependência estrutural e de vulnerabilidade informacional: não é bem substituível no curto prazo, ao contrário de um fluxo de commodities, que se redireciona. Acrescente-se que a potência extrarregional também é grande investidora na economia do país, o que reduz o custo econômico da escolha. Daí a regra: interesses de segurança se sobrepõem a interesses comerciais quando o ativo em jogo é estrutural e a substituição é difícil.\n\n**Lente teórica.** Predomina leitura realista: a decisão privilegia segurança e autonomia decisória sobre ganho econômico imediato, e o instrumento é a aliança. Há leitura liberal secundária, já que o Estado age dentro de arranjos institucionalizados de segurança e de inteligência; mas a razão declarada não é a maximização de ganhos mútuos.\n\n**Limite da regra.** A regra é **tendência observada, não lei**. Três limites. Primeiro, ela vale para decisões estruturais e de difícil reversão; em decisões correntes, o vetor comercial frequentemente prevalece — o mesmo Estado segue comerciando amplamente com o parceiro que excluiu da rede. Segundo, ela pressupõe que o aliado de segurança tenha capacidade efetiva de prover a proteção prometida: se essa capacidade for duvidosa, o cálculo muda, e é exatamente essa a variável dos cenários asiáticos, em que a força do arco de alianças é uma das duas forças-motrizes. Terceiro, a regra não diz QUANTO custo econômico o Estado aceita pagar: no caso, o custo foi mitigado pelo investimento da própria potência aliada.\n\n**Aplicação ao Brasil.** A regra é diretamente relevante ao dilema brasileiro de autonomia pela diversificação: um hemisfério tratado como zona de exclusão por competidores extra-hemisféricos eleva o custo de diversificar parceiros, e a decisão brasileira deixa de ser apenas comercial.\n\n**Conclusão.** A decisão ilustra a prevalência do vetor de segurança em ativos estruturais, e não a ruptura da relação comercial — o que é precisamente o que a regra permite prever e o seu limite obriga a qualificar.\n\n**Resposta insuficiente:** dizer que o país preferiu segurança a comércio. **Satisfatória:** explica a prevalência com o argumento da geografia insular. **Nível MB:** explica a prevalência, distingue ativo estrutural de fluxo substituível, escolhe a lente, apresenta ao menos dois limites da regra e aplica ao caso brasileiro.",
    "criterios": [
      "Enuncia a regra sobre prevalência do vetor de segurança em decisões estruturais (0,2)",
      "Explica o nexo pela geografia insular e pela dependência das linhas de comunicação marítimas (0,2)",
      "Distingue ativo estrutural de fluxo substituível (0,2)",
      "Apresenta pelo menos dois limites da regra (0,25)",
      "Aplica a regra ao dilema brasileiro de diversificação (0,15)",
      "Não pontua: afirmar a prevalência sem mecanismo; apresentar a regra como lei sem limite"
    ],
    "contexto": "Um Estado insular de porte médio tem, como maior parceiro comercial, uma grande potência regional ascendente, de quem recebe também investimento relevante em energia, transportes, mineração e logística. Ao mesmo tempo, esse Estado integra acordos de segurança e de inteligência com uma potência marítima extrarregional e proíbe empresas de telecomunicações da potência vizinha de participar da sua infraestrutura de rede de nova geração.",
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M99-OBJ-N2-004",
    "topico": "99-revisao-final",
    "dificuldade": "medio",
    "conceptIds": [
      "REL-T2-M99-C008",
      "REL-T2-M00-C016"
    ],
    "fonte": "perfil-cobranca.json (memorização média e subordinada; correção por elementos); Correção da SOPA da P1 (“faltou mencionar”); T2_2025.pdf; SOPA REL T1 2024 e Gabarito da P2 REL 2024 (formatos).",
    "competencia": "Sequenciar a revisão de véspera pelo retorno esperado, conforme o perfil de cobrança.",
    "erroProvavel": "Gastar a véspera em releitura linear em vez de recuperação ativa de listas fechadas.",
    "armadilha": "Gastar a véspera em releitura linear em vez de recuperação ativa de listas fechadas.",
    "tempoEstimadoMin": 3,
    "assinatura": [
      "obj",
      "N2",
      "reconhecimento aplicado — identificar o conceito em situação descrita",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "multipla",
    "enunciado": "Faltando poucas horas para a avaliação, qual protocolo de revisão tem maior retorno esperado, considerando o perfil de cobrança inferido do corpus?",
    "alternativas": [
      "Reler integralmente os seis decks, na ordem em que foram apresentados, para garantir cobertura completa.",
      "Recuperar primeiro as listas fechadas — art. 4º da CF/88, Objetivos Nacionais de Defesa, Capacidades Nacionais de Defesa, tarefas básicas do Poder Naval, elementos, funções e condicionantes do Poder Marítimo, imperativos dos quatro atores —, depois treinar os formatos de comando invertido e de asserção e razão, e por fim escrever uma resposta em seis movimentos cronometrada.",
      "Memorizar as datas de todos os eventos históricos dos seis módulos, uma vez que o detalhismo é classificado como alto.",
      "Resolver o maior número possível de questões de provas anteriores, reproduzindo seus gabaritos.",
      "Concentrar toda a revisão na parte brasileira, já que os três módulos iniciais somam mais conceitos que os três finais."
    ],
    "correta": 1,
    "comentario": "O protocolo segue o perfil de cobrança. Listas fechadas são o que se perde primeiro sob pressão e o que rende ponto direto, tanto em objetiva quanto como elemento exigido em discursiva — e a correção observada no corpus é por elementos faltantes (“faltou mencionar”). Formato vem em segundo porque neutralizar comando invertido e asserção e razão vale mais que um conceito extra. A resposta cronometrada vem por último porque integra tudo. Relê-se deck na ordem apresentada quando há tempo; na véspera, não há. E memorizar todas as datas contraria o próprio perfil: a memorização é média e SUBORDINADA à aplicação.",
    "explicacaoDistratores": [
      "Errada. Releitura linear é a atividade de menor retorno por minuto na véspera.",
      "Correta. Listas fechadas, depois formato, depois escrita cronometrada.",
      "Errada. O detalhismo é alto quanto a distinções conceituais, não quanto a datas isoladas; a memorização é subordinada à aplicação.",
      "Errada. Reproduzir gabarito antigo não treina aplicação inédita, que é o eixo mais alto do perfil.",
      "Errada. Número de conceitos não mede peso de prova, e a comparação entre os quatro atores exige os seis módulos."
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M99-COR-N2-006",
    "topico": "99-revisao-final",
    "dificuldade": "medio",
    "conceptIds": [
      "REL-T2-M01-C003",
      "REL-T2-M01-C004",
      "REL-T2-M01-C005",
      "REL-T2-M01-C010",
      "REL-T2-M01-C013",
      "REL-T2-M01-C016",
      "REL-T2-M01-C020"
    ],
    "fonte": "AULA 12.pdf, slides “Precedentes históricos — Colônia”, “PEB — Império – 1ª fase”, “PEB - Império - 2ª fase (1850~1889)”, “PEB - Política Externa Independente (1961~1964)” e “PEB - Governos pós-1985”; MAGNOLI, cap. 21, seção “Invenção da América Latina”.",
    "competencia": "Situar marcos da política externa brasileira no período correto, distinguindo fases próximas.",
    "erroProvavel": "Fundir as duas fases do Império, ou datar a aliança inglesa no século XIX.",
    "armadilha": "Fundir as duas fases do Império, ou datar a aliança inglesa no século XIX.",
    "tempoEstimadoMin": 8,
    "assinatura": [
      "cor",
      "N2",
      "reconhecimento aplicado — identificar o conceito em situação descrita",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "correlacione",
    "titulo": "Correlacione cada marco ao período da política externa brasileira a que pertence",
    "chaves": [
      {
        "chave": "A",
        "texto": "Colônia"
      },
      {
        "chave": "B",
        "texto": "Império — 1ª fase (1822-1850)"
      },
      {
        "chave": "C",
        "texto": "Império — 2ª fase (1850-1889)"
      },
      {
        "chave": "D",
        "texto": "Política Externa Independente (1961-1964)"
      },
      {
        "chave": "E",
        "texto": "Sarney, Collor e Itamar (transição)"
      },
      {
        "chave": "F",
        "texto": "Bolsonaro"
      }
    ],
    "itens": [
      {
        "texto": "Aliança com a Inglaterra desde o século XIV e ameaças de Espanha, França e Províncias Unidas sobre o Prata, o litoral e a Amazônia.",
        "chave": "A"
      },
      {
        "texto": "Reconhecimento do país, Guerra da Cisplatina e a proibição inglesa ao tráfico negreiro, com a Grã-Bretanha declinante e os EUA ascendentes.",
        "chave": "B"
      },
      {
        "texto": "Guerra do Paraguai, livre navegação no rio Amazonas e Questão Christie, com apoio norte-americano crescente a partir da década de 1870.",
        "chave": "C"
      },
      {
        "texto": "Ênfase nos três D — desarmamento, descolonização e desenvolvimento — e retomada das relações diplomáticas com a URSS.",
        "chave": "D"
      },
      {
        "texto": "ZOPACAS em 1986, reatamento com Cuba, distensão com a Argentina e, na sequência, Mercosul em 1991 e Rio 92.",
        "chave": "E"
      },
      {
        "texto": "Alinhamento valorativo durante o governo Trump e distanciamento cauteloso durante o governo Biden.",
        "chave": "F"
      },
      {
        "texto": "Cepal, Alalc pelo Tratado de Montevidéu de 1960 e sua substituição pela Aladi em 1980, com metas mais flexíveis.",
        "chave": "E"
      }
    ],
    "comentario": "A correlação organiza o módulo 01 por período e força a distinção entre marcos próximos. Três cuidados. O item da aliança inglesa vai para **A** porque o slide a data desde o século XIV, e não do século XIX. Os itens do Prata se dividem: Cisplatina e tráfico negreiro são da 1ª fase; Paraguai, Amazonas e Questão Christie, da 2ª. E o item de Cepal, Alalc e Aladi vai para **E** não por ser criação daquele período, mas porque é o legado institucional que a transição herda e reformula: o Mercosul de 1991 nasce justamente do reconhecimento do fracasso dessas tentativas anteriores, cujo mecanismo Magnoli identifica na ironia de que a ênfase generalizada em substituição de importações limitou o próprio comércio intrabloco.",
    "modalidades": [
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M99-COR-N2-007",
    "topico": "99-revisao-final",
    "dificuldade": "medio",
    "conceptIds": [
      "REL-T2-M03-C002",
      "REL-T2-M03-C004",
      "REL-T2-M03-C006",
      "REL-T2-M03-C015",
      "REL-T2-M03-C018",
      "REL-T2-M03-C021"
    ],
    "fonte": "AULA 14.pdf, slides “Política Naval” (fundamento, premissas e resultados), “Programa Fragata Classe Tamandaré” e “Mentalidade Marítima”; MORE, seções 2, 3 e 3.1 (fronteira integral de Martinez Busch e o deslocamento dos conflitos).",
    "competencia": "Atribuir cada enunciado ao documento institucional ou à leitura acadêmica correta.",
    "erroProvavel": "Atribuir conceito de leitura complementar a documento oficial da Marinha.",
    "armadilha": "Atribuir conceito de leitura complementar a documento oficial da Marinha.",
    "tempoEstimadoMin": 8,
    "assinatura": [
      "cor",
      "N2",
      "reconhecimento aplicado — identificar o conceito em situação descrita",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "correlacione",
    "titulo": "Correlacione cada enunciado ao documento, programa ou corrente a que pertence",
    "chaves": [
      {
        "chave": "A",
        "texto": "Política Naval — fundamento e premissas"
      },
      {
        "chave": "B",
        "texto": "Política Naval — resultados para a sociedade e processos"
      },
      {
        "chave": "C",
        "texto": "Programa Fragata Classe Tamandaré"
      },
      {
        "chave": "D",
        "texto": "Programa Mentalidade Marítima"
      },
      {
        "chave": "E",
        "texto": "Oceanopolítica (leitura complementar)"
      }
    ],
    "itens": [
      {
        "texto": "O eventual enfrentamento de antagonismos deve ocorrer de forma soberana, de acordo com os princípios e fundamentos constitucionais e as normas do Direito Internacional.",
        "chave": "A"
      },
      {
        "texto": "Prioridade ao relacionamento com os países detentores de maiores capacidades tecnológicas, e busca de maior representatividade em fóruns regionais, inter-regionais e globais.",
        "chave": "A"
      },
      {
        "texto": "Contribuir para a Defesa da Pátria, prover a Segurança Marítima, cooperar com o desenvolvimento nacional e apoiar a política externa; e, entre os processos, ampliar a consciência situacional marítima nas áreas de interesse.",
        "chave": "B"
      },
      {
        "texto": "Execução pela Emgepron com a SPE Águas Azuis, e construção das quatro embarcações da primeira fase no Estaleiro Brasil Sul, em Itajaí.",
        "chave": "C"
      },
      {
        "texto": "Atuação em três níveis: comunicação estratégica para avivar a consciência de que o Brasil começou pelo mar; promoção de pensamento estratégico marítimo autóctone junto a atores governamentais; e foco nos homens e mulheres do mar, núcleo maduro do Poder Marítimo.",
        "chave": "D"
      },
      {
        "texto": "Fronteira integral como linha permanente onde se chocam interesses opostos dos Estados, de modo que há tantas fronteiras quantos interesses — e quanto mais desenvolvido o Estado, mais fronteiras e mais poder exigido para mantê-las.",
        "chave": "E"
      },
      {
        "texto": "Deslocamento dos conflitos por recursos e espaços do plano terrestre para o plano oceânico, agravado pela assimetria no acesso ao conhecimento técnico-científico sobre os oceanos.",
        "chave": "E"
      }
    ],
    "comentario": "Duas distinções decidem a correlação. A primeira separa o **fundamento e as premissas** da Política Naval — como o país deve enfrentar antagonismos e com quem deve se relacionar — dos seus **resultados e processos**, que compõem o mapa estratégico da Marinha, paralelo ao Mapa Estratégico Setorial do Ministério da Defesa. A segunda separa o que é documento institucional brasileiro do que é **leitura acadêmica complementar**: fronteira integral e o deslocamento do conflito do plano terrestre para o oceânico são conceitos da linha oceanopolítica, não da Política Naval — e o erro de atribuí-los a documento oficial custa ponto em resposta discursiva, porque muda a autoridade invocada.",
    "modalidades": [
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M99-COR-N3-009",
    "topico": "99-revisao-final",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M99-C002",
      "REL-T2-M99-C004",
      "REL-T2-M04-C001",
      "REL-T2-M05-C001"
    ],
    "fonte": "AULA 14.pdf, slides “Economia Azul”, “SisGAAz” e “Programas Estratégicos”; AULA 15.pdf, mapas de formação geográfica e slides de estrutura de força naval; AULA 16.pdf, mapas de isoieta e topografia e slide “Mar do Sul da China - A2/AD”.",
    "competencia": "Preencher a matriz comparativa associando geografia e instrumento por ator.",
    "erroProvavel": "Comparar marinhas por número de meios em vez de por tarefa que a composição permite cumprir.",
    "armadilha": "Comparar marinhas por número de meios em vez de por tarefa que a composição permite cumprir.",
    "tempoEstimadoMin": 6,
    "assinatura": [
      "cor",
      "N3",
      "aplicação inédita — decidir em cenário novo com distratores próximos",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "correlacione",
    "titulo": "Correlacione cada condicionante geográfico ou instrumento marítimo ao ator a que corresponde",
    "chaves": [
      {
        "chave": "A",
        "texto": "Brasil"
      },
      {
        "chave": "B",
        "texto": "Estados Unidos"
      },
      {
        "chave": "C",
        "texto": "China"
      }
    ],
    "itens": [
      {
        "texto": "Bioceanidade e planícies centrais com rios navegáveis interligados por canais e eclusas, com vizinhos de poder muito inferior.",
        "chave": "B"
      },
      {
        "texto": "Litoral concentrando 80% da população e 90% do PIB, sem rival estatal de peso comparável no entorno imediato.",
        "chave": "A"
      },
      {
        "texto": "Linha de igual precipitação separando litoral rico de interior pobre, com zonas tampão de altitude e aridez, e litoral fechado por cadeias de ilhas.",
        "chave": "C"
      },
      {
        "texto": "Instrumento marítimo dominante: jurisdição e consciência situacional sobre área de dimensão continental, com sistema integrado de gerenciamento.",
        "chave": "A"
      },
      {
        "texto": "Instrumento marítimo dominante: negação regional por cadeias de ilhas, somada a corredores terrestres alternativos e a um programa global de infraestrutura.",
        "chave": "C"
      },
      {
        "texto": "Instrumento marítimo dominante: projeção global sustentada por rede de bases, canais interoceânicos e alianças que somam a maioria das grandes marinhas.",
        "chave": "B"
      }
    ],
    "comentario": "A matriz comparativa se resolve por uma pergunta só: **que tarefa a geografia permite e o instrumento cumpre?** O Brasil investe em JURISDIÇÃO, porque tem área imensa e nenhum rival próximo; os Estados Unidos, em PROJEÇÃO, porque têm acesso livre e aliados; a China, em NEGAÇÃO, porque tem acesso obstruído e precisa manter o adversário longe. Note a assimetria decisiva: Brasil e Estados Unidos têm acesso oceânico livre; a China, não — o litoral é fechado por cadeias de ilhas e as rotas dependem de um estreito controlável por terceiros.",
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M99-OBJ-N4-010",
    "topico": "99-revisao-final",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M99-C001",
      "REL-T2-M99-C007",
      "REL-T2-M06-C015"
    ],
    "fonte": "AULA 13.pdf, slide “Objetivos Nacionais de Defesa”; AULA 14.pdf, slide “Política Naval”; AULA 15.pdf, slide “EUA - Imperativo Estratégico”; AULA 16.pdf, slide “China - Imperativo Estratégico”; T2_2025.pdf, item 2 do trabalho.",
    "competencia": "Comparar imperativos por natureza e estrutura, declarando a assimetria relevante.",
    "erroProvavel": "Tratar todos os imperativos como expansionistas, ou igualar Brasil e China por priorizarem integridade territorial.",
    "armadilha": "Tratar todos os imperativos como expansionistas, ou igualar Brasil e China por priorizarem integridade territorial.",
    "tempoEstimadoMin": 5,
    "assinatura": [
      "obj",
      "N4",
      "integração — cruza módulos, arbitra entre leituras ou projeta consequência",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "multipla",
    "enunciado": "Ao comparar os imperativos estratégicos de Brasil, Estados Unidos e China, qual leitura é mais rigorosa?",
    "alternativas": [
      "Os três têm imperativos expansionistas, diferindo apenas na capacidade de realizá-los.",
      "Os imperativos diferem em NATUREZA e em ESTRUTURA, e não apenas em escala: os da China são de preservação e formam um trilema, porque a abertura de que a prosperidade depende alimenta a desigualdade que ameaça a unidade; os do Brasil são de preservação e inserção, e estão declarados em lista sem hierarquia entre si; os dos Estados Unidos são de manutenção de hegemonia, em sequência de quatro degraus cujo último tem objeto FORA do próprio hemisfério. Apenas o caso americano tem esse objeto extra-hemisférico.",
      "Os imperativos são incomparáveis, porque documentos de defesa brasileiros e slides sobre potências estrangeiras têm naturezas distintas.",
      "Os três se reduzem à busca de acesso ao mar, uma vez que todos são Estados com litoral.",
      "Os imperativos de Brasil e China são idênticos, pois ambos priorizam integridade territorial e desenvolvimento econômico."
    ],
    "correta": 1,
    "comentario": "Comparar não é ranquear: é isolar variáveis. E as variáveis que organizam esta comparação são a **natureza** (preservação, inserção ou manutenção de hegemonia) e a **estrutura** (lista sem hierarquia, trilema ou sequência). Dois dos três são de preservação; só os Estados Unidos têm imperativo cujo objeto está fora do hemisfério — evitar o surgimento de potência hegemônica na Eurásia. É essa assimetria, e não a diferença de capacidade, que torna a competição sistêmica desigual em natureza. A alternativa que iguala Brasil e China falha no essencial: o imperativo chinês é internamente contraditório por construção, enquanto o brasileiro é indeterminado por falta de hierarquia declarada — problemas diferentes, com soluções diferentes.",
    "explicacaoDistratores": [
      "Errada. Dois dos três são de preservação e inserção, não de expansão.",
      "Correta. Distingue natureza e estrutura, e identifica a assimetria do caso americano.",
      "Errada. A diferença de tipo documental exige cautela declarada, mas não impede a comparação — que é justamente o que o trabalho de T2 pede.",
      "Errada. Para os EUA o mar é instrumento; para a China é cerco a romper; para o Brasil é base econômica já disponível e a garantir.",
      "Errada. Trilema e lista sem hierarquia são estruturas distintas, com problemas distintos."
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M99-OBJ-N2-011",
    "topico": "99-revisao-final",
    "dificuldade": "medio",
    "conceptIds": [
      "REL-T2-M04-C002",
      "REL-T2-M05-C004",
      "REL-T2-M05-C009"
    ],
    "fonte": "AULA 15.pdf, mapa “Estados Unidos: expansão territorial”; AULA 16.pdf, slides das dinastias, “China recente” e mapas dos litígios; REL - T2.pdf, leitura dos mapas; fontes-manifesto.json, conflito CF-04.",
    "competencia": "Verificar precisão factual sobre formação territorial e litígios dos dois atores extrarregionais.",
    "erroProvavel": "Situar o platô de Doklam como litígio com Bangladesh e Aksai Chin com o Japão.",
    "armadilha": "Situar o platô de Doklam como litígio com Bangladesh e Aksai Chin com o Japão.",
    "tempoEstimadoMin": 4,
    "assinatura": [
      "obj",
      "N2",
      "reconhecimento aplicado — identificar o conceito em situação descrita",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito",
      "integração entre módulos 04 e 05"
    ],
    "tipo": "multipla",
    "enunciado": "Aponte a alternativa que contém apenas afirmações CORRETAS sobre a formação territorial e histórica dos dois atores extrarregionais estudados. **I.** A expansão norte-americana combinou compra, tratado e guerra, com a Louisiana adquirida da França em 1803 e o Alasca comprado da Rússia em 1867. **II.** A primeira dinastia chinesa com registro escrito e evidência arqueológica é a Shang, e a última dinastia imperial, a Qing, vai de 1644 a 1911. **III.** O platô de Doklam é litígio entre China e Bangladesh, e Aksai Chin é litígio entre China e Japão.",
    "alternativas": [
      "Apenas I.",
      "Apenas I e II.",
      "Apenas II e III.",
      "I, II e III.",
      "Apenas III."
    ],
    "correta": 1,
    "comentario": "O único item incorreto é o **III**, e ele contém dois erros. O platô de **Doklam** é litígio com o **Butão** — o próprio mapa do deck rotula *Bhutan* —, e **Aksai Chin** é litígio com a **Índia**, não com o Japão; com o Japão o litígio é o das ilhas **Diaoyu/Senkaku**. O erro de Doklam aparece em resumo de Aspirante em circulação e está registrado como conflito entre fontes resolvido em favor do slide. Os itens I e II reproduzem o corpus: a compra da Louisiana (1803) e do Alasca (1867) constam do mapa de expansão territorial, e a Shang como primeira dinastia com registro escrito e a Qing como última dinastia imperial (1644-1911) constam dos slides de dinastias.",
    "explicacaoDistratores": [
      "Errada. O item II também é correto.",
      "Correta. O item III é incorreto em dois pontos.",
      "Errada. O item III é incorreto.",
      "Errada. O item III é incorreto.",
      "Errada. O item III é o único incorreto."
    ],
    "modalidades": [
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M99-DIS-N3-012",
    "topico": "99-revisao-final",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M99-C008",
      "REL-T2-M06-C022",
      "REL-T2-M99-C007"
    ],
    "fonte": "T2_2025.pdf, itens 2 e 6 do trabalho (pesos 2,0 e 1,0); AULA 12.pdf, slides “PEB - Dilemas futuros” e “PEB - Governos pós-1985”; AULA 14.pdf, slides “Economia Azul” e “SisGAAz”; matriz-cobertura.json (matriz de dez passos).",
    "competencia": "Executar o roteiro do item de maior peso do trabalho de T2, com nação, fatores e prospecção.",
    "erroProvavel": "Descrever o país em vez de estruturar objetivos, condicionantes, fatores e instrumentos.",
    "armadilha": "Descrever o país em vez de estruturar objetivos, condicionantes, fatores e instrumentos.",
    "tempoEstimadoMin": 14,
    "assinatura": [
      "dis",
      "N3",
      "aplicação inédita — decidir em cenário novo com distratores próximos",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
    ],
    "tipo": "discursiva",
    "enunciado": "Caso a T2 seja cobrada no formato de trabalho de análise geopolítica, descreva o roteiro que você seguiria para o item de maior peso — três objetivos ou desafios geoceanopolíticos de uma nação, com fatores facilitadores e dificultadores, situação atual e perspectivas —, usando o Brasil como nação analisada.",
    "gabaritoComentado": "**Observação ao corretor.** Qualquer dos três atores do curso pontua integralmente. A resposta-modelo usa o **Brasil**, por ser o caso com base documental própria e por integrar os módulos 01 a 03. O que se avalia é o ROTEIRO e o nexo, não a escolha do país.\n\n**1. Selecionar três objetivos ou desafios, e não descrever o país.** Para o Brasil: (a) assegurar o uso do mar de que a economia depende; (b) manter o entorno sul-americano estável e sem coalizão hostil; (c) ampliar a inserção decisória sem alinhamento automático.\n\n**2. Para cada um, nomear o condicionante que o produz.** (a) Cerca de 8.500 km de litoral, com 80% da população e 90% do PIB nele concentrados, e mais de 95% do comércio exterior por via marítima. (b) Fronteira com dez vizinhos e bacias internacionais compartilhadas, com rios que atravessam fronteiras políticas. (c) Posição no hemisfério sul, distante dos principais polos de poder.\n\n**3. Separar facilitadores de dificultadores, sem misturá-los.** Facilitadores: jurisdição reconhecida sobre área extensa; ausência de rival estatal próximo; fronteiras estabilizadas desde a era Rio Branco; determinação constitucional de integração; trajetória de diversificação de parceiros. Dificultadores: dimensão da área a monitorar; orçamento de ciclo longo em disputa anual; regra de consenso que trava decisões no bloco regional; baixa continuidade estratégica entre governos; hemisfério tratado como zona de exclusão por potência extrarregional.\n\n**4. Nomear o instrumento de cada objetivo, com nome próprio.** SisGAAz e o complexo naval de uso múltiplo previsto para a foz do Amazonas; Mercosul, Unasul e cooperação em infraestrutura física; ZOPACAS, CPLP, diplomacia naval e a articulação declarada entre defesa e política externa.\n\n**5. Situação atual, nacional e internacional.** Nacional: programas estratégicos avançando em ritmo determinado pelo financiamento; Política Marítima Nacional reeditada em 2025. Internacional: competição sistêmica entre as duas maiores potências pressionando escolhas de parceria e de cadeia produtiva, inclusive em minerais críticos.\n\n**6. Prospecção com variável nomeada.** A variável que mais desloca o cenário é a **continuidade orçamentária**: sem ela, objetivo declarado não vira capacidade. A segunda é o grau de fechamento do hemisfério, que determina a margem de diversificação disponível.\n\n**7. Fechar em sumário executivo e declarar o limite.** Mecanismo, vulnerabilidade com instrumentos e limite, em três linhas — mais a ressalva de que o imperativo estratégico brasileiro é reconstrução a partir de documentos, e não enunciado de slide, e a data de corte da informação.\n\n**Insuficiente:** apresentar três objetivos sem condicionante nem fator. **Satisfatória:** apresenta os três com facilitadores e dificultadores. **Nível MB:** apresenta os três, separa nação de sistema, ancora cada projeção em uma variável nomeada e declara o limite da análise.",
    "criterios": [
      "Seleciona três objetivos ou desafios em vez de descrever o país (0,2)",
      "Nomeia o condicionante que produz cada objetivo (0,2)",
      "Separa facilitadores de dificultadores, sem misturar (0,2)",
      "Nomeia o instrumento de cada objetivo (0,2)",
      "Apresenta situação atual nacional E internacional e prospecção com variável nomeada (0,1)",
      "Fecha em sumário executivo e declara o limite da análise (0,1)",
      "Não pontua: narrar a história do país; listar programas sem vínculo com objetivo; omitir dificultadores"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "REL-T2-M99-OBJ-N3-013",
    "topico": "99-revisao-final",
    "dificuldade": "dificil",
    "conceptIds": [
      "REL-T2-M99-C003",
      "REL-T2-M99-C006",
      "REL-T2-M06-C015"
    ],
    "fonte": "AULA 14.pdf, slide “Economia Azul”; AULA 15.pdf, slide “Declínio?”; AULA 16.pdf, slides “China recente” e “Perspectiva Chinesa”; Geopolitical Futures (2019), perda da autossuficiência chinesa.",
    "competencia": "Comparar vulnerabilidades por natureza, e não por magnitude.",
    "erroProvavel": "Tratar a vulnerabilidade brasileira como externa e militar.",
    "armadilha": "Tratar a vulnerabilidade brasileira como externa e militar.",
    "tempoEstimadoMin": 5,
    "assinatura": [
      "obj",
      "N3",
      "aplicação inédita — decidir em cenário novo com distratores próximos",
      "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito",
      "integração entre os módulos 03, 04, 05 e 06"
    ],
    "tipo": "multipla",
    "enunciado": "Comparando as VULNERABILIDADES centrais de Brasil, Estados Unidos e China, qual leitura é mais rigorosa?",
    "alternativas": [
      "As três são da mesma natureza — dependência de comércio exterior —, e diferem apenas em magnitude.",
      "São de naturezas distintas: a brasileira é sobretudo INTERNA E INSTITUCIONAL, porque a dependência do mar para mais de 95% do comércio exterior convive com baixa prontidão, orçamento restrito e cultura de defesa pouco consolidada; a americana é de SUSTENTAÇÃO, porque o declínio relativo de participação econômica e a dependência do arco de alianças convivem com o desafio do antiacesso adversário; e a chinesa é de FLUXO, porque a prosperidade que financia a unidade depende de passagem por um estreito controlável por terceiros, somada à perda de autossuficiência em alimento e petróleo, à demografia e à desigualdade litoral-interior.",
      "A vulnerabilidade brasileira é externa e militar, decorrente da ameaça de invasão por vizinhos da América do Sul.",
      "A vulnerabilidade chinesa foi resolvida pelos corredores terrestres alternativos e pelo programa de infraestrutura global.",
      "A vulnerabilidade americana é irrelevante, porque a superioridade naval absoluta torna o declínio de participação econômica inconsequente."
    ],
    "correta": 1,
    "comentario": "A comparação só rende se separar **natureza** de **magnitude**. O caso brasileiro é o único em que o principal obstáculo está dentro de casa: não há ameaça estatal próxima, e o que falta é capacidade proporcional à dependência já existente. O americano é de sustentação: o problema não é ter poder, é manter compromissos simultâneos com participação econômica relativa menor. O chinês é de fluxo: tudo depende de manter aberto o que passa por um ponto de passagem obrigatória. Note as duas armadilhas: os corredores alternativos e o programa de infraestrutura **mudam a natureza** da vulnerabilidade chinesa — de marítima para terrestre e dependente de terceiros —, mas não a eliminam; e superioridade naval não neutraliza base econômica relativa, porque é ela que sustenta esquadra, indústria e inovação.",
    "explicacaoDistratores": [
      "Errada. Só o caso brasileiro tem a dependência comercial como eixo; os outros dois têm eixos distintos.",
      "Correta. Separa as três naturezas e nomeia a evidência de cada uma.",
      "Errada. O corpus registra ausência de rival estatal de peso comparável no entorno brasileiro.",
      "Errada. As alternativas mudam a natureza da vulnerabilidade, sem eliminá-la.",
      "Errada. Base econômica é condição de sustentação de esquadra, indústria e inovação."
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  }
];

export interface SimuladoCanonico { id: string; titulo: string; descricao: string; duracaoMinutos: number; pontos: number; itens?: number; blueprint?: Array<{ bloco: string; pontos: number; objetivo: string }>; rubrica?: string[]; questoes: Questao[] }

export const simuladosCanonicos: SimuladoCanonico[] = [
  {
    "id": "SG01",
    "titulo": "Simulado final — T2 de Relações Internacionais",
    "descricao": "Prova completa no formato inferido do corpus: 12 questões objetivas e 6 discursivas, com maioria de nível N3 e N4 e pelo menos quatro integrações entre módulos. Gabarito integralmente comentado, com critérios de correção por elementos exigidos.",
    "duracaoMinutos": 180,
    "pontos": 10,
    "itens": 18,
    "blueprint": [
      {
        "bloco": "Objetivas — arquitetura de defesa e poder marítimo (Q1, Q2, Q4, Q9, Q11)",
        "pontos": 2.0,
        "objetivo": "Verificar listas fechadas, definição de AJB, distinção Poder Marítimo/Poder Naval e a cadeia objetivo-capacidade-ação."
      },
      {
        "bloco": "Objetivas — política externa brasileira (Q3)",
        "pontos": 0.4,
        "objetivo": "Verificar a tipologia da autonomia com suas exceções."
      },
      {
        "bloco": "Objetivas — EUA, China e política externa aplicada (Q6, Q10, Q19)",
        "pontos": 1.2,
        "objetivo": "Verificar Taiwan, arbitragem entre lentes teóricas e a leitura do desenho institucional do entorno."
      },
      {
        "bloco": "Objetivas — integração entre módulos (Q5, Q8, Q12)",
        "pontos": 1.4,
        "objetivo": "Verificar a capacidade de cruzar módulos em asserção e razão, interação estratégica e cenários."
      },
      {
        "bloco": "Discursivas de cadeia e comparação (Q13, Q20)",
        "pontos": 2.0,
        "objetivo": "Verificar o percurso da cadeia de defesa e a matriz comparativa global com limites declarados."
      },
      {
        "bloco": "Discursivas de política externa e de trilema (Q15, Q16)",
        "pontos": 1.8,
        "objetivo": "Verificar comparação entre governos e demonstração de interdependência entre objetivos estratégicos."
      },
      {
        "bloco": "Discursivas de aplicação e arbitragem (Q17, Q18)",
        "pontos": 1.2,
        "objetivo": "Verificar aplicação da matriz de cenários a caso inédito e arbitragem explícita entre interpretações."
      }
    ],
    "rubrica": [
      "Correção por ELEMENTOS EXIGIDOS, com crédito parcial, conforme o padrão observado no corpus: a crítica é sempre “faltou mencionar X”.",
      "Discursiva sem nexo causal explícito não atinge o nível satisfatório, ainda que a conclusão esteja correta.",
      "Citar autor, documento ou artigo sem instrumentalizar o conceito não pontua.",
      "Em caso ambíguo, resposta única e sem contraponto não atinge o nível MB.",
      "Exemplo de conjuntura sem o conceito que ele ilumina, ou sem data de corte, não pontua.",
      "Formulações distintas da resposta-modelo pontuam integralmente quando conceitualmente defensáveis e sustentadas por evidência do corpus.",
      "A pontuação por bloco é a do blueprint; a soma é 10,0.",
      "PONTO DE INCERTEZA: não há prova escrita de T2 no corpus autorizado. A duração de 180 minutos e a distribuição entre objetivas e discursivas foram calibradas pelo padrão de P1 e P2 de 2024, em que o discursivo pesa mais que o objetivo. Se a T2 repetir o formato de trabalho em grupo de 2025, use as questões 20, 16 e 17 como ensaio dos itens de maior peso do trabalho."
    ],
    "questoes": [
      {
        "id": "REL-T2-SG01-OBJ-N2-001",
        "topico": "99-revisao-final",
        "dificuldade": "medio",
        "conceptIds": [
          "REL-T2-M02-C002",
          "REL-T2-M02-C011",
          "REL-T2-M03-C001"
        ],
        "fonte": "AULA 13.pdf, slides “Política Nacional de Defesa”, “Estratégia Nacional de Defesa (END)” e “Planejamento Estratégico Setorial de Defesa (PESD) 2020-2031”; REL - T2.pdf, distinção entre os documentos.",
        "competencia": "Atribuir a cada documento da arquitetura de defesa a sua função própria.",
        "erroProvavel": "Atribuir à END a definição dos objetivos de defesa.",
        "armadilha": "Atribuir à END a definição dos objetivos de defesa.",
        "tempoEstimadoMin": 3,
        "assinatura": [
          "obj",
          "N2",
          "reconhecimento aplicado — identificar o conceito em situação descrita",
          "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
        ],
        "tipo": "multipla",
        "enunciado": "Um oficial precisa indicar, para um documento interno, qual instrumento define os OBJETIVOS de defesa do país, qual ORIENTA os segmentos do Estado quanto às medidas para alcançá-los, qual os TRADUZ em ações e metas para cada Força e qual se dirige principalmente à sociedade e ao mundo. A sequência correta é:",
        "alternativas": [
          "END, PND, PESD e Livro Branco de Defesa Nacional.",
          "PND, END, PESD e Livro Branco de Defesa Nacional.",
          "Livro Branco de Defesa Nacional, PND, END e PESD.",
          "PND, PESD, END e Política Marítima Nacional.",
          "END, PESD, Política Naval e Livro Branco de Defesa Nacional."
        ],
        "correta": 1,
        "comentario": "A PND define os objetivos; a END orienta os segmentos do Estado quanto às medidas a implementar, sendo “o vínculo entre o posicionamento do País nas questões de Defesa e as ações necessárias para efetivamente dotar o Estado da capacidade para atender seus interesses”; o PESD, elaborado pelo Ministério da Defesa, traduz a END em ações concretas e metas para cada Força; e o Livro Branco de Defesa Nacional é documento voltado principalmente para a sociedade e para o mundo, explicando a organização e a estruturação da Defesa no Brasil. Trocar PND por END é o erro mais frequente do tema.",
        "explicacaoDistratores": [
          "Errada. Inverte PND e END nas duas primeiras posições.",
          "Correta. PND define, END orienta, PESD traduz em metas, Livro Branco comunica.",
          "Errada. O Livro Branco não define objetivos; ele comunica.",
          "Errada. Inverte END e PESD e substitui o Livro Branco pela Política Marítima Nacional.",
          "Errada. Omite a PND, que é justamente quem define os objetivos."
        ],
        "modalidades": [
          "rapido",
          "pra-safar",
          "completo"
        ]
      },
      {
        "id": "REL-T2-SG01-VF-N1-002",
        "topico": "99-revisao-final",
        "dificuldade": "facil",
        "conceptIds": [
          "REL-T2-M03-C003"
        ],
        "fonte": "AULA 14.pdf, slide “Política Naval” (entorno estratégico); REL - T1 - IM415, seção 6 (espaço oceanopolítico de Barbosa Jr.).",
        "competencia": "Recuperar a definição de entorno estratégico e distingui-la do espaço oceanopolítico.",
        "erroProvavel": "Omitir a Antártica ou a costa ocidental africana, ou confundir entorno com espaço oceanopolítico.",
        "armadilha": "Omitir a Antártica ou a costa ocidental africana, ou confundir entorno com espaço oceanopolítico.",
        "tempoEstimadoMin": 2,
        "assinatura": [
          "vf",
          "N1",
          "âncora — recuperação de lista fechada ou definição literal",
          "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
        ],
        "tipo": "vf",
        "afirmacao": "O entorno estratégico brasileiro, tal como definido na Política Naval, compreende a América do Sul, o Atlântico Sul, os países da costa ocidental africana e a Antártica.",
        "correta": true,
        "comentario": "**Verdadeira.** São exatamente os quatro itens do slide. Vale distinguir esse conceito de outro, mais amplo e de natureza acadêmica: o espaço oceanopolítico brasileiro proposto por Barbosa Jr., que alcança o Atlântico Norte até 18° de latitude norte, o mar do Caribe, a costa oeste da América do Sul, a Antártica e as costas oeste e leste da África até Moçambique. O primeiro é definição institucional; o segundo, proposta de análise.",
        "modalidades": [
          "rapido",
          "pra-safar",
          "completo"
        ]
      },
      {
        "id": "REL-T2-SG01-OBJ-N3-003",
        "topico": "99-revisao-final",
        "dificuldade": "dificil",
        "conceptIds": [
          "REL-T2-M01-C017",
          "REL-T2-M01-C011",
          "REL-T2-M01-C016"
        ],
        "fonte": "AULA 12.pdf, slides “Síntese tipológica”, “PEB - Governos civis-militares (1964~1985)” e “PEB - Governos pós-1985”.",
        "competencia": "Aplicar a tipologia com suas exceções e distinguir alinhamento valorativo de automático.",
        "erroProvavel": "Esquecer a exceção de Castello Branco e trocar os rótulos de FHC e Lula.",
        "armadilha": "Esquecer a exceção de Castello Branco e trocar os rótulos de FHC e Lula.",
        "tempoEstimadoMin": 4,
        "assinatura": [
          "obj",
          "N3",
          "aplicação inédita — decidir em cenário novo com distratores próximos",
          "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
        ],
        "tipo": "multipla",
        "enunciado": "Aponte a alternativa que contém apenas afirmações INCORRETAS sobre a tipologia da autonomia na política externa brasileira. **I.** O período de autonomia pela distância compreende a Política Externa Independente e os governos militares, sem exceções. **II.** O Pragmatismo Responsável incluiu o reconhecimento da República Popular da China e da independência de Angola, além da denúncia do tratado militar com os Estados Unidos. **III.** A autonomia pela participação designa o período Lula, marcado pela expansão preferencialmente Sul-Sul. **IV.** O alinhamento valorativo é categoria distinta do alinhamento automático, porque se ancora em afinidade entre governos e tende a cair com a alternância no parceiro.",
        "alternativas": [
          "I e II.",
          "I e III.",
          "II e IV.",
          "III e IV.",
          "I, III e IV."
        ],
        "correta": 1,
        "comentario": "As incorretas são **I** e **III**. O item I falha na exceção: o slide diz “PEI até Governos Militares (com exceção do período Castello)”, e Castello Branco é alinhamento automático. O item III troca os rótulos: autonomia pela participação é FHC; Lula é autonomia pela diversificação, com estratégia bifronte. Os itens II e IV são corretos — o Pragmatismo Responsável é do período Geisel e inclui exatamente essas decisões, e o alinhamento valorativo é a categoria que o slide reserva ao período Bolsonaro durante o governo Trump, distinta do alinhamento automático porque depende de afinidade de governo, e não de cálculo de bloco.",
        "explicacaoDistratores": [
          "Errada. O item II é correto.",
          "Correta. Apenas I e III são incorretos.",
          "Errada. Os dois itens são corretos.",
          "Errada. O item IV é correto.",
          "Errada. O item IV é correto."
        ],
        "modalidades": [
          "rapido",
          "pra-safar",
          "completo"
        ]
      },
      {
        "id": "REL-T2-SG01-OBJ-N3-004",
        "topico": "99-revisao-final",
        "dificuldade": "dificil",
        "conceptIds": [
          "REL-T2-M03-C007",
          "REL-T2-M03-C008",
          "REL-T2-M02-C009"
        ],
        "fonte": "AULA 14.pdf, slide “Funções do Poder Marítimo”; AULA 13.pdf, slides “Poder Naval (END)” (definição de AJB e tarefas básicas) e Estudo Dirigido (“Correlacione a defesa ribeirinha com o conceito de AJB”).",
        "competencia": "Identificar erros de atribuição entre listas próximas e de definição de AJB.",
        "erroProvavel": "Atribuir ao Poder Naval uma função do Poder Marítimo e excluir as águas interiores das AJB.",
        "armadilha": "Atribuir ao Poder Naval uma função do Poder Marítimo e excluir as águas interiores das AJB.",
        "tempoEstimadoMin": 4,
        "assinatura": [
          "obj",
          "N3",
          "aplicação inédita — decidir em cenário novo com distratores próximos",
          "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
        ],
        "tipo": "multipla",
        "enunciado": "Um Aspirante escreve: “A defesa ribeirinha é função do Poder Naval e alcança apenas os rios navegáveis, que estão fora das Águas Jurisdicionais Brasileiras.” Quantos erros essa frase contém e quais são?",
        "alternativas": [
          "Nenhum erro: a frase está correta em todos os seus elementos.",
          "Dois erros: a defesa marítima e ribeirinha é função do Poder MARÍTIMO, não do Poder Naval; e as águas interiores INTEGRAM as Águas Jurisdicionais Brasileiras por definição expressa.",
          "Um erro: a defesa ribeirinha é tarefa básica do Poder Naval, e não função do Poder Marítimo.",
          "Um erro: as águas interiores integram as AJB, mas a atribuição da função ao Poder Naval está correta.",
          "Três erros: além dos dois relativos a função e a AJB, a defesa ribeirinha não alcança rios navegáveis, e sim exclusivamente águas de estuário."
        ],
        "correta": 1,
        "comentario": "Dois erros. Primeiro, a atribuição: “defesa marítima e ribeirinha” é uma das quatro **funções do Poder Marítimo** — ao lado de intercomunicação, pesquisa e explotação —, e não uma das quatro **tarefas básicas do Poder Naval**, que são controle de área marítima, negação do uso do mar, projeção de poder sobre terra e contribuição para a dissuasão. Segundo, a definição de AJB começa justamente por “as águas interiores e os espaços marítimos”, de modo que dizer que os rios estão fora das AJB inverte o conceito. É esse duplo acerto que responde ao Estudo Dirigido que pede a correlação entre defesa ribeirinha e AJB: a função ribeirinha cobre precisamente a parte interior da jurisdição.",
        "explicacaoDistratores": [
          "Errada. Há dois erros identificáveis.",
          "Correta. Erro de atribuição funcional e erro de definição de AJB.",
          "Errada. Inverte a correção: a defesa marítima e ribeirinha é função do Poder Marítimo.",
          "Errada. A atribuição ao Poder Naval está incorreta.",
          "Errada. O terceiro erro apontado não existe: nada no corpus restringe a função a estuários."
        ],
        "modalidades": [
          "rapido",
          "pra-safar",
          "completo"
        ]
      },
      {
        "id": "REL-T2-SG01-OBJ-N4-005",
        "topico": "99-revisao-final",
        "dificuldade": "dificil",
        "conceptIds": [
          "REL-T2-M04-C009",
          "REL-T2-M01-C018",
          "REL-T2-M99-C005"
        ],
        "fonte": "AULA 15.pdf, slide “EUA - Imperativo Estratégico”; AULA 12.pdf, slides “PEB - Governos pós-1985 — Lula” e “PEB - Dilemas futuros”; HAESBAERT & SANTA BÁRBARA (2026), considerações finais.",
        "competencia": "Integrar dois módulos em julgamento de asserção e razão.",
        "erroProvavel": "Negar o nexo por tratar a presença de competidor na região como questão apenas comercial.",
        "armadilha": "Negar o nexo por tratar a presença de competidor na região como questão apenas comercial.",
        "tempoEstimadoMin": 5,
        "assinatura": [
          "obj",
          "N4",
          "integração — cruza módulos, arbitra entre leituras ou projeta consequência",
          "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito",
          "integração entre módulos 01 e 04"
        ],
        "tipo": "multipla",
        "enunciado": "Avalie as asserções, que integram conteúdos dos módulos de Estados Unidos e de Política Externa Brasileira. **I.** A reativação de um princípio de exclusão de potências extra-hemisféricas eleva o custo, para o Brasil, de sustentar uma política externa de autonomia pela diversificação. **PORQUE** **II.** O imperativo estratégico norte-americano inclui a hegemonia sobre a América do Sul e o Caribe como degrau necessário à sua projeção global, de modo que a presença de um competidor sistêmico na região é tratada como problema de segurança, e não apenas de comércio. Assinale a alternativa CORRETA.",
        "alternativas": [
          "As asserções I e II são verdadeiras, e a II é uma justificativa da I.",
          "As asserções I e II são verdadeiras, mas a II não é uma justificativa da I.",
          "A asserção I é verdadeira, e a II é falsa.",
          "A asserção I é falsa, e a II é verdadeira.",
          "As asserções I e II são falsas."
        ],
        "correta": 0,
        "comentario": "As duas são verdadeiras e há nexo causal direto. A asserção II reproduz o segundo degrau do imperativo estratégico americano, tal como o slide o apresenta: América do Norte, depois América do Sul e Caribe, depois os oceanos das duas costas, e por fim evitar hegemon na Eurásia. Se a região é tratada como pré-requisito de segurança, a presença de competidor sistêmico deixa de ser questão comercial e passa a ser questão de segurança — e é isso que encarece, para o Brasil, diversificar parceiros. A asserção I decorre da II: a autonomia pela diversificação supõe liberdade de escolher parceiros a custo baixo; quando o custo sobe, o dilema interesses × meios se aperta. Note que a diferença em relação à pegadinha clássica é que aqui NÃO se afirma explicação “completa”: afirma-se justificativa, e a justificativa existe.",
        "explicacaoDistratores": [
          "Correta. Há nexo causal: o tratamento da região como problema de segurança encarece a diversificação.",
          "Errada. O nexo existe e é direto.",
          "Errada. A asserção II é a formulação do próprio slide do imperativo americano.",
          "Errada. A asserção I decorre logicamente da II.",
          "Errada. Ambas são verdadeiras."
        ],
        "modalidades": [
          "rapido",
          "pra-safar",
          "completo"
        ]
      },
      {
        "id": "REL-T2-SG01-OBJ-N3-006",
        "topico": "99-revisao-final",
        "dificuldade": "dificil",
        "conceptIds": [
          "REL-T2-M05-C010",
          "REL-T2-M05-C003"
        ],
        "fonte": "IDEG, “Taiwan e as Nações Unidas”; AULA 16.pdf, slide “China recente”; REL - T2.pdf, entrada da RPC no CSNU em 1971.",
        "competencia": "Distinguir ausência de membresia plena de isolamento institucional.",
        "erroProvavel": "Concluir isolamento completo a partir da não admissão como membro pleno da ONU.",
        "armadilha": "Concluir isolamento completo a partir da não admissão como membro pleno da ONU.",
        "tempoEstimadoMin": 4,
        "assinatura": [
          "obj",
          "N3",
          "aplicação inédita — decidir em cenário novo com distratores próximos",
          "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
        ],
        "tipo": "multipla",
        "enunciado": "Aponte a alternativa INCORRETA sobre a questão de Taiwan.",
        "alternativas": [
          "O governo nacionalista de Chiang Kai-shek refugiou-se na ilha em 1949, mantendo a denominação de República da China, enquanto o Partido Comunista Chinês proclamou a República Popular da China no continente.",
          "A República Popular da China passou a ocupar o assento chinês no Conselho de Segurança da ONU em 1971, no contexto da aproximação com os Estados Unidos e do isolamento diplomático do governo de Taipei.",
          "A questão de Taiwan articula-se diretamente ao primeiro imperativo estratégico chinês, que é manter a integridade territorial.",
          "Por não ser membro pleno da ONU, Taiwan está impedida de participar de qualquer organização internacional, o que a mantém em isolamento econômico e institucional completo.",
          "A liderança global da ilha na produção de semicondutores constitui, ao mesmo tempo, vulnerabilidade e fator de proteção, no que se descreve como escudo de silício."
        ],
        "correta": 3,
        "comentario": "A alternativa incorreta confunde ausência de membresia plena na ONU com isolamento completo. Taiwan ingressou na Organização Mundial do Comércio em 2002, sob a denominação “Território Aduaneiro Separado de Taiwan, Penghu, Kinmen e Matsu”, e participa da Cooperação Econômica Ásia-Pacífico como economia-membro, ambas sob o nome Chinese Taipei. É o que se chama participação seletiva e funcional: a ilha atua em fóruns internacionais sob termos específicos. A admissão como membro pleno da ONU, sim, enfrenta obstáculo estrutural, porque exige recomendação do Conselho de Segurança, em que a República Popular da China tem poder de veto.",
        "explicacaoDistratores": [
          "Correta e verdadeira. É a descrição do corpus.",
          "Correta e verdadeira. A entrada em 1971 está registrada no corpus.",
          "Correta e verdadeira. Integridade territorial é o primeiro imperativo chinês.",
          "INCORRETA — resposta da questão. Taiwan participa da OMC e da APEC como Chinese Taipei.",
          "Correta e verdadeira. É a definição de escudo de silício."
        ],
        "modalidades": [
          "rapido",
          "pra-safar",
          "completo"
        ]
      },
      {
        "id": "REL-T2-SG01-OBJ-N4-008",
        "topico": "99-revisao-final",
        "dificuldade": "dificil",
        "conceptIds": [
          "REL-T2-M05-C012",
          "REL-T2-M04-C011",
          "REL-T2-M99-C004"
        ],
        "fonte": "AULA 16.pdf, slide “Mar do Sul da China - A2/AD”; AULA 15.pdf, slides “A2/AD - Anti-access/Area Denial” e “Previsão sobre a dimensão da Marinha dos EUA”; REL - T2.pdf, definições de A2 e AD; CRS RL32665, sumário executivo.",
        "competencia": "Ler medida e contramedida como interação estratégica entre dois atores.",
        "erroProvavel": "Igualar as duas estratégias por ambas envolverem aumento de plataformas.",
        "armadilha": "Igualar as duas estratégias por ambas envolverem aumento de plataformas.",
        "tempoEstimadoMin": 5,
        "assinatura": [
          "obj",
          "N4",
          "integração — cruza módulos, arbitra entre leituras ou projeta consequência",
          "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito",
          "integração entre módulos 04 e 05"
        ],
        "tipo": "multipla",
        "enunciado": "Integrando os módulos de China e de Estados Unidos: se um ator investe em mísseis balísticos de longo alcance, submarinos em posições selecionadas, mísseis antinavio e interferência eletrônica ao longo de uma cadeia de ilhas, e o ator adversário responde alterando a composição da frota para menor proporção de navios grandes, maior proporção de pequenos e um terceiro elemento de grandes veículos não tripulados, qual é a leitura correta da interação?",
        "alternativas": [
          "Ambos os atores adotaram a mesma estratégia, uma vez que os dois ampliaram o número de plataformas.",
          "O primeiro ator busca negação regional — manter o adversário fora de uma área definida e dificultar sua ação caso entre — e o segundo responde por dispersão, reduzindo o valor de cada alvo e multiplicando os problemas que o primeiro precisa resolver; trata-se de uma interação estratégica em que a medida de um explica a contramedida do outro.",
          "O segundo ator abandonou a projeção de poder global, porque plataformas menores têm alcance reduzido.",
          "O primeiro ator busca projeção de poder global, e o segundo, defesa costeira.",
          "A interação não pode ser analisada, porque as duas decisões pertencem a domínios distintos: uma é de armamento e a outra é de construção naval."
        ],
        "correta": 1,
        "comentario": "É a questão de integração mais direta entre os dois módulos. O antiacesso e a negação de área constituem estratégia de **negação regional**: manter o adversário fora, com alcance longo, e dificultar sua ação depois que entrou, com alcance curto. A resposta do adversário é doutrinária antes de ser material: se concentrar capacidade em poucas plataformas de alto valor oferece alvos rentáveis, dispersá-la em mais plataformas, menores e em parte não tripuladas, reduz a perda por vetor atingido e obriga o oponente a resolver muitos problemas ao mesmo tempo. Note que nenhum dos dois atores abandonou seu objetivo: um continua querendo negar a área, o outro continua querendo operar nela. Mudaram os meios, não os fins — e é exatamente isso que a matriz comparativa registra ao classificar o instrumento chinês como negação e o americano como projeção.",
        "explicacaoDistratores": [
          "Errada. Ampliar plataformas não iguala estratégias: as funções são opostas, negação e projeção.",
          "Correta. Negação regional de um lado, dispersão como contramedida do outro, com fins inalterados.",
          "Errada. A arquitetura mantém porta-aviões, submarinos e combatentes de superfície; o objetivo segue sendo operar longe.",
          "Errada. Inverte os papéis dos dois atores.",
          "Errada. A análise da interação estratégica é precisamente o objeto da disciplina."
        ],
        "modalidades": [
          "rapido",
          "pra-safar",
          "completo"
        ]
      },
      {
        "id": "REL-T2-SG01-OBJ-N3-009",
        "topico": "99-revisao-final",
        "dificuldade": "dificil",
        "conceptIds": [
          "REL-T2-M03-C011",
          "REL-T2-M03-C020",
          "REL-T2-M03-C005"
        ],
        "fonte": "AULA 14.pdf, slides “Política Naval” (intensificação de disputas) e “PEM 2040 - Conceito Estratégico Marítimo-Naval”; MORE, seção 3 (deslocamento do plano terrestre para o oceânico e a redução da Área); P1 REL 2024, questão 15 (mesmo objeto conceitual, com estímulo e comando distintos).",
        "competencia": "Encadear pressão material, disputa jurídica e deslocamento conceitual do combate no mar para o combate pelo mar.",
        "erroProvavel": "Ler a escassez de recursos como fator de redução, e não de intensificação, da disputa marítima.",
        "armadilha": "Ler a escassez de recursos como fator de redução, e não de intensificação, da disputa marítima.",
        "tempoEstimadoMin": 4,
        "assinatura": [
          "obj",
          "N3",
          "aplicação inédita — decidir em cenário novo com distratores próximos",
          "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
        ],
        "tipo": "multipla",
        "enunciado": "A projeção de exaustão de recursos minerais críticos ao longo das próximas décadas é apresentada como fator de pressão sobre o ambiente marítimo. Qual encadeamento liga corretamente esse fator ao Conceito Estratégico Marítimo-Naval do PEM 2040?",
        "alternativas": [
          "Escassez de minerais → redução do comércio marítimo → menor necessidade de controle de área marítima → prevalência do Combate no Mar sobre o Combate pelo Mar.",
          "Escassez de minerais → valorização do leito e do subsolo marinhos → intensificação das disputas por áreas marítimas e por reivindicação de plataforma continental → deslocamento do problema do plano das batalhas navais para o plano da soberania e do controle multidomínio, isto é, do Combate no Mar para o Combate pelo Mar.",
          "Escassez de minerais → aumento da pesca ilegal → prioridade absoluta à função de pesquisa do Poder Marítimo → irrelevância da defesa marítima.",
          "Escassez de minerais → substituição integral por materiais sintéticos → esvaziamento da Economia Azul → redução das ameaças listadas no PEM 2040.",
          "Escassez de minerais → concentração de reservas em países desenvolvidos → transferência das disputas para o plano exclusivamente jurídico, sem componente estratégico."
        ],
        "correta": 1,
        "comentario": "O encadeamento correto é o que o corpus sustenta em três pontos. A Política Naval registra que a intensificação de disputas por áreas marítimas, água doce, alimentos, recursos minerais, biodiversidade e energia respalda a necessidade de fortalecer o Poder Naval. A oceanopolítica registra que a teoria do poder marítimo pode ser revisitada porque o conflito se desloca das rotas — que continuam importantíssimas — para os recursos do solo e do subsolo marinhos, e que ampliar a plataforma continental além das 200 milhas reduz a Área, espaço comum da humanidade, o que é potencialmente gerador de conflito. E o PEM 2040 formaliza o deslocamento conceitual: o Combate pelo Mar tem foco estratégico e geopolítico, ligado à soberania e ao controle por meio dos espaços aéreo, cibernético, espacial, marítimo e subaquático — e não à batalha naval em um espaço delimitado.",
        "explicacaoDistratores": [
          "Errada. Inverte a direção: escassez aumenta, não reduz, a disputa por espaço marítimo.",
          "Correta. Valorização do leito e do subsolo, disputa por plataforma e deslocamento conceitual.",
          "Errada. Prioridade absoluta a uma função e irrelevância de outra não se sustentam no corpus.",
          "Errada. Nada no corpus sustenta substituição integral por sintéticos.",
          "Errada. A disputa jurídica sobre plataforma continental tem componente estratégico explícito."
        ],
        "modalidades": [
          "rapido",
          "pra-safar",
          "completo"
        ]
      },
      {
        "id": "REL-T2-SG01-OBJ-N3-010",
        "topico": "99-revisao-final",
        "dificuldade": "dificil",
        "conceptIds": [
          "REL-T2-M00-C005",
          "REL-T2-M00-C006",
          "REL-T2-M00-C008",
          "REL-T2-M04-C007"
        ],
        "fonte": "AULA 15.pdf, slides “Hegemonia Mundial”, “2. Liberais” e “1. Realismo”; REL - T2.pdf, seção sobre o liberalismo como forma de política externa (GATT 1947, ONU, FMI, Banco Mundial e BIRD).",
        "competencia": "Arbitrar entre leituras concorrentes de um arranjo institucional histórico, declarando o critério.",
        "erroProvavel": "Classificar por automatismo, seja por presença de instituição, seja por identidade do criador.",
        "armadilha": "Classificar por automatismo, seja por presença de instituição, seja por identidade do criador.",
        "tempoEstimadoMin": 5,
        "assinatura": [
          "obj",
          "N3",
          "aplicação inédita — decidir em cenário novo com distratores próximos",
          "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
        ],
        "tipo": "multipla",
        "enunciado": "Um Estado hegemônico cria, no pós-guerra, um conjunto de instituições de comércio, finanças e segurança coletiva, financia a reconstrução de economias aliadas com juros baixos e assistência técnica, e promove regimes políticos semelhantes ao seu. Qual análise é mais rigorosa?",
        "alternativas": [
          "A ação é inequivocamente liberal, porque instituições multilaterais, livre comércio e promoção da democracia são as características da lente liberal.",
          "A ação é inequivocamente realista, porque toda criação institucional por hegemon é instrumento de poder.",
          "O caso admite as duas leituras, e a análise rigorosa identifica que a forma é liberal — instituições que reduzem incerteza e ampliam ganhos mútuos — enquanto o efeito inclui a codificação de regras favoráveis a quem as escreveu e a produção de alinhamento; a escolha entre as leituras depende de o enunciado destacar o funcionamento das regras ou a sua distribuição de vantagem.",
          "O caso é construtivista, porque a promoção de regimes semelhantes revela a difusão de uma identidade e de valores.",
          "O caso não admite análise teórica, porque instituições de segurança coletiva e de comércio pertencem a campos distintos."
        ],
        "correta": 2,
        "comentario": "Esta é a clínica institucional do curso aplicada ao caso histórico mais importante. As instituições de Bretton Woods e do sistema comercial do pós-guerra são o exemplo canônico de arranjo que sustenta as duas leituras: elas de fato reduziram incerteza e ampliaram ganhos — leitura liberal —, e de fato codificaram regras vantajosas para quem as escreveu e produziram alinhamento — leitura realista. O erro que a questão pune é o automatismo nas duas direções: nem “tem instituição, logo é liberal”, nem “foi criado por hegemon, logo é instrumento”. A regra do curso é que a classificação segue o aspecto destacado pelo enunciado, e a resposta de nível superior é a que diz QUAL aspecto decidiria. Há ainda uma leitura construtivista defensável na difusão de valores, mas ela não cobre o conjunto do caso.",
        "explicacaoDistratores": [
          "Errada. Automatismo por palavra-chave: presença de instituição é pista, não prova.",
          "Errada. Generalização inválida, e o próprio slide trata o liberalismo como pedra de toque da política externa americana.",
          "Correta. Identifica a ambiguidade e o critério de arbitragem.",
          "Errada. A difusão de valores é um aspecto do caso, e não o que explica o conjunto de comércio, finanças e segurança.",
          "Errada. Analisar arranjos que combinam campos é justamente o objeto da disciplina."
        ],
        "modalidades": [
          "rapido",
          "pra-safar",
          "completo"
        ]
      },
      {
        "id": "REL-T2-SG01-OBJ-N2-011",
        "topico": "99-revisao-final",
        "dificuldade": "medio",
        "conceptIds": [
          "REL-T2-M02-C010",
          "REL-T2-M03-C014",
          "REL-T2-M03-C012"
        ],
        "fonte": "AULA 13.pdf, slides “SETORES ESTRATÉGICOS DA DEFESA NACIONAL” e “Responsabilidade pelos Setores Estratégicos”; AULA 14.pdf, slides “Programas Estratégicos” e “Construção do Núcleo do Poder Naval”; REL - T2.pdf, as duas frentes do PNM.",
        "competencia": "Atribuir corretamente setores estratégicos e situar o PNM na hierarquia dos programas.",
        "erroProvavel": "Atribuir armamento nuclear ao PNM ou subordiná-lo à Construção do Núcleo do Poder Naval.",
        "armadilha": "Atribuir armamento nuclear ao PNM ou subordiná-lo à Construção do Núcleo do Poder Naval.",
        "tempoEstimadoMin": 3,
        "assinatura": [
          "obj",
          "N2",
          "reconhecimento aplicado — identificar o conceito em situação descrita",
          "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
        ],
        "tipo": "multipla",
        "enunciado": "Sobre o setor nuclear e o Programa Nuclear da Marinha, assinale a alternativa CORRETA.",
        "alternativas": [
          "O setor nuclear é responsabilidade do Exército, ao qual também cabe o setor cibernético, enquanto a Marinha responde pelo setor espacial.",
          "O setor nuclear é responsabilidade da Marinha, e o Programa Nuclear da Marinha tem duas frentes: o protótipo de reator do submarino de propulsão nuclear e o domínio da tecnologia do ciclo do combustível nuclear.",
          "O setor nuclear é responsabilidade da Marinha e o Programa Nuclear da Marinha destina-se ao desenvolvimento de armamento nuclear embarcado, o que a END autoriza expressamente.",
          "Os três setores estratégicos — nuclear, cibernético e espacial — são de responsabilidade conjunta das três Forças, sem atribuição individualizada.",
          "O Programa Nuclear da Marinha é um dos programas de Construção do Núcleo do Poder Naval, ao lado do PROSUB, do PCT, do PROHIDRO e do PROADSUMUS."
        ],
        "correta": 1,
        "comentario": "A atribuição é individualizada: Marinha responde pelo setor **nuclear**, Exército pelo **cibernético** e Força Aérea pelo **espacial**. O Programa Nuclear da Marinha tem duas frentes declaradas — protótipo de reator do submarino de propulsão nuclear e domínio do ciclo do combustível —, nenhuma delas de armamento. Note a última alternativa, que erra por um detalhe de hierarquia: o PNM é programa estratégico **autônomo**, listado ao lado de Pessoal, Construção do Núcleo do Poder Naval, OCOP, SisGAAz, Ampliação da Capacidade de Apoio Logístico e Mentalidade Marítima; quem reúne PROSUB, PCT, PROHIDRO e PROADSUMUS é a Construção do Núcleo do Poder Naval.",
        "explicacaoDistratores": [
          "Errada. Troca as três atribuições.",
          "Correta. Setor nuclear na Marinha e as duas frentes do PNM.",
          "Errada. O programa é de propulsão e de ciclo do combustível; não há autorização para armamento.",
          "Errada. A atribuição é individualizada por Força.",
          "Errada. O PNM é programa estratégico autônomo; os quatro citados integram a Construção do Núcleo do Poder Naval."
        ],
        "modalidades": [
          "rapido",
          "pra-safar",
          "completo"
        ]
      },
      {
        "id": "REL-T2-SG01-OBJ-N4-012",
        "topico": "99-revisao-final",
        "dificuldade": "dificil",
        "conceptIds": [
          "REL-T2-M04-C013",
          "REL-T2-M05-C016",
          "REL-T2-M99-C007"
        ],
        "fonte": "AULA 15.pdf, slides “Cenários”, “Cenários para o Leste e Sudeste Asiáticos” (Cria Cuervos, Casa sem dono, Concerto Asiático, Império do Meio II); REL - T2.pdf, analogia do Afeganistão e a negação do vácuo de poder.",
        "competencia": "Identificar o cenário correspondente a uma combinação de forças-motrizes e extrair a advertência analítica.",
        "erroProvavel": "Supor que arco de alianças forte é sempre favorável aos Estados Unidos.",
        "armadilha": "Supor que arco de alianças forte é sempre favorável aos Estados Unidos.",
        "tempoEstimadoMin": 5,
        "assinatura": [
          "obj",
          "N4",
          "integração — cruza módulos, arbitra entre leituras ou projeta consequência",
          "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito",
          "integração entre módulos 04 e 05"
        ],
        "tipo": "multipla",
        "enunciado": "Considere a hipótese: a economia chinesa desacelera de forma prolongada e, simultaneamente, o arco de alianças construído pelos Estados Unidos na Ásia permanece robusto. Qual conjunto de consequências é mais consistente com o cenário correspondente, e qual é a advertência analítica pertinente?",
        "alternativas": [
          "A China estabeleceria uma ordem sinocêntrica com países recalcitrantes, e a advertência é que Japão, Índia e Rússia resistiriam às imposições.",
          "Haveria dificuldade chinesa em sustentar projetos de expansão e tensões internas, com perda de capacidade de se impor na região; aliados asiáticos deixariam de ver necessidade da presença ostensiva americana e poderiam desenvolver políticas nacionalistas contrárias aos interesses dos Estados Unidos. A advertência é contraintuitiva: arco forte somado a China fraca não é necessariamente favorável a Washington, e o precedente invocado em aula é o do Afeganistão dos anos 1980, em que combatentes financiados pelos Estados Unidos, após a derrota soviética, fundaram a Al-Qaeda e atacaram os próprios Estados Unidos.",
          "As potências asiáticas se engalfinhariam pela hegemonia regional em um vácuo de poder, e a advertência é que vácuos de poder são estáveis por definição.",
          "Configurar-se-ia um equilíbrio semelhante ao Concerto Europeu do século XIX, e a advertência é que esse equilíbrio é estável no longo prazo.",
          "Nada mudaria em relação ao presente, porque a desaceleração econômica não afeta a capacidade militar já construída."
        ],
        "correta": 1,
        "comentario": "O cenário é **Cria Cuervos** e é o mais contraintuitivo dos quatro, razão pela qual é o mais cobrável. A combinação de China enfraquecida com arco robusto produz um resultado adverso a quem construiu o arco: aliados que não percebem mais a ameaça deixam de valorizar a proteção e desenvolvem agenda própria. A analogia registrada em aula é precisa e vale como mecanismo, não como ornamento: no lugar do arco anti-China, os combatentes muçulmanos no Afeganistão; no lugar da China, a União Soviética em declínio econômico; resultado, derrota soviética e, depois, o ataque de 11 de setembro por forças antes financiadas pelos Estados Unidos. As demais alternativas descrevem outros quadrantes — Império do Meio II, Casa sem Dono e Concerto Asiático — e duas delas invertem advertências explícitas do corpus: em aula se afirma que NÃO existe vácuo de poder, porque alguém buscará a hegemonia, e que o Concerto Asiático é equilíbrio INSTÁVEL, cujo desdobramento pode ser conflito.",
        "explicacaoDistratores": [
          "Errada. Descreve Império do Meio II, que pressupõe China forte e arco frágil.",
          "Correta. Descreve Cria Cuervos, com a advertência contraintuitiva e o precedente afegão.",
          "Errada. Descreve Casa sem Dono e inverte a advertência: o corpus nega a existência de vácuo de poder.",
          "Errada. Descreve Concerto Asiático e inverte a advertência: o corpus o qualifica como equilíbrio instável.",
          "Errada. A desaceleração afeta sustentação de projetos e coesão interna, que são variáveis do cenário."
        ],
        "modalidades": [
          "rapido",
          "pra-safar",
          "completo"
        ]
      },
      {
        "id": "REL-T2-SG01-OBJ-N3-019",
        "topico": "99-revisao-final",
        "dificuldade": "dificil",
        "conceptIds": [
          "REL-T2-M06-C017",
          "REL-T2-M06-C021",
          "REL-T2-M01-C012"
        ],
        "fonte": "AULA 12.pdf, slide “PEB - Constituição de 1988”; Estudo Dirigido 2 da Aula 13; MAGNOLI, cap. 21, seção “Do Mercosul à Unasul” (Ouro Preto, Ushuaia, adesão venezuelana).",
        "competencia": "Separar fundamento normativo de cálculo pragmático e ler a regra de decisão como explicação do ritmo.",
        "erroProvavel": "Reduzir a razão institucional à pragmática, ou ignorar o efeito da regra de consenso.",
        "armadilha": "Reduzir a razão institucional à pragmática, ou ignorar o efeito da regra de consenso.",
        "tempoEstimadoMin": 4,
        "assinatura": [
          "obj",
          "N3",
          "aplicação inédita — decidir em cenário novo com distratores próximos",
          "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito",
          "integração entre módulos 01 e 06"
        ],
        "tipo": "multipla",
        "enunciado": "Um Estado sul-americano justifica sua política de integração regional invocando, ao mesmo tempo, uma determinação do seu texto constitucional e um cálculo de poder de negociação coletivo, mas participa de um bloco cujos órgãos decisórios são compostos por representantes dos Estados e agem apenas por consenso. Qual análise é mais rigorosa?",
        "alternativas": [
          "As duas justificativas são equivalentes, uma vez que toda norma constitucional decorre de cálculo de interesse.",
          "As justificativas são de naturezas distintas — uma normativa, ancorada na determinação do parágrafo único do art. 4º, e outra pragmática, de estabilizar o entorno e reforçar poder de negociação — e o desenho intergovernamental por consenso é o que explica o descompasso entre o compromisso declarado e o ritmo efetivo da integração: a soberania fica protegida e a velocidade passa a ser a do membro mais relutante.",
          "O desenho por consenso acelera a integração, porque evita disputas judiciais entre os membros sobre decisões majoritárias.",
          "A determinação constitucional torna a integração obrigatória em resultado, e não apenas em esforço, o que dispensa a análise do desenho institucional.",
          "Como o bloco não é supranacional, a justificativa normativa é irrelevante e apenas o cálculo de poder importa."
        ],
        "correta": 1,
        "comentario": "A questão cruza os módulos 01 e 06 e cobra a distinção que o Estudo Dirigido pede: razão **institucional** e razão **pragmática** são de naturezas diferentes, e reduzir uma à outra perde metade da resposta. O terceiro elemento é o que a maioria ignora: **regra de decisão**. Órgãos intergovernamentais que decidem por consenso protegem soberania e, pelo mesmo mecanismo, permitem que qualquer membro trave a decisão — daí o descompasso entre compromisso declarado e ritmo real. Note ainda a precisão exigida: a determinação de buscar a integração está no **parágrafo único** do art. 4º, não entre os dez princípios do caput; e determinação constitucional obriga a **esforço**, não garante **resultado**.",
        "explicacaoDistratores": [
          "Errada. Uma justificativa é normativa e a outra é de cálculo; equipará-las apaga a distinção que o Estudo Dirigido cobra.",
          "Correta. Separa as duas naturezas e identifica a regra de decisão como explicação do ritmo.",
          "Errada. Consenso protege soberania e reduz velocidade; não acelera harmonização.",
          "Errada. A determinação obriga a esforço, e o desenho institucional continua decisivo para o resultado.",
          "Errada. A justificativa normativa é precisamente o fundamento que o corpus pede que se nomeie."
        ],
        "modalidades": [
          "rapido",
          "pra-safar",
          "completo"
        ]
      },
      {
        "id": "REL-T2-SG01-DIS-N3-013",
        "topico": "99-revisao-final",
        "dificuldade": "dificil",
        "conceptIds": [
          "REL-T2-M02-C014",
          "REL-T2-M03-C016",
          "REL-T2-M03-C019",
          "REL-T2-M02-C009"
        ],
        "fonte": "AULA 14.pdf, slides “SisGAAz” e “Programas Estratégicos”; AULA 13.pdf, slides “Capacidades Nacionais de Defesa (CND)”, “Poder Naval (END)” e “Objetivos Nacionais de Defesa”.",
        "competencia": "Percorrer a cadeia ação-capacidade-tarefa-objetivo explicando o nexo de cada degrau.",
        "erroProvavel": "Saltar da ação ao objetivo sem nomear capacidade e tarefa.",
        "armadilha": "Saltar da ação ao objetivo sem nomear capacidade e tarefa.",
        "tempoEstimadoMin": 12,
        "assinatura": [
          "dis",
          "N3",
          "aplicação inédita — decidir em cenário novo com distratores próximos",
          "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
        ],
        "tipo": "discursiva",
        "enunciado": "Parta do SisGAAz e remonte a cadeia até um Objetivo Nacional de Defesa, passando pela capacidade construída e pela tarefa básica do Poder Naval envolvida. Explique o nexo em cada degrau.",
        "gabaritoComentado": "**Tese.** O SisGAAz é a ação; ele constrói gestão da informação e pronta-resposta; habilita o controle de área marítima; e serve ao objetivo de garantir a soberania, o patrimônio nacional e a integridade territorial.\n\n**Degrau 1 — ação.** O Sistema de Gerenciamento da Amazônia Azul tem por objetivo monitorar e controlar, de forma integrada, as Águas Jurisdicionais Brasileiras e as áreas internacionais de responsabilidade para operações de Socorro e Salvamento, a fim de agilizar o ciclo decisório e assegurar capacidade de pronta resposta a qualquer ameaça, emergência, agressão ou ilegalidade. É um dos sete Programas Estratégicos da Marinha e integra AIS, LRIT, VTS, radar, satélite e demais sistemas.\n\n**Degrau 2 — capacidades.** Entre as nove Capacidades Nacionais de Defesa, o SisGAAz constrói diretamente **gestão da informação** e **pronta-resposta**, e contribui para **coordenação e controle**. O nexo está no objetivo declarado do próprio sistema: agilizar o ciclo decisório é, por definição, gestão da informação convertida em tempo de decisão.\n\n**Degrau 3 — tarefa básica.** A tarefa habilitada é **controle de área marítima**. O nexo é de precedência: não se controla o que não se conhece. A END determina que o monitoramento do mar, inclusive a partir do espaço, integre o repertório de práticas e capacitações operacionais — e é essa determinação que o SisGAAz materializa. Sem consciência situacional, a jurisdição sobre a Amazônia Azul é apenas nominal.\n\n**Degrau 4 — objetivo.** O objetivo servido é garantir a soberania, o patrimônio nacional e a integridade territorial. O nexo: as AJB compreendem as águas interiores e os espaços marítimos em que o Brasil exerce jurisdição, em algum grau, inclusive as águas sobrejacentes à plataforma continental estendida onde ela ocorrer; exercer jurisdição sem capacidade de detectar, identificar e responder é abdicar de soberania na prática. Pode-se acrescentar o objetivo de salvaguardar pessoas, bens, recursos e interesses nacionais, dado o componente de socorro e salvamento.\n\n**Nuance obrigatória.** O alcance do sistema é MAIOR que a Amazônia Azul: ele cobre também áreas internacionais de responsabilidade SAR, que estão fora das AJB. Isso significa que uma parte da sua função não é de jurisdição, e sim de responsabilidade internacional assumida — o que liga o programa ao objetivo de contribuir para a estabilidade regional e para a paz e a segurança internacionais, e ao apoio à política externa previsto no PESD.\n\n**Conclusão.** A cadeia se sustenta porque cada degrau é condição do seguinte: sem sistema não há informação, sem informação não há decisão em tempo útil, sem decisão não há controle, e sem controle a soberania declarada não se exerce.\n\n**Insuficiente:** dizer que o SisGAAz protege a Amazônia Azul e garante a soberania — salta dois degraus. **Satisfatória:** percorre os quatro degraus. **Nível MB:** percorre os quatro degraus explicando o nexo de cada um e registra a nuance do alcance SAR.",
        "criterios": [
          "Descreve o SisGAAz com seu objetivo declarado (0,15)",
          "Nomeia ao menos duas Capacidades Nacionais de Defesa construídas (0,2)",
          "Nomeia a tarefa básica do Poder Naval e explica o nexo de precedência (0,25)",
          "Nomeia o Objetivo Nacional de Defesa e explica o nexo com a definição de AJB (0,25)",
          "Registra a nuance do alcance para áreas SAR internacionais (0,15)",
          "Não pontua: saltar degraus; confundir capacidade com tarefa básica"
        ],
        "modalidades": [
          "rapido",
          "pra-safar",
          "completo"
        ]
      },
      {
        "id": "REL-T2-SG01-DIS-N3-015",
        "topico": "99-revisao-final",
        "dificuldade": "dificil",
        "conceptIds": [
          "REL-T2-M01-C008",
          "REL-T2-M01-C014",
          "REL-T2-M01-C015",
          "REL-T2-M01-C017"
        ],
        "fonte": "AULA 12.pdf, slides “PEB - Governos pós-1985” (FHC e Lula) e “Síntese tipológica”; AULA 13.pdf, slide “Objetivos Nacionais de Defesa”; P1 REL 2024, questão 18 e Correção da SOPA da P1 (padrão de correção e o erro literal a evitar).",
        "competencia": "Comparar dois governos por método e objetivo, e fundamentar a reivindicação comum sobre o CSNU.",
        "erroProvavel": "Descrever FHC como aproximação com os Estados Unidos.",
        "armadilha": "Descrever FHC como aproximação com os Estados Unidos.",
        "tempoEstimadoMin": 18,
        "assinatura": [
          "dis",
          "N3",
          "aplicação inédita — decidir em cenário novo com distratores próximos",
          "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
        ],
        "tipo": "discursiva",
        "enunciado": "Discorra sobre continuidades e descontinuidades da política externa brasileira entre os governos FHC e Lula e indique o posicionamento comum dos dois governos quanto à estruturação do ente de maior poder geopolítico no âmbito da ONU, apresentando os argumentos que o sustentam.",
        "gabaritoComentado": "**Tese.** Há continuidade no objetivo de ampliar a inserção internacional do Brasil e descontinuidade no método: participação e integração multilateral em FHC, diversificação preferencialmente Sul-Sul em Lula.\n\n**Descontinuidades.** FHC é caracterizado como **autonomia pela participação e integração**: busca de reinserção mais ativa no sistema econômico internacional e nos organismos internacionais, com abertura da economia; assinatura do TNP e do Regime de Controle de Tecnologia de Mísseis; visão kantiana das relações internacionais nos anos 1990. Lula é caracterizado como **autonomia pela diversificação**: expansão preferencialmente Sul-Sul, abertura de diversas embaixadas, IBAS, Unasul e BRICS, em estratégia **bifronte** entre América Latina e resto do mundo. O método difere: o primeiro busca autonomia participando das regras existentes; o segundo, multiplicando parceiros.\n\n**Continuidades.** Ambos perseguem maior peso decisório internacional, e ambos operam sobre a mesma base de princípios: os do art. 4º da Constituição, herdeiros de Rio Branco — não-intervenção, autodeterminação, solução pacífica dos conflitos. A CPLP, criada em 1996 sob FHC, e a Unasul, de 2008 sob Lula, são instrumentos distintos do mesmo esforço de densificar o entorno. E nenhum dos dois converteu participação em subordinação: FHC rejeitou a ALCA na Cúpula das Américas em Quebec, em 2001.\n\n**Posicionamento comum quanto à ONU.** O ente de maior poder geopolítico no âmbito da ONU é o **Conselho de Segurança**. Os dois governos reivindicaram assento permanente para o Brasil e maior representatividade do órgão.\n\n**Argumentos que sustentam o posicionamento.** (1) O Conselho está centrado nas potências vencedoras da Segunda Guerra Mundial e não reflete a geopolítica do século XXI. (2) Países em desenvolvimento deveriam ocupar assentos permanentes, sob pena de o órgão decidir sobre regiões que não têm voz nele. (3) No caso brasileiro, há credencial específica: trajetória de solução pacífica de litígios desde Rio Branco, princípios constitucionais de não-intervenção e de defesa da paz, e contribuição efetiva em operações internacionais. (4) Há também argumento de coerência interna aos documentos de defesa: um dos Objetivos Nacionais de Defesa é incrementar a projeção do Brasil no concerto das Nações e sua inserção em processos decisórios internacionais — ou seja, a reivindicação não é apenas diplomática, é objetivo de Estado inscrito na política de defesa.\n\n**Nuance.** Há tensão a registrar: FHC assinou TNP e Regime de Controle de Tecnologia de Mísseis, isto é, aceitou restrições em tecnologias sensíveis, ao mesmo tempo que se reivindicava maior peso decisório. A leitura favorável é que a adesão credencia; a leitura crítica é que ela reduz a margem de barganha. O reconhecimento dessa tensão distingue a resposta de nível superior.\n\n**Conclusão.** Entre FHC e Lula muda a estratégia de inserção, não o objetivo; e o ponto em que a continuidade é mais visível é justamente o mais estrutural: a reivindicação de reforma do Conselho de Segurança, sustentada em argumento de representatividade e ancorada, no plano interno, em objetivo expresso da política de defesa.\n\n**Insuficiente:** dizer que FHC se aproximou dos EUA e Lula se afastou — erro corrigido literalmente no corpus. **Satisfatória:** apresenta rótulos corretos e identifica o Conselho de Segurança. **Nível MB:** apresenta rótulos, continuidades e descontinuidades, identifica o Conselho de Segurança, apresenta ao menos três argumentos e registra a tensão do TNP.",
        "criterios": [
          "Apresenta os rótulos corretos de FHC e Lula, sem descrevê-los como aproximação/afastamento em relação aos EUA (0,2)",
          "Apresenta pelo menos duas descontinuidades de método com evidência (0,2)",
          "Apresenta pelo menos duas continuidades (0,15)",
          "Identifica o Conselho de Segurança como o ente de maior poder geopolítico da ONU (0,15)",
          "Apresenta pelo menos dois argumentos que sustentam a reivindicação comum (0,2)",
          "Registra a tensão entre adesão a regimes restritivos e reivindicação de peso decisório (0,1)",
          "Não pontua: descrever FHC como aproximação com os EUA; não identificar o Conselho de Segurança"
        ],
        "modalidades": [
          "rapido",
          "pra-safar",
          "completo"
        ]
      },
      {
        "id": "REL-T2-SG01-DIS-N4-016",
        "topico": "99-revisao-final",
        "dificuldade": "dificil",
        "conceptIds": [
          "REL-T2-M05-C002",
          "REL-T2-M05-C003",
          "REL-T2-M05-C013",
          "REL-T2-M05-C009"
        ],
        "fonte": "AULA 16.pdf, slides “China - Dupla Tensão Histórica”, “China - Imperativo Estratégico”, “Perspectiva Chinesa”, “Mar do Sul da China - A2/AD”, “China recente” e “Investimentos no Exterior e One Belt, One Road”; REL - T2.pdf, seções correspondentes; Geopolitical Futures, “The Third Opium War”.",
        "competencia": "Demonstrar interdependência entre objetivos estratégicos e avaliar a sustentabilidade da solução.",
        "erroProvavel": "Tratar os três itens do imperativo chinês como objetivos independentes.",
        "armadilha": "Tratar os três itens do imperativo chinês como objetivos independentes.",
        "tempoEstimadoMin": 20,
        "assinatura": [
          "dis",
          "N4",
          "integração — cruza módulos, arbitra entre leituras ou projeta consequência",
          "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"
        ],
        "tipo": "discursiva",
        "enunciado": "Explique por que o imperativo estratégico chinês constitui um trilema, e não uma lista de três objetivos independentes. Relacione o trilema a uma vulnerabilidade contemporânea concreta e conclua sobre a sustentabilidade da solução adotada.",
        "gabaritoComentado": "**Tese.** Os três itens do imperativo chinês são mutuamente condicionados: satisfazer plenamente dois deles tende a comprometer o terceiro. É por isso que constituem um trilema, e não uma lista.\n\n**Os três itens.** (1) Manter a integridade territorial. (2) Evitar desigualdades significativas dentro do território, para não fomentar desafios ao poder político centralizado. (3) Manter abertura ao exterior para garantir prosperidade econômica, sem permitir a desagregação interna.\n\n**O mecanismo do trilema.** A abertura ao exterior gera prosperidade, mas a prosperidade se concentra no litoral, porque o comércio marítimo chinês sempre foi maior que o terrestre. A concentração gera desigualdade litoral-interior, que pressiona Beijing a redistribuir; redistribuir exige taxar as elites litorâneas, o que gera tensão política; a resposta histórica é centralizar, retirando autonomia do litoral e fechando o regime; e o fechamento reduz a geração de riqueza, comprometendo o próprio objetivo (3). O corpus registra o ciclo em Ming, em Qing e no governo de Mao, e é explícito quanto ao dilema: não dá para deixar fechado o tempo todo, porque o país empobrece, nem aberto o tempo todo, porque a desagregação e a desigualdade aumentam.\n\n**Vulnerabilidade contemporânea.** O Estreito de Málaca. A abertura que sustenta a prosperidade depende de fluxos que passam, em sua maior parte, por um único ponto de passagem obrigatória vigiado por marinhas de aliados de uma potência rival. E a vulnerabilidade se agravou por uma mudança estrutural: a China, historicamente autossuficiente, hoje importa alimento e petróleo, e a projeção é de crescimento dessas importações. A perspectiva registrada em aula é de um país que se vê “engaiolado” pela presença de bases americanas em Japão, Coreia do Sul, Filipinas e Taiwan. Ou seja: o item (3) do imperativo é hoje o mais exposto — e é justamente o que financia a satisfação dos itens (1) e (2).\n\n**Soluções adotadas e sua natureza.** Três instrumentos: corredores terrestres alternativos com apoio de Mianmar e Bangladesh; investimento na possibilidade do Canal de Kra, na Tailândia; e a iniciativa Um Cinturão, Uma Rota, com ramos terrestre e marítimo, financiada majoritariamente com capital chinês. No plano militar, o antiacesso e a negação de área ao longo da Primeira Cadeia de Ilhas buscam afastar quem poderia interditar os fluxos.\n\n**Sustentabilidade.** Limitada, por três razões. Primeira: os instrumentos substituem a dependência de um estreito vigiado pela dependência da estabilidade e da anuência de países anfitriões — a vulnerabilidade muda de natureza, de geográfica para política, e se dispersa entre mais atores. Segunda: a própria projeção externa gera reação, e a reação é o arco de alianças que fecha o litoral, o que realimenta o problema; a Índia, por exemplo, opõe-se explicitamente, porque o canal aumentaria a influência chinesa em áreas onde ela projeta poder. Terceira: o trilema tem agora um agravante demográfico e de custos — a política do filho único, de 1979 a 2015, reduz a população economicamente ativa e eleva custos previdenciários, enquanto a alta de salários encareceu o custo trabalhista e deslocou empresas para Vietnã, Camboja e Laos, o que pressiona o item (3) por dentro, e não por fora.\n\n**Conclusão.** A solução chinesa é mitigatória, não resolutiva: ela reduz a exposição a um ponto de estrangulamento sem eliminar a estrutura do trilema, porque não altera o fato de que a prosperidade que sustenta a coesão depende de fluxos que a China não controla — e, no sentido de Mahan, controlar linhas de comunicação marítimas exige capacidade que ela ainda não possui em escala global.\n\n**Insuficiente:** listar os três itens do imperativo. **Satisfatória:** explica o trilema e cita Málaca. **Nível MB:** explica o mecanismo do trilema, liga a Málaca com a perda de autossuficiência, nomeia os instrumentos e conclui pela sustentabilidade limitada com três razões.",
        "criterios": [
          "Enuncia corretamente os três itens do imperativo chinês (0,15)",
          "Explica o mecanismo do trilema, com o ciclo abertura-desigualdade-centralização-fechamento (0,25)",
          "Relaciona a uma vulnerabilidade contemporânea, registrando a perda de autossuficiência (0,2)",
          "Nomeia pelo menos dois instrumentos adotados (0,15)",
          "Conclui sobre a sustentabilidade com pelo menos duas razões (0,25)",
          "Não pontua: listar os três itens como objetivos independentes; concluir sem avaliar sustentabilidade"
        ],
        "modalidades": [
          "rapido",
          "pra-safar",
          "completo"
        ]
      },
      {
        "id": "REL-T2-SG01-DIS-N3-017",
        "topico": "99-revisao-final",
        "dificuldade": "dificil",
        "conceptIds": [
          "REL-T2-M00-C003",
          "REL-T2-M00-C011",
          "REL-T2-M00-C010",
          "REL-T2-M04-C010"
        ],
        "fonte": "SOPA REL T1 2024, questão 5 (distinção entre interoperabilidade interna e externa e âmbito multidomínio — conceito, com enunciado e comando distintos); T2_2025.pdf, item 5 do trabalho (operações de interoperabilidade externa); AULA 13.pdf, “Capacidades Nacionais de Defesa (CND)” e “PESD — Missão”; AULA 14.pdf, “Política Naval” e “PEM 2040 - Conceito Estratégico Marítimo-Naval”.",
        "competencia": "Aplicar a matriz de cenários a um instrumento de cooperação militar e avaliar seu custo diplomático.",
        "erroProvavel": "Tratar exercício conjunto como assunto apenas militar, sem dimensão diplomática.",
        "armadilha": "Tratar exercício conjunto como assunto apenas militar, sem dimensão diplomática.",
        "tempoEstimadoMin": 16,
        "assinatura": [
          "dis",
          "N3",
          "aplicação inédita — decidir em cenário novo com distratores próximos",
          "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito",
          "integração entre módulos 00, 02, 03 e 04"
        ],
        "tipo": "discursiva",
        "enunciado": "Analise a participação nesses exercícios pela matriz de cenários, identificando objetivo, instrumento e a capacidade construída, e explique por que a interoperabilidade externa é relevante para um Estado com esse perfil.",
        "gabaritoComentado": "**Ator e objetivo.** Ator: Estado costeiro de porte médio. Objetivos: assegurar o uso do mar de que sua economia depende; ampliar a densidade do seu entorno estratégico; e sustentar apoio à política externa por meio militar.\n\n**Condicionantes.** Litoral extenso e dependência de exportação marítima; ausência de rival estatal próximo de peso comparável, o que reduz o incentivo interno a investir em defesa; e restrições de financiamento — fator condicionante do Poder Marítimo expressamente listado.\n\n**Instrumento.** Exercício conjunto multinacional é instrumento **militar e diplomático simultaneamente**: militar porque produz capacidade; diplomático porque sinaliza alinhamento, constrói confiança e dá densidade a arranjos regionais. Note que os três exercícios servem a propósitos distintos: com a potência global, acesso a padrões, doutrina e tecnologia; no arranjo de língua comum, adensamento do entorno estratégico; com a costa oposta, afirmação do oceano compartilhado como espaço de cooperação — o que, no caso brasileiro, corresponde ao pressuposto da PND de manter o Atlântico Sul como Zona de Paz e Cooperação.\n\n**Capacidade construída.** Interoperabilidade externa, isto é, a capacidade de integração entre forças de países diferentes — distinta da interoperabilidade interna, que é a integração entre as forças de um mesmo país. Entre as Capacidades Nacionais de Defesa, a participação constrói principalmente **coordenação e controle**, **mobilidade estratégica** e **logística**, e contribui para **gestão da informação**.\n\n**Por que é relevante para esse perfil.** Quatro razões. (1) Raramente uma batalha será ganha com o emprego de apenas uma força ou, em conflito de maior escala, sem alianças táticas ou estratégicas — de modo que um Estado que não exercita com outros não opera com outros quando precisa. (2) O ambiente é multidomínio: terrestre, marítimo, aéreo, cibernético e espacial, e nenhum Estado de porte médio cobre sozinho todos os domínios. (3) Para um Estado com restrição de financiamento, exercitar é a forma mais barata de adquirir doutrina e padrão: a capacidade se constrói sem aquisição de meios. (4) O exercício é apoio à política externa, objetivo expresso tanto no texto da missão do PESD quanto na perspectiva Sociedade do Mapa Estratégico Setorial e entre os resultados da Política Naval — é diplomacia naval no sentido do Conceito Estratégico Marítimo-Naval do PEM 2040.\n\n**Lente teórica.** Predomina leitura liberal-institucional se o que se destaca é a construção de confiança e o adensamento de arranjos regionais; predomina leitura realista se o que se destaca é o ganho de capacidade diante de disputa crescente por recursos marítimos. As duas são defensáveis, e a escolha depende do aspecto destacado.\n\n**Contraponto.** Há custo: exercitar com uma potência global sinaliza alinhamento e pode ser lido por terceiros como escolha de lado, reduzindo a margem de uma política externa de diversificação. Participar dos três, e não de um só, é precisamente a forma de mitigar esse custo.\n\n**Conclusão.** A participação constrói interoperabilidade externa e serve simultaneamente a objetivo econômico, de defesa e de política externa; para um Estado de porte médio com restrição orçamentária, é o instrumento de melhor relação entre capacidade adquirida e recurso empregado — desde que a distribuição entre parceiros preserve a margem de manobra diplomática.\n\n**Insuficiente:** dizer que exercícios conjuntos melhoram o treinamento. **Satisfatória:** percorre objetivo, instrumento e capacidade. **Nível MB:** percorre a matriz, distingue interoperabilidade externa de interna, dá quatro razões, escolhe lente e registra o custo.",
        "criterios": [
          "Identifica objetivos ligados a economia, entorno e política externa (0,2)",
          "Trata o exercício conjunto como instrumento militar E diplomático, diferenciando os três exercícios (0,2)",
          "Nomeia a interoperabilidade externa e a distingue da interna (0,2)",
          "Nomeia ao menos duas Capacidades Nacionais de Defesa construídas (0,15)",
          "Escolhe a lente teórica e registra o custo diplomático da escolha (0,25)",
          "Não pontua: tratar exercício conjunto como assunto exclusivamente militar; confundir interoperabilidade interna com externa"
        ],
        "contexto": "Um Estado de porte médio, com litoral extenso e dependência de exportações por via marítima, participa em um mesmo ano de três exercícios navais multinacionais: um com a marinha de uma potência global, um no âmbito de um arranjo regional de países de língua comum e um terceiro com países da costa oposta do oceano que banha seu litoral.",
        "modalidades": [
          "rapido",
          "pra-safar",
          "completo"
        ]
      },
      {
        "id": "REL-T2-SG01-DIS-N4-018",
        "topico": "99-revisao-final",
        "dificuldade": "dificil",
        "conceptIds": [
          "REL-T2-M00-C009",
          "REL-T2-M00-C010",
          "REL-T2-M99-C007",
          "REL-T2-M04-C015"
        ],
        "fonte": "AULA 15.pdf, slides “1. Realismo”, “2. Liberais”, “3. Construtivismo” e “Hegemonia Mundial”; LOVATT (ECFR, 23/01/2026), desenho institucional do arranjo (fonte com posição declarada); matriz-cobertura.json (clínica de caso ambíguo do Módulo 00).",
        "competencia": "Arbitrar entre interpretações concorrentes enunciando o critério e reconhecendo o valor da leitura vencida.",
        "erroProvavel": "Escolher uma leitura sem enunciar o critério de arbitragem.",
        "armadilha": "Escolher uma leitura sem enunciar o critério de arbitragem.",
        "tempoEstimadoMin": 20,
        "assinatura": [
          "dis",
          "N4",
          "integração — cruza módulos, arbitra entre leituras ou projeta consequência",
          "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito",
          "integração entre módulos 00 e 04"
        ],
        "tipo": "discursiva",
        "enunciado": "Escolha a leitura mais defensável, justifique por evidência, reconheça o que a leitura concorrente explica melhor e enuncie o critério geral que você usou para arbitrar. Sua resposta será avaliada pelo critério, e não pela escolha.",
        "gabaritoComentado": "**Observação ao corretor.** As duas escolhas pontuam integralmente se sustentadas. O que se avalia é a explicitação do critério de arbitragem, a ancoragem em evidência e o reconhecimento do que a leitura concorrente explica melhor.\n\n**Tese.** A segunda leitura é mais defensável para explicar o FUNCIONAMENTO do arranjo, e a primeira explica melhor a sua FORMA e a sua justificativa pública.\n\n**Critério geral de arbitragem — enunciado antes de aplicar.** Uma instituição sustenta leitura liberal-institucional quando a regra que ela cria **restringe também quem a criou** e quando reduz incerteza de forma simétrica para os participantes. Sustenta leitura de instrumento de poder quando a autoridade é assimétrica, quando a permanência dos participantes depende da vontade de um deles e quando a influência é função de recurso, e não de regra.\n\n**Aplicação ao caso — evidência.** Três elementos do desenho apontam para a segunda leitura: a autoridade emana da presidência, o que significa que a regra não a restringe; os mandatos são renováveis a critério dessa presidência, o que torna a permanência precária e reduz o incentivo à discordância; e a influência acompanha o aporte financeiro, o que substitui igualdade formal por hierarquia material. Nenhum dos três é compatível com a definição de instituição que reduz incerteza simetricamente.\n\n**O que a leitura concorrente explica melhor.** Três coisas. (1) A FORMA: há órgão, carta, membros, mandatos e orçamento — é institucionalização real, não retórica, e a existência da forma produz efeitos, inclusive de legitimação. (2) A ORIGEM: o arranjo nasce de um ato dentro do sistema existente, e não fora dele. (3) A ADESÃO: Estados aderem voluntariamente, o que indica que percebem ganho — e a lente liberal explica adesão por expectativa de benefício melhor do que a lente realista explicaria por coerção pura. Registre-se ainda que instituições criadas por potências hegemônicas produziram, historicamente, bens públicos reais: a arquitetura do pós-guerra reduziu incerteza comercial e financiou reconstrução, ainda que codificando regras vantajosas para quem as escreveu.\n\n**Nuance metodológica.** Classificação não é atributo do fato, e sim do aspecto destacado — o mesmo arranjo é liberal na forma e instrumento no funcionamento, e é por isso que perguntas sobre casos como esse não têm resposta única. O erro a evitar é o automatismo nas duas direções: nem “tem instituição, logo é liberal”, nem “foi criado por potência, logo é instrumento”. Deve-se registrar também que as análises disponíveis sobre arranjos recentes frequentemente provêm de fontes com posição declarada, o que obriga a identificá-las como interpretação e a datar a informação.\n\n**Conclusão.** A leitura de instrumento de poder explica melhor o caso porque o critério de arbitragem — a regra restringe quem a criou? — é respondido negativamente nos três elementos do desenho. A leitura institucional permanece necessária para explicar por que o arranjo existe na forma em que existe e por que outros Estados aderem, e desprezá-la empobreceria a análise.\n\n**Insuficiente:** escolher uma leitura e repetir os argumentos do enunciado. **Satisfatória:** escolhe, justifica por evidência e menciona a leitura concorrente. **Nível MB:** enuncia o critério ANTES de aplicar, ancora nos três elementos do desenho, diz o que a concorrente explica melhor, registra a nuance de que classificação depende do aspecto e adverte sobre a natureza posicionada das fontes.",
        "criterios": [
          "Enuncia o critério geral de arbitragem antes de aplicá-lo ao caso (0,25)",
          "Escolhe uma leitura e a ancora em evidência específica do desenho institucional (0,2)",
          "Reconhece pelo menos duas coisas que a leitura concorrente explica melhor (0,2)",
          "Registra que a classificação depende do aspecto destacado, e não do fato (0,2)",
          "Adverte sobre a natureza posicionada das fontes e a necessidade de datar informação de conjuntura (0,15)",
          "Não pontua: escolher sem critério explícito; tratar o caso como tendo resposta única e óbvia; reproduzir o enunciado"
        ],
        "contexto": "Duas leituras circulam sobre um mesmo arranjo internacional recém-criado. A primeira sustenta que se trata de um mecanismo de cooperação mais ágil que as instituições existentes, capaz de produzir resultados onde elas falharam. A segunda sustenta que se trata de instrumento de poder de uma potência, uma vez que a autoridade se concentra em sua presidência, os mandatos dos membros são renováveis a critério dela e a influência acompanha o aporte financeiro.",
        "modalidades": [
          "rapido",
          "pra-safar",
          "completo"
        ]
      },
      {
        "id": "REL-T2-SG01-DIS-N4-020",
        "topico": "99-revisao-final",
        "dificuldade": "dificil",
        "conceptIds": [
          "REL-T2-M99-C001",
          "REL-T2-M99-C002",
          "REL-T2-M99-C003",
          "REL-T2-M99-C007"
        ],
        "fonte": "AULA 13.pdf, slide “Objetivos Nacionais de Defesa”; AULA 14.pdf, slides “Política Naval” e “Economia Azul”; AULA 15.pdf, slides “EUA - Imperativo Estratégico” e “Declínio?”; AULA 16.pdf, slides “China - Imperativo Estratégico”, “Dupla Tensão Histórica” e “China recente”; matriz-cobertura.json (linhas da comparação global).",
        "competencia": "Produzir a comparação global em três linhas, com arbitragem por aspecto e limites declarados.",
        "erroProvavel": "Descrever os países em sequência ou atribuir uma lente fixa a cada um.",
        "armadilha": "Descrever os países em sequência ou atribuir uma lente fixa a cada um.",
        "tempoEstimadoMin": 18,
        "assinatura": [
          "dis",
          "N4",
          "integração — cruza módulos, arbitra entre leituras ou projeta consequência",
          "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito",
          "integração entre os módulos 01 a 06"
        ],
        "tipo": "discursiva",
        "enunciado": "Compare Brasil, Estados Unidos e China em objetivos estratégicos, condicionantes geográficos e vulnerabilidades. Conclua identificando a lógica teórica que melhor explica cada um e declarando pelo menos dois limites da comparação.",
        "gabaritoComentado": "**Tese.** Os três atores diferem menos em ambição e mais na NATUREZA do problema que precisam resolver — e essa natureza é dada, em primeiro lugar, pela geografia.\n\n**Objetivos.** Brasil: soberania, integridade territorial, autonomia tecnológica e produtiva, coesão nacional, salvaguarda de interesses no exterior, envolvimento da sociedade, estabilidade regional e projeção no concerto das Nações — em lista sem hierarquia declarada. Estados Unidos: hegemonia na América do Norte; depois América do Sul e Caribe; domínio dos oceanos das duas costas como instrumento de projeção e de livre comércio; e evitar o surgimento de potência hegemônica na Eurásia — em sequência de degraus. China: manter a integridade territorial; evitar desigualdades significativas internas; manter abertura ao exterior sem permitir desagregação — em trilema.\n\n**Condicionantes geográficos.** Brasil: cerca de 8.500 km de litoral, com 80% da população e 90% do PIB nele concentrados, bacias internacionais e nenhum rival estatal de peso comparável no entorno. Estados Unidos: bioceanidade, planícies centrais com rios navegáveis interligados por canais e eclusas, vizinhos de poder muito inferior. China: isoieta de 300 mm separando litoral rico de interior pobre, zonas tampão de aridez e altitude, litoral fechado por cadeias de ilhas.\n\n**Vulnerabilidades.** Brasil: dependência do mar para mais de 95% do comércio exterior, somada a baixa prontidão, baixo investimento e cultura de defesa pouco consolidada — vulnerabilidade sobretudo interna e institucional. Estados Unidos: declínio relativo de participação econômica e dependência do arco de alianças, além do desafio do antiacesso adversário. China: Estreito de Málaca, perda da autossuficiência em alimento e petróleo, demografia, custos trabalhistas crescentes e desigualdade litoral-interior.\n\n**Lógica teórica predominante.** China: realista no imperativo de integridade e no A2/AD, com componente liberal significativo, porque depende de abertura e de fluxos, e camada construtivista relevante, pela memória das humilhações e pelo Tianxia como ordem hierárquica legítima. Estados Unidos: variável conforme o aspecto — liberal na arquitetura institucional do pós-guerra, realista na Doutrina Monroe e em sua releitura contemporânea, construtivista no Destino Manifesto e no American way of life. Brasil: predominantemente liberal-institucional, pelos princípios do art. 4º, pela reivindicação de assento no Conselho de Segurança e pela aposta em integração regional, com componente realista no esforço de dissuasão marítima e de autonomia tecnológica.\n\n**Limites da comparação.** Primeiro, **escala**: os três não são atores de porte comparável, e comparar serve para isolar variáveis, não para ranquear. Segundo, **assimetria das fontes**: o Brasil é analisado por documentos oficiais próprios — PND, END, PESD, Política Naval, PEM 2040 —, enquanto os outros dois são analisados por slides de aula e leituras complementares, algumas com posição declarada, e sem os capítulos obrigatórios de Magnoli, que não foram fornecidos; a base documental não é equivalente. Terceiro, **posição no sistema**: um ator que sustenta uma ordem e um ator que quer refazê-la não enfrentam o mesmo problema. Quarto, **lente não é atributo fixo de país**: a mesma potência pede lentes distintas conforme o aspecto destacado.\n\n**Conclusão.** Dois dos três imperativos são de preservação e inserção; só o norte-americano tem objeto fora do próprio hemisfério. É essa assimetria, e não a diferença de capacidade, que organiza a competição sistêmica contemporânea: a China precisa de fluxo, os Estados Unidos precisam de ausência de rival continental e o Brasil precisa de capacidade proporcional ao que já possui.\n\n**Insuficiente:** descrever os três países em sequência, sem critério de comparação. **Satisfatória:** compara nas três linhas pedidas. **Nível MB:** compara nas três linhas, atribui lente por aspecto e não por país, e declara pelo menos dois limites com justificativa.",
        "criterios": [
          "Compara objetivos estratégicos dos três atores com formulação fiel ao corpus (0,25)",
          "Compara condicionantes geográficos dos três atores (0,2)",
          "Compara vulnerabilidades, distinguindo a brasileira (interna e institucional) das demais (0,2)",
          "Atribui lógica teórica POR ASPECTO, e não como rótulo fixo de país (0,25)",
          "Declara ao menos dois limites da comparação, com justificativa (0,1)",
          "Não pontua: descrição sequencial sem critério; rotular país com uma lente; concluir sem limite declarado"
        ],
        "modalidades": [
          "rapido",
          "pra-safar",
          "completo"
        ]
      }
    ]
  }
];

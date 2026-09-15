import type { Questao } from '@tipos/question';

export const questoesCanonicas: Questao[] = [
  {
    "id": "NAV4-Q001",
    "tipo": "multipla",
    "topico": "01-correcoes-de-altura",
    "dificuldade": "facil",
    "enunciado": "Qual sequência leva corretamente a altura instrumental à altura verdadeira?",
    "alternativas": [
      "ai + ei = ao; ao + dpap = aap; aap + correções = a",
      "ai + dpap = ao; ao + ei = aap; aap − correções = a",
      "ai + correções = ae; ae + ei = a",
      "ai − ei = ao; ao − dpap = a"
    ],
    "correta": 0,
    "comentario": "O erro instrumental atua primeiro, a depressão leva ao horizonte aparente e as correções astronômicas levam à altura verdadeira.",
    "armadilha": "Misturar altura calculada ae com a cadeia observacional.",
    "conceptIds": [
      "NAV4-ALT-CADEIA"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "NAV4-Q002",
    "tipo": "multipla",
    "topico": "01-correcoes-de-altura",
    "dificuldade": "facil",
    "enunciado": "Pela fórmula dpap = −1,76√e, qual a depressão para elevação do olho de 9 m?",
    "alternativas": [
      "−5,3′",
      "+5,3′",
      "−15,8′",
      "−1,8′"
    ],
    "correta": 0,
    "comentario": "√9=3; −1,76×3=−5,28′≈−5,3′.",
    "conceptIds": [
      "NAV4-ALT-DIP"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "NAV4-Q003",
    "tipo": "vf",
    "topico": "01-correcoes-de-altura",
    "dificuldade": "facil",
    "afirmacao": "A correção de refração astronômica é negativa porque a atmosfera faz o astro parecer mais alto.",
    "correta": true,
    "comentario": "Para recuperar a direção verdadeira, reduz-se a altura aparente.",
    "conceptIds": [
      "NAV4-ALT-AR"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "NAV4-Q004",
    "tipo": "multipla",
    "topico": "01-correcoes-de-altura",
    "dificuldade": "facil",
    "enunciado": "Qual é o sinal do semidiâmetro quando se observa o limbo superior do Sol?",
    "alternativas": [
      "Negativo",
      "Positivo",
      "Sempre zero",
      "Depende da longitude"
    ],
    "correta": 0,
    "comentario": "O centro está abaixo do limbo superior; a correção centro−limbo é negativa.",
    "conceptIds": [
      "NAV4-ALT-SD"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "NAV4-Q005",
    "tipo": "vf",
    "topico": "01-correcoes-de-altura",
    "dificuldade": "facil",
    "afirmacao": "A paralaxe é máxima no zênite e nula no horizonte.",
    "correta": false,
    "comentario": "É o contrário: máxima no horizonte e nula no zênite.",
    "armadilha": "Inversão clássica de extremos.",
    "conceptIds": [
      "NAV4-ALT-PA"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "NAV4-Q006",
    "tipo": "correlacione",
    "topico": "01-correcoes-de-altura",
    "dificuldade": "medio",
    "titulo": "Associe a correção à principal entrada física",
    "chaves": [
      {
        "chave": "A",
        "texto": "elevação do olho"
      },
      {
        "chave": "B",
        "texto": "altura aparente/atmosfera"
      },
      {
        "chave": "C",
        "texto": "limbo observado"
      },
      {
        "chave": "D",
        "texto": "distância do astro e altura"
      }
    ],
    "itens": [
      {
        "texto": "Depressão aparente",
        "chave": "A"
      },
      {
        "texto": "Refração",
        "chave": "B"
      },
      {
        "texto": "Semidiâmetro",
        "chave": "C"
      },
      {
        "texto": "Paralaxe",
        "chave": "D"
      }
    ],
    "comentario": "A associação permite escolher a tabela e conferir se um dado do enunciado tem função.",
    "conceptIds": [
      "NAV4-ALT-DIP",
      "NAV4-ALT-AR",
      "NAV4-ALT-SD",
      "NAV4-ALT-PA"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "NAV4-Q007",
    "tipo": "discursiva",
    "topico": "01-correcoes-de-altura",
    "dificuldade": "dificil",
    "contexto": "Uma tabela da Lua fornece correção principal, adicional e orientação de limbo.",
    "enunciado": "Explique como evitar aplicar semidiâmetro duas vezes.",
    "gabaritoComentado": "Leia o cabeçalho e a nota da tabela, registre quais parcelas estão incluídas na correção principal e só aplique separadamente o que a própria tabela manda. O exemplo antigo não autoriza uma receita fixa para 2026.",
    "criterios": [
      "Identifica possível agrupamento em c",
      "Exige leitura do cabeçalho",
      "Usa ANB 2026"
    ],
    "conceptIds": [
      "NAV4-ALT-LUA",
      "NAV4-ANB2026"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "NAV4-Q008",
    "tipo": "multipla",
    "topico": "01-correcoes-de-altura",
    "dificuldade": "medio",
    "enunciado": "Com ai=30°12,4′, ei=−1,4′, dp=−5,3′ e c=−1,8′, qual é a altura verdadeira?",
    "alternativas": [
      "30°03,9′",
      "30°14,5′",
      "30°05,7′",
      "30°09,2′"
    ],
    "correta": 0,
    "comentario": "ao=30°11,0′; aap=30°05,7′; a=30°03,9′.",
    "conceptIds": [
      "NAV4-ALT-CADEIA",
      "NAV4-ALT-DIP"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "NAV4-Q009",
    "tipo": "discursiva",
    "topico": "02-linha-de-posicao",
    "dificuldade": "facil",
    "enunciado": "Defina linha de posição astronômica em linguagem de prova.",
    "gabaritoComentado": "É o lugar geométrico das posições possíveis do observador que, no mesmo instante, mediriam a mesma altura verdadeira de um astro; localmente, representa-se pela tangente à circunferência de igual altura.",
    "criterios": [
      "Lugar geométrico",
      "Mesmo instante e mesma altura",
      "Tangente local"
    ],
    "conceptIds": [
      "NAV4-LDP-CIRC",
      "NAV4-LDP-RETA"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "NAV4-Q010",
    "tipo": "multipla",
    "topico": "02-linha-de-posicao",
    "dificuldade": "facil",
    "enunciado": "O raio angular da circunferência de igual altura é:",
    "alternativas": [
      "z=90°−a",
      "a",
      "Az",
      "a−ae"
    ],
    "correta": 0,
    "comentario": "A distância GP–observador é a distância zenital.",
    "conceptIds": [
      "NAV4-LDP-CIRC"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "NAV4-Q011",
    "tipo": "vf",
    "topico": "02-linha-de-posicao",
    "dificuldade": "facil",
    "afirmacao": "Um minuto de intercepto corresponde aproximadamente a uma milha náutica.",
    "correta": true,
    "comentario": "A equivalência vem da definição da milha náutica por minuto de arco terrestre.",
    "conceptIds": [
      "NAV4-LDP-INTERCEPTO"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "NAV4-Q012",
    "tipo": "vf",
    "topico": "02-linha-de-posicao",
    "dificuldade": "facil",
    "afirmacao": "A reta de altura é traçada paralelamente ao azimute verdadeiro.",
    "correta": false,
    "comentario": "Ela é perpendicular ao azimute, que é radial à circunferência.",
    "conceptIds": [
      "NAV4-LDP-RETA"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "NAV4-Q013",
    "tipo": "multipla",
    "topico": "02-linha-de-posicao",
    "dificuldade": "medio",
    "enunciado": "Se a=38°44,2′, ae=38°51,9′ e Az=224°, como marcar o intercepto?",
    "alternativas": [
      "7,7 MN no sentido 044°",
      "7,7 MN no sentido 224°",
      "15,4 MN no sentido 044°",
      "A LDP passa pela posição assumida"
    ],
    "correta": 0,
    "comentario": "Δa=−7,7′; negativo é marcado no sentido oposto ao Az: 224°−180°=044°.",
    "conceptIds": [
      "NAV4-LDP-INTERCEPTO",
      "NAV4-LDP-RETA"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "NAV4-Q014",
    "tipo": "vf",
    "topico": "02-linha-de-posicao",
    "dificuldade": "medio",
    "afirmacao": "Na passagem meridiana superior, o ângulo no polo vale 90°.",
    "correta": false,
    "comentario": "No meridiano, o ângulo horário local/ângulo no polo é zero.",
    "conceptIds": [
      "NAV4-LDP-GP",
      "NAV4-PM-CONCEITO"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "NAV4-Q015",
    "tipo": "multipla",
    "topico": "02-linha-de-posicao",
    "dificuldade": "dificil",
    "enunciado": "Por que a aproximação por tangente piora para alturas próximas de 90°?",
    "alternativas": [
      "Porque z é pequeno e a circunferência de igual altura tem maior curvatura local",
      "Porque o azimute deixa de existir para qualquer altura acima de 60°",
      "Porque 1′ deixa de valer 1 MN",
      "Porque a refração muda de sinal"
    ],
    "correta": 0,
    "comentario": "Altura alta implica pequena distância zenital e circunferência mais fechada.",
    "conceptIds": [
      "NAV4-LDP-MAT"
    ],
    "modalidades": [
      "completo"
    ]
  },
  {
    "id": "NAV4-Q016",
    "tipo": "multipla",
    "topico": "03-tabua-radler",
    "dificuldade": "facil",
    "enunciado": "Qual encadeamento de horas está correto no modelo?",
    "alternativas": [
      "Hcr=Hcp+Ea; HMG=Hcr+comp",
      "HMG=Hcp−Ea; Hcr=HMG+comp",
      "Hcr=comp+Ea; HMG=Hcp",
      "HMG=Hleg−longitude sempre"
    ],
    "correta": 0,
    "comentario": "O erro absoluto corrige o cronômetro e a comparação o leva a Greenwich.",
    "conceptIds": [
      "NAV4-RADLER-TEMPO"
    ],
    "modalidades": [
      "completo"
    ]
  },
  {
    "id": "NAV4-Q017",
    "tipo": "vf",
    "topico": "03-tabua-radler",
    "dificuldade": "facil",
    "afirmacao": "Para longitude auxiliar oeste, o AHL é obtido por tG − λaux.",
    "correta": true,
    "comentario": "É a convenção usada nas fontes e no DHN-0607.",
    "conceptIds": [
      "NAV4-RADLER-T1"
    ],
    "modalidades": [
      "completo"
    ]
  },
  {
    "id": "NAV4-Q018",
    "tipo": "multipla",
    "topico": "03-tabua-radler",
    "dificuldade": "facil",
    "enunciado": "Se AHL=309°, então t1 é:",
    "alternativas": [
      "51° E",
      "51° W",
      "309° E",
      "129° W"
    ],
    "correta": 0,
    "comentario": "Como AHL>180°, t1=360°−309°=51° e recebe nome E.",
    "conceptIds": [
      "NAV4-RADLER-T1"
    ],
    "modalidades": [
      "completo"
    ]
  },
  {
    "id": "NAV4-Q019",
    "tipo": "multipla",
    "topico": "03-tabua-radler",
    "dificuldade": "facil",
    "enunciado": "Quais são as entradas da primeira parte da Tábua Radler?",
    "alternativas": [
      "Declinação e t1",
      "Latitude e AHL",
      "a e C",
      "ai e ei"
    ],
    "correta": 0,
    "comentario": "A primeira entrada fornece os auxiliares a e b.",
    "conceptIds": [
      "NAV4-RADLER-ENTRADA1"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "NAV4-Q020",
    "tipo": "multipla",
    "topico": "03-tabua-radler",
    "dificuldade": "medio",
    "enunciado": "Latitude e declinação têm nomes contrários. Como se forma C?",
    "alternativas": [
      "C=b+φaux",
      "C=|b−φaux| sempre",
      "C=90°−b",
      "C=t1+φaux"
    ],
    "correta": 0,
    "comentario": "Para nomes contrários, soma-se b à latitude auxiliar.",
    "conceptIds": [
      "NAV4-RADLER-C"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "NAV4-Q021",
    "tipo": "vf",
    "topico": "03-tabua-radler",
    "dificuldade": "medio",
    "afirmacao": "Com latitude e declinação de mesmo nome e t1<90°, C é sempre b+φaux.",
    "correta": false,
    "comentario": "Nesse caso C é a diferença em módulo; a soma vale para mesmo nome com t1>90°.",
    "conceptIds": [
      "NAV4-RADLER-C"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "NAV4-Q022",
    "tipo": "multipla",
    "topico": "03-tabua-radler",
    "dificuldade": "facil",
    "enunciado": "A segunda entrada da Radler usa e fornece, respectivamente:",
    "alternativas": [
      "a e C; ae e Aqd",
      "δ e t1; ai e Az",
      "φ e λ; HMG e δ",
      "ae e Az; a e b"
    ],
    "correta": 0,
    "comentario": "A segunda entrada converte os auxiliares em altura calculada e azimute quadrantal.",
    "conceptIds": [
      "NAV4-RADLER-ENTRADA2"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "NAV4-Q023",
    "tipo": "multipla",
    "topico": "03-tabua-radler",
    "dificuldade": "facil",
    "enunciado": "Converta Aqd=S38°E em azimute circular.",
    "alternativas": [
      "142°",
      "038°",
      "218°",
      "322°"
    ],
    "correta": 0,
    "comentario": "Quadrante SE: Az=180°−38°=142°.",
    "conceptIds": [
      "NAV4-RADLER-AZ"
    ],
    "modalidades": [
      "completo"
    ]
  },
  {
    "id": "NAV4-Q024",
    "tipo": "multipla",
    "topico": "03-tabua-radler",
    "dificuldade": "medio",
    "enunciado": "Para latitude e declinação de nomes contrários, qual polo nomeia o Aqd?",
    "alternativas": [
      "Polo abaixado",
      "Polo elevado",
      "Sempre norte",
      "O polo não participa"
    ],
    "correta": 0,
    "comentario": "A regra da fonte usa o polo abaixado; E/W vem de t1.",
    "conceptIds": [
      "NAV4-RADLER-AZ"
    ],
    "modalidades": [
      "completo"
    ]
  },
  {
    "id": "NAV4-Q025",
    "tipo": "vf",
    "topico": "03-tabua-radler",
    "dificuldade": "medio",
    "afirmacao": "O intercepto deve ser calculado com ai−ae.",
    "correta": false,
    "comentario": "Usa-se a altura verdadeira: Δa=a−ae.",
    "conceptIds": [
      "NAV4-RADLER-TEORIA",
      "NAV4-ALT-CADEIA"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "NAV4-Q026",
    "tipo": "discursiva",
    "topico": "03-tabua-radler",
    "dificuldade": "dificil",
    "enunciado": "Escreva a sequência completa do DHN-0607 até a plotagem.",
    "gabaritoComentado": "Hcp→Hcr→HMG→tG/δ→λaux/AHL/t1→primeira entrada a,b→φaux/C→segunda entrada ae,Aqd→Az→correção ai até a→Δa=a−ae→plotagem desde a posição auxiliar.",
    "criterios": [
      "Tempo e ANB",
      "Duas entradas",
      "Quadrante e intercepto",
      "Posição auxiliar"
    ],
    "conceptIds": [
      "NAV4-RADLER-TEMPO",
      "NAV4-RADLER-ENTRADA1",
      "NAV4-RADLER-ENTRADA2",
      "NAV4-RADLER-PLOT"
    ],
    "modalidades": [
      "completo"
    ]
  },
  {
    "id": "NAV4-Q027",
    "tipo": "vf",
    "topico": "03-tabua-radler",
    "dificuldade": "medio",
    "afirmacao": "Na construção teórica da Radler, a relação sin ae = cos a · cos C explica a segunda entrada.",
    "correta": true,
    "comentario": "É uma das relações apresentadas nos fundamentos teóricos.",
    "conceptIds": [
      "NAV4-RADLER-TEORIA"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "NAV4-Q028",
    "tipo": "multipla",
    "topico": "04-hora-da-passagem-meridiana",
    "dificuldade": "facil",
    "enunciado": "De ET=HV−HM e HVL=12h na passagem, resulta:",
    "alternativas": [
      "HML=12h−ET",
      "HML=12h+ET",
      "HMG=ET−12h",
      "Hleg=12h sempre"
    ],
    "correta": 0,
    "comentario": "Isole HM: HM=HV−ET.",
    "conceptIds": [
      "NAV4-PM-PRECISO"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "NAV4-Q029",
    "tipo": "multipla",
    "topico": "04-hora-da-passagem-meridiana",
    "dificuldade": "facil",
    "enunciado": "Se ET=−04m18s, qual é a HML precisa da passagem?",
    "alternativas": [
      "12h04m18s",
      "11h55m42s",
      "12h00m00s",
      "11h04m18s"
    ],
    "correta": 0,
    "comentario": "HML=12h−(−04m18s)=12h04m18s.",
    "conceptIds": [
      "NAV4-PM-PRECISO"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "NAV4-Q030",
    "tipo": "multipla",
    "topico": "04-hora-da-passagem-meridiana",
    "dificuldade": "facil",
    "enunciado": "A longitude 043°10′ equivale a:",
    "alternativas": [
      "2h52m40s",
      "2h43m10s",
      "43h10m",
      "3h10m00s"
    ],
    "correta": 0,
    "comentario": "43°=2h52m e 10′ de arco=40s de tempo.",
    "conceptIds": [
      "NAV4-PM-SIMPLES"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "NAV4-Q031",
    "tipo": "vf",
    "topico": "04-hora-da-passagem-meridiana",
    "dificuldade": "facil",
    "afirmacao": "Para longitude oeste, soma-se o tempo de longitude à HML para obter HMG.",
    "correta": true,
    "comentario": "O meio-dia local ocorre depois do de Greenwich em longitudes W.",
    "conceptIds": [
      "NAV4-PM-SIMPLES"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "NAV4-Q032",
    "tipo": "multipla",
    "topico": "04-hora-da-passagem-meridiana",
    "dificuldade": "medio",
    "enunciado": "Na convenção P positivo a oeste, com HMG=14h05m18s e P=+2h, Hleg é:",
    "alternativas": [
      "12h05m18s",
      "16h05m18s",
      "14h03m18s",
      "02h05m18s"
    ],
    "correta": 0,
    "comentario": "Hleg=HMG−P.",
    "conceptIds": [
      "NAV4-PM-FUSO"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "NAV4-Q033",
    "tipo": "vf",
    "topico": "04-hora-da-passagem-meridiana",
    "dificuldade": "medio",
    "afirmacao": "Os métodos simples e preciso podem divergir por várias horas sem indicar erro.",
    "correta": false,
    "comentario": "Eles descrevem o mesmo evento; diferença grande aponta erro de longitude, fuso ou sinal da ET.",
    "conceptIds": [
      "NAV4-PM-SIMPLES",
      "NAV4-PM-PRECISO"
    ],
    "modalidades": [
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "NAV4-Q034",
    "tipo": "discursiva",
    "topico": "04-hora-da-passagem-meridiana",
    "dificuldade": "dificil",
    "enunciado": "Explique como a previsão da Hleg se transforma numa observação útil no mar.",
    "gabaritoComentado": "Inicia-se uma série antes da hora prevista, verificam-se sextante e hora, registram-se alturas em intervalos curtos e identifica-se a culminação, considerando a componente meridional do navio.",
    "criterios": [
      "Série antes da previsão",
      "Controle de hora/sextante",
      "Efeito do movimento"
    ],
    "conceptIds": [
      "NAV4-PM-OPERACAO",
      "NAV4-LAT-MOVIMENTO"
    ],
    "modalidades": [
      "completo"
    ]
  },
  {
    "id": "NAV4-Q035",
    "tipo": "multipla",
    "topico": "05-latitude-meridiana",
    "dificuldade": "facil",
    "enunciado": "Se a=71°08,3′, qual é z?",
    "alternativas": [
      "18°51,7′",
      "19°08,3′",
      "28°51,7′",
      "71°08,3′"
    ],
    "correta": 0,
    "comentario": "90°00′−71°08,3′=89°60′−71°08,3′=18°51,7′.",
    "conceptIds": [
      "NAV4-LAT-Z"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "NAV4-Q036",
    "tipo": "multipla",
    "topico": "05-latitude-meridiana",
    "dificuldade": "medio",
    "enunciado": "Latitude e declinação têm o mesmo nome e |Lat|>|Dec|. Qual relação de módulos vale na passagem superior?",
    "alternativas": [
      "|φ|=z+|δ|",
      "|φ|=|δ|−z",
      "|φ|=z−|δ|",
      "|φ|=180°−z"
    ],
    "correta": 0,
    "comentario": "É o primeiro caso da fonte.",
    "conceptIds": [
      "NAV4-LAT-CASOS"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "NAV4-Q037",
    "tipo": "multipla",
    "topico": "05-latitude-meridiana",
    "dificuldade": "medio",
    "enunciado": "Latitude e declinação têm nomes contrários. Qual relação de módulos vale?",
    "alternativas": [
      "|φ|=z−|δ|",
      "|φ|=z+|δ|",
      "|φ|=|δ|−z",
      "|φ|=90°−δ"
    ],
    "correta": 0,
    "comentario": "É o terceiro caso; o desenho decide o nome.",
    "conceptIds": [
      "NAV4-LAT-CASOS"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "NAV4-Q038",
    "tipo": "vf",
    "topico": "05-latitude-meridiana",
    "dificuldade": "medio",
    "afirmacao": "Com N positivo e S negativo, se o Sol culmina ao norte, pode-se conferir a latitude por φ=δ−z.",
    "correta": true,
    "comentario": "Para Sol ao norte, Az=000° e a forma assinada é δ−z.",
    "conceptIds": [
      "NAV4-LAT-CASOS",
      "NAV4-LAT-AZ"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "NAV4-Q039",
    "tipo": "multipla",
    "topico": "05-latitude-meridiana",
    "dificuldade": "facil",
    "enunciado": "Na passagem meridiana, o Sol ao sul do observador tem azimute:",
    "alternativas": [
      "180°",
      "000°",
      "090°",
      "270°"
    ],
    "correta": 0,
    "comentario": "No meridiano, o astro está ao norte ou ao sul.",
    "conceptIds": [
      "NAV4-LAT-AZ"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "NAV4-Q040",
    "tipo": "vf",
    "topico": "05-latitude-meridiana",
    "dificuldade": "medio",
    "afirmacao": "A altura máxima observada sempre coincide com a altura meridiana, qualquer que seja o rumo e a velocidade do navio.",
    "correta": false,
    "comentario": "Movimento com componente N–S pode deslocar o máximo; a aula fornece limites por latitude.",
    "conceptIds": [
      "NAV4-LAT-MOVIMENTO"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "NAV4-Q041",
    "tipo": "discursiva",
    "topico": "05-latitude-meridiana",
    "dificuldade": "dificil",
    "enunciado": "Dê o procedimento completo para obter latitude exata a partir de HMG e altura verdadeira do Sol.",
    "gabaritoComentado": "Calcule z=90°−a; obtenha e interpole δ no ANB 2026 para a HMG; desenhe N–Z–S e determine o lado/Az; selecione o caso ou forma assinada; calcule, nomeie N/S e confira contra a posição estimada e o movimento.",
    "criterios": [
      "z correto",
      "δ 2026 interpolada",
      "caso e nome",
      "Az e conferência"
    ],
    "conceptIds": [
      "NAV4-LAT-Z",
      "NAV4-LAT-DEC",
      "NAV4-LAT-CASOS",
      "NAV4-LAT-AZ",
      "NAV4-ANB2026"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "NAV4-Q042",
    "tipo": "discursiva",
    "topico": "00-mapa-da-t2",
    "dificuldade": "medio",
    "enunciado": "Liste quais valores de um problema datado de 2026 não podem ser copiados de exemplos antigos.",
    "gabaritoComentado": "Efemérides e tabelas dependentes de data: AHG/tG, declinação, d, v, paralaxe horizontal, semidiâmetro, equação do tempo, HML e correções tabulares do ANB.",
    "criterios": [
      "Efemérides",
      "Incrementos",
      "Correções/HML",
      "Ano 2026"
    ],
    "conceptIds": [
      "NAV4-ESCOPO",
      "NAV4-ANB2026"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "NAV4-Q043",
    "tipo": "multipla",
    "topico": "03-tabua-radler",
    "dificuldade": "facil",
    "enunciado": "Na construção teórica da Radler, por que se traça AM perpendicular ao meridiano PZ?",
    "alternativas": [
      "Para dividir PAZ nos triângulos retângulos PAM e ZAM",
      "Para transformar a altura observada em declinação",
      "Para corrigir a refração astronômica",
      "Para localizar diretamente a longitude verdadeira"
    ],
    "correta": 0,
    "comentario": "A perpendicular cria dois triângulos auxiliares resolvidos sucessivamente pela tábua.",
    "conceptIds": [
      "NAV4-RADLER-TEORIA"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "NAV4-Q044",
    "tipo": "multipla",
    "topico": "03-tabua-radler",
    "dificuldade": "medio",
    "enunciado": "No fundamento geométrico da Radler, o auxiliar b representa:",
    "alternativas": [
      "A distância angular do Equador ao pé M",
      "A altura verdadeira observada",
      "O azimute verdadeiro do astro",
      "A diferença de alturas a−ae"
    ],
    "correta": 0,
    "comentario": "Combina-se b com a latitude para formar C=MZ.",
    "conceptIds": [
      "NAV4-RADLER-TEORIA",
      "NAV4-RADLER-ENTRADA1",
      "NAV4-RADLER-C"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "NAV4-Q045",
    "tipo": "vf",
    "topico": "03-tabua-radler",
    "dificuldade": "facil",
    "afirmacao": "No ponto de corte indicado pelo professor, t1 deve entrar na Tábua Radler em graus inteiros, sem minutos.",
    "correta": true,
    "comentario": "É a observação operacional feita ao apresentar a primeira entrada da tabela 4, próximo de 13:00.",
    "conceptIds": [
      "NAV4-RADLER-T1"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  },
  {
    "id": "NAV4-Q046",
    "tipo": "multipla",
    "topico": "03-tabua-radler",
    "dificuldade": "facil",
    "enunciado": "Quais são os elementos determinativos da reta de altura destacados na UE 10.0?",
    "alternativas": [
      "Diferença de alturas Δa=a−ae e azimute verdadeiro Az",
      "Declinação e latitude estimada",
      "Altura instrumental e erro de índice",
      "HMG e equação do tempo"
    ],
    "correta": 0,
    "comentario": "A Radler fornece ae e azimute; ae é comparado com a altura verdadeira para obter Δa.",
    "conceptIds": [
      "NAV4-RADLER-TEORIA",
      "NAV4-RADLER-AZ"
    ],
    "modalidades": [
      "rapido",
      "pra-safar",
      "completo"
    ]
  }
];

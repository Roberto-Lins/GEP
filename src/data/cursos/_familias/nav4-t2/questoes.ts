import type { Questao } from '@tipos/question';
import { questoesDerivadasSopa } from './questoes-derivadas';

const questoesBase: Questao[] = [
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
  },
  {
    "id": "NAV4-Q047",
    "tipo": "multipla",
    "topico": "01-correcoes-de-altura",
    "dificuldade": "medio",
    "competencia": "Selecionar a tábua de correção pela faixa de altura aparente.",
    "tempoEstimadoMin": 2,
    "erroProvavel": "Entrar na A2 por hábito embora a altura esteja abaixo de 10°.",
    "assinatura": ["seleção de fonte", "distratores por faixa", "aplicação direta"],
    "enunciado": "Depois de erro instrumental e depressão, obteve-se aap=08°42,6′ para uma observação do Sol. Qual é a primeira escolha correta?",
    "alternativas": [
      "Entrar na A3, no grupo do Sol e limbo observados",
      "Entrar na A2 porque a altura instrumental era maior que 10°",
      "Usar somente a A4",
      "Usar a tabela de estrelas, pois o Sol é pontual no cálculo"
    ],
    "correta": 0,
    "comentario": "A faixa é decidida por aap. A3 cobre 0°–10°; A4 só complementa condições anormais.",
    "fonte": "Tábua A3 fotografada; apostila p. 147–152.",
    "armadilha": "Trocar a grandeza de entrada aap por ai.",
    "conceptIds": ["NAV4-ALT-CADEIA", "NAV4-ALT-AR"],
    "modalidades": ["rapido", "pra-safar", "completo"]
  },
  {
    "id": "NAV4-Q048",
    "tipo": "correlacione",
    "topico": "01-correcoes-de-altura",
    "dificuldade": "medio",
    "competencia": "Distinguir funções das Tábuas A2, A3 e A4.",
    "tempoEstimadoMin": 3,
    "erroProvavel": "Tratar a A4 como substituta da correção normal.",
    "assinatura": ["associação", "leitura de tábua", "condições de aplicação"],
    "titulo": "Associe cada situação à fonte inicial apropriada",
    "chaves": [
      {"chave": "A", "texto": "A2"},
      {"chave": "B", "texto": "A3"},
      {"chave": "C", "texto": "A4 como complemento"}
    ],
    "itens": [
      {"texto": "aap=31° em condições usuais", "chave": "A"},
      {"texto": "aap=06° em condições usuais", "chave": "B"},
      {"texto": "T/P anormais após a correção normal", "chave": "C"}
    ],
    "comentario": "A2 cobre 10°–90°, A3 cobre 0°–10° e A4 acrescenta a parcela de condições anormais.",
    "fonte": "Tábuas A2, A3 e A4 fotografadas.",
    "conceptIds": ["NAV4-ALT-AR", "NAV4-ALT-FISICA"],
    "modalidades": ["rapido", "pra-safar", "completo"]
  },
  {
    "id": "NAV4-Q049",
    "tipo": "discursiva",
    "topico": "01-correcoes-de-altura",
    "dificuldade": "dificil",
    "competencia": "Auditar uma cadeia lunar e impedir dupla aplicação de semidiâmetro.",
    "tempoEstimadoMin": 5,
    "erroProvavel": "Aplicar uma regra antiga de limbo sem ler o cabeçalho 2026.",
    "assinatura": ["caso lunar", "justificativa", "controle de duplicidade"],
    "contexto": "Um aluno leu no ANB uma correção principal da Lua e pretende somar +SD separadamente por ter observado o limbo inferior.",
    "enunciado": "Que verificações ele deve fazer antes de somar o semidiâmetro?",
    "gabaritoComentado": "Deve identificar a edição 2026, a tabela e suas entradas, ler o cabeçalho e as notas para saber se a correção principal já leva o limbo ao centro, verificar se há correção adicional e registrar o papel de cada parcela. Só aplica SD separadamente quando a própria sistemática da tabela manda.",
    "criterios": ["edição e tabela", "cabeçalho/notas", "parcelas incluídas", "decisão justificada"],
    "fonte": "Apostila p. 149–152; notas das tábuas lunares.",
    "armadilha": "Generalizar a organização de um exemplo histórico.",
    "conceptIds": ["NAV4-ALT-LUA", "NAV4-ALT-SD", "NAV4-ANB2026"],
    "modalidades": ["rapido", "pra-safar", "completo"]
  },
  {
    "id": "NAV4-Q050",
    "tipo": "multipla",
    "topico": "01-correcoes-de-altura",
    "dificuldade": "medio",
    "competencia": "Interpretar o impacto operacional de um erro de sinal.",
    "tempoEstimadoMin": 2,
    "erroProvavel": "Comparar somente o módulo da correção e ignorar a inversão.",
    "assinatura": ["sensibilidade", "minuto de arco", "consequência na LDP"],
    "enunciado": "Uma correção de −5′ foi aplicada como +5′. Aproximadamente quanto esse erro pode separar a LDP correta da calculada?",
    "alternativas": ["10 MN", "5 MN", "1 MN", "0,1 MN"],
    "correta": 0,
    "comentario": "A diferença entre −5′ e +5′ é 10′; cada minuto de altura equivale aproximadamente a 1 MN na LDP.",
    "fonte": "Apostila p. 153–159; relação 1′≈1 MN.",
    "conceptIds": ["NAV4-ALT-FISICA", "NAV4-LDP-INTERCEPTO"],
    "modalidades": ["pra-safar", "completo"]
  },
  {
    "id": "NAV4-Q051",
    "tipo": "correlacione",
    "topico": "02-linha-de-posicao",
    "dificuldade": "facil",
    "competencia": "Distinguir os objetos geométricos usados na LDP.",
    "tempoEstimadoMin": 3,
    "erroProvavel": "Trocar a projeção do astro pela posição do observador.",
    "assinatura": ["nomenclatura", "geometria", "associação"],
    "titulo": "Associe o elemento à definição",
    "chaves": [
      {"chave": "A", "texto": "GP"},
      {"chave": "B", "texto": "circunferência de igual altura"},
      {"chave": "C", "texto": "reta de altura"}
    ],
    "itens": [
      {"texto": "projeção terrestre do astro", "chave": "A"},
      {"texto": "lugar exato dos observadores com a mesma altura", "chave": "B"},
      {"texto": "tangente local usada na carta", "chave": "C"}
    ],
    "comentario": "A circunferência é o lugar geométrico; a reta é sua aproximação local.",
    "fonte": "Apostila p. 153–158; aula 8.0.",
    "conceptIds": ["NAV4-LDP-GP", "NAV4-LDP-CIRC", "NAV4-LDP-RETA"],
    "modalidades": ["rapido", "pra-safar", "completo"]
  },
  {
    "id": "NAV4-Q052",
    "tipo": "multipla",
    "topico": "02-linha-de-posicao",
    "dificuldade": "medio",
    "competencia": "Relacionar altura, distância zenital e curvatura da LDP.",
    "tempoEstimadoMin": 2,
    "erroProvavel": "Supor que altura maior permite uma tangente mais longa.",
    "assinatura": ["causa e consequência", "limite de aproximação", "comparação"],
    "enunciado": "Por que a extensão útil da reta tende a ser menor perto de 80° de altura do que perto de 35°?",
    "alternativas": [
      "Porque z e o raio da circunferência são menores, tornando a curvatura mais perceptível",
      "Porque o azimute deixa de ser perpendicular à reta",
      "Porque 1′ deixa de corresponder a 1 MN",
      "Porque a declinação do astro passa a ser zero"
    ],
    "correta": 0,
    "comentario": "a alta implica z pequeno e circunferência de menor raio; a tangente é aproximação local.",
    "fonte": "Apostila p. 153–159.",
    "conceptIds": ["NAV4-LDP-CIRC", "NAV4-LDP-RETA"],
    "modalidades": ["rapido", "pra-safar", "completo"]
  },
  {
    "id": "NAV4-Q053",
    "tipo": "discursiva",
    "topico": "02-linha-de-posicao",
    "dificuldade": "medio",
    "competencia": "Construir uma LDP a partir de a, ae e Az.",
    "tempoEstimadoMin": 5,
    "erroProvavel": "Marcar intercepto negativo no sentido do astro.",
    "assinatura": ["cálculo curto", "interpretação de sinal", "plotagem"],
    "contexto": "Foram obtidos a=21°35,8′, ae=21°47,6′ e Az=218°.",
    "enunciado": "Calcule o intercepto e descreva integralmente a construção da LDP.",
    "gabaritoComentado": "Δa=a−ae=−11,8′. Marque 11,8 MN no sentido oposto ao astro, isto é, no recíproco 038°, e pelo ponto trace a perpendicular ao eixo 038°/218°. Rotule a reta com astro, hora e Az.",
    "criterios": ["Δa=−11,8′", "11,8 MN", "sentido 038°", "perpendicular e rótulo"],
    "fonte": "Apostila p. 153–159; aula 8.0.",
    "armadilha": "Usar o módulo correto no lado errado.",
    "conceptIds": ["NAV4-LDP-INTERCEPTO", "NAV4-LDP-RETA"],
    "modalidades": ["rapido", "pra-safar", "completo"]
  },
  {
    "id": "NAV4-Q054",
    "tipo": "vf",
    "topico": "02-linha-de-posicao",
    "dificuldade": "dificil",
    "competencia": "Interpretar a solução analítica do triângulo de posição.",
    "tempoEstimadoMin": 3,
    "erroProvavel": "Aceitar o módulo trigonométrico como azimute completo.",
    "assinatura": ["fórmula", "quadrante", "julgamento"],
    "afirmacao": "Depois de calcular arccos para o ângulo no zênite, o módulo obtido basta para fixar o azimute verdadeiro sem examinar nomes ou quadrante.",
    "correta": false,
    "comentario": "A função inversa fornece um módulo; o diagrama e as regras de quadrante completam o Az verdadeiro.",
    "fonte": "Apostila p. 159; solução do triângulo de posição.",
    "conceptIds": ["NAV4-LDP-MAT"],
    "modalidades": ["completo"]
  },
  {
    "id": "NAV4-Q055",
    "tipo": "multipla",
    "topico": "04-hora-da-passagem-meridiana",
    "dificuldade": "facil",
    "competencia": "Distinguir HML, HMG e Hleg.",
    "tempoEstimadoMin": 2,
    "erroProvavel": "Usar o valor local tabulado como se fosse TU.",
    "assinatura": ["nomenclatura temporal", "sequência", "aplicação"],
    "enunciado": "Qual sequência converte a hora média local da passagem na hora do relógio de bordo?",
    "alternativas": ["HML → HMG pela longitude; HMG → Hleg pelo fuso", "HML → Hleg pela declinação; Hleg → HMG pela latitude", "HMG → HML pelo azimute; HML → Hleg pela altura", "Hleg → HMG pela equação do tempo; HMG → HML pela longitude"],
    "correta": 0,
    "comentario": "Longitude relaciona meridiano local e Greenwich; o fuso relaciona Greenwich e hora legal.",
    "fonte": "Apostila p. 175–180; aulas 10.1–10.2.",
    "conceptIds": ["NAV4-PM-SIMPLES", "NAV4-PM-FUSO"],
    "modalidades": ["rapido", "pra-safar", "completo"]
  },
  {
    "id": "NAV4-Q056",
    "tipo": "multipla",
    "topico": "04-hora-da-passagem-meridiana",
    "dificuldade": "medio",
    "competencia": "Aplicar o sinal da equação do tempo pela definição.",
    "tempoEstimadoMin": 3,
    "erroProvavel": "Somar ET mecanicamente a 12 h.",
    "assinatura": ["equação do tempo", "sinal", "cálculo curto"],
    "enunciado": "Se ET=+04m20s, qual é a HML da passagem superior?",
    "alternativas": ["11h55m40s", "12h04m20s", "11h04m20s", "12h55m40s"],
    "correta": 0,
    "comentario": "ET=12h−HML; portanto HML=12h−04m20s=11h55m40s.",
    "fonte": "Aulas 10.1–10.2; definição ET=HV−HM.",
    "armadilha": "Ignorar o sinal da ET.",
    "conceptIds": ["NAV4-PM-PRECISO"],
    "modalidades": ["rapido", "pra-safar", "completo"]
  },
  {
    "id": "NAV4-Q057",
    "tipo": "discursiva",
    "topico": "04-hora-da-passagem-meridiana",
    "dificuldade": "medio",
    "competencia": "Normalizar hora e data após longitude/fuso.",
    "tempoEstimadoMin": 4,
    "erroProvavel": "Conservar 25 h ou não trocar a página do ANB.",
    "assinatura": ["mudança de data", "hora", "consulta"],
    "contexto": "Após aplicar a longitude, um aluno obteve HMG=25h10m.",
    "enunciado": "Normalize o resultado e explique a consequência para uma consulta diária posterior.",
    "gabaritoComentado": "HMG=01h10m do dia seguinte. Qualquer efeméride diária posterior deve usar a data Greenwich seguinte, não permanecer automaticamente na data legal/local do enunciado.",
    "criterios": ["01h10m", "dia seguinte", "data Greenwich", "página diária correspondente"],
    "fonte": "Apostila p. 175–180; aulas 10.1–10.2.",
    "conceptIds": ["NAV4-PM-FUSO", "NAV4-ANB2026"],
    "modalidades": ["rapido", "pra-safar", "completo"]
  },
  {
    "id": "NAV4-Q058",
    "tipo": "vf",
    "topico": "04-hora-da-passagem-meridiana",
    "dificuldade": "dificil",
    "competencia": "Interpretar a tábua de interpolação de fenômenos.",
    "tempoEstimadoMin": 3,
    "erroProvavel": "Aplicar correção linear e sinal fixo sem ler as datas.",
    "assinatura": ["leitura de tábua", "interpolação", "pegadinha de sinal"],
    "afirmacao": "Na Tábua II, basta usar o módulo da longitude e somar sempre a correção, pois o sinal não depende de E/W nem dos dias comparados.",
    "correta": false,
    "comentario": "A instrução usa dia precedente para E e seguinte para W, com regra geral de sinal e exceção conforme a tendência temporal.",
    "fonte": "Tábua de interpolação fotografada, p. XXXII.",
    "conceptIds": ["NAV4-PM-INTERPOLACAO"],
    "modalidades": ["pra-safar", "completo"]
  },
  {
    "id": "NAV4-Q059",
    "tipo": "multipla",
    "topico": "05-latitude-meridiana",
    "dificuldade": "medio",
    "competencia": "Validar a interpolação da declinação no instante.",
    "tempoEstimadoMin": 3,
    "erroProvavel": "Aplicar d no sentido oposto.",
    "assinatura": ["ANB", "interpolação", "controle de tendência"],
    "enunciado": "Qual é a melhor conferência imediata para uma declinação interpolada dentro de uma hora?",
    "alternativas": [
      "Ela deve ficar entre os valores horários vizinhos e variar no sentido de d",
      "Ela deve ter sempre o mesmo módulo da latitude estimada",
      "Ela deve ser somada a z independentemente do hemisfério",
      "Ela deve tornar o azimute igual a 090°"
    ],
    "correta": 0,
    "comentario": "A interpolação temporal deve respeitar os extremos e a tendência mostrada pela variação d.",
    "fonte": "ANB 2026, página diária; aula 10.3.",
    "conceptIds": ["NAV4-LAT-DEC", "NAV4-ANB2026"],
    "modalidades": ["rapido", "pra-safar", "completo"]
  },
  {
    "id": "NAV4-Q060",
    "tipo": "discursiva",
    "topico": "05-latitude-meridiana",
    "dificuldade": "dificil",
    "competencia": "Resolver um caso de nomes contrários por duas representações.",
    "tempoEstimadoMin": 5,
    "erroProvavel": "Somar os módulos ou nomear o hemisfério pelo astro.",
    "assinatura": ["caso geométrico", "forma assinada", "controle independente"],
    "contexto": "Na passagem superior, z=18°20′, δ=05°40′N, posição estimada no hemisfério sul e Sol ao norte.",
    "enunciado": "Determine a latitude e confira pela forma assinada.",
    "gabaritoComentado": "Nomes contrários: |φ|=z−|δ|=18°20′−05°40′=12°40′. O desenho dá S. Com N positivo: φ=δ−z=+05°40′−18°20′=−12°40′, confirmando 12°40′S e Az=000°.",
    "criterios": ["caso de nomes contrários", "12°40′", "nome S", "forma assinada e Az 000°"],
    "fonte": "Apostila p. 175–180; aula 10.3.",
    "conceptIds": ["NAV4-LAT-CASOS", "NAV4-LAT-AZ"],
    "modalidades": ["pra-safar", "completo"]
  },
  {
    "id": "NAV4-Q061",
    "tipo": "multipla",
    "topico": "05-latitude-meridiana",
    "dificuldade": "medio",
    "competencia": "Avaliar a componente meridional do movimento.",
    "tempoEstimadoMin": 3,
    "erroProvavel": "Comparar a velocidade total ao limite sem decompor o rumo.",
    "assinatura": ["movimento", "componente N–S", "interpretação"],
    "enunciado": "Dois navios navegam a 18 nós: um em rumo 090° e outro em rumo 000°. Qual tende a deslocar mais a altura máxima em relação à passagem meridiana?",
    "alternativas": [
      "O de rumo 000°, pois sua componente N–S é 18 nós",
      "O de rumo 090°, pois sua componente N–S é 18 nós",
      "Ambos igualmente, pois só importa a velocidade total",
      "Nenhum, pois movimento nunca afeta a culminação"
    ],
    "correta": 0,
    "comentario": "VNS=|V cos R|; em 000° vale V e em 090° vale aproximadamente zero.",
    "fonte": "Aula 10.3; tabela de limites por latitude.",
    "conceptIds": ["NAV4-LAT-MOVIMENTO"],
    "modalidades": ["pra-safar", "completo"]
  },
  {
    "id": "NAV4-Q062",
    "tipo": "vf",
    "topico": "05-latitude-meridiana",
    "dificuldade": "medio",
    "competencia": "Relacionar erro de altura a erro de distância zenital.",
    "tempoEstimadoMin": 2,
    "erroProvavel": "Preservar o sinal do erro ao passar de a para z.",
    "assinatura": ["sensibilidade", "sinal", "julgamento"],
    "afirmacao": "Como z=90°−a, um erro de +1′ na altura produz erro de −1′ em z.",
    "correta": true,
    "comentario": "A relação é complementar; aumentar a reduz z pelo mesmo módulo.",
    "fonte": "Apostila p. 175–180; relação meridiana.",
    "conceptIds": ["NAV4-LAT-Z"],
    "modalidades": ["rapido", "pra-safar", "completo"]
  },
  {
    "id": "NAV4-Q063",
    "tipo": "multipla",
    "topico": "06-treino-integrado",
    "dificuldade": "medio",
    "competencia": "Identificar o primeiro elo errado em uma solução integrada.",
    "tempoEstimadoMin": 3,
    "erroProvavel": "Refazer tudo sem localizar a origem.",
    "assinatura": ["diagnóstico", "cadeia", "eficiência"],
    "enunciado": "A altura verdadeira está coerente, mas o AHL não ficou inteiro após a escolha auxiliar. Qual bloco deve ser revisto primeiro?",
    "alternativas": ["Escolha de λaux e cálculo de AHL", "Correção de refração", "Cálculo da distância zenital", "Conversão HMG para Hleg"],
    "correta": 0,
    "comentario": "O sintoma nasce no bloco de longitude auxiliar/AHL; refazer a cadeia de alturas não o corrige.",
    "fonte": "Modelo DHN-0607 anotado; instruções Radler.",
    "conceptIds": ["NAV4-TREINO"],
    "modalidades": ["rapido", "pra-safar", "completo"]
  },
  {
    "id": "NAV4-Q064",
    "tipo": "vf",
    "topico": "06-treino-integrado",
    "dificuldade": "facil",
    "competencia": "Aplicar a política de dados anuais.",
    "tempoEstimadoMin": 2,
    "erroProvavel": "Usar um resultado histórico por coincidência de astro.",
    "assinatura": ["ano", "fonte", "julgamento"],
    "afirmacao": "Um exemplo de 2020 pode ensinar o preenchimento do DHN-0607, mas AHG, declinação e correções de um trabalho de 2026 devem ser consultados novamente.",
    "correta": true,
    "comentario": "Método é reutilizável; efemérides e valores tabulares dependem da edição/data.",
    "fonte": "Orientação do usuário; ANB 2026; exercício histórico fotografado.",
    "conceptIds": ["NAV4-TREINO"],
    "modalidades": ["rapido", "pra-safar", "completo"]
  },
  {
    "id": "NAV4-Q065",
    "tipo": "correlacione",
    "topico": "06-treino-integrado",
    "dificuldade": "medio",
    "competencia": "Classificar falhas para escolher uma repetição útil.",
    "tempoEstimadoMin": 3,
    "erroProvavel": "Tratar qualquer falha como falta de teoria.",
    "assinatura": ["caderno de erros", "associação", "metacognição"],
    "titulo": "Associe o sintoma ao tipo de erro",
    "chaves": [
      {"chave": "A", "texto": "fonte"},
      {"chave": "B", "texto": "sinal/nome"},
      {"chave": "C", "texto": "aritmética"},
      {"chave": "D", "texto": "apresentação"}
    ],
    "itens": [
      {"texto": "usou A2 com aap abaixo de 10°", "chave": "A"},
      {"texto": "marcou intercepto negativo para o astro", "chave": "B"},
      {"texto": "não normalizou 60′", "chave": "C"},
      {"texto": "entregou latitude sem N/S", "chave": "D"}
    ],
    "comentario": "A categoria determina o treino de reparo: consulta, direção, cálculo ou registro.",
    "fonte": "Rubrica integrada do curso.",
    "conceptIds": ["NAV4-TREINO"],
    "modalidades": ["rapido", "pra-safar", "completo"]
  },
  {
    "id": "NAV4-Q066",
    "tipo": "discursiva",
    "topico": "06-treino-integrado",
    "dificuldade": "dificil",
    "competencia": "Montar um gabarito de processo para consulta 2026.",
    "tempoEstimadoMin": 5,
    "erroProvavel": "Registrar apenas o valor final do almanaque.",
    "assinatura": ["rastreabilidade", "ANB 2026", "resposta curta"],
    "enunciado": "Quais campos mínimos devem acompanhar um valor anual retirado do ANB 2026?",
    "gabaritoComentado": "Edição/ano, página, data Greenwich, astro ou fenômeno, escala de tempo, linha/coluna ou argumentos, valor base, incremento/interpolação com sinal, unidade/nome e resultado.",
    "criterios": ["ano/página/data", "astro/fenômeno e escala", "entradas", "interpolação e unidade"],
    "fonte": "Páginas 148–149 fotografadas; protocolo de consulta do curso.",
    "conceptIds": ["NAV4-TREINO"],
    "modalidades": ["rapido", "pra-safar", "completo"]
  },
  {
    "id": "NAV4-Q067",
    "tipo": "multipla",
    "topico": "06-treino-integrado",
    "dificuldade": "medio",
    "competencia": "Escolher uma conferência independente.",
    "tempoEstimadoMin": 3,
    "erroProvavel": "Repetir a mesma operação e chamar de conferência.",
    "assinatura": ["controle", "integração", "comparação"],
    "enunciado": "Qual par representa controles realmente independentes?",
    "alternativas": [
      "Hleg por HML tabulada versus por ET; latitude por desenho versus forma assinada",
      "Refazer a mesma soma duas vezes; copiar o mesmo valor em duas linhas",
      "Usar duas calculadoras com a mesma entrada errada; arredondar de dois modos",
      "Consultar o mesmo exemplo antigo em duas cópias do PDF"
    ],
    "correta": 0,
    "comentario": "As rotas usam representações diferentes e tendem a revelar erros de sinal/caso.",
    "fonte": "Aulas 10.1–10.3; protocolo de auditoria.",
    "conceptIds": ["NAV4-TREINO"],
    "modalidades": ["rapido", "pra-safar", "completo"]
  },
  {
    "id": "NAV4-Q068",
    "tipo": "vf",
    "topico": "06-treino-integrado",
    "dificuldade": "medio",
    "competencia": "Separar planejamento de treino e previsão de prova.",
    "tempoEstimadoMin": 2,
    "erroProvavel": "Interpretar a distribuição do simulado como pesos oficiais.",
    "assinatura": ["escopo", "tempo", "julgamento"],
    "afirmacao": "A divisão de 90 minutos proposta pelo curso organiza a prática, mas não prova a distribuição de pontos da T2.",
    "correta": true,
    "comentario": "A fonte confirma duração e conteúdos, não os pesos detalhados de cada bloco.",
    "fonte": "Orientações do professor e plano de treino do curso.",
    "conceptIds": ["NAV4-TREINO"],
    "modalidades": ["rapido", "pra-safar", "completo"]
  }
];

const metadadosPorTopico: Record<string, {
  competencia: string;
  erroProvavel: string;
  fonte: string;
  procedimento: string;
  verificacao: string;
}> = {
  '00-mapa-da-t2': {
    competencia: 'Delimitar o escopo da T2 e selecionar a fonte operacional correta.',
    erroProvavel: 'Misturar conteúdo posterior à PP2 ou reutilizar dado anual antigo.',
    fonte: 'Orientações do professor; sumário NAV-4 2026; protocolo de uso do ANB 2026.',
    procedimento: 'Classifique o dado como invariável, dependente do ano ou fora do recorte antes de escolher a fonte.',
    verificacao: 'Confirme ano, data, astro, página e limite T2/PP2 contra a orientação do professor.',
  },
  '01-correcoes-de-altura': {
    competencia: 'Transformar a altura instrumental em altura verdadeira com sinais e tábuas corretos.',
    erroProvavel: 'Misturar alturas, inverter sinais físicos ou duplicar parcela já incorporada na tábua.',
    fonte: 'Apostila p. 139–152; aulas 7.0–7.1; Tábuas A2, A3 e A4.',
    procedimento: 'Escreva a cadeia ai → ao → aap → a, identifique o que cada tábua já inclui e só então opere os sinais.',
    verificacao: 'Recalcule a correção total em uma única soma algébrica e confira o sentido físico de depressão, refração, semidiâmetro e paralaxe.',
  },
  '02-linha-de-posicao': {
    competencia: 'Interpretar e construir a LDP a partir do azimute e do intercepto.',
    erroProvavel: 'Confundir circunferência com tangente ou inverter o sentido do intercepto.',
    fonte: 'Apostila p. 153–159; aula 8.0.',
    procedimento: 'Relacione a altura a z, compare a com ae, converta o intercepto em MN e construa a perpendicular ao azimute.',
    verificacao: 'Use a relação maior altura → menor z → menor distância ao GP para confirmar o sentido da plotagem.',
  },
  '03-tabua-radler': {
    competencia: 'Explicar a geometria da Radler e executar sua cadeia tabular de forma auditável.',
    erroProvavel: 'Trocar argumentos/saídas, perder nomes ou propagar uma escolha auxiliar inadequada.',
    fonte: 'Apostila p. 160–174; aulas 9.0 e UE 10.0 até 13:00; instruções e DHN-0607.',
    procedimento: 'Separe primeira entrada, formação de C, segunda entrada, nomeação do azimute e comparação a−ae.',
    verificacao: 'Localize o primeiro bloco incompatível no DHN-0607 e, quando houver dados, confronte ae com a relação trigonométrica do triângulo de posição.',
  },
  '04-hora-da-passagem-meridiana': {
    competencia: 'Prever e converter a hora da passagem meridiana com longitude, fuso e data corretos.',
    erroProvavel: 'Confundir HML, HMG e Hleg ou aplicar longitude/fuso com sinal incorreto.',
    fonte: 'Apostila p. 175–180; aulas 10.1–10.2; ANB 2026 e tábuas de interpolação.',
    procedimento: 'Obtenha a HML, converta longitude angular em tempo, passe a HMG, aplique o fuso e normalize hora/data.',
    verificacao: 'Compare, quando disponíveis, HML tabulada e HML=12h−ET; confira ainda se a longitude W torna Greenwich posterior ao instante local.',
  },
  '05-latitude-meridiana': {
    competencia: 'Determinar a latitude na culminação por geometria e conferência assinada.',
    erroProvavel: 'Usar altura não corrigida, declinação fora do instante ou caso geométrico errado.',
    fonte: 'Apostila p. 175–180; aula 10.3; ANB 2026.',
    procedimento: 'Corrija a altura, calcule z, interpole δ no HMG, desenhe N–Z–S e aplique o caso meridiano.',
    verificacao: 'Resolva novamente pela forma assinada, usando N positivo e S negativo, e compare hemisfério e azimute com o desenho.',
  },
  '06-treino-integrado': {
    competencia: 'Integrar consulta, cálculo, apresentação e conferência sob restrição de tempo.',
    erroProvavel: 'Refazer cadeias inteiras sem localizar o primeiro elo incorreto.',
    fonte: 'Corpus NAV-4/T2 2026 e rubrica integrada do curso.',
    procedimento: 'Registre dados, fonte, cálculo, unidade/nome e controle em colunas separadas; diagnostique o primeiro elo incoerente.',
    verificacao: 'Use uma rota diferente da solução principal — tendência, ordem de grandeza, desenho, fórmula assinada ou fonte paralela — e registre a divergência.',
  },
};

const assinaturasSopaPorId = new Map<string, string>([
  ['NAV4-Q008', 'ASS-ALT-CADEIA-CURTA'],
  ['NAV4-Q009', 'ASS-LDP-DEFINICAO'], ['NAV4-Q010', 'ASS-LDP-RAIO-Z'],
  ['NAV4-Q011', 'ASS-LDP-UM-MINUTO-UMA-MILHA'], ['NAV4-Q012', 'ASS-LDP-PERPENDICULAR-AZ'],
  ['NAV4-Q013', 'ASS-LDP-INTERCEPTO'], ['NAV4-Q014', 'ASS-PM-T1-VF'], ['NAV4-Q015', 'ASS-LDP-LIMITE-TANGENTE'],
  ['NAV4-Q028', 'ASS-PM-EQUACAO-TEMPO'], ['NAV4-Q029', 'ASS-PM-EQUACAO-TEMPO'],
  ['NAV4-Q030', 'ASS-PM-LONGITUDE-TEMPO'], ['NAV4-Q031', 'ASS-PM-LONGITUDE-W'],
  ['NAV4-Q032', 'ASS-PM-FUSO'], ['NAV4-Q033', 'ASS-PM-CONTROLE-DUPLO'], ['NAV4-Q034', 'ASS-PM-OPERACAO'],
  ['NAV4-Q035', 'ASS-LAT-Z'], ['NAV4-Q036', 'ASS-LAT-MESMO-NOME'], ['NAV4-Q037', 'ASS-LAT-NOMES-CONTRARIOS'],
  ['NAV4-Q038', 'ASS-LAT-FORMA-ASSINADA'], ['NAV4-Q039', 'ASS-LAT-AZ'], ['NAV4-Q040', 'ASS-LAT-MOVIMENTO'],
  ['NAV4-Q041', 'ASS-LAT-PROCEDIMENTO-COMPLETO'], ['NAV4-Q043', 'ASS-RADLER-PAZ'],
  ['NAV4-Q044', 'ASS-RADLER-AUXILIARES'], ['NAV4-Q045', 'ASS-RADLER-ENTRADA-GRAU-INTEIRO'],
  ['NAV4-Q046', 'ASS-RADLER-ELEMENTOS-DETERMINATIVOS'], ['NAV4-Q047', 'ASS-ALT-ESCOLHA-A2-A3'],
  ['NAV4-Q048', 'ASS-ALT-ANORMAL-A4'], ['NAV4-Q049', 'ASS-ALT-LIMBO'], ['NAV4-Q050', 'ASS-ALT-ERRO-LDP'],
  ['NAV4-Q051', 'ASS-LDP-CONSTRUCAO'], ['NAV4-Q052', 'ASS-LDP-LIMITE-TANGENTE'], ['NAV4-Q053', 'ASS-LDP-CONSTRUCAO'],
  ['NAV4-Q054', 'ASS-RADLER-AZ-QUADRANTE'], ['NAV4-Q055', 'ASS-PM-SIMPLES'], ['NAV4-Q056', 'ASS-PM-PRECISA'],
  ['NAV4-Q057', 'ASS-PM-MUDANCA-DATA'], ['NAV4-Q058', 'ASS-PM-INTERPOLACAO'], ['NAV4-Q059', 'ASS-LAT-DEC'],
  ['NAV4-Q060', 'ASS-LAT-PROBLEMA-COMPLETO'], ['NAV4-Q061', 'ASS-LAT-MOVIMENTO'], ['NAV4-Q062', 'ASS-LAT-ERRO-ALTURA'],
]);

export const questoesCanonicas: Questao[] = questoesBase.map((questao) => {
  const padrao = metadadosPorTopico[questao.topico];
  const tempoEstimadoMin = questao.tempoEstimadoMin
    ?? (questao.tipo === 'discursiva' ? 5 : questao.dificuldade === 'dificil' ? 4 : 2);

  const comentarioFinal = questao.tipo === 'discursiva'
    ? questao.gabaritoComentado
    : questao.tipo === 'correlacione'
      ? questao.comentario ?? questao.itens.map((item) => `${item.texto}: ${item.chave}`).join('; ')
      : questao.comentario;
  const explicacaoDistratores = questao.tipo === 'multipla'
    ? questao.alternativas.map((alternativa, indice) => indice === questao.correta
      ? 'Correta. ' + questao.comentario
      : 'Distrator “' + alternativa + '”. Ele não satisfaz a competência avaliada e normalmente nasce de: ' + (questao.armadilha ?? padrao.erroProvavel))
    : undefined;

  return {
    origem: assinaturasSopaPorId.has(questao.id) ? 'derivada_sopa' : 'autoral_suporte',
    fonteId: assinaturasSopaPorId.get(questao.id) ?? 'CORPUS-NAV4-T2-APOIO',
    statusGabarito: 'auditado_publicavel',
    competencia: padrao.competencia,
    tempoEstimadoMin,
    erroProvavel: questao.armadilha ?? padrao.erroProvavel,
    assinatura: [questao.tipo, questao.dificuldade ?? 'sem-nivel', 'inédita baseada no perfil histórico'],
    resolucaoPassoAPasso: [
      '1. Delimite a tarefa: ' + padrao.competencia,
      '2. Execute: ' + padrao.procedimento,
      '3. Conclua e interprete: ' + comentarioFinal,
    ],
    explicacaoDistratores,
    verificacaoIndependente: padrao.verificacao,
    fonte: padrao.fonte,
    ...questao,
  };
});

/** Banco preparatório: nunca contém os enunciados oficiais das SOPAs. */
export const questoesPreparacao: Questao[] = [...questoesCanonicas, ...questoesDerivadasSopa];

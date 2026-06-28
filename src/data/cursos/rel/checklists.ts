// Checkpoints de aprendizado por mini-matéria (persistidos em localStorage). Como REL
// é subjetiva, os itens cobram COMPREENSÃO e CONEXÃO — no espírito do §13 do plano do
// curso: entendi o conceito central, sei explicar com minhas palavras, conecto com
// outros temas, aplico a um cenário atual e respondo uma questão subjetiva sem decorar.
import type { ItemChecklist } from '@tipos/lesson';
export type { ItemChecklist } from '@tipos/lesson';

export const checklists: Record<string, ItemChecklist[]> = {
  '00-como-estudar-rel': [
    { id: 'c1', texto: 'Sei reproduzir o método de resposta: contexto → atores → interesses → instrumentos de poder → vulnerabilidades → consequências → Brasil/Marinha.' },
    { id: 'c2', texto: 'Entendi que REL não é decoreba: a prova cobra interpretação e contextualização, não definições isoladas.' },
    { id: 'c3', texto: 'Consigo usar a frase-matriz para abrir qualquer resposta subjetiva.' },
    { id: 'c4', texto: 'Sei conectar macrocenários (sistema internacional) e microcenários (um caso concreto).' },
  ],
  '01-escolas-de-ri-lentes-de-analise': [
    { id: 'c1', texto: 'Diferencio Realismo, Liberalismo e Construtivismo e sei qual pergunta cada lente responde.' },
    { id: 'c2', texto: 'Explico o dilema de segurança (Realismo) e o "lado sombrio" da interdependência (Liberalismo).' },
    { id: 'c3', texto: 'Entendo securitização e por que "a anarquia é o que os Estados fazem dela" (Wendt).' },
    { id: 'c4', texto: 'Consigo analisar um mesmo caso (ex.: EUA-China) pelas três lentes combinadas.' },
    { id: 'c5', texto: 'Sei conectar este tópico com a disputa de poder (03) e com a Amazônia Azul (04).' },
  ],
  '02-sistemas-internacionais-e-poder': [
    { id: 'c1', texto: 'Explico como a polaridade do sistema condiciona o comportamento dos Estados.' },
    { id: 'c2', texto: 'Sei o paradoxo de estabilidade de cada sistema (uni, bi, multi) e o caso do Concerto Europeu.' },
    { id: 'c3', texto: 'Defino unimultipolaridade e respondo "depende da dimensão" à pergunta sobre a polaridade atual.' },
    { id: 'c4', texto: 'Conecto a instabilidade atual com a interdependência "armada" e o declínio da hegemonia consensual.' },
    { id: 'c5', texto: 'Ligo autonomia estratégica + Poder Naval crível à ideia de ser sujeito (e não objeto) da ordem.' },
  ],
  '03-ruptura-da-ordem-e-eua-china': [
    { id: 'c1', texto: 'Justifico o uso da palavra "ruptura" (e não só "transição") da ordem internacional.' },
    { id: 'c2', texto: 'Explico a frase-chave "integração econômica virou arma" com exemplos (tarifas, sanções, semicondutores).' },
    { id: 'c3', texto: 'Descrevo a ascensão chinesa (Belt and Road, Mar do Sul da China) como revisionismo, não só crescimento.' },
    { id: 'c4', texto: 'Sustento que a globalização mudou de natureza, sem ter acabado.' },
    { id: 'c5', texto: 'Conecto a disputa EUA-China com mar, energia, tecnologia e instituições (é o eixo do curso).' },
  ],
  '04-oceanopolitica-e-amazonia-azul': [
    { id: 'c1', texto: 'Contrasto geopolítica terrestre (bidimensional) com oceanopolítica (tridimensional, fronteiras dinâmicas).' },
    { id: 'c2', texto: 'Explico a virada do "combate no mar" para o "combate pelo mar" (territorialização).' },
    { id: 'c3', texto: 'Apresento a Amazônia Azul como conceito político-estratégico (95% do comércio exterior, pré-sal).' },
    { id: 'c4', texto: 'Sustento a tese: a CNUDM legitima, mas só o Poder Naval crível (SN-BR) dissuade.' },
    { id: 'c5', texto: 'Conecto o mar com energia (08), CNUDM/polos (06) e a disputa de poder (03).' },
  ],
  '05-meio-ambiente-como-tema-geopolitico': [
    { id: 'c1', texto: 'Sei argumentar que meio ambiente é poder (high politics), não apenas pauta moral.' },
    { id: 'c2', texto: 'Domino os três eixos: mitigação, adaptação e financiamento (o "elefante na sala").' },
    { id: 'c3', texto: 'Explico financiamento como condicionalidade e selo verde como barreira não tarifária.' },
    { id: 'c4', texto: 'Entendo a securitização ambiental e o risco de internacionalização de recursos.' },
    { id: 'c5', texto: 'Conecto o ambiente com segurança (07), energia (08), polos (06) e Amazônia Azul (04).' },
  ],
  '06-antartica-artico-cnudm-e-leito-marinho': [
    { id: 'c1', texto: 'Comparo Antártica (cooperação, Tratado de 1959, PROANTAR) e Ártico (disputa, sem tratado desmilitarizador).' },
    { id: 'c2', texto: 'Explico por que o Ártico gera mais disputa que a Antártica.' },
    { id: 'c3', texto: 'Domino os conceitos da CNUDM (mar territorial, ZEE, plataforma continental, "A Área", ISA).' },
    { id: 'c4', texto: 'Entendo a CNUDM como instrumento de paz num lugar e arma de disputa (lawfare) noutro.' },
    { id: 'c5', texto: 'Conecto os polos com oceanopolítica (04), meio ambiente (05) e energia (08).' },
  ],
  '07-seguranca-internacional-ampliada': [
    { id: 'c1', texto: 'Traço a evolução do conceito restrito (militar) ao ampliado (Copenhague, Buzan, cinco setores).' },
    { id: 'c2', texto: 'Explico securitização como ato discursivo e a conecto ao Construtivismo (01).' },
    { id: 'c3', texto: 'Defino guerra cognitiva, infodemia, soberania algorítmica e Dissuasão 2.0.' },
    { id: 'c4', texto: 'Listo vulnerabilidades (alimentar, hídrica, infraestrutura crítica, cabos) e fecho em multidomínio.' },
    { id: 'c5', texto: 'Sei responder "como ferir a segurança brasileira sem guerra convencional".' },
  ],
  '08-energia-como-eixo-geoeconomico': [
    { id: 'c1', texto: 'Defino segurança energética pelo tripé e a ligo à autonomia/subordinação.' },
    { id: 'c2', texto: 'Leio a transição energética como estratégia (não só ecologia) e explico "Eletro-estados".' },
    { id: 'c3', texto: 'Domino o eixo Europa-Rússia (gás como coerção) e a estratégia dual chinesa (Málaca → Rússia + renováveis).' },
    { id: 'c4', texto: 'Explico por que o carvão = autonomia asiática.' },
    { id: 'c5', texto: 'Sustento o paradoxo brasileiro: matriz renovável + pré-sal × 98% do petróleo no mar → necessidade do SN-BR.' },
  ],
  '09-globalizacao-cadeias-e-logistica': [
    { id: 'c1', texto: 'Conto a genealogia da globalização (séculos; fases do capitalismo até o informacional).' },
    { id: 'c2', texto: 'Explico a inversão: interdependência de motor de paz a fonte de vulnerabilidade.' },
    { id: 'c3', texto: 'Domino "chokepoints" (com o dado dos 55% dos grãos) e a securitização da economia.' },
    { id: 'c4', texto: 'Diferencio nearshoring, friendshoring e reshoring.' },
    { id: 'c5', texto: 'Explico a vulnerabilidade dupla brasileira (Amazônia Azul + infraestrutura terrestre precária).' },
  ],
  '10-organizacoes-internacionais-imo-e-migracoes': [
    { id: 'c1', texto: 'Respondo com precisão: as OIs não estão acabando, estão sendo tensionadas/instrumentalizadas.' },
    { id: 'c2', texto: 'Conheço a origem funcionalista das OIs (Reno, telégrafo, correios → ONU/OMC).' },
    { id: 'c3', texto: 'Domino a IMO em profundidade (90% do comércio, SOLAS, LRIT, SAR, não-neutralidade).' },
    { id: 'c4', texto: 'Explico os blocos como cooperação-competição e as migrações como tema securitizado.' },
    { id: 'c5', texto: 'Conecto a governança com a Amazônia Azul e o risco de internacionalização de recursos.' },
  ],
  '11-sintese-brasil-marinha': [
    { id: 'c1', texto: 'Articulo a tese-síntese do curso: poder, mar, interdependência vulnerável e autonomia estratégica.' },
    { id: 'c2', texto: 'Listo as oito formas de poder (militar, econômico, energético, marítimo, ambiental, tecnológico, institucional, narrativo).' },
    { id: 'c3', texto: 'Explico por que o mar ganha centralidade num mundo de competição multidomínio.' },
    { id: 'c4', texto: 'Conecto Poder Naval, Amazônia Azul, CNUDM, IMO e as várias seguranças num único argumento.' },
    { id: 'c5', texto: 'Respondo "qual o papel da Marinha do Brasil nesse mundo" sem decorar.' },
  ],
  '99-revisao-final': [
    { id: 'c1', texto: 'Reproduzo de cor a frase-matriz e o método contexto → ... → Brasil/Marinha.' },
    { id: 'c2', texto: 'Respondo as três lentes (Realismo/Liberalismo/Construtivismo) sobre um caso atual.' },
    { id: 'c3', texto: 'Explico unimultipolaridade e "integração como arma".' },
    { id: 'c4', texto: 'Conecto oceanopolítica, CNUDM e Amazônia Azul aos interesses brasileiros.' },
    { id: 'c5', texto: 'Comparo Antártica × Ártico e explico por que o Ártico é mais conflituoso.' },
    { id: 'c6', texto: 'Conecto energia, meio ambiente e segurança internacional ampliada.' },
    { id: 'c7', texto: 'Explico por que a globalização virou vulnerabilidade e o que são os três -shorings.' },
    { id: 'c8', texto: 'Sei a função da IMO e por que as OIs estão tensionadas (não acabando).' },
    { id: 'c9', texto: 'Fecho qualquer resposta no papel da Marinha e na autonomia estratégica brasileira.' },
  ],
};

export const checklistDe = (slug: string) => checklists[slug] ?? [];

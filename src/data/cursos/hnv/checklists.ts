// Itens de checklist por mini-matéria (persistidos em localStorage). Id estável por item.
import type { ItemChecklist } from '@tipos/lesson';
export type { ItemChecklist } from '@tipos/lesson';

export const checklists: Record<string, ItemChecklist[]> = {
  '00-visao-geral': [
    { id: 'c1', texto: 'Entendo que a matéria trata de poder naval como instrumento de impérios, não de batalhas isoladas.' },
    { id: 'c2', texto: 'Sei costurar os cinco eixos: tecnologia, economia, religião, diplomacia e governo de impérios.' },
    { id: 'c3', texto: 'Sei que a prova cobra contextualização, causalidade e leitura real dos textos.' },
  ],
  '01-mediterraneo-antigo-e-batalha-de-mylae': [
    { id: 'c1', texto: 'Diferencio o exército cidadão romano do mercenarismo cartaginês.' },
    { id: 'c2', texto: 'Explico por que a Sicília e o Estreito de Messina eram estratégicos.' },
    { id: 'c3', texto: 'Sei o que era o corvus e como transformou a batalha naval em terrestre.' },
    { id: 'c4', texto: 'Não reduzo Mylae ao corvus: sei a causa profunda (modelo econômico-social).' },
    { id: 'c5', texto: 'Conheço as consequências internas e externas da derrota cartaginesa.' },
  ],
  '02-da-galera-ao-navio-de-vela': [
    { id: 'c1', texto: 'Comparo a galera mediterrânea com a coga do Mar do Norte.' },
    { id: 'c2', texto: 'Explico o binômio vela-canhão e seu impacto estratégico.' },
    { id: 'c3', texto: 'Relaciono a tecnologia naval às grandes navegações ibéricas.' },
    { id: 'c4', texto: 'Sei o papel de Sluys (1340) e Dover (1217) na transição tática.' },
  ],
  '03-franca-antartica-corso-e-religiao': [
    { id: 'c1', texto: 'Distingo corso de pirataria (respaldo estatal).' },
    { id: 'c2', texto: 'Explico a ameaça bifronte: econômico-territorial e religiosa.' },
    { id: 'c3', texto: 'Diferencio mare clausum de mare liberum.' },
    { id: 'c4', texto: 'Sei o que foi a "peçonha luterana" e o caso de Jean de Bolés.' },
    { id: 'c5', texto: 'Relaciono guerra viva e mercês régias à formação das elites do Rio.' },
  ],
  '04-ocupacoes-francesas-e-holandesas': [
    { id: 'c1', texto: 'Conheço a invasão da Bahia (1624) e a Jornada dos Vassalos (1625).' },
    { id: 'c2', texto: 'Sei o resultado e a importância estratégica da Batalha de Abrolhos (1631).' },
    { id: 'c3', texto: 'Acompanho a invasão de Pernambuco (1630) e a expansão de Nassau.' },
    { id: 'c4', texto: 'Entendo o papel do bloqueio naval e do controle do litoral.' },
  ],
  '05-brasil-holandes-restauracao-e-imperio': [
    { id: 'c1', texto: 'Explico o nexo atlântico Brasil-Angola (sem Angola, sem açúcar, sem receita).' },
    { id: 'c2', texto: 'Defino Estado polissinodal sem reduzi-lo a "vários conselhos".' },
    { id: 'c3', texto: 'Entendo a monarquia pluricontinental (centralidade do reino x centralização).' },
    { id: 'c4', texto: 'Sei a relação ambígua Portugal-Holanda e o papel da diplomacia.' },
    { id: 'c5', texto: 'Conheço a reconquista de Angola (1648) por Salvador Correia de Sá.' },
  ],
  '99-revisao-final': [
    { id: 'c1', texto: 'Treinei discursivas no modelo contexto → conceito → exemplo → consequência.' },
    { id: 'c2', texto: 'Revisei as armadilhas de prova de cada texto.' },
    { id: 'c3', texto: 'Refiz as questões que errei e entendi o porquê.' },
  ],
};

export const checklistDe = (slug: string) => checklists[slug] ?? [];

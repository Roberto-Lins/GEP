// Checkpoints de aprendizado por mini-matéria (persistidos em localStorage). Id estável
// por item. São afirmações de autoavaliação ("Consigo explicar / diferenciar / resolver")
// no estilo pedido pela matéria. O checklist do 99 fecha a prontidão para a P1.
import type { ItemChecklist } from '@tipos/lesson';
export type { ItemChecklist } from '@tipos/lesson';

export const checklists: Record<string, ItemChecklist[]> = {
  '00-introducao-ao-direito': [
    { id: 'c1', texto: 'Consigo explicar, em uma frase, o que é o Direito e por que ele existe na sociedade.' },
    { id: 'c2', texto: 'Sei justificar por que o Direito é uma ciência social e normativa (e não exata).' },
    { id: 'c3', texto: 'Entendo o encadeamento fato → conflito → norma → solução (raciocínio jurídico).' },
    { id: 'c4', texto: 'Conheço os cinco formatos de questão que a P1 cobra.' },
  ],
  '01-sociedade-moral-religiao-e-norma': [
    { id: 'c1', texto: 'Consigo diferenciar norma jurídica, norma moral e norma religiosa.' },
    { id: 'c2', texto: 'Sei explicar as quatro características da norma jurídica (coercitividade, heteronomia, bilateralidade, generalidade).' },
    { id: 'c3', texto: 'Entendo a teoria dos círculos entre Direito e Moral (mínimo ético, círculos concêntricos/secantes).' },
    { id: 'c4', texto: 'Diferencio igualdade formal de igualdade material.' },
  ],
  '02-direito-subjetivo-pessoas-relacao-juridica': [
    { id: 'c1', texto: 'Diferencio Direito objetivo (norma agendi) de Direito subjetivo (facultas agendi).' },
    { id: 'c2', texto: 'Distingo capacidade de direito de capacidade de fato e identifico os incapazes.' },
    { id: 'c3', texto: 'Sei quando há representação, assistência ou emancipação.' },
    { id: 'c4', texto: 'Identifico os elementos da relação jurídica, inclusive objeto imediato × mediato.' },
    { id: 'c5', texto: 'Consigo resolver um caso simples sobre capacidade civil de um menor.' },
  ],
  '03-fontes-divisoes-e-sistemas-do-direito': [
    { id: 'c1', texto: 'Reconheço as fontes do Direito (lei, costume, jurisprudência, doutrina).' },
    { id: 'c2', texto: 'Diferencio fonte de meio de integração (LINDB art. 4º: analogia, costumes, princípios gerais).' },
    { id: 'c3', texto: 'Diferencio Direito Público, Direito Privado e Direito Social.' },
    { id: 'c4', texto: 'Comparo Direito Natural com Direito Positivo e situo os grandes sistemas jurídicos.' },
  ],
  '04-estado-nacao-soberania-e-federacao': [
    { id: 'c1', texto: 'Diferencio Estado de Nação.' },
    { id: 'c2', texto: 'Diferencio soberania de autonomia.' },
    { id: 'c3', texto: 'Diferencio Federação de Confederação.' },
    { id: 'c4', texto: 'Identifico os elementos do Estado (povo, território, governo soberano) e as características da soberania.' },
  ],
  '05-governo-democracia-e-constituicao': [
    { id: 'c1', texto: 'Diferencio forma de governo (monarquia × república) de sistema de governo (presidencialismo × parlamentarismo).' },
    { id: 'c2', texto: 'Diferencio plebiscito de referendo e sei o que é iniciativa popular.' },
    { id: 'c3', texto: 'Sei classificar as Constituições e explicar por que a CF/88 é super-rígida.' },
    { id: 'c4', texto: 'Diferencio poder constituinte originário de derivado e sei o que são cláusulas pétreas.' },
  ],
  '06-organizacao-do-estado-e-competencias': [
    { id: 'c1', texto: 'Conheço a organização político-administrativa do Brasil (União, Estados, DF, Municípios) e sua autonomia.' },
    { id: 'c2', texto: 'Diferencio competência exclusiva de privativa e competência comum de concorrente.' },
    { id: 'c3', texto: 'Consigo identificar, em um caso, qual ente federativo é competente para determinada matéria.' },
  ],
  '07-tres-poderes-e-funcoes-essenciais': [
    { id: 'c1', texto: 'Diferencio funções típicas de funções atípicas de cada Poder.' },
    { id: 'c2', texto: 'Conheço a estrutura do Congresso Nacional e os principais órgãos do Judiciário.' },
    { id: 'c3', texto: 'Sei o papel de cada função essencial à Justiça (MP, Advocacia Pública, Advocacia, Defensoria).' },
    { id: 'c4', texto: 'Consigo correlacionar Poder/órgão/função em uma situação concreta.' },
  ],
  '08-direitos-fundamentais-e-ordem-economica': [
    { id: 'c1', texto: 'Sei justificar por que os direitos fundamentais NÃO têm caráter absoluto.' },
    { id: 'c2', texto: 'Consigo identificar o remédio constitucional adequado (HC, HD, MS, direito de petição) em um caso.' },
    { id: 'c3', texto: 'Diferencio direitos individuais de direitos sociais.' },
    { id: 'c4', texto: 'Conheço os princípios da ordem econômica e as restrições do estado de defesa e de sítio.' },
  ],
  '99-revisao-final': [
    { id: 'c1', texto: 'Consigo explicar o que é o Direito e diferenciar Direito, Moral e Religião.' },
    { id: 'c2', texto: 'Domino as quatro características da norma jurídica.' },
    { id: 'c3', texto: 'Diferencio Direito objetivo de subjetivo e resolvo um caso de capacidade civil.' },
    { id: 'c4', texto: 'Reconheço fontes e integração do Direito e diferencio Público/Privado/Social.' },
    { id: 'c5', texto: 'Diferencio Estado × Nação, soberania × autonomia e Federação × Confederação.' },
    { id: 'c6', texto: 'Diferencio plebiscito × referendo e formas × sistemas de governo, e sei classificar a CF/88.' },
    { id: 'c7', texto: 'Identifico qual ente federativo tem cada competência.' },
    { id: 'c8', texto: 'Diferencio funções típicas × atípicas dos Poderes e o papel das funções essenciais à Justiça.' },
    { id: 'c9', texto: 'Escolho o remédio constitucional adequado e justifico por que direitos fundamentais não são absolutos.' },
  ],
};

export const checklistDe = (slug: string) => checklists[slug] ?? [];

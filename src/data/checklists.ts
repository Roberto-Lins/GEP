// Itens de checklist de cada mini matéria — usados pelo componente interativo
// ChecklistMateria (persistência em localStorage). Cada item tem id estável.

export interface ItemChecklist {
  id: string;
  texto: string;
}

export const checklists: Record<string, ItemChecklist[]> = {
  '00-ideia-central-da-prova': [
    { id: 'c1', texto: 'Entendo que a prova cobra comparação entre modelos e aplicação de conceitos.' },
    { id: 'c2', texto: 'Sei que o Estado existe para entregar valor público à sociedade.' },
    { id: 'c3', texto: 'Reconheço os três modelos (patrimonialista, burocrático, gerencial) como fio condutor.' },
    { id: 'c4', texto: 'Sei como governança, orçamento, defesa e MB se conectam aos modelos.' },
  ],
  '01-estado-governo-administracao-governanca': [
    { id: 'c1', texto: 'Diferencio Estado, Governo, Administração Pública e Governança.' },
    { id: 'c2', texto: 'Sei os quatro elementos do Estado (Dallari): soberania, território, povo, finalidade.' },
    { id: 'c3', texto: 'Distingo desconcentração de descentralização.' },
    { id: 'c4', texto: 'Sei o que compõe a Administração Direta e a Indireta.' },
    { id: 'c5', texto: 'Diferencio autarquia, fundação, empresa pública e sociedade de economia mista.' },
    { id: 'c6', texto: 'Entendo o conflito de agência como origem da governança.' },
  ],
  '02-weber-e-burocracia': [
    { id: 'c1', texto: 'Sei que burocracia, em Weber, não é "papelada inútil".' },
    { id: 'c2', texto: 'Diferencio as três dominações: tradicional, carismática e racional-legal.' },
    { id: 'c3', texto: 'Domino a tríade: formalidade, impessoalidade e profissionalismo.' },
    { id: 'c4', texto: 'Explico por que a burocracia superou o patrimonialismo.' },
    { id: 'c5', texto: 'Resolvi as questões do tema e revisei meus erros.' },
  ],
  '03-patrimonialismo-e-disfuncoes-burocraticas': [
    { id: 'c1', texto: 'Defino patrimonialismo (res publica x res principis).' },
    { id: 'c2', texto: 'Diferencio burocracia ideal de burocratismo (disfunção).' },
    { id: 'c3', texto: 'Associo Merton, Perrow e Roth às suas disfunções.' },
    { id: 'c4', texto: 'Entendo: no patrimonialismo falta regra; na disfunção, há excesso/mau uso dela.' },
  ],
  '04-organizacoes-mecanicistas-e-organicas': [
    { id: 'c1', texto: 'Comparo organização mecanicista e orgânica.' },
    { id: 'c2', texto: 'Relaciono cada modelo ao ambiente (estável x dinâmico).' },
    { id: 'c3', texto: 'Sei o exemplo da força militar (desfile x combate) e o modelo situacional.' },
  ],
  '05-modelos-de-administracao-publica': [
    { id: 'c1', texto: 'Comparo patrimonialista, burocrática e gerencial em um quadro.' },
    { id: 'c2', texto: 'Diferencio controle por processos (a priori) e por resultados (a posteriori).' },
    { id: 'c3', texto: 'Explico o conceito de cidadão-cliente.' },
    { id: 'c4', texto: 'Sei que o gerencial não elimina a burocracia, mas a flexibiliza.' },
  ],
  '06-reformas-administrativas-no-brasil': [
    { id: 'c1', texto: 'Coloco DASP, DL 200/67, CF/88 e Reforma de 1995 na ordem certa.' },
    { id: 'c2', texto: 'Sei o que cada marco representou (mérito, descentralização, retrocesso, gerencial).' },
    { id: 'c3', texto: 'Explico por que a CF/88 é vista como "retrocesso burocrático" pelo PDRAE.' },
  ],
  '07-pdrae-e-reforma-de-1995': [
    { id: 'c1', texto: 'Sei o que foi o PDRAE e seu diagnóstico de crise.' },
    { id: 'c2', texto: 'Diferencio administração burocrática e gerencial.' },
    { id: 'c3', texto: 'Explico o conceito de cidadão-cliente.' },
    { id: 'c4', texto: 'Listo os quatro setores do aparelho do Estado e sua propriedade.' },
    { id: 'c5', texto: 'Explico o controle por resultados.' },
    { id: 'c6', texto: 'Resolvi questões e revisei as pegadinhas do tema.' },
  ],
  '08-ppa-ldo-loa-e-despesa-publica': [
    { id: 'c1', texto: 'Sei a função do PPA, da LDO e da LOA.' },
    { id: 'c2', texto: 'Domino a sequência planejamento → orçamento.' },
    { id: 'c3', texto: 'Sei a vigência do PPA (2º ano até o 1º do governo seguinte).' },
    { id: 'c4', texto: 'Domino as etapas da despesa: empenho, liquidação, pagamento.' },
    { id: 'c5', texto: 'Diferencio despesa corrente (custeio) de despesa de capital (investimento).' },
  ],
  '09-orcamento-de-defesa': [
    { id: 'c1', texto: 'Relaciono desenvolvimento econômico e capacidade de defesa.' },
    { id: 'c2', texto: 'Entendo o "nó orçamentário" (peso de pessoal x baixo investimento).' },
    { id: 'c3', texto: 'Sei os parâmetros (OTAN: ≥20% investimento; Brasil ~10%; <1,5% do PIB).' },
    { id: 'c4', texto: 'Diferencio spin-off de spin-in e entendo desnacionalização e PBC.' },
  ],
  '10-sistema-de-governanca-da-mb': [
    { id: 'c1', texto: 'Diferencio Sistema Interno e Sistema Externo da governança da MB.' },
    { id: 'c2', texto: 'Sei o papel da Alta Administração Naval e do Almirantado.' },
    { id: 'c3', texto: 'Associo CEMA/ODS à gestão estratégica e as OM à gestão operacional.' },
    { id: 'c4', texto: 'Sei as quatro entregas: Defesa Naval, Segurança Marítima, Diplomacia Naval e Apoio às Ações do Estado.' },
    { id: 'c5', texto: 'Entendo o Programa Netuno e o caráter ad hoc de certas entregas.' },
  ],
};

export const checklistDe = (slug: string): ItemChecklist[] => checklists[slug] ?? [];

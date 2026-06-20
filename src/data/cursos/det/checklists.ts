// Itens de checklist de domínio por mini-matéria (persistidos em localStorage).
// Critérios derivados dos "sinais de que você dominou" da LinhaDoTempo + habilidades de prova.
import type { ItemChecklist } from '@tipos/lesson';
export type { ItemChecklist } from '@tipos/lesson';

export const checklists: Record<string, ItemChecklist[]> = {
  '00-ideia-central-da-prova': [
    { id: 'c1', texto: 'Sei que a PP1 cobra prever o comportamento do circuito, não decorar nomes.' },
    { id: 'c2', texto: 'Reconheço as famílias: regular tensão, deformar/deslocar onda, comparar/temporizar, disparar, gerar rampa.' },
    { id: 'c3', texto: 'Lembro que radar de pulso NÃO cai na PP1 (fica para o T2).' },
  ],
  '01-ferramentas-de-calculo': [
    { id: 'c1', texto: 'Calculo um divisor de tensão sem hesitar.' },
    { id: 'c2', texto: 'Aplico Lei de Ohm e as três formas de potência (P=VI=I²R=V²/R).' },
    { id: 'c3', texto: 'Sei quando usar carga exponencial RC e quando usar dV/dt = I/C (fonte de corrente).' },
    { id: 'c4', texto: 'Converto kΩ, mA, µF, ms e Hz com segurança.' },
    { id: 'c5', texto: 'Decido o tipo de conta ANTES de substituir números.' },
  ],
  '02-fontes-cc-reguladas': [
    { id: 'c1', texto: 'Descrevo a cadeia CA → retificador → filtro → regulador → carga.' },
    { id: 'c2', texto: 'Explico em uma frase por que o filtro não basta e o regulador é necessário.' },
    { id: 'c3', texto: 'Identifico o elemento de referência (Zener/divisor) e o de controle (transistor/CI).' },
    { id: 'c4', texto: 'Calculo IL = VO/RL e a potência nos componentes.' },
  ],
  '03-reguladores-com-transistor': [
    { id: 'c1', texto: 'Distingo regulador série de paralelo pela posição do transistor.' },
    { id: 'c2', texto: 'Entendo que Q2 começa cortado no limitador e liga quando V_RSC ≈ 0,7 V.' },
    { id: 'c3', texto: 'Calculo a corrente-limite/curto por I_Lmáx ≈ 0,7/RSC.' },
    { id: 'c4', texto: 'Calculo a potência dissipada em Q1 e Q2.' },
  ],
  '04-reguladores-integrados': [
    { id: 'c1', texto: 'Leio o código do CI (7805 = 5 V, 7812 = 12 V).' },
    { id: 'c2', texto: 'Confiro se a entrada supera a tensão mínima de entrada.' },
    { id: 'c3', texto: 'Calculo Rmín = VO/Imáx.' },
    { id: 'c4', texto: 'Calculo VO do LM317 por VO = VREG·(1 + R2/R1) + IQ·R2.' },
  ],
  '05-reguladores-chaveados-pwm': [
    { id: 'c1', texto: 'Reconheço o transistor operando como chave (corte/saturação).' },
    { id: 'c2', texto: 'Calculo o ciclo de trabalho D = ton/T e VOUT = D·VIN.' },
    { id: 'c3', texto: 'Uso VFB ≈ VREF na realimentação para achar VOUT.' },
    { id: 'c4', texto: 'Explico por que o chaveado dissipa menos que o linear.' },
  ],
  '06-limitadores': [
    { id: 'c1', texto: 'Analiso semiciclo positivo e negativo separadamente.' },
    { id: 'c2', texto: 'Decido, em cada trecho, se o diodo conduz ou corta.' },
    { id: 'c3', texto: 'Calculo o nível de corte somando fonte DC ± queda do diodo.' },
    { id: 'c4', texto: 'Desenho a saída marcando valores máximo e mínimo.' },
  ],
  '07-grampeadores': [
    { id: 'c1', texto: 'Diferencio grampeador (desloca) de limitador (corta).' },
    { id: 'c2', texto: 'Identifico em qual semiciclo o capacitor carrega e com que polaridade.' },
    { id: 'c3', texto: 'Trato o capacitor carregado como fonte DC somada/subtraída da entrada.' },
    { id: 'c4', texto: 'Transformo, por exemplo, −12…+12 V em 0…+24 V (ou −24…0 V).' },
  ],
  '08-comparadores': [
    { id: 'c1', texto: 'Identifico qual sinal entra em V+ e qual em V-.' },
    { id: 'c2', texto: 'Aplico V+ > V- ⇒ +VCC e V+ < V- ⇒ -VEE.' },
    { id: 'c3', texto: 'Desenho a saída saturada (retangular), não proporcional.' },
    { id: 'c4', texto: 'Marco as trocas de estado nos cruzamentos com a referência.' },
  ],
  '09-multivibradores-555': [
    { id: 'c1', texto: 'Classifico em astável, monoestável ou biestável.' },
    { id: 'c2', texto: 'No astável, calculo T_ALTO, T_BAIXO, T e f = 1/T.' },
    { id: 'c3', texto: 'No monoestável, calculo LP = 1,1·RA·C.' },
    { id: 'c4', texto: 'Desenho VO e a tensão no capacitor.' },
  ],
  '10-schmitt-trigger': [
    { id: 'c1', texto: 'Identifico o elo de realimentação positiva.' },
    { id: 'c2', texto: 'Calculo β e os dois limiares UTP e LTP (Vref = β·VO).' },
    { id: 'c3', texto: 'Explico histerese e que o limiar muda quando a saída troca.' },
    { id: 'c4', texto: 'Desenho a saída trocando só nos limiares, não em zero.' },
  ],
  '11-tiristores-scr-diac-triac': [
    { id: 'c1', texto: 'Sei as condições de condução de SCR, DIAC e TRIAC.' },
    { id: 'c2', texto: 'Lembro que o SCR não liga se estiver reversamente polarizado, mesmo com pulso.' },
    { id: 'c3', texto: 'Subtraio a queda de condução informada antes de calcular I_pico.' },
    { id: 'c4', texto: 'Marco na senoide os intervalos exatos em que IL existe.' },
  ],
  '12-ujt-oscilador-relaxacao': [
    { id: 'c1', texto: 'Calculo RB1 = η·RBB e RB2 = RBB − RB1.' },
    { id: 'c2', texto: 'Calculo VK e VP = VK + 0,7 V.' },
    { id: 'c3', texto: 'Calculo t1, t2, T e f, sem trocar RB1(ON) por RB1(OFF).' },
    { id: 'c4', texto: 'Desenho o dente-de-serra: sobe devagar de VV a VP, cai rápido.' },
  ],
  '13-geradores-base-de-tempo': [
    { id: 'c1', texto: 'Explico por que a rampa precisa ser linear.' },
    { id: 'c2', texto: 'Uso dV/dt = I/C quando a carga é por fonte de corrente.' },
    { id: 'c3', texto: 'Calculo a corrente da fonte e a inclinação da rampa em V/s.' },
    { id: 'c4', texto: 'Defino os níveis (UJT: VV→VP; 555: 0→⅔VCC) e o tempo da rampa.' },
  ],
  '99-revisao-final': [
    { id: 'c1', texto: 'Sigo o roteiro de 8 passos antes de escolher a fórmula.' },
    { id: 'c2', texto: 'Recito as fórmulas-chave de cada bloco de cor.' },
    { id: 'c3', texto: 'Sei a tabela de "quando conduz / corta / dispara".' },
    { id: 'c4', texto: 'Confiro unidade, polaridade e ordem de grandeza no fim.' },
  ],
};

export const checklistDe = (slug: string) => checklists[slug] ?? [];

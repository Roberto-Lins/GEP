import type { ItemChecklist } from '@tipos/lesson';
export type { ItemChecklist } from '@tipos/lesson';
export const checklists: Record<string, ItemChecklist[]> = {
  "00-mapa-da-t2": [
    {
      "id": "c01",
      "texto": "Consigo explicar e aplicar escopo sem trocar sinais ou unidades."
    },
    {
      "id": "c02",
      "texto": "Consigo explicar e aplicar anb2026 sem trocar sinais ou unidades."
    }
  ],
  "01-correcoes-de-altura": [
    {
      "id": "c01",
      "texto": "Consigo explicar e aplicar alt cadeia sem trocar sinais ou unidades."
    },
    {
      "id": "c02",
      "texto": "Consigo explicar e aplicar alt dip sem trocar sinais ou unidades."
    },
    {
      "id": "c03",
      "texto": "Consigo explicar e aplicar alt ar sem trocar sinais ou unidades."
    },
    {
      "id": "c04",
      "texto": "Consigo explicar e aplicar alt sd sem trocar sinais ou unidades."
    },
    {
      "id": "c05",
      "texto": "Consigo explicar e aplicar alt pa sem trocar sinais ou unidades."
    },
    {
      "id": "c06",
      "texto": "Consigo explicar e aplicar alt lua sem trocar sinais ou unidades."
    }
  ],
  "02-linha-de-posicao": [
    {
      "id": "c01",
      "texto": "Consigo explicar e aplicar ldp gp sem trocar sinais ou unidades."
    },
    {
      "id": "c02",
      "texto": "Consigo explicar e aplicar ldp circ sem trocar sinais ou unidades."
    },
    {
      "id": "c03",
      "texto": "Consigo explicar e aplicar ldp reta sem trocar sinais ou unidades."
    },
    {
      "id": "c04",
      "texto": "Consigo explicar e aplicar ldp intercepto sem trocar sinais ou unidades."
    }
  ],
  "03-tabua-radler": [
    {
      "id": "c01",
      "texto": "Consigo dizer a finalidade da Radler e os dois elementos determinativos da reta."
    },
    {
      "id": "c02",
      "texto": "Consigo localizar P, A, Z e explicar por que AM é perpendicular a PZ."
    },
    {
      "id": "c03",
      "texto": "Consigo explicar a primeira entrada (δ,t1)→(a,b)."
    },
    {
      "id": "c04",
      "texto": "Consigo definir b e mostrar como ele se combina com φ para formar C."
    },
    {
      "id": "c05",
      "texto": "Consigo explicar a segunda entrada (a,C)→(ae,Aqd)."
    },
    {
      "id": "c06",
      "texto": "Consigo distinguir o a auxiliar da altura verdadeira usada em Δa=a−ae."
    },
    {
      "id": "c07",
      "texto": "Consigo separar o recorte conceitual até 13:00 do trabalho DHN-0607 de 2,0."
    }
  ],
  "04-hora-da-passagem-meridiana": [
    {
      "id": "c01",
      "texto": "Consigo explicar e aplicar pm conceito sem trocar sinais ou unidades."
    },
    {
      "id": "c02",
      "texto": "Consigo explicar e aplicar pm simples sem trocar sinais ou unidades."
    },
    {
      "id": "c03",
      "texto": "Consigo explicar e aplicar pm preciso sem trocar sinais ou unidades."
    },
    {
      "id": "c04",
      "texto": "Consigo explicar e aplicar pm fuso sem trocar sinais ou unidades."
    }
  ],
  "05-latitude-meridiana": [
    {
      "id": "c01",
      "texto": "Consigo explicar e aplicar lat z sem trocar sinais ou unidades."
    },
    {
      "id": "c02",
      "texto": "Consigo explicar e aplicar lat dec sem trocar sinais ou unidades."
    },
    {
      "id": "c03",
      "texto": "Consigo explicar e aplicar lat casos sem trocar sinais ou unidades."
    },
    {
      "id": "c04",
      "texto": "Consigo explicar e aplicar lat az sem trocar sinais ou unidades."
    },
    {
      "id": "c05",
      "texto": "Consigo explicar e aplicar lat movimento sem trocar sinais ou unidades."
    }
  ],
  "06-treino-integrado": [
    {
      "id": "c01",
      "texto": "Consigo explicar e aplicar treino sem trocar sinais ou unidades."
    }
  ],
  "99-revisao-final": [
    {
      "id": "c01",
      "texto": "Reconstruo de memória a cadeia ai → ao → a_ap → a."
    },
    {
      "id": "c02",
      "texto": "Faço HML → HMG → Hleg sem trocar o sinal da longitude ou do fuso."
    },
    {
      "id": "c03",
      "texto": "Decido o caso da latitude por desenho ou azimute, antes de somar ou subtrair."
    },
    {
      "id": "c04",
      "texto": "Sei quais valores precisam sair do ANB 2026 e não uso uma página de outro ano."
    }
  ]
};
export const checklistDe=(slug:string)=>checklists[slug]??[];

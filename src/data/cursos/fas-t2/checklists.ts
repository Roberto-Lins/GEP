import escopo from './escopo-planejamento.json';
import modulos from './module-meta.json';
import type { ItemChecklist } from '@tipos/lesson';

export type { ItemChecklist } from '@tipos/lesson';

interface ConceitoOrigem {
  id: string;
  modulo: string;
  nome: string;
}

const conceitos = escopo.conceitos as ConceitoOrigem[];

export const checklists: Record<string, ItemChecklist[]> = Object.fromEntries(
  modulos.map((modulo) => {
    const itens = conceitos
      .filter((conceito) => conceito.modulo === modulo.id)
      .map((conceito) => ({
        id: `fas-t2-${conceito.id.toLowerCase()}`,
        texto: `Consigo explicar e aplicar: ${conceito.nome}.`,
      }));

    if (modulo.id === 'M00') {
      itens.push(
        { id: 'fas-t2-m00-estrutura', texto: 'Sei a estrutura prevista da T2 e o peso de elétrica e fluidos.' },
        { id: 'fas-t2-m00-nomenclatura', texto: 'Confiro pela ligação — e não pelo número — qual contator é estrela ou triângulo.' },
      );
    }
    if (modulo.id === 'M15') {
      itens.push(
        { id: 'fas-t2-m15-erros', texto: 'Revisei os 38 erros frequentes e consigo corrigir cada um sem consulta.' },
        { id: 'fas-t2-m15-sopa', texto: 'Refiz a SOPA comentada e registrei as lacunas de fonte declaradas no curso.' },
        { id: 'fas-t2-m15-simulados', texto: 'Concluí ao menos um simulado em tempo de prova e corrigi todos os itens.' },
      );
    }
    return [modulo.slug, itens];
  }),
);

export const checklistDe = (slug: string) => checklists[slug] ?? [];

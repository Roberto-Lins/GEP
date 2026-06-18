// Itens de checklist por mini-matéria (persistidos em localStorage). Id estável por item.
import type { ItemChecklist } from '@tipos/lesson';
export type { ItemChecklist } from '@tipos/lesson';

export const checklists: Record<string, ItemChecklist[]> = {
  '00-visao-geral': [
    { id: 'c1', texto: 'Entendo a ideia central do curso.' },
  ],
};

export const checklistDe = (slug: string) => checklists[slug] ?? [];

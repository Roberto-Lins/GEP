import { describe, expect, it } from 'vitest';
import { simuladosCompletos, todasQuestoes, questoesPorTopico } from './exercicios';
import { topicosEstudo } from './timeline';

// Gabarito oficial da prova de 2025 (alternativa sublinhada no original).
const GABARITO_2025 = 'abcaabddacaadcccaaaccccdaacbdc';

describe('ne-ins — banco de questões', () => {
  it('reproduz a prova de 2025 com o gabarito oficial', () => {
    const prova = todasQuestoes.filter((q) => q.id.startsWith('NE-P25'));
    expect(prova).toHaveLength(30);
    prova.forEach((q, i) => {
      expect(q.tipo).toBe('multipla');
      if (q.tipo === 'multipla') expect('abcd'[q.correta]).toBe(GABARITO_2025[i]);
    });
  });

  it('não tem IDs duplicados e toda questão aponta para um módulo existente', () => {
    const ids = todasQuestoes.map((q) => q.id);
    expect(new Set(ids).size).toBe(ids.length);
    const slugs = new Set(topicosEstudo.map((t) => t.slug));
    todasQuestoes.forEach((q) => expect(slugs.has(q.topico)).toBe(true));
  });

  it('tem três simulados de 30 e os de inéditas não se repetem', () => {
    expect(simuladosCompletos.map((s) => s.questoes.length)).toEqual([30, 30, 30]);
    const a = new Set(simuladosCompletos[1].questoes.map((q) => q.id));
    simuladosCompletos[2].questoes.forEach((q) => expect(a.has(q.id)).toBe(false));
  });

  it('o módulo 00 traz a prova de 2025 inteira', () => {
    expect(questoesPorTopico('00-mapa-da-prova-e-prova-2025')).toHaveLength(30);
  });
});

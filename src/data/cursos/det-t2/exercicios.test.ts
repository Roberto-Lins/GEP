import { describe, expect, it } from 'vitest';
import banco from './question-bank.json';
import { correlacionar, discursivas, todasQuestoes, totalQuestoes } from './exercicios';
import { checklists } from './checklists';
import { timeline } from './timeline';

describe('curso DET T2', () => {
  it('preserva os 42 grupos e seus IDs públicos', () => {
    const idsFonte = banco.questoes.map((questao) => questao.id_publico).sort();
    const idsCurso = todasQuestoes.map((questao) => questao.id).sort();

    expect(todasQuestoes).toHaveLength(42);
    expect(new Set(idsCurso).size).toBe(42);
    expect(idsCurso).toEqual(idsFonte);
    expect(totalQuestoes).toEqual({ multipla: 0, vf: 0, correlacione: 15, discursiva: 27 });
  });

  it('mantém a distribuição original por módulo', () => {
    const quantidades = Object.fromEntries(
      timeline
        .filter((topico) => topico.ordem >= 1 && topico.ordem <= 4)
        .map((topico) => [
          topico.ordem,
          todasQuestoes.filter((questao) => questao.topico === topico.slug).length,
        ]),
    );

    expect(quantidades).toEqual({ 1: 9, 2: 14, 3: 9, 4: 10 });
  });

  it('gera correlações sem referências a chaves inexistentes', () => {
    for (const questao of correlacionar) {
      const chaves = new Set(questao.chaves.map((item) => item.chave));
      expect(questao.itens.length).toBeGreaterThan(0);
      expect(questao.comentario).toBeTruthy();
      for (const item of questao.itens) expect(chaves.has(item.chave)).toBe(true);
    }
  });

  it('mantém gabarito, fonte e critérios nas discursivas', () => {
    for (const questao of discursivas) {
      expect(questao.gabaritoComentado).toContain('**Gabarito:**');
      expect(questao.fonte).toBeTruthy();
      expect(questao.criterios?.length).toBeGreaterThan(0);
    }
  });

  it('possui uma entrada de checklist para cada item da timeline', () => {
    expect(Object.keys(checklists).sort()).toEqual(timeline.map((topico) => topico.slug).sort());
  });
});

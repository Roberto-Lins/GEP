import { describe, expect, it } from 'vitest';
import banco from './question-bank.json';
import {
  correlacionar,
  discursivas,
  simuladoFinal,
  simuladosCompletos,
  todasQuestoes,
  totalQuestoes,
} from './exercicios';
import { checklists } from './checklists';
import { timeline } from './timeline';

describe('curso DET T2', () => {
  it('preserva os 84 grupos e seus IDs públicos sem misturar treino e prova', () => {
    const idsFonteModulo = banco.questoes
      .filter((questao) => questao.modulo.startsWith('M'))
      .map((questao) => questao.id_publico)
      .sort();
    const idsFonteSimulado = banco.questoes
      .filter((questao) => questao.modulo.startsWith('SG'))
      .map((questao) => questao.id_publico)
      .sort();
    const idsCurso = todasQuestoes.map((questao) => questao.id).sort();
    const idsSimulado = simuladoFinal.map((questao) => questao.id).sort();
    const todosIds = [...idsCurso, ...idsSimulado];

    expect(todasQuestoes).toHaveLength(72);
    expect(simuladoFinal).toHaveLength(12);
    expect(new Set(todosIds).size).toBe(84);
    expect(idsCurso).toEqual(idsFonteModulo);
    expect(idsSimulado).toEqual(idsFonteSimulado);
    expect(totalQuestoes).toEqual({ multipla: 0, vf: 0, correlacione: 28, discursiva: 44 });
  });

  it('mantém a distribuição original por módulo', () => {
    const quantidades = Object.fromEntries(
      timeline
        .filter((topico) => topico.ordem >= 1 && topico.ordem <= 7)
        .map((topico) => [
          topico.ordem,
          todasQuestoes.filter((questao) => questao.topico === topico.slug).length,
        ]),
    );

    expect(quantidades).toEqual({ 1: 9, 2: 14, 3: 9, 4: 10, 5: 11, 6: 12, 7: 7 });
  });

  it('oferece três simulados completos com quatro questões e rubrica própria', () => {
    expect(simuladosCompletos).toHaveLength(3);
    expect(simuladosCompletos.map((simulado) => simulado.questoes.length)).toEqual([4, 4, 4]);
    expect(simuladosCompletos.map((simulado) => simulado.pontos)).toEqual([10, 10, 10]);
    expect(simuladosCompletos.map((simulado) => simulado.duracaoMinutos)).toEqual([100, 110, 120]);
  });

  it('gera correlações sem referências a chaves inexistentes', () => {
    for (const questao of [...correlacionar, ...simuladoFinal.filter((item) => item.tipo === 'correlacione')]) {
      const chaves = new Set(questao.chaves.map((item) => item.chave));
      expect(questao.itens.length).toBeGreaterThan(0);
      expect(questao.comentario).toBeTruthy();
      for (const item of questao.itens) expect(chaves.has(item.chave)).toBe(true);
    }
  });

  it('mantém gabarito, fonte e critérios nas discursivas', () => {
    for (const questao of [...discursivas, ...simuladoFinal.filter((item) => item.tipo === 'discursiva')]) {
      expect(questao.gabaritoComentado).toContain('**Gabarito:**');
      expect(questao.fonte).toBeTruthy();
      expect(questao.criterios?.length).toBeGreaterThan(0);
    }
  });

  it('possui uma entrada de checklist para cada item da timeline', () => {
    expect(Object.keys(checklists).sort()).toEqual(timeline.map((topico) => topico.slug).sort());
  });
});

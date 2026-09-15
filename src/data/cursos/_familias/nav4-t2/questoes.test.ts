import { describe, expect, it } from 'vitest';
import matriz from './matriz-cobertura.json';
import { questoesCanonicas } from './questoes';

describe('banco canônico NAV-4 T2', () => {
  it('preserva a sequência de IDs e não contém duplicidade', () => {
    const ids = questoesCanonicas.map((questao) => questao.id);
    const esperados = Array.from({ length: 68 }, (_, indice) => `NAV4-Q${String(indice + 1).padStart(3, '0')}`);

    expect(ids).toEqual(esperados);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('mantém densidade coerente por módulo e modalidade', () => {
    const porTopico = Object.fromEntries(
      [...new Set(questoesCanonicas.map((questao) => questao.topico))]
        .map((topico) => [topico, questoesCanonicas.filter((questao) => questao.topico === topico).length]),
    );
    const quantidade = (modalidade: 'rapido' | 'pra-safar' | 'completo') =>
      questoesCanonicas.filter((questao) => !questao.modalidades || questao.modalidades.includes(modalidade)).length;

    expect(porTopico).toEqual({
      '01-correcoes-de-altura': 12,
      '02-linha-de-posicao': 11,
      '03-tabua-radler': 16,
      '04-hora-da-passagem-meridiana': 11,
      '05-latitude-meridiana': 11,
      '00-mapa-da-t2': 1,
      '06-treino-integrado': 6,
    });
    expect([quantidade('rapido'), quantidade('pra-safar'), quantidade('completo')]).toEqual([54, 59, 68]);
  });

  it('fornece os metadados e a correção aprofundada exigidos', () => {
    for (const questao of questoesCanonicas) {
      expect(questao.conceptIds?.length, questao.id).toBeGreaterThan(0);
      expect(questao.modalidades?.length, questao.id).toBeGreaterThan(0);
      expect(questao.dificuldade, questao.id).toBeTruthy();
      expect(questao.competencia, questao.id).toBeTruthy();
      expect(questao.fonte, questao.id).toBeTruthy();
      expect(questao.tempoEstimadoMin, questao.id).toBeGreaterThan(0);
      expect(questao.erroProvavel, questao.id).toBeTruthy();
      expect(questao.assinatura?.length, questao.id).toBeGreaterThan(0);
      expect(questao.resolucaoPassoAPasso?.length, questao.id).toBeGreaterThanOrEqual(3);
      expect(questao.verificacaoIndependente, questao.id).toBeTruthy();

      if (questao.tipo === 'multipla') {
        expect(questao.correta, questao.id).toBeGreaterThanOrEqual(0);
        expect(questao.correta, questao.id).toBeLessThan(questao.alternativas.length);
        expect(questao.explicacaoDistratores, questao.id).toHaveLength(questao.alternativas.length);
      }
    }
  });

  it('mantém conceitos, questões e modalidades reciprocamente vinculados', () => {
    const conceitos = new Map(matriz.conceitos.map((conceito) => [conceito.concept_id, conceito]));

    for (const questao of questoesCanonicas) {
      for (const conceptId of questao.conceptIds ?? []) {
        const conceito = conceitos.get(conceptId);
        expect(conceito, `${questao.id} → ${conceptId}`).toBeTruthy();
        expect(conceito?.questoes, `${conceptId} → ${questao.id}`).toContain(questao.id);
        for (const modalidade of questao.modalidades ?? []) {
          expect(conceito?.presenca[modalidade], `${questao.id}/${conceptId}/${modalidade}`).toBe(true);
        }
      }
    }
  });
});

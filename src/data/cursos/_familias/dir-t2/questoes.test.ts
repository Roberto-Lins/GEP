import { describe, expect, it } from 'vitest';
import matriz from './matriz-cobertura.json';
import { questoesCanonicas, simuladosCanonicos } from './questoes';
import * as rapido from '../../dir-t2--rapido/exercicios';
import * as praSafar from '../../dir-t2--pra-safar/exercicios';
import * as completo from '../../dir-t2--completo/exercicios';

const modalidades = ['rapido', 'pra-safar', 'completo'] as const;
const nivel = (id: string) => id.split('-')[4];
const modulo = (id: string) => id.split('-')[2];
const TERMOS_EXCLUIDOS = /conselho (especial|permanente)|conselhos? de (justiça|justificação|disciplina)|circunscri(ç|c)(ão|ões) judici/i;

describe('banco canônico DIR T2', () => {
  const todas = [...questoesCanonicas, ...simuladosCanonicos.flatMap((s) => s.questoes)];

  it('usa IDs únicos no padrão DIR-T2-MODULO-TIPO-NIVEL-NUMERO', () => {
    const ids = todas.map((q) => q.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const id of ids) expect(id).toMatch(new RegExp('^DIR-T2-(M\\d{2}|SG0[1-3])-(OBJ|VF|COR|DIS)-N[1-4]-\\d{3}' + '\u0024'));
    expect(questoesCanonicas).toHaveLength(154);
    expect(simuladosCanonicos.map((s) => s.questoes.length)).toEqual([12, 12, 10]);
  });

  it('garante N2, N3 e N4 e duas discursivas em todo módulo substantivo, em todas as modalidades', () => {
    const substantivos = [...new Set(questoesCanonicas.map((q) => modulo(q.id)))].filter((m) => m !== 'M00');
    expect(substantivos).toHaveLength(11);
    for (const m of substantivos) {
      const doModulo = questoesCanonicas.filter((q) => modulo(q.id) === m);
      expect(doModulo.filter((q) => q.tipo === 'discursiva').length, m).toBeGreaterThanOrEqual(2);
      for (const modo of modalidades) {
        const niveis = new Set(doModulo.filter((q) => q.modalidades?.includes(modo)).map((q) => nivel(q.id)));
        for (const n of ['N2', 'N3', 'N4']) expect(niveis.has(n), [m, modo, n].join('/')).toBe(true);
      }
    }
  });

  it('mantém pelo menos 60% de itens de aplicação contextualizada', () => {
    const contextualizadas = questoesCanonicas.filter((q) => q.assinatura?.includes('aplicação contextualizada')).length;
    expect(contextualizadas / questoesCanonicas.length).toBeGreaterThanOrEqual(0.6);
  });

  it('fornece metadados, fonte localizada e explicação de cada alternativa', () => {
    for (const q of todas) {
      expect(q.conceptIds?.length, q.id).toBeGreaterThan(0);
      expect(q.modalidades?.length, q.id).toBeGreaterThan(0);
      expect(q.fonte, q.id).toMatch(/slide|art\.|p\.|perfil|MANIFESTO/);
      expect(q.competencia, q.id).toBeTruthy();
      expect(q.erroProvavel, q.id).toBeTruthy();
      expect(q.tempoEstimadoMin, q.id).toBeGreaterThan(0);
      expect(q.resolucaoPassoAPasso?.length, q.id).toBeGreaterThanOrEqual(3);
      expect(q.verificacaoIndependente, q.id).toBeTruthy();
      if (q.tipo === 'multipla') {
        expect(q.explicacaoDistratores, q.id).toHaveLength(q.alternativas.length);
        expect(q.explicacaoDistratores?.[q.correta], q.id).toMatch(/^Correta/);
        q.explicacaoDistratores?.forEach((e, i) => { if (i !== q.correta) expect(e, q.id).toMatch(/^Errada/); });
      }
      if (q.tipo === 'correlacione') {
        const chaves = new Set(q.chaves.map((c) => c.chave));
        for (const item of q.itens) expect(chaves.has(item.chave), q.id).toBe(true);
      }
      if (q.tipo === 'discursiva') {
        expect(q.gabaritoComentado, q.id).toContain('**Gabarito:**');
        expect(q.gabaritoComentado, q.id).toMatch(/Plena|plena/);
        expect(q.criterios?.length, q.id).toBeGreaterThanOrEqual(4);
      }
    }
  });

  it('distribui a posição da alternativa correta sem viés', () => {
    const multiplas = todas.filter((q) => q.tipo === 'multipla');
    const contagem = [0, 1, 2, 3].map((i) => multiplas.filter((q) => q.tipo === 'multipla' && q.correta === i).length);
    expect(Math.max(...contagem) - Math.min(...contagem)).toBeLessThanOrEqual(2);
  });

  it('não cita conteúdo excluído do recorte', () => {
    for (const q of todas) expect(JSON.stringify(q), q.id).not.toMatch(TERMOS_EXCLUIDOS);
  });

  it('mantém conceitos, questões e modalidades reciprocamente vinculados', () => {
    const conceitos = new Map(matriz.conceitos.map((c) => [c.concept_id, c]));
    for (const q of todas) {
      for (const cid of q.conceptIds ?? []) {
        const c = conceitos.get(cid);
        expect(c, q.id + ' → ' + cid).toBeTruthy();
        for (const m of q.modalidades ?? []) expect(c?.presenca[m], [q.id, cid, m].join('/')).toBe(true);
      }
    }
    for (const q of questoesCanonicas) for (const cid of q.conceptIds ?? []) expect(conceitos.get(cid)?.questoes).toContain(q.id);
  });

  it('seleciona simulados por modalidade sem clonar questões', () => {
    const bundles = { rapido, 'pra-safar': praSafar, completo };
    for (const modo of modalidades) {
      const b = bundles[modo];
      expect(b.simuladosCompletos).toHaveLength(3);
      for (const [i, s] of b.simuladosCompletos.entries()) {
        for (const q of s.questoes) {
          expect(q.modalidades).toContain(modo);
          expect(simuladosCanonicos[i].questoes).toContain(q);
        }
      }
    }
    expect(completo.simuladosCompletos.map((s) => s.questoes.length)).toEqual([12, 12, 10]);
  });
});

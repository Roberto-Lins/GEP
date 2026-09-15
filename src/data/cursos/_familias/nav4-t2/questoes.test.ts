import { describe, expect, it } from 'vitest';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import matriz from './matriz-cobertura.json';
import { auditoriaQuestoesExistentes } from './auditoria-questoes-existentes';
import { coberturaSopas } from './cobertura-sopas';
import { questoesDerivadasSopa } from './questoes-derivadas';
import { questoesCanonicas, questoesPreparacao } from './questoes';
import { simuladosCompletos } from './simulados';
import { itensSopaOficial, sopasOficiais } from './sopas-inventario';

describe('banco canônico NAV-4 T2', () => {
  it('preserva a sequência de IDs e não contém duplicidade', () => {
    const ids = questoesCanonicas.map((questao) => questao.id);
    const esperados = Array.from({ length: 68 }, (_, indice) => 'NAV4-Q' + String(indice + 1).padStart(3, '0'));

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
        expect(conceito, questao.id + ' → ' + conceptId).toBeTruthy();
        expect(conceito?.questoes, conceptId + ' → ' + questao.id).toContain(questao.id);
        for (const modalidade of questao.modalidades ?? []) {
          expect(conceito?.presenca[modalidade], [questao.id, conceptId, modalidade].join('/')).toBe(true);
        }
      }
    }
  });

  it('audita os 68 IDs anteriores sem renumerar ou misturar procedências', () => {
    expect(auditoriaQuestoesExistentes).toHaveLength(68);
    expect(auditoriaQuestoesExistentes.map((registro) => registro.id)).toEqual(questoesCanonicas.map((questao) => questao.id));
    for (const questao of questoesCanonicas) {
      expect(['derivada_sopa', 'autoral_suporte']).toContain(questao.origem);
      expect(questao.fonteId, questao.id).toBeTruthy();
      expect(questao.statusGabarito, questao.id).toBe('auditado_publicavel');
    }
  });

  it('mantém o inventário oficial completo fora do banco preparatório', () => {
    expect(sopasOficiais.map((documento) => documento.itens.length)).toEqual([23, 62]);
    expect(itensSopaOficial).toHaveLength(85);
    expect(new Set(itensSopaOficial.map((item) => item.sopa_id)).size).toBe(85);
    expect(questoesPreparacao).toHaveLength(81);
    expect(questoesPreparacao.some((questao) => questao.origem === 'sopa_oficial')).toBe(false);
    for (const item of itensSopaOficial) {
      expect(item.arquivo, item.sopa_id).toBeTruthy();
      expect(item.prova_ou_bloco_identificado, item.sopa_id).toBeTruthy();
      expect(item.enunciado_integral, item.sopa_id).toBeTruthy();
      expect(item.assinatura_de_raciocinio, item.sopa_id).toBeTruthy();
      expect(item.material_necessario, item.sopa_id).toBeDefined();
      expect(item.anexo_encontrado, item.sopa_id).toBeTruthy();
      expect(item.origem_do_gabarito, item.sopa_id).toBeTruthy();
      if (item.status_do_gabarito === 'auditado_publicavel' || item.status_do_gabarito === 'auditado_com_conflito_documentado') {
        expect(item.gabarito_auditado, item.sopa_id).toBeTruthy();
      }
    }
  });

  it('não apresenta item bloqueado como solucionável nem alternativa auditada sem comentário', () => {
    const bloqueados = itensSopaOficial.filter((item) => item.status_do_gabarito.startsWith('bloqueado_'));
    expect(bloqueados.length).toBeGreaterThan(0);
    for (const item of bloqueados) expect(item.gabarito_auditado, item.sopa_id).toBeFalsy();

    const multiplasAuditadas = itensSopaOficial.filter((item) =>
      item.tipo === 'multipla' && item.status_do_gabarito.startsWith('auditado_'));
    for (const item of multiplasAuditadas) {
      expect(item.alternativas?.length, item.sopa_id).toBeGreaterThanOrEqual(2);
      expect(item.gabarito_auditado, item.sopa_id).toBeTruthy();
      expect(item.comentario_gabarito, item.sopa_id).toBeTruthy();
    }
  });

  it('cobre cada assinatura do recorte atual antes da SOPA às cegas', () => {
    expect(coberturaSopas).toHaveLength(23);
    expect(new Set(coberturaSopas.map((item) => item.sopa_id)).size).toBe(23);
    for (const item of coberturaSopas) {
      expect(item.pagina_dirigida, item.sopa_id).toContain('PG-');
      expect(item.aula, item.sopa_id).toBeTruthy();
      expect(item.exemplo_resolvido, item.sopa_id).toBeTruthy();
      expect(item.questoes_preparatorias_relacionadas.length, item.sopa_id).toBeGreaterThanOrEqual(2);
      expect(item.equivalente_2026, item.sopa_id).toBeTruthy();
      expect(item.modalidades, item.sopa_id).toEqual(['rapido', 'pra-safar', 'completo']);
    }
  });

  it('oferece três variantes completas por família prioritária', () => {
    for (const prefixo of ['NAV4-DER-ALT-', 'NAV4-DER-PM-', 'NAV4-DER-LAT-']) {
      const completas = questoesDerivadasSopa.filter((questao) => questao.id.startsWith(prefixo) && questao.tipo === 'discursiva');
      expect(completas.length, prefixo).toBeGreaterThanOrEqual(3);
      for (const questao of completas.slice(0, 3)) {
        expect(questao.resolucaoPassoAPasso?.length, questao.id).toBeGreaterThanOrEqual(3);
        expect(questao.criteriosDeCreditoParcial?.length, questao.id).toBeGreaterThanOrEqual(3);
        expect(questao.verificacaoIndependente, questao.id).toBeTruthy();
      }
    }
  });

  it('monta três simulados de 90 minutos sem repetir questão', () => {
    expect(simuladosCompletos).toHaveLength(3);
    const ids = simuladosCompletos.flatMap((simulado) => simulado.questoes.map((questao) => questao.id));
    expect(new Set(ids).size).toBe(ids.length);
    for (const simulado of simuladosCompletos) {
      expect(simulado.duracaoMinutos).toBe(90);
      expect(simulado.pontos).toBe(10);
      expect(simulado.blueprint.reduce((total, bloco) => total + bloco.pontos, 0)).toBe(10);
      expect(simulado.rubrica.length).toBeGreaterThanOrEqual(4);
    }
  });

  it('mantém PDFs e anexos visuais referenciados no repositório', () => {
    const caminhos = [
      ...sopasOficiais.map((documento) => documento.arquivo),
      ...itensSopaOficial.map((item) => item.anexo_encontrado).filter((caminho) => caminho.startsWith('/')),
      '/imagens/cursos/nav4-t2/capa.webp',
    ];
    for (const caminho of caminhos) expect(existsSync(join(process.cwd(), 'public', caminho)), caminho).toBe(true);
  });
});

import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { featuresSchema } from '../../content/schemas';
import QuestaoCorrelacione from './QuestaoCorrelacione';
import QuestaoDiscursiva from './QuestaoDiscursiva';
import QuestaoMultiplaEscolha from './QuestaoMultiplaEscolha';
import QuestaoVF from './QuestaoVF';

const featuresBase = {
  timeline: true,
  simulados: true,
  mapasMentais: false,
  podcasts: false,
  animacoesHero: false,
  animacoesTransicao: false,
  modoRevisaoVespera: true,
  graficoProgressoAvancado: false,
};

describe('aprendizagem pelo gabarito', () => {
  it('mantém a feature desligada por padrão e aceita ativação explícita', () => {
    expect(featuresSchema.parse(featuresBase).verRespostaAntes).toBe(false);
    expect(featuresSchema.parse({ ...featuresBase, verRespostaAntes: true }).verRespostaAntes).toBe(true);
  });

  it('exibe “Ver a resposta” em todos os tipos quando habilitado', () => {
    const multipla = renderToStaticMarkup(createElement(QuestaoMultiplaEscolha, {
      questao: { id: 'M1', tipo: 'multipla', topico: '01', enunciado: 'Enunciado', alternativas: ['A', 'B'], correta: 0, comentario: 'Comentário' },
      permitirVerResposta: true,
    }));
    const vf = renderToStaticMarkup(createElement(QuestaoVF, {
      questao: { id: 'V1', tipo: 'vf', topico: '01', afirmacao: 'Afirmação', correta: true, comentario: 'Comentário' },
      permitirVerResposta: true,
    }));
    const correlacione = renderToStaticMarkup(createElement(QuestaoCorrelacione, {
      questao: { id: 'C1', tipo: 'correlacione', topico: '01', titulo: 'Correlacione', chaves: [{ chave: 'A', texto: 'Chave' }], itens: [{ texto: 'Item', chave: 'A' }] },
      permitirVerResposta: true,
    }));
    const discursiva = renderToStaticMarkup(createElement(QuestaoDiscursiva, {
      questao: { id: 'D1', tipo: 'discursiva', topico: '01', enunciado: 'Explique', gabaritoComentado: 'Gabarito' },
      permitirVerResposta: true,
    }));

    for (const html of [multipla, vf, correlacione, discursiva]) {
      expect(html).toContain('Ver a resposta');
      expect(html).toContain('sem responder');
    }
  });

  it('preserva o fluxo anterior quando a feature não está habilitada', () => {
    const multipla = renderToStaticMarkup(createElement(QuestaoMultiplaEscolha, {
      questao: { id: 'M2', tipo: 'multipla', topico: '01', enunciado: 'Enunciado', alternativas: ['A', 'B'], correta: 0, comentario: 'Comentário' },
    }));
    const discursiva = renderToStaticMarkup(createElement(QuestaoDiscursiva, {
      questao: { id: 'D2', tipo: 'discursiva', topico: '01', enunciado: 'Explique', gabaritoComentado: 'Gabarito' },
    }));

    expect(multipla).not.toContain('Ver a resposta');
    expect(discursiva).toContain('Ver gabarito comentado');
  });
});

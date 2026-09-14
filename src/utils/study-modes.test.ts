import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { CursoConfig } from '@tipos/course';
import type { QuestaoMultipla } from '@tipos/question';
import { construirFamilias, modalidadeNormalizada, rotaEntradaFamilia } from './study-modes';
import { questoesDaModalidade } from './study-mode-questions';

const configBase = (slug: string): CursoConfig => ({
  slug, titulo: slug, ano: '4', semestre: '1', epoca: 'P1', turma: 'geral', ordem: 1,
  temaVisual: 'naval-command',
  features: {
    timeline: true, simulados: false, mapasMentais: false, podcasts: false,
    animacoesHero: false, animacoesTransicao: false, modoRevisaoVespera: true,
    graficoProgressoAvancado: false,
  },
});

const multimodal = (id: 'rapido' | 'pra-safar' | 'completo'): CursoConfig => ({
  ...configBase(`nav--${id}`),
  estudo: {
    contratoVersao: '1.0.0', familiaId: 'nav', familiaTitulo: 'Navegação', id,
    modalidadePadrao: 'completo', modalidadesDisponiveis: ['rapido', 'pra-safar', 'completo'],
    legadoSomenteCompleto: false, rotulo: id, descricao: id, finalidade: id, cobertura: id,
    duracaoMinutos: 60, estadoAutoria: 'publicado',
  },
});

describe('contrato de modalidades', () => {
  it('normaliza curso legado como complete-only sem alterar o slug', () => {
    const legado = configBase('det-t2');
    const meta = modalidadeNormalizada(legado);
    expect(meta).toMatchObject({ familiaId: 'det-t2', id: 'completo', legadoSomenteCompleto: true });
    expect(rotaEntradaFamilia(construirFamilias([legado])[0])).toBe('/det-t2');
  });

  it('agrupa três variantes como uma família e usa a entrada familiar', () => {
    const familia = construirFamilias([multimodal('pra-safar'), multimodal('completo'), multimodal('rapido')])[0];
    expect(familia.modalidadesDisponiveis).toEqual(['rapido', 'pra-safar', 'completo']);
    expect(familia.representante.slug).toBe('nav--completo');
    expect(rotaEntradaFamilia(familia)).toBe('/nav');
  });

  it('filtra apenas por conceitos ensinados e preserva dificuldade e identidade da questão', () => {
    const questao: QuestaoMultipla = {
      id: 'NAV-M01-OBJ-MB-001', tipo: 'multipla', topico: '01', dificuldade: 'dificil',
      enunciado: 'Teste', alternativas: ['A', 'B'], correta: 0, comentario: 'Comentário',
      conceptIds: ['NAV-C01'], modalidades: ['rapido', 'pra-safar', 'completo'],
    };
    const selecionadas = questoesDaModalidade([questao], 'rapido', new Set(['NAV-C01']));
    expect(selecionadas).toHaveLength(1);
    expect(selecionadas[0]).toBe(questao);
    expect(selecionadas[0].dificuldade).toBe('dificil');
    expect(questoesDaModalidade([questao], 'rapido', new Set())).toEqual([]);
  });
});

class MemoriaStorage {
  private dados = new Map<string, string>();
  getItem(chave: string) { return this.dados.get(chave) ?? null; }
  setItem(chave: string, valor: string) { this.dados.set(chave, String(valor)); }
  removeItem(chave: string) { this.dados.delete(chave); }
}

describe('isolamento do progresso por variante concreta', () => {
  let memoria: MemoriaStorage;

  beforeEach(() => {
    vi.resetModules();
    memoria = new MemoriaStorage();
    vi.stubGlobal('localStorage', memoria);
    vi.stubGlobal('window', { dispatchEvent: vi.fn() });
    vi.stubGlobal('CustomEvent', class { constructor(public type: string, public init: unknown) {} });
  });

  it('não mistura Rápido, Pra Safar e Completo e preserva o namespace legado', async () => {
    memoria.setItem('bussola:v1', JSON.stringify({
      cursos: {
        'det-t2': {
          materias: {
            '06': { checklist: { 'c-legado': true }, questoes: {}, concluida: false },
          },
        },
      },
    }));
    const progresso = await import('./progress');
    progresso.marcarConcluida('nav--rapido', '01', true);
    progresso.marcarChecklist('nav--pra-safar', '01', 'c1', true);
    progresso.registrarResposta('nav--completo', '01', 'Q1', true);

    expect(progresso.materia('nav--rapido', '01').concluida).toBe(true);
    expect(progresso.materia('nav--pra-safar', '01').concluida).toBe(false);
    expect(progresso.materia('nav--completo', '01').questoes.Q1.acertou).toBe(true);
    expect(progresso.materia('det-t2', '06').checklist['c-legado']).toBe(true);
    expect(JSON.parse(memoria.getItem('bussola:v1')!).cursos['det-t2']).toBeDefined();
  });
});

import { describe, expect, it, vi } from 'vitest';
import JSZip from 'jszip';
import type { CourseKitMetadata, QuestaoBase, TopicoTimeline } from '@tipos/course-kit';
import { buildZip } from './buildZip';
import { generateCourseKit } from './generateCourseKit';
import { generatePrompt } from './generatePrompt';

const metadata: CourseKitMetadata = {
  slug: 'navegacao',
  nome: 'Navegação',
  descricao: 'Família de teste',
  estiloCobranca: 'Integra conceitos segundo a prova autorizada.',
  perfilCobranca: {
    schema_version: '1.0.0',
    status: 'confirmado',
    classificacao: {
      literalidade: 'media', interpretacao: 'alta', calculo: 'alta', detalhismo: 'media',
      memorizacao: 'baixa', pegadinhas: 'alta', integracao: 'alta', aplicacaoInedita: 'media',
    },
    evidencias: ['Prova autorizada, questão 1: integração de conceitos.'],
    fontes_localizadas: ['prova.pdf, p. 1, questão 1'],
    incertezas: [],
  },
  duracaoMinutos: { rapido: 90, 'pra-safar': 240, completo: 600 },
  ano: '4', semestre: '1', epoca: 'P1', turma: 'geral',
};

const topicos: TopicoTimeline[] = [
  {
    ordem: 1, titulo: 'Conceito nuclear', conceptId: 'NAV-C01', examinavel: true,
    modalidades: ['rapido', 'pra-safar', 'completo'],
    fonteLocalizada: ['aula.pdf, p. 2'],
    profundidadePorModalidade: { rapido: 'aplicar', 'pra-safar': 'explicar e aplicar', completo: 'derivar e integrar' },
    justificativaPorModalidade: { rapido: 'núcleo', 'pra-safar': 'examinável', completo: 'base integral' },
  },
  {
    ordem: 2, titulo: 'Adjacência autorizada', conceptId: 'NAV-C02', examinavel: false,
    modalidades: ['completo'],
    fonteLocalizada: ['anexo.pdf, p. 8'],
    profundidadePorModalidade: { completo: 'integrar' },
    justificativaPorModalidade: { rapido: 'fora do núcleo', 'pra-safar': 'não examinável', completo: 'conexão de suporte' },
  },
];

const questoes: QuestaoBase[] = [
  {
    id: 'NAV-C01-OBJ-D-001', cursoSlug: 'navegacao', dificuldade: 'dificil', tipo: 'objetiva',
    enunciado: 'Questão nuclear', gabarito: 'A', conceptIds: ['NAV-C01'],
    modalidades: ['rapido', 'pra-safar', 'completo'],
  },
  {
    id: 'NAV-C02-DIS-D-001', cursoSlug: 'navegacao', dificuldade: 'dificil', tipo: 'discursiva',
    enunciado: 'Questão de integração', conceptIds: ['NAV-C02'], modalidades: ['completo'],
  },
];

describe('Course Kit multimodal', () => {
  it('gera contrato canônico sem reduzir dificuldade ou duplicar questão compartilhada', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-09-14T12:00:00Z'));
    const kit = generateCourseKit({ metadata, topicos, questoes, midias: [] });

    expect(kit.modalidades).toEqual(['rapido', 'pra-safar', 'completo']);
    expect(kit.matrizCobertura).toMatchObject({ schema_version: '1.0.0', status: 'pendente', familia_id: 'navegacao' });
    expect(kit.matrizCobertura.conceitos[0].presenca).toEqual({ rapido: true, 'pra-safar': true, completo: true });
    expect(kit.matrizCobertura.conceitos[1].presenca).toEqual({ rapido: false, 'pra-safar': false, completo: true });
    expect(kit.questoes.filter((q) => q.id === 'NAV-C01-OBJ-D-001')).toHaveLength(1);
    expect(kit.questoes[0].dificuldade).toBe('dificil');
    expect(kit.matrizCobertura.conceitos[0].questoes).toEqual(['NAV-C01-OBJ-D-001']);
    vi.useRealTimers();
  });

  it('inclui matriz, perfil, inventário e prompt multimodal no zip', async () => {
    const blob = await buildZip({ metadata, topicos, questoes, midias: [] }, []);
    const zip = await JSZip.loadAsync(await blob.arrayBuffer());

    expect(Object.keys(zip.files)).toEqual(expect.arrayContaining([
      'course-kit.json', 'matriz-cobertura.json', 'perfil-cobranca.json',
      'fontes/manifesto.json', 'PROMPT_CLAUDE.md',
    ]));
    const matriz = JSON.parse(await zip.file('matriz-cobertura.json')!.async('text'));
    expect(matriz).toMatchObject({ schema_version: '1.0.0', familia_id: 'navegacao' });
    expect(await zip.file('PROMPT_CLAUDE.md')!.async('text')).toContain('Não produza uma modalidade por truncamento');
  });

  it('instrui autoria independente, conceitos ensinados e preservação do legado', () => {
    const prompt = generatePrompt(generateCourseKit({ metadata, topicos, questoes, midias: [] }));
    expect(prompt).toContain('Modalidade de estudo não é dificuldade');
    expect(prompt).toContain('Uma modalidade só cobra conceitos ensinados');
    expect(prompt).toContain('Não toque nos cursos legados');
  });
});

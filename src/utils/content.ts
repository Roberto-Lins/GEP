// Acesso aos dados de um curso (timeline, questões, checklists, mídias, fontes) e
// aos _dados.json das mini-matérias. Genérico via import.meta.glob: um curso novo
// que tenha src/data/cursos/<slug>/index.ts é descoberto sem editar este arquivo.

import type { TopicoTimeline, Prioridade } from '@tipos/lesson';
import type { Questao, QuestaoMultipla, QuestaoVF, GrupoCorrelacione, QuestaoDiscursiva } from '@tipos/question';
import type { Midia, Fonte } from '@tipos/media';
import type { DadosMateriaSchema } from '../content/config';
import type { SopaOficialDocumento } from '@tipos/sopa';

/** Formato esperado de src/data/cursos/<slug>/index.ts */
export interface CursoData {
  timeline: TopicoTimeline[];
  topicosEstudo: TopicoTimeline[];
  topicoPorSlug: (slug: string) => TopicoTimeline | undefined;
  vizinhos: (slug: string) => { anterior: TopicoTimeline | null; proximo: TopicoTimeline | null };
  PRIORIDADE_META: Record<Prioridade, { label: string; peso: number; classe: string }>;
  midias: Midia[];
  midiasPorTopico: (slug: string) => { videos: Midia[]; podcasts: Midia[]; mapas: Midia[] };
  /** opcional — mídias gerais (áudio/vídeo) reaproveitadas na revisão final (ex.: FAS) */
  midiasGerais?: Midia[];
  multiplaEscolha: QuestaoMultipla[];
  verdadeiroFalso: QuestaoVF[];
  correlacionar: GrupoCorrelacione[];
  /** opcional — cursos que usam questões discursivas (ex.: HNV) */
  discursivas?: QuestaoDiscursiva[];
  todasQuestoes: Questao[];
  totalQuestoes: { multipla: number; vf: number; correlacione: number; discursiva?: number };
  questoesPorTopico: (slug: string) => Questao[];
  /** opcional — simulado final com questões próprias (variações), separado do banco principal (ex.: FAS) */
  simuladoFinal?: Questao[];
  /** opcional — provas nomeadas e cronometradas, cada uma com seu próprio conjunto de questões */
  simuladosCompletos?: Array<{
    id: string;
    titulo: string;
    descricao: string;
    duracaoMinutos: number;
    pontos: number;
    questoes: Questao[];
    blueprint?: Array<{ bloco: string; pontos: number; objetivo: string }>;
    rubrica?: string[];
  }>;
  /** provas oficiais reservadas para validação final, fora do banco preparatório */
  sopasOficiais?: SopaOficialDocumento[];
  checklists: Record<string, { id: string; texto: string }[]>;
  checklistDe: (slug: string) => { id: string; texto: string }[];
  fontes: Fonte[];
  fontesPorTopico: (slug: string) => Fonte[];
}

const bundles = import.meta.glob<CursoData>('/src/data/cursos/*/index.ts', { eager: true });

// mapeia slug do curso -> bundle de dados, a partir do caminho do arquivo
const registro: Record<string, CursoData> = {};
for (const [caminho, mod] of Object.entries(bundles)) {
  const slug = caminho.split('/').slice(-2)[0]; // .../cursos/<slug>/index.ts
  registro[slug] = mod as CursoData;
}

export function dadosDoCurso(slug: string): CursoData | undefined {
  return registro[slug];
}

// ── _dados.json das mini-matérias ─────────────────────────────────────────────

const dadosMaterias = import.meta.glob<DadosMateriaSchema>(
  '/src/content/cursos/*/*/_dados.json',
  { eager: true, import: 'default' },
);

const registroDados: Record<string, DadosMateriaSchema> = {};
for (const [caminho, dados] of Object.entries(dadosMaterias)) {
  const partes = caminho.split('/'); // .../cursos/<curso>/<materia>/_dados.json
  const curso = partes[partes.length - 3];
  const materia = partes[partes.length - 2];
  registroDados[`${curso}/${materia}`] = dados;
}

export function dadosMateria(curso: string, materia: string): DadosMateriaSchema | undefined {
  return registroDados[`${curso}/${materia}`];
}

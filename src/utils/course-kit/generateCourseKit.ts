// Monta o objeto course-kit.json a partir do estado do wizard.
import type { CourseKitData, CourseKitMetadata, TopicoTimeline, QuestaoBase, MidiaRef } from '@tipos/course-kit';
import { MODALIDADES_ESTUDO } from '@tipos/study-mode';

export interface KitInput {
  metadata: CourseKitMetadata;
  topicos: TopicoTimeline[];
  questoes: QuestaoBase[];
  midias: MidiaRef[];
}

export function generateCourseKit({ metadata, topicos, questoes, midias }: KitInput): CourseKitData {
  const questoesNormalizadas = questoes.map((q) => ({ ...q, conceptIds: q.conceptIds ?? [], modalidades: q.modalidades ?? [] }));
  const matrizCobertura = {
    schema_version: '1.0.0' as const,
    // O instalador confirma somente depois de conferir cobertura e localizações no corpus.
    status: 'pendente' as const,
    familia_id: metadata.slug,
    conceitos: [...topicos].sort((a, b) => a.ordem - b.ordem).map((topico) => ({
      concept_id: topico.conceptId ?? '',
      assunto: topico.titulo,
      dependencias: topico.dependencias ?? [],
      fontes_localizadas: topico.fonteLocalizada ?? [],
      evidencia_prioridade: topico.evidenciaPrioridade ?? [],
      examinavel: topico.examinavel ?? true,
      presenca: Object.fromEntries(MODALIDADES_ESTUDO.map((modo) => [modo, (topico.modalidades ?? []).includes(modo)])) as Record<(typeof MODALIDADES_ESTUDO)[number], boolean>,
      profundidade: Object.fromEntries(MODALIDADES_ESTUDO.map((modo) => [
        modo,
        topico.profundidadePorModalidade?.[modo] ?? null,
      ])) as Record<(typeof MODALIDADES_ESTUDO)[number], string | null>,
      justificativa: Object.fromEntries(MODALIDADES_ESTUDO.map((modo) => [
        modo,
        topico.justificativaPorModalidade?.[modo] ?? '[PENDENTE — justificar inclusão ou exclusão]',
      ])) as Record<(typeof MODALIDADES_ESTUDO)[number], string>,
      exemplos: topico.exemplos ?? [],
      figuras: topico.figuras ?? [],
      questoes: questoesNormalizadas.filter((q) => q.conceptIds?.includes(topico.conceptId ?? '')).map((q) => q.id),
      vulnerabilidades: topico.vulnerabilidades ?? [],
    })),
  };
  return {
    ...metadata,
    contratoModalidades: '1.0.0',
    modalidades: [...MODALIDADES_ESTUDO],
    matrizCobertura,
    topicos: [...topicos].sort((a, b) => a.ordem - b.ordem),
    questoes: questoesNormalizadas,
    midias,
    geradoEm: new Date().toISOString(),
  };
}

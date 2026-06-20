// Monta o objeto course-kit.json a partir do estado do wizard.
import type { CourseKitData, CourseKitMetadata, TopicoTimeline, QuestaoBase, MidiaRef } from '@tipos/course-kit';

export interface KitInput {
  metadata: CourseKitMetadata;
  topicos: TopicoTimeline[];
  questoes: QuestaoBase[];
  midias: MidiaRef[];
}

export function generateCourseKit({ metadata, topicos, questoes, midias }: KitInput): CourseKitData {
  return {
    ...metadata,
    topicos: [...topicos].sort((a, b) => a.ordem - b.ordem),
    questoes,
    midias,
    geradoEm: new Date().toISOString(),
  };
}

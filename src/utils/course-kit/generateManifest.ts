// Gera o manifest.json do Course Kit.
import type { CourseKitData, CourseKitManifest } from '@tipos/course-kit';

export function generateManifest(data: CourseKitData, arquivos: string[]): CourseKitManifest {
  return {
    versao: '1.0',
    slug: data.slug,
    nome: data.nome,
    geradoEm: data.geradoEm,
    totalQuestoes: data.questoes.length,
    totalTopicos: data.topicos.length,
    totalMidias: data.midias.length,
    arquivos: [...arquivos].sort(),
  };
}

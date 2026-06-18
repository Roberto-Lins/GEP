// Progresso do aluno — 100% localStorage, agora aninhado por curso.
// Chave: bussola:v1. Migração do formato antigo (gep:progresso:v1) em utils/migration.ts.

export interface ProgressoMateria {
  /** itens de checklist marcados, por id */
  checklist: Record<string, boolean>;
  /** respostas de questões: id -> { acertou } */
  questoes: Record<string, { acertou: boolean }>;
  /** marcada manualmente como concluída */
  concluida: boolean;
  /** timestamp do último acesso */
  ultimoAcesso?: number;
}

export interface ProgressoCurso {
  materias: Record<string, ProgressoMateria>;
  ultimaMateria?: string;
}

export interface Progresso {
  cursos: Record<string, ProgressoCurso>;
  ultimoCurso?: string;
}

/** Formato legado (curso único), lido apenas na migração. */
export interface ProgressoLegado {
  materias: Record<string, ProgressoMateria>;
  ultimaMateria?: string;
}

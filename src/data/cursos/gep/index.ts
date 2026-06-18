// Bundle de dados do curso GEP. A plataforma descobre os cursos via
// import.meta.glob('/src/data/cursos/*/index.ts') — para um curso novo, basta
// criar src/data/cursos/<slug>/index.ts com este mesmo formato de exports.

export * from './timeline';
export * from './exercicios';
export * from './checklists';
export * from './midias';
export * from './fontes';

// Bundle de dados do curso REL — descoberto pela plataforma via
// import.meta.glob('/src/data/cursos/*/index.ts'). Reexporta tudo o que a interface
// CursoData (src/utils/content.ts) espera: timeline, banco de questões, checklists,
// mídias e fontes. Banco de questões e mídias entram vazios nesta etapa (a adicionar).
export * from './timeline';
export * from './exercicios';
export * from './checklists';
export * from './midias';
export * from './fontes';

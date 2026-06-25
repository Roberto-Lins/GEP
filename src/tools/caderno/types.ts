// Modelo de dados do Caderno — um caderno por curso, com várias páginas.
// `content` é o documento JSON do TipTap (serializável → seguro p/ versionar,
// sanitizar e migrar). A versão permite migrações futuras sem apagar anotações.

export const NOTEBOOK_VERSION = 1;

export interface NotebookPage {
  /** Identificador único e estável (crypto.randomUUID). */
  id: string;
  /** Título editável; "" é permitido — a UI mostra "Página sem título". */
  title: string;
  /** Documento JSON do TipTap (estrutura do editor). */
  content: unknown;
  /** ISO 8601. */
  createdAt: string;
  /** ISO 8601. */
  updatedAt: string;
  /** Ordem de exibição (base 0); deixa o drag-and-drop pronto para o futuro. */
  order: number;
}

export interface CourseNotebook {
  version: number;
  /** Slug canônico do curso (de _config.json), nunca o nome exibido. */
  courseId: string;
  /** Página aberta por último; recuperada ao reabrir o Caderno. */
  selectedPageId: string | null;
  pages: NotebookPage[];
  createdAt: string;
  updatedAt: string;
}

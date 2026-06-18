// Tipos de mídia e fontes de um curso.

export type TipoMidia = 'video' | 'podcast' | 'mapa';
/** Onde a mídia está hospedada — ver docs/MEDIA-PROTOCOL.md */
export type OrigemMidia = 'local' | 'youtube' | 'r2' | 'bunny' | 'externo';

export interface Midia {
  tipo: TipoMidia;
  topico: string;
  titulo: string;
  fonte: string; // rótulo da origem (NotebookLM, YouTube, Senado...)
  src: string; // caminho em /public ou URL externa
  /** hospedagem; default 'local' quando ausente */
  origem?: OrigemMidia;
  descricao?: string;
  thumb?: string;
}

export interface Fonte {
  titulo: string;
  tipo: 'livro' | 'slide' | 'resumo' | 'prova' | 'observacao';
  descricao: string;
  arquivo?: string; // caminho em /public (se disponível para download)
  topicos: string[]; // slugs relacionados
}

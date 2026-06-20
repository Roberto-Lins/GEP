// Estima o tamanho do zip gerado (aproximação, sem compressão).
import type { ArquivoLeve } from '@tipos/course-kit';
import { formatBytes } from './classifyFile';

export function estimateSize(arquivos: ArquivoLeve[], jsonPayload: string): number {
  // base64 já está ~33% maior que o binário; soma o tamanho real dos arquivos
  // (campo `tamanho`) + o peso dos JSON/markdown de texto.
  const arquivosBytes = arquivos.reduce((acc, a) => acc + a.tamanho, 0);
  const textoBytes = new TextEncoder().encode(jsonPayload).length;
  return arquivosBytes + textoBytes;
}

export { formatBytes };

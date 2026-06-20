// Classifica arquivos como leves (entram no zip) ou pesados (só referência/URL).
// Regra do protocolo de mídia: acima de 20 MB não entra no zip.

export const LIMITE_MB = 20;
export const LIMITE_BYTES = LIMITE_MB * 1024 * 1024;

export function isPesado(tamanhoBytes: number): boolean {
  return tamanhoBytes > LIMITE_BYTES;
}

export function isLeve(tamanhoBytes: number): boolean {
  return !isPesado(tamanhoBytes);
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

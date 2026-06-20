// Leitura de arquivos no navegador para o wizard.
import type { ArquivoLeve } from '@tipos/course-kit';
import { isPesado } from './classifyFile';

export function readFileAsText(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(String(r.result ?? ''));
    r.onerror = () => reject(r.error);
    r.readAsText(file);
  });
}

/** base64 puro (sem o prefixo data:...;base64,). */
export function readFileAsBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => {
      const res = String(r.result ?? '');
      const idx = res.indexOf('base64,');
      resolve(idx >= 0 ? res.slice(idx + 'base64,'.length) : res);
    };
    r.onerror = () => reject(r.error);
    r.readAsDataURL(file);
  });
}

/** Converte um arquivo leve (< 20 MB) em ArquivoLeve; pesado → null. */
export async function fileToArquivoLeve(file: File, pasta: string): Promise<ArquivoLeve | null> {
  if (isPesado(file.size)) return null;
  const base64 = await readFileAsBase64(file);
  return {
    caminho: `${pasta}/${file.name}`,
    nome: file.name,
    tamanho: file.size,
    base64,
  };
}

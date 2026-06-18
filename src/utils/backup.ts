// Exportar / Importar / Resetar progresso (localStorage). Sem backend.
// Arquivo gerado: bussola-dos-aspirantes-backup-AAAA-MM-DD.json

import type { Progresso } from '@tipos/progress';
import { carregar, salvar, EVENTO } from './progress';
import { KEY_NOVA } from './migration';

function dataISO(): string {
  return new Date().toISOString().slice(0, 10); // AAAA-MM-DD
}

/** Baixa todo o progresso (bussola:v1) como JSON. */
export function exportarProgresso(): void {
  if (typeof document === 'undefined') return;
  const p = carregar();
  const blob = new Blob([JSON.stringify(p, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `bussola-dos-aspirantes-backup-${dataISO()}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function ehProgressoValido(x: unknown): x is Progresso {
  return !!x && typeof x === 'object' && 'cursos' in x && typeof (x as Progresso).cursos === 'object';
}

/** Lê um arquivo JSON e substitui o progresso atual. Retorna mensagem de status. */
export async function importarProgresso(file: File): Promise<{ ok: boolean; msg: string }> {
  try {
    const texto = await file.text();
    const dados = JSON.parse(texto);
    if (!ehProgressoValido(dados)) {
      return { ok: false, msg: 'Arquivo inválido: não parece um backup da Bússola.' };
    }
    if (!dados.cursos) dados.cursos = {};
    salvar(dados as Progresso);
    return { ok: true, msg: 'Progresso importado com sucesso.' };
  } catch {
    return { ok: false, msg: 'Não foi possível ler o arquivo (JSON inválido).' };
  }
}

/** Apaga todo o progresso (todos os cursos). */
export function resetarProgresso(): void {
  if (typeof localStorage === 'undefined') return;
  localStorage.removeItem(KEY_NOVA);
  window.dispatchEvent(new CustomEvent(EVENTO, { detail: { cursos: {} } }));
}

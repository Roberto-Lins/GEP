import { useRef, useState } from 'react';
import { exportarProgresso, importarProgresso, resetarProgresso } from '@utils/backup';

// Exportar / Importar / Resetar todo o progresso (localStorage). Ver docs/PROGRESS-BACKUP.md.
export default function BackupProgresso() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [msg, setMsg] = useState<string>('');

  async function aoImportar(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const r = await importarProgresso(file);
    setMsg(r.msg);
    e.target.value = '';
  }

  function aoResetar() {
    if (confirm('Apagar TODO o seu progresso (todos os cursos)? Esta ação não pode ser desfeita.')) {
      resetarProgresso();
      setMsg('Progresso apagado.');
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={() => { exportarProgresso(); setMsg('Backup exportado.'); }} className="btn-ghost text-sm">
          ↓ Exportar progresso
        </button>
        <button type="button" onClick={() => inputRef.current?.click()} className="btn-ghost text-sm">
          ↑ Importar progresso
        </button>
        <button type="button" onClick={aoResetar} className="btn-ghost text-sm text-alerta hover:border-alerta/40">
          ⟲ Resetar
        </button>
        <input ref={inputRef} type="file" accept="application/json,.json" onChange={aoImportar} className="hidden" />
      </div>
      {msg && <p className="text-xs text-nevoa/70" role="status">{msg}</p>}
    </div>
  );
}

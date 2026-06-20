import { useState } from 'react';
import type { MidiaRef, OrigemMidia, ArquivoLeve } from '@tipos/course-kit';
import { ORIGEM_LABELS } from '@tipos/course-kit';
import { formatBytes } from '@utils/course-kit/classifyFile';
import { inputCls, selectCls } from './shared';

interface Props {
  titulo: string;
  descricao: string;
  permiteUpload: boolean;
  origensPermitidas: OrigemMidia[];
  midias: MidiaRef[];
  arquivos: ArquivoLeve[];
  onAddMidia: (m: Omit<MidiaRef, 'categoria'>) => void;
  onAddArquivo: (file: File) => void;
  onRemoveMidia: (index: number) => void;
  onRemoveArquivo: (caminho: string) => void;
}

export default function MediaBlock(props: Props) {
  const {
    titulo, descricao, permiteUpload, origensPermitidas,
    midias, arquivos, onAddMidia, onAddArquivo, onRemoveMidia, onRemoveArquivo,
  } = props;

  const [t, setT] = useState('');
  const [src, setSrc] = useState('');
  const [desc, setDesc] = useState('');
  const [origem, setOrigem] = useState<OrigemMidia>(origensPermitidas[0]);

  const adicionarUrl = () => {
    if (!t.trim() || !src.trim()) return;
    onAddMidia({ titulo: t.trim(), src: src.trim(), descricao: desc.trim() || undefined, origem });
    setT('');
    setSrc('');
    setDesc('');
  };

  return (
    <div className="card p-4">
      <h4 className="font-serif text-lg text-marfim">{titulo}</h4>
      <p className="mt-0.5 text-xs text-nevoa/60">{descricao}</p>

      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <input className={inputCls} placeholder="Título" value={t} onChange={(e) => setT(e.target.value)} />
        <select className={selectCls} value={origem} onChange={(e) => setOrigem(e.target.value as OrigemMidia)}>
          {origensPermitidas.map((o) => <option key={o} value={o}>{ORIGEM_LABELS[o]}</option>)}
        </select>
        <input className={`${inputCls} sm:col-span-2`} placeholder="URL (https://…)" value={src} onChange={(e) => setSrc(e.target.value)} />
        <input className={`${inputCls} sm:col-span-2`} placeholder="Descrição curta (opcional)" value={desc} onChange={(e) => setDesc(e.target.value)} />
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-2">
        <button type="button" className="btn-ghost text-sm" onClick={adicionarUrl} disabled={!t.trim() || !src.trim()}>
          + Adicionar URL
        </button>
        {permiteUpload && (
          <label className="btn-ghost cursor-pointer text-sm">
            Enviar arquivo (&lt; 20 MB)
            <input
              type="file"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) onAddArquivo(f);
                e.currentTarget.value = '';
              }}
            />
          </label>
        )}
      </div>

      {(midias.length > 0 || arquivos.length > 0) && (
        <ul className="mt-3 space-y-1.5 text-sm">
          {midias.map((m, i) => (
            <li key={`u-${i}`} className="flex items-center justify-between gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5">
              <span className="truncate">
                <span className="text-marfim">{m.titulo}</span>{' '}
                <span className="text-nevoa/50">· {ORIGEM_LABELS[m.origem]}</span>
              </span>
              <button type="button" className="shrink-0 text-xs text-vermelho hover:underline" onClick={() => onRemoveMidia(i)}>
                remover
              </button>
            </li>
          ))}
          {arquivos.map((a) => (
            <li key={`f-${a.caminho}`} className="flex items-center justify-between gap-2 rounded-lg border border-verde/30 bg-verde/5 px-3 py-1.5">
              <span className="truncate text-marfim">📎 {a.nome} <span className="text-nevoa/50">· {formatBytes(a.tamanho)}</span></span>
              <button type="button" className="shrink-0 text-xs text-vermelho hover:underline" onClick={() => onRemoveArquivo(a.caminho)}>
                remover
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

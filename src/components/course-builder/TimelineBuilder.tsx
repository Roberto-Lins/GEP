import { useState } from 'react';
import type { TopicoTimeline } from '@tipos/course-kit';
import { parseTimeline } from '@utils/course-kit/parseTimeline';
import { readFileAsText } from '@utils/course-kit/readFile';
import { inputCls, labelCls } from './shared';

interface Props {
  topicos: TopicoTimeline[];
  onChange: (t: TopicoTimeline[]) => void;
}

export default function TimelineBuilder({ topicos, onChange }: Props) {
  const [texto, setTexto] = useState('');

  const processar = (conteudo: string, nome = '') => {
    const parsed = parseTimeline(conteudo, nome);
    onChange(parsed);
  };

  const onArquivo = async (file?: File) => {
    if (!file) return;
    const conteudo = await readFileAsText(file);
    setTexto(conteudo);
    processar(conteudo, file.name);
  };

  const editarTitulo = (i: number, titulo: string) => {
    const novo = topicos.map((t, idx) => (idx === i ? { ...t, titulo } : t));
    onChange(novo);
  };

  const remover = (i: number) => {
    onChange(topicos.filter((_, idx) => idx !== i).map((t, idx) => ({ ...t, ordem: idx })));
  };

  return (
    <div className="space-y-5">
      <p className="text-sm text-nevoa/75">
        Envie um arquivo <strong className="text-marfim">.md / .txt / .json</strong> com a divisão em tópicos,
        ou cole abaixo e clique em <strong className="text-marfim">Identificar tópicos</strong>.
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <label className="btn-ghost cursor-pointer">
          Enviar arquivo
          <input
            type="file"
            accept=".md,.txt,.json"
            className="hidden"
            onChange={(e) => onArquivo(e.target.files?.[0])}
          />
        </label>
        <button type="button" className="btn-ghost" onClick={() => processar(texto)} disabled={!texto.trim()}>
          Identificar tópicos
        </button>
      </div>

      <div>
        <label className={labelCls} htmlFor="tl">Conteúdo</label>
        <textarea
          id="tl"
          className={`${inputCls} min-h-[160px] font-mono`}
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder={'1. Introdução\n2. Tema X\n   - dica do professor: cai muito\n3. Tema Y'}
        />
      </div>

      <div>
        <h3 className="mb-2 text-sm font-semibold text-marfim">
          Tópicos identificados <span className="text-nevoa/50">({topicos.length})</span>
        </h3>
        {topicos.length === 0 ? (
          <p className="rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-nevoa/60">
            Nenhum tópico ainda.
          </p>
        ) : (
          <ol className="space-y-2">
            {topicos.map((t, i) => (
              <li key={i} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-2">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-dourado/15 text-xs font-mono text-dourado">
                  {String(i).padStart(2, '0')}
                </span>
                <input
                  className={`${inputCls} flex-1 border-transparent bg-transparent px-2 py-1`}
                  value={t.titulo}
                  onChange={(e) => editarTitulo(i, e.target.value)}
                />
                <button
                  type="button"
                  className="shrink-0 rounded-md px-2 py-1 text-xs text-vermelho hover:bg-vermelho/10"
                  onClick={() => remover(i)}
                >
                  remover
                </button>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

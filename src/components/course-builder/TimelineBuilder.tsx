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
  const [novoTitulo, setNovoTitulo] = useState('');

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

  const moverCima = (i: number) => {
    if (i === 0) return;
    const arr = [...topicos];
    [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
    onChange(arr.map((t, idx) => ({ ...t, ordem: idx })));
  };

  const moverBaixo = (i: number) => {
    if (i === topicos.length - 1) return;
    const arr = [...topicos];
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    onChange(arr.map((t, idx) => ({ ...t, ordem: idx })));
  };

  const adicionarManual = () => {
    const titulo = novoTitulo.trim();
    if (!titulo) return;
    onChange([...topicos, { ordem: topicos.length, titulo }]);
    setNovoTitulo('');
  };

  return (
    <div className="space-y-5">
      <p className="text-sm text-nevoa/75">
        Envie um arquivo <strong className="text-marfim">.md / .txt / .json</strong> com a divisão em tópicos,
        cole abaixo e clique em <strong className="text-marfim">Identificar tópicos</strong>, ou adicione manualmente.
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
        <label className={labelCls} htmlFor="tl">Colar linha do tempo (texto livre)</label>
        <textarea
          id="tl"
          className={`${inputCls} min-h-[120px] font-mono`}
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder={'1. Introdução\n2. Tema X\n   - dica do professor: cai muito\n3. Tema Y'}
        />
      </div>

      <div>
        <h3 className="mb-2 text-sm font-semibold text-marfim">
          Tópicos <span className="text-nevoa/50">({topicos.length})</span>
        </h3>
        {topicos.length === 0 ? (
          <p className="rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-nevoa/60">
            Nenhum tópico ainda. Envie um arquivo, cole texto acima, ou adicione manualmente.
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
                <div className="flex shrink-0 items-center gap-1">
                  <button
                    type="button"
                    title="Mover para cima"
                    disabled={i === 0}
                    className="rounded px-1 py-0.5 text-xs text-nevoa/50 hover:text-marfim disabled:opacity-30"
                    onClick={() => moverCima(i)}
                  >
                    ↑
                  </button>
                  <button
                    type="button"
                    title="Mover para baixo"
                    disabled={i === topicos.length - 1}
                    className="rounded px-1 py-0.5 text-xs text-nevoa/50 hover:text-marfim disabled:opacity-30"
                    onClick={() => moverBaixo(i)}
                  >
                    ↓
                  </button>
                  <button
                    type="button"
                    className="rounded-md px-2 py-1 text-xs text-vermelho hover:bg-vermelho/10"
                    onClick={() => remover(i)}
                  >
                    ✕
                  </button>
                </div>
              </li>
            ))}
          </ol>
        )}

        {/* Adição manual de tópico */}
        <div className="mt-3 flex gap-2">
          <input
            className={`${inputCls} flex-1`}
            value={novoTitulo}
            onChange={(e) => setNovoTitulo(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && adicionarManual()}
            placeholder="Título do novo tópico…"
          />
          <button
            type="button"
            className="btn-ghost shrink-0"
            onClick={adicionarManual}
            disabled={!novoTitulo.trim()}
          >
            + Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}

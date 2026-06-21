import { useState } from 'react';
import type { DificuldadeQuestao, TipoQuestao, QuestaoBase } from '@tipos/course-kit';
import { parseQuestions } from '@utils/course-kit/parseQuestions';
import { readFileAsText } from '@utils/course-kit/readFile';

interface Props {
  dificuldade: DificuldadeQuestao;
  tipo: TipoQuestao;
  cursoSlug: string;
  questoes: QuestaoBase[];
  onChange: (qs: QuestaoBase[]) => void;
}

export default function ExerciseCell({ dificuldade, tipo, cursoSlug, questoes, onChange }: Props) {
  const [nome, setNome] = useState<string>('');
  const [mostraTexto, setMostraTexto] = useState(false);
  const [texto, setTexto] = useState('');

  const processar = (conteudo: string, nomeArq = '') => {
    const qs = parseQuestions({ texto: conteudo, tipo, dificuldade, cursoSlug });
    onChange(qs);
    if (nomeArq) setNome(nomeArq);
    setTexto('');
    setMostraTexto(false);
  };

  const onArquivo = async (file?: File) => {
    if (!file) return;
    const conteudo = await readFileAsText(file);
    processar(conteudo, file.name);
  };

  const limpar = () => {
    setNome('');
    setTexto('');
    setMostraTexto(false);
    onChange([]);
  };

  const n = questoes.length;

  if (mostraTexto) {
    return (
      <div className="rounded-lg border border-dourado/30 bg-dourado/[0.04] p-2 text-center">
        <textarea
          className="w-full rounded-md border border-white/10 bg-white/5 p-1 text-[10px] text-marfim placeholder:text-nevoa/40 focus:outline-none"
          rows={4}
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder={'1. Questão...\n2. Questão...'}
          autoFocus
        />
        <div className="mt-1 flex justify-between gap-1">
          <button type="button" onClick={() => { setMostraTexto(false); setTexto(''); }} className="text-[10px] text-nevoa/50 hover:text-marfim">
            cancelar
          </button>
          <button
            type="button"
            onClick={() => processar(texto)}
            disabled={!texto.trim()}
            className="rounded bg-dourado/20 px-2 py-0.5 text-[10px] font-medium text-dourado hover:bg-dourado/30 disabled:opacity-40"
          >
            Processar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`rounded-lg border p-2 text-center ${n ? 'border-verde/40 bg-verde/5' : 'border-white/10 bg-white/[0.03]'}`}>
      <label className="block cursor-pointer rounded-md px-2 py-1 text-xs text-dourado hover:bg-dourado/10">
        {n ? `${n} questão(ões)` : 'enviar arquivo'}
        <input type="file" accept=".md,.txt" className="hidden" onChange={(e) => onArquivo(e.target.files?.[0])} />
      </label>
      {!n && (
        <button type="button" onClick={() => setMostraTexto(true)} className="text-[10px] text-nevoa/60 hover:text-dourado">
          ou colar texto
        </button>
      )}
      {nome && (
        <div className="mt-1 truncate text-[10px] text-nevoa/50" title={nome}>
          {nome}
        </div>
      )}
      {n > 0 && (
        <button type="button" onClick={limpar} className="mt-1 text-[10px] text-vermelho hover:underline">
          limpar
        </button>
      )}
    </div>
  );
}

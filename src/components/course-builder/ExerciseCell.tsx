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

  const onArquivo = async (file?: File) => {
    if (!file) return;
    const texto = await readFileAsText(file);
    const qs = parseQuestions({ texto, tipo, dificuldade, cursoSlug });
    setNome(file.name);
    onChange(qs);
  };

  const limpar = () => {
    setNome('');
    onChange([]);
  };

  const n = questoes.length;
  return (
    <div className={`rounded-lg border p-2 text-center ${n ? 'border-verde/40 bg-verde/5' : 'border-white/10 bg-white/[0.03]'}`}>
      <label className="block cursor-pointer rounded-md px-2 py-1 text-xs text-dourado hover:bg-dourado/10">
        {n ? `${n} questão(ões)` : 'enviar .md/.txt'}
        <input type="file" accept=".md,.txt" className="hidden" onChange={(e) => onArquivo(e.target.files?.[0])} />
      </label>
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

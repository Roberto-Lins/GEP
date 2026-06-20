import type { QuestaoBase } from '@tipos/course-kit';
import { DIFICULDADES, TIPOS_QUESTAO, DIFICULDADE_LABELS, TIPO_QUESTAO_LABELS } from '@tipos/course-kit';
import ExerciseCell from './ExerciseCell';
import { cellKey, type QuestoesPorCelula } from './shared';

interface Props {
  cursoSlug: string;
  questoes: QuestoesPorCelula;
  onChangeCelula: (key: string, qs: QuestaoBase[]) => void;
}

export default function ExerciseGrid({ cursoSlug, questoes, onChangeCelula }: Props) {
  const total = Object.values(questoes).reduce((acc, qs) => acc + qs.length, 0);

  return (
    <div className="space-y-4">
      <p className="text-sm text-nevoa/75">
        Envie um arquivo <strong className="text-marfim">.md / .txt</strong> por célula. O assistente conta as
        questões; a estruturação fina é feita na instalação.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-1">
          <thead>
            <tr>
              <th className="px-2 py-1 text-left text-xs font-medium text-nevoa/60"></th>
              {TIPOS_QUESTAO.map((t) => (
                <th key={t} className="px-2 py-1 text-center text-xs font-medium text-marfim">
                  {TIPO_QUESTAO_LABELS[t]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {DIFICULDADES.map((d) => (
              <tr key={d}>
                <th className="whitespace-nowrap px-2 py-1 text-left text-xs font-semibold text-marfim">
                  {DIFICULDADE_LABELS[d]}
                </th>
                {TIPOS_QUESTAO.map((t) => {
                  const key = cellKey(d, t);
                  return (
                    <td key={t} className="min-w-[110px] align-top">
                      <ExerciseCell
                        dificuldade={d}
                        tipo={t}
                        cursoSlug={cursoSlug}
                        questoes={questoes[key] ?? []}
                        onChange={(qs) => onChangeCelula(key, qs)}
                      />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-sm text-nevoa/70">
        Total de questões: <strong className="text-marfim">{total}</strong>
      </p>
    </div>
  );
}

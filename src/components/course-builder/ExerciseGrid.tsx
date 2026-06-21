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
  const countCell = (d: (typeof DIFICULDADES)[number], t: (typeof TIPOS_QUESTAO)[number]) =>
    (questoes[cellKey(d, t)] ?? []).length;

  const totalPorDif = (d: (typeof DIFICULDADES)[number]) =>
    TIPOS_QUESTAO.reduce((s, t) => s + countCell(d, t), 0);

  const totalPorTipo = (t: (typeof TIPOS_QUESTAO)[number]) =>
    DIFICULDADES.reduce((s, d) => s + countCell(d, t), 0);

  const total = DIFICULDADES.reduce((s, d) => s + totalPorDif(d), 0);

  return (
    <div className="space-y-4">
      <p className="text-sm text-nevoa/75">
        Envie um arquivo <strong className="text-marfim">.md / .txt</strong> ou cole o texto em cada célula.
        O assistente conta as questões; a estruturação fina é feita na instalação.
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
              <th className="px-2 py-1 text-center text-xs font-medium text-nevoa/50">Total</th>
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
                <td className="px-2 py-1 text-center align-middle text-sm font-semibold text-marfim">
                  {totalPorDif(d) || '—'}
                </td>
              </tr>
            ))}
            {/* Linha de totais por tipo */}
            <tr>
              <th className="px-2 py-1 text-left text-xs font-medium text-nevoa/50">Total</th>
              {TIPOS_QUESTAO.map((t) => (
                <td key={t} className="px-2 py-1 text-center text-sm font-semibold text-marfim">
                  {totalPorTipo(t) || '—'}
                </td>
              ))}
              <td className="px-2 py-1 text-center text-sm font-bold text-dourado">{total || '—'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

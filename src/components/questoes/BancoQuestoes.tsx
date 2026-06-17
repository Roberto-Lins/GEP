import { useMemo, useState } from 'react';
import type { Questao } from '@data/exercicios';
import QuestaoMultiplaEscolha from './QuestaoMultiplaEscolha';
import QuestaoVF from './QuestaoVF';
import QuestaoCorrelacione from './QuestaoCorrelacione';
import { registrarResposta } from '@utils/progresso';

interface Props {
  questoes: Questao[];
  /** quando definido, registra acertos no progresso da matéria */
  registrar?: boolean;
  /** mostra abas de filtro por tipo */
  filtros?: boolean;
  titulo?: string;
}

type Filtro = 'todos' | 'multipla' | 'vf' | 'correlacione';

const ROTULO_FILTRO: Record<Filtro, string> = {
  todos: 'Todas',
  multipla: 'Múltipla escolha',
  vf: 'Verdadeiro/Falso',
  correlacione: 'Correlacione',
};

export default function BancoQuestoes({ questoes, registrar = true, filtros = false, titulo }: Props) {
  const [filtro, setFiltro] = useState<Filtro>('todos');
  const [resultados, setResultados] = useState<Record<string, boolean>>({});

  const visiveis = useMemo(
    () => (filtro === 'todos' ? questoes : questoes.filter((q) => q.tipo === filtro)),
    [questoes, filtro],
  );

  const respondidas = Object.keys(resultados).length;
  const acertos = Object.values(resultados).filter(Boolean).length;
  const taxa = respondidas ? Math.round((acertos / respondidas) * 100) : 0;

  function aoResponder(q: Questao, acertou: boolean) {
    setResultados((p) => ({ ...p, [q.id]: acertou }));
    if (registrar) registrarResposta(q.topico, q.id, acertou);
  }

  const tiposPresentes = useMemo(() => {
    const s = new Set(questoes.map((q) => q.tipo));
    return (['multipla', 'vf', 'correlacione'] as const).filter((t) => s.has(t));
  }, [questoes]);

  return (
    <div>
      {(titulo || filtros) && (
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          {titulo && <h3 className="font-serif text-xl text-marfim">{titulo}</h3>}
          {filtros && tiposPresentes.length > 1 && (
            <div className="flex flex-wrap gap-1.5">
              {(['todos', ...tiposPresentes] as Filtro[]).map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFiltro(f)}
                  className={`rounded-lg px-3 py-1.5 text-sm transition ${
                    filtro === f ? 'bg-dourado/15 text-dourado' : 'text-nevoa/70 hover:bg-white/5'
                  }`}
                >
                  {ROTULO_FILTRO[f]}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {respondidas > 0 && (
        <div className="sticky top-[4.5rem] z-20 mb-5 flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-naval-800/90 px-4 py-3 backdrop-blur">
          <div className="flex items-center gap-4 text-sm">
            <span className="text-nevoa/70">Respondidas: <strong className="text-marfim">{respondidas}/{visiveis.length}</strong></span>
            <span className="text-progresso">✓ {acertos}</span>
            <span className="text-alerta">✗ {respondidas - acertos}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`font-mono text-sm ${taxa >= 70 ? 'text-progresso' : taxa >= 50 ? 'text-dourado' : 'text-alerta'}`}>{taxa}%</span>
            <button type="button" onClick={() => setResultados({})} className="text-xs text-nevoa/50 underline-offset-2 hover:text-nevoa hover:underline">
              zerar placar
            </button>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {visiveis.map((q, i) => {
          if (q.tipo === 'multipla')
            return <QuestaoMultiplaEscolha key={q.id} questao={q} indice={i + 1} onResponder={(a) => aoResponder(q, a)} />;
          if (q.tipo === 'vf')
            return <QuestaoVF key={q.id} questao={q} indice={i + 1} onResponder={(a) => aoResponder(q, a)} />;
          return <QuestaoCorrelacione key={q.id} questao={q} indice={i + 1} onResponder={(a) => aoResponder(q, a)} />;
        })}
      </div>

      {visiveis.length === 0 && (
        <p className="rounded-xl border border-dashed border-white/15 p-6 text-center text-nevoa/60">
          Nenhuma questão neste filtro.
        </p>
      )}
    </div>
  );
}

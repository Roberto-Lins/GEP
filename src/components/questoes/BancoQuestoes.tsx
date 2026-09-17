import { useMemo, useState } from 'react';
import type { Questao, Dificuldade } from '@tipos/question';
import QuestaoMultiplaEscolha from './QuestaoMultiplaEscolha';
import QuestaoVF from './QuestaoVF';
import QuestaoCorrelacione from './QuestaoCorrelacione';
import QuestaoDiscursiva from './QuestaoDiscursiva';
import { registrarResposta } from '@utils/progress';

interface Props {
  questoes: Questao[];
  /** curso ao qual as questões pertencem (para o progresso) */
  curso?: string;
  /** quando definido, registra acertos no progresso da matéria */
  registrar?: boolean;
  /** mostra abas de filtro por tipo */
  filtros?: boolean;
  /** permite revelar o gabarito sem registrar uma tentativa */
  permitirVerResposta?: boolean;
  titulo?: string;
}

type Filtro = 'todos' | 'multipla' | 'vf' | 'correlacione' | 'discursiva';
type FiltroDif = 'todas' | Dificuldade;

const ROTULO_FILTRO: Record<Filtro, string> = {
  todos: 'Todas',
  multipla: 'Múltipla escolha',
  vf: 'Verdadeiro/Falso',
  correlacione: 'Correlacione',
  discursiva: 'Discursivas',
};

const ROTULO_DIF: Record<FiltroDif, string> = {
  todas: 'Todas',
  facil: 'Fácil',
  medio: 'Médio',
  dificil: 'Difícil',
};

export default function BancoQuestoes({ questoes, curso = 'gep', registrar = true, filtros = false, permitirVerResposta = false, titulo }: Props) {
  const [filtro, setFiltro] = useState<Filtro>('todos');
  const [dif, setDif] = useState<FiltroDif>('todas');
  const [resultados, setResultados] = useState<Record<string, boolean>>({});

  const visiveis = useMemo(
    () =>
      questoes
        .filter((q) => filtro === 'todos' || q.tipo === filtro)
        .filter((q) => dif === 'todas' || q.dificuldade === dif),
    [questoes, filtro, dif],
  );

  const respondidas = Object.keys(resultados).length;
  const acertos = Object.values(resultados).filter(Boolean).length;
  const taxa = respondidas ? Math.round((acertos / respondidas) * 100) : 0;

  function aoResponder(q: Questao, acertou: boolean) {
    setResultados((p) => ({ ...p, [q.id]: acertou }));
    if (registrar) registrarResposta(curso, q.topico, q.id, acertou);
  }

  const tiposPresentes = useMemo(() => {
    const s = new Set(questoes.map((q) => q.tipo));
    return (['multipla', 'vf', 'correlacione', 'discursiva'] as const).filter((t) => s.has(t));
  }, [questoes]);

  const dificuldadesPresentes = useMemo(() => {
    const s = new Set(questoes.map((q) => q.dificuldade).filter(Boolean) as Dificuldade[]);
    return (['facil', 'medio', 'dificil'] as const).filter((d) => s.has(d));
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

      {/* Filtro por dificuldade — só aparece quando há questões com dificuldade definida. */}
      {dificuldadesPresentes.length > 0 && (
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <span className="text-xs uppercase tracking-wider text-nevoa/50">Dificuldade:</span>
          {(['todas', ...dificuldadesPresentes] as FiltroDif[]).map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setDif(d)}
              className={`rounded-lg border px-3 py-1 text-xs transition ${
                dif === d ? 'border-dourado bg-dourado/15 text-dourado' : 'border-white/10 text-nevoa/70 hover:border-dourado/40'
              }`}
            >
              {ROTULO_DIF[d]}
            </button>
          ))}
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
            return <QuestaoMultiplaEscolha key={q.id} questao={q} indice={i + 1} permitirVerResposta={permitirVerResposta} onResponder={(a) => aoResponder(q, a)} />;
          if (q.tipo === 'vf')
            return <QuestaoVF key={q.id} questao={q} indice={i + 1} permitirVerResposta={permitirVerResposta} onResponder={(a) => aoResponder(q, a)} />;
          if (q.tipo === 'discursiva')
            return <QuestaoDiscursiva key={q.id} questao={q} indice={i + 1} permitirVerResposta={permitirVerResposta} onResponder={(a) => aoResponder(q, a)} />;
          return <QuestaoCorrelacione key={q.id} questao={q} indice={i + 1} permitirVerResposta={permitirVerResposta} onResponder={(a) => aoResponder(q, a)} />;
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

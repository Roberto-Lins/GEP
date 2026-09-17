import { useMemo, useState } from 'react';
import type { Questao } from '@tipos/question';
import BancoQuestoes from './BancoQuestoes';

interface TopicoOpt { slug: string; titulo: string; numero: string }

interface Props {
  questoes: Questao[];
  topicos: TopicoOpt[];
  curso?: string;
  permitirVerResposta?: boolean;
}

export default function CentralQuestoes({ questoes, topicos, curso = 'gep', permitirVerResposta = false }: Props) {
  const [selecionados, setSelecionados] = useState<string[]>([]);

  function toggle(slug: string) {
    setSelecionados((p) => (p.includes(slug) ? p.filter((s) => s !== slug) : [...p, slug]));
  }

  const filtradas = useMemo(
    () => (selecionados.length === 0 ? questoes : questoes.filter((q) => selecionados.includes(q.topico))),
    [questoes, selecionados],
  );

  return (
    <div>
      <div className="mb-6 rounded-2xl border border-white/10 bg-naval-800/50 p-4">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-medium text-marfim">Filtrar por matéria</p>
          {selecionados.length > 0 && (
            <button onClick={() => setSelecionados([])} className="text-xs text-nevoa/60 underline-offset-2 hover:text-nevoa hover:underline">
              limpar ({selecionados.length})
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {topicos.map((t) => {
            const on = selecionados.includes(t.slug);
            return (
              <button
                key={t.slug}
                type="button"
                onClick={() => toggle(t.slug)}
                className={`rounded-lg border px-3 py-1.5 text-left text-xs transition ${
                  on ? 'border-dourado bg-dourado/15 text-dourado' : 'border-white/10 text-nevoa/75 hover:border-dourado/40'
                }`}
              >
                <span className="font-mono opacity-70">{t.numero}</span> {t.titulo}
              </button>
            );
          })}
        </div>
      </div>

      <p className="mb-4 text-sm text-nevoa/60">{filtradas.length} questões selecionadas.</p>
      <BancoQuestoes questoes={filtradas} curso={curso} filtros={true} registrar={true} permitirVerResposta={permitirVerResposta} key={selecionados.join(',')} />
    </div>
  );
}

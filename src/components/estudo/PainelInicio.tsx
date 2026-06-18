import { useEffect, useState } from 'react';
import { carregar, resumoQuestoes, EVENTO } from '@utils/progress';
import type { Progresso } from '@tipos/progress';

interface TopicoMin {
  slug: string;
  titulo: string;
  ordem: number;
  /** nº de itens do checklist da matéria (para calcular o progresso) */
  totalChecklist: number;
}

interface Props {
  curso?: string;
  topicos: TopicoMin[]; // apenas os de estudo (ordem < 99), já ordenados
}

function pct(p: Progresso, curso: string, t: TopicoMin): number {
  const m = p.cursos[curso]?.materias[t.slug];
  if (!m) return 0;
  if (m.concluida) return 100;
  if (!t.totalChecklist) return 0;
  return Math.min(100, Math.round((Object.values(m.checklist).filter(Boolean).length / t.totalChecklist) * 100));
}

export default function PainelInicio({ curso = 'gep', topicos }: Props) {
  const [p, setP] = useState<Progresso>({ cursos: {} });
  const [montado, setMontado] = useState(false);

  useEffect(() => {
    const calc = () => { setP(carregar()); setMontado(true); };
    calc();
    window.addEventListener(EVENTO, calc);
    window.addEventListener('storage', calc);
    return () => {
      window.removeEventListener(EVENTO, calc);
      window.removeEventListener('storage', calc);
    };
  }, []);

  const total = topicos.length;
  const concluidas = topicos.filter((t) => pct(p, curso, t) === 100).length;
  const geral = total ? Math.round(topicos.reduce((a, t) => a + pct(p, curso, t), 0) / total) : 0;
  const q = resumoQuestoes(curso, p);

  // Próxima matéria: a primeira não concluída na ordem; senão, a última acessada.
  const proxima = topicos.find((t) => pct(p, curso, t) < 100) ?? topicos[0];
  const jaComecou = montado && (geral > 0 || q.respondidas > 0);

  return (
    <div className="card relative overflow-hidden p-6 sm:p-8">
      <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-dourado/10 blur-3xl" />
      <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
        {/* Anel de progresso geral */}
        <div className="flex items-center gap-5">
          <div className="relative h-28 w-28">
            <svg viewBox="0 0 36 36" className="h-28 w-28 -rotate-90">
              <circle cx="18" cy="18" r="15.5" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2.5" />
              <circle cx="18" cy="18" r="15.5" fill="none" stroke="#D6A84F" strokeWidth="2.5" strokeLinecap="round"
                strokeDasharray={`${(geral / 100) * 97.4} 97.4`} className="transition-all duration-700" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-serif text-3xl font-bold text-marfim">{montado ? geral : 0}%</span>
              <span className="text-[10px] uppercase tracking-wider text-nevoa/50">geral</span>
            </div>
          </div>
          <div className="space-y-1 text-sm">
            <p className="text-nevoa/70">Matérias concluídas</p>
            <p className="font-serif text-2xl text-marfim">{montado ? concluidas : 0}<span className="text-nevoa/40"> / {total}</span></p>
            <p className="pt-2 text-nevoa/70">Questões respondidas</p>
            <p className="font-mono text-marfim">
              {montado ? q.respondidas : 0}
              {q.respondidas > 0 && <span className="ml-2 text-progresso">✓{q.acertos}</span>}
              {q.erros > 0 && <span className="ml-1 text-alerta">✗{q.erros}</span>}
            </p>
          </div>
        </div>

        {/* Chamada para ação */}
        <div className="sm:border-l sm:border-white/10 sm:pl-8">
          <p className="text-xs uppercase tracking-[0.2em] text-dourado/70">
            {jaComecou ? 'Continue de onde parou' : 'Comece sua trilha'}
          </p>
          <h3 className="mt-2 font-serif text-xl text-marfim">{proxima?.titulo ?? '—'}</h3>
          <a href={`/${curso}/${proxima?.slug}`} className="btn-primary mt-4 inline-flex">
            {jaComecou ? 'Retomar matéria' : 'Começar pela primeira matéria'}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/5">
            <div className="h-full rounded-full bg-dourado transition-all duration-700" style={{ width: `${montado ? geral : 0}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}

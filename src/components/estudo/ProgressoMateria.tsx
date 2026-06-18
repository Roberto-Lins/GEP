import { useEffect, useState } from 'react';
import { materia, EVENTO } from '@utils/progress';

interface Props { curso?: string; slug: string; totalChecklist: number }

// Selo compacto de progresso da matéria (topo da página), reativo ao localStorage.
export default function ProgressoMateria({ curso = 'gep', slug, totalChecklist }: Props) {
  const [pct, setPct] = useState(0);
  const [montado, setMontado] = useState(false);

  useEffect(() => {
    function calc() {
      const m = materia(curso, slug);
      let valor = 0;
      if (m.concluida) valor = 100;
      else if (totalChecklist) valor = Math.min(100, Math.round((Object.values(m.checklist).filter(Boolean).length / totalChecklist) * 100));
      setPct(valor);
      setMontado(true);
    }
    calc();
    window.addEventListener(EVENTO, calc);
    window.addEventListener('storage', calc);
    return () => {
      window.removeEventListener(EVENTO, calc);
      window.removeEventListener('storage', calc);
    };
  }, [curso, slug, totalChecklist]);

  const rotulo = !montado ? '—' : pct === 100 ? 'Concluída' : pct > 0 ? `${pct}%` : 'Não iniciada';

  return (
    <div className="flex items-center gap-3">
      <div className="relative h-11 w-11">
        <svg viewBox="0 0 36 36" className="h-11 w-11 -rotate-90">
          <circle cx="18" cy="18" r="15.5" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
          <circle
            cx="18" cy="18" r="15.5" fill="none"
            stroke={pct === 100 ? '#22C55E' : '#D6A84F'}
            strokeWidth="3" strokeLinecap="round"
            strokeDasharray={`${(pct / 100) * 97.4} 97.4`}
            className="transition-all duration-500"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-mono text-[10px] text-marfim">
          {montado ? `${pct}` : ''}
        </span>
      </div>
      <div className="leading-tight">
        <p className="text-xs uppercase tracking-wider text-nevoa/50">Progresso</p>
        <p className={`text-sm font-medium ${pct === 100 ? 'text-progresso' : 'text-marfim'}`}>{rotulo}</p>
      </div>
    </div>
  );
}

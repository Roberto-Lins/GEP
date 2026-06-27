import { useEffect, useState } from 'react';
import { carregar, percentualCurso, resumoQuestoes, EVENTO } from '@utils/progress';
import type { Progresso } from '@tipos/progress';

export interface CursoCard {
  slug: string;
  titulo: string;
  subtitulo?: string;
  descricao?: string;
  categoria?: string;
  totalMaterias: number;
  /** emblema/imagem do curso exibido no topo do card */
  imagem?: string;
}

interface Props { cursos: CursoCard[] }

export default function CourseDashboard({ cursos }: Props) {
  const [, setP] = useState<Progresso>({ cursos: {} });
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

  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {cursos.map((c) => {
        const pct = montado ? percentualCurso(c.slug, c.totalMaterias) : 0;
        const q = montado ? resumoQuestoes(c.slug) : { respondidas: 0, acertos: 0, erros: 0, taxa: 0 };
        const iniciado = pct > 0 || q.respondidas > 0;
        return (
          <a key={c.slug} href={`/${c.slug}`} className="card card-hover group relative flex flex-col gap-4 p-6">
            {c.imagem && (
              <div className="-mx-6 -mt-6 mb-2 overflow-hidden rounded-t-xl border-b border-dourado/20">
                <img
                  src={c.imagem}
                  alt={`Imagem do curso ${c.titulo}`}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            )}
            <div className="flex items-start justify-between gap-3">
              <div>
                {c.categoria && (
                  <span className="chip mb-2 inline-block border border-dourado/30 bg-dourado/10 text-[10px] uppercase tracking-wider text-dourado">
                    {c.categoria}
                  </span>
                )}
                <h3 className="font-serif text-2xl font-semibold text-marfim group-hover:text-dourado">{c.titulo}</h3>
                {c.subtitulo && <p className="mt-1 text-sm text-nevoa/75">{c.subtitulo}</p>}
              </div>
              <div className="relative h-14 w-14 shrink-0">
                <svg viewBox="0 0 36 36" className="h-14 w-14 -rotate-90">
                  <circle cx="18" cy="18" r="15.5" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
                  <circle cx="18" cy="18" r="15.5" fill="none" stroke="#D6A84F" strokeWidth="3" strokeLinecap="round"
                    strokeDasharray={`${(pct / 100) * 97.4} 97.4`} className="transition-all duration-700" />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center font-mono text-xs text-marfim">{pct}%</span>
              </div>
            </div>

            {c.descricao && <p className="line-clamp-2 text-sm text-nevoa/80">{c.descricao}</p>}

            <div className="mt-auto flex items-center justify-between pt-2 text-xs text-nevoa/60">
              <span>{c.totalMaterias} matérias</span>
              <span className="font-medium text-dourado">{iniciado ? 'Continuar →' : 'Começar →'}</span>
            </div>
          </a>
        );
      })}
    </div>
  );
}

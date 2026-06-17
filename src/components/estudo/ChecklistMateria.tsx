import { useEffect, useState } from 'react';
import type { ItemChecklist } from '@data/checklists';
import { materia, marcarChecklist, marcarConcluida } from '@utils/progresso';

interface Props {
  slug: string;
  itens: ItemChecklist[];
}

export default function ChecklistMateria({ slug, itens }: Props) {
  const [marcados, setMarcados] = useState<Record<string, boolean>>({});
  const [concluida, setConcluida] = useState(false);
  const [montado, setMontado] = useState(false);

  useEffect(() => {
    const m = materia(slug);
    setMarcados(m.checklist);
    setConcluida(m.concluida);
    setMontado(true);
  }, [slug]);

  const total = itens.length;
  const feitos = itens.filter((i) => marcados[i.id]).length;
  const pct = total ? Math.round((feitos / total) * 100) : 0;

  function toggle(id: string) {
    const novo = !marcados[id];
    setMarcados((prev) => ({ ...prev, [id]: novo }));
    marcarChecklist(slug, id, novo);
  }

  function toggleConcluida() {
    const novo = !concluida;
    setConcluida(novo);
    marcarConcluida(slug, novo);
  }

  return (
    <div className="card p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="font-serif text-lg font-semibold text-marfim">Checklist de domínio</h3>
        <span className="font-mono text-sm text-nevoa/70">
          {montado ? `${feitos}/${total}` : '—'}
        </span>
      </div>

      <div className="mb-4 h-2 overflow-hidden rounded-full bg-white/5">
        <div className="h-full rounded-full bg-progresso transition-all duration-500" style={{ width: `${pct}%` }} />
      </div>

      <ul className="space-y-2">
        {itens.map((item) => {
          const on = !!marcados[item.id];
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => toggle(item.id)}
                aria-pressed={on}
                className="flex w-full items-start gap-3 rounded-lg p-2 text-left transition hover:bg-white/5"
              >
                <span
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition ${
                    on ? 'border-progresso bg-progresso text-naval' : 'border-white/25 text-transparent'
                  }`}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span className={`text-sm leading-snug ${on ? 'text-nevoa/55 line-through' : 'text-nevoa'}`}>
                  {item.texto}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        onClick={toggleConcluida}
        className={`mt-5 w-full rounded-xl px-4 py-3 font-medium transition ${
          concluida
            ? 'border border-progresso/40 bg-progresso/15 text-progresso'
            : 'btn-primary'
        }`}
      >
        {concluida ? '✓ Matéria concluída' : 'Marcar matéria como concluída'}
      </button>
    </div>
  );
}

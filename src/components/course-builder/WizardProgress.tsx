interface Props {
  etapas: string[];
  atual: number;
  onIr?: (i: number) => void;
}

/** Barra de progresso das etapas do wizard. */
export default function WizardProgress({ etapas, atual, onIr }: Props) {
  return (
    <ol className="mb-8 flex flex-wrap items-center gap-2">
      {etapas.map((nome, i) => {
        const estado = i < atual ? 'feito' : i === atual ? 'ativo' : 'futuro';
        const podeIr = onIr && i <= atual;
        return (
          <li key={nome} className="flex items-center gap-2">
            <button
              type="button"
              disabled={!podeIr}
              onClick={() => podeIr && onIr!(i)}
              className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium transition ${
                estado === 'ativo'
                  ? 'bg-dourado text-naval'
                  : estado === 'feito'
                    ? 'bg-dourado/15 text-dourado hover:bg-dourado/25'
                    : 'bg-white/5 text-nevoa/50'
              } ${podeIr ? 'cursor-pointer' : 'cursor-default'}`}
            >
              <span className="grid h-5 w-5 place-items-center rounded-full border border-current text-[10px]">
                {estado === 'feito' ? '✓' : i + 1}
              </span>
              <span className="hidden sm:inline">{nome}</span>
            </button>
            {i < etapas.length - 1 && <span className="text-nevoa/20">—</span>}
          </li>
        );
      })}
    </ol>
  );
}

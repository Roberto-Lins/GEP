// Campo numérico rotulado reutilizado pelas calculadoras do curso Detecção.
interface Props {
  label: string;
  valor: number;
  onChange: (v: number) => void;
  unidade?: string;
  passo?: number;
  min?: number;
}

export default function CampoNumero({ label, valor, onChange, unidade, passo = 1, min = 0 }: Props) {
  return (
    <label className="flex flex-col gap-1 text-sm">
      <span className="text-nevoa/70">{label}</span>
      <span className="flex items-center gap-2">
        <input
          type="number"
          value={Number.isFinite(valor) ? valor : ''}
          step={passo}
          min={min}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          className="w-full rounded-lg border border-white/10 bg-naval-800/60 px-3 py-2 font-mono text-marfim focus:border-dourado/50 focus:outline-none"
        />
        {unidade && <span className="shrink-0 font-mono text-xs text-nevoa/60">{unidade}</span>}
      </span>
    </label>
  );
}

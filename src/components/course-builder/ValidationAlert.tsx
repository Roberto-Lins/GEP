import type { ValidacaoItem } from '@tipos/course-kit';

interface Props {
  itens: ValidacaoItem[];
  className?: string;
}

/** Lista de alertas (erros bloqueiam; avisos só alertam). */
export default function ValidationAlert({ itens, className = '' }: Props) {
  if (!itens.length) return null;
  return (
    <ul className={`space-y-1.5 ${className}`}>
      {itens.map((it, i) => (
        <li
          key={i}
          className={`flex items-start gap-2 rounded-lg border px-3 py-2 text-sm ${
            it.nivel === 'erro'
              ? 'border-vermelho/40 bg-vermelho/10 text-vermelho'
              : 'border-dourado/40 bg-dourado/10 text-dourado'
          }`}
        >
          <span aria-hidden="true">{it.nivel === 'erro' ? '✕' : '!'}</span>
          <span className="text-marfim/90">{it.mensagem}</span>
        </li>
      ))}
    </ul>
  );
}

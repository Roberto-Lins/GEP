interface Props {
  onClick: () => void;
  indice?: number;
}

/** Revela o gabarito para estudo sem registrar tentativa, acerto ou erro. */
export default function BotaoVerResposta({ onClick, indice }: Props) {
  const complemento = indice != null ? ` da questão ${indice}` : '';

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Ver a resposta${complemento} sem responder`}
      className="btn-ghost px-4 py-2 text-sm"
    >
      Ver a resposta
    </button>
  );
}

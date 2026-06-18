import { useState } from 'react';
import type { QuestaoMultipla } from '@tipos/question';

const LETRAS = ['A', 'B', 'C', 'D', 'E'];

interface Props {
  questao: QuestaoMultipla;
  indice?: number;
  onResponder?: (acertou: boolean) => void;
}

export default function QuestaoMultiplaEscolha({ questao, indice, onResponder }: Props) {
  const [escolha, setEscolha] = useState<number | null>(null);
  const [revelado, setRevelado] = useState(false);

  function responder(i: number) {
    if (revelado) return;
    setEscolha(i);
    setRevelado(true);
    onResponder?.(i === questao.correta);
  }

  return (
    <div className="card p-5">
      <div className="mb-3 flex items-start gap-2">
        {indice != null && <span className="font-mono text-sm text-dourado/70">{indice}.</span>}
        <p className="whitespace-pre-line font-medium text-marfim">{questao.enunciado}</p>
      </div>

      <ul className="space-y-2">
        {questao.alternativas.map((alt, i) => {
          const correta = i === questao.correta;
          const escolhida = i === escolha;
          let estilo = 'border-white/10 hover:border-dourado/40 hover:bg-white/5';
          if (revelado) {
            if (correta) estilo = 'border-progresso/60 bg-progresso/10';
            else if (escolhida) estilo = 'border-alerta/60 bg-alerta/10';
            else estilo = 'border-white/5 opacity-60';
          }
          return (
            <li key={i}>
              <button
                type="button"
                disabled={revelado}
                onClick={() => responder(i)}
                className={`flex w-full items-start gap-3 rounded-xl border px-3 py-2.5 text-left text-sm transition ${estilo}`}
              >
                <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border font-mono text-xs ${
                  revelado && correta ? 'border-progresso text-progresso'
                    : revelado && escolhida ? 'border-alerta text-alerta'
                    : 'border-white/20 text-nevoa/70'
                }`}>
                  {LETRAS[i]}
                </span>
                <span className="pt-0.5 text-nevoa">{alt}</span>
              </button>
            </li>
          );
        })}
      </ul>

      {revelado && (
        <div className="mt-4 rounded-xl border border-white/10 bg-naval-800/60 p-4">
          <p className={`mb-1 text-sm font-semibold ${escolha === questao.correta ? 'text-progresso' : 'text-alerta'}`}>
            {escolha === questao.correta ? '✓ Você acertou' : `✗ Resposta correta: ${LETRAS[questao.correta]}`}
          </p>
          <p className="text-sm text-nevoa/85">{questao.comentario}</p>
          {questao.conceito && (
            <p className="mt-2 text-xs uppercase tracking-wider text-dourado/70">Conceito: {questao.conceito}</p>
          )}
          {questao.armadilha && (
            <p className="mt-2 text-xs text-alerta/80"><strong>Armadilha:</strong> {questao.armadilha}</p>
          )}
        </div>
      )}
    </div>
  );
}

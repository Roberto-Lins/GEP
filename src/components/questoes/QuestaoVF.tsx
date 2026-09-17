import { useState } from 'react';
import type { QuestaoVF as TQuestaoVF } from '@tipos/question';
import Markdown from './Markdown';
import DetalhamentoResposta from './DetalhamentoResposta';
import BotaoVerResposta from './BotaoVerResposta';

interface Props {
  questao: TQuestaoVF;
  indice?: number;
  onResponder?: (acertou: boolean) => void;
  permitirVerResposta?: boolean;
}

export default function QuestaoVF({ questao, indice, onResponder, permitirVerResposta = false }: Props) {
  const [escolha, setEscolha] = useState<boolean | null>(null);
  const [revelado, setRevelado] = useState(false);
  const [reveladoParaEstudo, setReveladoParaEstudo] = useState(false);

  function responder(valor: boolean) {
    if (revelado) return;
    setEscolha(valor);
    setRevelado(true);
    onResponder?.(valor === questao.correta);
  }

  function verResposta() {
    if (revelado) return;
    setReveladoParaEstudo(true);
    setRevelado(true);
  }

  const acertou = escolha === questao.correta;

  return (
    <div className="card p-5">
      <div className="mb-3 flex items-start gap-2">
        {indice != null && <span className="font-mono text-sm text-dourado/70">{indice}.</span>}
        <p className="whitespace-pre-line font-medium text-marfim">{questao.afirmacao}</p>
      </div>

      {questao.imagem && (
        <a href={questao.imagem} target="_blank" rel="noopener noreferrer" className="mb-4 block w-full max-w-2xl" title="Abrir o circuito em tela cheia">
          <img src={questao.imagem} alt="Circuito do enunciado" loading="lazy" className="block w-full rounded-lg ring-1 ring-white/10 transition hover:ring-dourado/40" />
        </a>
      )}

      {permitirVerResposta && !revelado && (
        <div className="mb-3 flex justify-end">
          <BotaoVerResposta onClick={verResposta} indice={indice} />
        </div>
      )}

      <div className="flex gap-3">
        {[true, false].map((valor) => {
          const escolhida = escolha === valor;
          const ehCorreta = questao.correta === valor;
          let estilo = 'border-white/15 text-nevoa hover:border-dourado/40 hover:bg-white/5';
          if (revelado) {
            if (ehCorreta) estilo = 'border-progresso/60 bg-progresso/10 text-progresso';
            else if (escolhida) estilo = 'border-alerta/60 bg-alerta/10 text-alerta';
            else estilo = 'border-white/5 text-nevoa/40';
          }
          return (
            <button
              key={String(valor)}
              type="button"
              disabled={revelado}
              onClick={() => responder(valor)}
              className={`flex-1 rounded-xl border px-4 py-2.5 font-medium transition ${estilo}`}
            >
              {valor ? 'Verdadeiro' : 'Falso'}
            </button>
          );
        })}
      </div>

      {revelado && (
        <div className="mt-4 rounded-xl border border-white/10 bg-naval-800/60 p-4">
          {reveladoParaEstudo ? (
            <>
              <p className="mb-1 text-sm font-semibold text-dourado-soft">Resposta correta: {questao.correta ? 'Verdadeiro' : 'Falso'}</p>
              <p className="mb-2 text-xs text-nevoa/60">Gabarito revelado para estudo — não contabilizado no placar nem no progresso.</p>
            </>
          ) : (
            <p className={`mb-1 text-sm font-semibold ${acertou ? 'text-progresso' : 'text-alerta'}`}>
              {acertou ? '✓ Você acertou' : `✗ O correto é: ${questao.correta ? 'Verdadeiro' : 'Falso'}`}
            </p>
          )}
          <Markdown className="text-sm text-nevoa/85">{questao.comentario}</Markdown>
          <DetalhamentoResposta {...questao} />
        </div>
      )}
    </div>
  );
}

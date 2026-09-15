import { useState } from 'react';
import type { GrupoCorrelacione } from '@tipos/question';
import Markdown from './Markdown';
import DetalhamentoResposta from './DetalhamentoResposta';

interface Props {
  questao: GrupoCorrelacione;
  indice?: number;
  onResponder?: (acertou: boolean) => void;
}

// Correlacione: para cada item da esquerda o aluno escolhe uma das chaves.
export default function QuestaoCorrelacione({ questao, indice, onResponder }: Props) {
  const [respostas, setRespostas] = useState<Record<number, string>>({});
  const [revelado, setRevelado] = useState(false);

  const completo = questao.itens.every((_, i) => respostas[i]);

  function verificar() {
    if (!completo || revelado) return;
    setRevelado(true);
    const acertouTudo = questao.itens.every((it, i) => respostas[i] === it.chave);
    onResponder?.(acertouTudo);
  }

  return (
    <div className="card p-5">
      <div className="mb-3 flex items-center gap-2">
        {indice != null && <span className="font-mono text-sm text-dourado/70">{indice}.</span>}
        <h4 className="font-serif text-base font-semibold text-marfim">{questao.titulo}</h4>
      </div>

      <div className="mb-4 flex flex-wrap gap-2 text-xs">
        {questao.chaves.map((c) => (
          <span key={c.chave} className="chip border border-white/10 bg-white/5 text-nevoa">
            <strong className="text-dourado-soft">{c.chave}</strong> · {c.texto}
          </span>
        ))}
      </div>

      <ul className="space-y-2">
        {questao.itens.map((item, i) => {
          const escolha = respostas[i];
          const certo = escolha === item.chave;
          return (
            <li
              key={i}
              className={`flex flex-wrap items-center justify-between gap-2 rounded-xl border px-3 py-2 ${
                revelado ? (certo ? 'border-progresso/50 bg-progresso/5' : 'border-alerta/50 bg-alerta/5') : 'border-white/10'
              }`}
            >
              <span className="flex-1 text-sm text-nevoa">{item.texto}</span>
              <div className="flex max-w-full flex-wrap items-center gap-1.5">
                {questao.chaves.map((c) => {
                  const sel = escolha === c.chave;
                  return (
                    <button
                      key={c.chave}
                      type="button"
                      disabled={revelado}
                      onClick={() => setRespostas((p) => ({ ...p, [i]: c.chave }))}
                      className={`h-7 w-9 rounded-md border font-mono text-xs transition ${
                        sel ? 'border-dourado bg-dourado/20 text-dourado' : 'border-white/15 text-nevoa/60 hover:border-dourado/40'
                      }`}
                    >
                      {c.chave}
                    </button>
                  );
                })}
              </div>
              {revelado && !certo && (
                <span className="w-full text-right text-xs text-progresso">Correto: {item.chave}</span>
              )}
            </li>
          );
        })}
      </ul>

      {!revelado ? (
        <button
          type="button"
          disabled={!completo}
          onClick={verificar}
          className={`mt-4 w-full rounded-xl px-4 py-2.5 font-medium transition ${
            completo ? 'btn-primary' : 'cursor-not-allowed border border-white/10 text-nevoa/40'
          }`}
        >
          Verificar correlações
        </button>
      ) : (
        <div className="mt-4 space-y-3">
          <p className={`text-sm font-semibold ${questao.itens.every((it, i) => respostas[i] === it.chave) ? 'text-progresso' : 'text-alerta'}`}>
            {questao.itens.every((it, i) => respostas[i] === it.chave) ? '✓ Correlações corretas!' : '✗ Confira as correções acima.'}
          </p>
          {questao.comentario && (
            <div className="rounded-xl border border-white/10 bg-naval-800/60 p-4">
              <p className="mb-1 text-xs uppercase tracking-wider text-dourado/70">Comentário</p>
              <Markdown className="text-sm text-nevoa/85">{questao.comentario}</Markdown>
            </div>
          )}
          <DetalhamentoResposta {...questao} />
        </div>
      )}
    </div>
  );
}

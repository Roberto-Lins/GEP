import { useState } from 'react';
import type { GrupoCorrelacione } from '@tipos/question';
import Markdown from './Markdown';
import DetalhamentoResposta from './DetalhamentoResposta';
import BotaoVerResposta from './BotaoVerResposta';

interface Props {
  questao: GrupoCorrelacione;
  indice?: number;
  onResponder?: (acertou: boolean) => void;
  permitirVerResposta?: boolean;
}

// Correlacione: para cada item da esquerda o aluno escolhe uma das chaves.
export default function QuestaoCorrelacione({ questao, indice, onResponder, permitirVerResposta = false }: Props) {
  const [respostas, setRespostas] = useState<Record<number, string>>({});
  const [revelado, setRevelado] = useState(false);
  const [reveladoParaEstudo, setReveladoParaEstudo] = useState(false);

  const completo = questao.itens.every((_, i) => respostas[i]);

  function verificar() {
    if (!completo || revelado) return;
    setRevelado(true);
    const acertouTudo = questao.itens.every((it, i) => respostas[i] === it.chave);
    onResponder?.(acertouTudo);
  }

  function verResposta() {
    if (revelado) return;
    setReveladoParaEstudo(true);
    setRevelado(true);
  }

  return (
    <div className="card p-5">
      <div className="mb-3 flex items-center gap-2">
        {indice != null && <span className="font-mono text-sm text-dourado/70">{indice}.</span>}
        <h4 className="font-serif text-base font-semibold text-marfim">{questao.titulo}</h4>
      </div>

      {questao.imagem && (
        <a href={questao.imagem} target="_blank" rel="noopener noreferrer" className="mb-4 block w-full max-w-2xl" title="Abrir a figura em tela cheia">
          <img src={questao.imagem} alt={`Figura da questão: ${questao.titulo}`} loading="lazy" className="block w-full rounded-lg ring-1 ring-white/10 transition hover:ring-dourado/40" />
        </a>
      )}

      <div className="mb-4 flex flex-wrap gap-2 text-xs">
        {questao.chaves.map((c) => (
          <span key={c.chave} className="chip border border-white/10 bg-white/5 text-nevoa">
            <strong className="text-dourado-soft">{c.chave}</strong> · {c.texto}
          </span>
        ))}
      </div>

      {permitirVerResposta && !revelado && (
        <div className="mb-3 flex justify-end">
          <BotaoVerResposta onClick={verResposta} indice={indice} />
        </div>
      )}

      <ul className="space-y-2">
        {questao.itens.map((item, i) => {
          const escolha = respostas[i];
          const certo = escolha === item.chave;
          return (
            <li
              key={i}
              className={`flex flex-wrap items-center justify-between gap-2 rounded-xl border px-3 py-2 ${
                revelado
                  ? reveladoParaEstudo
                    ? 'border-progresso/30 bg-progresso/5'
                    : certo
                      ? 'border-progresso/50 bg-progresso/5'
                      : 'border-alerta/50 bg-alerta/5'
                  : 'border-white/10'
              }`}
            >
              <span className="flex-1 text-sm text-nevoa">{item.texto}</span>
              <div className="flex max-w-full flex-wrap items-center gap-1.5">
                {questao.chaves.map((c) => {
                  const sel = escolha === c.chave;
                  const ehCorreta = item.chave === c.chave;
                  return (
                    <button
                      key={c.chave}
                      type="button"
                      disabled={revelado}
                      onClick={() => setRespostas((p) => ({ ...p, [i]: c.chave }))}
                      className={`h-7 w-9 rounded-md border font-mono text-xs transition ${
                        reveladoParaEstudo && ehCorreta
                          ? 'border-progresso bg-progresso/15 text-progresso'
                          : reveladoParaEstudo
                            ? 'border-white/5 text-nevoa/30'
                            : sel
                              ? 'border-dourado bg-dourado/20 text-dourado'
                              : 'border-white/15 text-nevoa/60 hover:border-dourado/40'
                      }`}
                    >
                      {c.chave}
                    </button>
                  );
                })}
              </div>
              {revelado && (reveladoParaEstudo || !certo) && (
                <span className="w-full text-right text-xs text-progresso">{reveladoParaEstudo ? 'Resposta' : 'Correto'}: {item.chave}</span>
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
          {reveladoParaEstudo ? (
            <div>
              <p className="text-sm font-semibold text-dourado-soft">Respostas reveladas para estudo.</p>
              <p className="mt-1 text-xs text-nevoa/60">Esta visualização não foi contabilizada no placar nem no progresso.</p>
            </div>
          ) : (
            <p className={`text-sm font-semibold ${questao.itens.every((it, i) => respostas[i] === it.chave) ? 'text-progresso' : 'text-alerta'}`}>
              {questao.itens.every((it, i) => respostas[i] === it.chave) ? '✓ Correlações corretas!' : '✗ Confira as correções acima.'}
            </p>
          )}
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

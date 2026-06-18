import { useEffect, useState } from 'react';
import type { QuestaoDiscursiva } from '@tipos/question';

interface Props {
  questao: QuestaoDiscursiva;
  indice?: number;
  /** chamado na autoavaliação: true = acertei, false = errei (revisar não registra) */
  onResponder?: (acertou: boolean) => void;
}

type Auto = 'acertei' | 'errei' | 'revisar' | null;

// Rascunho da resposta + autoavaliação ficam num namespace próprio do localStorage,
// sem tocar no schema principal de progresso (bussola:v1).
const chaveRascunho = (id: string) => `bussola:discursiva:${id}`;

export default function QuestaoDiscursiva({ questao, indice, onResponder }: Props) {
  const [resposta, setResposta] = useState('');
  const [revelado, setRevelado] = useState(false);
  const [auto, setAuto] = useState<Auto>(null);

  // Recupera rascunho salvo (resposta + autoavaliação) ao montar.
  useEffect(() => {
    try {
      const bruto = localStorage.getItem(chaveRascunho(questao.id));
      if (bruto) {
        const dados = JSON.parse(bruto) as { resposta?: string; auto?: Auto };
        if (dados.resposta) setResposta(dados.resposta);
        if (dados.auto) {
          setAuto(dados.auto);
          setRevelado(true);
        }
      }
    } catch {
      /* localStorage indisponível — segue sem persistência */
    }
  }, [questao.id]);

  function persistir(novaResposta: string, novaAuto: Auto) {
    try {
      localStorage.setItem(
        chaveRascunho(questao.id),
        JSON.stringify({ resposta: novaResposta, auto: novaAuto }),
      );
    } catch {
      /* ignora */
    }
  }

  function autoavaliar(valor: Exclude<Auto, null>) {
    setAuto(valor);
    persistir(resposta, valor);
    if (valor === 'acertei') onResponder?.(true);
    else if (valor === 'errei') onResponder?.(false);
  }

  const botoesAuto: { valor: Exclude<Auto, null>; rotulo: string; classe: string; classeOn: string }[] = [
    { valor: 'acertei', rotulo: '✓ Acertei', classe: 'border-progresso/40 text-progresso hover:bg-progresso/10', classeOn: 'border-progresso bg-progresso/15 text-progresso' },
    { valor: 'errei', rotulo: '✗ Errei', classe: 'border-alerta/40 text-alerta hover:bg-alerta/10', classeOn: 'border-alerta bg-alerta/15 text-alerta' },
    { valor: 'revisar', rotulo: '↻ Revisar depois', classe: 'border-dourado/40 text-dourado hover:bg-dourado/10', classeOn: 'border-dourado bg-dourado/15 text-dourado' },
  ];

  return (
    <div className="card p-5">
      <div className="mb-3 flex items-start gap-2">
        {indice != null && <span className="font-mono text-sm text-dourado/70">{indice}.</span>}
        <div>
          <span className="mb-1 inline-block rounded bg-aco/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-dourado/80">Discursiva</span>
          {questao.contexto && <p className="mb-2 whitespace-pre-line text-sm text-nevoa/70">{questao.contexto}</p>}
          <p className="whitespace-pre-line font-medium text-marfim">{questao.enunciado}</p>
        </div>
      </div>

      <textarea
        value={resposta}
        onChange={(e) => {
          setResposta(e.target.value);
          persistir(e.target.value, auto);
        }}
        rows={5}
        placeholder="Escreva sua resposta aqui antes de revelar o gabarito…"
        className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-naval-800/60 p-3 text-sm text-nevoa placeholder:text-nevoa/40 focus:border-dourado/50 focus:outline-none"
      />

      {!revelado ? (
        <button
          type="button"
          onClick={() => setRevelado(true)}
          className="btn-primary mt-3"
        >
          Ver gabarito comentado
        </button>
      ) : (
        <div className="mt-4 space-y-4">
          <div className="rounded-xl border border-white/10 bg-naval-800/60 p-4">
            <p className="mb-1 text-xs uppercase tracking-wider text-dourado/70">Gabarito comentado</p>
            <p className="whitespace-pre-line text-sm text-nevoa/90">{questao.gabaritoComentado}</p>
            {questao.comentario && <p className="mt-3 text-sm text-nevoa/75">{questao.comentario}</p>}
          </div>

          {questao.criterios && questao.criterios.length > 0 && (
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <p className="mb-2 text-xs uppercase tracking-wider text-dourado/70">Critérios de correção</p>
              <ul className="space-y-1">
                {questao.criterios.map((c, i) => (
                  <li key={i} className="flex gap-2 text-sm text-nevoa/85">
                    <span className="text-dourado/60">▢</span> {c}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {questao.armadilha && (
            <p className="text-xs text-alerta/80"><strong>Armadilha:</strong> {questao.armadilha}</p>
          )}
          {questao.fonte && <p className="text-xs text-nevoa/50">Fonte: {questao.fonte}</p>}

          <div>
            <p className="mb-2 text-sm text-nevoa/70">Compare sua resposta com o gabarito e avalie-se:</p>
            <div className="flex flex-wrap gap-2">
              {botoesAuto.map((b) => (
                <button
                  key={b.valor}
                  type="button"
                  onClick={() => autoavaliar(b.valor)}
                  className={`rounded-xl border px-4 py-2 text-sm font-medium transition ${auto === b.valor ? b.classeOn : b.classe}`}
                >
                  {b.rotulo}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

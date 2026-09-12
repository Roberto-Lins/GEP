import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { PIX } from '@data/apoie';
import {
  APOIO_CAMPANHA_EVENTO,
  campanhaFoiDispensada,
  dispensarCampanha,
} from '@utils/apoio-campaign';

const ATRASO_ABERTURA_MS = 450;
const SELETOR_FOCO =
  'a[href], button:not([disabled]), summary, [tabindex]:not([tabindex="-1"])';

export default function ApoioIaCampaign() {
  const [aberto, setAberto] = useState(false);
  const [copiado, setCopiado] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const fecharRef = useRef<HTMLButtonElement>(null);
  const pixRef = useRef<HTMLElement>(null);
  const focoAnteriorRef = useRef<HTMLElement | null>(null);
  const timerAberturaRef = useRef<number | null>(null);

  const abrir = useCallback(() => {
    if (timerAberturaRef.current !== null) {
      window.clearTimeout(timerAberturaRef.current);
      timerAberturaRef.current = null;
    }
    setAberto(true);
  }, []);
  const fechar = useCallback(() => {
    if (timerAberturaRef.current !== null) {
      window.clearTimeout(timerAberturaRef.current);
      timerAberturaRef.current = null;
    }
    dispensarCampanha(window.localStorage);
    setAberto(false);
  }, []);

  useEffect(() => {
    const abrirPorEvento = () => abrir();
    window.addEventListener(APOIO_CAMPANHA_EVENTO, abrirPorEvento);

    timerAberturaRef.current = campanhaFoiDispensada(window.localStorage)
      ? null
      : window.setTimeout(abrir, ATRASO_ABERTURA_MS);

    return () => {
      window.removeEventListener(APOIO_CAMPANHA_EVENTO, abrirPorEvento);
      if (timerAberturaRef.current !== null) {
        window.clearTimeout(timerAberturaRef.current);
        timerAberturaRef.current = null;
      }
    };
  }, [abrir]);

  useEffect(() => {
    if (!aberto) return;

    focoAnteriorRef.current = document.activeElement as HTMLElement | null;
    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.requestAnimationFrame(() => fecharRef.current?.focus());

    const teclado = (evento: KeyboardEvent) => {
      if (evento.key === 'Escape') {
        evento.preventDefault();
        fechar();
        return;
      }
      if (evento.key !== 'Tab' || !dialogRef.current) return;

      const focaveis = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(SELETOR_FOCO),
      ).filter((elemento) => elemento.offsetParent !== null);
      if (focaveis.length === 0) return;

      const primeiro = focaveis[0];
      const ultimo = focaveis[focaveis.length - 1];
      if (evento.shiftKey && document.activeElement === primeiro) {
        evento.preventDefault();
        ultimo.focus();
      } else if (!evento.shiftKey && document.activeElement === ultimo) {
        evento.preventDefault();
        primeiro.focus();
      }
    };

    window.addEventListener('keydown', teclado);
    return () => {
      window.removeEventListener('keydown', teclado);
      document.body.style.overflow = overflowAnterior;
      focoAnteriorRef.current?.focus();
    };
  }, [aberto, fechar]);

  async function copiarPix() {
    try {
      await navigator.clipboard.writeText(PIX.copiaECola);
    } catch {
      const campo = document.createElement('textarea');
      campo.value = PIX.copiaECola;
      campo.setAttribute('readonly', '');
      campo.style.position = 'fixed';
      campo.style.opacity = '0';
      document.body.appendChild(campo);
      campo.select();
      document.execCommand('copy');
      campo.remove();
    }
    setCopiado(true);
    window.setTimeout(() => setCopiado(false), 2500);
  }

  const modal = aberto && typeof document !== 'undefined'
    ? createPortal(
        <div
          className="fixed inset-0 z-[70] flex items-end justify-center bg-naval/85 p-0 backdrop-blur-sm sm:items-center sm:p-5"
          onMouseDown={(evento) => {
            if (evento.target === evento.currentTarget) fechar();
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="apoio-ia-titulo"
            aria-describedby="apoio-ia-descricao"
            className="relative max-h-[92dvh] w-full max-w-5xl overflow-y-auto rounded-t-3xl border border-dourado/25 bg-naval-800 shadow-[0_24px_80px_rgba(0,0,0,0.7)] sm:rounded-3xl"
          >
            <button
              ref={fecharRef}
              type="button"
              onClick={fechar}
              aria-label="Fechar aviso de apoio"
              className="absolute right-3 top-3 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-naval/80 text-nevoa transition hover:border-dourado/50 hover:text-dourado focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dourado"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
              <div className="p-6 pt-16 sm:p-9 lg:p-10">
                <p className="mb-3 inline-flex rounded-full border border-dourado/30 bg-dourado/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-dourado">
                  Apoio voluntário
                </p>
                <h2 id="apoio-ia-titulo" className="max-w-2xl font-serif text-3xl font-semibold leading-tight text-marfim sm:text-4xl">
                  Ajude a manter os cursos avançando
                </h2>
                <p id="apoio-ia-descricao" className="mt-4 max-w-2xl leading-relaxed text-nevoa/85">
                  Os cursos da Bússola estão sendo produzidos com tempo dedicado e ferramentas de IA
                  custeadas pelo próprio Roberto. O ChatGPT já foi pago e a assinatura do Claude ajudará
                  a acelerar e melhorar as próximas entregas.
                </p>

                <div className="mt-6 rounded-2xl border border-dourado/25 bg-dourado/10 p-5">
                  <p className="font-serif text-2xl text-marfim">
                    Se você puder contribuir com <strong className="text-dourado">R$ 10</strong>, já faz diferença.
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-nevoa/75">
                    A ajuda é totalmente voluntária. Ninguém perde acesso aos cursos por não contribuir,
                    e todo o conteúdo continua disponível para todos.
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-nevoa/75">
                    Se cerca de metade da turma participar, esse apoio já ajuda a custear os modelos
                    usados na produção e a manter um ritmo melhor de entregas.
                  </p>
                </div>

                <dl className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-naval/50 p-4">
                    <dt className="text-xs uppercase tracking-wider text-nevoa/55">ChatGPT/Codex — pago</dt>
                    <dd className="mt-1 font-mono text-xl text-marfim">R$ 467,00</dd>
                    <dd className="mt-1 text-xs text-nevoa/55">IOF registrado: R$ 15,79</dd>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-naval/50 p-4">
                    <dt className="text-xs uppercase tracking-wider text-nevoa/55">Claude Max — planejado</dt>
                    <dd className="mt-1 font-mono text-xl text-marfim">a partir de R$ 550/mês</dd>
                    <dd className="mt-1 text-xs text-nevoa/55">Referência exibida no plano Max</dd>
                  </div>
                </dl>

                <details className="group mt-6 rounded-2xl border border-white/10 bg-naval/45 p-4 open:bg-naval/60">
                  <summary className="cursor-pointer list-none font-semibold text-marfim focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dourado">
                    <span className="flex items-center justify-between gap-4">
                      Ver custos e comprovantes
                      <span className="text-dourado transition group-open:rotate-180" aria-hidden="true">⌄</span>
                    </span>
                  </summary>
                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <figure>
                      <a href="/imagens/plataforma/apoio-ia/chatgpt-comprovante.webp" target="_blank" rel="noreferrer" className="block overflow-hidden rounded-xl border border-white/10 bg-white">
                        <img src="/imagens/plataforma/apoio-ia/chatgpt-comprovante.webp" alt="Comprovante da compra do ChatGPT por R$ 467,00 e IOF de R$ 15,79" className="aspect-[4/5] w-full object-cover object-top" loading="lazy" />
                      </a>
                      <figcaption className="mt-2 text-xs text-nevoa/60">ChatGPT: R$ 467,00, em 12/09/2026. Clique para ampliar.</figcaption>
                    </figure>
                    <figure>
                      <a href="/imagens/plataforma/apoio-ia/claude-max.webp" target="_blank" rel="noreferrer" className="block overflow-hidden rounded-xl border border-white/10 bg-[#1f1f1d]">
                        <img src="/imagens/plataforma/apoio-ia/claude-max.webp" alt="Página do plano Claude Max indicando preço a partir de R$ 550 por mês" className="aspect-[4/5] w-full object-contain" loading="lazy" />
                      </a>
                      <figcaption className="mt-2 text-xs text-nevoa/60">Claude Max: a partir de R$ 550/mês. Clique para ampliar.</figcaption>
                    </figure>
                  </div>
                </details>

                <p className="mt-5 text-xs leading-relaxed text-nevoa/55">
                  Responsável: <strong className="text-nevoa/80">Roberto Lins Brigída Junior</strong>.
                  Os valores acima correspondem aos comprovantes apresentados.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => pixRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                    className="btn btn-primary justify-center"
                  >
                    Contribuir via Pix
                  </button>
                  <button type="button" onClick={fechar} className="btn btn-ghost justify-center">
                    Agora não
                  </button>
                </div>
              </div>

              <section ref={pixRef} id="apoio-pix" aria-labelledby="apoio-pix-titulo" className="border-t border-white/10 bg-aco/25 p-6 sm:p-9 lg:border-l lg:border-t-0 lg:p-10">
                <h3 id="apoio-pix-titulo" className="font-serif text-2xl text-marfim">Contribua via Pix</h3>
                <p className="mt-2 text-sm leading-relaxed text-nevoa/70">
                  Aponte a câmera do banco para o QR Code ou copie o código. O valor é preenchido no aplicativo.
                </p>
                <div className="mx-auto mt-6 w-52 max-w-full rounded-2xl bg-marfim p-3 shadow-card">
                  <img src={PIX.qrSvg} alt="QR Code Pix para apoiar a Bússola dos Aspirantes" className="h-auto w-full" width="184" height="184" />
                </div>
                <div className="mt-5 rounded-xl border border-white/10 bg-naval/60 p-4 text-left">
                  <p className="text-xs uppercase tracking-wider text-nevoa/50">Chave Pix aleatória</p>
                  <p className="mt-1 break-all font-mono text-xs text-marfim">{PIX.chave}</p>
                </div>
                <button type="button" onClick={copiarPix} className="btn btn-primary mt-4 w-full justify-center" aria-live="polite">
                  {copiado ? 'Código Pix copiado ✓' : 'Copiar código Pix'}
                </button>
                <a href="/apoie" className="btn btn-ghost mt-3 w-full justify-center">
                  Abrir página completa de apoio
                </a>
                <p className="mt-4 text-center text-xs text-nevoa/50">
                  Beneficiário no código: {PIX.nome} · {PIX.cidade}
                </p>
              </section>
            </div>
          </div>
        </div>,
        document.body,
      )
    : null;

  return (
    <>
      <section aria-labelledby="apoio-ia-cartao-titulo" className="card mb-12 flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="flex items-start gap-4">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-dourado/35 bg-dourado/10 text-dourado" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 21s-7-4.35-7-10a4 4 0 0 1 7-2.45A4 4 0 0 1 19 11c0 5.65-7 10-7 10Z" />
            </svg>
          </span>
          <div>
            <h2 id="apoio-ia-cartao-titulo" className="font-serif text-xl text-marfim">Apoio voluntário às ferramentas de IA</h2>
            <p className="mt-1 max-w-2xl text-sm leading-relaxed text-nevoa/70">
              Os custos estão sendo pagos pelo Roberto. Uma contribuição opcional de R$ 10 ajuda a manter e acelerar as próximas entregas.
            </p>
          </div>
        </div>
        <button type="button" onClick={abrir} className="btn btn-ghost shrink-0 justify-center">
          Ver campanha e Pix
        </button>
      </section>
      {modal}
    </>
  );
}

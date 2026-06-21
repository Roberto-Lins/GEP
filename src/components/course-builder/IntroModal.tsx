import { useState } from 'react';

interface Props {
  onContinuar: () => void;
}

/** Etapa 0 — boas-vindas, atalho para o guia e checklist do que ter em mãos. */
export default function IntroModal({ onContinuar }: Props) {
  const [ciente, setCiente] = useState(false);

  return (
    <div className="card mx-auto max-w-2xl p-8">
      <span className="chip mb-3 inline-block border border-dourado/30 bg-dourado/10 text-[10px] uppercase tracking-wider text-dourado">
        Contribuir com uma matéria
      </span>
      <h2 className="font-serif text-2xl text-marfim">Monte um Course Kit</h2>
      <p className="mt-3 text-sm text-nevoa/80">
        Este assistente reúne tudo de uma matéria e gera um arquivo <strong className="text-marfim">.zip</strong>{' '}
        para download. Você entrega o zip ao mantenedor, que instala o curso na plataforma com o Claude Code.
      </p>

      {/* Atalho para o guia de produção de conteúdos */}
      <a
        href="/adicionar-curso/guia"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 flex items-start gap-3 rounded-xl border border-dourado/30 bg-dourado/[0.07] p-4 transition hover:border-dourado/60 hover:bg-dourado/10"
      >
        <span aria-hidden className="text-xl leading-none">📘</span>
        <span className="text-sm">
          <strong className="text-marfim">Não sabe como produzir os materiais?</strong>{' '}
          <span className="text-nevoa/80">
            Veja o guia de como gerar os conteúdos — linha do tempo, resumos, questões, áudios e vídeo,
            com os prompts prontos de cada etapa.
          </span>
          <span className="mt-1 block font-medium text-dourado">Abrir o guia →</span>
        </span>
      </a>

      <h3 className="mt-6 text-sm font-semibold text-marfim">Tenha em mãos antes de começar:</h3>
      <ul className="mt-2 space-y-1.5 text-sm text-nevoa/80">
        <li>• Nome da matéria, ano, semestre e época de prova (e turma, no 3°/4° ano).</li>
        <li>• A linha do tempo (divisão em tópicos) — arquivo .md/.txt/.json ou digitada.</li>
        <li>• Exercícios por dificuldade (fácil/médio/difícil) e tipo (objetivas, discursivas, V/F, correlacione).</li>
        <li>• Links de áudios/vídeos/slides e arquivos leves de fontes/resumos (opcional).</li>
      </ul>

      <p className="mt-5 rounded-lg border border-white/10 bg-white/5 p-3 text-xs text-nevoa/70">
        ⏱️ Leva ~10–15 min. Arquivos acima de <strong className="text-marfim">20 MB</strong> não entram no zip —
        informe a URL onde estão hospedados (YouTube, Drive, CDN).
      </p>

      {/* Ciência: confirma que leu o guia e tem fontes/conteúdos em mãos */}
      <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-3 transition hover:border-dourado/30">
        <input
          type="checkbox"
          checked={ciente}
          onChange={(e) => setCiente(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-dourado"
        />
        <span className="text-sm text-nevoa/85">
          Estou ciente de como produzir os conteúdos (li o guia) e tenho as{' '}
          <strong className="text-marfim">fontes</strong> e os{' '}
          <strong className="text-marfim">materiais</strong> em mãos.
        </span>
      </label>

      <div className="mt-6 flex flex-wrap gap-3">
        <a href="/" className="btn-ghost">Preparar depois</a>
        <button
          type="button"
          onClick={onContinuar}
          disabled={!ciente}
          aria-disabled={!ciente}
          title={ciente ? undefined : 'Marque a ciência acima para continuar'}
          className="btn-primary disabled:cursor-not-allowed disabled:opacity-40"
        >
          Tenho tudo, continuar →
        </button>
      </div>
    </div>
  );
}

interface Props {
  onContinuar: () => void;
}

/** Etapa 0 — boas-vindas e checklist do que ter em mãos. */
export default function IntroModal({ onContinuar }: Props) {
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

      <div className="mt-6 flex flex-wrap gap-3">
        <a href="/" className="btn-ghost">Preparar depois</a>
        <button type="button" onClick={onContinuar} className="btn-primary">
          Tenho tudo, continuar →
        </button>
      </div>
    </div>
  );
}

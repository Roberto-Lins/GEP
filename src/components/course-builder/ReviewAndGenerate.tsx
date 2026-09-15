import type { MidiaRef, QuestaoBase, TopicoTimeline, ValidacaoItem, ArquivoLeve } from '@tipos/course-kit';
import { DIFICULDADES, TIPOS_QUESTAO, DIFICULDADE_LABELS, TIPO_QUESTAO_LABELS } from '@tipos/course-kit';
import { ANO_LABELS, SEMESTRE_LABELS, EPOCA_LABELS, TURMA_LABELS } from '@utils/hierarchy-constants';
import { formatBytes } from '@utils/course-kit/classifyFile';
import type { WizardMetadata } from './shared';
import ValidationAlert from './ValidationAlert';
import { MODALIDADES_ESTUDO, MODALIDADE_RESUMOS } from '@tipos/study-mode';

interface Props {
  metadata: WizardMetadata;
  topicos: TopicoTimeline[];
  questoes: QuestaoBase[];
  midias: MidiaRef[];
  arquivos: ArquivoLeve[];
  validacoes: ValidacaoItem[];
  tamanhoEstimado: number;
  gerando: boolean;
  nomeGerado: string | null;
  onGerar: () => void;
}

export default function ReviewAndGenerate(props: Props) {
  const { metadata, topicos, questoes, midias, arquivos, validacoes, tamanhoEstimado, gerando, nomeGerado, onGerar } = props;
  const temErro = validacoes.some((v) => v.nivel === 'erro');

  const conta = (d: (typeof DIFICULDADES)[number], t: (typeof TIPOS_QUESTAO)[number]) =>
    questoes.filter((q) => q.dificuldade === d && q.tipo === t).length;

  return (
    <div className="space-y-6">
      <section className="card p-5">
        <h3 className="mb-3 font-serif text-lg text-marfim">Dados da matéria</h3>
        <dl className="grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
          <div><dt className="text-nevoa/50">Nome</dt><dd className="text-marfim">{metadata.nome || '—'}</dd></div>
          <div><dt className="text-nevoa/50">Slug</dt><dd className="font-mono text-marfim">{metadata.slug || '—'}</dd></div>
          <div><dt className="text-nevoa/50">Posição</dt><dd className="text-marfim">
            {ANO_LABELS[metadata.ano]} · {metadata.turma ? `${TURMA_LABELS[metadata.turma]} · ` : ''}
            {SEMESTRE_LABELS[metadata.semestre]} · {EPOCA_LABELS[metadata.epoca]}
          </dd></div>
          <div><dt className="text-nevoa/50">Mídias</dt><dd className="text-marfim">{midias.length} URL(s) · {arquivos.length} arquivo(s)</dd></div>
          <div className="sm:col-span-2"><dt className="text-nevoa/50">Modalidades de estudo</dt><dd className="mt-1 flex flex-wrap gap-2 text-marfim">
            {MODALIDADES_ESTUDO.map((modo) => (
              <span key={modo} className="chip border border-white/10 bg-white/5">
                {MODALIDADE_RESUMOS[modo].rotulo}: {metadata.duracaoMinutos[modo] ?? 'a calcular'} min
              </span>
            ))}
          </dd></div>
        </dl>
      </section>

      <section className="card p-5">
        <h3 className="mb-2 font-serif text-lg text-marfim">Linha do tempo ({topicos.length})</h3>
        {topicos.length === 0 ? (
          <p className="text-sm text-nevoa/60">Nenhum tópico.</p>
        ) : (
          <ol className="list-inside list-decimal space-y-0.5 text-sm text-nevoa/80">
            {topicos.map((t, i) => <li key={i}>{t.titulo}</li>)}
          </ol>
        )}
      </section>

      <section className="card p-5">
        <h3 className="mb-3 font-serif text-lg text-marfim">Questões ({questoes.length})</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-nevoa/60">
                <th className="px-2 py-1 text-left font-medium"></th>
                {TIPOS_QUESTAO.map((t) => <th key={t} className="px-2 py-1 text-center font-medium">{TIPO_QUESTAO_LABELS[t]}</th>)}
              </tr>
            </thead>
            <tbody>
              {DIFICULDADES.map((d) => (
                <tr key={d}>
                  <th className="px-2 py-1 text-left font-semibold text-marfim">{DIFICULDADE_LABELS[d]}</th>
                  {TIPOS_QUESTAO.map((t) => {
                    const n = conta(d, t);
                    return <td key={t} className={`px-2 py-1 text-center ${n ? 'text-marfim' : 'text-nevoa/30'}`}>{n}</td>;
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {validacoes.length > 0 && (
        <section>
          <h3 className="mb-2 text-sm font-semibold text-marfim">Avisos e pendências</h3>
          <ValidationAlert itens={validacoes} />
        </section>
      )}

      <section className="card flex flex-col items-start gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-marfim">Tamanho estimado do zip: <strong>{formatBytes(tamanhoEstimado)}</strong></p>
          {temErro && <p className="mt-1 text-xs text-vermelho">Corrija os erros acima para gerar o kit.</p>}
          {nomeGerado && <p className="mt-1 text-xs text-verde">✓ Gerado: {nomeGerado}</p>}
        </div>
        <button type="button" className="btn-primary shrink-0" onClick={onGerar} disabled={temErro || gerando}>
          {gerando ? 'Gerando…' : 'Gerar Course Kit'}
        </button>
      </section>

      {nomeGerado && (
        <section className="rounded-xl border border-verde/30 bg-verde/[0.06] p-5">
          <h3 className="mb-3 font-serif text-lg text-marfim">Próximos passos</h3>
          <ol className="space-y-2 text-sm text-nevoa/80">
            <li className="flex gap-2">
              <span className="shrink-0 font-mono text-verde">1.</span>
              <span>Abra o <strong className="text-marfim">{nomeGerado}</strong> que foi baixado. Ele contém o <code className="text-dourado">PROMPT_CLAUDE.md</code> com as instruções de instalação.</span>
            </li>
            <li className="flex gap-2">
              <span className="shrink-0 font-mono text-verde">2.</span>
              <span>Abra o <strong className="text-marfim">Claude Code</strong> na pasta do repositório Bússola e cole o conteúdo do <code className="text-dourado">PROMPT_CLAUDE.md</code> como mensagem.</span>
            </li>
            <li className="flex gap-2">
              <span className="shrink-0 font-mono text-verde">3.</span>
              <span>O Claude Code instalará o curso automaticamente: criará as mini-matérias, montará o banco de questões e validará o build.</span>
            </li>
            <li className="flex gap-2">
              <span className="shrink-0 font-mono text-verde">4.</span>
              <span>Após a instalação, rode <code className="text-dourado">npm run validate-content</code> e <code className="text-dourado">npm run build</code> para confirmar que tudo passou.</span>
            </li>
          </ol>
        </section>
      )}
    </div>
  );
}

import type { MetadadosQuestao } from '@tipos/question';
import Markdown from './Markdown';

interface Props extends MetadadosQuestao {
  fonte?: string;
}

const LETRAS = ['A', 'B', 'C', 'D', 'E'];

export default function DetalhamentoResposta({
  competencia,
  tempoEstimadoMin,
  erroProvavel,
  assinatura,
  resolucaoPassoAPasso,
  explicacaoDistratores,
  verificacaoIndependente,
  fonte,
}: Props) {
  return (
    <div className="mt-3 space-y-3 border-t border-white/10 pt-3 text-sm text-nevoa/85">
      {(competencia || tempoEstimadoMin) && (
        <p className="text-xs text-nevoa/65">
          {competencia && <><strong>Competência:</strong> {competencia}</>}
          {competencia && tempoEstimadoMin ? ' · ' : ''}
          {tempoEstimadoMin && <><strong>Tempo esperado:</strong> {tempoEstimadoMin} min</>}
        </p>
      )}

      {resolucaoPassoAPasso && resolucaoPassoAPasso.length > 0 && (
        <details className="rounded-lg border border-white/10 bg-white/[0.025] p-3">
          <summary className="cursor-pointer font-medium text-dourado-soft">Resolução passo a passo</summary>
          <ol className="mt-2 space-y-2 pl-5">
            {resolucaoPassoAPasso.map((passo, indice) => (
              <li key={indice}><Markdown>{passo.replace(/^\d+\.\s*/, '')}</Markdown></li>
            ))}
          </ol>
        </details>
      )}

      {explicacaoDistratores && explicacaoDistratores.length > 0 && (
        <details className="rounded-lg border border-white/10 bg-white/[0.025] p-3">
          <summary className="cursor-pointer font-medium text-dourado-soft">Por que cada alternativa funciona ou falha</summary>
          <ul className="mt-2 space-y-2">
            {explicacaoDistratores.map((explicacao, indice) => (
              <li key={indice} className="flex gap-2">
                <strong className="text-dourado/80">{LETRAS[indice]}.</strong>
                <Markdown>{explicacao}</Markdown>
              </li>
            ))}
          </ul>
        </details>
      )}

      {verificacaoIndependente && (
        <div className="rounded-lg border border-progresso/20 bg-progresso/[0.04] p-3">
          <strong className="text-progresso">Verificação independente:</strong>{' '}
          <Markdown className="inline">{verificacaoIndependente}</Markdown>
        </div>
      )}

      {erroProvavel && (
        <p className="text-xs text-alerta/85"><strong>Erro provável:</strong> {erroProvavel}</p>
      )}
      {assinatura && assinatura.length > 0 && (
        <p className="text-xs text-nevoa/55"><strong>Assinatura:</strong> {assinatura.join(' · ')}</p>
      )}
      {fonte && <p className="text-xs text-nevoa/50"><strong>Fonte:</strong> {fonte}</p>}
    </div>
  );
}

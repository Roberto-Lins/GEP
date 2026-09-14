import type { Ano, Semestre, Epoca, Turma } from '@tipos/course';
import {
  ANOS,
  SEMESTRES,
  TURMAS_COM_GERAL,
  ANO_LABELS,
  SEMESTRE_LABELS,
  EPOCA_LABELS,
  TURMA_LABELS,
  EPOCAS_POR_SEMESTRE,
  anoUsaTurma,
} from '@utils/hierarchy-constants';
import { normalizeSlug } from '@utils/course-kit/normalizeSlug';
import type { WizardMetadata } from './shared';
import { inputCls, labelCls, selectCls } from './shared';
import { EIXOS_PERFIL_COBRANCA, type EixoPerfilCobranca, type NivelPerfilCobranca } from '@tipos/course-kit';
import { MODALIDADE_RESUMOS, MODALIDADES_ESTUDO, type ModalidadeEstudoId } from '@tipos/study-mode';

interface Props {
  valor: WizardMetadata;
  onChange: (m: WizardMetadata) => void;
}

export default function CourseMetadataForm({ valor, onChange }: Props) {
  const set = (patch: Partial<WizardMetadata>) => onChange({ ...valor, ...patch });
  const linhas = (texto: string) => texto.split('\n').map((item) => item.trim()).filter(Boolean);

  const onNome = (nome: string) =>
    set({ nome, slug: valor.slugManual ? valor.slug : normalizeSlug(nome) });

  const onAno = (ano: Ano) => {
    // Ao mudar para 1°/2° ano, zera a turma (não se aplica).
    set({ ano, turma: anoUsaTurma(ano) ? (valor.turma ?? 'geral') : undefined });
  };

  const onSemestre = (semestre: Semestre) => {
    // Garante que a época pertence ao semestre escolhido.
    const epocas = EPOCAS_POR_SEMESTRE[semestre];
    const epoca = epocas.includes(valor.epoca) ? valor.epoca : epocas[0];
    set({ semestre, epoca });
  };

  const epocasDisponiveis = EPOCAS_POR_SEMESTRE[valor.semestre];

  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="nome">Nome da matéria *</label>
          <input
            id="nome"
            className={inputCls}
            value={valor.nome}
            onChange={(e) => onNome(e.target.value)}
            placeholder="Ex.: História Naval"
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="slug">Slug *</label>
          <input
            id="slug"
            className={inputCls}
            value={valor.slug}
            onChange={(e) => set({ slug: normalizeSlug(e.target.value), slugManual: true })}
            placeholder="ex.: hnv"
          />
          <p className="mt-1 text-xs text-nevoa/50">Gerado do nome; edite se quiser.</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className={labelCls} htmlFor="ano">Ano *</label>
          <select id="ano" className={selectCls} value={valor.ano} onChange={(e) => onAno(e.target.value as Ano)}>
            {ANOS.map((a) => <option key={a} value={a}>{ANO_LABELS[a]}</option>)}
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="semestre">Semestre *</label>
          <select id="semestre" className={selectCls} value={valor.semestre} onChange={(e) => onSemestre(e.target.value as Semestre)}>
            {SEMESTRES.map((s) => <option key={s} value={s}>{SEMESTRE_LABELS[s]}</option>)}
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="epoca">Época *</label>
          <select id="epoca" className={selectCls} value={valor.epoca} onChange={(e) => set({ epoca: e.target.value as Epoca })}>
            {epocasDisponiveis.map((ep) => <option key={ep} value={ep}>{EPOCA_LABELS[ep]}</option>)}
          </select>
        </div>
      </div>

      {anoUsaTurma(valor.ano) && (
        <div>
          <label className={labelCls} htmlFor="turma">Turma *</label>
          <select id="turma" className={selectCls} value={valor.turma ?? 'geral'} onChange={(e) => set({ turma: e.target.value as Turma })}>
            {TURMAS_COM_GERAL.map((t) => <option key={t} value={t}>{TURMA_LABELS[t]}</option>)}
          </select>
          <p className="mt-1 text-xs text-nevoa/50">GERAL = matéria comum a todas as turmas do ano.</p>
        </div>
      )}

      <div>
        <label className={labelCls} htmlFor="descricao">Descrição detalhada *</label>
        <textarea
          id="descricao"
          className={`${inputCls} min-h-[90px]`}
          value={valor.descricao}
          onChange={(e) => set({ descricao: e.target.value })}
          placeholder="O que a matéria cobre, recorte temático, foco da prova…"
        />
      </div>

      <fieldset className="rounded-xl border border-white/10 p-4">
        <legend className="px-2 text-sm font-semibold text-marfim">Perfil de cobrança baseado nas fontes</legend>
        <p className="mb-4 text-xs text-nevoa/60">Marque como incerta qualquer dimensão sem evidência suficiente; não complete por suposição.</p>
        <label className="mb-4 block text-xs text-nevoa/75" htmlFor="perfil-status">
          <span className="mb-1 block">Estado do perfil</span>
          <select
            id="perfil-status"
            className={selectCls}
            value={valor.perfilCobranca.status}
            onChange={(e) => set({ perfilCobranca: { ...valor.perfilCobranca, status: e.target.value as 'pendente' | 'confirmado' } })}
          >
            <option value="pendente">Pendente — evidência insuficiente</option>
            <option value="confirmado">Confirmado nas fontes</option>
          </select>
        </label>
        <div className="grid gap-3 sm:grid-cols-2">
          {EIXOS_PERFIL_COBRANCA.map((eixo) => (
            <label key={eixo} className="text-xs text-nevoa/75">
              <span className="mb-1 block capitalize">{eixo.replace('aplicacaoInedita', 'aplicação inédita')}</span>
              <select
                className={selectCls}
                value={valor.perfilCobranca.classificacao[eixo]}
                onChange={(e) => set({
                  perfilCobranca: {
                    ...valor.perfilCobranca,
                    classificacao: {
                      ...valor.perfilCobranca.classificacao,
                      [eixo as EixoPerfilCobranca]: e.target.value as NivelPerfilCobranca,
                    },
                  },
                })}
              >
                <option value="incerta">Incerta</option>
                <option value="baixa">Baixa</option>
                <option value="media">Média</option>
                <option value="alta">Alta</option>
              </select>
            </label>
          ))}
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <label className="text-xs text-nevoa/75" htmlFor="perfil-evidencias">
            <span className="mb-1 block">Evidências de cobrança (uma por linha)</span>
            <textarea
              id="perfil-evidencias"
              className={`${inputCls} min-h-[110px]`}
              value={valor.perfilCobranca.evidencias.join('\n')}
              onChange={(e) => set({ perfilCobranca: { ...valor.perfilCobranca, evidencias: linhas(e.target.value) } })}
              placeholder="Prova P1 2025, questão 4: integra dois conceitos"
            />
          </label>
          <label className="text-xs text-nevoa/75" htmlFor="perfil-fontes">
            <span className="mb-1 block">Fontes localizadas (uma por linha)</span>
            <textarea
              id="perfil-fontes"
              className={`${inputCls} min-h-[110px]`}
              value={valor.perfilCobranca.fontes_localizadas.join('\n')}
              onChange={(e) => set({ perfilCobranca: { ...valor.perfilCobranca, fontes_localizadas: linhas(e.target.value) } })}
              placeholder="prova-p1-2025.pdf, p. 3, questão 4"
            />
          </label>
        </div>
        <label className="mt-4 block text-xs text-nevoa/75" htmlFor="perfil-incertezas">
          <span className="mb-1 block">Incertezas reais (uma por linha)</span>
          <textarea
            id="perfil-incertezas"
            className={`${inputCls} min-h-[80px]`}
            value={valor.perfilCobranca.incertezas.join('\n')}
            onChange={(e) => set({ perfilCobranca: { ...valor.perfilCobranca, incertezas: linhas(e.target.value) } })}
            placeholder="Não há prova discursiva no corpus para classificar esse eixo."
          />
        </label>
      </fieldset>

      <fieldset className="rounded-xl border border-white/10 p-4">
        <legend className="px-2 text-sm font-semibold text-marfim">Duração estimada por modalidade</legend>
        <p className="mb-4 text-xs text-nevoa/60">Preencha somente depois de calcular a duração a partir do conteúdo real.</p>
        <div className="grid gap-3 sm:grid-cols-3">
          {MODALIDADES_ESTUDO.map((modo) => (
            <label key={modo} className="text-xs text-nevoa/75">
              <span className="mb-1 block">{MODALIDADE_RESUMOS[modo].rotulo} (min)</span>
              <input
                type="number"
                min={1}
                className={inputCls}
                value={valor.duracaoMinutos[modo] ?? ''}
                onChange={(e) => set({
                  duracaoMinutos: {
                    ...valor.duracaoMinutos,
                    [modo as ModalidadeEstudoId]: e.target.value ? Number(e.target.value) : null,
                  },
                })}
              />
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label className={labelCls} htmlFor="estilo">Estilo de cobrança do professor</label>
        <textarea
          id="estilo"
          className={`${inputCls} min-h-[90px]`}
          value={valor.estiloCobranca}
          onChange={(e) => set({ estiloCobranca: e.target.value })}
          placeholder="Como a prova é estruturada, o que mais cai, pegadinhas comuns…"
        />
      </div>
    </div>
  );
}

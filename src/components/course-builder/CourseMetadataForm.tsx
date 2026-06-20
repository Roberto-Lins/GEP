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

interface Props {
  valor: WizardMetadata;
  onChange: (m: WizardMetadata) => void;
}

export default function CourseMetadataForm({ valor, onChange }: Props) {
  const set = (patch: Partial<WizardMetadata>) => onChange({ ...valor, ...patch });

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

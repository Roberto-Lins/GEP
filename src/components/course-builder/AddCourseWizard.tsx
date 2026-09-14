import { useEffect, useMemo, useState } from 'react';
import type { MidiaRef, TopicoTimeline, ArquivoLeve, ValidacaoItem, CourseKitMetadata } from '@tipos/course-kit';
import { DIFICULDADES, DIFICULDADE_LABELS, EIXOS_PERFIL_COBRANCA } from '@tipos/course-kit';
import { anoUsaTurma } from '@utils/hierarchy-constants';
import { generateCourseKit } from '@utils/course-kit/generateCourseKit';
import { estimateSize } from '@utils/course-kit/estimateSize';
import { downloadKit } from '@utils/course-kit/buildZip';
import type { WizardMetadata, QuestoesPorCelula } from './shared';
import WizardProgress from './WizardProgress';
import IntroModal from './IntroModal';
import CourseMetadataForm from './CourseMetadataForm';
import TimelineBuilder from './TimelineBuilder';
import ExerciseGrid from './ExerciseGrid';
import MaterialsBuilder from './MaterialsBuilder';
import ReviewAndGenerate from './ReviewAndGenerate';
import ValidationAlert from './ValidationAlert';

const ETAPAS = ['Matéria', 'Linha do tempo', 'Exercícios', 'Materiais', 'Revisão'];
const DRAFT_KEY = 'bussola:course-builder:draft';

const METADATA_INICIAL: WizardMetadata = {
  nome: '', slug: '', slugManual: false,
  ano: '1', semestre: '1', epoca: 'P1', turma: undefined,
  descricao: '', estiloCobranca: '',
  perfilCobranca: {
    schema_version: '1.0.0',
    status: 'pendente',
    classificacao: Object.fromEntries(EIXOS_PERFIL_COBRANCA.map((eixo) => [eixo, 'incerta'])) as CourseKitMetadata['perfilCobranca']['classificacao'],
    evidencias: [],
    fontes_localizadas: [],
    incertezas: ['Perfil ainda não confirmado nas fontes autorizadas.'],
  },
  duracaoMinutos: { rapido: null, 'pra-safar': null, completo: null },
};

export default function AddCourseWizard() {
  const [step, setStep] = useState(0); // 0 = intro; 1..5 = etapas
  const [metadata, setMetadata] = useState<WizardMetadata>(METADATA_INICIAL);
  const [topicos, setTopicos] = useState<TopicoTimeline[]>([]);
  const [questoesCelula, setQuestoesCelula] = useState<QuestoesPorCelula>({});
  const [midias, setMidias] = useState<MidiaRef[]>([]);
  const [arquivos, setArquivos] = useState<ArquivoLeve[]>([]);
  const [gerando, setGerando] = useState(false);
  const [nomeGerado, setNomeGerado] = useState<string | null>(null);
  const [hasDraft, setHasDraft] = useState(() => {
    try { return !!localStorage.getItem(DRAFT_KEY); } catch { return false; }
  });

  const questoes = useMemo(() => Object.values(questoesCelula).flat(), [questoesCelula]);

  // ── Rascunho automático ──────────────────────────────────────────────────
  useEffect(() => {
    if (step === 0) return;
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify({ step, metadata, topicos, questoesCelula, midias }));
      setHasDraft(true);
    } catch { /* quota exceeded — silently ignore */ }
  }, [step, metadata, topicos, questoesCelula, midias]);

  const carregarRascunho = () => {
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (!raw) return;
      const d = JSON.parse(raw) as {
        step?: number;
        metadata?: WizardMetadata;
        topicos?: TopicoTimeline[];
        questoesCelula?: QuestoesPorCelula;
        midias?: MidiaRef[];
      };
      if (d.metadata) {
        const perfilAntigo = d.metadata.perfilCobranca as (Partial<CourseKitMetadata['perfilCobranca']> & {
          evidencias?: string | string[];
          fontesLocalizadas?: string[];
        }) | undefined;
        setMetadata({
          ...METADATA_INICIAL,
          ...d.metadata,
          perfilCobranca: {
            ...METADATA_INICIAL.perfilCobranca,
            ...perfilAntigo,
            evidencias: Array.isArray(perfilAntigo?.evidencias)
              ? perfilAntigo.evidencias
              : perfilAntigo?.evidencias ? [perfilAntigo.evidencias] : [],
            fontes_localizadas: perfilAntigo?.fontes_localizadas ?? perfilAntigo?.fontesLocalizadas ?? [],
            incertezas: Array.isArray(perfilAntigo?.incertezas)
              ? perfilAntigo.incertezas
              : METADATA_INICIAL.perfilCobranca.incertezas,
            classificacao: {
              ...METADATA_INICIAL.perfilCobranca.classificacao,
              ...(perfilAntigo?.classificacao ?? {}),
            },
          },
          duracaoMinutos: {
            ...METADATA_INICIAL.duracaoMinutos,
            ...(d.metadata.duracaoMinutos ?? {}),
          },
        });
      }
      if (d.topicos) setTopicos(d.topicos);
      if (d.questoesCelula) setQuestoesCelula(d.questoesCelula);
      if (d.midias) setMidias(d.midias);
      setStep(d.step && d.step >= 1 && d.step <= 5 ? d.step : 1);
    } catch { /* corrupt draft — ignore */ }
  };

  const limparRascunho = () => {
    try { localStorage.removeItem(DRAFT_KEY); } catch { /* ignore */ }
    setHasDraft(false);
    setStep(0);
    setMetadata(METADATA_INICIAL);
    setTopicos([]);
    setQuestoesCelula({});
    setMidias([]);
    setArquivos([]);
    setNomeGerado(null);
  };

  // ── Validações ───────────────────────────────────────────────────────────
  const valMetadata = (): ValidacaoItem[] => {
    const v: ValidacaoItem[] = [];
    if (!metadata.nome.trim()) v.push({ nivel: 'erro', mensagem: 'Informe o nome da matéria.' });
    if (!metadata.slug.trim()) v.push({ nivel: 'erro', mensagem: 'Informe o slug.' });
    if (!metadata.descricao.trim()) v.push({ nivel: 'erro', mensagem: 'Descreva a matéria.' });
    if (anoUsaTurma(metadata.ano) && !metadata.turma) v.push({ nivel: 'erro', mensagem: 'Selecione a turma (3°/4° ano).' });
    if (metadata.perfilCobranca.status === 'confirmado' && !metadata.perfilCobranca.fontes_localizadas.length)
      v.push({ nivel: 'erro', mensagem: 'Perfil confirmado exige ao menos uma fonte com localização exata.' });
    if (!metadata.perfilCobranca.evidencias.length && !metadata.perfilCobranca.incertezas.length)
      v.push({ nivel: 'aviso', mensagem: 'Registre evidências do perfil ou explicite a incerteza.' });
    for (const [modo, minutos] of Object.entries(metadata.duracaoMinutos)) {
      if (!minutos || minutos <= 0) v.push({ nivel: 'aviso', mensagem: `Duração de ${modo} ainda não calculada a partir do conteúdo.` });
    }
    return v;
  };

  const valTimeline = (): ValidacaoItem[] => {
    const v: ValidacaoItem[] = [];
    if (topicos.length < 2) v.push({ nivel: 'erro', mensagem: 'Adicione ao menos 2 tópicos à linha do tempo.' });
    if (topicos.some((t) => !t.conceptId)) v.push({ nivel: 'erro', mensagem: 'Todo tópico precisa de concept_id estável.' });
    if (topicos.some((t) => !(t.modalidades ?? []).includes('completo')))
      v.push({ nivel: 'erro', mensagem: 'Todo conceito precisa estar presente no modo Completo.' });
    if (!topicos.some((t) => (t.modalidades ?? []).includes('rapido')))
      v.push({ nivel: 'aviso', mensagem: 'A matriz ainda não seleciona nenhum conceito para Rápido.' });
    if (topicos.some((t) => t.examinavel !== false && !(t.modalidades ?? []).includes('pra-safar')))
      v.push({ nivel: 'aviso', mensagem: 'Há conteúdo examinável ainda fora do modo Pra Safar.' });
    if (topicos.some((t) => !t.fonteLocalizada?.length))
      v.push({ nivel: 'aviso', mensagem: 'Há conceitos sem arquivo e página/slide localizados; a matriz permanecerá pendente.' });
    if (topicos.some((t) => (t.modalidades ?? []).some((modo) => !t.profundidadePorModalidade?.[modo] || !t.justificativaPorModalidade?.[modo])))
      v.push({ nivel: 'aviso', mensagem: 'Há modalidades sem profundidade ou justificativa na matriz.' });
    if (topicos.length && !topicos.some((t) => t.dicasProfessor?.length))
      v.push({ nivel: 'aviso', mensagem: 'Nenhuma dica do professor informada (opcional).' });
    return v;
  };

  const valExercicios = (): ValidacaoItem[] => {
    const v: ValidacaoItem[] = [];
    for (const d of DIFICULDADES) {
      if (!questoes.some((q) => q.dificuldade === d))
        v.push({ nivel: 'aviso', mensagem: `Dificuldade ${DIFICULDADE_LABELS[d]} sem questões.` });
    }
    const semGab = questoes.filter((q) => q.tipo === 'objetiva' && !q.gabarito).length;
    if (semGab) v.push({ nivel: 'aviso', mensagem: `${semGab} questão(ões) objetiva(s) sem gabarito identificável.` });
    const semEscopo = questoes.filter((q) => !q.conceptIds?.length || !q.modalidades?.length).length;
    if (semEscopo) v.push({ nivel: 'aviso', mensagem: `${semEscopo} questão(ões) ainda sem concept_id ou modalidades; o instalador deve resolver antes da publicação.` });
    return v;
  };

  const valDoStep = (s: number): ValidacaoItem[] =>
    s === 1 ? valMetadata() : s === 2 ? valTimeline() : s === 3 ? valExercicios() : [];

  const validacoesGerais = (): ValidacaoItem[] => [...valMetadata(), ...valTimeline(), ...valExercicios()];

  const etapaAtual = valDoStep(step);
  const podeAvancar = !etapaAtual.some((x) => x.nivel === 'erro');

  // ── Estimativa de tamanho ────────────────────────────────────────────────
  const tamanhoEstimado = useMemo(() => {
    const data = generateCourseKit({ metadata: toKitMetadata(metadata), topicos, questoes, midias });
    return estimateSize(arquivos, JSON.stringify(data));
  }, [metadata, topicos, questoes, midias, arquivos]);

  // ── Geração ──────────────────────────────────────────────────────────────
  const gerar = async () => {
    setGerando(true);
    try {
      const nome = await downloadKit({ metadata: toKitMetadata(metadata), topicos, questoes, midias }, arquivos);
      setNomeGerado(nome);
    } catch (e) {
      alert('Falha ao gerar o zip: ' + (e instanceof Error ? e.message : String(e)));
    } finally {
      setGerando(false);
    }
  };

  if (step === 0) return <IntroModal onContinuar={() => setStep(1)} hasDraft={hasDraft} onRetomar={carregarRascunho} />;

  return (
    <div className="mx-auto max-w-3xl">
      <WizardProgress etapas={ETAPAS} atual={step - 1} onIr={(i) => setStep(i + 1)} />

      <div className="card p-6">
        <h2 className="mb-4 font-serif text-xl text-marfim">{ETAPAS[step - 1]}</h2>

        {step === 1 && <CourseMetadataForm valor={metadata} onChange={setMetadata} />}
        {step === 2 && <TimelineBuilder topicos={topicos} onChange={setTopicos} />}
        {step === 3 && (
          <ExerciseGrid
            cursoSlug={metadata.slug}
            questoes={questoesCelula}
            onChangeCelula={(key, qs) => setQuestoesCelula((prev) => ({ ...prev, [key]: qs }))}
          />
        )}
        {step === 4 && (
          <MaterialsBuilder
            midias={midias}
            arquivos={arquivos}
            onChangeMidias={setMidias}
            onChangeArquivos={setArquivos}
          />
        )}
        {step === 5 && (
          <ReviewAndGenerate
            metadata={metadata}
            topicos={topicos}
            questoes={questoes}
            midias={midias}
            arquivos={arquivos}
            validacoes={validacoesGerais()}
            tamanhoEstimado={tamanhoEstimado}
            gerando={gerando}
            nomeGerado={nomeGerado}
            onGerar={gerar}
          />
        )}

        {step < 5 && etapaAtual.length > 0 && <ValidationAlert itens={etapaAtual} className="mt-5" />}
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <button type="button" className="btn-ghost" onClick={() => setStep((s) => Math.max(0, s - 1))}>
            ← Voltar
          </button>
          <button
            type="button"
            className="text-xs text-nevoa/50 underline-offset-2 hover:text-vermelho hover:underline"
            onClick={limparRascunho}
            title="Apaga todo o progresso e volta ao início"
          >
            Limpar e recomeçar
          </button>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-nevoa/40">💾 Rascunho salvo</span>
          {step < 5 && (
            <button type="button" className="btn-primary" onClick={() => podeAvancar && setStep((s) => s + 1)} disabled={!podeAvancar}>
              Avançar →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function toKitMetadata(m: WizardMetadata): CourseKitMetadata {
  return {
    slug: m.slug,
    nome: m.nome,
    descricao: m.descricao,
    estiloCobranca: m.estiloCobranca,
    perfilCobranca: m.perfilCobranca,
    duracaoMinutos: m.duracaoMinutos,
    ano: m.ano,
    semestre: m.semestre,
    epoca: m.epoca,
    turma: m.turma,
  };
}

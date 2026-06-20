import { useMemo, useState } from 'react';
import type { MidiaRef, TopicoTimeline, ArquivoLeve, ValidacaoItem, CourseKitMetadata } from '@tipos/course-kit';
import { DIFICULDADES, DIFICULDADE_LABELS } from '@tipos/course-kit';
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

const METADATA_INICIAL: WizardMetadata = {
  nome: '', slug: '', slugManual: false,
  ano: '1', semestre: '1', epoca: 'P1', turma: undefined,
  descricao: '', estiloCobranca: '',
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

  const questoes = useMemo(() => Object.values(questoesCelula).flat(), [questoesCelula]);

  // ── Validações ───────────────────────────────────────────────────────────
  const valMetadata = (): ValidacaoItem[] => {
    const v: ValidacaoItem[] = [];
    if (!metadata.nome.trim()) v.push({ nivel: 'erro', mensagem: 'Informe o nome da matéria.' });
    if (!metadata.slug.trim()) v.push({ nivel: 'erro', mensagem: 'Informe o slug.' });
    if (!metadata.descricao.trim()) v.push({ nivel: 'erro', mensagem: 'Descreva a matéria.' });
    if (anoUsaTurma(metadata.ano) && !metadata.turma) v.push({ nivel: 'erro', mensagem: 'Selecione a turma (3°/4° ano).' });
    return v;
  };

  const valTimeline = (): ValidacaoItem[] => {
    const v: ValidacaoItem[] = [];
    if (topicos.length < 2) v.push({ nivel: 'erro', mensagem: 'Adicione ao menos 2 tópicos à linha do tempo.' });
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

  if (step === 0) return <IntroModal onContinuar={() => setStep(1)} />;

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

      <div className="mt-5 flex items-center justify-between">
        <button type="button" className="btn-ghost" onClick={() => setStep((s) => Math.max(0, s - 1))}>
          ← Voltar
        </button>
        {step < 5 && (
          <button type="button" className="btn-primary" onClick={() => podeAvancar && setStep((s) => s + 1)} disabled={!podeAvancar}>
            Avançar →
          </button>
        )}
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
    ano: m.ano,
    semestre: m.semestre,
    epoca: m.epoca,
    turma: m.turma,
  };
}

import { questoesCanonicas } from './questoes';

export interface RegistroAuditoriaQuestaoExistente {
  id: string;
  estado_anterior: string;
  problema_detectado: string;
  fonte_consultada: string;
  decisao: string;
  estado_final: string;
  impacto_por_modalidade: string;
}

/**
 * Registro exaustivo e estável dos 68 IDs publicados antes da revisão por SOPAs.
 * O conteúdo das questões não foi renumerado nem substituído.
 */
export const auditoriaQuestoesExistentes: RegistroAuditoriaQuestaoExistente[] = questoesCanonicas.map((questao) => {
  const relacionadaASopa = questao.origem === 'derivada_sopa';
  return {
    id: questao.id,
    estado_anterior: 'ID canônico publicado; procedência editorial não explicitada no tipo Questao.',
    problema_detectado: relacionadaASopa
      ? 'A relação com o perfil de cobrança existia, mas não era rastreável por assinatura.'
      : 'Questão de suporte misturada ao mesmo banco das questões inspiradas no perfil histórico.',
    fonte_consultada: `${questao.fonteId ?? 'CORPUS-NAV4-T2-APOIO'} · ${questao.fonte ?? 'corpus institucional NAV-4/T2'}`,
    decisao: relacionadaASopa
      ? 'Manter ID e conteúdo; classificar como derivada_sopa e registrar fonteId.'
      : 'Manter ID e conteúdo; classificar como autoral_suporte.',
    estado_final: questao.origem ?? 'autoral_suporte',
    impacto_por_modalidade: (questao.modalidades ?? []).join(', '),
  };
});

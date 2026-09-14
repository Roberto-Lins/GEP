import type { CursoConfig } from '@tipos/course';
import {
  MODALIDADES_ESTUDO,
  MODALIDADE_RESUMOS,
  type ModalidadeCursoConfig,
  type ModalidadeEstudoId,
} from '@tipos/study-mode';

export interface FamiliaCurso {
  id: string;
  titulo: string;
  modalidadePadrao: ModalidadeEstudoId;
  modalidadesDisponiveis: ModalidadeEstudoId[];
  legadoSomenteCompleto: boolean;
  cursos: Partial<Record<ModalidadeEstudoId, CursoConfig>>;
  representante: CursoConfig;
}

export function modalidadeNormalizada(curso: CursoConfig): ModalidadeCursoConfig {
  if (curso.estudo) return curso.estudo;
  const base = MODALIDADE_RESUMOS.completo;
  return {
    contratoVersao: '1.0.0',
    familiaId: curso.slug,
    familiaTitulo: curso.titulo,
    id: 'completo',
    modalidadePadrao: 'completo',
    modalidadesDisponiveis: ['completo'],
    legadoSomenteCompleto: true,
    rotulo: base.rotulo,
    descricao: base.descricao,
    finalidade: base.finalidade,
    cobertura: base.cobertura,
    duracaoMinutos: null,
    estadoAutoria: 'publicado',
  };
}

export function construirFamilias(cursos: CursoConfig[]): FamiliaCurso[] {
  const grupos = new Map<string, CursoConfig[]>();
  for (const curso of cursos) {
    const familiaId = modalidadeNormalizada(curso).familiaId;
    grupos.set(familiaId, [...(grupos.get(familiaId) ?? []), curso]);
  }

  return [...grupos.entries()]
    .map(([id, membros]) => {
      const cursosDaFamilia: Partial<Record<ModalidadeEstudoId, CursoConfig>> = {};
      for (const curso of membros) cursosDaFamilia[modalidadeNormalizada(curso).id] = curso;

      const primeiro = modalidadeNormalizada(membros[0]);
      const representante = cursosDaFamilia[primeiro.modalidadePadrao]
        ?? cursosDaFamilia.completo
        ?? membros[0];
      const disponiveis = MODALIDADES_ESTUDO.filter((modo) => cursosDaFamilia[modo]);

      return {
        id,
        titulo: primeiro.familiaTitulo,
        modalidadePadrao: primeiro.modalidadePadrao,
        modalidadesDisponiveis: disponiveis,
        legadoSomenteCompleto: membros.every((c) => modalidadeNormalizada(c).legadoSomenteCompleto),
        cursos: cursosDaFamilia,
        representante,
      } satisfies FamiliaCurso;
    })
    .sort((a, b) => a.representante.ordem - b.representante.ordem);
}

export function familiaDeCurso(cursos: CursoConfig[], curso: CursoConfig): FamiliaCurso {
  const familiaId = modalidadeNormalizada(curso).familiaId;
  return construirFamilias(cursos).find((f) => f.id === familiaId)!;
}

export function rotaEntradaFamilia(familia: FamiliaCurso): string {
  return familia.legadoSomenteCompleto ? `/${familia.representante.slug}` : `/${familia.id}`;
}

export function formatarDuracaoModalidade(minutos: number | null): string {
  if (!minutos) return 'A calcular após a autoria';
  const horas = Math.floor(minutos / 60);
  const resto = minutos % 60;
  if (!horas) return `${resto} min`;
  if (!resto) return `${horas} h`;
  return `${horas} h ${resto} min`;
}

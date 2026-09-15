import type { Questao } from '@tipos/question';
import type { ModalidadeEstudoId } from '@tipos/study-mode';

/**
 * Seleciona referências do banco canônico sem clonar nem modificar questões.
 * Dificuldade não participa do filtro: modalidades menores não a rebaixam.
 */
export function questoesDaModalidade(
  questoes: Questao[],
  modalidade: ModalidadeEstudoId,
  conceitosEnsinados: ReadonlySet<string>,
): Questao[] {
  return questoes.filter((questao) => {
    if (!questao.modalidades?.includes(modalidade)) return false;
    const conceitos = questao.conceptIds ?? [];
    return conceitos.length > 0 && conceitos.every((id) => conceitosEnsinados.has(id));
  });
}

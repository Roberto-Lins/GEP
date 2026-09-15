import type { ModalidadeEstudoId } from '@tipos/study-mode';
import type { SopaOficialDocumento } from '@tipos/sopa';
import { sopasOficiais as documentos } from './sopas-inventario';

export function sopasPorModalidade(modalidade: ModalidadeEstudoId): SopaOficialDocumento[] {
  const escopos = modalidade === 'completo'
    ? new Set(['dentro_do_escopo_t2_2026','pre_requisito_necessario','historico_fora_do_recorte_atual','bloqueado_por_anexo','bloqueado_por_fonte_de_gabarito'])
    : new Set(['dentro_do_escopo_t2_2026']);
  return documentos
    .map((documento) => ({ ...documento, itens: documento.itens.filter((item) => escopos.has(item.escopo_t2_2026)) }))
    .filter((documento) => documento.itens.length > 0);
}

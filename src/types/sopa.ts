import type { Dificuldade, StatusGabarito } from './question';
import type { ModalidadeEstudoId } from './study-mode';

export type EscopoSopa =
  | 'dentro_do_escopo_t2_2026'
  | 'pre_requisito_necessario'
  | 'historico_fora_do_recorte_atual'
  | 'ilegivel'
  | 'bloqueado_por_anexo'
  | 'bloqueado_por_fonte_de_gabarito';

export interface ItemSopaOficial {
  sopa_id: string;
  arquivo: string;
  prova_ou_bloco_identificado: string;
  ano_confirmado_ou_incerto: string;
  pagina_fisica: number;
  pagina_impressa: string;
  questao: string;
  subitem: string;
  pontuacao_original: string;
  tipo: 'discursiva' | 'vf' | 'multipla' | 'calculo' | 'anexo';
  enunciado_integral: string;
  alternativas?: string[];
  concept_ids: string[];
  dificuldade: Dificuldade;
  assinatura_de_raciocinio: string;
  escopo_t2_2026: EscopoSopa;
  material_necessario: string[];
  anexo_encontrado: string;
  origem_do_gabarito: string;
  status_do_gabarito: StatusGabarito;
  destino_no_curso: string;
  modalidades: ModalidadeEstudoId[];
  gabarito_auditado?: string;
  comentario_gabarito?: string;
  duplicada_de?: string;
}

export interface SopaOficialDocumento {
  id: string;
  titulo: string;
  arquivo: string;
  descricao: string;
  ano: string;
  paginas: number;
  itens: ItemSopaOficial[];
  aviso: string;
}

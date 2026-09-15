// Tipos do banco de questões de um curso.
import type { ModalidadeEstudoId } from './study-mode';

export type TipoQuestao = 'multipla' | 'vf' | 'correlacione' | 'discursiva';

/** Nível de dificuldade — opcional (cursos legados como o GEP não usam). */
export type Dificuldade = 'facil' | 'medio' | 'dificil';

export interface MetadadosQuestao {
  /** habilidade observável exigida pela questão */
  competencia?: string;
  /** tempo de resolução esperado em minutos */
  tempoEstimadoMin?: number;
  /** falha que a questão foi desenhada para diagnosticar */
  erroProvavel?: string;
  /** características estruturais da questão, sem copiar avaliação anterior */
  assinatura?: string[];
  /** caminho de raciocínio exibido após a resposta */
  resolucaoPassoAPasso?: string[];
  /** explicação alinhada às alternativas; aplicável sobretudo à múltipla escolha */
  explicacaoDistratores?: string[];
  /** controle por outra relação, representação ou estimativa */
  verificacaoIndependente?: string;
}

export interface QuestaoMultipla extends MetadadosQuestao {
  id: string;
  tipo: 'multipla';
  topico: string;
  dificuldade?: Dificuldade;
  enunciado: string;
  /** circuito/figura do enunciado — caminho do SVG em /public */
  imagem?: string;
  alternativas: string[]; // índice 0 = A, 1 = B, ...
  correta: number;
  conceito?: string;
  comentario: string;
  fonte?: string;
  armadilha?: string;
  /** conceitos canônicos ensinados que esta questão efetivamente cobra */
  conceptIds?: string[];
  /** modalidades em que pode aparecer, sem alterar id, enunciado ou gabarito */
  modalidades?: ModalidadeEstudoId[];
}

export interface QuestaoVF extends MetadadosQuestao {
  id: string;
  tipo: 'vf';
  topico: string;
  dificuldade?: Dificuldade;
  afirmacao: string;
  /** circuito/figura do enunciado — caminho do SVG em /public */
  imagem?: string;
  correta: boolean;
  comentario: string;
  fonte?: string;
  armadilha?: string;
  conceptIds?: string[];
  modalidades?: ModalidadeEstudoId[];
}

export interface GrupoCorrelacione extends MetadadosQuestao {
  id: string;
  tipo: 'correlacione';
  topico: string;
  dificuldade?: Dificuldade;
  titulo: string;
  chaves: { chave: string; texto: string }[];
  itens: { texto: string; chave: string }[];
  /** explicação exibida após a correção do grupo */
  comentario?: string;
  /** erro provável ou critério de atenção associado ao grupo */
  armadilha?: string;
  fonte?: string;
  conceptIds?: string[];
  modalidades?: ModalidadeEstudoId[];
}

/**
 * Questão discursiva — o aspirante escreve a resposta, revela o gabarito
 * comentado e se autoavalia (sem correção automática, sem IA, sem backend).
 */
export interface QuestaoDiscursiva extends MetadadosQuestao {
  id: string;
  tipo: 'discursiva';
  topico: string;
  dificuldade?: Dificuldade;
  contexto?: string;
  enunciado: string; // o comando/pergunta
  /** circuito/figura do enunciado — caminho do SVG em /public */
  imagem?: string;
  gabaritoComentado: string;
  criterios?: string[]; // critérios de correção para autoavaliação
  comentario?: string; // explicação didática complementar
  fonte?: string;
  armadilha?: string;
  conceptIds?: string[];
  modalidades?: ModalidadeEstudoId[];
}

export type Questao =
  | QuestaoMultipla
  | QuestaoVF
  | GrupoCorrelacione
  | QuestaoDiscursiva;

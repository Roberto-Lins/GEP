// Fontes/bibliografia do curso OPN 1. Hierarquia de prioridade (do contrato do
// curso): Apostila > Orientações do professor > Aulas > ATP > Linha do tempo >
// Mnemônicos > Conteúdos auxiliares > Vídeos. `topicos: []` = fonte transversal
// (aparece em todas as mini-matérias). Mídia pesada não é versionada aqui.
import type { Fonte } from '@tipos/media';
export type { Fonte } from '@tipos/media';

export const fontes: Fonte[] = [
  {
    titulo: 'Apostila "Fundamentos de Operações Navais" — EN-131 (Escola Naval)',
    tipo: 'livro',
    descricao:
      'Fonte oficial, prioritária e tecnicamente validada pelo professor. Base de toda a disciplina: Cap. 1 (fundamentos doutrinários), Cap. 2 (documentos operativos), Cap. 3 (organização, comando e prontidão), Cap. 4 e 5 (manobras táticas) e Cap. 6 (compilação do quadro tático). Usada para validar, corrigir e aprofundar todo o conteúdo.',
    topicos: [],
  },
  {
    titulo: 'Orientações do Professor — OPN 1 / PP1',
    tipo: 'observacao',
    descricao:
      'Direcionamentos de foco, profundidade e forma de cobrança: UEs cobradas (1, 2, 3, 4, 5, 6 e 8), pesos por questão (Rosa 3,7; Cenários Táticos 2,8; Manobras 1,5; diretas/múltipla 2,0) e conteúdos EXCLUÍDos (Operações Anfíbias, Segurança Marítima, Operações de Informação e Plano Operacional).',
    topicos: [],
  },
  {
    titulo: 'ATP-1 Vol. II (extrato) — Publicação Tática de Sinais e Manobras',
    tipo: 'livro',
    descricao:
      'Linguagem operativa padronizada para codificar e interpretar sinais de manobra (FORM, RUMOCOR/CORPEN, GUINA/TURN, VELOC, POS, DESIG). O foco é a UTILIZAÇÃO nas UE5 e UE6, não a memorização do livro. Um extrato é anexo consultável durante a prova.',
    topicos: [
      '06-atp-linguagem-operativa',
      '11-rosa-de-manobras-entrar-em-posicao',
      '12-manobras-taticas-formaturas-e-sinais',
      '13-manobras-taticas-guina-rumocor-e-guia',
    ],
  },
  {
    titulo: 'Apontamentos sobre o inglês do ATP',
    tipo: 'observacao',
    descricao:
      'Apoio para ler o ATP em inglês operativo: termos de obrigação (are to, must, shall, should, may) e vocabulário recorrente dos sinais. Útil para não inverter o sentido de uma ordem.',
    topicos: ['06-atp-linguagem-operativa'],
  },
  {
    titulo: 'Manual de Rosa de Manobras (Marinha do Brasil)',
    tipo: 'livro',
    descricao:
      'Referência da UE5: componentes da Rosa, movimento relativo, diagramas de posições e de velocidades, PMA, vento e entrada em posição. Base dos exemplos resolvidos das mini-matérias de Rosa.',
    topicos: [
      '08-rosa-de-manobras-movimento-relativo',
      '09-rosa-de-manobras-pma-e-contatos',
      '10-rosa-de-manobras-vento',
      '11-rosa-de-manobras-entrar-em-posicao',
    ],
  },
  {
    titulo: 'MIGUENS, Altineu Pires — "Navegação: a Ciência e a Arte" (Cap. 14 — Movimento Relativo)',
    tipo: 'livro',
    descricao:
      'Livro-base para entender movimento relativo e a Rosa de Manobras: DMR/VMR, construção dos diagramas, PMA e soma vetorial. Usado para validar e aprofundar a teoria da UE5.',
    topicos: [
      '08-rosa-de-manobras-movimento-relativo',
      '09-rosa-de-manobras-pma-e-contatos',
      '10-rosa-de-manobras-vento',
      '11-rosa-de-manobras-entrar-em-posicao',
    ],
  },
  {
    titulo: 'Aulas — Fundamentos Doutrinários da Marinha (1.1, 1.2 e 1.3)',
    tipo: 'slide',
    descricao:
      'Slides do professor sobre Poder Marítimo/Naval e características (1.1), Missão da MB, Campos de Atuação e Tarefas Básicas (1.2), e Operações, Ações e Atividades Navais (1.3).',
    topicos: [
      '01-poder-maritimo-e-poder-naval',
      '02-missao-campos-e-tarefas-do-poder-naval',
      '03-operacoes-acoes-e-atividades-navais',
    ],
  },
  {
    titulo: 'Aulas — Documentos Operativos (2.1 e 2.2)',
    tipo: 'slide',
    descricao:
      'Tipos e finalidades dos documentos operativos (2.1) e principais dados extraídos de uma OrdOpe/OrdMov (2.2).',
    topicos: ['04-documentos-operativos-e-diretivas', '05-estrutura-da-ordope-e-ordmov'],
  },
  {
    titulo: 'Aula — Organização de Forças Navais, Comando e Prontidão (4.1)',
    tipo: 'slide',
    descricao:
      'Organização por tipo/tarefa/combate, FT/GT/UT/ET, CWC, relações de comando e controle e condições de prontidão.',
    topicos: ['07-organizacao-comando-e-prontidao'],
  },
  {
    titulo: 'Aulas — Rosa de Manobras (movimento relativo, PMA, vento e posição)',
    tipo: 'slide',
    descricao:
      'Sequência de aulas da UE5: movimento relativo e PPI; fundamentos da Rosa; PMA e contatos; vento; entrar em posição. Trazem os exemplos resolvidos usados para validar os cálculos.',
    topicos: [
      '08-rosa-de-manobras-movimento-relativo',
      '09-rosa-de-manobras-pma-e-contatos',
      '10-rosa-de-manobras-vento',
      '11-rosa-de-manobras-entrar-em-posicao',
    ],
  },
  {
    titulo: 'Aulas — Manobras Táticas (UE6) e extrato do ATP de manobras',
    tipo: 'slide',
    descricao:
      'Definições, formaturas em linha, rumos e velocidades em formatura, GUINA × RUMOCOR, mudança automática de guia e troca de postos.',
    topicos: ['12-manobras-taticas-formaturas-e-sinais', '13-manobras-taticas-guina-rumocor-e-guia'],
  },
  {
    titulo: 'Aulas — Compilação do Quadro Tático (8.1, 8.2, 8.3 e 8.4)',
    tipo: 'slide',
    descricao:
      'COC/CIC, etapas e funções; métodos de posição; contatos, categorias, números/blocos e partes; Link de dados e PROFON; plotagens, PIM, RDVZ, ETA e OPGEN.',
    topicos: [
      '14-quadro-tatico-coc-cic-e-etapas',
      '15-quadro-tatico-contatos-e-partes',
      '16-quadro-tatico-plotagens-pim-e-opgen',
    ],
  },
];

export const fontesPorTopico = (slug: string) =>
  fontes.filter((f) => f.topicos.length === 0 || f.topicos.includes(slug));

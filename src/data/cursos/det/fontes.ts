// Fontes da disciplina de Detecção (PP1). Material oficial do Prof. Marcelo C. Fragoso
// (slides), listas oficiais com gabarito e o livro-base. Os arquivos ainda não estão
// versionados em /public — quando forem, preencher `arquivo`.
import type { Fonte } from '@tipos/media';
export type { Fonte } from '@tipos/media';

const TODOS = [
  '00-ideia-central-da-prova', '01-ferramentas-de-calculo', '02-fontes-cc-reguladas',
  '03-reguladores-com-transistor', '04-reguladores-integrados', '05-reguladores-chaveados-pwm',
  '06-limitadores', '07-grampeadores', '08-comparadores', '09-multivibradores-555',
  '10-schmitt-trigger', '11-tiristores-scr-diac-triac', '12-ujt-oscilador-relaxacao',
  '13-geradores-base-de-tempo', '99-revisao-final',
];

export const fontes: Fonte[] = [
  {
    titulo: 'LinhaDoTempo — Detecção PP1 (roteiro do professor)',
    tipo: 'observacao',
    descricao: 'Roteiro lógico de estudo do Prof. Marcelo C. Fragoso: ordem dos tópicos, o que a prova cobra, linha de raciocínio, fórmulas e armadilhas. Espinha dorsal da trilha.',
    topicos: TODOS,
  },
  {
    titulo: 'Slides — Fontes Reguladas 1, 2 e 3',
    tipo: 'slide',
    descricao: 'Fontes CC reguladas, reguladores com transistor (série/paralelo/limitador), reguladores integrados (7805/7812/LM317) e chaveados/PWM.',
    topicos: ['02-fontes-cc-reguladas', '03-reguladores-com-transistor', '04-reguladores-integrados', '05-reguladores-chaveados-pwm'],
  },
  {
    titulo: 'Slides — Limitadores e Grampeadores',
    tipo: 'slide',
    descricao: 'Seis exemplos de limitadores (com diodo, diodo+fonte DC, Zener, limitador ativo) e grampeadores CC positivos/negativos.',
    topicos: ['06-limitadores', '07-grampeadores'],
  },
  {
    titulo: 'Slides — Multivibradores e Comparadores',
    tipo: 'slide',
    descricao: 'Comparadores com amp-op e o CI 555 como multivibrador astável, monoestável e biestável.',
    topicos: ['08-comparadores', '09-multivibradores-555'],
  },
  {
    titulo: 'Slides — Schmitt-Trigger',
    tipo: 'slide',
    descricao: 'Comparador com histerese: cálculo de UTP/LTP, três exemplos e três exercícios.',
    topicos: ['10-schmitt-trigger'],
  },
  {
    titulo: 'Slides — Tiristores',
    tipo: 'slide',
    descricao: 'SCR, DIAC, TRIAC e UJT: condução, desligamento, forma de onda de IL e oscilador de relaxação.',
    topicos: ['11-tiristores-scr-diac-triac', '12-ujt-oscilador-relaxacao'],
  },
  {
    titulo: 'Slides — Base de Tempo',
    tipo: 'slide',
    descricao: 'Geradores de rampa/dente-de-serra com UJT e 555 + fonte de corrente. Conteúdo que NÃO consta no livro — o slide é a referência.',
    topicos: ['13-geradores-base-de-tempo'],
  },
  {
    titulo: 'Lista de Exercícios de DET (Lista 1) + Gabarito (Lista 2)',
    tipo: 'prova',
    descricao: 'Lista oficial de exercícios com gabarito: filtragem/grampeador, LM317, frequência do 555, formas de onda do 555, regulador série com potências, Schmitt (UTP/LTP) e limitador de corrente.',
    topicos: ['02-fontes-cc-reguladas', '03-reguladores-com-transistor', '04-reguladores-integrados', '06-limitadores', '07-grampeadores', '09-multivibradores-555', '10-schmitt-trigger'],
  },
  {
    titulo: 'Boylestad — Dispositivos Eletrônicos e Teoria de Circuitos (11ª ed.)',
    tipo: 'livro',
    descricao: 'Livro-base oficial. Fundamenta a teoria (exceto Base de Tempo, que não está no livro). Em divergência com o slide, prevalece o slide (cobrança real da PP1).',
    topicos: TODOS,
  },
];

export const fontesPorTopico = (slug: string) =>
  fontes.filter((f) => f.topicos.length === 0 || f.topicos.includes(slug));

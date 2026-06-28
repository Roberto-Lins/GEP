// Fontes/bibliografia do curso REL (Relações Internacionais — P1). Os slides do
// professor são a fonte principal de conteúdo, estrutura temática e — futuramente —
// das imagens/gráficos a serem inseridos como prints nos tópicos. Os resumos por
// tópico e a linha do tempo são o material de apoio que organizou a trilha.
import type { Fonte } from '@tipos/media';
export type { Fonte } from '@tipos/media';

const TODOS = [
  '00-como-estudar-rel',
  '01-escolas-de-ri-lentes-de-analise',
  '02-sistemas-internacionais-e-poder',
  '03-ruptura-da-ordem-e-eua-china',
  '04-oceanopolitica-e-amazonia-azul',
  '05-meio-ambiente-como-tema-geopolitico',
  '06-antartica-artico-cnudm-e-leito-marinho',
  '07-seguranca-internacional-ampliada',
  '08-energia-como-eixo-geoeconomico',
  '09-globalizacao-cadeias-e-logistica',
  '10-organizacoes-internacionais-imo-e-migracoes',
  '11-sintese-brasil-marinha',
  '99-revisao-final',
];

export const fontes: Fonte[] = [
  {
    titulo: 'REL — P1 — Slides de aula',
    tipo: 'slide',
    descricao:
      'Fonte principal de conteúdo, estrutura temática e exemplos da disciplina. Cobrem apresentação da matéria, escolas de RI, sistemas internacionais, oceanopolítica, meio ambiente, Antártica/Ártico/CNUDM, segurança, energia, globalização e organizações internacionais. Os gráficos, mapas e esquemas dos slides serão inseridos como prints nos tópicos posteriormente.',
    topicos: TODOS,
  },
  {
    titulo: 'Resumos-debate por tópico — Relações Internacionais',
    tipo: 'resumo',
    descricao:
      'Resumos analíticos por tópico, escritos em estilo de debate (pergunta-mãe → tensões sob as três lentes → contrapontos → aterrissagem em Brasil/Marinha → síntese → "Para a prova"). Base direta do conteúdo de cada mini-matéria deste curso.',
    topicos: TODOS,
  },
  {
    titulo: 'Linha do Tempo de Estudo — Relações Internacionais',
    tipo: 'observacao',
    descricao:
      'Roteiro que organiza a matéria como uma linha de raciocínio única (lentes → estrutura do sistema → disputa de poder → espaços de projeção → recursos → segurança → globalização → governança → síntese Brasil-Marinha) e define o método de prova. Base da timeline deste curso.',
    topicos: ['00-como-estudar-rel', '11-sintese-brasil-marinha', '99-revisao-final'],
  },
  {
    titulo: 'Como a prova de REL cobra — observações de método',
    tipo: 'observacao',
    descricao:
      'A prova é subjetiva e conceitual: não cobra "defina realismo", e sim contextualização geopolítica e geoeconômica (por que um ator se projeta, como uma potência reage à ascensão de outra, como energia/comércio/rotas/instituições se conectam e quais impactos surgem para o Brasil e a Marinha). Orientou o método de resposta e o foco de cada tópico.',
    topicos: TODOS,
  },
];

export function fontesPorTopico(slug: string): Fonte[] {
  return fontes.filter((f) => f.topicos.includes(slug));
}

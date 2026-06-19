// Fontes/bibliografia do curso HNV. `arquivo` aponta para /public (download opcional).
// A transcrição da aula de Loureiro já está versionada (leve, 36 KB) em
// /public/arquivos/cursos/hnv/. TODO: os demais textos-base (Mylae, Bicalho,
// Conquistar e Defender) existem em ../HNV/Fontes — versionar os leves quando útil.
import type { Fonte } from '@tipos/media';
export type { Fonte } from '@tipos/media';

export const fontes: Fonte[] = [
  {
    titulo: 'FERREIRA, Leonardo da Costa — "A Batalha de Mylae: por uma nova história militar da Idade Antiga"',
    tipo: 'livro',
    descricao: 'Outros Tempos, vol. 16, n. 28, 2019, p. 184-199. Texto-base sobre a Primeira Guerra Púnica, o corvus e o contraste entre exército cidadão romano e mercenarismo cartaginês.',
    topicos: ['01-mediterraneo-antigo-e-batalha-de-mylae'],
  },
  {
    titulo: 'CEZAR, Willian Carmo — "Uma História das Guerras Navais" (Caps. 5 e 6)',
    tipo: 'livro',
    descricao: 'Capítulos sobre Cogas, Velas e Canhões e sobre as Ocupações Francesas e Holandesas no Brasil. Base da evolução tecnológica naval e das operações navais coloniais.',
    topicos: ['02-da-galera-ao-navio-de-vela', '04-ocupacoes-francesas-e-holandesas'],
  },
  {
    titulo: 'BICALHO, Maria Fernanda B. — "A França Antártica, o corso, a conquista e a \'peçonha luterana\'"',
    tipo: 'livro',
    descricao: 'HISTÓRIA, São Paulo, 27(1): 2008, p. 29-50. Texto-base sobre a ameaça bifronte da França Antártica, guerra viva, mercês régias e Fé e Império.',
    topicos: ['03-franca-antartica-corso-e-religiao'],
  },
  {
    titulo: 'LOUREIRO, Marcello — "Em miserável estado: Portugal, as guerras de Restauração e o governo do Império (1640-1654)"',
    tipo: 'livro',
    descricao: 'In: Conquistar e Defender, p. 195-214. Texto-base sobre o Estado polissinodal, a monarquia pluricontinental e o nexo atlântico Brasil-Angola.',
    topicos: ['05-brasil-holandes-restauracao-e-imperio'],
  },
  {
    titulo: 'LOUREIRO, Marcello — Transcrição da aula (pontos-chave do texto de Restauração)',
    tipo: 'observacao',
    descricao: 'Transcrição de uma aula do próprio autor: invasões holandesas, Guerra da Restauração, governo polissinodal, o mito do rei absolutista, a "Gestão do Labirinto" ("obedeço mas não cumpro"), a economia das mercês e a monarquia pluricontinental. Base da mini-matéria Extras.',
    arquivo: '/arquivos/cursos/hnv/transcricao-aula-loureiro.pdf',
    topicos: ['06-extras', '05-brasil-holandes-restauracao-e-imperio'],
  },
  {
    titulo: 'Strategic Naval Evolution (slides de apoio)',
    tipo: 'slide',
    descricao: 'Apresentação de apoio que costura a evolução do poder naval ao longo da matéria. TODO: externalizar/versionar o arquivo .pptx se for leve.',
    topicos: [],
  },
  {
    titulo: 'Resumo completo — História Naval (Escola Naval)',
    tipo: 'resumo',
    descricao: 'Resumo exaustivo, texto a texto, com conceitos-chave, possíveis questões discursivas e armadilhas de prova. Espinha dorsal das aulas deste curso.',
    topicos: [],
  },
];

export const fontesPorTopico = (slug: string) =>
  fontes.filter((f) => f.topicos.length === 0 || f.topicos.includes(slug));

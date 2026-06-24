// Fontes da FAS P1. `arquivo` aponta para /public quando há download disponível.
// Os slides do professor (PDFs de 2–5 MB cada) NÃO são versionados no repo
// (docs/MEDIA-PROTOCOL.md: PDFs pesados ficam fora) — são referenciados como
// material oficial de origem. A SOPA (questões da prova antiga, 151 KB) é leve e
// está disponível para download.
import type { Fonte } from '@tipos/media';
export type { Fonte } from '@tipos/media';

export const fontes: Fonte[] = [
  {
    titulo: 'SOPA — Questões extraídas da prova (FAS P1)',
    tipo: 'prova',
    descricao:
      'Questões de provas antigas de FAS, fonte primária do estilo de cobrança do professor. Estão catalogadas por assunto na Central de questões; algumas tratam de conteúdo retirado desta prova (devidamente sinalizado).',
    arquivo: '/arquivos/cursos/fas/sopa-questoes-fas-p1.pdf',
    topicos: [],
  },
  {
    titulo: 'Slide SUE 1.2B — Diagrama de Instrumentação',
    tipo: 'slide',
    descricao: 'Material oficial do professor sobre malhas de controle, tags ISA e ligações elétrica/pneumática.',
    topicos: ['01-diagramas-de-instrumentacao'],
  },
  {
    titulo: 'Slide SUE 2.1 — Caracterização de Sensor',
    tipo: 'slide',
    descricao: 'Características estáticas e ambientais, cálculo de histerese e linearidade, índice de proteção (IP).',
    topicos: ['02-caracteristicas-estaticas-e-ambientais', '04-fundamentos-de-sensores-e-transdutores'],
  },
  {
    titulo: 'Slide SUE 2.2 — Erros de Medidas',
    tipo: 'slide',
    descricao: 'Erros sistemático, aleatório e grosseiro; exatidão × precisão; método de Kline e McClintock.',
    topicos: ['03-erros-medidas-e-incertezas'],
  },
  {
    titulo: 'Slide SUE 2.3 — Sensores de Posição e Velocidade (parte 2)',
    tipo: 'slide',
    descricao: 'LVDT, potenciômetro, resolver, encoders (absoluto/incremental) e tacômetros CC/CA.',
    topicos: ['05-sensores-de-posicao', '07-sensores-de-velocidade-e-conversao'],
  },
  {
    titulo: 'Slide SUE 2.3 — Sensores de Vazão',
    tipo: 'slide',
    descricao: 'Vazão por pressão diferencial (placa de orifício e Venturi), medidor eletromagnético e outros.',
    topicos: ['06-sensores-de-vazao'],
  },
  {
    titulo: 'Slide SUE 2.5 — Aplicações de Sensores em Sistemas Automatizados',
    tipo: 'slide',
    descricao: 'Acelerômetros, giroscópios e sistemas de navegação inercial (INS). Rigidez e precessão constam aqui, mas foram retiradas desta prova.',
    topicos: ['08-giroscopios-acelerometros-e-inerciais'],
  },
  {
    titulo: 'Slides SUE 3.1 — Sincros (partes 1 e 2) + Tabela de Sincros',
    tipo: 'slide',
    descricao: 'TX/TR, CX/CT e TDX/TDR: entradas, saídas, condição de nulo e a tabela-mestre dos sincros.',
    topicos: ['09-sincros'],
  },
  {
    titulo: 'Resumo completo de FAS P1 (Claude)',
    tipo: 'resumo',
    descricao: 'Resumo aprofundado, tópico a tópico, que serviu de espinha dorsal deste curso, com a SOPA resolvida e comentada.',
    topicos: [],
  },
  {
    titulo: 'Resumos por tópico (NotebookLM)',
    tipo: 'resumo',
    descricao: 'Revisões geradas pelo NotebookLM para cada bloco da matéria (diagramas, características, erros, sensores, inerciais e sincros).',
    topicos: [],
  },
];

export const fontesPorTopico = (slug: string) =>
  fontes.filter((f) => f.topicos.length === 0 || f.topicos.includes(slug));

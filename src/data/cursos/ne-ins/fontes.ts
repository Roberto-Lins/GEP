import type { Fonte } from '@tipos/media';
export type { Fonte } from '@tipos/media';

export const fontes: Fonte[] = [
  {
    titulo: 'N.E. Exam — prova escrita de 2025',
    tipo: 'prova',
    descricao: '30 questões de múltipla escolha com o gabarito oficial sublinhado. Reproduzida integralmente no Simulado 1 e comentada no módulo 00. A Q28 veio sem os dados do cálculo.',
    topicos: [],
  },
  {
    titulo: 'Electr L1 2026 — Signals and Fourier analysis',
    tipo: 'slide',
    descricao: 'Programa do curso, R.O.E. (data da prova 16 Oct 2026), sinais, processos estocásticos, Dirac, sinc, série e transformadas de Fourier.',
    topicos: ['00-mapa-da-prova-e-prova-2025', '01-sinais-e-classificacao', '02-analise-de-fourier', '99-revisao-final'],
  },
  {
    titulo: 'Electr L2 2026 — Systems, A/D conversion and baseband transmission',
    tipo: 'slide',
    descricao: 'Sistemas LTI, filtros, decibel, amostragem, aliasing, quantização, DAC, line coding, PCM e receptor.',
    topicos: ['03-sistemas-filtros-e-decibel', '04-conversao-ad-e-amostragem', '05-transmissao-em-banda-base-e-pcm', '99-revisao-final'],
  },
  {
    titulo: 'Electr L3 2026 — Noise and ISI',
    tipo: 'slide',
    descricao: 'SNR, ruídos térmico, flicker e shot, banda equivalente, fator e temperatura de ruído, Friis, AWGN, ISI e cosseno levantado.',
    topicos: ['06-ruido-snr-e-figura-de-ruido', '07-interferencia-intersimbolica', '99-revisao-final'],
  },
  {
    titulo: 'Electr L4 2026 — Channel capacity and digital modulation',
    tipo: 'slide',
    descricao: 'Nyquist, baud, Hartley, Shannon, BER, ASK, FSK, PSK, QPSK, QAM e desempenho das modulações.',
    topicos: ['08-capacidade-do-canal', '09-modulacao-digital', '99-revisao-final'],
  },
  {
    titulo: 'Electr L5 2026 — Electronic components, ICs and logic',
    tipo: 'slide',
    descricao: 'Componentes, diodo, BJT, FET, MOSFET, circuitos integrados, álgebra booleana, portas, latches e CMOS. Não houve questão desses assuntos em 2025.',
    topicos: ['10-componentes-eletronicos-e-cis', '11-algebra-booleana-e-logica', '99-revisao-final'],
  },
];

export const fontesPorTopico = (slug: string) =>
  fontes.filter((fonte) => fonte.topicos.length === 0 || fonte.topicos.includes(slug));

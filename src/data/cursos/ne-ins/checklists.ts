import type { ItemChecklist } from '@tipos/lesson';
export type { ItemChecklist } from '@tipos/lesson';

const itens = (prefixo: string, textos: string[]): ItemChecklist[] =>
  textos.map((texto, i) => ({ id: `ne-${prefixo}-c${String(i + 1).padStart(2, '0')}`, texto }));

export const checklists: Record<string, ItemChecklist[]> = {
  '00-mapa-da-prova-e-prova-2025': itens('m00', [
    'Fiz o Simulado 1 (prova de 2025) e acertei pelo menos 27 de 30.',
    'Sei de memória a resposta das 30 questões de 2025 e o porquê de cada uma.',
    'Sei que ruído, amostragem e modulação somaram 23 das 30 questões em 2025.',
    'Fiz os Simulados 2 e 3 de inéditas.',
  ]),
  '01-sinais-e-classificacao': itens('m01', [
    'Distingo processo estacionário de ergódico.',
    'Classifico um sinal em tempo contínuo/discreto e amplitude contínua/discreta; sei que digital é discreto nos dois.',
    'Enuncio as propriedades do Dirac: impulso num instante, área 1, extrai o valor da função, espectro plano.',
    'Sei onde a sinc normalizada vale zero.',
  ]),
  '02-analise-de-fourier': itens('m02', [
    'Associo cada transformada (SFT, CTFT, DTFT, DFT) ao tipo de sinal e de espectro.',
    'Aplico a regra: periódico ↔ linhas; discreto ↔ periódico.',
    'Sei que rect ↔ sinc e que banda é proporcional a 1/T.',
    'Sei o que a FFT é: algoritmo rápido da DFT.',
  ]),
  '03-sistemas-filtros-e-decibel': itens('m03', [
    'Defino linear (homogêneo + aditivo), invariante no tempo e causal.',
    'Explico por que o passa-baixas ideal é não causal.',
    'Converto razões de potência (10 log) e de amplitude (20 log) para dB.',
  ]),
  '04-conversao-ad-e-amostragem': itens('m04', [
    'Enuncio Nyquist-Shannon: banda limitada e fc ≥ 2B.',
    'Explico aliasing (réplicas sobrepostas → distorção) e o filtro anti-aliasing passa-baixas.',
    'Distingo interpolação cardinal (sincs, exige banda limitada) de sample and hold (constante por partes).',
    'Calculo níveis (2ⁿ), bits (⌈log₂ N⌉), erro máximo (±K/2) e bitrate.',
  ]),
  '05-transmissao-em-banda-base-e-pcm': itens('m05', [
    'Sei que banda base serve a conexões diretas (Ethernet) e não usa portadora.',
    'Reconheço unipolar, polar NRZ, NRZ-L, NRZ-I e AMI.',
    'Calculo o PCM telefônico: 8 kHz × 8 bits = 64 kb/s.',
    'Uso ≈ 6 dB de SQR por bit (4 bits → 24 dB).',
  ]),
  '06-ruido-snr-e-figura-de-ruido': itens('m06', [
    'Defino banda equivalente de ruído com a frase da prova.',
    'Defino F = SNRi/SNRo, NF = 10 log F e Tr = (F − 1)T.',
    'Aplico Friis e sei que o 1º estágio domina (LNA).',
    'Sei que ruído térmico vem dos resistores, PSD = kT, N = kTB, −174 dBm/Hz.',
    'Explico o A, o W e o G de AWGN.',
  ]),
  '07-interferencia-intersimbolica': itens('m07', [
    'Explico a origem da ISI mesmo sem ruído.',
    'Enuncio o critério de Nyquist e a banda mínima R/2.',
    'Calculo BW = R/2·(1 + β) do cosseno levantado.',
  ]),
  '08-capacidade-do-canal': itens('m08', [
    'Uso C = 2B (Nyquist), C = 2B log₂ M (Hartley) e C = B log₂(1 + SNR) (Shannon).',
    'Converto SNR de dB para linear antes de Shannon.',
    'Distingo baud de bit/s.',
  ]),
  '09-modulacao-digital': itens('m09', [
    'Identifico ASK, FSK, PSK e QAM pelo parâmetro que varia.',
    'Sei bits por símbolo de BPSK, QPSK, 8PSK, 16QAM, 64QAM e 256QAM.',
    'Explico I/Q, constelação e código Gray.',
    'Sei por que modular: antenas viáveis e comunicação a longa distância.',
  ]),
  '10-componentes-eletronicos-e-cis': itens('m10', [
    'Sei as três regiões do BJT e qual é chave aberta/fechada.',
    'Distingo MOSFET enhancement (normalmente OFF) de depletion (normalmente ON).',
    'Sei Moore, escalas de integração e o papel de FPGA, DSP e GPP.',
  ]),
  '11-algebra-booleana-e-logica': itens('m11', [
    'Escrevo a tabela-verdade de todas as portas.',
    'Aplico De Morgan e sei que NAND e NOR são universais.',
    'Explico o latch SR (estado proibido) e o inversor/NAND em CMOS.',
  ]),
  '99-revisao-final': itens('r99', [
    'Li o formulário inteiro.',
    'Revisei os erros frequentes.',
    'Refiz a prova de 2025 sem consulta.',
  ]),
};

export const checklistDe = (slug: string) => checklists[slug] ?? [];

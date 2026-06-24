/**
 * Geração de "PIX Copia e Cola" (BR Code estático, padrão EMV® do Banco Central).
 *
 * Util puro, sem dependências — usado pelo script `scripts/gerar-pix.ts` em build
 * para produzir o payload e o QR code. Não entra no bundle do cliente.
 *
 * Referência: Manual do BR Code (Bacen) / EMV QRCPS-MPM.
 */

export interface DadosPix {
  /** Chave PIX (CPF, e-mail, telefone +55…, ou chave aleatória/EVP). */
  chave: string;
  /** Nome do beneficiário (campo 59) — máx. 25 caracteres. */
  nome: string;
  /** Cidade do beneficiário (campo 60) — máx. 15 caracteres. */
  cidade: string;
  /** Identificador da transação (campo 62.05). Padrão "***" para QR estático sem txid. */
  txid?: string;
  /** Valor fixo em reais (campo 54). Omitir = valor aberto (usuário escolhe no app). */
  valor?: number;
}

/** Monta um campo EMV: id + comprimento (2 dígitos) + valor. */
function campo(id: string, valor: string): string {
  const tamanho = valor.length.toString().padStart(2, '0');
  return `${id}${tamanho}${valor}`;
}

/**
 * Normaliza texto para o BR Code: remove acentos, mantém ASCII imprimível e
 * recorta no comprimento máximo do campo.
 */
function sanitizar(texto: string, maximo: number): string {
  return texto
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // remove diacríticos
    .replace(/[^\x20-\x7e]/g, '') // só ASCII imprimível
    .trim()
    .slice(0, maximo);
}

/** CRC16-CCITT (polinômio 0x1021, valor inicial 0xFFFF) — campo 63 do BR Code. */
export function crc16(payload: string): string {
  let crc = 0xffff;
  for (let i = 0; i < payload.length; i++) {
    crc ^= payload.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      crc = crc & 0x8000 ? (crc << 1) ^ 0x1021 : crc << 1;
      crc &= 0xffff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, '0');
}

/** Gera a string "PIX Copia e Cola" (BR Code) a partir dos dados informados. */
export function gerarPixCopiaECola(dados: DadosPix): string {
  const nome = sanitizar(dados.nome, 25);
  const cidade = sanitizar(dados.cidade, 15);
  const txid = sanitizar(dados.txid ?? '***', 25) || '***';

  // 26 — Merchant Account Information (template PIX)
  const mai = campo('00', 'br.gov.bcb.pix') + campo('01', dados.chave.trim());

  // 62 — Additional Data Field Template (Reference Label)
  const adicional = campo('05', txid);

  let payload =
    campo('00', '01') + // Payload Format Indicator
    campo('26', mai) +
    campo('52', '0000') + // Merchant Category Code
    campo('53', '986'); // Moeda: BRL

  if (typeof dados.valor === 'number' && dados.valor > 0) {
    payload += campo('54', dados.valor.toFixed(2)); // valor fixo (opcional)
  }

  payload +=
    campo('58', 'BR') + // País
    campo('59', nome) +
    campo('60', cidade) +
    campo('62', adicional);

  // 63 — CRC16 calculado sobre o payload + "6304"
  const parcial = payload + '6304';
  return parcial + crc16(parcial);
}

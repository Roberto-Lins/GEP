// Gera o "PIX Copia e Cola" e o QR code estático da página /apoie.
// Produz:
//   - public/imagens/plataforma/pix-qr.svg   (QR como SVG, sem JS no cliente)
//   - src/data/apoie.ts                       (export const PIX = {...})
// Uso: npm run gerar-pix
//
// Para trocar a chave/nome/cidade, edite o objeto DADOS abaixo e rode de novo.
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import QRCode from 'qrcode';
import { gerarPixCopiaECola, type DadosPix } from '../src/utils/pix';

const DADOS: DadosPix = {
  chave: '3de31968-f662-4b36-9f71-eddc048489f0', // chave aleatória (EVP)
  nome: 'Roberto Lins',
  cidade: 'RIO DE JANEIRO',
  // valor aberto: o apoiador escolhe quanto pagar no app do banco
};

const SVG_OUT = 'public/imagens/plataforma/pix-qr.svg';
const DATA_OUT = 'src/data/apoie.ts';

async function main() {
  const copiaECola = gerarPixCopiaECola(DADOS);

  // QR como SVG (cores do tema naval-command, fundo claro p/ leitura)
  const svg = await QRCode.toString(copiaECola, {
    type: 'svg',
    errorCorrectionLevel: 'M',
    margin: 1,
    color: { dark: '#0B1220', light: '#F7F3EA' },
  });

  mkdirSync(dirname(SVG_OUT), { recursive: true });
  writeFileSync(SVG_OUT, svg, 'utf8');

  const dataFile = `// GERADO por scripts/gerar-pix.ts — não edite à mão. Rode: npm run gerar-pix
export const PIX = {
  chave: ${JSON.stringify(DADOS.chave)},
  nome: ${JSON.stringify(DADOS.nome)},
  cidade: ${JSON.stringify(DADOS.cidade)},
  /** Caminho do QR estático (SVG) em /public. */
  qrSvg: '/imagens/plataforma/pix-qr.svg',
  /** String "PIX Copia e Cola" (BR Code) pronta para colar no app do banco. */
  copiaECola: ${JSON.stringify(copiaECola)},
} as const;
`;
  mkdirSync(dirname(DATA_OUT), { recursive: true });
  writeFileSync(DATA_OUT, dataFile, 'utf8');

  console.log('✓ PIX gerado');
  console.log('  • ' + SVG_OUT);
  console.log('  • ' + DATA_OUT);
  console.log('  • copia-e-cola:', copiaECola);
}

main().catch((e) => {
  console.error('Falha ao gerar PIX:', e);
  process.exit(1);
});

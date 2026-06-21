import { useState } from 'react';
import CampoNumero from './CampoNumero';
import { fmtNum } from './formato';

// Calculadora de divisor de tensão (aula 01) — a ferramenta mais reusada do curso.
// Vnó = Vfonte · Rbaixo / (Rcima + Rbaixo).
export default function CalculadoraDivisor() {
  const [vf, setVf] = useState(12);
  const [rc, setRc] = useState(4);
  const [rb, setRb] = useState(8);

  const soma = rc + rb;
  const vno = soma > 0 ? (vf * rb) / soma : 0;
  const fracao = soma > 0 ? rb / soma : 0;

  const Resultado = ({ rotulo, valor }: { rotulo: string; valor: string }) => (
    <div className="flex items-baseline justify-between gap-3 border-b border-white/5 py-1.5">
      <span className="text-sm text-nevoa/70">{rotulo}</span>
      <span className="font-mono text-marfim">{valor}</span>
    </div>
  );

  return (
    <div className="not-prose card my-6 p-5">
      <h4 className="mb-4 font-serif text-lg text-marfim">Calculadora de divisor de tensão</h4>
      <div className="grid gap-3 sm:grid-cols-3">
        <CampoNumero label="Vfonte" valor={vf} onChange={setVf} unidade="V" />
        <CampoNumero label="Rcima" valor={rc} onChange={setRc} unidade="kΩ" passo={0.1} />
        <CampoNumero label="Rbaixo" valor={rb} onChange={setRb} unidade="kΩ" passo={0.1} />
      </div>
      <div className="mt-4 rounded-xl border border-white/10 bg-naval-800/50 p-4">
        <Resultado rotulo="Vnó = Vfonte·Rbaixo/(Rcima+Rbaixo)" valor={`${fmtNum(vno)} V`} />
        <Resultado rotulo="fração Rbaixo/(Rcima+Rbaixo)" valor={fmtNum(fracao, 3)} />
      </div>
      <p className="mt-3 text-xs text-nevoa/50">
        Confira: 12 V, 4 kΩ, 8 kΩ → 8 V. A corrente é a mesma nos dois resistores; a tensão se reparte
        na proporção das resistências.
      </p>
    </div>
  );
}

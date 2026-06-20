import { useState } from 'react';
import CampoNumero from './CampoNumero';
import { fmtNum } from './formato';

// Calculadora do Schmitt-trigger (alimentação simétrica ±VCC).
// β = Rbaixo/(Rcima+Rbaixo); UTP = β·(+VCC); LTP = β·(−VCC); histerese = UTP − LTP.
export default function CalculadoraSchmitt() {
  const [vcc, setVcc] = useState(12);
  const [rcima, setRcima] = useState(12);
  const [rbaixo, setRbaixo] = useState(24);

  const beta = rbaixo / (rcima + rbaixo);
  const utp = beta * vcc;
  const ltp = -beta * vcc;
  const hist = utp - ltp;

  const Resultado = ({ rotulo, valor }: { rotulo: string; valor: string }) => (
    <div className="flex items-baseline justify-between gap-3 border-b border-white/5 py-1.5">
      <span className="text-sm text-nevoa/70">{rotulo}</span>
      <span className="font-mono text-marfim">{valor}</span>
    </div>
  );

  return (
    <div className="not-prose card my-6 p-5">
      <h4 className="mb-4 font-serif text-lg text-marfim">Calculadora do Schmitt-trigger</h4>
      <div className="grid gap-3 sm:grid-cols-3">
        <CampoNumero label="VCC (±)" valor={vcc} onChange={setVcc} unidade="V" />
        <CampoNumero label="Rcima (da saída)" valor={rcima} onChange={setRcima} unidade="kΩ" />
        <CampoNumero label="Rbaixo (ao terra)" valor={rbaixo} onChange={setRbaixo} unidade="kΩ" />
      </div>
      <div className="mt-4 rounded-xl border border-white/10 bg-naval-800/50 p-4">
        <Resultado rotulo="β = Rbaixo/(Rcima+Rbaixo)" valor={fmtNum(beta, 3)} />
        <Resultado rotulo="UTP = β·(+VCC)" valor={`+${fmtNum(utp)} V`} />
        <Resultado rotulo="LTP = β·(−VCC)" valor={`${fmtNum(ltp)} V`} />
        <Resultado rotulo="Histerese = UTP − LTP" valor={`${fmtNum(hist)} V`} />
      </div>
      <p className="mt-3 text-xs text-nevoa/50">Confira (slide): ±12 V, 12 kΩ/24 kΩ → β = 2/3, UTP = +8 V, LTP = −8 V.</p>
    </div>
  );
}

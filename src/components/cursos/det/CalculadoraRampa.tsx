import { useState } from 'react';
import CampoNumero from './CampoNumero';
import { fmtTempo, fmtNum } from './formato';

// Calculadora de rampa por fonte de corrente (base de tempo).
// dV/dt = I/C (constante → reta); t = C·ΔV/I. I em mA, C em µF, ΔV em V.
export default function CalculadoraRampa() {
  const [i, setI] = useState(0.5);
  const [c, setC] = useState(1);
  const [dv, setDv] = useState(10);

  const I = i * 1e-3;
  const C = c * 1e-6;
  const inclinacao = I / C; // V/s
  const t = (C * dv) / I; // s

  const Resultado = ({ rotulo, valor }: { rotulo: string; valor: string }) => (
    <div className="flex items-baseline justify-between gap-3 border-b border-white/5 py-1.5">
      <span className="text-sm text-nevoa/70">{rotulo}</span>
      <span className="font-mono text-marfim">{valor}</span>
    </div>
  );

  return (
    <div className="not-prose card my-6 p-5">
      <h4 className="mb-4 font-serif text-lg text-marfim">Calculadora de rampa (dV/dt = I/C)</h4>
      <div className="grid gap-3 sm:grid-cols-3">
        <CampoNumero label="I (corrente)" valor={i} onChange={setI} unidade="mA" passo={0.1} />
        <CampoNumero label="C (capacitor)" valor={c} onChange={setC} unidade="µF" passo={0.1} />
        <CampoNumero label="ΔV (excursão)" valor={dv} onChange={setDv} unidade="V" />
      </div>
      <div className="mt-4 rounded-xl border border-white/10 bg-naval-800/50 p-4">
        <Resultado rotulo="dV/dt = I/C" valor={`${fmtNum(inclinacao)} V/s  (${fmtNum(inclinacao / 1e3, 3)} V/ms)`} />
        <Resultado rotulo="t = C·ΔV/I" valor={fmtTempo(t)} />
      </div>
      <p className="mt-3 text-xs text-nevoa/50">Carga por corrente constante → rampa linear (não use RC exponencial). Confira: 0,5 mA, 1 µF → 0,5 V/ms.</p>
    </div>
  );
}

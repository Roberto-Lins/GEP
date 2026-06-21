import { useState } from 'react';
import CampoNumero from './CampoNumero';
import { fmtNum, fmtFreq } from './formato';

// Calculadora de PWM / buck ideal (aula 05).
// D = ton/T ; VOUT = D·VIN ; f = 1/T. ton e T em µs, VIN em V.
export default function CalculadoraPWM() {
  const [vin, setVin] = useState(20);
  const [ton, setTon] = useState(8);
  const [t, setT] = useState(10);

  const D = t > 0 ? Math.min(ton / t, 1) : 0;
  const vout = D * vin;
  const f = t > 0 ? 1 / (t * 1e-6) : 0;

  const Resultado = ({ rotulo, valor }: { rotulo: string; valor: string }) => (
    <div className="flex items-baseline justify-between gap-3 border-b border-white/5 py-1.5">
      <span className="text-sm text-nevoa/70">{rotulo}</span>
      <span className="font-mono text-marfim">{valor}</span>
    </div>
  );

  return (
    <div className="not-prose card my-6 p-5">
      <h4 className="mb-4 font-serif text-lg text-marfim">Calculadora de PWM / buck (VOUT = D·VIN)</h4>
      <div className="grid gap-3 sm:grid-cols-3">
        <CampoNumero label="VIN (entrada)" valor={vin} onChange={setVin} unidade="V" />
        <CampoNumero label="ton (ligado)" valor={ton} onChange={setTon} unidade="µs" passo={0.5} />
        <CampoNumero label="T (período)" valor={t} onChange={setT} unidade="µs" passo={0.5} />
      </div>
      <div className="mt-4 rounded-xl border border-white/10 bg-naval-800/50 p-4">
        <Resultado rotulo="D = ton/T" valor={`${fmtNum(D * 100, 1)} %  (${fmtNum(D, 3)})`} />
        <Resultado rotulo="VOUT = D·VIN" valor={`${fmtNum(vout)} V`} />
        <Resultado rotulo="f = 1/T (constante)" valor={fmtFreq(f)} />
      </div>
      <p className="mt-3 text-xs text-nevoa/50">
        A frequência é constante; quem regula a média é o <strong className="text-nevoa/70">ton</strong>.
        Confira: 20 V, ton 8 µs, T 10 µs → D = 80 %, VOUT = 16 V.
      </p>
    </div>
  );
}

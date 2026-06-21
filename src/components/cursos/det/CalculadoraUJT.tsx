import { useState } from 'react';
import CampoNumero from './CampoNumero';
import { fmtNum, fmtTempo, fmtFreq } from './formato';

// Calculadora UJT — oscilador de relaxação.
// Parâmetros: η, RBB (kΩ), VCC (V), VV (V).
// Opcionais para tempo: R1 (kΩ), C (µF), RB1on (Ω), R2 (Ω).
// Fórmulas (slides Prof. Fragoso):
//   RB1 = η·RBB; RB2 = RBB − RB1; VK = η·VCC; VP = VK + 0,7
//   t1 = R1·C·ln[(VCC−VV)/(VCC−VP)]  (carga exponencial)
//   t2 = (RB1on+R2)·C·ln(VP/VV)      (descarga rápida)
//   T = t1+t2; f = 1/T
export default function CalculadoraUJT() {
  const [eta, setEta] = useState(0.8);
  const [rbb, setRbb] = useState(9);
  const [vcc, setVcc] = useState(12);
  const [vv, setVv] = useState(1);

  const [calcOsc, setCalcOsc] = useState(false);
  const [r1, setR1] = useState(12);
  const [c, setC] = useState(2);
  const [rb1on, setRb1on] = useState(100);
  const [r2, setR2] = useState(50);

  const rb1 = eta * rbb;
  const rb2 = rbb - rb1;
  const vk = eta * vcc;
  const vp = vk + 0.7;

  const R1 = r1 * 1e3;
  const C = c * 1e-6;
  const RB1on = rb1on;
  const R2 = r2;

  const argCarga = (vcc - vv) / (vcc - vp);
  const t1 = argCarga > 0 && Number.isFinite(argCarga) ? R1 * C * Math.log(argCarga) : NaN;
  const argDesc = vp / vv;
  const t2 = argDesc > 0 && Number.isFinite(argDesc) ? (RB1on + R2) * C * Math.log(argDesc) : NaN;
  const T = t1 + t2;
  const f = 1 / T;

  const Resultado = ({ rotulo, valor, destaque = false }: { rotulo: string; valor: string; destaque?: boolean }) => (
    <div className={`flex items-baseline justify-between gap-3 border-b border-white/5 py-1.5 ${destaque ? 'text-dourado' : ''}`}>
      <span className={`text-sm ${destaque ? 'text-dourado/80' : 'text-nevoa/70'}`}>{rotulo}</span>
      <span className={`font-mono ${destaque ? 'text-dourado font-semibold' : 'text-marfim'}`}>{valor}</span>
    </div>
  );

  return (
    <div className="not-prose card my-6 p-5">
      <h4 className="mb-4 font-serif text-lg text-marfim">Calculadora do UJT</h4>

      <p className="mb-2 text-xs uppercase tracking-wider text-dourado/70">Parâmetros do UJT</p>
      <div className="grid gap-3 sm:grid-cols-4">
        <CampoNumero label="η (eta)" valor={eta} onChange={setEta} passo={0.01} min={0.01} />
        <CampoNumero label="RBB" valor={rbb} onChange={setRbb} unidade="kΩ" passo={0.5} />
        <CampoNumero label="VCC" valor={vcc} onChange={setVcc} unidade="V" passo={1} />
        <CampoNumero label="VV (vale)" valor={vv} onChange={setVv} unidade="V" passo={0.1} />
      </div>
      <div className="mt-3 rounded-xl border border-white/10 bg-naval-800/50 p-4">
        <Resultado rotulo="RB1 = η·RBB" valor={`${fmtNum(rb1)} kΩ`} />
        <Resultado rotulo="RB2 = RBB − RB1" valor={`${fmtNum(rb2)} kΩ`} />
        <Resultado rotulo="VK = η·VCC" valor={`${fmtNum(vk)} V`} />
        <Resultado rotulo="VP = VK + 0,7" valor={`${fmtNum(vp)} V`} destaque />
      </div>

      <button
        type="button"
        onClick={() => setCalcOsc(!calcOsc)}
        className="mt-4 text-xs text-dourado/70 hover:text-dourado transition underline underline-offset-2"
      >
        {calcOsc ? '▲ Ocultar' : '▼ Calcular tempos e frequência'}
      </button>

      {calcOsc && (
        <>
          <p className="mb-2 mt-4 text-xs uppercase tracking-wider text-dourado/70">Oscilador de relaxação</p>
          <div className="grid gap-3 sm:grid-cols-4">
            <CampoNumero label="R1 (carga)" valor={r1} onChange={setR1} unidade="kΩ" passo={1} />
            <CampoNumero label="C" valor={c} onChange={setC} unidade="µF" passo={0.1} />
            <CampoNumero label="RB1(ON)" valor={rb1on} onChange={setRb1on} unidade="Ω" passo={10} />
            <CampoNumero label="R2 (descarga)" valor={r2} onChange={setR2} unidade="Ω" passo={10} />
          </div>
          <div className="mt-3 rounded-xl border border-white/10 bg-naval-800/50 p-4">
            <Resultado rotulo="t1 (carga, lento)" valor={fmtTempo(t1)} />
            <Resultado rotulo="t2 (descarga, rápido)" valor={fmtTempo(t2)} />
            <Resultado rotulo="T = t1 + t2" valor={fmtTempo(T)} />
            <Resultado rotulo="f = 1/T" valor={fmtFreq(f)} destaque />
          </div>
        </>
      )}
      <p className="mt-3 text-xs text-nevoa/50">
        Confira (slide): η=0,8, RBB=9 kΩ, VCC=12 V → RB1=7,2 kΩ, VP=10,3 V. Com R1=12 kΩ, C=2 µF → t1=44,8 ms.
      </p>
    </div>
  );
}

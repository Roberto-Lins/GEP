import { useState } from 'react';
import CampoNumero from './CampoNumero';
import { fmtNum } from './formato';

// Calculadora de reguladores: LM317 (VO ajustável) e carga mínima de um regulador fixo.
// LM317: VO = VREG·(1+R2/R1) + IQ·R2.  Fixo: Rmín = VO/Imáx.
export default function CalculadoraRegulador() {
  // LM317
  const [vreg, setVreg] = useState(1.25);
  const [r1, setR1] = useState(0.24);
  const [r2, setR2] = useState(2.4);
  const [iq, setIq] = useState(100);
  const R1 = r1 * 1e3;
  const R2 = r2 * 1e3;
  const IQ = iq * 1e-6;
  const vo = vreg * (1 + R2 / R1) + IQ * R2;

  // Regulador fixo
  const [voFixo, setVoFixo] = useState(5);
  const [imax, setImax] = useState(400);
  const rmin = voFixo / (imax * 1e-3);

  const Resultado = ({ rotulo, valor }: { rotulo: string; valor: string }) => (
    <div className="flex items-baseline justify-between gap-3 border-b border-white/5 py-1.5">
      <span className="text-sm text-nevoa/70">{rotulo}</span>
      <span className="font-mono text-marfim">{valor}</span>
    </div>
  );

  return (
    <div className="not-prose card my-6 p-5">
      <h4 className="mb-4 font-serif text-lg text-marfim">Calculadora de reguladores</h4>

      <p className="mb-2 text-xs uppercase tracking-wider text-dourado/70">LM317 (ajustável)</p>
      <div className="grid gap-3 sm:grid-cols-4">
        <CampoNumero label="VREG" valor={vreg} onChange={setVreg} unidade="V" passo={0.05} />
        <CampoNumero label="R1" valor={r1} onChange={setR1} unidade="kΩ" passo={0.01} />
        <CampoNumero label="R2" valor={r2} onChange={setR2} unidade="kΩ" passo={0.1} />
        <CampoNumero label="IQ" valor={iq} onChange={setIq} unidade="µA" passo={10} />
      </div>
      <div className="mt-3 rounded-xl border border-white/10 bg-naval-800/50 p-4">
        <Resultado rotulo="VO = VREG·(1+R2/R1) + IQ·R2" valor={`${fmtNum(vo)} V`} />
      </div>

      <p className="mb-2 mt-5 text-xs uppercase tracking-wider text-dourado/70">Regulador fixo (carga mínima)</p>
      <div className="grid gap-3 sm:grid-cols-2">
        <CampoNumero label="VO (regulada)" valor={voFixo} onChange={setVoFixo} unidade="V" />
        <CampoNumero label="Imáx" valor={imax} onChange={setImax} unidade="mA" passo={10} />
      </div>
      <div className="mt-3 rounded-xl border border-white/10 bg-naval-800/50 p-4">
        <Resultado rotulo="Rmín = VO/Imáx" valor={`${fmtNum(rmin)} Ω`} />
      </div>
      <p className="mt-3 text-xs text-nevoa/50">Confira (slide): 7805 (5 V, Imáx 400 mA) → Rmín = 12,5 Ω.</p>
    </div>
  );
}

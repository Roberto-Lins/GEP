import { useState } from 'react';
import CampoNumero from './CampoNumero';
import { fmtTempo, fmtFreq } from './formato';

// Calculadora do 555 (astável e monoestável). RA/RB em kΩ, C em µF.
// Fórmulas (slides): astável T_ALTO=0,7(RA+RB)C, T_BAIXO=0,7·RB·C, f=1/T;
// monoestável LP=1,1·RA·C.
type Modo = 'astavel' | 'monoestavel';

export default function Calculadora555() {
  const [modo, setModo] = useState<Modo>('astavel');
  const [ra, setRa] = useState(27);
  const [rb, setRb] = useState(27);
  const [c, setC] = useState(0.01);

  const RA = ra * 1e3;
  const RB = rb * 1e3;
  const C = c * 1e-6;

  const tAlto = 0.7 * (RA + RB) * C;
  const tBaixo = 0.7 * RB * C;
  const T = tAlto + tBaixo;
  const f = 1 / T;
  const lp = 1.1 * RA * C;

  const Resultado = ({ rotulo, valor }: { rotulo: string; valor: string }) => (
    <div className="flex items-baseline justify-between gap-3 border-b border-white/5 py-1.5">
      <span className="text-sm text-nevoa/70">{rotulo}</span>
      <span className="font-mono text-marfim">{valor}</span>
    </div>
  );

  return (
    <div className="not-prose card my-6 p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h4 className="font-serif text-lg text-marfim">Calculadora do 555</h4>
        <div className="flex gap-1 rounded-lg border border-white/10 p-0.5 text-sm">
          {(['astavel', 'monoestavel'] as Modo[]).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setModo(m)}
              className={`rounded-md px-3 py-1 transition ${modo === m ? 'bg-dourado/15 text-dourado' : 'text-nevoa/70 hover:text-nevoa'}`}
            >
              {m === 'astavel' ? 'Astável' : 'Monoestável'}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <CampoNumero label="RA" valor={ra} onChange={setRa} unidade="kΩ" passo={1} />
        {modo === 'astavel' && <CampoNumero label="RB" valor={rb} onChange={setRb} unidade="kΩ" passo={1} />}
        <CampoNumero label="C" valor={c} onChange={setC} unidade="µF" passo={0.01} />
      </div>

      <div className="mt-4 rounded-xl border border-white/10 bg-naval-800/50 p-4">
        {modo === 'astavel' ? (
          <>
            <Resultado rotulo="T_ALTO = 0,7·(RA+RB)·C" valor={fmtTempo(tAlto)} />
            <Resultado rotulo="T_BAIXO = 0,7·RB·C" valor={fmtTempo(tBaixo)} />
            <Resultado rotulo="T = T_ALTO + T_BAIXO" valor={fmtTempo(T)} />
            <Resultado rotulo="f = 1/T" valor={fmtFreq(f)} />
          </>
        ) : (
          <Resultado rotulo="LP = 1,1·RA·C" valor={fmtTempo(lp)} />
        )}
      </div>
      <p className="mt-3 text-xs text-nevoa/50">Fórmulas dos slides do Prof. Fragoso. Confira: RA=RB=27 kΩ, C=0,01 µF → f ≈ 1,78 kHz.</p>
    </div>
  );
}

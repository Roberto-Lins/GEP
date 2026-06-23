import { useMemo, useState, type ReactNode } from 'react';
import type { ToolProps } from '@tipos/tools';
import RosaBoard, { niceUnitsPerRing, type BoardArrow, type BoardLine, type BoardMarker } from './RosaBoard';
import {
  solveContact,
  solveTrueWind,
  solveStation,
  solveDeckLaunch,
  solveDVT,
  rule3min,
  rule6min,
  bearingToVec,
  reciprocal,
  sub,
  magnitude,
  parseHHMM,
  formatHHMM,
  type ContactResult,
  type Vec2,
} from '../engine';

type Aba = 'contato' | 'vento' | 'conves' | 'posicao' | 'nomograma';
const ORIGEM: Vec2 = { x: 0, y: 0 };
const fmt = (n: number, d = 0) => (isFinite(n) ? n.toFixed(d) : '—');
const fmtBrg = (n: number) => `${String(Math.round(((n % 360) + 360) % 360)).padStart(3, '0')}°`;

// ── helpers de UI ────────────────────────────────────────────────────────────
function Campo({
  label,
  value,
  onChange,
  suffix,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  suffix?: string;
}) {
  return (
    <label className="flex flex-col gap-1 text-xs text-nevoa">
      <span className="font-medium">{label}</span>
      <span className="flex items-center gap-1 rounded-lg border border-white/10 bg-naval-900 px-2 focus-within:border-dourado/50">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          inputMode="decimal"
          className="w-full bg-transparent py-1.5 text-sm text-marfim outline-none"
        />
        {suffix && <span className="shrink-0 text-[10px] text-nevoa/60">{suffix}</span>}
      </span>
    </label>
  );
}

function Resultado({ children }: { children: ReactNode }) {
  return (
    <dl className="grid grid-cols-2 gap-x-4 gap-y-1.5 rounded-lg border border-dourado/20 bg-dourado/5 p-3 text-sm">
      {children}
    </dl>
  );
}
function Linha({ rotulo, valor }: { rotulo: string; valor: string }) {
  return (
    <>
      <dt className="text-nevoa/70">{rotulo}</dt>
      <dd className="text-right font-mono font-semibold text-marfim">{valor}</dd>
    </>
  );
}
function Botoes({ onCalc, onExemplo }: { onCalc: () => void; onExemplo: () => void }) {
  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={onCalc}
        className="flex-1 rounded-lg bg-dourado py-2 text-sm font-semibold text-naval transition hover:bg-dourado-soft"
      >
        Calcular
      </button>
      <button
        type="button"
        onClick={onExemplo}
        className="rounded-lg border border-white/15 px-3 py-2 text-xs text-nevoa transition hover:border-dourado/40 hover:text-dourado"
      >
        Exemplo da aula
      </button>
    </div>
  );
}
function Erro({ msg }: { msg: string | null }) {
  if (!msg) return null;
  return <p className="rounded-lg border border-alerta/30 bg-alerta/10 p-2 text-xs text-alerta">{msg}</p>;
}

// ── Aba: Contato ─────────────────────────────────────────────────────────────
function AbaContato() {
  const [f, setF] = useState({
    ownCourse: '260', ownSpeed: '12',
    m1b: '020', m1r: '14000', m1t: '0342',
    m2b: '015', m2r: '11000', m2t: '0349',
  });
  const [res, setRes] = useState<ContactResult | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const set = (k: keyof typeof f) => (v: string) => setF((s) => ({ ...s, [k]: v }));

  const calcular = () => {
    try {
      const r = solveContact({
        own: { course: +f.ownCourse, speed: +f.ownSpeed },
        m1: { bearing: +f.m1b, range: +f.m1r, timeMin: parseHHMM(f.m1t) },
        m2: { bearing: +f.m2b, range: +f.m2r, timeMin: parseHHMM(f.m2t) },
      });
      if (!isFinite(r.vmr)) throw new Error('Verifique os horários (M2 deve ser depois de M1).');
      setRes(r); setErr(null);
    } catch (e) {
      setErr(e instanceof Error ? e.message : 'Dados inválidos.'); setRes(null);
    }
  };
  const exemplo = () =>
    setF({ ownCourse: '260', ownSpeed: '12', m1b: '020', m1r: '14000', m1t: '0342', m2b: '015', m2r: '11000', m2t: '0349' });

  const boards = useMemo(() => {
    if (!res) return null;
    const v = res.vectors;
    const posUnits = niceUnitsPerRing(Math.max(magnitude(v.m1), magnitude(v.m2), magnitude(v.pma)));
    const velUnits = niceUnitsPerRing(Math.max(res.targetSpeed, +f.ownSpeed, res.vmr));
    const posMarkers: BoardMarker[] = [
      { pos: ORIGEM, label: 'R', tone: 'ref' },
      { pos: v.m1, label: 'M1', tone: 'contato' },
      { pos: v.m2, label: 'M2', tone: 'contato' },
      { pos: v.pma, label: 'PMA', tone: 'pma' },
    ];
    const posLines: BoardLine[] = [
      { from: v.m1, to: v.pma, tone: 'contato' },
      { from: ORIGEM, to: v.pma, tone: 'pma', dashed: true },
    ];
    const velArrows: BoardArrow[] = [
      { from: ORIGEM, to: v.tr, tone: 'own', label: 'tr' },
      { from: ORIGEM, to: v.tm, tone: 'target', label: 'tm' },
      { from: v.tr, to: v.tm, tone: 'rel', label: 'rm' },
    ];
    const velMarkers: BoardMarker[] = [
      { pos: ORIGEM, label: 't', tone: 'aux' },
      { pos: v.tr, label: 'r', tone: 'own' },
      { pos: v.tm, label: 'm', tone: 'target' },
    ];
    return { posUnits, velUnits, posMarkers, posLines, velArrows, velMarkers };
  }, [res, f.ownSpeed]);

  return (
    <div className="flex flex-wrap gap-4">
      <div className="min-w-[280px] flex-1 space-y-3">
        <div className="grid grid-cols-2 gap-2">
          <Campo label="Rumo próprio" value={f.ownCourse} onChange={set('ownCourse')} suffix="°" />
          <Campo label="Veloc. própria" value={f.ownSpeed} onChange={set('ownSpeed')} suffix="kt" />
        </div>
        <fieldset className="grid grid-cols-3 gap-2 rounded-lg border border-white/10 p-2">
          <legend className="px-1 text-[11px] text-dourado/80">M1 (1ª plotagem)</legend>
          <Campo label="Marc." value={f.m1b} onChange={set('m1b')} suffix="°" />
          <Campo label="Dist." value={f.m1r} onChange={set('m1r')} suffix="yd" />
          <Campo label="Hora" value={f.m1t} onChange={set('m1t')} />
        </fieldset>
        <fieldset className="grid grid-cols-3 gap-2 rounded-lg border border-white/10 p-2">
          <legend className="px-1 text-[11px] text-dourado/80">M2 (2ª plotagem)</legend>
          <Campo label="Marc." value={f.m2b} onChange={set('m2b')} suffix="°" />
          <Campo label="Dist." value={f.m2r} onChange={set('m2r')} suffix="yd" />
          <Campo label="Hora" value={f.m2t} onChange={set('m2t')} />
        </fieldset>
        <Botoes onCalc={calcular} onExemplo={exemplo} />
        <Erro msg={err} />
        {res && (
          <Resultado>
            <Linha rotulo="DMR" valor={fmtBrg(res.dmr)} />
            <Linha rotulo="Dist. relativa" valor={`${fmt(res.relDistance)} yd`} />
            <Linha rotulo="VMR" valor={`${fmt(res.vmr, 1)} kt`} />
            <Linha rotulo="Rumo do contato" valor={fmtBrg(res.targetCourse)} />
            <Linha rotulo="Veloc. do contato" valor={`${fmt(res.targetSpeed, 1)} kt`} />
            <Linha rotulo="PMA — marcação" valor={fmtBrg(res.cpa.bearing)} />
            <Linha rotulo="PMA — distância" valor={`${fmt(res.cpa.distance)} yd`} />
            <Linha rotulo="PMA — hora" valor={isFinite(res.cpa.timeMin) ? formatHHMM(res.cpa.timeMin) : '—'} />
          </Resultado>
        )}
      </div>
      {boards && res && (
        <div className="flex min-w-[280px] flex-1 flex-wrap items-start justify-center gap-3">
          <div className="w-full max-w-[360px]">
            <RosaBoard titulo="Diagrama de posições" unitsPerRing={boards.posUnits} unitLabel="yd" markers={boards.posMarkers} lines={boards.posLines} />
          </div>
          <div className="w-full max-w-[300px]">
            <RosaBoard titulo="Diagrama de velocidades (t-r-m)" unitsPerRing={boards.velUnits} unitLabel="kt" arrows={boards.velArrows} markers={boards.velMarkers} size={420} />
          </div>
        </div>
      )}
    </div>
  );
}

// ── Aba: Vento ───────────────────────────────────────────────────────────────
function AbaVento() {
  const [f, setF] = useState({ course: '060', speed: '10', tipo: 'relativo', dir: '090', bordo: 'BE', intens: '14' });
  const [res, setRes] = useState<ReturnType<typeof solveTrueWind> | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const set = (k: keyof typeof f) => (v: string) => setF((s) => ({ ...s, [k]: v }));

  const calcular = () => {
    try {
      const r = solveTrueWind(
        { course: +f.course, speed: +f.speed },
        f.tipo === 'relativo'
          ? { tipo: 'relativo', direcao: +f.dir, bordo: f.bordo as 'BB' | 'BE', intensidade: +f.intens }
          : { tipo: 'verdadeiro', direcao: +f.dir, intensidade: +f.intens },
      );
      setRes(r); setErr(null);
    } catch (e) {
      setErr(e instanceof Error ? e.message : 'Dados inválidos.'); setRes(null);
    }
  };
  const exemplo = () => setF({ course: '060', speed: '10', tipo: 'relativo', dir: '090', bordo: 'BE', intens: '14' });

  const board = useMemo(() => {
    if (!res) return null;
    const { ship, realToward } = res.vectors;
    const units = niceUnitsPerRing(Math.max(magnitude(ship), magnitude(realToward), res.speed, +f.speed));
    const arrows: BoardArrow[] = [
      { from: ORIGEM, to: ship, tone: 'own', label: 'navio' },
      { from: ORIGEM, to: realToward, tone: 'wind', label: 'Vr' },
      { from: ship, to: realToward, tone: 'rel', label: 'Va' },
    ];
    return { units, arrows };
  }, [res, f.speed]);

  return (
    <div className="flex flex-wrap gap-4">
      <div className="min-w-[280px] flex-1 space-y-3">
        <div className="grid grid-cols-2 gap-2">
          <Campo label="Rumo do navio" value={f.course} onChange={set('course')} suffix="°" />
          <Campo label="Veloc. do navio" value={f.speed} onChange={set('speed')} suffix="kt" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <label className="flex flex-col gap-1 text-xs text-nevoa">
            <span className="font-medium">Vento medido como</span>
            <select
              value={f.tipo}
              onChange={(e) => set('tipo')(e.target.value)}
              className="rounded-lg border border-white/10 bg-naval-900 px-2 py-1.5 text-sm text-marfim outline-none focus:border-dourado/50"
            >
              <option value="relativo">Relativo (anemômetro)</option>
              <option value="verdadeiro">Verdadeiro (marcação)</option>
            </select>
          </label>
          {f.tipo === 'relativo' && (
            <label className="flex flex-col gap-1 text-xs text-nevoa">
              <span className="font-medium">Bordo</span>
              <select
                value={f.bordo}
                onChange={(e) => set('bordo')(e.target.value)}
                className="rounded-lg border border-white/10 bg-naval-900 px-2 py-1.5 text-sm text-marfim outline-none focus:border-dourado/50"
              >
                <option value="BE">Boreste (BE)</option>
                <option value="BB">Bombordo (BB)</option>
              </select>
            </label>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Campo label={f.tipo === 'relativo' ? 'Âng. relativo' : 'Marcação (de onde)'} value={f.dir} onChange={set('dir')} suffix="°" />
          <Campo label="Intensidade" value={f.intens} onChange={set('intens')} suffix="kt" />
        </div>
        <Botoes onCalc={calcular} onExemplo={exemplo} />
        <Erro msg={err} />
        {res && (
          <Resultado>
            <Linha rotulo="Vento real — direção" valor={fmtBrg(res.from)} />
            <Linha rotulo="Vento real — intensidade" valor={`${fmt(res.speed, 1)} kt`} />
            <Linha rotulo="Vento aparente (verd.)" valor={fmtBrg(res.apparentFrom)} />
          </Resultado>
        )}
      </div>
      {board && (
        <div className="min-w-[280px] flex-1">
          <div className="mx-auto w-full max-w-[380px]">
            <RosaBoard titulo="Triângulo do vento" unitsPerRing={board.units} unitLabel="kt" arrows={board.arrows} markers={[{ pos: ORIGEM, label: 't', tone: 'aux' }]} />
          </div>
        </div>
      )}
    </div>
  );
}

// ── Aba: Convés (lançamento de aeronaves) ────────────────────────────────────
function AbaConves() {
  const [f, setF] = useState({ from: '315', vr: '10', angle: '10', bordo: 'BB', wd: '30' });
  const [res, setRes] = useState<ReturnType<typeof solveDeckLaunch> | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const set = (k: keyof typeof f) => (v: string) => setF((s) => ({ ...s, [k]: v }));

  const calcular = () => {
    try {
      setRes(
        solveDeckLaunch(
          { from: +f.from, speed: +f.vr },
          { angle: +f.angle, bordo: f.bordo as 'BB' | 'BE', speed: +f.wd },
        ),
      );
      setErr(null);
    } catch (e) {
      setErr(e instanceof Error ? e.message : 'Dados inválidos.'); setRes(null);
    }
  };
  const exemplo = () => setF({ from: '315', vr: '10', angle: '10', bordo: 'BB', wd: '30' });

  const board = useMemo(() => {
    if (!res || res.solutions.length === 0) return null;
    const s = res.solutions[0];
    const ship = bearingToVec(s.course, s.speed);
    const realToward = bearingToVec(reciprocal(+f.from), +f.vr);
    const units = niceUnitsPerRing(Math.max(magnitude(ship), magnitude(realToward), +f.wd));
    const arrows: BoardArrow[] = [
      { from: ORIGEM, to: ship, tone: 'own', label: 'navio' },
      { from: ORIGEM, to: realToward, tone: 'wind', label: 'Vr' },
      { from: ship, to: realToward, tone: 'rel', label: 'convés' },
    ];
    return { units, arrows };
  }, [res, f.from, f.vr, f.wd]);

  return (
    <div className="flex flex-wrap gap-4">
      <div className="min-w-[280px] flex-1 space-y-3">
        <fieldset className="grid grid-cols-2 gap-2 rounded-lg border border-white/10 p-2">
          <legend className="px-1 text-[11px] text-dourado/80">Vento real</legend>
          <Campo label="Direção (de onde)" value={f.from} onChange={set('from')} suffix="°" />
          <Campo label="Intensidade" value={f.vr} onChange={set('vr')} suffix="kt" />
        </fieldset>
        <fieldset className="grid grid-cols-3 gap-2 rounded-lg border border-white/10 p-2">
          <legend className="px-1 text-[11px] text-dourado/80">Vento desejado no convés</legend>
          <Campo label="Âng. proa" value={f.angle} onChange={set('angle')} suffix="°" />
          <label className="flex flex-col gap-1 text-xs text-nevoa">
            <span className="font-medium">Bordo</span>
            <select
              value={f.bordo}
              onChange={(e) => set('bordo')(e.target.value)}
              className="rounded-lg border border-white/10 bg-naval-900 px-2 py-1.5 text-sm text-marfim outline-none focus:border-dourado/50"
            >
              <option value="BE">BE</option>
              <option value="BB">BB</option>
            </select>
          </label>
          <Campo label="Intensidade" value={f.wd} onChange={set('wd')} suffix="kt" />
        </fieldset>
        <Botoes onCalc={calcular} onExemplo={exemplo} />
        <Erro msg={err} />
        {res && res.solutions.length === 0 && (
          <p className="rounded-lg border border-alerta/30 bg-alerta/10 p-2 text-xs text-alerta">
            Sem solução: o vento real não corta a linha de proa (Vr &lt; vento de convés × sen do ângulo). Reduza a
            intensidade desejada ou aproxime o vento da proa.
          </p>
        )}
        {res &&
          res.solutions.map((s, i) => (
            <Resultado key={i}>
              <Linha rotulo={`Solução ${i + 1} — rumo`} valor={fmtBrg(s.course)} />
              <Linha rotulo="Velocidade" valor={`${fmt(s.speed, 1)} kt`} />
            </Resultado>
          ))}
      </div>
      {board && (
        <div className="min-w-[280px] flex-1">
          <div className="mx-auto w-full max-w-[380px]">
            <RosaBoard titulo="Triângulo do vento (convés)" unitsPerRing={board.units} unitLabel="kt" arrows={board.arrows} markers={[{ pos: ORIGEM, label: 't', tone: 'aux' }]} />
          </div>
        </div>
      )}
    </div>
  );
}

// ── Aba: Posição ─────────────────────────────────────────────────────────────
function AbaPosicao() {
  const [f, setF] = useState({ gcourse: '090', gspeed: '10', ownSpeed: '15', dispB: '135', dispD: '2800' });
  const [res, setRes] = useState<ReturnType<typeof solveStation> | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const set = (k: keyof typeof f) => (v: string) => setF((s) => ({ ...s, [k]: v }));

  const calcular = () => {
    try {
      setRes(
        solveStation({
          guide: { course: +f.gcourse, speed: +f.gspeed },
          ownSpeed: +f.ownSpeed,
          displacement: { bearing: +f.dispB, distance: +f.dispD },
        }),
      );
      setErr(null);
    } catch (e) {
      setErr(e instanceof Error ? e.message : 'Dados inválidos.'); setRes(null);
    }
  };
  const exemplo = () => setF({ gcourse: '090', gspeed: '10', ownSpeed: '15', dispB: '135', dispD: '2800' });

  const board = useMemo(() => {
    if (!res || res.solutions.length === 0) return null;
    const s = res.solutions[0];
    const tr = bearingToVec(+f.gcourse, +f.gspeed);
    const tm = bearingToVec(s.ownCourse, +f.ownSpeed);
    const units = niceUnitsPerRing(Math.max(+f.gspeed, +f.ownSpeed, magnitude(sub(tm, tr))));
    const arrows: BoardArrow[] = [
      { from: ORIGEM, to: tr, tone: 'own', label: 'guia' },
      { from: ORIGEM, to: tm, tone: 'target', label: 'navio' },
      { from: tr, to: tm, tone: 'rel', label: 'rel' },
    ];
    const markers: BoardMarker[] = [
      { pos: ORIGEM, label: 't', tone: 'aux' },
      { pos: tr, label: 'r', tone: 'own' },
      { pos: tm, label: 'm', tone: 'target' },
    ];
    return { units, arrows, markers };
  }, [res, f.gcourse, f.gspeed, f.ownSpeed]);

  return (
    <div className="flex flex-wrap gap-4">
      <div className="min-w-[280px] flex-1 space-y-3">
        <div className="grid grid-cols-2 gap-2">
          <Campo label="Rumo do guia" value={f.gcourse} onChange={set('gcourse')} suffix="°" />
          <Campo label="Veloc. do guia" value={f.gspeed} onChange={set('gspeed')} suffix="kt" />
        </div>
        <Campo label="Veloc. de manobra" value={f.ownSpeed} onChange={set('ownSpeed')} suffix="kt" />
        <fieldset className="grid grid-cols-2 gap-2 rounded-lg border border-white/10 p-2">
          <legend className="px-1 text-[11px] text-dourado/80">Deslocamento relativo até o posto</legend>
          <Campo label="Direção (DMR)" value={f.dispB} onChange={set('dispB')} suffix="°" />
          <Campo label="Distância" value={f.dispD} onChange={set('dispD')} suffix="yd" />
        </fieldset>
        <Botoes onCalc={calcular} onExemplo={exemplo} />
        <Erro msg={err} />
        {res && res.solutions.length === 0 && (
          <p className="rounded-lg border border-alerta/30 bg-alerta/10 p-2 text-xs text-alerta">
            Posto inatingível com essa velocidade de manobra (o círculo de velocidade não alcança a direção exigida).
          </p>
        )}
        {res &&
          res.solutions.map((s, i) => (
            <Resultado key={i}>
              <Linha rotulo={`Solução ${i + 1} — rumo`} valor={fmtBrg(s.ownCourse)} />
              <Linha rotulo="VMR" valor={`${fmt(s.vmr, 1)} kt`} />
              <Linha rotulo="Tempo de manobra" valor={`${fmt(s.timeMin, 1)} min`} />
            </Resultado>
          ))}
      </div>
      {board && (
        <div className="min-w-[280px] flex-1">
          <div className="mx-auto w-full max-w-[380px]">
            <RosaBoard titulo="Diagrama de velocidades" unitsPerRing={board.units} unitLabel="kt" arrows={board.arrows} markers={board.markers} />
          </div>
        </div>
      )}
    </div>
  );
}

// ── Aba: Nomograma ───────────────────────────────────────────────────────────
function AbaNomograma() {
  const [f, setF] = useState({ d: '', v: '', t: '' });
  const [out, setOut] = useState<string | null>(null);
  const [milhas, setMilhas] = useState('0.75');
  const set = (k: keyof typeof f) => (v: string) => setF((s) => ({ ...s, [k]: v }));

  const calcular = () => {
    const known: Record<string, number> = {};
    if (f.d.trim()) known.distanceNm = +f.d;
    if (f.v.trim()) known.speedKt = +f.v;
    if (f.t.trim()) known.timeMin = +f.t;
    if (Object.keys(known).length !== 2) {
      setOut('Preencha exatamente dois campos.');
      return;
    }
    try {
      const r = solveDVT(known);
      setOut(`Distância ${r.distanceNm.toFixed(2)} nm · Velocidade ${r.speedKt.toFixed(1)} kt · Tempo ${r.timeMin.toFixed(1)} min`);
    } catch {
      setOut('Não foi possível calcular.');
    }
  };

  const nm = +milhas || 0;
  return (
    <div className="max-w-md space-y-4">
      <p className="text-xs text-nevoa/80">Relação distância = velocidade × tempo. Preencha dois campos e calcule o terceiro.</p>
      <div className="grid grid-cols-3 gap-2">
        <Campo label="Distância" value={f.d} onChange={set('d')} suffix="nm" />
        <Campo label="Velocidade" value={f.v} onChange={set('v')} suffix="kt" />
        <Campo label="Tempo" value={f.t} onChange={set('t')} suffix="min" />
      </div>
      <button type="button" onClick={calcular} className="w-full rounded-lg bg-dourado py-2 text-sm font-semibold text-naval transition hover:bg-dourado-soft">
        Calcular
      </button>
      {out && <p className="rounded-lg border border-dourado/20 bg-dourado/5 p-3 text-center font-mono text-sm text-marfim">{out}</p>}
      <div className="rounded-lg border border-white/10 p-3">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-dourado/80">Regra dos 3 e 6 minutos</p>
        <Campo label="Distância percorrida" value={milhas} onChange={setMilhas} suffix="nm" />
        <p className="mt-2 text-sm text-nevoa">
          Em 3 min: <span className="font-mono font-semibold text-marfim">{rule3min(nm).toFixed(1)} kt</span> · em 6 min:{' '}
          <span className="font-mono font-semibold text-marfim">{rule6min(nm).toFixed(1)} kt</span>
        </p>
      </div>
    </div>
  );
}

// ── Orquestrador ─────────────────────────────────────────────────────────────
const ABAS: { id: Aba; nome: string }[] = [
  { id: 'contato', nome: 'Contato / PMA' },
  { id: 'vento', nome: 'Vento' },
  { id: 'conves', nome: 'Convés (lançamento)' },
  { id: 'posicao', nome: 'Entrar em posição' },
  { id: 'nomograma', nome: 'Nomograma' },
];

export default function RosaWorkspace(_props: ToolProps) {
  const [aba, setAba] = useState<Aba>('contato');
  return (
    <div className="flex h-full flex-col bg-naval text-marfim">
      <nav className="flex flex-wrap gap-1 border-b border-white/10 bg-naval-900/60 p-2" aria-label="Problemas">
        {ABAS.map((a) => (
          <button
            key={a.id}
            type="button"
            onClick={() => setAba(a.id)}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
              aba === a.id ? 'bg-dourado/15 text-dourado' : 'text-nevoa hover:bg-white/5 hover:text-marfim'
            }`}
            aria-current={aba === a.id ? 'page' : undefined}
          >
            {a.nome}
          </button>
        ))}
      </nav>
      <div className="flex-1 overflow-auto p-4">
        {aba === 'contato' && <AbaContato />}
        {aba === 'vento' && <AbaVento />}
        {aba === 'conves' && <AbaConves />}
        {aba === 'posicao' && <AbaPosicao />}
        {aba === 'nomograma' && <AbaNomograma />}
      </div>
    </div>
  );
}

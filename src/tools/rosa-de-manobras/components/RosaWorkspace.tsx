import { useEffect, useMemo, useState, type ReactNode } from 'react';
import type { ToolProps } from '@tipos/tools';
import RosaBoard, { niceUnitsPerRing, type BoardArrow, type BoardCircle, type BoardLine, type BoardMarker } from './RosaBoard';
import { usePersistedState } from '../persist';
import { exerciciosRosa, exercicioPorId, type CampoGabarito } from '../exercises';
import {
  solveContact,
  solveTrueWind,
  solveStation,
  solveDeckLaunch,
  solveDVT,
  solveAnticolisao,
  rule3min,
  rule6min,
  bearingToVec,
  reciprocal,
  add,
  sub,
  scale,
  magnitude,
  tangentsFromPoint,
  checkBearing,
  checkScalar,
  diagnoseBearing,
  diagnoseScale,
  parseHHMM,
  formatHHMM,
  type ContactResult,
  type AnticolisaoResultado,
  type Vec2,
} from '../engine';

type Aba = 'contato' | 'vento' | 'conves' | 'posicao' | 'nomograma' | 'anticolisao' | 'exercicios';
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
  const [f, setF] = usePersistedState('contato', {
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
  const [f, setF] = usePersistedState('vento', { course: '060', speed: '10', tipo: 'relativo', dir: '090', bordo: 'BE', intens: '14' });
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
    // Radial "DE ONDE sopra" o vento real = recíproca do vetor "para onde" (mesmo comprimento).
    const fromVec = bearingToVec(res.from, magnitude(realToward));
    const arrows: BoardArrow[] = [
      { from: ORIGEM, to: ship, tone: 'own', label: 'tr (navio)' },
      { from: ORIGEM, to: realToward, tone: 'wind', label: 'tw → p/ onde' },
      { from: ship, to: realToward, tone: 'rel', label: 'rw (aparente)' },
    ];
    const lines: BoardLine[] = [{ from: ORIGEM, to: fromVec, tone: 'wind', dashed: true }];
    const markers: BoardMarker[] = [
      { pos: ORIGEM, label: 't', tone: 'aux' },
      { pos: fromVec, label: `de ${fmtBrg(res.from)}`, tone: 'wind' },
    ];
    return { units, arrows, lines, markers };
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
            <Linha rotulo="Vento real — de onde sopra" valor={fmtBrg(res.from)} />
            <Linha rotulo="Vento real — intensidade" valor={`${fmt(res.speed, 1)} kt`} />
            <Linha rotulo="Vento aparente — de onde (verd.)" valor={fmtBrg(res.apparentFrom)} />
          </Resultado>
        )}
      </div>
      {board && res && (
        <div className="min-w-[280px] flex-1">
          <div className="mx-auto w-full max-w-[380px]">
            <RosaBoard titulo="Triângulo do vento (tr + rw = tw)" unitsPerRing={board.units} unitLabel="kt" arrows={board.arrows} lines={board.lines} markers={board.markers} />
            <p className="mt-1 text-center text-[10px] leading-snug text-nevoa/60">
              As setas apontam <strong className="text-nevoa/80">para onde</strong> o vetor vai. O vento real <strong className="text-progresso">sopra de {fmtBrg(res.from)}</strong> (radial pontilhado).
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Aba: Convés (lançamento de aeronaves) ────────────────────────────────────
function AbaConves() {
  const [f, setF] = usePersistedState('conves', { from: '315', vr: '10', angle: '10', bordo: 'BB', wd: '30' });
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
    const fromVec = bearingToVec(+f.from, +f.vr); // radial "de onde sopra"
    const arrows: BoardArrow[] = [
      { from: ORIGEM, to: ship, tone: 'own', label: 'tr (navio)' },
      { from: ORIGEM, to: realToward, tone: 'wind', label: 'tw → p/ onde' },
      { from: ship, to: realToward, tone: 'rel', label: 'vento no convés' },
    ];
    const lines: BoardLine[] = [{ from: ORIGEM, to: fromVec, tone: 'wind', dashed: true }];
    const markers: BoardMarker[] = [
      { pos: ORIGEM, label: 't', tone: 'aux' },
      { pos: fromVec, label: `de ${fmtBrg(+f.from)}`, tone: 'wind' },
    ];
    return { units, arrows, lines, markers };
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
            <RosaBoard titulo="Triângulo do vento (convés)" unitsPerRing={board.units} unitLabel="kt" arrows={board.arrows} lines={board.lines} markers={board.markers} />
            <p className="mt-1 text-center text-[10px] leading-snug text-nevoa/60">
              As setas apontam <strong className="text-nevoa/80">para onde</strong> o vetor vai. O vento real <strong className="text-progresso">sopra de {fmtBrg(+f.from)}</strong> (radial pontilhado).
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Aba: Posição ─────────────────────────────────────────────────────────────
function AbaPosicao() {
  const [f, setF] = usePersistedState('posicao', { gcourse: '090', gspeed: '10', ownSpeed: '15', dispB: '135', dispD: '2800' });
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
  const [f, setF] = usePersistedState('nomograma', { d: '', v: '', t: '' });
  const [out, setOut] = useState<string | null>(null);
  const [milhas, setMilhas] = usePersistedState('nomograma-milhas', '0.75');
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

// ── Aba: Anticolisão (manobra evasiva) ───────────────────────────────────────
function AbaAnticolisao() {
  const [f, setF] = usePersistedState('anticolisao', {
    ownCourse: '260', ownSpeed: '12',
    ctCourse: '237', ctSpeed: '24',
    ctBearing: '015', ctRange: '11000',
    pma: '6000',
  });
  const [res, setRes] = useState<AnticolisaoResultado | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const set = (k: keyof typeof f) => (v: string) => setF((s) => ({ ...s, [k]: v }));

  const calcular = () => {
    try {
      setRes(
        solveAnticolisao({
          own: { course: +f.ownCourse, speed: +f.ownSpeed },
          contato: { course: +f.ctCourse, speed: +f.ctSpeed },
          posicaoContato: { bearing: +f.ctBearing, range: +f.ctRange },
          pmaDesejada: +f.pma,
        }),
      );
      setErr(null);
    } catch (e) {
      setErr(e instanceof Error ? e.message : 'Dados inválidos.'); setRes(null);
    }
  };
  const exemplo = () =>
    setF({ ownCourse: '260', ownSpeed: '12', ctCourse: '237', ctSpeed: '24', ctBearing: '015', ctRange: '11000', pma: '6000' });

  const board = useMemo(() => {
    if (!res) return null;
    const d = +f.pma;
    const M = bearingToVec(+f.ctBearing, +f.ctRange);
    const pmaPt = bearingToVec(res.marcacaoPmaAtual, res.pmaAtual);
    const units = niceUnitsPerRing(Math.max(+f.ctRange, d, magnitude(M)));
    const circles: BoardCircle[] = [{ center: ORIGEM, radius: d, tone: 'pma', dashed: true, label: 'PMA mín' }];
    const markers: BoardMarker[] = [
      { pos: ORIGEM, label: 'R', tone: 'ref' },
      { pos: M, label: 'M', tone: 'contato' },
      { pos: pmaPt, label: 'PMA atual', tone: 'pma' },
    ];
    // reta do movimento relativo ATUAL (passa por M e pelo PMA, cortando o círculo).
    const lines: BoardLine[] = [{ from: M, to: add(M, scale(sub(pmaPt, M), 2)), tone: 'aux', dashed: true }];
    if (res.necessaria && res.possivel) {
      for (const t of tangentsFromPoint(ORIGEM, d, M)) lines.push({ from: M, to: t.touch, tone: 'target' });
    }
    return { units, circles, markers, lines };
  }, [res, f.ctBearing, f.ctRange, f.pma]);

  const rumos = res?.manobras.filter((m) => m.tipo === 'rumo') ?? [];
  const vels = res?.manobras.filter((m) => m.tipo === 'velocidade') ?? [];

  return (
    <div className="flex flex-wrap gap-4">
      <div className="min-w-[280px] flex-1 space-y-3">
        <div className="grid grid-cols-2 gap-2">
          <Campo label="Rumo próprio" value={f.ownCourse} onChange={set('ownCourse')} suffix="°" />
          <Campo label="Veloc. própria" value={f.ownSpeed} onChange={set('ownSpeed')} suffix="kt" />
        </div>
        <fieldset className="grid grid-cols-2 gap-2 rounded-lg border border-white/10 p-2">
          <legend className="px-1 text-[11px] text-dourado/80">Contato (rumo e veloc. verdadeiros)</legend>
          <Campo label="Rumo" value={f.ctCourse} onChange={set('ctCourse')} suffix="°" />
          <Campo label="Velocidade" value={f.ctSpeed} onChange={set('ctSpeed')} suffix="kt" />
        </fieldset>
        <fieldset className="grid grid-cols-2 gap-2 rounded-lg border border-white/10 p-2">
          <legend className="px-1 text-[11px] text-dourado/80">Posição atual do contato</legend>
          <Campo label="Marcação" value={f.ctBearing} onChange={set('ctBearing')} suffix="°" />
          <Campo label="Distância" value={f.ctRange} onChange={set('ctRange')} suffix="yd" />
        </fieldset>
        <Campo label="PMA mínima desejada" value={f.pma} onChange={set('pma')} suffix="yd" />
        <Botoes onCalc={calcular} onExemplo={exemplo} />
        <Erro msg={err} />
        {res && (
          <Resultado>
            <Linha rotulo="PMA atual" valor={`${fmt(res.pmaAtual)} yd`} />
            <Linha rotulo="PMA atual — marcação" valor={fmtBrg(res.marcacaoPmaAtual)} />
            <Linha rotulo="DMR atual" valor={fmtBrg(res.dmrAtual)} />
            <Linha rotulo="VMR atual" valor={`${fmt(res.vmrAtual, 1)} kt`} />
          </Resultado>
        )}
        {res && !res.necessaria && res.possivel && (
          <p className="rounded-lg border border-progresso/30 bg-progresso/10 p-2 text-xs text-progresso">
            Sem manobra necessária: a PMA atual ({fmt(res.pmaAtual)} yd) já atende {fmt(+f.pma)} yd
            {res.jaPassou ? ' (o contato já passou pelo PMA e se afasta).' : '.'}
          </p>
        )}
        {res && !res.possivel && (
          <p className="rounded-lg border border-alerta/30 bg-alerta/10 p-2 text-xs text-alerta">{res.motivo}</p>
        )}
        {res && res.necessaria && res.possivel && (
          <div className="space-y-2">
            {rumos.length > 0 && (
              <div className="rounded-lg border border-dourado/20 bg-dourado/5 p-3">
                <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-dourado/80">Manter a velocidade — mudar o rumo</p>
                <ul className="space-y-1.5 text-sm">
                  {rumos.map((m, i) => (
                    <li key={i} className="flex flex-wrap items-center justify-between gap-x-2">
                      <span className="font-mono font-semibold text-marfim">{fmtBrg(m.novoRumo)}</span>
                      <span className="text-xs text-nevoa/80">
                        {Math.abs(Math.round(m.mudancaRumo ?? 0))}° p/ {m.bordo === 'BE' ? 'boreste' : 'bombordo'} · passa pela {m.lado} · VMR {fmt(m.vmr, 1)} kt
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {vels.length > 0 && (
              <div className="rounded-lg border border-dourado/20 bg-dourado/5 p-3">
                <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-dourado/80">Manter o rumo — mudar a velocidade</p>
                <ul className="space-y-1.5 text-sm">
                  {vels.map((m, i) => (
                    <li key={i} className="flex flex-wrap items-center justify-between gap-x-2">
                      <span className="font-mono font-semibold text-marfim">{fmt(m.novaVelocidade, 1)} kt</span>
                      <span className="text-xs text-nevoa/80">passa pela {m.lado} · VMR {fmt(m.vmr, 1)} kt</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
      {board && (
        <div className="min-w-[280px] flex-1">
          <div className="mx-auto w-full max-w-[380px]">
            <RosaBoard titulo="Círculo de segurança e tangentes" unitsPerRing={board.units} unitLabel="yd" circles={board.circles} markers={board.markers} lines={board.lines} />
            <p className="mt-1 text-center text-[10px] leading-snug text-nevoa/60">
              A reta pontilhada é o movimento relativo <strong className="text-nevoa/80">atual</strong> (corta o círculo). As verdes <strong className="text-progresso">tangenciam</strong> o círculo: são as novas DMR a obter.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Aba: Exercícios (confira sua resposta) ───────────────────────────────────
function AbaExercicios({ exercicioId }: { exercicioId?: string }) {
  const idxInicial = exerciciosRosa.findIndex((e) => e.id === exercicioId);
  const [idx, setIdx] = usePersistedState('exercicioIdx', idxInicial >= 0 ? idxInicial : 0);
  const ex = exerciciosRosa[Math.min(idx, exerciciosRosa.length - 1)] ?? exerciciosRosa[0];
  const gab = useMemo<CampoGabarito[]>(() => {
    try { return ex.gabarito(); } catch { return []; }
  }, [ex]);
  const [resp, setResp] = useState<Record<string, string>>({});
  const [conf, setConf] = useState<Record<string, { ok: boolean; dica: string | null }> | null>(null);
  const [verGab, setVerGab] = useState(false);

  const trocar = (novo: number) => { setIdx(novo); setResp({}); setConf(null); setVerGab(false); };

  // Deep-link contextual (FerramentasHost → exercicioId): força o exercício pedido.
  useEffect(() => {
    const i = exerciciosRosa.findIndex((e) => e.id === exercicioId);
    if (exercicioId && i >= 0) trocar(i);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exercicioId]);

  const conferir = () => {
    const out: Record<string, { ok: boolean; dica: string | null }> = {};
    for (const c of gab) {
      const raw = (resp[c.chave] ?? '').trim();
      if (raw === '' || !isFinite(+raw)) { out[c.chave] = { ok: false, dica: 'Responda este campo.' }; continue; }
      const aluno = +raw;
      if (c.tipo === 'marcacao') {
        const chk = checkBearing(aluno, c.valor, c.tol);
        out[c.chave] = { ok: chk.ok, dica: chk.ok ? null : diagnoseBearing(aluno, c.valor, c.tol)?.message ?? null };
      } else {
        const chk = checkScalar(aluno, c.valor, c.tol);
        const dica = diagnoseScale(aluno, c.valor)?.message ?? `Diferença de ${fmt(Math.abs(aluno - c.valor), 1)} ${c.unidade}.`;
        out[c.chave] = { ok: chk.ok, dica: chk.ok ? null : dica };
      }
    }
    setConf(out);
  };

  const acertos = conf ? gab.filter((c) => conf[c.chave]?.ok).length : 0;

  return (
    <div className="mx-auto max-w-2xl space-y-4">
      <label className="flex flex-col gap-1 text-xs text-nevoa">
        <span className="font-medium">Exercício</span>
        <select
          value={idx}
          onChange={(e) => trocar(+e.target.value)}
          className="rounded-lg border border-white/10 bg-naval-900 px-2 py-1.5 text-sm text-marfim outline-none focus:border-dourado/50"
        >
          {exerciciosRosa.map((e, i) => (
            <option key={e.id} value={i}>{e.tipo} — {e.titulo}</option>
          ))}
        </select>
      </label>

      <div className="rounded-lg border border-white/10 bg-naval-900/40 p-3">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-dourado/80">{ex.tipo}</p>
        <p className="mt-1 text-sm leading-relaxed text-nevoa">{ex.enunciado}</p>
      </div>

      <div className="grid gap-x-3 gap-y-2 sm:grid-cols-2">
        {gab.map((c) => {
          const r = conf?.[c.chave];
          return (
            <div key={c.chave} className="space-y-1">
              <Campo label={c.rotulo} value={resp[c.chave] ?? ''} onChange={(v) => setResp((s) => ({ ...s, [c.chave]: v }))} suffix={c.unidade} />
              {r && <p className={`text-[11px] ${r.ok ? 'text-progresso' : 'text-alerta'}`}>{r.ok ? '✓ correto' : `✗ ${r.dica ?? 'incorreto'}`}</p>}
              {verGab && (
                <p className="text-[11px] text-dourado/80">
                  resposta: <span className="font-mono">{c.tipo === 'marcacao' ? fmtBrg(c.valor) : `${fmt(c.valor, c.unidade === 'yd' ? 0 : 1)} ${c.unidade}`}</span>
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <button type="button" onClick={conferir} className="flex-1 rounded-lg bg-dourado py-2 text-sm font-semibold text-naval transition hover:bg-dourado-soft">
          Conferir
        </button>
        <button type="button" onClick={() => setVerGab((v) => !v)} className="rounded-lg border border-white/15 px-3 py-2 text-xs text-nevoa transition hover:border-dourado/40 hover:text-dourado">
          {verGab ? 'Ocultar resolução' : 'Ver resolução'}
        </button>
      </div>

      {conf && (
        <p className="rounded-lg border border-dourado/20 bg-dourado/5 p-2 text-center text-sm text-marfim">
          {acertos} de {gab.length} corretos.
        </p>
      )}
    </div>
  );
}

// ── Orquestrador ─────────────────────────────────────────────────────────────
const ABAS: { id: Aba; nome: string }[] = [
  { id: 'contato', nome: 'Contato / PMA' },
  { id: 'vento', nome: 'Vento' },
  { id: 'conves', nome: 'Convés (lançamento)' },
  { id: 'posicao', nome: 'Entrar em posição' },
  { id: 'anticolisao', nome: 'Anticolisão' },
  { id: 'nomograma', nome: 'Nomograma' },
  { id: 'exercicios', nome: 'Exercícios' },
];

export default function RosaWorkspace({ exercicioId }: ToolProps) {
  const [aba, setAba] = usePersistedState<Aba>('aba', 'contato');
  // Abertura contextual: se vier um exercício, abre direto na aba Exercícios.
  useEffect(() => {
    if (exercicioId && exercicioPorId(exercicioId)) setAba('exercicios');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exercicioId]);
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
        {aba === 'anticolisao' && <AbaAnticolisao />}
        {aba === 'nomograma' && <AbaNomograma />}
        {aba === 'exercicios' && <AbaExercicios exercicioId={exercicioId} />}
      </div>
    </div>
  );
}

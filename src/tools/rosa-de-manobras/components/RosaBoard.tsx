import type { Vec2 } from '../engine';

export type Tone = 'ref' | 'contato' | 'pma' | 'own' | 'rel' | 'target' | 'wind' | 'aux';

export interface BoardMarker {
  pos: Vec2;
  label: string;
  tone?: Tone;
}
export interface BoardArrow {
  from: Vec2;
  to: Vec2;
  label?: string;
  tone?: Tone;
  dashed?: boolean;
}
export interface BoardLine {
  from: Vec2;
  to: Vec2;
  tone?: Tone;
  dashed?: boolean;
}
export interface BoardCircle {
  center: Vec2;
  /** Raio na unidade do diagrama. */
  radius: number;
  tone?: Tone;
  dashed?: boolean;
  label?: string;
}

interface Props {
  /** Valor de cada anel (10 anéis) na unidade do diagrama. */
  unitsPerRing: number;
  unitLabel: string;
  titulo?: string;
  markers?: BoardMarker[];
  arrows?: BoardArrow[];
  lines?: BoardLine[];
  circles?: BoardCircle[];
  size?: number;
}

const RINGS = 10;

const TONE_STROKE: Record<Tone, string> = {
  ref: 'stroke-marfim',
  contato: 'stroke-dourado',
  pma: 'stroke-alerta',
  own: 'stroke-marfim',
  rel: 'stroke-dourado',
  target: 'stroke-progresso',
  wind: 'stroke-progresso',
  aux: 'stroke-nevoa',
};
const TONE_FILL: Record<Tone, string> = {
  ref: 'fill-marfim',
  contato: 'fill-dourado',
  pma: 'fill-alerta',
  own: 'fill-marfim',
  rel: 'fill-dourado',
  target: 'fill-progresso',
  wind: 'fill-progresso',
  aux: 'fill-nevoa',
};

/** Escolhe um valor "redondo" por anel para caber até ~10 anéis. */
export function niceUnitsPerRing(maxValue: number): number {
  if (!isFinite(maxValue) || maxValue <= 0) return 1;
  const raw = maxValue / 9;
  const pow = Math.pow(10, Math.floor(Math.log10(raw)));
  for (const m of [1, 2, 2.5, 5, 10]) {
    if (m * pow >= raw) return m * pow;
  }
  return 10 * pow;
}

/** Placa de manobra (DHN-0618-1): 10 anéis, 36 radiais, graduação 000–360°. */
export default function RosaBoard({
  unitsPerRing,
  unitLabel,
  titulo,
  markers = [],
  arrows = [],
  lines = [],
  circles = [],
  size = 520,
}: Props) {
  const cx = size / 2;
  const cy = size / 2;
  const margin = 30;
  const R = size / 2 - margin;
  const ringStep = R / RINGS;
  const k = ringStep / unitsPerRing; // px por unidade

  const toScreen = (v: Vec2) => ({ x: cx + v.x * k, y: cy - v.y * k });

  const radials = Array.from({ length: 36 }, (_, i) => i * 10);
  const ringValues = Array.from({ length: RINGS }, (_, i) => i + 1);

  return (
    <figure className="m-0">
      {titulo && (
        <figcaption className="mb-1 text-center text-xs font-semibold uppercase tracking-wider text-dourado/80">
          {titulo}
        </figcaption>
      )}
      <svg viewBox={`0 0 ${size} ${size}`} className="h-auto w-full select-none" role="img">
        {/* anéis concêntricos */}
        {ringValues.map((i) => (
          <circle
            key={`r${i}`}
            cx={cx}
            cy={cy}
            r={ringStep * i}
            className="fill-none stroke-marfim/15"
            strokeWidth={i === RINGS ? 1.3 : 0.6}
          />
        ))}

        {/* radiais a cada 10° (mais fortes a cada 30°) */}
        {radials.map((deg) => {
          const a = (deg * Math.PI) / 180;
          const x2 = cx + R * Math.sin(a);
          const y2 = cy - R * Math.cos(a);
          const forte = deg % 30 === 0;
          return (
            <line
              key={`a${deg}`}
              x1={cx}
              y1={cy}
              x2={x2}
              y2={y2}
              className={forte ? 'stroke-marfim/20' : 'stroke-marfim/8'}
              strokeWidth={forte ? 0.7 : 0.4}
            />
          );
        })}

        {/* graduação numérica a cada 30° */}
        {radials
          .filter((d) => d % 30 === 0)
          .map((deg) => {
            const a = (deg * Math.PI) / 180;
            const rx = cx + (R + 14) * Math.sin(a);
            const ry = cy - (R + 14) * Math.cos(a);
            return (
              <text
                key={`t${deg}`}
                x={rx}
                y={ry}
                className="fill-nevoa/70 font-mono"
                fontSize={10}
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {String(deg).padStart(3, '0')}
              </text>
            );
          })}

        {/* rótulo de escala nos anéis (eixo Leste) */}
        {ringValues
          .filter((i) => i % 2 === 0)
          .map((i) => (
            <text
              key={`rl${i}`}
              x={cx + ringStep * i + 2}
              y={cy - 2}
              className="fill-nevoa/40 font-mono"
              fontSize={7.5}
            >
              {Math.round(unitsPerRing * i)}
            </text>
          ))}

        {/* cruz central */}
        <path d={`M${cx - 5} ${cy}H${cx + 5}M${cx} ${cy - 5}V${cy + 5}`} className="stroke-marfim/60" strokeWidth={1} />

        {/* círculos destacados (ex.: distância mínima de segurança) */}
        {circles.map((c, i) => {
          const p = toScreen(c.center);
          const stroke = TONE_STROKE[c.tone ?? 'pma'];
          return (
            <g key={`c${i}`}>
              <circle
                cx={p.x}
                cy={p.y}
                r={c.radius * k}
                className={`fill-none ${stroke}/60`}
                strokeWidth={1.2}
                strokeDasharray={c.dashed ? '5 4' : undefined}
              />
              {c.label && (
                <text x={p.x} y={p.y - c.radius * k - 4} className={`${TONE_FILL[c.tone ?? 'pma']} font-mono`} fontSize={9} textAnchor="middle">
                  {c.label}
                </text>
              )}
            </g>
          );
        })}

        {/* retas auxiliares (DMR, perpendicular do PMA) */}
        {lines.map((ln, i) => {
          const a = toScreen(ln.from);
          const b = toScreen(ln.to);
          return (
            <line
              key={`ln${i}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              className={`${TONE_STROKE[ln.tone ?? 'aux']}/70`}
              strokeWidth={1}
              strokeDasharray={ln.dashed ? '4 3' : undefined}
            />
          );
        })}

        {/* setas (vetores) */}
        {arrows.map((ar, i) => {
          const a = toScreen(ar.from);
          const b = toScreen(ar.to);
          const ang = Math.atan2(b.y - a.y, b.x - a.x);
          const hl = 9;
          const h1 = { x: b.x - hl * Math.cos(ang - 0.4), y: b.y - hl * Math.sin(ang - 0.4) };
          const h2 = { x: b.x - hl * Math.cos(ang + 0.4), y: b.y - hl * Math.sin(ang + 0.4) };
          const stroke = `${TONE_STROKE[ar.tone ?? 'aux']}`;
          const fill = `${TONE_FILL[ar.tone ?? 'aux']}`;
          const mid = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
          return (
            <g key={`ar${i}`}>
              <line
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                className={stroke}
                strokeWidth={1.8}
                strokeDasharray={ar.dashed ? '5 3' : undefined}
              />
              <path d={`M${b.x} ${b.y}L${h1.x} ${h1.y}L${h2.x} ${h2.y}Z`} className={`${stroke} ${fill}`} />
              {ar.label && (
                <text x={mid.x + 5} y={mid.y - 4} className={`${fill} font-mono`} fontSize={10}>
                  {ar.label}
                </text>
              )}
            </g>
          );
        })}

        {/* marcadores (pontos rotulados) */}
        {markers.map((m, i) => {
          const p = toScreen(m.pos);
          const stroke = TONE_STROKE[m.tone ?? 'aux'];
          const fill = TONE_FILL[m.tone ?? 'aux'];
          return (
            <g key={`m${i}`}>
              <circle cx={p.x} cy={p.y} r={3.4} className={`${fill} ${stroke}`} strokeWidth={1} />
              <text x={p.x + 6} y={p.y - 6} className={`${fill} font-mono font-semibold`} fontSize={11}>
                {m.label}
              </text>
            </g>
          );
        })}
      </svg>
      <p className="mt-1 text-center text-[10px] text-nevoa/50">
        escala: cada anel = {unitsPerRing} {unitLabel}
      </p>
    </figure>
  );
}

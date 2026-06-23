// Tipos de domínio do motor da Rosa de Manobras.
// Todos os ângulos em GRAUS (marcação horária a partir do Norte); tempos em MINUTOS.

/** Marcação/rumo em graus [0,360), horária a partir do Norte. */
export type Bearing = number;
/** Velocidade em nós. */
export type Knots = number;
/** Distância em jardas. */
export type Yards = number;
/** Distância em milhas náuticas. */
export type NauticalMiles = number;
/** Tempo em minutos. */
export type Minutes = number;

/** Vetor no plano do tabuleiro: x = Leste (+), y = Norte (+). */
export interface Vec2 {
  x: number;
  y: number;
}

/** Vetor de movimento verdadeiro (rumo + velocidade). */
export interface TrueVector {
  course: Bearing;
  speed: Knots;
}

/** Plotagem polar (marcação verdadeira + distância). */
export interface PolarPlot {
  /** Marcação verdadeira em graus. */
  bearing: Bearing;
  /** Distância em jardas. */
  range: Yards;
}

/** Plotagem polar com instante (minutos desde a meia-noite, ou relativo). */
export interface TimedPlot extends PolarPlot {
  timeMin: Minutes;
}

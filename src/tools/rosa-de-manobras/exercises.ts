// Banco de exercícios da Rosa de Manobras. O gabarito de cada exercício é
// CALCULADO PELO MOTOR ao vivo — nunca há resposta "fixa" que possa divergir do
// solver. Os casos são os validados na auditoria (UE5 e Miguens).
import {
  solveContact,
  solveTrueWind,
  solveStation,
  solveDeckLaunch,
  relativeFromTrue,
  parseHHMM,
} from './engine';

export type TipoCampo = 'marcacao' | 'escalar';

export interface CampoGabarito {
  chave: string;
  rotulo: string;
  tipo: TipoCampo;
  /** Valor correto (calculado pelo motor). */
  valor: number;
  unidade: string;
  /** Tolerância: graus (marcação) ou valor absoluto (escalar). */
  tol: number;
}

export interface ExercicioRosa {
  id: string;
  tipo: string;
  titulo: string;
  enunciado: string;
  /** Recalcula os campos-gabarito rodando o motor. */
  gabarito: () => CampoGabarito[];
}

export const exerciciosRosa: ExercicioRosa[] = [
  {
    id: 'contato-ue5-a2',
    tipo: 'Contato / PMA',
    titulo: 'Contato e PMA (UE5 — Aula 2)',
    enunciado:
      'Navegando no rumo 260° a 12 nós, você plota um contato: 0342P em 020°/14000 yd e 0349P em 015°/11000 yd. Determine DMR, VMR, o rumo e a velocidade do contato, e a marcação e a distância do PMA.',
    gabarito: () => {
      const r = solveContact({
        own: { course: 260, speed: 12 },
        m1: { bearing: 20, range: 14000, timeMin: parseHHMM('0342') },
        m2: { bearing: 15, range: 11000, timeMin: parseHHMM('0349') },
      });
      return [
        { chave: 'dmr', rotulo: 'DMR', tipo: 'marcacao', valor: r.dmr, unidade: '°', tol: 3 },
        { chave: 'vmr', rotulo: 'VMR', tipo: 'escalar', valor: r.vmr, unidade: 'kt', tol: 1.5 },
        { chave: 'rumo', rotulo: 'Rumo do contato', tipo: 'marcacao', valor: r.targetCourse, unidade: '°', tol: 4 },
        { chave: 'vel', rotulo: 'Veloc. do contato', tipo: 'escalar', valor: r.targetSpeed, unidade: 'kt', tol: 2 },
        { chave: 'pmaB', rotulo: 'PMA — marcação', tipo: 'marcacao', valor: r.cpa.bearing, unidade: '°', tol: 4 },
        { chave: 'pmaD', rotulo: 'PMA — distância', tipo: 'escalar', valor: r.cpa.distance, unidade: 'yd', tol: 900 },
      ];
    },
  },
  {
    id: 'relativo-miguens',
    tipo: 'Movimento relativo',
    titulo: 'DMR e VMR diretos (Miguens)',
    enunciado:
      'Seu navio no rumo 000° a 15 nós; o contato no rumo 026° a 22 nós. Determine a DMR e a VMR (diagrama de velocidades).',
    gabarito: () => {
      const r = relativeFromTrue({ course: 0, speed: 15 }, { course: 26, speed: 22 });
      return [
        { chave: 'dmr', rotulo: 'DMR', tipo: 'marcacao', valor: r.dmr, unidade: '°', tol: 3 },
        { chave: 'vmr', rotulo: 'VMR', tipo: 'escalar', valor: r.vmr, unidade: 'kt', tol: 1.5 },
      ];
    },
  },
  {
    id: 'vento-ue5-a3',
    tipo: 'Vento real',
    titulo: 'Vento real pelo anemômetro (UE5 — Aula 3)',
    enunciado:
      'Navio no rumo 060° a 10 nós. O anemômetro indica vento a 090° pelo través de boreste (BE), intensidade 14 nós. Determine de onde sopra o vento real e sua intensidade.',
    gabarito: () => {
      const r = solveTrueWind({ course: 60, speed: 10 }, { tipo: 'relativo', direcao: 90, bordo: 'BE', intensidade: 14 });
      return [
        { chave: 'de', rotulo: 'Vento real — de onde', tipo: 'marcacao', valor: r.from, unidade: '°', tol: 3 },
        { chave: 'int', rotulo: 'Intensidade', tipo: 'escalar', valor: r.speed, unidade: 'kt', tol: 1.5 },
      ];
    },
  },
  {
    id: 'vento-miguens',
    tipo: 'Vento real',
    titulo: 'Vento real (Miguens)',
    enunciado:
      'Navio no rumo 030° a 15 nós; anemômetro a 030° por boreste (BE), 20 nós. Determine de onde sopra o vento real e sua intensidade.',
    gabarito: () => {
      const r = solveTrueWind({ course: 30, speed: 15 }, { tipo: 'relativo', direcao: 30, bordo: 'BE', intensidade: 20 });
      return [
        { chave: 'de', rotulo: 'Vento real — de onde', tipo: 'marcacao', valor: r.from, unidade: '°', tol: 3 },
        { chave: 'int', rotulo: 'Intensidade', tipo: 'escalar', valor: r.speed, unidade: 'kt', tol: 1.5 },
      ];
    },
  },
  {
    id: 'conves-ue5',
    tipo: 'Convés (lançamento)',
    titulo: 'Vento no convés (UE5)',
    enunciado:
      'Vento real de 040° a 18 nós. Quer-se 24 nós de vento sobre o convés a 45° pela proa de boreste (BE) para lançar aeronaves. Dê a solução de MENOR velocidade (rumo e velocidade do navio).',
    gabarito: () => {
      const r = solveDeckLaunch({ from: 40, speed: 18 }, { angle: 45, bordo: 'BE', speed: 24 });
      const s = r.solutions[0];
      return [
        { chave: 'rumo', rotulo: 'Rumo do navio', tipo: 'marcacao', valor: s.course, unidade: '°', tol: 3 },
        { chave: 'vel', rotulo: 'Veloc. do navio', tipo: 'escalar', valor: s.speed, unidade: 'kt', tol: 1.5 },
      ];
    },
  },
  {
    id: 'posicao-ue5-a4',
    tipo: 'Entrar em posição',
    titulo: 'Entrar em posição (UE5 — Aula 4)',
    enunciado:
      'O guia navega no rumo 090° a 10 nós. Você deve ocupar um posto cujo deslocamento relativo é 135°/2800 yd, com velocidade de manobra de 15 nós. Determine o rumo e o tempo de manobra.',
    gabarito: () => {
      const r = solveStation({ guide: { course: 90, speed: 10 }, ownSpeed: 15, displacement: { bearing: 135, distance: 2800 } });
      const s = r.solutions[0];
      return [
        { chave: 'rumo', rotulo: 'Rumo de manobra', tipo: 'marcacao', valor: s.ownCourse, unidade: '°', tol: 3 },
        { chave: 'tempo', rotulo: 'Tempo de manobra', tipo: 'escalar', valor: s.timeMin, unidade: 'min', tol: 2 },
      ];
    },
  },
];

export function exercicioPorId(id?: string): ExercicioRosa | undefined {
  return id ? exerciciosRosa.find((e) => e.id === id) : undefined;
}

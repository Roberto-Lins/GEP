import type { Midia } from '@tipos/media';
export type { Midia } from '@tipos/media';
export const midias: Midia[] = [
  { tipo:'video', topico:'01-correcoes-de-altura', titulo:'Aula do professor — correções de alturas', fonte:'YouTube · material indicado pelo professor', src:'https://youtu.be/QGZRts6e_TA', origem:'youtube' },
  { tipo:'video', topico:'02-linha-de-posicao', titulo:'Aula do professor — linha de posição', fonte:'YouTube · material indicado pelo professor', src:'https://www.youtube.com/watch?v=aHrIDUUhdeg', origem:'youtube' },
  { tipo:'video', topico:'03-tabua-radler', titulo:'UE 10.0 — conceitos da Tábua Radler (assistir até 13:00)', fonte:'YouTube · recorte indicado pelo professor em 15/09/2026', src:'https://www.youtube.com/watch?v=zjoa5-05Y2Y', origem:'youtube', descricao:'Parte conceitual confirmada para estudo; a aula seguinte é o trabalho de 2,0.' },
  { tipo:'video', topico:'04-hora-da-passagem-meridiana', titulo:'Aula 11.1 — conceitos e previsão da PM', fonte:'YouTube · material indicado pelo professor', src:'https://youtu.be/zZ3SUxWFi7o', origem:'youtube' },
  { tipo:'video', topico:'04-hora-da-passagem-meridiana', titulo:'Aulas 11.1 e 11.2', fonte:'YouTube · material indicado pelo professor', src:'https://youtu.be/L4ecKhRO8us', origem:'youtube' },
  { tipo:'video', topico:'05-latitude-meridiana', titulo:'Aula 11.3 — cálculo da latitude meridiana', fonte:'YouTube · material indicado pelo professor', src:'https://youtu.be/jSst-b62EPM', origem:'youtube' },
];
export function midiasPorTopico(slug:string){const lista=midias.filter(m=>m.topico===slug);return{videos:lista.filter(m=>m.tipo==='video'),podcasts:lista.filter(m=>m.tipo==='podcast'),mapas:lista.filter(m=>m.tipo==='mapa')}}

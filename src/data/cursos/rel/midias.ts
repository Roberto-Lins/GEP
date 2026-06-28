// Mídias do curso REL (Relações Internacionais — P1).
//
// ⚠️ A SER ADICIONADO POSTERIORMENTE. Vídeos, podcasts e mapas mentais ainda não
// existem para este curso — por isso o array está vazio e as features `podcasts` /
// `mapasMentais` estão desligadas no _config.json. A página de cada mini-matéria só
// renderiza a seção de mídias quando há mídia; enquanto isso, cada tópico exibe um
// bloco "em breve" no conteúdo. Para adicionar depois, siga o padrão de
// src/data/cursos/dir/midias.ts (cada item com `topico` = slug da mini-matéria) e
// religue as features correspondentes.
import type { Midia } from '@tipos/media';
export type { Midia } from '@tipos/media';

export const midias: Midia[] = [];

export function midiasPorTopico(slug: string) {
  const lista = midias.filter((m) => m.topico === slug);
  return {
    videos: lista.filter((m) => m.tipo === 'video'),
    podcasts: lista.filter((m) => m.tipo === 'podcast'),
    mapas: lista.filter((m) => m.tipo === 'mapa'),
  };
}

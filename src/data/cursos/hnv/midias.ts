// Mídias (vídeos, podcasts, mapas) do curso HNV, por `topico` (slug).
// Ver docs/MEDIA-PROTOCOL.md: mídia pesada (vídeos/áudios) NÃO fica no repo.
//
// TODO (externalizar — protocolo de mídia): os áudios (NotebookLM, ~34–53 MB cada)
// e o vídeo geral (~55 MB) estão na pasta externa ../HNV e ainda não têm link
// público. Quando subirem para YouTube não-listado / R2 / Bunny, registre-os aqui
// com `origem` e `src` corretos. Esqueleto pronto abaixo (comentado para não
// renderizar players sem fonte):
//
//   { tipo: 'podcast', topico: '00-visao-geral', titulo: 'O mar como fronteira dos impérios',
//     fonte: 'NotebookLM', origem: 'externo', src: 'TODO://o-mar-como-fronteira-dos-imperios' },
//   { tipo: 'podcast', topico: '01-mediterraneo-antigo-e-batalha-de-mylae',
//     titulo: 'Roma aniquilou Cartago com o corvus', fonte: 'NotebookLM', origem: 'externo', src: 'TODO://...' },
//   { tipo: 'podcast', topico: '02-da-galera-ao-navio-de-vela',
//     titulo: 'A revolução da vela e do canhão', fonte: 'NotebookLM', origem: 'externo', src: 'TODO://...' },
//   { tipo: 'podcast', topico: '03-franca-antartica-corso-e-religiao',
//     titulo: 'Guerra viva e religião na França Antártica', fonte: 'NotebookLM', origem: 'externo', src: 'TODO://...' },
//   { tipo: 'podcast', topico: '04-ocupacoes-francesas-e-holandesas',
//     titulo: 'A guerra naval no Brasil colonial', fonte: 'NotebookLM', origem: 'externo', src: 'TODO://...' },
//   { tipo: 'podcast', topico: '05-brasil-holandes-restauracao-e-imperio',
//     titulo: 'A retomada de Angola e do Brasil', fonte: 'NotebookLM', origem: 'externo', src: 'TODO://...' },
//   { tipo: 'video', topico: '00-visao-geral', titulo: 'Evolução do Poder Marítimo',
//     fonte: 'NotebookLM', origem: 'youtube', src: 'TODO://link-do-youtube' },
import type { Midia } from '@tipos/media';
export type { Midia } from '@tipos/media';

export const midias: Midia[] = [
  // Mapa mental leve (versionado no repo).
  {
    tipo: 'mapa',
    topico: '05-brasil-holandes-restauracao-e-imperio',
    titulo: 'Mapa mental — Governo do Império (texto de Marcello Loureiro)',
    fonte: 'Marcello Loureiro',
    src: '/mapas-mentais/cursos/hnv/mapa-loureiro-governo-imperio.png',
    origem: 'local',
    descricao: 'Síntese visual do Estado polissinodal, da monarquia pluricontinental e da crise da Restauração.',
  },
];

export function midiasPorTopico(slug: string) {
  const lista = midias.filter((m) => m.topico === slug);
  return {
    videos: lista.filter((m) => m.tipo === 'video'),
    podcasts: lista.filter((m) => m.tipo === 'podcast'),
    mapas: lista.filter((m) => m.tipo === 'mapa'),
  };
}

import inventario from './inventario-fontes.json';
import modulos from './module-meta.json';
import type { Fonte } from '@tipos/media';

export type { Fonte } from '@tipos/media';

type FonteInventario = (typeof inventario.fontes)[number];
const TODOS_OS_TOPICOS = modulos.map((modulo) => modulo.slug);

const rotuloTipo: Record<string, Fonte['tipo']> = {
  slides: 'slide',
  slides_exercicios: 'slide',
  estudo_dirigido: 'resumo',
  lista_exercicios: 'resumo',
  prova_anterior: 'prova',
  orientacao_do_professor: 'observacao',
};

function topicosDaFonte(fonte: FonteInventario) {
  if ('sue' in fonte && fonte.sue === '3.2') return TODOS_OS_TOPICOS.slice(1, 6);
  if ('sue' in fonte && fonte.sue === '3.3') return TODOS_OS_TOPICOS.slice(6, 9);
  if ('sue' in fonte && fonte.sue === '4.1') return TODOS_OS_TOPICOS.slice(9, 12);
  if ('sue' in fonte && fonte.sue === '4.2') return TODOS_OS_TOPICOS.slice(12, 15);
  return TODOS_OS_TOPICOS;
}

export const fontes: Fonte[] = inventario.fontes
  .filter((fonte) => fonte.tipo !== 'video_apoio')
  .map((fonte) => ({
    titulo: 'original' in fonte && fonte.original ? fonte.original : fonte.arquivo,
    tipo: rotuloTipo[fonte.tipo] ?? 'observacao',
    descricao: `${fonte.funcao}. Condição editorial: ${fonte.condicao}.`,
    topicos: topicosDaFonte(fonte),
  }));

export const fontesPorTopico = (slug: string) =>
  fontes.filter((fonte) => fonte.topicos.length === 0 || fonte.topicos.includes(slug));

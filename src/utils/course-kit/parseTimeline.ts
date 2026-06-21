// Parseia a linha do tempo (lista de tópicos) a partir de texto .md/.txt ou .json.
import type { TopicoTimeline } from '@tipos/course-kit';

const MARCADOR = /^\s*(?:#{1,6}\s+|[-*+]\s+|\d+[.)]\s+)/;
// Marcadores "primários" (definem um tópico): títulos e itens numerados.
const PRIMARIO = /^\s*(?:#{1,6}\s+|\d+[.)]\s+)/;
const DICA = /^\s*(?:dica(?:\s+do\s+professor)?|prof(?:essor)?|atenç\w*|obs)\s*[:\-]?\s*/i;

function limparMarcador(linha: string): string {
  return linha.replace(MARCADOR, '').trim();
}

/** Tenta JSON, depois o formato de campos do guia, depois markdown/texto. */
export function parseTimeline(texto: string, nomeArquivo = ''): TopicoTimeline[] {
  const trimmed = texto.trim();
  const pareceJson = nomeArquivo.endsWith('.json') || /^[[{]/.test(trimmed);
  if (pareceJson) {
    const viaJson = tentarJson(trimmed);
    if (viaJson) return viaJson;
  }
  // Formato "campo: valor" gerado pelo guia (Título:/Objetivo:/Pegadinhas:…).
  const viaCampos = tentarCampos(trimmed);
  if (viaCampos) return viaCampos;
  return parseTexto(trimmed);
}

const semAcento = (s: string) =>
  s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();

/** Lê o modelo do guia: blocos com `Título:`, `Objetivo:`, `Conteúdos internos:`,
 *  `Pegadinhas:`, `Observações…:` — um tópico por `Título:`. */
function tentarCampos(texto: string): TopicoTimeline[] | null {
  const par = (l: string): [string, string] | null => {
    const m = l.match(/^\s*([A-Za-zÀ-ÿ][^:]{1,44}?)\s*:\s*(.*)$/);
    return m ? [semAcento(m[1]), m[2].trim()] : null;
  };
  const linhas = texto.split(/\r?\n/);
  const ehTitulo = (k: string) => k === 'titulo' || k === 'title';
  if (!linhas.some((l) => { const c = par(l); return !!c && ehTitulo(c[0]); })) return null;

  const DESC = ['objetivo', 'conteudos internos', 'conteudo interno', 'conteudos', 'por que vem aqui'];
  const DICAS = ['pegadinhas', 'pegadinha', 'observacoes', 'observacoes para o site', 'obs'];
  const topicos: TopicoTimeline[] = [];
  let atual: TopicoTimeline | null = null;
  const fechar = () => { if (atual?.titulo) topicos.push(atual); atual = null; };

  for (const linha of linhas) {
    const c = par(linha);
    if (!c) continue;
    const [k, v] = c;
    if (ehTitulo(k)) { fechar(); atual = { ordem: topicos.length, titulo: v }; continue; }
    if (!atual || !v) continue;
    if (DESC.includes(k)) atual.descricao = atual.descricao ? `${atual.descricao} ${v}` : v;
    else if (DICAS.includes(k)) (atual.dicasProfessor ??= []).push(v);
  }
  fechar();
  return topicos.length ? topicos : null;
}

function tentarJson(texto: string): TopicoTimeline[] | null {
  try {
    const dado = JSON.parse(texto);
    const arr: unknown[] = Array.isArray(dado)
      ? dado
      : Array.isArray((dado as { topicos?: unknown[] })?.topicos)
        ? (dado as { topicos: unknown[] }).topicos
        : [];
    if (!arr.length) return null;
    return arr
      .map((item, i) => normalizarItem(item, i))
      .filter((t): t is TopicoTimeline => t !== null);
  } catch {
    return null;
  }
}

function normalizarItem(item: unknown, i: number): TopicoTimeline | null {
  if (typeof item === 'string') {
    const titulo = item.trim();
    return titulo ? { ordem: i, titulo } : null;
  }
  if (item && typeof item === 'object') {
    const o = item as Record<string, unknown>;
    const titulo = String(o.titulo ?? o.title ?? o.nome ?? '').trim();
    if (!titulo) return null;
    const dicas = Array.isArray(o.dicasProfessor)
      ? (o.dicasProfessor as unknown[]).map(String)
      : undefined;
    return {
      ordem: typeof o.ordem === 'number' ? o.ordem : i,
      titulo,
      descricao: o.descricao ? String(o.descricao) : undefined,
      dicasProfessor: dicas,
    };
  }
  return null;
}

function parseTexto(texto: string): TopicoTimeline[] {
  const linhas = texto.split(/\r?\n/);
  // Se há marcadores primários (títulos/numerados), só eles abrem tópicos e os
  // bullets viram detalhes/dicas. Sem primários, qualquer marcador (ou cada
  // linha) abre um tópico.
  const temPrimario = linhas.some((l) => PRIMARIO.test(l));
  const temMarcador = linhas.some((l) => MARCADOR.test(l));
  const topicos: TopicoTimeline[] = [];
  let atual: TopicoTimeline | null = null;

  const fechar = () => {
    if (atual) topicos.push(atual);
    atual = null;
  };

  for (const linha of linhas) {
    if (!linha.trim()) continue;

    const ehTitulo = temPrimario ? PRIMARIO.test(linha) : temMarcador ? MARCADOR.test(linha) : true;
    if (ehTitulo) {
      fechar();
      atual = { ordem: topicos.length, titulo: limparMarcador(linha) };
      continue;
    }
    if (!atual) continue;
    const detalhe = limparMarcador(linha); // tira bullet do sub-item
    if (DICA.test(detalhe)) {
      (atual.dicasProfessor ??= []).push(detalhe.replace(DICA, '').trim());
    } else {
      atual.descricao = atual.descricao ? `${atual.descricao} ${detalhe}` : detalhe;
    }
  }
  fechar();
  return topicos.filter((t) => t.titulo);
}

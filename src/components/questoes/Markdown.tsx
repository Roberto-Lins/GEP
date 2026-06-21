import { Fragment, type ReactNode } from 'react';

/**
 * Renderizador Markdown minimalista e sem dependências, feito sob medida para os
 * gabaritos comentados das questões. Cobre exatamente o subconjunto que os
 * gabaritos usam:
 *   • **negrito**, *itálico* e `código` inline;
 *   • títulos `#`…`######`;
 *   • listas não ordenadas (`-`, `•`, `*`) e ordenadas (`1.`);
 *   • citações (`>`);
 *   • tabelas GFM (cabeçalho + linha separadora `| --- |`);
 *   • parágrafos separados por linha em branco (quebra simples vira <br/>).
 *
 * NÃO interpreta `_` como itálico de propósito: a notação elétrica usa muitos
 * subscritos (T_ALTO, R_rf, P_R1) que não devem virar ênfase.
 */

interface Props {
  children: string;
  className?: string;
}

// ── inline: **negrito**, *itálico*, `código` ────────────────────────────────
const INLINE = /(\*\*[^*]+\*\*|`[^`]+`|\*[^*\s][^*]*\*)/g;

function inline(text: string, keyBase: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let i = 0;
  for (const m of text.matchAll(INLINE)) {
    const idx = m.index ?? 0;
    if (idx > last) out.push(text.slice(last, idx));
    const tok = m[0];
    if (tok.startsWith('**')) {
      out.push(
        <strong key={`${keyBase}-b${i}`} className="font-semibold text-marfim">
          {tok.slice(2, -2)}
        </strong>,
      );
    } else if (tok.startsWith('`')) {
      out.push(
        <code key={`${keyBase}-c${i}`} className="rounded bg-white/10 px-1 py-0.5 font-mono text-[0.85em] text-dourado">
          {tok.slice(1, -1)}
        </code>,
      );
    } else {
      out.push(
        <em key={`${keyBase}-i${i}`} className="italic text-nevoa">
          {tok.slice(1, -1)}
        </em>,
      );
    }
    last = idx + tok.length;
    i++;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

const BULLET = /^\s*[-•*]\s+/;
const ORDERED = /^\s*\d+\.\s+/;
const QUOTE = /^\s*>\s?/;
const HEADING = /^(#{1,6})\s+(.*)$/;

function splitRow(line: string): string[] {
  return line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((c) => c.trim());
}

function isTableSep(line: string): boolean {
  if (!line.includes('|') || !line.includes('-')) return false;
  return splitRow(line).every((c) => /^:?-{2,}:?$/.test(c));
}

const HEADING_CLASS: Record<number, string> = {
  1: 'mt-3 mb-1 text-base font-semibold text-marfim',
  2: 'mt-3 mb-1 text-sm font-semibold text-dourado',
  3: 'mt-3 mb-1 text-sm font-semibold text-dourado',
  4: 'mt-2 mb-1 text-xs font-semibold uppercase tracking-wider text-dourado/80',
  5: 'mt-2 mb-1 text-xs font-semibold text-dourado/80',
  6: 'mt-2 mb-1 text-xs font-semibold text-dourado/80',
};

export default function Markdown({ children, className }: Props) {
  const lines = (children ?? '').replace(/\r/g, '').split('\n');
  const blocks: ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === '') {
      i++;
      continue;
    }

    // título
    const h = HEADING.exec(line);
    if (h) {
      const level = h[1].length;
      blocks.push(
        <p key={`h${key++}`} className={HEADING_CLASS[level]}>
          {inline(h[2], `h${key}`)}
        </p>,
      );
      i++;
      continue;
    }

    // tabela (cabeçalho + separadora)
    if (line.trim().startsWith('|') && i + 1 < lines.length && isTableSep(lines[i + 1])) {
      const header = splitRow(line);
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        rows.push(splitRow(lines[i]));
        i++;
      }
      blocks.push(
        <div key={`t${key++}`} className="my-2 overflow-x-auto">
          <table className="w-full border-collapse text-xs">
            <thead>
              <tr>
                {header.map((c, ci) => (
                  <th key={ci} className="border border-white/15 bg-white/5 px-2 py-1 text-left font-semibold text-marfim">
                    {inline(c, `th${key}-${ci}`)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, ri) => (
                <tr key={ri}>
                  {r.map((c, ci) => (
                    <td key={ci} className="border border-white/10 px-2 py-1 align-top text-nevoa/85">
                      {inline(c, `td${key}-${ri}-${ci}`)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      continue;
    }

    // lista não ordenada
    if (BULLET.test(line)) {
      const items: string[] = [];
      while (i < lines.length && BULLET.test(lines[i])) {
        items.push(lines[i].replace(BULLET, ''));
        i++;
      }
      blocks.push(
        <ul key={`u${key++}`} className="my-1 list-disc space-y-1 pl-5 marker:text-dourado/60">
          {items.map((it, ii) => (
            <li key={ii}>{inline(it, `u${key}-${ii}`)}</li>
          ))}
        </ul>,
      );
      continue;
    }

    // lista ordenada
    if (ORDERED.test(line)) {
      const items: string[] = [];
      while (i < lines.length && ORDERED.test(lines[i])) {
        items.push(lines[i].replace(ORDERED, ''));
        i++;
      }
      blocks.push(
        <ol key={`o${key++}`} className="my-1 list-decimal space-y-1 pl-5 marker:text-dourado/60">
          {items.map((it, ii) => (
            <li key={ii}>{inline(it, `o${key}-${ii}`)}</li>
          ))}
        </ol>,
      );
      continue;
    }

    // citação
    if (QUOTE.test(line)) {
      const qs: string[] = [];
      while (i < lines.length && QUOTE.test(lines[i])) {
        qs.push(lines[i].replace(QUOTE, ''));
        i++;
      }
      blocks.push(
        <blockquote key={`q${key++}`} className="my-2 border-l-2 border-dourado/40 pl-3 italic text-nevoa/75">
          {qs.map((q, qi) => (
            <Fragment key={qi}>
              {inline(q, `q${key}-${qi}`)}
              {qi < qs.length - 1 && <br />}
            </Fragment>
          ))}
        </blockquote>,
      );
      continue;
    }

    // parágrafo (acumula linhas até branco/bloco especial)
    const para: string[] = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !HEADING.test(lines[i]) &&
      !BULLET.test(lines[i]) &&
      !ORDERED.test(lines[i]) &&
      !QUOTE.test(lines[i]) &&
      !lines[i].trim().startsWith('|')
    ) {
      para.push(lines[i]);
      i++;
    }
    blocks.push(
      <p key={`p${key++}`} className="my-1">
        {para.map((ln, li) => (
          <Fragment key={li}>
            {inline(ln, `p${key}-${li}`)}
            {li < para.length - 1 && <br />}
          </Fragment>
        ))}
      </p>,
    );
  }

  return <div className={className}>{blocks}</div>;
}

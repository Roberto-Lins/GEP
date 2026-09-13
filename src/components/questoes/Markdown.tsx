import { Fragment, type ReactNode } from 'react';
import katex from 'katex';
// Utilitário ESM compartilhado também pelo pipeline Markdown/MDX.
// @ts-ignore — o módulo é JavaScript deliberadamente para ser carregado pelo astro.config.mjs.
import { looksLikeMath, normalizeLegacyMath } from '../../utils/math-notation.mjs';

/**
 * Renderizador Markdown minimalista, feito sob medida para enunciados/gabaritos.
 * Além do subconjunto Markdown já usado no banco, aceita notação matemática:
 *   • $...$ para matemática inline;
 *   • $$...$$ para equações em bloco (inclusive multilinha);
 *   • compatibilidade com fórmulas antigas entre crases.
 *
 * NÃO interpreta `_` como itálico de propósito: a notação técnica usa muitos
 * subscritos (T_ALTO, R_rf, P_R1). Em fórmulas, `_` é processado pelo KaTeX.
 */

interface Props {
  children: string;
  className?: string;
}

function mathHtml(expression: string, displayMode: boolean): string {
  return katex.renderToString(expression.trim(), {
    displayMode,
    throwOnError: false,
    strict: 'warn',
    trust: false,
    output: 'htmlAndMathml',
  });
}

function MathToken({ expression, display = false }: { expression: string; display?: boolean }) {
  return (
    <span
      className={display ? 'block max-w-full overflow-x-auto overflow-y-hidden py-1' : 'inline max-w-full'}
      dangerouslySetInnerHTML={{ __html: mathHtml(expression, display) }}
    />
  );
}

// Ordem importa: código vem antes de matemática para não interpretar $ dentro de `...`.
const INLINE = /(`[^`]+`|\$[^$\n]+\$|\*\*[^*]+\*\*|\*[^*\s][^*]*\*)/g;

function inline(text: string, keyBase: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let i = 0;
  for (const m of text.matchAll(INLINE)) {
    const idx = m.index ?? 0;
    if (idx > last) out.push(text.slice(last, idx));
    const tok = m[0];

    if (tok.startsWith('`')) {
      const code = tok.slice(1, -1);
      if (looksLikeMath(code)) {
        out.push(<MathToken key={`${keyBase}-lm${i}`} expression={normalizeLegacyMath(code)} />);
      } else {
        out.push(
          <code key={`${keyBase}-c${i}`} className="rounded bg-white/10 px-1 py-0.5 font-mono text-[0.85em] text-dourado">
            {code}
          </code>,
        );
      }
    } else if (tok.startsWith('$')) {
      out.push(<MathToken key={`${keyBase}-m${i}`} expression={tok.slice(1, -1)} />);
    } else if (tok.startsWith('**')) {
      out.push(
        <strong key={`${keyBase}-b${i}`} className="font-semibold text-marfim">
          {tok.slice(2, -2)}
        </strong>,
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
const DISPLAY_MATH_START = /^\s*\$\$/;

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

function isSpecialBlock(line: string): boolean {
  return (
    line.trim() === '' ||
    HEADING.test(line) ||
    BULLET.test(line) ||
    ORDERED.test(line) ||
    QUOTE.test(line) ||
    line.trim().startsWith('|') ||
    DISPLAY_MATH_START.test(line)
  );
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

    // matemática em bloco: $$...$$ ou bloco multilinha.
    if (DISPLAY_MATH_START.test(line)) {
      const mathLines: string[] = [];
      let current = line.replace(/^\s*\$\$/, '');
      let closed = false;

      if (current.includes('$$')) {
        mathLines.push(current.slice(0, current.indexOf('$$')));
        closed = true;
        i++;
      } else {
        if (current.trim()) mathLines.push(current);
        i++;
        while (i < lines.length) {
          current = lines[i];
          const end = current.indexOf('$$');
          if (end >= 0) {
            mathLines.push(current.slice(0, end));
            closed = true;
            i++;
            break;
          }
          mathLines.push(current);
          i++;
        }
      }

      const expression = mathLines.join('\n').trim();
      if (closed && expression) {
        blocks.push(
          <div key={`dm${key++}`} className="my-3 max-w-full overflow-x-auto overflow-y-hidden text-center">
            <MathToken expression={expression} display />
          </div>,
        );
      } else {
        // Se o delimitador estiver incompleto, preserva o texto em vez de escondê-lo.
        blocks.push(<p key={`dmerr${key++}`} className="my-1">{`$$${mathLines.join('\n')}`}</p>);
      }
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
    while (i < lines.length && !isSpecialBlock(lines[i])) {
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

const SUPERSCRIPT_MAP = new Map([
  ['⁰', '0'], ['¹', '1'], ['²', '2'], ['³', '3'], ['⁴', '4'],
  ['⁵', '5'], ['⁶', '6'], ['⁷', '7'], ['⁸', '8'], ['⁹', '9'],
  ['⁺', '+'], ['⁻', '-'],
]);

const SUBSCRIPT_MAP = new Map([
  ['₀', '0'], ['₁', '1'], ['₂', '2'], ['₃', '3'], ['₄', '4'],
  ['₅', '5'], ['₆', '6'], ['₇', '7'], ['₈', '8'], ['₉', '9'],
]);

const SUPER_RE = /[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻]+/g;
const SUB_RE = /[₀₁₂₃₄₅₆₇₈₉]+/g;

/**
 * Decide se um trecho em `inlineCode` é, na realidade, notação matemática.
 * O objetivo é manter compatibilidade com conteúdo antigo sem converter IDs,
 * nomes de arquivo, códigos de questão ou referências de fonte.
 */
export function looksLikeMath(value) {
  const s = String(value ?? '').trim();
  if (!s || s.length > 280) return false;
  // Template literals, Markdown interno e marcadores editoriais não são fórmulas.
  if (s.includes('${') || s.includes('**') || s.includes('```')) return false;
  if (/^(?:https?:\/\/|\/|\.\/|\.\.\/)/.test(s)) return false;
  if (/\.(?:mdx?|tsx?|jsx?|json|pdf|pptx?|odp|png|jpe?g|svg)$/i.test(s)) return false;
  if (/^SUE\d+(?:\.\d+)*(?:[a-z]\d*)?$/i.test(s)) return false;
  if (/^[A-Z]{1,4}-\d{1,4}$/i.test(s)) return false;
  if (/^M\d{2}$/i.test(s)) return false;
  if (/^[A-ZÀ-Ý0-9]+(?:_[A-ZÀ-Ý0-9]+)+$/u.test(s)) return false;

  const hasRelation = /(?:=|≈|≃|≤|≥|<|>)/.test(s);
  const hasArrow = /(?:⇒|→)/.test(s);
  const hasMathGlyph = /[πλτμΩ°×·÷√∑∆Δ⁰¹²³⁴⁵⁶⁷⁸⁹₀₁₂₃₄₅₆₇₈₉]/.test(s);
  const hasVariableSubscript = /\b[A-Za-z][A-Za-z0-9]*_[A-Za-zÀ-ÿ0-9]+/.test(s);
  const hasOperator = /(?:\^|\/|\*|·|×)/.test(s);
  const looksNumericScientific = /\d\s*[×·]\s*10/.test(s);
  const arrowInsideMath = hasArrow && (hasMathGlyph || hasVariableSubscript || hasOperator);

  // Caminhos editoriais como "P2/Aulas P2/..." não viram uma fração.
  const looksLikePath = !hasRelation && !hasMathGlyph && /[A-Za-zÀ-ÿ0-9]+\/[A-Za-zÀ-ÿ][^=<>]*/.test(s);

  return !looksLikePath && (
    hasRelation || hasMathGlyph || hasVariableSubscript || looksNumericScientific || arrowInsideMath ||
    (hasOperator && /[A-Za-z0-9πλτμΩ]/.test(s))
  );
}

function replaceUnicodePowers(s) {
  return s
    .replace(SUPER_RE, (run) => `^{${[...run].map((c) => SUPERSCRIPT_MAP.get(c) ?? c).join('')}}`)
    .replace(SUB_RE, (run) => `_{${[...run].map((c) => SUBSCRIPT_MAP.get(c) ?? c).join('')}}`);
}

function replaceNamedSubscripts(s) {
  return s.replace(/_([A-Za-zÀ-ÿ]+)(?![A-Za-zÀ-ÿ])/g, (_m, name) =>
    /[^\x00-\x7F]/.test(name) ? `_{\\text{${name}}}` : `_{\\mathrm{${name}}}`,
  );
}

function replaceParenthesizedPowers(s) {
  let saida = '';
  let cursor = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== '^') continue;
    let open = i + 1;
    while (/\s/.test(s[open] ?? '')) open++;
    if (s[open] !== '(') continue;
    const close = findMatchingClose(s, open);
    if (close < 0) continue;

    saida += s.slice(cursor, i);
    saida += `^{${prettySide(s.slice(open + 1, close))}}`;
    cursor = close + 1;
    i = close;
  }

  return cursor === 0 ? s : saida + s.slice(cursor);
}

function findMatchingClose(s, start) {
  const open = s[start];
  const close = open === '(' ? ')' : open === '[' ? ']' : null;
  if (!close) return -1;
  let depth = 0;
  for (let i = start; i < s.length; i++) {
    if (s[i] === open) depth++;
    else if (s[i] === close) {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function findTopLevelSlash(s) {
  let paren = 0;
  let bracket = 0;
  let brace = 0;
  const positions = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '(') paren++;
    else if (c === ')') paren--;
    else if (c === '[') bracket++;
    else if (c === ']') bracket--;
    else if (c === '{') brace++;
    else if (c === '}') brace--;
    else if (c === '/' && paren === 0 && bracket === 0 && brace === 0) positions.push(i);
  }
  return positions.length === 1 ? positions[0] : -1;
}

function ratioParentheses(s) {
  let saida = '';
  let cursor = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== '(') continue;
    const close = findMatchingClose(s, i);
    if (close < 0) continue;
    const inner = s.slice(i + 1, close);
    const slash = findTopLevelSlash(inner);
    if (slash < 0) continue;

    const numerator = inner.slice(0, slash).trim();
    const denominator = inner.slice(slash + 1).trim();
    if (!numerator || !denominator) continue;

    saida += s.slice(cursor, i);
    saida += `\\left(\\frac{${prettySide(numerator)}}{${prettySide(denominator)}}\\right)`;
    cursor = close + 1;
    i = close;
  }

  return cursor === 0 ? s : saida + s.slice(cursor);
}

function leadingPower(s, start) {
  const match = /^\s*\^\{([^{}]+)\}/.exec(s.slice(start));
  if (!match) return null;
  return {
    tex: `^{${prettySide(match[1])}}`,
    end: start + match[0].length,
  };
}

function splitDenominator(rest) {
  const leading = rest.match(/^\s*/)?.[0] ?? '';
  const start = leading.length;
  if (start >= rest.length) return null;

  if (rest[start] === '(' || rest[start] === '[') {
    const close = findMatchingClose(rest, start);
    if (close < 0) return null;
    const power = leadingPower(rest, close + 1);
    const inner = prettySide(rest.slice(start + 1, close));
    const open = rest[start] === '(' ? '\\left(' : '\\left[';
    const end = rest[start] === '(' ? '\\right)' : '\\right]';
    return {
      // O expoente imediatamente após o grupo pertence ao denominador.
      // Ex.: P/(4πR²)² = P/[(4πR²)²], não (P/4πR²)².
      denominator: power ? `${open}${inner}${end}${power.tex}` : inner,
      tail: rest.slice(power?.end ?? close + 1),
    };
  }

  // Divisão e multiplicação têm a mesma precedência e associatividade à esquerda:
  // x^2/r * b * d = (x^2/r) * b * d. Portanto o denominador é só o
  // próximo fator, não tudo o que vem depois da barra.
  const op = rest.slice(start).search(/\s+\\(?:cdot|times)\s+/);
  if (op >= 0) {
    const end = start + op;
    return {
      denominator: rest.slice(start, end).trim(),
      tail: rest.slice(end),
    };
  }

  return { denominator: rest.slice(start).trim(), tail: '' };
}

function prettyPowerGroup(s) {
  const t = s.trim();
  if (!(t.startsWith('[') || t.startsWith('('))) return null;
  const close = findMatchingClose(t, 0);
  if (close <= 0) return null;
  const after = t.slice(close + 1).trim();
  const exponent = /^\^\{(.+)\}$/.exec(after);
  if (!exponent) return null;

  const inner = prettySide(t.slice(1, close));
  const power = prettySide(exponent[1]);
  const left = t[0] === '[' ? '\\left[' : '\\left(';
  const right = t[0] === '[' ? '\\right]' : '\\right)';
  return `${left}${inner}${right}^{${power}}`;
}

function prettySide(side) {
  let s = ratioParentheses(side.trim());

  const poweredGroup = prettyPowerGroup(s);
  if (poweredGroup) return poweredGroup;

  const slash = findTopLevelSlash(s);
  if (slash >= 0) {
    const numerator = s.slice(0, slash).trim();
    const split = splitDenominator(s.slice(slash + 1));
    if (numerator && split?.denominator) {
      s = `\\frac{${numerator}}{${split.denominator}}${split.tail}`;
    }
  }
  return s;
}

function prettyRelationChunk(chunk) {
  // Mantém cadeias como A_t = A_r = A, mas embeleza cada membro separadamente.
  const pieces = chunk.split(/(=|≈|≃|≤|≥|⇒|→)/g);
  return pieces.map((piece, index) => {
    if (index % 2 === 1) {
      if (piece === '⇒') return '\\Longrightarrow';
      if (piece === '→') return '\\to';
      if (piece === '≈') return '\\approx';
      if (piece === '≃') return '\\simeq';
      if (piece === '≤') return '\\le';
      if (piece === '≥') return '\\ge';
      return piece;
    }
    return prettySide(piece);
  }).join(' ');
}

/**
 * Converte a notação linear legada para uma expressão KaTeX equivalente.
 * Não calcula nem altera constantes/valores: só normaliza tipografia.
 */
export function normalizeLegacyMath(value) {
  let s = String(value ?? '').trim();
  if (!s) return s;

  s = replaceUnicodePowers(s);
  s = replaceNamedSubscripts(s);
  s = s
    .replace(/½/g, '\\frac{1}{2}')
    .replace(/⅓/g, '\\frac{1}{3}')
    .replace(/⅔/g, '\\frac{2}{3}')
    .replace(/¼/g, '\\frac{1}{4}')
    .replace(/¾/g, '\\frac{3}{4}');
  s = replaceParenthesizedPowers(s);
  s = s
    .replace(/\^\s*([+\-−]?\d+(?:[.,]\d+)?)/g, '^{$1}')
    .replace(/π/g, '\\pi ')
    .replace(/λ/g, '\\lambda ')
    .replace(/τ/g, '\\tau ')
    .replace(/μ/g, '\\mu ')
    .replace(/µ/g, '\\mu ')
    .replace(/Ω/g, '\\Omega ')
    // Não reconverte o "pi" que acabou de ser emitido por π → \pi.
    .replace(/(?<!\\)\bpi\b/gi, '\\pi ')
    .replace(/√\s*\(([^)]+)\)/g, '\\sqrt{$1}')
    .replace(/√\s*([A-Za-z0-9]+)/g, '\\sqrt{$1}')
    .replace(/·/g, '\\cdot ')
    .replace(/×/g, '\\times ')
    .replace(/÷/g, '\\div ')
    .replace(/(?<!\\)%/g, '\\%')
    .replace(/\*/g, '\\cdot ')
    .replace(/\s+/g, ' ')
    .trim();

  return prettyRelationChunk(s);
}

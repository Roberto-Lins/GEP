import { looksLikeMath, normalizeLegacyMath } from '../utils/math-notation.mjs';

/**
 * Compatibilidade para cursos antigos do GEP.
 *
 * Historicamente, muitas fórmulas foram escritas como `inlineCode`, por exemplo:
 *   `S₁ = P / (4πR²)`
 *
 * O plugin promove apenas trechos reconhecidos como matemática e os marca
 * explicitamente para o rehype-katex. Conteúdo novo deve usar $...$ e $$...$$.
 */
export default function remarkGepMath() {
  return (tree) => {
    walk(tree);
  };
}

function walk(node) {
  if (!node || typeof node !== 'object') return;

  if (Array.isArray(node.children)) {
    for (const child of node.children) {
      if (child?.type === 'inlineCode' && looksLikeMath(child.value)) {
        const value = normalizeLegacyMath(child.value);
        child.type = 'inlineMath';
        child.value = value;
        child.data = {
          hName: 'code',
          hProperties: { className: ['language-math', 'math-inline'] },
          hChildren: [{ type: 'text', value }],
        };
      } else {
        walk(child);
      }
    }
  }
}

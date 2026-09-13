import { looksLikeMath, normalizeLegacyMath } from '../utils/math-notation.mjs';

/**
 * Compatibilidade para cursos antigos do GEP.
 *
 * Historicamente, muitas fórmulas foram escritas como `inlineCode`, por exemplo:
 *   `S₁ = P / (4πR²)`
 *
 * O plugin promove apenas trechos reconhecidos como matemática para `inlineMath`
 * e normaliza a tipografia (frações, potências, subscritos e multiplicação).
 * Conteúdo novo deve usar diretamente $...$ e $$...$$.
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
        child.type = 'inlineMath';
        child.value = normalizeLegacyMath(child.value);
        delete child.data;
      } else {
        walk(child);
      }
    }
  }
}

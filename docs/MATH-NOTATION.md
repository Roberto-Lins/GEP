# Padrão obrigatório de notação matemática — GEP

## Regra

Toda expressão matemática destinada ao aluno deve ser renderizada como matemática, nunca como pseudocódigo linear.

- Inline: `$...$`
- Equação destacada: `$$...$$`
- Renderização: `remark-math` + `rehype-katex` + KaTeX.
- Componentes Astro que recebem uma expressão por prop podem usar `src/components/MathText.astro`.
- Bancos de questões renderizados pelo componente React `Markdown.tsx` aceitam o mesmo padrão `$...$` e `$$...$$`.

## Exemplos

Evitar:

```text
x^2/r * b * d
R_max = [P*G*A/(4*pi)^2*Smin]^(1/4)
```

Preferir:

```md
$\frac{x^2}{r}\,b\,d$

$$
R_{\max}=\sqrt[4]{\frac{PGA}{(4\pi)^2S_{\min}}}
$$
```

## Tipografia

Use recursos matemáticos, não aproximações ASCII:

| Conceito | Padrão |
|---|---|
| fração | `\frac{a}{b}` |
| potência | `x^2`, `x^{10}` |
| índice | `S_{\min}`, `G_t` |
| raiz quadrada | `\sqrt{x}` |
| raiz n-ésima | `\sqrt[n]{x}` |
| multiplicação | `\cdot`, `\times` quando semanticamente adequado |
| parênteses escaláveis | `\left( ... \right)` |
| símbolos | `\pi`, `\lambda`, `\tau`, etc. |
| unidades | preferencialmente fora da expressão ou com `\mathrm{}` |

## Fidelidade acadêmica

Converter a forma gráfica **não autoriza alterar a fórmula**. Antes de corrigir uma expressão:

1. localizar a fórmula na fonte autorizada;
2. registrar slide/página quando disponível;
3. comparar símbolos, expoentes, denominadores, constantes e hipóteses;
4. preservar conflitos entre fontes em vez de reconciliá-los silenciosamente;
5. não remover fórmulas existentes;
6. só acrescentar fórmula nova quando sustentada pelas fontes autorizadas.

Slides/PDF/PPTX/ODP do mesmo deck são um único testemunho, não confirmações independentes.

## Compatibilidade com conteúdo antigo

`src/plugins/remark-gep-math.mjs` reconhece fórmulas históricas que foram escritas entre crases e as promove para matemática tipográfica. Isso existe para não deixar conteúdo publicado feio enquanto os arquivos são migrados gradualmente.

A compatibilidade não muda números nem resolve contas. Conteúdo novo deve usar LaTeX desde a origem.

## Validação

Rode:

```bash
npm run validate-math
npm run validate-content
npm run build
```

O validador matemático aponta notação legada e delimitadores incompletos. Uma alteração acadêmica só está pronta depois da conferência nas fontes e da inspeção da página renderizada em desktop e mobile.

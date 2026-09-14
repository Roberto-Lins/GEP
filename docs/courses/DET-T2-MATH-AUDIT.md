# DET-T2 — auditoria de fórmulas matemáticas

## Escopo

Auditoria iniciada para a migração de notação matemática do curso DET-T2. A mudança tipográfica não autoriza alterar fórmulas sem conferência nas fontes autorizadas.

Fontes conferidas nesta etapa:

- `SUE6.11-radar_de_pulso-equação_radar.pdf`, composição visual dos slides, especialmente a página/slide exibida como página 16 do PDF.
- `apostila_DET_2022.pdf`, Capítulo I, Seção 8, páginas impressas 1-77 e 1-78 (páginas físicas 88 e 89 do PDF).

## Fórmulas confirmadas

Apostila 1-77 confirma:

```math
S_1=\frac{P}{4\pi R^2}
```

```math
S_2=\frac{P G_t}{4\pi R^2}
```

```math
P_a=A_aS_2=\frac{P G_t A_a}{4\pi R^2}
```

```math
S_3=\frac{P G_t A_a}{(4\pi R^2)^2}
```

Apostila 1-78 confirma:

```math
A_t=A_r=A,\qquad G_t=G_r=G
```

```math
P_r=\frac{PGA_aA}{(4\pi R^2)^2}
```

```math
G=\frac{4\pi A}{\lambda^2}
```

```math
P_r=\frac{PG^2\lambda^2A_a}{(4\pi)^3R^4}
```

```math
S_{\min}=\frac{PGA_aA}{(4\pi R_{\max}^2)^2}
```

```math
R_{\max}=\left[\frac{PGA_aA}{(4\pi)^2S_{\min}}\right]^{1/4}
```

Essas são as formas adotadas no módulo M06 e no Caderno de Revisão v2. As fórmulas principais foram migradas para LaTeX explícito para que agrupamento de denominador e expoentes não dependa do conversor de notação legada.

## Correção de renderização — 2026-09-14

A auditoria encontrou dois defeitos de apresentação capazes de mudar a leitura matemática:

| Ponto | Fonte autorizada | Apresentação anterior | Forma final |
|---|---|---|---|
| Densidade reirradiada pelo alvo | `SUE6.11`, p. 15; apostila 1-77 | o expoente podia ser aplicado visualmente à fração inteira | `S_3=P_a/(4\pi R^2)=PG_tA_a/(4\pi R^2)^2` |
| Potência recebida pelo radar | `SUE6.11`, p. 16; apostila 1-78 | o expoente podia aparecer fora do denominador | `P_r=PGA_aA/(4\pi R^2)^2=PGA_aA/[(4\pi)^2R^4]` |
| Resumo do PDF | apostila 1-77 | `S_1=PG/(4\pi R^2)`, que corresponde a `S_2` | `S_1=P/(4\pi R^2)` e `S_2=PG/(4\pi R^2)` em linhas separadas |
| Alcance sem ambiguidade | apostila 1-13 | `c/2\cdot FRP`, visualmente ambíguo | `c/(2\cdot FRP)` |

O conversor legado também passou a manter potências de grupos no denominador, a não duplicar comandos `\pi` e a ignorar marcadores editoriais/caminhos que não são fórmulas. O teste de regressão fixa essas quatro condições.

## Conflito de fonte preservado — forma alternativa de `P_r`

Há um conflito gráfico real entre as duas fontes:

- **Slide SUE6.11, página 16 do PDF:** a forma alternativa aparece visualmente como
  `P_r = P G² λ² A_a / (4πR²)³`.
- **Apostila EN-114, p. 1-78:** a forma correspondente aparece como
  `P_r = P G² λ² A_a / [(4π)³ R⁴]`.

As duas expressões **não são equivalentes**: a primeira contém dependência em `R⁶`, enquanto a segunda mantém a dependência em `R⁴` da equação radar apresentada imediatamente antes.

### Dedução sustentada

A própria cadeia algébrica mostrada nas fontes parte de

```math
P_r=\frac{PGA_aA}{(4\pi R^2)^2}
```

e de

```math
A=\frac{G\lambda^2}{4\pi}.
```

Substituindo a segunda na primeira, sem introduzir hipótese nova, resulta

```math
P_r=\frac{PG^2\lambda^2A_a}{(4\pi)^3R^4},
```

que coincide com a **apostila p. 1-78** e com a dependência em quarta potência usada nas demais fórmulas de alcance.

### Decisão de conteúdo

- O curso deve manter a forma da apostila com `R⁴` como fórmula operacional.
- O slide não deve ser apagado nem tratado como uma confirmação independente da apostila.
- Quando esse conflito for mencionado ao aluno, deve ser identificado como divergência entre **SUE6.11 p. 16** e **apostila EN-114 p. 1-78**, não como uma correção silenciosa.

## Regra para a continuação da auditoria

Para os demais módulos de DET-T2, cada fórmula deve ser conferida contra o deck correspondente e, quando houver cobertura na apostila, contra a seção pertinente. PDF/ODP/PPTX do mesmo deck contam como o mesmo testemunho. A migração tipográfica não remove fórmulas nem altera números, hipóteses ou unidades.

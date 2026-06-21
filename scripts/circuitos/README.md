# Circuitos do Detecção — fluxo híbrido (print + gerador)

Os esquemáticos do curso **Detecção** eram SVGs desenhados à mão (coordenada por
coordenada). Em circuitos simples funcionava; nos complexos (limitador, buck, base de
tempo) virava bagunça: fios que não encontram, símbolos apertados, rótulos sobrepostos.

Como as questões renderizam a figura com um `<img>` simples, **podemos escolher a melhor
representação por figura** — não estamos presos a SVG. Adotamos um fluxo **híbrido**:

| Caso | Método | Por quê |
|------|--------|---------|
| A figura **já existe** nos slides/Boylestad e é topológica (números no enunciado) | **Print do original** | Fidelíssimo à prova, custo mínimo |
| A figura precisa de **números próprios** ou não existe limpa na fonte | **Gerador declarativo** (SchemDraw) | Elimina coordenada na mão; símbolos padrão |

Os dois caminhos terminam no **mesmo** passo de tema (`tema.py`), então prints e circuitos
gerados ficam idênticos: fundo naval `#0B1220`, traço marfim `#F7F3EA`, moldura e legenda
no estilo do site.

## Setup

```bash
python3 -m venv .venv
.venv/bin/pip install -r scripts/circuitos/requirements.txt
# rasterização usa google-chrome headless (já presente no ambiente)
```

## Caminho A — print do original

```bash
# 1) extrair a figura embutida do slide (.pptx é um zip)
unzip -j "FontesReguladas1.pptx" "ppt/media/image21.png" -d /tmp/fig

# 2) re-tematizar para a paleta naval + moldura
.venv/bin/python scripts/circuitos/tema.py /tmp/fig/image21.png \
  public/imagens/cursos/det/q-limitador-corrente.png \
  --title "Limitador de corrente (Q1, RSC, Q2)" \
  --caption "Q2 conduz quando V(RSC) ≈ 0,7 V  →  I_curto ≈ 0,7 / RSC"
```

`tema.py` detecta sozinho se o original é claro-no-escuro ou escuro-no-claro, recorta o
branco em volta e recolore para o tema (anti-aliasing preservado via `Image.composite`).

## Caminho B — gerador (circuito novo / números próprios)

```bash
# 1) descrever o circuito em código (ver gen_base_tempo.py) → SVG
.venv/bin/python scripts/circuitos/gen_base_tempo.py /tmp/bt.svg

# 2) rasterizar o SVG (fundo branco) com chrome headless
printf '<!doctype html><body style="margin:0;background:#fff">\
<img src="file:///tmp/bt.svg" style="width:1300px;display:block"></body>' > /tmp/bt.html
google-chrome --headless --no-sandbox --hide-scrollbars --window-size=1380,1250 \
  --screenshot=/tmp/bt.png "file:///tmp/bt.html"

# 3) mesmo passo de tema
.venv/bin/python scripts/circuitos/tema.py /tmp/bt.png \
  public/imagens/cursos/det/13-base-tempo-circuito.png \
  --title "Base de tempo — fonte de corrente PNP + UJT" \
  --caption "I=(VCC-Ve)/Re=0,5mA · VP=η·VCC+0,7=10,3V · C=I·T/ΔV"
```

`gen_base_tempo.py` mostra o ponto-chave do gerador: símbolos que o SchemDraw não tem
(ex.: **UJT**) são desenhados **uma vez** como `Element` reutilizável. Daí em diante, qualquer
circuito é só compor primitivas — nunca mais coordenada de fio na mão.

## Por que não Falstad/iframe?

O simulador (CircuitJS/Falstad) é ótimo como link opcional "abrir no simulador", mas como
base ele exige runtime/iframe externo e foge do projeto 100% estático/offline. O gerador
declarativo dá símbolos padrão **e** mantém a saída como asset estático no tema do site.

## Pendências

- Produtizar o tema em **vetor** (SchemDraw desenhando direto em marfim + wrapper SVG navy),
  evitando a rasterização por chrome e mantendo SVG nítido em qualquer zoom.
- Migrar os demais circuitos hand-coded (lista em `git`/`public/imagens/cursos/det/*.svg`).

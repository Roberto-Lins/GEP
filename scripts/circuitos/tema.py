#!/usr/bin/env python3
"""Re-tematiza um esquemático (print do original OU raster de um SVG gerado) para a
paleta naval da Bússola e o emoldura no estilo dos SVGs do curso.

Uso:
    python tema.py <entrada.(png|jpg)> <saida.png> --title "..." --caption "..." [--width 1300]

Detecta sozinho a orientação (claro-no-escuro vs. escuro-no-claro), recorta a margem em
branco e recolore com anti-aliasing preservado (Image.composite). Ver README.md.
"""
import argparse
from PIL import Image, ImageOps, ImageDraw, ImageFont

NAVY = (11, 18, 32)      # --azul-naval  #0B1220
INK = (247, 243, 234)    # --marfim      #F7F3EA
BORDER = (30, 58, 95)    # --azul-aco    #1E3A5F
TITLE = (203, 213, 225)  # --cinza-texto #CBD5E1
CAP = (214, 168, 79)     # --dourado     #D6A84F

_FONTS = "/usr/share/fonts/truetype/dejavu/DejaVuSans%s.ttf"
_font = lambda s, mono=False: ImageFont.truetype(
    _FONTS % ("Mono" if mono else ""), s)


def tema(src, out, title="", caption="", target_w=1300):
    im = ImageOps.autocontrast(Image.open(src).convert("L"), cutoff=1)
    light_on_dark = (sum(im.get_flattened_data()) / (im.width * im.height)) < 128
    ink = im if light_on_dark else ImageOps.invert(im)   # 255 = tinta
    if not light_on_dark:  # realça tons médios (limpa ruído de JPEG)
        ink = ink.point(lambda p: 0 if p < 55 else (255 if p > 165 else int((p - 55) * 255 / 110)))

    bb = ink.point(lambda p: 255 if p > 45 else 0).getbbox()
    if bb:
        m = 12
        bb = (max(0, bb[0] - m), max(0, bb[1] - m),
              min(ink.width, bb[2] + m), min(ink.height, bb[3] + m))
        ink = ink.crop(bb)
    if ink.width < target_w:
        h = round(ink.height * target_w / ink.width)
        ink = ink.resize((target_w, h), Image.LANCZOS)

    inner = Image.composite(Image.new("RGB", ink.size, INK),
                            Image.new("RGB", ink.size, NAVY), ink)
    pad, th = 30, (46 if title else 30)
    ch = 40 if caption else 30
    W, H = inner.width + 2 * pad, inner.height + th + ch
    card = Image.new("RGB", (W, H), NAVY)
    d = ImageDraw.Draw(card)
    d.rounded_rectangle([1, 1, W - 2, H - 2], radius=16, outline=BORDER, width=2)
    card.paste(inner, (pad, th))
    if title:
        d.text((pad, 16), title, font=_font(20), fill=TITLE)
    if caption:
        d.text((pad, H - ch + 6), caption, font=_font(16, mono=True), fill=CAP)
    card.save(out)
    print("ok", out, card.size)


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("src")
    ap.add_argument("out")
    ap.add_argument("--title", default="")
    ap.add_argument("--caption", default="")
    ap.add_argument("--width", type=int, default=1300)
    a = ap.parse_args()
    tema(a.src, a.out, a.title, a.caption, a.width)

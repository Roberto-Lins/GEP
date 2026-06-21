#!/usr/bin/env python3
"""Gerador de exemplo (caminho B do README): base de tempo com fonte de corrente PNP + UJT.

Demonstra o ponto central do gerador: o símbolo que o SchemDraw não tem — o **UJT** — é
desenhado UMA vez como Element reutilizável; o resto é só compor primitivas (sem coordenada
de fio na mão). Números batem com a 3ª questão da SOPA PP1 2021 (8,1k/18k, Re=6k, η=0,8).

Uso:  python gen_base_tempo.py <saida.svg>
Depois: rasterizar com chrome e passar por tema.py (ver README.md).
"""
import sys
import schemdraw
import schemdraw.elements as e
from schemdraw.segments import Segment, SegmentCircle
from schemdraw.elements import Element


class UJT(Element):
    """Transistor de unijunção — barra (B1/B2) + emissor com seta para a barra."""
    def __init__(self, *d, **k):
        super().__init__(*d, **k)
        self.segments.append(SegmentCircle((0.12, 0), 0.62))
        self.segments.append(Segment([(0.26, -0.46), (0.26, 0.46)], lw=4))   # barra
        self.segments.append(Segment([(0.26, 0.46), (0.26, 0.95)]))          # lead B2
        self.segments.append(Segment([(0.26, -0.46), (0.26, -0.95)]))        # lead B1
        self.segments.append(Segment([(-0.95, 0), (-0.02, 0)]))              # emissor
        self.segments.append(Segment([(-0.36, 0), (0.26, 0.21)], arrow='->',
                                      arrowwidth=0.24, arrowlength=0.30))     # seta -> barra
        self.anchors['emitter'] = (-0.95, 0)
        self.anchors['b2'] = (0.26, 0.95)
        self.anchors['b1'] = (0.26, -0.95)


def build():
    d = schemdraw.Drawing()
    d.config(unit=2.5, fontsize=14, lw=2.2, color='black')
    RAIL = 6
    d += e.Line().at((-1, RAIL)).to((9.2, RAIL))
    d += e.Dot(open=True).at((-1, RAIL)).label('+12 V', loc='left')
    # divisor de base
    d += e.Resistor().at((0, RAIL)).to((0, 3)).label('8,1 k')
    d += e.Resistor().at((0, 3)).to((0, 0)).label('18 k')
    d += e.Dot().at((0, 3))
    d += e.Ground().at((0, 0))
    # fonte de corrente PNP (base=esq, emissor=cima, coletor=baixo)
    d += e.Line().at((0, 3)).to((2, 3))
    Q = e.BjtPnp(circle=True).at((2, 3)).anchor('base').label('Q', loc='left', ofst=(-.1, .35))
    d += Q
    d += e.Resistor().at(Q.emitter).to((Q.emitter[0], RAIL)).label('Re\n6 k', loc='top', ofst=(.05, 0))
    d += e.Line().at(Q.collector).to((Q.collector[0], 0.6))
    P = (Q.collector[0], 0.6)
    d += e.Dot().at(P)
    d += e.Line().at((Q.collector[0], 1.7)).right().length(0.05).label('I = 0,5 mA', loc='right', ofst=(.55, 0))
    # capacitor
    d += e.Capacitor().at(P).to((P[0], -1.4)).label('C', loc='left', ofst=(.1, 0))
    d += e.Ground().at((P[0], -1.4))
    # UJT
    d += e.Line().at(P).to((5.6, 0.6))
    U = UJT().at((5.6, 0.6)).anchor('emitter').label('UJT', loc='top', ofst=(.15, .4))
    d += U
    d += e.Line().at(U.b2).to((U.b2[0], RAIL))
    d += e.Gap().at(U.b2).label('η = 0,8', loc='right', ofst=(.25, -.9))
    d += e.Resistor().at(U.b1).to((U.b1[0], -1.4)).label('RB1', loc='right', ofst=(.1, 0))
    d += e.Ground().at((U.b1[0], -1.4))
    d += e.Dot().at(U.b1)
    d += e.Line().at(U.b1).right().length(1.1)
    d += e.Dot(open=True).label('Vo', loc='right')
    return d


if __name__ == "__main__":
    out = sys.argv[1] if len(sys.argv) > 1 else "base-tempo.svg"
    build().save(out)
    print("svg salvo:", out)

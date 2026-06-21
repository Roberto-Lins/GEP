import os
import schemdraw
import schemdraw.elements as e
from schemdraw.segments import Segment, SegmentCircle
from schemdraw.elements import Element

OUT = "/tmp/det-gen"
os.makedirs(OUT, exist_ok=True)
CFG = dict(fontsize=14, lw=2.2, color='black')


class UJT(Element):
    def __init__(self, *d, **k):
        super().__init__(*d, **k)
        self.segments.append(SegmentCircle((0.12, 0), 0.62))
        self.segments.append(Segment([(0.26, -0.46), (0.26, 0.46)], lw=4))
        self.segments.append(Segment([(0.26, 0.46), (0.26, 0.95)]))
        self.segments.append(Segment([(0.26, -0.46), (0.26, -0.95)]))
        self.segments.append(Segment([(-0.95, 0), (-0.02, 0)]))
        self.segments.append(Segment([(-0.36, 0), (0.26, 0.21)], arrow='->', arrowwidth=0.24, arrowlength=0.30))
        self.anchors['emitter'] = (-0.95, 0)
        self.anchors['b2'] = (0.26, 0.95)
        self.anchors['b1'] = (0.26, -0.95)


def save(d, slug):
    d.save(f"{OUT}/{slug}.svg")
    print("svg", slug)


# 1) divisor de tensão 12V / 4k / 8k
def divisor():
    d = schemdraw.Drawing(); d.config(unit=2.6, **CFG)
    d += e.Dot(open=True).label('+12 V', loc='left')
    d += e.Resistor().down().label('4 k')
    d += e.Dot().label('Vnó', loc='right')
    d += e.Line().right().length(2)
    d += e.Dot(open=True).label('Vnó = ?', loc='right')
    d.pop()
    d += e.Resistor().down().at((0, -2.6)).to((0, -5.2)).label('8 k')
    d += e.Ground()
    save(d, 'q-divisor-12-4k-8k')


# 2) fonte de corrente carregando capacitor
def fonte_cap():
    d = schemdraw.Drawing(); d.config(unit=2.6, **CFG)
    d += e.Dot(open=True).label('+V', loc='left')
    d += e.SourceI().down().label('I = 0,5 mA')
    d += (P := e.Dot())
    d += e.Line().right().length(2)
    d += e.Dot(open=True).label('VC', loc='right')
    d.pop()
    d += e.Capacitor().down().at(P.center).label('C = 1 µF', loc='left')
    d += e.Ground()
    save(d, 'q-fonte-corrente-cap')


# 3) símbolos SCR / DIAC / TRIAC
def simbolos():
    d = schemdraw.Drawing(); d.config(unit=2.4, **CFG)
    d += e.SCR().up().at((0, 0)).label('SCR', loc='right', ofst=(.3, 0))
    d += e.Diac().up().at((4, 0)).label('DIAC', loc='right', ofst=(.3, 0))
    d += e.Triac().up().at((8, 0)).label('TRIAC', loc='right', ofst=(.3, 0))
    save(d, '11-tiristores-simbolos')


# 4) oscilador de relaxação com DIAC (+50V, 10k, 10nF, VBR=30V)
def diac_osc():
    d = schemdraw.Drawing(); d.config(unit=2.6, **CFG)
    d += e.Dot(open=True).label('+50 V', loc='left')
    d += e.Resistor().right().label('10 k')
    d += (P := e.Dot())
    d += e.Line().right().length(1.4)
    d += e.Dot(open=True).label('Vo', loc='right')
    d += e.Capacitor().down().at(P.center).label('10 nF', loc='right')
    d += (G := e.Dot())
    d += e.Line().left().length(2.0)
    d += e.Diac().up().toy(P.center[1]).label('DIAC\nVBR=30 V', loc='left')
    d += e.Line().at(G.center).right().length(2.0)
    d += e.Ground().at(G.center)
    save(d, '11-diac-oscilador')


# 5) oscilador de relaxação com UJT (R carrega C)
def ujt_osc():
    d = schemdraw.Drawing(); d.config(unit=2.6, **CFG)
    RAIL = 6
    d += e.Line().at((-1, RAIL)).to((6.5, RAIL))
    d += e.Dot(open=True).at((-1, RAIL)).label('+VCC', loc='left')
    d += e.Resistor().at((0, RAIL)).to((0, 2.2)).label('R')
    d += e.Dot().at((0, 2.2))
    d += e.Capacitor().at((0, 2.2)).to((0, -0.4)).label('C', loc='left')
    d += e.Ground().at((0, -0.4))
    d += e.Line().at((0, 2.2)).to((3.2, 2.2))
    d += (U := UJT().at((3.2, 2.2)).anchor('emitter').label('UJT', loc='top', ofst=(.15, .4)))
    d += e.Line().at(U.b2).to((U.b2[0], RAIL))
    d += e.Resistor().at(U.b1).to((U.b1[0], -0.4)).label('RB1', loc='right')
    d += e.Ground().at((U.b1[0], -0.4))
    d += e.Dot().at(U.b1)
    d += e.Line().at(U.b1).right().length(1.0)
    d += e.Dot(open=True).label('Vo', loc='right')
    save(d, '12-ujt-circuito')


# 6) 555 monoestável (RA=7,5k, C=0,1µF)
def mono555():
    d = schemdraw.Drawing(); d.config(unit=2.4, **CFG)
    ic = e.Ic555().label('555', 'center')
    d += ic
    # topo: Vcc e RST -> +VCC
    d += e.Line().at(ic.Vcc).up().length(0.5)
    d += (top := e.Dot())
    d += e.Line().at(ic.RST).up().toy(top.center[1])
    d += e.Line().at(ic.RST).up().length(0.5)
    d += e.Vdd().at((ic.Vcc[0], top.center[1])).label('+VCC')
    # RA do Vcc até DIS/THR
    d += e.Line().at(ic.DIS).left().length(1.0)
    d += (nd := e.Dot())
    d += e.Line().at(ic.THR).left().tox(nd.center[0])
    d += e.Resistor().at(nd.center).up().toy(top.center[1]).label('RA\n7,5 k', loc='top')
    d += e.Line().at((nd.center[0], top.center[1])).right().tox(ic.Vcc[0])
    # C de THR/DIS ao terra
    d += e.Capacitor().at(nd.center).down().length(2).label('C\n0,1 µF', loc='left')
    d += e.Ground()
    # trigger
    d += e.Line().at(ic.TRG).left().length(1.4)
    d += e.Dot(open=True).label('disparo', loc='left')
    # saída
    d += e.Line().at(ic.OUT).right().length(1.2)
    d += e.Dot(open=True).label('Vo', loc='right')
    # GND
    d += e.Line().at(ic.GND).down().length(0.5)
    d += e.Ground()
    save(d, 'q-555-monoestavel')


# 7) dois 555 (monoestável habilita astável)
def dois555():
    d = schemdraw.Drawing(); d.config(unit=2.2, **CFG)
    ic1 = e.Ic555().at((0, 0)).label('555 #1 — monoestável', loc='bottom', ofst=(0, .7))
    d += ic1
    ic2 = e.Ic555().at((8, 0)).label('555 #2 — astável', loc='bottom', ofst=(0, .7))
    d += ic2
    # disparo -> TRG1 ; saída <- OUT2
    d += e.Line().at(ic1.TRG).left().length(1.3)
    d += e.Dot(open=True).label('disparo', loc='left')
    d += e.Line().at(ic2.OUT).right().length(1.3)
    d += e.Dot(open=True).label('saída', loc='right')
    # OUT1 -> TRG2 (habilita), L explícito por baixo
    o = ic1.OUT; t = ic2.TRG; ylow = min(o[1], t[1]) - 1.4
    d += e.Line().at(o).to((o[0] + 0.7, o[1]))
    d += e.Line().to((o[0] + 0.7, ylow)).label('habilita', loc='bottom', ofst=(0, .2))
    d += e.Line().to((t[0] - 0.7, ylow))
    d += e.Line().to((t[0] - 0.7, t[1]))
    d += e.Line().to(t)
    # alimentação explícita
    for ic in (ic1, ic2):
        d += e.Vdd().at((ic.Vcc[0], ic.Vcc[1] + 0.5))
        d += e.Line().at(ic.Vcc).to((ic.Vcc[0], ic.Vcc[1] + 0.5))
        d += e.Line().at(ic.GND).to((ic.GND[0], ic.GND[1] - 0.5))
        d += e.Ground().at((ic.GND[0], ic.GND[1] - 0.5))
    save(d, 'q-dois-555')


# 8) regulador série × paralelo (comparação)
def serie_paralelo():
    d = schemdraw.Drawing(); d.config(unit=2.4, **CFG)
    # SÉRIE
    d += e.Dot(open=True).at((0, 0)).label('VI', loc='left')
    d += (Q := e.BjtNpn(circle=True).at((1.6, -0.4)).anchor('collector').label('SÉRIE', loc='top', ofst=(0, .8)))
    d += e.Line().at((0, 0)).to(Q.collector)
    d += e.Resistor().at(Q.base).left().length(1.2).label('controle', loc='bottom')
    d += e.Line().at(Q.emitter).down().length(1.0)
    d += (vo := e.Dot().label('VO', loc='right'))
    d += e.Line().at(vo.center).right().length(0.8)
    d += e.ResistorVar().down().label('RL')
    d += e.Ground()
    # PARALELO
    x0 = 6
    d += e.Dot(open=True).at((x0, 0)).label('VI', loc='left')
    d += e.Resistor().at((x0, 0)).right().label('R')
    d += (n2 := e.Dot().label('VO', loc='top'))
    d += e.Line().right().length(1.0)
    d += e.ResistorVar().down().label('RL')
    d += (g2 := e.Dot())
    d += e.Line().at(n2.center).down().length(0.6)
    d += (Q2 := e.BjtNpn(circle=True).anchor('collector').label('PARALELO', loc='top', ofst=(0, .8)))
    d += e.Resistor().at(Q2.base).left().length(1.0).label('controle', loc='bottom')
    d += e.Line().at(Q2.emitter).tox(g2.center[0]).to(g2.center)
    d += e.Ground().at(g2.center)
    save(d, '03-serie-paralelo')


for fn in (divisor, fonte_cap, simbolos, diac_osc, ujt_osc, mono555, dois555):
    try:
        fn()
    except Exception as ex:
        import traceback
        print("ERR", fn.__name__, ex)
        traceback.print_exc()

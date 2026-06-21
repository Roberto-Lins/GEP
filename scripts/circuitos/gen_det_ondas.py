import os
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch

os.makedirs('/tmp/det-wave', exist_ok=True)
NAVY='#0B1220'; INK='#F7F3EA'; GOLD='#D6A84F'; GREY='#CBD5E1'; GREEN='#22C55E'; RED='#EF4444'; AXIS='#94A3B8'
plt.rcParams.update({'font.family':'DejaVu Sans','text.color':INK,'axes.labelcolor':GREY,
 'xtick.color':GREY,'ytick.color':GREY,'figure.facecolor':NAVY,'axes.facecolor':NAVY,'savefig.facecolor':NAVY})

def card(title, caption, figsize=(7,3.4)):
    fig,ax=plt.subplots(figsize=figsize,dpi=200)
    fig.subplots_adjust(left=0.09,right=0.96,top=0.82,bottom=0.18)
    fig.add_artist(FancyBboxPatch((0.005,0.005),0.99,0.99,boxstyle='round,pad=0,rounding_size=0.018',
        transform=fig.transFigure,facecolor='none',edgecolor='#1E3A5F',lw=1.6))
    fig.text(0.035,0.93,title,color=GREY,fontsize=11.5,ha='left',va='top')
    if caption: fig.text(0.035,0.055,caption,color=GOLD,fontsize=8,family='monospace',ha='left',va='bottom')
    for s in ('top','right'): ax.spines[s].set_visible(False)
    ax.spines['left'].set_color(AXIS); ax.spines['bottom'].set_color(AXIS)
    ax.tick_params(length=0); ax.set_xticks([]); ax.set_yticks([])
    return fig,ax

def axis_arrows(ax,xlabel='t',ylabel='V'):
    ax.set_xlabel(xlabel,color=GREY,loc='right'); ax.set_ylabel(ylabel,color=GREY,loc='top',rotation=0)

def save(fig,slug): fig.savefig(f'/tmp/det-wave/{slug}.png'); plt.close(fig)

# 01 carga do capacitor: exponencial (RC) vs linear (fonte de corrente)
def carga_cap():
    fig,ax=card('Carga do capacitor — dois modelos','exponencial (R) · linear (fonte de corrente: dV/dt = I/C)')
    t=np.linspace(0,5,400); Vf=10
    ax.plot(t,Vf*(1-np.exp(-t/1.1)),color=GOLD,lw=2.4,label='por resistor (RC) — exponencial')
    ax.plot(t,np.clip(Vf*t/3.2,0,Vf),color=GREEN,lw=2.4,label='por fonte de corrente — linear')
    ax.axhline(Vf,ls=':',color=AXIS,lw=1); ax.text(5,Vf+0.4,'V',color=GREY,fontsize=9)
    ax.set_xlim(0,5.2); ax.set_ylim(0,12); axis_arrows(ax)
    ax.legend(loc='lower right',facecolor=NAVY,edgecolor='#1E3A5F',labelcolor=INK,fontsize=8)
    save(fig,'01-carga-capacitor')

# 05 PWM
def pwm():
    fig,ax=card('PWM — o tempo ligado define a média','D = ton/T   ·   VOUT = D·VIN')
    T=2.0; D=0.6; VIN=10; t=np.linspace(0,6,1200)
    y=np.where((t%T)<D*T,VIN,0.0)
    ax.plot(t,y,color=INK,lw=2.2)
    ax.axhline(D*VIN,color=GOLD,lw=2,ls='--'); ax.text(6.05,D*VIN,'média = D·VIN',color=GOLD,fontsize=8,va='center')
    ax.text(0.05,VIN+0.5,'VIN',color=GREY,fontsize=9)
    ax.annotate('',xy=(D*T,VIN+1.4),xytext=(0,VIN+1.4),arrowprops=dict(arrowstyle='<->',color=AXIS))
    ax.text(D*T/2,VIN+1.7,'ton',color=GREY,fontsize=8,ha='center')
    ax.annotate('',xy=(T,-1.6),xytext=(0,-1.6),arrowprops=dict(arrowstyle='<->',color=AXIS))
    ax.text(T/2,-2.4,'T',color=GREY,fontsize=8,ha='center')
    ax.set_xlim(0,6.4); ax.set_ylim(-3,VIN+2.6); axis_arrows(ax)
    save(fig,'05-pwm')

# 06 limitador (ceifador)
def limitador():
    fig,ax=card('Entrada × saída do limitador','ceifa acima de VDC + 0,7 V')
    t=np.linspace(0,4*np.pi,600); vi=8*np.sin(t); clip=3.5
    ax.plot(t,vi,color=AXIS,lw=1.8,ls='--',label='Vi (entrada)')
    ax.plot(t,np.minimum(vi,clip),color=GOLD,lw=2.6,label='Vo (ceifada)')
    ax.axhline(clip,ls=':',color=GREEN,lw=1.2); ax.text(4*np.pi,clip+0.3,'VDC + 0,7 V',color=GREEN,fontsize=8,ha='right')
    ax.set_xlim(0,4*np.pi); ax.set_ylim(-9,9); axis_arrows(ax)
    ax.legend(loc='lower right',facecolor=NAVY,edgecolor='#1E3A5F',labelcolor=INK,fontsize=8)
    save(fig,'06-limitador-ondas')

# 07 grampeador positivo
def grampeador():
    fig,ax=card('Grampeamento positivo — a onda sobe','Vi (−Vm…+Vm)  →  Vo (0…+2Vm)')
    t=np.linspace(0,4*np.pi,600); Vm=5
    ax.plot(t,Vm*np.sin(t),color=AXIS,lw=1.8,ls='--',label='Vi (−Vm a +Vm)')
    ax.plot(t,Vm*np.sin(t)+Vm,color=GOLD,lw=2.6,label='Vo (0 a +2Vm)')
    ax.axhline(0,color=AXIS,lw=1); ax.axhline(2*Vm,ls=':',color=GREEN,lw=1)
    ax.text(0.1,2*Vm+0.4,'+2Vm',color=GREEN,fontsize=8); ax.text(0.1,-Vm-0.6,'−Vm',color=AXIS,fontsize=8)
    ax.set_xlim(0,4*np.pi); ax.set_ylim(-Vm-1.5,2*Vm+1.5); axis_arrows(ax)
    ax.legend(loc='upper right',facecolor=NAVY,edgecolor='#1E3A5F',labelcolor=INK,fontsize=8)
    save(fig,'07-grampeador-ondas')

# 08 comparador
def comparador():
    fig,ax=card('Entrada × saída do comparador','satura ao cruzar a referência Vref')
    t=np.linspace(0,4*np.pi,800); vi=6*np.sin(t); vref=2.0
    ax.plot(t,vi,color=AXIS,lw=1.8,ls='--',label='Vi')
    ax.axhline(vref,color=GREEN,lw=1.4,ls=':'); ax.text(4*np.pi,vref+0.3,'Vref',color=GREEN,fontsize=8,ha='right')
    vo=np.where(vi>vref,7,-7.0)
    ax.plot(t,vo,color=GOLD,lw=2.6,label='Vo (±sat)')
    ax.text(0.1,7.3,'+VCC',color=GREY,fontsize=8); ax.text(0.1,-8.2,'−VEE',color=GREY,fontsize=8)
    ax.set_xlim(0,4*np.pi); ax.set_ylim(-9,9); axis_arrows(ax)
    ax.legend(loc='lower right',facecolor=NAVY,edgecolor='#1E3A5F',labelcolor=INK,fontsize=8)
    save(fig,'08-comparador-ondas')

# 09 555 astável: VC e Vo
def a555():
    fig,ax=card('555 astável — VC e Vo','VC oscila entre ⅓ e ⅔ VCC')
    VCC=9; t=np.linspace(0,6,1200)
    vc=np.zeros_like(t); v=VCC/3; up=True; per=1.4
    for i,tt in enumerate(t):
        ph=(tt%per)/per
        vc[i]=VCC/3+(VCC/3)*(1-np.cos(np.pi*ph)) if False else 0
    # construir VC triangular-exponencial simplificado entre 1/3 e 2/3
    vc=VCC/3+(VCC/3)*(0.5-0.5*np.cos(2*np.pi*(t/per)))
    ax.plot(t,vc,color=GOLD,lw=2.4,label='VC')
    ax.axhline(2*VCC/3,ls=':',color=AXIS,lw=1); ax.text(6.05,2*VCC/3,'⅔ VCC',color=GREY,fontsize=8,va='center')
    ax.axhline(VCC/3,ls=':',color=AXIS,lw=1); ax.text(6.05,VCC/3,'⅓ VCC',color=GREY,fontsize=8,va='center')
    vo=np.where((t%per)<per/2,VCC,0.0)+0.0
    ax.plot(t,0.45*vo-7,color=GREEN,lw=2.2,label='Vo')
    ax.text(0.05,-2.3,'Vo: alto / baixo',color=GREEN,fontsize=8)
    ax.set_xlim(0,6.6); ax.set_ylim(-8,VCC+1); axis_arrows(ax)
    ax.legend(loc='upper right',facecolor=NAVY,edgecolor='#1E3A5F',labelcolor=INK,fontsize=8)
    save(fig,'09-555-ondas')

# 10 histerese
def histerese():
    fig,ax=card('Histerese (Vo × Vi)','comuta em UTP (+8) subindo e LTP (−8) descendo')
    UTP=8; LTP=-8; Vsat=12
    ax.plot([-14,UTP],[Vsat,Vsat],color=GOLD,lw=2.6)
    ax.plot([UTP,UTP],[Vsat,-Vsat],color=GOLD,lw=2.6)
    ax.plot([UTP,14],[-Vsat,-Vsat],color=GOLD,lw=2.6)
    ax.plot([14,LTP],[-Vsat,-Vsat],color=GOLD,lw=2.6,ls=(0,(6,3)))
    ax.plot([LTP,LTP],[-Vsat,Vsat],color=GOLD,lw=2.6)
    ax.plot([LTP,-14],[Vsat,Vsat],color=GOLD,lw=2.6,ls=(0,(6,3)))
    ax.annotate('',xy=(2,Vsat),xytext=(-2,Vsat),arrowprops=dict(arrowstyle='->',color=GOLD))
    ax.annotate('',xy=(-2,-Vsat),xytext=(2,-Vsat),arrowprops=dict(arrowstyle='->',color=GOLD))
    ax.axhline(0,color=AXIS,lw=0.8); ax.axvline(0,color=AXIS,lw=0.8)
    ax.text(UTP,1,'UTP=+8',color=GREY,fontsize=8,ha='center'); ax.text(LTP,-2,'LTP=−8',color=GREY,fontsize=8,ha='center')
    ax.text(0.6,Vsat-1.4,'+12',color=GREY,fontsize=8); ax.text(0.6,-Vsat+0.6,'−12',color=GREY,fontsize=8)
    ax.set_xlim(-15,15); ax.set_ylim(-15,15); axis_arrows(ax,'Vi','Vo')
    save(fig,'10-schmitt-histerese')

# 10 schmitt ondas
def schmitt_ondas():
    fig,ax=card('Entrada × saída — Schmitt inversor','cai em UTP (+8) subindo · sobe em LTP (−8) descendo')
    t=np.linspace(0,4*np.pi,1000); vi=11*np.sin(t); UTP=8; LTP=-8
    ax.plot(t,vi,color=AXIS,lw=1.8,ls='--',label='Vi')
    ax.axhline(UTP,ls=':',color=GREEN,lw=1); ax.axhline(LTP,ls=':',color=RED,lw=1)
    ax.text(4*np.pi,UTP+0.4,'UTP +8',color=GREEN,fontsize=8,ha='right'); ax.text(4*np.pi,LTP-1.4,'LTP −8',color=RED,fontsize=8,ha='right')
    vo=np.zeros_like(t); state=12
    for i in range(len(t)):
        if state>0 and vi[i]>UTP: state=-12
        elif state<0 and vi[i]<LTP: state=12
        vo[i]=state
    ax.plot(t,vo,color=GOLD,lw=2.6,label='Vo (inversor)')
    ax.set_xlim(0,4*np.pi); ax.set_ylim(-14,14); axis_arrows(ax)
    ax.legend(loc='lower right',facecolor=NAVY,edgecolor='#1E3A5F',labelcolor=INK,fontsize=8)
    save(fig,'10-schmitt-ondas')

# 11 SCR
def scr():
    fig,ax=card('SCR — corrente na carga (IL)','dispara no pulso de porta · desliga em I ≈ 0')
    t=np.linspace(0,4*np.pi,1000); v=np.sin(t); fire=0.9
    il=np.where((np.sin(t)>0)&((t%(2*np.pi))>fire),np.sin(t),0.0)
    ax.plot(t,v*0.4+5.5,color=AXIS,lw=1.5,ls='--',label='V2 (rede)')
    ax.plot(t,il*4,color=GOLD,lw=2.6,label='IL (carga)')
    for k in range(2):
        x=fire+2*np.pi*k
        ax.annotate('',xy=(x,0),xytext=(x,2.4),arrowprops=dict(arrowstyle='->',color=GREEN))
    ax.text(fire,2.7,'pulso na porta',color=GREEN,fontsize=8)
    ax.set_xlim(0,4*np.pi); ax.set_ylim(-0.5,7); axis_arrows(ax)
    ax.legend(loc='upper right',facecolor=NAVY,edgecolor='#1E3A5F',labelcolor=INK,fontsize=8)
    save(fig,'11-scr-ondas')

# 12 UJT dente de serra
def ujt():
    fig,ax=card('UJT — dente-de-serra no capacitor','carga lenta (exponencial via R) >> descarga rapida')
    VP=8; VV=1; per=1.5; t=np.linspace(0,6,1500); y=np.zeros_like(t)
    for i,tt in enumerate(t):
        ph=tt%per
        if ph<per*0.86:
            y[i]=VV+(VP-VV)*(1-np.exp(-ph/(per*0.42)))
        else:
            y[i]=VP-(VP-VV)*((ph-per*0.86)/(per*0.14))
    ax.plot(t,y,color=GOLD,lw=2.4)
    ax.axhline(VP,ls=':',color=AXIS,lw=1); ax.text(6.05,VP,'VP',color=GREY,fontsize=8,va='center')
    ax.axhline(VV,ls=':',color=AXIS,lw=1); ax.text(6.05,VV,'VV',color=GREY,fontsize=8,va='center')
    ax.set_xlim(0,6.4); ax.set_ylim(0,VP+1.5); axis_arrows(ax)
    save(fig,'12-ujt-ondas')

# 13 rampa linear
def rampa():
    fig,ax=card('Base de tempo — rampa linear','subida RETA (carga por corrente constante): dV/dt = I/C')
    VF=10; per=1.6; t=np.linspace(0,6,1500); y=np.zeros_like(t)
    for i,tt in enumerate(t):
        ph=tt%per
        y[i]=VF*(ph/(per*0.9)) if ph<per*0.9 else VF*(1-(ph-per*0.9)/(per*0.1))
    y=np.clip(y,0,VF)
    ax.plot(t,y,color=GREEN,lw=2.6)
    ax.axhline(VF,ls=':',color=AXIS,lw=1); ax.text(6.05,VF,'V final',color=GREY,fontsize=8,va='center')
    ax.set_xlim(0,6.4); ax.set_ylim(0,VF+1.6); axis_arrows(ax)
    save(fig,'13-rampa-linear')

for fn in (carga_cap,pwm,limitador,grampeador,comparador,a555,histerese,schmitt_ondas,scr,ujt,rampa):
    try: fn()
    except Exception as ex:
        import traceback; print('ERR',fn.__name__,ex); traceback.print_exc()
print('ondas geradas')

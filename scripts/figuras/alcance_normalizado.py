"""V3: relações da apostila DET 2022, p.1-78/1-79. Sem fontes externas."""
from pathlib import Path
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
x=np.linspace(1,16,301)
fig,ax=plt.subplots(figsize=(9,5),layout='constrained')
ax.plot(x,x**.25,color='#135ca3',lw=3,label='Potência × k → alcance × k¼')
ax.plot(x,np.sqrt(x),color='#a44b00',lw=3,label='Área efetiva × k → alcance × √k')
ax.scatter([1,16,4],[1,2,2],color=['#135ca3','#135ca3','#a44b00'],zorder=5)
ax.annotate('16 vezes a potência: 2 vezes o alcance',(16,2),xytext=(6,1.35),arrowprops={'arrowstyle':'->'})
ax.annotate('4 vezes a área: 2 vezes o alcance',(4,2),xytext=(1.3,3.2),arrowprops={'arrowstyle':'->'})
ax.set(xlim=(1,16.5),ylim=(.8,4.3),xlabel='Fator de multiplicação k (adimensional)',ylabel='Alcance / alcance inicial (adimensional)',title='Dobrar o alcance exige quanto?')
ax.grid(alpha=.25);ax.legend(loc='upper left',bbox_to_anchor=(0,-.15),frameon=False)
fig.savefig(Path(__file__).parents[2]/'public/imagens/cursos/det-t2/figuras/alcance-normalizado.png',dpi=180)

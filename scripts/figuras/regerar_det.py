"""Reproduz capturas V1 usando somente arquivos fornecidos: --fontes DIRETORIO."""
import argparse,hashlib,io,json,zipfile
from pathlib import Path
import fitz
from PIL import Image
p=argparse.ArgumentParser();p.add_argument('--fontes',type=Path,required=True);a=p.parse_args()
r=Path(__file__).resolve().parents[2]
for f in json.loads((r/'src/data/cursos/det-t2/figuras.json').read_text()):
 if f['nivel_fidelidade']!='V1':continue
 candidates=list(a.fontes.rglob(f['arquivo_fonte']))
 sources=[s for s in candidates if hashlib.sha256(s.read_bytes()).hexdigest()==f['sha256_fonte']]
 if not sources:raise ValueError('Fonte original com hash esperado não encontrada: '+f['arquivo_fonte'])
 src=sources[0]
 if f.get('extracao')=='midia_embutida':
  with zipfile.ZipFile(src) as z:im=Image.open(io.BytesIO(z.read(f['caminho_no_zip'])))
 else:
  with fitz.open(src) as doc:
   page=doc[f['pagina_pdf']-1];rect=page.rect;c=f.get('recorte_normalizado')
   if c:rect=fitz.Rect(rect.width*c[0],rect.height*c[1],rect.width*c[2],rect.height*c[3])
   im=Image.open(io.BytesIO(page.get_pixmap(matrix=fitz.Matrix(1800/rect.width,1800/rect.width),clip=rect).tobytes('png')))
 out=r/'public'/f['arquivo_gerado'].lstrip('/');out.parent.mkdir(parents=True,exist_ok=True)
 buffer=io.BytesIO(); im.save(buffer,format='WEBP',quality=f.get('qualidade_webp',92),lossless=f.get('extracao')=='midia_embutida',method=6)
 temp=out.with_suffix('.tmp'); temp.write_bytes(buffer.getvalue()); temp.replace(out)
print('Capturas V1 regeneradas. Inspecionar após mudanças de fonte. Gráfico V3: alcance_normalizado.py.')

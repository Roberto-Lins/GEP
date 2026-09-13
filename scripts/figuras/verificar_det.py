"""Validação dos assets e de seu uso; não substitui inspeção de conteúdo."""
from pathlib import Path
import json,re,collections
from PIL import Image
r=Path(__file__).resolve().parents[2];figs=json.loads((r/'src/data/cursos/det-t2/figuras.json').read_text());ids=[f['id'] for f in figs];errors=[]
if len(set(ids))!=len(ids):errors.append('IDs duplicados')
uses=collections.Counter()
for p in (r/'src/content/cursos/det-t2').rglob('*.mdx'):
 t=p.read_text();uses.update(re.findall(r'<FiguraFonte figura="([^"]+)"',t))
 if re.search(r'[┌└┐┘─│═]',t):errors.append('Diagrama ASCII remanescente: '+str(p))
for key in uses:
 if key not in ids:errors.append('Figura desconhecida: '+key)
for f in figs:
 if not uses[f['id']]:errors.append('Asset sem uso: '+f['id'])
 p=r/'public'/f['arquivo_gerado'].lstrip('/')
 with Image.open(p) as im:
  if list(im.size)!=[f['largura'],f['altura']]:errors.append('Dimensões: '+f['id'])
 for key in ['alt','legenda','leitura','arquivo_fonte','localizacao']:
  if not f.get(key):errors.append('Metadado ausente: '+f['id']+' '+key)
 if p.stat().st_size>300000:errors.append('Imagem acima de 300 kB: '+f['id'])
 if f['nivel_fidelidade']=='V3' and not (r/f['codigo']).is_file():errors.append('Código ausente: '+f['id'])
print(json.dumps({'figuras':len(figs),'usos':sum(uses.values()),'niveis':dict(collections.Counter(f['nivel_fidelidade'] for f in figs)),'erros':errors},ensure_ascii=False,indent=2))
raise SystemExit(bool(errors))

# Backup do GEP pré-migração

O estado íntegro do projeto **antes** da migração para a plataforma multi-curso está preservado na
tag git **`backup/gep-pre-bussola`** (custo zero, histórico completo, incluindo a mídia).

Recuperar qualquer arquivo original:

```bash
git checkout backup/gep-pre-bussola -- <caminho/do/arquivo>
# ou inspecionar:
git show backup/gep-pre-bussola:src/data/timeline.ts
```

Não duplicamos aqui os ~500 MB de mídia/fontes porque já estão versionados nessa tag.

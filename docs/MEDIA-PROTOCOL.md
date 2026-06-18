# MEDIA-PROTOCOL.md — O que pode/não pode ir ao repositório

Repositório estático: o git **não** é CDN. Mídia pesada infla o clone e o deploy.

## Regra

| Categoria | Vai no repo? | Onde |
|-----------|--------------|------|
| MDX, JSON, TS | ✅ | `src/` |
| SVG, ícones, thumbnails, imagens leves (< ~300 KB) | ✅ | `public/imagens/cursos/<slug>/` |
| Mapas mentais pequenos, PDFs pequenos (< ~2 MB) | ✅ | `public/{mapas-mentais,arquivos}/cursos/<slug>/` |
| Vídeos (`.mp4/.webm/.mkv`) | ❌ | YouTube não-listado / R2 / Bunny |
| Áudios/podcasts longos (`.m4a/.mp3`) | ❌ | R2 / Bunny / YouTube |
| PDFs pesados (> ~5 MB) | ❌ | R2 / Bunny |

**Evitar Google Drive como player** (sem embed estável, sem streaming confiável).

## Registro em `_dados.json`

```jsonc
"midias": [
  { "tipo": "podcast", "titulo": "...", "origem": "r2",      "src": "https://cdn.exemplo/gep/02-weber.m4a" },
  { "tipo": "video",   "titulo": "...", "origem": "youtube", "src": "https://youtu.be/XXXX" },
  { "tipo": "mapa",    "titulo": "...", "origem": "local",   "src": "/mapas-mentais/cursos/gep/02-weber.pdf" }
]
```

`origem ∈ local | youtube | r2 | bunny | externo`. Os players (`PlayerVideo`, `PlayerPodcast`)
escolhem o embed conforme `origem`.

## Auditoria

`npm run audit-media` varre `public/` e lista arquivos acima do limite que ainda estão versionados,
para externalização. Não remove nada — só reporta.

## Estado atual do GEP (pendência)

Há ~300 MB de podcasts/vídeos ainda versionados em `public/podcasts` e `public/videos`. Continuam
funcionando como `origem: local` por ora; devem migrar para CDN/YouTube quando houver links, e então
o `src` no `_dados.json` passa a apontar para a URL externa. A pasta duplicada `Audios/` (cópia dos
podcasts) já foi removida na migração.

> Limpeza do histórico git (`.git` ~275 MB) é decisão separada: `git filter-repo` reduz o clone mas
> reescreve histórico — combinar antes com o time.

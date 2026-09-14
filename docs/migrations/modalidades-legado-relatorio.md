# Preservação dos cursos legados

Revisão-base: `e65a2039a4c52de8cfddcae3e115417c8c4d0248`.
Estado posterior: working tree final da branch `feat/modalidades-estudo`.

Os inventários completos, inclusive cada ID e rota, ficam em
`modalidades-legado-base.json` e `modalidades-legado-final.json`.

| Item | Antes | Depois | Resultado |
|---|---:|---:|---|
| Cursos legados | 9 | 9 | preservado |
| Módulos | 106 | 106 | IDs e ordem preservados |
| Questões | 732 | 732 | IDs e objetos preservados |
| Checklists | 528 | 528 | IDs qualificados preservados |
| Rotas históricas | 54 inventariadas | 54 inventariadas | preservadas |

O comparador serializado confirmou igualdade integral de `cursos`, `progresso` e `totais` entre os
dois inventários. Isso inclui DET-T2.

## Migração equivalente

Nenhum `_config.json` legado foi reescrito. A camada de leitura interpreta a ausência de `estudo`
como uma família com apenas `completo`, mantendo o slug histórico. Portanto:

- `localStorage` continua na chave `bussola:v1` e no mesmo índice de curso;
- o Caderno continua no IndexedDB `bussola-cadernos` e no fallback histórico;
- links diretos continuam abrindo `/<slug>`;
- módulos, checklists e questões não são copiados, renomeados ou apagados.

## Diferenças esperadas de contrato

O schema passa a aceitar o bloco opcional `estudo`. A ausência significa legado `complete-only`; a
presença identifica uma variante nova, sua família, duração, estado editorial e conjunto canônico de
modalidades. O validador exige as três variantes apenas das famílias novas.

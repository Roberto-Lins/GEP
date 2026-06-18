# PROGRESS-BACKUP.md — Progresso, migração e backup

Todo o progresso do aluno vive em `localStorage` (sem backend). Implementação:
`src/utils/progress.ts`, `src/utils/migration.ts`, `src/utils/backup.ts`.

## Formato da chave

Chave única versionada: **`bussola:v1`**

```jsonc
{
  "cursos": {
    "gep": {
      "materias": {
        "02-weber-e-burocracia": {
          "checklist": { "c1": true, "c2": false },
          "questoes":  { "me-01": { "acertou": true } },
          "concluida": false,
          "ultimoAcesso": 1718702400000
        }
      },
      "ultimaMateria": "02-weber-e-burocracia"
    }
  },
  "ultimoCurso": "gep"
}
```

Flags auxiliares: `bussola:v1:migration:gep:done` (idempotência da migração).

## Migração do progresso antigo

`migrarProgressoLegado()` em `src/utils/migration.ts`:
1. Se a flag `bussola:v1:migration:gep:done` existe → não faz nada.
2. Lê a chave antiga `gep:progresso:v1` (formato `{ materias, ultimaMateria }`).
3. Move para `bussola:v1.cursos.gep` (mesma estrutura por matéria, sem perda).
4. Grava a flag. Roda uma única vez, no primeiro carregamento pós-deploy.

A chave antiga é preservada (não apagada) por segurança.

## Backup manual (Exportar / Importar / Reset)

Componente `src/components/progresso/BackupProgresso.tsx` no dashboard:

- **Exportar** → baixa `bussola-dos-aspirantes-backup-AAAA-MM-DD.json` (todo o `bussola:v1`).
- **Importar** → lê um JSON e substitui o `bussola:v1` (com confirmação).
- **Reset** → limpa todo o progresso (com confirmação dupla).

## Reatividade

`salvar()` dispara `window.dispatchEvent(new CustomEvent('bussola:progresso'))`. As ilhas React
(checklist, barra de progresso, painel) escutam esse evento + `storage` (sync entre abas) +
`astro:after-swap` (navegação).

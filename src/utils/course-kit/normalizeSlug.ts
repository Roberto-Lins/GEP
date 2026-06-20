// Gera um slug a partir do nome da matéria (sem acentos, kebab-case).
export function normalizeSlug(nome: string): string {
  return nome
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // remove diacríticos combinantes (acentos)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // não-alfanumérico → hífen
    .replace(/^-+|-+$/g, '') // tira hífens das pontas
    .replace(/-{2,}/g, '-'); // colapsa hífens repetidos
}

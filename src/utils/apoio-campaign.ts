export const APOIO_CAMPANHA_VERSAO = 'ia-2026-09-v1';
export const APOIO_CAMPANHA_EVENTO = 'bussola:apoio-ia:abrir';

export interface StorageCampanha {
  getItem(chave: string): string | null;
  setItem(chave: string, valor: string): void;
}

export const chaveDispensaCampanha = (versao = APOIO_CAMPANHA_VERSAO) =>
  `bussola:v1:apoio-ia:${versao}:dispensado`;

export function campanhaFoiDispensada(
  storage: StorageCampanha,
  versao = APOIO_CAMPANHA_VERSAO,
) {
  try {
    return storage.getItem(chaveDispensaCampanha(versao)) === '1';
  } catch {
    return false;
  }
}

export function dispensarCampanha(
  storage: StorageCampanha,
  versao = APOIO_CAMPANHA_VERSAO,
) {
  try {
    storage.setItem(chaveDispensaCampanha(versao), '1');
  } catch {
    // Navegação privada ou armazenamento indisponível: o fechamento ainda funciona.
  }
}

import { describe, expect, it } from 'vitest';
import {
  campanhaFoiDispensada,
  chaveDispensaCampanha,
  dispensarCampanha,
} from './apoio-campaign';

function memoria() {
  const dados = new Map<string, string>();
  return {
    getItem: (chave: string) => dados.get(chave) ?? null,
    setItem: (chave: string, valor: string) => dados.set(chave, valor),
  };
}

describe('campanha de apoio às IAs', () => {
  it('é exibida enquanto a versão atual não foi dispensada', () => {
    expect(campanhaFoiDispensada(memoria(), 'v1')).toBe(false);
  });

  it('deixa de ser exibida após a dispensa', () => {
    const storage = memoria();
    dispensarCampanha(storage, 'v1');
    expect(campanhaFoiDispensada(storage, 'v1')).toBe(true);
  });

  it('uma nova versão pode ser mostrada sem apagar a decisão anterior', () => {
    const storage = memoria();
    dispensarCampanha(storage, 'v1');
    expect(campanhaFoiDispensada(storage, 'v1')).toBe(true);
    expect(campanhaFoiDispensada(storage, 'v2')).toBe(false);
    expect(chaveDispensaCampanha('v2')).toContain('v2');
  });

  it('continua utilizável quando o armazenamento está bloqueado', () => {
    const storage = {
      getItem: () => {
        throw new Error('storage bloqueado');
      },
      setItem: () => {
        throw new Error('storage bloqueado');
      },
    };
    expect(campanhaFoiDispensada(storage)).toBe(false);
    expect(() => dispensarCampanha(storage)).not.toThrow();
  });
});

// Persistência leve das ferramentas em localStorage (chave irmã de bussola:v1,
// no mesmo padrão de bussola:v1:migration:*). NÃO toca no objeto de progresso —
// evita qualquer conflito com src/utils/progress.ts.
import { useEffect, useRef, useState } from 'react';

const CHAVE = 'bussola:v1:ferramentas';

type Store = Record<string, unknown>;

function lerStore(): Store {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.localStorage.getItem(CHAVE);
    return raw ? (JSON.parse(raw) as Store) : {};
  } catch {
    return {};
  }
}

function gravarCampo(campo: string, valor: unknown): void {
  if (typeof window === 'undefined') return;
  try {
    const store = lerStore();
    store[campo] = valor;
    window.localStorage.setItem(CHAVE, JSON.stringify(store));
  } catch {
    /* modo privado / quota cheia — persistência é melhor-esforço */
  }
}

/**
 * Como `useState`, mas persiste o valor em `bussola:v1:ferramentas[campo]`.
 * Quando não há nada salvo, comporta-se exatamente como `useState(inicial)`.
 */
export function usePersistedState<T>(
  campo: string,
  inicial: T,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [estado, setEstado] = useState<T>(() => {
    const store = lerStore();
    return campo in store ? (store[campo] as T) : inicial;
  });
  const primeiro = useRef(true);
  useEffect(() => {
    if (primeiro.current) {
      primeiro.current = false; // não regrava o valor lido na montagem
      return;
    }
    gravarCampo(campo, estado);
  }, [campo, estado]);
  return [estado, setEstado];
}

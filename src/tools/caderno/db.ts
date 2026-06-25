// Persistência do Caderno em IndexedDB (uma "linha" por curso, key = courseId).
// IndexedDB foi escolhido por aguentar muitas páginas com texto formatado sem o
// teto ~5 MB do localStorage. Há um fallback p/ localStorage quando o IndexedDB
// não existe (modo restrito raro), mantendo a MESMA interface assíncrona.
//
// getNotebook devolve `undefined` SÓ quando não há caderno gravado (primeiro
// acesso). Falha real de leitura vira `throw` — assim o hook distingue
// "vazio" de "erro" e nunca sobrescreve dados existentes com um caderno vazio.

import { migrar } from './store';
import type { CourseNotebook } from './types';

const DB_NAME = 'bussola-cadernos';
const STORE = 'notebooks';
const DB_VERSION = 1;
const LS_PREFIX = 'bussola:v1:cadernos:'; // fallback (chave irmã de bussola:v1)

function temIndexedDB(): boolean {
  return typeof indexedDB !== 'undefined';
}

let dbPromise: Promise<IDBDatabase> | null = null;

function abrir(): Promise<IDBDatabase> {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE)) {
        db.createObjectStore(STORE, { keyPath: 'courseId' });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error ?? new Error('Falha ao abrir o IndexedDB'));
    req.onblocked = () => reject(new Error('IndexedDB bloqueado'));
  });
  // Se a abertura falhar, permite tentar de novo numa próxima chamada.
  dbPromise.catch(() => {
    dbPromise = null;
  });
  return dbPromise;
}

export async function getNotebook(courseId: string): Promise<CourseNotebook | undefined> {
  if (!temIndexedDB()) return getLS(courseId);
  const db = await abrir();
  const raw = await new Promise<unknown>((resolve, reject) => {
    const tx = db.transaction(STORE, 'readonly');
    const req = tx.objectStore(STORE).get(courseId);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error ?? new Error('Falha ao ler o caderno'));
  });
  if (raw === undefined || raw === null) return undefined;
  return migrar(raw, courseId);
}

export async function putNotebook(nb: CourseNotebook): Promise<void> {
  if (!temIndexedDB()) return putLS(nb);
  const db = await abrir();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE, 'readwrite');
    tx.objectStore(STORE).put(nb);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error ?? new Error('Falha ao salvar o caderno'));
    tx.onabort = () => reject(tx.error ?? new Error('Gravação abortada'));
  });
}

export async function deleteNotebook(courseId: string): Promise<void> {
  if (!temIndexedDB()) {
    try {
      localStorage.removeItem(LS_PREFIX + courseId);
    } catch {
      /* best-effort */
    }
    return;
  }
  const db = await abrir();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE, 'readwrite');
    tx.objectStore(STORE).delete(courseId);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error ?? new Error('Falha ao excluir o caderno'));
  });
}

// ── Fallback localStorage ───────────────────────────────────────────────────
function getLS(courseId: string): CourseNotebook | undefined {
  try {
    const raw = localStorage.getItem(LS_PREFIX + courseId);
    if (!raw) return undefined;
    return migrar(JSON.parse(raw), courseId);
  } catch {
    return undefined;
  }
}

function putLS(nb: CourseNotebook): void {
  try {
    localStorage.setItem(LS_PREFIX + nb.courseId, JSON.stringify(nb));
  } catch {
    /* modo privado / quota — persistência é melhor-esforço no fallback */
  }
}

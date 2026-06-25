import { describe, expect, it } from 'vitest';
import {
  criarPagina,
  excluirPagina,
  migrar,
  moverPagina,
  notebookVazio,
  paginaSelecionada,
  paginasOrdenadas,
  renomearPagina,
  selecionarPagina,
} from '../store';

describe('store — caderno (lógica pura)', () => {
  it('notebookVazio: 1 página em branco já selecionada', () => {
    const nb = notebookVazio('gep');
    expect(nb.courseId).toBe('gep');
    expect(nb.version).toBe(1);
    expect(nb.pages).toHaveLength(1);
    expect(nb.selectedPageId).toBe(nb.pages[0].id);
  });

  it('é imutável: a função devolve um novo objeto e não muta o original', () => {
    const nb1 = notebookVazio('gep');
    const nb2 = criarPagina(nb1);
    expect(nb2).not.toBe(nb1);
    expect(nb1.pages).toHaveLength(1); // original intacto
    expect(nb2.pages).toHaveLength(2);
  });

  it('criarPagina: anexa, seleciona a nova e incrementa a ordem', () => {
    let nb = notebookVazio('gep');
    const id0 = nb.pages[0].id;
    nb = criarPagina(nb);
    expect(nb.pages).toHaveLength(2);
    expect(nb.selectedPageId).toBe(nb.pages[1].id);
    expect(nb.selectedPageId).not.toBe(id0);
    const ordens = nb.pages.map((p) => p.order);
    expect(new Set(ordens).size).toBe(2);
    expect(Math.max(...ordens)).toBe(1);
  });

  it('renomearPagina: troca o título', () => {
    let nb = notebookVazio('gep');
    nb = renomearPagina(nb, nb.pages[0].id, 'Fórmulas importantes');
    expect(nb.pages[0].title).toBe('Fórmulas importantes');
  });

  it('excluirPagina: ao excluir a última, recria uma em branco', () => {
    let nb = notebookVazio('gep');
    const id = nb.pages[0].id;
    nb = excluirPagina(nb, id);
    expect(nb.pages).toHaveLength(1);
    expect(nb.pages[0].id).not.toBe(id);
    expect(nb.selectedPageId).toBe(nb.pages[0].id);
  });

  it('excluirPagina: excluir a selecionada move a seleção p/ a vizinha', () => {
    let nb = notebookVazio('gep');
    nb = criarPagina(nb); // B
    nb = criarPagina(nb); // C
    const [a, b, c] = paginasOrdenadas(nb);
    nb = selecionarPagina(nb, b.id);
    nb = excluirPagina(nb, b.id);
    expect(nb.pages).toHaveLength(2);
    expect(nb.pages.map((p) => p.id)).toEqual(expect.arrayContaining([a.id, c.id]));
    expect(nb.selectedPageId).toBe(a.id); // vizinha anterior
  });

  it('excluirPagina: id inexistente não altera nada', () => {
    const nb = notebookVazio('gep');
    expect(excluirPagina(nb, 'inexistente')).toBe(nb);
  });

  it('moverPagina: sobe/desce e respeita os limites', () => {
    let nb = notebookVazio('gep');
    nb = criarPagina(nb); // B
    nb = criarPagina(nb); // C
    const [a, b, c] = paginasOrdenadas(nb);
    nb = moverPagina(nb, c.id, -1); // C sobe
    expect(paginasOrdenadas(nb).map((p) => p.id)).toEqual([a.id, c.id, b.id]);
    const semMudanca = moverPagina(nb, a.id, -1); // já no topo
    expect(paginasOrdenadas(semMudanca).map((p) => p.id)).toEqual([a.id, c.id, b.id]);
  });

  it('selecionarPagina: id inválido ou já selecionado não cria novo objeto', () => {
    const nb = notebookVazio('gep');
    expect(selecionarPagina(nb, 'inexistente')).toBe(nb);
    expect(selecionarPagina(nb, nb.selectedPageId!)).toBe(nb);
  });

  it('paginaSelecionada: cai p/ a primeira se a seleção sumir', () => {
    let nb = notebookVazio('gep');
    nb = criarPagina(nb);
    nb = { ...nb, selectedPageId: 'fantasma' };
    expect(paginaSelecionada(nb)).toBe(paginasOrdenadas(nb)[0]);
  });

  describe('migrar', () => {
    it('valor não-objeto vira caderno vazio do curso', () => {
      const nb = migrar(null, 'gep');
      expect(nb.courseId).toBe('gep');
      expect(nb.pages).toHaveLength(1);
      expect(nb.version).toBe(1);
    });

    it('renumera a ordem, conserta campos faltantes e NUNCA descarta páginas', () => {
      const raw = {
        version: 0,
        courseId: 'gep',
        selectedPageId: 'zzz', // inválido
        pages: [
          { id: 'p2', title: 'B', content: { type: 'doc' }, order: 5 },
          { id: 'p1', title: 'A', content: { type: 'doc' }, order: 1 },
          { id: 'p3' }, // sem demais campos
        ],
      };
      const nb = migrar(raw, 'gep');
      expect(nb.version).toBe(1);
      expect(nb.pages).toHaveLength(3);
      expect(paginasOrdenadas(nb).map((p) => p.id)).toEqual(['p1', 'p2', 'p3']);
      expect(paginasOrdenadas(nb).map((p) => p.order)).toEqual([0, 1, 2]);
      expect(nb.selectedPageId).toBe('p1'); // seleção inválida → primeira
    });

    it('preserva conteúdo e datas das páginas existentes', () => {
      const raw = {
        courseId: 'gep',
        selectedPageId: 'p1',
        pages: [{ id: 'p1', title: 'A', content: { type: 'doc', x: 1 }, createdAt: 'c', updatedAt: 'u', order: 0 }],
      };
      const nb = migrar(raw, 'gep');
      expect(nb.pages[0].content).toEqual({ type: 'doc', x: 1 });
      expect(nb.pages[0].createdAt).toBe('c');
    });

    it('lista de páginas vazia recria uma página em branco', () => {
      const nb = migrar({ courseId: 'gep', pages: [] }, 'gep');
      expect(nb.pages).toHaveLength(1);
    });
  });
});

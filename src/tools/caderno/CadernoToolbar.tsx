// Barra de ferramentas do editor. Espelha os comandos do TipTap; re-renderiza
// junto com o editor (useEditor atualiza a cada transação), então os estados
// "ativo" refletem a seleção atual. Rola horizontalmente em telas estreitas.
import type { Editor } from '@tiptap/react';
import { type ReactNode } from 'react';

interface Props {
  editor: Editor | null;
}

const CORES_TEXTO = [
  { nome: 'Padrão', valor: null },
  { nome: 'Dourado', valor: '#D6A84F' },
  { nome: 'Vermelho', valor: '#EF6B6B' },
  { nome: 'Verde', valor: '#4ADE80' },
  { nome: 'Azul', valor: '#60A5FA' },
  { nome: 'Roxo', valor: '#C084FC' },
  { nome: 'Branco', valor: '#F7F3EA' },
];

const CORES_MARCA = [
  { nome: 'Amarelo', valor: '#FCE7A2' },
  { nome: 'Verde', valor: '#BBF7D0' },
  { nome: 'Rosa', valor: '#FBCFE8' },
  { nome: 'Azul', valor: '#BFDBFE' },
];

function Btn({
  onClick,
  ativo,
  titulo,
  desabilitado,
  children,
}: {
  onClick: () => void;
  ativo?: boolean;
  titulo: string;
  desabilitado?: boolean;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onMouseDown={(e) => e.preventDefault()} // não tira o foco/seleção do editor
      onClick={onClick}
      disabled={desabilitado}
      aria-label={titulo}
      aria-pressed={ativo}
      title={titulo}
      className={[
        'flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-sm transition',
        ativo ? 'bg-dourado/20 text-dourado' : 'text-nevoa/80 hover:bg-white/10 hover:text-marfim',
        desabilitado ? 'cursor-not-allowed opacity-40 hover:bg-transparent' : '',
      ].join(' ')}
    >
      {children}
    </button>
  );
}

function Sep() {
  return <span className="mx-0.5 h-5 w-px shrink-0 self-center bg-white/10" aria-hidden="true" />;
}

function Svg({ d, children }: { d?: string; children?: ReactNode }) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {d ? <path d={d} /> : children}
    </svg>
  );
}

export default function CadernoToolbar({ editor }: Props) {
  if (!editor) return null;

  const nivelAtual = (): string => {
    for (const n of [1, 2, 3, 4]) if (editor.isActive('heading', { level: n })) return String(n);
    return 'p';
  };
  const aplicarNivel = (v: string) => {
    const c = editor.chain().focus();
    if (v === 'p') c.setParagraph().run();
    else c.setHeading({ level: Number(v) as 1 | 2 | 3 | 4 }).run();
  };

  const indentar = () => {
    if (editor.can().sinkListItem('listItem')) editor.chain().focus().sinkListItem('listItem').run();
    else if (editor.can().sinkListItem('taskItem')) editor.chain().focus().sinkListItem('taskItem').run();
  };
  const desindentar = () => {
    if (editor.can().liftListItem('listItem')) editor.chain().focus().liftListItem('listItem').run();
    else if (editor.can().liftListItem('taskItem')) editor.chain().focus().liftListItem('taskItem').run();
  };

  const definirLink = () => {
    const anterior = (editor.getAttributes('link').href as string) ?? '';
    const url = window.prompt('Endereço do link (deixe vazio para remover):', anterior);
    if (url === null) return; // cancelou
    if (url.trim() === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }
    if (/^\s*javascript:/i.test(url)) return; // bloqueia protocolo perigoso
    editor.chain().focus().extendMarkRange('link').setLink({ href: url.trim() }).run();
  };

  return (
    <div
      className="flex items-center gap-0.5 overflow-x-auto border-b border-white/10 bg-naval-800/60 px-2 py-1.5"
      role="toolbar"
      aria-label="Formatação"
    >
      <Btn titulo="Desfazer" desabilitado={!editor.can().undo()} onClick={() => editor.chain().focus().undo().run()}>
        <Svg d="M9 14 4 9l5-5" /><Svg d="M4 9h11a5 5 0 0 1 0 10h-1" />
      </Btn>
      <Btn titulo="Refazer" desabilitado={!editor.can().redo()} onClick={() => editor.chain().focus().redo().run()}>
        <Svg><path d="M15 14l5-5-5-5" /><path d="M20 9H9a5 5 0 0 0 0 10h1" /></Svg>
      </Btn>

      <Sep />

      <select
        value={nivelAtual()}
        onChange={(e) => aplicarNivel(e.target.value)}
        onMouseDown={(e) => e.stopPropagation()}
        aria-label="Nível de texto"
        title="Nível de texto"
        className="h-8 shrink-0 rounded-md border border-white/10 bg-naval-800 px-2 text-xs text-marfim outline-none hover:border-dourado/30"
      >
        <option value="p">Normal</option>
        <option value="1">Título 1</option>
        <option value="2">Título 2</option>
        <option value="3">Título 3</option>
        <option value="4">Título 4</option>
      </select>

      <Sep />

      <Btn titulo="Negrito" ativo={editor.isActive('bold')} onClick={() => editor.chain().focus().toggleBold().run()}>
        <Svg><path d="M6 4h8a4 4 0 0 1 0 8H6zM6 12h9a4 4 0 0 1 0 8H6z" /></Svg>
      </Btn>
      <Btn titulo="Itálico" ativo={editor.isActive('italic')} onClick={() => editor.chain().focus().toggleItalic().run()}>
        <Svg><path d="M19 4h-9M14 20H5M15 4 9 20" /></Svg>
      </Btn>
      <Btn titulo="Sublinhado" ativo={editor.isActive('underline')} onClick={() => editor.chain().focus().toggleUnderline().run()}>
        <Svg><path d="M6 4v6a6 6 0 0 0 12 0V4M4 21h16" /></Svg>
      </Btn>
      <Btn titulo="Tachado" ativo={editor.isActive('strike')} onClick={() => editor.chain().focus().toggleStrike().run()}>
        <Svg><path d="M5 12h14M16 6a4 3 0 0 0-4-2H9.5a3.5 3.5 0 0 0-1 6.5M8 18a4 3 0 0 0 4 2h1.5a3.5 3.5 0 0 0 2-6" /></Svg>
      </Btn>

      {/* Cor do texto */}
      <details className="relative shrink-0">
        <summary className="flex h-8 w-8 cursor-pointer list-none items-center justify-center rounded-md text-nevoa/80 transition hover:bg-white/10 hover:text-marfim" title="Cor do texto" aria-label="Cor do texto">
          <Svg><path d="M5 20h14" /><path d="M8 16 12 5l4 11M9.5 13h5" /></Svg>
        </summary>
        <div className="absolute left-0 top-9 z-20 grid grid-cols-4 gap-1 rounded-lg border border-white/10 bg-naval-800 p-2 shadow-card">
          {CORES_TEXTO.map((c) => (
            <button
              key={c.nome}
              type="button"
              title={c.nome}
              aria-label={`Cor ${c.nome}`}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => {
                if (c.valor === null) editor.chain().focus().unsetColor().run();
                else editor.chain().focus().setColor(c.valor).run();
                (document.activeElement as HTMLElement)?.closest('details')?.removeAttribute('open');
              }}
              className="h-6 w-6 rounded-full border border-white/20"
              style={{ background: c.valor ?? 'transparent', backgroundImage: c.valor ? undefined : 'linear-gradient(45deg,transparent 45%,#EF6B6B 45%,#EF6B6B 55%,transparent 55%)' }}
            />
          ))}
        </div>
      </details>

      {/* Marca-texto */}
      <details className="relative shrink-0">
        <summary className="flex h-8 w-8 cursor-pointer list-none items-center justify-center rounded-md text-nevoa/80 transition hover:bg-white/10 hover:text-marfim" title="Marca-texto" aria-label="Marca-texto">
          <Svg><path d="m9 11-6 6v3h3l6-6M14 6l4 4M13 7l3-3 4 4-3 3z" /></Svg>
        </summary>
        <div className="absolute left-0 top-9 z-20 flex gap-1 rounded-lg border border-white/10 bg-naval-800 p-2 shadow-card">
          {CORES_MARCA.map((c) => (
            <button
              key={c.nome}
              type="button"
              title={c.nome}
              aria-label={`Marcar ${c.nome}`}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => editor.chain().focus().toggleHighlight({ color: c.valor }).run()}
              className="h-6 w-6 rounded border border-white/20"
              style={{ background: c.valor }}
            />
          ))}
          <button
            type="button"
            title="Remover marca"
            aria-label="Remover marca"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => editor.chain().focus().unsetHighlight().run()}
            className="flex h-6 w-6 items-center justify-center rounded border border-white/20 text-nevoa"
          >
            <Svg d="M18 6 6 18M6 6l12 12" />
          </button>
        </div>
      </details>

      <Btn titulo="Limpar formatação" onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}>
        <Svg><path d="M4 7h16M9 7l-1 13M16 7l-1 13M7 7l1-3h8l1 3" /></Svg>
      </Btn>

      <Sep />

      <Btn titulo="Lista com marcadores" ativo={editor.isActive('bulletList')} onClick={() => editor.chain().focus().toggleBulletList().run()}>
        <Svg><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" /></Svg>
      </Btn>
      <Btn titulo="Lista numerada" ativo={editor.isActive('orderedList')} onClick={() => editor.chain().focus().toggleOrderedList().run()}>
        <Svg><path d="M10 6h11M10 12h11M10 18h11M4 6h1v4M4 10h2M6 16a1.5 1.5 0 1 0-1.5 1.5H6l-2 2.5h3" /></Svg>
      </Btn>
      <Btn titulo="Checklist" ativo={editor.isActive('taskList')} onClick={() => editor.chain().focus().toggleTaskList().run()}>
        <Svg><path d="M9 6h12M9 12h12M9 18h12M3 6l1.5 1.5L7 5M3 17h2v2H3z" /></Svg>
      </Btn>
      <Btn titulo="Diminuir recuo" onClick={desindentar}>
        <Svg><path d="M21 6H8M21 12h-9M21 18H8M6 9l-3 3 3 3" /></Svg>
      </Btn>
      <Btn titulo="Aumentar recuo" onClick={indentar}>
        <Svg><path d="M21 6H8M21 12h-9M21 18H8M3 9l3 3-3 3" /></Svg>
      </Btn>

      <Sep />

      <Btn titulo="Alinhar à esquerda" ativo={editor.isActive({ textAlign: 'left' })} onClick={() => editor.chain().focus().setTextAlign('left').run()}>
        <Svg><path d="M4 6h16M4 12h10M4 18h13" /></Svg>
      </Btn>
      <Btn titulo="Centralizar" ativo={editor.isActive({ textAlign: 'center' })} onClick={() => editor.chain().focus().setTextAlign('center').run()}>
        <Svg><path d="M4 6h16M7 12h10M5 18h14" /></Svg>
      </Btn>
      <Btn titulo="Alinhar à direita" ativo={editor.isActive({ textAlign: 'right' })} onClick={() => editor.chain().focus().setTextAlign('right').run()}>
        <Svg><path d="M4 6h16M10 12h10M7 18h13" /></Svg>
      </Btn>

      <Sep />

      <Btn titulo="Citação" ativo={editor.isActive('blockquote')} onClick={() => editor.chain().focus().toggleBlockquote().run()}>
        <Svg><path d="M6 7h4v6a4 4 0 0 1-4 4M14 7h4v6a4 4 0 0 1-4 4" /></Svg>
      </Btn>
      <Btn titulo="Código inline" ativo={editor.isActive('code')} onClick={() => editor.chain().focus().toggleCode().run()}>
        <Svg><path d="m8 8-4 4 4 4M16 8l4 4-4 4M13 6l-2 12" /></Svg>
      </Btn>
      <Btn titulo="Bloco de código" ativo={editor.isActive('codeBlock')} onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
        <Svg><path d="M9 7 4 12l5 5M15 7l5 5-5 5" /></Svg>
      </Btn>
      <Btn titulo="Link" ativo={editor.isActive('link')} onClick={definirLink}>
        <Svg><path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1" /></Svg>
      </Btn>
      <Btn titulo="Separador" onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        <Svg d="M4 12h16" />
      </Btn>
    </div>
  );
}

// Editor rico (TipTap). Criado UMA vez e reaproveitado entre as páginas:
// ao trocar de página (pageId muda) recarregamos o conteúdo via setContent,
// sem recriar o editor — preserva histórico de undo da sessão e evita "piscar".
// onUpdate sempre chama o onChange MAIS RECENTE (via ref), então o conteúdo
// digitado vai sempre para a página certa, mesmo após trocas rápidas.
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';
import Link from '@tiptap/extension-link';
import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';
import Placeholder from '@tiptap/extension-placeholder';
import { useEffect, useRef } from 'react';
import CadernoToolbar from './CadernoToolbar';
import { docVazio } from './store';
import './caderno.css';

interface Props {
  pageId: string;
  content: unknown;
  onChange: (content: unknown) => void;
}

export default function CadernoEditor({ pageId, content, onChange }: Props) {
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  // Conteúdo inicial só na criação; trocas posteriores vêm pelo efeito abaixo.
  const conteudoInicial = useRef(content ?? docVazio()).current;

  const editor = useEditor({
    immediatelyRender: false, // nunca renderiza no SSR (a ilha é client-only)
    extensions: [
      StarterKit.configure({ heading: { levels: [1, 2, 3, 4] } }),
      Underline,
      TextStyle,
      Color,
      Highlight.configure({ multicolor: true }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        protocols: ['http', 'https', 'mailto'],
        HTMLAttributes: { rel: 'noopener nofollow noreferrer', target: '_blank' },
      }),
      TaskList,
      TaskItem.configure({ nested: true }),
      Placeholder.configure({ placeholder: 'Comece a escrever as suas anotações…' }),
    ],
    content: conteudoInicial as never,
    editorProps: {
      attributes: { class: 'caderno-prosa min-h-full', spellcheck: 'true' },
    },
    onUpdate: ({ editor }) => onChangeRef.current(editor.getJSON()),
  });

  // Troca de página: recarrega o documento da página selecionada SEM emitir
  // update (evita sobrescrever a página anterior). Depende só de pageId.
  const primeiraCarga = useRef(true);
  useEffect(() => {
    if (!editor) return;
    if (primeiraCarga.current) {
      // o conteúdo inicial já foi aplicado na criação; não re-setar.
      primeiraCarga.current = false;
      return;
    }
    editor.commands.setContent((content ?? docVazio()) as never, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editor, pageId]);

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <CadernoToolbar editor={editor} />
      <div
        className="min-h-0 flex-1 cursor-text overflow-y-auto px-4 py-4 sm:px-6"
        onClick={() => editor?.chain().focus().run()}
      >
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}

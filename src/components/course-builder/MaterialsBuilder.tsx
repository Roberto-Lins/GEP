import type { MidiaRef, OrigemMidia, ArquivoLeve } from '@tipos/course-kit';
import { fileToArquivoLeve } from '@utils/course-kit/readFile';
import { LIMITE_MB } from '@utils/course-kit/classifyFile';
import MediaBlock from './MediaBlock';

interface Props {
  midias: MidiaRef[];
  arquivos: ArquivoLeve[];
  onChangeMidias: (m: MidiaRef[]) => void;
  onChangeArquivos: (a: ArquivoLeve[]) => void;
}

interface CategoriaCfg {
  id: string;
  titulo: string;
  descricao: string;
  permiteUpload: boolean;
  origens: OrigemMidia[];
}

const CATEGORIAS: CategoriaCfg[] = [
  { id: 'fontes', titulo: 'Fontes / Aulas', descricao: 'PDF leve ou URL da aula/fonte.', permiteUpload: true, origens: ['local', 'externo', 'r2', 'bunny'] },
  { id: 'resumos', titulo: 'Resumos', descricao: 'Arquivo leve de resumo.', permiteUpload: true, origens: ['local', 'externo'] },
  { id: 'audios', titulo: 'Áudios', descricao: 'Apenas URL (YouTube, Spotify, CDN…).', permiteUpload: false, origens: ['youtube', 'externo', 'r2', 'bunny'] },
  { id: 'videos', titulo: 'Vídeos', descricao: 'Apenas URL (YouTube, CDN…).', permiteUpload: false, origens: ['youtube', 'externo', 'r2', 'bunny'] },
  { id: 'slides', titulo: 'Slides', descricao: 'Upload se < 20 MB, senão URL.', permiteUpload: true, origens: ['local', 'externo', 'r2', 'bunny'] },
  { id: 'extras', titulo: 'Materiais extras', descricao: 'Outros materiais leves ou URL.', permiteUpload: true, origens: ['local', 'externo'] },
];

export default function MaterialsBuilder({ midias, arquivos, onChangeMidias, onChangeArquivos }: Props) {
  const addArquivo = async (cat: string, file: File) => {
    const arq = await fileToArquivoLeve(file, cat);
    if (!arq) {
      alert(`"${file.name}" tem mais de ${LIMITE_MB} MB e não entra no zip. Hospede o arquivo e adicione a URL.`);
      return;
    }
    onChangeArquivos([...arquivos.filter((a) => a.caminho !== arq.caminho), arq]);
  };

  return (
    <div className="space-y-4">
      <p className="text-sm text-nevoa/75">
        Tudo aqui é <strong className="text-marfim">opcional</strong>. Arquivos acima de {LIMITE_MB} MB não entram
        no zip — informe a URL onde estão hospedados.
      </p>

      <div className="grid gap-4 lg:grid-cols-2">
        {CATEGORIAS.map((cat) => {
          const midiasCat = midias.filter((m) => m.categoria === cat.id);
          const arquivosCat = arquivos.filter((a) => a.caminho.startsWith(`${cat.id}/`));
          return (
            <MediaBlock
              key={cat.id}
              titulo={cat.titulo}
              descricao={cat.descricao}
              permiteUpload={cat.permiteUpload}
              origensPermitidas={cat.origens}
              midias={midiasCat}
              arquivos={arquivosCat}
              onAddMidia={(m) => onChangeMidias([...midias, { ...m, categoria: cat.id }])}
              onAddArquivo={(file) => addArquivo(cat.id, file)}
              onRemoveMidia={(i) => onChangeMidias(midias.filter((x) => x !== midiasCat[i]))}
              onRemoveArquivo={(caminho) => onChangeArquivos(arquivos.filter((a) => a.caminho !== caminho))}
            />
          );
        })}
      </div>
    </div>
  );
}

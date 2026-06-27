# PROMPT — Imagens das turmas (Bússola dos Aspirantes)

> Cole este arquivo inteiro no **Claude Code** dentro do repositório local.
> Ele instala uma arte (emblema) para **cada turma** da hierarquia e faz a
> geração das imagens **pelo Codex** (modelo de imagem), salvando-as no repo e
> ligando-as aos cards de navegação por turma.

---

## Contexto do repositório (não mude isto, só siga)

- Plataforma **Astro estática**, tema visual `naval-command`. Paleta oficial
  (use exatamente estas cores nas artes):
  - `--azul-naval: #0B1220` · `--azul-aco: #1E3A5F` · `--azul-acinz: #334155`
  - `--dourado: #D6A84F` · `--marfim: #F7F3EA` · `--cinza-texto: #CBD5E1`
  - `--verde: #22C55E` · `--vermelho: #EF4444`
- As turmas existem em `src/utils/hierarchy-constants.ts`:
  `CA-HE, CA-HM, CA-HS, FN-HE, FN-HM, FN-HS, IM` (+ `geral`).
- Os cards de turma são renderizados em `src/pages/ano/[...segmentos].astro`
  (nível `turmas`) através de `src/components/cursos/NavCard.astro`, que **hoje
  não exibe imagem**.
- Imagens de plataforma vivem em `public/imagens/plataforma/`.

---

## Etapa 1 — Gerar as imagens com o Codex

Peça ao **Codex** para gerar **8 imagens** (uma por turma + `geral`), em
**PNG quadrado 1024×1024, com fundo opaco** (não transparente), no estilo de
**emblema/brasão circular militar naval**, traço limpo, alto contraste, legível
quando reduzido a ~96 px. **Sempre** harmonize com a paleta `naval-command`
(dourado `#D6A84F` como cor de destaque/contorno, e azul-naval `#0B1220` como
base quando não houver cor específica pedida). Sem texto, exceto onde indicado.

Gere e salve **exatamente** nestes caminhos:

| Arquivo | Turma | Descrição da arte (prompt de imagem) |
|---|---|---|
| `public/imagens/plataforma/turmas/ca-he.png` | CA-HE | **Lobo verde** estilizado, visto de frente, **dentro de um anel de radar** (varredura circular com linhas concêntricas e blip), **fundo verde** (`#16331f`→`#22C55E`). Contorno dourado. Tema: "lobo dos eletrônicos". |
| `public/imagens/plataforma/turmas/ca-hm.png` | CA-HM | **Bode preto** de perfil **empurrando uma engrenagem com as patas dianteiras**. Engrenagem metálica/dourada. Fundo azul-naval escuro com leve textura de aço. Tema: maquinistas. |
| `public/imagens/plataforma/turmas/ca-hs.png` | CA-HS | **Canhão naval de 3 bocas (torre tripla)** apontado **para fora da tela** (em perspectiva, em direção ao observador). Texto **"HS"** em destaque dourado **na parte de baixo** da imagem. Fundo azul-naval. Tema: armamentistas. |
| `public/imagens/plataforma/turmas/fn-he.png` | FN-HE | **Fuzileiro Naval** (capacete/farda de FN, cor verde-oliva) com tema de **eletrônicos**: antena/radar portátil, rádio de campanha ou placa de circuito ao fundo. Detalhes dourados. Tema: FN eletrônicos. |
| `public/imagens/plataforma/turmas/fn-hm.png` | FN-HM | **Fuzileiro Naval** + **viatura anfíbia** (blindado anfíbio tipo CLAnf/AAV saindo da água para a praia). Verde-oliva, água ao fundo. Tema: FN maquinistas. |
| `public/imagens/plataforma/turmas/fn-hs.png` | FN-HS | **Fuzileiro Naval armamentista**: fuzil/armamento pesado em destaque, munição, postura de combate. Verde-oliva com acentos dourados. Tema: FN armamentistas. |
| `public/imagens/plataforma/turmas/im.png` | IM | Uma **folha de acanto dourada** estilizada (ornamento clássico), centralizada, sobre fundo azul-naval escuro. Elegante, simétrica. Tema: Intendência da Marinha. |
| `public/imagens/plataforma/turmas/geral.png` | GERAL | **Bússola/rosa-dos-ventos dourada** sobre fundo azul-naval (matérias comuns a todas as turmas). *(Opcional — gere se possível para manter consistência.)* |

Diretrizes comuns para o Codex em **todas**:
- Estilo coeso entre as 8 (mesma "família" visual de emblema circular).
- Composição centralizada, com margem segura; nada essencial encostando na borda.
- Sem marca d'água, sem texto extra (apenas o "HS" pedido em CA-HS).
- Salvar como PNG 1024×1024 nos caminhos exatos da tabela.

Se o Codex só conseguir gerar em outra pasta/temporário, **mova** os arquivos
para os caminhos exatos acima antes de seguir.

---

## Etapa 2 — Ligar as imagens aos cards de turma

1. **`src/components/cursos/NavCard.astro`** — adicione uma prop opcional
   `imagem?: string` e, quando presente, renderize uma faixa de imagem no topo
   do card (mantendo o visual `naval-command`). Sugestão:
   - adicionar `imagem?: string` à `interface Props` e ao destructuring;
   - antes do bloco de `badge`/título, renderizar condicionalmente:
     ```astro
     {imagem && (
       <div class="-mx-6 -mt-6 mb-2 overflow-hidden rounded-t-xl border-b border-dourado/20">
         <img src={imagem} alt={`Emblema da turma ${titulo}`} loading="lazy"
              class="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105" />
       </div>
     )}
     ```
   - garanta que isso não quebra os cards sem imagem (semestres/épocas).

2. **`src/pages/ano/[...segmentos].astro`** — no bloco `nivel === 'turmas'`,
   passe a imagem de cada turma. Monte o caminho a partir do slug da turma
   (minúsculo): `/imagens/plataforma/turmas/${t.toLowerCase()}.png`.
   - adicione `imagem` ao tipo `Card`;
   - no `.map` das turmas, inclua
     `imagem: \`/imagens/plataforma/turmas/${t.toLowerCase()}.png\``;
   - repasse `imagem={c.imagem}` no `<NavCard ... />`.

   *(As turmas no array já vêm como `CA-HE`, `IM`, `geral` etc.; `.toLowerCase()`
   casa com os nomes de arquivo `ca-he.png`, `im.png`, `geral.png`.)*

---

## Etapa 3 — Validar e finalizar

1. `npm run validate-content` (deve continuar passando — não mexa em conteúdo).
2. `npm run build` (garanta que o build estático conclui sem erro).
3. Confira visualmente em `/ano/4` (nível de turmas do 4° ano) que cada card
   mostra a sua arte.
4. **Commit** das imagens + alterações em `NavCard.astro` e
   `[...segmentos].astro` na branch de trabalho, com mensagem descritiva
   (ex.: `feat: emblemas de imagem por turma na navegação`), e **push**.

> Observação de mídia: PNGs de emblema são leves o suficiente para ficar
> versionados no repo (regra de mídia do projeto permite imagens leves). Se algum
> arquivo passar de ~500 KB, otimize/comprima antes do commit.

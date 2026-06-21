Guia operacional para transformar uma matéria bruta, com fontes, slides, provas antigas, áudios, vídeos e orientações do professor, em um curso organizado para a plataforma **Bússola dos Aspirantes**.

O objetivo deste processo é evitar que a matéria vire um monte de blocos soltos. A lógica central é criar primeiro um **esqueleto coeso** da disciplina, depois popular cada tópico com resumos, questões, mídias, revisões e materiais prontos para o site.

## 0. Como este guia se conecta ao assistente

O fluxo completo é:

1. **Você** lê este guia, usa os prompts nas ferramentas de IA (ChatGPT, NotebookLM) e produz os materiais.
2. **Você** abre o assistente em **/adicionar-curso**, preenche os campos e cola o que produziu (linha do tempo, questões, links de mídias).
3. O assistente gera um **arquivo `.zip`** com tudo organizado + um `PROMPT_CLAUDE.md` dinâmico.
4. Você (ou o mantenedor) entrega o `.zip` ao **Claude Code**, que instala o curso na plataforma.

**Formatos aceitos pelo assistente:**

| Etapa no assistente | O que colar | Formatos aceitos |
|---|---|---|
| Linha do tempo | A lista de tópicos gerada pelo ChatGPT | Numerada (`1. Título`), markdown (`## Título`) ou chave-valor (`Título: X`) |
| Exercícios | As questões geradas, agrupadas por dificuldade+tipo | Texto numerado, uma por bloco em branco, ou chave-valor (`Enunciado: X / Gabarito: Y`) |
| Mídias | URLs de vídeos/áudios e arquivos ≤ 20 MB | Links diretos (YouTube, CDN) ou upload de arquivo |

O assistente entende os dois formatos principais deste guia: o **numerado** (listas) e o **chave-valor** (modelo `Título:/Objetivo:/Pegadinhas:`).

## 1. Princípio geral do fluxo

A produção de um curso deve seguir esta ordem:

1. **Organizar as fontes** da matéria.
2. **Gerar a linha do tempo**, que será o esqueleto lógico do curso.
3. **Gerar resumos longos e completos** para cada tópico.
4. **Gerar questões por dificuldade e por tipo**.
5. **Gerar áudios/podcasts/debates** para cada tópico.
6. **Gerar um vídeo de revisão geral** da matéria.
7. **Organizar tudo em pastas padronizadas**.
8. **Entregar para o Claude Code planejar ou implementar no site**.

A linha do tempo é a etapa mais importante. Sem ela, cada conteúdo fica independente, e o curso perde coesão. Com ela, cada aula passa a ter uma função dentro da trilha de aprendizado.

## 2. Estrutura final da pasta da matéria

Crie uma pasta com o nome da matéria. Dentro dela, use uma estrutura parecida com esta:

```text
NomeDaMateria/
├── Fontes/
│   ├── Slides/
│   ├── Livros/
│   ├── ProvasAntigas/
│   ├── OrientacoesProfessor/
│   ├── ImagensOriginais/
│   └── Outros/
├── LinhaDoTempo/
│   ├── LinhaDoTempo.docx
│   ├── LinhaDoTempo.pdf
│   └── prompt-linha-do-tempo.md
├── Resumos/
│   ├── 00-introducao/
│   │   ├── resumo.docx
│   │   └── prompt-resumo.md
│   ├── 01-topico/
│   │   ├── resumo.docx
│   │   └── prompt-resumo.md
│   └── 99-revisao-final/
├── Questoes/
│   ├── Prompts/
│   ├── Faceis/
│   ├── Medias/
│   ├── Dificeis/
│   ├── Gabaritos/
│   └── ResolucaoComentada/
├── Audios/
│   ├── 00-introducao/
│   ├── 01-topico/
│   └── 99-revisao-final/
├── Videos/
│   ├── prompt-video-geral.md
│   └── video-revisao-geral/
├── Imagens_Diagramas/
│   ├── Circuitos/
│   ├── FormasDeOnda/
│   ├── MapasMentais/
│   └── AdaptadasParaSite/
├── PromptsGerais/
│   ├── 01-linha-do-tempo.md
│   ├── 02-resumo-por-topico.md
│   ├── 03-questoes.md
│   ├── 04-audio-por-topico.md
│   ├── 05-video-geral.md
│   └── 06-planejamento-site.md
└── ManifestoDoCurso.md
```

Nomes de arquivos devem seguir a numeração da linha do tempo: 00-introducao, 01-primeiro-topico, 02-segundo-topico, até 99-revisao-final.

## 3. Etapa 1 — Gerar a linha do tempo

### Objetivo

Gerar o **esqueleto da matéria**: uma sequência lógica de tópicos, começando em 00 - Introdução e contexto da matéria, passando por todos os conteúdos cobrados e terminando em 99 - Revisão final.

Essa etapa deve ser feita no ChatGPT, usando todas as fontes disponíveis e todas as orientações do professor. A saída ideal é um arquivo Word chamado LinhaDoTempo.docx.

### O que entregar nessa etapa

A linha do tempo deve conter, para cada tópico:

- número;
- nome do tópico;
- objetivo;
- por que vem nessa posição;
- pré-requisitos;
- conteúdos internos;
- fórmulas, se houver;
- tipos de questão esperados;
- pegadinhas;
- fontes principais;
- prioridade de estudo;
- observações para o site.

### Prompt genérico — Linha do tempo

```text
# Contexto
Estou criando um curso completo para a plataforma Bússola dos Aspirantes. A matéria será transformada em uma trilha de estudo sequencial, com mini-matérias numeradas, conteúdos, resumos, questões, gabaritos, imagens, mídias e revisão final.

# Fontes
Use exclusivamente as fontes que estou enviando nesta conversa: slides, PDFs, livros, provas antigas, resumos, áudios transcritos, imagens e orientações do professor.

Não use fontes externas. Não pesquise na internet. Não complete lacunas com conhecimento não fornecido sem sinalizar claramente como hipótese.

# Objetivo
Percorra todas as fontes, entenda a lógica da matéria e crie uma Linha do Tempo de estudo. Essa linha deve ser o esqueleto do curso.

A sequência deve começar em:
00 - Introdução e contexto geral da matéria

Depois deve seguir por tópicos numerados de forma lógica e didática, até o último conteúdo, e terminar em:
99 - Revisão final

# Regras
- A ordem deve ter coesão, não ser apenas a ordem em que os arquivos foram enviados.
- Cada tópico deve depender logicamente do anterior, quando fizer sentido.
- Cada tópico deve ter nome curto, objetivo claro e prioridade.
- Separe conteúdos grandes em mini-matérias menores.
- Não misture assuntos demais em uma única mini-matéria.
- Indique o que provavelmente cai em prova.
- Indique o que não é prioridade, se o professor tiver avisado.
- Indique quais fontes sustentam cada tópico.
- Marque pontos de baixa confiança como “precisa conferir”.

# Formato de saída
Gere a linha do tempo em formato organizado para virar documento Word.

Para cada tópico, use este modelo:

Número:
Slug sugerido:
Título:
Objetivo:
Por que vem aqui:
Pré-requisitos:
Conteúdos internos:
Fórmulas / conceitos-chave:
Tipos de questão esperados:
Pegadinhas:
Fontes principais:
Prioridade: máxima / alta / média / baixa
Tempo estimado:
Observações para o site:

# Final
Ao final, gere também:
1. Um mapa geral da matéria.
2. Uma ordem recomendada de estudo.
3. Uma lista de conteúdos que precisam de mais atenção.
4. Uma lista de pendências ou pontos de baixa confiança.
```

## 4. Etapa 2 — Gerar resumos por tópico

### Objetivo

Gerar um resumo **rico, longo e bem explicado** para cada tópico da linha do tempo.

O resumo deve ser suficiente para alimentar o site. Se o resumo for curto demais, o site parecerá vazio. Cada tópico precisa ter conteúdo real: explicação, raciocínio, exemplos, fórmulas, comparações, pegadinhas e fechamento.

Essa etapa deve ser feita no NotebookLM, porque ele trabalha diretamente com as fontes carregadas.

### Organização

Para cada tópico, crie uma pasta:

```text
Resumos/01-nome-do-topico/
├── resumo.docx
└── prompt-resumo.md
```

### Prompt genérico — Resumo por tópico

```text
Você é um professor especialista na matéria e está criando o conteúdo de uma mini-matéria para um curso online da plataforma Bússola dos Aspirantes.

# Tópico
Mini-matéria: [NÚMERO E NOME DO TÓPICO]

# Fontes
Use exclusivamente as fontes carregadas neste NotebookLM. Priorize as orientações do professor, slides e materiais diretamente relacionados à prova. Use livros e fontes complementares apenas para aprofundar a explicação.

Não use conteúdo externo. Não invente exemplos sem dizer que são adaptações.

# Objetivo
Crie um resumo longo, didático e completo sobre este tópico. O texto será usado como base de uma aula escrita no site, então precisa ter densidade e conteúdo suficiente.

# Estrutura obrigatória
1. Introdução do tópico: para que ele serve e por que está na matéria.
2. Conexão com o tópico anterior e com a prova.
3. Conceitos fundamentais.
4. Explicação técnica passo a passo.
5. Fórmulas importantes, quando houver.
6. Como resolver questões desse tópico.
7. Exemplo guiado, mesmo que seja adaptado das fontes.
8. Pegadinhas e erros comuns.
9. Comparações com assuntos parecidos.
10. Checklist de domínio.
11. Resumo final em poucas linhas.

# Estilo
- Português do Brasil.
- Linguagem didática, mas técnica.
- Não seja superficial.
- Explique o motivo real de cada passo.
- Quando houver cálculo, mostre o raciocínio.
- Quando houver circuito, explique o comportamento dos componentes.
- Quando houver forma de onda, descreva máximo, mínimo, condução, corte, carga, descarga e intervalos relevantes.

# Tamanho
Faça um resumo substancial. Não entregue um texto curto. O conteúdo deve ser suficiente para virar uma página completa do site.

# Confiabilidade
Ao final, inclua:
- Fontes usadas.
- Pontos de alta confiança.
- Pontos que precisam de conferência.
```

## 5. Etapa 3 — Gerar questões

### Objetivo

Gerar um banco grande de questões para o curso. A recomendação é produzir pelo menos:

- 30 questões fáceis;
- 30 questões médias;
- 30 questões difíceis.

Para aumentar a qualidade, não peça tudo em um prompt só. Gere prompts separados por:

- dificuldade;
- tipo de questão;
- tópico ou conjunto de tópicos.

Exemplo:

- discursivas fáceis;
- objetivas fáceis;
- verdadeiro/falso fácil;
- objetivas médias;
- cálculo médio;
- discursivas difíceis;
- interpretação de imagem difícil.

### Tipos recomendados

Use tipos adequados à matéria:

- múltipla escolha conceitual;
- múltipla escolha com cálculo;
- verdadeiro/falso;
- associação de colunas;
- discursiva curta;
- discursiva longa;
- interpretação de circuito, gráfico, tabela ou imagem;
- resolução numérica;
- questão de pegadinha;
- questão de revisão final misturando tópicos.

### Prompt genérico — Questões por dificuldade e tipo

```text
Você é um professor elaborador de questões para a plataforma Bússola dos Aspirantes.

# Matéria
[INSERIR NOME DA MATÉRIA]

# Tópico(s)
[INSERIR TÓPICO OU LISTA DE TÓPICOS]

# Tipo de questão
[INSERIR: objetiva, discursiva, verdadeiro/falso, associação, cálculo, interpretação de circuito, interpretação de imagem, etc.]

# Dificuldade
[INSERIR: fácil, média ou difícil]

# Quantidade
Gere [NÚMERO] questões.

# Fontes
Use exclusivamente as fontes disponíveis neste NotebookLM. Não use fontes externas. Não invente conteúdo não sustentado pelas fontes.

# Objetivo
As questões devem treinar o aluno para a prova real. Elas devem cobrar raciocínio, não apenas memorização.

# Regras de qualidade
- Cada questão deve estar ligada a uma fonte ou tópico da matéria.
- A dificuldade deve ser coerente.
- As alternativas erradas devem ser plausíveis.
- Evite questões genéricas demais.
- Inclua pegadinhas baseadas em erros comuns.
- Em questões de cálculo, mostre dados suficientes.
- Em questões com circuito ou imagem, descreva claramente o circuito se não for possível inserir a imagem.
- Não copie literalmente a fonte sem necessidade; adapte com fidelidade.

# Formato obrigatório de cada questão
ID:
Tópico:
Dificuldade:
Tipo:
Competência cobrada:
Enunciado:
Alternativas, se houver:
Gabarito:
Resolução comentada:
Pegadinha:
Fonte base:
Nível de confiança: alta / média / baixa

# Resolução comentada
A resolução deve ser didática, mostrando o passo a passo e o motivo real da resposta. Não basta dizer a alternativa correta.

# Final
Ao final, liste quais questões precisam de conferência manual e por quê.
```

### Prompt genérico — Consolidar e revisar questões

```text
Você recebeu um conjunto de questões geradas para um curso da plataforma Bússola dos Aspirantes.

# Objetivo
Revise, padronize e consolide as questões sem criar conteúdo novo fora das fontes.

# Tarefas
1. Verifique se cada questão está clara.
2. Verifique se o gabarito é coerente.
3. Melhore enunciados confusos.
4. Padronize o formato.
5. Classifique por dificuldade.
6. Marque questões repetidas.
7. Marque questões de baixa confiança.
8. Separe questões que exigem imagem, gráfico, circuito ou tabela.

# Formato final
Entregue uma lista organizada com:
ID:
Tópico:
Dificuldade:
Tipo:
Enunciado:
Alternativas:
Gabarito:
Resolução comentada:
Fonte base:
Nível de confiança:
Status: pronta / revisar / descartar

# Regra
Não invente novas respostas. Se algo não puder ser confirmado pelas fontes, marque como revisar.
```

## 6. Etapa 4 — Gerar áudio, podcast ou debate por tópico

### Objetivo

Gerar um áudio para cada tópico da linha do tempo. O áudio pode ser em formato de aula, podcast ou debate, mas deve ser útil para estudo.

A recomendação é:

- 00-introducao: áudio falando sobre a matéria toda, com visão geral e mapa mental.
- tópicos intermediários: áudio específico sobre cada tópico.
- 99-revisao-final: áudio curto, direto e focado em véspera de prova.

### Organização

```text
Audios/
├── 00-introducao/
│   ├── prompt-audio.md
│   └── roteiro-ou-link.txt
├── 01-topico/
│   ├── prompt-audio.md
│   └── roteiro-ou-link.txt
└── 99-revisao-final/
```

### Prompt genérico — Áudio por tópico

```text
Você é um professor da matéria [NOME DA MATÉRIA] e vai criar uma aula em áudio para a plataforma Bússola dos Aspirantes.

# Tópico
[NÚMERO E NOME DO TÓPICO]

# Fontes
Use exclusivamente as fontes carregadas neste NotebookLM. Priorize as orientações do professor, slides e materiais mais próximos da prova.

# Objetivo
Crie um áudio didático para o aluno ouvir estudando ou revisando. O áudio deve explicar o tópico de forma clara, com raciocínio e exemplos.

# Formato recomendado
Use formato de aula com dois participantes:
- Professor: explica de forma técnica e organizada.
- Aluno: faz perguntas curtas e úteis, levantando dúvidas reais.

# Estrutura do áudio
1. Abertura: o que será estudado.
2. Por que esse tópico importa.
3. Explicação dos conceitos principais.
4. Passo a passo de resolução de questões.
5. Exemplo comentado.
6. Pegadinhas comuns.
7. Revisão rápida.
8. Checklist final.

# Regras
- Não transforme em conversa superficial.
- Não faça piadas que atrapalhem o estudo.
- Não fuja das fontes.
- Não invente conteúdo.
- Se houver cálculo, explique o raciocínio verbalmente.
- Se houver circuito, descreva o comportamento dos componentes.
- Se houver imagem ou gráfico, descreva o que o aluno deve observar.

# Duração
Ajuste a duração conforme o tópico:
- Introdução: 8 a 15 minutos.
- Tópicos normais: 10 a 20 minutos.
- Revisão final: 15 a 25 minutos.

# Saída
Entregue um roteiro pronto para geração de áudio, com falas separadas por locutor.
```

## 7. Etapa 5 — Gerar vídeo geral da matéria

### Objetivo

Gerar um vídeo de revisão geral da matéria, não um vídeo para cada tópico. A ideia é criar uma visão completa, com os principais pontos, relações entre tópicos, fórmulas e estratégias de prova.

O vídeo deve ficar salvo na pasta:

```text
Videos/
├── prompt-video-geral.md
└── video-revisao-geral/
```

### Prompt genérico — Vídeo geral da matéria

```text
Você é um professor especialista em [NOME DA MATÉRIA] e vai criar um roteiro de vídeo de revisão geral para a plataforma Bússola dos Aspirantes.

# Fontes
Use exclusivamente as fontes carregadas neste NotebookLM. Priorize a linha do tempo, orientações do professor, slides e materiais mais próximos da prova.

# Objetivo do vídeo
Criar uma revisão completa da matéria, cobrindo todos os tópicos da linha do tempo em ordem lógica.

O vídeo deve ajudar o aluno a:
- entender a estrutura geral da matéria;
- revisar os conceitos principais;
- lembrar fórmulas;
- reconhecer tipos de questão;
- evitar pegadinhas;
- saber como começar a resolver problemas.

# Estrutura obrigatória
1. Abertura: apresentação da matéria e da lógica geral.
2. Mapa da linha do tempo.
3. Explicação resumida de cada tópico.
4. Conexões entre tópicos.
5. Fórmulas principais.
6. Tipos de questão que podem aparecer.
7. Pegadinhas recorrentes.
8. Estratégia de prova.
9. Revisão final em ritmo rápido.
10. Encerramento com checklist.

# Regras
- Não use conteúdo externo.
- Não invente tópico fora das fontes.
- Não seja superficial.
- Se houver circuitos, gráficos, mapas ou imagens, indique em que momento eles devem aparecer.
- Para cada cena, diga qual visual deve acompanhar a explicação.
- O vídeo deve ter começo, meio e fim.

# Duração sugerida
Entre 20 e 35 minutos, salvo se a matéria for muito pequena.

# Formato de saída
Entregue em formato de roteiro com:
Cena:
Tempo aproximado:
Narração:
Visual recomendado:
Observações:
```

## 8. Etapa 6 — Salvar e organizar as fontes

### Objetivo

Garantir que todo conteúdo gerado seja rastreável. O curso precisa ter uma pasta Fontes/, com os arquivos originais usados.

Isso evita perda de contexto, reduz alucinação e permite conferir gabaritos, resumos e explicações.

### Regras

- Nunca misture fonte original com conteúdo gerado.
- Não altere o arquivo original.
- Mantenha provas antigas separadas de slides e livros.
- Salve orientações do professor em uma pasta própria.
- Se houver áudio transcrito, salve o áudio e a transcrição.
- Se houver imagem importante, salve a original e depois a versão adaptada em outra pasta.

### Prompt genérico — Manifesto das fontes

```text
Você é responsável por organizar as fontes de uma matéria para criação de um curso.

# Objetivo
Crie um manifesto das fontes disponíveis, classificando cada arquivo e indicando como ele deve ser usado na criação do curso.

# Estrutura da resposta
Para cada fonte, informe:
Nome do arquivo:
Tipo: slide / livro / prova antiga / orientação do professor / áudio / vídeo / imagem / resumo / outro
Assunto principal:
Tópicos da linha do tempo que ela sustenta:
Prioridade: alta / média / baixa
Confiabilidade: alta / média / baixa
Observações:

# Regras
- Não crie conteúdo técnico novo.
- Apenas organize e classifique.
- Marque arquivos ilegíveis ou incompletos.
- Marque arquivos que precisam de OCR, transcrição ou melhoria visual.
```

## 9. Checklist final de qualidade

Antes de considerar o curso pronto, verifique:

### Conteúdo

- A linha do tempo começa em 00-introducao e termina em 99-revisao-final.
- Cada tópico tem resumo completo.
- Nenhum tópico importante ficou sem conteúdo.
- Os resumos não são superficiais.
- As fontes estão rastreáveis.
- O conteúdo segue a orientação do professor.

### Questões

- Há questões fáceis, médias e difíceis.
- Há variedade de tipos de questão.
- O gabarito está presente.
- A resolução é comentada.
- As questões difíceis realmente exigem raciocínio.
- Questões de baixa confiança foram marcadas para revisão.

### Mídias

- Cada tópico importante tem áudio ou roteiro.
- Existe vídeo geral da matéria.
- As mídias estão salvas em pastas claras.
- Os nomes dos arquivos seguem a numeração da linha do tempo.

### Imagens e diagramas

- Circuitos e imagens foram preservados ou redesenhados.
- Prints ruins não foram jogados diretamente no site.
- Diagramas têm legenda e contexto.
- Imagens adaptadas ficam separadas das originais.

### Site

- A estrutura respeita a Bússola dos Aspirantes.
- O curso tem `_config.json` correto.
- As mini-matérias têm `_dados.json`.
- Os bancos de dados do curso estão em `src/data/cursos/<slug>/`.
- O conteúdo não depende de backend.
- O progresso continua usando localStorage.

## 11. Regra de ouro

Nunca comece o site pelo conteúdo final. Comece pela linha do tempo.

A linha do tempo é o mapa. Os resumos são o corpo. As questões são o treino. As mídias são reforço. As fontes são a garantia de confiabilidade. O site é apenas a forma organizada de entregar tudo isso.

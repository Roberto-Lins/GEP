# Curso, Estrutura e Conteúdo — o modelo conceitual

> Documento conceitual. Explica a distinção que sustenta toda a evolução da plataforma.
> Referências: ADRs [0008](../adr/0008-curso-vs-estrutura.md), [0009](../adr/0009-arvore-generica-de-conteudo.md),
> [0010](../adr/0010-escola-naval-estrutura-do-roberto.md) e o
> [planejamento](../PLANEJAMENTO-EVOLUCAO-BUSSOLA.md).

## TL;DR

- **Curso ≠ Estrutura ≠ Conteúdo.** São três coisas diferentes.
- Um **curso** pode conter **várias estruturas**; cada estrutura **pertence a um autor** e tem **árvore
  própria**.
- "Ano", "turma", "semestre", "prova", "matéria" são **nomes de pastas** da estrutura que **o Roberto**
  criou — **não** são tabelas nem níveis obrigatórios da plataforma.
- **Nenhum usuário** é obrigado a reproduzir essa organização.
- A experiência atual é **preservada**; ela é a *renderização da estrutura do Roberto*, não uma regra
  do núcleo.

## As três camadas

```
Curso / espaço            (tem um dono claro; pode ser público ou privado)
└── Estrutura             (uma organização/trilha de um autor; N por curso)
    └── Nó (node)         (árvore recursiva: pasta · subpasta · seção · módulo · tópico · página)
        └── Conteúdo      (resumo/aula; curated = MDX; community = blocos sanitizados)
```

### Curso
Espaço de estudo com **proprietário**. Pode hospedar a estrutura oficial do dono **e** estruturas de
colaboradores (quando o curso permitir contribuições). Visibilidade é uma *state machine*
(`draft → private → public → archived`), não um booleano (ver planejamento §2.7).

### Estrutura
Uma forma de organizar o estudo, **com autor**. Um mesmo curso pode ter a estrutura oficial do dono e
estruturas alternativas de outros autores. Cada estrutura tem a sua **própria árvore de nós**.

### Nó (node)
Unidade recursiva da árvore (`parent_id` aponta para o pai). O **tipo** do nó (`kind`) é um conjunto
controlado (pasta, subpasta, seção, módulo, tópico, página, agrupador); o **título** é livre,
escolhido pelo autor.

### Conteúdo
O que vive dentro de um nó-página:
- **`curated`** — MDX + componentes React aprovados, escrito por mantenedores confiáveis, compilado em
  build (como hoje). Pode ter widgets ricos.
- **`community`** — documento de **blocos** validados por schema e sanitizados; **sem** código
  ([ADR 0006](../adr/0006-proibir-codigo-arbitrario-ugc.md)).

## Exemplos de estruturas (todas válidas)

```
Medicina                 Concurso Público         Estudo Pessoal        Engenharia
├─ Cardiologia           ├─ Edital                ├─ Semana 1           ├─ Projetos
│  ├─ Insuf. cardíaca    ├─ Português             ├─ Semana 2           ├─ Cálculos
│  └─ Arritmias          ├─ Matemática            └─ Revisões           ├─ Anotações
└─ Gastroenterologia     └─ Simulados                                   └─ Exercícios
```

Nenhuma delas usa "ano/turma/semestre". Isso é proposital.

## A estrutura do Roberto (Escola Naval)

A organização atual é, conceitualmente:

```
Curso/espaço: Escola Naval         (privado, acessível por link — decisão do proprietário)
└── Estrutura: "Escola Naval — por Roberto"     (autor: Roberto)
    └── Nós (pastas escolhidas pelo autor):
        1º/2º/3º/4º Ano → Turma → Semestre → Época/Prova → Matéria → Tópico
            └── Conteúdo: resumos, vídeos, áudios, exercícios, ferramentas (curated)
```

Ou seja: **ano/turma/semestre/prova são rótulos de pastas da estrutura do Roberto**, não o modelo
universal. Hoje isso já vive como **dados** (`_config.json` + `src/utils/hierarchy.ts`), e **não** há
`if (slug === ...)` — o que já está alinhado com este documento.

## Regras permanentes (invariantes)

1. **Nunca** condicionar lógica permanente a um slug específico (`escola-naval`, `gep`, …).
   "Curado/verificado" e "privado/link" são **capacidades** atribuíveis a qualquer curso.
2. O núcleo futuro modela **árvores genéricas** (`courses/structures/nodes/content`), nunca
   `school_years/classes/semesters`.
3. A experiência atual é **preservada por compatibilidade** (rotas, URLs, temas), como renderização da
   estrutura do Roberto — não como obrigação para os demais usuários.

## O que muda em cada fase (resumo)

- **Fase 1 (atual):** identidade/auth ao lado do conteúdo. A Escola Naval some da **vitrine** pública
  (`/` vira landing; campus em `/estudar`, por link). Privacidade ainda **não é imposta** (conteúdo
  curado segue servido como estático). Nenhuma tabela de curso/estrutura criada ainda.
- **Fase 2+:** `courses/structures/nodes` no banco; a Escola Naval vira um **curso `curated` privado**
  da conta do Roberto, com a hierarquia atual virando `nodes`; URLs preservadas por resolução
  dinâmica/aliases; então liga-se a **privacidade imposta + acesso por link** (`course_access_grants`).

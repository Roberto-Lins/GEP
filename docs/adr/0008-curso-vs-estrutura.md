# ADR 0008 — Curso ≠ estrutura criada por usuário

**Status:** Aceito · **Fase:** 0 (decisão) · modelo de dados em fase futura

## Contexto
A organização atual (Ano→Turma→Semestre→Época→Matéria→Tópico) **não é** o modelo universal da
plataforma. É uma **estrutura de estudos que o Roberto criou** dentro do espaço "Escola Naval".
Outros usuários poderão organizar de formas completamente diferentes (ex.: Medicina → Cardiologia →
Arritmias; Concurso → Edital/Português/Simulados; Estudo Pessoal → Semana 1/2/3).

## Decisão
Separar conceitualmente **Curso** de **Estrutura**:
- **Curso** = espaço com um dono claro.
- **Estrutura** = uma trilha/organização **pertencente a um autor**, com **árvore própria**. Um curso
  pode conter **várias** estruturas (a oficial do dono + estruturas de colaboradores).

Os nomes "ano", "turma", "semestre", "prova", "matéria" são **rótulos de pastas** escolhidos pelo
autor — **nunca** tabelas/níveis obrigatórios do sistema.

## Motivos
- Liberdade do usuário é requisito central do novo produto.
- Evita modelar o banco como `school_years/classes/semesters/...` (rígido e errado).

## Consequências
- O futuro modelo será genérico: `courses → structures → nodes → content` (ADR 0009).
- Nenhuma checagem condicionada a um curso específico (ADR 0010).

## Riscos
- Tentação de "hardcodar" a hierarquia da EN por conveniência → proibido; tratá-la como dados.

## Alternativas consideradas
- **Hierarquia fixa ano/turma/semestre como núcleo:** descartada (não-genérica; contraria o brief).

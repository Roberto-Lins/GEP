# NE-INS — Naval Electronics (International Naval Semester, Accademia Navale)

Curso **extra**: não faz parte do currículo da Escola Naval. Usa o campo opcional `extra` do
`_config.json`, que tira o curso de turmas/semestres/épocas e o lista só na seção **Extras** da tela
raiz do ano (`/ano/4#extras`). O botão Voltar do curso aponta para essa seção.

- Slug `ne-ins`, arquitetura **curso único**. Prova escrita: 16/10/2026 (Electr L1 p. 4).
- Fontes: `N.E. Exam.pdf` (prova de 2025, gabarito oficial) e `Electr L1–L5 2026.pdf`.
- 12 módulos (`00`–`11`) + `99-revisao-final`; 93 conceitos (`C001`–`C093`).
- Banco: 30 questões da prova de 2025 (`NE-P25-Qnn`, fiéis) + 142 inéditas (`NE-Mxx-nnn`), todas de
  múltipla escolha em inglês com comentário em português. Três simulados de 30: SG01 = prova de 2025;
  SG02/SG03 = inéditas disjuntas na proporção de assuntos de 2025.
- 49 figuras originais dos slides (`figuras.json`, V1), exibidas por `FiguraFonte`.
- **Gerado:** `python3 scripts/autoria/ne-ins/build.py --gerar` produz `question-bank.json`,
  `matriz-cobertura.json`, `modulos.json` e os `_dados.json` a partir de `conteudo.py` e
  `prova-2025.json`. Não edite esses JSON à mão. As aulas (`aula.mdx`) são editadas diretamente.
- Lacunas e conflitos das fontes: `src/data/cursos/ne-ins/registro-lacunas-conflitos.json`.

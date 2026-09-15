# NAV-4 T2 — registro de autoria e validação

Data de referência: 15 de setembro de 2026.

## Recorte adotado

- Correções de altura de estrela, planeta e Lua.
- Linha de posição astronômica.
- Elementos determinativos da reta de altura pela Tábua Radler.
- Hora e latitude na passagem meridiana superior do Sol.
- Exclusão explícita do conteúdo posterior ao limite da T2/PP2 indicado pelo professor.

## Corpus analisado

- 1.118 itens e 82 pastas inventariados no Drive de NAV-4.
- Páginas 139–180 da apostila examinadas.
- 237 slides extraídos e lidos.
- Orientações manuscritas, SOPAs, provas, resumos e materiais de revisão confrontados.
- Seis videoaulas do professor vinculadas aos módulos correspondentes, incluindo a UE 10.0 Radler com corte em 13:00.

O inventário bruto do Drive foi usado apenas na ingestão e não integra a publicação, para não expor a listagem completa do acervo. As fontes diretamente relevantes, com links individuais, estão em `src/data/cursos/_familias/nav4-t2/fontes-manifesto.json`.

## Decisões didáticas

- Os quatro blocos anunciados aparecem em todas as modalidades.
- Em Radler, o núcleo conceitual da prova segue a UE 10.0 até 13:00; o preenchimento completo do DHN-0607 foi separado como apoio ao trabalho de 2,0 entregue no dia da T2.
- O modo rápido prioriza o algoritmo de prova; o modo pra safar acrescenta explicação e treino; o completo integra mecanismos, exceções e verificação.
- Exemplos de anos anteriores são usados somente para ensinar o procedimento.
- Todo exercício dependente de efemérides em 2026 exige consulta ao Almanaque Náutico 2026 do aluno. Nenhum valor anual foi inventado ou transplantado de edição antiga.
- Os problemas numéricos trazem roteiro de busca, sinais, ordem de cálculo e controles de plausibilidade.

## Resultado técnico

- `npm run validate-content`: aprovado, 0 erros e 0 avisos.
- `npm test`: 17 arquivos e 117 testes aprovados.
- `npm run build`: aprovado, 322 páginas estáticas geradas.
- `npm run validate-sync`: aprovado.
- `npm run audit-modalidades`: família e três modalidades reconhecidas.
- `npm run audit-media`: nenhum arquivo pesado acrescentado por NAV-4.
- Cinco figuras SVG técnicas renderizadas e inspecionadas.

O validador matemático estrito do repositório ainda acusa erros anteriores em `det-t2` e `fas`. A inspeção delimitada aos arquivos novos de NAV-4 não encontrou delimitadores matemáticos inválidos.

## Estado de entrega

Conteúdo validado, autorizado pelo usuário para merge e pronto para publicação.

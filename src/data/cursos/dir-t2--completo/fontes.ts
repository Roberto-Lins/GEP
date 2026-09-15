import type { Fonte } from '@tipos/media';
export type { Fonte } from '@tipos/media';
export const fontes: Fonte[] = [
  {
    "titulo": "Aula 3.1 — Direito Penal Militar (75 slides)",
    "tipo": "slide",
    "descricao": "Fonte material do Capítulo 3 inteiro. Slides citados por número físico; conteúdo apenas visual dos slides 9, 14, 24, 28, 29, 33 e 34 não recuperado.",
    "topicos": [
      "00-mapa-e-metodo",
      "01-principios-e-lei-no-tempo-e-espaco",
      "02-fato-tipico-dolo-culpa-preterdolo",
      "03-ilicitude-culpabilidade-e-excludentes",
      "04-iter-criminis-tentativa-e-desistencia",
      "05-concurso-de-agentes",
      "06-crime-militar",
      "07-crimes-militares-em-especie",
      "99-revisao-final"
    ]
  },
  {
    "titulo": "Aula 4.1 — Direito Processual Penal Militar (42 slides)",
    "tipo": "slide",
    "descricao": "Fonte material da Aula 4.1 inteira: DPPM, PJM, IPM, sindicância e foro.",
    "topicos": [
      "00-mapa-e-metodo",
      "06-crime-militar",
      "08-pjm-e-instauracao-do-ipm",
      "09-oitivas-garantias-e-sigilo",
      "10-prazos-relatorio-arquivamento-e-foro",
      "11-jmu-e-stm",
      "99-revisao-final"
    ]
  },
  {
    "titulo": "Aula 4.2 — Justiça Militar da União (slides 1 a 7)",
    "tipo": "slide",
    "descricao": "Somente órgãos, composição e competência do STM; slides seguintes excluídos pela delimitação do professor.",
    "topicos": [
      "00-mapa-e-metodo",
      "11-jmu-e-stm",
      "99-revisao-final"
    ]
  },
  {
    "titulo": "Código Penal Militar — edição STM, 2ª ed., 2017",
    "tipo": "livro",
    "descricao": "Texto normativo de conferência do Capítulo 3; páginas citadas pela numeração do PDF.",
    "topicos": [
      "00-mapa-e-metodo",
      "01-principios-e-lei-no-tempo-e-espaco",
      "02-fato-tipico-dolo-culpa-preterdolo",
      "03-ilicitude-culpabilidade-e-excludentes",
      "04-iter-criminis-tentativa-e-desistencia",
      "05-concurso-de-agentes",
      "06-crime-militar",
      "07-crimes-militares-em-especie",
      "99-revisao-final"
    ]
  },
  {
    "titulo": "Código de Processo Penal Militar — edição STM",
    "tipo": "livro",
    "descricao": "Texto normativo de conferência da Aula 4.1; páginas citadas pela numeração do PDF.",
    "topicos": [
      "00-mapa-e-metodo",
      "06-crime-militar",
      "08-pjm-e-instauracao-do-ipm",
      "09-oitivas-garantias-e-sigilo",
      "10-prazos-relatorio-arquivamento-e-foro",
      "11-jmu-e-stm",
      "99-revisao-final"
    ]
  },
  {
    "titulo": "Constituição Federal — edição STF 2024 (até EC 132/2023)",
    "tipo": "livro",
    "descricao": "Princípios penais, garantias do investigado, Justiça Militar e STM.",
    "topicos": [
      "00-mapa-e-metodo",
      "01-principios-e-lei-no-tempo-e-espaco",
      "02-fato-tipico-dolo-culpa-preterdolo",
      "03-ilicitude-culpabilidade-e-excludentes",
      "04-iter-criminis-tentativa-e-desistencia",
      "05-concurso-de-agentes",
      "06-crime-militar",
      "07-crimes-militares-em-especie",
      "08-pjm-e-instauracao-do-ipm",
      "09-oitivas-garantias-e-sigilo",
      "10-prazos-relatorio-arquivamento-e-foro",
      "11-jmu-e-stm",
      "99-revisao-final"
    ]
  },
  {
    "titulo": "Estatuto dos Militares — Lei nº 6.880/1980",
    "tipo": "livro",
    "descricao": "Usado apenas no art. 42 (crime × transgressão), remetido pelo slide 59 da Aula 3.1.",
    "topicos": [
      "06-crime-militar",
      "07-crimes-militares-em-especie"
    ]
  },
  {
    "titulo": "Provas P1 2022 (solução padrão), 2023, 2024 e SOPA T1 2024",
    "tipo": "prova",
    "descricao": "Somente perfil de cobrança (formatos, densidade, crédito parcial). Nenhum fato, nome ou número foi reutilizado.",
    "topicos": [
      "00-mapa-e-metodo",
      "99-revisao-final"
    ]
  },
  {
    "titulo": "STM, HC 0000209-20.2016.7.00.0000",
    "tipo": "observacao",
    "descricao": "Ementa reproduzida no slide 25 da Aula 4.1. [NÃO CONFIRMADO NA FONTE PRIMÁRIA] inteiro teor oficial não acessado.",
    "topicos": [
      "09-oitivas-garantias-e-sigilo"
    ]
  },
  {
    "titulo": "STF, Súmula Vinculante 14; HC 109.544; Inq. 4.923",
    "tipo": "observacao",
    "descricao": "Indicados na transferência. [NÃO CONFIRMADO NA FONTE PRIMÁRIA] páginas oficiais recusaram acesso automatizado; usados apenas como ressalva, sem narrar fatos.",
    "topicos": [
      "06-crime-militar",
      "09-oitivas-garantias-e-sigilo",
      "10-prazos-relatorio-arquivamento-e-foro"
    ]
  }
];
export function fontesPorTopico(slug: string): Fonte[] { return fontes.filter((f) => f.topicos.includes(slug)); }

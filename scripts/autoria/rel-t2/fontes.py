# -*- coding: utf-8 -*-
"""Resolvedor de localizadores de fonte para a família rel-t2.

Um localizador tem a forma "CODIGO:localizacao". O código identifica o
testemunho no manifesto (src/data/cursos/_familias/rel-t2/fontes-manifesto.json)
e a localização é o título do slide, a página ou a seção.

A extração de texto dos decks NÃO preserva número de slide; por isso o
localizador canônico de fonte primária é o TÍTULO DO SLIDE.
"""

PREFIXOS = {
    # Primárias — decks das aulas internas 13 a 17
    "F01": 'AULA 12.pdf (título interno: Aula 13 — Política Externa Brasileira + Aula 14 — PND, END, PESD)',
    "F02": 'AULA 13.pdf (título interno: Aula 14 — PND, END, PESD; versão de nov/2025)',
    "F03": 'AULA 14.pdf (título interno: Aula 15 — Política Marítima, Política Naval, PEM 2040, Economia Azul)',
    "F04": 'AULA 15.pdf (título interno: Aula 16 — EUA, Unidade 2.1)',
    "F05": 'AULA 16.pdf (título interno: Aula 17 — China, Unidade 2.1)',
    # Complementares autorizadas
    "C01": 'MAGNOLI, D. — cap. 21 "O Brasil e a América Latina"',
    "C02": 'MORE, R. F. — "Reflexões sobre a formação de um pensamento oceanopolítico brasileiro"',
    "C03": 'HAESBAERT & SANTA BÁRBARA — "Da Doutrina Monroe à Doutrina Donroe" (GEOgraphia, 2026)',
    "C04": 'CRS RL32665 — "Navy Force Structure and Shipbuilding Plans"',
    "C05": 'Geopolitical Futures — "The Third Opium War" (10/01/2019)',
    "C06": 'BARTOSIAK, J. — "The Politics of Space" (25/05/2020)',
    "C07": 'LOVATT, H. (ECFR) — "O Conselho da Paz de Trump se torna global" (23/01/2026)',
    "C08": 'IDEG — "Taiwan e as Nações Unidas: a política de Uma Só China"',
    "C09": 'Nota de correspondência de páginas do livro de Magnoli',
    # Perfil de cobrança
    "P01": "P1 REL 2024 (prova corrigida)",
    "P02": "Correção da SOPA da P1 + estudo dirigido",
    "P03": "SOPA REL T1 2024",
    "P05": "Gabarito da P2 REL 2024",
    "P06": "T2_2025.pdf — critérios do trabalho de T2 de 2025",
    "P09": "REL - T1 - IM415 (resumo estruturado da T1)",
    # Anexo
    "A01": "REL - T2.pdf (resumo de Aspirante) [nível 3 — recupera explicação oral]",
    # Autoria
    "AUT": "perfil-cobranca.json + matriz-cobertura.json desta autoria",
}


def resolver(localizador: str) -> str:
    if ":" not in localizador:
        codigo, onde = localizador, ""
    else:
        codigo, onde = localizador.split(":", 1)
    if codigo not in PREFIXOS:
        raise SystemExit(f"código de fonte desconhecido: {codigo!r} em {localizador!r}")
    base = PREFIXOS[codigo]
    if not onde:
        return base
    return f"{base}, {onde}"


def resolver_todos(localizadores) -> list:
    return [resolver(x) for x in localizadores]

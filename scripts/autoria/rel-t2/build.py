#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Gerador dos artefatos da família rel-t2 (Relações Internacionais — T2).

Uso:
    python3 scripts/autoria/rel-t2/build.py --gerar
    python3 scripts/autoria/rel-t2/build.py            # só audita, não escreve

Fontes da verdade (editáveis à mão):
    conceitos_m00_m02.py, conceitos_m03_m04.py, conceitos_m05_m06.py, conceitos_m99.py
    modulos.py
    questoes/m00.py ... questoes/m06.py, questoes/m99.py, questoes/simulados.py

Artefatos GERADOS (não editar à mão):
    src/data/cursos/_familias/rel-t2/matriz-cobertura.json
    src/data/cursos/_familias/rel-t2/questoes.ts
    src/data/cursos/_familias/rel-t2/ESTADO_DO_CURSO.json
    src/content/cursos/rel-t2--<modo>/_config.json
    src/content/cursos/rel-t2--<modo>/<modulo>/_dados.json
    src/data/cursos/rel-t2--<modo>/{timeline,exercicios,checklists,midias,fontes,index}.ts

Os .mdx são autorais e NUNCA são tocados por este script.
"""
from __future__ import annotations

import json
import os
import sys
from collections import defaultdict

AQUI = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, AQUI)
sys.path.insert(0, os.path.join(AQUI, "questoes"))

RAIZ = os.path.abspath(os.path.join(AQUI, "..", "..", ".."))

from fontes import resolver_todos  # noqa: E402
import modulos as M  # noqa: E402

MODALIDADES = ["rapido", "pra-safar", "completo"]
FAMILIA = "rel-t2"

ROTULOS = {
    "rapido": "Rápido",
    "pra-safar": "Pra Safar",
    "completo": "Completo",
}


# ───────────────────────────── carregamento ──────────────────────────────
def carregar_conceitos():
    import conceitos_m00_m02, conceitos_m03_m04, conceitos_m05_m06, conceitos_m99
    lista = (conceitos_m00_m02.CONCEITOS + conceitos_m03_m04.CONCEITOS
             + conceitos_m05_m06.CONCEITOS + conceitos_m99.CONCEITOS)
    vistos = set()
    for c in lista:
        if c["id"] in vistos:
            raise SystemExit(f"concept_id duplicado: {c['id']}")
        vistos.add(c["id"])
        if c["modulo"] not in M.MODULOS_POR_SLUG:
            raise SystemExit(f"{c['id']}: módulo desconhecido {c['modulo']}")
    for c in lista:
        for d in c["dep"]:
            if d not in vistos:
                raise SystemExit(f"{c['id']}: dependência inexistente {d}")
    return lista


def carregar_questoes():
    import m00, m01, m02, m03, m04, m05, m06, m99, simulados
    banco = []
    for mod in (m00, m01, m02, m03, m04, m05, m06, m99):
        banco.extend(mod.QUESTOES)
    return banco, simulados.SIMULADOS


# ───────────────────────────── presença ──────────────────────────────────
def presenca_de(c):
    return {"rapido": bool(c["rap"]), "pra-safar": bool(c["safar"]), "completo": True}


def profundidade_de(c):
    r, p, co = c["prof"]
    return {"rapido": r, "pra-safar": p, "completo": co}


def justificativa_de(c):
    r, p, co = c["just"]
    return {"rapido": r, "pra-safar": p, "completo": co}


# ───────────────────────────── matriz ────────────────────────────────────
def montar_matriz(conceitos, banco, simulados):
    por_conceito = defaultdict(list)
    for q in banco:
        for cid in q["conceptIds"]:
            por_conceito[cid].append(q["id"])

    ids = {c["id"] for c in conceitos}
    for q in banco + [s for sim in simulados for s in sim["questoes"]]:
        for cid in q["conceptIds"]:
            if cid not in ids:
                raise SystemExit(f"{q['id']}: concept_id inexistente na matriz: {cid}")

    conceitos_json = []
    for c in conceitos:
        conceitos_json.append({
            "concept_id": c["id"],
            "assunto": c["assunto"],
            "dependencias": list(c["dep"]),
            "fontes_localizadas": resolver_todos(c["fontes"]),
            "evidencia_prioridade": list(c["prio"]),
            "examinavel": bool(c["exam"]),
            "presenca": presenca_de(c),
            "profundidade": profundidade_de(c),
            "justificativa": justificativa_de(c),
            "exemplos": list(c.get("ex", ())),
            "figuras": [],
            "questoes": sorted(por_conceito.get(c["id"], [])),
            "vulnerabilidades": list(c.get("vuln", ())),
        })
    return {
        "schema_version": "1.0.0",
        "status": "confirmada",
        "familia_id": FAMILIA,
        "conceitos": conceitos_json,
    }


def modalidades_da_questao(q, presencas, declaradas=None):
    """Modalidades em que a questão pode aparecer: aquelas em que TODOS os
    conceitos que ela cobra são ensinados, interseccionadas com o teto editorial."""
    teto = declaradas if declaradas else MODALIDADES
    out = []
    for modo in MODALIDADES:
        if modo not in teto:
            continue
        if all(presencas[cid][modo] for cid in q["conceptIds"]):
            out.append(modo)
    return out


# ───────────────────────────── emissão TS ────────────────────────────────
def js(obj):
    return json.dumps(obj, ensure_ascii=False, indent=2)


def escrever(caminho, conteudo):
    caminho = os.path.join(RAIZ, caminho)
    os.makedirs(os.path.dirname(caminho), exist_ok=True)
    with open(caminho, "w", encoding="utf-8") as f:
        f.write(conteudo)
    return caminho


CABECALHO = "// GERADO por scripts/autoria/rel-t2/build.py. Não editar à mão.\n"


def emitir_questoes_ts(banco, simulados):
    partes = [CABECALHO, "import type { Questao } from '@tipos/question';\n\n",
              "export const questoesCanonicas: Questao[] = ", js(banco), ";\n\n",
              "export interface SimuladoCanonico { id: string; titulo: string; descricao: string; "
              "duracaoMinutos: number; pontos: number; itens?: number; "
              "blueprint?: Array<{ bloco: string; pontos: number; objetivo: string }>; "
              "rubrica?: string[]; questoes: Questao[] }\n\n",
              "export const simuladosCanonicos: SimuladoCanonico[] = ", js(simulados), ";\n"]
    return "".join(partes)


def emitir_timeline_ts(modo):
    itens = []
    for m in M.MODULOS:
        itens.append({
            "ordem": m["ordem"],
            "slug": m["slug"],
            "titulo": m["titulo"],
            "subtitulo": m["subtitulo"],
            "prioridade": m["prioridade"],
            "tempoEstimado": f"{M.TEMPOS[m['slug']][modo]} min",
            "statusInicial": "pendente",
            "objetivo": m["objetivo"],
            "palavrasChave": list(m["palavrasChave"]),
        })
    return (CABECALHO
            + "import type { Prioridade, TopicoTimeline } from '@tipos/lesson';\n"
            + "export type { Prioridade } from '@tipos/lesson';\n\n"
            + "export const timeline: TopicoTimeline[] = " + js(itens) + ";\n\n"
            + "export const PRIORIDADE_META: Record<Prioridade, { label: string; peso: number; classe: string }> = {\n"
            + "  alta: { label: 'Alta', peso: 1, classe: 'text-nevoa border-white/15 bg-white/5' },\n"
            + "  'muito alta': { label: 'Muito alta', peso: 2, classe: 'text-dourado-soft border-dourado/30 bg-dourado/10' },\n"
            + "  máxima: { label: 'Máxima', peso: 3, classe: 'text-naval border-dourado bg-dourado font-semibold' },\n"
            + "};\n"
            + "export const topicosEstudo = timeline.filter((t) => t.ordem < 99);\n"
            + "export const topicoPorSlug = (slug: string) => timeline.find((t) => t.slug === slug);\n"
            + "export function vizinhos(slug: string) {\n"
            + "  const lista = [...timeline].sort((a, b) => a.ordem - b.ordem);\n"
            + "  const i = lista.findIndex((t) => t.slug === slug);\n"
            + "  return { anterior: i > 0 ? lista[i - 1] : null, proximo: i >= 0 && i < lista.length - 1 ? lista[i + 1] : null };\n"
            + "}\n")


def emitir_exercicios_ts(modo):
    return (CABECALHO
            + "import type { QuestaoMultipla, QuestaoVF, GrupoCorrelacione, Questao, QuestaoDiscursiva } from '@tipos/question';\n"
            + "export type { Questao } from '@tipos/question';\n"
            + "import { questoesCanonicas, simuladosCanonicos } from '../_familias/rel-t2/questoes';\n"
            + "import matriz from '../_familias/rel-t2/matriz-cobertura.json';\n"
            + "import { questoesDaModalidade } from '@utils/study-mode-questions';\n\n"
            + f"const modalidade = '{modo}' as const;\n"
            + "const conceitosEnsinados = new Set(\n"
            + "  matriz.conceitos.filter((c) => c.presenca[modalidade]).map((c) => c.concept_id),\n"
            + ");\n\n"
            + "export const todasQuestoes: Questao[] = questoesDaModalidade(questoesCanonicas, modalidade, conceitosEnsinados);\n"
            + "export const multiplaEscolha = todasQuestoes.filter((q): q is QuestaoMultipla => q.tipo === 'multipla');\n"
            + "export const verdadeiroFalso = todasQuestoes.filter((q): q is QuestaoVF => q.tipo === 'vf');\n"
            + "export const correlacionar = todasQuestoes.filter((q): q is GrupoCorrelacione => q.tipo === 'correlacione');\n"
            + "export const discursivas = todasQuestoes.filter((q): q is QuestaoDiscursiva => q.tipo === 'discursiva');\n"
            + "export function questoesPorTopico(slug: string): Questao[] { return todasQuestoes.filter((q) => q.topico === slug); }\n"
            + "export const totalQuestoes = {\n"
            + "  multipla: multiplaEscolha.length,\n"
            + "  vf: verdadeiroFalso.length,\n"
            + "  correlacione: correlacionar.length,\n"
            + "  discursiva: discursivas.length,\n"
            + "};\n\n"
            + "/** Simulado final próprio: questões inéditas fora do banco de módulos. */\n"
            + "export const simuladosCompletos = simuladosCanonicos.map((simulado) => ({\n"
            + "  ...simulado,\n"
            + "  questoes: questoesDaModalidade(simulado.questoes, modalidade, conceitosEnsinados),\n"
            + "}));\n")


def emitir_checklists_ts():
    dados = {}
    for slug, itens in M.CHECKLISTS.items():
        dados[slug] = [{"id": f"c{i + 1:02d}", "texto": t} for i, t in enumerate(itens)]
    return (CABECALHO
            + "import type { ItemChecklist } from '@tipos/lesson';\n"
            + "export type { ItemChecklist } from '@tipos/lesson';\n\n"
            + "export const checklists: Record<string, ItemChecklist[]> = " + js(dados) + ";\n"
            + "export function checklistDe(slug: string): ItemChecklist[] { return checklists[slug] ?? []; }\n")


def emitir_midias_ts():
    return (CABECALHO
            + "import type { Midia } from '@tipos/media';\n"
            + "export type { Midia } from '@tipos/media';\n"
            + "// Nenhuma mídia audiovisual foi autorizada no corpus da T2 de Relações\n"
            + "// Internacionais. Os decks indicam dois vídeos de aprofundamento (EBERI 2021\n"
            + "// e o vídeo do GTI da Política Marítima), que NÃO foram fornecidos nem\n"
            + "// verificados nesta autoria — por isso não são registrados como mídia.\n"
            + "export const midias: Midia[] = [];\n"
            + "export function midiasPorTopico(slug: string) {\n"
            + "  const lista = midias.filter((m) => m.topico === slug);\n"
            + "  return {\n"
            + "    videos: lista.filter((m) => m.tipo === 'video'),\n"
            + "    podcasts: lista.filter((m) => m.tipo === 'podcast'),\n"
            + "    mapas: lista.filter((m) => m.tipo === 'mapa'),\n"
            + "  };\n"
            + "}\n")


def emitir_fontes_ts():
    return (CABECALHO
            + "import type { Fonte } from '@tipos/media';\n"
            + "export type { Fonte } from '@tipos/media';\n\n"
            + "export const fontes: Fonte[] = " + js(M.FONTES) + ";\n"
            + "export function fontesPorTopico(slug: string): Fonte[] {\n"
            + "  return fontes.filter((f) => f.topicos.includes(slug));\n"
            + "}\n")


def emitir_index_ts():
    return ("export * from './timeline';\n"
            "export * from './exercicios';\n"
            "export * from './checklists';\n"
            "export * from './midias';\n"
            "export * from './fontes';\n")


# ───────────────────────────── config e dados ────────────────────────────
DESCRICOES = {
    "rapido": (
        "Revisão concentrada da T2 de Relações Internacionais: o núcleo examinável das aulas internas 13 a 17, "
        "a política externa brasileira aplicada, as listas fechadas, as pegadinhas de formato e uma aplicação por módulo."
    ),
    "pra-safar": (
        "Estudo dirigido de todo o escopo examinável da T2, com aprofundamento nos pontos que geram interpretação: "
        "imperativos estratégicos, lentes teóricas, casos ambíguos e a comparação entre Brasil, EUA e China."
    ),
    "completo": (
        "Formação integrada da T2 com mecanismos causais, exceções, leituras concorrentes, leituras complementares "
        "autorizadas e integração entre política externa, defesa, poder marítimo e competição sistêmica."
    ),
}
FINALIDADES = {
    "rapido": (
        "Recuperar o núcleo mais cobrável e o procedimento de prova depois de já ter tido contato com a disciplina, "
        "em uma sessão de véspera."
    ),
    "pra-safar": (
        "Buscar alto desempenho cobrindo todo o examinável e treinando a aplicação a cenários inéditos, "
        "sem ampliar o curso além do que o corpus sustenta."
    ),
    "completo": (
        "Construir domínio duradouro e verificável, capaz de sustentar respostas discursivas fundamentadas e o "
        "trabalho em grupo, arbitrando entre interpretações concorrentes."
    ),
}
COBERTURAS = {
    "rapido": (
        "Conceitos indispensáveis das cinco aulas em escopo e da PEB aplicada, relações críticas, principais pegadinhas, "
        "uma aplicação por módulo, "
        "quadro comparativo global e teste ativo final."
    ),
    "pra-safar": (
        "Todo o conteúdo examinável das aulas internas 13 a 17, mais o módulo de aplicação da política externa brasileira, "
        "com profundidade proporcional à cobrança e "
        "aprofundamento seletivo nos pontos de interpretação."
    ),
    "completo": (
        "Todo o Pra Safar, mais mecanismos causais, exceções, cronologias que explicam o presente, leituras "
        "complementares autorizadas, casos contemporâneos datados e integração entre os sete módulos."
    ),
}


def config_de(modo, duracao):
    return {
        "slug": f"{FAMILIA}--{modo}",
        "titulo": f"Relações Internacionais — T2 — {ROTULOS[modo]}",
        "subtitulo": "Aulas internas 13 a 17: política externa, defesa, poder marítimo, EUA e China — com PEB aplicada",
        "descricao": DESCRICOES[modo],
        "categoria": "Carreira Naval",
        "ano": "4",
        "semestre": "2",
        "epoca": "T2",
        "turma": "geral",
        "ordem": 5,
        "temaVisual": "naval-command",
        "corTema": "dourado",
        "icone": "/imagens/cursos/rel-t2/icone.svg",
        "capa": "/imagens/cursos/rel-t2/capa.webp",
        "estudo": {
            "contratoVersao": "1.0.0",
            "familiaId": FAMILIA,
            "familiaTitulo": M.FAMILIA_TITULO,
            "id": modo,
            "modalidadePadrao": "completo",
            "modalidadesDisponiveis": MODALIDADES,
            "legadoSomenteCompleto": False,
            "rotulo": ROTULOS[modo],
            "descricao": DESCRICOES[modo],
            "finalidade": FINALIDADES[modo],
            "cobertura": COBERTURAS[modo],
            "duracaoMinutos": duracao,
            "estadoAutoria": "publicado",
        },
        "features": {
            "timeline": True,
            "simulados": True,
            "mapasMentais": False,
            "podcasts": False,
            "animacoesHero": False,
            "animacoesTransicao": False,
            "modoRevisaoVespera": True,
            "graficoProgressoAvancado": False,
            "writing": False,
            "cadernoRevisao": False,
            "verRespostaAntes": True,
        },
        "componentesExtras": [],
        "downloads": [],
    }


def dados_de(modo, mod, conceitos_do_modulo):
    return {
        "ordem": mod["ordem"],
        "slug": mod["slug"],
        "titulo": mod["titulo"],
        "prioridade": mod["prioridade"],
        "subtitulo": mod["subtitulo"],
        "tempoEstimado": f"{M.TEMPOS[mod['slug']][modo]} min",
        "objetivo": mod["objetivo"],
        "palavrasChave": list(mod["palavrasChave"]),
        "conceptIds": conceitos_do_modulo,
        "modalidade": modo,
    }


# ───────────────────────────── auditoria ─────────────────────────────────
def auditar(conceitos, banco, simulados, presencas):
    erros, avisos = [], []

    # todo conceito examinável tem de estar em pra-safar
    for c in conceitos:
        if c["exam"] and not c["safar"]:
            erros.append(f"{c['id']}: examinável fora de pra-safar")

    # cobertura por questão
    com_questao = {cid for q in banco for cid in q["conceptIds"]}
    for c in conceitos:
        if c["exam"] and c["id"] not in com_questao:
            avisos.append(f"[LACUNA DE COBERTURA] {c['id']} é examinável e não tem questão no banco de módulos")

    # IDs únicos
    vistos = set()
    for q in banco + [s for sim in simulados for s in sim["questoes"]]:
        if q["id"] in vistos:
            erros.append(f"ID de questão duplicado: {q['id']}")
        vistos.add(q["id"])

    # distribuição por nível
    niveis = defaultdict(int)
    for q in banco + [s for sim in simulados for s in sim["questoes"]]:
        nivel = q["id"].split("-")[-2]
        niveis[nivel] += 1
    total = sum(niveis.values())

    # questões por módulo
    por_modulo = defaultdict(int)
    for q in banco:
        por_modulo[q["topico"]] += 1
    for slug, m in M.MODULOS_POR_SLUG.items():
        if slug == "99-revisao-final":
            continue
        if por_modulo[slug] < 5:
            avisos.append(f"{slug}: {por_modulo[slug]} atividades (alvo 5 a 8)")

    # questão só pode cobrar conceito ensinado em ALGUMA modalidade comum
    for q in banco + [s for sim in simulados for s in sim["questoes"]]:
        mods = modalidades_da_questao(q, presencas, q.get("_teto"))
        if not mods:
            erros.append(f"{q['id']}: nenhum modo ensina todos os seus conceitos")

    return erros, avisos, niveis, total, por_modulo


# ───────────────────────────── main ──────────────────────────────────────
def main():
    gerar = "--gerar" in sys.argv

    conceitos = carregar_conceitos()
    banco, simulados = carregar_questoes()
    presencas = {c["id"]: presenca_de(c) for c in conceitos}

    # preenche modalidades derivadas
    for q in banco:
        q["modalidades"] = modalidades_da_questao(q, presencas, q.pop("_teto", None))
    for sim in simulados:
        for q in sim["questoes"]:
            q["modalidades"] = modalidades_da_questao(q, presencas, q.pop("_teto", None))

    erros, avisos, niveis, total, por_modulo = auditar(conceitos, banco, simulados, presencas)

    print(f"conceitos: {len(conceitos)}")
    print(f"questões de módulo: {len(banco)}")
    print(f"questões de simulado: {sum(len(s['questoes']) for s in simulados)} em {len(simulados)} simulado(s)")
    if total:
        print("distribuição por nível: " + ", ".join(
            f"{k}={v} ({v * 100 // total}%)" for k, v in sorted(niveis.items())))
    print("questões por módulo: " + ", ".join(f"{k.split('-')[0]}={v}" for k, v in sorted(por_modulo.items())))
    for a in avisos:
        print("  ! " + a)
    for e in erros:
        print("  ✗ " + e)
    if erros:
        raise SystemExit(1)

    if not gerar:
        print("\n(auditoria apenas — use --gerar para escrever os artefatos)")
        return

    escritos = []
    matriz = montar_matriz(conceitos, banco, simulados)
    escritos.append(escrever(f"src/data/cursos/_familias/{FAMILIA}/matriz-cobertura.json",
                             json.dumps(matriz, ensure_ascii=False, indent=2) + "\n"))
    escritos.append(escrever(f"src/data/cursos/_familias/{FAMILIA}/questoes.ts",
                             emitir_questoes_ts(banco, simulados)))

    por_modulo_conceitos = defaultdict(list)
    for c in conceitos:
        por_modulo_conceitos[c["modulo"]].append(c)

    for modo in MODALIDADES:
        duracao = sum(M.TEMPOS[m["slug"]][modo] for m in M.MODULOS)
        slug = f"{FAMILIA}--{modo}"
        escritos.append(escrever(f"src/content/cursos/{slug}/_config.json",
                                 json.dumps(config_de(modo, duracao), ensure_ascii=False, indent=2) + "\n"))
        for mod in M.MODULOS:
            cids = [c["id"] for c in por_modulo_conceitos[mod["slug"]] if presencas[c["id"]][modo]]
            escritos.append(escrever(f"src/content/cursos/{slug}/{mod['slug']}/_dados.json",
                                     json.dumps(dados_de(modo, mod, cids), ensure_ascii=False, indent=2) + "\n"))
        escritos.append(escrever(f"src/data/cursos/{slug}/timeline.ts", emitir_timeline_ts(modo)))
        escritos.append(escrever(f"src/data/cursos/{slug}/exercicios.ts", emitir_exercicios_ts(modo)))
        escritos.append(escrever(f"src/data/cursos/{slug}/checklists.ts", emitir_checklists_ts()))
        escritos.append(escrever(f"src/data/cursos/{slug}/midias.ts", emitir_midias_ts()))
        escritos.append(escrever(f"src/data/cursos/{slug}/fontes.ts", emitir_fontes_ts()))
        escritos.append(escrever(f"src/data/cursos/{slug}/index.ts", emitir_index_ts()))
        print(f"  ✓ {slug} — {duracao} min")

    estado = {
        "schema_version": "1.0.0",
        "familia_id": FAMILIA,
        "materia": "Relações Internacionais — T2",
        "escopo": "aulas internas 13 a 17, com término em China, mais módulo de aplicação de Política Externa Brasileira; Rússia e Europa excluídas",
        "arquitetura": "familia_multimodal_contrato_1.0.0",
        "gerado_por": "scripts/autoria/rel-t2/build.py",
        "modulos": [{"slug": m["slug"], "ordem": m["ordem"], "aula_interna": m["aula"],
                     "tempos": M.TEMPOS[m["slug"]]} for m in M.MODULOS],
        "conceitos": {
            "total": len(conceitos),
            "examinaveis": sum(1 for c in conceitos if c["exam"]),
            "por_modalidade": {modo: sum(1 for c in conceitos if presencas[c["id"]][modo])
                               for modo in MODALIDADES},
        },
        "questoes": {
            "modulos": len(banco),
            "simulado": sum(len(s["questoes"]) for s in simulados),
            "por_nivel": dict(sorted(niveis.items())),
            "por_modulo": {k: v for k, v in sorted(por_modulo.items())},
            "por_modalidade": {modo: sum(1 for q in banco if modo in q["modalidades"])
                               for modo in MODALIDADES},
        },
        "duracao_minutos": {modo: sum(M.TEMPOS[m["slug"]][modo] for m in M.MODULOS) for modo in MODALIDADES},
        "ids_emitidos": sorted([q["id"] for q in banco]
                               + [q["id"] for s in simulados for q in s["questoes"]]),
        "lacunas_e_incertezas": "ver registro-lacunas-conflitos.json e fontes-manifesto.json",
    }
    escritos.append(escrever(f"src/data/cursos/_familias/{FAMILIA}/ESTADO_DO_CURSO.json",
                             json.dumps(estado, ensure_ascii=False, indent=2) + "\n"))

    print(f"\n✓ {len(escritos)} arquivo(s) gerado(s).")


if __name__ == "__main__":
    main()

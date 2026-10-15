#!/usr/bin/env python3
"""Gera os dados do curso ne-ins a partir de conteudo.py.

Uso: python3 scripts/autoria/ne-ins/build.py --gerar   (escreve os arquivos)
     python3 scripts/autoria/ne-ins/build.py           (só verifica)

Saídas:
  src/data/cursos/ne-ins/question-bank.json
  src/data/cursos/ne-ins/matriz-cobertura.json
  src/data/cursos/ne-ins/modulos.json
  src/content/cursos/ne-ins/<modulo>/_dados.json
"""
import json
import math
import random
import sys
from collections import Counter, defaultdict
from pathlib import Path

AQUI = Path(__file__).resolve().parent
RAIZ = AQUI.parents[2]
sys.path.insert(0, str(AQUI))
import conteudo as C  # noqa: E402

DADOS = RAIZ / "src/data/cursos/ne-ins"
CONTEUDO = RAIZ / "src/content/cursos/ne-ins"
SLUG_POR_MOD = {m[0]: m[1] for m in C.MODULOS}
PROVA_ORIG = json.loads((AQUI / "prova-2025.json").read_text(encoding="utf-8"))


def verificar_contas():
    """Confere as respostas numéricas das questões inéditas."""
    k = 1.38e-23
    assert abs(math.sqrt(4 * k * 300 * 1e3 * 1e6) * 1e6 - 4.07) < 0.01
    assert round(-174 + 10 * math.log10(1e6)) == -114
    assert abs(10 * math.log10(2 + (11 - 1) / 10) - 4.77) < 0.01
    assert (2 - 1) * 290 == 290
    assert 1e6 * math.log2(16) == 4e6
    assert abs(3000 * math.log2(1 + 1000) - 29902) < 5
    assert 2 * 3000 * math.log2(8) == 18000
    assert 2400 * math.log2(16) == 9600
    assert 2000 / 2 + 0.5 * 2000 / 2 == 1500
    assert math.ceil(math.log2(100)) == 7
    assert 8000 * 8 == 64000 and 8000 * 6 == 48000
    assert 4 * 6 == 24


def construir_questoes():
    questoes = []
    # Prova 2025: enunciado e alternativas fiéis ao original, ordem original.
    for n, en, alts in PROVA_ORIG:
        mod, conc, correta, dif, com, arm = C.PROVA_2025[n]
        q = {
            "id": f"NE-P25-Q{n:02d}",
            "tipo": "multipla",
            "topico": SLUG_POR_MOD[mod],
            "modulo": mod,
            "dificuldade": dif,
            "enunciado": f"[Prova 2025 · Q{n}] {en}",
            "alternativas": alts,
            "correta": correta,
            "comentario": com,
            "conceptIds": conc,
            "origem": f"Prova escrita 2025 — questão {n} (gabarito oficial)",
            "fonte": "N.E. Exam.pdf",
            "questaoOriginal": str(n),
        }
        if arm:
            q["armadilha"] = arm
        questoes.append(q)
    # Inéditas: a 1ª alternativa é a correta; embaralha com semente fixa.
    cont = Counter()
    for mod, conc, dif, en, alts, com in C.NOVAS:
        cont[mod] += 1
        qid = f"NE-{mod}-{cont[mod]:03d}"
        ordem = list(range(4))
        random.Random(qid).shuffle(ordem)
        assert len(alts) == 4 and len(set(alts)) == 4, qid
        questoes.append({
            "id": qid,
            "tipo": "multipla",
            "topico": SLUG_POR_MOD[mod],
            "modulo": mod,
            "dificuldade": dif,
            "enunciado": en,
            "alternativas": [alts[i] for i in ordem],
            "correta": ordem.index(0),
            "comentario": com,
            "conceptIds": conc,
            "origem": "Inédita — estilo da prova de 2025",
            "fonte": C.CONCEITOS[conc[0]][2],
        })
    ids = [q["id"] for q in questoes]
    assert len(ids) == len(set(ids)), "ID duplicado"
    for q in questoes:
        for c in q["conceptIds"]:
            assert c in C.CONCEITOS, (q["id"], c)
    return questoes


def montar_simulados(questoes):
    novas = defaultdict(list)
    for q in questoes:
        if q["id"].startswith("NE-M"):
            novas[q["modulo"]].append(q["id"])
    cota = {"M01": 2, "M02": 2, "M03": 1, "M04": 6, "M05": 2, "M06": 6,
            "M07": 2, "M08": 2, "M09": 5, "M10": 1, "M11": 1}
    assert sum(cota.values()) == 30
    sg2, sg3 = [], []
    for mod, n in cota.items():
        lista = sorted(novas[mod])
        random.Random("SG-" + mod).shuffle(lista)
        assert len(lista) >= 2 * n, mod
        sg2 += lista[:n]
        sg3 += lista[n:2 * n]
    return [
        {
            "id": "sg01-prova-2025",
            "titulo": "Simulado 1 — Prova de 2025 (reaplicação integral)",
            "descricao": "As 30 questões de 2025, na ordem original, com gabarito oficial. Dizem que a prova se repete ou muda pouco: este é o treino mais importante.",
            "duracaoMinutos": 60,
            "questoes": [f"NE-P25-Q{n:02d}" for n in range(1, 31)],
        },
        {
            "id": "sg02-ineditas-a",
            "titulo": "Simulado 2 — Inéditas A",
            "descricao": "30 questões inéditas na proporção de assuntos de 2025 (ruído, amostragem e modulação pesam mais), com 2 itens de componentes e lógica.",
            "duracaoMinutos": 60,
            "questoes": sg2,
        },
        {
            "id": "sg03-ineditas-b",
            "titulo": "Simulado 3 — Inéditas B",
            "descricao": "Outras 30 questões inéditas, sem repetir nenhuma do Simulado 2, com a mesma distribuição.",
            "duracaoMinutos": 60,
            "questoes": sg3,
        },
    ]


def matriz(questoes):
    por_conceito = defaultdict(list)
    for q in questoes:
        for c in q["conceptIds"]:
            por_conceito[c].append(q["id"])
    return {
        "curso": "ne-ins",
        "arquitetura": "curso_unico",
        "status": "confirmada",
        "conceitos": [
            {
                "concept_id": cid,
                "conceito": nome,
                "modulo": SLUG_POR_MOD[mod],
                "fonte_localizada": fonte,
                "questoes": por_conceito.get(cid, []),
                "cobrado_em_2025": any(x.startswith("NE-P25") for x in por_conceito.get(cid, [])),
            }
            for cid, (mod, nome, fonte) in C.CONCEITOS.items()
        ],
    }


def modulos_json():
    lista = []
    for i, (cod, slug, tit, sub, pri, tempo, obj, pal) in enumerate(C.MODULOS):
        lista.append({"ordem": i, "slug": slug, "titulo": tit, "subtitulo": sub, "prioridade": pri,
                      "tempoEstimado": tempo, "statusInicial": "pendente", "objetivo": obj,
                      "palavrasChave": pal, "modulo": cod})
    slug, tit, sub, pri, tempo, obj, pal = C.REVISAO
    lista.append({"ordem": 99, "slug": slug, "titulo": tit, "subtitulo": sub, "prioridade": pri,
                  "tempoEstimado": tempo, "statusInicial": "pendente", "objetivo": obj,
                  "palavrasChave": pal, "modulo": "R99"})
    return lista


def dados_modulo(m):
    conc = [cid for cid, (mod, _, _) in C.CONCEITOS.items() if mod == m["modulo"]]
    d = {"ordem": m["ordem"], "slug": m["slug"], "titulo": m["titulo"], "prioridade": m["prioridade"],
         "subtitulo": m["subtitulo"], "tempoEstimado": m["tempoEstimado"], "objetivo": m["objetivo"],
         "palavrasChave": m["palavrasChave"]}
    if conc:
        d["conceptIds"] = conc
    return d


def main():
    verificar_contas()
    questoes = construir_questoes()
    simulados = montar_simulados(questoes)
    mods = modulos_json()
    cobertos = {c for q in questoes for c in q["conceptIds"]}
    sem = [c for c in C.CONCEITOS if c not in cobertos]
    print(f"{len(questoes)} questões ({sum(q['id'].startswith('NE-P25') for q in questoes)} da prova 2025); "
          f"{len(C.CONCEITOS)} conceitos; sem questão: {sem or 'nenhum'}")
    pos = Counter(q["correta"] for q in questoes if q["id"].startswith("NE-M"))
    print("posição da correta nas inéditas:", dict(sorted(pos.items())))
    if "--gerar" not in sys.argv:
        return
    DADOS.mkdir(parents=True, exist_ok=True)
    banco = {"curso": "ne-ins", "arquitetura": "curso_unico", "questoes": questoes, "simulados": simulados}
    (DADOS / "question-bank.json").write_text(json.dumps(banco, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    (DADOS / "matriz-cobertura.json").write_text(json.dumps(matriz(questoes), ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    (DADOS / "modulos.json").write_text(json.dumps(mods, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    for m in mods:
        pasta = CONTEUDO / m["slug"]
        pasta.mkdir(parents=True, exist_ok=True)
        (pasta / "_dados.json").write_text(json.dumps(dados_modulo(m), ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("arquivos gerados")


if __name__ == "__main__":
    main()

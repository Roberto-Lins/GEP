# -*- coding: utf-8 -*-
"""Construtores de questão da família rel-t2.

ID canônico: REL-T2-<MOD>-<TIPO>-<NIVEL>-<NNN>
  MOD   M00..M06, M99 (módulos) ou SG01..SG03 (simulados)
  TIPO  OBJ (múltipla escolha) | VF | COR (correlacione) | DIS (discursiva)
  NIVEL N1..N4

Nenhum ID é reutilizado, nunca — inclusive de questão descartada.
`_teto` limita editorialmente as modalidades; sem ele, a modalidade é
derivada apenas da presença dos conceitos cobrados.
"""

DIFICULDADE = {"N1": "facil", "N2": "medio", "N3": "dificil", "N4": "dificil"}

ASSINATURA_BASE = {
    "N1": "âncora — recuperação de lista fechada ou definição literal",
    "N2": "reconhecimento aplicado — identificar o conceito em situação descrita",
    "N3": "aplicação inédita — decidir em cenário novo com distratores próximos",
    "N4": "integração — cruza módulos, arbitra entre leituras ou projeta consequência",
}


def _base(mod, tipo, nivel, num, topico, conceitos, fonte, competencia, erro,
          tempo, teto=None, extra_assinatura=None):
    d = {
        "id": f"REL-T2-{mod}-{tipo}-{nivel}-{num:03d}",
        "topico": topico,
        "dificuldade": DIFICULDADE[nivel],
        "conceptIds": list(conceitos),
        "fonte": fonte,
        "competencia": competencia,
        "erroProvavel": erro,
        "armadilha": erro,
        "tempoEstimadoMin": tempo,
        "assinatura": [tipo.lower(), nivel, ASSINATURA_BASE[nivel],
                       "inédita — construída sobre o perfil T1/P1/P2 sem reutilizar enunciado, caso ou gabarito"]
                      + list(extra_assinatura or []),
    }
    if teto:
        d["_teto"] = list(teto)
    return d


def obj(mod, nivel, num, *, topico, conceitos, enunciado, alternativas, correta,
        comentario, distratores, fonte, competencia, erro, tempo=3, teto=None,
        resolucao=None, verificacao=None, extra_assinatura=None):
    assert len(alternativas) == len(distratores), f"{mod}-{num}: distratores devem ter o tamanho das alternativas"
    assert 0 <= correta < len(alternativas)
    q = _base(mod, "OBJ", nivel, num, topico, conceitos, fonte, competencia, erro, tempo, teto, extra_assinatura)
    q.update({
        "tipo": "multipla",
        "enunciado": enunciado,
        "alternativas": list(alternativas),
        "correta": correta,
        "comentario": comentario,
        "explicacaoDistratores": list(distratores),
    })
    if resolucao:
        q["resolucaoPassoAPasso"] = list(resolucao)
    if verificacao:
        q["verificacaoIndependente"] = verificacao
    return q


def vf(mod, nivel, num, *, topico, conceitos, afirmacao, correta, comentario,
       fonte, competencia, erro, tempo=2, teto=None, verificacao=None, extra_assinatura=None):
    q = _base(mod, "VF", nivel, num, topico, conceitos, fonte, competencia, erro, tempo, teto, extra_assinatura)
    q.update({
        "tipo": "vf",
        "afirmacao": afirmacao,
        "correta": bool(correta),
        "comentario": comentario,
    })
    if verificacao:
        q["verificacaoIndependente"] = verificacao
    return q


def cor(mod, nivel, num, *, topico, conceitos, titulo, chaves, itens, comentario,
        fonte, competencia, erro, tempo=5, teto=None, extra_assinatura=None):
    q = _base(mod, "COR", nivel, num, topico, conceitos, fonte, competencia, erro, tempo, teto, extra_assinatura)
    q.update({
        "tipo": "correlacione",
        "titulo": titulo,
        "chaves": [{"chave": k, "texto": t} for k, t in chaves],
        "itens": [{"texto": t, "chave": k} for t, k in itens],
        "comentario": comentario,
    })
    return q


def dis(mod, nivel, num, *, topico, conceitos, enunciado, gabarito, criterios,
        fonte, competencia, erro, tempo=8, contexto=None, comentario=None,
        teto=None, resolucao=None, verificacao=None, extra_assinatura=None):
    q = _base(mod, "DIS", nivel, num, topico, conceitos, fonte, competencia, erro, tempo, teto, extra_assinatura)
    q.update({
        "tipo": "discursiva",
        "enunciado": enunciado,
        "gabaritoComentado": gabarito,
        "criterios": list(criterios),
    })
    if contexto:
        q["contexto"] = contexto
    if comentario:
        q["comentario"] = comentario
    if resolucao:
        q["resolucaoPassoAPasso"] = list(resolucao)
    if verificacao:
        q["verificacaoIndependente"] = verificacao
    return q

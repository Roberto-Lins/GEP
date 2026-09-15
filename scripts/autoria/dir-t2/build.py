#!/usr/bin/env python3
"""Build da família DIR T2 no GEP.

Gera: banco canônico (questoes.ts), simulados, matriz de cobertura, bundles de dados das três
variantes, _config.json, _dados.json e relatório. O conteúdo MDX é autoral e fica em
src/content/cursos/dir-t2--<modalidade>/<modulo>/*.mdx — o build apenas o mede.
Uso: python3 scripts/autoria/dir-t2/build.py --gerar
"""
import hashlib, json, os, re, shutil, sys
sys.path.insert(0, os.path.dirname(__file__))
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "questoes"))
from conceitos import C, MODULOS
import q01, q02, q03, q04, q05

GEP = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..", ".."))
FAM = "dir-t2"
MODOS = ["rapido", "pra-safar", "completo"]
BUILD = os.path.dirname(os.path.abspath(__file__))
# O MDX é editado diretamente em src/content/cursos/dir-t2--<modo>/ (fonte única); este script só mede o
# conteúdo e regenera banco, matriz, _dados.json, _config.json e bundles de dados.

MOD_Q = {
  "00-mapa-e-metodo": ("M00", q01.M00),
  "01-principios-e-lei-no-tempo-e-espaco": ("M01", q01.M01),
  "02-fato-tipico-dolo-culpa-preterdolo": ("M02", q02.M02),
  "03-ilicitude-culpabilidade-e-excludentes": ("M03", q02.M03),
  "04-iter-criminis-tentativa-e-desistencia": ("M04", q03.M04),
  "05-concurso-de-agentes": ("M05", q03.M05),
  "06-crime-militar": ("M06", q03.M06),
  "07-crimes-militares-em-especie": ("M07", q04.M07),
  "08-pjm-e-instauracao-do-ipm": ("M08", q04.M08),
  "09-oitivas-garantias-e-sigilo": ("M09", q04.M09),
  "10-prazos-relatorio-arquivamento-e-foro": ("M10", q05.M10),
  "11-jmu-e-stm": ("M11", q05.M11),
}
SIMULADOS = [
  ("SG01", "Simulado A — diagnóstico da matriz", "Cobre todos os módulos com itens de precisão e aplicação curta; serve para localizar o primeiro elo fraco antes da revisão.", 60, 10, q05.SG01),
  ("SG02", "Simulado B — nível prova", "Formatos mistos (objetiva, V/F, correlação e discursiva) com casos densos e ruído factual, no DNA observado nas P1/SOPA.", 90, 10, q05.SG02),
  ("SG03", "Simulado C — acima da prova", "Concentrado em N3/N4 e na integração Penal–Processual; exige declarar lacunas e limites do recorte.", 120, 10, q05.SG03),
]
TIPO_TS = {"OBJ": "multipla", "VF": "vf", "COR": "correlacione", "DIS": "discursiva"}
DIFIC = {"N1": "facil", "N2": "medio", "N3": "dificil", "N4": "dificil"}

VERIFICACAO = {
  "00-mapa-e-metodo": "Confira o slide físico e o documento de delimitação antes de estudar qualquer tópico.",
  "01-principios-e-lei-no-tempo-e-espaco": "Refaça a análise separando três perguntas: qual lei (tempo), onde (lugar) e se a lei militar alcança o fato (território).",
  "02-fato-tipico-dolo-culpa-preterdolo": "Teste o contrafactual: altere só a atitude do agente diante do resultado ou só o nexo causal e veja se a classificação muda.",
  "03-ilicitude-culpabilidade-e-excludentes": "Percorra os três degraus em ordem e diga, para cada agente, em qual degrau a responsabilidade é afastada.",
  "04-iter-criminis-tentativa-e-desistencia": "Pergunte: ‘podia continuar e não quis’ ou ‘quis e não pôde’? E quem impediu o resultado?",
  "05-concurso-de-agentes": "Monte uma tabela agente × papel × consequência antes de escolher a alternativa.",
  "06-crime-militar": "Faça a triagem: agente (ativa, reserva/reformado, civil) → inciso → alínea → exceções dos §§ 1º–2º.",
  "07-crimes-militares-em-especie": "Sublinhe no enunciado a elementar de cada tipo e verifique a cláusula ‘se o fato não constitui crime mais grave’.",
  "08-pjm-e-instauracao-do-ipm": "Pergunte, para cada ato, quem é o ator legitimado e em que momento (antes ou depois da portaria).",
  "09-oitivas-garantias-e-sigilo": "Confronte cada ato do encarregado com o CPPM e com a CF, separando o que é regra, o que é exceção e o que é ressalva de fonte.",
  "10-prazos-relatorio-arquivamento-e-foro": "Desenhe a linha do tempo do IPM e marque quem pode prorrogar, relatar, requerer e determinar o arquivamento.",
  "11-jmu-e-stm": "Antes de escolher o órgão, confirme que o fato é crime militar; depois, se a competência é originária ou recursal.",
}

def modos_da(q):
    return q.get("modos") or MODOS

def pad(n):
    return f"{n:03d}"

def qid(prefixo, q):
    return f"DIR-T2-{prefixo}-{q['tipo']}-{q['nivel']}-{pad(q['n'])}"

def embaralhar(q, ident, k):
    alts = q["alternativas"]
    h = int(hashlib.sha256(ident.encode()).hexdigest(), 16)
    alvo = k % len(alts)
    correta = alts[q["correta"]]
    outras = [a for i, a in enumerate(alts) if i != q["correta"]]
    # ordem das erradas também derivada do hash, de forma estável
    rot = h % len(outras)
    outras = outras[rot:] + outras[:rot]
    nova = outras[:alvo] + [correta] + outras[alvo:]
    return [a[0] for a in nova], nova.index(correta), [a[1] for a in nova]

def to_ts_question(q, prefixo, topico, k):
    ident = qid(prefixo, q)
    d = {"id": ident, "tipo": TIPO_TS[q["tipo"]], "topico": topico, "dificuldade": DIFIC[q["nivel"]]}
    cadeia_comentario = q.get("comentario") or q.get("gabarito", "")
    if q["tipo"] == "OBJ":
        alts, correta, expl = embaralhar(q, ident, k)
        d.update(enunciado=q["enunciado"], alternativas=alts, correta=correta, comentario=q["comentario"], explicacaoDistratores=expl)
    elif q["tipo"] == "VF":
        d.update(afirmacao=q["afirmacao"], correta=q["correta"], comentario=q["comentario"])
    elif q["tipo"] == "COR":
        d.update(titulo=q["titulo"], chaves=[{"chave": c, "texto": t} for c, t in q["chaves"]],
                 itens=[{"texto": t, "chave": c} for t, c in q["itens"]], comentario=q["comentario"])
    elif q["tipo"] == "DIS":
        d.update(contexto=q["contexto"], enunciado=q["enunciado"], gabaritoComentado=q["gabarito"], criterios=q["criterios"])
    d.update(
        fonte=q["fonte"], armadilha=q["armadilha"], conceptIds=q["conceitos"], modalidades=modos_da(q),
        competencia=q["competencia"], tempoEstimadoMin=q["tempo"], erroProvavel=q["armadilha"],
        assinatura=[d["tipo"], q["nivel"], "aplicação contextualizada" if q["ctx"] else "âncora conceitual", "inédita — perfil P1/SOPA sem reutilizar fatos"],
        resolucaoPassoAPasso=[
            f"1. Delimite a questão jurídica: {q['competencia']}",
            f"2. Localize a norma e o slide: {q['fonte']}",
            "3. Aplique aos fatos e enfrente a exceção ou o limite antes de concluir.",
            f"4. Conclusão fundamentada: {cadeia_comentario.split(chr(10))[0]}",
        ],
        verificacaoIndependente=VERIFICACAO.get(topico, "Resolva de novo por outra rota: tabela de requisitos, linha do tempo ou contrafactual."),
    )
    return d

def build_questoes():
    canon, k = [], 0
    for topico, (pref, lista) in MOD_Q.items():
        for q in lista:
            if q["tipo"] == "OBJ": k += 1
            canon.append((q, to_ts_question(q, pref, topico, k)))
    sims = []
    for sid, titulo, desc, dur, pts, lista in SIMULADOS:
        qs = []
        for q in lista:
            if q["tipo"] == "OBJ": k += 1
            qs.append((q, to_ts_question(q, sid, "99-revisao-final", k)))
        sims.append((sid, titulo, desc, dur, pts, qs))
    return canon, sims

def conceito_presenca():
    return {c[0]: dict(zip(MODOS, c[7])) for c in C}

def validar_questoes(canon, sims):
    pres = conceito_presenca()
    erros = []
    ids = [d["id"] for _, d in canon] + [d["id"] for _, _, _, _, _, qs in sims for _, d in qs]
    if len(ids) != len(set(ids)): erros.append("IDs duplicados")
    for q, d in canon + [x for s in sims for x in s[5]]:
        for cid in q["conceitos"]:
            if cid not in pres: erros.append(f"{d['id']}: conceito inexistente {cid}")
            else:
                for m in modos_da(q):
                    if not pres[cid][m]: erros.append(f"{d['id']}: {cid} não ensinado em {m}")
        if q["tipo"] == "OBJ":
            if len(d["explicacaoDistratores"]) != len(d["alternativas"]): erros.append(f"{d['id']}: distratores")
        if q["tipo"] == "COR":
            ch = {c for c, _ in q["chaves"]}
            if any(c not in ch for _, c in q["itens"]): erros.append(f"{d['id']}: chave inexistente")
        if q["tipo"] == "DIS" and "**Gabarito:**" not in q["gabarito"]: erros.append(f"{d['id']}: gabarito sem marcador")
    # por módulo substantivo
    for topico, (pref, lista) in MOD_Q.items():
        if pref == "M00": continue
        niveis = {q["nivel"] for q in lista}
        for n in ["N2", "N3", "N4"]:
            if n not in niveis: erros.append(f"{topico}: sem {n}")
        if sum(1 for q in lista if q["tipo"] == "DIS") < 2: erros.append(f"{topico}: menos de 2 discursivas")
        for m in MODOS:
            nm = {q["nivel"] for q in lista if m in modos_da(q)}
            for n in ["N2", "N3", "N4"]:
                if n not in nm: erros.append(f"{topico}/{m}: sem {n}")
    return erros

def estatisticas(canon, sims):
    tudo = [q for q, _ in canon]
    ctx = sum(1 for q in tudo if q["ctx"])
    por_tipo, por_nivel = {}, {}
    for q in tudo:
        por_tipo[q["tipo"]] = por_tipo.get(q["tipo"], 0) + 1
        por_nivel[q["nivel"]] = por_nivel.get(q["nivel"], 0) + 1
    pos = {}
    for q, d in canon + [x for s in sims for x in s[5]]:
        if d["tipo"] == "multipla": pos[d["correta"]] = pos.get(d["correta"], 0) + 1
    por_modo = {m: sum(1 for q in tudo if m in modos_da(q)) for m in MODOS}
    por_modulo = {t: len(l) for t, (_, l) in MOD_Q.items()}
    return {"total_canonicas": len(tudo), "contextualizadas": ctx, "percentual_contextualizadas": round(100 * ctx / len(tudo), 1),
            "por_tipo": por_tipo, "por_nivel": por_nivel, "por_modalidade": por_modo, "por_modulo": por_modulo,
            "posicao_correta_multipla": pos, "simulados": {s[0]: len(s[5]) for s in sims}}


# ─────────────────────────────── Geração ───────────────────────────────
TITULOS_VARIANTE = {
  "rapido": dict(rotulo="Rápido", subtitulo="Penal e Processual Penal Militar em rota intensiva de revisão",
    descricao="Revisão concentrada do núcleo de cada bloco da T2: regras, distinções, prazos, competências e casos-relâmpago.",
    finalidade="Chegar à T2 operacional no núcleo de maior incidência, sem perder nenhum dos blocos do recorte e sem rebaixar a dificuldade das questões.",
    cobertura="Núcleo examinável dos 12 módulos, com os conceitos de maior incidência; adjacências normativas e alguns detalhes secundários ficam para Pra Safar e Completo."),
  "pra-safar": dict(rotulo="Pra Safar", subtitulo="Todo o examinável da T2 com casos guiados e treino de decisão",
    descricao="Estudo direcionado de todo o conteúdo examinável da T2, na proporção do perfil de cobrança, com mapa de incidência, erros fatais e casos guiados.",
    finalidade="Buscar alto desempenho cobrindo integralmente o que os slides e a delimitação do professor tornam examinável, sem expansões enciclopédicas.",
    cobertura="Capítulo 3 inteiro, Aula 4.1 inteira e Aula 4.2 até o slide 7, incluindo variações, exceções legais e pegadinhas documentadas."),
  "completo": dict(rotulo="Completo", subtitulo="Formação T3 em Direito Penal e Processual Penal Militar",
    descricao="Formação integrada da T2 com explicação causal, texto normativo localizado, casos resolvidos, contrafactuais, comparações e adjacências do corpus.",
    finalidade="Construir domínio duradouro e verificável, capaz de resolver casos inéditos e discursivas por fundamentação, sem sair do recorte da T2.",
    cobertura="Todo o Pra Safar, mais mecanismos, exceções, dispositivos adjacentes do CPM/CPPM/CF que resolvem casos e integração entre os capítulos 3 e 4."),
}
SUBTITULOS_MOD = {
  "00-mapa-e-metodo": "Recorte, hierarquia das fontes e cadeia de resolução",
  "01-principios-e-lei-no-tempo-e-espaco": "Legalidade, retroatividade, tempo, lugar e navios",
  "02-fato-tipico-dolo-culpa-preterdolo": "Estrutura do crime e elemento subjetivo",
  "03-ilicitude-culpabilidade-e-excludentes": "Art. 42, imputabilidade, erro e obediência hierárquica",
  "04-iter-criminis-tentativa-e-desistencia": "Da cogitação à consumação — e quando não se pune",
  "05-concurso-de-agentes": "Teoria monista, papéis, agravantes e cabeças",
  "06-crime-militar": "Arts. 9º e 10, próprios e impróprios, transgressão",
  "07-crimes-militares-em-especie": "Arts. 160, 163, 172, 174, 203, 209 e 210",
  "08-pjm-e-instauracao-do-ipm": "DPPM, PJM, portaria, encarregado e medidas urgentes",
  "09-oitivas-garantias-e-sigilo": "Horários, testemunha × indiciado, silêncio, advogado e sigilo",
  "10-prazos-relatorio-arquivamento-e-foro": "Do prazo ao arquivamento; dispensa, sindicância e foro",
  "11-jmu-e-stm": "Órgãos, composição e competência do STM (slides 1–7)",
  "99-revisao-final": "Mapa da prova, fluxos, erros frequentes e véspera",
}
OBJETIVOS_MOD = {
  "00-mapa-e-metodo": "Delimitar o recorte da T2 e aplicar a cadeia fatos → questão → norma → aplicação → exceção → conclusão.",
  "01-principios-e-lei-no-tempo-e-espaco": "Aplicar princípios penais e decidir tempo, lugar e alcance espacial da lei penal militar.",
  "02-fato-tipico-dolo-culpa-preterdolo": "Estratificar o crime e classificar dolo, culpa e preterdolo com nexo causal.",
  "03-ilicitude-culpabilidade-e-excludentes": "Identificar o degrau em que a responsabilidade penal é afastada e suas consequências.",
  "04-iter-criminis-tentativa-e-desistencia": "Situar a conduta no iter criminis e distinguir tentativa, desistência, arrependimento e crime impossível.",
  "05-concurso-de-agentes": "Resolver casos com vários agentes, papéis, agravantes, atenuantes e cabeças.",
  "06-crime-militar": "Enquadrar fatos nos arts. 9º e 10 do CPM e classificar crimes militares.",
  "07-crimes-militares-em-especie": "Reconhecer elementares, penas e majorantes dos tipos ensinados.",
  "08-pjm-e-instauracao-do-ipm": "Conduzir a fase inicial da apuração com os atores e atos corretos.",
  "09-oitivas-garantias-e-sigilo": "Aplicar as regras de oitiva e as garantias defensivas no IPM.",
  "10-prazos-relatorio-arquivamento-e-foro": "Encerrar o IPM corretamente e definir instrumento e foro.",
  "11-jmu-e-stm": "Identificar órgãos da JMU, composição e competências do STM no recorte.",
  "99-revisao-final": "Recuperar de memória os fluxos e eliminar os erros críticos antes da prova.",
}
PALAVRAS_MOD = {
  "00-mapa-e-metodo": ["recorte", "método de caso", "fontes"],
  "01-principios-e-lei-no-tempo-e-espaco": ["legalidade", "retroatividade", "tempo do crime", "lugar do crime", "navio"],
  "02-fato-tipico-dolo-culpa-preterdolo": ["fato típico", "dolo eventual", "culpa", "preterdolo", "nexo causal"],
  "03-ilicitude-culpabilidade-e-excludentes": ["legítima defesa", "estado de necessidade", "embriaguez", "erro de direito", "obediência hierárquica"],
  "04-iter-criminis-tentativa-e-desistencia": ["iter criminis", "tentativa", "desistência voluntária", "arrependimento eficaz", "crime impossível"],
  "05-concurso-de-agentes": ["teoria monista", "partícipe", "agravantes", "cabeças", "motim"],
  "06-crime-militar": ["art. 9º", "art. 10", "propriamente militar", "transgressão", "júri"],
  "07-crimes-militares-em-especie": ["desrespeito", "insubordinação", "uniforme", "rigor excessivo", "lesão corporal"],
  "08-pjm-e-instauracao-do-ipm": ["PJM", "portaria", "encarregado", "escrivão", "art. 12"],
  "09-oitivas-garantias-e-sigilo": ["oitiva", "indiciado", "silêncio", "prova ilícita", "sigilo"],
  "10-prazos-relatorio-arquivamento-e-foro": ["prazos", "relatório", "arquivamento", "sindicância", "foro militar"],
  "11-jmu-e-stm": ["JMU", "STM", "composição", "competência originária", "competência recursal"],
  "99-revisao-final": ["revisão", "fluxos", "véspera"],
}
PRIORIDADE = {m: p for m, _, p in MODULOS}
PRIORIDADE["99-revisao-final"] = "máxima"
TITULO_MOD = {m: t for m, t, _ in MODULOS}
TITULO_MOD["99-revisao-final"] = "Revisão final"

def contar_palavras(txt):
    corpo = re.sub(r"^---.*?---", "", txt, flags=re.S)
    corpo = re.sub(r"<[^>]+>", " ", corpo)
    return len(re.findall(r"[\wÀ-ÿº°§]+", corpo))

def ts(obj):
    return json.dumps(obj, ensure_ascii=False, indent=2)

def minutos_modulo(modo, modulo, questoes_modo):
    pasta = os.path.join(GEP, "src/content/cursos", f"{FAM}--{modo}", modulo)
    palavras = sum(contar_palavras(open(os.path.join(pasta, f)).read()) for f in os.listdir(pasta) if f.endswith(".mdx"))
    leitura = palavras / 110  # leitura de estudo de texto jurídico denso (palavras/min)
    # Núcleo = leitura + questões objetivas (OBJ/VF/COR). Discursivas e simulados são treino adicional,
    # medido à parte no relatório, para que a duração exibida seja a rota de estudo, não a soma de todo o banco.
    treino = sum(q["tempo"] for q in questoes_modo if q["tipo"] != "DIS")
    return palavras, int(round((leitura + treino) / 5.0) * 5) or 5

def gerar(canon, sims):
    pres = conceito_presenca()
    fam_dir = os.path.join(GEP, "src/data/cursos/_familias", FAM)
    os.makedirs(fam_dir, exist_ok=True)
    # questoes.ts
    base = [d for _, d in canon]
    sim_ts = [{"id": sid, "titulo": t, "descricao": desc, "duracaoMinutos": dur, "pontos": pts, "questoes": [d for _, d in qs]} for sid, t, desc, dur, pts, qs in sims]
    with open(os.path.join(fam_dir, "questoes.ts"), "w") as f:
        f.write("// GERADO por scripts/autoria/dir-t2/build.py a partir das fontes de autoria. Não editar à mão.\n")
        f.write("import type { Questao } from '@tipos/question';\n\n")
        f.write("export const questoesCanonicas: Questao[] = " + ts(base) + ";\n\n")
        f.write("export interface SimuladoCanonico { id: string; titulo: string; descricao: string; duracaoMinutos: number; pontos: number; questoes: Questao[] }\n\n")
        f.write("export const simuladosCanonicos: SimuladoCanonico[] = " + ts(sim_ts) + ";\n")
    # matriz
    qmap = {}
    for q, d in canon:
        for cid in q["conceitos"]: qmap.setdefault(cid, []).append(d["id"])
    figmap = {"DIRT2-ELEMENTOS-CRIME": ["DIRT2-FIG-CRIME-001"], "DIRT2-EXCL-ILICITUDE": ["DIRT2-FIG-CRIME-001"], "DIRT2-IMPUTABILIDADE": ["DIRT2-FIG-CRIME-001"],
              "DIRT2-IPM-INSTAURACAO": ["DIRT2-FIG-IPM-002"], "DIRT2-PRAZOS-IPM": ["DIRT2-FIG-IPM-002"], "DIRT2-REMESSA-ARQUIVAMENTO": ["DIRT2-FIG-IPM-001", "DIRT2-FIG-IPM-002"],
              "DIRT2-MEDIDAS-URGENTES": ["DIRT2-FIG-IPM-002"], "DIRT2-OITIVAS": ["DIRT2-FIG-IPM-002"]}
    simmap = {}
    for sid, _, _, _, _, qs in sims:
        for q, d in qs:
            for cid in q["conceitos"]: simmap.setdefault(cid, []).append(d["id"])
    conceitos = []
    for (cid, mod, assunto, deps, fontes, evid, exam, presenca, vulns) in C:
        p = dict(zip(MODOS, presenca))
        prof = {"rapido": "núcleo operacional" if p["rapido"] else None, "pra-safar": "examinável integral" if p["pra-safar"] else None, "completo": "integrado com mecanismos e adjacências"}
        just = {
          "rapido": "Núcleo de incidência ou dependência crítica para resolver casos." if p["rapido"] else "Fora do núcleo: detalhe ou adjacência reservado às modalidades mais extensas.",
          "pra-safar": "Examinável pelo recorte ou necessário para resolver casos examináveis." if p["pra-safar"] else "Adjacência normativa não presente nos slides; não examinável pelo recorte.",
          "completo": "Todo conceito da matriz integra o Completo; adjacências marcadas como aprofundamento." ,
        }
        conceitos.append({"concept_id": cid, "assunto": assunto, "dependencias": deps, "fontes_localizadas": fontes, "evidencia_prioridade": evid + [f"Simulados: {', '.join(simmap.get(cid, [])) or 'nenhum'}"] ,
            "examinavel": exam, "presenca": p, "profundidade": prof, "justificativa": just, "exemplos": [f"{mod} — caso guiado/resolvido da aula"],
            "figuras": figmap.get(cid, []), "questoes": qmap.get(cid, []), "vulnerabilidades": vulns})
    matriz = {"schema_version": "1.0.0", "status": "confirmada", "familia_id": FAM, "conceitos": conceitos}
    json.dump(matriz, open(os.path.join(fam_dir, "matriz-cobertura.json"), "w"), ensure_ascii=False, indent=2)

    relatorio = {"variantes": {}}
    modulos_todos = [m for m, _, _ in MODULOS] + ["99-revisao-final"]
    for modo in MODOS:
        slug = f"{FAM}--{modo}"
        cdir = os.path.join(GEP, "src/content/cursos", slug)
        ddir = os.path.join(GEP, "src/data/cursos", slug)
        os.makedirs(ddir, exist_ok=True)
        timeline, total_min, total_palavras, checklists = [], 0, 0, {}
        for ordem, mod in enumerate(modulos_todos):
            dst = os.path.join(cdir, mod)
            if not os.path.isdir(dst) or not any(f.endswith(".mdx") for f in os.listdir(dst)):
                raise SystemExit(f"conteúdo MDX ausente: {dst}")
            qs_mod = [q for q, d in canon if d["topico"] == mod and modo in modos_da(q) and all(pres[c][modo] for c in q["conceitos"])]
            palavras, minutos = minutos_modulo(modo, mod, qs_mod)
            total_min += minutos; total_palavras += palavras
            cids = [c[0] for c in C if c[1] == mod and pres[c[0]][modo]]
            ord_num = 99 if mod == "99-revisao-final" else ordem
            dados = {"ordem": ord_num, "slug": mod, "titulo": TITULO_MOD[mod], "prioridade": PRIORIDADE[mod], "subtitulo": SUBTITULOS_MOD[mod],
                     "tempoEstimado": f"{minutos} min", "objetivo": OBJETIVOS_MOD[mod], "palavrasChave": PALAVRAS_MOD[mod], "conceptIds": cids, "modalidade": modo}
            json.dump(dados, open(os.path.join(dst, "_dados.json"), "w"), ensure_ascii=False, indent=2)
            timeline.append({"ordem": ord_num, "slug": mod, "titulo": TITULO_MOD[mod], "subtitulo": SUBTITULOS_MOD[mod], "prioridade": PRIORIDADE[mod],
                             "tempoEstimado": f"{minutos} min", "statusInicial": "pendente", "objetivo": OBJETIVOS_MOD[mod], "palavrasChave": PALAVRAS_MOD[mod]})
            if mod == "99-revisao-final":
                checklists[mod] = [{"id": "c01", "texto": "Refaço de memória as três triagens: é crime? é crime militar? quem faz o quê no IPM?"},
                                   {"id": "c02", "texto": "Escrevo os prazos do IPM, os horários de oitiva e a composição do STM sem consultar."},
                                   {"id": "c03", "texto": "Resolvo um caso discursivo com os seis elos em até 10 minutos."}]
            else:
                checklists[mod] = [{"id": f"c{i+1:02d}", "texto": f"Explico e aplico a caso concreto: {c[2]}."} for i, c in enumerate([c for c in C if c[1] == mod and pres[c[0]][modo]])]
        meta = TITULOS_VARIANTE[modo]
        config = {"slug": slug, "titulo": f"Direito — T2 — {meta['rotulo']}", "subtitulo": meta["subtitulo"], "descricao": meta["descricao"],
          "categoria": "Carreira Naval", "ano": "4", "semestre": "2", "epoca": "T2", "turma": "geral", "ordem": 3, "temaVisual": "naval-command", "corTema": "dourado",
          "icone": "/imagens/cursos/dir-t2/icone.svg", "capa": "/imagens/cursos/dir-t2/capa.webp",
          "estudo": {"contratoVersao": "1.0.0", "familiaId": FAM, "familiaTitulo": "Direito — T2", "id": modo, "modalidadePadrao": "completo",
                     "modalidadesDisponiveis": MODOS, "legadoSomenteCompleto": False, "rotulo": meta["rotulo"], "descricao": meta["descricao"],
                     "finalidade": meta["finalidade"], "cobertura": meta["cobertura"], "duracaoMinutos": total_min, "estadoAutoria": "publicado"},
          "features": {"timeline": True, "simulados": True, "mapasMentais": False, "podcasts": False, "animacoesHero": False, "animacoesTransicao": False,
                       "modoRevisaoVespera": True, "graficoProgressoAvancado": False, "writing": False, "cadernoRevisao": False},
          "componentesExtras": [], "downloads": []}
        json.dump(config, open(os.path.join(cdir, "_config.json"), "w"), ensure_ascii=False, indent=2)
        # bundles
        open(os.path.join(ddir, "index.ts"), "w").write("export * from './timeline';\nexport * from './exercicios';\nexport * from './checklists';\nexport * from './midias';\nexport * from './fontes';\n")
        open(os.path.join(ddir, "timeline.ts"), "w").write(
            "import type { Prioridade, TopicoTimeline } from '@tipos/lesson';\nexport type { Prioridade } from '@tipos/lesson';\n\n"
            f"export const timeline: TopicoTimeline[] = {ts(timeline)};\n\n"
            "export const PRIORIDADE_META: Record<Prioridade, { label: string; peso: number; classe: string }> = {\n"
            "  alta: { label: 'Alta', peso: 1, classe: 'text-nevoa border-white/15 bg-white/5' },\n"
            "  'muito alta': { label: 'Muito alta', peso: 2, classe: 'text-dourado-soft border-dourado/30 bg-dourado/10' },\n"
            "  máxima: { label: 'Máxima', peso: 3, classe: 'text-naval border-dourado bg-dourado font-semibold' },\n};\n"
            "export const topicosEstudo = timeline.filter((t) => t.ordem < 99);\n"
            "export const topicoPorSlug = (slug: string) => timeline.find((t) => t.slug === slug);\n"
            "export function vizinhos(slug: string) { const lista = [...timeline].sort((a, b) => a.ordem - b.ordem); const i = lista.findIndex((t) => t.slug === slug); return { anterior: i > 0 ? lista[i - 1] : null, proximo: i >= 0 && i < lista.length - 1 ? lista[i + 1] : null }; }\n")
        open(os.path.join(ddir, "checklists.ts"), "w").write(
            "import type { ItemChecklist } from '@tipos/lesson';\nexport type { ItemChecklist } from '@tipos/lesson';\n"
            f"export const checklists: Record<string, ItemChecklist[]> = {ts(checklists)};\n"
            "export function checklistDe(slug: string): ItemChecklist[] { return checklists[slug] ?? []; }\n")
        open(os.path.join(ddir, "midias.ts"), "w").write(
            "import type { Midia } from '@tipos/media';\nexport type { Midia } from '@tipos/media';\n"
            "// Nenhuma mídia audiovisual autorizada no corpus da T2 de Direito.\nexport const midias: Midia[] = [];\n"
            "export function midiasPorTopico(slug: string) { const lista = midias.filter((m) => m.topico === slug); return { videos: lista.filter((m) => m.tipo === 'video'), podcasts: lista.filter((m) => m.tipo === 'podcast'), mapas: lista.filter((m) => m.tipo === 'mapa') }; }\n")
        penal = [m for m in modulos_todos if m[:2] in ("00","01","02","03","04","05","06","07","99")]
        proc = [m for m in modulos_todos if m[:2] in ("00","06","08","09","10","11","99")]
        fontes = [
          {"titulo": "Aula 3.1 — Direito Penal Militar (75 slides)", "tipo": "slide", "descricao": "Fonte material do Capítulo 3 inteiro. Slides citados por número físico; conteúdo apenas visual dos slides 9, 14, 24, 28, 29, 33 e 34 não recuperado.", "topicos": penal},
          {"titulo": "Aula 4.1 — Direito Processual Penal Militar (42 slides)", "tipo": "slide", "descricao": "Fonte material da Aula 4.1 inteira: DPPM, PJM, IPM, sindicância e foro.", "topicos": proc},
          {"titulo": "Aula 4.2 — Justiça Militar da União (slides 1 a 7)", "tipo": "slide", "descricao": "Somente órgãos, composição e competência do STM; slides seguintes excluídos pela delimitação do professor.", "topicos": ["00-mapa-e-metodo", "11-jmu-e-stm", "99-revisao-final"]},
          {"titulo": "Código Penal Militar — edição STM, 2ª ed., 2017", "tipo": "livro", "descricao": "Texto normativo de conferência do Capítulo 3; páginas citadas pela numeração do PDF.", "topicos": penal},
          {"titulo": "Código de Processo Penal Militar — edição STM", "tipo": "livro", "descricao": "Texto normativo de conferência da Aula 4.1; páginas citadas pela numeração do PDF.", "topicos": proc},
          {"titulo": "Constituição Federal — edição STF 2024 (até EC 132/2023)", "tipo": "livro", "descricao": "Princípios penais, garantias do investigado, Justiça Militar e STM.", "topicos": modulos_todos},
          {"titulo": "Estatuto dos Militares — Lei nº 6.880/1980", "tipo": "livro", "descricao": "Usado apenas no art. 42 (crime × transgressão), remetido pelo slide 59 da Aula 3.1.", "topicos": ["06-crime-militar", "07-crimes-militares-em-especie"]},
          {"titulo": "Provas P1 2022 (solução padrão), 2023, 2024 e SOPA T1 2024", "tipo": "prova", "descricao": "Somente perfil de cobrança (formatos, densidade, crédito parcial). Nenhum fato, nome ou número foi reutilizado.", "topicos": ["00-mapa-e-metodo", "99-revisao-final"]},
          {"titulo": "STM, HC 0000209-20.2016.7.00.0000", "tipo": "observacao", "descricao": "Ementa reproduzida no slide 25 da Aula 4.1. [NÃO CONFIRMADO NA FONTE PRIMÁRIA] inteiro teor oficial não acessado.", "topicos": ["09-oitivas-garantias-e-sigilo"]},
          {"titulo": "STF, Súmula Vinculante 14; HC 109.544; Inq. 4.923", "tipo": "observacao", "descricao": "Indicados na transferência. [NÃO CONFIRMADO NA FONTE PRIMÁRIA] páginas oficiais recusaram acesso automatizado; usados apenas como ressalva, sem narrar fatos.", "topicos": ["06-crime-militar", "09-oitivas-garantias-e-sigilo", "10-prazos-relatorio-arquivamento-e-foro"]},
        ]
        open(os.path.join(ddir, "fontes.ts"), "w").write(
            "import type { Fonte } from '@tipos/media';\nexport type { Fonte } from '@tipos/media';\n"
            f"export const fontes: Fonte[] = {ts(fontes)};\n"
            "export function fontesPorTopico(slug: string): Fonte[] { return fontes.filter((f) => f.topicos.includes(slug)); }\n")
        open(os.path.join(ddir, "exercicios.ts"), "w").write(f"""import type {{ QuestaoMultipla, QuestaoVF, GrupoCorrelacione, Questao, QuestaoDiscursiva }} from '@tipos/question';
export type {{ Questao }} from '@tipos/question';
import {{ questoesCanonicas, simuladosCanonicos }} from '../_familias/{FAM}/questoes';
import matriz from '../_familias/{FAM}/matriz-cobertura.json';
import {{ questoesDaModalidade }} from '@utils/study-mode-questions';
const modalidade = '{modo}' as const;
const conceitosEnsinados = new Set(matriz.conceitos.filter((c) => c.presenca[modalidade]).map((c) => c.concept_id));
export const todasQuestoes: Questao[] = questoesDaModalidade(questoesCanonicas, modalidade, conceitosEnsinados);
export const multiplaEscolha = todasQuestoes.filter((q): q is QuestaoMultipla => q.tipo === 'multipla');
export const verdadeiroFalso = todasQuestoes.filter((q): q is QuestaoVF => q.tipo === 'vf');
export const correlacionar = todasQuestoes.filter((q): q is GrupoCorrelacione => q.tipo === 'correlacione');
export const discursivas = todasQuestoes.filter((q): q is QuestaoDiscursiva => q.tipo === 'discursiva');
export function questoesPorTopico(slug: string): Questao[] {{ return todasQuestoes.filter((q) => q.topico === slug); }}
export const totalQuestoes = {{ multipla: multiplaEscolha.length, vf: verdadeiroFalso.length, correlacione: correlacionar.length, discursiva: discursivas.length }};
/** Simulados próprios: questões inéditas fora do banco de módulos, filtradas pelo que esta modalidade ensina. */
export const simuladosCompletos = simuladosCanonicos.map((simulado) => ({{
  ...simulado,
  questoes: questoesDaModalidade(simulado.questoes, modalidade, conceitosEnsinados),
}}));
""")
        relatorio["variantes"][modo] = {"slug": slug, "palavras_mdx": total_palavras, "duracao_minutos": total_min,
            "minutos_discursivas_adicionais": sum(q["tempo"] for q, d in canon if q["tipo"] == "DIS" and modo in modos_da(q) and all(pres[c][modo] for c in q["conceitos"])),
            "minutos_simulados": sum(s[3] for s in sims),
            "questoes_modulo": sum(1 for q, d in canon if modo in modos_da(q) and all(pres[c][modo] for c in q["conceitos"])),
            "questoes_simulados": {sid: sum(1 for q, d in qs if modo in modos_da(q) and all(pres[c][modo] for c in q["conceitos"])) for sid, *_r, qs in sims},
            "modulos": {m: json.load(open(os.path.join(cdir, m, "_dados.json")))["tempoEstimado"] for m in modulos_todos}}
    return relatorio


if __name__ == "__main__":
    canon, sims = build_questoes()
    erros = validar_questoes(canon, sims)
    est = estatisticas(canon, sims)
    print(json.dumps(est, ensure_ascii=False, indent=1))
    print("ERROS:", erros if erros else "nenhum")
    if erros: sys.exit(1)
    if "--gerar" in sys.argv:
        rel = gerar(canon, sims)
        rel["questoes"] = est
        json.dump(rel, open(os.path.join(GEP, "docs/courses/DIR-T2-build.json"), "w"), ensure_ascii=False, indent=2)
        print(json.dumps(rel["variantes"], ensure_ascii=False, indent=1))

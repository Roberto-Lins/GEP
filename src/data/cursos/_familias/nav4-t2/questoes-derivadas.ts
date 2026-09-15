import type { Questao } from '@tipos/question';

/**
 * Problemas inéditos inspirados nas assinaturas das SOPAs, nunca em sua redação.
 * Todos os valores tabulares aparecem explicitamente como dados didáticos; não
 * simulam uma consulta inexistente ao ANB 2026.
 */
export const questoesDerivadasSopa: Questao[] = [
  {
    id:'NAV4-DER-ALT-001', tipo:'discursiva', topico:'01-correcoes-de-altura', dificuldade:'dificil',
    origem:'derivada_sopa', fonteId:'ASS-ALT-ESTRELA-COMPLETA', arquivo:'T2 NAV4 - 2022.pdf', ano:2022, pagina:'3 de 7', questaoOriginal:'3',
    competencia:'Executar uma correção completa de altura de estrela e controlar a soma algébrica.', tempoEstimadoMin:10,
    erroProvavel:'Aplicar a depressão antes do erro instrumental ou esquecer a correção complementar.', assinatura:['correção completa','estrela','A2/A4','controle independente'],
    contexto:'Dados didáticos: ai = 42°18,6′; ei = +0,8′; elevação do olho = 16 m. A consulta orientada já forneceu dpap = −7,0′, correção principal da estrela = −1,0′ e correção A4 = −0,1′.',
    enunciado:'Determine ao, aap e a. Registre a correção total e explique o sinal físico da refração.',
    enunciadoCompleto:'Sem consultar efemérides, use somente os valores didáticos fornecidos para transformar ai em altura verdadeira de uma estrela.',
    materiaisNecessarios:['calculadora','folha de cálculo'], anexos:[], statusGabarito:'auditado_publicavel',
    gabaritoComentado:'ao = 42°19,4′; aap = 42°12,4′; a = 42°11,3′. Correção total sobre ai: −7,3′. A refração é negativa porque a atmosfera eleva a posição aparente do astro.',
    criterios:['ao correto','aap correto','altura verdadeira','soma total e justificativa física'], criteriosDeCreditoParcial:['0,25 por ao','0,25 por aap','0,25 por a','0,25 por controle/justificativa'],
    resolucaoPassoAPasso:['Some ei a ai para obter ao.','Some dpap para obter aap.','Aplique −1,0′ e −0,1′.','Refaça tudo como ai + 0,8′ − 7,0′ − 1,0′ − 0,1′.'],
    verificacaoIndependente:'A soma única deve reproduzir a diferença a − ai = −7,3′.', conceptIds:['NAV4-ALT-CADEIA','NAV4-ALT-DIP','NAV4-ALT-AR'], modalidades:['rapido','pra-safar','completo']
  },
  {
    id:'NAV4-DER-ALT-002', tipo:'discursiva', topico:'01-correcoes-de-altura', dificuldade:'dificil',
    origem:'derivada_sopa', fonteId:'ASS-ALT-PLANETA-COMPLETA', arquivo:'T2 NAV4 - 2022.pdf', ano:2022, pagina:'3 de 7', questaoOriginal:'3',
    competencia:'Executar correção de planeta distinguindo correção principal e adicional.', tempoEstimadoMin:10,
    erroProvavel:'Omitir a correção adicional do planeta ou tratá-la como semidiâmetro.', assinatura:['correção completa','planeta','parcela adicional'],
    contexto:'Observação didática de Vênus: ai = 18°45,2′; ei = −1,6′; dpap = −5,8′. A tabela selecionada forneceu c = −2,8′ e correção adicional de paralaxe = +0,2′.',
    enunciado:'Calcule ao, aap e a; identifique qual parcela corrige a paralaxe.',
    materiaisNecessarios:['calculadora'], anexos:[], statusGabarito:'auditado_publicavel',
    gabaritoComentado:'ao = 18°43,6′; aap = 18°37,8′; a = 18°35,2′. A parcela +0,2′ é a correção adicional associada à paralaxe.',
    criterios:['cadeia completa','parcela adicional identificada','sinais justificados'], criteriosDeCreditoParcial:['0,3 pela cadeia até aap','0,4 pelo resultado','0,3 pela identificação'],
    resolucaoPassoAPasso:['ai + ei = ao.','ao + dpap = aap.','aap + c + cad = a.'], verificacaoIndependente:'Correção total = −10,0′; 18°45,2′ − 10,0′ = 18°35,2′.',
    conceptIds:['NAV4-ALT-CADEIA','NAV4-ALT-PA'], modalidades:['rapido','pra-safar','completo']
  },
  {
    id:'NAV4-DER-ALT-003', tipo:'discursiva', topico:'01-correcoes-de-altura', dificuldade:'dificil',
    origem:'derivada_sopa', fonteId:'ASS-ALT-LUA-COMPLETA', arquivo:'orientação manuscrita T2/2026', ano:2026, pagina:'problemas possíveis', questaoOriginal:'correção da Lua',
    competencia:'Corrigir a altura da Lua sem aplicar o limbo superior duas vezes.', tempoEstimadoMin:12,
    erroProvavel:'Somar a correção lunar e esquecer o ajuste de −30′ do limbo superior.', assinatura:['correção completa','Lua','limbo superior','Ph explícita'],
    contexto:'Dados didáticos: Lua, limbo superior; ai = 33°08,4′; ei = +0,6′; dpap = −4,3′; c = +57,6′; cad = +2,5′. A própria instrução da tábua manda subtrair 30,0′ para o limbo superior.',
    enunciado:'Calcule a altura verdadeira e explique por que não se acrescenta outro semidiâmetro.',
    materiaisNecessarios:['calculadora','instrução da tábua lunar'], anexos:[], statusGabarito:'auditado_publicavel',
    gabaritoComentado:'ao = 33°09,0′; aap = 33°04,7′; correção lunar líquida = +30,1′; a = 33°34,8′. A tábua lunar já organiza refração, semidiâmetro, paralaxe e aumento; aplica-se apenas o ajuste que sua nota determina.',
    criterios:['ao/aap','correção lunar líquida','altura final','controle contra dupla aplicação'], criteriosDeCreditoParcial:['0,2 até aap','0,3 pela combinação lunar','0,3 pelo resultado','0,2 pela justificativa'],
    resolucaoPassoAPasso:['Obtenha ao e aap.','Some c + cad − 30,0′.','Aplique a correção líquida uma única vez.'], verificacaoIndependente:'a − ai = +26,4′, igual a ei + dpap + c + cad − 30′.',
    conceptIds:['NAV4-ALT-CADEIA','NAV4-ALT-LUA','NAV4-ALT-SD','NAV4-ALT-PA'], modalidades:['rapido','pra-safar','completo']
  },
  {
    id:'NAV4-DER-ALT-004', tipo:'multipla', topico:'01-correcoes-de-altura', dificuldade:'dificil',
    origem:'derivada_sopa', fonteId:'ASS-ALT-DIAGNOSTICO-TABELA', arquivo:'orientação manuscrita T2/2026', ano:2026, pagina:'PG-147–152', questaoOriginal:'correções de altura',
    competencia:'Localizar o primeiro erro em uma solução parcial.', tempoEstimadoMin:4, erroProvavel:'Aceitar o número final sem conferir a faixa de altura.', assinatura:['diagnóstico','A2/A3','solução parcial'],
    enunciado:'Após obter aap = 08°42,6′, um aluno entra na A2 e continua a conta. Qual é o primeiro erro?', alternativas:['A A2 começa em 10°; deve-se usar A3','Deveria arredondar aap para 10°','Faltou converter aap em HMG','A depressão deve ser aplicada depois da A2'], correta:0,
    comentario:'PG-147 mostra A2 para 10°–90° e PG-148 mostra A3 para 0°–10°.', explicacaoDistratores:['Correta.','Arredondar mudaria a faixa artificialmente.','HMG não escolhe A2/A3.','A depressão já participa de aap.'],
    materiaisNecessarios:['PG-147','PG-148'], anexos:[], statusGabarito:'auditado_publicavel', resolucaoPassoAPasso:['Compare aap com os títulos das tábuas.','Selecione A3.'], verificacaoIndependente:'O próprio cabeçalho da A3 contém 0°–10°.',
    conceptIds:['NAV4-ALT-CADEIA','NAV4-ANB2026'], modalidades:['pra-safar','completo']
  },

  {
    id:'NAV4-DER-PM-001', tipo:'discursiva', topico:'04-hora-da-passagem-meridiana', dificuldade:'dificil',
    origem:'derivada_sopa', fonteId:'ASS-PM-PRECISA-W', arquivo:'T2 NAV4 - 2022.pdf', ano:2022, pagina:'5 de 7', questaoOriginal:'5',
    competencia:'Determinar Hleg pelo método preciso com longitude oeste e ET negativa.', tempoEstimadoMin:10, erroProvavel:'Usar HML = 12h + ET em vez de 12h − ET.', assinatura:['Hleg precisa','ET negativa','longitude W','fuso oeste'],
    contexto:'Dados didáticos: ET = −05m12s; λ = 030°45′ W; fuso P = +2h na convenção Hleg = HMG − P.',
    enunciado:'Determine HML, tempo de longitude, HMG e Hleg da passagem.', materiaisNecessarios:['calculadora'], anexos:[], statusGabarito:'auditado_publicavel',
    gabaritoComentado:'HML = 12h05m12s; λt = 2h03m00s; HMG = 14h08m12s; Hleg = 12h08m12s.', criterios:['HML','longitude em tempo','HMG','Hleg'], criteriosDeCreditoParcial:['0,25 pela HML','0,25 pela longitude em tempo','0,25 pela HMG','0,25 pela Hleg'],
    resolucaoPassoAPasso:['Use HML = 12h − ET.','Converta 30°45′ em 2h03m.','Para W, some λt à HML.','Subtraia P.'], verificacaoIndependente:'ET negativa torna HML posterior a 12h; longitude W torna HMG posterior à HML.',
    conceptIds:['NAV4-PM-PRECISO','NAV4-PM-FUSO'], modalidades:['rapido','pra-safar','completo']
  },
  {
    id:'NAV4-DER-PM-002', tipo:'discursiva', topico:'04-hora-da-passagem-meridiana', dificuldade:'dificil',
    origem:'derivada_sopa', fonteId:'ASS-PM-PRECISA-E', arquivo:'coletânea histórica mista', ano:'incerto', pagina:'8 de 9', questaoOriginal:'6.1',
    competencia:'Determinar Hleg pelo método preciso com longitude leste e ET positiva.', tempoEstimadoMin:10, erroProvavel:'Somar a longitude leste na conversão para Greenwich.', assinatura:['Hleg precisa','ET positiva','longitude E','fuso leste'],
    contexto:'Dados didáticos: ET = +03m40s; λ = 022°30′ E. A zona legal está duas horas adiantada em relação a Greenwich: Hleg = HMG + 2h.',
    enunciado:'Determine HML, HMG e Hleg da passagem.', materiaisNecessarios:['calculadora'], anexos:[], statusGabarito:'auditado_publicavel',
    gabaritoComentado:'HML = 11h56m20s; λt = 1h30m; HMG = 10h26m20s; Hleg = 12h26m20s.', criterios:['sinal da ET','sinal da longitude','fuso legal'], criteriosDeCreditoParcial:['0,3 HML','0,3 HMG','0,4 Hleg'],
    resolucaoPassoAPasso:['HML = 12h − ET.','Para E, subtraia λt para obter HMG.','Some 2h para a hora legal.'], verificacaoIndependente:'ET positiva antecipa HML; um meridiano E culmina antes em Greenwich.',
    conceptIds:['NAV4-PM-PRECISO','NAV4-PM-FUSO'], modalidades:['rapido','pra-safar','completo']
  },
  {
    id:'NAV4-DER-PM-003', tipo:'discursiva', topico:'04-hora-da-passagem-meridiana', dificuldade:'dificil',
    origem:'derivada_sopa', fonteId:'ASS-PM-MUDANCA-DATA', arquivo:'orientação manuscrita T2/2026', ano:2026, pagina:'problemas possíveis', questaoOriginal:'Hleg da passagem',
    competencia:'Normalizar 24 horas e registrar mudança de data no cálculo da passagem.', tempoEstimadoMin:10, erroProvavel:'Anotar 24h03m como hora válida ou mudar a data duas vezes.', assinatura:['Hleg','longitude extrema W','normalização','mudança de data'],
    contexto:'Dados didáticos: HML tabulada = 12h04m00s no dia D; λ = 179°45′ W; fuso P = +12h e Hleg = HMG − P.',
    enunciado:'Determine HMG e Hleg, registrando a data em cada etapa.', materiaisNecessarios:['calculadora'], anexos:[], statusGabarito:'auditado_publicavel',
    gabaritoComentado:'λt = 11h59m; HMG = 24h03m = 00h03m do dia D+1; Hleg = 12h03m do dia D.', criterios:['longitude em tempo','normalização de HMG','data final'], criteriosDeCreditoParcial:['0,3 λt','0,4 HMG/data','0,3 Hleg/data'],
    resolucaoPassoAPasso:['Some λt à HML porque W.','Normalize 24h03m para 00h03m D+1.','Subtraia 12h e acompanhe a data.'], verificacaoIndependente:'A hora legal local deve permanecer próxima do meio-dia.',
    conceptIds:['NAV4-PM-SIMPLES','NAV4-PM-FUSO'], modalidades:['rapido','pra-safar','completo']
  },
  {
    id:'NAV4-DER-PM-004', tipo:'multipla', topico:'04-hora-da-passagem-meridiana', dificuldade:'dificil',
    origem:'derivada_sopa', fonteId:'ASS-PM-DIAGNOSTICO', arquivo:'T2 NAV4 - 2022.pdf', ano:2022, pagina:'5 de 7', questaoOriginal:'5',
    competencia:'Diagnosticar um sinal incorreto sem refazer toda a questão.', tempoEstimadoMin:4, erroProvavel:'Conferir apenas o valor final.', assinatura:['diagnóstico','Hleg','ET','longitude'],
    enunciado:'Com ET negativa e longitude W, uma solução obteve HML anterior a 12h e HMG anterior a HML. Quantos erros de tendência há?', alternativas:['Dois','Um','Nenhum','Não é possível saber'], correta:0,
    comentario:'ET negativa implica HML = 12h − ET > 12h; longitude W implica HMG > HML.', explicacaoDistratores:['Correta.','As duas tendências foram invertidas.','As duas tendências contradizem as fontes.','Os sinais bastam para decidir.'],
    materiaisNecessarios:[], anexos:[], statusGabarito:'auditado_publicavel', resolucaoPassoAPasso:['Teste a tendência da ET.','Teste a tendência da longitude.'], verificacaoIndependente:'São controles qualitativos independentes.',
    conceptIds:['NAV4-PM-PRECISO','NAV4-PM-FUSO'], modalidades:['pra-safar','completo']
  },
  {
    id:'NAV4-DER-PM-005', tipo:'vf', topico:'04-hora-da-passagem-meridiana', dificuldade:'facil',
    origem:'derivada_sopa', fonteId:'ASS-PM-INSTANTE-FAVORAVEL', arquivo:'T2 NAV4 - 2022.pdf', ano:2022, pagina:'2 de 7', questaoOriginal:'2-IV',
    competencia:'Reconhecer o instante observacional usado para latitude meridiana.', tempoEstimadoMin:2,
    erroProvavel:'Confundir boa visibilidade após o nascer com a condição geométrica da culminação.', assinatura:['V/F','passagem meridiana','altura máxima','instante favorável'],
    afirmacao:'A latitude meridiana do Sol é determinada pela observação feita logo após o nascer, quando o astro ainda está bem a leste.', correta:false,
    comentario:'A condição determinativa é a passagem meridiana superior, próxima da altura máxima, quando o triângulo de posição se reduz ao meridiano.',
    materiaisNecessarios:[], anexos:[], statusGabarito:'auditado_publicavel',
    resolucaoPassoAPasso:['Identifique o instante citado.','Compare-o com a culminação no meridiano.','Rejeite a afirmação.'],
    verificacaoIndependente:'Na passagem superior, o ângulo no polo local é 0°, não um valor de leste após o nascer.',
    conceptIds:['NAV4-PM-CONCEITO'], modalidades:['rapido','pra-safar','completo']
  },

  {
    id:'NAV4-DER-LAT-001', tipo:'discursiva', topico:'05-latitude-meridiana', dificuldade:'dificil',
    origem:'derivada_sopa', fonteId:'ASS-LAT-MESMO-NOME-LAT-MAIOR', arquivo:'T2 NAV4 - 2022.pdf', ano:2022, pagina:'6 de 7', questaoOriginal:'6',
    competencia:'Resolver latitude meridiana no caso de nomes iguais e |φ| > |δ|.', tempoEstimadoMin:10, erroProvavel:'Subtrair z quando o observador está mais afastado do Equador que o Sol.', assinatura:['latitude exata','nomes iguais','Lat maior','Sol ao norte'],
    contexto:'Na passagem superior: a = 64°20,0′; δ = 12°15,0′ S; posição estimada próxima de 38° S.',
    enunciado:'Calcule z, determine a latitude, desenhe N–Z–S e informe o azimute.', materiaisNecessarios:['folha para desenho'], anexos:[], statusGabarito:'auditado_publicavel',
    gabaritoComentado:'z = 25°40,0′; φ = 37°55,0′ S; o Sol está ao norte, Az = 000°.', criterios:['z','caso geométrico','latitude com nome','azimute'], criteriosDeCreditoParcial:['0,2 z','0,4 latitude','0,2 nome','0,2 azimute/desenho'],
    resolucaoPassoAPasso:['z = 90° − a.','No desenho, δ=12°15′S fica ao norte do observador próximo de 38°S.','Some módulos: φ = δ + z.'], verificacaoIndependente:'Com N positivo/S negativo: φ = δ − z = −12°15′ −25°40′ = −37°55′.',
    conceptIds:['NAV4-LAT-Z','NAV4-LAT-CASOS','NAV4-LAT-AZ'], modalidades:['rapido','pra-safar','completo']
  },
  {
    id:'NAV4-DER-LAT-002', tipo:'discursiva', topico:'05-latitude-meridiana', dificuldade:'dificil',
    origem:'derivada_sopa', fonteId:'ASS-LAT-NOMES-CONTRARIOS', arquivo:'coletânea histórica mista', ano:'incerto', pagina:'9 de 9', questaoOriginal:'6',
    competencia:'Resolver latitude meridiana com latitude e declinação de nomes contrários.', tempoEstimadoMin:10, erroProvavel:'Somar os módulos por ver hemisférios opostos.', assinatura:['latitude exata','nomes contrários','forma assinada'],
    contexto:'Na passagem superior: a = 52°10,0′; δ = 08°20,0′ N; posição estimada próxima de 30° S.',
    enunciado:'Calcule z, latitude e azimute; confira pela forma assinada.', materiaisNecessarios:['folha para desenho'], anexos:[], statusGabarito:'auditado_publicavel',
    gabaritoComentado:'z = 37°50,0′; φ = 29°30,0′ S; Sol ao norte, Az = 000°.', criterios:['z','latitude','nome','conferência assinada'], criteriosDeCreditoParcial:['0,2 z','0,4 latitude','0,2 nome/Az','0,2 controle'],
    resolucaoPassoAPasso:['z = 90° − a.','Use φ = δ − z porque o Sol culmina ao norte.','Interprete o sinal negativo como Sul.'], verificacaoIndependente:'+08°20′ −37°50′ = −29°30′.',
    conceptIds:['NAV4-LAT-Z','NAV4-LAT-CASOS','NAV4-LAT-AZ'], modalidades:['rapido','pra-safar','completo']
  },
  {
    id:'NAV4-DER-LAT-003', tipo:'discursiva', topico:'05-latitude-meridiana', dificuldade:'dificil',
    origem:'derivada_sopa', fonteId:'ASS-LAT-SOL-AO-SUL', arquivo:'orientação manuscrita T2/2026', ano:2026, pagina:'problemas possíveis', questaoOriginal:'latitude exata',
    competencia:'Resolver latitude meridiana e reconhecer culminação ao sul.', tempoEstimadoMin:10, erroProvavel:'Responder Az = 000° por automatismo.', assinatura:['latitude exata','nomes iguais','Sol ao sul','Az 180°'],
    contexto:'Na passagem superior: a = 70°00,0′; δ = 10°00,0′ N; posição estimada próxima de 30° N.',
    enunciado:'Calcule z, latitude e azimute e represente o caso em N–Z–S.', materiaisNecessarios:['folha para desenho'], anexos:[], statusGabarito:'auditado_publicavel',
    gabaritoComentado:'z = 20°00,0′; φ = 30°00,0′ N; como o observador está ao norte da declinação, o Sol culmina ao sul: Az = 180°.', criterios:['z','latitude','posição relativa','azimute'], criteriosDeCreditoParcial:['0,2 z','0,4 latitude','0,2 desenho','0,2 Az'],
    resolucaoPassoAPasso:['Calcule z.','Some δ e z no caso de mesmo nome com |φ|>|δ|.','Compare a latitude do observador à declinação.'], verificacaoIndependente:'O ponto subsolar em 10°N está ao sul do observador em 30°N.',
    conceptIds:['NAV4-LAT-Z','NAV4-LAT-CASOS','NAV4-LAT-AZ'], modalidades:['rapido','pra-safar','completo']
  },
  {
    id:'NAV4-DER-LAT-004', tipo:'multipla', topico:'05-latitude-meridiana', dificuldade:'dificil',
    origem:'derivada_sopa', fonteId:'ASS-LAT-DIAGNOSTICO', arquivo:'T2 NAV4 - 2022.pdf', ano:2022, pagina:'6 de 7', questaoOriginal:'6',
    competencia:'Detectar incoerência entre conta, hemisfério e azimute.', tempoEstimadoMin:4, erroProvavel:'Aceitar latitude sem conferir o lado do Sol.', assinatura:['diagnóstico','latitude','azimute','solução parcial'],
    enunciado:'Uma solução encontra φ = 30°N com δ = 10°N e afirma que o Sol culminou ao norte (Az 000°). Qual verificação revela o erro?', alternativas:['O ponto subsolar em 10°N está ao sul do observador em 30°N','A distância zenital nunca pode ser 20°','Declinação norte exige sempre Az 000°','O azimute não pode ser conferido geometricamente'], correta:0,
    comentario:'A posição relativa em latitude determina o lado da culminação.', explicacaoDistratores:['Correta.','z=20° é possível.','O nome da declinação não basta.','O desenho N–Z–S é a conferência principal.'],
    materiaisNecessarios:[], anexos:[], statusGabarito:'auditado_publicavel', resolucaoPassoAPasso:['Compare φ e δ na reta meridiana.','Localize o ponto subsolar.'], verificacaoIndependente:'Desenho N–Z–S.',
    conceptIds:['NAV4-LAT-CASOS','NAV4-LAT-AZ'], modalidades:['pra-safar','completo']
  },
];

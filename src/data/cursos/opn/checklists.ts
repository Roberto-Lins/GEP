// Itens de checklist por mini-matéria (persistidos em localStorage). Id estável
// por item dentro de cada tópico. Cada item é uma afirmação de domínio em 1ª
// pessoa, no nível de cobrança da prova.
import type { ItemChecklist } from '@tipos/lesson';
export type { ItemChecklist } from '@tipos/lesson';

export const checklists: Record<string, ItemChecklist[]> = {
  '00-introducao-e-mapa-da-prova': [
    { id: 'c1', texto: 'Sei de cabeça a fórmula da prova: 1,0 + 1,0 + 3,7 + 1,5 + 2,8 = 10,0.' },
    { id: 'c2', texto: 'Entendo que Rosa (3,7) e quadro tático (2,8) somam mais da metade da prova.' },
    { id: 'c3', texto: 'Sei a espinha dorsal: doutrina → documentos → ATP → organização → Rosa → manobras → quadro tático.' },
    { id: 'c4', texto: 'Sei o que foi excluído (Op. Anfíbias, Op. Seg. Marítima, Op. Informação, Plano Operacional) e que o CAMPO Segurança Marítima continua.' },
    { id: 'c5', texto: 'Vou levar régua, lápis, borracha e compasso, e sei que há 5 anexos consultáveis na prova.' },
  ],

  '01-poder-maritimo-e-poder-naval': [
    { id: 'c1', texto: 'Defino Poder Marítimo e Poder Naval com as palavras da Apostila, sem trocar um pelo outro.' },
    { id: 'c2', texto: 'Sei que o Poder Naval é o único elemento do Marítimo que também é componente da Expressão Militar.' },
    { id: 'c3', texto: 'Listo os elementos do Poder Marítimo e os componentes do Poder Naval.' },
    { id: 'c4', texto: 'Diferencio Flexibilidade (força montada) de Versatilidade (função executada).' },
    { id: 'c5', texto: 'Sei o alcance do Poder Naval: mar, águas interiores, áreas terrestres limitadas e espaço aéreo sobrejacente.' },
  ],

  '02-missao-campos-e-tarefas-do-poder-naval': [
    { id: 'c1', texto: 'Escrevo a Missão da MB separando a tarefa (preparar e empregar o PN) dos 4 propósitos.' },
    { id: 'c2', texto: 'Listo os 4 CAPN e sei de qual propósito da missão cada um nasce.' },
    { id: 'c3', texto: 'Sei as duas vertentes da Segurança Marítima: Proteção Marítima e Segurança da Navegação Aquaviária.' },
    { id: 'c4', texto: 'Listo os 6 TBPN na gradação do uso da força (Negar → ... → Contribuir).' },
    { id: 'c5', texto: 'Diferencio Negar (o inimigo não usa) de Controlar (nós usamos).' },
    { id: 'c6', texto: 'Não confundo o CAPN Segurança Marítima (cai) com a Operação de Segurança Marítima (excluída).' },
  ],

  '03-operacoes-acoes-e-atividades-navais': [
    { id: 'c1', texto: 'Classifico um exemplo entre operação, ação, atividade e forma transversal.' },
    { id: 'c2', texto: 'Defino Operação Naval (ações táticas ligadas a CAPN/TBPN, em qualquer campo).' },
    { id: 'c3', texto: 'Diferencio Reconhecimento (pontual), Vigilância (contínuo) e Informação (processado) na IVR.' },
    { id: 'c4', texto: 'Sei os 3 efeitos da Ação de Superfície defensiva: Repulsão, Obstrução e Diversão.' },
    { id: 'c5', texto: 'Sei que a Guerra Eletrônica é forma transversal e o que ela faz no espectro eletromagnético.' },
    { id: 'c6', texto: 'Sei que Op. Anfíbia e Op. de Segurança Marítima são operações, mas não as aprofundo (excluídas).' },
  ],

  '04-documentos-operativos-e-diretivas': [
    { id: 'c1', texto: 'Defino documento operativo e diretiva (pensamento, decisão, determinação).' },
    { id: 'c2', texto: 'Sei os 4 requisitos da diretiva: clara, concisa, completa e determinativa.' },
    { id: 'c3', texto: 'Distingo Plano de Operação (futuro/HB) de Ordem de Operação (imediato/sem HB).' },
    { id: 'c4', texto: 'Sei o que é Hipótese Básica e quando entra o Plano Contingente.' },
    { id: 'c5', texto: 'Diferencio OrdOpe, OrdMov e OMS — e que OrdMov/OMS não resolvem problema militar.' },
    { id: 'c6', texto: 'Não confundo Plano Operacional (excluído) com Plano de Operação.' },
  ],

  '05-estrutura-da-ordope-e-ordmov': [
    { id: 'c1', texto: 'Componho a estrutura: documento básico (cabeçalho/corpo/fecho) + partes complementares.' },
    { id: 'c2', texto: 'Aplico a lei de formação FT/GT/UT/ET (dado um número, identifico a FT e o GT).' },
    { id: 'c3', texto: 'Leio os símbolos de capitânia (CCC/CC/C) e as siglas QF/QA.' },
    { id: 'c4', texto: 'Sei que a Missão é o §2 (tarefa + propósito) e a Execução/Tarefas o §3.' },
    { id: 'c5', texto: 'Listo os dados extraídos de uma OrdOpe e de uma OrdMov.' },
  ],

  '06-atp-linguagem-operativa': [
    { id: 'c1', texto: 'Sei o que é o ATP-1 Vol. II e para que serve (linguagem padronizada, sem ambiguidade).' },
    { id: 'c2', texto: 'Diferencio codificar (intenção→código) de interpretar (código→movimento) um sinal.' },
    { id: 'c3', texto: 'Sei as funções de TACK, DESIG, INTE e NEGAT.' },
    { id: 'c4', texto: 'Classifico o peso da ordem: shall/are to/must (obrigação), should (recomendação), may (permissão).' },
    { id: 'c5', texto: 'Interpreto sinais simples (FORM, RUMOCOR, GUINA, VELOC, POS) e sei que explicar ≠ traduzir.' },
  ],

  '07-organizacao-comando-e-prontidao': [
    { id: 'c1', texto: 'Diferencio organização por tipo, por tarefa e para o combate (e os eixos preparar/empregar).' },
    { id: 'c2', texto: 'Sei a cadeia FT/GT/UT/ET e o que é o CWC (e os Comandantes de Guerra AAWC/ASuWC/ASWC/EWC).' },
    { id: 'c3', texto: 'Distingo Comando Operacional, Controle Operacional, Comando Tático e Controle Tático.' },
    { id: 'c4', texto: 'Sei que o OCT deve ser o CWC e o que ele dissemina (prontidão, alarme, alerta).' },
    { id: 'c5', texto: 'Explico a tríade alarme-avaliação-ação.' },
    { id: 'c6', texto: 'Memorizo as condições de prontidão I–V (decrescente) e as cores do alarme (branco/amarelo/vermelho).' },
  ],

  '08-rosa-de-manobras-movimento-relativo': [
    { id: 'c1', texto: 'Diferencio movimento verdadeiro de relativo e a DMR do rumo do alvo.' },
    { id: 'c2', texto: 'Sei que marcação constante + distância caindo = rota de colisão.' },
    { id: 'c3', texto: 'Construo os dois diagramas (posições × velocidades) e sei o papel de t, r, m, M1, M2.' },
    { id: 'c4', texto: 'Aplico a regra de ouro: M1-M2 ∥ rm (de r para m) e tr + rm = tm.' },
    { id: 'c5', texto: 'Uso as regras dos 3 e 6 minutos e escolho a maior escala possível.' },
    { id: 'c6', texto: 'Evito os 4 erros mecânicos: escala, recíproca, sentido do rm e marcação relativa × verdadeira.' },
  ],

  '09-rosa-de-manobras-pma-e-contatos': [
    { id: 'c1', texto: 'Sei os 3 elementos do PMA (marcação, distância, hora) e que é o pé da perpendicular de R.' },
    { id: 'c2', texto: 'Executo os 7 passos do problema de contato na ordem.' },
    { id: 'c3', texto: 'Calculo a VMR pela distância relativa e pelo tempo.' },
    { id: 'c4', texto: 'Não confundo DMR, marcação do PMA e rumo do contato (três direções distintas).' },
    { id: 'c5', texto: 'Confiro a recíproca e a escala antes de fechar a resposta.' },
    { id: 'c6', texto: 'Resolvo o exemplo 260/12 + M1 020/14000 + M2 015/11000 e chego a ~237°/24 kt.' },
  ],

  '10-rosa-de-manobras-vento': [
    { id: 'c1', texto: 'Lembro que o vento é nomeado de onde sopra e o vetor é desenhado para onde.' },
    { id: 'c2', texto: 'Diferencio vento relativo (anemômetro), aparente (direção verdadeira) e real (massa de ar).' },
    { id: 'c3', texto: 'Converto o relativo em aparente verdadeiro: BE soma, BB subtrai.' },
    { id: 'c4', texto: 'Monto o triângulo tr + rw = tw e tomo a recíproca para o vento real.' },
    { id: 'c5', texto: 'Resolvo o exemplo 060/10 + 090 BE/14 → vento real ≈ 185°/17 kt.' },
    { id: 'c6', texto: 'No vento no convés, reconheço a possibilidade de 2 soluções ou nenhuma.' },
  ],

  '11-rosa-de-manobras-entrar-em-posicao': [
    { id: 'c1', texto: 'Identifico os papéis vetoriais: guia = tr, manobrador = tm, deslocamento = rm.' },
    { id: 'c2', texto: 'Uso o compasso com raio = velocidade de manobra para achar o tm.' },
    { id: 'c3', texto: 'Calculo o tempo pela distância e pela VMR.' },
    { id: 'c4', texto: 'Dou o final do guia (recíproca do deslocamento).' },
    { id: 'c5', texto: 'Resolvo o exemplo guia 090/10 + 135/2800 + 15 kt → rumo ≈ 107°, ≈ 14 min.' },
    { id: 'c6', texto: 'Reconheço quando o posto é inatingível (sem solução) ou há duas soluções.' },
  ],

  '12-manobras-taticas-formaturas-e-sinais': [
    { id: 'c1', texto: 'Sei o limite navio grande/pequeno (450 pés) e que os NT são sempre grandes.' },
    { id: 'c2', texto: 'Defino formatura, dispositivo, corpo principal, cobertura e guia.' },
    { id: 'c3', texto: 'Identifico coluna, linha de frente, linha de marcação e diamante (e os FORM correspondentes).' },
    { id: 'c4', texto: 'Aplico as distâncias padrão (1.000/500; tipos diferentes = a do maior).' },
    { id: 'c5', texto: 'Reconheço os sinais FORM, POS, DESIG, GUINA, RUMOCOR, VELOC.' },
    { id: 'c6', texto: 'Distingo executivo normal (FORM/RUMOCOR/POS) de imediato (GUINA/VELOC).' },
  ],

  '13-manobras-taticas-guina-rumocor-e-guia': [
    { id: 'c1', texto: 'Diferencio GUINA (simultânea, verdadeiras, guia igual) de RUMOCOR (sucessiva, relativas, pião vira guia).' },
    { id: 'c2', texto: 'Sei quando o guia muda automaticamente.' },
    { id: 'c3', texto: 'Explico a RUMOCOR SIERRA (flanco oposto guina primeiro e vira guia, través final).' },
    { id: 'c4', texto: 'Sei as restrições do RUMOCOR (não em formatura circular nem linha de marcação).' },
    { id: 'c5', texto: 'Descrevo uma troca de postos (POS JULIETT).' },
    { id: 'c6', texto: 'Respondo no padrão código-guia-sequência-bordo-velocidade-resultado (explico, não traduzo).' },
  ],

  '14-quadro-tatico-coc-cic-e-etapas': [
    { id: 'c1', texto: 'Sei a tarefa principal (informar) e a secundária (controle/assistência) do COC/CIC.' },
    { id: 'c2', texto: 'Listo as 5 etapas na ordem e explico cada uma em uma frase.' },
    { id: 'c3', texto: 'Sei que a filtragem elimina o não essencial e a apresentação usa as plotagens.' },
    { id: 'c4', texto: 'Diferencio controle de assistência como funções do COC.' },
    { id: 'c5', texto: 'Cito fontes de coleta (radar, link, sonar, IFF, GE, OrdOpe, visual).' },
    { id: 'c6', texto: 'Relaciono a tríade alarme-avaliação-ação ao trabalho do COC.' },
  ],

  '15-quadro-tatico-contatos-e-partes': [
    { id: 'c1', texto: 'Sei os 4 métodos de expressar posição (e a grade cartesiana com cores/eixos).' },
    { id: 'c2', texto: 'Explico número e bloco de acompanhamento (costado → bloco).' },
    { id: 'c3', texto: 'Classifico um contato (categoria + plataforma + número).' },
    { id: 'c4', texto: 'Identifico o tipo de parte (instantânea, inicial, ampliadora, SITREP, mista).' },
    { id: 'c5', texto: 'Monto uma parte inicial/ampliadora com os elementos essenciais na ordem.' },
    { id: 'c6', texto: 'Sei que o PMA só entra na parte quando há segurança/interceptação; diferencio JUNTARAM de BIFURCADO.' },
  ],

  '16-quadro-tatico-plotagens-pim-e-opgen': [
    { id: 'c1', texto: 'Diferencio plotagem de superfície e sumária (relativo) da geográfica (verdadeiro).' },
    { id: 'c2', texto: 'Sei quem usa cada plotagem.' },
    { id: 'c3', texto: 'Listo os elementos de uma plotagem (legenda, símbolos, abreviaturas, derrotas, info).' },
    { id: 'c4', texto: 'Explico o PIM (posição-rumo-velocidade-hora) e que o OCT o estabelece.' },
    { id: 'c5', texto: 'Dou os propósitos do PIM (retorno de aeronaves, postos, comandos adjacentes, RDVZ).' },
    { id: 'c6', texto: 'Conceituo RDVZ, ETA e OPGEN (este apenas o conceito).' },
  ],

  // @opn-checklists (ponto de inserção — não remover)
};

export const checklistDe = (slug: string) => checklists[slug] ?? [];

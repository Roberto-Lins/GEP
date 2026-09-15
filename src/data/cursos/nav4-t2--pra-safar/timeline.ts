import type { Prioridade, TopicoTimeline } from '@tipos/lesson';
export type { Prioridade } from '@tipos/lesson';

export const timeline: TopicoTimeline[] = [
  {
    "ordem": 0,
    "slug": "00-mapa-da-t2",
    "titulo": "Mapa da T2 e rota de ataque",
    "subtitulo": "Escopo oficial, padrão de cobrança e uso correto do ANB 2026",
    "prioridade": "máxima",
    "tempoEstimado": "30 min",
    "statusInicial": "pendente",
    "objetivo": "Organizar a preparação pelos quatro blocos confirmados, conhecer o perfil histórico da prova e evitar misturar dados de almanaques antigos.",
    "palavrasChave": [
      "T2",
      "escopo",
      "ANB 2026",
      "90 minutos"
    ]
  },
  {
    "ordem": 1,
    "slug": "01-correcoes-de-altura",
    "titulo": "Correções de altura dos astros",
    "subtitulo": "Estrela, planeta, Sol e Lua: de ai até a",
    "prioridade": "máxima",
    "tempoEstimado": "90 min",
    "statusInicial": "pendente",
    "objetivo": "Transformar altura instrumental em verdadeira, localizar cada correção no ANB e controlar rigorosamente sinais e limbos.",
    "palavrasChave": [
      "altura instrumental",
      "depressão",
      "refração",
      "semidiâmetro",
      "paralaxe"
    ]
  },
  {
    "ordem": 2,
    "slug": "02-linha-de-posicao",
    "titulo": "Linha de posição astronômica",
    "subtitulo": "Circunferência de igual altura, reta tangente, Az e intercepto",
    "prioridade": "muito alta",
    "tempoEstimado": "70 min",
    "statusInicial": "pendente",
    "objetivo": "Explicar a geometria da LDP e transformar altura observada e calculada em uma reta orientada e posicionada corretamente.",
    "palavrasChave": [
      "GP",
      "circunferência de igual altura",
      "distância zenital",
      "intercepto",
      "azimute"
    ]
  },
  {
    "ordem": 3,
    "slug": "03-tabua-radler",
    "titulo": "UE 10.0 — fundamentos da Tábua Radler",
    "subtitulo": "Núcleo conceitual até 13:00 e apoio separado ao trabalho",
    "prioridade": "máxima",
    "tempoEstimado": "110 min",
    "statusInicial": "pendente",
    "objetivo": "Explicar o triângulo PAZ, dominar as duas entradas e conferir a sequência do trabalho Radler.",
    "palavrasChave": [
      "Radler",
      "longitude auxiliar",
      "latitude auxiliar",
      "Aqd",
      "DHN-0607"
    ]
  },
  {
    "ordem": 4,
    "slug": "04-hora-da-passagem-meridiana",
    "titulo": "Hora da passagem meridiana",
    "subtitulo": "Previsão simples e método preciso por equação do tempo",
    "prioridade": "máxima",
    "tempoEstimado": "65 min",
    "statusInicial": "pendente",
    "objetivo": "Determinar a Hleg prevista da passagem superior do Sol pelos métodos simples e preciso, com longitudes e fusos consistentes.",
    "palavrasChave": [
      "HML",
      "HMG",
      "Hleg",
      "equação do tempo",
      "fuso"
    ]
  },
  {
    "ordem": 5,
    "slug": "05-latitude-meridiana",
    "titulo": "Latitude na passagem meridiana",
    "subtitulo": "z, declinação interpolada, três casos e azimute 000°/180°",
    "prioridade": "máxima",
    "tempoEstimado": "85 min",
    "statusInicial": "pendente",
    "objetivo": "Calcular a latitude exata a partir da altura verdadeira do Sol e decidir corretamente soma, diferença, nome e azimute.",
    "palavrasChave": [
      "latitude meridiana",
      "distância zenital",
      "declinação",
      "azimute"
    ]
  },
  {
    "ordem": 6,
    "slug": "06-treino-integrado",
    "titulo": "Treino integrado e protocolo de prova",
    "subtitulo": "Consultas ANB 2026, exercícios guiados e simulação de 90 minutos",
    "prioridade": "máxima",
    "tempoEstimado": "150 min",
    "statusInicial": "pendente",
    "objetivo": "Executar os três problemas prováveis em folha, com consultas de 2026, rastreio de sinais e verificação independente.",
    "palavrasChave": [
      "simulado",
      "ANB 2026",
      "protocolo",
      "gabarito estrutural"
    ]
  },
  {
    "ordem": 99,
    "slug": "99-revisao-final",
    "titulo": "Revisão final",
    "subtitulo": "Cartão de sinais, fluxos e diagnóstico de prontidão",
    "prioridade": "máxima",
    "tempoEstimado": "30 min",
    "statusInicial": "pendente",
    "objetivo": "Recuperar de memória os procedimentos, eliminar erros críticos e entrar na prova com ordem de execução definida.",
    "palavrasChave": [
      "revisão",
      "sinais",
      "fluxos",
      "prontidão"
    ]
  }
];

export const PRIORIDADE_META: Record<Prioridade, { label: string; peso: number; classe: string }> = {
  alta: { label: 'Alta', peso: 1, classe: 'text-nevoa border-white/15 bg-white/5' },
  'muito alta': { label: 'Muito alta', peso: 2, classe: 'text-dourado-soft border-dourado/30 bg-dourado/10' },
  máxima: { label: 'Máxima', peso: 3, classe: 'text-naval border-dourado bg-dourado font-semibold' },
};
export const topicosEstudo = timeline.filter((t) => t.ordem < 99);
export const topicoPorSlug = (slug: string) => timeline.find((t) => t.slug === slug);
export function vizinhos(slug: string) { const lista=[...timeline].sort((a,b)=>a.ordem-b.ordem); const i=lista.findIndex(t=>t.slug===slug); return { anterior:i>0?lista[i-1]:null, proximo:i>=0&&i<lista.length-1?lista[i+1]:null }; }

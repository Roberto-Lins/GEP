// Itens de checklist por mini-matéria (persistidos em localStorage). Id estável por item.
// O checklist do tópico 99 reproduz o "Checklist final" do study guide da professora.
import type { ItemChecklist } from '@tipos/lesson';
export type { ItemChecklist } from '@tipos/lesson';

export const checklists: Record<string, ItemChecklist[]> = {
  '00-introducao-e-revisao-geral': [
    { id: 'c1', texto: 'Sei o que a PP1 cobra: grammar (5 tópicos), vocabulary (crime) e writing (opinião).' },
    { id: 'c2', texto: 'Conheço a sequência recomendada de estudo e a ordem de prioridade dos tópicos.' },
    { id: 'c3', texto: 'Sei usar cada tópico: explicação → áudio → exercícios → checklist, e onde fica a área de Writing.' },
  ],
  '01-whatever-whenever-etc': [
    { id: 'c1', texto: 'Associo cada palavra -ever ao seu tipo: coisa, pessoa, tempo, lugar, escolha ou modo/grau.' },
    { id: 'c2', texto: 'Diferencio whatever (ilimitado) de whichever (escolha limitada).' },
    { id: 'c3', texto: 'Sei usar however antes de adjetivo/advérbio para indicar grau (“não importa quão”).' },
  ],
  '02-crime-and-punishment': [
    { id: 'c1', texto: 'Relaciono crime, criminoso e verbo de cada família lexical.' },
    { id: 'c2', texto: 'Diferencio steal (a coisa) de rob (a pessoa/lugar) e theft de robbery.' },
    { id: 'c3', texto: 'Distingo burglar, mugger e robber pela ação descrita.' },
  ],
  '03-have-something-done': [
    { id: 'c1', texto: 'Monto a estrutura Subject + have + object + past participle.' },
    { id: 'c2', texto: 'Aplico a causativa em vários tempos (present, past, continuous, future, modal).' },
    { id: 'c3', texto: 'Não confundo a causativa (I had my hair cut) com o past perfect (I had cut my hair).' },
  ],
  '04-reporting-verbs': [
    { id: 'c1', texto: 'Identifico a intenção da fala e escolho o reporting verb adequado.' },
    { id: 'c2', texto: 'Sei qual estrutura cada verbo exige (to-infinitive, person + to, -ing, preposition + -ing).' },
    { id: 'c3', texto: 'Não cometo o erro de “suggest someone to do” (suggest exige -ing).' },
  ],
  '05-clauses-of-contrast': [
    { id: 'c1', texto: 'Uso although/even though + oração completa (sujeito + verbo).' },
    { id: 'c2', texto: 'Uso despite/in spite of + substantivo ou -ing (nunca “despite of”).' },
    { id: 'c3', texto: 'Sei transformar uma frase entre as duas estruturas sem mudar o sentido.' },
  ],
  '06-clauses-of-purpose': [
    { id: 'c1', texto: 'Diferencio to + verbo, for + substantivo/-ing e so that + sujeito + modal.' },
    { id: 'c2', texto: 'Sei a forma negativa: so as not to / in order not to + verbo.' },
    { id: 'c3', texto: 'Escolho a estrutura de propósito pelo elemento que vem depois da lacuna.' },
  ],
  '07-expressing-your-opinion': [
    { id: 'c1', texto: 'Organizo a redação em introdução, dois argumentos com exemplos e conclusão.' },
    { id: 'c2', texto: 'Uso conectores adequados a cada função (opinião, adição, exemplo, contraste, conclusão).' },
    { id: 'c3', texto: 'Concluo sem introduzir uma ideia totalmente nova.' },
  ],
  '99-revisao-final': [
    { id: 'c1', texto: 'Consigo escolher corretamente as palavras terminadas em -ever.' },
    { id: 'c2', texto: 'Consigo relacionar crime, criminoso e verbo.' },
    { id: 'c3', texto: 'Consigo montar have something done em diferentes tempos verbais.' },
    { id: 'c4', texto: 'Sei qual estrutura cada reporting verb exige.' },
    { id: 'c5', texto: 'Sei diferenciar although de despite/in spite of.' },
    { id: 'c6', texto: 'Sei diferenciar to, for e so that para expressar propósito.' },
    { id: 'c7', texto: 'Consigo escrever uma redação de opinião com introdução, argumentos, exemplos e conclusão.' },
  ],
};

export const checklistDe = (slug: string) => checklists[slug] ?? [];

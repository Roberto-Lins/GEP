import type { Questao } from '@tipos/question';
import type { ModalidadeEstudoId } from '@tipos/study-mode';
import { questoesPreparacao } from './questoes';

const porId = new Map(questoesPreparacao.map((questao) => [questao.id, questao]));
const selecionar = (ids: string[]): Questao[] => ids.map((id) => {
  const questao = porId.get(id);
  if (!questao) throw new Error('Questão do simulado NAV-4 não localizada: ' + id);
  return questao;
});

export const simuladosCompletos = [
  {
    id:'sopa-perfil-a', titulo:'Simulado inédito A — perfil SOPA',
    descricao:'90 minutos. Problemas completos de estrela, Hleg a oeste e latitude no hemisfério sul, acompanhados de conceitos e LDP.', duracaoMinutos:90, pontos:10,
    blueprint:[
      { bloco:'Conceitos, V/F e LDP', pontos:2, objetivo:'definir e interpretar sem cálculo longo' },
      { bloco:'Correção de altura', pontos:2.5, objetivo:'executar cadeia completa e justificar sinais' },
      { bloco:'Radler conceitual', pontos:1.5, objetivo:'explicar PAZ e elementos determinativos' },
      { bloco:'Hleg da passagem', pontos:2, objetivo:'usar ET, longitude e fuso' },
      { bloco:'Latitude meridiana', pontos:2, objetivo:'z, caso, nome e azimute' },
    ],
    rubrica:['crédito por etapa identificada','unidade e nome obrigatórios','erro aritmético não elimina método correto','fonte e conferência contam na rubrica'],
    questoes:selecionar(['NAV4-Q009','NAV4-Q012','NAV4-DER-ALT-001','NAV4-Q043','NAV4-DER-PM-001','NAV4-DER-LAT-001'])
  },
  {
    id:'sopa-perfil-b', titulo:'Simulado inédito B — perfil SOPA',
    descricao:'90 minutos. Planeta, longitude leste, nomes contrários e diagnóstico de construção da reta.', duracaoMinutos:90, pontos:10,
    blueprint:[
      { bloco:'Conceitos e LDP', pontos:2, objetivo:'reconhecer raio, tangente e intercepto' },
      { bloco:'Correção de altura', pontos:2.5, objetivo:'separar correção principal e adicional' },
      { bloco:'Radler conceitual', pontos:1.5, objetivo:'explicar auxiliares e entradas' },
      { bloco:'Hleg da passagem', pontos:2, objetivo:'controlar ET positiva e longitude E' },
      { bloco:'Latitude meridiana', pontos:2, objetivo:'resolver nomes contrários por duas rotas' },
    ],
    rubrica:['nenhum peso é apresentado como oficial da T2/2026','sinais devem ser escritos antes da aritmética','desenho N–Z–S recebe crédito próprio','controle independente obrigatório'],
    questoes:selecionar(['NAV4-Q010','NAV4-Q013','NAV4-DER-ALT-002','NAV4-Q044','NAV4-DER-PM-002','NAV4-DER-LAT-002'])
  },
  {
    id:'sopa-perfil-c', titulo:'Simulado inédito C — perfil SOPA',
    descricao:'90 minutos. Lua com limbo superior, normalização de data e culminação ao sul, sem copiar enunciado oficial.', duracaoMinutos:90, pontos:10,
    blueprint:[
      { bloco:'Conceitos e armadilhas', pontos:2, objetivo:'julgar afirmações e localizar primeiro erro' },
      { bloco:'Correção de altura', pontos:2.5, objetivo:'evitar dupla aplicação na Lua' },
      { bloco:'Radler conceitual', pontos:1.5, objetivo:'ligar figura a ae, Aqd e Az' },
      { bloco:'Hleg da passagem', pontos:2, objetivo:'normalizar hora e mudança de data' },
      { bloco:'Latitude meridiana', pontos:2, objetivo:'reconhecer Sol ao sul e Az 180°' },
    ],
    rubrica:['gabarito separado pelo componente interativo','correção lunar deve citar a nota da tábua','mudança de data deve acompanhar cada etapa','azimute sem desenho perde o crédito de conferência'],
    questoes:selecionar(['NAV4-Q014','NAV4-Q050','NAV4-DER-ALT-003','NAV4-Q046','NAV4-DER-PM-003','NAV4-DER-LAT-003'])
  },
];

export function simuladosPorModalidade(modalidade: ModalidadeEstudoId) {
  if (modalidade === 'rapido') return simuladosCompletos.slice(0, 1);
  if (modalidade === 'pra-safar') return simuladosCompletos.slice(0, 2);
  return simuladosCompletos;
}

// Itens de checklist de cada mini-matéria — usados pelo componente ChecklistMateria
// (persistência em localStorage). Cada item tem id estável.
import type { ItemChecklist } from '@tipos/lesson';
export type { ItemChecklist } from '@tipos/lesson';

export const checklists: Record<string, ItemChecklist[]> = {
  '00-introducao-midias-estrategia': [
    { id: 'c1', texto: 'Sei a distribuição de pontos: sensores 3,0 · sincros 2,0 · inerciais 1,7 · erros 1,3 · diagramas 1,0 · características 1,0.' },
    { id: 'c2', texto: 'Entendi que a prova é conceitual e muito fiel ao estilo da SOPA.' },
    { id: 'c3', texto: 'Sei o que saiu (Aula 1.1, tipos de sistemas, Pitot, sísmico, rigidez/precessão).' },
    { id: 'c4', texto: 'Ouvi o áudio geral e localizei o vídeo geral de revisão.' },
  ],
  '01-diagramas-de-instrumentacao': [
    { id: 'c1', texto: 'Diferencio variável controlada, manipulada e set point em qualquer malha.' },
    { id: 'c2', texto: 'Leio a tag: 1ª letra = variável de processo (T/L/F/P); demais = função (E/T/I/C/V).' },
    { id: 'c3', texto: 'Distingo ligação elétrica (4–20 mA) de pneumática (20–100 kPa) no desenho.' },
    { id: 'c4', texto: 'Interpreto um diagrama pequeno apontando a função de cada elemento da malha.' },
  ],
  '02-caracteristicas-estaticas-e-ambientais': [
    { id: 'c1', texto: 'Não confundo range × span, resolução × sensibilidade, histerese × zona morta.' },
    { id: 'c2', texto: 'Resolvo o cálculo de histerese (maior |subida−descida| ÷ FSO × 100).' },
    { id: 'c3', texto: 'Calculo a linearidade (maior desvio da reta ÷ FSO × 100) no mesmo exercício.' },
    { id: 'c4', texto: 'Sei o IP: 1º dígito = sólidos, 2º dígito = água (não é UV).' },
  ],
  '03-erros-medidas-e-incertezas': [
    { id: 'c1', texto: 'Classifico erro sistemático (exatidão), aleatório (precisão) e grosseiro.' },
    { id: 'c2', texto: 'Sei que aleatório se reduz com mais medidas; sistemático se compensa por calibração.' },
    { id: 'c3', texto: 'Diferencio exatidão (média, valor verdadeiro) de precisão (repetibilidade).' },
    { id: 'c4', texto: 'Faço Kline-McClintock completo e apresento o resultado valor ± incerteza.' },
  ],
  '04-fundamentos-de-sensores-e-transdutores': [
    { id: 'c1', texto: 'Diferencio sensor (detecta) de transdutor (converte sinal).' },
    { id: 'c2', texto: 'Sei a cadeia: elemento primário → transmissor → controlador.' },
    { id: 'c3', texto: 'Entendo sinal analógico × digital e o padrão 4–20 mA com zero vivo.' },
  ],
  '05-sensores-de-posicao': [
    { id: 'c1', texto: 'LVDT: indutivo, secundárias em oposição de fase, centro = 0 V, sentido = fase; saída analógica.' },
    { id: 'c2', texto: 'Encoder absoluto: 2ⁿ posições, resolução = 360°/2ⁿ, mantém posição sem energia.' },
    { id: 'c3', texto: 'Encoder incremental: conta pulsos desde a referência; perde a contagem sem energia.' },
    { id: 'c4', texto: 'Tipo de saída: analógica = potenciômetro/LVDT/resolver · digital = encoders.' },
  ],
  '06-sensores-de-vazao': [
    { id: 'c1', texto: 'Pressão diferencial (orifício e Venturi): restrição cria ΔP, vazão ∝ √ΔP (Bernoulli).' },
    { id: 'c2', texto: 'Eletromagnético: Faraday, exige fluido condutor, independe de densidade/viscosidade.' },
    { id: 'c3', texto: 'Sei comparar orifício × Venturi (perda de carga) e citar deslocamento positivo/Coriolis.' },
    { id: 'c4', texto: 'Não estudei o Tubo de Pitot (fora da prova).' },
  ],
  '07-sensores-de-velocidade-e-conversao': [
    { id: 'c1', texto: 'Tacômetro CC (ímã no estator, escovas, polaridade = sentido) × CA (campo no rotor, sem escovas, sem sentido).' },
    { id: 'c2', texto: 'Obtenho velocidade da posição (frequência de pulsos do incremental; derivar amplifica ruído).' },
    { id: 'c3', texto: 'Conheço as 4 fases da conversão A/D: amostragem, retenção, quantização, codificação.' },
    { id: 'c4', texto: 'Calculo níveis (2ⁿ), resolução e erro de quantização.' },
  ],
  '08-giroscopios-acelerometros-e-inerciais': [
    { id: 'c1', texto: 'Acelerômetro = aceleração linear; giroscópio = velocidade angular (não troco os dois).' },
    { id: 'c2', texto: 'INS: 3 acelerômetros + 3 giroscópios; integra aceleração → velocidade → posição.' },
    { id: 'c3', texto: 'Saídas do INS: posição, velocidade e atitude; sem referências externas (furtividade).' },
    { id: 'c4', texto: 'Explico por que o erro do INS cresce e se acumula com o tempo (deriva integrada).' },
  ],
  '09-sincros': [
    { id: 'c1', texto: 'TX/TR reproduzem ângulo (TR tem saída mecânica; rotores energizados).' },
    { id: 'c2', texto: 'CX/CT comparam e geram sinal de erro; o rotor do CT NÃO é energizado; nulo = 0 V.' },
    { id: 'c3', texto: 'TDX/TDR somam/subtraem ângulos; rotor com 3 enrolamentos, sem 115 VAC.' },
    { id: 'c4', texto: 'Preencho a tabela-mestre (entrada/saída/115 VAC) de memória.' },
  ],
};

export const checklistDe = (slug: string): ItemChecklist[] => checklists[slug] ?? [];

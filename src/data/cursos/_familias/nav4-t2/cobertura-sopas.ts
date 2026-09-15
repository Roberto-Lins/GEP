import type { ItemSopaOficial } from '@tipos/sopa';
import { questoesPreparacao } from './questoes';
import { itensSopaOficial } from './sopas-inventario';

export interface CoberturaItemSopa {
  sopa_id: string;
  assinatura_de_raciocinio: string;
  concept_ids: string[];
  pagina_dirigida: string;
  aula: string;
  exemplo_resolvido: string;
  questoes_preparatorias_relacionadas: string[];
  anexo: string;
  status_gabarito_oficial: string;
  equivalente_2026: string;
  modalidades: string[];
  status_cobertura: 'coberta' | 'coberta_com_gabarito_oficial_bloqueado';
}

const destinoPorPrefixo = (item: ItemSopaOficial) => {
  const conceitos = item.concept_ids.join(' ');
  if (conceitos.includes('NAV4-ALT')) return { pagina:'PG-143, PG-144 e PG-147–152', aula:'01-correcoes-de-altura', exemplo:'NAV4-DER-ALT-001' };
  if (conceitos.includes('NAV4-LDP')) return { pagina:'PG-153(c,d,e,f), PG-154(a,c,d,e,f), PG-156(1–4), PG-157(b,c,d) e PG-158(a,b,c)', aula:'02-linha-de-posicao', exemplo:'NAV4-Q051' };
  if (conceitos.includes('NAV4-RADLER')) return { pagina:'PG-160(c,d) e PG-161', aula:'03-tabua-radler', exemplo:'NAV4-Q043' };
  if (conceitos.includes('NAV4-PM')) return { pagina:'PG-175–180', aula:'04-hora-da-passagem-meridiana', exemplo:'NAV4-DER-PM-001' };
  return { pagina:'PG-175(a–e), PG-176(a–f), PG-177(a–c), PG-178(c), PG-179(a–f) e PG-180(a,c,d,e)', aula:'05-latitude-meridiana', exemplo:'NAV4-DER-LAT-001' };
};

const relacionadas = (item: ItemSopaOficial) => questoesPreparacao
  .filter((questao) => questao.origem === 'derivada_sopa' && questao.conceptIds?.some((id) => item.concept_ids.includes(id)))
  .map((questao) => questao.id)
  .slice(0, 4);

export const coberturaSopas: CoberturaItemSopa[] = itensSopaOficial
  .filter((item) => item.escopo_t2_2026 === 'dentro_do_escopo_t2_2026')
  .map((item) => {
    const destino = destinoPorPrefixo(item);
    const preparatorias = relacionadas(item);
    const bloqueado = item.status_do_gabarito.startsWith('bloqueado_');
    return {
      sopa_id: item.sopa_id,
      assinatura_de_raciocinio: item.assinatura_de_raciocinio,
      concept_ids: item.concept_ids,
      pagina_dirigida: destino.pagina,
      aula: destino.aula,
      exemplo_resolvido: destino.exemplo,
      questoes_preparatorias_relacionadas: preparatorias,
      anexo: item.anexo_encontrado,
      status_gabarito_oficial: item.status_do_gabarito,
      equivalente_2026: bloqueado
        ? 'Use ' + destino.exemplo + ', com todos os valores tabulares explicitados e gabarito independente.'
        : 'O próprio item possui gabarito auditado; continue preservando-o para a validação às cegas.',
      modalidades: item.modalidades,
      status_cobertura: bloqueado ? 'coberta_com_gabarito_oficial_bloqueado' : 'coberta',
    };
  });

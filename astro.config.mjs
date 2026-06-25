import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';

// Bússola dos Aspirantes — plataforma de estudos.
// Arquitetura HÍBRIDA (ver docs/adr/0001-astro-hibrido.md):
//   - Tudo é pré-renderizado (estático) POR PADRÃO — landing, cursos curados, /ano, etc.
//   - Só as rotas de auth/app fazem SSR, optando via `export const prerender = false`.
// Ajuste `site` ao publicar.
export default defineConfig({
  site: 'https://bussola-aspirantes.local',
  output: 'hybrid',
  adapter: vercel(),
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
    react(),
  ],
  markdown: {
    shikiConfig: { theme: 'css-variables' },
  },
  // Compatibilidade com as rotas antigas do GEP (curso único → /gep/...).
  // As rotas de matéria são enumeradas (build estático não expande [slug] em redirect).
  redirects: {
    '/timeline': '/gep/timeline',
    '/questoes': '/gep/questoes',
    '/simulados': '/gep/simulados',
    '/fontes': '/gep/fontes',
    '/revisao-final': '/gep/revisao-final',
    '/materias/00-ideia-central-da-prova': '/gep/00-ideia-central-da-prova',
    '/materias/01-estado-governo-administracao-governanca': '/gep/01-estado-governo-administracao-governanca',
    '/materias/02-weber-e-burocracia': '/gep/02-weber-e-burocracia',
    '/materias/03-patrimonialismo-e-disfuncoes-burocraticas': '/gep/03-patrimonialismo-e-disfuncoes-burocraticas',
    '/materias/04-organizacoes-mecanicistas-e-organicas': '/gep/04-organizacoes-mecanicistas-e-organicas',
    '/materias/05-modelos-de-administracao-publica': '/gep/05-modelos-de-administracao-publica',
    '/materias/06-reformas-administrativas-no-brasil': '/gep/06-reformas-administrativas-no-brasil',
    '/materias/07-pdrae-e-reforma-de-1995': '/gep/07-pdrae-e-reforma-de-1995',
    '/materias/08-ppa-ldo-loa-e-despesa-publica': '/gep/08-ppa-ldo-loa-e-despesa-publica',
    '/materias/09-orcamento-de-defesa': '/gep/09-orcamento-de-defesa',
    '/materias/10-sistema-de-governanca-da-mb': '/gep/10-sistema-de-governanca-da-mb',
  },
});

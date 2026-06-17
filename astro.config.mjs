import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

// GEP Command Deck — site estático de estudos.
// Ajuste `site` ao publicar (Vercel/Netlify/GitHub Pages).
export default defineConfig({
  site: 'https://gep-command-deck.local',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
    react(),
  ],
  markdown: {
    shikiConfig: { theme: 'css-variables' },
  },
});

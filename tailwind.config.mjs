/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        naval: {
          DEFAULT: '#0B1220', // azul naval profundo — fundo
          900: '#0B1220',
          800: '#101a2e',
          700: '#16233d',
        },
        aco: {
          DEFAULT: '#1E3A5F', // azul aço — cards
          light: '#27496e',
          dark: '#17304f',
        },
        acinzentado: '#334155',
        dourado: {
          DEFAULT: '#D6A84F', // destaque / prioridade
          soft: '#e0bd74',
          dark: '#b88a37',
        },
        marfim: '#F7F3EA',
        nevoa: '#CBD5E1', // texto comum
        progresso: '#22C55E',
        alerta: '#EF4444',
      },
      fontFamily: {
        serif: ['Newsreader', 'Merriweather', 'Georgia', 'serif'],
        sans: ['Inter', 'Source Sans 3', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        card: '0 8px 30px -12px rgba(0,0,0,0.55)',
        glow: '0 0 0 1px rgba(214,168,79,0.25), 0 8px 30px -12px rgba(214,168,79,0.25)',
      },
      maxWidth: {
        prose: '72ch',
      },
    },
  },
  plugins: [],
};

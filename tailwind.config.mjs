/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Cores temáveis por curso — apontam para variáveis CSS (canais R G B)
        // definidas em src/styles/themes.css. Ver tema padrão `naval-command`.
        naval: {
          DEFAULT: 'rgb(var(--c-naval) / <alpha-value>)', // fundo
          900: 'rgb(var(--c-naval-900) / <alpha-value>)',
          800: 'rgb(var(--c-naval-800) / <alpha-value>)',
          700: 'rgb(var(--c-naval-700) / <alpha-value>)',
        },
        aco: {
          DEFAULT: 'rgb(var(--c-aco) / <alpha-value>)', // cards
          light: 'rgb(var(--c-aco-light) / <alpha-value>)',
          dark: 'rgb(var(--c-aco-dark) / <alpha-value>)',
        },
        acinzentado: 'rgb(var(--c-acinzentado) / <alpha-value>)',
        dourado: {
          DEFAULT: 'rgb(var(--c-dourado) / <alpha-value>)', // destaque / prioridade
          soft: 'rgb(var(--c-dourado-soft) / <alpha-value>)',
          dark: 'rgb(var(--c-dourado-dark) / <alpha-value>)',
        },
        marfim: 'rgb(var(--c-marfim) / <alpha-value>)',
        nevoa: 'rgb(var(--c-nevoa) / <alpha-value>)', // texto comum
        progresso: 'rgb(var(--c-progresso) / <alpha-value>)',
        alerta: 'rgb(var(--c-alerta) / <alpha-value>)',
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

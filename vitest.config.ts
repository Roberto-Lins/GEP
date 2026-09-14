import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'node:url';

// Testes do motor das ferramentas (TS puro, sem DOM).
export default defineConfig({
  resolve: {
    alias: {
      '@tipos': fileURLToPath(new URL('./src/types', import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
      '@data': fileURLToPath(new URL('./src/data', import.meta.url)),
    },
  },
  test: {
    include: ['src/**/*.test.ts'],
    environment: 'node',
  },
});

import { defineConfig } from 'vitest/config';

// Testes do motor das ferramentas (TS puro, sem DOM).
export default defineConfig({
  test: {
    include: ['src/**/*.test.ts'],
    environment: 'node',
  },
});

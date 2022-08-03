import { defineConfig } from 'vitest/config';

export const defaultConfig = {
  test: {
    include: ['*.test.ts'],
    exclude: ['**/node_modules/**'],
    root: '.',
    clearMocks: true,
    globals: true,
    threads: true,
    testTimeout: 5000,
    mockReset: true,
  },
};

export default defineConfig(defaultConfig);

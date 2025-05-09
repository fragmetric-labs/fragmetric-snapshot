import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    testTimeout: 5 * 60 * 1000,
    maxWorkers: 1,
    minWorkers: 1,
  },
});

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    pool: "forks",
    setupFiles: "./src/test/setup.ts",
  },
});

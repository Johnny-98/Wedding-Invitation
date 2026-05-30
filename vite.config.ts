import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import circleDependency from 'vite-plugin-circular-dependency';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    svgr(),
    tsconfigPaths(),
    circleDependency({
      exclude: /node_modules/,
      outputFilePath: './circular-deps.json',
    }),
  ],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'build',
    sourcemap: mode !== 'production',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
}));

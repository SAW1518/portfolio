import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    
    environment: 'happy-dom',
    coverage: {
      exclude: [
        'src/mocks',
        'src/constants',
        'src/types',
        'src/icons',
        'src/vite-env.d.ts',
        '.eslintrc.js',
        './src/main.tsx',
        'vite.config.ts',
        '**/__test__/**/*.test.tsx'
      ],
      
      provider: 'v8',
      reporter: ['text', 'html'],
      all: true,
      thresholds: {
        statements: 90,
        branches: 90,
        functions: 90,
        lines: 90,
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src/'),
      pages: path.resolve(__dirname, './src/'),
      constants: path.resolve(__dirname, './src/constants'),
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
});

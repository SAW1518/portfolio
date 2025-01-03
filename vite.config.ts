import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    
    environment: 'happy-dom',
    coverage: {
      exclude: ['src/mocks', 'src/constants', 'src/types', 'src/icons', '.eslintrc.js', 'vite.config.ts'],
      provider: 'istanbul',
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

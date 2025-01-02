import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: 'happy-dom',
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

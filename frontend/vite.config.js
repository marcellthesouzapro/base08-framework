import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: 'frontend',
  base: '/static/vite/',
  build: {
    outDir: path.resolve(__dirname, '../backend/frontend/dist'),
    assetsDir: '',
    manifest: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/main.jsx'), // CORRIGIDO: Caminho de entrada do módulo
      },
    },
  },
  server: {
    port: 5173,
    host: '0.0.0.0',
    open: false,
    watch: {
      usePolling: true,
    },
  },
});
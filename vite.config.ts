import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/selfless-ce-lira-website/',
  plugins: [react()],
});
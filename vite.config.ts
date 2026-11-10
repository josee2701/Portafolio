import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Vite 8 (Rolldown): manualChunks en forma de objeto ya no existe
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            { name: 'vendor-react', test: /node_modules[\\/](react|react-dom|scheduler)[\\/]/ },
            { name: 'vendor-swiper', test: /node_modules[\\/]swiper[\\/]/ },
            { name: 'vendor-toastify', test: /node_modules[\\/]react-toastify[\\/]/ },
          ],
        },
      },
    },
  },
});

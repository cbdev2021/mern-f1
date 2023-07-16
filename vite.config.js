import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        //target: 'http://localhost:5000',
        //target: 'https://mern-b1.onrender.com/',    
        //target: process.env.REACT_APP_API_URL || 'http://localhost:10000',
        target: process.env.REACT_APP_API_URL,
        changeOrigin: true,
      },
    },
  },
});

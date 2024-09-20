import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './',  // Set the root to the project folder
  build: {
    outDir: 'dist',  // Vite will output the built files to this directory
    rollupOptions: {
      input: 'index.html',  // Ensure Vite knows to start from index.html in the root
    },
  },
  plugins: [react()],
});

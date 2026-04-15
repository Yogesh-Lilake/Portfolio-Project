import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // Include .lottie files in the build process to ensure they are properly handled and available in the output directory. This allows us to import and use Lottie animations seamlessly in our React components. Without this configuration, Vite might not recognize .lottie files as assets, leading to issues when trying to load animations. By specifying assetsInclude, we ensure that all .lottie files are treated as static assets and can be imported directly in our code. 
  assetsInclude: ['**/*.lottie'],
})
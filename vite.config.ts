import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { parsePath } from 'react-router-dom';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        math: 'parens-division',
      },
      scss: {
        api: 'modern-compiler', // or "modern", "legacy"
        importers: [
          // ...
        ],
      },
    },
  },
  resolve:{
    alias:{
      "@elements": path.resolve(__dirname, "src/components/elements"),
      "@pages": path.resolve(__dirname, "src/components/pages"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@functions": path.resolve(__dirname, "src/utils/functions")
    },
  },
});

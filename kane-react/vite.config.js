import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':{
        target: 'https://portfolio-cms-sand-eight.vercel.app',
        changeOrigin:true,
        secure:false
      }
    }
  },
  plugins: [react(), mdx()],
});

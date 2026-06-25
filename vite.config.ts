import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { inspectAttr } from "kimi-plugin-inspect-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  // 🔥 ASSET HATASINI KÖKTEN BİTİREN KRİTİK DOKUNUŞ: Göreceli yolları mutlak kök dizine sabitledik!
  base: "/", 
  plugins: [
    inspectAttr(),
    react(),
    cssInjectedByJsPlugin(),
    // VITE'A MD DOSYALARINI METİN OLARAK OKUMASINI KESİN OLARAK SÖYLÜYORUZ:
    {
      name: 'markdown-loader',
      transform(code, id) {
        if (id.endsWith('.md')) {
          return `export default ${JSON.stringify(code)};`;
        }
      }
    }
  ],
  assetsInclude: ['**/*.md'],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
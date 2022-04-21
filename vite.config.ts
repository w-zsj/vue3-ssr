const vuePlugin = require('@vitejs/plugin-vue')
import { viteMockServe } from "vite-plugin-mock";
import path from 'path';
/**
 * @type {import('vite').UserConfig}
 */
module.exports = {
  plugins: [
    vuePlugin(),
    viteMockServe({
      mockPath: "./src/utils/server/mock",
        supportTs: false
    })
  ],
  // 引用全局 scss
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/css/app.scss";'
      }
    }
  },
  resolve: {
    alias: {
      // 如果报错__dirname找不到，需要安装node,执行yarn add @types/node --save-dev
      "@": path.resolve(__dirname, "src"),
      "comps": path.resolve(__dirname, "src/components"),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  build: {
    minify: false
  }
}

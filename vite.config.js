import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  //配置@
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    //配置项目自动打开
    open: true,
    //配置打开的地址
  },
})

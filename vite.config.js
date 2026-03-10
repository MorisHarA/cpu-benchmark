import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 部署到 GitHub Pages 仓库子路径 /cpu-benchmark/
  base: '/cpu-benchmark/',
})

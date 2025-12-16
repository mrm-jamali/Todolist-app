import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Todolist-app/'  // حتماً با / شروع شود و نام ریپو دقیق باشد
})


import App from './App.vue'
import { createSSRApp } from 'vue'
import { createRouter } from './router'
console.log(`process.env>>>`, import.meta.env)
export function createApp() {
  const app = createSSRApp(App)
  const router = createRouter()
  app.use(router)
  return { app, router }
}

import App from "./App.vue";
import { createSSRApp } from "vue";
import { createRouter } from "./router";
import store from "./store/index";
import i18n from "./i18n";
// console.log(`process.env>>>`, import.meta.env)

export function createApp() {
  const app = createSSRApp(App);
  const router = createRouter();
  app.use(router);
  app.use(store);
  app.use(i18n);
  return { app, router };
}

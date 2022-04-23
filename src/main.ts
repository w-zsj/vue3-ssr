import Page from "./Page.vue";
import { createSSRApp } from "vue";
import { createRouter } from "./router";
import store from "./store/index";
import i18n from "./i18n";
import svgIcon from "./components/svgIcon.vue";
import mitt from "mitt";
// console.log(`process.env>>>`, import.meta.env)

export function createApp() {
  const app = createSSRApp(Page);
  const router = createRouter();
  const emitter = mitt();
  const $bus: any = {
    on: emitter.on,
    emit: emitter.emit,
    off: emitter.off,
  };
  app.config.globalProperties.$bus = $bus;
  app.use(router).use(store).use(i18n).component("svg-icon", svgIcon);
  return { app, router };
}

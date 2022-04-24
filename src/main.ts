import Page from "./Page.vue";
import { createSSRApp } from "vue";
import { createRouter } from "./router";
import store from "./store/index";
import i18n from "./i18n";
import SvgIcon from "./components/SvgIcon.vue";
import "nprogress/nprogress.css";
import mitt from "mitt";

export function createApp() {
  let app = createSSRApp(Page),
    router = createRouter(),
    emitter = mitt(),
    $bus: any = {
      on: emitter.on,
      emit: emitter.emit,
      off: emitter.off,
    };
  app.config.globalProperties.$bus = $bus;
  app.use(i18n).use(router).use(store).component("svg-icon", SvgIcon);
  return { app, router };
}

import { createI18n } from "vue-i18n";
import en from "./config/en";
import zh from "./config/zh";

// let window: Window;
// console.log("222", window);

const i18n = createI18n({
  legacy: false,
  locale: "zh",
  messages: { en, zh },
});
export default i18n;

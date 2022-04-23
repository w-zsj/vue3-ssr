import { useI18n } from "vue-i18n";
import i18n from "@/i18n/index";
import { getCurrentInstance } from "vue";
export default () => {
  let { appContext }: any = getCurrentInstance(),
    $bus = appContext.config.globalProperties.$bus;
  const { locale } = useI18n(),
    changeLang = (type: string) => {
      locale.value = type;
      $bus.emit("eventLocale", type);
      sessionStorage.setItem("local", type);
    };
  return { changeLang, i18n };
};

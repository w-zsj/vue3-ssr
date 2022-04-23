import { useI18n } from "vue-i18n";
import i18n from "@/i18n/index";
export default () => {
  const { locale } = useI18n();
  const changeLang = (type: string) => {
    locale.value = type;
    sessionStorage && sessionStorage.setItem("local", type);
  };
  return { changeLang, i18n };
};

import { useI18n } from "vue-i18n";
export default () => {
  const { locale } = useI18n();
  const change = (type: string) => {
    locale.value = type;
    sessionStorage.setItem("local", type);
  };
  return change;
};

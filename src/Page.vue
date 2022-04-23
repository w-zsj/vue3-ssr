/*
 * @Author: zhangsanjun 
 * @Date: 2022-04-23 10:07:42 
 * @Last Modified by: zhangsanjun
 * @Last Modified time: 2022-04-23 17:34:24
 */

<template>
  <div>
    <n-config-provider :locale="zh" :date-locale="datezh">
      <App />
    </n-config-provider>
  </div>
</template>
<script lang="ts">
import lang from "@/i18n/lang";
import App from "./App.vue";
import {
  nextTick,
  onUnmounted,
  reactive,
  toRefs,
  getCurrentInstance,
} from "vue";
import { NConfigProvider } from "naive-ui";
import { zhCN, dateZhCN, enUS, dateEnUS } from "naive-ui";
export default {
  components: {
    NConfigProvider,
    App,
  },
  setup() {
    let { appContext }: any = getCurrentInstance(),
      $bus = appContext.config.globalProperties.$bus,
      _ = reactive({
        zh: {},
        datezh: {},
        SSR: import.meta.env.SSR,
      }),
      { changeLang } = lang(),
      handle = (local: any) => {
        if (local == "zh") {
          _.zh = zhCN;
          _.datezh = dateZhCN;
        } else {
          _.zh = enUS;
          _.datezh = dateEnUS;
        }
      };
    $bus.on("eventLocale", (val: any) => handle(val));
    nextTick(() => {
      if (!_.SSR) {
        let local = window.sessionStorage.getItem("local") || "zh";
        changeLang(local);
        handle(local);
      }
    });
    // 清除监听
    onUnmounted(() => $bus.off("eventLocale"));
    return {
      ...toRefs(_),
    };
  },
};
</script>

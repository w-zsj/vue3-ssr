/*
 * @Author: zhangsanjun 
 * @Date: 2022-04-23 10:07:42 
 * @Last Modified by: zhangsanjun
 * @Last Modified time: 2022-04-24 10:31:44
 */

<template>
  <div>
    <n-config-provider :locale="zh" :date-locale="datezh">
      <App v-if="isShow" />
    </n-config-provider>
  </div>
</template>
<script lang="ts">
import lang from "@/i18n/lang";
import App from "./App.vue";
import {
  reactive,
  toRefs,
  getCurrentInstance,
  onUnmounted,
  nextTick,
} from "vue";
import { NConfigProvider } from "naive-ui";
import { zhCN, dateZhCN, enUS, dateEnUS } from "naive-ui";
export default {
  components: {
    NConfigProvider,
    App,
  },
  setup() {
    // 定义data
    let _ = reactive({
      zh: {},
      datezh: {},
      SSR: import.meta.env.SSR,
      isShow: false,
    });
    // 定义 vue-api
    let { appContext }: any = getCurrentInstance();
    let $bus = appContext.config.globalProperties.$bus;
    $bus.on("eventLocale", (val: any) => handle(val));
    // 定义方法
    let { changeLang } = lang();
    let handle = (local: any) => {
      if (local == "zh") {
        _.zh = zhCN;
        _.datezh = dateZhCN;
      } else {
        _.zh = enUS;
        _.datezh = dateEnUS;
      }
    };
    // 页面渲染完成
    nextTick(() => {
      _.isShow = true;
      if (!_.SSR) {
        let local: any = window.sessionStorage.getItem("local") || "zh";
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

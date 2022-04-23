/*
 * @Author: zhangsanjun 
 * @Date: 2022-04-23 10:07:42 
 * @Last Modified by: zhangsanjun
 * @Last Modified time: 2022-04-23 10:17:50
 */

<template>
  <div>
    <router-view v-slot="{ Component }">
      <Suspense>
        <component :is="Component" />
      </Suspense>
    </router-view>
  </div>
</template>
<script lang="ts">
import lang from "@/i18n/lang";
import { nextTick } from "vue";
export default {
  setup(props) {
    let { changeLang } = lang();
    nextTick(() => {
      if (!import.meta.env.SSR) {
        const local = window.sessionStorage.getItem("local");
        if (local) changeLang(local);
      }
    });
  },
};
</script>

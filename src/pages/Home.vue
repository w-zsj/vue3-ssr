/* * @Author: zhangsanjun 
* @Date: 2022-04-23 06:41:53 
 * @Last Modified by: zhangsanjun
 * @Last Modified time: 2022-04-24 01:11:59
*/
<template>
  <n-card title="卡片" @click="goto('404')">
    {{ $t("message.home") }}-->> 404
  </n-card>
  <n-divider />
  <n-button type="success" @click="goto('/demo')">
    页面跳转
  </n-button>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  props: ["type"],
  setup(props: any) {
    // 页面跳转
    let router = useRouter();
    let goto = (path: string) => {
      router.push(path);
    };
    return { goto };
  },
});
</script>

<style scoped lang="scss">
</style>

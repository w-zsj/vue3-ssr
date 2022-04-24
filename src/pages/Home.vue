/* * @Author: zhangsanjun 
* @Date: 2022-04-23 06:41:53 
 * @Last Modified by: zhangsanjun
 * @Last Modified time: 2022-04-24 01:11:59
*/
<template>
  <h1 @click="goto('404')">首页-->> 404</h1>
  <img src="../assets/logo.png" alt="" @click="goto('/demo')">
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
h1 {
  color: green;
}
</style>

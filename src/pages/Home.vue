/* * @Author: zhangsanjun * @Date: 2022-04-23 06:41:53 * @Last Modified by: zhangsanjun *
@Last Modified time: 2022-04-23 11:35:32 */

<template>
  <h1 @click="goto">首页</h1>
  <img src="../assets/logo.png" alt="" srcset="">

</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  setup(props: any) {
    // 页面跳转
    let router = useRouter();
    let goto = () => {
      router.push({ path: "/demo" });
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

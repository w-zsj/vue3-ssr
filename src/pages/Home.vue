/* * @Author: zhangsanjun 
* @Date: 2022-04-23 06:41:53 
 * @Last Modified by: zhangsanjun
 * @Last Modified time: 2022-04-23 17:31:13
*/
<template>
  <h1 @click="goto">首页</h1>
  <img src="../assets/logo.png" alt="" srcset="">
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
export default defineComponent({
  setup(props: any) {
    // 页面跳转
    let router = useRouter(),
      roure = useRoute();
    let goto = () => {
      router.push({ path: "/demo" });
    };
    // console.log("roure", roure.query);
    return { goto };
  },
});
</script>

<style scoped lang="scss">
h1 {
  color: green;
}
</style>

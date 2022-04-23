/* * @Author: zhangsanjun 
* @Date: 2022-04-23 06:41:53 
 * @Last Modified by: zhangsanjun
 * @Last Modified time: 2022-04-24 01:11:59
*/
<template>
  <h1 @click="goto">首页</h1>
  <img src="../assets/logo.png" alt="" srcset="">
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  props: ["type"],
  setup(props: any) {
    const { type } = toRefs(props);
    // console.log("type", type.value);
    // 页面跳转
    let router = useRouter();
    let goto = () => {
      router.push({ path: `/demo` });
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

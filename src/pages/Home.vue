/*
 * @Author: zhangsanjun 
 * @Date: 2022-04-23 06:41:53 
 * @Last Modified by: zhangsanjun
 * @Last Modified time: 2022-04-23 08:31:56
 */

<template>
  <h1 @click="goto">About</h1>
  <div style="margin-bottom:20px;">
    <a href="javascript:void(0)" @click="changeLang('zh')">中文</a> --
    <a href="javascript:void(0)" @click="changeLang('en')">English</a>
  </div>
  <div class="line">国际化>>>{{$t('message.hello')}}</div>
</template>

<script lang="ts">
import { testMock } from "@/api/base";
import { useStore } from "vuex";
import { defineComponent, computed, toRef, toRefs } from "vue";
import lang from "@/i18n/lang";
import { useRouter } from "vue-router";
export default defineComponent({
  setup(props: any) {
    const { title } = toRefs(props);
    // const title = toRef(props, "title");
    const router = useRouter();

    // 国际化切换
    let { changeLang, i18n } = lang();
    // console.log('在js中使用国际化', i18n.global.t('message.hello'))
    // mock 数据
    testMock({}).then((res) => {
      console.log("mock 返回数据", res);
    });

    // vuex
    const store = useStore();
    let user = computed(() => store.state.user);
    // console.log('状态管理', user)
    // 页面跳转
    const goto = () => {
      router.push({ path: "/about" });
    };
    return { goto, changeLang };
  },
});
</script>

<style scoped lang="scss">
h1 {
  color: green;
}
</style>

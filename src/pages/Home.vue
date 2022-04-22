<template>
  <h1>Home</h1>
  <div style="margin-bottom:20px;">
    <a href="javascript:void(0)" @click="changeLang('zh')">中文</a> --
    <a href="javascript:void(0)" @click="changeLang('en')">English</a>
  </div>
  <div class="line">国际化>>>{{$t('message.hello')}}</div>
</template>

<script>
import { testMock } from "@/api/base";
import { useStore } from "vuex";
import { defineComponent, computed } from "vue";
import lang from '@/i18n/lang'
export default defineComponent({
  setup(props) {
    // 国际化切换
    let { changeLang, i18n } = lang()
    // console.log('在js中使用国际化', i18n.global.t('message.hello'))
    // mock 数据
    testMock({}).then((res) => {
      console.log("mock 返回数据", res);
    });


    // vuex
    const store = useStore();
    let user = computed(() => store.state.user);
    // console.log('状态管理', user)

    return { changeLang }
  },
});
</script>

<style scoped lang="scss">
h1 {
  color: green;
}
</style>

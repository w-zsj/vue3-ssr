<template>
  <h1>Home</h1>
  <div style="margin-bottom:20px;">
    <a href="javascript:void(0)" @click="lang('zh')">中文</a> --
    <a href="javascript:void(0)" @click="lang('en')">English</a>
  </div>

  <div class="line">国际化>>>{{$t('message.hello')}}</div>
</template>

<script>
import { testMock } from "@/api/base";
import { useStore } from "vuex";
import { defineComponent, computed } from "vue";
import change from '@/utils/lang'
export default defineComponent({
  setup(props) {
    // 国际化切换
    let lang = change()
    // mock 数据
    testMock({}).then((res) => {
      console.log("mock 返回数据", res);
    });

    // vuex
    const store = useStore();
    let user = computed(() => store.state.user);
    // console.log('状态管理', user)


    return { lang }
  },
});
</script>

<style scoped lang="scss">
h1 {
  color: green;
}
</style>

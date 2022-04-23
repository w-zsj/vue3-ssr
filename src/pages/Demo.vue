/* * @Author: zhangsanjun * @Date: 2022-04-23 06:41:53 * @Last Modified by: zhangsanjun *
@Last Modified time: 2022-04-23 11:35:32 */

<template>
  <h1>demo</h1>
  <div style="margin-bottom: 20px">
    <a href="javascript:void(0)" @click="selectLang('zh')">中文</a> --
    <a href="javascript:void(0)" @click="selectLang('en')">English</a>
  </div>
  <br />
  <div class="">国际化>>>{{ $t("message.hello") }}</div>
  <br />
  <div class="line">svg <svg-icon name="home"></svg-icon>
  </div>
  <n-button type="error">
    Error
  </n-button>
</template>

<script lang="ts">
import { testMock } from "@/api/base";
import { useStore } from "vuex";
import {
  defineComponent,
  computed,
  ref,
  toRefs,
  getCurrentInstance,
} from "vue";
import lang from "@/i18n/lang";
export default defineComponent({
  setup(props: any) {
    const { appContext }: any = getCurrentInstance();
    const $bus = appContext.config.globalProperties.$bus;
    const { title } = toRefs(props);
    // const title = toRef(props, "title");

    // 国际化切换
    let { changeLang, i18n } = lang();
    const selectLang = (type: string) => {
      $bus.emit("eventLocale", type);
      // console.log('在js中使用国际化', i18n.global.t('message.hello'))
      return changeLang(type);
    };
    // mock 数据
    testMock({}).then((res) => {
      console.log("mock 返回数据", res);
    });

    // vuex
    const store = useStore();
    let user = computed(() => store.state.user);
    // console.log('状态管理', user)
    return {
      selectLang,
      SSR: import.meta.env.SSR,
    };
  },
});
</script>

<style scoped lang="scss">
h1 {
  color: green;
}
</style>

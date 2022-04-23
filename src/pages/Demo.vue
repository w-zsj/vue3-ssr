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
  <n-button type="error"> Error </n-button>
  <n-tag type="success"> 不该 </n-tag>
  <n-tag type="warning"> 超人不会飞 </n-tag>
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
import { useRouter } from "vue-router";
export default defineComponent({
  props: ["type"],
  setup(props: any) {
    let router = useRouter(),
      { appContext }: any = getCurrentInstance(),
      $bus = appContext.config.globalProperties.$bus,
      { type } = toRefs(props);

    // const title = toRef(props, "title");

    // 国际化切换
    let { changeLang, i18n } = lang();
    // console.log("在js中使用国际化", i18n.global.t("message.hello"));
    let selectLang = (type: string) => {
      console.log("type", type);
      if (type == "zh") {
        router.replace(`/demo`);
      } else router.replace(`/${type}/demo`);

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

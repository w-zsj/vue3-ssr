/* * @Author: zhangsanjun
 * @Date: 2022-04-23 06:41:53 
 * @Last Modified by: zhangsanjun *
@Last Modified time: 2022-04-23 11:35:32
 */

<template>
  <h1>demo</h1>
  <div style="margin-bottom: 20px">
    <a href="javascript:void(0)" @click="selectLang('zh')">中文</a> --
    <a href="javascript:void(0)" @click="selectLang('en')">English</a>
  </div>
  <n-divider />
  <div class="">{{$t("message.i18n")}}>>>{{ $t("message.hello") }}</div>
  <n-divider />
  <n-date-picker v-if="SSR" v-model:formatted-value="formattedValue" value-format="yyyy.MM.dd HH:mm:ss" type="datetime"
    clearable />
  <n-divider />
  svg <svg-icon name="home"></svg-icon>
  <n-divider />

  <n-tag type="warning"> 超人不会飞 </n-tag>
</template>

<script lang="ts">
import { testMock } from "@/api/base";
import { useStore } from "vuex";
import { defineComponent, computed, ref, nextTick } from "vue";
import lang from "@/i18n/lang";
import { useRouter } from "vue-router";
export default defineComponent({
  props: ["type"],
  setup(props: any) {
    //定义data
    //判断服务端是否显示
    let SSR = ref(false);
    // 页面渲染完成
    nextTick(() => {
      SSR.value = !import.meta.env.SSR;
    });
    let router = useRouter();
    // 国际化切换
    let { changeLang, i18n } = lang();
    // console.log("在js中使用国际化", i18n.global.t("message.hello"));
    let selectLang = (type: string) => {
      if (type == "zh") router.replace(`/demo`);
      else router.replace(`/${type}/demo`);
      return changeLang(type);
    };
    // mock 数据
    testMock({ zs: 1 }).then((res) => {
      console.log("mock 返回数据", res);
    });

    // vuex
    const store = useStore();
    let user = computed(() => store.state.user);
    // console.log('状态管理', user)
    return {
      formattedValue: ref("2007.06.30 12:08:55"),
      selectLang,
      SSR,
    };
  },
});
</script>

<style scoped lang="scss">
h1 {
  color: green;
}
</style>

<template>
  <div>
    <router-view v-slot="{ Component }">
      <Suspense>
        <component :is="Component" />
      </Suspense>
    </router-view>
  </div>
</template>
<script>
import lang from "@/i18n/lang";
import { nextTick } from 'vue'
export default {
  setup() {
    let { changeLang } = lang();
    const getLocal = () => {
      // 如果缓存中存在，则直接返回
      const local = sessionStorage.getItem('local')
      if (local) {
        return local
      }
      // 否则读取当前网页语言
      const localName = navigator.language.indexOf('zh') !== -1 ? 'zh' : 'en'
      // 设置缓存
      sessionStorage.setItem('local', localName)
      return localName
    }
    nextTick(() => {
      changeLang(getLocal())
    })
  }
}
</script>

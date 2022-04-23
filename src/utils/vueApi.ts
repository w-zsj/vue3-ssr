import { getCurrentInstance } from "vue";
// 处理路由
import { useRouter, useRoute } from "vue-router";

export default () => {
  let originRouter = useRouter(),
    route = useRoute(),
    router = originRouter;
  router.push = (params: any) => {
    let local = sessionStorage.getItem("local") || "";
    if (local && local !== "zh") {
      params.path = `/${local}${params.path}`;
    }
    return originRouter.push(params);
  };
  router.replace = (params: any) => {
    let local = sessionStorage.getItem("local") || "";
    if (local && local !== "zh") {
      params.path = `/${local}${params.path}`;
    }
    return originRouter.replace(params);
  };
  let { appContext }: any = getCurrentInstance(),
    $bus = appContext.config.globalProperties.$bus;
  return { router, route, $bus };
};

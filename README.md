# # 启动以及发布 流程

# npm install

# npm run bulid

# npm run dev

# 测试

# pm2 start npm --name "demo" -- run dev

# 生产

# pm2 start npm --name "demo" -- run serve

# 注意事项

1、生命周期钩子不要用 如 onBeforeMount onMounted 、onUpdated（ nextTick 可用）
2、 路由不需要自己定义 以全局定义 参考 src/router.ts
3、使用 document、window 需谨慎 服务端无法识别 需要要判断 环境 import.meta.env.SSR
4、语言包 标识符 type 采用动态路由的方式；组件内直接用 props: ["type"] 获取 ，无需用 router 获取
5、UI 组件库 https://www.naiveui.com/zh-CN/os-theme

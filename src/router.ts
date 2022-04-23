import {
  createMemoryHistory,
  createRouter as _createRouter,
  createWebHistory,
} from "vue-router";

// Auto generates routes from vue files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
let pages = import.meta.glob("./pages/**/*.vue"),
  routes: Array<any> = Object.keys(pages).map((path) => {
    let pathArr = path.match(/\.\/pages(.*?)\.vue$/),
      name = pathArr && pathArr[1].toLowerCase();
    return {
      path: "/:type?" + (name === "/home" ? "" : name),
      name: name,
      props: true,
      component: pages[path], // () => import('./pages/**/*.vue')
    };
  });

export function createRouter() {
  let router = _createRouter({
    // use appropriate history implementation for server/client
    // import.meta.env.SSR is injected by Vite.
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes: [
      ...routes,
      {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: () => import("./pages/404.vue"),
      },
    ],
  });

  return router;
}

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/longlist",
    name: "LongList",
    component: () =>
      import(/* webpackChunkName: "longlist" */ "../views/001LongList.vue"),
  },
  {
    path: "/longlist2",
    name: "LongList2",
    component: () =>
      import(/* webpackChunkName: "longlist2" */ "../views/002LongList.vue"),
  },
  {
    path: "/vif",
    name: "Vif",
    component: () =>
      import(/* webpackChunkName: "vif" */ "../views/003vif.vue"),
  },
  {
    path: "/function",
    name: "Function",
    component: () =>
      import(/* webpackChunkName: "function" */ "../views/004functional.vue"),
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

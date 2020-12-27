import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Practice01.vue"),
  },
  {
    path: "/practice01",
    name: "Practice01",
    component: () => import("../views/Practice01.vue"),
  },
  {
    path: "/practice02",
    name: "Practice02",
    component: () => import("../views/Practice02.vue"),
  },
  {
    path: "/practice03",
    name: "Practice03",
    component: () => import("../views/Practice03.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  linkExactActiveClass: "active",
  routes,
});

export default router;

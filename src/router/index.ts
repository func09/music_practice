import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/practice01",
    name: "Notes",
    component: () => import("../views/Practice01.vue"),
  },
  {
    path: "/practice02",
    name: "Guitar Fret Board",
    component: () => import("../views/Practice02.vue"),
  },
  {
    path: "/practice03",
    name: "Intervals",
    component: () => import("../views/Practice03.vue"),
  },
  {
    path: "/practice04",
    name: "Scales",
    component: () => import("../views/Practice04.vue"),
  },
  {
    path: "/practice05",
    name: "Chords",
    component: () => import("../views/Practice05.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  linkExactActiveClass: "active",
  routes,
});

export default router;

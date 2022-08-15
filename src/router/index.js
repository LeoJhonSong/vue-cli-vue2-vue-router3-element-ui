import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: '/posts',
  },
  {
    path: '/posts',
    name: "home",
    component: HomeView,
    children: [
      {
        path: ":postName/:postTime",
        name: 'posts',
        component: () => import("../components/PostPage.vue"),
        props: true,
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;

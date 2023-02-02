import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/Quemsomos.vue"),
    // },
    {
      path: "/user/add",
      name: "user-add",
      component: () => import("../views/UserAdd.vue"),
    },
    {
      path: "/home/atividades",
      name: "atividades",
      component: () => import("../views/Atividades.vue"),
    },

    {
      path: "/user/login",
      name: "/user/login",
      component: () => import("../views/UserLogin.vue"),
    },
    {
      path: "/func/list",
      name: "listaUsuarios",
      component: () => import("../views/FuncionarioClientes.vue"),
    },
    {
      path: "/user/info/:id",
      name: "infoUsuario",
      component: () => import("../views/FuncionarioPlanilha.vue"),
    },
    {
      path: "/func/criarplanilha",
      name: "criarplanilha",
      component: () => import("../views/CriarPlanilha.vue"),
    },
  ],
});

export default router;

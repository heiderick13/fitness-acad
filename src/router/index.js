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
    {
      path: "/user/add",
      name: "user-add",
      component: () => import("../views/UserAdd.vue"),
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
    {
      path: "/booking",
      name: "bookingAdd",
      component: () => import("../views/BookAdd.vue"),
    },
    {
      path: "/booking/admin",
      name: "bookingAdmin",
      component: () => import("../views/BookAdmin.vue"),
    },
  ],
});

export default router;

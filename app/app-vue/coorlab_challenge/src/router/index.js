import { createRouter, createWebHistory } from "vue-router";
import GenericView from "../components/GenericView.vue";
import LoginCard from "@/components/LoginView.vue";
import MenuView from "@/components/MenuView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: GenericView,
  },
  {
    path: "/menu",
    name: "menu",
    components: {
      default: GenericView,
      anotherComponent: MenuView,
    },
  },
  {
    path: "/login",
    name: "login",
    components: {
      default: GenericView,
      anotherComponent: LoginCard,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

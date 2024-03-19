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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

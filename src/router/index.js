import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomeView.vue";
import RegistrationView from "../views/RegistrationView.vue";

const routes = [
  {
    path: "/",
    name: "Homepage",
    component: HomePage,
  },
  {
    path: "/products/:slug?",
    name: "Products",
    component: () => import("@/views/ProductsView.vue"),
  },  
  {
    path: "/product/:slug",
    name: "Product",
    component: () => import("@/views/ProductView.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("@/views/CartView.vue"),
  },
  {
    path: "/auth",
    name: "Registr",
    component: RegistrationView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

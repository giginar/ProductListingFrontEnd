import { createWebHistory, createRouter } from "vue-router";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import ProductsList from "./components/ProductsList.vue";
import Product from "./components/Product.vue";
import AddProduct from "./components/AddProduct.vue";

const Profile = () => import("./components/Profile.vue")

const routes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/products",
    component: ProductsList,
  },
  {
    path: "/products/:id",
    component: Product,
  },
  {
    path: "/add",
    component: AddProduct,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
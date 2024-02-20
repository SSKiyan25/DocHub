import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Dashboard from "../components/DashboardComponent.vue";
import Login from "../views/LoginView.vue";
import SignUp from "../views/SignUpView.vue";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/init.js";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    beforeEnter: (_to, _from, next) => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          next();
        } else {
          next({ name: "Login" });
        }
      });
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  // Add more routes here
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../views/layouts/MainLayout.vue'
import HomeView from '../views/pages/HomeView.vue'
import LoginGoogle from "@/views/pages/auth/LoginGoogle.vue";
import LoginView from "@/views/pages/auth/LogginView.vue";
import RegisterView from "@/views/pages/auth/RegisterView.vue";
import ResetPassword from "@/views/pages/auth/resetPassword.vue";


const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active router-link-active',
  duplicateNavigationPolicy: 'reload',
  routes: [
    {
      path: '/',
      name: '',
      component: MainLayout,
      redirect: () => {
        if (window.location.pathname === '/' && window.location.hash === '') {
          return {name: 'home'};
        } else {
          return {name: 'not-found'};
        }
      },
      children: [
        {
          path: '/dashboard',
          name: 'home',
          component: HomeView,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/profile',
          name: 'auth.login',
          component: LoginView,
          meta: {
            requiresAuth: false
          }
        },
        {
          path: '/auth/login/google',
          name: 'auth.login.google',
          component: LoginGoogle,
          meta: {
            requiresAuth: false
          }
        },
        {
          path: '/auth/register',
          name: 'auth.register',
          component: RegisterView,
          meta: {
            requiresAuth: false
          }
        },
        {
          path: '/auth/reset-password',
          name: 'auth.reset',
          component: ResetPassword,
          meta: {
            requiresAuth: false
          }
        },
      ]
    }
  ]
})
export default router

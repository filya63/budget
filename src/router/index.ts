import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HistoryPage from '@/components/HistoryPage.vue';
import ExinPage from '@/components/ExinPage.vue';
import GraphPage from '@/components/GraphPage.vue';
import SignInPage from '@/components/SignInPage.vue';
import RegisterPage from '@/components/RegisterPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/history',
    name: 'History',
    component: HistoryPage
  },
  {
    path: '/exin',
    name: 'Exin',
    component: ExinPage
  },
  {
    path: '/graph',
    name: 'Graph',
    component: GraphPage
  },
  {
    path: '/sign-in',
    name: 'Sign-in',
    component: SignInPage,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active'
})

export default router
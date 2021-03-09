import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HistoryPage from '@/components/HistoryPage.vue';
import ExinPage from '@/components/ExinPage.vue';
import GraphPage from '@/components/GraphPage.vue';

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import AulasView from "../views/AulasView.vue"
import MateriasView from "../views/MateriasView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/aulas',
      name: 'aulas',
      component: AulasView
    },
    {
      path: '/materias',
      name: 'materias',
      component: MateriasView
    },

  ]
})

export default router


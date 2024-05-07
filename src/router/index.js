import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import HomeLayout from '../layouts/HomeLayout.vue'
import AdminView from '../views/AdminView.vue'
import AttendeeView from '../views/AttendeeView.vue'
import ReviewerView from '../views/ReviewerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeLayout,
      children: [
        {
          path: '/',
          name: 'home-view',
          component: HomeView
        },
        {
          path: '/admin',
          name: 'admin-view',
          component: AdminView
        },
        {
          path: '/attendee',
          name: 'attendee-view',
          component: AttendeeView
        },
        {
          path: '/reviewer',
          name: 'reviewer',
          component: ReviewerView
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    }
  ]
})

export default router

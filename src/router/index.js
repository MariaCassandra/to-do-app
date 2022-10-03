import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AuthView from '../views/AuthView.vue';
import SignIn from '../components/SignIn.vue';
import SignUp from '../components/SignUp.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthView,
    children: [
      { path: 'sign-in', component: SignIn },
      { path: 'sign-up', component: SignUp },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

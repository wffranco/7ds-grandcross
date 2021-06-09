import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/personajes/:id',
    name: 'CharacterInfo',
    // route level code-splitting
    // this generates a separate chunk (CharacterInfo.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "CharacterInfo" */ '../views/characters/info.vue'),
  },
  {
    path: '/personajes',
    name: 'Characters',
    // route level code-splitting
    // this generates a separate chunk (Personajes.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Personajes" */ '../views/characters/index.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CreateView from '../views/CreateView.vue';
import ListView from '../views/ListView.vue';
import EditView from '../views/EditView.vue';
import DeleteView from '../views/DeleteView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/create-pokemon',
    name: 'createpokemon',
    component: CreateView,
  },
  {
    path: '/list-pokemon',
    name: 'listpokemon',
    component: ListView,
  },
  {
    path: '/edit-pokemon',
    name: 'editpokemon',
    component: EditView,
  },
  {
    path: '/delete-pokemon',
    name: 'createpokemon',
    component: DeleteView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

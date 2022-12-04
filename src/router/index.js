import Vue from 'vue';
import VueRouter from 'vue-router';
import MainMenu from '../views/MainMenu.vue';
import CreateView from '../views/CreateView.vue';
import ListView from '../views/ListView.vue';
import EditView from '../views/EditView.vue';
import DeleteView from '../views/DeleteView.vue';
import AboutView from '../views/AboutView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainMenu,
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
    name: 'deletepokemon',
    component: DeleteView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

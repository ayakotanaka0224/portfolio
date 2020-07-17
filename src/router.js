import Vue from 'vue';
import VueRouter from 'vue-router';
import Top from './Top.vue';
import Notfound from './Notfound.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Top },
  { path: '*', component: Notfound },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
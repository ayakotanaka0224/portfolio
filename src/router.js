import Vue from 'vue';
import VueRouter from 'vue-router';
import Top from './Top.vue';
import AboutMe from './AboutMe.vue';
import Skills from './Skills.vue';
import Works from './Works.vue';
import Blog from './Blog.vue';
import Notfound from './Notfound.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Top },
  { path: '/about-me', component: AboutMe },
  { path: '/skills', component: Skills },
  { path: '/works', component: Works },
  { path: '/blog', component: Blog },
  { path: '*', component: Notfound },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
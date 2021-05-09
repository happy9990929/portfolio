import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('../views/shared/Layout.vue'),
    children: [
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/About.vue'),
      },
      {
        path: '',
        name: 'Projects',
        component: () => import('../views/Projects.vue'),
      },
      {
        path: 'project/:id',
        name: 'Project',
        component: () => import('../views/Project.vue'),
      },
      {
        path: 'works',
        name: 'Works',
        component: () => import('../views/Works.vue'),
      },
      {
        path: 'work/:id',
        name: 'Work',
        component: () => import('../views/Work.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;

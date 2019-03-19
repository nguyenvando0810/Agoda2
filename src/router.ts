import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

// const HotelComponent = () => import('@/component/hotel/hotel.component.vue')

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'hotel',
      component: () => import('./components/hotel/hotel.component.vue'),
    },
  ],
});

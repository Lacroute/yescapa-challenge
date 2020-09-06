import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/pages/Search'
import Vehicle from '@/pages/Vehicle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: { name: 'Search' }
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/vehicle/:id',
      name: 'Vehicle',
      component: Vehicle
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/pages/Search'
import Vehicule from '@/pages/Vehicule'

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
      path: '/vehicule/:id',
      name: 'Vehicule',
      component: Vehicule
    }
  ]
})

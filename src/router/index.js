import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/pages/Search'
import Vehicle from '@/pages/Vehicle'
import i18n from '@/i18n'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: { name: 'Search', query: {lang: 'fr'} }
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

router.beforeEach((to, from, next) => {
  let availableLanguages = Object.keys(i18n.messages)

  if (to.query.lang === undefined) {
    // if no lang defined in the url, then apply the default language
    next({path: to.path, query: { lang: i18n.locale }})
  } else {
    // Otherwise, serve the desired language if it exists
    let target = availableLanguages.find(lang => lang === to.query.lang)
    if (target === undefined){
      next({path: to.path, query: { lang: i18n.locale }})
    } else if (target !== i18n.locale) {
      i18n.locale = target
    }
    next()
  }
})

export default router

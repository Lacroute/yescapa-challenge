import Vue from 'vue'
import Vuex from 'vuex'

import { SEARCH_BY_SOMETHING, POPULATE_SEARCH_RESULTS } from '@/store/config'
// import { POPULATE_SEARCH_RESULTS } from '@/store/config'
import { searchBySomething } from '@/api'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({

  state: {
    results: []
  },

  getters: {
  },

  actions: {
    async [SEARCH_BY_SOMETHING] ({ commit }) {
      console.log(SEARCH_BY_SOMETHING)
      const results = await searchBySomething()
      commit(POPULATE_SEARCH_RESULTS, results)
    }
  },

  mutations: {
    [POPULATE_SEARCH_RESULTS] (state, payload) {
      state.results = payload
    }
  },

  strict: debug
})

export default store

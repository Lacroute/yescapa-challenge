import Vue from 'vue'
import Vuex from 'vuex'

/* eslint-disable */
import { SELECTED_VEHICULE } from '@/store/config'
import { SEARCH_BY_SOMETHING, GET_VEHICULE_BY_ID } from '@/store/config'
import { POPULATE_SEARCH_RESULTS } from '@/store/config'
/* eslint-enable */

import { searchBySomething, getVehicleById } from '@/api'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({

  state: {
    results: []
  },

  getters: {
    [SELECTED_VEHICULE] (state) {
      const id = +state.route.params.id
      return id !== undefined ? state.results.find(r => r.id === id) || null : null
    }
  },

  actions: {
    async [SEARCH_BY_SOMETHING] ({ commit }) {
      const results = await searchBySomething()
      commit(POPULATE_SEARCH_RESULTS, results)
    },

    async [GET_VEHICULE_BY_ID] ({ state, commit }) {
      const result = await getVehicleById(+state.route.params.id)
      commit(POPULATE_SEARCH_RESULTS, result)
    }
  },

  mutations: {
    [POPULATE_SEARCH_RESULTS] (state, payload) {
      // If we return just one element, let's keep the array structure
      if (!Array.isArray(payload)) {
        payload = [payload]
      }
      state.results = payload
    }
  },

  strict: debug
})

export default store

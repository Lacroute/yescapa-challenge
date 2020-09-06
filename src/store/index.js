import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'

/* eslint-disable */
import { SELECTED_VEHICULE } from '@/store/config'
import { SEARCH_BY_SOMETHING, GET_VEHICULE_BY_ID } from '@/store/config'
import { POPULATE_SEARCH_RESULTS, CORS_BUG } from '@/store/config'
/* eslint-enable */

import { searchBySomething, getVehicleById } from '@/api'

// just for Cors bug issue
import router from '@/router'
const { isNavigationFailure, NavigationFailureType } = Router

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({

  state: {
    results: [],
    corsBug: false
  },

  getters: {
    [SELECTED_VEHICULE] (state) {
      const id = +state.route.params.id
      return id !== undefined ? state.results.find(r => r.id === id) || null : null
    }
  },

  actions: {
    async [SEARCH_BY_SOMETHING] ({ commit }) {
      let results
      try {
        results = await searchBySomething()
      } catch (e) {
          router
            .push({ name: 'CorsBug' })
            .catch(failure => {
              if (isNavigationFailure(failure, NavigationFailureType.redirected)) {
                failure.to.path
                failure.from.path
              }
          })
      }
      commit(POPULATE_SEARCH_RESULTS, results)
    },

    async [GET_VEHICULE_BY_ID] ({ state, commit }) {
      let result
      try {
        result = await getVehicleById(+state.route.params.id)
      } catch (e) {
          router
            .push({ name: 'CorsBug' })
            .catch(failure => {
              if (isNavigationFailure(failure, NavigationFailureType.redirected)) {
                failure.to.path
                failure.from.path
              }
          })
      }
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
    },

    [CORS_BUG] (state, payload) {
      state.corsBug = payload
    }
  },

  strict: debug
})

export default store

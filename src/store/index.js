import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  name: 'storeApp',
  state: {
    adresses: [],
    authenticated: false,
  },
  getters: {
    getAdresses: (state) => {
      return state.adresses
    },
    isAuthenticated: (state) => {
      return state.authenticated
    }
  },
  mutations: {
    ADD_ADRESSE(state, adresse) {
      state.adresses.push(adresse)
    },
    REMOVE_ADRESSE(state, item) {
      state.adresses = state.adresses.filter(adresse => adresse.id !== item.id)
    },
    SET_AUTHENTICATED(state, authenticated) {
      if (authenticated == false) {
        state.authenticated = false
      } else {
        state.authenticated = true
      }
    }
  },
  actions: {
    addAdresse(context, adresse) {
      context.commit('ADD_ADRESSE', adresse)
    },
    deleteAdresse(context, adresse) {
      context.commit('REMOVE_ADRESSE', adresse) 
    },
    updateAdresse(context, adresse) {
      context.commit('REMOVE_ADRESSE', adresse)
      context.commit('ADD_ADRESSE', adresse)
    },
    setAuthenticated(context, authenticated) {
      context.commit('SET_AUTHENTICATED', authenticated)
    }
  }
})

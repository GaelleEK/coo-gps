import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    adresses: [],
    },
  getters: {
    getAdresses: (state) => {
      return state.adresses
    }
  },
  mutations: {
    ADD_ADRESSE(state, adresse) {
      state.adresses.push(adresse)
    },
    REMOVE_ADRESSE(state, item) {
      state.adresses = state.adresses.filter(adresse => adresse.id !== item.id)
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
    }
  },
  modules: {
  }
})

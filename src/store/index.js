import Vue from 'vue'
import Vuex from 'vuex'
import Adresse from '../classes/Adresse'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    adresses: [],
    objetAdresse: [],
    },
  getters: {
    getAdresses: (state) => {
      return state.adresses
    },
    getObjetAdresse: (state) => {
      return state.objetAdresse
    }
  },
  mutations: {
    ADD_ADRESSE(state, adresse) {
      state.adresses.push(adresse)
    },
    REMOVE_ADRESSE(state, item) {
      state.adresses = state.adresses.filter(adresse => adresse !== item)
    },
    ADD_OBJET_ADRESSE(state, objetAdresse) {
      state.objetAdresse.push(objetAdresse)
    },
    REMOVE_OBJET_ADRESSE(state, item) {
      state.objetAdresse = state.objetAdresse.filter(objetAdresse => objetAdresse !== item)
    },
    REMOVE_ALL_OBJETS(state) {
      state.objetAdresse = state.objetAdresse.filter(objetAdresse => objetAdresse)
    },
    SET_COO(state, [coos]) {
      
    }

  },
  actions: {
    addAdresse(context, adresse) {
      context.commit('ADD_ADRESSE', adresse)
    },
    deleteAdresse(context, adresse) {
      context.commit('REMOVE_ADRESSE', adresse) 
    },
    addObjetAdresse(context, objetAdresse) {
      context.commit('ADD_OBJET_ADRESSE', objetAdresse)
    },
    removeObjetAdresse(context, objetAdresse) {
      context.commit('REMOVE_OBJET_ADRESSE', objetAdresse)
    },
    removeAllObjets(context) {
      context.commit('REMOVE_ALL_OBJETS')
    },
    setCoo(context, [coos]) {
      context.commit('ADD_COO', [coos])
    }
  },
  modules: {
  }
})

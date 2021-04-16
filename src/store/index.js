import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let id = 0
function createAdresse(text) {
  return {
    text,
    id: id++
  }
}

export default new Vuex.Store({
  name: 'storeApp',
  state: {
    adresses: [],
    authenticated: false,
  },
  getters: {
    getAdresses: state => {
      return state.adresses
    },
    isAuthenticated: state => {
      return state.authenticated
    }
  },
  mutations: {
    ADD_ADRESSE(state, item) {
      let adresse 
      if(state.adresses.includes(item)) {
        adresse.push(item)
        let pos = state.adresses.indexOf(item)
        state.adresses.splice(pos, 1)
      } else {
        adresse = createAdresse(item)
      }
      console.log('store add adresse', adresse, 'state adresse', state.adresses)
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
    setAuthenticated(context, authenticated) {
      context.commit('SET_AUTHENTICATED', authenticated)
    }
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let id = 1
function createAdresse(text) {
  text.toString().replace(/\n|\r/g, '')
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
    errors: []
  },
  getters: {
    getAdresses: state => {
      return state.adresses
    },
    isAuthenticated: state => {
      return state.authenticated
    },
    getErrors: state => {
      return state.errors
    }
  },
  mutations: {
    ADD_ADRESSE(state, item) {
      // TODO: voir comment gérer l'emission d'erreur pour adresse valide ou invalide
      let adresse 
      //si state adresses vide alors j enregistre adresse
      if(state.adresses.length == 0) {
        adresse = createAdresse(item)
        state.adresses.push(adresse)
      } else {
        // si state adresses a des adresses
        if(state.adresses.length > 0) {
          //variable q filtre les adresses identiques
          let q = state.adresses.filter(adresse => adresse.text == item)
          if(q.length == 0) {
            console.log('adresse valide')
            adresse = createAdresse(item)
            state.adresses.push(adresse)
          } else {
            console.log('adresse invalide')
            let error = { type: 'adresse invalide', item}
            state.errors.push(error)
          }
        }
      }
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
    },
    DELETE_ERRORS(state) {
      state.errors = []
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
    }, 
    deleteErrors(context) {
      context.commit('DELETE_ERRORS')
    }
  }
})

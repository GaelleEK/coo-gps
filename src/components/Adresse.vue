<template>
  <div id="adresse" class="container is-fluid">
    <div class="box">
      <h1 class="title is-1 is-spaced">Mes adresses</h1>
      <!-- <p class="subtitle-3 is-spaced">Principe: </p> -->
      <p class="text pb-5">Entrez une adresse valide, c'est à dire un nom de rue et un nom de ville au minimum</p>
      <div class="field">
          <div class="control has-addons has-addons-centered pb-3">
            <input type="text" class="input" v-model="newAdresse" @change="deleteError" @keyup.enter="addAdresse" placeholder="Ex: 10 rue Georges Genoux Vesoul">
          </div>
          <div class="control">
            <p class="help is-danger" v-if="alert">{{ alert }}</p>
            <button class="button" @click="addAdresse">Enregistrer</button>
        </div>
      </div>
      <upload-adresses/>
      <div>
    </div>
    </div>  
    <div v-if="getAdresses.length">
      <h3 class="title is-4 pt-3">Mes adresses enregistrées</h3>
      <table class="table">
        <tr>
          <th>#</th>
          <th>Adresses</th>
          <th>Actions</th>
          <th>Coordonnées</th>
        </tr>
        <tr v-for="adresse in getAdresses" :key="adresse.id">
          <td>{{ adresse.id }}</td>
          <td>{{ adresse.text }}</td>
          <td>
            <div class="buttons are-small">
              <button class="button" @click="() => deleteAdresse(adresse)">Effacer</button>
              <button :class="classObjet" @click="() => queryCoo(adresse)">Demander coordonnées</button>
            </div>
          </td>
          <td>
            <div v-if="!loading">lat: {{ adresse.lat }} / lng:{{ adresse.lng }}</div>
            <div v-if="errorCoo">{{ error }}</div>
            <div v-else>En attente ...</div>

          </td>
        </tr>
      </table>
      <div>{{ result }}</div>
      <div>{{ resultRep }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import UploadAdresses from './UploadAdressesTest.vue'
//import FetchData from './FetchData.vue'

const axios = require('axios')

export default {
  components: { UploadAdresses },
  name: "adresse",
  data() {
    return {
      newAdresse: "",
      alert: "",
      file: '',
      result: [],
      error: '',
      resultRep: '',
      classObjet: {
        'button': true,
        'is-loading': false
      },
      errorCoo: null,
      loading: true
    };
  },
  methods: {
    addAdresse() {
      const text = this.newAdresse
      if (text !== "") {
        this.newAdresse = ""
        this.$store.dispatch("addAdresse", text)
      } else {
        this.alert = "Veuillez vérifier votre saisie"
      }
    },
    deleteAdresse(adresse) {
      this.$store.dispatch("deleteAdresse", adresse)
    },
    queryCoo(adresse) {
      console.log('adresse', adresse)
      this.loading = true
      if(adresse.text) {
        this.requestHttp(adresse.text)
      }
      
       
    },
    async requestHttp(text) {
        try {
          axios.get(`https://api.torop.net/cartographie/geocode?adresse=${text}`)
              .then(response => { 
                console.log('reponse', response)
                this.resultRep = response.data
                
                })
                
        } catch (error) {
          console.log(error)
        }
    },
    deleteError() {
      this.alert = ''
    }
  },
  computed: {
    ...mapGetters(["getAdresses"])
  }
};
</script>
<style>
table {
  width: 100%;
  display: table;
  border-spacing: 0;
  border-collapse: collapse;
}
th,
td {
  border: 1px solid black;
}
</style>
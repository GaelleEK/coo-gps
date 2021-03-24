<template>
  <div id="adresse">
    <h1>mes adresses</h1>
    <input type="text" v-model="newAdresse"  v-on:keyup.enter="addAdresse"/>
    <button @click="addAdresse">enregister</button>

    <div v-if="getAdresses.length">
        <h3>Mes adresses enregistrées</h3>
        <table>
            <tr>
                <th>#</th>
                <th>adresses</th>
                <th>actions</th>
                <th>coordonnées</th>
            </tr>
            <tr v-for="adresse in getAdresses"
            :key="adresse.id">
                <td>{{ adresse.id }}</td>
                <td>{{ adresse.text }}</td>
                <td>
                    <button>Effacer</button>
                    <button>Demander coo</button>
                </td>
                <td v-if="adresse.lat">lat:{{ adresse.lat }}long:{{ adresse.lng }}</td>
            </tr>
        </table>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

let nextAdresseId = 1
const createAdresse = (text) => ({
  text,
  id: nextAdresseId++,
});

export default {
  name: 'adresse',
  data() {
    return {
      newAdresse: ''
    }
  },
  methods: {
    addAdresse() {
      const text = this.newAdresse
      if (text !== '') {
        this.newAdresse = ''
        const adresse = { text }
        // TODO gérer création id adresse
        this.$store.dispatch('addAdresse', adresse)
      } else {
          this.alert = 'Veuillez vérifier votre saisie'
      }
    },
    removeAdresse(item) {
      this.$store.dispatch('removeAdresse', item)
    }
  },
  computed: {
      ...mapGetters(['getAdresses'])
//    getAdresses() {
//        return this.$store.adresses
//    }
  }
}
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
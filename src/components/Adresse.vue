<template>
  <div id="adresse">
    <h1>mes adresses</h1>
    <input type="text" v-model="newAdresse" v-on:keyup.enter="addAdresse" />
    <button @click="addAdresse">enregister</button>
    <p v-if="alert">{{ alert }}</p>
    <p>{{ adresseTest.get }}</p>

    <div v-if="getAdresses.length">
      <h3>Mes adresses enregistrées</h3>
      <table>
        <tr>
          <th>#</th>
          <th>adresses</th>
          <th>actions</th>
          <th>coordonnées</th>
        </tr>
        <tr v-for="adresse in getAdresses" :key="adresse.id">
          <td>{{ adresse.id }}</td>
          <td>{{ adresse.text }}</td>
          <td>
            <button>Effacer</button>
            <button>Demander coo</button>
          </td>
          <!-- <td v-if="adresse.lat">lat:{{ adresse.lat }}long:{{ adresse.lng }}</td> -->
        </tr>
      </table>
    </div>
    <!-- <p v-bind:class="AdresseTest">{{ getAdressesTest }}</p> -->



  <div id="test">
      <h3>test adresse objet</h3>
      <input type="text" v-model="newAdresse" v-on:keyup.enter="addObjetAdresse" />
      <button @click="addObjetAdresse">enregister objet adresse</button>
      <button @click="removeAllObjetAdresse">Effacer tous les objets adresses du store</button>
    <div v-if="getObjetAdresse.length">
      <table>
        <tr>
          <th>#</th>
          <th>adresses</th>
          <th>actions</th>
          <th>coordonnées</th>
        </tr>
        <tr v-for="objetAdresse in getObjetAdresse" :key="objetAdresse.id">
            <td>
                {{ objetAdresse.id }}
            </td>
            <td>
                {{ objetAdresse.text }}
            </td>
            <td>
                <button>Effacer</button>
                <button @click="queryCoo">Demander coo</button>
            </td>
            <td> lat : {{  }} long : {{  }}</td>
        </tr>
      </table>
    </div>
      <p>test d affichage:{{ getObjetAdresse }}</p>





  </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Adresse from "@/classes/Adresse.js"

let nextAdresseId = 1
const createAdresse = (text) => ({
  text,
  id: nextAdresseId++,
});

export default {
  name: "adresse",
  data() {
    return {
      newAdresse: "",
      alert: "",
      adresseTest: Adresse,
      adresses: Adresse
    };
  },
  methods: {
    addAdresse() {
      const text = this.newAdresse;
      if (text !== "") {
        this.newAdresse = ""
        const adresse = createAdresse(text)
        this.$store.dispatch("addAdresse", adresse)
      } else {
        this.alert = "Veuillez vérifier votre saisie"
      }
    },
    removeAdresse(item) {
      this.$store.dispatch("removeAdresse", item)
      this.$store.getObjetAdresse
    },
    addObjetAdresse() {
        const text = this.newAdresse
        if (text !== '') {
            this.newAdresse = ''
            let objetAdresse = new Adresse(text)
            this.$store.dispatch("addObjetAdresse", objetAdresse)
        } else {
            this.alert = "Veuillez vérifier votre saisie"
        }
    },
    removeAllObjetAdresse() {
        this.$store.dispatch("removeAllObjets")
    },
    queryCoo(adresse) {
        let qryAdresse = adresse.text
        const xmlhttp = new XMLHttpRequest
        xmlhttp.onreadystatechange = () => {
          if (xmlhttp.readyState == 4) {
            const response = xmlhttp.response
            console.log(response)
            
          }
        }
        xmlhttp.open('get', `https://api.torop.net/cartographie/geocode?adresse=${qryAdresse}`)
        xmlhttp.send()
    }
  },
  computed: {
    ...mapGetters(["getAdresses", "getObjetAdresse"]),
  },
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
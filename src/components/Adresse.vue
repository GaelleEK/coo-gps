<template>
  <div id="adresse">
    <h1>mes adresses</h1>
    <input type="text" v-model="newAdresse" v-on:keyup.enter="addAdresse" />
    <button @click="addAdresse">enregister</button>
    <p v-if="alert">{{ alert }}</p>

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
            <button @click="() => deleteAdresse(adresse)">Effacer</button>
            <button @click="() => queryCoo(adresse)">Demander coo</button>
          </td>
          <td v-if="adresse.lat">lat: {{ adresse.lat }} / long: {{ adresse.lng }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"


let nextAdresseId = 1;
const createAdresse = (text) => ({
  text,
  id: nextAdresseId++,
});

export default {
  name: "adresse",
  data() {
    return {
      newAdresse: "",
      alert: ""
    };
  },
  methods: {
    addAdresse() {
      const text = this.newAdresse;
      if (text !== "") {
        this.newAdresse = "";
        const adresse = createAdresse(text);
        this.$store.dispatch("addAdresse", adresse);
      } else {
        this.alert = "Veuillez vérifier votre saisie";
      }
    },
    deleteAdresse(adresse) {
      this.$store.dispatch("deleteAdresse", adresse);
    },
    queryCoo(adresse) {
      let qryAdresse = adresse.text;
      const xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState == 4) {
          const response = JSON.parse(xmlhttp.response);
          adresse.lat = response.infos.lat
          adresse.lng = response.infos.lng
          this.$store.dispatch("updateAdresse", adresse)
        }
      };
      xmlhttp.open("get",`https://api.torop.net/cartographie/geocode?adresse=${qryAdresse}`);
      xmlhttp.send();
    },
  },
  computed: {
    ...mapGetters(["getAdresses"])
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
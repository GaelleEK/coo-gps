<template>
  <div id="adresse" class="container is-fluid">
    <div class="box">
      <h1 class="title is-1 is-spaced">Mes adresses</h1>
      <p class="subtitle-3 is-spaced">Principe: </p>
      <p class="text pb-5">Vous entrez une adresse valide, c'est à dire un nom de rue et un nom de ville au minimum, ... et c'est parti...</p>
      <div class="field has-addons has-addons-centered pb-5">
        <p v-if="alert">{{ alert }}</p>
          <div class="control">
            <input type="text" class="input" v-model="newAdresse" v-on:keyup.enter="addAdresse" placeholder="Ex: 10 rue Georges Genoux Vesoul">
          </div>
          <div class="control">
            <button class="button" @click="addAdresse">Enregistrer</button>
        </div>
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
              <button class="button" @click="() => queryCoo(adresse)">Demander coordonnées</button>
            </div>
          </td>
          <td>lat: {{ adresse.lat }} / long: {{ adresse.lng }}</td>
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
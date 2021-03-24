<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div id="adresse">
      <h1>mes adresses</h1>
      <input type="text" v-model="newAdresse"/>
      <button @click="addAdress">enregister</button>
      <div v-if="adresses.length">
      <p 
        v-for="adresse in adresses"
        :key="adresse.id"
        >{{ adresse.text }}</p>
        </div>
    </div>
  </div>
</template>

<script>

let nextAdressId = 1
const createAdresse = (text) => ({
  text,
  id: nextAdresseId++,
});

export default {
  data() {
    return {
      adresses: [],
      newAdresse: ''

    }
    
  },
  methods: {
    addAdresse() {
      let text = adresse.text
      this.adresses.push(createAdresse(text))
      this.newAdresse = ''
    },
    removeAdresse(item) {
      this.adresses = this.adresses.filter(adresse => adresse !== item)
    }
  }
}
</script>


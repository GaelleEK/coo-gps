<template>
<div id="list-adresse" v-if="getAdresses.length">
    <div v-for="adresse in getAdresses" :key="adresse.id" :adresse="adresse">
        {{ adresse }} - {{ adresse.id }} - {{ adresse.text }}
        <div class="buttons are-small">
              <button class="button" @click="() => deleteAdresse(adresse)">Effacer</button>
              <button class="button" @click="() => queryCoo(adresse)">Demander coordonnées</button>  
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters } from "vuex"
import axios from 'axios'



export default {
  
    data() {
        return {
            
        }
    },
    methods: {
        deleteAdresse(adresse) {
            console.log('delete adresse')
            console.log(adresse)
            this.$store.dispatch("deleteAdresse", adresse)
        },
        queryCoo(adresse) {
            console.log('demande coo')

            if(adresse.text) {
                axios.get(`https://api.torop.net/cartographie/geocode?adresse=${adresse.text}`)
                .then(response => console.log('reponse', response))
                .catch(error => console.log('error', error))
            }
            //this.requestHttp(adresse)
            //TODO: component HTTP with axios
        }
    },
    computed: {
    ...mapGetters(["getAdresses"])
  }
}

</script>

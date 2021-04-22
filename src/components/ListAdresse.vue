<template>
<div id="list-adresse" v-if="getAdresses.length">
    <div v-for="adresse in getAdresses" :key="adresse.id" :adresse="adresse">
        <base-adresse :key="adresse.id" :adresse="adresse"/>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import BaseAdresse from './BaseAdresse.vue'

export default {
  name: 'ListAdresse',
  components: {
    BaseAdresse
  },
    data() {
        return {
            result: null,
            reponse:null
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
                .then(response => {console.log('reponse', response); this.reponse = response})
                .catch(error => console.log('error', error))
            }
            if(response.data) {
                this.result =  reponse.data
            }
        }
    },
    computed: {
    ...mapGetters(["getAdresses"])
  }
}

</script>

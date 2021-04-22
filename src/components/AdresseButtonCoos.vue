<template>
    <div class="button" @click="() => showCoo(this.adresse)">
        <slot name="showCoo" v-if="adresse.lat && adresse.lng">{{ adresse.lat }} / {{ adresse.lng }}</slot>
        <slot name="loading" v-if="loading"><progress class="progress is-small is-dark"></progress></slot>
        <slot name="default" v-if="!adresse.lat">Demander coordonnées</slot>
    </div>
</template>

<script>
const axios = require('axios')

export default {
    name: 'AdresseButtonCoos',
    data() {
        return {
            loading: false
        }
    },
    // PROVIDE: pour recevoir des propriétés spécifiques que nous avons listé dans composant parent
    inject:['adresse'],
    methods: {
        showCoo() {
            //console.log(this.adresse)
            var adresse = this.adresse
            this.loading = true   
            this.getCoo(adresse.text)
                .then(reponse => {
                    this.addCooToAdresse(reponse.data.infos.lat, reponse.data.infos.lng, adresse)
                    this.loading = false
                })
        },
        addCooToAdresse(lat, lng, adresse) {
            adresse.lat = lat
            adresse.lng = lng
            return adresse
        },
        async getCoo(text) {
            const reponse = await axios.get(`https://api.torop.net/cartographie/geocode?adresse=${text}`)
            return reponse.data
        },
    }
}
</script>
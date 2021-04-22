<template>
    <div class="block" :key="adresse.id" :adresse="adresse">
        #{{ adresse.id }} --> {{ adresse.text }}
        
         <base-adresse-button :adresse="adresse" @click.native="deleteAdresse">Effacer</base-adresse-button>
        

         <adresse-button-coos ></adresse-button-coos>
    </div>
</template>

<script>
import BaseAdresseButton from './BaseAdresseButton.vue'
import AdresseButtonCoos from './AdresseButtonCoos.vue'


export default {
    name: 'BaseAdresse',
    components: { BaseAdresseButton, AdresseButtonCoos },
    props: {
        adresse: {
           type: Object,
           required: true
        }

    },
    // PROVIDE: permet de spécifier les données / méthodes que nous voulons fournir aux composants descendants
    provide() {
        return {
            adresse: this.adresse
        }
    },
    methods: {
        deleteAdresse() {
            //console.log('clic buton', this.adresse)
            this.$store.dispatch("deleteAdresse", this.adresse)
        },
    }
}
</script>
<template>
    <div :key="adresse.id" :adresse="adresse">
        #{{ adresse.id }} --> {{ adresse.text }}
        
         <base-adresse-button :adresse="adresse" @click.native="deleteAdresse">Effacer</base-adresse-button>
        

         <button-coos ></button-coos>
    </div>
</template>

<script>
import BaseAdresseButton from './BaseAdresseButton.vue'
import ButtonCoos from './ButtonCoos.vue'


export default {
    name: 'BaseAdresse',
    components: { BaseAdresseButton, ButtonCoos },
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
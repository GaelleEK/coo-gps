<template>
    <div id="fetch-data">
        
        <button type="button" :class="classObjet" @click="addCoos">
            Demander coordonnées T
        </button>
        

    
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'FetchData',
    props: {
        
    },
    data() {
        return {
            response: null,
            adresse: null,
            classObjet: {
                'button': true,
                'is-loading': false
            }
        }
    },
    methods: {
        addCoos() {
            this.$emit('add-coos')
            //console.log('addcoos', this.$listeners)
        },
    },
    computed: {

    }
}
</script>

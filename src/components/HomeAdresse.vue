<template>
    <div>
        <input-adresse />
        <upload-adresses />
        <list-adresse />
        
    </div>
</template>

<script>
import InputAdresse from './InputAdresse.vue'
import ListAdresse from './ListAdresse.vue'
import UploadAdresses from './UploadAdresses.vue'

export default {
    name: 'HomeAdresse',
    components: { InputAdresse, ListAdresse, UploadAdresses },
    data() {
        return {
            //  url: {
            // type: URL,
            // //base: 'https://api.torop.net/cartographie/geocode?adresse=',
            // required: false
            // },
            // adresse: {
            //     id: Number,
            //     text: String
            // }
        }
    },
}
</script>
<template>
    <div>
        <h4>Uplaod fichier</h4>
        <p>possibilité de déposer un fichier d'adresses</p>
        <div class="">
            <form class="file has-name">
                <label class="file-label">
                    <input class="file-input" id="file" ref="file" type="file" name="resume" v-on:change="handleFileUpload">
                    <span class="file-cta">
                        <span class="file-icon">
                            <i class="fas fa-upload"></i>
                        </span>
                        <span class="file-label">
                            Choisissez un fichier
                        </span>
                    </span>
                    <span class="file-name">
                        {{ file }}
                    </span>
                </label>
                <button class="button" @click="submitFile">Envoyer</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'test',
    data() {
        return {
            file: ''

        }
    },
    methods: {
        handleFileUpload() {
            // TODO: à créer
        },
        submitFile() {
            // TODO: à créer
        }
    }
}
</script>

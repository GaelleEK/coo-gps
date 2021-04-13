<template>
    <div class="">
        <h3 class="h3">Upload fichier</h3>
        <p>Possibilité de déposer un fichier d'adresses</p>
        <div class="field has-addons has-addons-centered pb-5">
            <form class="file has-name">
                <label class="file-label">
                    <input class="file-input" id="file" ref="file" type="file" @change="handleFileUpload">
                    <span class="file-cta">
                        <span class="file-icon">
                            <i class="fas fa-upload"></i>
                        </span>
                        <span class="file-label">
                            Choisissez un fichier
                        </span>
                    </span>
                    <span v-if="file.name" class="file-name">
                        {{ file.name }}
                    </span>
                </label>
            </form>
                
        </div>
        <div class="control">
            <button class="button" @click.prevent="submitFile">Enregistrer</button>
        </div>
        <div class='is-centered'>
            <!-- <p v-if="test">{{ test }}</p> -->
            <p class="help is-danger" >{{ error }}</p>
        </div>
    </div>
</template>

<script>
// let nextAdresseId = 1;
// const createAdresse = (text) => ({
//   text,
//   id: nextAdresseId++,
// });
export default {
    name: 'test',
    props: {
        adresses: [],
    },
    data() {
        return {
            file: '',
            test: '',
            error: ''
        }
    },
    methods: {
        handleFileUpload() {
            this.deleteVar()
            if(this.verifFile(this.$refs.file.files[0])) {
                this.file = this.$refs.file.files[0]
            } else {
                this.error = "ce fichier n'est pas valide"
            }
        },
        submitFile() {
            this.readFile()
            if(this.test != '') {
                this.extractAdresse()
            }
            //console.log(this.file, this.test)
        },
        readFile() {
            var file = this.file
            const reader = new FileReader
            reader.onload = ($event) => {
                this.test = $event.target.result
                this.extractAdresse(this.test)
            }
            reader.readAsText(file)
        },
        verifFile(file) {
            let hasSize = file.size > 0 ? true : false
            let extension = file.name.split('.').pop()
            let hasExtensionTxt = extension === 'txt' ? true : false
            if(hasSize && hasExtensionTxt) {
                return true
            } else {
                return false
            }
        },
        extractAdresse(fileAdresses) {
            let adresses = fileAdresses.split('\n')
            let results = []
            for (let i = 0; i < adresses.length; i++) {
                this.$store.dispatch("addAdresse", adresses[i])
                results.push(adresse)
            }
            console.log(results)
        },
        deleteVar() {
            this.error = ''
            this.file = ''
            this.test = ''
        }
        
        
    }
}
</script>

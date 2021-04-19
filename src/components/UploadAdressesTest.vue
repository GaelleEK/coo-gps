<template>
    <div>
        <p class="pb-4">Déposez un fichier d'adresses au format .txt</p>
        <div class="field has-addons has-addons-centered pb-5">
            <form class="file has-name">
                <label class="file-label">
                    <input class="file-input" id='file' ref='filesList' type="file" @change="handleFileUpload">
                    <span class="file-cta">
                        <span class="file-icon">
                            <i class="fas fa-upload"></i>
                        </span>
                        <span class="file-label">
                            Choisissez un fichier
                        </span>
                    </span>
                    <span v-bind:class="placeholderSpan">
                        {{ placeholderSpan.text }}
                    </span>
                </label>
            </form>
                
        </div>
        <div class="control">
            <button class="button" @click="submitFile">Enregistrer</button>
        </div>
        <div class='is-centered'>
            <!-- <p v-if="test">{{ test }}</p> -->
            <p class="help is-danger" >{{ error }}</p>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
    name: 'test',
    props: {
        adresses: [],
    },
    data() {
        return {
            filesList: {},
            file: '',
            test: '',
            error: '',
            classPhSpan: {
                text: 'Ex : 10 grande rue Frotey lès Vesoul',
                'disabled': true,
                'file-name': true
            }
        }
    },
    methods: {
        handleFileUpload() {
        //console.log('handle', this.file)
            this.error = ''
            this.filesList = this.$refs.filesList.files
            var files = this.filesList
            var nbfiles = this.$refs.filesList.files.length
            for (var i = 0; i < nbfiles; i++) {
                this.file = files[i]
                //console.log(this.file.name)
            }
            this.$refs.filesList.value = ''
          
        },
        submitFile() {
            if (this.verifFile(this.file)) {
                console.log(this.verifFile(this.file))
                this.readFile()
            } 
            else {
                if (this.file == '') {
                    this.error = "ce fichier n'est pas valide"
                } else {
                    this.error = "ce fichier n'a pas une extension valide"

                }
            }
            this.file = ''
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
            console.log(file)
            let hasSize = file.size > 0 ? true : false
            if (hasSize) {
                let extension = file.name.split('.').pop()
                let hasExtensionTxt = extension === 'txt' ? true : false
                if(hasExtensionTxt) {
                    return true
                } else {
                    return false
                }
            } else {
                return false
            }
        },
        extractAdresse(fileAdresses) {
            let texts = fileAdresses
            // je retire les sauts de ligne 
            texts = texts.split('\n')
            // je boucle sur texts
            for (let i = 0; i < texts.length; i++) {
                // si text vide on retire de texts
                if(texts[i] != '') {
                    this.$store.dispatch("addAdresse", texts[i])
                } 
            }
        }
    },
    computed: {
        placeholderSpan() {
            if (this.file != '') {
                return {
                    text: this.file.name,
                    'disabled': false,
                    'file-name': true
                    } 
            } else {
                return {
                    text: 'Ex : 10 grande rue Frotey lès Vesoul',
                    'has-text-grey-light': true,
                    'file-name': true
                }
            }
        },
        ...mapGetters(["getAdresses"]),

    }
}
</script>

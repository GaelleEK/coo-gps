<template>
    <div>
        <h4>Uplaod fichier</h4>
        <p>possibilité de déposer un fichier d'adresses</p>
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
                    <span class="file-name">
                        {{ file.name }}
                    </span>
                </label>
                <button class="button" @click.prevent="submitFile">Envoyer</button>
            </form>
        </div>
    </div>
</template>

<script>
let nextAdresseId = 1;
const createAdresse = (text) => ({
  text,
  id: nextAdresseId++,
});
export default {
    name: 'test',
    props: {
        adresses: [],
    },
    data() {
        return {
            file: '',
            result: [],
            resultRead: {}
        }
    },
    methods: {
        handleFileUpload($event) {
            this.file = this.$refs.file.files[0]
            
            console.log('handler file', 'ref', this.$refs.file, 'this file', this.life)
            
        },
        submitFile() {
            this.readFile()
            console.log('submit file')
            
        },
        readFile() {
            console.log('read file')
            // let copie = this.file
            // let reader = new FileReader
            // if (reader.onload) {
            //     reader.onload = function($event) {
            //     JSON.parse(JSON.stringify(reader.result))
            //     resultRead = reader.result.split('\n')
            //     resultRead.forEach(item => {
            //         if (item != '') {
            //             const adresse = item
            //             this.$store.dispatch("addAdresse", item)
            //             console.log(adresse)
            //         }
            //     });
            // }
            //     // localStorage.setItem('adresses', resultRead)
            //     // localStorage.removeItem('adresses')
            //     //console.log(resultRead)
            // }
            // reader.readAsBinaryString(copie)
        },
    }
}
</script>

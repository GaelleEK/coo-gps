import Store from 'vuex'

let id = 0

export default class AdresseTest {

    constructor(text) {
        this.text = text
        this.id = ++id
        this.coos = []
    }

    get() {
        return this
    }

    add(adresse) {
        this.text = adresse.text
        this.id = adresse.id
        return this
    }

    getById(id) {
       this.forEach(element => {
           if (id === this.id) {
               return this
           } else {
               return 'aucune adresse avec cet id'
           }
       })
    }

    addCoo([lat, lng]) {
        if (lat instanceof Number && lng instanceof Number) {
            if (lat !== null && lng !== null) {
                this.coos.push([lat, lng])
            }
        }
    }
    getCoos() {
        return this.coos
    }


    // getCoo(adresse) {
    //     let qryAdresse = adresse.text.trim()
    //     const xmlhttp = new XMLHttpRequest
    //     xmlhttp.onreadystatechange = () => {
    //       if (xmlhttp.readyState == 4) {
    //         const response = JSON.parse(xmlhttp.response)
    //         console.log(response)
    //         //this.$store.dispatch('UPDATE_ADRESSES', response[0]['lat']['lng'])
    //       }
    //     }
    //     xmlhttp.open('get', `https://api.torop.net/cartographie/geocode?adresse=${qryAdresse}`)
    //     xmlhttp.send()
    //     // console.log(this.$store.adresseStore)
    // }
}

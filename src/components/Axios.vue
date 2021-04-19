<template>
    <div>{{ infos }}</div>
</template>

<script>

export default {
    data() {
        return {
            info: null
        }
    },
    mounted(adresse) {
        axios
            .get(`https://api.torop.net/cartographie/geocode?adresse=${adresse}`)
            .then(response => {this.info = response.data})
    }
}
</script>

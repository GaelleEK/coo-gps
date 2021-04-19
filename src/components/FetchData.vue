<template>
    
</template>

<script>

export default {
    name: 'FetchData',
    props: ['url'],
    data() {
        return {
            loaded: false,
            response: null,
        }
    },
    created() {
        axios.get(this.url)
            .then((response) => {
                this.response = response
                this.loaded = true
            })
    },
    render() {
        if (!this.loaded) {
            return this.$slots.loading[0]
        }
        return this.$scopedSlots.default({
            response: this.response.data,
        })
    }
}
</script>

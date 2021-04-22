<template>
    <button class="button"><slot>bouton</slot></button>
</template>

<script>
export default {
    name: 'BaseAdresseButton',
    props: {
        adresse: {
           type: Object,
           required: true
        }

    }
}
</script>
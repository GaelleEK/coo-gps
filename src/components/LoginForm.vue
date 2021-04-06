<template>
    <form @submit.prevent="submit()">
        <label for="email">Email</label>
        <input type="email" v-model="email" />
        <label for="password">Password</label>
        <input type="password" v-model="password" />
        <button type="submit" @submit="login">Login</button>
    </form>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        submit() {
            this.$emit("submit", {
                email: this.email,
                password: this.password
            })
            }
        
    }
}
</script>

<template>
    <div class="block">
        <div class="box">
            <h1 class="title is-2">Connexion</h1>
            <p v-if="errorMessage" class="help is-danger">{{ errorMessage }}</p>
            <div class="field">
                <div class="control has-icons-left has-icons-right">
                    <input class="input" type="text" name="username" v-model="input.username" placeholder="Entrez votre nom">
                    <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                    </span>
                </div>
            </div>
            <div class="field">
                <div class="control has-icons-left has-icons-right">
                    <input type="password" class="input" name="password" v-model="input.password" placeholder="Entrez votre mot de passe" @keyup.enter="login()">
                    <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                    </span>
                </div>
            </div>
            <button type="button" class="button is-light" @click.native="login">Login</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            input: {
                username: '',
                password: ''
            },
            errorMessage: ''
        }
    },
    methods: {
        login() {
            if (this.input.username != '' && this.input.password != '') {
                if (this.input.username == this.$parent.account.username && this.input.password == this.$parent.account.password) {
                    this.$emit("authenticated", true)
                    this.$router.replace({ name : "Adresse"})
                } else {
                    this.errorMessage = "Le nom et/ou le mot de passe sont incorrects"
                }
            } else {
                this.errorMessage = "Vous n'êtes pas enregistré"
            }
            }
        
    }
}
</script>
<style lang="scss">
</style>

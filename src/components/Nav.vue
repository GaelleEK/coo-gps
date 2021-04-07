<template>
<div id="nav">
    <nav class="navbar has-text-centered pb-4">
        <div class="navbar-menu">
            <router-link class="navbar-item" to="/" exact-path>
                <p class="level-item">H<img src="../assets/compass1.svg">ME</p>
            </router-link> 
        
            <div class="navbar-item">
                <router-link to="/about" class="navbar-item" exact-path>About</router-link> 
            </div>
            <div class="navbar-item" v-if="!authenticated">
                <router-link class="navbar-item" to="/login" exact-path>Login</router-link>
            </div>
            <div class="navbar-item" v-else>
                <div v-if="authenticated">
                    <router-link to="/adresse" exact-path>Adresse</router-link>
                </div>
                <router-link class="navbar-item" to="/login" @click="logout" exact-path replace>Logout</router-link>
            </div>
        </div>
    </nav>
        <router-view class="container has-text-centered " @authenticated="setAuthenticated"/>
</div>
</template>
<script>
export default {
    name: 'navigation',
    data() {
        return {
             authenticated: false,
             account : {
                username: 'test',
                password: 'password',
                errorMessage: ''
      }
        }
    },
    methods: {
        setAuthenticated(status) {
            this.authenticated = status
        },
        logout() {
            this.authenticated = false
        }
    },
    mounted() {
        if (!this.authenticated && this.$route.path == '/adresse') {
            console.log(this.$route.path)
            this.$router.replace({ name: 'Home'})
        }
    },
}
</script>
<style lang="scss">

</style>

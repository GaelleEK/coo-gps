<template> 
    <div>
        <LoginForm @submit="login"/>
    </div>
</template>

<script>
import LoginForm from './LoginForm'

const users = [
    {
        email: 'john@doe.com',
        password: 'john1',
        isLog: false
    },
    {
        email: 'jane@doe.com',
        password: 'jane2',
        isLog: false
    }
]

export default {
    name: 'AuthUser',
    components: { LoginForm },
    data() {
        return {
            alert: '',
            newAdresse: '',
            user: null,
            errorMessage: '',
            users: users
        }
    },
    methods: {
        login(email, password) {
            console.log(this.user)
            this.user = users.find(user => user.email === email && user.password === password)
            this.user.isLog = true
            this.errorMessage = this.user ? '' : "Authentification échouée réessayez"
        }
    }
}
</script>

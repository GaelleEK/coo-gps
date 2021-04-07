<template>
  <div class="container">
    <Navigation/>
  </div>
</template>

<script>
import Navigation from './components/Nav.vue'
export default {
  components: { Navigation },
  name: "App",
  data() {
    return {
      authenticated: false,
      account : {
        username: 'test',
        password: 'password',
        errorMessage: ''
      }
    }
  }
}
</script>


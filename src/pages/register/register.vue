<template>
  <div>
    <p>Sign up</p>
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>

    <button @click="signIn()">Sign in</button>
  </div>
</template>
<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        signUp() {
            this.$store.dispatch('userSignUp', { email: this.email, password: this.password })
                .then(
                    function(user) {
                    alert('Your account has been created!')
                })
                .catch(() => {
                    alert('Your account cannont be created!')
                })
        },
        signIn() {
            this.$store.dispatch('userSignIn', { email: this.email, password: this.password })
                .then(
                    function(user) {
                    alert('Successfully logged in!')
                })
                .catch(() => {
                    alert('Cant login!')
                })
        }
    }
}
</script>
<style>

</style>
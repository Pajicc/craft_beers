<template>
  <div>
    <p>Sign up</p>
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>

    <button @click="signUp()">Sign Up</button>
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
            this.$firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then(
                    function(user) {
                    alert('Your account has been created!')
                },
                    function(user) {
                    alert('Your account has been created!')
                    }
                )
        }
    }
}
</script>
<style>

</style>
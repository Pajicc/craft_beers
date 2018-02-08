<template>
  <div>
      <label >Name:</label>
      <input type="text" v-model="naziv" placeholder="Naziv"></input><br>
      <input type="text" v-model="pivara" placeholder="Pivara"></input><br>
      <input type="text" v-model="zemlja" placeholder="Zemlja porekla"></input><br>
      <input type="text" v-model="tip" placeholder="Stil piva"></input><br>
      <button @click="submitBeer()">Add</button><br>
      <li v-for="beer of beers" :key="beer['.key']">
          <p>{{beer.name}}</p>
      </li>
  </div>
</template>
<script>
var firebase = require('../../firebase/firebase')
var db = firebase.db
export default {
  firebase: {
    beers: {
      source: db.ref('beers'),
      // Optional, allows you to handle any errors.
      cancelCallback(err) {
        console.error(err)
      }
    }
  },
  data() {
    return {
      naziv: '',
      pivara: '',
      zemlja: '',
      tip: '',
      beers: {}
    }
  },
  methods: {
    submitBeer() {
      this.$firebaseRefs.beers.push({ name: this.naziv, brewery: this.pivara, country: this.zemlja, type: this.tip })
      this.naziv = ''
      this.pivara = ''
      this.zemlja = ''
      this.tip = ''
    }
  }
}
</script>
<style>

</style>
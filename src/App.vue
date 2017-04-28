<template>
  <div id="app">
    <div class='loader' v-if='loading'>loading...</div>
    <cards v-if="!loading"></cards>
  </div>
</template>

<script>
import Cards from './components/Cards'

export default {
  name: 'app',
  computed: {
    loading () {
      return this.$store.state.loading
    }
  },
  beforeMount () {
    this.$store.dispatch('fetchfromApi')
  },
  components: {
    Cards
  }
}
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
  font-family: monospace;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  overflow-x: hidden;
}
</style>

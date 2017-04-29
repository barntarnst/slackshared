<template>
  <div id="app">
    <div class='loader' v-if='loading'>
      <div class='bar'></div>
    </div>
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
@keyframes loading {
    from { width: 0%; }
    to { width: 100%; }
}
.loader {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 99;
  background-color: #c22326;
}
.loader .bar {
  background-color: #fdb632;
  animation-name: loading;
  animation-duration: 2s;
  height: 100%;
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

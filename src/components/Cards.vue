<template>
  <div class="cards">
    <ol>
      <li> Links:</li>
      <li v-for='card in links'>{{ card }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'cards',
  data () {
    return {
      links: this.$store.state.links
    }
  },
  methods: {
    add: (self) => {
      self.$store.commit('fetchfromApi')
    }
  },
  beforeMount () {
    this.add(this)
  },
  watch: {
  },
  components: {
  }
}
</script>

<style>

</style>

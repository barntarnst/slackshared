<template>
  <div class="cards">
    <div class="cards-wrapper">
      <div v-for='card in links' class="card">
        <a :href='card.attachments[0].from_url' target="_blank">
          <img :src='card.attachments[0].image_url'>
        </a>
      </div>
    </div>
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
  mounted () {
  },
  watch: {
  },
  components: {
  }
}
</script>

<style>
.card {
  display: inline-block;
  padding-right: 20px;
  vertical-align: top;
}
.card img {
  width: 300px;
}
</style>

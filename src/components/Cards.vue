<template>
  <div class="cards">
    <div class="cards-wrapper">
      <div v-for='card in links' class="card">
        <a :href='card.attachments[0].from_url' target="_blank" :style="{ backgroundImage: 'url(' + card.attachments[0].image_url + ')' }">
          <div class='cell'>
            <div class='service'>{{card.attachments[0].service_name}}</div><br>
            <div class='title'>{{card.attachments[0].title}}</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cards',
  computed: {
    links () {
      return this.$store.state.links
    }
  },
  methods: {
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
  width: 100%;
}
.card a {
  display: table;
  width: 100%;
  height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-color: red;
  background-blend-mode: multiply;
  color: #fff;
  text-decoration: none;
}
.cell {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  padding: 30px;
}
.card .service {
  display: inline-block;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
}
.card .title {
  display: inline-block;
  font-size: 60px;
  max-width: 1100px;
  padding: 30px;
  line-height: 60px;
}
</style>

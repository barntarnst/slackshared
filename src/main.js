// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import App from './App'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    links: [1, 2, 3]
  },
  mutations: {
    add (state, link) {
      this.state.links.push(link)
    },
    fetchfromApi (state) {
      console.log(state.links)
      axios.get('http://localhost/shareshared/slackshare/shared')
        .then((response) => {
          state.links.push(response.data.messages)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})

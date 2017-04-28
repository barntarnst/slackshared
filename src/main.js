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
    links: [],
    loading: true
  },
  mutations: {
    add (state, link) {
      state.links.push(link)
    },
    loader (state, loading) {
      state.loading = loading
    }
  },
  actions: {
    fetchfromApi ({ commit }) {
      commit('loader', true)
      axios.get('http://localhost/shareshared/slackshare/shared')
        .then((response) => {
          for (var i = 0; i < response.data.length; i++) {
            console.log(response.data[i])
            commit('add', response.data[i])
          };
          commit('loader', false)
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

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './store.js'


Vue.use(MintUI)

new Vue({
  el: '#app',
  router:router,
  store:store,
  render: h => h(App)
})

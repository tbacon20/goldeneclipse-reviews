import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import products from './products.js'

let data = {
  products: products,
  cart: ["hello"],
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')

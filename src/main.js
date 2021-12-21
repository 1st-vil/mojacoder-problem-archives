require('dotenv').config();

import Vue from 'vue'
import App from './App.vue'

import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

console.log(process.env)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

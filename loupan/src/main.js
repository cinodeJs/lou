import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Gin from 'vue-resource'
import Dong from 'animate.css'

Vue.config.productionTip = false

Vue.use(Gin)
Vue.use(Dong)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

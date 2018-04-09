import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Qxlp from './views/Qxlp.vue'
import Lsdt from './views/Lsdt.vue'
import Lxwm from './views/Lxwm.vue'
import detail from './views/detail.vue'
import newsdetail from './views/newsdetail.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/qxlp/:fenlei',
      name: 'qxlp',
      component: Qxlp
    },
    {
      path: '/lsdt',
      name: 'lsdt',
      component: Lsdt
    },
    {
      path: '/lxwm',
      name: 'lxwm',
      component: Lxwm
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
    },
    {
      path: '/newsdetail/:id',
      name: 'newsdetail',
      component: newsdetail
    },
  ]
})

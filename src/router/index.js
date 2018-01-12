import Vue from 'vue'
import Router from 'vue-router'
import  comA from './components/a.vue'
import  comB from './components/b.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/a',
      name: 'comA',
      component: comA
    },
    {
      path: '/b',
      name: 'comB',
      component: comB
    }
  ]
})

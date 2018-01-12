import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from  'vue-router'
import IndexPage from './pages/index'
import VueResource from 'vue-resource'
import DetailPage from './pages/detail'
import forecastPage from './pages/detail/forecast'
import analysisPage from './pages/detail/analysis'
import publishPage from './pages/detail/publish'
import countPage from './pages/detail/count'



Vue.use(VueRouter)
Vue.use(VueResource)
let router=new VueRouter({
    mode:'history',
    routes:[
      {
        path:'/',
        component: IndexPage
      },
      {
        path:'/detail',
        component:DetailPage,
        children:[
          {
            path:'/detail/forecast',
            component:forecastPage,
          },
          {
            path:'/detail/analysis',
            component:analysisPage,
          },
          {
            path:'/detail/count',
            component:countPage,
          },
          {
            path:'/detail/publish',
            component:publishPage,
          }
        ]
      }

    ]
})
new Vue({
  el:'#app',
  render: h => h(Layout),
  router,
  // template:'<Layout/>',
  // components:{ Layout }


})







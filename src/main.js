import Vue from 'vue'
import App from './App.vue'


import VueRouter from 'vue-router'



import HomePage from './components/HomePage'
import MoviesDb from './components/MoviesDb'
import MovieDetail from './components/MovieDetail'
import axios from 'axios'
Vue.prototype.$http = axios
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {path: "/", component:HomePage},
    {path: "/movies", component:MoviesDb},
    {path:"/movies/:id", component:MovieDetail}

],
  mode:'history'
})

new Vue({
  render: h => h(App),router
}).$mount('#app')

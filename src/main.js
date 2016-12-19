// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import Dashboard from './components/Dashboard'
import Projects from './components/Projects'
import Activity from './components/Activity'
import Team from './components/Team'

Vue.use(VueRouter)

const routes = [
  { path: '/dashboard', component: Dashboard },
  { path: '/projects', component: Projects },
  { path: '/activity', component: Activity },
  { path: '/team', component: Team }
]

const router = new VueRouter({
  mode: 'history',
  routes // short for routes: routes
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})

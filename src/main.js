// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

// import '../node_modules/semantic-ui-css/semantic.min.css'
// import '../node_modules/semantic-ui-css/semantic.min.js'

import Dashboard from './components/Dashboard'
import Projects from './components/Projects'
import Activity from './components/Activity'
import Team from './components/Team'
import Account from './components/Account'
import Profile from './components/Profile'

Vue.use(VueRouter)

const routes = [
  { path: '/dashboard', component: Dashboard },
  { path: '/projects', component: Projects },
  { path: '/activity', component: Activity },
  { path: '/team', component: Team },
  { path: '/account', component: Account },
  { path: '/profile', component: Profile }
]

const router = new VueRouter({
  mode: 'history', // enable html5 mode
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

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import DashboardView from './components/DashboardView'
import ProjectsView from './components/ProjectsView'
import ActivityView from './components/ActivityView'
import TeamView from './components/TeamView'
import AccountView from './components/AccountView'
import ProfileView from './components/ProfileView'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: DashboardView },
  { path: '/projects', component: ProjectsView },
  { path: '/activity', component: ActivityView },
  { path: '/team', component: TeamView },
  { path: '/account', component: AccountView },
  { path: '/profile', component: ProfileView }
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

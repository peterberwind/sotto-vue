<template>
  <div id="app">
    <router-link to="/dashboard">Dashboard</router-link>
    <router-link to="/projects">Projects</router-link>
    <router-link to="/activity">Activity</router-link>
    <router-link to="/team">Team</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
// import Dashboard from './components/Dashboard'
// import Projects from './components/Projects'
// import Activity from './components/Activity'
// import Team from './components/Team'

export default {
  name: 'app',
  components: {
    // Dashboard,
    // Projects,
    // Activity,
    // Team
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div>
    <nav>
      <div class="ui inverted menu">
        <router-link class="item" to="/dashboard">Dashboard</router-link>
        <router-link class="item" to="/projects">Projects</router-link>
        <router-link class="item" to="/activity">Activity</router-link>
        <router-link class="item" to="/team">Team</router-link>
        <div class="ui simple dropdown item right">
          Account <i class="dropdown icon"></i>
          <div class="menu">
            <router-link class="item" to="/profile">My Profile</router-link>
            <router-link class="item" to="/account">Account Settings</router-link>
            <a class="item">Log Out</a>
          </div>
        </div>
      </div>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
/* TODO: Not sure what this code does? */
// import Navigation from './components/Navigation'
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
/*TODO: Make this more modular*/
@import '../node_modules/semantic-ui-css/semantic.min.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

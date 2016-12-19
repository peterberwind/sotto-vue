<template>
  <nav>
    <div class="ui menu">
      <router-link class="item" to="/dashboard">Sotto</router-link>
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
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {
      brand: 'Sotto'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

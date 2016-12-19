<template>
  <nav>
    <div class="ui inverted menu">
    <a href="#" class="header item">
      Sotto
    </a>
    <a href="#" class="item">Projects</a>
    <a href="#" class="item">Templates</a>
    <a href="#" class="item">Activity</a>
    <a href="#" class="item">Team</a>
    <div class="ui simple dropdown item right">
      Account <i class="dropdown icon"></i>
      <div class="menu">
        <a class="item">My Profile</a>
        <a class="item">Account Settings</a>
        <a class="item">Log Out</a>
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

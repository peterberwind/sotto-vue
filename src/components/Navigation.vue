<template>
  <nav class="navigation">
    <h1>{{ brand }}</h1>
    <ul>
      <li><a href="#">Projects</a></li>
      <li><a href="#">Activity</a></li>
      <li><a href="#">Team</a></li>
    </ul>
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

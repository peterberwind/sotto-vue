<template>
  <div class="projects">
    <h1>{{ msg }}</h1>
  </div>
</template>
<script>
export default {
  name: 'projects',
  data () {
    return {
      msg: 'Projects',
      clients: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.client__name {
  font-size: 1.6em;
}

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

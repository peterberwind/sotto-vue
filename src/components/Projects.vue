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

</style>

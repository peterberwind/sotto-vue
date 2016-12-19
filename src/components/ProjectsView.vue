<template>
  <div class="projects">
    <h1>{{ msg }}</h1>
    <ProjectItem></ProjectItem>
  </div>
</template>
<script>
import ProjectItem from './ProjectItem'

export default {
  name: 'projects',
  components: {
    'ProjectItem': ProjectItem
  },
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

<template>
  <div class="ui fluid segments grid client">
    <div class="row segment summary">
      <div class="column six wide">
        <p class="client__name">{{ clientName }}</p>
      </div>
      <div class="column three wide">
        <p class="client__open">12<br> Open Projects</p>
      </div>
      <div class="column three wide">
        <p class="client__closed">12<br> Closed Projects</p>
      </div>
      <div class="column three wide">
        <p class="client__sales">$52,034<br>Sales</p>
      </div>
      <div class="column one wide">
        <i class="dropdown icon client__toggle"></i>
      </div>
    </div>
    <div class="row segment project project">
      <div class="column six wide">
        <p class="project__name">{{ projectName }}</p>
      </div>
      <div class="column three wide">
        <p class="project__valid-date">{{ projectDate }}</p>
      </div>
      <div class="column three wide">
        <p class="project__budget">{{ projectBudget }}</p>
      </div>
      <div class="column three wide">
        <a class="ui green label project__status">{{ projectStatus }}</a>
      </div>
      <div class="column one wide">
        <a class="project__actions">Actions</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'projects',
  data () {
    return {
      clientName: 'Nike',
      projectName: 'Nike Shopify Site',
      projectDate: 'Oct 21, 2017',
      projectBudget: '$13,485',
      projectStatus: 'Accepted'
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

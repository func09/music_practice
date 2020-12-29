<template>
  <div id="app">
    <div class="ui inverted menu fixed">
      <router-link to="/" class="item">Home</router-link>
    </div>
    <div id="contents" class="ui container">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
#app #contents {
  margin-top: 60px;
}
</style>

<script>
export default {
  name: "App",
  computed: {
    menus() {
      return this.$router.options.routes;
    },
  },
};
</script>

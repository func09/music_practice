<template>
  <div class="Home">
    <ol class="">
      <template v-for="menu in menus">
        <li v-bind:key="menu.name">
          <router-link v-bind:to="menu.path" class="item">{{
            menu.name
          }}</router-link>
        </li>
      </template>
    </ol>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    menus() {
      return this.$router.options.routes;
    },
  },
};
</script>

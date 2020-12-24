<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
      integrity="sha512-8bHTC73gkZ7rZ7vpqUQThUDhqcNFyYi2xgDgPDHc+GXVGHXq+xPjynxIopALmOPqzo9JZj0k6OqqewdGO3EsrQ=="
      crossorigin="anonymous"
    />
    <div id="nav" class="ui container">
      <div class="ui grid">
        <!-- <div class="ui row">
          <div class="ui fluid tabular menu">
            <router-link to="/practice01" class="item">01</router-link>
          </div>
        </div> -->
        <div class="ui row">
          <router-view />
        </div>
        <div class="ui row">
          <a href="https://github.com/func09/music_practice">
            <i class="ui icon github"></i>func09/music_practice
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<template>
  <div id="app" class="ui container">
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <span
          class="navbar-brand mb-0 h1"
          data-bs-toggle="modal"
          data-bs-target="#menuModal"
        >
          <i class="fas fa-bars"></i>
        </span>
      </div>
    </nav>

    <div class="ui container">
      <router-view />
    </div>

    <footer class="ui container">
      <hr />
      <a href="https://github.com/func09/music_practice">
        <i class="fab fa-github-square"></i>func09/music_practice
      </a>
      <ul>
        <li>
          <router-link
            to="/practice01"
            class="item"
            @click.native="closeModal()"
            >Guitar Fret List</router-link
          >
        </li>
        <li>
          <router-link
            to="/practice02"
            class="item"
            @click.native="closeModal()"
            >Guitar Fret Board</router-link
          >
        </li>
        <li>
          <router-link
            to="/practice03"
            class="item"
            @click.native="closeModal()"
            >Tone Interval Table</router-link
          >
        </li>
        <li>
          <router-link
            to="/practice04"
            class="item"
            @click.native="closeModal()"
            >Scales</router-link
          >
        </li>
        <li>
          <router-link
            to="/practice05"
            class="item"
            @click.native="closeModal()"
            >Chords</router-link
          >
        </li>
        <li>
          <router-link
            to="/practice06"
            class="item"
            @click.native="closeModal()"
            >Interal Matrix</router-link
          >
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    closeModal: function() {
      // document.querySelector("menuModal").hide();
    },
  },
};
</script>

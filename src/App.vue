<template>
  <div id="app">
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

    <div id="menuModal" class="modal fade" tabindex="-1">
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Menu</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div class="modal-body">
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
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <router-view />
    </div>

    <div class="container-fluid">
      <a href="https://github.com/func09/music_practice">
        <i class="fab fa-github-square"></i>func09/music_practice
      </a>
    </div>
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

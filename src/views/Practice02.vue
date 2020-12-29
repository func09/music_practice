<template>
  <div class="Plactice01">
    <h1 class="ui header dividing">Guitar Fret Board</h1>
    <GuiterFretView v-bind="{ guitar: guitar, from: 0, to: 25 }" />
  </div>
</template>

<script>
import Vuex from "vuex";
import Guitar from "../models/Guitar";
import GuiterFretView from "../components/GuiterFretView";

const store = new Vuex.Store({
  state: {
    guitar: new Guitar(6, 25),
  },
  mutations: {
    changeGuitar(state) {
      state.guitar = new Guitar(6, 10);
    },
  },
});

export default {
  name: "Plactice02",
  store: store,
  methods: {
    onClick: function() {
      this.$store.commit("changeGuitar");
    },
  },
  computed: {
    guitar() {
      return this.$store.state.guitar;
    },
  },
  components: { GuiterFretView },
};
</script>

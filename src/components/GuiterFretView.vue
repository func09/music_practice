<template>
  <div>
    <table class="ui table celled fixed definition unstackable small conpact">
      <thead>
        <tr class="ui center aligned">
          <th></th>
          <th v-for="string in strings" v-bind:key="string">
            {{ string }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="ui center aligned" v-for="fret in frets" v-bind:key="fret">
          <td>{{ fret }}</td>
          <td
            v-for="string in strings"
            v-bind:key="string"
            v-on:click="onSelect(string, fret)"
            v-bind:class="{ positive: isSelected(string, fret) }"
          >
            {{ renderFret(string, fret) }}
            <div>{{ renderInterval(string, fret) }}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Vuex from "vuex";
import { Guiter } from "../models/Guitar";
import { Note, Interval } from "@tonaljs/tonal";

const store = new Vuex.Store({
  state: {
    selectedString: 5,
    selectedFret: 3,
  },
  mutations: {
    onSelect(state) {
      console.log(state);
      state;
    },
  },
});

export default {
  name: "GuiterFretView",
  store: store,
  props: {
    from: {
      type: Number,
      default: 0,
    },
    to: {
      type: Number,
      default: 6,
    },
    guitar: Guiter,
  },
  methods: {
    onSelect: function(string, fret) {
      if (this.isSelected(string, fret)) {
        this.$store.state.selectedString = null;
        this.$store.state.selectedFret = null;
      } else {
        this.$store.state.selectedString = string;
        this.$store.state.selectedFret = fret;
      }
      this.$store.commit("onSelect");
      this.$emit("selected");
    },
    isSelected: function(string, fret) {
      return (
        this.$store.state.selectedString == string &&
        this.$store.state.selectedFret == fret
      );
    },
    renderFret: function(x, y) {
      const fret = this.guitar.getFret(x, y);

      if (this.mode.mode == "onlyPitch") {
        return Note.pitchClass(fret.note);
      } else {
        return fret.note;
      }
    },
    renderInterval: function(x, y) {
      if (this.$store.state.selectedString && this.$store.state.selectedFret) {
        const fret = this.guitar.getFret(x, y);
        const otherFret = this.guitar.getFret(
          this.$store.state.selectedString,
          this.$store.state.selectedFret
        );
        const interval = Interval.distance(otherFret.note, fret.note);
        return `(${interval})`;
      } else {
        return "";
      }
    },
  },
  computed: {
    mode: function() {
      return {
        mode: "onlyPitch",
      };
    },
    frets: function() {
      return this.guitar.fretNos.slice(this.from, this.to);
    },
    strings: function() {
      return this.guitar.stringNos.slice().reverse();
    },
  },
};
</script>

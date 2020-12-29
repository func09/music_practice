<template>
  <div class="Plactice01">
    <h1 class="ui header dividing">Scales</h1>

    <section
      v-for="scaleName in scaleNames"
      v-bind:key="scaleName"
      class="ui segments"
    >
      <div class="ui segment">
        <h3 class="ui header">{{ scaleName }}</h3>
      </div>
      <div class="ui segment">
        <div class="ui four doubling cards fluid">
          <div
            class="ui card"
            v-for="scale in getScales(scaleName, notes)"
            v-bind:key="scale.name"
          >
            <div class="ui content">
              <div class="header">
                {{ pitchName(scale.tonic) }}
                {{ scale.type }}
              </div>
            </div>
            <table class="ui table celled attached unstackable small compact">
              <tbody>
                <tr
                  class="center aligned"
                  v-for="(interval, index) in scale.intervals"
                  v-bind:key="interval"
                >
                  <td>
                    <span
                      class="ui label"
                      v-bind:class="getBadgeStyle(interval)"
                    >
                      {{ interval }}
                    </span>
                  </td>
                  <td>
                    {{ simplifyNote(scale.notes[index]) }}
                  </td>
                </tr>
              </tbody>
            </table>
            <Player
              v-bind:score="getScore(scale)"
              class="large bottom attached"
            ></Player>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vuex from "vuex";
import { Note, Interval, Scale, Range } from "@tonaljs/tonal";
import Player from "../components/Player";

const store = new Vuex.Store({
  state: {
    notes: Range.chromatic(["C3", "B3"], { sharps: true }),
    scaleNames: [
      "pentatonic",
      "minor pentatonic",
      "minor #7M pentatonic",
      "blues",
      "harmonic minor",
      "spanish heptatonic",
      "minor six diminished",
      "dominant diminished",
    ],
  },
});

export default {
  name: "Plactice04",
  store: store,
  methods: {
    simplifyNote(note) {
      return Note.simplify(note);
    },
    pitchName(note) {
      return Note.pitchClass(note);
    },
    getScore: function(scale) {
      const notes = scale.notes.concat(scale.notes.slice().reverse());
      return notes.map((note) => {
        return { notes: [Note.simplify(note)], due: "4n" };
      });
    },
    getScales: function(scaleName, notes) {
      return notes
        .map((note) => {
          return Scale.get(`${note} ${scaleName}`);
        })
        .flat();
    },
    getBadgeStyle: (harmony) => {
      return {
        green: harmony.match(/p$/i),
        yellow: harmony.match(/(^[36])/i),
      };
    },
  },
  computed: {
    scaleNames: function() {
      return this.$store.state.scaleNames;
    },
    notes: function() {
      return this.$store.state.notes;
    },
  },
  components: {
    Player,
  },
};
</script>

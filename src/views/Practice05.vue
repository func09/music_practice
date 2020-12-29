<template>
  <div class="Plactice01">
    <h1 class="ui header dividing">Chords</h1>

    <section
      v-for="chordName in chordNames"
      v-bind:key="chordName"
      class="ui segments"
    >
      <div class="ui segment">
        <h3 class="ui header">{{ chordName }}</h3>
      </div>
      <div class="ui segment">
        <div class="ui six doubling cards fluid">
          <div
            class="ui card"
            v-for="chord in getChords(chordName, notes)"
            v-bind:key="chord.name"
          >
            <div class="ui content">
              <div class="header">
                {{ chord.symbol }}
              </div>
            </div>
            <table class="ui table celled attached unstackable small compact">
              <tbody>
                <tr
                  class="center aligned"
                  v-for="(interval, index) in chord.intervals"
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
                    {{ simplifyNote(chord.notes[index]) }}
                  </td>
                </tr>
              </tbody>
            </table>
            <Player
              v-bind:score="getScore(chord)"
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
import { Note, Interval, Scale, Chord, ChordType, Range } from "@tonaljs/tonal";
import Player from "../components/Player";

const store = new Vuex.Store({
  state: {
    notes: Range.chromatic(["C3", "B3"], { sharps: true }),
    chordNames: ["major", "major seventh", "minor", "minor seventh"],
  },
});

export default {
  name: "Plactice05",
  store: store,
  methods: {
    simplifyNote(note) {
      return Note.simplify(note);
    },
    pitchName(note) {
      return Note.pitchClass(note);
    },
    getScore: function(chord) {
      const notes = chord.notes.map((note) => {
        return Note.simplify(note);
      });
      return [{ notes: notes, due: "1n" }];
    },
    getChords: function(chordName, notes) {
      return notes
        .map((note) => {
          return Chord.getChord(chordName, note);
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
    chordNames: function() {
      return this.$store.state.chordNames;
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

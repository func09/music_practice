<template>
  <div class="Plactice01">
    <h1 class="ui header dividing">Chords</h1>
    <table class="ui table celled fixed definition unstackable">
      <thead>
        <tr class="center aligned">
          <th>Short Name</th>
          <th>Full Name</th>
          <th>Intervals</th>
          <th>Notes</th>
          <th>Tonic</th>
          <th>PLAY</th>
        </tr>
      </thead>
      <tbody v-for="item in items" v-bind:key="item.name">
        <tr class="center aligned">
          <td>{{ item.symbol }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.intervals.join(", ") }}</td>
          <td>{{ item.notes.join(", ") }}</td>
          <td>{{ item.tonic }}</td>
          <td><Player v-bind:score="getScore(item.notes)"></Player></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { Note, Interval, Scale, Chord, ChordType, Range } from "@tonaljs/tonal";
import Player from "../components/Player";

const defaultNotes = Range.chromatic(["C3", "B3"], { sharps: true });

const defaultChords = ["major", "major seventh", "minor", "minor seventh"];
const chords = defaultChords
  .map((name) => {
    return defaultNotes.map((note) => {
      return Chord.getChord(name, note);
    });
  })
  .flat();

const store = {
  state: {
    chords: chords,
  },
};

export default {
  name: "Plactice05",
  methods: {
    getScore: function(notes) {
      return [{ notes: notes, due: "4n" }];
    },
  },
  computed: {
    items: function() {
      return store.state.chords;
    },
  },
  components: {
    Player,
  },
};
</script>

<template>
  <div class="Plactice01">
    <h1 class="ui header dividing">Scales</h1>
    <table class="ui table celled fixed definition unstackable">
      <thead>
        <tr class="center aligned">
          <th>Name</th>
          <th>Intervals</th>
          <th>Notes</th>
          <th>PLAY</th>
        </tr>
      </thead>
      <tbody v-for="item in items" v-bind:key="item.name">
        <tr class="center aligned">
          <td>{{ item.name }}</td>
          <td>{{ item.intervals.join(", ") }}</td>
          <td>{{ item.notes.join(", ") }}</td>
          <td><Player v-bind:score="getScore(item)"></Player></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { Note, Interval, Scale, Range } from "@tonaljs/tonal";
import Player from "../components/Player";

const defaultScales = [
  "pentatonic",
  "minor pentatonic",
  "minor #7M pentatonic",
  "blues",
  "harmonic minor",
];
const defaultKey = "C4";
const defaultNotes = Range.chromatic(["C3", "C4"], { sharps: true });

const store = {
  state: {
    key: defaultKey,
    scales: defaultScales
      .map((scale) => {
        return defaultNotes.map((note) => {
          return Scale.get(`${note} ${scale}`);
        });
      })
      .flat(),
  },
};

export default {
  name: "Plactice04",
  methods: {
    getScore: function(scale) {
      return scale.notes.map((note) => {
        return { notes: [note], due: "4n" };
      });
    },
  },
  computed: {
    items: function() {
      return store.state.scales;
    },
  },
  components: {
    Player,
  },
};
</script>

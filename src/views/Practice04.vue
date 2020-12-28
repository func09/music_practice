<template>
  <div class="Plactice01">
    <h1>Scales</h1>
    <table class="table  table-striped table-bordered ">
      <thead>
        <tr>
          <th>Root</th>
          <th>Intervals</th>
          <th>Notes</th>
          <th>PLAY</th>
        </tr>
      </thead>
      <tbody v-for="item in items" v-bind:key="item.name">
        <tr>
          <td>{{ item.name }}</td>
          <td>{{ item.intervals }}</td>
          <td>{{ item.notes }}</td>
          <td><Player v-bind:score="getScore(item)"></Player></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { Note, Interval, Scale } from "@tonaljs/tonal";
import Player from "../components/Player";

const defaultScales = [
  "pentatonic",
  "minor pentatonic",
  "minor #7M pentatonic",
  "blues",
  "harmonic minor",
];
const defaultKey = "C4";
const defaultNotes = Scale.get("C4 chromatic").notes;

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

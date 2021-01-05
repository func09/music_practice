<template>
  <div class="Plactice01">
    <h1 class="ui header dividing">Scales</h1>
<<<<<<< Updated upstream
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
=======

    <table
      class="ui table celled small compact"
      v-for="scaleName in scaleNames"
      v-bind:key="scaleName"
    >
      <caption class="ui header">
        {{
          scaleName
        }}
      </caption>
      <thead>
        <tr
          class="ui center aligned"
          v-for="scale in getScales(scaleName, notes).slice(0, 1)"
          v-bind:key="scale.name"
        >
          <th v-for="interval in scale.intervals" v-bind:key="interval">
            <span class="ui label" v-bind:class="getBadgeStyle(interval)">
              {{ interval }}
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="ui center aligned"
          v-for="scale in getScales(scaleName, notes)"
          v-bind:key="scale.name"
        >
          <td
            v-for="(interval, index) in scale.intervals"
            v-bind:key="interval"
          >
            {{ pitchName(simplifyNote(scale.notes[index])) }}
          </td>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    key: defaultKey,
    scales: defaultScales
      .map((scale) => {
        return defaultNotes.map((note) => {
          return Scale.get(`${note} ${scale}`);
        });
      })
      .flat(),
=======
    notes: Range.chromatic(["C3", "B3"], { sharps: true }),
    scaleNames: [
      "major",
      "minor",
      "melodic minor",
      "harmonic minor",
      "pentatonic",
      "minor pentatonic",
      "minor #7M pentatonic",
      "blues",
      "spanish heptatonic",
      "minor six diminished",
      "dominant diminished",
    ],
>>>>>>> Stashed changes
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
  // components: {
  //   Player,
  // },
};
</script>

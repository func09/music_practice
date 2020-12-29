<template>
  <div class="Plactice01">
    <h1 class="ui header dividing">Guitar Fret Board</h1>
    <table class="ui table celled fixed definition unstackable">
      <thead>
        <tr class="ui center aligned">
          <th></th>
          <th v-for="string in strings" v-bind:key="string">
            {{ string + 1 }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="ui center aligned" v-for="fret in frets" v-bind:key="fret">
          <td>{{ fret }}</td>
          <td v-for="string in strings" v-bind:key="string">
            {{ transpose(string, fret) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { Note, Interval, Scale, Range } from "@tonaljs/tonal";
const fretSize = 21;
const tunings = ["E4", "B3", "G3", "D3", "A2", "E2"];

const store = {
  state: {
    tunings: tunings,
    fretSize: fretSize,
    strings: tunings
      .map((item, index) => {
        return index;
      })
      .reverse(),
    frets: [...Array(fretSize)].map((fret, fretNum) => {
      return fretNum;
    }),
    items: [...Array(fretSize)].map((fret, fretNum) => {
      return tunings.map((string, stringNum) => {
        return Note.get(
          Note.transpose(string, Interval.fromSemitones(fretNum))
        );
      });
    }),
  },
};

export default {
  name: "Plactice02",
  methods: {
    transpose: function(x, y) {
      const note = Note.get(store.state.tunings[x]);
      return Note.pitchClass(Note.transpose(note, Interval.fromSemitones(y)));
    },
  },
  computed: {
    items: () => {
      return store.state.items;
    },
    frets: () => {
      return store.state.frets;
    },
    strings: () => {
      return store.state.strings;
    },
  },
};
</script>

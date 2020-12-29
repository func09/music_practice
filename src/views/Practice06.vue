<template>
  <div class="Plactice01">
    <h1 class="ui header dividing">Interval Matrix</h1>
    <table class="ui table celled fixed definition unstackable">
      <thead>
        <tr class="center aligned">
          <th>Interval</th>
          <th>Count</th>
          <th v-for="note in notes" v-bind:key="note.name">{{ note.name }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in intervals" v-bind:key="i.name" class="center aligned">
          <td>{{ i.name }}</td>
          <td>{{ i.semitones }}</td>
          <td v-for="note in notes" v-bind:key="note.name">
            {{ transpose(note, i) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { Note, Interval, Scale, Range } from "@tonaljs/tonal";

const notes = Range.chromatic(["C3", "B3"], { sharps: true });
const store = {
  state: {
    intervals: Scale.get("C chromatic").intervals.map((i) => {
      return Interval.get(i);
    }),
    notes: notes.map((n) => {
      return Note.get(n);
    }),
  },
};

export default {
  name: "Plactice06",
  methods: {
    transpose: (note, interval) => {
      return Note.simplify(Note.transpose(note, interval));
    },
  },
  computed: {
    intervals: () => {
      return store.state.intervals;
    },
    notes: () => {
      return store.state.notes;
    },
  },
};
</script>

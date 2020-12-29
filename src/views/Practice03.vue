<template>
  <div class="Plactice01">
    <h1 class="ui haeder dividing">Intervals</h1>

    <section class="ui segment" v-for="note in notes" v-bind:key="note.name">
      <h2 class="ui header dividing">{{ getPitch(note.name) }}</h2>
      <table class="ui table celled unstackable definition small compact fixed">
        <thead>
          <tr class="center aligned">
            <th>Note</th>
            <th>Interval</th>
            <th>Count</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in intervals" v-bind:key="i.name" class="center aligned">
            <td>
              {{ transpose(note, i) }}
            </td>
            <td>
              <span class="ui label small" v-bind:class="getBadgeStyle(i.name)">
                {{ i.name }}
              </span>
            </td>
            <td>{{ i.semitones }}</td>
            <td>
              <Player v-bind:score="getScore(note, i)"></Player>
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- <table class="ui table celled fixed definition unstackable small compact">
      <thead>
        <tr class="center aligned">
          <th>Root</th>
          <th>Interval</th>
          <th>Note</th>
          <th>Semitone count</th>
          <th>Harmony</th>
          <th>PLAY</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" v-bind:key="item.name" class="center aligned">
          <td>{{ item.rootNote.name }}</td>
          <td>{{ item.interval.name }}</td>
          <td>{{ item.otherNote.name }}</td>
          <td>{{ item.interval.chroma }}</td>
          <td>
            <span class="ui label" v-bind:class="getBadgeStyle(item.harmony)">
              {{ item.harmony }}
            </span>
          </td>
          <td>
            <Player v-bind:score="getScore(item.notes)"></Player>
          </td>
        </tr>
      </tbody>
    </table> -->
  </div>
</template>

<script>
import Vuex from "vuex";
import { Note, Interval, Scale, Range } from "@tonaljs/tonal";
import Player from "../components/Player";

const store = new Vuex.Store({
  state: {
    selectedNote: "C3",
    intervals: Scale.get("C chromatic").intervals.map((i) => {
      return Interval.get(i);
    }),
    notes: Range.chromatic(["C3", "B3"], { sharps: true }).map((n) => {
      return Note.get(n);
    }),
  },
});

export default {
  name: "Plactice03",
  store: store,
  methods: {
    getScore: (note, i) => {
      return [{ due: "8n", notes: [note.name, Note.transpose(note.name, i)] }];
    },
    getPitch: (note) => {
      return Note.pitchClass(note);
    },
    transpose: (note, interval) => {
      return Note.pitchClass(Note.simplify(Note.transpose(note, interval)));
    },
    getBadgeStyle: (harmony) => {
      return {
        green: harmony.match(/p$/i),
        yellow: harmony.match(/(^[36])/i),
      };
    },
  },
  computed: {
    intervals() {
      return this.$store.state.intervals;
    },
    notes() {
      return this.$store.state.notes;
    },
  },
  components: {
    Player,
  },
};
</script>

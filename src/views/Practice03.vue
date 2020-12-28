<template>
  <div class="Plactice01">
    <h1>Intervals</h1>

    <section v-for="note in notes" v-bind:key="note">
      <h2>{{ note }}</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Root</th>
            <th>Interval</th>
            <th>Note</th>
            <th>Semitone size</th>
            <th>Harmony</th>
            <th>PLAY</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="intervalName in intervalNames" v-bind:key="intervalName">
            <td>{{ note }}</td>
            <td>{{ intervalName }}</td>
            <td>
              {{ getNewNote(note, intervalName) }}
            </td>
            <td>{{ getInterval(intervalName).size }}</td>
            <td>
              <span class="badge" v-bind:class="getBadgeStyle(intervalName)"
                >{{ getInterval(intervalName).harmonyType }}
              </span>
            </td>
            <td>
              <Player v-bind:score="bindScore(note, intervalName)"></Player>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import { Tone12, IntervalTypes } from "../constraints";
import { Interval } from "../core/Interval";
import * as Tone from "tone";
import Player from "../components/Player";

export default {
  name: "Plactice03",
  methods: {
    bindScore: function(note, intervalName) {
      const newNote = this.getNewNote(note, intervalName);
      return [{ notes: [note, newNote], due: "1n" }];
    },
    getBadgeStyle: function(intervalName) {
      const interval = Interval.parse(intervalName);
      return {
        "btn-success": interval.harmonyType == "perfect",
        "btn-warning": interval.harmonyType == "consonant",
        "btn-danger": interval.harmonyType == "dissonance",
      };
    },
    getNewNote: function(note, intervalName) {
      const interval = Interval.parse(intervalName);
      return Tone.Frequency(note)
        .transpose(interval.size)
        .toNote();
    },

    getInterval: function(intervalName) {
      return Interval.parse(intervalName);
    },
  },
  data: () => {
    return {
      intervalNames: Interval.Names,
      intervalTypes: IntervalTypes,
      tones: Tone12,
    };
  },
  components: {
    Player,
  },
  computed: {
    notes: () => {
      return Tone12.map((toneName) => {
        return `${toneName}4`;
      });
    },
  },
};
</script>

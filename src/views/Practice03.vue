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
              <button
                class="btn btn-primary btn-sm"
                v-on:click="playTones(note, intervalName)"
              >
                PLAY
              </button>
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

export default {
  name: "Plactice03",
  methods: {
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
    playTones: async function(note, intervalName) {
      await Tone.start();
      const now = Tone.now();
      const synth = new Tone.PolySynth().toDestination();
      const newNote = this.getNewNote(note, intervalName);
      synth.triggerAttackRelease([note, newNote], "4n", now);
    },
  },
  data: () => {
    return {
      intervalNames: Interval.Names,
      intervalTypes: IntervalTypes,
      tones: Tone12,
    };
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

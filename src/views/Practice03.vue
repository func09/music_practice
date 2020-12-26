<template>
  <div class="Plactice01">
    <h1>Tone Interval Table</h1>

    <section v-for="tone in tones" v-bind:key="tone">
      <h2>{{ tone }}</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Combination</th>
            <th>Interval</th>
            <th>PLAY</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="toneB in tones" v-bind:key="toneB">
            <td>{{ tone }} & {{ toneB }}</td>
            <td>
              {{ ratio(tone, toneB) }}
            </td>
            <td>
              <button
                class="btn btn-primary btn-sm"
                v-on:click="playTones(tone, toneB)"
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
import { Tone12 } from "../constraints";
import * as Tone from "tone";
export default {
  name: "Plactice03",
  methods: {
    ratio: (noteA, noteB) => {
      const freqA = Tone.Frequency(`${noteA}4`).toFrequency();
      const freqB = Tone.Frequency(`${noteB}4`).toFrequency();
      return freqB / freqA;
    },
    playTones: async function(noteA, noteB) {
      await Tone.start();
      const now = Tone.now();
      const synth = new Tone.PolySynth().toDestination();
      synth.triggerAttackRelease([`${noteA}4`, `${noteB}4`], "4n", now);
    },
  },
  data: () => {
    return {
      tones: Tone12,
    };
  },
};
</script>

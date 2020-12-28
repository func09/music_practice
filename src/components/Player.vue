<template>
  <button class="btn btn-primary btn-sm" v-on:click="playSound">
    <i class="fas fa-headphones-alt"></i>
  </button>
</template>

<script>
import * as Tone from "tone";

export default {
  props: ["score"],
  data: () => {
    return {
      message: "hi",
    };
  },
  methods: {
    playSound: async function() {
      await Tone.start();
      const synth = new Tone.PolySynth().toDestination();
      const seq = new Tone.Sequence((time, { notes, due }) => {
        synth.triggerAttackRelease(notes, due, time);
      }, this.score).start(Tone.now());
      seq.loop = false;

      if (Tone.Transport.state !== "started") {
        Tone.Transport.start();
      }
    },
  },
};
</script>

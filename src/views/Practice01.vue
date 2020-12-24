<template>
  <div class="Plactice01">
    <h1 class="ui header dividing">Guitar Frets List</h1>
    <p>
      Generate fret tones by tuning the open strings of a guitar.
    </p>
    <table class="ui table celled striped small compact fixed unstackable">
      <thead>
        <tr class="ui center aligned">
          <th>String No</th>
          <th>Fret No</th>
          <th>Note</th>
          <th>Hlz</th>
          <th>PLAY</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="ui center aligned"
          v-bind:key="fret.name"
          v-for="fret in guitar.frets"
        >
          <td>{{ fret.stringNo + 1 }}</td>
          <td>{{ fret.fretNo }}</td>
          <td>{{ fret.note }}</td>
          <td>{{ fret.frequency }}</td>
          <td>
            <button class="ui button icon" v-on:click="playNote(fret.note)">
              <i class="ui icon sound"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import * as Tone from "tone";
import Guitar from "../models/Guitar";
const guitar = new Guitar();
export default {
  name: "Plactice01",
  methods: {
    playNote: async function(note) {
      await Tone.start();
      const synth = new Tone.Synth().toDestination();
      console.log(note);
      synth.triggerAttackRelease(note, "4n");
    },
  },
  data: () => {
    return {
      guitar: guitar,
    };
  },
};
</script>

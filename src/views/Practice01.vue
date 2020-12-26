<template>
  <div class="Plactice01">
    <h1>Guitar Fret List</h1>
    <p class="lead">
      Generate fret tones by tuning the open strings of a guitar.
    </p>
    <table class="table table-dark table-striped table-bordered table-sm">
      <thead>
        <tr class="text-center">
          <th>String No</th>
          <th>Fret No</th>
          <th>Note</th>
          <th>Hlz</th>
          <th>PLAY</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="text-center"
          v-bind:key="fret.name"
          v-for="fret in guitar.frets"
        >
          <td>{{ fret.stringNo + 1 }}</td>
          <td>{{ fret.fretNo }}</td>
          <td>{{ fret.note }}</td>
          <td>{{ fret.frequency }}</td>
          <td>
            <button
              class="btn btn-secondary btn-sm"
              v-on:click="playNote(fret.note)"
            >
              <i class="fas fa-headphones-alt"></i> PLAY
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

<template>
  <div class="Plactice01">
    <h1 class="ui header dividing">Notes</h1>
    <table class="ui table celled fixed definition unstackable small compact">
      <thead>
        <tr class="ui center aligned">
          <th></th>
          <th>Hlz</th>
          <th>PLAY</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="ui center aligned"
          v-bind:key="note.name"
          v-for="note in notes"
        >
          <td>{{ note.name }}</td>
          <td>{{ note.freq }}</td>
          <td>
            <Player v-bind:score="bindScore(note)"></Player>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { Note, Range } from "@tonaljs/tonal";

import Player from "../components/Player";

const store = {
  state: {
    notes: Range.chromatic(["C3", "C6"], { sharps: true }).map((n) => {
      return Note.get(n);
    }),
  },
};

export default {
  name: "Plactice01",
  methods: {
    bindScore: function(note) {
      return [{ notes: [note.name], due: "8n" }];
    },
  },
  computed: {
    notes: () => {
      return store.state.notes;
    },
  },
  components: {
    Player,
  },
};
</script>

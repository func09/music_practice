<template>
  <div class="Plactice01">
    <h1 class="ui haeder dividing">Intervals</h1>
    <table class="ui table celled fixed definition unstackable">
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
    </table>
  </div>
</template>

<script>
import { Note, Interval, Scale, Range } from "@tonaljs/tonal";
import Player from "../components/Player";

const scale = Scale.get("C4 chromatic");
const notes = Range.chromatic(["C3", "C4"], { sharps: true });

export default {
  name: "Plactice03",
  methods: {
    getBadgeStyle: (harmony) => {
      return {
        green: harmony.match(/^p/i),
        yellow: harmony.match(/^c/i),
        red: harmony.match(/^d/i),
      };
    },
    getScore: (notes) => {
      return [
        {
          notes: notes.map((n) => {
            return n.name;
          }),
          due: "1n",
        },
      ];
    },
  },
  computed: {
    items: function() {
      const _items = [];
      for (const note of notes) {
        for (const interval of scale.intervals) {
          const n = Note.get(note);
          const o = Note.get(Note.transpose(n, interval));
          const i = Interval.get(interval);
          let h = "";
          switch (true) {
            case /[356](d|m|M)/.test(i.name):
              h = "Consonant";
              break;
            case /[1458](P)/.test(i.name):
              h = "Perfect";
              break;
            default:
              h = "Dissonance";
              break;
          }

          _items.push({
            name: `${note}:${interval}`,
            rootNote: n,
            otherNote: o,
            interval: i,
            notes: [n, o],
            harmony: h,
          });
        }
      }
      return _items;
    },
  },
  components: {
    Player,
  },
};
</script>

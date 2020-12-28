<template>
  <div class="Plactice01">
    <h1>Intervals</h1>

    <table class="table">
      <thead>
        <tr>
          <th>Root</th>
          <th>Interval</th>
          <th>Note</th>
          <th>Semitone count</th>
          <th>Harmony</th>
          <th>PLAY</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" v-bind:key="item.name">
          <td>{{ item.rootNote.name }}</td>
          <td>{{ item.interval.name }}</td>
          <td>{{ item.otherNote.name }}</td>
          <td>{{ item.interval.chroma }}</td>
          <td>
            <span class="badge" v-bind:class="getBadgeStyle(item.harmony)">
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
import { Note, Interval, Scale } from "@tonaljs/tonal";
import Player from "../components/Player";
const scale = Scale.get("C4 chromatic");
export default {
  name: "Plactice03",
  methods: {
    getBadgeStyle: (harmony) => {
      return {
        "btn-success": harmony.match(/^p/i),
        "btn-warning": harmony.match(/^c/i),
        "btn-danger": harmony.match(/^d/i),
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
    items: () => {
      const _items = [];
      for (const note of scale.notes) {
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

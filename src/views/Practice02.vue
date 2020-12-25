<template>
  <div class="Plactice01">
    <h1 class="ui header dividing">Guitar Fret Board</h1>
    <table
      class="ui table celled striped small compact fixed unstackable definition"
    >
      <thead>
        <tr class="ui center aligned">
          <th></th>
          <th
            v-for="stringNum in guitar.stringNos.reverse()"
            v-bind:key="stringNum"
          >
            {{ stringNum + 1 }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="ui center aligned"
          v-for="fretNum in guitar.fretNos"
          v-bind:key="fretNum"
        >
          <td>{{ fretNum }}</td>
          <td v-for="stringNum in guitar.stringNos" v-bind:key="stringNum">
            {{ guitar.getFret(stringNum, fretNum).note }}
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
  name: "Plactice02",
  data: () => {
    return {
      guitar: guitar,
    };
  },
};
</script>

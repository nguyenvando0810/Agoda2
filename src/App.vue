<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <ResultHotel></ResultHotel>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import HeaderComponent from './components/header/header.component.vue';

import ResultHotel from './components/result-hotel/result-hotel.component.vue';

@Component({
  components: {
    HeaderComponent,
    ResultHotel,
  },
})
export default class App extends Vue {}
</script>

<style lang='scss'>
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

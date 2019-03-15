<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <FilterListComponent></FilterListComponent>
    <!-- <SortListComponent></SortListComponent> -->
    <ResultHotelComponent></ResultHotelComponent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import HeaderComponent from './components/header/header.component.vue';

import ResultHotelComponent from './components/result-hotel/result-hotel.component.vue';

import FilterListComponent from './components/filter-list/filter-list.component.vue';

// import SortListComponent from "./components/sort-list/sort-list.component.vue";

@Component({
  components: {
    HeaderComponent,
    FilterListComponent,
    ResultHotelComponent,
    // SortListComponent
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

<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <div class="container">
      <FilterListComponent></FilterListComponent>
      <!-- <SortListComponent></SortListComponent> -->
      <HotelWrapperComponent></HotelWrapperComponent>
      <!-- <ResultHotelComponent></ResultHotelComponent> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import HeaderComponent from "./components/header/header.component.vue";

// import ResultHotelComponent from './components/result-hotel/result-hotel.component.vue';

import FilterListComponent from "./components/filter-list/filter-list.component.vue";

import HotelWrapperComponent from "./components/hotel-wrapper/hotel-wrapper.component.vue";

@Component({
  components: {
    HeaderComponent,
    FilterListComponent,
    // ResultHotelComponent,
    HotelWrapperComponent
    // SortListComponent
  }
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

<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <TabComponent></TabComponent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import HeaderComponent from "./components/header/header.component.vue";

import TabComponent from "./components/tab/tab.component.vue";

@Component({
  components: {
    HeaderComponent,
    TabComponent
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

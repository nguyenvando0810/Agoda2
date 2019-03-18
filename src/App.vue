<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <router-view></router-view>
    <footerComponent></footerComponent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeaderComponent from "./components/header/header.component.vue";
import footerComponent from "./components/footer/footer.component.vue";

import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

@Component({
  components: {
    HeaderComponent,
    footerComponent
  }
})
export default class App extends Vue {}
</script>
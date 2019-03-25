<template>
  <div class="no-result">
    <img src="@/assets/not-found.jpg" alt>
    <p>Sorry, we coundn't find any result matching. Please try again.</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "./no-result.component.scss";

@Component
export default class NoResult extends Vue {}
</script>
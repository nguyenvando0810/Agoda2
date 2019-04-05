<template>
  <div class="pl-result">
    <div class="pl-result__image">
      <div class="image animation"></div>
      <div class="image-box">
        <div class="image-item animation" v-for="(item,index) in 10" :key="index"></div>
      </div>
    </div>
    <div class="pl-result__detail">
      <div class="pl-result__detail-name animation"></div>
      <div class="pl-result__detail-location">
        <span class="animation"></span>
        <span class="animation"></span>
      </div>

      <div class="pl-result__detail-star">
        <span class="animation"></span>
        <span class="animation"></span>
      </div>

      <div class="pl-result__detail-discount animation"></div>
    </div>
    <div class="pl-result__price">
      <div class="pl-result__price-score">
        <span class="animation"></span>
      </div>

      <div class="old-price">
        <span class="animation"></span>
      </div>

      <div class="pl-result__price-ribbon">
        <span class="animation"></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "./pl-result-hotel.component.scss";

@Component
export default class PlResultHotel extends Vue {}
</script>

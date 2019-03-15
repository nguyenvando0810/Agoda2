<template>
  <div class="hotel-wrapper">
    <div class="hotel-slidebar">fff</div>
    <div class="hotel-content">
      <SortListComponent></SortListComponent>
      <ResultHotelComponent></ResultHotelComponent>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import "./hotel-wrapper.component.scss";
import SortListComponent from "../sort-list/sort-list.component.vue";
import ResultHotelComponent from "../result-hotel/result-hotel.component.vue";

import { EventBus } from "@/eventBus";

@Component({
  components: {
    ResultHotelComponent,
    SortListComponent
  }
})
export default class HotelWrapperComponent extends Vue {}
</script>
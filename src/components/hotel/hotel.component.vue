<template>
  <div class="hotel">
    <FilterListComponent></FilterListComponent>
    <div class="hotel-wrapper">
      <div class="hotel-slidebar">fff</div>
      <div class="hotel-content">
        <SortListComponent></SortListComponent>
        <ResultHotelComponent></ResultHotelComponent>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import "./hotel.component.scss";
import SortListComponent from "./sort-list/sort-list.component.vue";
import ResultHotelComponent from "./result-hotel/result-hotel.component.vue";
import FilterListComponent from "./filter-list/filter-list.component.vue";

import { EventBus } from "@/eventBus";

@Component({
  components: {
    ResultHotelComponent,
    SortListComponent,
    FilterListComponent
  }
})
export default class HotelComponent extends Vue {}
</script>
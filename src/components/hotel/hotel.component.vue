<template>
  <div class="hotel">
    <SearchListComponent></SearchListComponent>
    <FilterListComponent></FilterListComponent>
    <div class="hotel-wrapper">
      <div class="hotel-slidebar">
        <SlidebarComponent></SlidebarComponent>
      </div>
      <div class="hotel-content">
        <div class="hotel-content__banner"></div>
        <SortListComponent></SortListComponent>
        <ResultHotelComponent></ResultHotelComponent>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch } from "vue-property-decorator";
import "./hotel.component.scss";
import SortListComponent from "./sort-list/sort-list.component.vue";
import ResultHotelComponent from "./result-hotel/result-hotel.component.vue";
import FilterListComponent from "./filter-list/filter-list.component.vue";
import SearchListComponent from "./search-list/search-list.component.vue";
import SlidebarComponent from "./slide-bar/slide-bar.component.vue";
import { EventBus } from "@/eventBus";

@Component({
  components: {
    ResultHotelComponent,
    SortListComponent,
    FilterListComponent,
    SearchListComponent,
    SlidebarComponent
  }
})
export default class HotelComponent extends Vue {
  // conditions: any = {};
  // currentTab: string = "";
  // created() {
  //   EventBus.$on("currentTab", (currentTab: string) => {
  //     this.currentTab = currentTab
  //     this.conditions.conditionTabName = this.currentTab;
  //   });
  // }
  // @Watch("currentTab")
  // checkConditions() {
  //   EventBus.$emit('conditionsChange', this.conditions)
  // }
}
</script>
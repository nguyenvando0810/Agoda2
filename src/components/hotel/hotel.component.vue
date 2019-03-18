<template>
  <div class="hotel">
    <FilterListComponent></FilterListComponent>
    <div class="container">
      <FilterTabComponent></FilterTabComponent>
      <div class="hotel-wrapper">
        <div class="hotel-slidebar">
          <SlidebarComponent></SlidebarComponent>
        </div>
        <div class="hotel-content">
          <div class="hotel-content__banner"></div>
          <SortListComponent></SortListComponent>
          <ResultHotelComponent :dataDisplay="dataDisplay"></ResultHotelComponent>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch } from "vue-property-decorator";
import SortListComponent from "./sort-list/sort-list.component.vue";
import ResultHotelComponent from "./result-hotel/result-hotel.component.vue";
import FilterTabComponent from "./filter-tab/filter-tab.component.vue";
import FilterListComponent from "./filter-list/filter-list.component.vue";
import SlidebarComponent from "./slide-bar/slide-bar.component.vue";
import "./hotel.component.scss";

import axios from "axios";
import { EventBus } from "@/eventBus";

@Component({
  components: {
    ResultHotelComponent,
    SortListComponent,
    FilterTabComponent,
    FilterListComponent,
    SlidebarComponent
  }
})
export default class HotelComponent extends Vue {
  originData: any = {};
  dataDisplay: Array<any> = [];

  created() {
    this.getData();

    EventBus.$on("searchValue", (searchValue: any) => {
      this.dataDisplay = this.getDataSearch(searchValue);
    });

    EventBus.$on("isBreakfast", (isBreakfast: any) => {
      this.dataDisplay = this.getDataBreakfast(isBreakfast);
      console.log(this.dataDisplay);
    });
  }

  public getDataSearch(valueSearch: any) {
    return this.originData.ResultList.filter((data: any) => {
      if (valueSearch) {
        return data.HotelDisplayName.toLowerCase().includes(
          valueSearch.toLowerCase()
        );
      } else return this.originData.ResultList;
    });
  }

  public getDataBreakfast(isBreakfast: any) {
    return this.originData.ResultList.filter((breakfast: any) => {
      if (isBreakfast === true) {
        return breakfast.IsBreakfastIncluded === true;
      } else return this.originData.ResultList;
    });
  }

  public async getData() {
    const response = await axios.get("https://demo0535107.mockable.io/agoda");
    this.originData = response.data;
    this.dataDisplay = this.originData.ResultList;
  }
}
</script>
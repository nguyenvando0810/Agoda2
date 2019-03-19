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
  public originData: any = {};
  public dataDisplay: any[] = [];
  public dataSort: Array<any> = [];
  // public conditionFilter: Array<any> = [];

  public created() {
    this.getData();

    EventBus.$on("searchValue", (searchValue: any) => {
      this.dataDisplay = this.getDataSearch(searchValue);
    });

    EventBus.$on("isBreakfast", (isBreakfast: any) => {
      this.dataDisplay = this.getDataBreakfast(isBreakfast);
    });

    EventBus.$on("currentTab", (currentTab: any) => {
      this.dataDisplay = this.getDataTab(currentTab);
    });

    EventBus.$on("sortCondition", (sortCondition: any) => {
      this.sortData(sortCondition);
    });

    EventBus.$on("conditionStar", this.filterData);

    EventBus.$on("conditionArea", (conditionArea: any) => {
      console.log(conditionArea);
    });
  }

  filterData(condition: any) {
    function checkFilter(this: any, elment: any) {
      return this.filterStar(condition, elment.StarRating);
    }

    this.dataDisplay = this.originData.ResultList.filter(checkFilter.bind(this));
  }

  filterStar(conditionStar: any, star: any) {
    for (var item of conditionStar) {
      if (item == Math.round(star)) {
        console.log("log ra 1 cais gi day");
        return true;
      }
      return false;
    }
    return true;
  }

  public getDataSearch(valueSearch: any) {
    return this.originData.ResultList.filter((data: any) => {
      if (valueSearch) {
        return data.HotelDisplayName.toLowerCase().includes(
          valueSearch.toLowerCase()
        );
      } else {
        return this.originData.ResultList;
      }
    });
  }

  public getDataTab(currentTab: any) {
    if (currentTab === "tabAll") return this.originData.ResultList;

    return this.originData.ResultList.filter((item: any) => {
      if (currentTab === "tabHotel") {
        return item.AccommodationType === "Khách sạn";
      }
      if (currentTab === "tabAgoda") {
        return item.AgodaHomesText === "Agoda Homes";
      }
    });
  }

  public getDataBreakfast(isBreakfast: any) {
    return this.originData.ResultList.filter((breakfast: any) => {
      if (isBreakfast === true) {
        return breakfast.IsBreakfastIncluded === true;
      } else {
        return this.originData.ResultList;
      }
    });
  }

  public sortData(currentSort: any) {
    if (currentSort === "priceLow") {
      this.dataDisplay.sort((a, b) => {
        return (
          a.PricePopupViewModel.roomPricePerNightAmount -
          b.PricePopupViewModel.roomPricePerNightAmount
        );
      });
    } else if (currentSort === "recomment") {
      this.dataDisplay.sort((a, b) => {
        return b.ReviewScore - a.ReviewScore;
      });
    } else return true;
  }

  public async getData() {
    const response = await axios.get("https://demo0535107.mockable.io/agoda");
    this.originData = response.data;
    this.dataDisplay = this.originData.ResultList;
  }
}
</script>
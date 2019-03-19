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
  public allData: any = {};
  public dataDisplay: any[] = [];
  public dataSort: Array<any> = [];
  public conditionFilter: object = {};

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

    EventBus.$on("conditionArea", this.filterData);
  }

  filterData(condition: any) {
    function checkFilter(this: any, elment: any) {
      return (
        this.filterStar(condition, elment.StarRating) &&
        this.filterArea(condition, elment.AreaId)
      );
    }

    this.dataDisplay = this.allData.ResultList.filter(checkFilter.bind(this));
  }

  filterStar(conditionStar: any, star: any) {
    if (!conditionStar || !conditionStar.length) {
      return true;
    }

    for (let i = 0; i < conditionStar.length; i++) {
      if (conditionStar[i] === Math.round(star)) {
        return true;
      }
    }
    return false;
  }

  filterArea(conditionArea: any, areaId: number) {
    console.log(conditionArea, areaId);

    if (!conditionArea || !conditionArea.length) {
      return true;
    }

    for (let i = 0; i < conditionArea.length; i++) {
      if (conditionArea[i] === areaId) {
        return true;
      }
    }
    return false;
  }

  public getDataSearch(valueSearch: any) {
    return this.allData.ResultList.filter((data: any) => {
      if (valueSearch) {
        return data.HotelDisplayName.toLowerCase().includes(
          valueSearch.toLowerCase()
        );
      } else {
        return this.allData.ResultList;
      }
    });
  }

  public getDataTab(currentTab: any) {
    if (currentTab === "tabAll") return this.allData.ResultList;

    return this.allData.ResultList.filter((item: any) => {
      if (currentTab === "tabHotel") {
        return item.AccommodationType === "Khách sạn";
      }
      if (currentTab === "tabAgoda") {
        return item.AgodaHomesText === "Agoda Homes";
      }
    });
  }

  public getDataBreakfast(isBreakfast: any) {
    return this.allData.ResultList.filter((breakfast: any) => {
      if (isBreakfast === true) {
        return breakfast.IsBreakfastIncluded === true;
      } else {
        return this.allData.ResultList;
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
    this.allData = response.data;
    this.dataDisplay = this.allData.ResultList;
  }
}
</script>